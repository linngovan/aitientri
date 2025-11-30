import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import Logo from './Logo';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: 'Trang chủ' },
    { id: SectionId.ABOUT, label: 'Tầm nhìn' },
    { id: SectionId.SOLUTIONS, label: 'Sản phẩm' },
    { id: SectionId.CONTACT, label: 'Kết nối' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/5">
                {navLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.id
                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                        : 'text-secondary hover:text-white hover:bg-white/5'
                    }`}
                >
                    {link.label}
                </button>
                ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 bg-white/5 rounded-lg backdrop-blur-md border border-white/5"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-fade-in">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-4 rounded-xl text-sm font-medium ${
                   activeSection === link.id 
                   ? 'bg-primary/20 text-primary border border-primary/20' 
                   : 'text-secondary hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;