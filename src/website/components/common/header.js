import React, { useEffect, useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollContext from "@/website/context/ScrollContext";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get navigation functions from context
  const { gotoFn } = useContext(ScrollContext);
  
  // Refs for GSAP animations
  const menuOverlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuItemsRef = useRef([]);
  const footerRef = useRef(null);
  const openTimelineRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // GSAP Animation Timeline
  useEffect(() => {
    if (!isClient) return;

    // Dispatch menu state change event - IMPORTANT FOR PREVENTING SCROLL
    window.dispatchEvent(new CustomEvent('menuStateChange', { 
      detail: { isOpen: isMenuOpen } 
    }));

    const headerLogo = document.querySelector("#header-logo");

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // When menu opens, always show logo with GSAP animation
      if (headerLogo) {
        gsap.to(headerLogo, {
          opacity: 1,
          visibility: "visible",
          duration: 0.4,
          ease: "power2.out"
        });
      }

      // Kill any existing timeline
      if (openTimelineRef.current) {
        openTimelineRef.current.kill();
      }

      // Create master timeline
      const masterTL = gsap.timeline({
        onComplete: () => {
          console.log("Menu animation complete");
        }
      });

      openTimelineRef.current = masterTL;

      // SEQUENCE 1: Background overlay appears
      masterTL.to(menuOverlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.6,
        ease: "power2.inOut"
      });

      // SEQUENCE 2: Close button fades in
      masterTL.fromTo(
        closeButtonRef.current,
        { 
          opacity: 0, 
          y: -20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        },
        "-=0.2"
      );

      // SEQUENCE 3: Menu items appear one by one with stagger
      masterTL.fromTo(
        menuItemsRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: {
            each: 0.15,
            ease: "power2.out"
          },
          ease: "power3.out"
        },
        "-=0.1"
      );

      // SEQUENCE 4: Footer slides up
      masterTL.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out"
        },
        "-=0.3"
      );

    } else {
      document.body.style.overflow = 'unset';
      
      // When menu closes, don't animate logo - let GsapAnimations1.js control it
      // The logo visibility will be controlled by the section index in GsapAnimations1.js
      
      // Close animation - faster and simpler
      if (openTimelineRef.current) {
        openTimelineRef.current.kill();
      }

      const closeTL = gsap.timeline();
      
      // Fade out everything quickly (but NOT the logo)
      closeTL.to([menuItemsRef.current, footerRef.current, closeButtonRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      })
      .to(menuOverlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(menuOverlayRef.current, { visibility: "hidden" });
        }
      }, "-=0.1");
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isClient]);

  const handleLogoClick = () => {
    window.dispatchEvent(new CustomEvent("navigateToFirstSection"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation to specific sections with animated close
  const handleNavigation = (index) => {
    if (!gotoFn || typeof gotoFn !== 'function') {
      console.warn('Navigation function not available');
      setIsMenuOpen(false);
      return;
    }

    // Start close animation
    if (openTimelineRef.current) {
      openTimelineRef.current.kill();
    }

    const closeTL = gsap.timeline({
      onComplete: () => {
        // Navigate after menu is fully closed
        gotoFn(index, index > getCurrentSectionIndex() ? "forward" : "backward");
        // Reset menu state
        gsap.set(menuOverlayRef.current, { visibility: "hidden" });
        setIsMenuOpen(false);
      }
    });
    
    // Fade out everything quickly (but NOT the logo - let GsapAnimations1.js handle it)
    closeTL.to([menuItemsRef.current, footerRef.current, closeButtonRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in"
    })
    .to(menuOverlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    }, "-=0.1");
  };

  // Get current section index from scroll position
  const getCurrentSectionIndex = () => {
    const scrollContainer = document.querySelector('.horizontal-section');
    if (!scrollContainer) return 0;
    
    const sections = Array.from(scrollContainer.querySelectorAll('.item'));
    const scrollLeft = scrollContainer.scrollLeft;
    const sectionWidth = scrollContainer.clientWidth;
    
    return Math.round(scrollLeft / sectionWidth);
  };

  // Menu items with their corresponding section indices
  // Based on your DesktopLayout order:
  // 0: LogoSection (Home)
  // 1: About (Philosophy)
  // 2: ProjectContainer (Projects)
  // 3: TeamContainer (Our Team)
  // 4: CareerContainer (Careers)
  // 5: MediaContainer (Media Centre)
  // 6: BlogContainer (Blogs - not in menu but available)
  // 7: ContactformContainer (Contact - not in menu but available)
  // 8: FooterContainer (Quick Links - not in menu but available)
  
  const menuItems = [
    { label: 'Home', index: 0 },
    { label: 'Philosophy', index: 1 },
    { label: 'Projects', index: 2 },
    { label: 'Our Team', index: 3 },
    { label: 'Careers', index: 4 },
    { label: 'Media Centre', index: 5 },
  ];

  if (!isClient) return null;

  return ReactDOM.createPortal(
    <div>
      <header className="lg:py-[60px] py-[30px] z-[99991] fixed left-0 top-0 w-[100%]">
        <div className="container mx-[auto]">
          <div className="flex cursor-pointer justify-between items-start gap-10">
            <Image
              src="/assets/logo.png"
              id="header-logo"
              className="w-36 object-contain opacity-0 invisible cursor-pointer transition-transform hover:scale-105"
              style={{ pointerEvents: "none" }}
              width={300}
              height={300}
              alt="Reshaping Real Estate"
              onClick={handleLogoClick}
            />
            <div className="flex gap-[40px] items-center">
              <Image
                src="/assets/sound.svg"
                className="icon span_3 arrow cursor-pointer"
                width={"25"}
                height={25}
                alt="logo"
              />
              <div 
                className="flex cursor-pointer items-center gap-2"
                onClick={toggleMenu}
              >
                <span className="uppercase text cursor-pointer span_1 tracking-[2px]">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
                <span className="border-[50%] cursor-pointer span_2 h-[18px] w-[18px] rounded-full block bg-[#000] circle-pointer"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 bg-[#F5F3ED] z-[9999] opacity-0 invisible"
      >
        <div className="w-full h-full flex flex-col">

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="list-none p-0 m-0">
              {menuItems.map((item, index) => (
                <li
                  key={item.label}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  className="text-center mb-[44px] last:mb-0 opacity-0"
                >
                  <button
                    onClick={() => handleNavigation(item.index)}
                    className="text-black text-4xl lg:text-[38px] font-extralight tracking-wider transition-all duration-300 no-underline inline-block bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div 
            ref={footerRef}
            className="border-t border-black/20 py-8 px-12 lg:px-24 opacity-0"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 text-black text-sm">
              <div className="tracking-wide">+91 999999999</div>
              <div className="tracking-wide">mkt@arqisgroup.in</div>
              <div className="tracking-wide">
                Noida sector 25
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("header-portal")
  );
};

export default Header;