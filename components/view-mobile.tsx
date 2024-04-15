import Image from "next/image";
import React from "react";
import { MdMobileFriendly } from "react-icons/md";

export default function ViewMobile() {
  return (
    <div className="mb-28 text-center hidden sm:block ">
      <h1 className="flex justify-center items-center">
        View on Mobile <MdMobileFriendly />
      </h1>
      <Image src="/siteqr.png" width={256} height={256} alt="QRcode for site" />
    </div>
  );
}
