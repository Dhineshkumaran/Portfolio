"use client";

import { useEffect } from 'react';

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>;
    }
}

export default function AnalyticsEvents() {
    useEffect(() => {
        const trackLinkClick = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const link = target.closest('a[href]');
            if (!(link instanceof HTMLAnchorElement)) return;

            const url = new URL(link.href, window.location.href);
            const linkText = link.textContent?.trim().replace(/\s+/g, ' ') || link.getAttribute('aria-label') || '';
            const eventDetails = {
                link_url: url.href,
                link_text: linkText,
                link_domain: url.hostname,
                link_type: url.origin === window.location.origin ? 'internal' : 'external',
            };

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'link_click', ...eventDetails });

            if (url.pathname.toLowerCase().endsWith('/resume.pdf')) {
                window.dataLayer.push({ event: 'resume_open', ...eventDetails });
            }
        };

        document.addEventListener('click', trackLinkClick);
        return () => document.removeEventListener('click', trackLinkClick);
    }, []);

    return null;
}
