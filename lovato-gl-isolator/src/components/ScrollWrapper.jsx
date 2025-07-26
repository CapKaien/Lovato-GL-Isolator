// ScrollWrapper.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
    });

    // 👇 Tell ScrollTrigger to use Locomotive Scroll
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    // 👇 Refresh both on update
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => scroll.update());

    // Initial refresh
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
      scroll.destroy();
    };
  }, []);

  return (
    <div id="main-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
