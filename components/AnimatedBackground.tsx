"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 2000], [0, 200]);
    
    // Generate static lines for schematic
    const verticalLines = Array.from({ length: 20 }, (_, i) => i * 5);
    const horizontalLines = Array.from({ length: 20 }, (_, i) => i * 5);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Base Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle glow nodes on intersections */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 40px 40px, var(--teal) 2px, transparent 0)',
                    backgroundSize: '80px 80px',
                    backgroundPosition: '-40px -40px'
                }}
            />

            {/* Flowing Data Packets on Grid (Vertical) */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
                {verticalLines.map((percent, i) => (
                    <motion.circle
                        key={`v-${i}`}
                        cx={`${percent}%`}
                        cy="0"
                        r="2"
                        fill="var(--teal)"
                        initial={{ cy: "-10%" }}
                        animate={{ cy: "110%" }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        className="blur-[1px]"
                        style={{ fill: '#5DCAA5' }}
                    />
                ))}
                {/* Flowing Data Packets on Grid (Horizontal) */}
                {horizontalLines.map((percent, i) => (
                    <motion.circle
                        key={`h-${i}`}
                        cx="0"
                        cy={`${percent}%`}
                        r="2"
                        fill="var(--amber)"
                        initial={{ cx: "-10%" }}
                        animate={{ cx: "110%" }}
                        transition={{
                            duration: Math.random() * 5 + 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        className="blur-[1px]"
                        style={{ fill: '#EF9F27' }}
                    />
                ))}
            </svg>

            {/* Ambient Background Orbs */}
            <motion.div
                className="absolute w-[40rem] h-[40rem] rounded-full bg-[#5DCAA5]/5 blur-[120px]"
                style={{ top: '10%', left: '-10%', y: y1 }}
            />
            <motion.div
                className="absolute w-[30rem] h-[30rem] rounded-full bg-[#EF9F27]/5 blur-[100px]"
                style={{ bottom: '20%', right: '-5%', y: y1 }}
            />
        </div>
    );
}
