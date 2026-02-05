import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neonButtonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-gold-500 text-white hover:bg-gold-600 neon-box-gold",
                outline: "border border-gold-500 bg-transparent text-gold-500 hover:bg-gold-500/10 neon-border-gold",
                ghost: "hover:bg-gold-500/10 hover:text-gold-500",
                link: "text-gold-500 underline-offset-4 hover:underline neon-text-gold",
                glow: "bg-transparent border border-gold-400 text-gold-400 shadow-[0_0_10px_rgba(218,165,32,0.5)] hover:shadow-[0_0_20px_rgba(218,165,32,0.8)] hover:bg-gold-500/10",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface NeonButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
    asChild?: boolean
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(neonButtonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
NeonButton.displayName = "NeonButton"

export { NeonButton, neonButtonVariants }
