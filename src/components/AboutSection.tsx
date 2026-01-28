import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large profile image */}
            <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl overflow-hidden aspect-[3/4]">
              <img 
                src="/lovable-uploads/850f16ac-9ec7-4568-8131-0c5f622cba2a.png" 
                alt="Zebenai Melaku"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </div>
            
            {/* Name card */}
            <div className="bg-card rounded-3xl p-6 flex flex-col justify-between aspect-square shadow-lg">
              <div className="text-muted-foreground text-sm">I'm,</div>
              <div>
                <div className="font-display font-extrabold text-2xl">Zebenai</div>
                <div className="font-display font-extrabold text-2xl">Melaku</div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs">🎨</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xs">💻</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Design Journey card */}
            <div className="bg-foreground text-background rounded-3xl p-6 flex flex-col justify-end aspect-square">
              <div className="text-xs uppercase tracking-wider mb-2 opacity-60">My</div>
              <div className="font-display font-bold text-xl">DESIGN<br/>JOURNEY</div>
            </div>
          </div>

          {/* Right side - About text */}
          <div className="lg:pl-8">
            <h2 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none mb-8">
              ABOUT'
              <br />
              ME↗ ↙
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm Zebenai Melaku, a passionate UI/UX designer with a background in Computer Engineering. I thrive on creating intuitive, visually compelling, and user-friendly digital experiences.
              </p>
              <p className="leading-relaxed">
                With hands-on experience in wireframing, prototyping, and user research, I design with both creativity and functionality in mind. From mobile apps to websites, my work focuses on enhancing usability while maintaining aesthetic appeal.
              </p>
              <p className="leading-relaxed">
                I believe that great design is not just about how it looks but how it feels and functions. Let's create something impactful and engaging together!
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/about">
                <Button variant="outline" className="rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Read More About Me
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
