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
                    className={`absolute bottom-20 font-mono text-2xl font-bold ${note.color}`}
                    style={{ left: 72 + note.left, textShadow: '0 0 12px currentColor' }}
                    initial={{ opacity: 0, scale: 0.65, x: 0, y: 0, rotate: 0 }}
                    animate={reducedMotion ? { opacity: 0 } : {
                        opacity: [0, 0.9, 0.72, 0],
                        scale: [0.65, 1.1, 0.95, 0.8],
                        x: [0, note.drift * 0.35, note.drift],
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

            <svg viewBox="0 0 150 170" className="absolute bottom-0 left-1 w-28 sm:left-3 sm:w-32" fill="none">
                {/* Head and hair */}
                <path d="M52 38c0-18 11-29 27-29s27 11 27 29v16c0 16-11 27-27 27S52 70 52 54V38Z" fill="#F0C49B" stroke="#302D2B" strokeWidth="3" />
                <path d="M52 39c-2-17 9-31 27-31 15 0 26 10 28 25-8-7-17-11-28-10-10 1-17 6-23 16l-4 11v-11Z" fill="#302D2B" />
                <path d="M63 49v1m30-1v1" stroke="#302D2B" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M73 64c4 3 9 3 13 0" stroke="#9B594C" strokeWidth="2.5" strokeLinecap="round" />

                {/* Headphones */}
                <path d="M48 48V39C48 19 61 7 79 7s33 13 33 32v9" stroke="#EF9F27" strokeWidth="7" strokeLinecap="round" />
                <rect x="43" y="40" width="13" height="24" rx="6" fill="#287F70" stroke="#243B37" strokeWidth="2" />
                <rect x="106" y="40" width="13" height="24" rx="6" fill="#287F70" stroke="#243B37" strokeWidth="2" />

                {/* Hoodie and arms */}
                <path d="M56 81c-15 4-25 14-29 31l-7 37h111l-8-38c-3-15-13-26-28-30l-16 12-23-12Z" fill="#287F70" stroke="#243B37" strokeWidth="3" strokeLinejoin="round" />
                <path d="m59 84 20 17 19-17" stroke="#83C5B5" strokeWidth="3" strokeLinejoin="round" />
                <path d="M45 112 63 128m48-16-18 16" stroke="#F0C49B" strokeWidth="9" strokeLinecap="round" />

                {/* Laptop with a simple code mark */}
                <rect x="55" y="112" width="49" height="34" rx="3" fill="#252D34" stroke="#A8B7C0" strokeWidth="2" />
                <path d="m72 124-5 4 5 4m14-8 5 4-5 4m-3-10-4 12" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <motion.rect
                    x="92"
                    y="122"
                    width="2"
                    height="7"
                    rx="1"
                    fill="#EF9F27"
                    animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                    transition={reducedMotion ? undefined : { duration: 0.8, repeat: Infinity, ease: 'linear' }}
                />
                <path d="m45 150 12-5h46l12 5c2 1 1 4-2 4H47c-3 0-4-3-2-4Z" fill="#A8B7C0" stroke="#56636B" strokeWidth="2" strokeLinejoin="round" />
                <motion.g
                    animate={reducedMotion ? undefined : { y: [0, 1.5, 0] }}
                    transition={reducedMotion ? undefined : { duration: 0.42, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <path d="M60 144c1-4 3-5 5-2l2 3c1-4 4-4 5 0l1 2H61l-1-3Z" fill="#F0C49B" stroke="#302D2B" strokeWidth="1.5" strokeLinejoin="round" />
                </motion.g>
                <motion.g
                    animate={reducedMotion ? undefined : { y: [1.5, 0, 1.5] }}
                    transition={reducedMotion ? undefined : { duration: 0.42, delay: 0.21, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <path d="M81 147 83 144c1-4 4-4 5 0l2-2c2-3 4-2 5 2l-1 3H81Z" fill="#F0C49B" stroke="#302D2B" strokeWidth="1.5" strokeLinejoin="round" />
                </motion.g>
            </svg>
        </div>
    );
}
