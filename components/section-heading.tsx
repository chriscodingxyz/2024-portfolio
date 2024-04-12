import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className=" text-center text-3xl font-medium capitalize mb-8">
      {children}
    </h2>
  );
}
