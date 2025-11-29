import React from "react";
import AmenitiesSec from "./AmenitiesSec";
import Tabs from "./Tabs";
export default function amenitiesContainer() {
  return (
    <div className="w-[100%]">
      <Tabs />
      <AmenitiesSec/>  
    </div>
  );
}
