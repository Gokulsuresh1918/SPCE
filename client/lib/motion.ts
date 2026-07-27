"use client"

import { useEffect, useState } from "react"
import { useMotionValue, useInView, animate, type Variants } from "framer-motion"
import { useRef } from "react"

/**
 * SSR-safe prefers-reduced-motion. Defaults to false on the server and first
 * paint, then syncs to the real value on mount and on OS-setting changes.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(query.matches)

    const handleChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    query.addEventListener("change", handleChange)
    return () => query.removeEventListener("change", handleChange)
  }, [])

  return reduced
}

const EASE = [0.22, 1, 0.36, 1] as const

/** Fades in while rising from a small y-offset. */
export function fadeUp(reduced = false, distance = 24): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.6, ease: EASE },
    },
  }
}

/** Wraps a group of children so they animate in one after another. */
export function staggerContainer(reduced = false, stagger = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  }
}

/** Reveals content from behind a hard-edged mask, left to right. */
export function revealMask(reduced = false): Variants {
  return {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: reduced ? 0 : 0.8, ease: EASE },
    },
  }
}

/** Scales up from slightly-below-full-size while fading in. */
export function scaleIn(reduced = false, from = 0.92): Variants {
  return {
    hidden: { opacity: 0, scale: reduced ? 1 : from },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduced ? 0 : 0.5, ease: EASE },
    },
  }
}

/** Animates an SVG stroke from undrawn to fully drawn (pair with pathLength). */
export function drawPath(reduced = false, duration = 1.2): Variants {
  return {
    hidden: { pathLength: 0, opacity: reduced ? 1 : 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: reduced ? 0 : duration, ease: EASE },
    },
  }
}

/**
 * Animates a number counting up from 0 to `value` once it scrolls into view.
 * Jumps straight to the final value when the user prefers reduced motion.
 */
export function useCounterUp(value: number, opts?: { duration?: number; decimals?: number }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reduced = useReducedMotion()
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState("0")
  const decimals = opts?.decimals ?? 0

  useEffect(() => {
    if (!isInView) return

    if (reduced) {
      setDisplay(value.toFixed(decimals))
      return
    }

    const controls = animate(motionValue, value, {
      duration: opts?.duration ?? 1.5,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [isInView, reduced, value, decimals, opts?.duration, motionValue])

  return { ref, display }
}
