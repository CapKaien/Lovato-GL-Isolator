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
    const boxes = sectionRef.current.querySelectorAll(".animate-box");

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
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:items-center gap-12"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <img
          src={sampleImg}
          alt="Lovato GL Isolator Switch"
          className="w-full max-w-lg h-auto object-cover rounded-2xl"
        />
        {/* Safety badge */}
        {/* <div className="absolute top-0 left-1 bg-white rounded-xl p-3 px-6 shadow flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
            100%
          </div>
          <div className="text-[10px] text-gray-700 mt-1 text-center font-medium">
            Perfectly Safe
          </div>
        </div> */}
        {/* Safe Switching badge */}
        <div className="absolute bottom-4 right-4 bg-white rounded-xl p-2 shadow flex items-center space-x-2">
          <div className="text-xs text-gray-600">Safe Switching</div>
          <FiToggleLeft className="w-5 h-5 text-green-600" />
        </div>
      </div>

      {/* Right Text and Cards */}
      <div className="w-full md:w-1/2 flex flex-col text-left">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wide text-gray-500">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4" style={{ color: "#2b2b2b" }}>
            Lovato GL Isolator: Built for Modern Power Systems
          </h2>
          <p className="max-w-lg text-sm md:text-base" style={{ color: "#2b2b2b" }}>
            Experience safe, reliable, and intelligent switching solutions designed for critical
            energy infrastructures. Lovato GL Isolator ensures operational efficiency, modular
            scalability, and seamless system protection.
          </p>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {contentData.map((item, idx) => (
            <div
              key={idx}
              className="animate-box bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 flex flex-col items-start hover:shadow-lg transition-shadow"
              style={{
                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "#2b2b2b" }}>
                {item.title}
              </h3>
              <p className="text-xs" style={{ color: "#2b2b2b" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
