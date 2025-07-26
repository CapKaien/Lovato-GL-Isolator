import React, { useEffect, useRef, useState } from "react";
import { FiZap, FiSettings, FiToggleLeft } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sampleImg from "../assets/img/man.jpg";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    icon: <FiZap size={24} className="text-[#FA4515]" />,
    title: "Ultrafast Switching",
    desc: "Switch loads instantly for uninterrupted power reliability.",
  },
  {
    icon: <FiSettings size={24} className="text-[#FA4515]" />,
    title: "Modular Flexibility",
    desc: "Configure and adapt seamlessly to system requirements.",
  },
];

function Content() {
  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial state to visible
    setIsLoaded(true);
    
    const initAnimations = () => {
      if (!sectionRef.current) return;
      
      const boxes = sectionRef.current.querySelectorAll(".animate-box");
      
      // First, make sure all boxes are visible
      gsap.set(boxes, { opacity: 1, y: 0 });
      
      // Kill any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Then set up animations
      boxes.forEach((box, idx) => {
        gsap.fromTo(
          box,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: idx * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    };

    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="data-scroll-section w-full max-w-6xl mx-auto px-4 py-16"
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex-shrink-0 relative flex items-center justify-center">
          <img
            src={sampleImg}
            alt="Lovato GL Isolator Switch"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto max-h-[400px] object-cover rounded-2xl"
          />
          <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 bg-white rounded-xl p-2 shadow flex items-center space-x-2">
            <div className="text-xs text-gray-600">Safe Switching</div>
            <FiToggleLeft className="w-5 h-5 text-green-600" />
          </div>
        </div>

        {/* Right Text and Cards */}
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wide text-[#FA4515]">
              How It Works
            </span>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-2 mb-4 text-[#2b2b2b]">
              Lovato GL Isolator: Built for Modern Power Systems
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#2b2b2b]">
              Experience safe, reliable, and intelligent switching solutions
              designed for critical energy infrastructures. Lovato GL Isolator
              ensures operational efficiency, modular scalability, and seamless
              system protection.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-6">
            {contentData.map((item, idx) => (
              <div
                key={idx}
                className={`animate-box bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-start hover:shadow-lg transition-shadow ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  opacity: 1,
                  transform: 'translateY(0px)',
                  visibility: 'visible'
                }}
              >
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-sm font-semibold mb-1 text-[#2b2b2b]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2b2b2b]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;