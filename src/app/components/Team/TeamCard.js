import React from "react";
import Image from "next/image";
import { useState } from "react";
import Modals from "@/app/utils/Modals";
export default function TeamCard({ image,onClick }) {

  return (
     <>
    <div className="col-span fade-up" onClick={onClick}>
      <div className="h-[100%] cursor-pointer bg-[#c6f5dc52] pt-[80px] relative overflow-hidden rounded-[200px]">
        <p className="uppercase text-center max-w-[70%] mx-[auto] text-[20px]">
          Director Manish sharma
        </p>
        <Image src={image} alt="" className="h-[400px] object-cover mt-[50px]" height={200} width={300} />
      </div>
    </div>
    </>
  );
}
  