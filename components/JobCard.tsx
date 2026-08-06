"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../lib/projects';

export default function JobCard({ project }: { project: Project }) {
    const [expanded, setExpanded] = useState(false);

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'passed': return 'text-teal border-teal/30 bg-teal/10';
            case 'in-progress': return 'text-amber border-amber/30 bg-amber/10';
            case 'learning': 
            default: return 'text-slateBlue border-slateBlue/30 bg-slateBlue/10';
        }
    };

    return (
        <div className="relative pl-6 md:pl-10 group">
            {/* The vertical main branch line */}
            <div className="absolute top-0 bottom-0 left-[11px] md:left-[19px] w-px bg-border group-hover:bg-teal/50 transition-colors z-0" />
            
            {/* The node connection point */}
            <div className="absolute top-10 left-[9px] md:left-[17px] w-1.5 h-1.5 rounded-full bg-border group-hover:bg-teal group-hover:shadow-[0_0_10px_rgba(93,202,165,0.8)] transition-all z-10" />

            <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="border border-border rounded-lg overflow-hidden bg-cardBg hover:border-teal/30 transition-colors shadow-sm hover:shadow-xl hover:shadow-[#5DCAA5]/5 relative z-10"
            >
                {/* Schematic Top Bar */}
                <div className="h-2 w-full bg-border/50 border-b border-border flex items-center px-2 gap-1">
                    <div className="w-8 h-px bg-teal/50" />
                    <div className="w-2 h-px bg-amber/50" />
                </div>

                {/* Card Header (Always visible) */}
                <div 
                    className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 text-[10px] font-mono border rounded-sm uppercase tracking-widest ${getStatusColor(project.status)}`}>
                                [ {project.status} ]
                            </span>
                            <h3 className="font-mono text-lg text-foreground">{project.name}</h3>
                        </div>
                        <p className="text-foreground/80 text-sm">{project.summary}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm font-mono text-foreground/50 shrink-0">
                        <div className="flex gap-2">
                            {project.stack.slice(0, 3).map(tech => (
                                <span key={tech}>{tech}</span>
                            ))}
                            {project.stack.length > 3 && <span>+{project.stack.length - 3}</span>}
                        </div>
                        <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                        >
                            ▼
                        </motion.span>
                    </div>
                </div>

                {/* Expanded Details */}
                {expanded && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-border bg-cardHover text-sm overflow-hidden relative"
                    >
                        {/* Schematic animated wire for expanded content */}
                        <svg className="absolute top-0 left-5 w-px h-full" overflow="visible">
                            <motion.line 
                                x1="0" y1="0" x2="0" y2="100%" 
                                stroke="#5DCAA5" 
                                strokeWidth="1" 
                                strokeDasharray="4 4"
                                initial={{ strokeDashoffset: 20 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>

                        <div className="p-5 pl-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-mono text-teal mb-2 uppercase tracking-wider text-[10px] flex items-center gap-2">
                                        <span className="w-2 h-px bg-teal" /> The Problem
                                    </h4>
                                    <p className="text-foreground/90 leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="font-mono text-amber mb-2 uppercase tracking-wider text-[10px] flex items-center gap-2">
                                        <span className="w-2 h-px bg-amber" /> The Outcome
                                    </h4>
                                    <p className="text-foreground/90 leading-relaxed">{project.outcome}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                <motion.div 
                                    className="flex flex-wrap gap-2"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.05 } }
                                    }}
                                >
                                    {project.stack.map(tech => (
                                        <motion.span 
                                            key={tech} 
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8 },
                                                visible: { opacity: 1, scale: 1 }
                                            }}
                                            className="text-xs font-mono px-2 py-1 border border-border bg-background rounded text-foreground/70"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                                
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="font-mono text-sm text-teal hover:text-amber transition-colors flex items-center gap-1"
                                    >
                                        [ execute ]
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
