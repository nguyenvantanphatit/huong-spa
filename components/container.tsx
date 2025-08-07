import { cn } from "@/lib/utils"
import type React from "react"

interface ContainerProps {
  children: React.ReactNode
  large?: boolean
  alt?: boolean
  className?: string
}

export default function Container({ children, large, alt, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "container px-10 mx-auto",
        large ? "max-w-screen-xl" : "max-w-screen-xl",
        !alt && "py-5 lg:py-8",
        className,
      )}
    >
      {children}
    </div>
  )
}