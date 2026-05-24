"use client";
import React from "react";
import { aboutData } from "@/lib/data";
import GlassCard from "../ui/GlassCard";
import RevealText from "../ui/RevealText";

export function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24 select-none z-10">
      <div className="max-w-5xl space-y-10 md:space-y-12">
        {/* Section Index & Title */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-100 font-satoshi">
          <RevealText text="01 / About" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio text block */}
          <div className="space-y-5">
            <h3 className="text-base md:text-lg font-medium tracking-wide text-zinc-300 font-satoshi">
              {aboutData.headline}
            </h3>
            {aboutData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed font-satoshi">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights layout */}
          <div className="grid grid-cols-2 gap-4">
            {aboutData.highlights.map((highlight, idx) => (
              <GlassCard 
                key={idx} 
                delay={idx * 0.08} 
                className="flex flex-col justify-between gap-3 p-5 border-zinc-900 bg-zinc-950/20"
              >
                <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">
                  {highlight.label}
                </span>
                <span className="text-[10px] sm:text-xs font-medium tracking-wide text-zinc-300 font-satoshi leading-snug">
                  {highlight.value}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
