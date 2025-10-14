"use client";
import { useState, useEffect } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function Home() {
  const [isMobile, setIsMobile] = useState(null); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null;

  return (
    <>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
}