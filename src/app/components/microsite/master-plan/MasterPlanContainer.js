import React from "react";
import FloorPlanTable from "./FloorPlanTable";
import Btn from "./Btn";
import CommonHeading from "@/website/utils/CommonHeading";
export default function MasterPlanContainer() {
  return (
    <div className="container ">
      <CommonHeading heading={`Explore Our FLoor Plans`} />
      <FloorPlanTable />
      <Btn />
    </div>
  );
}
