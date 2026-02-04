"use client";
import Header from "@/website/components/common/header";
import AbsSec from "@/website/components/common/absSec";
import Footer from "@/website/components/common/footer";
import { useLayoutEffect, useState } from "react";
import ScrollContext from "@/website/context/ScrollContext";
import CursorAnimation from "@/website/utils/Cursor";
import InitScrollSmoother from "@/website/utils/GsapAnimations1";
import { useParams } from "next/navigation";

export default function HorizontalLayout({ children }) {
  const [gotoFn, setgoTofn] = useState(0);
  const [next, setnext] = useState();
  const [prev, setPrev] = useState();
  const params = useParams();
  
  // Check if it's a microsite
  const microsite = params?.microsite;
  const isMicrosite = !!microsite;

  useLayoutEffect(() => {
    const { goTo, next, prev } = InitScrollSmoother(params);
    setgoTofn(() => goTo);
    setnext(() => next);
    setPrev(() => prev);
  }, []);

  return (
    <ScrollContext.Provider value={{ gotoFn, next, prev }}>
      <div className="">
        <CursorAnimation />
        <AbsSec isMicrosite={isMicrosite} />
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