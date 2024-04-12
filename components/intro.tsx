"use client";

import Image from "next/image";
import React from "react";
import profileImg from "@/public/punk1534.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src={profileImg}
              alt="profile"
              width={192}
              height={192}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />{" "}
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-4xl  font-medium !leading-[1.5] sm:text-2xl"
      >
        Hello, I'm <span className="font-bold italic">Chris</span>. A full-stack
        developer from <span className="font-bold italic">London, UK</span>. I
        enjoy building sites & <span className="font-bold italic">apps</span>.
        My focus is <span className="font-bold italic">React</span> (
        <span className="font-bold italic">Next.js</span>)
      </motion.p>
    </section>
  );
}
