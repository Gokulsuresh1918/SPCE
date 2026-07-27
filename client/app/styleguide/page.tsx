"use client"

import { motion } from "framer-motion"
import { ElaButton } from "@/components/ela/button"
import { ElaCard } from "@/components/ela/card"
import { Section } from "@/components/ela/section"
import { Eyebrow } from "@/components/ela/eyebrow"
import { SplitText } from "@/components/ela/split-text"
import { fadeUp, staggerContainer, revealMask, scaleIn, drawPath, useCounterUp, useReducedMotion } from "@/lib/motion"

const SEMANTIC_COLORS = [
  { name: "ela-deep", hex: "#14342B", className: "bg-ela-deep", on: "text-rice" },
  { name: "ela-mid", hex: "#2F5D50", className: "bg-ela-mid", on: "text-rice" },
  { name: "ela-fresh", hex: "#6A994E", className: "bg-ela-fresh", on: "text-rice" },
  { name: "rice", hex: "#FBF7EC", className: "bg-rice", on: "text-charcoal" },
  { name: "turmeric", hex: "#D9A521", className: "bg-turmeric", on: "text-charcoal" },
  { name: "kumkum", hex: "#A02C2C", className: "bg-kumkum", on: "text-rice" },
  { name: "charcoal", hex: "#191A17", className: "bg-charcoal", on: "text-rice" },
]

const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const TYPE_STEPS = [
  { name: "xs", className: "text-xs" },
  { name: "sm", className: "text-sm" },
  { name: "base", className: "text-base" },
  { name: "lg", className: "text-lg" },
  { name: "xl", className: "text-xl" },
  { name: "2xl", className: "text-2xl" },
  { name: "3xl", className: "text-3xl" },
  { name: "4xl", className: "text-4xl" },
  { name: "5xl", className: "text-5xl" },
  { name: "6xl", className: "text-6xl" },
  { name: "7xl", className: "text-7xl" },
  { name: "display", className: "text-display" },
]

const BUTTON_VARIANTS = ["primary", "secondary", "ghost", "leaf"] as const
const BUTTON_SIZES = ["sm", "default", "lg"] as const

function ColorSwatch({ name, hex, className, on }: (typeof SEMANTIC_COLORS)[number]) {
  return (
    <div className="rounded-xl overflow-hidden border border-ela-100">
      <div className={`${className} ${on} flex h-24 items-end p-3`}>
        <span className="text-xs font-semibold uppercase tracking-wide">{name}</span>
      </div>
      <div className="bg-white px-3 py-2 text-xs text-charcoal/70 tabular-nums">{hex}</div>
    </div>
  )
}

// Tailwind's content scanner needs complete, static class strings — it can't
// see through `bg-${token}-${step}` template interpolation — so the ramp is
// spelled out here instead of built dynamically.
const SCALE_CLASSES = {
  ela: {
    50: "bg-ela-50",
    100: "bg-ela-100",
    200: "bg-ela-200",
    300: "bg-ela-300",
    400: "bg-ela-400",
    500: "bg-ela-500",
    600: "bg-ela-600",
    700: "bg-ela-700",
    800: "bg-ela-800",
    900: "bg-ela-900",
  },
  rice: {
    50: "bg-rice-50",
    100: "bg-rice-100",
    200: "bg-rice-200",
    300: "bg-rice-300",
    400: "bg-rice-400",
    500: "bg-rice-500",
    600: "bg-rice-600",
    700: "bg-rice-700",
    800: "bg-rice-800",
    900: "bg-rice-900",
  },
} as const

function ScaleRow({ token }: { token: "ela" | "rice" }) {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
      {SCALE_STEPS.map((step) => (
        <div key={step} className="text-center">
          <div className={`h-14 rounded-md border border-ela-100/50 ${SCALE_CLASSES[token][step]}`} />
          <span className="mt-1 block text-xs text-charcoal/60 tabular-nums">{step}</span>
        </div>
      ))}
    </div>
  )
}

function CounterDemo({ value, label }: { value: number; label: string }) {
  const { ref, display } = useCounterUp(value)
  return (
    <div ref={ref as any} className="text-center">
      <div className="text-4xl font-serif font-semibold text-ela-deep tabular-nums">{display}</div>
      <div className="text-sm text-charcoal/60 mt-1">{label}</div>
    </div>
  )
}

function DrawPathDemo() {
  const reduced = useReducedMotion()
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 mx-auto" fill="none">
      <motion.path
        d="M60 10 C90 10 110 35 110 60 C110 90 85 110 60 110 C35 110 10 85 10 60 C10 35 30 10 60 10 Z"
        stroke="rgb(var(--ela-fresh))"
        strokeWidth={3}
        variants={drawPath(reduced)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
    </svg>
  )
}

export default function StyleguidePage() {
  const reduced = useReducedMotion()

  return (
    <div className="bg-rice text-charcoal font-sans">
      <Section tone="dark">
        <Eyebrow className="text-turmeric">Phase 01 — Design System</Eyebrow>
        <h1 className="font-serif font-display-opsz text-display mt-3 mb-4">
          <SplitText text="Ela" as="span" />
        </h1>
        <p className="max-w-xl text-lg text-rice/80">
          ഇല — the banana leaf. Every token below derives from it: colour, type, motion,
          and texture, reviewable in one place before it goes into any page.
        </p>
      </Section>

      {/* Colour tokens */}
      <Section tone="light">
        <Eyebrow>Colour</Eyebrow>
        <h2 className="font-serif text-4xl mt-2 mb-8">Tokens</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {SEMANTIC_COLORS.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>

        <h3 className="font-serif text-2xl mb-3">ela-50 → ela-900</h3>
        <ScaleRow token="ela" />

        <h3 className="font-serif text-2xl mt-8 mb-3">rice-50 → rice-900</h3>
        <ScaleRow token="rice" />
      </Section>

      {/* Type scale */}
      <Section tone="light" divider>
        <Eyebrow>Type</Eyebrow>
        <h2 className="font-serif text-4xl mt-2 mb-2">Fluid Scale</h2>
        <p className="text-charcoal/60 mb-8 max-w-2xl">
          Every step below is a clamp() interpolated between 360px and 1920px viewports —
          resize the window to see it move. Display sizes use Fraunces; body copy uses
          General Sans.
        </p>

        <div className="space-y-4 mb-12">
          {TYPE_STEPS.map((step) => (
            <div key={step.name} className="flex items-baseline gap-4 border-b border-ela-100 pb-3">
              <span className="w-16 shrink-0 text-xs text-charcoal/50 tabular-nums">{step.name}</span>
              <span className={`font-serif ${step.className}`}>Sadya, served fresh</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <Eyebrow className="mb-2">Display — Fraunces</Eyebrow>
            <p className="font-serif text-3xl font-display-opsz">Onam Sadhya</p>
          </div>
          <div>
            <Eyebrow className="mb-2">Body — General Sans</Eyebrow>
            <p className="font-sans text-lg">Twenty-six dishes, served on a fresh banana leaf.</p>
          </div>
          <div>
            <Eyebrow className="mb-2">Malayalam — Manjari</Eyebrow>
            <p className="font-malayalam text-lg">സദ്യ ഇലയിൽ വിളമ്പുന്നു</p>
          </div>
        </div>

        <div className="mt-8">
          <Eyebrow className="mb-2">Tabular numerals (prices, counters)</Eyebrow>
          <p className="text-2xl font-semibold tabular-nums">₹450 · ₹1,25,000 · ₹3,50,000</p>
        </div>
      </Section>

      {/* Buttons */}
      <Section tone="dark">
        <Eyebrow className="text-turmeric">Components</Eyebrow>
        <h2 className="font-serif text-4xl mt-2 mb-8">Buttons</h2>

        <div className="space-y-6">
          {BUTTON_VARIANTS.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-4">
              <span className="w-24 shrink-0 text-xs uppercase tracking-wide text-rice/50">{variant}</span>
              {BUTTON_SIZES.map((size) => (
                <ElaButton key={size} variant={variant} size={size}>
                  Send enquiry
                </ElaButton>
              ))}
              <ElaButton variant={variant} disabled>
                Disabled
              </ElaButton>
            </div>
          ))}
        </div>
      </Section>

      {/* Cards + kasavu edge + eyebrow */}
      <Section tone="light">
        <Eyebrow>Components</Eyebrow>
        <h2 className="font-serif text-4xl mt-2 mb-8">Cards &amp; Labels</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ElaCard tone="on-light" kasavuEdge>
            <Eyebrow className="mb-2">Valiya Sadya</Eyebrow>
            <h3 className="font-serif text-2xl mb-2">64-dish menu</h3>
            <p className="text-charcoal/70">Card with the kasavu gold-border motif along the top edge.</p>
          </ElaCard>
          <ElaCard tone="on-dark" className="bg-ela-deep">
            <Eyebrow className="mb-2 text-turmeric">Since 1993</Eyebrow>
            <h3 className="font-serif text-2xl mb-2 text-rice">On-dark card</h3>
            <p className="text-rice/70">Same component, dark tone for use inside a dark Section.</p>
          </ElaCard>
        </div>
      </Section>

      {/* Motion primitives */}
      <Section tone="light" divider>
        <Eyebrow>Motion</Eyebrow>
        <h2 className="font-serif text-4xl mt-2 mb-2">Primitives</h2>
        <p className="text-charcoal/60 mb-10 max-w-2xl">
          Scroll each of these into view to trigger it. prefers-reduced-motion is currently{" "}
          <strong>{reduced ? "ON" : "off"}</strong> — every primitive here degrades to instant
          when it is.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl bg-ela-50 p-6 text-center"
          >
            <p className="font-serif text-lg">fadeUp</p>
          </motion.div>

          <motion.div
            variants={revealMask(reduced)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl bg-ela-50 p-6 text-center"
          >
            <p className="font-serif text-lg">revealMask</p>
          </motion.div>

          <motion.div
            variants={scaleIn(reduced)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl bg-ela-50 p-6 text-center"
          >
            <p className="font-serif text-lg">scaleIn</p>
          </motion.div>

          <motion.div
            variants={staggerContainer(reduced)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl bg-ela-50 p-6 flex justify-center gap-2"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                variants={fadeUp(reduced, 12)}
                className="h-3 w-3 rounded-full bg-ela-fresh"
              />
            ))}
          </motion.div>

          <div className="rounded-xl bg-ela-50 p-6 text-center">
            <DrawPathDemo />
            <p className="font-serif text-lg mt-2">drawPath</p>
          </div>

          <div className="rounded-xl bg-ela-50 p-6">
            <CounterDemo value={1000} label="counterUp" />
          </div>
        </div>
      </Section>

      {/* Texture */}
      <Section tone="dark">
        <Eyebrow className="text-turmeric">Texture</Eyebrow>
        <h2 className="font-serif text-4xl mt-2 mb-8 text-rice">Restraint</h2>
        <p className="text-rice/70 max-w-2xl mb-6">
          Leaf-vein divider (shown here at full opacity to be visible — real usage stays at
          3% max) and the kasavu border strip used above on the card.
        </p>
        <div
          className="h-16 w-full rounded-lg bg-ela-mid mb-4"
          style={{
            backgroundImage: "url(/textures/leaf-vein.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "400px 200px",
            color: "#FBF7EC",
          }}
        />
        <div
          className="h-6 w-full rounded"
          style={{ backgroundImage: "url(/textures/kasavu-border.svg)", backgroundRepeat: "repeat-x" }}
        />
      </Section>
    </div>
  )
}
