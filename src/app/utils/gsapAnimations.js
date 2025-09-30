import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initScrollSmoother = () => {
  // Initialize ScrollSmoother
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
  });

  // Select the horizontal section and items
  const horizontalSection = document.querySelector(".horizontal-section");
  if (!horizontalSection) {
    console.warn("Horizontal section not found");
    return smoother;
  }

  const slides = gsap.utils.toArray(".horizontal-section .item");
  if (slides.length === 0) {
    console.warn("No slides found in horizontal section");
    return smoother;
  }

  // Calculate snap points
  const snapPoints = slides.map((_, i) => i / (slides.length - 1));

  // Create a timeline for horizontal scrolling
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: horizontalSection,
      start: "top top",
      end: () => "+=" + (horizontalSection.scrollWidth - window.innerWidth),
      pin: true,
      scrub: 1,
      snap: {
        snapTo: snapPoints,
        duration: { min: 0.2, max: 0.5 },
        delay: 0, // Reduced delay for responsive snapping
        ease: "power2.inOut",
      },
      onUpdate: (self) => {
        const currentSlide = Math.round(self.progress * (slides.length - 1));
        console.log("Current slide:", currentSlide); // For debugging
      },
    },
  });

  // Animate the horizontal section to move left
  tl.to(horizontalSection, {
    x: () => -(horizontalSection.scrollWidth - window.innerWidth),
    ease: "none",
  });

  // Add animations for each slide
  slides.forEach((slide, index) => {
    tl.to(
      slide,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      index / (slides.length - 1) // Fade in at the start of each slide
    ).to(
      slide,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.5,
        ease: "power2.in",
      },
      (index + 1) / (slides.length - 1) // Fade out when moving to next slide
    );
  });

  return smoother;
};