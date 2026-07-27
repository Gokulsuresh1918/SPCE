"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { useReducedMotion } from "./motion"

/**
 * Smooth-scroll via Lenis. Not mounted anywhere yet — Phase 02 (app shell)
 * wires this into the root layout once nav/scroll-lock interactions are in
 * place, so it doesn't change global scroll behaviour mid-triage.
 *
 * Per CLAUDE.md: disabled on touch devices and when the user prefers
 * reduced motion — both groups get native scrolling instead.
 */
export function useLenis() {
  const reduced = useReducedMotion()

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (reduced || isTouch) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    })

    let frameId: number
    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [reduced])
}
