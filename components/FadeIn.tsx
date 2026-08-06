"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
    const directionOffset = {
        up: 40,
        down: -40,
        left: 40,
        right: -40,
        none: 0
    };

    const initialY = direction === "up" || direction === "down" ? directionOffset[direction] : 0;
    const initialX = direction === "left" || direction === "right" ? directionOffset[direction] : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: initialY, x: initialX }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
