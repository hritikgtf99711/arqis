import React from "react";
import HorizontalLayout from "@/app/HorizontalLayout";
import HomeBanner from "@/app/components/microsite/HomeBanner";
import About from "@/app/components/microsite/About";
import AmenitiesContainer from "@/app/components/microsite/amenities/amenitiesContainer";
export default function page() {
  return (
    <HorizontalLayout>
      <div className="flex h-[100vh] overflow-x-scroll horizontal-section">
        <div className="basis-[100%] flex items-center justify-center  item grow-0 shrink-0 h-full">
          <HomeBanner />
        </div>
         <div className="basis-[100%] flex items-center justify-center  item grow-0 shrink-0 h-full">
          <About />
        </div>
        <div className="basis-[100%] flex items-center  item grow-0 shrink-0 h-full">
             <AmenitiesContainer/>
          </div>
      </div>
    </HorizontalLayout>
  );
}
