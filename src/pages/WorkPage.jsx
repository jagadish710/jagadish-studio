import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  ExternalLink,
  Award,
  Zap,
  ShieldCheck,
  Search,
  CheckCircle2,
  ArrowRight,
  Database,
  Smartphone,
  Laptop
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function WorkPage({ isDark }) {
  const projects = [
    {
      id: 'upsks',
      title: 'UPSKS Karate Academy',
      client: 'United Professional Shito-Ryu Karate-Do Shotokai',
      domain: 'upskskarate.com',
      liveUrl: 'https://upskskarate.com',
      tag: 'MARTIAL ARTS & STUDENT PORTAL',
      highlightBadge: 'LIVE IN PRODUCTION',
      badgeColor: '#10B981',
      summary: 'A complete academy operating system replacing outdated static pages. Powers automated student enrollment, belt progression management, tournament ticketing, and hyper-fast mobile access.',
      deliverables: [
        'Automated Student Registration & Verification',
        'Official Belt & Certification Records System',
        '100/100 Core Web Vitals Performance',
        'Integrated WhatsApp Student Support Concierge',
      ],
      metrics: [
        { label: 'Mobile PageSpeed', val: '99/100' },
        { label: 'Monthly Retainer', val: '$0' },
        { label: 'Enrollment Lift', val: '+280%' },
      ],
    },
    {
      id: 'pms',
      title: 'PMS Machine Solutions',
      client: 'PMS Solutions India',
      domain: 'pmssolution.jagadish.online',
      liveUrl: 'https://pmssolution.jagadish.online',
      tag: 'INDUSTRIAL MACHINERY & RFQ ENGINE',
      highlightBadge: 'ACTIVE STAGING PIPELINE',
      badgeColor: '#F59E0B',
      summary: 'Engineered custom digital catalog for continuous band sealers and vacuum packaging machinery. Replaced a sluggish WordPress setup with lightning-fast sub-0.4s response times and instant WhatsApp quote generation.',
      deliverables: [
        'Dynamic Industrial Machinery Specification Catalog',
        'Direct WhatsApp Quotation Prefill Engine',
        'Self-Serve Client Admin Dashboard to edit prices & specs',
        'Zero monthly maintenance fee guarantee',
      ],
      metrics: [
        { label: 'RFQ Conversion', val: '+340%' },
        { label: 'Page Load Speed', val: '0.38s' },
        { label: 'Platform Ownership', val: '100%' },
      ],
    },
    {
      id: 'software',
      title: 'Bespoke Enterprise Software & SaaS',
      client: 'Multi-Industry Clients',
      domain: 'Custom Deployments',
      liveUrl: null,
      tag: 'INTERNAL BUSINESS AUTOMATION',
      highlightBadge: 'ENTERPRISE ARCHITECTURE',
      badgeColor: '#8B5CF6', // Hostinger purple
      summary: 'High-security custom ERPs, internal inventory synchronization, and operational management cockpits built for companies that outgrew spreadsheet chaos.',
      deliverables: [
        'Automated Multi-Channel Inventory & Invoice Tracking',
        'Role-Based Admin Access (Superadmin, Manager, Staff)',
        'PostgreSQL Real-Time Data Pipeline & Backup Automations',
        'REST / GraphQL Edge Microservice Architecture',
      ],
      metrics: [
        { label: 'Admin Hours Saved', val: '25h/wk' },
        { label: 'Data Accuracy', val: '99.9%' },
        { label: 'Hosting Cost', val: '$0/mo base' },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-4 border ${
          isDark 
            ? 'bg-[#181818] border-[#673DE6]/40 text-[#A78BFA] shadow-[0_0_20px_rgba(103,61,230,0.3)]' 
            : 'bg-[#F5F2FF] border-[#673DE6]/25 text-[#673DE6]'
        }`}>
          <Award className="w-3.5 h-3.5" />
          <span>PROVEN TRACK RECORD • 100+ DEPLOYMENTS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6">
          100+ SYSTEMS DELIVERED <br />
          <span className="text-gradient-main">WITH ZERO MAINTENANCE FEES</span>
        </h1>

        <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          We have engineered and deployed over 100 high-performance web systems, custom softwares, and autonomous digital solutions. Here are a few notable flagship deliveries:
        </p>
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
                  <span>VISIT LIVE PLATFORM ({proj.domain})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className={`px-4 py-2 rounded-xl text-xs font-mono border ${
                  isDark ? 'bg-black/40 border-white/10 text-slate-400' : 'bg-slate-100 border-black/10 text-slate-600'
                }`}>
                  Enterprise Confidential / Client Hosted
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
          Traditional web designers deliver a pretty page and trap you into a \$150/month maintenance fee for basic edits. We build autonomous engines.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-xs">
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-base font-bold text-[#A78BFA] mb-1">$0 Retainer</div>
            <div className="text-[11px] opacity-75">No hidden monthly charges. Once delivered, the system runs with zero recurring maintenance fees.</div>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-base font-bold text-emerald-400 mb-1">100% Control</div>
            <div className="text-[11px] opacity-75">Visual admin portal lets you add products, change pricing, and edit copy instantly from your phone.</div>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
            <div className="text-base font-bold text-amber-300 mb-1">Google SEO #1</div>
            <div className="text-[11px] opacity-75">Clean semantic code, automated JSON-LD schemas, and sub-0.4s load speeds ensure maximum search rankings.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
