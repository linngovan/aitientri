import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Original Logo Image - No modifications */}
      <img
        src="/logo.png"
        alt="Tiên tri Logo"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;