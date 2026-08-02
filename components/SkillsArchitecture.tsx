export default function SkillsArchitecture() {
    const devStack = [
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express.js', category: 'Backend' },
        { name: 'Python', category: 'Language' },
        { name: 'Java', category: 'Language' },
        { name: 'React.js', category: 'Frontend' },
        { name: 'TailwindCSS', category: 'Frontend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'SQL', category: 'Language' }
    ];

    const toolsInfra = [
        { name: 'Docker', category: 'Infrastructure' },
        { name: 'AWS EC2', category: 'Cloud' },
        { name: 'Git', category: 'Version Control' },
        { name: 'Postman', category: 'API Testing' }
    ];

    return (
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border scroll-mt-32" id="skills">
            <h2 className="font-mono text-xl text-foreground mb-8">
                <span className="text-teal">#</span> system_architecture_&_skills
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Dev Stack */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-teal"></div>
                        <h3 className="font-mono text-sm text-foreground/70 uppercase tracking-wider">Development Stack</h3>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        {devStack.map(skill => (
                            <div key={skill.name} className="flex items-center justify-between p-3 border border-border rounded bg-cardBg hover:border-teal/30 transition-colors">
                                <span className="font-mono text-foreground text-sm">{skill.name}</span>
                                <span className="font-mono text-xs text-foreground/40">{skill.category}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & Infra */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-amber"></div>
                        <h3 className="font-mono text-sm text-foreground/70 uppercase tracking-wider">Tools & Infrastructure</h3>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        {toolsInfra.map(skill => (
                            <div key={skill.name} className="flex items-center justify-between p-3 border border-border rounded bg-cardBg hover:border-amber/30 transition-colors">
                                <span className="font-mono text-foreground text-sm">{skill.name}</span>
                                <span className="font-mono text-xs text-foreground/40">{skill.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
