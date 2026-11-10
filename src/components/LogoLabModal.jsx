import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  Smartphone, 
  Monitor, 
  Layers, 
  Moon, 
  Sun,
  ShieldCheck,
  Zap,
  ArrowRight,
  Flame,
  Download
} from 'lucide-react';
import { 
  LogoConcept1, 
  LogoConcept2, 
  LogoConcept3, 
  LogoConcept4 
} from './LogoConcepts';

export default function LogoLabModal({ isOpen, onClose, onSelectConcept }) {
  const [selectedConcept, setSelectedConcept] = useState('concept1');
  const [previewTheme, setPreviewTheme] = useState('dark'); // 'dark' | 'light'

  if (!isOpen) return null;

  const concepts = [
    {
      id: 'concept1',
      number: '01',
      name: 'The Quicksilver Möbius',
      tagline: 'Continuous Fluid Metal Ribbon & Crimson Core',
      Component: LogoConcept1,
      philosophy: 'Inspired by the physical properties of Mercury—liquid, reflective, frictionless. An unbroken Möbius ribbon forming the letter M with a signature planetary orbit arc and an energy core.',
      personality: 'Futuristic, Fluid, Apple / Linear Caliber',
      bestFor: 'Master brand, SaaS ecosystem, fluid mobile UI apps',
      subProducts: ['Merqurie Studio', 'Merqurie Cloud', 'Merqurie Engine'],
    },
    {
      id: 'concept2',
      number: '02',
      name: 'The Sonic Horizon',
      tagline: 'Aerodynamic Monolithic Wings & Laser Crest',
      Component: LogoConcept2,
      philosophy: 'Engineered with strict golden-ratio mathematical angles. Two monolithic titanium pillars bridged by an aerodynamic chevron, symbolizing sub-second edge speed and unyielding performance.',
      personality: 'Monolithic, High-Frequency, Stripe / Vercel Caliber',
      bestFor: 'High-speed cloud infrastructure, enterprise engineering',
      subProducts: ['Merqurie Edge', 'Merqurie OS', 'Merqurie Networks'],
    },
    {
      id: 'concept3',
      number: '03',
      name: 'The Infinite Quicksilver Knot',
      tagline: 'Isometric Closed-Loop M + Infinity Symbol',
      Component: LogoConcept3,
      philosophy: 'A single continuous geometric loop that represents digital sovereignty and zero maintenance debt. Embodying perpetual reliability and infinite uptime.',
      personality: 'Timeless, Clean, Architectural & Sculptural',
      bestFor: 'Favicons at 16px, hardware swag, universal app icons',
      subProducts: ['Merqurie Core', 'Merqurie Hub', 'Merqurie Pay'],
    },
    {
      id: 'concept4',
      number: '04',
      name: 'The Sovereign Hex-Shield',
      tagline: '3D Titanium Faceted Crystal & Negative-Space M',
      Component: LogoConcept4,
      philosophy: 'A protective hexagonal chassis with faceted negative space carving out a bold, confident letter M. Signifies 100% intellectual property sovereignty and bank-grade edge security.',
      personality: 'Authoritative, Cryptographic, Supabase / Datadog Caliber',
      bestFor: 'Enterprise security, databases, client admin cockpits',
      subProducts: ['Merqurie Shield', 'Merqurie Vault', 'Merqurie Admin'],
    },
  ];

  const active = concepts.find(c => c.id === selectedConcept) || concepts[0];
  const ActiveLogo = active.Component;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#0E0F14] text-white border border-white/10 shadow-3xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold font-display tracking-tight text-white">
                  Merqurie Master Brand Logo Lab
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  4 Concepts
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Evaluating candidate identities for all future ecosystem products
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Dark / Light Preview Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setPreviewTheme('dark')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  previewTheme === 'dark' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Preview on Dark Void (#07070A)"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setPreviewTheme('light')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  previewTheme === 'light' ? 'bg-white text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Preview on Clean Light (#FAFAFC)"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Concept Selector Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {concepts.map((c) => {
              const isSelected = selectedConcept === c.id;
              const Comp = c.Component;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcept(c.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative group flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-rose-500/[0.08] border-rose-500 shadow-lg shadow-rose-500/10' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Option {c.number}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    )}
                  </div>

                  <div className="w-12 h-12 mx-auto my-2 flex items-center justify-center">
                    <Comp className="w-12 h-12" isDark={true} />
                  </div>

                  <div className="mt-2 text-center w-full">
                    <strong className="text-xs font-bold text-white block truncate">
                      {c.name}
                    </strong>
                    <span className="text-[10px] font-mono text-slate-400 block truncate mt-0.5">
                      {c.personality.split(',')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Concept Deep Dive Inspection Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Live Visual Canvas Test (Dark vs Light Preview) */}
            <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border transition-all duration-400 flex flex-col justify-between relative overflow-hidden ${
              previewTheme === 'dark' 
                ? 'bg-[#07070A] border-white/10 shadow-2xl' 
                : 'bg-[#FAFAFC] text-slate-900 border-slate-200 shadow-2xl'
            }`}>
              {/* Subtle matrix dots */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(${previewTheme === 'dark' ? '#FFFFFF' : '#0F172A'} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-white/10 mb-6">
                  <span className={previewTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                    CANVAS // {previewTheme.toUpperCase()} MODE INSPECTION
                  </span>
                  <span className="text-rose-500 font-bold">
                    VECTOR SVG 1:1 RATIO
                  </span>
                </div>

                {/* Main Hero Emblem Display */}
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 mb-6 drop-shadow-[0_15px_30px_rgba(225,29,72,0.25)] hover:scale-105 transition-transform duration-300">
                    <ActiveLogo className="w-full h-full" isDark={previewTheme === 'dark'} />
                  </div>

                  {/* Lockup with Wordmark */}
                  <div className="space-y-1">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold font-display tracking-[0.2em] uppercase ${
                      previewTheme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      MERQURIE
                    </h3>
                    <span className={`text-[10px] font-mono tracking-[0.3em] uppercase block ${
                      previewTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      INDEPENDENT WEB SYSTEMS
                    </span>
                  </div>
                </div>
              </div>

              {/* Multi-Scale Verification Strip (App Icon, Desktop, Favicon) */}
              <div className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono relative z-10 ${
                previewTheme === 'dark' ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}>
                {/* 1. App Icon Scale (macOS / iOS Squircle) */}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-black p-2 border border-white/20 shadow-md flex items-center justify-center">
                    <ActiveLogo className="w-6 h-6" isDark={true} />
                  </div>
                  <div>
                    <span className="block font-bold">App Icon</span>
                    <span className="text-[10px] text-slate-500">64px Squircle</span>
                  </div>
                </div>

                {/* 2. Micro Favicon Scale (16px / 32px) */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 p-1 border border-white/15 shadow-2xs flex items-center justify-center">
                    <ActiveLogo className="w-4 h-4" isDark={true} />
                  </div>
                  <div>
                    <span className="block font-bold">Favicon</span>
                    <span className="text-[10px] text-slate-500">16px Legibility</span>
                  </div>
                </div>

                {/* 3. Status Chip */}
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  ✓ Scalable Vector
                </div>
              </div>

            </div>

            {/* Right Column: Rationale & Ecosystem Future Proofing */}
            <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-rose-500 uppercase tracking-widest font-bold block mb-1">
                    CONCEPT {active.number} ANALYSIS
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {active.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {active.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {active.philosophy}
                </p>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5 text-xs">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    BRAND PERSONALITY
                  </span>
                  <p className="text-rose-300 font-semibold text-xs">
                    {active.personality}
                  </p>
                </div>

                {/* Ecosystem Products Scalability Test */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Future Product Line Expansion:
                  </span>
                  <div className="space-y-1.5">
                    {active.subProducts.map((prod) => (
                      <div key={prod} className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <ActiveLogo className="w-3.5 h-3.5" isDark={true} />
                          <span className="text-white font-bold">{prod}</span>
                        </div>
                        <span className="text-[9px] text-slate-400">Official Suite</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <button
                  onClick={() => {
                    if (onSelectConcept) onSelectConcept(active.id);
                    onClose();
                  }}
                  className="btn-crimson-primary w-full py-3 text-xs uppercase font-mono tracking-wider cursor-pointer shadow-lg shadow-rose-600/20 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Choose Option {active.number} as Brand Master</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
