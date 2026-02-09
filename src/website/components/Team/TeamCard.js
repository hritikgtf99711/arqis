import React from "react";
import Image from "next/image";

export default function TeamCard({ image,onClick,teamsData }) {
  return (
     <>
    <div className="col-span fade-up" onClick={onClick}>
      <div className={`h-[100%] cursor-pointer teams_card  lg:bg-[#c6f5dc52] 2xl:pt-[80px] relative overflow-hidden rounded-[200px]`}>
        <p className="uppercase text-center max-w-[70%] mx-[auto] 2xl:text-[20px] xl:text-[16px]">
         {teamsData?.name}
        </p>
        <Image src={image} alt={teamsData.alt||''} className="2xl:h-[400px] xl:h-[300px] m-[auto] 2xl:object-cover xl:object-contain  2xl:mt-[50px]" height={200} width={300} />
      </div>
    </div>
    </>
  );
}
  