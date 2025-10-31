import React from "react";
import Image from "next/image";

export default function TeamCard({ image,onClick,teamsData }) {
  return (
     <>
    <div className="col-span fade-up" onClick={onClick}>
      <div className={`h-[100%] cursor-pointer teams_card  lg:bg-[#c6f5dc52] pt-[80px] relative overflow-hidden rounded-[200px]`}>
        <p className="uppercase text-center max-w-[70%] mx-[auto] text-[20px]">
         {teamsData?.name}
        </p>
        <Image src={image} alt={teamsData.alt||''} className="h-[400px] m-[auto] object-cover mt-[20px] lg:mt-[50px]" height={200} width={300} />
      </div>
    </div>
    </>
  );
}
  