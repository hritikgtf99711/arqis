"use client"
import React from "react";
import ContentSec from "./ContentSec";
import ExperienceContent from "./ExperienceContent";
import { useRef } from "react";
import OurMission from "./OurMission";
import OurVission from "./OurVission";
import ScrollLayout from "@/website/utils/ScrollLayout";
import Redirect_Link from "@/website/utils/Redirect_txt";
export default function About({ mobVia,missionData,vissionData,experienceData,overviewData }) {
  const scrollableRef = useRef(null);
  return (
    <>
      <ScrollLayout
        leftContent={<ContentSec overviewData={overviewData}  />}
        rightContent={<ExperienceContent   mobVia={mobVia}  missionData={missionData} vissionData={vissionData} experienceData={experienceData}  />}
        isShowDrag={true}
        scrollableRef={scrollableRef}
      />
      {mobVia && (
        <div className="custom-container  !pb-[80px]">
          <OurMission mobVia={mobVia} missionDataArr={missionData} />
          <OurVission mobVia={mobVia}  vissionData={vissionData}/>
          <Redirect_Link
            customClass={`mt-[50px]   text-black `}
            text={`explore about us`}
            link={``}
          />
        </div>
      )}
    </>
  );
}
