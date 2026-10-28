import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  MessageCircle,
  Sparkles,
  Award,
  Cpu,
} from 'lucide-react';

export default function AboutPage({ onOpenPrototypeModal }) {
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
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border bg-zinc-900 border-zinc-800 text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>ENGINEERING PHILOSOPHY &bull; MERQURIE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display mb-6 leading-tight text-white">
          Engineered For Speed.<br />
          <span className="text-zinc-400">Built To Outlast.</span>
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-zinc-400">
          Named after the classical archetype of speed and motion, Merqurie was founded on a simple truth: modern digital systems should empower businesses permanently, not burden them with recurring monthly maintenance fees.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className="px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm"
          >
            <span>CONSULT WITH LEADERSHIP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20learn%20more%20about%20your%20architecture."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="px-5 py-3 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* 4 Architectural Tenets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
        {tenets.map((tenet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 sm:p-8 rounded-2xl border transition-all bg-[#0e0e12] border-zinc-800 hover:border-zinc-700 shadow-xl"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300">
                {tenet.subtitle}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 text-white">
              {tenet.title}
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
              {tenet.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Leadership Profile Card */}
      <div className="p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-[#0e0e12] shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 border bg-zinc-900 border-zinc-800 text-white">
            <Cpu className="w-10 h-10 text-zinc-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Engineering Leadership
            </span>
            <h4 className="text-2xl font-bold font-display text-white">
              Jagadish &bull; Principal Architect &amp; Founder
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed max-w-2xl text-zinc-400">
              With over 100 digital platforms delivered across India and internationally, Jagadish leads the engineering of Merqurie — building decoupled, lightning-speed website solutions with zero maintenance debt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
