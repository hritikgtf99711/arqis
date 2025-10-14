"use client";

import { useState, useEffect } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after component mounts on the client
    setIsMounted(true);

    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Run on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent rendering until component is mounted to avoid hydration mismatch
  if (!isMounted) {
    return null; // or a loading placeholder if desired
  }

  return <>{isMobile ? <MobileLayout /> : <DesktopLayout />}</>;
}