"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Core Systems...");
  const [isDone, setIsDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textSequence = [
      { p: 15, text: "Compiling 3D Shaders..." },
      { p: 35, text: "Generating Volumetric Lighting..." },
      { p: 55, text: "Syncing Neural Skill Clusters..." },
      { p: 75, text: "Pre-warming Particle Fields..." },
      { p: 90, text: "Calibrating Cinematic Cameras..." },
      { p: 100, text: "System fully calibrated." },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDone(true);
          return 100;
        }
        
        // Random incremental load simulation
        const increment = Math.floor(Math.random() * 5) + 2;
        const next = prev + increment;
        
        const matchingText = textSequence.find((t) => next <= t.p);
        if (matchingText) {
          setLoadingText(matchingText.text);
        }

        return Math.min(next, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
    // Give time for exit animations to complete before unmounting
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] px-6 text-center select-none"
        >
          {/* Volumetric Radial Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030303_100%)] opacity-85 pointer-events-none" />

          {/* Central AAA sci-fi logo animation */}
          <div className="relative mb-12 flex items-center justify-center w-32 h-32 z-10 pointer-events-none">
            {/* Spinning brushed silver-colored outer rim */}
            <div className="absolute w-24 h-24 rounded-full border border-zinc-800 border-t-zinc-400 animate-spin" style={{ animationDuration: '3s' }} />
            {/* Pulse core diamond */}
            <div className="w-8 h-8 rotate-45 border border-zinc-600 animate-pulse bg-zinc-950/60 shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
          </div>

          {/* Branding Content */}
          <div className="relative z-10 space-y-5 max-w-md w-full">
            <h1 className="text-xs font-semibold tracking-[0.4em] uppercase text-zinc-500 font-satoshi">
              Muwahhid Abbas
            </h1>
            <p className="text-[10px] font-mono text-zinc-400/80 tracking-wide h-6">
              {loadingText}
            </p>

            {/* Slider Progress Bar */}
            <div className="relative w-64 h-[1px] bg-zinc-900 mx-auto overflow-hidden rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="absolute h-full bg-zinc-400"
              />
            </div>

            {/* Interactive Launch Section */}
            <div className="h-14 flex items-center justify-center">
              {!isDone ? (
                <span className="block text-2xl font-light font-mono text-zinc-300 tracking-wider">
                  {progress}%
                </span>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={handleEnter}
                  className="px-8 py-2.5 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white bg-zinc-950/40 hover:bg-zinc-900/50 backdrop-blur-md transition-all duration-500 tracking-[0.25em] text-[9px] uppercase font-mono cursor-pointer shadow-lg"
                >
                  Enter Experience
                </motion.button>
              )}
            </div>
          </div>

          {/* Metadata system text */}
          <div className="absolute bottom-10 text-[8px] tracking-[0.3em] text-zinc-600 uppercase font-mono z-10">
            SYSTEM.READY // SHADER_COMPILER_OK
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default LoadingScreen;
