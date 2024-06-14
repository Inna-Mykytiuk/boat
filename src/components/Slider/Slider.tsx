"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      // pagination={{
      //   clickable: true,
      // }}
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
      // modules={[Pagination]}
      className="mySwiper mt-[50px]"
    >
      <SwiperSlide className="w-[200px] h-[400px] rounded-3xl overflow-hidden shadow-card">
        <Image
          src="/images/gallery/galleryImg1.jpg"
          alt="boat"
          width={200}
          height={400}
          loading="lazy"
          className="w-[200px] h-[400px] object-cover object-center "
        />
      </SwiperSlide>
      <SwiperSlide className="w-[200px] h-[400px] rounded-3xl overflow-hidden shadow-card">
        <Image
          src="/images/gallery/galleryImg2.jpg"
          alt="boat"
          width={200}
          height={400}
          loading="lazy"
          className="w-[200px] h-[400px] object-cover object-center "
        />
      </SwiperSlide>
      <SwiperSlide className="w-[200px] h-[400px] rounded-3xl overflow-hidden shadow-card">
        <Image
          src="/images/gallery/galleryImg3.jpg"
          alt="boat"
          width={200}
          height={400}
          loading="lazy"
          className="w-[200px] h-[400px] object-cover object-center "
        />
      </SwiperSlide>
      <SwiperSlide className="w-[200px] h-[400px] rounded-3xl overflow-hidden shadow-card">
        <Image
          src="/images/gallery/galleryImg4.jpg"
          alt="boat"
          width={200}
          height={400}
          loading="lazy"
          className="w-[200px] h-[400px] object-cover object-center "
        />
      </SwiperSlide>
      <SwiperSlide className="w-[200px] h-[400px] rounded-3xl overflow-hidden shadow-card">
        <Image
          src="/images/gallery/galleryImg5.jpg"
          alt="boat"
          width={200}
          height={400}
          loading="lazy"
          className="w-[200px] h-[400px] object-cover object-center "
        />
      </SwiperSlide>
    </Swiper>
  );
}
