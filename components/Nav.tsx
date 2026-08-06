"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode, useState } from 'react';

function MagneticLink({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
    
    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * 0.3); // Magnetic pull strength
        y.set(middleY * 0.3);
    };
    
    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: 0, y: 0 }}
            style={{ x: mouseXSpring, y: mouseYSpring }}
            className="cursor-pointer"
        >
            {children}
        </motion.div>
    );
}

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "#work", label: "/work" },
        { href: "#skills", label: "/skills" },
        { href: "#education", label: "/education" },
        { href: "#achievements", label: "/achievements" },
        { href: "#certifications", label: "/certifications" },
    ];

    return (
        <nav className="w-full py-4 md:py-6 border-b border-border fixed top-0 left-0 right-0 z-50 bg-navBg/95 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-6 flex flex-row items-center justify-between gap-4">
                <div className="font-mono text-sm md:text-base tracking-tight text-foreground whitespace-nowrap z-50">
                    <span className="text-teal">dhinesh</span><span className="opacity-50">@</span><span className="text-amber">data</span>
                    <span className="animate-pulse ml-1 opacity-70">_</span>
                </div>
                
                {/* Desktop Navigation - Pipeline Style */}
                <div className="hidden lg:flex flex-row items-center font-mono text-sm whitespace-nowrap relative">
                    {/* The main pipeline connecting the nodes */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0 hidden lg:block" />

                    {navLinks.map((link, index) => (
                        <div key={link.href} className="flex items-center relative z-10">
                            <MagneticLink>
                                <Link 
                                    href={link.href} 
                                    className="text-foreground/70 hover:text-teal transition-colors px-4 py-1.5 bg-navBg border border-border rounded-full mx-2 flex items-center gap-2 group"
                                >
                                    <span className="w-2 h-2 rounded-full bg-border group-hover:bg-teal transition-colors" />
                                    {link.label}
                                </Link>
                            </MagneticLink>
                            {/* Connecting pipeline dots */}
                            {index < navLinks.length - 1 && (
                                <motion.div 
                                    className="w-1.5 h-1.5 rounded-full bg-teal absolute -right-1 opacity-0 z-20"
                                    animate={{ x: [0, 20], opacity: [0, 1, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                />
                            )}
                        </div>
                    ))}
                    
                    <div className="w-8 h-px bg-border mx-2 z-0 relative"></div>
                    
                    <div className="flex items-center relative z-10 bg-navBg border border-border rounded-full px-2 py-1 mx-2">
                        <MagneticLink>
                            <a href="mailto:dhineshkumaran2004@outlook.com" aria-label="Email" className="text-foreground/70 hover:text-foreground transition-colors p-2 block">
                                <Mail size={18} />
                            </a>
                        </MagneticLink>
                        <MagneticLink>
                            <a href="https://github.com/Dhineshkumaran" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-teal transition-colors p-2 block">
                                <Github size={18} />
                            </a>
                        </MagneticLink>
                        <MagneticLink>
                            <a href="https://linkedin.com/in/dhinesh-kumaran-s" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-teal transition-colors p-2 block">
                                <Linkedin size={18} />
                            </a>
                        </MagneticLink>
                        <MagneticLink>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-amber transition-colors ml-1 px-2 py-1 block">
                                /resume
                            </a>
                        </MagneticLink>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-foreground/70 hover:text-foreground p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl p-6 font-mono text-sm"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map(link => (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-foreground/70 hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="w-full h-px bg-border my-2"></div>
                        
                        <div className="flex flex-col gap-4">
                            <a href="mailto:dhineshkumaran2004@outlook.com" className="flex items-center gap-3 text-foreground/70 hover:text-foreground">
                                <Mail size={16} /> Email Me
                            </a>
                            <a href="https://github.com/Dhineshkumaran" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-teal">
                                <Github size={16} /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/dhinesh-kumaran-s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-teal">
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-amber">
                                <span className="w-4 text-center">/</span> Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
