import React, { useRef, useState } from 'react';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectShowcaseCarousel({ onOpenPrototypeModal }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      id: 'pms',
      title: 'PMS Solution Healthcare',
      subtitle: 'Hospital Equipment Sales & Rentals • Chennai',
      description: 'A prominent Chennai medical equipment platform managing ICU beds, oxygen concentrators, and hospital setup inquiries. Features instant WhatsApp RFQ routing, rental calculators, and zero monthly retainer debt.',
      image: '/images/pms_real.webp',
      badge: 'Live Production Platform',
      url: 'https://pmssolution.co.in',
      domain: 'pmssolution.co.in',
      tag: 'Healthcare & Rentals',
      metrics: [
        { label: 'Edge Speed', value: '0.24s' },
        { label: 'Retainer Fee', value: '₹0 / Month' },
        { label: 'Lead Flow', value: 'Direct WhatsApp RFQ' },
      ],
      featured: true,
    },
    {
      id: 'upsks',
      title: 'UPSKS Karate Academy',
      subtitle: 'Martial Arts International School • India',
      description: 'A high-speed digital home for a premier international karate academy. Connects students across India to Japanese karate heritage, belt grading registries, tournament rosters, and direct parent WhatsApp admissions.',
      image: '/images/upsks_real.webp',
      badge: 'Live Production Platform',
      url: 'https://upskskarate.com',
      domain: 'upskskarate.com',
      tag: 'Academy & Admissions',
      metrics: [
        { label: 'Edge Speed', value: '0.22s' },
        { label: 'Retainer Fee', value: '₹0 / Month' },
        { label: 'Parent Flow', value: 'Instant Admissions' },
      ],
      featured: true,
    },
    {
      id: 'admin',
      title: 'Self-Serve Phone Admin Cockpit',
      subtitle: '10-Second Text & Price Management',
      description: 'Update headlines, product prices, announcements, and catalog photos directly from your phone in 10 seconds. You hold full access keys with zero agency dependency or waiting days for basic edits.',
      image: '/images/showcase_admin_portal.webp',
      badge: 'Visual Management System',
      url: null,
      domain: 'merqurie.cloud/admin',
      tag: 'Client Cockpit',
      metrics: [
        { label: 'Edit Latency', value: '10 Seconds' },
        { label: 'Developer Delay', value: '0 Days' },
        { label: 'Ownership', value: '100% Client Keys' },
      ],
      featured: false,
    },
    {
      id: 'ecommerce',
      title: '1-Tap WhatsApp Commerce & Catalog',
      subtitle: 'Conversational Product Storefront',
      description: 'High-speed product showcase with instant WhatsApp purchase order routing. Eliminates bloated e-commerce checkout forms, plugins, and third-party SaaS fees.',
      image: '/images/showcase_ecommerce_catalog.webp',
      badge: 'Interactive Storefront',
      url: null,
      domain: 'store.merqurie.cloud',
      tag: 'Conversational E-Store',
      metrics: [
        { label: 'Checkout', value: '1-Tap WhatsApp' },
        { label: 'Plugin Bloat', value: '0 Plugins' },
        { label: 'Conversion', value: '+42% Inquiries' },
      ],
      featured: false,
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
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 350);
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Satria Studio Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 shadow-sm text-slate-800">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span className="uppercase tracking-wider">SELECTED CLIENT CASE STUDIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Real Websites Engineered for{' '}
              <span className="font-serif italic font-normal text-rose-600">
                Real Businesses.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Don’t take our word for it. Browse through live production client platforms and test their mobile speed, design precision, and lead generation in real time.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft 
                  ? 'bg-white border-slate-300 text-slate-900 shadow-sm hover:border-slate-900 hover:scale-105' 
                  : 'bg-slate-100 border-slate-200 text-slate-400 opacity-50 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight 
                  ? 'bg-white border-slate-300 text-slate-900 shadow-sm hover:border-slate-900 hover:scale-105' 
                  : 'bg-slate-100 border-slate-200 text-slate-400 opacity-50 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
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
              className="w-[320px] sm:w-[460px] lg:w-[520px] shrink-0 snap-start bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container with Satria-Style Scale on Hover */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-103"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border border-slate-200">
                      {project.tag}
                    </span>
                    {project.url && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* 3 Metric Badges */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center mb-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="text-[10px] font-mono text-slate-500 block">{m.label}</span>
                        <strong className="text-xs sm:text-sm font-mono font-bold text-slate-900 mt-0.5">
                          {m.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-auto">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    <span>Visit {project.domain}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500">
                    Proprietary Architecture
                  </span>
                )}

                <button
                  onClick={onOpenPrototypeModal}
                  className="text-xs font-mono text-slate-700 hover:text-slate-900 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Scope similar build →</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
