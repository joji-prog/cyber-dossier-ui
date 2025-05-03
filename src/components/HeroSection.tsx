
import React from 'react';
import TerminalText from './TerminalText';
import GlitchText from './GlitchText';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden code-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 glass px-3 py-1 rounded-md">
            <TerminalText
              text="$ initiating_classified_mission.sh"
              className="text-sm md:text-base text-green-400"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-glow">
            <span className="text-gradient">Classified</span>
            <br />
            <GlitchText text="PROJECT SANAET" className="text-white" />
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            <TerminalText 
              text="Mission-Critical Developer Portfolio. Unauthorized access highly encouraged."
              speed={20}
              className="block"
            />
          </p>
          
          <TerminalText
            text="> AGENT PROFILE: Full-Stack Developer // Security Clearance: MAXIMUM"
            className="mb-8 text-primary font-mono"
            speed={10}
          />
          
          <button 
            onClick={scrollToProjects}
            className="mt-8 glass px-6 py-3 rounded-md flex items-center justify-center group transition-all neon-border"
          >
            <span className="mr-2">View Mission Files</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-10 glass px-3 py-2 rounded-md hidden md:block">
        <p className="text-xs font-mono text-white/60">
          <span className="text-primary">SYS:</span> Secure connection established
        </p>
      </div>
      
      <div className="absolute top-10 right-10 glass px-3 py-2 rounded-md hidden md:block">
        <p className="text-xs font-mono text-white/60">
          <span className="text-red-500 animate-pulse">REC</span> Session_ID: {Math.random().toString(36).substring(2, 9)}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
