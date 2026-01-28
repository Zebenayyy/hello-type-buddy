import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const TopNav = () => {
  const items = [
    { href: '/about', label: 'About me' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Primary">
        <ul className="flex items-center gap-6">
          {items.map((item) => (
            <li key={item.href}>
              <Link 
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <span>ZEBENAI</span>
        </Link>

        <Link to="/#contact">
          <Button 
            size="sm" 
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          >
            Let's Talk
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default TopNav;
