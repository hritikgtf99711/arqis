"use client";
import Header from "@/website/components/common/header";
import AbsSec from "@/website/components/common/absSec";
import { useLayoutEffect, useState } from "react";
import ScrollContext from "@/website/context/ScrollContext";
import initScrollSmoother from "@/website/utils/mobileGsapAnimation";
export default function MobHorizontalLayout({ children }) {
  const [gotoFn, setgoTofn] = useState(0);
  const [next, setnext] = useState();
  const [prev,setPrev]=useState();

  useLayoutEffect(() => {
    const { goTo ,next,prev} = initScrollSmoother();
   setgoTofn(()=>goTo)
   setnext(()=>next)
   setPrev(()=>prev)
  }, []);

  return (
    <ScrollContext.Provider value={{ gotoFn,next,prev }}>
      <div className="">
        <AbsSec />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header /> 
            {children}
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
