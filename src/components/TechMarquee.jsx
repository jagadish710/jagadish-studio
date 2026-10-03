import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, Database, Zap, ShieldCheck } from 'lucide-react';

export default function TechMarquee({ mode = 'tech', isDark }) {
  const techItems = [
    { title: 'REACT 19', highlight: true },
    { title: 'NEXT.JS EDGE', outline: true },
    { title: 'THREE.JS / WEBGL', highlight: true },
    { title: 'GSAP SMOOTH MOTION', outline: false },
    { title: 'SUPABASE POSTGRES', highlight: true },
    { title: 'TAILWIND CSS', outline: true },
    { title: 'VERCEL SERVERLESS', highlight: false },
    { title: 'DOCKER CLOUD', outline: true },
    { title: 'SUB-SECOND LCP (<0.38S)', highlight: true },
    { title: 'REST & GRAPHQL APIS', outline: false },
    { title: 'ENTERPRISE SEO ENGINE', highlight: true },
  ];

  const solutionItems = [
    { title: 'AUTONOMOUS ADMIN PORTALS', highlight: true },
    { title: 'MARTIAL ARTS PLATFORMS (UPSKSKARATE.COM)', outline: false },
    { title: 'INDUSTRIAL MACHINERY ENGINES (PMSSOLUTION)', highlight: true },
    { title: 'BESPOKE INTERNAL SAAS & ERP', outline: true },
    { title: 'HIGH-CONVERSION E-COMMERCE', highlight: false },
    { title: '$0 MONTHLY MAINTENANCE', highlight: true },
    { title: '100% CODE & ASSET OWNERSHIP', outline: true },
    { title: 'AI-QUALIFIED LEAD CONCIERGE', highlight: true },
    { title: 'AUTOMATED BILLING & INVOICING', outline: false },
    { title: 'REAL-TIME DATA DASHBOARDS', highlight: true },
  ];

  const items = mode === 'tech' ? techItems : solutionItems;
  const isReverse = mode === 'solutions';

  // Double items for seamless infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full py-4 my-8 overflow-hidden select-none">
      {/* Background Ribbon Border & Gradient */}
      <div className={`py-3.5 border-y backdrop-blur-xl relative ${
        isDark
          ? mode === 'tech'
            ? 'bg-[#15121E]/80 border-[#673DE6]/35 shadow-[0_0_30px_-5px_rgba(103,61,230,0.25)]'
            : 'bg-[#16140E]/80 border-luxury-gold/30 shadow-[0_0_30px_-5px_rgba(230,198,135,0.2)]'
          : mode === 'tech'
            ? 'bg-[#F5F2FF] border-[#673DE6]/30 shadow-sm'
            : 'bg-[#EBF7F0] border-fresh-border shadow-sm'
      }`}>
        {/* Soft edge gradient fades */}
        <div className={`absolute left-0 inset-y-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? 'from-[#121212] to-transparent' : 'from-[#F7FAF8] to-transparent'
        }`} />
        <div className={`absolute right-0 inset-y-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? 'from-[#121212] to-transparent' : 'from-[#F7FAF8] to-transparent'
        }`} />

        {/* Marquee Track */}
        <div className={isReverse ? 'marquee-track-reverse' : 'marquee-track'}>
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 px-6 shrink-0 transition-transform duration-200 hover:scale-105"
            >
              <span className={`text-sm sm:text-base font-mono font-black tracking-wider uppercase ${
                item.highlight
                  ? isDark
                    ? mode === 'tech'
                      ? 'text-[#A78BFA] drop-shadow-[0_0_12px_rgba(167,139,250,0.45)]'
                      : 'text-luxury-gold drop-shadow-[0_0_12px_rgba(230,198,135,0.45)]'
                    : mode === 'tech'
                      ? 'text-[#673DE6]'
                      : 'text-fresh-green'
                  : item.outline
                  ? isDark
                    ? mode === 'tech' ? 'text-outline-purple' : 'text-outline-gold'
                    : mode === 'tech' ? 'text-outline-purple' : 'text-outline-green'
                  : isDark
                    ? 'text-white/80'
                    : 'text-slate-700'
              }`}>
                {item.title}
              </span>

              {/* Separator Diamond / Icon */}
              <span className="opacity-40 text-xs">
                {idx % 3 === 0 ? '✦' : idx % 2 === 0 ? '•' : '◆'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
