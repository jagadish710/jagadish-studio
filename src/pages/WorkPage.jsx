import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Activity, Cpu } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20reviewing%20your%20case%20studies%20and%20would%20like%20to%20discuss%20a%20website.';

const projects = [
  {
    name: 'PMS Solution Healthcare',
    url: 'https://pmssolution.co.in',
    sector: 'Hospital Medical Equipment Sales & Rentals • Chennai',
    desc: 'Prominent Chennai medical equipment supplier managing ICU beds, oxygen concentrators, and hospital setup inquiries. Features instant multi-channel WhatsApp RFQ routing, rental tenure tools, and same-day delivery coordination.',
    image: '/images/pms_real.webp',
    speed: '0.24s Edge Load Speed',
    stats: ['RFQ Lead Capture: Multi-Channel', 'Content Control: 100% Self-Serve', 'Uptime: 99.99%'],
  },
  {
    name: 'Unique Power Shito-Ryu Karate School (UPSKS)',
    url: 'https://upskskarate.com',
    sector: 'Sports & Martial Arts Academy • India',
    desc: 'High-speed digital platform for a premier martial arts school with international Japanese heritage. Includes mobile-first class schedules, belt gradings, online registration, and direct WhatsApp enquiry pathways for parents and students.',
    image: '/images/upsks_real.webp',
    speed: '0.22s Edge Load Speed',
    stats: ['Active Students: 1,000+', 'Monthly Retainer: ₹0', 'Google Speed: 99/100'],
  },
  {
    name: 'Merqurie WhatsApp E-Store',
    url: null,
    sector: 'High-Velocity WhatsApp Commerce',
    desc: 'Interactive retail storefront with zero checkout friction. Customers configure product options and place direct orders via WhatsApp in one tap, bypassing bloated e-commerce checkout funnels.',
    image: '/images/showcase_ecommerce_catalog.webp',
    speed: 'Sub-Second Checkout Flow',
    stats: ['Checkout Latency: Instant', 'Plugin Bloat: Zero', 'Direct WhatsApp Orders: 1-Tap'],
  },
  {
    name: 'Self-Serve Phone Admin Cockpit',
    url: null,
    sector: 'Proprietary Content Management',
    desc: 'Secure, lightweight visual administration dashboard that lets business owners edit headlines, change prices, and post announcements from their phone in 10 seconds.',
    image: '/images/showcase_admin_portal.webp',
    speed: '10s Edit Latency',
    stats: ['Device Support: Mobile & Laptop', 'Developer Dependency: Zero', 'Sync: Instant Live'],
  },
];

export default function WorkPage({ onOpenPrototypeModal }) {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 bg-zinc-900 border border-zinc-800 text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-wider">SELECTED PRODUCTION WORK</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4 leading-tight">
          Real Projects. Verified Results.
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          We build websites that look impressive, load instantly, and give your customers an effortless way to enquire. Visit our live production sites below.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <article
            key={proj.name}
            className="rounded-3xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    {proj.speed}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                  {proj.sector}
                </span>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {proj.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {proj.desc}
                </p>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-center">
                  {proj.stats.map((s, i) => (
                    <div key={i} className="text-zinc-300 font-medium">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-zinc-900 mt-auto">
              {proj.url ? (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-400">
                  Proprietary Merqurie Architecture
                </span>
              )}

              <button
                onClick={onOpenPrototypeModal}
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Plan similar site →</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Want an engineered platform like this for your business?
        </h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          We’ll put together a free mobile design sample tailored to your business so you can see exactly how it looks before deciding.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={onOpenPrototypeModal}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-md"
          >
            <span>Request Free Sample</span>
          </button>
        </div>
      </div>

    </div>
  );
}
