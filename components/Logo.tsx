import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Abstract Star Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center">
         <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="url(#logo-gradient)" />
          <defs>
            <linearGradient id="logo-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text with Mixed Typography */}
      <div className="flex items-baseline gap-1.5 select-none">
        <span className="text-xl font-black tracking-tight text-white font-sans">AI</span>
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white font-serif tracking-wide">Tiên tri</span>
      </div>
    </div>
  );
};

export default Logo;