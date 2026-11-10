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
import ThreeCenterpiece3D from './ThreeCenterpiece3D';

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
      mobileImage: '/images/pms_mobile_real.jpg',
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
      mobileImage: '/images/upsks_mobile_real.jpg',
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
      mobileImage: '/images/showcase_admin_portal.webp',
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
      mobileImage: '/images/showcase_ecommerce_catalog.webp',
      badge: '1-Tap WhatsApp Commerce',
      client: 'Direct WhatsApp Commerce',
      url: null,
    },
  };

  const current = showcases[activeShowcase];

  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8FAFC] text-slate-900">
      
      {/* Background Ambient Gradients & Glow Meshes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[800px] h-[340px] sm:h-[500px] rounded-full blur-[140px] bg-rose-400/10" />
        <div className="absolute -bottom-20 right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full blur-[140px] bg-cyan-400/10" />
        <div className="absolute top-1/3 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[140px] bg-purple-400/10" />
        
        {/* Subtle architectural dot grid */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* 2-Column Hero: Left Headline/Copy + Right 3D Interactive Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Top Executive Engineering Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-4 sm:mb-5 bg-white border border-slate-200/90 text-slate-800 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span className="tracking-wider uppercase font-semibold">MERQURIE STUDIO • EX-AMAZON &amp; TURING ENGINEERING</span>
            </div>

            {/* Dynamic Animated Headline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShowcase}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center lg:items-start"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-3 sm:mb-4 font-display">
                  {current.headlinePrefix}{' '}
                  <span className="font-serif italic font-normal text-rose-600">
                    {current.headlineAccent}
                  </span>{' '}
                  <span className="block mt-1 sm:mt-1.5">{current.headlineSuffix}</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mb-6">
                  {current.subtext}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Live Case Selector Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {[
                { id: 'pms', label: '🏥 PMS Healthcare' },
                { id: 'upsks', label: '🥋 UPSKS Karate' },
                { id: 'admin', label: '📱 Mobile Admin' },
                { id: 'ecommerce', label: '⚡ 1-Tap Orders' },
              ].map((pill) => {
                const isActive = activeShowcase === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveShowcase(pill.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-rose-50 text-rose-700 border-2 border-rose-500 font-bold shadow-sm scale-105'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-xs'
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenPrototypeModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-xl shadow-rose-500/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>REQUEST FREE SAMPLE PREVIEW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 border border-emerald-400/30"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat with Jagadish</span>
              </a>
            </div>

            {/* Micro Value Guarantee Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Code Ownership</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>Sub-1.0s Speed Guaranteed</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>₹0 Recurring Retainer</span>
              </div>
            </div>

          </div>

          {/* Right 3D Emblem Centerpiece (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ThreeCenterpiece3D />
          </div>

        </div>

        {/* Interactive Floating Modern Device Workstation Frame */}
        <div className="w-full relative mt-2 group">
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-rose-400/15 via-cyan-400/15 to-purple-400/15 rounded-3xl blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-2xl shadow-slate-300/60 backdrop-blur-xl">
            
            {/* Top Modern Browser Chrome Bar */}
            <div className="px-3 sm:px-4 py-2.5 bg-slate-50/90 rounded-t-xl sm:rounded-t-2xl border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                </div>
                
                {/* Search Address Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>https://{current.url ? current.url.replace('https://', '') : 'merqurie.cloud'}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full font-semibold">
                  {current.badge}
                </span>
                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-rose-700 hover:text-rose-900 flex items-center gap-1 bg-rose-50 border border-rose-300 px-2.5 py-0.5 rounded-full font-semibold transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Showcase Preview Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-b-xl sm:rounded-b-2xl bg-slate-900 overflow-hidden group/canvas">
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
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </AnimatePresence>

              {/* Top Floating Edge Speed Chip */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 hidden sm:block">
                <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-white/95 text-emerald-700 border border-emerald-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>⚡ {current.speed}</span>
                </span>
              </div>

              {/* Overlapping Floating Smartphone Mockup in Foreground (Authentic 1:1 mobile layout!) */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-3 sm:right-6 w-[110px] sm:w-[145px] md:w-[160px] aspect-[9/18] rounded-[1.4rem] sm:rounded-[1.7rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ring-2 ring-slate-800 z-20 group-hover:-translate-y-2 group-hover:scale-103 transition-all duration-500 ease-out pointer-events-none">
                <div className="w-full h-full rounded-[1.1rem] sm:rounded-[1.35rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                  <img
                    src={current.mobileImage || current.image}
                    alt={`${current.title} Mobile View`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 inset-x-2 z-20">
                    <div className="py-1 px-1.5 rounded-full bg-[#25D366] text-white text-[7px] font-mono font-bold flex items-center justify-center gap-1 shadow-md">
                      <span>Direct WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Modern Floating Glass Details Card */}
              <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 max-w-[calc(100%-130px)] sm:max-w-[calc(100%-180px)] p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left z-10">
                <div>
                  <h2 className="text-xs sm:text-sm md:text-base font-bold font-display text-slate-950 tracking-tight truncate">
                    {current.title}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-slate-600 line-clamp-1 mt-0.5">
                    {current.desc}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
