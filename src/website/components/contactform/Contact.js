import React from "react";
import CommonHeading from '@/website/utils/CommonHeading'
import Image from "next/image";

export default function contact() {
  return (
    <div className="custom-container m-auto h-[100%] flex flex-col justify-center">
      <CommonHeading customClass={`text-[#113120] uppercase`} heading={`Get in touch`} />
      <ul className="2xl:mt-[80px] xl:mt-[30px]">
        <li className="2xl:mb-[30px] mb-[10px]">
          <a className="uppercase inline-flex gap-[20px] 2xl:[16px] text-[14px]" href="mailto:mkt@ARQIS GROUP.in">
            <Image
              src={`/assets/icons/mail.svg`}
              alt="youtube"
              height={30}
              width={30}
              className="2xl:w-[22px] w-[20px]"
            />
            mkt@ARQIS GROUP.in
          </a>
        </li>
        <li className="2xl:mb-[30px] mb-[10px]">
          <a className="uppercase inline-flex gap-[20px] 2xl:[16px] text-[14px]" href="+91999999999">
            <Image
              src={`/assets/icons/telephone.svg`}
              alt="telephone"
              height={30}
              width={30}
              className="2xl:w-[22px] w-[20px]"
            />
            +91999999999
          </a>
        </li>
        <li>
          <a className="uppercase inline-flex gap-[20px] 2xl:[16px] text-[14px]" href="#">
            <Image
              src={`/assets/icons/location.svg`}
              alt="telephone"
              height={30}
              width={30}
              className="2xl:w-[22px] w-[20px]"
            />
            Noida sector 25
          </a>
        </li>
      </ul>
    </div>
  );
}
