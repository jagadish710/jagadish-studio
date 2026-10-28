import React, { useState, useEffect } from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  MessageCircle,
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
    { id: 'home', label: 'Overview' },
    { id: 'solutions', label: 'Ecosystem' },
    { id: 'work', label: 'Platforms' },
    { id: 'about', label: 'Philosophy' },
    { id: 'prototype', label: 'Architecture' },
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
            ? 'bg-[#09090b]/92 backdrop-blur-xl border border-zinc-800 shadow-2xl'
            : 'bg-transparent border border-white/5'
        }`}
      >
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="MERQURIE Home"
        >
          <Logo isDark={isDark} className="w-9 h-9" />
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-base tracking-[0.2em] leading-none text-white">
              MERQURIE
            </span>
            <span className="text-[10px] font-medium font-serif px-1.5 py-0.5 rounded border bg-zinc-900 text-zinc-300 border-zinc-700">
              புதன்
            </span>
          </div>
        </button>

        {/* Desktop Navigation Pages */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl border bg-zinc-950/80 border-zinc-800 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-lg border bg-zinc-800 border-zinc-700 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.id === 'work' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
            className="p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* AI Trigger */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenChat();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
          >
            <MessageSquare className="w-3.5 h-3.5 text-zinc-300" />
            <span>AI</span>
          </button>

          {/* Enquire CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className="px-4 py-2 rounded-xl font-bold text-xs font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm"
          >
            <span>CONSULTATION</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono font-semibold text-xs shadow-xs hover:scale-105 transition-all cursor-pointer"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
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
        <div className="md:hidden mt-2 p-4 rounded-2xl border border-zinc-800 bg-[#0E0E12] shadow-2xl flex flex-col gap-2 font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-xl text-left cursor-pointer transition-colors ${
                activePage === item.id
                  ? 'bg-zinc-800 text-white font-bold border border-zinc-700'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
