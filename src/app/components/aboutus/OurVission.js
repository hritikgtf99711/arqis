import CommonHeading from "@/app/utils/CommonHeading";
import React from "react";
import Image from "next/image";
import Paragraph from "@/app/utils/Paragraph";
export default function OurMission({ mobVia }) {
  return (
    <div className="lg:pt-[100px] pt-[60px]">
      <CommonHeading
        customClass={`${mobVia ? "text-[#000]" : "text-[#FFD38F]"}`}
        heading="Our Vission "
      />
      <div className="m-[auto] my-[40px] lg:my-[70px]">
        <Image
          src={"/assets/about/our_vission.jpg"}
          alt="experience"
          className="w-[100%] arrow"
          width={"643"}
          height={468}
        />
      </div>
      <div className="">
        <Paragraph
          customClass={`${mobVia ? "text-[#000]" : "text-[#fff]"}`}
          paragraph="To redefine the skyline through spaces that endure; not just in structure, but in spirit. We envision a world where architecture becomes an act of empathy, where design breathes life into communities, and where every space stands as a testament to integrity, clarity, and timeless intent."
        />
      </div>
    </div>
  );
}
