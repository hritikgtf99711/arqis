import Image from "next/image";
import React from "react";
import CommonHeading from "@/app/utils/CommonHeading";
import Paragraph from "@/app/utils/Paragraph";
export default function ExperienceContent() {
  return (
    <div className=" parallax">
      <CommonHeading
        customClass="text-[#FFD38F]"
        heading="Reshaping Real Estate with Clarity, Calm, and Conviction "
      />
      <div className="m-[auto] my-[70px]">
        <Image
          src={"/assets/about/about_1.jpg"}
          alt="experience"
          className="w-[100%] arrow"
          width={"643"}
          height={468}
        />
      </div>
      <div className="mt-5">
        <Paragraph
          customClass="text-[#fff]"
          paragraph="In a skyline of glass and ambition, Arqis follows a quieter purpose; not to outshine, but to outlast. We come from a place beyond traditional real estate, a collective of planners, creators, and thinkers with decades of experience, reimagining what spaces can truly mean to people."
        />
        <Paragraph
          customClass="text-[#fff]"
          paragraph="Ours is not a new name, but a renewed understanding. We’ve studied the patterns, seen the gaps, and believe it’s time to put people, not projects, back at the heart of the blueprint."
        />
        <Paragraph
          customClass="text-[#fff]"
          paragraph="At Arqis, design is not display; it’s dialogue. We believe real estate isn’t a transaction, but a turning point; built on long-term thinking, shaped by honesty, and guided by clarity. Our identity draws from the balance of community and calm, blending the warmth of a neighborhood with the ambition of modern design."
        />
          <Paragraph
          customClass="text-[#fff]"
          paragraph="We bring in green where others go grey, movement where others build mass, and purpose where others chase spectacle."
        />
           <Paragraph
          customClass="text-[#fff]"
          paragraph="We build with intention, not noise. Where others chase attention, we choose integrity.
         In a skyline that competes for the spotlight, we’d rather create the kind of light that lasts; quiet, clear, and enduring."
        />
         <Paragraph
          customClass="text-[#fff]"
          paragraph="Because true architecture doesn’t shout; it stands."
        />
      </div>
    </div>
  );
}
