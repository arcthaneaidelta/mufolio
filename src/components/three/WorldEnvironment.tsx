"use client";
import React from "react";
import ParticleField from "./ParticleField";
import HeroZone from "./HeroZone";
import AboutZone from "./AboutZone";
import ExperienceZone from "./ExperienceZone";
import SkillsZone from "./SkillsZone";
import ProjectsZone from "./ProjectsZone";
import ContactZone from "./ContactZone";

export function WorldEnvironment() {
  return (
    <group>
      {/* Central persistent particle field spanning the entire Z-depth */}
      <ParticleField count={250} />

      {/* Zone structures positioned sequentially along the camera path */}
      <HeroZone />
      <AboutZone />
      <ExperienceZone />
      <SkillsZone />
      <ProjectsZone />
      <ContactZone />
    </group>
  );
}
export default WorldEnvironment;
