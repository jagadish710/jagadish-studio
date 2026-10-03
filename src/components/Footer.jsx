import React from 'react';
import { playCyberTone } from '../utils/audio';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ setActivePage, isDark }) {
  const handleNav = (id) => {
    playCyberTone('click');
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 px-4 sm:px-6 lg:px-8 border-t relative z-10 font-mono text-xs ${
      isDark ? 'border-white/10 bg-[#0E0E0E] text-slate-400' : 'border-black/10 bg-[#F0F4F2] text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-black/5 dark:border-white/5">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <Logo isDark={isDark} className="w-6 h-6" />
            <span className={`font-bold text-base tracking-wider font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              JAGADISH.ONLINE
            </span>
          </div>
          <p className={`max-w-sm text-xs font-sans leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Modern business websites and custom software solutions with an easy self-serve admin panel, zero maintenance charges, and 100% full ownership.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-fresh-green'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('solutions')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-fresh-green'}`}
          >
            Solutions
          </button>
          <button
            onClick={() => handleNav('work')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-fresh-green'}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-fresh-green'}`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('prototype')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-fresh-green'}`}
          >
            Pricing
          </button>
          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20want%20to%20talk%20about%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="font-bold flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp (+91 73586 18789)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] opacity-75">
        <div>
          &copy; {new Date().getFullYear()} Jagadish Studio. All Rights Reserved. ₹0 Maintenance Charges &bull; 100% Code Ownership.
        </div>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1.5 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'}`} />
            ALL SYSTEMS ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
