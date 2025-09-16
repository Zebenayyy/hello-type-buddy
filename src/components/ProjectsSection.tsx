import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/components/Screenshot 2025-09-15 152922.png';

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
    title: 'Hidden Guide: Location-Based App',
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
          {projects.map((project, index) => {
            const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
            <Link key={project.title} to={`/projects/${projectSlug}`}>
              <Card className="group bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
              >
              {/* Project preview area */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-character-green text-white' :
                    project.status === 'In Progress' ? 'bg-character-yellow text-white' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  {project.hasGithub && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.hasDemo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={project.hasGithub ? 'flex-1' : 'w-full'}>
                      <Button size="sm" className={`bg-primary hover:bg-primary/90 w-full`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Link
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
              </Card>
            </Link>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
          <Link to="/projects">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;