import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Activity, 
  HeartPulse, 
  Cpu, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  ExternalLink
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function InteractiveCardsSection({ isDark, onOpenPrototypeModal }) {
  const [selectedDivision, setSelectedDivision] = useState(0);

  const divisions = [
    {
      id: 'cloud',
      title: 'Merqurie Cloud',
      category: 'ENTERPRISE PLATFORMS',
      icon: Cloud,
      tagline: 'High-Performance Web Platforms & Self-Serve Admin Infrastructure',
      description: 'Ultra-fast business platforms deployed on distributed edge networks. Includes custom visual admin cockpits, lead management, and sub-second page performance with zero ongoing maintenance fees.',
      metrics: [
        { label: 'Latency', value: '< 0.3s' },
        { label: 'Maintenance Cost', value: '₹0 / Year' },
        { label: 'Availability', value: '99.99%' },
      ],
      features: [
        'Proprietary Visual Admin Cockpit',
        'Direct WhatsApp & CRM synchronization',
        'Automatic SSL, CDN & Edge Caching',
        '100% full source code ownership',
      ],
      reference: 'Tailored for Global & Indian Enterprises',
    },
    {
      id: 'sports',
      title: 'Merqurie Sports',
      category: 'VERTICAL SAAS',
      icon: Activity,
      tagline: 'Complete Martial Arts, Taekwondo & Athletic Academy Ecosystems',
      description: 'End-to-end management systems tailored for martial arts dojos, sports training facilities, and academies. Handles student belt progressions, attendance tracking, and tournament registrations.',
      metrics: [
        { label: 'Production Proof', value: 'upskskarate.com' },
        { label: 'Student Enrolments', value: '1,000+' },
        { label: 'Automation', value: '100% Real-time' },
      ],
      features: [
        'Belt grading & progression records',
        'Event & tournament registration portal',
        'Automated parent notifications via WhatsApp',
        'Mobile-friendly student directory',
      ],
      reference: 'Featured System: UPSKS Karate Global Academy',
    },
    {
      id: 'health',
      title: 'Merqurie Health',
      category: 'CLINICAL SYSTEMS',
      icon: HeartPulse,
      tagline: 'Healthcare Management, Clinic Workflows & Patient Portals',
      description: 'Streamlined clinical operations software engineered for medical clinics, dental studios, and wellness centers. Clean, HIPAA-conscious interfaces with effortless scheduling and zero maintenance debt.',
      metrics: [
        { label: 'Patient Experience', value: 'Sub-second' },
        { label: 'Schedule Leakage', value: '-85%' },
        { label: 'Security', value: 'End-to-End' },
      ],
      features: [
        'One-click WhatsApp appointment confirmation',
        'Digital patient registration & inquiry queues',
        'Doctor schedule management dashboard',
        'Zero monthly software license traps',
      ],
      reference: 'Tailored for Independent Practices & Clinics',
    },
    {
      id: 'industrial',
      title: 'Merqurie Industrial',
      category: 'MANUFACTURING & ERP',
      icon: Cpu,
      tagline: 'Machinery Portals, Product Catalogs & Industrial Automation',
      description: 'Heavy machinery and engineering portals with intelligent digital spec sheets, instant RFQ (Request for Quote) flows, and supplier communication pipelines.',
      metrics: [
        { label: 'Production Proof', value: 'pmssolution' },
        { label: 'Catalog Speed', value: 'Instant' },
        { label: 'Inquiry Lift', value: '+320%' },
      ],
      features: [
        'Full industrial equipment specification catalog',
        'Instant multi-channel RFQ lead routing',
        'High-resolution blueprint & machinery viewer',
        'SEO dominance for technical component search',
      ],
      reference: 'Featured System: PMS Solutions Engineering',
    },
    {
      id: 'mobility',
      title: 'Merqurie Mobility',
      category: 'FUTURE HARDWARE',
      icon: Compass,
      tagline: 'Next-Generation Electric Boards & Intelligent Micro-Mobility',
      description: 'The physical frontier of the Merqurie speed philosophy. Advanced electric skateboards and personal urban mobility hardware powered by intelligent telemetry and clean engineering.',
      metrics: [
        { label: 'Philosophy', value: 'Mercury Speed' },
        { label: 'Engineering', value: 'Precision' },
        { label: 'Architecture', value: 'In Development' },
      ],
      features: [
        'Precision brushless motor telemetry',
        'Regenerative braking energy recovery',
        'Integrated mobile companion app',
        'Crafted for urban transit enthusiasts',
      ],
      reference: 'Brand Division: Merqurie Boards & Mobility',
    },
  ];

  const current = divisions[selectedDivision];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#121214]' : 'border-slate-200/80 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Multi-Division Technology Ecosystem</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            One Unified Architecture. <br />
            <span className={isDark ? 'text-[#E6C687]' : 'text-blue-700'}>
              Specialized Industry Systems.
            </span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Explore the divisions of the Merqurie ecosystem. Every platform is custom-engineered for maximum operational leverage and zero recurring overhead.
          </p>
        </div>

        {/* Division Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            const isSelected = selectedDivision === idx;
            return (
              <button
                key={div.id}
                onClick={() => {
                  playCyberTone('click');
                  setSelectedDivision(idx);
                }}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-medium flex items-center gap-2.5 transition-all shrink-0 cursor-pointer border ${
                  isSelected
                    ? isDark
                      ? 'bg-[#1E1E24] border-[#E6C687]/50 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-900 text-white shadow-xs'
                    : isDark
                      ? 'bg-[#141417]/80 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? (isDark ? 'text-[#E6C687]' : 'text-blue-400') : 'opacity-60'}`} />
                <span>{div.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Division Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`p-6 sm:p-10 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#161619] border-white/10 shadow-xl' 
                : 'bg-slate-50/70 border-slate-200 shadow-sm'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Division Overview */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded border ${
                      isDark 
                        ? 'bg-black/30 text-[#E6C687] border-[#E6C687]/20' 
                        : 'bg-white text-blue-700 border-blue-200'
                    }`}>
                      {current.category}
                    </span>
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {current.reference}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-bold font-display mb-3 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {current.title}
                  </h3>

                  <p className={`text-sm sm:text-base font-medium mb-3 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {current.tagline}
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {current.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {current.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isDark ? 'text-[#E6C687]' : 'text-blue-600'
                        }`} />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/5">
                  <button
                    onClick={() => {
                      playCyberTone('click');
                      onOpenPrototypeModal();
                    }}
                    className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                      isDark
                        ? 'bg-gradient-to-r from-luxury-gold to-amber-300 text-black'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>Request Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Architectural Metrics & Specifications */}
              <div className={`lg:col-span-5 p-6 rounded-xl border flex flex-col justify-between ${
                isDark ? 'bg-[#111113] border-white/5' : 'bg-white border-slate-200'
              }`}>
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/5 dark:border-white/5">
                    <span className={`text-xs font-mono font-semibold tracking-wider ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      ARCHITECTURAL METRICS
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {current.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center justify-between">
                        <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {metric.label}
                        </span>
                        <span className={`text-sm font-mono font-bold ${
                          isDark ? 'text-[#E6C687]' : 'text-slate-900'
                        }`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-lg text-xs leading-relaxed border ${
                  isDark 
                    ? 'bg-black/30 border-white/5 text-slate-400' 
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}>
                  <span className="font-semibold text-slate-200 dark:text-white">Enterprise Standards: </span>
                  Every system is built on modern decoupled edge architecture with zero dependency on fragile 3rd-party plugin subscriptions.
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
