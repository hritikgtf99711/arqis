import React from "react";
import ScrollLayout from "@/website/utils/ScrollLayout";
export default function About() {
  return (
    <ScrollLayout
      leftContent={`<ContentSec overviewData={overviewData} />`}
      rightContent={
      ` <ExperienceContent/>`
      }
    />
  );
}
