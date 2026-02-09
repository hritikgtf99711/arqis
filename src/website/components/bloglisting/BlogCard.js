import React from "react";
import Paragraph from "@/website/utils/Paragraph";
import Image from "next/image";
export default function BlogCard({ image, heading, index, setHoveredSlide }) {
  return (
    <div
      className="blog-card"
      onClick={() => {
        setHoveredSlide(index);
      }}
    >
      <Image src={image} className="fade-up 2xl:h-auto xl:h-[240px] object-cover" alt="" height={338} width={430} />
      <Paragraph customClass={"2xl:mt-6 mt-[15px] fade-up 2xl:text-[20px] text-[16px] 2xl:leading-[28px] xl:leading-[20px]"} paragraph={heading} />
    </div>
  );
}
