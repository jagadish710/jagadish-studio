import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Smartphone,
  Laptop,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ 
  onOpenPrototypeModal, 
  onNavigateToWork, 
  isDark = true,
}) {
  const [activeShowcase, setActiveShowcase] = useState('website'); // 'website' | 'admin' | 'ecommerce'

  const showcases = {
    website: {
      headline: 'A Website Built to Win Trust, Leads, and Sales.',
      subtext: 'We build high-speed digital storefronts that communicate your value clearly, answer prospect questions, and turn visitors into instant WhatsApp inquiries.',
      title: 'High-Converting Business Storefront',
      speed: '0.24s Google PageSpeed',
      desc: 'Edge-rendered digital platform built to turn visitors into inquiries via direct WhatsApp routing.',
      image: '/images/showcase_business_website.jpg',
      badge: '99/100 Core Web Vitals',
      client: 'Live Production: upskskarate.com',
    },
    admin: {
      headline: '10-Second Text & Price Edits. Zero Agency Retainers.',
      subtext: 'Manage headlines, product pricing, and announcements directly from your phone in seconds. Never pay an agency a monthly retainer or wait days for basic edits.',
      title: 'Self-Serve Visual Admin Cockpit',
      speed: '10s Instant Edit Latency',
      desc: 'Update headlines, prices, announcements, and catalog items directly from your mobile phone with zero developer dependency.',
      image: '/images/showcase_admin_portal.jpg',
      badge: 'Zero Retainer Fees',
      client: 'Visual Content Management',
    },
    ecommerce: {
      headline: 'Instant WhatsApp Order Flow & Product Catalogs.',
      subtext: 'Direct one-tap WhatsApp purchase orders with dynamic spec configurator, sub-second checkout, and zero third-party plugin bloat.',
      title: 'Interactive E-Commerce & Product Catalog',
      speed: 'Sub-second Checkout Flow',
      desc: 'Instant one-tap WhatsApp order flow with dynamic spec configurator and inventory management.',
      image: '/images/showcase_ecommerce_catalog.jpg',
      badge: 'Sub-Second WhatsApp Flow',
      client: 'Direct WhatsApp Commerce',
    },
    industrial: {
      headline: 'Industrial Machinery & B2B Specification Portals.',
      subtext: 'Live heavy packaging machinery portal with instant RFQ lead routing and visual catalog management, proven at pmssolution.co.in.',
      title: 'Industrial Heavy Machinery & Equipment Portal',
      speed: '0.28s Multi-Channel Lead Routing',
      desc: 'Live high-volume packaging machinery portal with instant RFQ lead routing and visual catalog management.',
      image: '/images/showcase_custom_cloud_system.jpg',
      badge: 'Live at pmssolution.co.in',
      client: 'Live Production: pmssolution.co.in',
    },
  };

  const current = showcases[activeShowcase];

  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 flex flex-col justify-center items-center px-3 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Animated Motion Grid, Ambient Cyan/Blue Horizon Curve & Video Shimmer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[450px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none transition-opacity duration-700 ${
            isDark ? 'bg-cyan-950/20' : 'bg-blue-100/40'
          }`}
        />
        <div 
          className={`absolute -bottom-20 right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full blur-[120px] pointer-events-none ${
            isDark ? 'bg-blue-950/25' : 'bg-slate-200/50'
          }`}
        />
        {/* Cinematic SVG Curved Planet Horizon Arc (Exact curvature & glow from themaxgrowth) */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-40 sm:h-64 z-0">
          <svg 
            viewBox="0 0 1440 220" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="planetBeamGrad" x1="0%" y1="100%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="20%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <filter id="planetHalo" x="-20%" y="-50%" width="140%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur1" />
                <feGaussianBlur stdDeviation="20" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="planetCurvatureGlow" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.14" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Atmospheric Planet Curve Glow */}
            <path 
              d="M 0 220 Q 720 35 1440 220 L 1440 220 L 0 220 Z" 
              fill="url(#planetCurvatureGlow)" 
            />
            
            {/* Glowing Outer Horizon Arc */}
            <path 
              d="M 0 220 Q 720 35 1440 220" 
              stroke="url(#planetBeamGrad)" 
              strokeWidth="4" 
              filter="url(#planetHalo)"
            />
            {/* Razor Sharp Crisp Rim Light */}
            <path 
              d="M 0 220 Q 720 35 1440 220" 
              stroke="#ffffff" 
              strokeWidth="1.2" 
              strokeOpacity="0.8"
            />
          </svg>
        </div>

        {/* Subtle Sci-Fi Perspective Grid */}
        <div className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Top Velocity Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium mb-4 sm:mb-5 border transition-all ${
            isDark 
              ? 'bg-zinc-950 border-zinc-800 text-zinc-300 shadow-sm' 
              : 'bg-slate-100 border-slate-200 text-slate-800 shadow-xs'
          }`}
        >
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isDark ? 'bg-emerald-400' : 'bg-emerald-600'
            }`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              isDark ? 'bg-emerald-400' : 'bg-emerald-600'
            }`} />
          </span>
          <span className="tracking-widest uppercase">MERQURIE &bull; ENTERPRISE WEBSITE ARCHITECTURE</span>
        </motion.div>

        {/* Dynamic Multi-Scene Animated Headline (themaxgrowth style) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShowcase}
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.15] mb-3 sm:mb-4 max-w-3xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {current.headline}
            </h1>

            <p className={`max-w-xl text-xs sm:text-sm font-normal leading-relaxed mb-6 sm:mb-8 px-2 ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              {current.subtext}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons: Prominent Green WhatsApp & Blueprint */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md sm:max-w-none mb-6 sm:mb-8 px-2"
        >
          {/* WhatsApp Direct: PMS-Style High-Conversion Solid Green */}
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-500/25 active:scale-95 cursor-pointer transition-all group"
          >
            <WhatsAppIcon className="w-5 h-5 text-white fill-current group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp Directly</span>
          </a>

          {/* Consultation CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-5 sm:px-7 py-3.5 rounded-xl font-bold font-mono text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md group ${
              isDark
                ? 'bg-white hover:bg-zinc-200 text-zinc-950'
                : 'bg-slate-950 hover:bg-slate-800 text-white'
            }`}
          >
            <span>GET FREE WEBSITE BLUEPRINT</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* PMS-Style Quick Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-1.5 flex-wrap max-w-2xl mx-auto mb-6 sm:mb-8 px-2"
        >
          <span className={`text-[10px] font-mono uppercase tracking-wider mr-1 ${
            isDark ? 'text-zinc-500' : 'text-slate-400'
          }`}>
            Quick Inspect:
          </span>
          {[
            { id: 'website', label: 'Storefront (upsks)' },
            { id: 'admin', label: '10s Admin Portal' },
            { id: 'ecommerce', label: 'WhatsApp E-Store' },
            { id: 'industrial', label: 'Industrial ERP (pmssolution)' },
          ].map((pill) => {
            const isActive = activeShowcase === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => {
                  playCyberTone('click');
                  setActiveShowcase(pill.id);
                }}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono transition-all cursor-pointer active:scale-90 border ${
                  isActive
                    ? isDark
                      ? 'bg-white text-zinc-950 border-white font-bold shadow-sm'
                      : 'bg-slate-950 text-white border-slate-950 font-bold shadow-sm'
                    : isDark
                      ? 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-950 shadow-2xs'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </motion.div>

        {/* VISUALS FIRST: Interactive Device Workstation Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full rounded-2xl sm:rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-[#0E0E12] border-zinc-800 shadow-black/90' 
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Mockup Top Window Bar */}
          <div className={`px-4 py-3 border-b flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isDark ? 'bg-zinc-950/90 border-zinc-800' : 'bg-slate-100/90 border-slate-200'
          }`}>
            {/* Window Traffic Lights & Title */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className={`text-[11px] font-mono font-medium truncate ${
                isDark ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                merqurie.cloud &bull; {current.client}
              </span>
            </div>

            {/* Showcase Selector Tabs */}
            <div className={`flex items-center gap-1 p-1 rounded-xl border w-full sm:w-auto justify-center overflow-x-auto no-scrollbar ${
              isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200 shadow-2xs'
            }`}>
              {[
                { id: 'website', label: 'Storefront', icon: Laptop },
                { id: 'admin', label: 'Admin Portal', icon: Smartphone },
                { id: 'ecommerce', label: 'E-Store', icon: Zap },
                { id: 'industrial', label: 'Industrial ERP', icon: Cpu },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeShowcase === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      playCyberTone('click');
                      setActiveShowcase(tab.id);
                    }}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shrink-0 active:scale-95 ${
                      isActive
                        ? isDark
                          ? 'bg-zinc-800 text-white font-bold shadow-xs'
                          : 'bg-slate-950 text-white font-bold shadow-xs'
                        : isDark
                          ? 'text-zinc-400 hover:text-white'
                          : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'fill-current' : ''}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="relative group overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShowcase}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-black"
              >
                {/* Real High-Resolution Mockup Image */}
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />

                {/* Subtle Gradient Overlay */}
                <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${
                  isDark 
                    ? 'from-[#0E0E12] via-transparent to-transparent opacity-80' 
                    : 'from-white/60 via-transparent to-transparent'
                }`} />

                {/* Floating Metric Badges on Screen */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 pointer-events-none">
                  <div className={`p-3 rounded-xl backdrop-blur-xl border max-w-md text-left ${
                    isDark 
                      ? 'bg-black/85 border-zinc-700/80 text-white' 
                      : 'bg-white/95 border-slate-200 text-slate-900 shadow-lg'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                        {current.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold font-display leading-tight">{current.title}</h4>
                    <p className={`text-[11px] leading-relaxed mt-0.5 line-clamp-2 ${
                      isDark ? 'text-zinc-300' : 'text-slate-600'
                    }`}>
                      {current.desc}
                    </p>
                  </div>

                  {/* Interactive Action Button */}
                  <div className="pointer-events-auto">
                    <button
                      onClick={() => onNavigateToWork && onNavigateToWork()}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all active:scale-95 cursor-pointer border ${
                        isDark 
                          ? 'bg-zinc-900/90 hover:bg-zinc-800 text-white border-zinc-700' 
                          : 'bg-white/95 hover:bg-slate-50 text-slate-900 border-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                      <span>Test Interactive Demo</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

        {/* 4 Sleek Micro-Metric Badges: Clean, Non-Cramped 2x2 Grid on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-4xl text-left mt-6 sm:mt-8 px-1"
        >
          <div className={`p-3 sm:p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-0.5 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Speed</span>
            <span className={`text-xs sm:text-sm font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>&lt; 0.3s Load Time</span>
          </div>

          <div className={`p-3 sm:p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-0.5 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Retainer Fees</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-500">₹0 / Year Forever</span>
          </div>

          <div className={`p-3 sm:p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-0.5 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Admin Dashboard</span>
            <span className={`text-xs sm:text-sm font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>Self-Serve Phone</span>
          </div>

          <div className={`p-3 sm:p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-0.5 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Ownership</span>
            <span className={`text-xs sm:text-sm font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>100% Full Code IP</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
