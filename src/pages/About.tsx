import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, FileText, Briefcase, GraduationCap, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Resume from "@/components/Melaku_Zebenai_Resume.pdf";
import ProtoPieLogo from "@/assets/protopie-logo.png";
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';
import aboutPhoto1 from '@/assets/about-photo-1.jpg';
import aboutPhoto2 from '@/assets/about-photo-2.jpg';
import aboutPhoto3 from '@/assets/about-photo-3.jpg';

const About = () => {
  const skills = {
    frontend: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    ],
    design: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'ProtoPie', icon: ProtoPieLogo },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  };

  const experience = [
    {
      title: 'UI/UX Product Design Intern',
      company: 'Hardshell',
      period: 'Present',
      description: 'Designed and prototyped enterprise AI security platform UI in Figma, conducting user research and usability testing to create intuitive data visualization dashboards.',
      icon: Briefcase,
    },
    {
      title: 'Research Assistant',
      company: 'Ultimate User Interface Lab',
      period: 'Present',
      description: 'Working on the PadGlider project, focusing on human-computer interaction research and user interface design.',
      icon: GraduationCap,
    },
    {
      title: 'Teaching Assistant',
      company: 'Human-Computer Interaction Course',
      period: 'Present',
      description: 'Supporting students in learning HCI principles and helping with coursework and projects.',
      icon: GraduationCap,
    },
    {
      title: 'Programs Chair',
      company: 'NSBE',
      period: 'Present',
      description: 'Leading program development and coordinating events for the National Society of Black Engineers chapter.',
      icon: Users,
    },
  ];

  const photos = [
    { src: "/lovable-uploads/850f16ac-9ec7-4568-8131-0c5f622cba2a.png", alt: "Zebenai Melaku headshot" },
    { src: aboutPhoto1, alt: "Friends at dinner" },
    { src: aboutPhoto2, alt: "NSBE conference group" },
    { src: aboutPhoto3, alt: "Chicago Bean photo" },
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          {/* Profile Image Slideshow */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}
                {/* Arrow Navigation */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhotoIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`View photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h1>
              <p className="text-lg text-muted-foreground">
                Get to know the person behind the code
              </p>
            </div>

            {/* Who I Am */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there! My name is Zebenai Melaku and I'm currently a third-year student at the University of Virginia majoring in Computer Engineering with a passion for human-computer interactions.
                </p>
                <p>
                  I'm a Research Assistant at the Ultimate User Interface Lab working on the PadGlider project and a Teaching Assistant for the Human-Computer Interaction course. I also serve as the Programs Chair of NSBE.
                </p>
                <p>
                  I love being creative and hopefully that shows throughout this website!
                </p>
                <p>
                  When I'm not coding or researching, you'll probably find me crocheting, drawing, traveling or volunteering for a random event and trying to be as involved as I can in my community :)
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Skills & Technologies</h2>
              
              <div className="space-y-6">
                {[
                  { label: 'Frontend', items: skills.frontend },
                  { label: 'Backend', items: skills.backend },
                  { label: 'Design', items: skills.design },
                  { label: 'Tools', items: skills.tools },
                ].map((category) => (
                  <div key={category.label}>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">{category.label}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <div 
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors"
                        >
                          <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="group p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-2">{exp.company} · {exp.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <FileText className="w-5 h-5 mr-2" />
                View Full Resume
              </Button>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to work together?</p>
          <Link to="/#contact">
            <Button size="lg" className="bg-gradient-to-r from-character-green to-character-yellow text-white font-semibold hover:shadow-lg transition-all">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
