"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ContactZone() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const speedMult = delta * 60;

    // Slow physical rotation
    meshRef.current.rotation.y = time * 0.08;
    meshRef.current.rotation.x = Math.sin(time * 0.15) * 0.05;
    
    // Settle float
    meshRef.current.position.y = Math.sin(time * 0.25) * 0.15;
  });

  return (
    <group position={[0, 0, -40]}>
      {/* Premium floating glass tetrahedron/prism representing arrival */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <coneGeometry args={[1.2, 2.2, 4]} />
        <meshPhysicalMaterial
          transmission={0.9}
          roughness={0.12}
          color="#ffffff"
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
export default ContactZone;
