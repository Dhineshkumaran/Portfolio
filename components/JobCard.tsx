"use client";

import { useState } from 'react';
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
        <div className="border border-border rounded-lg overflow-hidden bg-cardBg hover:border-borderHover transition-colors">
            {/* Card Header (Always visible) */}
            <div 
                className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 text-xs font-mono border rounded-sm uppercase tracking-wider ${getStatusColor(project.status)}`}>
                            {project.status}
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
                    <span>{expanded ? '[-]' : '[+]'}</span>
                </div>
            </div>

            {/* Expanded Details */}
            {expanded && (
                <div className="p-5 border-t border-border bg-cardHover space-y-6 text-sm">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-mono text-foreground/50 mb-2 uppercase tracking-wider text-xs">The Problem</h4>
                            <p className="text-foreground/90 leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                            <h4 className="font-mono text-foreground/50 mb-2 uppercase tracking-wider text-xs">The Outcome</h4>
                            <p className="text-foreground/90 leading-relaxed">{project.outcome}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                                <span key={tech} className="text-xs font-mono px-2 py-1 border border-border rounded text-foreground/70">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {project.link && (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="font-mono text-sm text-amber hover:underline"
                            >
                                view_source &rarr;
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
