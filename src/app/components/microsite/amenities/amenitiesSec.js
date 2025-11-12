"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

const projects = [
  { id: 1, image: "/assets/microsite/amenities/amenities_1.webp", content: "" },
  { id: 2, image: "/assets/microsite/amenities/amenities_2.webp", content: "" },
  { id: 1, image: "/assets/microsite/amenities/amenities_1.webp", content: "" },
  { id: 2, image: "/assets/microsite/amenities/amenities_2.webp", content: "" },
  { id: 1, image: "/assets/microsite/amenities/amenities_1.webp", content: "" },
  { id: 2, image: "/assets/microsite/amenities/amenities_2.webp", content: "" },
];

export default function AmenitiesSec() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.9;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll =
        direction === "next"
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;

      gsap.to(scrollRef.current, {
        scrollTo: { x: targetScroll, autoKill: true },
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="parallax relative projects_container pt-[40px]  mx-auto">
      <div
        ref={scrollRef}
        data-scroll="horizontal"
        className="flex    items-center scrollable-container  pl-[80px] overflow-x-scroll  snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid  project_card grid-col-1 lg:grid-cols-4 grow-0 shrink-0 basis-[60%] lg:basis-[60%] pr-[50px] gap-[10px] lg:gap-10"
          >
            <div className="col-span lg:col-span-4">
              <Image
                src={project.image}
                alt=""
                className="w-full"
                height={500}
                width={500}
              />
              <div className="absolute">{project.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="flex justify-start lg:flex hidden lg:pr-0 pr-[30px] pt-[30px] gap-[20px] items-center">
          <Image
            src="/assets/icons/arrow_right.png"
            alt="Previous slide"
            width={25}
            height={25}
            className="cursor-pointer arrow"
            onClick={() => scroll("prev")}
          />
          <Image
            src="/assets/icons/arrow_left.png"
            alt="Next slide"
            width={25}
            height={25}
            className="cursor-pointer arrow"
            onClick={() => scroll("next")}
          />
        </div>
      </div>
    </div>
  );
}
