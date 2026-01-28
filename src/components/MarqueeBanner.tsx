import React from 'react';

interface MarqueeBannerProps {
  items?: string[];
  className?: string;
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ 
  items = ['UI/UX Design', 'Web Development', 'User Research', 'Prototyping', 'React', 'TypeScript'],
  className = ''
}) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden bg-primary py-3 ${className}`}>
      <div className="animate-marquee flex whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="flex items-center mx-6 text-primary-foreground font-medium">
            {item}
            <span className="ml-6 text-primary-foreground/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;