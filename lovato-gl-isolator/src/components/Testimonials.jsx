import React, { useRef, useState, useEffect, useCallback } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import TestimonialData from "./data/TestimonialData";

function Testimonials() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Responsive breakpoints for visible cards
  const getVisibleCards = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width >= 1280) return 3; // xl: 3 cards
    if (width >= 768) return 2;  // md: 2 cards  
    if (width >= 640) return 1.5; // sm: 1.5 cards (shows partial next card)
    return 1; // mobile: 1 card
  }, []);

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Calculate maximum index
  const maxIndex = Math.max(0, Math.ceil(TestimonialData.length - visibleCards));

  // Handle resize with debouncing
  useEffect(() => {
    let timeoutId;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newVisibleCards = getVisibleCards();
        setVisibleCards(newVisibleCards);
        
        // Recalculate and clamp current index
        const newMaxIndex = Math.max(0, Math.ceil(TestimonialData.length - newVisibleCards));
        if (currentIndex > newMaxIndex) {
          setCurrentIndex(newMaxIndex);
        }
        
        // Reset transform without animation
        if (containerRef.current) {
          const clampedIndex = Math.min(currentIndex, newMaxIndex);
          gsap.set(containerRef.current, {
            x: `${-clampedIndex * (100 / newVisibleCards)}%`,
          });
        }
      }, 100);
    };

    // Initial setup
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, getVisibleCards]);

  // Navigation functions
  const goToSlide = useCallback((index) => {
    if (isTransitioning || !containerRef.current) return;
    
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    setIsTransitioning(true);

    gsap.to(containerRef.current, {
      x: `${-clampedIndex * (100 / visibleCards)}%`,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => setIsTransitioning(false),
    });
  }, [isTransitioning, maxIndex, visibleCards]);

  const handlePrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - go to next
        handleNext();
      } else {
        // Swiped right - go to previous
        handlePrevious();
      }
    }

    // Reset touch coordinates
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  return (
    <section className="w-full max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div className="text-left">
          <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 font-medium">
            What They Say
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2b2b2b] mt-1 sm:mt-2">
            Used and Loved Worldwide
          </h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0 || isTransitioning}
            className="p-2 sm:p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200 group"
            aria-label="Previous testimonials"
          >
            <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b2b2b] group-disabled:text-gray-400" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex || isTransitioning}
            className="p-2 sm:p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200 group"
            aria-label="Next testimonials"
          >
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b2b2b] group-disabled:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="relative w-full">
        {/* Cards */}
        <div 
          className="overflow-hidden rounded-xl sm:rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={containerRef}
            className="flex transition-transform will-change-transform"
            style={{ 
              width: `${(TestimonialData.length / visibleCards) * 100}%`,
            }}
          >
            {TestimonialData.map((item, idx) => (
              <div
                key={idx}
                className="testimonial-card flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / TestimonialData.length}%` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
                  {/* Quote */}
                  <blockquote className="flex-1">
                    <p className="text-sm sm:text-base lg:text-lg text-[#2b2b2b] leading-relaxed mb-4 sm:mb-6">
                      "{item.quote}"
                    </p>
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#FA4515] to-[#ff6b3d] flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-[#2b2b2b] truncate">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex sm:hidden justify-center items-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-[#FA4515] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mt-4">
          <p className="text-xs text-gray-500">
            Swipe left or right to see more testimonials
          </p>
        </div>
      </div>

      {/* Progress Indicator for Desktop */}
      <div className="hidden sm:flex justify-center items-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#FA4515] w-8' 
                : 'bg-gray-300 hover:bg-gray-400 w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
