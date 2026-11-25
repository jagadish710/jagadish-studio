import React, { useRef, useState } from 'react';
import { projects } from '../data/projects';
import { 
  ExternalLink, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  ShoppingBag,
  Layers,
  MessageSquare,
  Activity,
  Wifi,
  Battery
} from 'lucide-react';

export default function ProjectShowcaseCarousel({ onOpenPrototypeModal }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 350);
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
      
      {/* Background Soft Chromatic Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none bg-cyan-400/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 shadow-xs text-slate-800">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="uppercase tracking-wider">SELECTED CLIENT CASE STUDIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1] font-display">
              Real Websites Engineered for{' '}
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                Real Businesses.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Don’t take our word for it. Browse through live production client platforms and test their mobile speed, design precision, and lead generation in real time.
            </p>
          </div>

          {/* Swipe hints + arrows: mobile only, desktop shows the full grid */}
          <div className="flex items-center gap-2.5 self-start md:hidden">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-90 ${
                canScrollLeft 
                  ? 'bg-white border-slate-300 text-slate-900 shadow-sm hover:border-rose-500 hover:scale-105' 
                  : 'bg-slate-100 border-slate-200 text-slate-400 opacity-40 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-90 ${
                canScrollRight 
                  ? 'bg-white border-slate-300 text-slate-900 shadow-sm hover:border-rose-500 hover:scale-105' 
                  : 'bg-slate-100 border-slate-200 text-slate-400 opacity-40 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Project Carousel Strip */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="grid grid-flow-col auto-cols-[86%] sm:auto-cols-[68%] md:grid-flow-row md:auto-cols-auto md:grid-cols-2 items-stretch gap-5 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 pt-2 no-scrollbar snap-x snap-mandatory focus:outline-none select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className={`w-full snap-start rounded-3xl border ${project.theme.cardBg} ${project.theme.border} shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden group hover:-translate-y-2 active:scale-[0.99] relative`}
            >
              {/* Subtle Dotted Matrix Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(${project.theme.dotColor} 1.2px, transparent 1.2px)`,
                  backgroundSize: '18px 18px'
                }}
              />

              {/* Soft Chromatic Ambient Glow on Hover */}
              <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.theme.glow} blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                
                {/* Multi-Device Layered Picture Layout */}
                <div className="p-3.5 sm:p-5 pb-0">
                  <div className="relative rounded-2xl border border-slate-200 bg-slate-900 p-2 sm:p-2.5 shadow-xl transition-all duration-500">
                    
                    {/* Micro Browser Window Bar */}
                    <div className="px-2 sm:px-3 py-1.5 flex items-center justify-between border-b border-white/10 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/90" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/90" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                      </div>

                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950 border border-white/10 text-[10px] font-mono text-slate-300 max-w-[180px] truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>

                      <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${project.theme.tagBg}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Desktop Viewport Canvas */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 group/screen">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                      />

                      {/* Specular Diagonal Light Sweep on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                      {/* Floating Telemetry Badge on Top-Left */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className={`px-2 sm:px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold backdrop-blur-md shadow-xs border ${project.theme.speedBadge} flex items-center gap-1`}>
                          <Zap className="w-2.5 h-2.5 text-amber-500" />
                          <span>{project.speed}</span>
                        </span>
                      </div>

                      {/* Live Production Ping on Top-Right */}
                      {project.url && (
                        <div className="absolute top-2.5 right-2.5 z-10">
                          <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-emerald-800 border border-emerald-300 flex items-center gap-1 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        </div>
                      )}

                      {/* Overlapping Floating Smartphone Mockup with Authentic Mobile Screenshot */}
                      <div className={`absolute -bottom-2 sm:-bottom-3 -right-1 sm:right-2 w-[110px] sm:w-[135px] aspect-[9/18] rounded-[1.3rem] sm:rounded-[1.5rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ${project.theme.phoneAura} ring-2 ring-slate-800 z-20 group-hover:-translate-y-2 group-hover:scale-103 transition-all duration-500 ease-out pointer-events-none`}>
                        {/* Dynamic Island */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-2 rounded-full bg-slate-900 z-30 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-slate-700" />
                        </div>

                        {/* Mobile Screen Container */}
                        <div className="w-full h-full rounded-[1.05rem] sm:rounded-[1.25rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                          {/* Authentic Mobile Screen Image */}
                          <img
                            src={project.mobileImage || project.image}
                            alt={`${project.title} Mobile View`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top"
                          />

                          {/* Mobile Bottom WhatsApp CTA Simulation */}
                          <div className="absolute bottom-1.5 inset-x-1.5 z-20">
                            <div className="py-1 px-1.5 rounded-full bg-[#25D366] text-emerald-950 text-[7px] font-mono font-bold flex items-center justify-center gap-1 shadow-sm">
                              <MessageSquare className="w-2 h-2 fill-current" />
                              <span>1-Tap WhatsApp</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Card Content & Modern Typography */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        {project.sector}
                      </span>
                      <span className={`text-[10px] font-mono ${project.theme.accentText}`}>
                        {project.floatingBadge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 tracking-tight leading-tight group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Micro-Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-2 rounded-xl ${project.theme.metricBorder} border text-center shadow-xs transition-all`}
                      >
                        <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-0.5">
                          {metric.label}
                        </span>
                        <strong className="text-xs sm:text-[13px] font-bold font-display text-slate-950 block truncate">
                          {metric.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 sm:p-5 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
                <button
                  onClick={onOpenPrototypeModal}
                  className="text-xs font-mono font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                >
                  <span>Plan Similar Site</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-900 text-white hover:bg-rose-600 transition-all shadow-sm active:scale-95"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3 text-rose-300" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Interactive Demo
                  </span>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
