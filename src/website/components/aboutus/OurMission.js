import CommonHeading from "@/website/utils/CommonHeading";
import React from "react";
import Image from "next/image";
export default function OurMission({ mobVia, missionData }) {
  missionData = missionData?.data;
  return (
    <div className="lg:pt-[100px] pt-[60px]">
      <CommonHeading
        customClass={`${mobVia ? "text-[#000]" : "text-[#FFD38F]"}`}
        heading={missionData?.title}
      />
      <div className="m-[auto]  my-[40px] lg:my-[70px] ">
        <Image
          src={missionData?.banner?.mobile_file}
          alt="experience"
          className="w-[100%] arrow"
          width={"643"}
          height={468}
        />
      </div>

      <div className="">
        <div
          className="text-white lg:mt-5 !mb-0 text-[#113120] description  leading-[1.8] !tracking-[0.4px] mb-[20px]"
          dangerouslySetInnerHTML={{ __html: missionData.description }}
        />
      </div>
    </div>
  );
}
