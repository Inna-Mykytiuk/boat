"use client";

import React from "react";
import Card from "@/components/ui/Card/Card";
import Image from "next/image";
import Title from "../ui/Title";
import { motion } from "framer-motion";

export default function Speed() {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="speed"
      className="mt-[20px] md:mt-[80px] xxl:mt-[40px] mb-[50px]"
    >
      <div className="container relative">
        <Title className="sm:text-[100px] md:text-[180px] xl:text-[250px]">
          Speedy
        </Title>
        <div className=" absolute top-[80px] md:top-[120px] xl:top-[140px] xl:left-[100px] xxl:left-[250px] flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] xl:gap-[80px]">
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
          md:before:absolute  before:content-[''] md:before:block md:before:left-[100px] md:before:top-[-30px] xl:before:left-[-60px] xl:before:top-[20px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your Premier destination for hight-speed fun
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
            className="text-dark  font-normal font-comforta text-base md:max-w-[400px] xl:max-w-[600px] mdOnly:mr-[30px]"
          >
            At boat, we’re passionate about delivering unforgettable experiences
            on the water. We offer safe, thrilling rides that cater to
            adrenaline junkies and sightseers alike. Learn more about our
            commitment to excellence and book your adventure today!
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-[50px] xl:gap-[200px] mdOnly:mt-[80px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="relative z-[-1]"
          >
            <Image
              src="/images/boat/yacht2.png"
              alt="travel logo"
              width={350}
              height={303}
              className="object-cover object-center"
            />
            <p
              className="text-dark font-normal font-contrail text-base uppercase absolute top-[260px] sm:top-[180px] md:top-[150px] right-0 
            before:absolute
            before:content-[''] md:before:block 
            before:top-[-4px] before:left-[-40px] before:h-[30px] before:w-[30px] 
          before:bg-lightBlue before:rounded-full
            "
            >
              Choose your adventure
            </p>
            <p
              className="text-dark font-normal font-contrail text-base uppercase absolute bottom-[180px] sm:bottom-[280px] md:bottom-[250px] left-[5px] sm:left-[-25px] 
            before:absolute
            before:content-[''] md:before:block 
            before:top-[-4px] before:right-[-40px] before:h-[30px] before:w-[30px] 
          before:bg-lightBlue before:rounded-full
            "
            >
              Choose rider
            </p>
            <p
              className="text-dark font-normal font-contrail text-base uppercase absolute bottom-[120px] sm:bottom-[180px] md:bottom-[150px] right-[40px] 
            before:absolute
            before:content-[''] md:before:block 
            before:top-[-4px] before:left-[-40px] before:h-[30px] before:w-[30px] 
          before:bg-lightBlue before:rounded-full
            "
            >
              Start tour
            </p>
          </motion.div>
          <Card />
        </div>
      </div>
    </section>
  );
}
