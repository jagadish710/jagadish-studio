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
import Logo from './Logo';

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
              : 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-sm'
            : isDark
            ? 'bg-transparent border border-white/5'
            : 'bg-transparent border border-slate-200/40'
        }`}
      >
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="Home"
        >
          <Logo isDark={isDark} className="w-10 h-10" />
          <div className="flex flex-col text-left">
            <span className={`font-display font-extrabold text-sm tracking-widest leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              MERQURI
            </span>
            <span className={`text-[9px] font-mono font-bold tracking-[0.25em] mt-1 ${
              isDark ? 'text-luxury-gold' : 'text-blue-600'
            }`}>
              CLOUD
            </span>
          </div>
        </button>

        {/* Desktop Navigation Pages */}
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100/80 border-slate-200/60'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? isDark ? 'text-white font-bold' : 'text-slate-900 font-bold'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-lg border ${
                      isDark 
                        ? 'bg-luxury-gold/15 border-luxury-gold/40' 
                        : 'bg-white border-slate-200 shadow-xs'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.id === 'work' && (
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      isDark ? 'bg-luxury-gold' : 'bg-blue-600'
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
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
            }`}
            title={`Current Theme: ${isDark ? 'Dark (Champagne & Obsidian)' : 'Light (Minimal & Trustworthy)'}. Click to switch.`}
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
                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-xs'
            }`}
          >
            <MessageSquare className={`w-3.5 h-3.5 ${isDark ? 'text-luxury-gold' : 'text-blue-600'}`} />
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
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
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
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs shadow-xs hover:scale-105 transition-all cursor-pointer"
            title="Chat on WhatsApp (+91 7358618789)"
          >
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-2 p-4 rounded-2xl border shadow-2xl flex flex-col gap-2 font-mono text-xs ${
          isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-slate-200'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-xl text-left ${
                activePage === item.id
                  ? isDark 
                    ? 'bg-luxury-gold/15 text-luxury-gold font-bold border border-luxury-gold/30' 
                    : 'bg-slate-100 text-slate-900 font-bold border border-slate-200'
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
