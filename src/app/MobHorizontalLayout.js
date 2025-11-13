"use client";
import "./globals.css";
import Header from "./components/common/header";
import AbsSec from "./components/common/absSec";
import Footer from "./components/common/footer";
import { useLayoutEffect, useState } from "react";
import ScrollContext from "./context/ScrollContext";
import initScrollSmoother from "./utils/mobileGsapAnimation";
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
            <Footer />
            {/* <FooterContainer/> */}
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
