"use client";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
export default function Home() {
  return (
    <>
        <DesktopLayout customClass={`lg:block hidden`}/>
        {/* <MobileLayout  customClass={`lg:hidden block`}/> */}
        
      </>
  );
}