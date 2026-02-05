import { cn } from "@/lib/utils"
import React from "react"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

export default function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-xl p-6 transition-all duration-300 border border-white/20",
                hoverEffect && "hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
