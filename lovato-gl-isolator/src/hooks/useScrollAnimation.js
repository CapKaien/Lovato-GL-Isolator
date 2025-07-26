import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const {
      trigger = element,
      start = 'top 80%',
      end = 'bottom 20%',
      animation = 'fadeInUp',
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      markers = false,
      ...customProps
    } = options

    // Define animation presets
    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 }
      },
      fadeInDown: {
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 }
      },
      fadeInLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 }
      },
      fadeInRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      },
      slideInUp: {
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1 }
      }
    }

    const selectedAnimation = animations[animation] || animations.fadeInUp

    // Set initial state
    gsap.set(element, selectedAnimation.from)

    // Create scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start,
      end,
      markers,
      scroller: '[data-scroll-container]',
      onEnter: () => {
        gsap.to(element, {
          ...selectedAnimation.to,
          duration,
          delay,
          ease,
          ...customProps
        })
      },
      onLeaveBack: () => {
        gsap.to(element, {
          ...selectedAnimation.from,
          duration: duration * 0.5,
          ease,
        })
      }
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [options])

  return elementRef
}

// Hook for staggered animations (useful for lists, grids, etc.)
export const useStaggerAnimation = (options = {}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const children = container.children

    const {
      stagger = 0.1,
      animation = 'fadeInUp',
      duration = 0.8,
      ease = 'power2.out',
      start = 'top 80%',
      markers = false
    } = options

    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 }
      },
      fadeInLeft: {
        from: { opacity: 0, x: -30 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      }
    }

    const selectedAnimation = animations[animation] || animations.fadeInUp

    // Set initial state for all children
    gsap.set(children, selectedAnimation.from)

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start,
      markers,
      scroller: '[data-scroll-container]',
      onEnter: () => {
        gsap.to(children, {
          ...selectedAnimation.to,
          duration,
          ease,
          stagger
        })
      }
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [options])

  return containerRef
}