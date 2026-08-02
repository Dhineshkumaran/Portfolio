"use client";

import { motion } from 'framer-motion';
import { EDUCATION } from '../lib/data';

export default function Education() {
    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border scroll-mt-32" id="education">
            <h2 className="font-mono text-xl text-foreground mb-8">
                <span className="text-teal">#</span> academic_history
            </h2>
            
            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
                {EDUCATION.map((edu, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-12"
                    >
                        <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-background border-2 border-teal rounded-full shadow-[0_0_10px_rgba(93,202,165,0.5)] z-10" />
                        
                        <div className="bg-cardBg p-6 rounded-xl border border-border hover:border-teal/30 hover:bg-teal/5 transition-colors group">
                            <span className="text-amber font-mono text-xs mb-2 block tracking-wider">{edu.years}</span>
                            <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                            <p className="text-foreground/60 text-sm mb-3">{edu.school}</p>
                            <div className="inline-block px-2.5 py-1 bg-cardBg text-foreground/80 text-xs font-mono rounded border border-border">
                                Grade: <span className="text-teal font-bold">{edu.grade}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
