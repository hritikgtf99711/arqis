import CommonHeading from "@/app/utils/CommonHeading";
import React from "react";
import Image from "next/image";
import Paragraph from "@/app/utils/Paragraph";
export default function OurMission({ mobVia }) {
  return (
    <div className="lg:pt-[100px] pt-[60px]">
      <CommonHeading
        customClass={`${mobVia ? "text-[#000]" : "text-[#FFD38F]"}`}
        heading="Our Mission "
      />
      <div className="m-[auto]  my-[40px] lg:my-[70px] ">
        <Image
          src={"/assets/about/our_mission.jpg"}
          alt="experience"
          className="w-[100%] arrow"
          width={"643"}
          height={468}
        />
      </div>

      <div className="">
        <Paragraph
          customClass={`${mobVia ? "text-[#000]" : "text-[#fff]"}`}
          paragraph="To craft environments that balance ambition with authenticity. We build spaces that speak not through spectacle, but through sensitivity combining innovation, sustainability, and human insight to put people back at the heart of the real estate."/>
      </div>
    </div>
  );
}
