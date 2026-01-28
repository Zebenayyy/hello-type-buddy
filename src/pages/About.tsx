import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNav from '@/components/TopNav';
import Resume from "@/components/Melaku_Zebenai_Resume.pdf";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-16">
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none mb-4">
              ABOUT'
              <br />
              ME↗ ↙
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Get to know the person behind the designs
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large profile image */}
              <div className="col-span-2 bg-card rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  src="/lovable-uploads/850f16ac-9ec7-4568-8131-0c5f622cba2a.png"
                  alt="Zebenai Melaku"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Skills cards */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-lg mb-3">Frontend</h3>
                <p className="text-sm opacity-80">React, TypeScript, Tailwind CSS, Next.js</p>
              </div>
              
              <div className="bg-foreground text-background rounded-3xl p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-lg mb-3">Design</h3>
                <p className="text-sm opacity-80">Figma, ProtoPie, User Research</p>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Who I Am */}
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <h2 className="font-display font-bold text-2xl mb-4">Who I Am</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi there! My name is Zebenai Melaku and I'm currently a third-year student at the University of Virginia majoring in Computer Engineering with a passion for human-computer interactions.
                  </p>
                  <p>
                    I'm a Research Assistant at the Ultimate User Interface Lab working on the PadGlider project and a Teaching Assistant for the Human-Computer Interaction course. I also serve as the Programs Chair of NSBE.
                  </p>
                  <p>
                    I love being creative and hopefully that shows throughout this website!
                  </p>
                  <p>
                    When I'm not coding or researching, you'll probably find me crocheting, drawing, or volunteering for a random event and trying to be as involved as I can in my community :).
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <h2 className="font-display font-bold text-2xl mb-6">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="font-bold text-lg">UI/UX Product Design Intern</h3>
                    <p className="text-muted-foreground text-sm mb-2">Hardshell (Remote) - Present</p>
                    <p className="text-muted-foreground text-sm">
                      Designing enterprise AI security platform UI in Figma, conducting user research and usability testing.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="font-bold text-lg">Research Assistant</h3>
                    <p className="text-muted-foreground text-sm mb-2">Ultimate User Interface Lab - Present</p>
                    <p className="text-muted-foreground text-sm">
                      Working on the PadGlider project, focusing on human-computer interaction research.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="font-bold text-lg">Teaching Assistant</h3>
                    <p className="text-muted-foreground text-sm mb-2">Human-Computer Interaction Course - Present</p>
                    <p className="text-muted-foreground text-sm">
                      Supporting students in learning HCI principles and helping with coursework.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full bg-primary hover:bg-primary/90">
                      <FileText className="w-5 h-5 mr-2" />
                      View Full Resume
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
