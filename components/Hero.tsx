"use client";
import PipelineDiagram from './PipelineDiagram';
import { projects } from '../lib/projects';

export default function Hero() {
    const liveCount = projects.filter(p => p.status === 'passed').length;
    const progressCount = projects.filter(p => p.status === 'in-progress').length;

    return (
        <section className="py-12 md:py-20 max-w-4xl mx-auto px-6">
            <div className="space-y-6">
                <div className="font-mono text-sm border border-border inline-flex flex-wrap items-center rounded-sm bg-cardBg">
                    <span className="px-3 py-1.5 border-r border-border text-slateBlue">status</span>
                    <span className="px-3 py-1.5 text-foreground">building · shipping weekly</span>
                    <span className="px-3 py-1.5 border-l border-border text-slateBlue">systems: {liveCount} live, {progressCount} in progress</span>
                </div>
                
                {/* Schematic Dashboard Card */}
                <div className="relative p-8 border border-border bg-cardBg/50 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
                    {/* Decorative schematic corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-teal/50" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-teal/50" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-teal/50" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-teal/50" />
                    
                    {/* Fake Live Logging Header */}
                    <div className="flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest text-teal/70 border-b border-border/50 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                        <span>System_Ready // Identity_Loaded</span>
                    </div>

                    <div className="text-3xl md:text-5xl font-normal leading-tight text-foreground max-w-3xl relative z-10">
                        <div className="text-teal mb-2 font-mono text-xl md:text-2xl flex items-center gap-3">
                            <span className="opacity-50 text-sm">const</span> name = "Dhinesh kumaran";
                        </div>
                        <div className="mt-4">
                            <h1 className="text-2xl md:text-4xl text-foreground/90">
                                I build <span className="text-teal border-b border-teal/30">full-stack platforms</span> and <span className="text-amber border-b border-amber/30">scalable data pipelines</span>.
                            </h1>
                        </div>
                    </div>
                </div>
                
                <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed pt-2">
                    Software Engineer with a strong interest in Data Engineering. While my foundation is in full-stack development, I am actively exploring and learning about data pipelines, architectures, and large-scale data processing.
                </p>

                <PipelineDiagram />
            </div>
        </section>
    );
}
