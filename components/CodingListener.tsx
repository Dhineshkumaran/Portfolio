"use client";

import { motion, useReducedMotion } from 'framer-motion';

const notes = [
    { symbol: '♪', duration: 7, delay: 0, drift: 70, left: 0, color: 'text-teal' },
    { symbol: '♫', duration: 9, delay: 1.3, drift: 125, left: 14, color: 'text-amber' },
    { symbol: '♬', duration: 8, delay: 2.8, drift: 45, left: 28, color: 'text-teal' },
    { symbol: '♪', duration: 10, delay: 4.2, drift: 155, left: 8, color: 'text-amber' },
    { symbol: '♫', duration: 8.5, delay: 5.7, drift: 95, left: 35, color: 'text-teal' },
];

export default function CodingListener() {
    const reducedMotion = useReducedMotion();

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
            {notes.map((note, index) => (
                <motion.span
                    key={index}
                    className={`absolute bottom-28 left-[136px] font-mono text-2xl font-bold sm:left-[176px] ${note.color}`}
                    style={{ textShadow: '0 0 12px currentColor' }}
                    initial={{ opacity: 0, scale: 0.65, x: 0, y: 0, rotate: 0 }}
                    animate={reducedMotion ? { opacity: 0 } : {
                        opacity: [0, 0.9, 0.72, 0],
                        scale: [0.65, 1.1, 0.95, 0.8],
                        x: [note.left, note.left + note.drift * 0.35, note.left + note.drift],
                        y: ['0vh', '-45vh', '-100vh'],
                        rotate: [0, 10, -8],
                    }}
                    transition={reducedMotion ? undefined : {
                        duration: note.duration,
                        delay: note.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {note.symbol}
                </motion.span>
            ))}

            <img
                src="/images/coder_typing.gif"
                alt=""
                className="absolute bottom-0 left-2 w-64 sm:left-4 sm:w-80 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
            />
        </div>
    );
}
