import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className={cn("py-16 md:py-24", className)} aria-label="Contact section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Say hello 👋" rows={6} required />
          </div>
          <div className="flex items-center gap-4">
            <Button type="submit">Send message</Button>
            <a href="mailto:hello@example.com" className="story-link text-sm text-muted-foreground">Or email me directly</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
