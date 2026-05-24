"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export function SkillsZone() {
  const groupRef = useRef<THREE.Group>(null);

  // Define nodes relative to [0, 0, -24]
  const nodes = useMemo(() => [
    { pos: [0, 0, 0], size: 0.35, type: "metal" }, // Central core node
    { pos: [1.3, 0.8, -0.5], size: 0.22, type: "glass" },
    { pos: [-1.3, -0.8, 0.5], size: 0.22, type: "glass" },
    { pos: [0.9, -1.1, -0.8], size: 0.18, type: "metal" },
    { pos: [-0.9, 1.1, 0.8], size: 0.18, type: "metal" },
    { pos: [1.6, -0.3, 0.6], size: 0.2, type: "glass" },
    { pos: [-1.6, 0.3, -0.6], size: 0.2, type: "glass" },
    { pos: [0.2, 1.5, -0.3], size: 0.18, type: "metal" },
    { pos: [-0.2, -1.5, 0.3], size: 0.18, type: "metal" },
  ], []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const speedMult = delta * 60;

    // Slow physical rotation of constellation universe
    groupRef.current.rotation.y = time * 0.07;
    groupRef.current.rotation.x = Math.sin(time * 0.04) * 0.08;

    // Pulsate scales of the spheres for organic breathing motion
    const children = groupRef.current.children;
    let nodeIndex = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof THREE.Mesh && child.geometry instanceof THREE.SphereGeometry) {
        const scale = 1 + Math.sin(time * 1.4 + nodeIndex * 0.5) * 0.06;
        child.scale.set(scale, scale, scale);
        nodeIndex++;
      }
    }
  });

  // Calculate lines between nodes
  const lineConnections = useMemo(() => {
    const lines = [];
    const core = [0, 0, 0];
    
    // Connect Core to all outer nodes
    for (let i = 1; i < nodes.length; i++) {
      lines.push({ start: core, end: nodes[i].pos });
    }

    // Connect some outer nodes to each other to make a complete network
    lines.push({ start: nodes[1].pos, end: nodes[5].pos });
    lines.push({ start: nodes[2].pos, end: nodes[6].pos });
    lines.push({ start: nodes[4].pos, end: nodes[7].pos });
    lines.push({ start: nodes[3].pos, end: nodes[8].pos });

    return lines;
  }, [nodes]);

  return (
    <group ref={groupRef} position={[0, 0, -24]}>
      {/* Skill Sphere meshes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos as [number, number, number]}>
          <sphereGeometry args={[node.size, 14, 14]} /> {/* optimized geometry segments */}
          {node.type === "glass" ? (
            <meshPhysicalMaterial
              transmission={0.8}
              roughness={0.18}
              color="#e5e7eb"
              transparent
              opacity={0.25}
              depthWrite={false}
            />
          ) : (
            <meshStandardMaterial
              color="#a1a1aa"
              metalness={0.92}
              roughness={0.22}
            />
          )}
        </mesh>
      ))}

      {/* Optimized connection lines between spheres */}
      {lineConnections.map((conn, i) => (
        <Line
          key={i}
          points={[conn.start as [number, number, number], conn.end as [number, number, number]]}
          color="#3f3f46"
          lineWidth={0.75}
          transparent
          opacity={0.25}
        />
      ))}
    </group>
  );
}
export default SkillsZone;
