import React from 'react';
import { motion } from 'framer-motion';
import {
  XCircle,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export default function ComparisonSection({ isDark = true }) {
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
    <motion.section 
      id="why-solutions" 
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
        isDark ? 'border-zinc-900 bg-[#09090b]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
            <span className="uppercase tracking-wider">Architectural Comparison</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight font-display mb-3 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            The Merqurie Standard{' '}
            <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>vs. Legacy Web Agencies</span>
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            How our decoupled, serverless engineering foundation fundamentally replaces slow retainer models with permanent operational leverage.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Legacy Agencies Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border ${
            isDark ? 'border-zinc-800/80 bg-zinc-950/60' : 'border-slate-200 bg-slate-50'
          }`}>
            <div className={`flex items-center gap-2.5 pb-3 mb-5 border-b ${
              isDark ? 'border-zinc-800' : 'border-slate-200'
            }`}>
              <XCircle className="w-4 h-4 text-zinc-500" />
              <h3 className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-zinc-400' : 'text-slate-500'
              }`}>
                Legacy Agency Retainer Model
              </h3>
            </div>

            <div className="space-y-5">
              {legacyApproaches.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className={`font-mono text-xs font-bold mt-0.5 ${
                    isDark ? 'text-zinc-600' : 'text-slate-400'
                  }`}>0{idx + 1}.</span>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      isDark ? 'text-zinc-300' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-zinc-500' : 'text-slate-500'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merqurie Standard Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border shadow-xl ${
            isDark ? 'border-zinc-700 bg-[#0e0e12]' : 'border-slate-300 bg-white shadow-lg ring-1 ring-slate-200'
          }`}>
            <div className={`flex items-center gap-2.5 pb-3 mb-5 border-b ${
              isDark ? 'border-zinc-800' : 'border-slate-200'
            }`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <h3 className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                The Merqurie Engineering Standard
              </h3>
            </div>

            <div className="space-y-5">
              {merqurieStandard.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className={`font-mono text-xs font-bold mt-0.5 ${
                    isDark ? 'text-zinc-400' : 'text-slate-400'
                  }`}>0{idx + 1}.</span>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-zinc-400' : 'text-slate-600'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
