import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function Navbar({ 
  onOpenPrototypeModal, 
  activePage, 
  setActivePage,
  activeConcept = 'concept1'
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'solutions', label: 'Services' },
    { id: 'work', label: 'Selected Work' },
    { id: 'about', label: 'Studio & Approach' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 md:px-6 md:pt-4">
      <div
        className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b md:border border-slate-200/90 md:rounded-2xl shadow-md md:max-w-7xl md:mx-auto'
            : 'bg-white/85 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border border-slate-200/60 md:rounded-2xl md:max-w-7xl md:mx-auto'
        }`}
      >
        {/* Brand Logo & Studio Wordmark */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
            aria-label="MERQURIE Home"
          >
            <Logo isDark={false} concept={activeConcept} className="w-8 h-8 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display font-black text-sm sm:text-base tracking-[0.18em] text-slate-900 leading-tight">
                MERQURIE
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-wider hidden sm:block">
                INDEPENDENT WEB SYSTEMS • CHENNAI
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp Pill */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100 transition-colors cursor-pointer shadow-2xs"
            title="Chat on WhatsApp with Founder"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Action Button */}
          <button
            onClick={onOpenPrototypeModal}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white shadow-md shadow-rose-600/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border border-rose-500/20"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
