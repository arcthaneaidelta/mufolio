"use client";

import { Globe, Terminal, Smartphone, Palette, Brain, Zap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Web Apps",
    date: "Frontend & Fullstack",
    content: "Crafting beautiful, pixel-perfect, and high-performance websites and full-stack web applications using Next.js, React, Tailwind CSS, and TypeScript.",
    category: "Frontend",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Python Django",
    date: "Backend Systems",
    content: "Architecting robust backend services, scalable RESTful APIs, and secure database infrastructures using Python and Django.",
    category: "Backend",
    icon: Terminal,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Flutter Apps",
    date: "Mobile Development",
    content: "Developing cross-platform, natively compiled mobile applications for iOS and Android using Flutter and Dart with fluid performance and physics-based animations.",
    category: "Mobile",
    icon: Smartphone,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Figma & Design",
    date: "UI/UX & Prototyping",
    content: "Creating high-fidelity UI layouts, responsive wireframes, design systems, and interactive prototypes in Figma.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "AI Systems",
    date: "AI Agents & RAG",
    content: "Building next-generation intelligent agents, Retrieval-Augmented Generation (RAG) engines, and custom LLM workflows using OpenAI, LangChain, and Python.",
    category: "AI",
    icon: Brain,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 6,
    title: "SaaS & Automation",
    date: "Workflow Orchestration",
    content: "Designing multi-tenant SaaS architectures and automated business workflows that integrate multiple enterprise APIs and platforms.",
    category: "Infrastructure",
    icon: Zap,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 87,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
  timelineData,
};
