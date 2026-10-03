import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function WorkPage({ isDark, onOpenPrototypeModal }) {
  const projects = [
    {
      id: 'upsks',
      title: 'UPSKS Karate Academy',
      client: 'United Professional Shito-Ryu Karate-Do Shotokai',
      domain: 'upskskarate.com',
      liveUrl: 'https://upskskarate.com',
      tag: 'Academy Platform',
      badgeColor: '#10B981',
      summary: 'Automated student registration, belt records tracking, and instant mobile access with zero maintenance fees.',
      deliverables: [
        'Student Registration Portal',
        'Official Belt & Records Database',
        '99/100 Mobile PageSpeed',
        'WhatsApp Student Support',
      ],
      metrics: [
        { label: 'Mobile Speed', val: '99/100' },
        { label: 'Yearly Retainer', val: '₹0' },
      ],
    },
    {
      id: 'pms',
      title: 'PMS Machine Solutions',
      client: 'PMS Solutions India',
      domain: 'pmssolution.jagadish.online',
      liveUrl: 'https://pmssolution.jagadish.online',
      tag: 'Machinery Catalog',
      badgeColor: '#F59E0B',
      summary: 'Digital machinery catalog for continuous band sealers and vacuum packaging with sub-0.4s speed and instant WhatsApp quotation.',
      deliverables: [
        'Machinery Product Catalog',
        'Direct WhatsApp Quotations',
        'Visual Self-Serve Admin Panel',
        'Zero Maintenance Retainer',
      ],
      metrics: [
        { label: 'Page Load Speed', val: '0.38s' },
        { label: 'Code Ownership', val: '100%' },
      ],
    },
    {
      id: 'software',
      title: 'Custom Business Software & ERPs',
      client: 'Multi-Industry Clients',
      domain: 'Private Cloud Deployments',
      liveUrl: null,
      tag: 'Software Solutions',
      badgeColor: '#8B5CF6',
      summary: 'Tailor-made software tools for operations, customer booking, billing, and real-time inventory management.',
      deliverables: [
        'Inventory & Automated Invoicing',
        'Staff & Admin Role Access',
        'Secure Cloud PostgreSQL Database',
        'Automated WhatsApp Alerts',
      ],
      metrics: [
        { label: 'Maintenance Cost', val: '₹0' },
        { label: 'Data Accuracy', val: '99.9%' },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* High-Contrast Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        {/* Crystal Clear High Contrast Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-4 border backdrop-blur-md ${
          isDark 
            ? 'bg-[#1C1829] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.45)]' 
            : 'bg-[#F5F2FF] border-[#673DE6]/40 text-[#673DE6]'
        }`}>
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>PROVEN TRACK RECORD • 100+ DEPLOYMENTS</span>
        </div>

        {/* High Contrast Title with Solid Color */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-4 leading-tight">
          <span className={isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'}>
            100+ Systems Delivered
          </span>
          <br />
          <span className={isDark ? 'text-luxury-gold drop-shadow-[0_0_20px_rgba(230,198,135,0.4)]' : 'text-fresh-green'}>
            With Zero Maintenance Fees
          </span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-slate-200' : 'text-slate-600'
        }`}>
          Worked on 100+ projects, delivered with excellence. One of the few are upskskarate.com, pmssolution, and custom business softwares. We provide complete solutions, not just a website.
        </p>

        {/* Direct WhatsApp Callout in Header */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-6 py-3.5 rounded-xl font-bold font-mono text-xs tracking-wider flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20looking%20for%20a%20website%20solution%20and%20saw%20your%20projects."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: +91 73586 18789</span>
          </a>
        </div>
      </motion.div>

      {/* Projects Showcase Cards Grid */}
      <div className="space-y-8 mb-20">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-3xl p-6 sm:p-8 border shadow-xl ${
              isDark ? 'bg-[#18181D] border-[#8B5CF6]/40' : 'bg-white border-black/10'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-5 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                    isDark ? 'bg-[#221C35] text-[#C4B5FD] border-[#8B5CF6]/40' : 'bg-[#F5F2FF] text-[#673DE6] border-[#673DE6]/20'
                  }`}>
                    {proj.tag}
                  </span>
                </div>
                <h2 className={`text-2xl sm:text-3xl font-extrabold font-display ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {proj.title}
                </h2>
              </div>

              {/* Action Button */}
              {proj.liveUrl ? (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberTone('click')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer self-start lg:self-auto ${
                    isDark
                      ? 'bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(103,61,230,0.4)]'
                      : 'bg-[#673DE6] hover:bg-[#5327DE] text-white shadow-md'
                  }`}
                >
                  <span>Visit Platform • {proj.domain}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className={`px-4 py-2 rounded-xl text-xs font-mono border ${
                  isDark ? 'bg-black/50 border-white/10 text-slate-300' : 'bg-slate-100 border-black/10 text-slate-700'
                }`}>
                  Custom Enterprise Software
                </div>
              )}
            </div>

            {/* Content & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  {proj.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {proj.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isDark ? 'text-emerald-400' : 'text-fresh-emerald'
                      }`} />
                      <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {proj.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-3 rounded-2xl border text-center lg:text-left flex flex-col lg:flex-row items-center justify-between ${
                      isDark ? 'bg-black/50 border-white/10' : 'bg-slate-50 border-black/10'
                    }`}
                  >
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{metric.label}</span>
                    <span className={`text-base font-mono font-bold ${
                      isDark ? 'text-luxury-gold' : 'text-[#673DE6]'
                    }`}>
                      {metric.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Banner: Solutions, Not Just A Website */}
      <div className={`p-8 sm:p-12 rounded-3xl border text-center max-w-4xl mx-auto shadow-2xl ${
        isDark ? 'bg-[#18181C] border-[#8B5CF6]/40' : 'bg-[#F9F7FF] border-[#673DE6]/30'
      }`}>
        <h3 className={`text-2xl sm:text-3xl font-extrabold font-display mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          WE PROVIDE SOLUTIONS, NOT JUST A WEBSITE
        </h3>
        <p className={`text-sm max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Traditional agencies charge monthly fees for basic edits. We build complete business systems you own and control completely with zero recurring fees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-xs mb-8">
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-sm font-bold text-[#C4B5FD] mb-1">Zero Retainers</div>
            <div className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Pay once. The system runs forever with zero recurring monthly bills.
            </div>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-sm font-bold text-emerald-400 mb-1">100% Control</div>
            <div className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Visual admin portal lets you add products and change prices in 10 seconds.
            </div>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-sm font-bold text-amber-300 mb-1">Top Google Rank</div>
            <div className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Clean modern code and sub-0.4s load speed ensure maximum search engine visibility.
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20solution%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat Directly on WhatsApp (+91 73586 18789)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
