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
    <footer className="py-14 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-[#060608] text-zinc-400 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-900">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <Logo isDark={isDark} className="w-8 h-8" />
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-sm tracking-[0.2em] leading-none text-white">
                MERQURIE
              </span>
              <span className="text-[10px] font-medium font-serif px-1.5 py-0.5 rounded border bg-zinc-900 text-zinc-300 border-zinc-800">
                புதன்
              </span>
            </div>
          </div>
          <p className="max-w-md text-xs font-sans leading-relaxed text-zinc-400">
            High-Performance Website Solutions &bull; Sub-0.3s Core Web Vitals, self-serve client admin cockpits, and zero recurring maintenance fees with 100% full intellectual property sovereignty.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <button
            onClick={() => handleNav('home')}
            className="transition-colors cursor-pointer hover:text-white"
          >
            Overview
          </button>
          <button
            onClick={() => handleNav('solutions')}
            className="transition-colors cursor-pointer hover:text-white"
          >
            Solutions
          </button>
          <button
            onClick={() => handleNav('work')}
            className="transition-colors cursor-pointer hover:text-white"
          >
            Platforms
          </button>
          <button
            onClick={() => handleNav('prototype')}
            className="transition-colors cursor-pointer hover:text-white"
          >
            Pricing
          </button>
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="font-semibold flex items-center gap-1.5 text-zinc-300 hover:text-white"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
        <div>
          &copy; {new Date().getFullYear()} Merqurie. All Rights Reserved. Move at the Speed of Mercury.
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
