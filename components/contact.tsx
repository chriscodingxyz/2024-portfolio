"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import ContactButton from "./contact-button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 35rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly @
        <a href="mailto:chriscoding@icloud.com">chriscoding@icloud.com</a> or
        via this form
      </p>
      <form
        ref={formRef}
        className="flex flex-col mt-10"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          formRef.current?.reset();
        }}
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
        <ContactButton />
      </form>
    </motion.section>
  );
}
