import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Ela design-system button. Deliberately separate from components/ui/button.tsx
 * (the legacy v0 shadcn button) so existing pages keep working unchanged until
 * a later phase migrates them over.
 *
 * Variant mapping per CLAUDE.md: kumkum is reserved for primary CTAs only, so
 * "primary" is the only variant that touches it.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric focus-visible:ring-offset-2 focus-visible:ring-offset-rice disabled:pointer-events-none disabled:opacity-50 min-h-[44px]",
  {
    variants: {
      variant: {
        primary: "bg-kumkum text-rice hover:bg-kumkum/90",
        // border/text use turmeric rather than ela-deep so this stays legible
        // on both light (rice) and dark (ela-deep) sections without a tone prop.
        secondary: "border-2 border-turmeric text-turmeric bg-transparent hover:bg-turmeric hover:text-ela-deep",
        // text-inherit follows the ambient section text color (rice on dark,
        // charcoal on light); bg-current/10 tints toward whatever that is.
        ghost: "bg-transparent text-inherit hover:bg-current/10",
        leaf: "bg-ela-fresh text-rice hover:bg-ela-fresh/90",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ElaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const ElaButton = React.forwardRef<HTMLButtonElement, ElaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
ElaButton.displayName = "ElaButton"

export { ElaButton, buttonVariants }
