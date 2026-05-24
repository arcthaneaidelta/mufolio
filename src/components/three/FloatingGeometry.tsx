"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

interface FloatingGeometryProps {
  position: [number, number, number];
  speed?: number;
  shape?: "torus" | "octahedron" | "icosahedron" | "box" | "sphere";
  materialType?: "metal" | "glass";
  size?: number;
}

export function FloatingGeometry({
  position,
  speed = 1,
  shape = "icosahedron",
  materialType = "metal",
  size = 1,
}: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  // Floating offset animation seed
  const randomOffset = useRef(Math.random() * 100);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Smooth frame-rate independent calculation
    const time = state.clock.getElapsedTime() * speed;
    const speedMult = delta * 60;

    // Base physics-like slow rotations
    meshRef.current.rotation.x += 0.003 * speedMult;
    meshRef.current.rotation.y += 0.002 * speedMult;
    
    // Float drift (sine/cosine translation)
    meshRef.current.position.y = position[1] + Math.sin(time * 0.4 + randomOffset.current) * 0.25;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.3 + randomOffset.current) * 0.15;

    // React slightly to mouse coordinates (inertial rotation push)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x, 
      meshRef.current.rotation.x + mouse.y * 0.05, 
      0.05 * speedMult
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y, 
      meshRef.current.rotation.y + mouse.x * 0.05, 
      0.05 * speedMult
    );
  });

  const getGeometry = () => {
    switch (shape) {
      case "torus":
        return <torusGeometry args={[size * 0.55, size * 0.2, 12, 36]} />;
      case "octahedron":
        return <octahedronGeometry args={[size]} />;
      case "box":
        return <boxGeometry args={[size, size, size]} />;
      case "sphere":
        return <sphereGeometry args={[size * 0.7, 24, 24]} />;
      case "icosahedron":
      default:
        return <icosahedronGeometry args={[size]} />;
    }
  };

  const getMaterial = () => {
    if (materialType === "glass") {
      return (
        <meshPhysicalMaterial
          thickness={1.0}
          roughness={0.12}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transmission={0.85}
          ior={1.4}
          color="#f3f4f6"
          attenuationColor="#ffffff"
          attenuationDistance={1}
          transparent
          depthWrite={false}
        />
      );
    }

    // Brushed metal
    return (
      <meshStandardMaterial
        color="#a1a1aa"
        metalness={0.92}
        roughness={0.22}
      />
    );
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      {getMaterial()}
    </mesh>
  );
}
export default FloatingGeometry;
