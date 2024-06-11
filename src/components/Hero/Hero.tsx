import React from "react";
import Title from "../Title/Title";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full mt-[340px] sm:mt-[280px] md:mt-[260px] mb-[200px] md:mb-[300px] xl:mb-[480px] xxl:mb-[600px]">
      <div className="container">
        <h3 className="text-dark font-roboto font-bold text-2xl text-center uppercase tracking-tighter">
          Welcome&nbsp;&nbsp;to&nbsp;&nbsp;boat&nbsp;&nbsp;adventure&nbsp;&nbsp;tours
        </h3>
        <Title>Boat</Title>
      </div>
    </section>
  );
}
