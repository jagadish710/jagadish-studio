import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Smartphone,
  Cpu,
  Sparkles,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function Hero({ onOpenPrototypeModal, onNavigateToWork, onNavigateToSolutions }) {
  const [activeShowcase, setActiveShowcase] = useState('pms');

  const showcases = {
    pms: {
      headlinePrefix: 'Fast Sites.',
      headlineAccent: 'Mirror-Finish',
      headlineSuffix: 'Zero Retainer.',
      subtext: 'Mobile-first platforms engineered to turn visitors into enquiries. Tested live on hospital equipment sales and rentals across Chennai.',
      title: 'PMS Solution | Hospital Medical Equipment Sales & Rentals',
      speed: '0.24s Edge Load Speed',
      desc: 'Live Chennai healthcare portal managing ICU beds, oxygen concentrators, and hospital setup inquiries with instant WhatsApp lead routing.',
      image: '/images/pms_real.webp',
      badge: 'Live Production: pmssolution.co.in',
      client: 'Healthcare & Medical Equipment • Chennai',
      url: 'https://pmssolution.co.in',
    },
    upsks: {
      headlinePrefix: 'Immediate',
      headlineAccent: 'Authority.',
      headlineSuffix: 'Zero Admin Debt.',
      subtext: 'From student registries to international tournament rosters, we build digital homes that eliminate chaos and accelerate admissions.',
      title: 'Unique Power Shito-Ryu Karate School (UPSKS)',
      speed: '0.22s Edge Load Speed',
      desc: 'Live sports academy platform connecting students across India to international Japanese martial arts heritage, belt rosters, and direct parent WhatsApp communication.',
      image: '/images/upsks_real.webp',
      badge: 'Live Production: upskskarate.com',
      client: 'Martial Arts & Student Platform • India',
      url: 'https://upskskarate.com',
    },
    admin: {
      headlinePrefix: '10-Second',
      headlineAccent: 'Phone Edits.',
      headlineSuffix: 'Zero Agency Delays.',
      subtext: 'Update headlines, product prices, and announcements from your smartphone in seconds. You own the keys with zero developer dependency.',
      title: 'Self-Serve Mobile Visual Admin Cockpit',
      speed: '10s Edit Latency',
      desc: 'Update headlines, product prices, announcements, and catalog photos directly from your phone with zero developer dependency.',
      image: '/images/showcase_admin_portal.webp',
      badge: '₹0 Ongoing Retainers',
      client: 'Proprietary Visual Content Management',
      url: null,
    },
    ecommerce: {
      headlinePrefix: '1-Tap Orders.',
      headlineAccent: 'Instant Flow.',
      headlineSuffix: 'Zero Plugin Bloat.',
      subtext: 'Direct one-tap WhatsApp purchase orders with dynamic spec configurator, sub-second checkout, and zero third-party plugin bloat.',
      title: 'Interactive E-Commerce & Product Catalog',
      speed: 'Sub-second Checkout Flow',
      desc: 'Instant one-tap WhatsApp order flow with dynamic spec configurator and inventory management.',
      image: '/images/showcase_ecommerce_catalog.webp',
      badge: '1-Tap WhatsApp Commerce',
      client: 'Direct WhatsApp Commerce',
      url: null,
    },
  };

  const current = showcases[activeShowcase];

  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAFAFC]">
      
      {/* Background Ambient Gradients & Architectural Perspective Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Crimson & Titanium Light Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[450px] rounded-full blur-[120px] pointer-events-none bg-rose-500/[0.04]" />
        <div className="absolute -bottom-20 right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full blur-[140px] pointer-events-none bg-slate-300/40" />
        
        {/* Subtle architectural dot grid */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Top Executive Engineering Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-4 sm:mb-5 bg-white/95 border border-slate-200/90 text-slate-700 shadow-xs backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
          </span>
          <span className="tracking-wider uppercase">MERQURIE STUDIO • CHENNAI • FORMER AMAZON &amp; TURING ENGINEERING</span>
        </div>

        {/* Dynamic Multi-Scene Animated Headline with Editorial Serif Italic & Mercurial Crimson */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShowcase}
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-3 sm:mb-4 max-w-4xl">
              {current.headlinePrefix}{' '}
              <span className="font-serif italic font-normal text-rose-600">
                {current.headlineAccent}
              </span>{' '}
              <span className="crimson-text">
                {current.headlineSuffix}
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base font-normal text-slate-600 leading-relaxed mb-6 sm:mb-8 px-2">
              {current.subtext}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Primary Action Buttons: Mercurial Crimson & High-Contrast WhatsApp */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md sm:max-w-none mb-4 sm:mb-6 px-2">
          {/* Mercurial Crimson Primary Button */}
          <button
            onClick={onOpenPrototypeModal}
            className="btn-crimson-primary px-7 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wide uppercase font-mono cursor-pointer shadow-lg shadow-rose-600/20 active:scale-98"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          {/* WhatsApp Direct Action (WCAG AAA Contrast Compliant) */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md shadow-emerald-500/15 active:scale-98 cursor-pointer transition-all group"
          >
            <WhatsAppIcon className="w-5 h-5 text-slate-950 fill-current group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Quiet Proof Line */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-mono text-slate-500 mb-8 px-2">
          <span>⚡ &lt; 0.25s Edge Speed</span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-emerald-700 font-semibold">₹0 Monthly Retainer Debt</span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span>100% Code &amp; Domain Sovereignty</span>
        </div>

        {/* Quick Filter Selector Tabs (themaxgrowth / Satria style) */}
        <div className="flex items-center justify-center gap-2 flex-wrap max-w-2xl mx-auto mb-8 px-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
            Tap to inspect:
          </span>
          {[
            { id: 'pms', label: 'Healthcare Portal (pmssolution)' },
            { id: 'upsks', label: 'Sports Academy (upskskarate)' },
            { id: 'admin', label: '10s Phone Admin Cockpit' },
            { id: 'ecommerce', label: 'WhatsApp E-Store' },
          ].map((pill) => {
            const isActive = activeShowcase === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setActiveShowcase(pill.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer active:scale-95 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:text-slate-900 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Floating Modern Device Workstation Frame with Ambient Aura */}
        <div className="w-full relative mt-2 group">
          {/* Soft multi-color chromatic ambient radiance behind frame */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-rose-400/15 via-teal-400/15 to-indigo-400/15 rounded-3xl blur-2xl pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity duration-700" />

          <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-2 sm:p-3 shadow-2xl shadow-slate-900/10 hover:shadow-3xl transition-all duration-500">
            
            {/* Top Modern Browser Chrome Bar */}
            <div className="px-3 sm:px-4 py-2.5 bg-slate-50/90 rounded-t-xl sm:rounded-t-2xl border-b border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                </div>
                
                {/* Search Address Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>https://{current.url ? current.url.replace('https://', '') : 'merqurie.cloud'}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                  {current.badge}
                </span>
                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-rose-600 hover:text-rose-700 flex items-center gap-1 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full font-medium transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Showcase Preview Display with Floating Glass Details */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-b-xl sm:rounded-b-2xl bg-slate-100 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  fetchPriority="high"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                />
              </AnimatePresence>

              {/* Bottom Modern Floating Glass Details Card */}
              <div className="absolute inset-x-3 sm:inset-x-5 bottom-3 sm:bottom-5 p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg shadow-slate-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                <div>
                  <h2 className="text-sm sm:text-base font-bold font-display text-slate-900 tracking-tight">
                    {current.title}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-1 mt-0.5">
                    {current.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-lg font-semibold shadow-2xs">
                    ⚡ {current.speed}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Bottom Metric Highlights with Colorful Gradients & Hover Lift */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full mt-6 sm:mt-8">
          {[
            { 
              label: 'Mobile Speed', 
              value: '< 0.25s', 
              sub: 'Global Edge CDN',
              bg: 'bg-gradient-to-br from-teal-50/90 via-white to-sky-50/50',
              border: 'border-teal-200/80 hover:border-teal-400',
              accent: 'text-teal-700',
            },
            { 
              label: 'Lead Capture', 
              value: '1-Tap Flow', 
              sub: 'WhatsApp Inquiries',
              bg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50',
              border: 'border-emerald-200/80 hover:border-emerald-400',
              accent: 'text-emerald-700',
            },
            { 
              label: 'Admin Control', 
              value: '10 Seconds', 
              sub: 'From Mobile Phone',
              bg: 'bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/50',
              border: 'border-indigo-200/80 hover:border-indigo-400',
              accent: 'text-indigo-700',
            },
            { 
              label: 'Agency Retainer', 
              value: '₹0 / Year', 
              sub: 'Zero Retainer Fees',
              bg: 'bg-gradient-to-br from-rose-50/90 via-white to-amber-50/50',
              border: 'border-rose-200/80 hover:border-rose-400',
              accent: 'text-rose-700',
            },
          ].map((m, i) => (
            <div 
              key={i} 
              className={`p-3.5 sm:p-4 rounded-2xl ${m.bg} border ${m.border} shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left cursor-default active:scale-95`}
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">{m.label}</span>
              <span className="text-base sm:text-lg font-bold text-slate-900 font-display block mt-0.5">{m.value}</span>
              <span className={`text-[10px] font-mono font-semibold block mt-0.5 ${m.accent}`}>{m.sub}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
