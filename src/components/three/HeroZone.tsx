"use client";
import React from "react";
import FloatingGeometry from "./FloatingGeometry";

export function HeroZone() {
  return (
    <group position={[0, 0, 0]}>
      {/* Large focus elements surrounding the center camera path */}
      <FloatingGeometry
        position={[2.2, 1.2, -2]}
        shape="icosahedron"
        materialType="metal"
        size={0.85}
        speed={0.8}
      />
      <FloatingGeometry
        position={[-2.4, -1.4, -1]}
        shape="torus"
        materialType="glass"
        size={0.8}
        speed={1.1}
      />
      <FloatingGeometry
        position={[1.8, -1.8, -3.5]}
        shape="octahedron"
        materialType="glass"
        size={0.65}
        speed={0.9}
      />
      <FloatingGeometry
        position={[-1.6, 1.8, -2.5]}
        shape="box"
        materialType="metal"
        size={0.5}
        speed={0.7}
      />
    </group>
  );
}
export default HeroZone;
