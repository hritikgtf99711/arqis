"use client";
import "./globals.css";
import Header from "./components/common/header";
import AbsSec from "./components/common/absSec";
import Footer from "./components/common/footer";
import { useLayoutEffect, useState } from "react";
import ScrollContext from "./context/ScrollContext";
import InitScrollSmoother from "./utils/gsapAnimations";
import CursorAnimation from "./utils/Cursor";
import { useRouter } from "next/navigation";
export default function HorizontalLayout({ children }) {
  const [gotoFn, setgoTofn] = useState(0);
  const [next, setnext] = useState();
  const [prev,setPrev]=useState();
  const  router=useRouter();
  useLayoutEffect(() => {
    const { goTo ,next,prev} = InitScrollSmoother(router);
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
