"use client";
import "./globals.css";
import Header from "./components/common/header";
import AbsSec from "./components/common/absSec";
import Footer from "./components/common/footer";
import { useLayoutEffect, useState } from "react";
import ScrollContext from "./context/ScrollContext";
import CursorAnimation from "./utils/Cursor";
import InitScrollSmoother from "./utils/GsapAnimations1";
import { useParams } from "next/navigation";
export default function HorizontalLayout({ children }) {
  const [gotoFn, setgoTofn] = useState(0);
  const [next, setnext] = useState();
  const [prev,setPrev]=useState();
  const  pathname=useParams();

  useLayoutEffect(() => {
    const { goTo ,next,prev} = InitScrollSmoother(pathname);
   setgoTofn(()=>goTo)
   setnext(()=>next)
   setPrev(()=>prev)
  }, []);

  return (
    <ScrollContext.Provider value={{ gotoFn,next,prev }}>
      <div className="">
        <CursorAnimation/>
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
