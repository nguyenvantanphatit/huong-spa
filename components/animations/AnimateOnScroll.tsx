"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimateOnScrollProps {
    children: ReactNode
    delay?: number
    duration?: number
    y?: number
}

export default function AnimateOnScroll({
    children,
    delay = 0,
    duration = 0.7,
    y = 30,
}: AnimateOnScrollProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}
