import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory, secure payments, and responsive design. Built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'Live'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop functionality, team chat, and progress tracking.',
    tags: ['TypeScript', 'Socket.io', 'PostgreSQL'],
    status: 'In Progress'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with interactive maps, forecasts, and location-based alerts. Clean UI with smooth animations.',
    tags: ['React', 'Weather API', 'Tailwind'],
    status: 'Completed'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-character-blue-dark/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-32">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project preview area */}
              <div className="h-48 bg-gradient-to-br from-character-blue/20 to-character-blue-dark/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-character-blue-dark text-white' :
                    project.status === 'In Progress' ? 'bg-character-blue text-white' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-primary/30">
                  📱
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
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;