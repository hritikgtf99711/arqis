"use client";
import LogoSection from "./mobcomponents/home/LogoSection";
import MobHorizontalLayout from "./MobHorizontalLayout";
import About from "./mobcomponents/aboutus/Aboutus";
import ProjectContainer from "./mobcomponents/projects/projects";
import TeamContainer from "./components/Team/TeamContainer";
import MediaContainer from "./components/media/MediaContainer";
import BlogContainer from "./components/bloglisting/BlogContainer";
import CareerContainer from "./components/career/CareerContainer";
import ContactformContainer from "./components/contactform/ContactformContainer"
import FooterContainer from "./components/footer/FooterContainer";
export default function MobileLayout() {
  return (

    <MobHorizontalLayout>
      <div className="flex h-[100vh] overflow-x-scroll pt-[100px] horizontal-section">
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <LogoSection />
        </div>
        <div data-scroll='vertical' className="basis-[100%] overflow-y-scroll mob_scroll   item grow-0 shrink-0 h-full">
          <About />
           <FooterContainer/>
        </div>
        <div className="basis-[100%]  item grow-0   overflow-y-scroll  shrink-0 h-full">
          <ProjectContainer />
          <FooterContainer/>
        </div>
        <div className="basis-[100%]  item grow-0  overflow-y-scroll  shrink-0 h-full  items-center">
          <TeamContainer />
           <FooterContainer/>
        </div>
        <div className="basis-[100%]  overflow-y-scroll  item grow-0 shrink-0 h-full">
          <CareerContainer />
           <FooterContainer/>
        </div>
        <div className="basis-[100%]  overflow-y-scroll  item grow-0 shrink-0 h-full  items-center">
          <MediaContainer />
           <FooterContainer/>
        </div>
        <div className="basis-[100%] item  overflow-y-scroll  grow-0 shrink-0 h-full flex items-center">
          <BlogContainer />
           <FooterContainer/>
        </div>
        <div className="basis-[100%]  overflow-y-scroll  item grow-0 shrink-0 h-full">
          <ContactformContainer />
           <FooterContainer/>
        </div>
       
      </div>
    </MobHorizontalLayout>
  );
}