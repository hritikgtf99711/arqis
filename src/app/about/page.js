"use client";
import HorizontalLayout from "../HorizontalLayout";
import About from "../components/aboutus/About";
import InitScrollSmoother from "../utils/gsapAnimations";
export default function Projects() {
  return (
    <>
      <HorizontalLayout>
        <div className="basis-[100%] item grow-0 h-[100%]  shrink-0">
          <About />
        </div>
      </HorizontalLayout>
    </>
  );
}
