"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AboutZone() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const speedMult = delta * 60;
    
    // Slow structural yaw rotation
    groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.15;
    groupRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, 0, -8]}>
      {/* Central structural tech wireframe representing code architecture */}
      <mesh position={[0, 0, -2]}>
        <torusKnotGeometry args={[1.6, 0.35, 60, 6, 3, 4]} />
        <meshStandardMaterial
          color="#52525b"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Floating abstract physical layers (frosted glass cylinder disks) */}
      <mesh position={[-2.2, 1, -1]} rotation={[0.4, 0.2, 0.1]}>
        <cylinderGeometry args={[1.1, 1.1, 0.04, 24]} />
        <meshPhysicalMaterial
          transmission={0.9}
          roughness={0.15}
          color="#d1d5db"
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </mesh>

      <mesh position={[2.2, -1.2, -3]} rotation={[-0.3, -0.4, 0.2]}>
        <cylinderGeometry args={[0.9, 0.9, 0.04, 24]} />
        <meshPhysicalMaterial
          transmission={0.9}
          roughness={0.15}
          color="#a1a1aa"
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
export default AboutZone;
