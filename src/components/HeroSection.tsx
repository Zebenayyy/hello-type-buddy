import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main hero content */}
        <div className="relative">
          {/* Profile image floating in center-right */}
          <div className="absolute right-1/4 top-0 transform translate-x-1/2 z-10">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src="/lovable-uploads/850f16ac-9ec7-4568-8131-0c5f622cba2a.png"
                  alt="Zebenai Melaku"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Name badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                👋 I'm Zebenai Melaku
              </div>
            </div>
          </div>

          {/* Large typography */}
          <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight">
            <span className="block">UI UX</span>
            <span className="block text-right md:pr-24">DESIGNER</span>
          </h1>
        </div>

        {/* Year and social */}
        <div className="flex items-center justify-between mt-12">
          <p className="text-muted-foreground text-sm">Year of 2025</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Zebenayyy" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/zebenai-melaku/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-16 text-center">
          <p className="font-display text-2xl md:text-3xl font-bold leading-relaxed">
            "GREAT DESIGNS{' '}
            <span className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-1 rounded-full text-sm font-medium mx-2">
              DESIGN
            </span>
            <br />
            <span className="inline-flex items-center gap-2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                ☺ REQUIRES
              </span>
            </span>{' '}
            GREAT EMPATHY" 👩🏽‍💻👩🏽‍🎨👩🏽‍🔬
          </p>
          
          {/* Portfolio badge */}
          <div className="mt-8 flex justify-center">
            <div className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium">
              PORTFOLIO 2025
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-background">
              View My Work
            </Button>
          </Link>
          <Link to="/#contact">
            <Button variant="outline" className="rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-background">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
