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
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain animate-bounce-gentle"
          />
        </div>
        
        {/* Typing effects around the character */}
        <ClickEffect 
          isActive={true} 
          className="w-full h-full top-0 left-0"
        />
      </div>
    </div>
  );
};

export default CharacterSection;