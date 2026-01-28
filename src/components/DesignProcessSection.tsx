import React from 'react';
import { Search, Target, Palette, RefreshCw } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Research',
    description: 'User interviews, competitive analysis, and understanding pain points',
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-500'
  },
  {
    icon: Target,
    title: 'Define',
    description: 'Problem framing, user personas, and success metrics',
    color: 'from-purple-500/20 to-purple-600/10',
    iconColor: 'text-purple-500'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Wireframes, prototypes, and visual design systems',
    color: 'from-primary/20 to-primary/10',
    iconColor: 'text-primary'
  },
  {
    icon: RefreshCw,
    title: 'Test & Iterate',
    description: 'Usability testing, feedback loops, and continuous improvement',
    color: 'from-character-green/20 to-character-green/10',
    iconColor: 'text-character-green'
  }
];

const DesignProcessSection = () => {
  return (
    <section id="process" className="scroll-mt-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">My Design Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A human-centered approach combining research, creativity, and iteration
          </p>
        </header>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className="group relative"
            >
              {/* Connector line (hidden on mobile, last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className={`relative bg-gradient-to-br ${step.color} backdrop-blur-sm rounded-2xl border border-border/50 p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-card rounded-full border-2 border-border flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center mb-4 ${step.iconColor}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary statement */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            "I believe the best designs emerge from deeply understanding users, 
            then iterating based on real feedback—not assumptions."
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
