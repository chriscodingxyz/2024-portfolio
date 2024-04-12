"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import ProjectsCard from "./projects-card";
import { useSetActiveSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSetActiveSectionInView("Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectsCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
