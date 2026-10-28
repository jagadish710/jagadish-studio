import React, { useState } from 'react';
import { 
  Globe, 
  Database, 
  Layers, 
  ShieldCheck, 
  RotateCw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function InteractiveCardsSection({ isDark, onOpenPrototypeModal }) {
  // Flip states for individual cards
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (idx) => {
    playCyberTone('click');
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const solutions = [
    {
      id: 'websites',
      title: 'High-Converting Business Websites',
      subtitle: 'SUB-0.3S LIGHTNING PERFORMANCE',
      icon: Globe,
      frontDesc: 'Custom-engineered digital storefronts built to turn casual visitors into paying customers. Ranked top on Google with sub-second mobile speed.',
      metrics: [
        { label: 'Google CWV Score', val: '99/100' },
        { label: 'Monthly Retainers', val: '₹0 / Year' },
        { label: 'Lead Capture', val: 'Direct WhatsApp' },
      ],
      backTitle: 'Architectural Blueprint',
      backPoints: [
        'React 19 & Next.js Decoupled Frontend',
        'Direct WhatsApp button for instant lead capture',
        'Optimized Schema.org metadata for Google rankings',
        'Zero monthly hosting or maintenance fees',
      ],
      tag: 'WEBSITE PLATFORMS',
    },
    {
      id: 'admin',
      title: 'Visual Self-Serve Admin Portal',
      subtitle: 'EDIT TEXT & PRICES IN 10 SECONDS',
      icon: Database,
      frontDesc: 'Never pay an agency a monthly retainer or wait days for simple text edits. Manage your headlines, pricing, and announcements from your phone.',
      metrics: [
        { label: 'Edit Latency', val: '10 Seconds' },
        { label: 'Device Support', val: 'Mobile & Laptop' },
        { label: 'Developer Dependency', val: 'Zero' },
      ],
      backTitle: 'Cockpit Specifications',
      backPoints: [
        'Secure password-protected visual interface',
        'Add products, update catalogs & edit banners',
        'Export customer inquiries to CSV / Excel',
        'Instant live synchronization with zero downtime',
      ],
      tag: 'CLIENT CONTROL',
    },
    {
      id: 'custom',
      title: 'Custom Web Apps & Catalogs',
      subtitle: 'FULL-STACK TAILORED ARCHITECTURE',
      icon: Layers,
      frontDesc: 'For businesses that outgrew basic templates. Custom product catalogs, machinery spec portals, and streamlined client inquiry pipelines.',
      metrics: [
        { label: 'Database', val: 'PostgreSQL Edge' },
        { label: 'Uptime Reliability', val: '99.99%' },
        { label: 'License Overheads', val: '₹0' },
      ],
      backTitle: 'Full-Stack Foundation',
      backPoints: [
        'Scalable serverless cloud database integration',
        'Automated WhatsApp inquiry notifications',
        'High-resolution media & PDF spec sheet viewers',
        'Custom business logic tailored to your exact scope',
      ],
      tag: 'CUSTOM ENGINEERING',
    },
    {
      id: 'sovereignty',
      title: '100% Code & Asset Sovereignty',
      subtitle: 'TOTAL FREEDOM & COMPLETE OWNERSHIP',
      icon: ShieldCheck,
      frontDesc: 'Your domain, your source code, and your customer data belong entirely to you. Transferred directly to your private GitHub repository upon launch.',
      metrics: [
        { label: 'Code Ownership', val: '100%' },
        { label: 'Vendor Lock-in', val: 'None' },
        { label: 'Hidden Retainers', val: '₹0' },
      ],
      backTitle: 'Ownership Protocol',
      backPoints: [
        'Complete Git repository & asset transfer',
        'No agency holds your website or domain hostage',
        'One-time capital investment guarantee',
        'Lifetime technical sovereignty for your enterprise',
      ],
      tag: 'IP SOVEREIGNTY',
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#0E0E10]' : 'border-slate-200/80 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#161619] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="uppercase tracking-wider">Website Solutions &bull; Click to Flip</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineered For Your Business. <br />
            <span className={isDark ? 'text-[#E6C687]' : 'text-blue-700'}>
              Zero Maintenance Retainers.
            </span>
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We provide complete high-performance website solutions, not just a fragile WordPress template. Click any card to flip and inspect the technical specifications.
          </p>
        </div>

        {/* 4 Cards 3D Flip Grid (Clean, Cohesive Champagne Gold + Obsidian) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((card, idx) => {
            const Icon = card.icon;
            const isFlipped = !!flippedCards[idx];

            return (
              <div
                key={card.id}
                className="perspective-1000 min-h-[360px] w-full cursor-pointer select-none"
                onClick={() => toggleCardFlip(idx)}
              >
                <div 
                  className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out rounded-2xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT FACE (Obsidian & Champagne Gold) */}
                  <div className={`absolute inset-0 backface-hidden p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                    isDark 
                      ? 'bg-[#141416] border-white/10 hover:border-[#E6C687]/40 shadow-lg shadow-black/60' 
                      : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
                  }`}>
                    <div>
                      {/* Top Bar with Badge & Flip Indicator */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-black/40 text-[#E6C687] border-[#E6C687]/25' 
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}>
                          {card.tag}
                        </span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx);
                          }}
                          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                            isDark 
                              ? 'bg-black/30 border-white/10 text-slate-400 hover:text-white hover:border-[#E6C687]/40' 
                              : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                          }`}
                          title="Click to flip card"
                        >
                          <RotateCw className="w-3 h-3 text-luxury-gold" />
                          <span className="text-[9px] font-mono font-medium">FLIP</span>
                        </button>
                      </div>

                      {/* Title & Icon Header */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                          isDark ? 'bg-[#1A1A1E] border-white/10 text-luxury-gold' : 'bg-slate-50 border-slate-200 text-blue-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {card.title}
                          </h3>
                          <span className={`text-[10px] font-mono font-semibold tracking-wider ${
                            isDark ? 'text-luxury-gold' : 'text-blue-700'
                          }`}>
                            {card.subtitle}
                          </span>
                        </div>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed mt-3 mb-5 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {card.frontDesc}
                      </p>

                      {/* Benchmarks Matrix */}
                      <div className={`p-3.5 rounded-xl border mb-4 space-y-1.5 ${
                        isDark ? 'bg-black/40 border-white/5' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {card.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{m.label}:</span>
                            <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/5 text-xs">
                      <span className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Click card to flip
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-luxury-gold font-mono text-[11px]">
                        <span>Inspect Architecture</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Flipped 180 deg) */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 p-7 rounded-2xl border flex flex-col justify-between ${
                    isDark 
                      ? 'bg-[#18181C] border-[#E6C687]/40 shadow-xl' 
                      : 'bg-white border-blue-400 shadow-lg'
                  }`}>
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/5 dark:border-white/5">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                          <span className={`text-xs font-mono font-bold tracking-wider ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {card.backTitle.toUpperCase()}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx);
                          }}
                          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                            isDark 
                              ? 'bg-black/30 border-white/10 text-slate-400 hover:text-white' 
                              : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <RotateCw className="w-3 h-3 text-luxury-gold" />
                          <span className="text-[9px] font-mono">BACK</span>
                        </button>
                      </div>

                      <div className={`text-xs font-semibold mb-3 ${isDark ? 'text-luxury-gold' : 'text-blue-700'}`}>
                        {card.title} &bull; Delivery Specifications
                      </div>

                      {/* Technical Checklist */}
                      <div className="space-y-2.5 mb-5">
                        {card.backPoints.map((item, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-luxury-gold" />
                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Footer Actions */}
                    <div className="pt-3 border-t border-black/5 dark:border-white/5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playCyberTone('click');
                          onOpenPrototypeModal();
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                          isDark
                            ? 'bg-gradient-to-r from-luxury-gold to-amber-200 text-black'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        <span>Request This Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
