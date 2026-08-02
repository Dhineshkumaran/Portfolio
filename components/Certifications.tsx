"use client";

import { motion } from 'framer-motion';
import { COURSES } from '../lib/data';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border scroll-mt-32" id="certifications">
            <h2 className="font-mono text-xl text-foreground mb-8">
                <span className="text-teal">#</span> verified_certifications
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {COURSES.map((course, idx) => (
                    <motion.a
                        key={idx}
                        href={course.link}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-cardBg border border-border p-6 rounded-xl hover:border-amber/50 hover:bg-amber/5 transition-all flex flex-col items-center text-center group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10">
                            <img src={course.img} alt={course.title} className="max-w-full max-h-full drop-shadow-md group-hover:scale-110 transition-transform" />
                        </div>
                        
                        <h3 className="text-xs font-bold text-foreground mb-4 relative z-10">{course.title}</h3>
                        
                        <div className="mt-auto flex items-center gap-1.5 text-amber text-[10px] font-mono uppercase tracking-widest relative z-10 opacity-60 group-hover:opacity-100">
                            Verify <ExternalLink className="w-3 h-3" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
