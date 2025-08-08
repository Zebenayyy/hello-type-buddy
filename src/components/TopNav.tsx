import React from 'react';
import { Button } from '@/components/ui/button';

const TopNav = () => {
  const items = [
    { href: '#welcome', label: 'Welcome' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Primary">
        <a href="#welcome" className="font-semibold text-foreground">My Portfolio</a>
        <ul className="flex items-center gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
                  {item.label}
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
