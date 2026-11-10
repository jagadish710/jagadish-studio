import React, { useRef, useState } from 'react';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Lock, Zap, ShieldCheck, Smartphone, ShoppingBag } from 'lucide-react';

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
        cardBg: 'bg-gradient-to-br from-teal-50/80 via-white to-sky-50/40',
        border: 'border-teal-200/70 hover:border-teal-400',
        glow: 'from-teal-400/15 via-cyan-400/10 to-transparent',
        tagBg: 'bg-teal-50 border-teal-200/80 text-teal-800',
        accentText: 'text-teal-700',
        speedBadge: 'bg-teal-900/90 text-teal-200 border-teal-700/60',
        metricBorder: 'border-teal-100 bg-white/90',
        btnHover: 'hover:text-teal-700',
      },
      metrics: [
        { label: 'Edge Speed', value: '0.24s' },
        { label: 'Retainer Fee', value: '₹0 / Month' },
        { label: 'Lead Flow', value: 'WhatsApp RFQ' },
      ],
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
        cardBg: 'bg-gradient-to-br from-rose-50/80 via-white to-amber-50/40',
        border: 'border-rose-200/70 hover:border-rose-400',
        glow: 'from-rose-400/15 via-amber-400/10 to-transparent',
        tagBg: 'bg-rose-50 border-rose-200/80 text-rose-800',
        accentText: 'text-rose-700',
        speedBadge: 'bg-rose-950/90 text-rose-200 border-rose-700/60',
        metricBorder: 'border-rose-100 bg-white/90',
        btnHover: 'hover:text-rose-700',
      },
      metrics: [
        { label: 'Edge Speed', value: '0.22s' },
        { label: 'Retainer Fee', value: '₹0 / Month' },
        { label: 'Inquiries', value: 'Direct Parent' },
      ],
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
        cardBg: 'bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/40',
        border: 'border-indigo-200/70 hover:border-indigo-400',
        glow: 'from-indigo-400/15 via-purple-400/10 to-transparent',
        tagBg: 'bg-indigo-50 border-indigo-200/80 text-indigo-800',
        accentText: 'text-indigo-700',
        speedBadge: 'bg-indigo-950/90 text-indigo-200 border-indigo-700/60',
        metricBorder: 'border-indigo-100 bg-white/90',
        btnHover: 'hover:text-indigo-700',
      },
      metrics: [
        { label: 'Edit Latency', value: '10 Secs' },
        { label: 'Agency Delay', value: '0 Days' },
        { label: 'Device', value: 'Mobile Phone' },
      ],
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
        cardBg: 'bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40',
        border: 'border-emerald-200/70 hover:border-emerald-400',
        glow: 'from-emerald-400/15 via-teal-400/10 to-transparent',
        tagBg: 'bg-emerald-50 border-emerald-200/80 text-emerald-800',
        accentText: 'text-emerald-700',
        speedBadge: 'bg-emerald-950/90 text-emerald-200 border-emerald-700/60',
        metricBorder: 'border-emerald-100 bg-white/90',
        btnHover: 'hover:text-emerald-700',
      },
      metrics: [
        { label: 'Checkout', value: '1-Tap Flow' },
        { label: 'Plugin Bloat', value: '0 Plugins' },
        { label: 'Speed', value: '< 0.3s Instant' },
      ],
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
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 350);
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
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
          className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className={`w-[320px] sm:w-[460px] lg:w-[500px] shrink-0 snap-start rounded-3xl border ${project.theme.cardBg} ${project.theme.border} shadow-sm hover:shadow-2xl transition-all duration-400 ease-out flex flex-col justify-between overflow-hidden group hover:-translate-y-2 active:scale-[0.99] relative`}
            >
              {/* Soft Chromatic Ambient Glow on Hover */}
              <div className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${project.theme.glow} blur-3xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                
                {/* Modern Floating Device Viewport Container (Replaces flat box style) */}
                <div className="p-3.5 sm:p-4 pb-0">
                  <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-md shadow-slate-900/5 group-hover:shadow-lg transition-all duration-500">
                    
                    {/* Micro Browser Window Bar */}
                    <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-slate-100/90 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-400/90" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/90" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
                      </div>

                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] font-mono text-slate-500 max-w-[180px] truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>

                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${project.theme.tagBg}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Image Viewport with Smooth Zoom & Float Effect */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Floating Edge Speed Badge */}
                      <div className="absolute bottom-2.5 left-2.5">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold backdrop-blur-md shadow-xs border ${project.theme.speedBadge}`}>
                          ⚡ {project.metrics[0].value} Load
                        </span>
                      </div>

                      {project.url && (
                        <div className="absolute top-2.5 right-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Content Area with Small, Refined, Modern Typography */}
                <div className="p-5 sm:p-6 pt-4">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.16em] ${project.theme.accentText}`}>
                      {project.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {project.sectorBadge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 mb-2 tracking-tight group-hover:text-slate-950">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* 3 Compact Metric Badges */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((m, idx) => (
                      <div 
                        key={idx} 
                        className={`p-2 rounded-xl border ${project.theme.metricBorder} text-center shadow-2xs group-hover:bg-white transition-colors`}
                      >
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">{m.label}</span>
                        <strong className="text-xs font-mono font-bold text-slate-900 mt-0.5 block truncate">
                          {m.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-200/60 mt-auto relative z-10">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-xs font-mono font-bold ${project.theme.accentText} ${project.theme.btnHover} transition-colors group/link`}
                  >
                    <span>Visit {project.domain}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400">
                    Proprietary Merqurie System
                  </span>
                )}

                <button
                  onClick={onOpenPrototypeModal}
                  className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-400 shadow-2xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Plan similar build →</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
