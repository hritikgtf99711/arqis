import React from "react";
import Image from "next/image";

export default function AbsSec({ abs_footer, isMicrosite }) {
  console.log('isMicrosite',isMicrosite);
  return (
    <div className={`${abs_footer == "abs_footer" ? 'absolute' : 'fixed'} z-[-1] h-[100vh] w-[100vw] left-0 top-0`}>
      <video
        autoPlay
        muted
        loop
        className="h-full object-cover w-full left-0"
      >
        <source src="./assets/common_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="/assets/green-leaf.png"
        id="green-leaf-icon"
        className={`${
          isMicrosite 
            ? 'w-[60%] lg:w-[25%]'  // Larger size for microsite
            : 'w-[250px]'  // Normal size for main site
        } absolute leaf_icon z-[999] left-0`}
        style={{ top: '30px' }}
        alt="logo"
        width={288} 
        height={208}
      />
    </div>
  );
}