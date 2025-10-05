import React from "react";

export default function AbsSec() {
  return (
    <div className="fixed z-[-1]  h-[100vh] w-[100vw] left-0 top-0">
      <video
        autoPlay
        muted
        loop
        className=" h-full object-cover w-full left-0"
      >
        <source src="./assets/common_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src="./assets/green-leaf.png"
        className="absolute w-[20%]  left-0 top-0"
        alt="logo"
      />
    </div>
  );
}
