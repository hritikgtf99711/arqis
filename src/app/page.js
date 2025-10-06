"use client"
import LogoSection from "./components/home/LogoSection";
import HorizontalLayout from "./HorizontalLayout";
import About from "./components/aboutus/About";
import ProjectContainer from "./components/projects/ProjectContainer";
import TeamContainer from "./components/Team/TeamContainer";
import MediaContainer from "./components/media/MediaContainer";
import BlogContainer from "./components/bloglisting/BlogContainer";
import FooterContainer from "./components/footer/FooterContainer";
import CareerContainer from "./components/career/CareerContainer";
import ContactformContainer from "./components/contactform/ContactformContainer";
export default function Home() {
  
  return (
    <>
      <HorizontalLayout>
        <div className="flex items-center horizontal-section">
          <div className="basis-[100%] item grow-0  shrink-0">
            <LogoSection />
          </div>
            <div className="basis-[100%] item grow-0 h-[100%]  shrink-0">
              <About />
            </div>
          <div className="basis-[100%] item grow-0  shrink-0">
            <ProjectContainer />
          </div>
          <div className="basis-[100%] item grow-0  shrink-0">
            <TeamContainer />
          </div>
          <div className="basis-[100%] item grow-0   h-[100%]  shrink-0">
            <CareerContainer />
          </div>
          
          <div className="basis-[100%] flex justify-center items-center item grow-0 shrink-0">
            <MediaContainer />
          </div>
          <div className="basis-[100%] flex justify-center items-center item grow-0 shrink-0">
            <BlogContainer />
          </div>
           <div className="basis-[100%] h-[100%]  item grow-0 shrink-0">
            <ContactformContainer />
          </div>
          
          <div className="basis-[100%] flex justify-center items-center item grow-0 shrink-0">
            <FooterContainer />
          </div>
        </div>
      </HorizontalLayout>
    </>
  );
}
