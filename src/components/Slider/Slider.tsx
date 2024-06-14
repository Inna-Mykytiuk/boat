"use client";

import React from "react";
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
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  );
}
