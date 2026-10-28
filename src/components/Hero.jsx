import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export default function Hero({ 
  onOpenPrototypeModal, 
  onNavigateToWork, 
  isDark = true,
}) {
  return (
    <section className="relative pt-32 sm:pt-36 pb-12 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Ambient Entrance Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isDark ? 0.15 : 0.08, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-zinc-400' : 'bg-slate-400'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Sleek Monochrome Badge (No Tamil text, pure institutional velocity) */}
        <motion.div
          initial={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-6 border transition-colors ${
            isDark 
              ? 'bg-zinc-950 border-zinc-800 text-zinc-300' 
              : 'bg-slate-100 border-slate-200 text-slate-800 shadow-2xs'
          }`}
        >
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
              isDark ? 'bg-white' : 'bg-slate-900'
            }`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              isDark ? 'bg-zinc-100' : 'bg-slate-900'
            }`} />
          </span>
          <span className="tracking-widest">MERQURIE &bull; SYSTEMS ARCHITECTURE &bull; MOVE AT THE SPEED OF MERCURY</span>
        </motion.div>

        {/* Clean, Restrained Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display leading-[1.12] mb-5 max-w-3xl ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}
        >
          Minimalist Websites.{' '}
          <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>
            Zero Maintenance Debt.
          </span>
        </motion.h1>

        {/* Concise Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-xl text-xs sm:text-sm font-normal leading-relaxed mb-8 ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}
        >
          We engineer high-speed digital platforms, self-serve client admin cockpits, and e-commerce systems with zero recurring agency retainer fees.
        </motion.p>

        {/* Clean Action Buttons (WhatsApp with icon only, no numbers in buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10"
        >
          {/* Consultation CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-sm ${
              isDark
                ? 'bg-white hover:bg-zinc-200 text-zinc-950'
                : 'bg-slate-950 hover:bg-slate-800 text-white'
            }`}
          >
            <span>REQUEST ARCHITECTURE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 border transition-all hover:scale-102 active:scale-98 cursor-pointer ${
              isDark
                ? 'bg-zinc-950 hover:bg-zinc-900 text-white border-zinc-800'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-500 fill-current" />
            <span>WhatsApp</span>
          </a>
        </motion.div>

        {/* 4 Sleek Micro-Metric Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl text-left"
        >
          <div className={`p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Performance</span>
            <span className={`text-sm font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>&lt; 0.3s Load</span>
          </div>

          <div className={`p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Retainer Fees</span>
            <span className="text-sm font-bold text-emerald-500">₹0 / Year</span>
          </div>

          <div className={`p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Admin Panel</span>
            <span className={`text-sm font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>Self-Serve</span>
          </div>

          <div className={`p-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'bg-zinc-950/80 border-zinc-800/80' 
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <span className={`text-[10px] font-mono uppercase block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-slate-400'
            }`}>Code Sovereignty</span>
            <span className={`text-sm font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>100% Owned</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
