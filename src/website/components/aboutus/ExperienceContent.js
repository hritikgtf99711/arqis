import Image from "next/image";
import React from "react";
import CommonHeading from '@/website/utils/CommonHeading'
import Paragraph from "@/website/utils/Paragraph";
import OurMission from "./OurMission";
import OurVission from "./OurVission";
import Redirect_Link from "@/website/utils/Redirect_txt";
export default function ExperienceContent({mobVia,missionData,vissionData,experienceData}) {
  experienceData=experienceData?.data
  return (
    <div className=" parallax">
      <CommonHeading
        customClass="text-[#FFD38F]"
        heading={experienceData.title}
      />
    <div>
      <div className="m-[auto] my-[70px]">
        <Image
          src={experienceData?.banner?.desktop_file}
          alt="experience"
          className="w-[100%] arrow"
          width={"643"}
          height={468}
        />
      </div>
      <div className="mt-5">
        <div
          className="text-white description"
          dangerouslySetInnerHTML={{ __html: experienceData.description }}
        />
      </div>
    </div>
    {!mobVia && <><OurMission missionData={missionData}/>
    <OurVission vissionData={vissionData}/>
    <Redirect_Link  customClass={`mt-[50px] change_icon_clr  text-white`} text={`explore about us`} link={``}/>
    </>}
    </div>
  );
}
