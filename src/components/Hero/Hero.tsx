"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full mt-[320px] sm:mt-[280px] md:mt-[260px] mb-[200px] md:mb-[300px] xl:mb-[480px] xxl:mb-[600px]">
      <div className="container">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-dark font-roboto font-bold text-base sm:text-xl md:text-2xl text-center uppercase tracking-tighter"
        >
          Welcome&nbsp;&nbsp;to&nbsp;&nbsp;boat&nbsp;&nbsp;adventure&nbsp;&nbsp;tours
        </motion.h3>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="title relative gradient-text font-bold text-[100px] sm:text-[160px] md:text-[220px] xl:text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase before:w-full  xl:before:h-[840px] md:before:h-[600px] before:top-[-40px] sm:before:top-0 xl:before:bg-cover  before:bg-cover before:h-[420px]"
        >
          Boat
        </motion.h1>
      </div>
    </section>
  );
}
