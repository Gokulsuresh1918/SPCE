import * as React from "react"
import { cn } from "@/lib/utils"

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {}

/** Small uppercase label used above a heading, e.g. "OUR SERVICES". */
const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("block text-sm font-semibold uppercase tracking-[0.2em] text-turmeric", className)}
    {...props}
  />
))
Eyebrow.displayName = "Eyebrow"

export { Eyebrow }
