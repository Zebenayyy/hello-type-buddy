import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import beachSunset from '@/assets/beach-sunset.jpg';
import nsbeGroup from '@/assets/nsbe-group.png';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 relative">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px]">
          
          {/* Profile Image - Large */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/850f16ac-9ec7-4568-8131-0c5f622cba2a.png"
              alt="Zebenai Melaku"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Beach Sunset Image */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img
              src={beachSunset}
              alt="Beach sunset"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Title Card */}
          <div className="col-span-1 md:col-span-2 row-span-2 md:row-span-1 rounded-2xl bg-card border border-border/50 p-4 md:p-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              ABOUT<br />
              <span className="text-gradient">ME</span>
            </h2>
          </div>

          {/* NSBE Group Image */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img
              src={nsbeGroup}
              alt="NSBE group photo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bio Card - Spans full width on mobile */}
          <div className="col-span-2 row-span-1 rounded-2xl bg-card border border-border/50 p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 overflow-hidden">
            <div className="flex-1 min-w-0">
              <p className="text-foreground font-bold text-lg md:text-2xl mb-1 md:mb-2">
                Hi! I'm Zebenai Melaku
              </p>
              <p className="text-muted-foreground text-xs md:text-base leading-relaxed line-clamp-2 md:line-clamp-3">
                I'm a third-year Computer Engineering student at UVA passionate about human-computer interactions.
              </p>
            </div>
            <Link to="/about" className="flex-shrink-0">
              <Button variant="outline" size="sm" className="group text-xs md:text-sm">
                Learn More
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
