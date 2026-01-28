import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
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
    description: 'AI-powered educational travel companion with dual-interface system for children and parents.',
    tags: ['Figma', 'ProtoPie', 'User Research', 'AI'],
    status: 'Completed',
    image: Olympet,
    demo: 'https://sites.google.com/view/olympet/home',
    hasDemo: true,
    hasGithub: false
  },
  {
    title: 'Hidden Guide: Location-Based Mobile App',
    description: 'React Native mobile app with Firebase integration for real-time data.',
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
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              PORTFOLIO<span className="text-gradient">✦</span>
            </h2>
            <p className="text-muted-foreground mt-2">2024-2025</p>
          </div>
        </div>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px] md:auto-rows-[140px]">
          
          {/* Category Badge */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-primary/10 border border-primary/20 p-4 flex flex-col justify-center">
            <span className="text-xs text-muted-foreground">CASE</span>
            <span className="font-bold text-foreground">Studies</span>
          </div>

          {/* First Project - Large */}
          <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
            <Link to={`/projects/${projects[0].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
              <img 
                src={projects[0].image} 
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2 inline-block">
                  {projects[0].status}
                </span>
                <h3 className="text-white font-bold text-lg">{projects[0].title}</h3>
              </div>
            </Link>
          </div>

          {/* Portfolio Year Card */}
          <div className="col-span-1 row-span-2 rounded-2xl bg-gradient-to-br from-character-green to-character-yellow p-5 flex flex-col justify-between text-white">
            <div>
              <span className="text-2xl font-bold">2024 ✦</span>
              <p className="text-sm opacity-90 mt-1">Portfolio</p>
            </div>
            <p className="text-xs opacity-80 leading-relaxed">
              A curated collection of my design journey and development projects.
            </p>
          </div>

          {/* Design System Badge */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-card border border-border/50 p-4 flex flex-col justify-center">
            <span className="text-xs text-muted-foreground">DESIGN</span>
            <span className="font-bold text-foreground">System</span>
          </div>

          {/* Second Project */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group cursor-pointer">
            <Link to={`/projects/${projects[1].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
              <img 
                src={projects[1].image} 
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-2 left-2">
                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {projects[1].status}
                </span>
              </div>
            </Link>
          </div>

          {/* Third Project */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group cursor-pointer">
            <Link to={`/projects/${projects[2].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
              <img 
                src={projects[2].image} 
                alt={projects[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-2 left-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full">
                  {projects[2].status}
                </span>
              </div>
            </Link>
          </div>

          {/* View All Projects Card */}
          <div className="col-span-2 row-span-1 rounded-2xl bg-card border border-border/50 p-4 flex items-center justify-between group cursor-pointer hover:bg-secondary/50 transition-colors">
            <Link to="/projects" className="flex items-center justify-between w-full">
              <span className="font-bold text-foreground">PROJECTS</span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;