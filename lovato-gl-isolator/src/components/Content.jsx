import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    // Store current ref value for cleanup
    const currentSection = sectionRef.current;

    // Clean up any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger && currentSection?.contains(trigger.vars.trigger)) {
        trigger.kill();
      }
    });

    if (!currentSection) return;

    const boxes = currentSection.querySelectorAll(".animate-box");
    const imageContainer = currentSection.querySelector(".image-container");

    // Animate image container first
    if (imageContainer) {
      gsap.fromTo(
        imageContainer,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate text content
    const textContent = currentSection.querySelector(".text-content");
    if (textContent) {
      gsap.fromTo(
        textContent,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContent,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate feature cards with stagger
    boxes.forEach((box, idx) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: idx * 0.15 + 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && currentSection?.contains(trigger.vars.trigger)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="image-container relative flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
              <img
                src={sampleImg}
                alt="Lovato GL Isolator Switch - Professional electrical equipment"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                    Safe Switching
                  </div>
                  <FiToggleLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600 transition-transform duration-300 hover:scale-110" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#FA4515]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="text-content text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Section Tag */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                How It Works
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-4 sm:mb-6 leading-tight">
              Lovato GL Isolator:
              <span className="block text-[#FA4515] mt-1 sm:mt-2">
                Built for Modern Power Systems
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0">
              Experience safe, reliable, and intelligent switching solutions designed for critical
              energy infrastructures. Lovato GL Isolator ensures operational efficiency, modular
              scalability, and seamless system protection.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contentData.map((item, idx) => (
                <div
                  key={idx}
                  className="animate-box group bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:bg-white/80 hover:scale-105 hover:border-[#FA4515]/30"
                  style={{
                    boxShadow: "0 10px 40px rgba(31, 38, 135, 0.15)",
                  }}
                >
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center sm:justify-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FA4515] to-[#ff6b3d] rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {React.cloneElement(item.icon, {
                        size: 24,
                        className: "text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2b2b2b] mb-2 sm:mb-3 text-center sm:text-left">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-8 sm:mt-10 lg:mt-12 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-sm sm:text-base text-[#FA4515] font-medium">
                <span>Learn more about our solutions</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
