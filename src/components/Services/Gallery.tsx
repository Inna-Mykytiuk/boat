import React from "react";
import Title from "../Title/Title";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="mt-[20px] md:mt-[80px] xxl:mt-[40px] mb-[350px]"
    >
      <div className="container relative">
        <Title>Gallery</Title>
        <div className=" absolute top-[80px] md:top-[120px] xl:top-[140px] xl:left-[100px] xxl:left-[250px] flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] xl:gap-[80px]">
          <h3
            className="relative text-dark font-contrail text-xl xl:text-3xl uppercase max-w-[280px] md:max-w-[350px] before:hidden text-center
          md:before:absolute  before:content-[''] md:before:block md:before:left-[100px] md:before:top-[-30px] xl:before:left-[-60px] xl:before:top-[20px] before:z-10 before:h-[20px] before:w-[60px] 
          before:bg-lightBlue before:rounded-full
          "
          >
            Your experience the thrill through our eyes
          </h3>
          <p className="text-dark  font-normal font-comforta text-base md:max-w-[400px] xl:max-w-[600px] mdOnly:mr-[30px]">
            Get a simple of the exitement thqt awaits you with our gallery of
            stunning photos and videos from scenic vistas to action-packed
            moments on the water, our gallery captures the essence of the speed
            boat experience browse through our collection and get ready to make
            memories that will last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
}
