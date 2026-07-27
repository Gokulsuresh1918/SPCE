"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, useReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

export interface SplitTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  /** Split by "char" for a tight letter-by-letter reveal, or "word" for a calmer one. */
  by?: "char" | "word"
}

/** Character- or word-level reveal, built on the fadeUp/staggerContainer primitives. */
export function SplitText({ text, className, as = "span", by = "char" }: SplitTextProps) {
  const reduced = useReducedMotion()
  const Tag = motion[as]
  const pieces = by === "char" ? Array.from(text) : text.split(" ")

  return (
    <Tag
      className={cn("inline-block", className)}
      variants={staggerContainer(reduced, by === "char" ? 0.02 : 0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      aria-label={text}
    >
      {pieces.map((piece, i) => (
        <motion.span
          key={`${piece}-${i}`}
          variants={fadeUp(reduced, 16)}
          className="inline-block"
          aria-hidden="true"
        >
          {piece === " " ? " " : piece}
          {by === "word" && i < pieces.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  )
}
