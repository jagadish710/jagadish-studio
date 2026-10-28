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
  ShieldCheck,
  Search,
  Cpu,
  Globe,
  Award,
} from 'lucide-react';

export default function Hero({ onOpenPrototypeModal, onNavigateToWork, onNavigateToSolutions, isDark }) {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle, High-Trust Corporate Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-8 border transition-all ${
            isDark
              ? 'bg-[#18181C]/90 border-[#E6C687]/30 text-[#E6C687]'
              : 'bg-slate-50 border-slate-200 text-slate-800 shadow-xs'
          }`}
        >
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
              isDark ? 'bg-luxury-gold' : 'bg-blue-600'
            }`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              isDark ? 'bg-luxury-gold' : 'bg-blue-600'
            }`} />
          </span>
          <span className="tracking-wider uppercase">MERQURIE TECHNOLOGY GROUP &bull; GLOBAL SYSTEMS &amp; SAAS</span>
        </motion.div>

        {/* Executive Headline (Google / DeepMind / Stripe Caliber) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display leading-[1.08] mb-6 max-w-4xl"
        >
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            Architecting High-Speed Cloud Systems
          </span>{' '}
          <br className="hidden sm:inline" />
          <span className={`bg-clip-text text-transparent ${
            isDark 
              ? 'bg-gradient-to-r from-[#FFF4D2] via-[#E6C687] to-[#C5A059]' 
              : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900'
          }`}>
            &amp; Digital Infrastructure.
          </span>
        </motion.h1>

        {/* Restrained, Dignified Enterprise Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`max-w-2xl text-base sm:text-lg font-normal leading-relaxed mb-10 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          From high-performance enterprise platforms and vertical SaaS to intelligent automation and future electric mobility. Built with zero maintenance overhead, edge-native speed, and 100% intellectual property sovereignty.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-16"
        >
          {/* Consultation CTA */}
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-200 to-luxury-gold text-black'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <span>REQUEST ARCHITECTURE CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border ${
              isDark
                ? 'bg-[#18181C] hover:bg-[#202026] text-white border-white/10'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-xs'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
            <span>Direct WhatsApp: +91 73586 18789</span>
          </a>
        </motion.div>

        {/* 4 Clean Value Pillars - Structured with Elegant Precision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full text-left"
        >
          <div className={`p-5 rounded-xl border transition-all ${
            isDark ? 'bg-[#151518]/90 border-white/10 hover:border-white/20' : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}>
              <Zap className="w-4 h-4" />
            </div>
            <div className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Zero Maintenance Debt
            </div>
            <div className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Serverless edge architecture that eliminates ongoing monthly retainer fees.
            </div>
          </div>

          <div className={`p-5 rounded-xl border transition-all ${
            isDark ? 'bg-[#151518]/90 border-white/10 hover:border-white/20' : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}>
              <Layers className="w-4 h-4" />
            </div>
            <div className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Self-Serve Cockpits
            </div>
            <div className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Dedicated executive administration portals for real-time operational control.
            </div>
          </div>

          <div className={`p-5 rounded-xl border transition-all ${
            isDark ? 'bg-[#151518]/90 border-white/10 hover:border-white/20' : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              100% IP Sovereignty
            </div>
            <div className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Complete ownership of source repositories, databases, and customer records.
            </div>
          </div>

          <div className={`p-5 rounded-xl border transition-all ${
            isDark ? 'bg-[#151518]/90 border-white/10 hover:border-white/20' : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 border ${
              isDark ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20' : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}>
              <Search className="w-4 h-4" />
            </div>
            <div className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Sub-0.3s Performance
            </div>
            <div className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Google Core Web Vitals optimized for effortless top algorithmic ranking.
            </div>
          </div>
        </motion.div>

        {/* Proven Production Track Record Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-8 px-5 py-3.5 rounded-xl text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-3 w-full border ${
            isDark 
              ? 'bg-[#141416]/80 border-white/10 text-slate-300' 
              : 'bg-slate-50 border-slate-200 text-slate-700 shadow-xs'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 text-left">
            <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-500'}`} />
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>100+ SYSTEMS DEPLOYED:</span>
            <span>Including</span>
            <span className={`font-medium px-2 py-0.5 rounded border ${isDark ? 'bg-black/40 text-emerald-300 border-emerald-500/20' : 'bg-white text-slate-900 border-slate-200'}`}>upskskarate.com</span>
            <span>&bull;</span>
            <span className={`font-medium px-2 py-0.5 rounded border ${isDark ? 'bg-black/40 text-amber-300 border-amber-500/20' : 'bg-white text-slate-900 border-slate-200'}`}>pmssolution</span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>&bull; custom vertical software.</span>
          </div>
          <button
            onClick={() => {
              playCyberTone('click');
              onNavigateToWork();
            }}
            className={`flex items-center gap-1.5 font-medium cursor-pointer shrink-0 transition-colors ${
              isDark ? 'text-luxury-gold hover:text-white' : 'text-slate-900 hover:text-blue-600'
            }`}
          >
            <span>Explore Platforms</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
