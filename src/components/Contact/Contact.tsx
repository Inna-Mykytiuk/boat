import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contacts"
      className="bg-mainBcg z-[1] relative mt-[20px] md:mt-[40px] pt-[50px] pb-[50px] md:pb-[100px] xl:pb-[150px]
      before:hidden md:before:block before:absolute before:bg-lines before:top-0 before:left-[-80px] before:h-full before:w-[650px] before:bg-cover before:z-[-1] before:opacity-50

      after:hidden md:after:block after:absolute after:bg-linesKayak after:top-0 after:right-[-80px] after:h-full after:w-[650px] after:bg-cover after:z-[-1] after:opacity-50"
    >
      <div className="container bg-contactBg  bg-no-repeat bg-cover bg-center">
        <h1 className="title relative gradient-contact font-bold text-[60px] sm:text-[80px] md:text-[140px] xl:text-[240px] xxl:text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase ">
          Contact
        </h1>
        <div className="flex flex-col md:flex-row w-full relative">
          <div className="w-full xl:w-[50%]">
            <h3
              className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-full md:max-w-[350px] before:hidden text-center mb-4 xl:mb-5
          sm:before:absolute  before:content-[''] md:before:block md:before:left-[35px] md:before:top-[3px] xl:before:left-[20px] xl:before:top-[7px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
            >
              Get in touch
            </h3>
            <p className="text-dark font-normal font-comforta text-base mb-4 md:mb-10 xl:mb-[50px]">
              Have questions or need assistance? Our friendly team is here to
              help!
            </p>
            <ContactForm />
          </div>
          <div className="">
            <Image
              src="/images/boat/yacht2.png"
              alt="travel logo"
              width={350}
              height={303}
              className="absolute bottom-[-120px] md:bottom-[-75px] right-[-200px] md:right-[-240px] xl:right-[130px] object-cover object-center w-[400px] h-[750px] z-[-1] xl:z-[1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
