import React from "react";
import Tabs from "./Tabs";
import AmenitiesSec from "./AmenitiesSec";
export default function amenitiesContainer() {
  return (
    <div className="w-[100%]">
      <Tabs />
      <AmenitiesSec/>  
    </div>
  );
}
