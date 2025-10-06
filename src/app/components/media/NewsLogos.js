"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Modals from "@/app/utils/Modals";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MediaContainer from "./MediaContainer";

export default function NewsLogos() {
  return (
    <div className="pt-[30px]">
       <div className="arrow_container flex gap-5 justify-start pb-[30px] fade-up">
        <div className="arrow_prev cursor-pointer">
          <img src="/assets/icons/arrow_right.png" alt="Previous" width={25} />
        </div>
        <div className="arrow_next cursor-pointer">
          <img src="/assets/icons/arrow_left.png" alt="Next" width={25} />
        </div>
      </div>
      <div className="bg-[#fff] fade-up news_container py-[30px]  ">
         
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          // pagination={{ clickable: true }}
          navigation={{
            prevEl: ".arrow_prev",
            nextEl: ".arrow_next",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">
              <Image
                src="/assets/media-center/news/logo_1.png"
                alt="Logo 1"
                height={120}
                width={120}
                className="w-[150px] object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">
              <Image
                src="/assets/media-center/news/logo_2.png"
                alt="Logo 2"
                height={120}
                width={120}
                className="w-[400px] m-[auto] object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">f
              <Image
                src="/assets/media-center/news/logo_4.png"
                alt="Logo 4"
                height={120}
                width={120}
                className="w-[60%] object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">
              <Image
                src="/assets/media-center/news/logo_3.png"
                alt="Logo 3"
                height={120}
                width={120}
                className="w-[60%] object-contain"
              />
            </div>
          </SwiperSlide>
               <SwiperSlide>
            <div className="flex justify-center items-center fade-up">
              <Image
                src="/assets/media-center/news/logo_1.png"
                alt="Logo 1"
                height={120}
                width={120}
                className="w-[150px] object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">
              <Image
                src="/assets/media-center/news/logo_2.png"
                alt="Logo 2"
                height={120}
                width={120}
                className="w-[400px] m-[auto] object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">f
              <Image
                src="/assets/media-center/news/logo_4.png"
                alt="Logo 4"
                height={120}
                width={120}
                className="w-[60%] object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center fade-up">
              <Image
                src="/assets/media-center/news/logo_3.png"
                alt="Logo 3"
                height={120}
                width={120}
                className="w-[60%] object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Modals/> */}
    
    </div>
  );
}