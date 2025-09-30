import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
let smoother=ScrollSmoother.create({
    wrapper:"#smooth-wrapper",
    content:"#smooth-content",
    smooth:1.5,
    effects:true
  });



  export default smoother