"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Freelance from "@/components/sections/Freelance";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useMounted } from "@/hooks/useMounted";

// Dynamically load the R3F Canvas to prevent Server-Side Rendering (SSR) issues
const WorldCanvas = dynamic(() => import("@/components/three/WorldCanvas"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mounted = useMounted();

  // Prevent SSR hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full h-screen bg-[#080808] flex items-center justify-center">
        <span className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
          Loading system...
        </span>
      </div>
    );
  }

  return (
    <main className="relative w-full min-h-screen">
      {/* Persisted fullscreen 3D world background */}
      <WorldCanvas />

      {/* Cinematic Loading Overlay */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main interactive overlays */}
      {!isLoading && (
        <>
          <Navbar />
          <div className="relative z-10 flex flex-col w-full">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Freelance />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
