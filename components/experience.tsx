"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                visible={inView}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>

                <p className="!mt-1 !font-normal text-gray-700">
                  {item.description}
                </p>
                <div className="flex justify-between whitespace-nowrap mt-4 ">
                  <span>
                    @
                    <a href={item.link} className="text-[0.8rem] font-bold">
                      {item.company}
                    </a>
                  </span>

                  <h4 className="!mt-0 text-[0.8rem]">📍{item.location}</h4>
                </div>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
