"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineSpeed } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { GiShipWheel } from "react-icons/gi";
import { TbSailboat } from "react-icons/tb";
import Title from "../ui/Title";

const Safety = () => {
  return (
    <section
      id="safety"
      className="relative bg-mainBcg mt-[20px] md:mt-[80px] mb-[50px] pt-[50px] pb-[50px] md:pb-[100px] xl:pb-[150px]
      before:absolute before:bg-wave before:bottom-0 before:left-0 before:h-[420px] before:w-[650px] before:bg-cover
      
      after:hidden md:after:block after:absolute after:bg-lines after:top-0 after:right-[-80px] after:h-full after:w-[650px] after:bg-cover after:z-[1]
      "
    >
      <div className="container relative">
        <Title className="sm:text-[100px] md:text-[180px] xl:text-[250px]">
          Safety
        </Title>
        <div className=" absolute top-[80px] z-10 md:top-[120px] xl:top-[140px] md:left-[100px] xxl:left-[150px] flex flex-col md:flex-row justify-center gap-0 xl:gap-[40px] items-center md:items-start">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-[280px] md:max-w-[350px] before:hidden text-center top-0 md:top-[10px] xl:top-[60px]
          md:before:absolute  before:content-[''] xl:before:block md:before:left-[20px] md:before:top-[-30px] xl:before:left-[115px] xxl:before:left-[140px] xl:before:top-[-30px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your Safety is our priority
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              src="/images/boat/motorBoats.png"
              alt="travel logo"
              width={850}
              height={400}
              className="object-cover object-center w-full h-full xl:w-[850px] xl:h-[350px]"
            />
          </motion.div>
        </div>
        <div className="flex flex-col mt-[160px] max-w-full xl:max-w-[700px] xxl:max-w-[800px] ml-auto">
          <p className="text-dark font-normal font-comforta text-base mb-[60px]">
            When it comes to selecting the ideal high-speed boat for your
            aquatic adventures, there are several key factors to consider. at
            boat, we understand that each rider has unique preferences and
            requirements.
          </p>
          <motion.ul className="grid grid-cols-1 gap-y-2 md:gap-y-10 gap-x-4 md:grid-cols-2">
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="flex gap-[20px] items-center sm:justify-center"
            >
              <MdOutlineSpeed className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] text-grey bg-white p-[5px] md:p-[10px] rounded-full" />
              <p className="bg-white rounded-full p-2 md:p-[20px] w-[250px] text-center">
                speed and performance
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="flex gap-[20px] items-center sm:justify-center"
            >
              <TbSailboat className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] text-grey bg-white p-[5px] md:p-[10px] rounded-full" />
              <p className="bg-white rounded-full p-2 md:p-[20px] w-[250px] text-center">
                size and capacity
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="flex gap-[20px] items-center sm:justify-center"
            >
              <AiOutlineSafety className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] text-grey bg-white p-[5px] md:p-[10px] rounded-full" />
              <p className="bg-white rounded-full p-2 md:p-[20px] w-[250px] text-center">
                safety and reliability
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="flex gap-[20px] items-center sm:justify-center"
            >
              <GiShipWheel className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] text-grey bg-white p-[5px] md:p-[10px] rounded-full" />
              <p className="bg-white rounded-full p-2 md:p-[20px] w-[250px] text-center">
                features and amenities
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Safety;
