"use client";

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Stats() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isLight = mounted && theme === 'light';
    const leetcodeTheme = isLight ? 'light' : 'dark';
    
    // GitHub Streak Stats customization
    const ghBg = isLight ? 'FDFCF8' : '0E0F0D';
    const ghBorder = isLight ? '1A1A1A1A' : 'E8E6DD10';
    const ghRing = isLight ? '3AA983' : '5DCAA5';
    const ghFire = isLight ? 'D98516' : 'EF9F27';
    const ghText = isLight ? '1A1A1A' : 'E8E6DD';

    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border" id="stats">
            <h2 className="font-mono text-xl text-foreground mb-8">
                <span className="text-teal">#</span> system_metrics
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-cardBg border border-border rounded-xl hover:border-teal/30 transition-colors shadow-[0_0_15px_rgba(93,202,165,0.05)]"
                >
                    {mounted && <img src={`https://leetcard.jacoblin.cool/22CSR048_Dhinesh?ext=heatmap&theme=${leetcodeTheme}`} className="w-full rounded" alt="LeetCode" />}
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-6 bg-cardBg border border-border rounded-xl flex items-center justify-center hover:border-amber/30 transition-colors shadow-[0_0_15px_rgba(239,159,39,0.05)]"
                >
                    {mounted && <img src={`https://github-readme-streak-stats.herokuapp.com/?user=Dhineshkumaran&theme=${leetcodeTheme}&background=${ghBg}&border=${ghBorder}&ring=${ghRing}&fire=${ghFire}&currStreakNum=${ghText}&sideNums=${ghText}&currStreakLabel=${ghText}&sideLabels=${ghText}&dates=${ghText}`} className="w-full rounded" alt="GitHub Stats" />}
                </motion.div>
            </div>
        </section>
    );
}
