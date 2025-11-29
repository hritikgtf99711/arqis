import React from "react";
import AmenitiesSec from "./amenitiesSec";
import Tabs from "./tabs";
export default function amenitiesContainer() {
  return (
    <div className="w-[100%]">
      <Tabs />
      <AmenitiesSec/>  
    </div>
  );
}
