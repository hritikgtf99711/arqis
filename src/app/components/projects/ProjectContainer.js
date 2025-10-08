import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./projectContent";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectContainer() {
  return (
    <div className="container parallax projects_container h-[90%] mx-auto">
      <div className="flex justify-center horizontal-scroll overflow-x-scroll h-full">
        {/* <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView="auto"
          navigation={{
          prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="w-full"
        >
          <SwiperSlide> */}
            <div className="grid grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
              <div className="col-span-3">
                <ProjectImage />
              </div>
              <div className="col-span-1">
                <ProjectContent />
              </div>
            </div>
          {/* </SwiperSlide>
          <SwiperSlide> */}
            <div className="grid grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
              <div className="col-span-3">
                <ProjectImage />
              </div>
              <div className="col-span-1">
                <ProjectContent />
              </div>
            </div>
          {/* </SwiperSlide>
          <SwiperSlide> */}
            <div className="grid grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
              <div className="col-span-3">
                <ProjectImage />
              </div>
              <div className="col-span-1">
                <ProjectContent />
              </div>
            </div>
          {/* </SwiperSlide> */}
          {/* <div className="flex justify-end py-[30px] gap-[20px] items-center">
             <Image
              src="/assets/icons/arrow_left.png"
              alt="Next slide"
              width={25}
              height={25}
              className="cursor-pointer arrow custom-prev rotate-[180deg]"
            />
            <Image
              src="/assets/icons/arrow_right.png"
              alt="Previous slide"
              width={25}
               height={25}
              className="cursor-pointer arrow custom-next rotate-[180deg]"
            />
           
          </div> */}
        {/* </Swiper> */}
      </div>
    </div>
  );
}