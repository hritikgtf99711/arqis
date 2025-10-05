import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./projectContent";

export default function ProjectCard() {
  return (
    <div className="container h-[90%]">
      <div className="flex justify-center flex-col h-[100%] ">
        <div className="flex overflow-x-scroll">
          <div className="grid  parallax  grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
            <div className="col-span-3">
              <ProjectImage />
            </div>
            <div className="col-span-1">
              <ProjectContent />
            </div> 
          </div>
          <div className="grid parallax grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
            <div className="col-span-3">
              <ProjectImage />
            </div>
            <div className="col-span-1">
              <ProjectContent />
            </div>
          </div>
          <div className="grid  parallax  grid-cols-4 grow-0 shrink-0 basis-[90%] pr-[50px] gap-10">
            <div className="col-span-3">
              <ProjectImage />
            </div>
            <div className="col-span-1">
              <ProjectContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
