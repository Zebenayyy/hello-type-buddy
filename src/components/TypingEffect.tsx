import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  speed = 100, 
  showCursor = true, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTypingCursor, setShowTypingCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (showCursor) {
      // Blinking cursor effect after typing is complete
      const cursorTimer = setInterval(() => {
        setShowTypingCursor(prev => !prev);
      }, 600);

      return () => clearInterval(cursorTimer);
    }
  }, [currentIndex, text, speed, showCursor]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && showTypingCursor && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

export default TypingEffect;