export type Project = {
    name: string;
    status: 'passed' | 'in-progress' | 'learning';
    summary: string;
    stack: string[];
    problem: string;
    outcome: string;
    category: 'professional' | 'personal';
    link?: string;
};

export const projects: Project[] = [
    {
        name: 'homebridge-health',
        status: 'passed',
        summary: 'Designed and developed a high-performance, mobile-first marketing website for a healthcare startup focused on delivering hospital-quality cancer care at home.',
        stack: ['Next.js', 'Framer Motion', 'Google Analytics', 'Vibe Coding'],
        problem: 'A healthcare startup needed a platform to communicate trust, simplify complex patient journeys, and generate inquiries securely.',
        outcome: 'Integrated lead generation, WhatsApp-based consultations, and achieved a Lighthouse score of 98 with strong SEO and WCAG accessibility.',
        category: 'professional',
        link: 'https://homebridgetohealth.com'
    },
    {
        name: 'digital-trial-card',
        status: 'passed',
        summary: 'A web-based Trial Card Management system for manufacturing quality and trial processes at Sakthi Auto Component Limited.',
        stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MSSQL'],
        problem: 'Managing trial cards across departments relied on manual logging for visual/dimensional inspections and slow workflows.',
        outcome: 'Built an integrated workflow system with department-driven workflows, Save as Draft, PDF report generation, and audit logging.',
        category: 'professional',
    },
    {
        name: 'vehicle-register-automation',
        status: 'passed',
        summary: 'A full-stack automation system designed for real-time tracking of vehicle inward and outward movements and automated reporting.',
        stack: ['React', 'Material UI', 'Node.js', 'Express', 'MSSQL'],
        problem: 'Vehicle tracking lacked real-time visibility, automated reporting, and centralized master data management for transporters.',
        outcome: 'Deployed a live tracking dashboard with role-based access control (Admin, Security, Stores, Accounts) and customizable PDF/Excel reports.',
        category: 'professional',
    },
    {
        name: 'harvesthub',
        status: 'in-progress',
        summary: 'A marketplace platform enabling farmers to sell their products directly to consumers, improving transparency and pricing.',
        stack: ['Node.js', 'MongoDB', 'API'],
        problem: 'Farmers lacked a direct marketplace platform to sell products to consumers transparently.',
        outcome: 'Developing scalable backend services using Node.js and managing dynamic datasets with MongoDB.',
        category: 'personal',
        link: 'https://github.com/Dhineshkumaran/HarvestHub'
    },
    {
        name: 'food-ordering-system',
        status: 'passed',
        summary: 'Designed a serverless food ordering system for self-service hotels, featuring secure transactions via Razorpay API.',
        stack: ['Node.js', 'MongoDB', 'Bootstrap', 'AWS EC2', 'Razorpay API'],
        problem: 'Traditional monolithic hotel ordering systems are hard to scale and lack secure transactions.',
        outcome: 'Deployed scalable backend on AWS EC2 and built a responsive UI using Bootstrap.',
        category: 'personal',
        link: 'https://github.com/Dhineshkumaran/Food-ordering'
    },
    {
        name: 'student-activity-point-calculator',
        status: 'passed',
        summary: 'Created an automated tool using Flask and OCR to digitize and evaluate student activity points.',
        stack: ['Python', 'Flask', 'OCR', 'JWT', 'MongoDB'],
        problem: 'Calculating activity points from physical certificates was manual and error-prone for faculty.',
        outcome: 'Implemented JWT for secure login and MongoDB for flexible data storage and retrieval.',
        category: 'personal',
        link: 'https://github.com/Dhineshkumaran/SAP'
    }
];
