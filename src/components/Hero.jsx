import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Layers,
  MessageCircle,
  ShieldCheck,
  Search,
} from 'lucide-react';

export default function Hero({ 
  onOpenPrototypeModal, 
  onNavigateToWork, 
}) {
  return (
    <section className="relative pt-32 pb-8 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Sleek Monochrome Badge: Mercury in Tamil (புதன்) - Clean & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-6 bg-zinc-950 border border-zinc-800 text-zinc-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-white" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-100" />
          </span>
          <span className="tracking-widest">MERQURIE &bull; புதன் &bull; MOVE AT THE SPEED OF MERCURY</span>
        </motion.div>

        {/* Clean, Restrained Headline (No Giant Overpowering Fonts) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display leading-[1.12] mb-5 text-white max-w-3xl"
        >
          Minimalist Websites.{' '}
          <span className="text-zinc-400">Zero Maintenance Debt.</span>
        </motion.h1>

        {/* Concise Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-xl text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed mb-8"
        >
          We engineer high-speed digital platforms, self-serve client admin cockpits, and e-commerce systems with zero recurring agency retainer fees.
        </motion.p>

        {/* Clean Action Buttons (WhatsApp with icon only, no numbers in buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10"
        >
          {/* Consultation CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 transition-all cursor-pointer shadow-sm"
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
            className="w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 text-white border border-zinc-800 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
            <span>WhatsApp</span>
          </a>
        </motion.div>

        {/* 4 Sleek Micro-Metric Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl text-left"
        >
          <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Performance</span>
            <span className="text-sm font-bold text-white">&lt; 0.3s Load</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Retainer Fees</span>
            <span className="text-sm font-bold text-emerald-400">₹0 / Year</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Admin Panel</span>
            <span className="text-sm font-bold text-white">Self-Serve</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Code Sovereignty</span>
            <span className="text-sm font-bold text-white">100% Owned</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
