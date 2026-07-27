import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

let registered = false

/**
 * Registers the ScrollTrigger plugin exactly once. Call from a "use client"
 * component before setting up any scroll-choreographed gsap timeline.
 */
export function registerScrollTrigger() {
  if (registered || typeof window === "undefined") return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export { gsap, ScrollTrigger }
