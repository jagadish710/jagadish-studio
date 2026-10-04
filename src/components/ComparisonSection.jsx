import React from 'react';
import { playCyberTone } from '../utils/audio';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Check,
} from 'lucide-react';

export default function ComparisonSection({ isDark }) {
  const traditionalAgencies = [
    {
      title: 'Hidden Monthly Maintenance Fees',
      desc: 'They charge recurring fees every single month just to "keep the website alive" and update basic plugins.',
    },
    {
      title: 'Slow 5-Day Edits',
      desc: 'Need to change a phone number or product price? You have to email them and wait days for a simple edit.',
    },
    {
      title: 'Slow, Crashing Plugins',
      desc: 'Dozens of third-party plugins that conflict, slow your website down, and crash after every update.',
    },
    {
      title: 'They Hold Your Site Hostage',
      desc: 'You do not own the source code. If you stop paying their monthly retainer, they shut your business site down.',
    },
  ];

  const ourSolution = [
    {
      title: 'No Maintenance Charges (One-Time Cost)',
      desc: 'You pay once. There are zero monthly maintenance fees and zero yearly recurring developer charges.',
    },
    {
      title: 'Self-Serve Admin Portal Included',
      desc: 'Change text, update prices, add products, and view incoming customer inquiries yourself in 10 seconds.',
    },
    {
      title: 'Sub-Second Lightning Speed (<0.4s)',
      desc: 'Built with modern code that loads instantly on any phone, ensuring top rank on Google search.',
    },
    {
      title: '100% Complete Ownership',
      desc: 'You own 100% of your source code, domain name, and files. No vendor lock-in, forever.',
    },
  ];

  return (
    <section id="why-solutions" className={`py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#0F0F0F]' : 'border-slate-200 bg-[#F8FAFC]'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
            isDark 
              ? 'bg-[#181818] border-[#673DE6]/40 text-[#A78BFA] shadow-[0_0_20px_rgba(103,61,230,0.3)]' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <Zap className={`w-3.5 h-3.5 ${isDark ? 'text-[#A78BFA]' : 'text-blue-600'}`} />
            <span>SOLUTIONS VS TRADITIONAL WEBSITES</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            WE PROVIDE SOLUTIONS, <br />
            <span className="text-gradient-main">NOT JUST A WEBSITE</span>
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Most web agencies trap you with monthly retainers. We deliver a complete business system that you fully control and own forever.
          </p>
        </div>

        {/* Side-by-Side Comparison Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Traditional Agency Traps */}
          <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
            isDark 
              ? 'bg-[#161214] border-red-500/25 text-slate-300' 
              : 'bg-white border-red-200 text-slate-700 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between border-b border-red-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2 text-red-600 font-mono text-sm font-bold">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span>TRADITIONAL WEB AGENCIES</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-200">
                  RECURRING EXPENSE
                </span>
              </div>

              <div className="space-y-6">
                {traditionalAgencies.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-6 border-t text-xs font-mono ${
              isDark ? 'border-red-500/20 text-slate-400' : 'border-slate-100 text-slate-500'
            }`}>
              * The hidden trap: paying \$100 to \$300 every month for years just for small edits.
            </div>
          </div>

          {/* Right: Our Solution */}
          <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden ${
            isDark 
              ? 'bg-[#18181D] border-[#8B5CF6]/40 shadow-xl' 
              : 'bg-white border-slate-200 text-slate-800 shadow-lg'
          }`}>
            <div>
              <div className={`flex items-center justify-between border-b pb-4 mb-6 ${
                isDark ? 'border-emerald-500/25' : 'border-slate-100'
              }`}>
                <div className={`flex items-center gap-2 font-mono text-sm font-bold ${
                  isDark ? 'text-luxury-gold' : 'text-slate-900'
                }`}>
                  <Zap className={`w-5 h-5 ${isDark ? 'text-[#8B5CF6]' : 'text-blue-600'}`} />
                  <span>WHAT WE DELIVER</span>
                </div>
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                  isDark 
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' 
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  ONE-TIME INVESTMENT
                </span>
              </div>

              <div className="space-y-6">
                {ourSolution.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                      isDark ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-6 border-t flex items-center justify-between text-xs font-mono ${
              isDark ? 'border-white/10 text-luxury-gold' : 'border-slate-100 text-slate-800 font-semibold'
            }`}>
              <span className="font-bold">ZERO MAINTENANCE CHARGES</span>
              <span>100% OWNERSHIP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
