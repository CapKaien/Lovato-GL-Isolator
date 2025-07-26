import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css'
import Content from './components/Content'
import Testimonials from './components/Testimonials'
import ScrollAnimationExample from './components/ScrollAnimationExample'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    })

    // Update ScrollTrigger when Locomotive Scroll updates
    locomotiveScrollRef.current.on('scroll', ScrollTrigger.update)

    // Tell ScrollTrigger to use these proxy methods for the scroll container
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length 
          ? locomotiveScrollRef.current.scrollTo(value, 0, 0)
          : locomotiveScrollRef.current.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed'
    })

    // Update ScrollTrigger on resize
    ScrollTrigger.addEventListener('refresh', () => locomotiveScrollRef.current.update())
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
      ScrollTrigger.removeEventListener('refresh', () => locomotiveScrollRef.current.update())
    }
  }, [])

  return (
    <Router>
      <div ref={scrollRef} data-scroll-container>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Content />
                <Testimonials />
                <ScrollAnimationExample />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
