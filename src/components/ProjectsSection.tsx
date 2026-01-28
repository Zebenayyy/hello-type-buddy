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
            <p className="text-muted-foreground mt-2">2023-2025</p>
          </div>
        </div>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          
          {/* First Project - Large with rounded corner cut */}
          <div className="col-span-12 md:col-span-7 row-span-2 rounded-[2rem] rounded-br-[4rem] overflow-hidden relative group cursor-pointer">
            <Link to={`/projects/${projects[0].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
              <img 
                src={projects[0].image} 
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-3 inline-block">
                  {projects[0].status}
                </span>
                <h3 className="text-white font-bold text-xl">{projects[0].title}</h3>
              </div>
            </Link>
          </div>

          {/* Second Project - Tall rectangle with top-left cut */}
          <div className="col-span-6 md:col-span-5 row-span-2 rounded-[2rem] rounded-tl-[4rem] overflow-hidden relative group cursor-pointer">
            <Link to={`/projects/${projects[1].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
              <img 
                src={projects[1].image} 
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2 inline-block">
                  {projects[1].status}
                </span>
                <h3 className="text-white font-bold text-lg">{projects[1].title}</h3>
              </div>
            </Link>
          </div>

          {/* Third Project - Wide with asymmetric corners */}
          <div className="col-span-6 md:col-span-5 row-span-1 rounded-[2rem] rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden relative group cursor-pointer">
            <Link to={`/projects/${projects[2].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
              <img 
                src={projects[2].image} 
                alt={projects[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2 inline-block">
                  {projects[2].status}
                </span>
                <h3 className="text-white font-bold">{projects[2].title}</h3>
              </div>
            </Link>
          </div>

          {/* View All Projects Card - Decorative with arrow */}
          <div className="col-span-12 md:col-span-7 row-span-1 rounded-[2rem] rounded-tl-[4rem] bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 p-6 flex items-center justify-between group cursor-pointer hover:from-primary/30 hover:to-primary/10 transition-all relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/40 rounded-full" />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full" />
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary/50 rounded-full" />
            
            <Link to="/projects" className="flex items-center justify-between w-full z-10">
              <div>
                <span className="font-bold text-xl text-foreground">PROJECTS</span>
                <p className="text-sm text-muted-foreground">View all my work</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;