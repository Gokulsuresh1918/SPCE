"use client"

import { useLenis } from "@/lib/lenis"

/** Mounts smooth scroll for the whole app. Renders nothing. */
export function LenisSetup() {
  useLenis()
  return null
}
