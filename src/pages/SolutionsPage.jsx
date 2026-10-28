import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Globe,
  MessageCircle,
  Sparkles,
  Layers,
  ShoppingBag,
} from 'lucide-react';

export default function SolutionsPage({ onOpenPrototypeModal }) {
  const solutions = [
    {
      id: 'websites',
      title: 'High-Converting Business Websites',
      tag: 'WEBSITE PLATFORMS',
      desc: 'Custom-engineered digital storefronts built to turn casual visitors into paying customers. Deployed on global edge networks with sub-second page performance, optimized Schema.org for Google ranking, and direct WhatsApp lead routing.',
      highlights: [
        'Sub-0.3s lightning load speed on mobile & desktop',
        'Direct WhatsApp button for instant customer inquiry conversion',
        'Google Core Web Vitals score 99/100 for top organic rankings',
        'Zero monthly hosting or maintenance fees (₹0/year)',
      ],
      icon: Globe,
    },
    {
      id: 'admin',
      title: 'Visual Self-Serve Admin Portal',
      tag: 'CLIENT CONTROL',
      desc: 'Never pay an agency a monthly retainer or wait days for simple text edits. Manage your headlines, pricing, catalog items, and announcements directly from your phone or laptop in 10 seconds.',
      highlights: [
        'Secure password-protected visual editing dashboard',
        'Instant live synchronization with zero downtime',
        'Manage catalog items, product pricing, and banners',
        'Zero developer dependency & zero monthly retainer fees',
      ],
      icon: Database,
    },
    {
      id: 'ecommerce',
      title: 'Interactive E-Commerce & Catalogs',
      tag: 'DIGITAL COMMERCE',
      desc: 'Sleek, lightning-fast digital storefronts with real-time product filters, interactive spec sheets, and instant WhatsApp one-click checkout. No Shopify monthly app tax, no transaction percentage cuts.',
      highlights: [
        'Instant WhatsApp order & RFQ lead pipeline',
        'High-resolution interactive product & catalog views',
        'Zero ongoing percentage cuts or SaaS subscription traps',
        'Automated order inquiry routing directly to your phone',
      ],
      icon: ShoppingBag,
    },
    {
      id: 'custom',
      title: 'Custom Full-Stack Web Systems & Portals',
      tag: 'CUSTOM ENGINEERING',
      desc: 'Tailor-engineered software systems for business workflows, student rosters (proven at upskskarate.com), industrial machinery catalogs (proven at pmssolution), and custom client pipelines.',
      highlights: [
        'Distributed edge serverless PostgreSQL architecture',
        'Role-based client, student, or staff access controls',
        'Automated WhatsApp and multi-channel inquiry workflows',
        '100% intellectual property sovereignty transferred upon launch',
      ],
      icon: Layers,
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
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>WEBSITE SOLUTIONS &bull; ZERO MAINTENANCE RETAINERS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display mb-6 text-white leading-tight">
          Website Platforms.<br />
          <span className="text-zinc-400">Zero Agency Retainers.</span>
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-zinc-400">
          We engineer high-performance website platforms, self-serve client admin cockpits, and bespoke web applications. You pay for engineering once; you never receive recurring maintenance bills.
        </p>

        {/* Action Header CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className="px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm"
          >
            <span>REQUEST ARCHITECTURE PROPOSAL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="px-5 py-3 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* Solutions Cards */}
      <div className="space-y-8 mb-20">
        {solutions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-10 rounded-2xl border transition-all bg-[#0e0e12] border-zinc-800 hover:border-zinc-700 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border border-zinc-800 bg-zinc-900 text-zinc-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="text-zinc-300">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-800 bg-zinc-950">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-zinc-900 border border-zinc-800 text-white">
                    <Icon className="w-7 h-7 text-zinc-300" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono mt-1 text-zinc-500">
                    Zero Maintenance &bull; Edge Native
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
