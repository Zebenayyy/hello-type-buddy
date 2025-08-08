import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("/placeholder.svg");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };

  return (
    <section id="about" className={cn("py-16 md:py-24", className)} aria-label="About me section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[280px,1fr] gap-8 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-xl bg-muted overflow-hidden ring-1 ring-border shadow-sm">
              <img
                src={photoUrl}
                alt="Your profile photo - portfolio headshot"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <input
                id="about-photo"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleUpload}
              />
              <Button variant="secondary" size="sm" asChild>
                <label htmlFor="about-photo" className="cursor-pointer">Upload photo</label>
              </Button>
            </div>
          </div>

          <article className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Write a short bio here to introduce yourself. Share what you love building,
              your skills, and a bit of your story. Keep it friendly and concise so
              visitors quickly get to know you.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
