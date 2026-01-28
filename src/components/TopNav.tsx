import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const TopNav = () => {
  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          My Portfolio
        </Link>
        <ul className="flex items-center gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
                  {item.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
