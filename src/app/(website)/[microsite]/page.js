import React from "react";
import HorizontalLayout from "../HorizontalLayout";
import HomeBanner from "@/website/components/microsite/HomeBanner";
import About from "@/website/components/aboutus/About";
export default function page() {
  return (
    <HorizontalLayout>
      <div className="flex h-[100vh] overflow-x-scroll horizontal-section">
        <div className="basis-[100%] flex items-center justify-center  item grow-0 shrink-0 h-full">
          <HomeBanner />
        </div>
         <div className="basis-[100%] flex items-center justify-center  item grow-0 shrink-0 h-full">
        </div>
      </div>
    </HorizontalLayout>
  );
}
