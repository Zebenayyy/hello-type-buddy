import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast.success('Thanks! Your message has been queued.');
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact</h2>
          <p className="text-muted-foreground mt-2">Let’s build something together.</p>
        </header>

        <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell me a bit about your project..." rows={5} required />
          </div>
          <div>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
