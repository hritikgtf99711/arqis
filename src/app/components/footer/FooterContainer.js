import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollContext from "@/app/context/ScrollContext";
import { useContext } from "react";
export default function FooterContainer() {
  const {gotoFn}=useContext(ScrollContext)
  return (
    <div className="  parallax">
      <figure>
        <Image
          src={`/assets/logo-black.png`}
          alt=""
          className="m-auto"
          height={133}
          width={415}
        />
      </figure>
      <div className=" border-y-[#00000033] border-y-[1px] my-[50px] py-[60px]">
        <ul className="grid gap-[35px] grid-cols-2 max-w-[50%] mx-[auto]">
          <li className="col-span text-center">
            <Link onClick={()=>gotoFn(1)} className="uppercase tracking-[1.8]" href={"#"}>
              Home
            </Link>
          </li>
          <li className="col-span text-center">
            <Link  onClick={()=>gotoFn(3)} className="uppercase tracking-[1.8]" href={"#"}>
              Our Team 
            </Link>
          </li>
          <li className="col-span text-center">
            <Link  onClick={()=>gotoFn(4)} className="uppercase tracking-[1.8]" href={"#"}>
              Philosophy
            </Link>
          </li>
          <li className="col-span text-center">
            <Link onClick={()=>gotoFn(5)}   className="uppercase tracking-[1.8]" href={"#"}>
              Careers
            </Link>
          </li>
          <li className="col-span text-center">
            <Link onClick={()=>gotoFn(6)} className="uppercase tracking-[1.8]" href={"#"}>
              Projects
            </Link>
          </li>
          <li className="col-span text-center">
            <Link  onClick={()=>gotoFn(7)}  className="uppercase tracking-[1.8]" href={"#"}>
              Media Centre
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex justify-center gap-10">
        <li>
          <Link href={"#"}>
            <Image
              src={`/assets/icons/instagram.png`}
              alt=""
              height={20}
              width={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image
              src={`/assets/icons/facebook.png`}
              alt=""
              height={20}
              width={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image
              src={`/assets/icons/youtube.png`}
              alt=""
              height={20}
              width={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image
              src={`/assets/icons/linkedin.png`}
              alt=""
              height={20}
              width={20}
            />
          </Link>
        </li>
      </ul>

      <p className="text-center uppercase tracking-[2] text-[#000000B2] pt-[30px]">
        copyright © ARQIS GROUP 2025.
      </p>
      <p className="text-center uppercase tracking-[2] mt-2 text-[#000000B2] ">
        all rights reserved | crafted by gtf technologies
      </p>
    </div>
  );
}
