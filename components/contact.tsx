import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%, 35rem)]">
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly @
        <a href="mailto:chriscoding@icloud.com">chriscoding@icloud.com</a> or
        via this form
      </p>
      <form action="" className="flex flex-col mt-10">
        <input
          type="email"
          className="h-14 rounded-lg border border-black/10 px-3"
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-3"
          name=""
          id=""
          placeholder="Message"
        ></textarea>
        <button
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
          type="submit"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all" />
        </button>
      </form>
    </section>
  );
}
