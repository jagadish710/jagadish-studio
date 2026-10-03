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
    { id: 'home', label: 'Overview' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'work', label: 'Live Work (PMS)' },
    { id: 'about', label: 'Pedigree' },
    { id: 'prototype', label: '$0 Maintenance' },
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
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-base transition-transform group-hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-br from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
              : 'bg-gradient-to-br from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
          }`}>
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-base tracking-tight transition-colors">
                JAGADISH
              </span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                isDark 
                  ? 'bg-[#1E1B15] text-luxury-gold border-luxury-gold/40' 
                  : 'bg-fresh-tint text-fresh-green border-fresh-border'
              }`}>
                STUDIO
              </span>
            </div>
            <div className="text-[10px] font-mono opacity-60 hidden sm:block">
              EX-AMAZON &bull; NEXT-GEN MULTIMODAL AI
            </div>
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

          {/* AI Concierge Trigger */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenChat();
            }}
            className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
              isDark 
                ? 'bg-[#1A1A1A] border-white/10 hover:border-luxury-gold/40 text-slate-300 hover:text-white' 
                : 'bg-white border-black/10 hover:border-fresh-emerald/40 text-slate-700 hover:text-fresh-forest shadow-sm'
            }`}
          >
            <MessageSquare className={`w-3.5 h-3.5 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`} />
            <span>AI CONCIERGE</span>
          </button>

          {/* Prototype CTA */}
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
            <span>GET PROTOTYPE</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

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
        </div>
      )}
    </header>
  );
}
