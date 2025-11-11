import LogoSection from "@/website/components/home/LogoSection";
import HorizontalLayout from "./HorizontalLayout";
import About from "@/website/components/aboutus/About";
import TeamContainer from "@/website/components/Team/TeamContainer";
import MediaContainer from "@/website/components/media/MediaContainer";
import BlogContainer from "@/website/components/bloglisting/BlogContainer";
import FooterContainer from "@/website/components/footer/FooterContainer";
import CareerContainer from "@/website/components/career/CareerContainer";
import ContactformContainer from "@/website/components/contactform/ContactformContainer"
import ProjectContainer from "@/website/components/projects/ProjectContainer";
import { getTeams,getBlogs,getjobs ,getProjects,getMission,getMediaNews,getVission,getExperience,getOverview} from "@/admin/utils/api";
export default async function DesktopLayout() {
  const [teamsData,blogsData,jobsData,projectsData,missionData,vissionData,experienceData,overviewData,newsData] = await Promise.all([getTeams(),getBlogs("10","DESC"),getjobs(),getProjects(),getMission(),getVission(),getExperience(),getOverview(),getMediaNews()]);
  return (
     <HorizontalLayout>
      <div className="flex h-[100vh] overflow-x-scroll horizontal-section">
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <LogoSection />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <About missionData={missionData} vissionData={vissionData} experienceData={experienceData} overviewData={overviewData}  />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <ProjectContainer />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <TeamContainer teamsData={teamsData?.data} />
        </div> 
        <div className="basis-[100%] item grow-0 shrink-0 h-full">
          <CareerContainer jobsData={jobsData?.data.data} />
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <MediaContainer  newsData={newsData}/>
        </div>
        <div className="basis-[100%] item grow-0 shrink-0 h-full flex items-center">
          <BlogContainer blogsData={blogsData?.data.data} />
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