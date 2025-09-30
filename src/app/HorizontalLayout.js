"use client";
import "./globals.css";
import Header from "./components/common/header";
import AbsSec from "./components/common/absSec";
import Footer from "./components/common/footer";
import { initScrollSmoother } from "./utils/gsapAnimations";
import { useEffect } from "react";
export default function HorizontalLayout({ children }) {
  useEffect(() => {
    initScrollSmoother();
  }, []);
  return (
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
  );
}
