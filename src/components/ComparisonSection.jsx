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
    <section id="why-solutions" className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#101012]' : 'border-slate-200/80 bg-[#F8FAFC]'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Architectural Comparison</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            The Merqurie Standard <br />
            <span className={isDark ? 'text-[#E6C687]' : 'text-blue-700'}>
              vs. Legacy Web Agencies
            </span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            How our decoupled, serverless engineering foundation fundamentally replaces slow retainer models with permanent operational leverage.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Legacy Agencies Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border ${
            isDark 
              ? 'bg-[#141416]/70 border-red-500/15' 
              : 'bg-white border-red-100 shadow-xs'
          }`}>
            <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-red-500/10">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>
                Legacy Agency Retainer Model
              </h3>
            </div>

            <div className="space-y-6">
              {legacyApproaches.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="text-red-500/80 font-mono text-xs font-bold mt-0.5">0{idx + 1}.</span>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merqurie Standard Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border ${
            isDark 
              ? 'bg-[#151518] border-[#E6C687]/30 shadow-lg' 
              : 'bg-white border-blue-200/80 shadow-sm'
          }`}>
            <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-black/5 dark:border-white/5">
              <CheckCircle2 className={`w-5 h-5 ${isDark ? 'text-[#E6C687]' : 'text-blue-600'}`} />
              <h3 className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-[#E6C687]' : 'text-blue-700'
              }`}>
                The Merqurie Engineering Standard
              </h3>
            </div>

            <div className="space-y-6">
              {merqurieStandard.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className={`font-mono text-xs font-bold mt-0.5 ${
                    isDark ? 'text-[#E6C687]' : 'text-blue-600'
                  }`}>0{idx + 1}.</span>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
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
