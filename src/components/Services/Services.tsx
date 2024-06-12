import React from "react";
import Card from "@/components/Card/Card";
import Title from "../Title/Title";

export default function Services() {
  return (
    <section id="services" className="mt-[50px] mb-[50px]">
      <div className="container relative">
        <h2 className="title relative gradient-text font-bold text-[60px] sm:text-[100px] md:text-[180px] xl:text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase">
          Speedy
        </h2>

        <div className="w-[95%] absolute top-[120px] left-[100px] flex justify-center items-center gap-[80px]">
          <h3
            className="relative text-dark font-contrail text-3xl uppercase max-w-[350px]
          before:absolute before:top-[20px] before:content-[''] before:block before:left-[-80px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your Premier destination for hight-speed fun
          </h3>
          <p className="text-dark  font-normal font-comforta text-base  max-w-[600px]">
            At boat, we’re passionate about delivering unforgettable experiences
            on the water. We offer safe, thrilling rides that cater to
            adrenaline junkies and sightseers alike. Learn more about our
            commitment to excellence and book your adventure today!
          </p>
        </div>

        <Card />
      </div>
    </section>
  );
}
