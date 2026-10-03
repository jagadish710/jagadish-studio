import React from 'react';

export default function TechMarquee({ mode = 'tech', isDark }) {
  // Concise 1-2 word technical items (zero clutter)
  const techItems = [
    { title: 'REACT 19', highlight: true },
    { title: 'NEXT.JS', outline: true },
    { title: 'THREE.JS', highlight: false },
    { title: 'WEBGL', highlight: true },
    { title: 'GSAP MOTION', outline: true },
    { title: 'SUPABASE', highlight: true },
    { title: 'POSTGRESQL', outline: false },
    { title: 'TAILWIND CSS', highlight: false },
    { title: 'VERCEL EDGE', outline: true },
    { title: 'NODE.JS', highlight: true },
    { title: 'TYPESCRIPT', outline: false },
    { title: 'FAST SEO ENGINE', highlight: true },
    { title: 'REST APIS', outline: true },
  ];

  const solutionItems = [
    { title: 'BUSINESS WEBSITES', highlight: true },
    { title: 'CUSTOM SOFTWARES', outline: true },
    { title: 'E-COMMERCE ENGINES', highlight: false },
    { title: 'ACADEMY PLATFORMS', outline: false },
    { title: 'INDUSTRIAL CATALOGS', highlight: true },
    { title: 'MANAGEMENT ERPS', outline: true },
    { title: 'ADMIN DASHBOARDS', highlight: true },
    { title: 'BOOKING ENGINES', outline: false },
    { title: 'ZERO MAINTENANCE', highlight: true },
    { title: '100% OWNERSHIP', outline: true },
    { title: 'WHATSAPP AUTOMATION', highlight: false },
    { title: 'SUB-SECOND SPEED', highlight: true },
  ];

  const items = mode === 'tech' ? techItems : solutionItems;
  const isReverse = mode === 'solutions';

  // Triple items for seamless continuous looping
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full py-2 my-4 overflow-hidden select-none">
      {/* Background Ribbon Border & Gradient */}
      <div className={`py-3 border-y backdrop-blur-md relative ${
        isDark
          ? mode === 'tech'
            ? 'bg-[#15121E]/90 border-[#8B5CF6]/35 shadow-[0_0_25px_-5px_rgba(139,92,246,0.3)]'
            : 'bg-[#16140E]/90 border-luxury-gold/30 shadow-[0_0_25px_-5px_rgba(230,198,135,0.25)]'
          : mode === 'tech'
            ? 'bg-[#F5F2FF] border-[#673DE6]/25 shadow-sm'
            : 'bg-[#EBF7F0] border-fresh-border shadow-sm'
      }`}>
        {/* Soft edge gradient fades */}
        <div className={`absolute left-0 inset-y-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? 'from-[#121212] to-transparent' : 'from-[#F7FAF8] to-transparent'
        }`} />
        <div className={`absolute right-0 inset-y-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? 'from-[#121212] to-transparent' : 'from-[#F7FAF8] to-transparent'
        }`} />

        {/* Marquee Track */}
        <div className={isReverse ? 'marquee-track-reverse' : 'marquee-track'}>
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 px-6 shrink-0 transition-transform duration-200 hover:scale-105"
            >
              <span className={`text-xs sm:text-sm font-mono font-black tracking-wider uppercase ${
                item.highlight
                  ? isDark
                    ? mode === 'tech'
                      ? 'text-[#C4B5FD] drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]'
                      : 'text-luxury-gold drop-shadow-[0_0_10px_rgba(230,198,135,0.5)]'
                    : mode === 'tech'
                      ? 'text-[#673DE6]'
                      : 'text-fresh-green'
                  : item.outline
                  ? isDark
                    ? mode === 'tech' ? 'text-outline-purple' : 'text-outline-gold'
                    : mode === 'tech' ? 'text-outline-purple' : 'text-outline-green'
                  : isDark
                    ? 'text-white'
                    : 'text-slate-800'
              }`}>
                {item.title}
              </span>

              {/* Separator Diamond */}
              <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {idx % 3 === 0 ? '✦' : '•'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
