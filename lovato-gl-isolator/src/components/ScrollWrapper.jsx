// src/components/ScrollWrapper.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const location = useLocation();

  useEffect(() => {
    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scrollInstance.current?.destroy();
    };
  }, []);

  useEffect(() => {
    scrollInstance.current?.scrollTo(0, { duration: 0 });
    scrollInstance.current?.update();
  }, [location.pathname]);

  useEffect(() => {
    // Allow time for images or async content to load
    const timeout = setTimeout(() => {
      scrollInstance.current?.update();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div id="main-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
