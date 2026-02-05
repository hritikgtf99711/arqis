import LogoSection from "@/website/components/home/LogoSection";
import About from "@/website/components/aboutus/About";
import TeamContainer from "@/website/components/Team/TeamContainer";
import MediaContainer from "@/website/components/media/MediaContainer";
import BlogContainer from "@/website/components/bloglisting/BlogContainer";
import FooterContainer from "@/website/components/footer/FooterContainer";
import CareerContainer from "@/website/components/career/CareerContainer";
import ContactformContainer from "@/website/components/contactform/ContactformContainer"
import ProjectContainer from "@/website/components/projects/ProjectContainer";
import HorizontalLayout from "./HorizontalLayout";
import { blogsData1, experienceData1, jobsData1, missionData1, newsData1, overviewData1, teamsData1, visionData1 } from "@/admin/utils/apiData";
export default async function DesktopLayout() {

  return (
     <HorizontalLayout>
      <div className="flex h-[100vh] overflow-x-scroll horizontal-section">
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <LogoSection />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <About missionData={missionData1} vissionData={visionData1} experienceData={experienceData1} overviewData={overviewData1}  />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <ProjectContainer />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <TeamContainer teamsData={teamsData1?.data} />
        </div> 
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <CareerContainer jobsData={jobsData1?.data} />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <MediaContainer  newsData={newsData1}/>
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <BlogContainer blogsData={blogsData1?.data.data} />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <ContactformContainer />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <FooterContainer />
        </div>
      </div>
    </HorizontalLayout>
  );
}