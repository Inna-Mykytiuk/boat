"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "../ui/Title";
import Slider from "../Slider/Slider";

export default function Gallery() {
  return (
    <section id="gallery" className="mt-[20px] md:mt-[40px] mb-[50px]">
      <div className="container relative">
        <Title className="sm:text-[80px] md:text-[150px] xl:text-[250px]">
          Gallery
        </Title>
        <div className="absolute top-[80px] md:top-[120px] xl:top-[140px] xl:left-[150px] xxl:left-[250px] flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] xl:gap-[80px]">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-[280px] md:max-w-[350px] before:hidden text-center
          md:before:absolute before:content-[''] md:before:block md:before:left-[100px] md:before:top-[-30px] xl:before:left-[-60px] xl:before:top-[20px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your experience the thrill through our eyes
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-dark font-normal font-comforta text-base md:max-w-[400px] xl:max-w-[600px] mdOnly:mr-[30px]"
          >
            Get a simple of the exitement thqt awaits you with our gallery of
            stunning photos from scenic vistas to action-packed moments on the
            water, our gallery captures the essence of the speed boat experience
            browse through our collection and get ready to make memories that
            will last a lifetime.
          </motion.p>
        </div>
        <Slider />
      </div>
    </section>
  );
}
