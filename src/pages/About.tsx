import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-character-yellow/5 via-background to-character-green/10" />
      
      <div className="relative z-10 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Info */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Who I Am</CardTitle>
                <CardDescription>A passionate developer with a love for creating</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm a creative developer who believes in the power of clean code and beautiful design. 
                  My journey in tech started with curiosity and has evolved into a passion for building 
                  meaningful digital experiences.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, reading about design 
                  principles, or working on personal projects that challenge my skills.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-2xl">Skills & Technologies</CardTitle>
                <CardDescription>The tools I use to bring ideas to life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <p className="text-muted-foreground text-sm">
                      React, TypeScript, Tailwind CSS, Next.js
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <p className="text-muted-foreground text-sm">
                      Node.js, Python, PostgreSQL, Supabase
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <p className="text-muted-foreground text-sm">
                      Git, VS Code, Figma, Docker
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="animate-fade-in md:col-span-2" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="text-2xl">Experience & Background</CardTitle>
                <CardDescription>My journey in the world of development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                    <p className="text-muted-foreground text-sm mb-2">2022 - Present</p>
                    <p className="text-muted-foreground">
                      Building scalable web applications and working with modern tech stacks. 
                      Focus on user experience and clean, maintainable code.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h4 className="font-semibold text-lg">Frontend Developer</h4>
                    <p className="text-muted-foreground text-sm mb-2">2020 - 2022</p>
                    <p className="text-muted-foreground">
                      Specialized in creating responsive, accessible user interfaces with React and modern CSS frameworks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;