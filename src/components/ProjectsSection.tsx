import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/assets/hidden-guide-app.png';

const projects = [
  {
    title: 'NSBE UVA Chapter Website',
    description: 'Comprehensive website for 100+ NSBE members built with modern web technologies and responsive design.',
    tags: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS'],
    status: 'In Progress',
    image: NSBE_Website,
    demo: 'https://uvansbe.com',
    hasDemo: true,
    hasGithub: false
  },
  {
    title: 'Olympet: AI Educational Travel Buddy',
    description: 'AI-powered educational travel companion with dual-interface system for children and parents, featuring high-fidelity prototypes.',
    tags: ['Figma', 'ProtoPie', 'User Research', 'AI'],
    status: 'Completed',
    image: Olympet,
    demo: 'https://sites.google.com/view/olympet/home',
    hasDemo: true,
    hasGithub: false
  },
  {
    title: 'Hidden Guide: Location-Based Mobile App',
    description: 'React Native mobile app with Firebase integration for real-time data storage, authentication, and push notifications.',
    tags: ['React Native', 'Firebase', 'Real-time Data'],
    status: 'In Progress',
    image: Hidden,
    github: 'https://github.com/Zebenayyy/HIDDEN_GUIDE3',
    hasDemo: false,
    hasGithub: true
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-character-green/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-32">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors
          </p>
        </header>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const isEven = index % 2 === 0;
            
            return (
              <Link key={project.title} to={`/projects/${projectSlug}`}>
                <Card className={`group bg-card border-border/30 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer overflow-hidden`}>
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Image Section */}
                    <div className="md:w-1/2 h-64 md:h-80 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-card/80 hidden md:block`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                      
                      {/* Status badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg ${
                          project.status === 'Live' ? 'bg-green-500/90 text-white' :
                          project.status === 'In Progress' ? 'bg-amber-500/90 text-white' :
                          'bg-primary/90 text-primary-foreground'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-3">
                        {project.hasGithub && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Button variant="outline" className="h-11 px-6 border-border hover:border-primary/50 hover:bg-primary/5">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          </a>
                        )}
                        {project.hasDemo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Button className="h-11 px-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-lg">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Site
                            </Button>
                          </a>
                        )}
                        {!project.hasDemo && !project.hasGithub && (
                          <Button variant="outline" className="h-11 px-6 border-border hover:border-primary/50 hover:bg-primary/5">
                            View Case Study
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
          <Link to="/projects">
            <Button size="lg" className="bg-gradient-to-r from-character-green to-character-yellow text-white font-semibold hover:shadow-lg transition-all duration-300 px-8">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;