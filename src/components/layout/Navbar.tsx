"use client";
import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import MagneticButton from "../ui/MagneticButton";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      {/* Desktop navbar */}
      <nav className="glass-panel hidden md:flex items-center gap-6 px-6 py-2.5 rounded-full pointer-events-auto shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
        <a 
          href="#" 
          className="text-sm font-semibold tracking-[0.25em] uppercase mr-3 text-zinc-300 hover:text-white transition-colors duration-300 font-satoshi"
        >
          M.A
        </a>
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

      {/* Mobile navbar */}
      <div className="md:hidden pointer-events-auto w-full">
        {/* Mobile top bar */}
        <nav className="glass-panel flex items-center justify-between px-5 py-3 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.25em] uppercase text-zinc-300 hover:text-white transition-colors duration-300 font-satoshi"
          >
            M.A
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center w-8 h-8 gap-[5px] group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-zinc-300 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-zinc-300 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-zinc-300 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <div
          className={`glass-panel mt-2 rounded-2xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            mobileOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase font-mono tracking-widest px-6 py-3 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
