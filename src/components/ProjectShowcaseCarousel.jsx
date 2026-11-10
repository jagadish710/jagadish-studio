import React, { useRef, useState } from 'react';
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

  const projects = [
    {
      id: 'pms',
      title: 'PMS Solution Healthcare',
      subtitle: 'Hospital Equipment Sales & Rentals',
      sectorBadge: 'Healthcare • Chennai',
      description: 'Prominent Chennai medical platform managing ICU beds, oxygen concentrators, and hospital setups. Instant multi-channel WhatsApp RFQ routing with zero recurring maintenance fees.',
      image: '/images/pms_real.webp',
      badge: 'Live Production',
      url: 'https://pmssolution.co.in',
      domain: 'pmssolution.co.in',
      theme: {
        cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(204,251,241,0.7),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(224,242,254,0.6),transparent_55%),linear-gradient(to_bottom_right,#F0FDFA,#FFFFFF,#F8FAFC)]',
        border: 'border-teal-200/80 hover:border-teal-400',
        glow: 'from-teal-400/20 via-cyan-400/15 to-transparent',
        dotColor: '#5EEAD4',
        tagBg: 'bg-teal-50 border-teal-200/80 text-teal-800',
        accentText: 'text-teal-700',
        speedBadge: 'bg-teal-950/90 text-teal-200 border-teal-700/60',
        metricBorder: 'border-teal-100 bg-white/95',
        btnHover: 'hover:text-teal-700',
        phoneAura: 'shadow-teal-500/20',
      },
      metrics: [
        { label: 'Edge Speed', value: '0.24s' },
        { label: 'Retainer Fee', value: '₹0 / Month' },
        { label: 'Lead Flow', value: 'WhatsApp RFQ' },
      ],
      floatingBadge: 'Lighthouse 99/100',
    },
    {
      id: 'upsks',
      title: 'UPSKS Karate Academy',
      subtitle: 'Martial Arts International School',
      sectorBadge: 'Sports & Admissions • India',
      description: 'High-speed digital platform connecting students across India to Japanese karate heritage, belt grading registries, tournament schedules, and instant parent WhatsApp admissions.',
      image: '/images/upsks_real.webp',
      badge: 'Live Production',
      url: 'https://upskskarate.com',
      domain: 'upskskarate.com',
      theme: {
        cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.7),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(254,243,199,0.6),transparent_55%),linear-gradient(to_bottom_right,#FFF1F2,#FFFFFF,#FFFBEB)]',
        border: 'border-rose-200/80 hover:border-rose-400',
        glow: 'from-rose-400/20 via-amber-400/15 to-transparent',
        dotColor: '#FDA4AF',
        tagBg: 'bg-rose-50 border-rose-200/80 text-rose-800',
        accentText: 'text-rose-700',
        speedBadge: 'bg-rose-950/90 text-rose-200 border-rose-700/60',
        metricBorder: 'border-rose-100 bg-white/95',
        btnHover: 'hover:text-rose-700',
        phoneAura: 'shadow-rose-500/20',
      },
      metrics: [
        { label: 'Edge Speed', value: '0.22s' },
        { label: 'Retainer Fee', value: '₹0 / Month' },
        { label: 'Inquiries', value: 'Direct Parent' },
      ],
      floatingBadge: 'Sub-0.25s Edge',
    },
    {
      id: 'admin',
      title: 'Self-Serve Phone Admin Cockpit',
      subtitle: '10-Second Text & Price Management',
      sectorBadge: 'Visual Management System',
      description: 'Update headlines, product prices, announcements, and catalog photos directly from your phone in seconds. 100% client sovereignty with zero developer dependency.',
      image: '/images/showcase_admin_portal.webp',
      badge: 'Visual Cockpit',
      url: null,
      domain: 'merqurie.cloud/admin',
      theme: {
        cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(224,231,255,0.75),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(243,232,255,0.6),transparent_55%),linear-gradient(to_bottom_right,#EEF2FF,#FFFFFF,#FAF5FF)]',
        border: 'border-indigo-200/80 hover:border-indigo-400',
        glow: 'from-indigo-400/20 via-purple-400/15 to-transparent',
        dotColor: '#A5B4FC',
        tagBg: 'bg-indigo-50 border-indigo-200/80 text-indigo-800',
        accentText: 'text-indigo-700',
        speedBadge: 'bg-indigo-950/90 text-indigo-200 border-indigo-700/60',
        metricBorder: 'border-indigo-100 bg-white/95',
        btnHover: 'hover:text-indigo-700',
        phoneAura: 'shadow-indigo-500/20',
      },
      metrics: [
        { label: 'Edit Latency', value: '10 Secs' },
        { label: 'Agency Delay', value: '0 Days' },
        { label: 'Device', value: 'Mobile Phone' },
      ],
      floatingBadge: '0 Developer Debt',
    },
    {
      id: 'ecommerce',
      title: '1-Tap WhatsApp Commerce',
      subtitle: 'Conversational Product Storefront',
      sectorBadge: 'Conversational E-Store',
      description: 'Interactive product catalog with dynamic configurators and instant one-tap WhatsApp orders. Bypasses bloated shopping carts, drop-offs, and third-party SaaS fees.',
      image: '/images/showcase_ecommerce_catalog.webp',
      badge: 'Interactive Storefront',
      url: null,
      domain: 'store.merqurie.cloud',
      theme: {
        cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(209,250,229,0.75),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(204,251,241,0.6),transparent_55%),linear-gradient(to_bottom_right,#ECFDF5,#FFFFFF,#F0FDFA)]',
        border: 'border-emerald-200/80 hover:border-emerald-400',
        glow: 'from-emerald-400/20 via-teal-400/15 to-transparent',
        dotColor: '#6EE7B7',
        tagBg: 'bg-emerald-50 border-emerald-200/80 text-emerald-800',
        accentText: 'text-emerald-700',
        speedBadge: 'bg-emerald-950/90 text-emerald-200 border-emerald-700/60',
        metricBorder: 'border-emerald-100 bg-white/95',
        btnHover: 'hover:text-emerald-700',
        phoneAura: 'shadow-emerald-500/20',
      },
      metrics: [
        { label: 'Checkout', value: '1-Tap Flow' },
        { label: 'Plugin Bloat', value: '0 Plugins' },
        { label: 'Speed', value: '< 0.3s Instant' },
      ],
      floatingBadge: 'High-Converting',
    },
  ];

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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Chromatic Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none bg-indigo-400/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header: Satria Studio Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 shadow-2xs text-slate-800">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span className="uppercase tracking-wider">SELECTED CLIENT CASE STUDIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Real Websites Engineered for{' '}
              <span className="font-serif italic font-normal text-rose-600">
                Real Businesses.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Don’t take our word for it. Browse through live production client platforms and test their mobile speed, design precision, and lead generation in real time.
            </p>
          </div>

          {/* Carousel Arrows with Touch Feedback */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-90 ${
                canScrollLeft 
                  ? 'bg-white border-slate-300 text-slate-900 shadow-xs hover:border-slate-900 hover:scale-105' 
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
                  ? 'bg-white border-slate-300 text-slate-900 shadow-xs hover:border-slate-900 hover:scale-105' 
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
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-10 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className={`w-[310px] sm:w-[480px] lg:w-[520px] shrink-0 snap-start rounded-3xl border ${project.theme.cardBg} ${project.theme.border} shadow-md hover:shadow-2xl transition-all duration-400 ease-out flex flex-col justify-between overflow-hidden group hover:-translate-y-2.5 active:scale-[0.99] relative`}
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
                
                {/* 
                  ============================================================
                  TRENDING MULTI-DEVICE LAYERED PICTURE LAYOUT
                  Replaces static conventional box style:
                  1. Desktop glass workstation canvas
                  2. Overlapping floating smartphone mockup in foreground
                  3. Parallax hover movement between desktop and phone
                  4. Specular glass reflection sweep
                  ============================================================
                */}
                <div className="p-3.5 sm:p-5 pb-0">
                  <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 p-2 sm:p-2.5 shadow-md shadow-slate-900/5 group-hover:shadow-xl transition-all duration-500">
                    
                    {/* Micro Browser Window Bar */}
                    <div className="px-2 sm:px-3 py-1.5 flex items-center justify-between border-b border-slate-100/90 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-400/90" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/90" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
                      </div>

                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] font-mono text-slate-500 max-w-[180px] truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>

                      <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${project.theme.tagBg}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Desktop Viewport Canvas with Parallax & Specular Glare */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 group/screen">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Specular Diagonal Light Sweep on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                      {/* Floating Telemetry Badge on Top-Left */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className={`px-2 sm:px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold backdrop-blur-md shadow-xs border ${project.theme.speedBadge} flex items-center gap-1`}>
                          <Zap className="w-2.5 h-2.5 text-amber-400" />
                          <span>{project.metrics[0].value} Edge</span>
                        </span>
                      </div>

                      {/* Live Production Ping on Top-Right */}
                      {project.url && (
                        <div className="absolute top-2.5 right-2.5 z-10">
                          <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        </div>
                      )}

                      {/* 
                        ------------------------------------------------------
                        OVERLAPPING FLOATING SMARTPHONE MOCKUP
                        Renders in foreground corner with parallax depth
                        ------------------------------------------------------
                      */}
                      <div className={`absolute -bottom-2 sm:-bottom-3 -right-1 sm:right-2 w-[110px] sm:w-[135px] aspect-[9/17] rounded-[1.3rem] sm:rounded-[1.5rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ${project.theme.phoneAura} ring-2 ring-slate-800/90 z-20 group-hover:-translate-y-2.5 group-hover:translate-x-1 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none`}>
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-2 rounded-full bg-slate-950 z-30 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-slate-800" />
                        </div>

                        {/* Mobile Screen Container */}
                        <div className="w-full h-full rounded-[1.05rem] sm:rounded-[1.25rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                          {/* Mobile Screen Image Viewport */}
                          <img
                            src={project.image}
                            alt={`${project.title} Mobile View`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Mobile Top Status Bar Simulation */}
                          <div className="absolute top-0 inset-x-0 pt-1 px-2.5 flex items-center justify-between text-[7px] font-mono text-white/90 bg-gradient-to-b from-black/60 to-transparent z-20">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                              <Wifi className="w-2 h-2" />
                              <Battery className="w-2 h-2" />
                            </div>
                          </div>

                          {/* Mobile Bottom WhatsApp CTA Simulation */}
                          <div className="absolute bottom-1.5 inset-x-1.5 z-20">
                            <div className="py-1 px-1.5 rounded-full bg-[#25D366] text-slate-950 text-[7px] font-mono font-bold flex items-center justify-center gap-1 shadow-sm">
                              <MessageSquare className="w-2 h-2 fill-current" />
                              <span>1-Tap WhatsApp</span>
                            </div>
                          </div>

                          {/* Inner Screen Gloss Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Card Content & Small Modern Typography */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        {project.sectorBadge}
                      </span>
                      <span className={`text-[10px] font-mono font-semibold ${project.theme.accentText}`}>
                        {project.floatingBadge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight leading-tight group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Micro-Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-2 rounded-xl ${project.theme.metricBorder} border text-center shadow-2xs hover:shadow-xs transition-all`}
                      >
                        <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-0.5">
                          {metric.label}
                        </span>
                        <strong className="text-xs sm:text-[13px] font-bold font-display text-slate-900 block truncate">
                          {metric.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 sm:p-5 pt-0 mt-auto border-t border-slate-200/60 flex items-center justify-between gap-3 relative z-10">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-all shadow-2xs active:scale-95"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3 text-rose-600" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
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
