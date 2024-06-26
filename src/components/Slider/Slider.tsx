"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import galleryData from "@/data/gallery.json";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper mt-[280px] sm:mt-[220px] md:mt-[140px] xl:mt-[30px]"
    >
      {galleryData.map((image, index) => (
        <SwiperSlide
          key={index}
          className="w-full h-[200px] md:w-[200px] md:h-[400px] rounded-3xl overflow-hidden shadow-card"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={400}
            loading="lazy"
            className="w-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
