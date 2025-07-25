import React, { useEffect, useRef } from 'react'
import switchImg from '../assets/img/switch.png'
import { FiZap, FiGrid, FiBox, FiLock, FiSettings } from 'react-icons/fi'
import gsap from 'gsap'
import SplitType from 'split-type'
import client1 from '../assets/img/image 3.png'
import client2 from '../assets/img/image 4.png'
import client3 from '../assets/img/image 5.png'
import client4 from '../assets/img/image 6.png'
import client5 from '../assets/img/image 7.png'
import client6 from '../assets/img/image 8.png'

const features = [
  {
    icon: <FiZap size={32} className="stroke-white" />,
    title: 'Fast Switching',
    desc: 'Reliable speed for critical systems.',
    style: { top: '70px', left: '60px' }, // moved up and left
  },
  {
    icon: <FiSettings size={32} className="stroke-white" />, // <-- changed here
    title: 'Modular Flexibility',
    desc: 'Configure your way—no limits.',
    style: { top: '-20px', right: '130px' }, // moved up and right
  },
  {
    icon: <FiGrid size={32} className="stroke-white" />,
    title: 'Seamless Integration',
    desc: 'Fits panels, systems, and standards.',
    style: { bottom: '10px', left: '-80px' }, // moved down and left
  },
  {
    icon: <FiBox size={32} className="stroke-white" />,
    title: 'Compact Design',
    desc: 'More power in less space.',
    style: { bottom: '200px', right: '-100px' }, // moved down and right
  },
  {
    icon: <FiLock size={32} className="stroke-white" />,
    title: 'Advanced Security',
    desc: 'Peace of mind with every switch.',
    style: { bottom: '-40px', left: '70%', transform: 'translateX(-50%)' }, // stays centered
  },
]

function Hero() {
  const h1Ref = useRef(null)
  const pRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    // Store current ref values for cleanup
    const h1Element = h1Ref.current
    const pElement = pRef.current

    // Split and animate h1
    const h1Split = new SplitType(h1Element, { types: 'words, chars' })
    gsap.from(h1Split.chars, {
      y: 60,
      opacity: 0,
      stagger: 0.03,
      duration: 0.7,
      ease: 'power3.out',
    })

    // Split and animate p
    const pSplit = new SplitType(pElement, { types: 'words' })
    gsap.from(pSplit.words, {
      y: 30,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
      delay: 0.5,
      ease: 'power2.out',
    })

    // Cleanup function to prevent memory leaks
    return () => {
      if (h1Split) {
        h1Split.revert()
      }
      if (pSplit) {
        pSplit.revert()
      }
      // Kill any running GSAP animations on these elements
      gsap.killTweensOf([h1Element, pElement])
    }
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{
        background: 'transparent',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <span className="text-[#FA4515] font-medium text-base mb-2">Lovato GL Series</span>
      <h1
        ref={h1Ref}
        className="text-2xl xs:text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight"
      >
        The smart switching solution for<br className="hidden md:block" /> modern power systems
      </h1>
      <p
        ref={pRef}
        className="text-gray-700 text-base md:text-lg font-medium text-center max-w-xl mb-8 md:mb-14"
      >
        Effortless integration, ultrafast actuation, and modular design—built for high-performance installations up to 10000A.
      </p>
      <div className="relative w-full flex items-center justify-center min-h-[400px] md:min-h-[600px] mt-4 md:mt-8">
        {/* Center image as background */}
        <img
          src={switchImg}
          alt="Lovato GL Isolator"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm md:max-w-lg z-0 pointer-events-none select-none hidden md:block"
          style={{ objectFit: 'contain', zIndex: 1 }} // <-- set zIndex lower
        />
        {/* Overlapping frosted glass cards */}
        {features.map((f, i) => (
          <div
            key={f.title}
            ref={el => (cardRefs.current[i] = el)}
            className="absolute hidden md:flex flex-col gap-2 justify-center items-start p-8 w-[370px] h-[170px] bg-white/20 backdrop-blur-[8px] shadow-xl border border-white/30 rounded-[13px] z-20 cursor-grab" // <-- change z-10 to z-20
            style={{
              ...f.style,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              borderRadius: '13px',
              border: '1px solid rgba(255,255,255,0.18)',
              zIndex: 20, // <-- ensure zIndex is higher than image
            }}
          >
            <div className="bg-black rounded-[13px] p-2 flex items-center justify-center mb-2">
              {f.icon}
            </div>
            <span className="font-bold text-lg text-gray-900">{f.title}</span>
            <span className="text-sm font-medium text-gray-700">{f.desc}</span>
          </div>
        ))}
        {/* Mobile stacked cards */}
        <div className="flex flex-col gap-4 mt-6 md:hidden w-full z-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="w-full rounded-[13px] bg-white/20 backdrop-blur-[8px] shadow-lg border border-white/30 flex flex-row items-center p-6 gap-6"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                borderRadius: '13px',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              <div className="bg-black rounded-[13px] p-2 flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <span className="font-bold text-base text-gray-900">{f.title}</span>
                <div className="text-xs font-medium text-gray-700">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Clients image at the bottom */}
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <span className="text-[#FA4515] font-medium text-sm mb-6">
          Some of our trusted clients & partners
        </span>
        {/* Desktop: sliding animation */}
        <div className="relative w-full overflow-hidden hidden md:block">
          <div
            className="flex items-center gap-12 animate-slide"
            style={{
              width: 'max-content',
              animation: 'slide 30s linear infinite',
            }}
          >
            <img src={client1} alt="Client 1" className="h-12 md:h-16 w-auto" />
            <img src={client2} alt="Client 2" className="h-12 md:h-16 w-auto" />
            <img src={client3} alt="Client 3" className="h-12 md:h-16 w-auto" />
            <img src={client4} alt="Client 4" className="h-12 md:h-16 w-auto" />
            <img src={client5} alt="Client 5" className="h-12 md:h-16 w-auto" />
            <img src={client6} alt="Client 6" className="h-12 md:h-16 w-auto" />
            {/* Duplicate for seamless loop */}
            <img src={client1} alt="Client 1" className="h-12 md:h-16 w-auto" />
            <img src={client2} alt="Client 2" className="h-12 md:h-16 w-auto" />
            <img src={client3} alt="Client 3" className="h-12 md:h-16 w-auto" />
            <img src={client4} alt="Client 4" className="h-12 md:h-16 w-auto" />
            <img src={client5} alt="Client 5" className="h-12 md:h-16 w-auto" />
            <img src={client6} alt="Client 6" className="h-12 md:h-16 w-auto" />
          </div>
        </div>
        {/* Mobile: static row */}
        <div className="flex flex-wrap items-center justify-center gap-6 w-full md:hidden">
          <img src={client1} alt="Client 1" className="h-10 w-auto" />
          <img src={client2} alt="Client 2" className="h-10 w-auto" />
          <img src={client3} alt="Client 3" className="h-10 w-auto" />
          <img src={client4} alt="Client 4" className="h-10 w-auto" />
          <img src={client5} alt="Client 5" className="h-10 w-auto" />
          <img src={client6} alt="Client 6" className="h-10 w-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero