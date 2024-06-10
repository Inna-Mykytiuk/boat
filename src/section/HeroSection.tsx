import React from "react";
import Navbar from "@/components/Header/Navbar";
import Image from "next/image";

interface Props {}

export default function HeroSection() {
  return (
    <div className="relative">
      <Navbar />
      <Image
        src="/images/logo1.png"
        alt="boat"
        width={250}
        height={400}
        loading="lazy"
        className="w-[250px] h-[300px] object-cover object-center absolute left-[900px] top-0 z-[-10]"
        aria-label="logo"
      />
      <Image
        src="/images/water/whirlpoolMain1.png"
        alt="boat"
        width={450}
        height={450}
        loading="lazy"
        className="w-[450px] h-[450px] object-cover object-center absolute right-[-100px] top-[-170px] z-[-11]"
        aria-label="logo"
      />
    </div>
  );
}
