"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Glowing Orbs */}
            <motion.div
                className="absolute w-[40rem] h-[40rem] rounded-full bg-[#5DCAA5]/10 blur-[120px]"
                animate={{
                    x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1000) / 2) * -0.02,
                    y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) / 2) * -0.02,
                }}
                transition={{ type: "tween", duration: 1 }}
                style={{ top: '10%', left: '-10%' }}
            />
            
            <motion.div
                className="absolute w-[30rem] h-[30rem] rounded-full bg-[#EF9F27]/10 blur-[100px]"
                animate={{
                    x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1000) / 2) * 0.03,
                    y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) / 2) * 0.03,
                }}
                transition={{ type: "tween", duration: 1 }}
                style={{ bottom: '0%', right: '-5%' }}
            />

            {/* Subtle floating ambient particles */}
            <motion.div
                className="absolute rounded-full blur-[80px] bg-purple-500/10 w-96 h-96"
                animate={{
                    x: ['0%', '20%', '-10%', '0%'],
                    y: ['0%', '30%', '-20%', '0%'],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ top: '40%', left: '40%' }}
            />
        </div>
    );
}
