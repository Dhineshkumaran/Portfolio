"use client";
import { motion } from 'framer-motion';

export default function SkillsArchitecture() {
    const devStack = [
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express.js', category: 'Backend' },
        { name: 'Python', category: 'Language' },
        { name: 'Java', category: 'Language' },
        { name: 'React.js', category: 'Frontend' },
        { name: 'TailwindCSS', category: 'Frontend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'SQL', category: 'Language' }
    ];

    const toolsInfra = [
        { name: 'Docker', category: 'Infrastructure' },
        { name: 'AWS EC2', category: 'Cloud' },
        { name: 'Git', category: 'Version Control' },
        { name: 'Postman', category: 'API Testing' }
    ];

    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border/50 scroll-mt-32 relative" id="skills">
            {/* Background Blueprint Grid for this section */}
            <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--teal) 1px, transparent 1px), linear-gradient(to bottom, var(--teal) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            <h2 className="font-mono text-xl text-foreground mb-12 relative z-10 bg-background inline-block pr-4">
                <span className="text-teal">{'<'}</span> Dependency_Graph <span className="text-teal">{'>'}</span>
            </h2>

            <div className="relative z-10 flex flex-col md:flex-row gap-16 md:gap-8">
                
                {/* Cluster 1 */}
                <div className="flex-1 relative">
                    {/* SVG Connections */}
                    <svg className="absolute left-[9px] top-8 w-8 h-[calc(100%-2rem)] -z-10" overflow="visible">
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                        {devStack.map((_, i) => (
                            <path key={i} d={`M0,${i * 48 + 24} L20,${i * 48 + 24}`} fill="none" stroke="var(--border)" strokeWidth="1" />
                        ))}
                    </svg>

                    <div className="flex items-center gap-3 mb-6 bg-background inline-flex pr-4">
                        <div className="w-5 h-5 rounded border border-teal/50 flex items-center justify-center bg-teal/10">
                            <div className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
                        </div>
                        <h3 className="font-mono text-sm text-teal uppercase tracking-widest">Cluster_A: Dev_Stack</h3>
                    </div>
                    
                    <div className="flex flex-col gap-3 pl-8">
                        {devStack.map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-between p-2.5 border border-border rounded bg-cardBg/80 backdrop-blur-sm hover:border-teal/50 transition-colors group relative"
                            >
                                <span className="absolute -left-8 w-2 h-2 rounded-full bg-border group-hover:bg-teal transition-colors" />
                                <span className="font-mono text-foreground text-sm">{skill.name}</span>
                                <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">[{skill.category}]</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Cluster 2 */}
                <div className="flex-1 relative mt-12 md:mt-32">
                    {/* SVG Connections */}
                    <svg className="absolute left-[9px] top-8 w-8 h-[calc(100%-2rem)] -z-10" overflow="visible">
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                        {toolsInfra.map((_, i) => (
                            <path key={i} d={`M0,${i * 48 + 24} L20,${i * 48 + 24}`} fill="none" stroke="var(--border)" strokeWidth="1" />
                        ))}
                    </svg>

                    <div className="flex items-center gap-3 mb-6 bg-background inline-flex pr-4">
                        <div className="w-5 h-5 rounded border border-amber/50 flex items-center justify-center bg-amber/10">
                            <div className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
                        </div>
                        <h3 className="font-mono text-sm text-amber uppercase tracking-widest">Cluster_B: Infra</h3>
                    </div>
                    
                    <div className="flex flex-col gap-3 pl-8">
                        {toolsInfra.map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-between p-2.5 border border-border rounded bg-cardBg/80 backdrop-blur-sm hover:border-amber/50 transition-colors group relative"
                            >
                                <span className="absolute -left-8 w-2 h-2 rounded-full bg-border group-hover:bg-amber transition-colors" />
                                <span className="font-mono text-foreground text-sm">{skill.name}</span>
                                <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">[{skill.category}]</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
