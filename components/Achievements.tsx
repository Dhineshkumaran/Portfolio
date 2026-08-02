"use client";

import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../lib/data';

export default function Achievements() {
    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border scroll-mt-32" id="achievements">
            <h2 className="font-mono text-xl text-foreground mb-8">
                <span className="text-teal">#</span> achievements_&_awards
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                {ACHIEVEMENTS.map((achieve, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-cardBg border border-border p-5 rounded-xl hover:border-teal/50 hover:shadow-[0_0_20px_rgba(93,202,165,0.1)] transition-all group"
                    >
                        <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-cardHover relative">
                            <div className="absolute inset-0 bg-teal/10 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                            <img src={achieve.image} alt={achieve.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="font-bold text-foreground mb-1">{achieve.title}</h3>
                        <p className="text-teal text-xs font-mono uppercase tracking-wider mb-3">{achieve.event}</p>
                        <p className="text-foreground/60 text-sm leading-relaxed">{achieve.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
