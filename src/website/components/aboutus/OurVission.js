import CommonHeading from '@/website/utils/CommonHeading'
import React from "react";
import Image from "next/image";
import Paragraph from "@/website/utils/Paragraph";
export default function OurMission({ mobVia,vissionData }) {
  vissionData=vissionData?.data;
  console.log(vissionData)
  return (
    <div className="lg:pt-[100px] pt-[60px]">
      <CommonHeading
        customClass={`${mobVia ? "text-[#000]" : "text-[#FFD38F]"}`}
        heading={vissionData?.title}
      />
      <div className="m-[auto] my-[40px] lg:my-[70px]">
        <Image
          src={vissionData?.banner?.desktop_file}
          alt="experience"
          className="w-[100%] arrow"
          width={"643"}
          height={468}
        />
      </div>
      <div className="">
        <div
          className="text-white lg:mt-5 description !mb-0 text-[#113120] description !tracking-[0.4px] mb-[20px]"
          dangerouslySetInnerHTML={{ __html: vissionData?.description }}
        />
      </div>
    </div>
  );
}
