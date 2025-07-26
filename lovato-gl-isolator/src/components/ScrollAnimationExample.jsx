import React from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

const ScrollAnimationExample = () => {
  // Individual scroll animations
  const titleRef = useScrollAnimation({ 
    animation: 'fadeInDown', 
    duration: 1.2 
  })
  
  const contentRef = useScrollAnimation({ 
    animation: 'fadeInUp', 
    delay: 0.3 
  })
  
  const imageRef = useScrollAnimation({ 
    animation: 'scaleIn', 
    delay: 0.5 
  })

  // Staggered animation for a list of items
  const listRef = useStaggerAnimation({
    animation: 'fadeInUp',
    stagger: 0.15,
    duration: 0.8
  })

  return (
    <div className="py-20 px-8">
      {/* Animated title */}
      <h2 
        ref={titleRef}
        className="text-4xl font-bold text-center mb-8"
      >
        Scroll Animation Examples
      </h2>

      {/* Animated content */}
      <div 
        ref={contentRef}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <p className="text-lg text-gray-600">
          This content animates when it comes into view. The smooth scroll 
          effect is powered by Locomotive Scroll, while the animations are 
          handled by GSAP's ScrollTrigger.
        </p>
      </div>

      {/* Animated image/card */}
      <div 
        ref={imageRef}
        className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-12"
      >
        <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-4"></div>
        <h3 className="text-xl font-semibold mb-2">Animated Card</h3>
        <p className="text-gray-600">This card scales in when it enters the viewport.</p>
      </div>

      {/* Staggered list animation */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">Staggered Items</h3>
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Feature 1</h4>
            <p className="text-gray-600">Each item animates with a slight delay.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Feature 2</h4>
            <p className="text-gray-600">Creating a smooth staggered effect.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Feature 3</h4>
            <p className="text-gray-600">Perfect for lists and grids.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Feature 4</h4>
            <p className="text-gray-600">Powered by GSAP's stagger functionality.</p>
          </div>
        </div>
      </div>

      {/* Additional content to demonstrate scroll */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Locomotive Scroll Features</h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div data-scroll data-scroll-speed="0.5">
            <h4 className="font-semibold mb-2">Smooth Scrolling</h4>
            <p className="text-sm text-gray-600">
              Buttery smooth scroll experience across all devices.
            </p>
          </div>
          <div data-scroll data-scroll-speed="0.8">
            <h4 className="font-semibold mb-2">Parallax Effects</h4>
            <p className="text-sm text-gray-600">
              Elements can move at different speeds (data-scroll-speed).
            </p>
          </div>
          <div data-scroll data-scroll-speed="1.2">
            <h4 className="font-semibold mb-2">GSAP Integration</h4>
            <p className="text-sm text-gray-600">
              Perfect integration with ScrollTrigger for complex animations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollAnimationExample