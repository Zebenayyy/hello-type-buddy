import React, { useState, useEffect } from 'react';

interface ClickEffectProps {
  isActive?: boolean;
  className?: string;
}

const ClickEffect: React.FC<ClickEffectProps> = ({ isActive = true, className = "" }) => {
  const [clicks, setClicks] = useState<string[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const addClick = () => {
      const clickSounds = ['*click*', '*tap*', '*type*'];
      const randomSound = clickSounds[Math.floor(Math.random() * clickSounds.length)];
      
      setClicks(prev => [...prev, randomSound]);
      
      // Remove the click after animation
      setTimeout(() => {
        setClicks(prev => prev.slice(1));
      }, 2000);
    };

    // Add clicks at random intervals
    const interval = setInterval(addClick, Math.random() * 1000 + 800);
    
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {clicks.map((click, index) => (
        <div
          key={index}
          className="absolute text-xs text-muted-foreground animate-fade-in"
          style={{
            left: Math.random() * 60 + 'px',
            top: Math.random() * 40 + 'px',
            animationDelay: `${index * 0.2}s`
          }}
        >
          {click}
        </div>
      ))}
    </div>
  );
};

export default ClickEffect;