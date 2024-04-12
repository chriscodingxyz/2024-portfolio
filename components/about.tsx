"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
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
