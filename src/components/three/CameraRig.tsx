"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CameraRig() {
  const { camera } = useThree();
  const scrollProgress = useScrollProgress();
  const mouse = useMousePosition();

  const targetPos = useRef(new THREE.Vector3(0, 0, 5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, -5));

  useFrame((state, delta) => {
    // Scale scroll progress for calculations
    const s = scrollProgress;

    let x = 0;
    let y = 0;
    let z = 5;

    let lx = 0;
    let ly = 0;
    let lz = -5;

    // Define interpolation zones along the scroll path (0 to 1)
    if (s <= 0.2) {
      // Hero Zone to About Zone
      const t = s / 0.2;
      x = THREE.MathUtils.lerp(0, -1.8, t);
      y = THREE.MathUtils.lerp(0, 0.4, t);
      z = THREE.MathUtils.lerp(5, -3, t);
      
      lx = THREE.MathUtils.lerp(0, -1.2, t);
      ly = THREE.MathUtils.lerp(0, 0.2, t);
      lz = THREE.MathUtils.lerp(-5, -12, t);
    } else if (s <= 0.45) {
      // About Zone to Experience Zone
      const t = (s - 0.2) / 0.25;
      x = THREE.MathUtils.lerp(-1.8, 1.8, t);
      y = THREE.MathUtils.lerp(0.4, -0.4, t);
      z = THREE.MathUtils.lerp(-3, -11, t);

      lx = THREE.MathUtils.lerp(-1.2, 1.2, t);
      ly = THREE.MathUtils.lerp(0.2, -0.2, t);
      lz = THREE.MathUtils.lerp(-12, -20, t);
    } else if (s <= 0.7) {
      // Experience Zone to Skills Universe
      const t = (s - 0.45) / 0.25;
      x = THREE.MathUtils.lerp(1.8, 0, t);
      y = THREE.MathUtils.lerp(-0.4, 0.8, t);
      z = THREE.MathUtils.lerp(-11, -19, t);

      lx = THREE.MathUtils.lerp(1.2, 0, t);
      ly = THREE.MathUtils.lerp(-0.2, 0.5, t);
      lz = THREE.MathUtils.lerp(-20, -28, t);
    } else if (s <= 0.85) {
      // Skills Universe to Projects Zone
      const t = (s - 0.7) / 0.15;
      x = THREE.MathUtils.lerp(0, -1.5, t);
      y = THREE.MathUtils.lerp(0.8, 0.2, t);
      z = THREE.MathUtils.lerp(-19, -27, t);

      lx = THREE.MathUtils.lerp(0, -0.8, t);
      ly = THREE.MathUtils.lerp(0.5, 0.1, t);
      lz = THREE.MathUtils.lerp(-28, -36, t);
    } else {
      // Projects Zone to Contact Zone
      const t = (s - 0.85) / 0.15;
      x = THREE.MathUtils.lerp(-1.5, 0, t);
      y = THREE.MathUtils.lerp(0.2, 0, t);
      z = THREE.MathUtils.lerp(-27, -35, t);

      lx = THREE.MathUtils.lerp(-0.8, 0, t);
      ly = THREE.MathUtils.lerp(0.1, 0, t);
      lz = THREE.MathUtils.lerp(-36, -44, t);
    }

    targetPos.current.set(x, y, z);
    targetLookAt.current.set(lx, ly, lz);

    // Damping / inertia settings
    const lerpSpeed = 3 * delta; // Frame-rate independent lerp
    const safeLerpSpeed = Math.min(lerpSpeed, 0.1); // Cap to prevent jumps

    // Calculate mouse offsets
    const mouseOffsetX = mouse.x * 0.45;
    const mouseOffsetY = mouse.y * 0.45;

    // Apply mouse offsets to camera position for parallax
    const finalTargetX = targetPos.current.x + mouseOffsetX;
    const finalTargetY = targetPos.current.y + mouseOffsetY;
    
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, finalTargetX, safeLerpSpeed);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, finalTargetY, safeLerpSpeed);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetPos.current.z, safeLerpSpeed);

    // Apply lookAt dynamically
    const currentLookAt = new THREE.Vector3(
      THREE.MathUtils.lerp(camera.position.x, targetLookAt.current.x + mouseOffsetX * 0.4, safeLerpSpeed),
      THREE.MathUtils.lerp(camera.position.y, targetLookAt.current.y + mouseOffsetY * 0.4, safeLerpSpeed),
      THREE.MathUtils.lerp(camera.position.z - 5, targetLookAt.current.z, safeLerpSpeed)
    );
    camera.lookAt(currentLookAt);
  });

  return null;
}
export default CameraRig;
