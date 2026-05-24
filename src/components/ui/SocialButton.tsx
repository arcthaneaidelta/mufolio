"use client";
import React from "react";
import { IconType } from "react-icons";
import MagneticButton from "./MagneticButton";

interface SocialButtonProps {
  href: string;
  icon: IconType;
  label: string;
}

export function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <MagneticButton>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-zinc-400 hover:text-zinc-100 border border-zinc-800/80 hover:border-zinc-500/40 hover:bg-zinc-900/40 transition-all duration-300 shadow-lg text-xs uppercase font-mono tracking-widest pointer-events-auto"
      >
        <Icon className="text-xs" />
        <span>{label}</span>
      </a>
    </MagneticButton>
  );
}
export default SocialButton;
