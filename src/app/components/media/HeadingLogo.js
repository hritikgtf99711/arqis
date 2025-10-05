import React from "react";
import CommonHeading from "@/app/utils/CommonHeading";
import Image from "next/image";
export default function HeadingLogo() {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 my-auto">
        <div className="w-[70%] fade-up">
        <CommonHeading heading={`Headlines. Stories. Impact.`} />
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="col-span scale-in">
            <div className="bg-[#11311f] ">
              <Image
                src={`/assets/media-center/arqis_white_1.png`}
                alt="ARQIS Group"
                height={200}
                width={400}
              />
            </div>
            <ul className="flex justify-center gap-[10px] mt-[20px]">
              <li>
                <a href="#">PNG</a>
              </li>{" "}
              |
              <li>
                <a href="#">JPG</a>
              </li>{" "}
              |
              <li>
                <a href="#">WEBP</a>
              </li>
            </ul>
          </div>
          <div className="col-span scale-in">
            <div className="bg-[#fff]">
              <Image
                src={`/assets/media-center/arqis_black_1.png`}
                alt="ARQIS Group"
                height={200}
                width={400}
              />
            </div>
            <ul className="flex justify-center gap-[10px] mt-[20px]">
              <li>
                <a href="#">PNG</a>
              </li>{" "}
              |
              <li>
                <a href="#">JPG</a>
              </li>{" "}
              |
              <li>
                <a href="#">WEBP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
