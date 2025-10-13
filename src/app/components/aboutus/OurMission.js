import CommonHeading from "@/app/utils/CommonHeading";
import React from "react";
import Image from "next/image";
import Paragraph from "@/app/utils/Paragraph";
export default function OurMission() {
  return (
    <div className="mt-[100px]">
      <CommonHeading customClass="text-[#FFD38F]" heading="Our Mission " />
        <div className="m-[auto] my-[70px]">     
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
          customClass="text-[#fff]"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </div>
    </div>
  );
}
