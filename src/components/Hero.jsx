import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function Hero({ onOpenPrototypeModal, onNavigateToWork, onNavigateToSolutions, isDark }) {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Enterprise Pedigree Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono mb-8 backdrop-blur-xl border ${
            isDark
              ? 'bg-[#181818]/90 border-luxury-gold/40 text-luxury-gold shadow-gold-glow'
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
          <span className="font-semibold">PEDIGREE:</span>
          <span>EX-AMAZON ENGINEER &bull; PROPRIETARY NEXT-GEN AI ARCHITECTURES</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display leading-[1.06] mb-6"
        >
          WE DON&apos;T BUILD WEBSITES.{' '}
          <br className="hidden sm:inline" />
          <span className="text-gradient-main">
            WE ARCHITECT DIGITAL ENGINES.
          </span>
        </motion.h1>

        {/* Core Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-2xl text-base sm:text-xl font-normal leading-relaxed mb-10 ${
            isDark ? 'text-luxury-platinum/85' : 'text-slate-600'
          }`}
        >
          Tired of agencies charging monthly maintenance for 5-minute text changes?
          We deliver <strong className={isDark ? 'text-white' : 'text-fresh-forest'}>self-operating digital systems</strong> with a custom admin portal, zero maintenance fees, and embedded autonomous AI workflows.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            onMouseEnter={() => playCyberTone('hover')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold font-mono text-sm tracking-wider flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>CLAIM 48H LIVE STAGING PROTOTYPE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              playCyberTone('hover');
              onNavigateToSolutions();
            }}
            className={`w-full sm:w-auto px-7 py-4 rounded-xl border font-mono text-sm font-medium flex items-center justify-center gap-2.5 backdrop-blur-md transition-all cursor-pointer ${
              isDark
                ? 'bg-[#181818]/90 hover:bg-[#222222] border-white/10 hover:border-luxury-gold/40 text-slate-200'
                : 'bg-white hover:bg-slate-50 border-black/10 hover:border-fresh-emerald/40 text-fresh-forest shadow-sm'
            }`}
          >
            <Cpu className={`w-4 h-4 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`} />
            <span>EXPLORE SOLUTIONS MATRIX</span>
          </button>
        </motion.div>

        {/* 4 Pillars of Radical Client Sovereignty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full text-left"
        >
          <div className="p-5 rounded-2xl theme-card">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-lg font-mono font-bold tracking-tight">$0 / Month</div>
            <div className="text-xs opacity-70 mt-0.5">Zero Maintenance Retainers</div>
          </div>

          <div className="p-5 rounded-2xl theme-card">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Database className="w-4 h-4" />
            </div>
            <div className="text-lg font-mono font-bold tracking-tight">Full Control</div>
            <div className="text-xs opacity-70 mt-0.5">Self-Serve Visual Admin Cockpit</div>
          </div>

          <div className="p-5 rounded-2xl theme-card">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-lg font-mono font-bold tracking-tight">100% Owned</div>
            <div className="text-xs opacity-70 mt-0.5">Source Code, Assets &amp; DNS Autonomy</div>
          </div>

          <div className="p-5 rounded-2xl theme-card">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-lg font-mono font-bold tracking-tight">Next-Gen AI</div>
            <div className="text-xs opacity-70 mt-0.5">Autonomous Lead Qualification</div>
          </div>
        </motion.div>

        {/* Live Staging & 100+ Projects Track Record Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-8 p-3.5 rounded-2xl text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-3 w-full border ${
            isDark 
              ? 'bg-[#181818]/90 border-[#673DE6]/40 text-luxury-platinum shadow-[0_0_20px_rgba(103,61,230,0.2)]' 
              : 'bg-[#F5F2FF] border-[#673DE6]/25 text-[#2F1C6A]'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 text-left">
            <span className="w-2.5 h-2.5 rounded-full animate-ping bg-[#8B5CF6]" />
            <span className="font-bold">PROVEN EXCELLENCE:</span>
            <span>100+ Systems &amp; Softwares Launched &bull; Featured:</span>
            <span className="font-bold px-1.5 py-0.5 rounded bg-black/20 dark:bg-white/10 text-emerald-400">upskskarate.com</span>
            <span>&amp;</span>
            <span className="font-bold px-1.5 py-0.5 rounded bg-black/20 dark:bg-white/10 text-amber-300">pmssolution</span>
          </div>
          <button
            onClick={() => {
              playCyberTone('click');
              onNavigateToWork();
            }}
            className={`flex items-center gap-1.5 underline underline-offset-4 font-semibold cursor-pointer shrink-0 ${
              isDark ? 'text-luxury-gold hover:text-white' : 'text-[#673DE6] hover:text-[#5327DE]'
            }`}
          >
            <span>View Deployments</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
