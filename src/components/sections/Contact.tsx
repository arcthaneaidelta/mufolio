"use client";
import React from "react";
import { contactData } from "@/lib/data";
import GlassCard from "../ui/GlassCard";
import RevealText from "../ui/RevealText";
import SocialButton from "../ui/SocialButton";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24 select-none z-10">
      <div className="max-w-5xl space-y-10 md:space-y-12">
        {/* Index & Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-100 font-satoshi">
          <RevealText text="06 / Contact" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Tagline Bio */}
          <div className="space-y-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 font-satoshi leading-snug">
              {contactData.cta}
            </h3>
            <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed font-satoshi max-w-md">
              Whether you are looking to hire a software engineer for your team, collaborate on an AI SaaS product, or automate enterprise workflows, let's connect.
            </p>
          </div>

          {/* Contact Card overlay */}
          <GlassCard className="p-8 border-zinc-900 bg-zinc-950/20 max-w-md space-y-6">
            <div className="space-y-4">
              {/* Email details */}
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-4 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 hover:text-white border-zinc-800/80 normal-case lowercase"
              >
                <FaEnvelope className="text-xs text-zinc-500" />
                <span className="normal-case">{contactData.email}</span>
              </a>

              {/* Location details */}
              <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <FaMapMarkerAlt className="text-xs text-zinc-500" />
                <span>{contactData.location}</span>
              </div>
            </div>

            {/* Social linkages */}
            <div className="flex gap-4 pt-4 border-t border-zinc-900">
              <SocialButton href={contactData.github} icon={FaGithub} label="GitHub" />
              <SocialButton href={contactData.linkedin} icon={FaLinkedin} label="LinkedIn" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
export default Contact;
