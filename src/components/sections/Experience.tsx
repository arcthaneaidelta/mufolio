"use client";
import React from "react";
import { experienceData } from "@/lib/data";
import TiltCard from "../ui/TiltCard";
import RevealText from "../ui/RevealText";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24 select-none z-10">
      <div className="max-w-5xl space-y-10 md:space-y-12">
        {/* Index & Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-100 font-satoshi">
          <RevealText text="02 / Experience" />
        </h2>

        {/* Vertical timeline timeline line container */}
        <div className="relative pl-6 md:pl-10 space-y-8 border-l border-zinc-900">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Central node tracker aligning to 3D timeline ring */}
              <div className="absolute -left-[30px] md:-left-[46px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-400 border border-zinc-950" />
              
              <TiltCard className="max-w-3xl border-zinc-900 bg-zinc-950/20">
                {/* Header detail */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-900 pb-3 mb-4">
                  <div>
                    <h3 className="text-xs uppercase font-mono tracking-widest text-zinc-500">
                      {exp.company}
                    </h3>
                    <h4 className="text-sm font-semibold tracking-wide text-zinc-300 font-satoshi mt-1">
                      {exp.role}
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                    {exp.period}
                  </span>
                </div>

                {/* Sub-text summary */}
                <p className="text-xs font-light text-zinc-400 leading-relaxed font-satoshi mb-4">
                  {exp.description}
                </p>

                {/* Achievement list */}
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[10px] sm:text-[11px] font-light text-zinc-400 font-satoshi">
                      <span className="text-zinc-700 select-none mt-0.5">——</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
