"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-12 h-12 rounded-full bg-cardBg border border-border flex items-center justify-center shadow-lg" />
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-12 h-12 rounded-full bg-cardBg border border-border flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.1)] text-foreground hover:text-amber hover:border-amber/50 transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle Theme"
        >
            {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
