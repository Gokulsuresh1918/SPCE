import * as React from "react"
import { cn } from "@/lib/utils"

export interface ElaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "on-dark" | "on-light"
  kasavuEdge?: boolean
}

/**
 * Ela design-system card. `tone` picks a background/border pair that's
 * legible against the section it sits in — pass "on-dark" inside a dark
 * Section, "on-light" inside a light one, rather than hardcoding colors
 * at each call site.
 */
const ElaCard = React.forwardRef<HTMLDivElement, ElaCardProps>(
  ({ className, tone = "on-light", kasavuEdge = false, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border p-6",
        tone === "on-dark" ? "bg-ela-mid/40 border-rice/15 text-rice" : "bg-white border-ela-100 text-charcoal",
        kasavuEdge && "border-t-4 border-t-transparent bg-[length:40px_6px] bg-repeat-x bg-top",
        className,
      )}
      style={kasavuEdge ? { backgroundImage: "url(/textures/kasavu-border.svg)", ...style } : style}
      {...props}
    />
  ),
)
ElaCard.displayName = "ElaCard"

export { ElaCard }
