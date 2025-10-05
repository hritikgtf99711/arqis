"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";

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
  const [title, setTitle] = useState("The Arc of Real Estate");
  const [cta, setCta] = useState("Start Journey");

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
      className="fixed  z-[3] w-[90%] left-1/2 -translate-x-1/2 flex gap-5 items-end justify-between bottom-10 pointer-events-none"
    >
      <h2
        ref={titleRef}
        className="uppercase  prev_title basis-[18%] font-[200] text-[40px] leading-[1.1] pointer-events-auto"
      >
        {title}
      </h2>

      <div
        ref={lineRef}
        className="border_line flex-1 mb-[20px] h-[1px]"
      />

      <div className="flex next_text gap-3 mb-[10px] items-center pointer-events-auto">
        <h2 className="uppercase next_title text-[18px] tracking-[6px]" ref={ctaRef}>
          {cta}
        </h2>
        <img
          ref={arrowRef}
          src="/assets/right_arrow.svg"
          className="ml-3 select-none"
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
