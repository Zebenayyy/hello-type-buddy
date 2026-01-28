import React, { useState, useEffect } from 'react';
import TypingEffect from '@/components/TypingEffect';
import CharacterSection from '@/components/CharacterSection';
import { Button } from '@/components/ui/button';
import TopNav from '@/components/TopNav';
import AboutSection from '@/components/AboutSection';
import DesignProcessSection from '@/components/DesignProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [showCharacter, setShowCharacter] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Stagger the animations
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
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-character-yellow/10 rounded-full blur-xl animate-bounce-gentle" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-character-green/10 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}} />
      
      <TopNav />
      <section id="welcome" className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
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
      
      <AboutSection />
      <DesignProcessSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Corner character indicator */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-border/50">
          <div className="w-8 h-8 bg-gradient-to-br from-character-yellow to-character-green rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
