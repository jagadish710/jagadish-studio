import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Smartphone,
  Cpu,
  Sparkles,
  Smile,
  Compass,
  ShoppingBag,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import TalkingTomLuffyMascot from './TalkingTomLuffyMascot';

// three.js + canvas-confetti only download when someone opens the 3D mode,
// which keeps ~600 kB of JavaScript off the first mobile paint.
const ThreeCenterpiece3D = lazy(() => import('./ThreeCenterpiece3D'));
import { trackSampleRequest, trackLeadClick } from '../lib/analytics';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function Hero({ onOpenPrototypeModal, onNavigateToWork, onNavigateToSolutions }) {
  const [activeVisual, setActiveVisual] = useState('mascot'); // 'mascot' | '3d'
  const [activeShowcase, setActiveShowcase] = useState('pms');

  const showcases = {
    pms: {
      headlinePrefix: 'Your Competitors Have Slow Sites.',
      headlineAccent: 'We Engineer Fast, Lean Sites.',
      subtext: 'Every extra second of mobile load time costs you buyers. For PMS Solution Healthcare we shipped a lean, speed-budgeted build with 1-tap WhatsApp quotes for ICU beds — and zero monthly retainers.',
      title: 'PMS Solution | Hospital Medical Equipment Sales & Rentals',
      speed: 'Speed-Budgeted Build',
      desc: 'Live Chennai healthcare portal managing ICU beds, oxygen concentrators, and hospital setup inquiries with instant WhatsApp lead routing.',
      image: '/images/pms_real.webp',
      mobileImage: '/images/pms_mobile_real.webp',
      badge: 'Live Production: pmssolution.co.in',
      client: 'Healthcare & Medical Equipment • Chennai',
      url: 'https://pmssolution.co.in',
    },
    upsks: {
      headlinePrefix: 'Martial Arts & Student Academy.',
      headlineAccent: '1,000+ Enrolled Students.',
      subtext: 'From class timetables to international tournament rosters, we built UPSKS Karate to eliminate administrative chaos, rank #1 on Google, and route parents straight to chief instructors on a lean, fast build.',
      title: 'Unique Power Shito-Ryu Karate School (UPSKS)',
      speed: 'Speed-Budgeted Build',
      desc: 'Live sports academy platform connecting students across India to international Japanese martial arts heritage, belt rosters, and direct parent WhatsApp communication.',
      image: '/images/upsks_real.webp',
      mobileImage: '/images/upsks_mobile_real.jpg',
      badge: 'Live Production: upskskarate.com',
      client: 'Martial Arts & Student Platform • India',
      url: 'https://upskskarate.com',
    },
    admin: {
      headlinePrefix: '10-Second Phone Admin Cockpit.',
      headlineAccent: 'Zero Developer Delays.',
      subtext: 'Never wait 5 days for a web developer to change a price or text. Log into your phone admin cockpit, edit any announcement in 10 seconds, and own 100% of your platform with zero monthly retainer contracts.',
      title: 'Self-Serve Mobile Visual Admin Cockpit',
      speed: '10s Edit Latency',
      desc: 'Update headlines, product prices, announcements, and catalog photos directly from your phone with zero developer dependency.',
      image: '/images/cockpit_cms.webp',
      mobileImage: '/images/cockpit_cms.webp',
      badge: 'Zero Ongoing Retainers',
      client: 'Proprietary Visual Content Management',
      url: null,
    },
    ecommerce: {
      headlinePrefix: 'Instant 1-Tap WhatsApp Store.',
      headlineAccent: 'Zero Cart Abandonment.',
      subtext: 'Sell products directly on mobile with an interactive visual catalog. Customers tap 1 button on WhatsApp to order or request quotes—zero confusing checkouts, zero monthly Shopify fees.',
      title: 'Interactive E-Commerce & Product Catalog',
      speed: 'One-Tap Checkout',
      desc: 'Instant one-tap WhatsApp order flow with dynamic spec configurator and inventory management.',
      image: '/images/storefront_catalog.webp',
      mobileImage: '/images/storefront_catalog.webp',
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-4 sm:mb-5 bg-white border border-emerald-400/50 text-emerald-800 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase font-bold text-[11px] whitespace-nowrap">FREE SAMPLE IN 24 HOURS • PAY ZERO TODAY</span>
            </div>

            {/* Dynamic Animated Headline - Fully Responsive to Chosen Showcase! */}
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
                  <span className="font-serif italic font-normal text-rose-600 block sm:inline">
                    {current.headlineAccent}
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mb-6">
                  {current.subtext}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Live Case Selector Chips - STRICTLY NO EMOJIS, SLEEK SVG ICONS */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {[
                { id: 'pms', label: 'PMS Healthcare', icon: ShieldCheck, color: 'text-teal-600' },
                { id: 'upsks', label: 'UPSKS Karate', icon: Zap, color: 'text-rose-600' },
                { id: 'admin', label: 'Mobile Admin', icon: Smartphone, color: 'text-indigo-600' },
                { id: 'ecommerce', label: '1-Tap Orders', icon: ShoppingBag, color: 'text-amber-600' },
              ].map((pill) => {
                const isActive = activeShowcase === pill.id;
                const Icon = pill.icon;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveShowcase(pill.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-rose-50 text-rose-700 border-2 border-rose-500 font-bold shadow-sm scale-105'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-xs'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${pill.color} shrink-0`} />
                    <span>{pill.label}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA Buttons - 100% Side-by-Side on Mobile */}
            <div className="flex flex-row items-center gap-2 sm:gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  trackSampleRequest('Hero');
                  onOpenPrototypeModal();
                }}
                className="flex-1 sm:flex-initial px-3 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold text-[11px] sm:text-sm tracking-wide bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-xl shadow-rose-500/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                <span>Free Sample Preview</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLeadClick('Hero', 'WhatsApp')}
                className="flex-1 sm:flex-initial px-3 sm:px-5 py-3 sm:py-3.5 rounded-2xl font-semibold text-[11px] sm:text-sm bg-emerald-700 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 border border-emerald-400/30 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* 4 Hard ROI Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 w-full border-t border-slate-200/80 pt-5">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-center lg:text-left">
                <div className="font-display text-xl sm:text-2xl font-bold text-cyan-600">≈0.5 MB</div>
                <div className="text-[11px] text-slate-500 font-semibold font-mono">Mobile Page Weight</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-center lg:text-left">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-600">Zero/mo</div>
                <div className="text-[11px] text-slate-500 font-semibold font-mono">Monthly Retainer</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-center lg:text-left">
                <div className="font-display text-xl sm:text-2xl font-bold text-emerald-600">2–3 Days</div>
                <div className="text-[11px] text-slate-500 font-semibold font-mono">Launch Speed</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-center lg:text-left">
                <div className="font-display text-xl sm:text-2xl font-bold text-rose-600">100%</div>
                <div className="text-[11px] text-slate-500 font-semibold font-mono">Code Ownership</div>
              </div>
            </div>

            {/* Mobile-First Engineering Guarantee + the one speed number we can prove */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1.5 text-[10px] sm:text-[11px] font-mono font-semibold text-slate-600">
              <span className="font-bold uppercase tracking-wider text-slate-400">Mobile-first</span>
              {[
                { icon: Smartphone, label: 'Built at 360px first' },
                { icon: Zap, label: 'Thumb-reach CTAs' },
                { icon: ShieldCheck, label: '48px tap targets' },
              ].map((item, i) => (
                <span key={item.label} className="inline-flex items-center gap-2.5">
                  {i > 0 && <span className="text-slate-300" aria-hidden="true">•</span>}
                  <span className="inline-flex items-center gap-1.5">
                    <item.icon className="w-3 h-3 text-emerald-600 shrink-0" />
                    {item.label}
                  </span>
                </span>
              ))}
            </div>

            <p className="mt-3 max-w-lg text-[10px] sm:text-[11px] font-mono text-slate-500 text-center lg:text-left leading-relaxed">
              Measured, not promised: this site ships ≈575 KB on mobile — no page builders, no plugin bloat.
            </p>

          </div>

          {/* Right Column: Interactive Mascot vs 3D Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Visual Mode Switcher - ZERO EMOJIS, SLEEK SVG ICONS */}
            <div className="flex items-center gap-1.5 mb-3 bg-white border border-slate-200 p-1 rounded-2xl shadow-xs">
              <button
                onClick={() => setActiveVisual('mascot')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeVisual === 'mascot'
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-treasure-400" />
                <span>Captain</span>
              </button>
              <button
                onClick={() => setActiveVisual('3d')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeVisual === '3d'
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>3D Liquid Gold</span>
              </button>
            </div>

            {activeVisual === 'mascot' ? (
              <TalkingTomLuffyMascot onOpenPrototypeModal={onOpenPrototypeModal} />
            ) : (
              <Suspense
                fallback={
                  <div className="w-full max-w-[340px] aspect-square rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-[11px] font-mono text-slate-400">
                    Loading 3D centrepiece...
                  </div>
                }
              >
                <ThreeCenterpiece3D />
              </Suspense>
            )}
          </div>

        </div>

        {/* Interactive Floating Modern Device Workstation Frame */}
        <div className="w-full relative mt-3 group">
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
                  <span>https://{current.url ? current.url.replace('https://', '') : 'merqurie.com'}</span>
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

              {/* Top Floating Edge Speed Chip - ZERO EMOJIS */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 hidden sm:block">
                <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-white/95 text-emerald-700 border border-emerald-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                  <span>{current.speed}</span>
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
                    <div className="py-1 px-1.5 rounded-full bg-[#25D366] text-emerald-950 text-[7px] font-mono font-bold flex items-center justify-center gap-1 shadow-md">
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
