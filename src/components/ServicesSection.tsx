import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
              EXPLORE MY{' '}
              <span className="text-primary">SERVICES</span>,
              <br />
              WHERE USER NEEDS
              <br />
              SHAPE EVERY DESIGN
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/projects">
                <Button variant="outline" className="rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-background">
                  View Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Grid of images/cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Users typography card */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-6 flex flex-col justify-between aspect-square">
              <div className="font-display font-extrabold text-2xl leading-tight">
                USERS<br />
                UX↗ ↙<br />
                USERS<br />
                UX↗ ↙<br />
                USERS
              </div>
            </div>
            
            {/* Image placeholder */}
            <div className="bg-lavender-dark rounded-3xl overflow-hidden aspect-square">
              <img 
                src="/lovable-uploads/850f16ac-9ec7-4568-8131-0c5f622cba2a.png" 
                alt="Design work"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Design Journey card */}
            <div className="bg-foreground text-background rounded-3xl p-6 flex flex-col justify-end aspect-square">
              <div className="text-xs uppercase tracking-wider mb-2 opacity-60">Design</div>
              <div className="font-display font-bold text-xl">JOURNEY</div>
            </div>
            
            {/* New Reality card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-3xl p-6 flex flex-col justify-end aspect-square">
              <div className="font-display font-bold text-xl">
                New<br />Reality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
