import React from "react";
import Title from "../Title/Title";
import Image from "next/image";

const Safety = () => {
  return (
    <section id="speed" className="mt-[20px] md:mt-[80px] mb-[450px]">
      <div className="container relative">
        <Title>Safety</Title>
        <div className=" absolute top-[80px] md:top-[120px] xl:top-[140px] md:left-[100px] xxl:left-[150px] flex flex-col md:flex-row justify-center gap-0 xl:gap-[40px] items-center md:items-start">
          <h3
            className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-[280px] md:max-w-[350px] before:hidden text-center top-0 md:top-[10px] xl:top-[60px]
          md:before:absolute  before:content-[''] xl:before:block md:before:left-[20px] md:before:top-[-30px] xl:before:left-[115px] xl:before:top-[-30px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your Premier destination for hight-speed fun
          </h3>
          <Image
            src="/images/boat/motorBoats.png"
            alt="travel logo"
            width={850}
            height={400}
            className="object-cover object-center w-full h-full xl:w-[850px] xl:h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Safety;
