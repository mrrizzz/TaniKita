import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function WelcomeCarousel() {
  return (
    <>
      <style jsx global>{`
        :root {
          --swiper-theme-color: #00ff00; /* Change this to your desired color */
        }
        .swiper-pagination-bullet {
          background-color: #cccccc; /* inactive dot color */
        }
        .swiper-pagination-bullet-active {
          background-color: #fff; /* active dot color */
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #ccc; /* Change this to your desired color */
          padding: 30px;
          border-radius: 50%;
        }
      `}</style>
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{ pauseOnMouseEnter: true, delay: 5000 }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="text-white bg-red-500 h-full w-full"
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className=" bg-[url('/slide1.jpg')] bg-cover bg-center ">
          SLIDE 1
        </SwiperSlide>
        <SwiperSlide className=" bg-[url('/slide1.jpg')] bg-cover bg-center ">
          SLIDE 2
        </SwiperSlide>
        <SwiperSlide className=" bg-[url('/slide1.jpg')] bg-cover bg-center ">
          SLIDE 3
        </SwiperSlide>
        <SwiperSlide className=" bg-[url('/slide1.jpg')] bg-cover bg-center ">
          SLIDE 4
        </SwiperSlide>
      </Swiper>
    </>
  );
}
