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
  <div className="pl-[80px] parallax  projects_container h-[100%] mx-auto">
      <div  data-scroll='horizontal' className="flex  items-center scrollable-container overflow-x-scroll h-full">
            <div className="grid grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
              <div className="col-span-3">
                <ProjectImage />
              </div>
              <div className="col-span-1">
                <ProjectContent />
              </div>
            </div>
            <div className="grid grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
              <div className="col-span-3">
                <ProjectImage />
              </div>
              <div className="col-span-1">
                <ProjectContent />
              </div>
            </div>
            <div className="grid grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
              <div className="col-span-3">
                <ProjectImage />
              </div>
              <div className="col-span-1">
                <ProjectContent />
              </div>
            </div>
      </div>
    </div>
  );
}