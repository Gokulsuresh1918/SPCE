"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { motion, useAnimation } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

/**
 * A leaf-green wipe that covers then uncovers the viewport on route change.
 * Doesn't wrap or remount page content — Next.js already swaps that on
 * navigation — this is purely a decorative overlay, so it can't block
 * interaction (pointer-events-none) or shift layout (fixed positioning).
 */
export function PageTransitionOverlay() {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const controls = useAnimation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (reduced) return

    controls.set({ scaleX: 0 })
    controls.start({
      scaleX: [0, 1, 1, 0],
      transition: { duration: 0.55, times: [0, 0.4, 0.5, 1], ease: [0.22, 1, 0.36, 1] },
    })
  }, [pathname, controls, reduced])

  if (reduced) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] origin-left bg-ela-fresh"
      initial={{ scaleX: 0 }}
      animate={controls}
    />
  )
}
