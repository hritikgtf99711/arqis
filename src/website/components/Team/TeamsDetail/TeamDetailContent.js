import React from "react";
import CommonHeading from "@/website/utils/CommonHeading";
import Paragraph from "@/website/utils/Paragraph";
import Image from "next/image";
export default function TeamDetailContent({onClose,teamsData}) {
console.log("teamsData in detail",teamsData);
  return (
    <div>
      <div onClick={onClose} className="cross absolute cursor-pointer top-[80px] right-[100px]">
        <Image
          src={`/assets/icons/cross.svg`}
          alt="cross"
          height={40}
          width={40}
          className="cross"
        />
      </div>
      <div className="max-w-[80%]">
        <CommonHeading
          customClass={"pb-[40px] text-[#FFD38F]"}
          heading={teamsData?.name||'Director Manish sharma'}
        />
      </div>
      <Paragraph
        customClass={`text-white mb-[25px]`}
        paragraph={teamsData?.description}
      />
      <Image
        src={teamsData?.signature||`/assets/teams/sign.png`}
        alt="sign"
        className="mt-[30px]"
        height={141}
        width={211}
      />
    </div>
  );
}
