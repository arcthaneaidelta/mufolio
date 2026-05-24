"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ParticleField({ count = 250 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random positions along the camera's Z path (from Z = 10 to Z = -45)
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Spread X and Y from -10 to 10
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      // Spread Z from 10 to -45 (matching the camera path)
      pos[i * 3 + 2] = Math.random() * -55 + 10;
      
      // Random drift speed
      spd[i] = Math.random() * 0.05 + 0.02;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const geo = pointsRef.current.geometry;
    const posArr = geo.attributes.position.array as Float32Array;

    // Use delta to keep animations frame-rate independent
    const speedMult = delta * 60; // normalized to 60fps

    for (let i = 0; i < count; i++) {
      // Add subtle sin-wave drift
      posArr[i * 3] += Math.sin(time * 0.5 + i) * 0.003 * speedMult;
      posArr[i * 3 + 1] += Math.cos(time * 0.5 + i) * 0.003 * speedMult;
      
      // Drift slowly along the Z axis (coming towards the camera)
      posArr[i * 3 + 2] += speeds[i] * 0.04 * speedMult;
      
      // Wrap around when passing the camera's front clipping plane
      if (posArr[i * 3 + 2] > 10) {
        posArr[i * 3 + 2] = -45;
      }
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#c0c0c0" // Brushed silver particle look
        transparent
        opacity={0.35}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}
export default ParticleField;
