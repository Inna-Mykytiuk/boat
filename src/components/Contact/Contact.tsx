import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contacts" className="bg-mainBcg ">
      <div className="container bg-contactBg  bg-no-repeat bg-cover bg-center">
        <h1 className="title relative gradient-contact font-bold text-[60px] sm:text-[80px] md:text-[140px] xl:text-[240px] xxl:text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase ">
          Contact
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <h3
              className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-[280px] md:max-w-[350px] before:hidden text-center
          md:before:absolute  before:content-[''] md:before:block md:before:left-[100px] md:before:top-[-30px] xl:before:left-[-60px] xl:before:top-[20px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
            >
              Your Premier destination for hight-speed fun
            </h3>
          </div>
          <div>
            <Image
              src="/images/boat/yacht2.png"
              alt="travel logo"
              width={350}
              height={303}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
