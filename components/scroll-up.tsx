"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollUp() {
  const { activeSection } = useActiveSectionContext();

  if (activeSection !== "Home" && activeSection !== "About") {
    return (
      <span className="fixed bottom-10 right-10 text-xl">
        <a href="#home" title="Scroll Up">
          {/* <button className="bg-gray-200 p-2 rounded-full" title="Scroll Up">
            <FaUpLong />
          </button> */}
          <FaArrowAltCircleUp />
        </a>
      </span>
    );
  }
}
