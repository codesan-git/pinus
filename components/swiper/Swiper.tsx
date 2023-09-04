"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "@/app/styles/swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Sliding = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className={style.swiperSlide}>
        <Image 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
            alt="profile"
            width={1500}
            height={1500} 
            className="border p-1" 
        />
        <h1 className="mt-3">Ankit Jangir</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <Image 
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
            alt="profile"
            width={1500}
            height={1500} 
            className="border p-1" 
        />
        <h1 className="mt-3">Aman Sharma</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <Image 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
            alt="profile"
            width={1500}
            height={1500} 
            className="border p-1" 
        />
        <h1 className="mt-3">Aditi Jangir</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliding;