"use client";

import { projectsData, techData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

//since we're inporting projectsData from lib/data.ts as a const, we can use that type
type ProjectProps = (typeof projectsData)[number];

export default function ProjectsCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0 "
      ref={ref}
    >
      <section className="rounded-lg  relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] group-even:pl-8  hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col  h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag) => {
              const techInfo = techData[tag];
              return (
                <li key={tag} className="">
                  <Image
                    className="border border-black/50 shadow-lg hover:shadow-xl hover:scale-105 transform transition"
                    src={techInfo.url}
                    alt={techInfo.name}
                    title={`${techInfo.type}: ${techInfo.description}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className=" absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40  group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
