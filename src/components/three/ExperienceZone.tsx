"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ExperienceZone() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const speedMult = delta * 60;
    
    // Slow physical rotation of nodes
    groupRef.current.rotation.y = time * 0.06;
  });

  return (
    <group ref={groupRef} position={[0, 0, -16]}>
      {/* Central timeline structural pillar (long, thin cylindrical bar) */}
      <mesh position={[0, 0, -2]}>
        <cylinderGeometry args={[0.015, 0.015, 6.5, 6]} />
        <meshStandardMaterial color="#3f3f46" opacity={0.4} transparent />
      </mesh>

      {/* Node 1: Nixxe Solutions (Z-depth bottom-level milestone) */}
      <group position={[0, -2, -2]}>
        <mesh>
          <torusGeometry args={[0.35, 0.04, 6, 20]} />
          <meshStandardMaterial color="#a1a1aa" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
      </group>

      {/* Node 2: Techman Solutions (Mid-level milestone) */}
      <group position={[0, 0, -2]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.4, 0.04, 6, 20]} />
          <meshStandardMaterial color="#a1a1aa" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
      </group>

      {/* Node 3: Arcthane AI (Top-level milestone) */}
      <group position={[0, 2, -2]}>
        <mesh rotation={[0.5, 0.5, 0]}>
          <torusGeometry args={[0.45, 0.04, 6, 20]} />
          <meshStandardMaterial color="#a1a1aa" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
      </group>
    </group>
  );
}
export default ExperienceZone;
