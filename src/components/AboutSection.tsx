import React from "react";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-16 md:py-24", className)} aria-label="About me section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[320px,1fr] gap-10 md:gap-12 items-start">
          {/* Photo placeholder (no upload button) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-1 ring-border shadow-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Your profile photo placeholder"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>
            <p className="text-xs text-muted-foreground">Add your photo later by replacing the placeholder image.</p>
          </div>

          {/* Bio */}
          <article className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Write a short bio here to introduce yourself. Share what you love building,
              your skills, and a bit of your story. Keep it friendly and concise so
              visitors quickly get to know you.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">Frontend</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">React</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">UI/UX</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
