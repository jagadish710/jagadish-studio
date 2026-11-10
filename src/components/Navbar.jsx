import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function Navbar({ onOpenPrototypeModal, activePage, setActivePage }) {
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
            ? 'bg-white/95 backdrop-blur-xl border-b md:border border-slate-200/90 md:rounded-2xl shadow-lg md:max-w-7xl md:mx-auto'
            : 'bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border border-slate-200/60 md:rounded-2xl md:max-w-7xl md:mx-auto'
        }`}
      >
        {/* Brand Logo & Studio Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          aria-label="MERQURIE Home"
        >
          <Logo isDark={false} className="w-8 h-8 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display font-black text-sm sm:text-base tracking-[0.18em] text-slate-900 leading-tight">
              MERQURIE
            </span>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider hidden sm:block">
              INDEPENDENT WEB SYSTEMS • CHENNAI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Direct */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-[#25D366]/10 text-emerald-700 border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Consultation CTA with Vibrant Crimson Polish */}
          <button
            onClick={onOpenPrototypeModal}
            className="btn-crimson-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-mono tracking-wide cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
