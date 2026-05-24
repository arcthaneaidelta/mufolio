"use client";
import React from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  const words = text.split(" ");
  
  return (
    <span className={`inline-block flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em]">
          <motion.span
            className="inline-block origin-bottom-left"
            initial={{ y: "100%", rotate: 4, opacity: 0 }}
            whileInView={{ y: 0, rotate: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
export default RevealText;
