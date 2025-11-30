import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  // Function to handle smooth scrolling
  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-100 overflow-x-hidden selection:bg-primary/30 selection:text-white relative">
      {/* Global Living Gradient Background - AI Power Theme */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
        
        {/* Layer 1: Neural Grid Pattern (Subtle Structure) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Layer 2: Deep Ambient Glows (The Void) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        
        {/* Layer 3: Moving Energy Orbs (The Intelligence) - Updated with Dynamic Animations */}
        
        {/* Orb 1: Primary Intelligence (Violet) - Slow, majestic movement */}
        <div className="absolute top-[-10%] left-[20%] w-[45vw] h-[45vw] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-wander-slow"></div>
        
        {/* Orb 2: Creative Spark (Fuchsia/Pink) - Active, reverse flow */}
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-wander-reverse animation-delay-2000"></div>
        
        {/* Orb 3: Logic & Data (Cyan/Sky) - Faster, erratic data flow */}
        <div className="absolute -bottom-[20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/15 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-wander animation-delay-4000"></div>

        {/* Orb 4: Deep Learning (Indigo - Center Anchor) - Heavy, pulsing base */}
        <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-indigo-800/20 rounded-full mix-blend-plus-lighter filter blur-[100px] opacity-30 animate-wander-slow animation-delay-2000"></div>

        {/* Layer 4: Cinematic Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      </div>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Mission />
        <Solutions />
      </main>

      <Footer />
    </div>
  );
};

export default App;