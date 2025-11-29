"use client"

import { RiPagesFill } from "react-icons/ri";
import { useState } from "react";
import ProjectCard from "@/admin/components/card/ProjectCard";
import TestimonialCard from "@/admin/components/card/TestimonialCard";
import SectionsCard from "@/admin/components/card/SectionsCard";
import ProjectList from "@/admin/components/card/ProjectList";


const pages=[
  {name:"Home",slug:"home"},
  {name:"About",slug:"about"},
  // {name:"Contact",slug:"contact"},
  // {name:"CSR",slug:"csr"},
  // {name:"Media Center",slug:"media-center"},
  {name:"Career",slug:"career"},
  // {name:"Awards",slug:"awards"},
  // {name:"Our Blogs",slug:"our-blogs"},
  // {name:"Investor",slug:"investor"},
  // {name:"Township",slug:"township"},
  // {name:"Board of Directors",slug:"team-categories"},
] 
  
const ProjectsPages=[ 
  {name:"Platter",slug:"platter"},
  {name:"Typologies",slug:"typologies"},
  {name:"Sub Typologies",slug:"sub-typologies"},
];
const PlatterSections=[
  {name:"Amenities",slug:"amenities"},
  {name:"Location",slug:"location"},
];
const CMSPages=[
  {name:"Pages",slug:"pages",},
  {name:"News",slug:"news"},
  {name:"New Channels",slug:"news-channel"},
  {name:"Blogs",slug:"blog"},
  {name:"Our Team",slug:"our-team"},
  {name:"Jobs",slug:"jobs"},
  {name:"Press Kit",slug:"press-kit"},
  {name:"Press Kit Logos",slug:"press-kit-logos"},
];
const Dashboard = () => {
  const [totalProject, setTotalProjects] = useState(0);
  return (
    <section className=" grid grid-cols-12 gap-6 body-detail">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12"><ProjectCard data={totalProject}/></div>
        </div>
        <SectionsCard title="Pages" icon={RiPagesFill} data={pages} link="page"/>
        <SectionsCard title="Projects Sections" icon={RiPagesFill} data={ProjectsPages} link="cms"/>
        {/* <SectionsCard title="Platter Sections" icon={RiPagesFill} data={PlatterSections} link="platter"/> */}
        <SectionsCard title="CMS Sections" icon={RiPagesFill} data={CMSPages} link="cms"/>
      </div>
      <div className="col-span-4">
        <ProjectList setTotalProjects={setTotalProjects}/>
      </div>
    </section>
  );
};

export default Dashboard;
