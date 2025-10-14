"use client";
import LogoSection from "./mobcomponents/home/LogoSection";
import MobHorizontalLayout from "./MobHorizontalLayout";
import About from "./components/aboutus/About";
import ProjectContainer from "./mobcomponents/projects/projects";
import TeamContainer from "./components/Team/TeamContainer";
import MediaContainer from "./components/media/MediaContainer";
import BlogContainer from "./components/bloglisting/BlogContainer";
import CareerContainer from "./components/career/CareerContainer";
import ContactformContainer from "./components/contactform/ContactformContainer";
import FooterContainer from "./components/footer/FooterContainer";
import Pagination from "./utils/Pagination";
export default function MobileLayout() {
  return (
    <MobHorizontalLayout>
      <div className="flex h-[100vh] overflow-hidden pt-[100px] horizontal-section">
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <LogoSection />
        </div>
        <div
          data-scroll="vertical"
          className="basis-[100%] overflow-y-scroll overflow-x-hidden mob_scroll   item grow-0 shrink-0 h-full"
        >
          <About  mobVia={1} />
          <Pagination/>
          <FooterContainer />
        </div>
        <div className="basis-[100%]  item grow-0 mob_scroll  overflow-y-scroll overflow-x-hidden  shrink-0 h-full">
          <ProjectContainer />
           <Pagination/>
          <FooterContainer />
        </div>
        {/* <div className="basis-[100%]  item grow-0  overflow-y-scroll overflow-x-hidden  shrink-0 h-full  items-center">
          <TeamContainer />
          <FooterContainer />
        </div> */}
        <div className="basis-[100%]  overflow-y-scroll overflow-x-hidden mob_scroll item grow-0 shrink-0 h-full">
          <CareerContainer />
           <Pagination/>
          <FooterContainer />
        </div>
        <div className="basis-[100%]  overflow-y-scroll overflow-x-hidden mob_scroll item grow-0 shrink-0 h-full  items-center">
          <MediaContainer />
           <Pagination/>
          <FooterContainer />
        </div>
        <div className="basis-[100%] item  overflow-y-scroll overflow-x-hidden mob_scroll  grow-0 shrink-0 h-full">
          <BlogContainer />
           <Pagination/>
          <FooterContainer />
        </div>
        <div className="basis-[100%]  overflow-y-scroll overflow-x-hidden  mob_scroll item grow-0 shrink-0 h-full">
          <ContactformContainer />
           <Pagination/>
          <FooterContainer />
        </div>
      </div>
    </MobHorizontalLayout>
  );
}
