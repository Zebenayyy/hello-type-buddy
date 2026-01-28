import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNav from '@/components/TopNav';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/components/Screenshot 2025-09-15 152922.png';
import Cura from '@/components/Screenshot 2025-09-15 153032.png';

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
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none">
              PORTFOLIO'↙
            </h1>
            <div className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
              2025
            </div>
          </div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => {
              const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <Link 
                  key={index} 
                  to={`/projects/${projectSlug}`}
                  className={`group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <div className={`bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full ${index === 0 ? 'aspect-[16/10]' : 'aspect-square'}`}>
                    <div className="relative h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-background font-display font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-background/80 text-sm mb-4 line-clamp-2">{project.description}</p>
                        
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-background/20 text-background text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 bg-background/20 text-background text-xs rounded-full">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex gap-2">
                          {project.hasGithub && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="secondary" size="sm" className="w-full rounded-full">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </a>
                          )}
                          {project.hasDemo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={project.hasGithub ? "flex-1" : "w-full"}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="secondary" size="sm" className="w-full rounded-full">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
            </p>
            <Link to="/#contact">
              <Button className="rounded-full bg-primary hover:bg-primary/90 px-8">
                Get In Touch
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
