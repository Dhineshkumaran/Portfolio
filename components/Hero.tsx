"use client";
import PipelineDiagram from './PipelineDiagram';
import Typewriter from 'typewriter-effect';
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
                
                <div className="text-3xl md:text-5xl font-normal leading-tight text-foreground max-w-3xl">
                    <div className="text-teal mb-2 font-mono text-2xl md:text-3xl">
                        Hi, I am Dhinesh Kumaran.
                    </div>
                    <div className="min-h-[120px] md:min-h-[150px]">
                        <h1>
                            <Typewriter
                                options={{
                                    strings: [
                                        "I build full-stack platforms and web applications.",
                                        "I build scalable data pipelines and architectures.",
                                        "Here's what I've shipped so far."
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </h1>
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
