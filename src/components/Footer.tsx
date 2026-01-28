import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';
import footerCharacter from '@/assets/footer-character.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-primary to-primary/90 text-white">
      {/* Character peeking from the corner of the footer */}
      <div className="absolute -top-24 md:-top-28 right-8 md:right-16 z-10 pointer-events-none">
        <img 
          src={footerCharacter} 
          alt="Cute character peeking"
          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-white">Zebenai Melaku</span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              Computer Engineering student at UVA passionate about creating intuitive digital experiences through thoughtful design and code.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Zebenayyy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/zebenai-melaku" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#contact"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#welcome" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">More</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link to="/about" className="hover:text-white transition-colors">Full About Me</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">All Projects</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>© {currentYear} Zebenai Melaku. All rights reserved.</p>
          <p>Made with 💚 and lots of coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;