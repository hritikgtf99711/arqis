"use client";
import "./globals.css";
import Header from "./components/common/header";
import AbsSec from "./components/common/absSec";
import Footer from "./components/common/footer";
import { initScrollSmoother } from "./utils/GsapAnimations";
import { useLayoutEffect, useState } from "react";
import ScrollContext from "./context/ScrollContext";



export default function HorizontalLayout({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    const { getSectionByIndex } = initScrollSmoother();
    console.log(getSectionByIndex())
    // setCurrentIndex(getCurrentIndex());
  }, []);

  return (
    <ScrollContext.Provider value={{ currentIndex }}>
      <div className="">
        <AbsSec />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
