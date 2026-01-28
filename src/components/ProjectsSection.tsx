import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/components/Screenshot 2025-09-15 152922.png';

const projects = [
  {
    title: 'NSBE UVA Chapter Website',
    description: 'Comprehensive website for 100+ NSBE members built with modern web technologies.',
    tags: ['Vite', 'TypeScript', 'React', 'Tailwind CSS'],
    image: NSBE_Website,
    demo: 'https://uvansbe.com',
    hasDemo: true,
    hasGithub: false,
    size: 'large'
  },
  {
    title: 'Olympet',
    description: 'AI-powered educational travel companion with dual-interface system.',
    tags: ['Figma', 'ProtoPie', 'User Research'],
    image: Olympet,
    demo: 'https://sites.google.com/view/olympet/home',
    hasDemo: true,
    hasGithub: false,
    size: 'small'
  },
  {
    title: 'Hidden Guide',
    description: 'React Native mobile app with Firebase integration.',
    tags: ['React Native', 'Firebase'],
    image: Hidden,
    github: 'https://github.com/Zebenayyy/HIDDEN_GUIDE3',
    hasDemo: false,
    hasGithub: true,
    size: 'small'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none">
            PORTFOLIO'↙
          </h2>
          <div className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
            2025
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Case Studies Label */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-6 flex flex-col justify-center items-center aspect-square">
            <div className="text-xs uppercase tracking-wider mb-2">Case</div>
            <div className="font-display font-bold text-xl">Studies</div>
          </div>

          {/* Project 1 - Large */}
          <Link to={`/projects/${projects[0].title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="col-span-1 md:col-span-2 row-span-2">
            <div className="bg-card rounded-3xl overflow-hidden h-full group cursor-pointer shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-full">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-background font-display font-bold text-lg">{projects[0].title}</h3>
                  <p className="text-background/80 text-sm mt-1">{projects[0].description}</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Design System Label */}
          <div className="bg-foreground text-background rounded-3xl p-6 flex flex-col justify-center items-center aspect-square">
            <div className="text-xs uppercase tracking-wider mb-2">Design</div>
            <div className="font-display font-bold text-xl">System</div>
          </div>

          {/* Project 2 */}
          <Link to={`/projects/${projects[1].title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="col-span-1">
            <div className="bg-card rounded-3xl overflow-hidden aspect-square group cursor-pointer shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-full">
                <img 
                  src={projects[1].image} 
                  alt={projects[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-background font-display font-bold text-sm">{projects[1].title}</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 3 */}
          <Link to={`/projects/${projects[2].title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl overflow-hidden aspect-square group cursor-pointer shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-full">
                <img 
                  src={projects[2].image} 
                  alt={projects[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-background font-display font-bold text-sm">{projects[2].title}</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Projects CTA */}
          <Link to="/projects" className="col-span-1">
            <div className="bg-accent rounded-3xl p-6 flex flex-col justify-between aspect-square hover:bg-accent/80 transition-colors cursor-pointer">
              <div className="font-display font-bold text-lg leading-tight">
                VIEW ALL
                <br />
                PROJECTS →
              </div>
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>

          {/* 2024 Portfolio card */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-purple-900 to-purple-600 text-white rounded-3xl p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold">2024</span>
              <span className="text-lg">↙</span>
            </div>
            <div>
              <div className="font-display font-bold text-xl mb-2">Portfolio</div>
              <p className="text-sm opacity-80">
                Curious about where my design journey began? My 2024 portfolio is a snapshot of my early explorations and breakthroughs in UI/UX design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
