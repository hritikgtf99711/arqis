import React from "react";
import JobCards from "./JobCards";
import JobForm from "./JobForm";
export default function Jobs({jobsData}) {
  return (
    <div className="">
      <div className="job_cards  lg:pb-0 pb-[50px] lg:border-none border-b-[1px] border-[#fff]">
        {
          jobsData.map((item,index)=>{
            return  <JobCards jobs={item} key={index} />
          })
        }

      </div>
      <JobForm />
    </div>
  );
}
