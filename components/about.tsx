"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref, inView } = useInView();
  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection("About");
  //   }
  // }, [inView]);

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
        With innate curiosity and a decade of experience studying and teaching
        applied logic, I am a professional problem solver eager to join an agile
        and innovation-driven development team on a mission to help both people
        and the world (wide-web).
      </p>
      <p>
        A fast and avid learner, I quickly grasp new concepts and technologies
        and creatively use them to design efficient, reliable, and user-focussed
        software
      </p>
    </motion.section>
  );
}
