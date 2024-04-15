"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 35rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly @
        <a href="mailto:chriscoding@icloud.com">chriscoding@icloud.com</a> or
        via this form
      </p>
      <form
        action={async (formData) => {
          console.log(formData.get("senderEmail"));
          console.log(formData.get("senderMessage"));
        }}
        className="flex flex-col mt-10"
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={100}
          className="h-14 rounded-lg border border-black/10 px-3"
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-3"
          name="senderMessage"
          required
          maxLength={1000}
          placeholder="Your Message"
        ></textarea>
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
