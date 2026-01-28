import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/assets/hidden-guide-app.png';
import Cura from '@/components/Screenshot 2025-09-15 153032.png';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects = [
    {
      title: "NSBE UVA Chapter Website",
      description: "Comprehensive website development for 100+ NSBE members using modern web technologies and responsive design",
      tech: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      image: NSBE_Website,
      demo: "https://uvansbe.com",
      hasDemo: true,
      hasGithub: false
    },
    {
      title: "Olympet: AI Educational Travel Buddy",
      description: "AI-powered educational travel companion with dual-interface system for children and parents, featuring high-fidelity prototypes",
      tech: ["Figma", "ProtoPie", "User Research", "AI"],
      image: Olympet,
      demo: "https://sites.google.com/view/olympet/home",
      hasDemo: true,
      hasGithub: false
    },
    {
      title: "Hidden Guide: Location-Based Mobile App",
      description: "React Native mobile application with Firebase integration for real-time data storage, authentication, and push notifications",
      tech: ["React Native", "Firebase", "Real-time Data", "Authentication"],
      image: Hidden,
      github: "https://github.com/Zebenayyy/HIDDEN_GUIDE3",
      hasDemo: false,
      hasGithub: true
    },
    {
      title: "Cura: AI Image Processing Platform",
      description: "Web application for image processing and AI model training with custom LLM using 1000+ image dataset",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenCV", "Nyckel"],
      image: Cura,
      github: "https://github.com/Zebenayyy/Cura",
      hasDemo: false,
      hasGithub: true
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-character-yellow/5 via-background to-character-green/10" />
      
      <div className="relative z-10 min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work and the technologies I love to use
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => {
              const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <Link key={index} to={`/projects/${projectSlug}`}>
                  <Card className="animate-fade-in hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full" 
                        style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl font-bold leading-tight">{project.title}</CardTitle>
                        <span className="px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 bg-primary/10 text-primary">
                          {project.tech.includes('Figma') ? 'UX Design' : 'Development'}
                        </span>
                      </div>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} 
                                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {project.hasGithub && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
                              <Button variant="outline" size="sm" className="w-full">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </a>
                          )}
                          {project.hasDemo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={project.hasGithub ? "flex-1" : "w-full"} onClick={(e) => e.stopPropagation()}>
                              <Button size="sm" className="w-full">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Site
                              </Button>
                            </a>
                          )}
                          {!project.hasDemo && !project.hasGithub && (
                            <Button variant="outline" size="sm" className="w-full">
                              View Case Study
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              <CardHeader>
                <CardTitle className="text-2xl">Interested in Working Together?</CardTitle>
                <CardDescription>
                  I'm always open to discussing new opportunities and exciting projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-character-green to-character-yellow text-white font-semibold hover:shadow-lg transition-all duration-300">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
