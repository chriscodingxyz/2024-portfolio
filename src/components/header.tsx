"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Header() {
  return (
    <header className="z-100 relative h-[5000px]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blue-[0.5rem] sm:top-6 sm:h-[4.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </header>
  );
}
