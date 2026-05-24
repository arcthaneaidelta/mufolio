"use client";
import React from "react";
import RevealText from "../ui/RevealText";
import TiltCard from "../ui/TiltCard";

export function Freelance() {
  return (
    <section id="freelance" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24 select-none z-10">
      <div className="max-w-5xl space-y-10 md:space-y-12">
        {/* Section Index & Title */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-100 font-satoshi">
          <RevealText text="05 / Freelance Operations & Client Acquisition" />
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Narrative Block */}
          <div className="space-y-5">
            <p className="text-sm font-light text-zinc-400 leading-relaxed font-satoshi">
              I independently drive end‑to‑end freelance operations, blending deep technical expertise with strategic business execution. From prospecting to delivery, I manage the full pipeline to ensure high‑value outcomes.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-zinc-400 font-satoshi">
              <li>• Profile optimization & personal branding</li>
              <li>• Proposal strategy & technical proposal writing</li>
              <li>• Client communication, discovery meetings & negotiations</li>
              <li>• Project acquisition, workflow coordination & delivery oversight</li>
              <li>• Account growth strategy & ongoing client expansion</li>
            </ul>
          </div>

          {/* Metrics / Achievements */}
          <div className="flex flex-col gap-4">
            <TiltCard className="border-zinc-900 bg-zinc-950/20">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Revenue</span>
                <h3 className="text-lg font-semibold text-zinc-200">$4,000+ earned</h3>
                <p className="text-xs text-zinc-400">Completed 9 projects, ongoing $4k+ deal</p>
              </div>
            </TiltCard>
            <TiltCard className="border-zinc-900 bg-zinc-950/20">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Pipeline</span>
                <h3 className="text-lg font-semibold text-zinc-200">Full‑stack acquisition</h3>
                <p className="text-xs text-zinc-400">Prospecting → proposal → close → delivery</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Freelance;
