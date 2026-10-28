import React, { useState, useEffect } from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
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
    { id: 'solutions', label: 'Solutions' },
    { id: 'work', label: 'Deployments' },
    { id: 'about', label: 'Engineering' },
    { id: 'prototype', label: 'Specifications' },
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
              ? 'bg-[#09090b]/92 backdrop-blur-xl border border-zinc-800 shadow-2xl'
              : 'bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-lg'
            : isDark
              ? 'bg-transparent border border-white/5'
              : 'bg-transparent border border-slate-200/40'
        }`}
      >
        {/* Brand Logo & Wordmark - Tamil Word Removed */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="MERQURIE Home"
        >
          <Logo isDark={isDark} className="w-9 h-9" />
          <div className="flex items-center gap-2">
            <span className={`font-display font-extrabold text-base tracking-[0.2em] leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              MERQURIE
            </span>
          </div>
        </button>

        {/* Desktop Navigation Pages */}
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md ${
          isDark 
            ? 'bg-zinc-950/80 border-zinc-800' 
            : 'bg-slate-100/90 border-slate-200/90'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? isDark ? 'text-white font-bold' : 'text-slate-950 font-bold'
                    : isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-lg border shadow-xs ${
                      isDark 
                        ? 'bg-zinc-800 border-zinc-700' 
                        : 'bg-white border-slate-200/90 shadow-sm'
                    }`}
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
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950'
            }`}
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
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950'
            }`}
          >
            <MessageSquare className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-300' : 'text-slate-700'}`} />
            <span>AI</span>
          </button>

          {/* Enquire CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-4 py-2 rounded-xl font-bold text-xs font-mono flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${
              isDark 
                ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                : 'bg-slate-950 hover:bg-slate-800 text-white'
            }`}
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
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono font-semibold text-xs shadow-xs hover:scale-105 transition-all cursor-pointer border ${
              isDark
                ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
            }`}
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-white' 
                : 'bg-slate-100 border-slate-200 text-slate-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-2 p-4 rounded-2xl border shadow-2xl flex flex-col gap-2 font-mono text-xs ${
          isDark 
            ? 'border-zinc-800 bg-[#0E0E12] text-white' 
            : 'border-slate-200 bg-white text-slate-900'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-xl text-left cursor-pointer transition-colors ${
                activePage === item.id
                  ? isDark 
                    ? 'bg-zinc-800 text-white font-bold border border-zinc-700' 
                    : 'bg-slate-100 text-slate-950 font-bold border border-slate-200'
                  : isDark 
                    ? 'text-zinc-400 hover:text-white hover:bg-zinc-900' 
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-2 p-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 cursor-pointer border ${
              isDark 
                ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-500 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
