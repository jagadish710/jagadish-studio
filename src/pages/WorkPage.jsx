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
      tag: 'Martial Arts Platform',
      highlightBadge: 'Live in Production',
      badgeColor: '#10B981',
      summary: 'A complete academy operating system. Powers automated student enrollment, belt progression tracking, and instant mobile access with zero maintenance fees.',
      deliverables: [
        'Automated Student Registration',
        'Official Belt & Records System',
        '100/100 Mobile PageSpeed',
        'WhatsApp Student Support',
      ],
      metrics: [
        { label: 'Mobile Speed', val: '99/100' },
        { label: 'Yearly Retainer', val: '₹0' },
        { label: 'Enrollment Lift', val: '+280%' },
      ],
    },
    {
      id: 'pms',
      title: 'PMS Machine Solutions',
      client: 'PMS Solutions India',
      domain: 'pmssolution.jagadish.online',
      liveUrl: 'https://pmssolution.jagadish.online',
      tag: 'Industrial Machinery',
      highlightBadge: 'Live Staging Ready',
      badgeColor: '#F59E0B',
      summary: 'Custom digital catalog for continuous band sealers and vacuum packaging machinery. Replaced a sluggish WordPress setup with sub-0.4s response times and instant WhatsApp quote generation.',
      deliverables: [
        'Industrial Machinery Catalog',
        'WhatsApp Quote Automation',
        'Visual Client Admin Portal',
        'Zero Maintenance Guarantee',
      ],
      metrics: [
        { label: 'Quote Conversions', val: '+340%' },
        { label: 'Page Load Speed', val: '0.38s' },
        { label: 'Code Ownership', val: '100%' },
      ],
    },
    {
      id: 'software',
      title: 'Custom Business Softwares & ERP',
      client: 'Multi-Industry Clients',
      domain: 'Private Cloud Deployments',
      liveUrl: null,
      tag: 'Business Automation',
      highlightBadge: 'Enterprise Software',
      badgeColor: '#8B5CF6',
      summary: 'High-security custom ERPs, internal inventory synchronization, and operational management cockpits built for companies that outgrew spreadsheet chaos.',
      deliverables: [
        'Real-Time Inventory & Invoices',
        'Role-Based Admin Access',
        'PostgreSQL Cloud Database',
        'REST & GraphQL APIs',
      ],
      metrics: [
        { label: 'Admin Time Saved', val: '25h/wk' },
        { label: 'Data Accuracy', val: '99.9%' },
        { label: 'Maintenance Cost', val: '₹0' },
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
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-5 border backdrop-blur-md ${
          isDark 
            ? 'bg-[#1C1829] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]' 
            : 'bg-[#F5F2FF] border-[#673DE6]/40 text-[#673DE6]'
        }`}>
          <Award className="w-4 h-4 text-emerald-400" />
          <span>PROVEN TRACK RECORD • 100+ CLIENT SYSTEMS</span>
        </div>

        {/* High Contrast Title with Solid Color */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6 leading-tight">
          <span className={isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'}>
            100+ Systems Delivered
          </span>
          <br />
          <span className={isDark ? 'text-luxury-gold drop-shadow-[0_0_25px_rgba(230,198,135,0.4)]' : 'text-fresh-green'}>
            Zero Maintenance Fees
          </span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-slate-200 drop-shadow-sm' : 'text-slate-600'
        }`}>
          We have engineered over 100 high-performance websites and business softwares. Here are a few notable flagship deliveries:
        </p>

        {/* Direct WhatsApp Callout in Header */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20looking%20for%20a%20website%20solution%20and%20saw%20your%20projects."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: +91 73586 18789</span>
          </a>
        </div>
      </motion.div>

      {/* Projects Showcase Cards Grid */}
      <div className="space-y-10 mb-20">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`rounded-3xl p-6 sm:p-10 border card-glow-hostinger shadow-xl ${
              isDark ? 'bg-[#161619]' : 'bg-white'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                    isDark ? 'bg-[#221C35] text-[#C4B5FD] border-[#673DE6]/40' : 'bg-[#F5F2FF] text-[#673DE6] border-[#673DE6]/20'
                  }`}>
                    {proj.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold" style={{ color: proj.badgeColor }}>
                    ● {proj.highlightBadge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                  {proj.title}
                </h2>
                <div className="text-xs font-mono opacity-60 mt-0.5">
                  Client: {proj.client}
                </div>
              </div>

              {/* Action Button */}
              {proj.liveUrl ? (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberTone('click')}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer self-start lg:self-auto ${
                    isDark
                      ? 'bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(103,61,230,0.4)]'
                      : 'bg-[#673DE6] hover:bg-[#5327DE] text-white shadow-md'
                  }`}
                >
                  <span>VISIT LIVE PLATFORM • {proj.domain}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className={`px-4 py-2 rounded-xl text-xs font-mono border ${
                  isDark ? 'bg-black/40 border-white/10 text-slate-400' : 'bg-slate-100 border-black/10 text-slate-600'
                }`}>
                  Private Enterprise Architecture
                </div>
              )}
            </div>

            {/* Content & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {proj.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {proj.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isDark ? 'text-luxury-gold' : 'text-fresh-emerald'
                      }`} />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Column */}
              <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-2.5">
                {proj.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-3.5 rounded-2xl border text-center lg:text-left flex flex-col lg:flex-row items-center justify-between ${
                      isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-black/10'
                    }`}
                  >
                    <span className="text-xs font-mono opacity-70">{metric.label}</span>
                    <span className={`text-lg font-mono font-bold ${
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
      <div className={`p-8 sm:p-12 rounded-3xl border text-center max-w-4xl mx-auto ${
        isDark ? 'bg-[#18181C] border-[#673DE6]/40' : 'bg-[#F9F7FF] border-[#673DE6]/30 shadow-md'
      }`}>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-3">
          WHY WE PROVIDE SOLUTIONS, NOT WEBSITES
        </h3>
        <p className={`text-sm max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Traditional agencies charge monthly fees for basic edits. We build systems you own and control completely.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-xs mb-8">
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-base font-bold text-[#A78BFA] mb-1">Zero Retainers</div>
            <div className="text-[11px] opacity-75">Pay once. The system runs forever with zero recurring monthly bills.</div>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-base font-bold text-emerald-400 mb-1">100% Control</div>
            <div className="text-[11px] opacity-75">Visual admin portal lets you add products and change prices in 10 seconds.</div>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-base font-bold text-amber-300 mb-1">Top Google Rank</div>
            <div className="text-[11px] opacity-75">Clean code and sub-0.4s load speed ensure maximum search engine visibility.</div>
          </div>
        </div>

        <a
          href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20solution%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playCyberTone('click')}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Chat Directly on WhatsApp: +91 73586 18789</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
