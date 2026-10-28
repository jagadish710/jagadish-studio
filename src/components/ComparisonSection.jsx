import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function ComparisonSection({ onOpenPrototypeModal, isDark = true }) {

  return (
    <motion.section 
      id="comparison-standard" 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-12 sm:py-20 px-3 sm:px-6 lg:px-8 relative z-10 border-t ${
        isDark ? 'border-zinc-900 bg-[#09090b]' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
              : 'bg-white border-slate-200 text-slate-800 shadow-2xs'
          }`}>
            <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
            <span className="uppercase tracking-wider">The Financial &amp; Speed Truth</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight font-display mb-3 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            The Merqurie Standard{' '}
            <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>vs. Traditional Agencies</span>
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            Traditional web agencies trap businesses in recurring monthly retainers for simple websites. See why forward-thinking companies switch to Merqurie.
          </p>
        </div>

        {/* 2-Column Cartoon Character Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT: The Legacy Agency (Cartoon Character & Pain Points) */}
          <div className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-zinc-950/90 border-red-900/30 shadow-[0_0_25px_rgba(239,68,68,0.06)]' 
              : 'bg-white border-red-200 shadow-md'
          }`}>
            
            {/* Top Tag */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-red-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-red-500">
                  Legacy Agency Retainer Trap
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                Fragile &amp; Expensive
              </span>
            </div>

            {/* Cartoon Character Illustration: The Stressed Agency Middleman */}
            <div className={`p-4 rounded-2xl mb-6 flex flex-col sm:flex-row items-center gap-4 border ${
              isDark ? 'bg-red-950/20 border-red-900/30' : 'bg-red-50/80 border-red-200/80'
            }`}>
              {/* SVG Character Avatar: Sweat, Tangled Wires, Huge Invoices */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center relative">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  {/* Smoke clouds behind */}
                  <circle cx="20" cy="30" r="10" fill="#71717A" opacity="0.4" />
                  <circle cx="80" cy="25" r="12" fill="#71717A" opacity="0.3" />
                  
                  {/* Stressed Head */}
                  <circle cx="50" cy="45" r="28" fill="#F87171" />
                  {/* Messy unkempt hair */}
                  <path d="M25 35 Q35 15 50 20 Q65 10 75 35" stroke="#7F1D1D" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Panicked Eyes with X or dizzy swirls */}
                  <circle cx="40" cy="42" r="4" fill="#450A0A" />
                  <circle cx="60" cy="42" r="4" fill="#450A0A" />
                  <path d="M36 34 L44 38" stroke="#450A0A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M64 34 L56 38" stroke="#450A0A" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Sweat Drops */}
                  <path d="M76 40 Q80 48 76 52 Q72 48 76 40" fill="#38BDF8" />
                  <path d="M24 45 Q20 52 24 56 Q28 52 24 45" fill="#38BDF8" />
                  
                  {/* Screaming mouth */}
                  <ellipse cx="50" cy="58" rx="8" ry="6" fill="#450A0A" />
                  <path d="M44 54 Q50 56 56 54" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Tangled wires / plugin plug */}
                  <path d="M15 70 Q30 85 45 75 Q60 65 75 80" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
                  
                  {/* Huge invoice bill in hand */}
                  <rect x="58" y="55" width="28" height="34" rx="2" fill="#FFFFFF" stroke="#991B1B" strokeWidth="1.5" transform="rotate(12 58 55)" />
                  <text x="63" y="68" fill="#DC2626" fontSize="7" fontWeight="bold" transform="rotate(12 58 55)">BILL</text>
                  <text x="62" y="78" fill="#991B1B" fontSize="6" fontWeight="bold" transform="rotate(12 58 55)">₹10,000</text>
                  <text x="62" y="85" fill="#7F1D1D" fontSize="4.5" transform="rotate(12 58 55)">/ MONTH</text>
                </svg>
              </div>

              {/* Character Speech Bubble */}
              <div className="text-left">
                <div className="inline-block relative px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-red-500/30 text-xs shadow-xs">
                  <p className={`font-mono text-[11px] leading-snug ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>
                    <strong className="text-red-500">"Agency Dev:"</strong> WordPress plugin updated and broke the checkout! That will be ₹8,000 to fix, plus wait 5 days for a support ticket.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Points List */}
            <div className="space-y-3 mb-6">
              {[
                {
                  label: 'Recurring Monthly Retainer Trap',
                  desc: 'Agencies bill you ₹5,000 to ₹15,000 every single month just to keep basic shared hosting online.',
                },
                {
                  label: '3 to 7 Days Wait For Basic Edits',
                  desc: 'Changing a simple headline, phone number, or product price requires filing a developer ticket.',
                },
                {
                  label: '35+ Fragile Third-Party Plugins',
                  desc: 'Heavy WordPress themes that crash on auto-updates, load in 4.2 seconds, and fail Google CWV.',
                },
                {
                  label: 'Hostage Code & Vendor Lock-In',
                  desc: 'If you ever stop paying their monthly retainer fee, they withhold the repository and take your site down.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                      {item.label}
                    </div>
                    <div className={`text-[11px] leading-relaxed mt-0.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3-Year Waste Badge */}
            <div className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
              isDark ? 'bg-red-950/30 border-red-900/40 text-red-300' : 'bg-red-50 border-red-200 text-red-700'
            }`}>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
                <span>3-Year Retainer Cost:</span>
              </div>
              <span className="font-bold text-sm">₹1,80,000+ Lost</span>
            </div>

          </div>

          {/* RIGHT: The Merqurie Standard (Cartoon Mascot & Real Leverage) */}
          <div className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-zinc-950/90 border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.12)]' 
              : 'bg-white border-emerald-300 shadow-xl'
          }`}>
            
            {/* Top Tag */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
                  The Merqurie Standard
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                100% Client Ownership
              </span>
            </div>

            {/* Cartoon Mascot Character: Merqurie Speed Bot & Architect */}
            <div className={`p-4 rounded-2xl mb-6 flex flex-col sm:flex-row items-center gap-4 border ${
              isDark ? 'bg-emerald-950/20 border-emerald-800/40' : 'bg-emerald-50/80 border-emerald-200'
            }`}>
              {/* SVG Character Avatar: Sleek Chrome Cyber Bot with Rocket Thrusters & ₹0 Shield */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center relative">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  {/* Speed Stars / Jet Trails */}
                  <path d="M12 40 L2 42 L12 44" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M15 55 L4 58 L15 61" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 70 L8 72 L18 74" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Floating Rocket Jets under body */}
                  <ellipse cx="50" cy="85" rx="14" ry="4" fill="#10B981" opacity="0.6" />
                  <path d="M42 78 Q50 92 58 78" fill="#34D399" />
                  
                  {/* Sleek Robot Body */}
                  <rect x="32" y="46" width="36" height="32" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  
                  {/* Robot Head */}
                  <rect x="28" y="16" width="44" height="30" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                  
                  {/* Digital Visor Glowing Cyan/Emerald */}
                  <rect x="34" y="24" width="32" height="14" rx="7" fill="#064E3B" />
                  {/* Cheerful Friendly Eye Dots */}
                  <circle cx="44" cy="31" r="3.5" fill="#34D399" />
                  <circle cx="56" cy="31" r="3.5" fill="#34D399" />
                  
                  {/* Antenna */}
                  <line x1="50" y1="16" x2="50" y2="8" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="50" cy="7" r="3" fill="#34D399" />
                  
                  {/* Shield with ₹0 */}
                  <path d="M14 48 Q26 44 26 58 Q26 72 14 78 Q2 72 2 58 Q2 44 14 48" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="7" y="66" fill="#FFFFFF" fontSize="9" fontWeight="bold">₹0</text>
                  
                  {/* Mobile phone in hand showing 10s instant edit */}
                  <rect x="74" y="52" width="16" height="26" rx="3" fill="#020617" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="77" y="56" width="10" height="14" rx="1" fill="#10B981" opacity="0.4" />
                  <text x="78" y="65" fill="#34D399" fontSize="4.5" fontWeight="bold">10s</text>
                </svg>
              </div>

              {/* Character Speech Bubble */}
              <div className="text-left">
                <div className="inline-block relative px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-500/40 text-xs shadow-xs">
                  <p className={`font-mono text-[11px] leading-snug ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>
                    <strong className="text-emerald-400">"Merqurie Bot:"</strong> Deploy once on global cloud edge. Edit from your phone in 10 seconds. You pay ₹0 retainers forever and own 100% of your source code!
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 mb-6">
              {[
                {
                  label: 'Zero Recurring Retainer Fees Forever',
                  desc: 'Serverless cloud infrastructure deployed on global edge networks. Pay once on completion—₹0 recurring agency maintenance bills.',
                },
                {
                  label: '10-Second Visual Admin From Your Phone',
                  desc: 'Log into your secure portal from mobile or desktop to edit headlines, update pricing, and add products in seconds.',
                },
                {
                  label: 'Sub-0.3s Pure Engineering Speed',
                  desc: 'Scores 99/100 on Google Core Web Vitals with decoupled modern code, giving you maximum algorithmic SEO ranking.',
                },
                {
                  label: '100% Complete Intellectual Property Ownership',
                  desc: 'Full Git repository, domains, database access, and clean code handed to you on project launch. Never held hostage.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.label}
                    </div>
                    <div className={`text-[11px] leading-relaxed mt-0.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Savings Badge & Direct CTA */}
            <div className="space-y-3">
              <div className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
                isDark ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-emerald-400 fill-current" />
                  <span>Your 3-Year Maintenance Cost:</span>
                </div>
                <span className="font-bold text-sm text-emerald-400">₹0 / Year (100% Kept)</span>
              </div>

              {/* Direct Conversion Action Button */}
              <button
                onClick={() => {
                  playCyberTone('click');
                  onOpenPrototypeModal();
                }}
                className={`w-full py-3 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-101 active:scale-95 cursor-pointer shadow-md ${
                  isDark
                    ? 'bg-white hover:bg-zinc-200 text-zinc-950'
                    : 'bg-slate-950 hover:bg-slate-800 text-white'
                }`}
              >
                <span>CHOOSE MERQURIE FOR YOUR WEBSITE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}
