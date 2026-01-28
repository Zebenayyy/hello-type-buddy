import React, { useState, useEffect } from 'react';
import TypingEffect from '@/components/TypingEffect';
import CharacterSection from '@/components/CharacterSection';
import { Button } from '@/components/ui/button';
import TopNav from '@/components/TopNav';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';

const Index = () => {
  const [showCharacter, setShowCharacter] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 300);
    const timer2 = setTimeout(() => setShowCharacter(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-character-yellow/5 via-background to-character-green/10 -z-10" />
      
      <TopNav />
      
      {/* Hero Section */}
      <section id="welcome" className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Welcome content */}
            <div className={`text-center lg:text-left ${showContent ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient">Hi!</span>
                </h1>
                <div className="text-2xl md:text-3xl text-foreground font-medium">
                  <TypingEffect 
                    text="Welcome to my portfolio" 
                    speed={80}
                    className="block"
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I'm a student currently attending the University of Virginia who loves bringing cute ideas to life {'<3'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects">
                  <Button size="lg" className="bg-gradient-to-r from-character-green to-character-yellow text-white font-semibold hover:shadow-lg transition-all duration-300">
                    View My Work
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
                    Get In Touch
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Character section */}
            <div className={`flex justify-center lg:justify-start ${showCharacter ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <CharacterSection className="lg:ml-4" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />
      
      <AboutSection />
      <ProjectsSection />
      
      {/* Second Marquee */}
      <MarqueeBanner items={['Web Design', 'App Design', 'Wireframe', 'Dashboard', 'Prototyping', 'User Research']} />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
