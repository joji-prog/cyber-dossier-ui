
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-display text-xl text-gradient font-bold">
              PROJECT SANAET
            </div>
            <div className="text-xs font-mono text-white/50 mt-1">
              CLASSIFIED // MISSION-CRITICAL DEVELOPER
            </div>
          </div>
          
          <div className="text-sm text-white/50 font-mono">
            &copy; {currentYear} All operations secured. <span className="text-primary">CLASSIFICATION: TOP SECRET</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
