"use client";
import { projectsData, techData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { FaLinkSlash } from "react-icons/fa6";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectsCard({
  title,
  description,
  tags,
  imageUrl,
  siteUrl,
  codeUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="w-full sm:w-auto">
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="group mb-3 sm:mb-8 last:mb-0"
        ref={ref}
      >
        <section className="rounded-lg relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:h-[20rem] group-even:pl-8 hover:bg-gray-200 transition flex flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:order-last">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg shadow-2xl group-even:rounded-l-none group-even:rounded-r-lg group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:relative sm:left-6"
            />
          </div>

          <div className="p-4 sm:p-6 sm:w-1/2">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                <a href={siteUrl} target="_blank">
                  {title}
                </a>
              </h3>
              <div className="flex gap-2">
                <a href={siteUrl} target="_blank" title="Live Preview">
                  <FaExternalLinkAlt className=" cursor-pointer" color="blue" />
                </a>
                <a href={codeUrl} target="_blank" title="View Code">
                  <FaGithub className=" cursor-pointer" />
                </a>
              </div>
            </div>

            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4">
              {tags.map((tag) => {
                const techInfo = techData[tag];
                return (
                  <li key={tag} className="">
                    <img
                      className=" shadow-lg hover:shadow-xl hover:scale-105 transform transition"
                      src={techInfo.url}
                      alt={techInfo.name}
                      height={20}
                      title={`${techInfo.type}: ${techInfo.description}`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
