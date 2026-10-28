import React from 'react';
import { Sparkles, Compass, Zap, ShieldCheck } from 'lucide-react';

export default function MercuryHeritageSection({ isDark }) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#0D0D0F]' : 'border-slate-200/80 bg-slate-50'
    }`}>
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#161619] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-white border-slate-200 text-slate-800 shadow-xs'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="uppercase tracking-wider">The Name &amp; Heritage &bull; பெயர் &amp; மரபு</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            The Spirit of Mercury. <br />
            <span className={isDark ? 'text-[#E6C687]' : 'text-blue-700'}>
              புதன் &bull; பாதரசம்
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium italic ${
            isDark ? 'text-slate-200' : 'text-slate-700'
          }`}>
            &ldquo;Move at the Speed of Mercury.&rdquo;
          </p>
        </div>

        {/* 2-Column Heritage Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          
          {/* 1. புதன் (Budhan) */}
          <div className={`p-7 sm:p-8 rounded-2xl border transition-all ${
            isDark 
              ? 'bg-[#141417] border-white/10 hover:border-[#E6C687]/30 shadow-lg' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-bold font-serif ${isDark ? 'text-[#E6C687]' : 'text-blue-700'}`}>
                  புதன்
                </span>
                <span className={`text-xs font-mono font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  BUDHAN &bull; THE INTELLECT
                </span>
              </div>
              <Compass className={`w-4 h-4 ${isDark ? 'text-[#E6C687]' : 'text-blue-600'}`} />
            </div>

            <h3 className={`text-lg font-bold font-display mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Intellect, Communication &amp; Commerce
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              In Tamil and classical heritage, Mercury is <strong>புதன் (Budhan)</strong> — the celestial ruler of sharp intellect, analytical wisdom, rapid communication, and prosperous commerce. We build digital platforms that give your business this exact strategic and commercial edge.
            </p>
          </div>

          {/* 2. பாதரசம் (Paatharasam) */}
          <div className={`p-7 sm:p-8 rounded-2xl border transition-all ${
            isDark 
              ? 'bg-[#141417] border-white/10 hover:border-[#E6C687]/30 shadow-lg' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-bold font-serif ${isDark ? 'text-[#E6C687]' : 'text-blue-700'}`}>
                  பாதரசம்
                </span>
                <span className={`text-xs font-mono font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  PAATHARASAM &bull; THE LIVING ELEMENT
                </span>
              </div>
              <Zap className={`w-4 h-4 ${isDark ? 'text-[#E6C687]' : 'text-blue-600'}`} />
            </div>

            <h3 className={`text-lg font-bold font-display mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Frictionless Speed &amp; Eternal Agility
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Elemental Mercury is <strong>பாதரசம் (Paatharasam)</strong> — pure liquid silver. It moves with effortless speed, never adheres, never gets trapped, and adapts instantaneously to any surface. Our software is engineered on this identical principle: lightweight, sub-second speed, and zero sticky maintenance fees.
            </p>
          </div>

        </div>

        {/* Unified Philosophy Statement */}
        <div className={`p-6 sm:p-8 rounded-2xl border text-center ${
          isDark 
            ? 'bg-[#16161A] border-[#E6C687]/20 text-slate-300' 
            : 'bg-white border-blue-100 text-slate-700 shadow-xs'
        }`}>
          <p className="text-xs sm:text-sm font-sans leading-relaxed max-w-3xl mx-auto">
            <span className={`font-bold font-mono tracking-wider uppercase block mb-1 text-xs ${
              isDark ? 'text-[#E6C687]' : 'text-blue-700'
            }`}>
              THE MERQURIE PROMISE
            </span>
            &ldquo;Sharp intellect of <strong>Budhan (புதன்)</strong> + frictionless speed of <strong>Paatharasam (பாதரசம்)</strong>. We deliver high-performance digital systems that elevate your business, permanently.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
