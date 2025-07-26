import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import TestimonialData from "./data/TestimonialData";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TestimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TestimonialData.length) % TestimonialData.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-wide text-gray-500 mb-2 block">
          Testimonials
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2b2b2b] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Discover how our solutions have transformed businesses worldwide
        </p>
      </div>

      {/* Main Testimonial Card */}
      <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
        {/* Quote Icon */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-4xl sm:text-6xl text-gray-200 font-serif">
          "
        </div>
        
        {/* Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#2b2b2b] leading-relaxed mb-8 font-medium italic min-h-[120px] flex items-center justify-center">
            {TestimonialData[currentIndex].quote}
          </blockquote>
          
          {/* Customer Info */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              {TestimonialData[currentIndex].name.charAt(0)}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#2b2b2b] mb-1">
              {TestimonialData[currentIndex].name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {TestimonialData[currentIndex].location}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-gray-200 rounded-full hover:border-gray-300 hover:shadow-lg transition-all duration-200 group"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-[#2b2b2b] transition-colors" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2 sm:space-x-3">
          {TestimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#2b2b2b] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-gray-200 rounded-full hover:border-gray-300 hover:shadow-lg transition-all duration-200 group"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-[#2b2b2b] transition-colors" />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-6 text-sm text-gray-500">
        {currentIndex + 1} of {TestimonialData.length}
      </div>
    </section>
  );
}

export default Testimonials;
