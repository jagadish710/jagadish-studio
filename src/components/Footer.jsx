import React from 'react';
import { playCyberTone } from '../utils/audio';
import { ArrowUpRight } from 'lucide-react';

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
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'}`} />
            <span className="font-bold text-base tracking-wider font-display">
              JAGADISH.ONLINE
            </span>
          </div>
          <p className="opacity-75 max-w-sm text-xs font-sans leading-relaxed">
            Engineering autonomous digital assets &amp; multimodal AI web systems. Built with Ex-Amazon engineering standards and next-generation AI architectures.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-luxury-gold' : 'hover:text-fresh-green'}`}
          >
            Overview
          </button>
          <button
            onClick={() => handleNav('solutions')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-luxury-gold' : 'hover:text-fresh-green'}`}
          >
            Solutions
          </button>
          <button
            onClick={() => handleNav('work')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-luxury-gold' : 'hover:text-fresh-green'}`}
          >
            Live Work (PMS)
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-luxury-gold' : 'hover:text-fresh-green'}`}
          >
            Pedigree
          </button>
          <button
            onClick={() => handleNav('prototype')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-luxury-gold' : 'hover:text-fresh-green'}`}
          >
            $0 Maintenance
          </button>
          <a
            href="https://wa.me/?text=Hi%20Jagadish%2C%20I%20want%20to%20talk%20about%20a%20project."
            target="_blank"
            rel="noreferrer"
            className={`font-bold flex items-center gap-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}
          >
            <span>WhatsApp Direct</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] opacity-70">
        <div>
          &copy; {new Date().getFullYear()} Jagadish Studio. All Rights Reserved. Full Client Sovereignty &bull; $0 Monthly Retainers.
        </div>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1.5 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'}`} />
            STAGING INFRASTRUCTURE: OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
