import React, { useState, useEffect } from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
} from 'lucide-react';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  onOpenChat, 
  onOpenPrototypeModal,
  isDark,
  themeMode,
  setThemeMode,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'work', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'prototype', label: 'Pricing' },
  ];

  const handleNavClick = (id) => {
    playCyberTone('click');
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    playCyberTone('click');
    if (themeMode === 'system') {
      setThemeMode(isDark ? 'light' : 'dark');
    } else if (themeMode === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#121212]/92 backdrop-blur-xl border border-luxury-gold/25 shadow-2xl shadow-black/80'
              : 'bg-[#FFFFFF]/92 backdrop-blur-xl border border-fresh-border shadow-lg shadow-emerald-950/5'
            : isDark
            ? 'bg-transparent border border-white/5'
            : 'bg-transparent border border-black/5'
        }`}
      >
        {/* Brand Logo Only */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Home"
        >
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-black text-lg transition-transform group-hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-br from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
              : 'bg-gradient-to-br from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
          }`}>
            ⚡
          </div>
        </button>

        {/* Desktop Navigation Pages */}
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? isDark ? 'text-white font-bold' : 'text-fresh-forest font-bold'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-lg border ${
                      isDark 
                        ? 'bg-luxury-gold/15 border-luxury-gold/40' 
                        : 'bg-fresh-tint border-fresh-emerald/40'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.id === 'work' && (
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
                    }`} />
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Theme Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              isDark 
                ? 'bg-[#1A1A1A] border-luxury-gold/30 text-luxury-gold hover:bg-[#222222]' 
                : 'bg-white border-fresh-border text-fresh-green hover:bg-fresh-tint shadow-sm'
            }`}
            title={`Current Theme: ${isDark ? 'Dark (Champagne & Obsidian)' : 'Light (Mint & Porcelain)'}. Click to switch.`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden lg:inline text-[10px] uppercase font-bold">
              {isDark ? 'Dark' : 'Light'}
            </span>
          </button>

          {/* AI Trigger */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenChat();
            }}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
              isDark 
                ? 'bg-[#1A1A1A] border-white/10 hover:border-luxury-gold/40 text-slate-300 hover:text-white' 
                : 'bg-white border-black/10 hover:border-fresh-emerald/40 text-slate-700 hover:text-fresh-forest shadow-sm'
            }`}
          >
            <MessageSquare className={`w-3.5 h-3.5 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`} />
            <span>AI</span>
          </button>

          {/* Enquire CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-4 py-2 rounded-xl font-bold text-xs font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDark 
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>ENQUIRE NOW</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs shadow-sm hover:scale-105 transition-all cursor-pointer"
            title="Chat on WhatsApp (+91 7358618789)"
          >
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-2 p-4 rounded-2xl border shadow-2xl flex flex-col gap-2 font-mono text-xs ${
          isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-black/10'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-xl text-left ${
                activePage === item.id
                  ? isDark 
                    ? 'bg-luxury-gold/15 text-luxury-gold font-bold border border-luxury-gold/30' 
                    : 'bg-fresh-tint text-fresh-green font-bold border border-fresh-border'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 p-3 rounded-xl bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2"
          >
            <span>WhatsApp: +91 73586 18789</span>
          </a>
        </div>
      )}
    </header>
  );
}
