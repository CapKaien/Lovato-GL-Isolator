import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { gsap } from "gsap";
import TestimonialData from "./data/TestimonialData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [avatars, setAvatars] = useState([]);
  const cardsRef = useRef([]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fetch real user avatars once
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6&nat=us,gb,fr,de,au")
      .then((res) => res.json())
      .then((data) => {
        setAvatars(data.results.map((user) => user.picture.medium));
      })
      .catch(() => {
        setAvatars([]); // fallback to default avatars if needed
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 }
    );
  }, [currentIndex]);

  const currentTestimonials = [
    TestimonialData[currentIndex],
    TestimonialData[(currentIndex + 1) % TestimonialData.length],
  ];

  return (
    <section className="data-scroll-section max-w-6xl mx-auto px-4 py-16 mb-30">
      {/* Top Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-sm text-[#FA4515] font-medium tracking-wider">
            WHAT THEY SAY
          </p>
          <h3 className="text-3xl font-semibold text-gray-900">
            Used and Loved Worldwide
          </h3>
        </div>

        {/* Arrows */}
        <div className="flex space-x-4">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-[#FA4515] hover:opacity-80"
          >
            <FaArrowLeft className="text-white" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-[#FA4515] hover:opacity-80"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {currentTestimonials.map((item, index) => {
          const testimonialIndex =
            (currentIndex + index) % TestimonialData.length;

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative bg-white p-6 rounded-lg shadow border flex flex-col justify-between h-60 text-left"
            >
              <div>
                <FaQuoteLeft className="text-[#FA4515] text-xl mb-2" />
                <p className="text-gray-800 text-sm leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div className="mt-6 flex items-center pt-4 border-t border-gray-200">
                <img
                  src={avatars[testimonialIndex] || "/default-avatar.jpg"}
                  alt={item.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
