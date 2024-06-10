import React from "react";
import Navbar from "@/components/Header/Navbar";
import Image from "next/image";

interface Props {}

export default function HeroSection() {
  return (
    <div className="relative">
      <Navbar />
      <Image
        src="/public/images/logo1.png"
        alt="boat"
        width={250}
        height={400}
        loading="lazy"
        className="w-[250px] h-[300px] right-[190px] object-cover object-center absolute md:right-[300px] top-0 z-[-10] "
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