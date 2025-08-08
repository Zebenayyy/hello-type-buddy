import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from '@/components/TypingEffect';
import CharacterSection from '@/components/CharacterSection';
import { Button } from '@/components/ui/button';

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
      <div className="absolute inset-0 bg-gradient-to-br from-character-yellow/5 via-background to-character-green/10" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-character-yellow/10 rounded-full blur-xl animate-bounce-gentle" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-character-green/10 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}} />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
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
                I'm a creative developer who loves bringing ideas to life through code. 
                Let's build something amazing together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projects">
                  <Button size="lg" className="bg-gradient-to-r from-character-green to-character-yellow text-white font-semibold hover:shadow-lg transition-all duration-300">
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Character section */}
            <div className={`flex justify-center lg:justify-start ${showCharacter ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <CharacterSection className="lg:ml-4" />
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Corner character indicator */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-border/50">
          <div className="w-8 h-8 bg-gradient-to-br from-character-yellow to-character-green rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-character-primary to-character-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-character-primary to-character-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm a creative developer with a passion for bringing ideas to life through code. 
                I love the intersection of design and technology, where beautiful interfaces meet powerful functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in modern web technologies, I specialize in creating responsive, 
                user-friendly applications that make a real impact. I believe in writing clean, maintainable code 
                and always staying curious about new technologies.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Python'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-character-primary/20 to-character-accent/20 rounded-3xl flex items-center justify-center">
                <div className="w-64 h-64 bg-card rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
