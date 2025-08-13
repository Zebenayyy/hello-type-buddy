import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-soft-glow/30 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-32">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating beautiful digital experiences
          </p>
        </header>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo area */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl character-glow bg-gradient-to-br from-character-yellow/20 to-character-green/20 flex items-center justify-center">
                    <img
                      src="/placeholder.svg"
                      alt="Your profile photo"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-character-yellow rounded-full animate-bounce-gentle" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-character-green rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}} />
                </div>
              </div>

              {/* Bio */}
              <article className="space-y-6">
                <div className="space-y-4">
                  <p className="text-foreground text-xl leading-relaxed font-medium">
                    Hi there! I'm a creative developer who enjoys crafting delightful, 
                    performant web experiences that make a difference.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I focus on clean UI design, smooth interactions, and building products
                    that people genuinely love to use. Every project is an opportunity
                    to push boundaries and create something amazing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies,
                    sketching design ideas, or learning something completely new.
                    I believe that curiosity and continuous learning are key to growth.
                  </p>
                </div>
                
                {/* Skills or interests */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {['React', 'TypeScript', 'UI/UX', 'Creative Coding'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;