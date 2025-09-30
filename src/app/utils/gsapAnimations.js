import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initScrollSmoother = () => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
  });
  const horizontalSection = document.querySelector(".horizontal-section");
  if (horizontalSection) {
    const slides = gsap.utils.toArray(".horizontal-section .item");
    const snapPoints = slides.map((slide, i) => i / (slides.length - 1));
    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalSection,
        start: "top top",
        end: () => "+=" + (horizontalSection.scrollWidth - window.innerWidth),
        pin: true,
        scrub: 1,
        snap: {
          snapTo: snapPoints,
          duration: { min: 0.2, max: 0.5 },
          delay: 10,
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          const currentSlide = Math.round(self.progress * (slides.length - 1));
        },
      },
    });
  }

  return smoother;
};
