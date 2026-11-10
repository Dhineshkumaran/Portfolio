import { ArrowUpRight, Blocks, Workflow, Wrench } from 'lucide-react';

const services = [
    {
        icon: Blocks,
        title: 'Custom Web Applications',
        description: 'Responsive web apps designed around your product, customers, and day-to-day needs.'
    },
    {
        icon: Workflow,
        title: 'Business Workflow Systems',
        description: 'Internal tools that bring processes, records, and reporting into one place.'
    },
    {
        icon: Wrench,
        title: 'Web App Improvements',
        description: 'Feature development, integrations, and refinements for existing web applications.'
    }
];

export default function Services() {
    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border scroll-mt-32" id="services">
            <h2 className="font-mono text-xl text-foreground mb-3">
                <span className="text-teal">#</span> web_app_services
            </h2>
            <p className="text-foreground/60 text-sm mb-8 max-w-2xl">
                I build web applications that help businesses launch products and simplify their workflows.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
                {services.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="bg-cardBg border border-border p-5 rounded-xl hover:border-teal/50 transition-colors">
                        <Icon className="w-5 h-5 text-teal mb-4" />
                        <h3 className="font-mono text-sm text-foreground mb-2">{title}</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>

            <a
                href="mailto:dhineshkumaran2004@outlook.com?subject=Web%20app%20project%20inquiry"
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-teal hover:text-amber transition-colors"
            >
                Discuss a project <ArrowUpRight className="w-4 h-4" />
            </a>
        </section>
    );
}
