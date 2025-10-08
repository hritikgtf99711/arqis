"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Modals from "@/app/utils/Modals";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MediaContent from "./mediaContainer/MediaContent";
import MediaLogo from "./mediaContainer/MediaImage";
import { useRef } from "react";

export default function NewsLogos() {
  const scrollableRef = useRef(null);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const logosArr = [
    "/assets/media-center/news/logo_1.png",
    "/assets/media-center/news/logo_2.png",
    "/assets/media-center/news/logo_4.png",
    "/assets/media-center/news/logo_3.png",
    "/assets/media-center/news/logo_1.png",
    "/assets/media-center/news/logo_2.png",
    "/assets/media-center/news/logo_4.png",
    "/assets/media-center/news/logo_3.png",
  ];
  const handleMouseEnter = (index) => {
    setHoveredSlide(index);
  };

  const close = () => {
    setHoveredSlide(null);
  };
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
      <div className="bg-[#fff] fade-up news_container ">
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
            pauseOnMouseEnter: true,
          }}
          loop={true}
          navigation={{
            prevEl: ".arrow_prev",
            nextEl: ".arrow_next",
          }}
          className="mySwiper"
        >
          {logosArr.map((src, index) => (
            <SwiperSlide                 onClick={() => handleMouseEnter(index)} key={index}>
              <div
                className={`flex ${
                  hoveredSlide === index ? "z-[99999]" : ""
                }  justify-center items-center cursor-pointer fade-up py-[30px] relative`}
                // onMouseLeave={handleMouseLeave}
              >
                {src.includes("logo_4.png") && "f"}
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  height={120}
                  width={120}
                  className={
                    src.includes("logo_1.png")
                      ? "w-[100px] object-contain z-10"
                      : src.includes("logo_2.png")
                      ? "w-[400px] m-[auto] object-contain z-10"
                      : "w-[50%] object-contain z-10"
                  }
                />
                {/* <DragComponent scrollableRef={scrollableRef} className="z-10" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <Modals
          scrollableRef={scrollableRef}
          SelectedLogo={<MediaLogo selectedImage={logosArr[hoveredSlide]}  />}
          MediaContent={<MediaContent />}
          hoveredSlide={hoveredSlide}
          animation={'opacity'}
          onClose={close}
        />
  
    </div>
  );
}
