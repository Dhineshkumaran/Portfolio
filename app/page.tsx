import AnimatedBackground from '../components/AnimatedBackground';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import SkillsArchitecture from '../components/SkillsArchitecture';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Stats from '../components/Stats';
import FadeIn from '../components/FadeIn';
import { projects } from '../lib/projects';

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <FadeIn>
          <Hero />
        </FadeIn>
        
        <FadeIn>
          <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border/50 scroll-mt-32 relative" id="work">
            {/* The main vertical data pipe for the section */}
            <div className="absolute top-0 bottom-0 left-[33px] md:left-[41px] w-px bg-border/50 z-0 hidden sm:block" />

            <h2 className="font-mono text-xl text-foreground mb-12 relative z-10 bg-background inline-block pr-4">
                <span className="text-teal">{'<'}</span> Professional_Work <span className="text-teal">{'>'}</span>
            </h2>
            
            <div className="space-y-8 mb-16">
                {projects.filter(p => p.category === 'professional').map((project, i) => (
                    <FadeIn key={project.name} delay={i * 0.1}>
                        <JobCard project={project} />
                    </FadeIn>
                ))}
            </div>

            <h2 className="font-mono text-xl text-foreground mb-12 relative z-10 bg-background inline-block pr-4">
                <span className="text-teal">{'<'}</span> Personal_Projects <span className="text-teal">{'>'}</span>
            </h2>
            
            <div className="space-y-8">
                {projects.filter(p => p.category === 'personal').map((project, i) => (
                    <FadeIn key={project.name} delay={i * 0.1}>
                        <JobCard project={project} />
                    </FadeIn>
                ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn><SkillsArchitecture /></FadeIn>
        <FadeIn><Education /></FadeIn>
        <FadeIn><Achievements /></FadeIn>
        <FadeIn><Certifications /></FadeIn>
        <FadeIn><Stats /></FadeIn>
      </div>
    </div>
  );
}
