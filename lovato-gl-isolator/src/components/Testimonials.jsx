import React, { useRef, useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import TestimonialData from "./data/TestimonialData";

function Testimonials() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);
  const gap = 16;

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const maxIndex = TestimonialData.length - visibleCards;

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      const container = containerRef.current;
      if (container) {
        const card = container.querySelector(".testimonial-card");
        if (card) setCardWidth(card.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction) => {
    let newIndex = currentIndex;
    if (direction === "left") {
      newIndex = Math.max(currentIndex - 1, 0);
    } else {
      newIndex = Math.min(currentIndex + 1, maxIndex);
    }
    setCurrentIndex(newIndex);

    gsap.to(containerRef.current, {
      x: -newIndex * (cardWidth + gap),
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:py-16 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="text-left">
          <span className="text-xs uppercase tracking-wide text-gray-500">
            What They Say
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b] mt-1">
            Used and Loved Worldwide
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleScroll("left")}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
          >
            <FiArrowLeft className="w-5 h-5 text-[#2b2b2b]" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
          >
            <FiArrowRight className="w-5 h-5 text-[#2b2b2b]" />
          </button>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-4"
          style={{ willChange: "transform" }}
        >
          {TestimonialData.map((item, idx) => (
            <div
              key={idx}
              className="testimonial-card w-[280px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition flex flex-col justify-between"
            >
              <p className="text-sm text-left text-[#2b2b2b] mb-4">
                {item.quote}
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#2b2b2b]">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-600">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
