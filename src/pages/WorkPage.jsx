import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Globe,
  Database,
  Cpu,
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function WorkPage({ isDark, onOpenPrototypeModal }) {
  const projects = [
    {
      id: 'upsks',
      division: 'MERQURIE SPORTS',
      title: 'UPSKS Karate Global Academy Platform',
      client: 'United Professional Shito-Ryu Karate-Do Shotokai',
      domain: 'upskskarate.com',
      liveUrl: 'https://upskskarate.com',
      tag: 'Martial Arts SaaS',
      summary: 'Centralized student roster, official belt advancement records, tournament sign-ups, and instant mobile access with zero recurring maintenance fees.',
      deliverables: [
        'Global Student Registration & Roster',
        'Official Dan / Kyu Belt Records Database',
        'Sub-0.4s Mobile Core Web Vitals',
        'Automated WhatsApp Parent Communication',
      ],
      metrics: [
        { label: 'Mobile CWV Score', val: '99/100' },
        { label: 'Active Students', val: '1,000+' },
        { label: 'Ongoing Retainer', val: '₹0 / Year' },
      ],
      icon: Globe,
    },
    {
      id: 'pms',
      division: 'MERQURIE INDUSTRIAL',
      title: 'PMS Machine Solutions Engineering Portal',
      client: 'PMS Solutions India',
      domain: 'pmssolution.jagadish.online',
      liveUrl: 'https://pmssolution.jagadish.online',
      tag: 'Machinery ERP Catalog',
      summary: 'High-speed industrial machinery catalog for vacuum sealers and packaging automation, equipped with real-time WhatsApp RFQ routing and custom admin controls.',
      deliverables: [
        'Machinery Specification & Video Catalog',
        'Instant Multi-Channel RFQ Routing',
        'Visual Self-Serve Administration Cockpit',
        'Sub-0.4s Google PageSpeed Loading',
      ],
      metrics: [
        { label: 'First Contentful Paint', val: '0.38s' },
        { label: 'Inquiry Conversion', val: '+320%' },
        { label: 'Code Ownership', val: '100%' },
      ],
      icon: Cpu,
    },
    {
      id: 'software',
      division: 'MERQURIE CLOUD',
      title: 'Enterprise Management & Clinical ERPs',
      client: 'Multi-Industry Enterprise Partners',
      domain: 'Private Cloud Infrastructure',
      liveUrl: null,
      tag: 'Cloud Software Systems',
      summary: 'Tailor-made software tools for operations, customer booking, billing, and real-time inventory management.',
      deliverables: [
        'Inventory & Automated Invoicing Pipelines',
        'Role-Based Executive & Staff Access',
        'Distributed Edge PostgreSQL Database Architecture',
        'WhatsApp Automated Notification Workflows',
      ],
      metrics: [
        { label: 'Maintenance Cost', val: '₹0' },
        { label: 'Uptime Reliability', val: '99.99%' },
        { label: 'License Overheads', val: '₹0' },
      ],
      icon: Database,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border bg-zinc-900 border-zinc-800 text-zinc-300">
          <Award className="w-3.5 h-3.5 text-zinc-400" />
          <span>VERIFIED PRODUCTION DEPLOYMENTS &bull; 100+ SYSTEMS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display mb-4 leading-tight text-white">
          Production Deployments.<br />
          <span className="text-zinc-400">Proven At Scale.</span>
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-zinc-400">
          Over 100 production systems engineered and deployed worldwide. Explore active platforms powering sports academies, industrial operations, and enterprise workflows.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className="px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm"
          >
            <span>DISCUSS SIMILAR ARCHITECTURE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20reviewed%20your%20production%20work%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-mono text-xs font-semibold transition-all cursor-pointer bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* Case Studies */}
      <div className="space-y-10">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-10 rounded-2xl border transition-all bg-[#0e0e12] border-zinc-800 hover:border-zinc-700 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border bg-zinc-900 text-zinc-300 border-zinc-800">
                      {project.division}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {project.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="text-zinc-300">{d}</span>
                      </div>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <div className="pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors text-white hover:text-zinc-300 underline underline-offset-4"
                      >
                        <span>Visit Live Platform ({project.domain})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Metrics */}
                <div className="lg:col-span-4 p-6 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                    <span className="text-xs font-mono font-semibold text-zinc-300">
                      SYSTEM BENCHMARKS
                    </span>
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>

                  <div className="space-y-3">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">{m.label}</span>
                        <span className="font-mono font-bold text-white">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
                    Engineered &bull; Deployed &bull; Zero Recurring Fees
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
