import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const handleNavigateToHuyenVi = () => {
    window.open('https://huyenvi.vercel.app/', '_blank');
  };

  return (
    <section 
      id={SectionId.HOME} 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Hero-specific Highlight - Acts as a spotlight on the content */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {/* Central Core Glow - Intense Center */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-primary/5 to-transparent blur-[100px] opacity-70 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md animate-fade-in shadow-lg shadow-primary/10 hover:border-primary/30 transition-colors cursor-default">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-purple-200 tracking-wide">Tinh hoa Cổ học & Công nghệ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
            HUYỀN VI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-accent drop-shadow-2xl text-4xl md:text-6xl block mt-4">AI & Kinh Dịch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Hệ thống dự báo vận mệnh tiên phong kết hợp sức mạnh phân tích dữ liệu của AI và triết lý sâu sắc của 64 quẻ Kinh Dịch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <button 
              onClick={handleNavigateToHuyenVi}
              className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
            >
              Trải nghiệm Huyền Vi
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection(SectionId.SOLUTIONS)}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold transition-all hover:-translate-y-1"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;