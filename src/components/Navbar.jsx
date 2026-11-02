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
            ? 'bg-[#09090C]/95 backdrop-blur-xl border-b md:border border-zinc-800/80 md:rounded-2xl shadow-2xl md:max-w-7xl md:mx-auto'
            : 'bg-[#09090C]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border border-white/5 md:rounded-2xl md:max-w-7xl md:mx-auto'
        }`}
      >
        {/* Brand Logo & Studio Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          aria-label="MERQURIE Home"
        >
          <Logo isDark={true} className="w-8 h-8 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display font-black text-sm sm:text-base tracking-[0.18em] text-white leading-tight">
              MERQURIE
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider hidden sm:block">
              INDEPENDENT WEB STUDIO • CHENNAI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-800 text-white font-bold shadow-xs'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Consultation CTA */}
          <button
            onClick={onOpenPrototypeModal}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold font-mono tracking-wide bg-white text-zinc-950 hover:bg-zinc-200 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-800" />
            <span>FREE SAMPLE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
