"use client";
import React from "react";
import RevealText from "../ui/RevealText";
import RadialOrbitalTimeline from "../ui/radial-orbital-timeline";
import { Globe, Terminal, Brain, Cpu, Zap, Users, Compass, Briefcase } from "lucide-react";

// Circle 1: Developer Side (70% - Engineering & Development)
const devTimelineData = [
  {
    id: 1,
    title: "Frontend",
    date: "UI & Animation",
    content: "Crafting immersive client interfaces with: Next.js, React.js, TypeScript, TailwindCSS, Framer Motion, GSAP, Three.js, React Three Fiber, and ShadCN UI.",
    category: "Engineering",
    icon: Globe,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Backend",
    date: "Services & APIs",
    content: "Architecting high-concurrency server systems: Node.js, Express.js, REST APIs, Custom Authentication, API Integrations, Server Architecture, Webhooks, and Real-time Systems.",
    category: "Engineering",
    icon: Terminal,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "AI & Automation",
    date: "Intelligent Systems",
    content: "Building production-grade intelligent workflows: AI Agents, RAG Systems, OpenAI APIs, LangChain, Workflow Automation, AI SaaS Systems, Intelligent Pipelines, Multi-step AI Workflows, and Automation Architecture.",
    category: "AI",
    icon: Brain,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 94,
  },
  {
    id: 4,
    title: "Cloud & DB",
    date: "Infrastructure",
    content: "Designing secure, scalable data-layers: PostgreSQL, MongoDB, Supabase, Firebase, and Prisma ORM. Cloud deployments managed on Vercel and Render.",
    category: "Cloud",
    icon: Cpu,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "Software Eng",
    date: "SaaS Architecture",
    content: "Enforcing premium engineering principles: Full Stack Development, SaaS Architecture, Scalable Systems, Performance Optimization, Git & GitHub, System Design, and Component Architecture.",
    category: "Architecture",
    icon: Zap,
    relatedIds: [3, 4],
    status: "in-progress" as const,
    energy: 92,
  },
];

// Circle 2: Leadership Side (30% - Leadership & Product)
const leaderTimelineData = [
  {
    id: 11,
    title: "Tech Leadership",
    date: "Coordination & Delivery",
    content: "Directing engineering teams & delivery: Technical Project Leadership, Cross-functional Team Leadership, Sprint Planning, Software Delivery Management, and Engineering Coordination.",
    category: "Leadership",
    icon: Users,
    relatedIds: [12, 13],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 12,
    title: "Product Strategy",
    date: "Strategy & Consulting",
    content: "Defining system scope & strategic alignment: Requirements Analysis, Solution Architecture, Client Communication, Product Strategy, Technical Consulting, and Workflow Planning.",
    category: "Product",
    icon: Compass,
    relatedIds: [11, 13],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 13,
    title: "Operations",
    date: "Execution & Delivery",
    content: "Managing agile lifecycles and QA: Project Management, QA Coordination, Agile Collaboration, Team Coordination, and End-to-End Product Delivery.",
    category: "Operations",
    icon: Briefcase,
    relatedIds: [11, 12],
    status: "completed" as const,
    energy: 85,
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-24 select-none z-10">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        
        {/* Title Section */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-100 font-satoshi">
            <RevealText text="03 / Skills" />
          </h2>
          <p className="text-sm md:text-sm md:text-base uppercase font-mono tracking-[0.35em] text-zinc-500">
            Systems Builder & Solutions Leader • Developer / Leadership Dual-Engine
          </p>
        </div>

        {/* Dual Circles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
          
          {/* Circle 1: Developer Side */}
          <div className="relative rounded-2xl border border-zinc-900/50 bg-zinc-950/10 backdrop-blur-[2px] p-4 sm:p-6 overflow-visible flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4 pb-2 border-b border-zinc-900/60">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                70% — Engineering & Development
              </span>
              <span className="text-sm font-mono text-zinc-500 uppercase px-2 py-0.5 rounded border border-zinc-900 bg-zinc-900/40">
                Core Engine
              </span>
            </div>
            
            <RadialOrbitalTimeline timelineData={devTimelineData} />
            
            <div className="text-center mt-2 w-full pt-2 border-t border-zinc-900/60">
              <span className="text-xs font-mono tracking-wider text-zinc-500 uppercase">
                5 Nodes • Click to inspect engineering ecosystem
              </span>
            </div>
          </div>

          {/* Circle 2: Leadership Side */}
          <div className="relative rounded-2xl border border-zinc-900/50 bg-zinc-950/10 backdrop-blur-[2px] p-4 sm:p-6 overflow-visible flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4 pb-2 border-b border-zinc-900/60">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                30% — Leadership & Product
              </span>
              <span className="text-sm font-mono text-zinc-500 uppercase px-2 py-0.5 rounded border border-zinc-900 bg-zinc-900/40">
                Strategic Layer
              </span>
            </div>
            
            <RadialOrbitalTimeline timelineData={leaderTimelineData} />
            
            <div className="text-center mt-2 w-full pt-2 border-t border-zinc-900/60">
              <span className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
                3 Nodes • Click to inspect management workflows
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
