"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Header/Navbar";

import Image from "next/image";
import data from "@/data/hero.json";

export default function Header() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Image
          src={data.img.logo}
          alt="boat"
          width={250}
          height={400}
          loading="lazy"
          className="w-[250px] h-[300px] right-[190px] object-cover object-center absolute md:right-[300px] top-[60px] sm:top-0 z-[-10] xxl:right-[500px]"
          aria-label="logo"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Image
          src={data.img.water}
          alt="boat"
          width={450}
          height={450}
          loading="lazy"
          className="w-[450px] h-[450px] object-cover object-center absolute right-[-100px] top-[-170px] z-[-11] xxl:right-[200px]"
          aria-label="logo"
        />
      </motion.div>
    </div>
  );
}
