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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Link key={project.title} to={`/projects/${projectSlug}`}>
                <Card className="group bg-card border-border/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full overflow-hidden">
                  {/* Project image */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Status badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === 'Live' ? 'bg-green-500/90 text-white' :
                        project.status === 'In Progress' ? 'bg-amber-500/90 text-white' :
                        'bg-primary/90 text-primary-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 pt-2">
                      {project.hasGithub && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
                          <Button size="sm" variant="outline" className="w-full">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.hasDemo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={project.hasGithub ? 'flex-1' : 'w-full'} onClick={(e) => e.stopPropagation()}>
                          <Button size="sm" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Site
                          </Button>
                        </a>
                      )}
                      {!project.hasDemo && !project.hasGithub && (
                        <Button size="sm" variant="outline" className="w-full">
                          View Details
                        </Button>
                      )}
                    </div>
                  </CardContent>
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