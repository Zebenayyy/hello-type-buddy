import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProjectsSectionProps {
  className?: string;
}

const demoProjects = [
  {
    title: "Project One",
    description: "A cool project you worked on. Briefly describe what it does and your role.",
  },
  {
    title: "Project Two",
    description: "Another project with a short description to showcase your skills and impact.",
  },
  {
    title: "Project Three",
    description: "Highlight interesting tech, features, or outcomes achieved in this project.",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  return (
    <section id="projects" className={cn("py-16 md:py-24 bg-background", className)} aria-label="Projects section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p, idx) => (
            <Card key={idx} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[16/9] w-full rounded-md overflow-hidden ring-1 ring-border bg-muted">
                  <img
                    src="/placeholder.svg"
                    alt={`Project screenshot - ${p.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
