
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className,
  glitchInterval = 5000,
  glitchDuration = 500
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}:"<>?|';
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, glitchDuration);
    }, glitchInterval);
    
    return () => clearInterval(intervalId);
  }, [glitchInterval, glitchDuration]);
  
  const generateGlitchText = () => {
    return text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (Math.random() > 0.7) {
          return characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return char;
      })
      .join('');
  };
  
  return (
    <span className={cn("relative inline-block", className)}>
      {isGlitching ? (
        <span className="animate-glitch">{generateGlitchText()}</span>
      ) : (
        text
      )}
    </span>
  );
};

export default GlitchText;
