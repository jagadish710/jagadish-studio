import React from 'react';
import { playCyberTone } from '../utils/audio';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function ComparisonSection({ isDark }) {
  const legacyApproaches = [
    {
      title: 'Recurring Maintenance Traps',
      desc: 'Legacy agencies charge ongoing monthly retainer fees simply to keep basic hosting alive and patch outdated plugins.',
    },
    {
      title: 'Days-Long Administrative Latency',
      desc: 'Minor textual changes or product adjustments require filing support tickets and waiting days for developer action.',
    },
    {
      title: 'Fragile Multi-Plugin Bloat',
      desc: 'Over-reliance on 30+ third-party WordPress extensions that clash, degrade Core Web Vitals, and introduce security vulnerabilities.',
    },
    {
      title: 'Vendor Lock-In & Code Hostage',
      desc: 'Proprietary hosting or withheld repositories that prevent clients from migrating or fully owning their digital assets.',
    },
  ];

  const merqurieStandard = [
    {
      title: 'Zero Maintenance Architecture',
      desc: 'Serverless, edge-cached deployment models that run indefinitely with zero required monthly maintenance retainers.',
    },
    {
      title: 'Real-Time Executive Cockpit',
      desc: 'Dedicated self-serve administration dashboard enabling non-technical stakeholders to update content and view leads in seconds.',
    },
    {
      title: 'Sub-0.3s Pure Engineering Speed',
      desc: 'Clean React 19 and modern decoupled architecture scoring 99+ on Google PageSpeed for superior algorithmic ranking.',
    },
    {
      title: '100% Intellectual Property Sovereignty',
      desc: 'Complete legal and technical ownership of your source code, database schemas, domains, and operational data forever.',
    },
  ];

  return (
    <section id="why-solutions" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-[#09090b]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase tracking-wider">Architectural Comparison</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-3">
            The Merqurie Standard{' '}
            <span className="text-zinc-400">vs. Legacy Web Agencies</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            How our decoupled, serverless engineering foundation fundamentally replaces slow retainer models with permanent operational leverage.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Legacy Agencies Card */}
          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-800/80 bg-zinc-950/60">
            <div className="flex items-center gap-2.5 pb-3 mb-5 border-b border-zinc-800">
              <XCircle className="w-4 h-4 text-zinc-500" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                Legacy Agency Retainer Model
              </h3>
            </div>

            <div className="space-y-5">
              {legacyApproaches.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-zinc-600 font-mono text-xs font-bold mt-0.5">0{idx + 1}.</span>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-zinc-300">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merqurie Standard Card */}
          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-700 bg-[#0e0e12] shadow-xl">
            <div className="flex items-center gap-2.5 pb-3 mb-5 border-b border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                The Merqurie Engineering Standard
              </h3>
            </div>

            <div className="space-y-5">
              {merqurieStandard.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold mt-0.5 text-zinc-400">0{idx + 1}.</span>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
