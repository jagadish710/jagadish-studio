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

      {/* Leadership Profile Card: Jagadish (4+ Years Experience) */}
      <motion.div 
        initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`p-8 sm:p-12 rounded-3xl border ${
          isDark 
            ? 'border-zinc-800 bg-[#0E0E12] shadow-[0_0_35px_rgba(34,211,238,0.06)]' 
            : 'border-slate-200 bg-white shadow-xl'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className={`w-28 h-28 rounded-3xl flex flex-col items-center justify-center shrink-0 border relative overflow-hidden group ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-cyan-400' : 'bg-slate-100 border-slate-200 text-blue-600'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
            <Cpu className="w-10 h-10 mb-1" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">4+ YRS EXP</span>
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-cyan-400' : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
                Engineering Leadership
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                &bull; 4+ Years Specialized Platform Experience
              </span>
            </div>

            <h4 className={`text-2xl sm:text-3xl font-extrabold font-display ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Jagadish &bull; Principal Architect &amp; Founder
            </h4>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
              isDark ? 'text-zinc-300' : 'text-slate-700'
            }`}>
              With <strong>over 4+ years of specialized web architecture and cloud software engineering</strong>, Jagadish founded Merqurie to end recurring agency retainer traps. By deploying decoupled frontend architectures on global edge networks with self-serve visual management dashboards, Jagadish has helped 100+ businesses achieve sub-0.3s page load speeds with zero monthly maintenance overheads.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-mono">
              <span className={isDark ? 'text-zinc-400' : 'text-slate-600'}>
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>4+ Years</strong> in Full-Stack Web Architecture
              </span>
              <span className={isDark ? 'text-zinc-400' : 'text-slate-600'}>
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>100+</strong> Production Systems Built
              </span>
              <span className="text-emerald-400 font-bold">
                ₹0 Maintenance Retainers
              </span>
            </div>

            {/* Action Contact */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20consult%20with%20you%20directly%20regarding%20a%20website%20solution."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberTone('click')}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                <span>Chat Directly with Jagadish</span>
              </a>

              <button
                onClick={() => {
                  playCyberTone('click');
                  onOpenPrototypeModal();
                }}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer active:scale-95 ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800' 
                    : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Request Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
