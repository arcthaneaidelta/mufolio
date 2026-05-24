"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import Lighting from "./Lighting";
import WorldEnvironment from "./WorldEnvironment";

export function WorldCanvas() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas
        dpr={[1, 1.5]} // Performance optimized DPR
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 10], fov: 60, near: 0.1, far: 50 }}
      >
        <color attach="background" args={["#080808"]} />
        <fog attach="fog" args={["#080808", 5, 25]} />
        <Suspense fallback={null}>
          <CameraRig />
          <Lighting />
          <WorldEnvironment />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default WorldCanvas;
