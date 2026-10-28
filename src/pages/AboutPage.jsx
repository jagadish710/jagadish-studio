import WhatsAppIcon from '../components/WhatsAppIcon';
import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Cpu,
} from 'lucide-react';

export default function AboutPage({ onOpenPrototypeModal, isDark = true }) {
  const tenets = [
    {
      title: 'Zero Maintenance Architecture',
      subtitle: 'Eliminating Technical Debt',
      desc: 'Traditional agencies build on fragile CMS platforms that decay over time, forcing endless monthly retainer contracts. We build on immutable serverless edge systems that run reliably for years with zero ongoing maintenance costs.',
    },
    {
      title: 'Full Intellectual Property Sovereignty',
      subtitle: 'Your Code, Your Assets, Forever',
      desc: 'We operate with total client respect. Every database table, frontend component, and DNS configuration is transferred directly to your private repositories. Zero vendor lock-in, zero hostage scenarios.',
    },
    {
      title: 'Algorithmic Speed & SEO Dominance',
      subtitle: 'Sub-0.3s Core Web Vitals',
      desc: 'Google ranks speed. By decoupling the presentation layer from the database and deploying to global edge nodes, our platforms achieve sub-0.3s load times and 99+ PageSpeed ratings automatically.',
    },
    {
      title: 'Self-Serve Administrative Autonomy',
      subtitle: 'Instant Client Control',
      desc: 'Every platform comes with a dedicated visual admin cockpit. Clients can edit text, adjust prices, and export customer leads in seconds from their phone—with zero developer dependency.',
    },
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
          isDark 
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
          <span>ENGINEERING STANDARDS &bull; MERQURIE</span>
        </div>

        <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight font-display mb-6 leading-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Engineered For Speed.<br />
          <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>Built To Outlast.</span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-zinc-400' : 'text-slate-600'
        }`}>
          Named after the classical archetype of speed and motion, Merqurie was founded on a simple truth: modern digital systems should empower businesses permanently, not burden them with recurring monthly maintenance fees.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-sm ${
              isDark 
                ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                : 'bg-slate-950 hover:bg-slate-800 text-white'
            }`}
          >
            <span>CONSULT WITH LEADERSHIP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20learn%20more%20about%20your%20architecture."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`px-5 py-3 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all hover:scale-102 active:scale-98 cursor-pointer ${
              isDark 
                ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-500 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* 4 Architectural Tenets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
        {tenets.map((tenet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#0E0E12] border-zinc-800 hover:border-zinc-700 shadow-xl' 
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
            }`}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300' 
                  : 'border-slate-200 bg-slate-100 text-slate-800'
              }`}>
                {tenet.subtitle}
              </span>
            </div>

            <h3 className={`text-xl sm:text-2xl font-bold font-display mb-3 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {tenet.title}
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              {tenet.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Leadership Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`p-8 sm:p-12 rounded-2xl border ${
          isDark ? 'border-zinc-800 bg-[#0E0E12] shadow-xl' : 'border-slate-200 bg-white shadow-lg'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 border ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-950'
          }`}>
            <Cpu className="w-10 h-10 opacity-75" />
          </div>

          <div className="space-y-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
              isDark ? 'text-zinc-400' : 'text-slate-500'
            }`}>
              Engineering Leadership
            </span>
            <h4 className={`text-2xl font-bold font-display ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Jagadish &bull; Principal Architect &amp; Founder
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              With over 100 digital platforms delivered across India and internationally, Jagadish leads the engineering of Merqurie — building decoupled, lightning-speed website solutions with zero maintenance debt.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
