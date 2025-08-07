import React from 'react';
import ClickEffect from './ClickEffect';

interface CharacterSectionProps {
  className?: string;
}

const CharacterSection: React.FC<CharacterSectionProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Character container */}
      <div className="relative">
        <div className="character-glow rounded-full p-4 bg-gradient-to-br from-character-yellow/20 to-character-green/20 backdrop-blur-sm">
          <img 
            src="/lovable-uploads/040a7602-c58c-4496-9ec0-b04c7c0b305e.png" 
            alt="Friendly character typing on laptop"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 object-contain animate-bounce-gentle"
          />
        </div>
        
        {/* Typing effects around the character */}
        <ClickEffect 
          isActive={true} 
          className="w-full h-full top-0 left-0"
        />
        
        {/* Floating typing indicators */}
        <div className="absolute -bottom-1 -left-2 text-xs text-muted-foreground animate-typing" style={{animationDelay: '0.5s'}}>
          ✨
        </div>
      </div>
    </div>
  );
};

export default CharacterSection;