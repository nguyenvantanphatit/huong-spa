"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimateOnScrollProps {
    children: ReactNode
    delay?: number
    duration?: number
    y?: number
}

export default function AnimateZoomInScroll({
    children,
    delay = 0,
    duration = 1,
    y = 30,
}: AnimateOnScrollProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full mx-auto overflow-hidden aspect-[375/720] md:aspect-[1603/792]"
        >
            {children}
        </motion.div>
    )
}
