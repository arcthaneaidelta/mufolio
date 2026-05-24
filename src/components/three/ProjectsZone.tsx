"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ProjectsZone() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const speedMult = delta * 60;

    // Slow organic float movement of project panels
    groupRef.current.position.y = Math.sin(time * 0.35) * 0.12;
    groupRef.current.rotation.y = Math.cos(time * 0.18) * 0.04;
  });

  return (
    <group ref={groupRef} position={[0, 0, -32]}>
      {/* 3 Holographic frosted glass display panels floating at Z-depths */}
      
      {/* Left Top Panel */}
      <mesh position={[-2.0, 0.9, -1]} rotation={[0.08, 0.18, -0.04]}>
        <boxGeometry args={[2.0, 1.2, 0.03]} />
        <meshPhysicalMaterial
          transmission={0.85}
          roughness={0.15}
          color="#e5e7eb"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>

      {/* Right Mid Panel */}
      <mesh position={[2.0, -0.6, -2]} rotation={[-0.08, -0.18, 0.04]}>
        <boxGeometry args={[2.0, 1.2, 0.03]} />
        <meshPhysicalMaterial
          transmission={0.85}
          roughness={0.15}
          color="#d1d5db"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>

      {/* Left Bottom Panel */}
      <mesh position={[-0.8, -1.8, -3.5]} rotation={[0.04, 0.08, 0.02]}>
        <boxGeometry args={[2.2, 1.3, 0.03]} />
        <meshPhysicalMaterial
          transmission={0.85}
          roughness={0.15}
          color="#a1a1aa"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
export default ProjectsZone;
