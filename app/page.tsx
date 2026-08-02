import AnimatedBackground from '../components/AnimatedBackground';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import SkillsArchitecture from '../components/SkillsArchitecture';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Stats from '../components/Stats';
import { projects } from '../lib/projects';

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Hero />
        
        <section className="py-16 max-w-4xl mx-auto px-6 border-t border-border scroll-mt-32" id="work">
          <h2 className="font-mono text-xl text-foreground mb-8">
              <span className="text-teal">#</span> professional_work
          </h2>
          
          <div className="space-y-4 mb-12">
              {projects.filter(p => p.category === 'professional').map((project) => (
                  <JobCard key={project.name} project={project} />
              ))}
          </div>

          <h2 className="font-mono text-xl text-foreground mb-8">
              <span className="text-teal">#</span> personal_projects
          </h2>
          
          <div className="space-y-4">
              {projects.filter(p => p.category === 'personal').map((project) => (
                  <JobCard key={project.name} project={project} />
              ))}
          </div>
        </section>

        <SkillsArchitecture />
        <Education />
        <Achievements />
        <Certifications />
        <Stats />
      </div>
    </div>
  );
}
