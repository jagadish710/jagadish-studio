import WhatsAppIcon from './WhatsAppIcon';
import React from 'react';
import { playCyberTone } from '../utils/audio';
import { ArrowUpRight} from 'lucide-react';
import Logo from './Logo';

export default function Footer({ setActivePage, isDark = true }) {
  const handleNav = (id) => {
    playCyberTone('click');
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-14 px-4 sm:px-6 lg:px-8 border-t font-mono text-xs relative z-10 ${
      isDark 
        ? 'border-zinc-900 bg-[#060608] text-zinc-400' 
        : 'border-slate-200 bg-slate-50 text-slate-600'
    }`}>
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b ${
        isDark ? 'border-zinc-900' : 'border-slate-200'
      }`}>
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <Logo isDark={isDark} className="w-8 h-8" />
            <div className="flex items-center gap-2">
              <span className={`font-display font-extrabold text-sm tracking-[0.2em] leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                MERQURIE
              </span>
            </div>
          </div>
          <p className={`max-w-md text-xs font-sans leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            High-Performance Website Solutions &bull; Sub-0.3s Core Web Vitals, self-serve client admin cockpits, and zero recurring maintenance fees with 100% full intellectual property sovereignty.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors cursor-pointer ${
              isDark ? 'hover:text-white' : 'hover:text-slate-950'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleNav('solutions')}
            className={`transition-colors cursor-pointer ${
              isDark ? 'hover:text-white' : 'hover:text-slate-950'
            }`}
          >
            Solutions
          </button>
          <button
            onClick={() => handleNav('work')}
            className={`transition-colors cursor-pointer ${
              isDark ? 'hover:text-white' : 'hover:text-slate-950'
            }`}
          >
            Deployments
          </button>
          <button
            onClick={() => handleNav('prototype')}
            className={`transition-colors cursor-pointer ${
              isDark ? 'hover:text-white' : 'hover:text-slate-950'
            }`}
          >
            Specifications
          </button>
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`font-semibold flex items-center gap-1.5 ${
              isDark ? 'text-zinc-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
            }`}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-emerald-500" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] opacity-75">
        <div>
          &copy; {new Date().getFullYear()} Merqurie. All Rights Reserved. Move at the Speed of Mercury.
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
