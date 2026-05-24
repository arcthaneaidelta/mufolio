"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroData, contactData } from "@/lib/data";
import RevealText from "../ui/RevealText";
import SocialButton from "../ui/SocialButton";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-20 pointer-events-none select-none z-10">
      {/* Dark gradient base to blend sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]/90 pointer-events-none" />

      <div className="max-w-5xl space-y-6 md:space-y-8 z-10 mt-12">
        {/* System category tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase font-mono tracking-[0.35em] text-zinc-500"
        >
          Systems Builder & Solutions Architect
        </motion.div>

        {/* Main Name Heading with 3D Reveal */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-zinc-100 max-w-4xl">
          <RevealText text={heroData.name} delay={0.3} />
        </h1>

        {/* Roles list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase font-satoshi"
        >
          {heroData.roles.map((role, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="text-zinc-700 font-sans">•</span>}
              {role}
            </span>
          ))}
        </motion.div>

        {/* Core Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-xs sm:text-sm md:text-base font-light text-zinc-400 max-w-xl leading-relaxed font-satoshi"
        >
          {heroData.tagline}
        </motion.p>

        {/* Social connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-3.5 items-center pt-2"
        >
          <SocialButton href={contactData.github} icon={FaGithub} label="GitHub" />
          <SocialButton href={contactData.linkedin} icon={FaLinkedin} label="LinkedIn" />
        </motion.div>
      </div>

      {/* Downward scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[7px] font-mono uppercase tracking-[0.25em] text-zinc-500">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-9 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
export default Hero;
