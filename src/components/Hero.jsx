import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Layers,
  Sparkles,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Search,
} from 'lucide-react';

export default function Hero({ onOpenPrototypeModal, onNavigateToWork, onNavigateToSolutions, isDark }) {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Simple & Clear Value Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-6 backdrop-blur-xl border ${
            isDark
              ? 'bg-[#181818] border-luxury-gold/40 text-luxury-gold shadow-gold-glow'
              : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
          }`}
        >
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
            }`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
            }`} />
          </span>
          <span>AFFORDABLE LUXURY WEBSITES • ZERO MAINTENANCE CHARGES • ONE-TIME COST</span>
        </motion.div>

        {/* Main Simple Headline (High SEO Impact) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display leading-[1.08] mb-6"
        >
          <span className={isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'}>
            PREMIUM WEBSITES &amp; SOFTWARE
          </span>{' '}
          <br className="hidden sm:inline" />
          <span className="text-gradient-main">
            FOR GROWING BUSINESSES
          </span>
        </motion.h1>

        {/* Clear Subtitle - Simple Plain English */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`max-w-2xl text-base sm:text-xl font-normal leading-relaxed mb-8 ${
            isDark ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          Stop paying monthly maintenance fees for simple text changes. We build fast, luxury, and affordable websites with an easy admin panel, zero yearly maintenance charges, and 100% full ownership.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
        >
          {/* Enquire CTA Button */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            onMouseEnter={() => playCyberTone('hover')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold font-mono text-sm tracking-wider flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Direct WhatsApp Callout */}
          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20looking%20for%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-mono text-sm font-bold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: +91 73586 18789</span>
          </a>
        </motion.div>

        {/* 4 Core Value Pillars (High Contrast in both Dark and Light mode) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full text-left"
        >
          <div className={`p-5 rounded-2xl border transition-all ${
            isDark ? 'bg-[#18181A] border-white/10 hover:border-luxury-gold/40' : 'bg-white border-black/10 hover:border-fresh-emerald/40 shadow-sm'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Zap className="w-4 h-4" />
            </div>
            <div className={`text-base sm:text-lg font-mono font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              ₹0 Maintenance
            </div>
            <div className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Zero monthly or yearly maintenance fees. One-time investment.
            </div>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${
            isDark ? 'bg-[#18181A] border-white/10 hover:border-luxury-gold/40' : 'bg-white border-black/10 hover:border-fresh-emerald/40 shadow-sm'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Layers className="w-4 h-4" />
            </div>
            <div className={`text-base sm:text-lg font-mono font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Easy Admin Panel
            </div>
            <div className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Change text, images, and prices yourself in 10 seconds.
            </div>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${
            isDark ? 'bg-[#18181A] border-white/10 hover:border-luxury-gold/40' : 'bg-white border-black/10 hover:border-fresh-emerald/40 shadow-sm'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className={`text-base sm:text-lg font-mono font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              100% Ownership
            </div>
            <div className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              You own your source code, domain name, and files forever.
            </div>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${
            isDark ? 'bg-[#18181A] border-white/10 hover:border-luxury-gold/40' : 'bg-white border-black/10 hover:border-fresh-emerald/40 shadow-sm'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Search className="w-4 h-4" />
            </div>
            <div className={`text-base sm:text-lg font-mono font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Top Google SEO
            </div>
            <div className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Fast sub-second speed so your business ranks top on Google.
            </div>
          </div>
        </motion.div>

        {/* 100+ Projects Callout Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`mt-8 p-4 rounded-2xl text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-3 w-full border ${
            isDark 
              ? 'bg-[#181818] border-[#8B5CF6]/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]' 
              : 'bg-[#F5F2FF] border-[#673DE6]/25 text-[#2F1C6A]'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 text-left">
            <span className="w-2.5 h-2.5 rounded-full animate-ping bg-[#8B5CF6]" />
            <span className="font-bold text-emerald-400">WORKED ON 100+ PROJECTS:</span>
            <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>Delivered with excellence. Featured:</span>
            <span className="font-bold px-1.5 py-0.5 rounded bg-black/40 text-emerald-300">upskskarate.com</span>
            <span>&amp;</span>
            <span className="font-bold px-1.5 py-0.5 rounded bg-black/40 text-amber-300">pmssolution</span>
            <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>+ custom business softwares.</span>
          </div>
          <button
            onClick={() => {
              playCyberTone('click');
              onNavigateToWork();
            }}
            className={`flex items-center gap-1.5 underline underline-offset-4 font-bold cursor-pointer shrink-0 ${
              isDark ? 'text-luxury-gold hover:text-white' : 'text-[#673DE6] hover:text-[#5327DE]'
            }`}
          >
            <span>View Projects</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
