"use client";
import React from "react";
import RightStat from "./about/RightStat";
import ContentSec from "./about/ContentSec";
import { useRef } from "react";
import ScrollLayout from "@/website/utils/ScrollLayout";
export default function About() {
  const scrollableRef = useRef(null);

  return (
    <ScrollLayout
      leftContent={<ContentSec />}
      rightContent={<RightStat />}
      scrollableRef={scrollableRef}
      isShowDrag={true}
    />
  );
}
