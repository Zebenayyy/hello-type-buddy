import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Project One',
    description:
      'A short description about your awesome project. What problem does it solve? What tech did you use?',
  },
  {
    title: 'Project Two',
    description:
      'Highlight key features and outcomes. Keep it concise but compelling for readers.',
  },
  {
    title: 'Project Three',
    description:
      'Another project you’re proud of. You can link out or add images later.',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
          <p className="text-muted-foreground mt-2">Some things I’ve built recently.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
