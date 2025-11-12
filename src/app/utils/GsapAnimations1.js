import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const SLIDE_NAV = {
  philosophy: { prev: "Philosophy", next: "Projects", route: "/philosophy" },
  projects: { prev: "Projects", next: "Our Team", route: "/projects" },
  ourTeam: { prev: "Our Team", next: "Careers", route: "/our-team" },
  career: { prev: "Careers", next: "Media", route: "/career" },
  media: { prev: "Media", next: "Blogs", route: "/media" },
  blogs: { prev: "Blogs", next: "Contact", route: "/blogs" },
  quickLink: { prev: "QuickLink", next: "The End", route: "/quick-link" },
};

export default function initScrollSmoother(router) {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.8,
    effects: true,
    smoothTouch: 0.1,
  });

  const sections = gsap.utils.toArray(".horizontal-section .item");
  if (!sections.length) return { cleanup: () => {} };

  let currentIndex = 0;
  let isAnimating = false;
  const inTL = new WeakMap();
  const outTL = new WeakMap();

  const CONFIG = {
    WHEEL_THRESHOLD:20,
    COOLDOWN_MS: 50,
    ANIM_DURATION: 2,
    TOUCH_THRESH: 50,
    DEBOUNCE_MS: 40,
    SCROLL_SPEED: 1,
  };

  const isDarkSection = (section) => section?.dataset.theme === "dark" || section?.classList.contains("dark-bg", "bg-dark");

  const updateTheme = (section) => {
    if (!section) return;
    const isDark = isDarkSection(section);
    const elements = {
      icons: section.querySelectorAll(".icon, .nav-icon, svg, img.icon"),
      nav: document.querySelectorAll(".nav-indicator, .scroll-hint, .progress-bar"),
    };

    elements.icons.forEach(icon => {
      icon.classList.toggle("icon-light", isDark);
      icon.classList.toggle("icon-dark", !isDark);
    });

    elements.nav.forEach(el => {
      el.classList.toggle("theme-light", isDark);
      el.classList.toggle("theme-dark", !isDark);
    });
  };

  const buildInTimeline = (section) => {
    const tl = gsap.timeline({ paused: true });
    // const elements = {
    //   fadeUps: section.querySelectorAll(".fade-up"),
    //   scales: section.querySelectorAll(".scale-in"),
    //   staggers: section.querySelectorAll(".stagger > *"),
    //   parallax: section.querySelectorAll(".parallax"),
    //   slideIns: section.querySelectorAll(".slide-in"),
    //   rotateIns: section.querySelectorAll(".rotate-in"),
    //   blurIns: section.querySelectorAll(".blur-in"),
    // };

    // if (elements.fadeUps.length) {
    //   tl.from(elements.fadeUps, { y: 60, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1, clearProps: "all" }, 0);
    // }
    // if (elements.scales.length) {
    //   tl.from(elements.scales, { scale: 0.85, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)", stagger: 0.08 }, 0.1);
    // }
    // if (elements.staggers.length) {
    //   tl.from(elements.staggers, { opacity: 0, y: 30, duration: 0.9, ease: "power3.out", stagger: 0.08 }, 0.15);
    // }
    // if (elements.parallax.length) {
    //   tl.from(elements.parallax, { x: 100, opacity: 0, duration: 1.2, ease: "power3.out", stagger: 0.1 }, 0.2);
    // }
    // if (elements.slideIns.length) {
    //   tl.from(elements.slideIns, { x: -80, opacity: 0, duration: 1.1, ease: "power3.out", stagger: 0.07 }, 0.15);
    // }
    // if (elements.rotateIns.length) {
    //   tl.from(elements.rotateIns, { rotation: -180, scale: 0.5, opacity: 0, duration: 1.2, ease: "back.out(1.5)", stagger: 0.1 }, 0.2);
    // }
    // if (elements.blurIns.length) {
    //   tl.from(elements.blurIns, { opacity: 0, filter: "blur(20px)", duration: 1, ease: "power2.out", stagger: 0.08, clearProps: "filter" }, 0.15);
    // }
    return tl;
  };

  const buildOutTimeline = (section) => {
    const tl = gsap.timeline({ paused: true });
    // const elements = section.querySelectorAll(".fade-up, .scale-in, .parallax, .slide-in, .rotate-in, .blur-in");
    // if (elements.length) {
    //   tl.to(elements, { opacity: 0, duration: 0.6, ease: "power2.in", stagger: 0.02, clearProps: "all" }, 0);
    // }
    return tl;
  };

  const emit = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }));

  sections.forEach((sec, i) => {
    inTL.set(sec, buildInTimeline(sec));
    outTL.set(sec, buildOutTimeline(sec));
    sec.classList.toggle("is-active", i === 0);
    if (i === 0) {
      inTL.get(sec)?.play();
      updateTheme(sec);
    }
  });

  const first = sections[0];
  emit("sliderstart", {
    index: 0,
    direction: "forward",
    footerTitle: first?.dataset.footerTitle || "Reshaping Real Estate",
    footerCta: first?.dataset.footerCta || "Start Journey",
  });

  const scrollToBoundary = (container, direction) => {
    if (!container) return;
    const targetScroll = direction === "forward" ? container.scrollHeight - container.clientHeight : 0;
    gsap.to(container, { scrollTop: targetScroll, duration: CONFIG.SCROLL_SPEED, ease: "power2.out" });
  };

  const goToSection = async (index, scrollDirection = null) => {
    if (index < 0 || index >= sections.length || isAnimating) return;
    isAnimating = true;

    const activeSection = sections[currentIndex];
    const verticalScrollable = activeSection.querySelector(".scrollable-container");
    if (verticalScrollable && scrollDirection) {
      const atBoundary = isAtScrollBoundary(verticalScrollable, scrollDirection === "forward" ? 1 : -1);
      if (!atBoundary) {
        scrollToBoundary(verticalScrollable, scrollDirection);
        setTimeout(() => (isAnimating = false), CONFIG.COOLDOWN_MS);
        return;
      }
    }

    const next = sections[index];
    const prev = sections[currentIndex];
    const dir = index > currentIndex ? "forward" : "backward";
    const sectionKeys = Object.keys(SLIDE_NAV);
    const nextSectionKey = sectionKeys[index];
    const nextRoute = SLIDE_NAV[nextSectionKey]?.route;

    document.documentElement.classList.add(`sliding-${dir}`);
    outTL.get(prev)?.play();

    const scrollContainer = document.querySelector(".horizontal-section");
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const targetScroll = (index / (sections.length - 1)) * maxScroll;

    await gsap.to(scrollContainer, {
      scrollTo: { x: targetScroll },
      duration: CONFIG.ANIM_DURATION,
      ease: "power3.inOut",
      onStart: () => {
        document.documentElement.classList.add("is-sliding");
        // updateTheme(next);
      },
      onUpdate: function () {
        document.documentElement.style.setProperty("--slide-progress", this.progress());
      },
      onComplete: () => {
        currentIndex = index;
        sections.forEach((sec, i) => sec.classList.toggle("is-active", i === index));
        inTL.get(next)?.play();

        document.body.classList.toggle("active", [1, 4, 7].includes(index));
        document.querySelector('header').classList.toggle("hover-Effect", [1, 4, 7].includes(index));
        document.querySelector('.span_1').classList.toggle("hover-Effect", [1, 4, 7].includes(index));
        document.querySelector('.span_2').classList.toggle("hover-Effect", [1, 4, 7].includes(index));
                document.querySelector('.span_3').classList.toggle("hover-Effect", [1, 4, 7].includes(index));

     document.querySelector('.nextcontent').classList.toggle("hover-Effect", [1, 4, 7].includes(index));

        const navConfig = [
          { prev: "Reshaping Real Estate", next: "Start Journey", footer: "remove" },
          { prev: "Philosophy", next: "Projects", footer: "add" },
          { prev: "Projects", next: "Our Team", footer: "add" },
          { prev: "Our Team", next: "Careers", footer: "add" },
          { prev: "Careers", next: "Media", footer: "add" },
          { prev: "Media", next: "Blogs", footer: "add" },
          { prev: "Blogs", next: "Contact", footer: "add" },
          { prev: "Contact", next: "Quick Links", footer: "add" },
          { prev: "Quick Links", next: "The End", footer: "add" },
        ];

        if (navConfig[index]) {
          document.querySelector(".prev_title").textContent = navConfig[index].prev;
          document.querySelector(".next_title").textContent = navConfig[index].next;
          document.querySelector("footer")?.classList.toggle("change_style", navConfig[index].footer === "add");
        }

        // gsap.fromTo(".border_line", { width: "0%", opacity: 0 }, { width: "100%", opacity: 1, duration: 2, ease: "power2.inOut", stagger: 0.1 });
        // gsap.fromTo(".border_button", { width: "0%", opacity: 0 }, { width: "100%", opacity: 1, duration: 2, ease: "power3.inOut", stagger: 0.15, delay: 0.8 });
        // gsap.fromTo(".prev_title, .next_title", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.1, clearProps: "all" });
        // gsap.fromTo(next.querySelectorAll(".footer-content"), { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", stagger: 0.15, clearProps: "all" });
        // gsap.fromTo(next.querySelectorAll(".section-content"), { scale: 0.98, opacity: 0.9, y: 15 }, { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.07, clearProps: "all" });
        // gsap.fromTo(".nav-indicator, .progress-bar", { scaleX: 0.8, opacity: 0.6 }, { scaleX: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.6)", clearProps: "all" });

        // const [prevArrow, nextArrow] = [document.querySelector(".prev_arrow"), document.querySelector(".next_arrow")];
        // if (prevArrow) gsap.fromTo(prevArrow, { x: dir === "forward" ? -20 : 20, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)", clearProps: "all" });
        // if (nextArrow) gsap.fromTo(nextArrow, { x: dir === "forward" ? 20 : -20, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)", clearProps: "all" });

        emit("slidechange", {
          index,
          direction: dir,
          footerTitle: next?.dataset.footerTitle || "",
          footerCta: next?.dataset.footerCta || "",
        });

        // if (router && nextRoute) router.push(nextRoute);

        setTimeout(() => {
          isAnimating = false;
          document.documentElement.classList.remove("is-sliding", `sliding-${dir}`);
        }, CONFIG.COOLDOWN_MS);
      },
    });

    // gsap.fromTo(next, { scale: 1.05 }, { scale: 1, duration: CONFIG.ANIM_DURATION, ease: "power3.out" });
  };

  const isAtScrollBoundary = (el, deltaY, isHorizontal = false) => {
    if (!el) return true;
    const tolerance = 5;
    const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = el;
    if (isHorizontal) return deltaY > 0 ? scrollLeft + clientWidth >= scrollWidth - tolerance : scrollLeft <= tolerance;
    return deltaY > 0 ? scrollTop + clientHeight >= scrollHeight - tolerance : scrollTop <= tolerance;
  };

  let accum = 0;
  let lastInputTime = 0;

  const onWheel = (e) => {
    e.preventDefault();
    if (isAnimating) return;

    const now = Date.now();
    if (now - lastInputTime < CONFIG.DEBOUNCE_MS) return;
    lastInputTime = now;

    const delta = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1);
    const activeSection = sections[currentIndex];
    const scrollContainer = activeSection.querySelector(".scrollable-container") || document.querySelector(".horizontal-section");

    if (scrollContainer) {
      const isHorizontal = scrollContainer.dataset.scroll === "horizontal";
      if (!isAtScrollBoundary(scrollContainer, delta, isHorizontal)) {
        const scrollProp = isHorizontal ? "scrollLeft" : "scrollTop";
        const maxScroll = isHorizontal ? scrollContainer.scrollWidth - scrollContainer.clientWidth : scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollAmount = scrollContainer[scrollProp] + (delta > 0 ? 150 : -150);
        gsap.to(scrollContainer, { [scrollProp]: Math.max(0, Math.min(scrollAmount, maxScroll)), duration: CONFIG.SCROLL_SPEED, ease: "power2.out" });
        accum = 0;
        return;
      }
    }

    accum += delta;
    if (Math.abs(accum) >= CONFIG.WHEEL_THRESHOLD) {
      goToSection(currentIndex + (accum > 0 ? 1 : -1), accum > 0 ? "forward" : "backward");
      accum = 0;
    }
  };

  const onKey = (e) => {
    if (isAnimating || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    const now = Date.now();
    if (now - lastInputTime < CONFIG.DEBOUNCE_MS) return;
    lastInputTime = now;

    const activeSection = sections[currentIndex];
    const scrollContainer = activeSection.querySelector(".scrollable-container");
    if (scrollContainer && !isAtScrollBoundary(scrollContainer, e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1)) return;

    if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      goToSection(currentIndex + 1, "forward");
    } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      goToSection(currentIndex - 1, "backward");
    }
  };

  let touchStartY = 0;
  let hasMoved = false;

  const onTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
    hasMoved = false;
  };

  const onTouchMove = (e) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }
    const now = Date.now();
    if (now - lastInputTime < CONFIG.DEBOUNCE_MS) return;
    lastInputTime = now;

    const dy = e.touches[0].clientY - touchStartY;
    const activeSection = sections[currentIndex];
    const scrollContainer = activeSection.querySelector(".scrollable-container");
    if (scrollContainer && !isAtScrollBoundary(scrollContainer, dy)) return;

    if (Math.abs(dy) > CONFIG.TOUCH_THRESH && !hasMoved) {
      e.preventDefault();
      hasMoved = true;
      goToSection(currentIndex + (dy < 0 ? 1 : -1), dy < 0 ? "forward" : "backward");
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("keydown", onKey, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });

  const cleanup = () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("keydown", onKey);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
    gsap.killTweensOf(sections);
    smoother.kill();
  };

  return {
    goTo: goToSection,
    next: () => goToSection(currentIndex + 1, "forward"),
    prev: () => goToSection(currentIndex - 1, "backward"),
    getCurrentIndex: () => currentIndex,
    getSectionsCount: () => sections.length,
    updateTheme: () => updateTheme(sections[currentIndex]),
    getCurrentSection: () => sections[currentIndex],
    getSectionByIndex: (index) => sections[index],
    isAnimating: () => isAnimating,
    cleanup,
  };
}