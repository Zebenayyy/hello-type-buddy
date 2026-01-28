import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', '169fba46-3beb-420b-98e6-5d92c6fd0a18');

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((r) => r.json());

      if (res.success) {
        setSubmitStatus('success');
        toast.success('Thanks! Your message has been sent successfully.');
        form.reset();
      } else {
        setSubmitStatus('error');
        toast.error(res.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      toast.error('Unable to send your message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 relative">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="text-gradient">Connect</span> There
            </h2>
          </div>
        </div>

        {/* Contact Form Card */}
        <div id="contact-form" className="bg-card rounded-2xl border border-border/50 p-6 md:p-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send Me a Message</h3>
              <p className="text-muted-foreground">
                Have a project in mind? Let's collaborate and create something amazing together
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your full name" 
                    required 
                    className="bg-background border-border focus:border-primary h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="bg-background border-border focus:border-primary h-11"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="What's this about?" 
                  required 
                  className="bg-background border-border focus:border-primary h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project, ideas, or just say hello..." 
                  rows={5} 
                  required 
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <p className="text-sm text-emerald-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
              )}
              
              <div className="text-center pt-2">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-character-green to-character-yellow text-white font-semibold hover:shadow-lg transition-all duration-300 px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
