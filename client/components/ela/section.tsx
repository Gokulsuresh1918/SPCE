import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "dark" | "light"
  divider?: boolean
}

/**
 * Handles the light/dark section alternation and vertical rhythm called for
 * in CLAUDE.md: dark sections get ela-deep background with rice text, light
 * sections get rice background with charcoal text. `divider` adds the
 * banana-leaf vein texture at 3% opacity along the top edge.
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, tone = "light", divider = false, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "relative py-24 md:py-32",
        tone === "dark" ? "bg-ela-deep text-rice" : "bg-rice text-charcoal",
        className,
      )}
      {...props}
    >
      {divider && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-[0.03]"
          style={{
            backgroundImage: "url(/textures/leaf-vein.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "400px 200px",
          }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  ),
)
Section.displayName = "Section"

export { Section }
