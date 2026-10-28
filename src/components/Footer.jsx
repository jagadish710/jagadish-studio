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
      isDark ? 'border-white/5 bg-[#0D0D0F] text-slate-400' : 'border-slate-200 bg-[#F8FAFC] text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-black/5 dark:border-white/5">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <Logo isDark={isDark} className="w-8 h-8" />
            <div className="flex flex-col text-left">
              <span className={`font-display font-extrabold text-sm tracking-[0.2em] leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                MERQURIE
              </span>
              <span className={`text-[8px] font-mono font-bold tracking-[0.28em] mt-0.5 ${
                isDark ? 'text-luxury-gold' : 'text-blue-600'
              }`}>
                GROUP
              </span>
            </div>
          </div>
          <p className={`max-w-md text-xs font-sans leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Next-generation enterprise technology conglomerate &bull; Cloud software ecosystems, vertical SaaS platforms, and future electric mobility. Zero recurring maintenance fees with 100% full intellectual property sovereignty.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Overview
          </button>
          <button
            onClick={() => handleNav('solutions')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Ecosystem
          </button>
          <button
            onClick={() => handleNav('work')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Platforms
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Philosophy
          </button>
          <button
            onClick={() => handleNav('prototype')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Architecture
          </button>
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`font-semibold flex items-center gap-1.5 ${isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'}`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp (+91 73586 18789)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] opacity-80">
        <div>
          &copy; {new Date().getFullYear()} Merqurie Group. All Rights Reserved. Zero Maintenance Architecture &bull; 100% Intellectual Property Sovereignty.
        </div>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1.5 ${isDark ? 'text-luxury-gold' : 'text-blue-700 font-semibold'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-luxury-gold animate-pulse' : 'bg-blue-600'}`} />
            MERQURIE ECOSYSTEM ACTIVE
          </span>
        </div>
      </div>
    </footer>
  );
}
