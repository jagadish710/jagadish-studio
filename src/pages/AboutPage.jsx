import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  Flame,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage({ onOpenPrototypeModal, isDark }) {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
          isDark 
            ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
            : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
        }`}>
          <Flame className="w-3.5 h-3.5" />
          <span>ENGINEERING RIGOR // ARCHITECTURAL PEDIGREE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6">
          ENGINEERED LIKE INFRASTRUCTURE. <br />
          <span className="text-gradient-main">NOT TEMPLATES.</span>
        </h1>
        <p className="opacity-75 text-base sm:text-lg">
          We bring high-scale Big Tech engineering discipline to modern business software, providing sovereign digital assets that require zero monthly maintenance taxes.
        </p>
      </motion.div>

      {/* 2-Column Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl theme-card flex flex-col justify-between">
          <div className="space-y-6">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold font-mono ${
              isDark 
                ? 'bg-luxury-gold/15 border-luxury-gold/30 text-luxury-gold' 
                : 'bg-fresh-tint border-fresh-border text-fresh-green'
            }`}>
              AMZ
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              The Amazon Engineering Standard
            </h3>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              At Amazon, downtime costs millions and latency kills conversions. Every system is built to survive massive traffic spikes, resist external failures, and respond in sub-seconds.
            </p>
            <p className="opacity-70 text-sm leading-relaxed">
              We apply that exact same architectural rigor to every client platform we build: zero single-points-of-failure, serverless edge resilience, and impenetrable security.
            </p>
          </div>

          <div className={`pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-xs font-mono ${
            isDark ? 'text-luxury-gold' : 'text-fresh-green'
          }`}>
            <CheckCircle2 className="w-4 h-4" />
            <span>SUB-SECOND GLOBAL LATENCY OBSESSION</span>
          </div>
        </div>

        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl theme-card flex flex-col justify-between">
          <div className="space-y-6">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold font-mono ${
              isDark 
                ? 'bg-luxury-gold/15 border-luxury-gold/30 text-luxury-gold' 
                : 'bg-fresh-tint border-fresh-border text-fresh-green'
            }`}>
              AI
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Next-Gen Multimodal AI Architectures
            </h3>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              We architect solutions utilizing frontier multimodal AI models—integrating vision, text, and automated decision-making engines directly into customer portals.
            </p>
            <p className="opacity-70 text-sm leading-relaxed">
              Instead of static contact forms that sit unread in an inbox, our autonomous conversational concierges answer machinery specs, quote delivery windows, and transfer ready buyers directly to your WhatsApp.
            </p>
          </div>

          <div className={`pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-xs font-mono ${
            isDark ? 'text-luxury-gold' : 'text-fresh-green'
          }`}>
            <CheckCircle2 className="w-4 h-4" />
            <span>AUTONOMOUS INBOUND REVENUE PIPELINES</span>
          </div>
        </div>
      </div>

      {/* Tech Arsenal Stack */}
      <div className={`p-8 sm:p-12 rounded-3xl border mb-20 text-center ${
        isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-fresh-border shadow-sm'
      }`}>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-2">
          The Sovereign Tech Arsenal
        </h3>
        <p className="opacity-70 text-sm mb-10 max-w-md mx-auto">
          We refuse to use 40+ bloated WordPress plugins. We write clean, modern, compiled edge software.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-mono text-xs">
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>FRONTEND</div>
            <div className="font-bold">React &bull; Next.js</div>
            <div className="opacity-60 text-[11px] mt-1">Reactive high-speed UI</div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>MOTION</div>
            <div className="font-bold">Framer &bull; Three.js</div>
            <div className="opacity-60 text-[11px] mt-1">60FPS WebGL shaders</div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>INFRASTRUCTURE</div>
            <div className="font-bold">Vercel &bull; Edge CDN</div>
            <div className="opacity-60 text-[11px] mt-1">Zero database rot</div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>AUTOMATION</div>
            <div className="font-bold">WhatsApp &bull; CRM</div>
            <div className="opacity-60 text-[11px] mt-1">Instant lead alerts</div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <button
          onClick={() => {
            playCyberTone('click');
            onOpenPrototypeModal();
          }}
          className={`px-8 py-4 rounded-xl font-mono font-bold text-sm tracking-wider inline-flex items-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
            isDark 
              ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
              : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
          }`}
        >
          <span>BUILD YOUR SOVEREIGN PLATFORM</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
