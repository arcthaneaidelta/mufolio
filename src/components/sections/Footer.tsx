"use client";
import React from "react";
import MagneticButton from "../ui/MagneticButton";

export function Footer() {
  const handleScrollTop = () => {
    // Let Lenis scroll smoothly by triggering standard scroll coordinate animation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-12 px-6 md:px-24 border-t border-zinc-900 bg-[#080808]/80 backdrop-blur-sm select-none z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright tag */}
        <div className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
          © {new Date().getFullYear()} Muwahhid Abbas. All rights reserved.
        </div>

        {/* Back to top dynamic button */}
        <MagneticButton>
          <button
            onClick={handleScrollTop}
            className="text-sm font-mono tracking-[0.25em] text-zinc-400 hover:text-white uppercase transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            Back to Top
          </button>
        </MagneticButton>
      </div>
    </footer>
  );
}
export default Footer;
