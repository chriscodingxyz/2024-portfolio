"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I thrive on building impactful projects that bridge technology and user experience. My most notable work includes a Google Cloud x MLB Hackathon project, where I developed a full-stack fan engagement platform using React, Flask, and Tailwind CSS. This app features real-time game schedules, AI-driven multilingual news digests, and a k-means clustering recommendation system.
        <br/><br/>
        Beyond hackathons, I&apos;ve built an epidemiological risk modeling and visualization platform in Flask, providing intuitive data insights through an interactive UI. My passion lies in leveraging AI and software engineering to create seamless, data-driven experiences. Always open to collaborating on innovative projects and connecting with like-minded engineers!
      </p>
    </motion.section>
  );
}
