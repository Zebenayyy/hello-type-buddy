import React from 'react';

const Marquee = () => {
  const items = ['Web Design', 'App Design', 'Wireframe', 'Dashboard', 'Prototype', 'UI/UX'];
  
  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center mx-8 text-sm font-medium">
            {item}
            <span className="ml-8 text-primary-foreground/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
