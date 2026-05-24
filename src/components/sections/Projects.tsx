// Project Cards Section
"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import TiltCard from "../ui/TiltCard";
import RevealText from "../ui/RevealText";

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24 select-none z-10">
      <div className="max-w-5xl space-y-10 md:space-y-12">
        {/* Index & Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-100 font-satoshi">
          <RevealText text="04 / Projects" />
        </h2>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <TiltCard className="relative overflow-hidden border-zinc-900 bg-zinc-950/20">
                {/* Holographic light sweep gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out pointer-events-none" />
                <div className="space-y-4 p-4">
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold tracking-wide text-zinc-200 font-satoshi leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-light text-zinc-400 leading-relaxed font-satoshi">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-zinc-900/40 border border-zinc-900 text-xs font-mono tracking-wider uppercase text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
