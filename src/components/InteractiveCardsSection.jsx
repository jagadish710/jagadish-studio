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

export default function InteractiveCardsSection({ onOpenPrototypeModal }) {
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-[#0A0A0C]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase tracking-wider">Website Solutions &bull; Click Card To Inspect Specs</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-3">
            Architectural Standards.{' '}
            <span className="text-zinc-400">Zero Maintenance Retainers.</span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            We provide complete high-performance website solutions, not just a fragile WordPress template. Click any card below to flip and inspect the technical specifications.
          </p>
        </div>

        {/* 4 Cards 3D Flip Grid (Sleek Black, Charcoal & Grey) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((card, idx) => {
            const Icon = card.icon;
            const isFlipped = !!flippedCards[idx];

            return (
              <div
                key={card.id}
                className="perspective-1000 min-h-[340px] w-full cursor-pointer select-none"
                onClick={() => toggleCardFlip(idx)}
              >
                <div 
                  className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out rounded-2xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT FACE (Sleek Charcoal & Hairline Grey) */}
                  <div className="absolute inset-0 backface-hidden p-6 sm:p-7 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 bg-[#0E0E12] flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/80">
                    <div>
                      {/* Top Bar with Badge & Flip Indicator */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {card.tag}
                        </span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx);
                          }}
                          className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs flex items-center gap-1 transition-all"
                          title="Click to flip card"
                        >
                          <RotateCw className="w-3 h-3 text-zinc-400" />
                          <span className="text-[9px] font-mono font-medium">FLIP</span>
                        </button>
                      </div>

                      {/* Title & Icon Header */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800 bg-zinc-900 text-zinc-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                            {card.title}
                          </h3>
                          <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 block mt-0.5">
                            {card.subtitle}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 mb-5">
                        {card.frontDesc}
                      </p>

                      {/* Benchmarks Matrix */}
                      <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-950/60 mb-4 space-y-1.5">
                        {card.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                            <span className="text-zinc-500">{m.label}:</span>
                            <span className="font-bold text-zinc-200">{m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-xs">
                      <span className="font-mono text-[10px] text-zinc-500">
                        Click card to flip
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-zinc-300 font-mono text-[11px] hover:text-white">
                        <span>Inspect Specs</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Flipped 180 deg) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 sm:p-7 rounded-2xl border border-zinc-700 bg-zinc-950 flex flex-col justify-between shadow-2xl">
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className="text-xs font-mono font-bold tracking-wider text-white">
                            {card.backTitle.toUpperCase()}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx);
                          }}
                          className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white text-xs flex items-center gap-1 transition-all"
                        >
                          <RotateCw className="w-3 h-3 text-zinc-400" />
                          <span className="text-[9px] font-mono">BACK</span>
                        </button>
                      </div>

                      <div className="text-xs font-semibold mb-3 text-zinc-300">
                        {card.title} &bull; Delivery Specifications
                      </div>

                      {/* Technical Checklist */}
                      <div className="space-y-2 mb-4">
                        {card.backPoints.map((item, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                            <span className="text-zinc-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Footer Actions */}
                    <div className="pt-3 border-t border-zinc-800">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playCyberTone('click');
                          onOpenPrototypeModal();
                        }}
                        className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 transition-all cursor-pointer shadow-sm"
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
