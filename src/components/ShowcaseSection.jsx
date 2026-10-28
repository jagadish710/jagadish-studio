import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  Shield,
  Zap,
  CheckCircle2,
  Clock,
  Laptop,
  Smartphone,
  Eye,
} from 'lucide-react';

export default function ShowcaseSection({ onSelectProject }) {
  const [activeDevice, setActiveDevice] = useState('desktop');

  const projects = [
    {
      id: 'pms-solution',
      title: 'PMS Machine Solutions',
      client: 'Praveen / PMS Solution',
      subdomain: 'pmssolution.co.in',
      status: 'Live Staging / Client Review',
      category: 'Industrial Machinery & Automation',
      highlight: 'Featured Flagship Prototype',
      desc: 'Engineered complete catalog architecture replacing bloated WordPress with a sub-second reactive frontend, instant WhatsApp quotation routing, and zero-maintenance admin portal.',
      metrics: [
        { label: 'Speed Index', value: '0.38s' },
        { label: 'Monthly Retainer', value: '$0' },
        { label: 'Inquiry Lift', value: '+340%' },
      ],
      features: [
        'Band Sealers & Industrial Vacuum Machinery Catalog',
        'Direct WhatsApp Quotation Engine with Product Prefill',
        'Self-Serve Admin Dashboard for Catalog & Stock Edits',
        'Zero-Maintenance Serverless Edge Deployment',
      ],
      tags: ['React', 'Vercel Edge', 'Tailwind', 'WhatsApp API'],
    },
    {
      id: 'apex-logistics',
      title: 'Apex Global Logistics OS',
      client: 'Apex Fleet Corp',
      subdomain: 'apexlogistics.jagadish.online',
      status: 'Active Client Staging',
      category: 'Supply Chain & Real-Time Tracking',
      highlight: 'Enterprise Grade',
      desc: 'Real-time GPS container tracking portal with instant client freight booking and automated invoice dispatch.',
      metrics: [
        { label: 'Speed Index', value: '0.42s' },
        { label: 'Monthly Retainer', value: '$0' },
        { label: 'Lead Capture', value: '99.4%' },
      ],
      features: [
        'Live Shipment Status Telemetry',
        'Automated Bill of Lading PDF Generator',
        'Client Sub-Account Hierarchy',
      ],
      tags: ['Next.js', 'Google Maps API', 'Edge Cache'],
    },
  ];

  return (
    <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5 bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
              <Layers className="w-3.5 h-3.5" />
              LIVE CLIENT DEPLOYMENTS & STAGING
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
              REAL BUSINESS ASSETS <br />
              <span className="text-gradient-cyan">NOT TEMPLATE TOYS</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm font-sans">
            Every client receives a custom staging link on <code className="text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded">*.jagadish.online</code> for instant review, tweaks, and frictionless zero-downtime domain handoff.
          </p>
        </div>

        {/* Featured Case Study: PMS Solution */}
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="mb-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0b0e1b] via-[#080b16] to-[#05060b] p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none" />

            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">
                  {proj.status.toUpperCase()}
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs font-mono text-slate-400">CLIENT: {proj.client}</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/80 px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
                <span>SUBDOMAIN:</span>
                <span className="text-white font-bold">{proj.subdomain}</span>
              </div>
            </div>

            {/* Content & Interactive Mockup Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description & Value Delivered */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold font-display text-white mt-1">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {proj.desc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5">
                  {proj.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <div className="text-lg sm:text-2xl font-mono font-extrabold text-cyan-300">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Device Mockup Frame */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/15 bg-[#090c16] overflow-hidden shadow-2xl">
                  {/* Mock Browser Header */}
                  <div className="px-4 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#060810] border border-white/10 text-[11px] font-mono text-cyan-300">
                      <span className="text-slate-500">https://</span>
                      <span>{proj.subdomain}</span>
                    </div>
                    <div className="text-xs text-slate-500">SSL Certified</div>
                  </div>

                  {/* Browser Screen Simulation */}
                  <div className="p-6 bg-gradient-to-b from-[#0e1222] to-[#070913] min-h-[280px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                        <div className="font-display font-black text-white text-sm tracking-wider flex items-center gap-2">
                          <span className="p-1 rounded bg-cyan-400 text-black text-xs">PMS</span>
                          <span>PMS MACHINE SOLUTIONS</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          LIVE STAGING
                        </span>
                      </div>

                      <div className="text-left py-2">
                        <div className="text-[11px] font-mono text-cyan-400 mb-1">
                          INDUSTRIAL PACKAGING & SEALING SYSTEMS
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white font-display">
                          Heavy-Duty Continuous Band Sealers & Vacuum Technology
                        </h4>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                          High precision engineering manufactured for pharmaceutical, food processing, and industrial manufacturing plants.
                        </p>
                      </div>

                      {/* Mini Product Cards */}
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-left">
                          <div className="text-[10px] text-cyan-400 font-mono">BAND SEALER SERIES</div>
                          <div className="text-xs font-semibold text-white mt-1">FR-900 Continuous Unit</div>
                          <div className="text-[10px] text-slate-400 mt-1">Speed: 0-12m/min</div>
                        </div>
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-left">
                          <div className="text-[10px] text-cyan-400 font-mono">VACUUM SERIES</div>
                          <div className="text-xs font-semibold text-white mt-1">DZ-400 Chamber Sealer</div>
                          <div className="text-[10px] text-slate-400 mt-1">Industrial Grade</div>
                        </div>
                      </div>
                    </div>

                    {/* Staging Action Prompt */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">
                        Prepared for Praveen Review
                      </span>
                      <a
                        href={`https://${proj.subdomain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          // Prevent actual 404 until domain DNS is pointed
                          e.preventDefault();
                          alert(`Staging target: https://${proj.subdomain}\n\nOnce deployed to Vercel and your Hostinger DNS CNAME is added, this link opens the live PMS prototype!`);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow-neon-cyan transition-transform active:scale-95 cursor-pointer"
                      >
                        <span>VIEW PREVIEW</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
