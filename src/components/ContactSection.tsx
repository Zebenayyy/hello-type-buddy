import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

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
        toast.success('Thanks! Your message has been sent successfully.');
        form.reset();
      } else {
        toast.error(res.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Unable to send your message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      {/* Marquee */}
      <div className="bg-primary text-primary-foreground py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {['Web Design', 'App Design', 'Wireframe', 'Dashboard', 'Prototype', 'UI/UX', 'Web Design', 'App Design', 'Wireframe', 'Dashboard', 'Prototype', 'UI/UX'].map((item, index) => (
            <span key={index} className="flex items-center mx-8 text-sm font-medium">
              {item}
              <span className="ml-8 text-primary-foreground/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Connect section */}
      <div className="bg-card py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-display font-extrabold text-3xl md:text-4xl">
            Let's <span className="text-primary">Connect</span> There
          </h3>
          <Link to="/#contact">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8">
              Hire Me Now
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                <span className="font-display font-bold text-xl">Zebenai Melaku</span>
              </div>
              <p className="text-background/70 mb-6 max-w-sm">
                Feel free to connect with me and explore more of my work on GitHub and LinkedIn. Let's create something amazing together!
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Zebenayyy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/zebenai-melaku/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-3 text-background/70">
                <li><Link to="/" className="hover:text-background transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-background transition-colors">About me</Link></li>
                <li><Link to="/projects" className="hover:text-background transition-colors">Projects</Link></li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Send a Message</h4>
              <form onSubmit={onSubmit} className="space-y-3">
                <Input 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-full"
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Your email" 
                  required 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-full"
                />
                <Textarea 
                  name="message" 
                  placeholder="Your message" 
                  rows={3} 
                  required 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-2xl resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© Zebenai. All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Terms and Conditions</a>
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
