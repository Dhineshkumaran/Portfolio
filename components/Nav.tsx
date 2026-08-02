"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Nav() {

    return (
        <nav className="w-full py-6 border-b border-border fixed top-0 left-0 right-0 z-50 bg-navBg backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 flex flex-row items-center justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="font-mono text-sm tracking-tight text-foreground whitespace-nowrap">
                    <span className="text-teal">dhinesh</span><span className="opacity-50">@</span><span className="text-amber">data</span> <span className="opacity-50">— portfolio</span>
                    <span className="animate-pulse ml-1 opacity-70">_</span>
                </div>
                
                <div className="flex flex-row items-center gap-3 md:gap-5 font-mono text-xs md:text-sm whitespace-nowrap pr-4">
                    <Link href="#work" className="text-foreground/70 hover:text-foreground transition-colors">
                        /work
                    </Link>
                    <Link href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
                        /skills
                    </Link>
                    <Link href="#education" className="text-foreground/70 hover:text-foreground transition-colors">
                        /education
                    </Link>
                    <Link href="#achievements" className="text-foreground/70 hover:text-foreground transition-colors">
                        /achievements
                    </Link>
                    <Link href="#certifications" className="text-foreground/70 hover:text-foreground transition-colors">
                        /certifications
                    </Link>
                    
                    <div className="w-px h-4 bg-border mx-1"></div>
                    
                    <div className="flex items-center gap-4">
                        <a href="mailto:dhineshkumaran2004@outlook.com" aria-label="Email" className="text-foreground/70 hover:text-foreground transition-colors">
                            <Mail size={16} />
                        </a>
                        <a href="https://github.com/Dhineshkumaran" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-teal transition-colors">
                            <Github size={16} />
                        </a>
                        <a href="https://linkedin.com/in/dhineshkumaran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-teal transition-colors">
                            <Linkedin size={16} />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-amber transition-colors ml-1">
                            /resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
