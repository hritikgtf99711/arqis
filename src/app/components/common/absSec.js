import React from "react";

export default function AbsSec() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute z-[-1] object-cover top-0 h-full w-full left-0"
      >
        <source src="./assets/common_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src="./assets/green-leaf.png"
        className="absolute left-0 top-0"
        alt="logo"
      />
    </>
  );
}
