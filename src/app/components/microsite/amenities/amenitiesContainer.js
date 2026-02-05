import React from "react";
import AmenitiesSec from "@/app/components/microsite/amenities/amenitiesSec";
import Tabs from "@/app/components/microsite/amenities/tabs";
export default function AmenitiesContainer() {
  return (
    <div className="w-[100%]">
      <Tabs />
      <AmenitiesSec/>  
    </div>
  );
}
