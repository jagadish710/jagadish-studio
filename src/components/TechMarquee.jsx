import React from 'react';

export default function TechMarquee({ mode = 'tech', isDark }) {
  const techItems = [
    { title: 'REACT 19', highlight: true },
    { title: 'NEXT.JS', outline: true },
    { title: 'THREE.JS', highlight: false },
    { title: 'SUPABASE', highlight: true },
    { title: 'POSTGRESQL', outline: false },
    { title: 'TAILWIND CSS', highlight: false },
    { title: 'VERCEL EDGE', outline: true },
    { title: 'NODE.JS', highlight: true },
    { title: 'TYPESCRIPT', outline: false },
    { title: 'GOOGLE CORE WEB VITALS', highlight: true },
    { title: 'REST & GRAPHQL', outline: true },
  ];

  const solutionItems = [
    { title: 'MERQURIE CLOUD', highlight: true },
    { title: 'VERTICAL SAAS', outline: true },
    { title: 'MERQURIE SPORTS', highlight: false },
    { title: 'MERQURIE HEALTH', outline: false },
    { title: 'INDUSTRIAL ERPS', highlight: true },
    { title: 'MERQURIE MOBILITY', outline: true },
    { title: 'ADMIN COCKPITS', highlight: true },
    { title: 'ZERO MAINTENANCE ARCHITECTURE', outline: false },
    { title: '100% CODE SOVEREIGNTY', highlight: true },
    { title: 'SUB-0.3S LATENCY', highlight: true },
  ];

  const items = mode === 'tech' ? techItems : solutionItems;
  const isReverse = mode === 'solutions';
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full py-2 my-2 overflow-hidden select-none">
      <div className={`py-3.5 border-y backdrop-blur-md relative ${
        isDark
          ? 'bg-[#141417]/60 border-white/5'
          : 'bg-[#F8FAFC]/80 border-slate-200/60'
      }`}>
        {/* Soft edge gradient fades */}
        <div className={`absolute left-0 inset-y-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? 'from-[#121212] to-transparent' : 'from-[#FFFFFF] to-transparent'
        }`} />
        <div className={`absolute right-0 inset-y-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? 'from-[#121212] to-transparent' : 'from-[#FFFFFF] to-transparent'
        }`} />

        {/* Marquee Track */}
        <div className={`flex items-center gap-10 whitespace-nowrap will-change-transform ${
          isReverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}>
          {displayItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="inline-flex items-center gap-4 text-xs font-mono font-medium tracking-widest uppercase transition-opacity"
            >
              <span className={`transition-colors ${
                item.highlight
                  ? isDark 
                    ? 'text-[#E6C687] font-semibold' 
                    : 'text-slate-900 font-semibold'
                  : isDark 
                    ? 'text-slate-400' 
                    : 'text-slate-500'
              }`}>
                {item.title}
              </span>
              <span className={`text-[8px] ${
                isDark ? 'text-white/20' : 'text-slate-300'
              }`}>
                &bull;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
