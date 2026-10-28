import WhatsAppIcon from '../components/WhatsAppIcon';
import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Globe,
  Sparkles,
  Layers,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';

export default function SolutionsPage({ onOpenPrototypeModal, isDark = true }) {
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
      image: '/images/showcase_business_website.jpg',
      badge: '99/100 Core Web Vitals',
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
      image: '/images/showcase_admin_portal.jpg',
      badge: 'Live in 0.01s',
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
      image: '/images/showcase_ecommerce_catalog.jpg',
      badge: 'WhatsApp Checkout',
    },
    {
      id: 'custom',
      title: 'Custom Full-Stack Web Systems & Portals',
      tag: 'CUSTOM ENGINEERING',
      desc: 'Tailor-engineered software systems for business workflows, student rosters (proven at upskskarate.com), industrial machinery catalogs (proven at pmssolution.co.in), and custom client pipelines.',
      highlights: [
        'Distributed edge serverless PostgreSQL architecture',
        'Role-based client, student, or staff access controls',
        'Automated WhatsApp and multi-channel inquiry workflows',
        '100% intellectual property sovereignty transferred upon launch',
      ],
      icon: Layers,
      image: '/images/showcase_custom_cloud_system.jpg',
      badge: 'Distributed Edge Database',
    },
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
          isDark 
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
          <span>WEBSITE SOLUTIONS &bull; ZERO MAINTENANCE RETAINERS</span>
        </div>

        <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight font-display mb-6 leading-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Website Platforms.<br />
          <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>
            Zero Agency Retainers.
          </span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-zinc-400' : 'text-slate-600'
        }`}>
          We engineer high-performance website platforms, self-serve client admin cockpits, and bespoke web applications. You pay for engineering once; you never receive recurring maintenance bills.
        </p>

        {/* Action Header CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-sm ${
              isDark 
                ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                : 'bg-slate-950 hover:bg-slate-800 text-white'
            }`}
          >
            <span>REQUEST ARCHITECTURE PROPOSAL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`px-5 py-3 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all hover:scale-102 active:scale-98 cursor-pointer ${
              isDark 
                ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-500 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* Solutions Cards with Generated UI Previews */}
      <div className="space-y-10 mb-20">
        {solutions.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`p-6 sm:p-9 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#0E0E12] border-zinc-800/90 hover:border-zinc-700 shadow-2xl' 
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Solution Specs & Highlights */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${
                    isDark 
                      ? 'border-zinc-800 bg-zinc-900 text-zinc-300' 
                      : 'border-slate-200 bg-slate-100 text-slate-800'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-bold font-display ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-zinc-400' : 'text-slate-600'
                }`}>
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-500" />
                      <span className={isDark ? 'text-zinc-300' : 'text-slate-700'}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-End UI Mockup Preview Box */}
              <div className={`lg:col-span-5 relative rounded-xl overflow-hidden border transition-all group ${
                isDark 
                  ? 'bg-zinc-950 border-zinc-800 shadow-xl' 
                  : 'bg-slate-50 border-slate-200/90 shadow-md'
              }`}>
                {/* Mockup Frame Header */}
                <div className={`px-3 py-2 border-b flex items-center justify-between text-[10px] font-mono ${
                  isDark 
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400' 
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-500/40" />
                    <span className="w-2 h-2 rounded-full bg-zinc-500/40" />
                    <span className="w-2 h-2 rounded-full bg-zinc-500/40" />
                    <span className="ml-1 text-[9px] truncate">merqurie.cloud/{item.id}</span>
                  </div>
                  <span className="text-emerald-500 font-semibold">{item.badge}</span>
                </div>

                {/* Product Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${
                    isDark 
                      ? 'from-[#0E0E12]/80 via-transparent to-transparent' 
                      : 'from-white/60 via-transparent to-transparent'
                  }`} />
                </div>

                {/* Frame Footer Bar */}
                <div className={`px-3.5 py-2.5 flex items-center justify-between border-t text-[11px] font-mono ${
                  isDark 
                    ? 'border-zinc-800 bg-zinc-950 text-zinc-400' 
                    : 'border-slate-200 bg-white text-slate-600'
                }`}>
                  <span className={isDark ? 'text-zinc-200 font-medium' : 'text-slate-900 font-medium'}>
                    {item.title}
                  </span>
                  <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
