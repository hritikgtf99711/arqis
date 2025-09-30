import LogoSection from "./components/home/LogoSection";
import HorizontalLayout from "./HorizontalLayout";
import About from "./components/aboutus/About";
import ProjectCard from "./components/projects/projectCard";
export default function Home() {
  return (
    <>
      <HorizontalLayout>
        <div className="flex horizontal-section">
          <div className="basis-[100%] item grow-0 shrink-0">
            <LogoSection />
          </div>
          <div className="basis-[100%] item grow-0 shrink-0">
            <About />
          </div>
           <div className="basis-[100%] item grow-0 shrink-0">
            <ProjectCard />
          </div>
        </div>
      </HorizontalLayout>
    </>
  );
}
