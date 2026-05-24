"use client";
import React from "react";
import { navLinks } from "@/lib/data";
import MagneticButton from "../ui/MagneticButton";

export function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className="glass-panel flex items-center gap-6 px-6 py-2.5 rounded-full pointer-events-auto shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
        {/* Logo home link */}
        <a 
          href="#" 
          className="text-sm font-semibold tracking-[0.25em] uppercase mr-3 text-zinc-300 hover:text-white transition-colors duration-300 font-satoshi"
        >
          M.A
        </a>
        
        {/* Dynamic navigation links */}
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <MagneticButton key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase font-mono tracking-widest px-3 py-1.5 text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
              >
                {link.label}
              </a>
            </MagneticButton>
          ))}
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
