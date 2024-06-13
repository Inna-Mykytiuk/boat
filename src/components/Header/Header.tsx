import React from "react";
import Navbar from "@/components/Header/Navbar";

import Image from "next/image";
import data from "@/data/hero.json";

export default function Header() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <Image
        src={data.img.logo}
        alt="boat"
        width={250}
        height={400}
        loading="lazy"
        className="w-[250px] h-[300px] right-[190px] object-cover object-center absolute md:right-[300px] top-[60px] sm:top-0 z-[-10] xxl:right-[500px]"
        aria-label="logo"
      />
      <Image
        src={data.img.water}
        alt="boat"
        width={450}
        height={450}
        loading="lazy"
        className="w-[450px] h-[450px] object-cover object-center absolute right-[-100px] top-[-170px] z-[-11] xxl:right-[200px]"
        aria-label="logo"
      />
    </div>
  );
}
