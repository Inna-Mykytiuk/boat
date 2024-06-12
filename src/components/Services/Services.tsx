import React from "react";
import Card from "@/components/Card/Card";
import Title from "../Title/Title";

export default function Services() {
  return (
    <section id="services" className="mt-[20px] md:mt-[30px] mb-[650px]">
      <div className="container relative">
        <h2 className="title relative gradient-text font-bold text-[70px] sm:text-[100px] md:text-[180px] xl:text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase">
          Speedy
        </h2>

        <div className=" absolute top-[80px] md:top-[120px] xl:top-[140px] xl:left-[100px] flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] xl:gap-[80px]">
          <h3
            className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-[280px] md:max-w-[350px] before:hidden text-center
          md:before:absolute  before:content-[''] md:before:block md:before:left-[100px] md:before:top-[-30px] xl:before:left-[-80px] xl:before:top-[20px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your Premier destination for hight-speed fun
          </h3>
          <p className="text-dark  font-normal font-comforta text-base md:max-w-[400px] xl:max-w-[600px] mdOnly:mr-[30px]">
            At boat, we’re passionate about delivering unforgettable experiences
            on the water. We offer safe, thrilling rides that cater to
            adrenaline junkies and sightseers alike. Learn more about our
            commitment to excellence and book your adventure today!
          </p>
        </div>

        {/* <Card /> */}
      </div>
    </section>
  );
}
