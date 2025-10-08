"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import { useContext } from "react";
import ScrollContext from "@/app/context/ScrollContext";
import Image from "next/image";
// Defining slide navigation structure
const SLIDE_NAV = {
  "philosophy": {
    prev: "Philosophy",
    next: "Projects"
  },
  "projects": {
    prev: "Projects",
    next: "Our Team"
  },
  "ourTeam": {
    prev: "Our Team",
    next: "Careers"
  },
  "career": {
    prev: "Careers",
    next: "Media"
  },
  "media": {
    prev: "Media",
    next: "Blogs"
  },
  "blogs": {
    prev: "Blogs",
    next: "Contact"
  },
  "quickLink": {
    prev: "QuickLink",
    next: "The End"
  },
};

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
const [title, setTitle] = useState("Reshaping Real Estate");
  const [cta, setCta] = useState("Start Journey");
  const {next,prev}=useContext(ScrollContext)
  const footerRef = useRef(null);
  const arrowRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  const portalEl = typeof document !== "undefined" ? document.getElementById("footer-portal") : null;
  if (!portalEl) return null;

  return ReactDOM.createPortal(
    <footer
      ref={footerRef}
      className="fixed  z-[3] w-[90%] left-1/2 -translate-x-1/2 flex gap-5 items-end justify-between bottom-10"
    >
      <h2
        ref={titleRef}
        onClick={()=>prev()}
        className="uppercase  parallax cursor-pointer prev_title basis-[25%] font-[200] text-[40px] leading-[1.1] pointer-events-auto"
      >
        {title}
      </h2>
      <div
        ref={lineRef}
        className="border_line parallax flex-1 mb-[20px] h-[1px]"
      />
      <div onClick={()=>next()} className="flex  next_text gap-3 mb-[10px] items-center pointer-events-auto">
        <h2 className="uppercase cursor-pointer parallax next_title text-[18px] tracking-[6px]" ref={ctaRef}>
          {cta}
        </h2>
        <Image
          ref={arrowRef}
          src="/assets/right_arrow.svg"
          className="ml-3 parallax select-none"
          width="25"
          height="25"
          alt="arrow"
          draggable="false"
        />
      </div>
    </footer>,
    portalEl
  );
};

export default Footer;
