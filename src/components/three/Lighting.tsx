"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Lighting() {
  const dirLight = useRef<THREE.DirectionalLight>(null);
  const scrollProgress = useScrollProgress();

  useFrame(() => {
    if (dirLight.current) {
      // Dynamic light movement based on scroll to highlight physical edges
      const angle = scrollProgress * Math.PI;
      dirLight.current.position.x = Math.cos(angle) * 12;
      dirLight.current.position.z = Math.sin(angle) * 12 + 4;
    }
  });

  return (
    <>
      {/* Ambient background light */}
      <ambientLight intensity={0.3} color="#0f0f11" />
      
      {/* Warm key light source */}
      <directionalLight
        ref={dirLight}
        position={[6, 6, 6]}
        intensity={1.5}
        color="#f5f5f0" // Brushed silver color accent
      />

      {/* Volumetric accent lights positioned along the scroll depth */}
      <pointLight position={[0, 4, -8]} intensity={0.6} color="#d1d5db" distance={15} />
      <pointLight position={[-4, -3, -18]} intensity={0.8} color="#9ca3af" distance={20} />
      <pointLight position={[4, 2, -28]} intensity={0.7} color="#e5e7eb" distance={22} />
      <pointLight position={[0, -1, -38]} intensity={0.5} color="#c0c0c0" distance={15} />
    </>
  );
}
export default Lighting;
