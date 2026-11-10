import React from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Lock, 
  Smartphone, 
  MessageSquare, 
  CheckCircle2, 
  Wifi, 
  Battery 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20reviewing%20your%20projects%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

const projects = [
  {
    id: 'pms',
    name: 'PMS Solution Healthcare',
    url: 'https://pmssolution.co.in',
    domain: 'pmssolution.co.in',
    sector: 'Hospital Medical Equipment • Chennai',
    simpleTitle: 'Hospital Equipment Sales & Rentals Platform',
    desc: 'Prominent Chennai medical platform for ICU beds, oxygen concentrators, and hospital setups. Customers can browse equipment and tap 1 button on WhatsApp to get instant rental quotes.',
    image: '/images/pms_real.webp',
    speed: '0.24s Mobile Speed',
    badge: 'Live Client Platform',
    theme: {
      cardBg: 'bg-gradient-to-b from-teal-950/60 via-slate-900 to-slate-950',
      border: 'border-teal-500/40 hover:border-teal-400',
      glow: 'from-teal-400/25 via-cyan-400/20 to-transparent',
      dotColor: 'rgba(94, 234, 212, 0.15)',
      tagBg: 'bg-teal-950 text-teal-300 border-teal-500/40',
      speedTag: 'bg-teal-950/90 text-teal-200 border-teal-500/50',
    },
    chatPreview: 'Hi! Need ICU electric bed rental for home in Chennai.',
    stats: [
      { label: 'Mobile Speed', val: '< 0.25s' },
      { label: 'Monthly Bills', val: '₹0 Forever' },
      { label: 'Enquiry Route', val: 'Direct WhatsApp' },
    ],
  },
  {
    id: 'upsks',
    name: 'Unique Power Shito-Ryu Karate School',
    url: 'https://upskskarate.com',
    domain: 'upskskarate.com',
    sector: 'Sports & Martial Arts Academy • India',
    simpleTitle: 'Karate Academy Platform for 1,000+ Students',
    desc: 'High-speed martial arts platform with Japanese heritage. Parents and students view class schedules, check belt grading rosters, and message the chief instructor on WhatsApp for quick admission.',
    image: '/images/upsks_real.webp',
    speed: '0.22s Mobile Speed',
    badge: 'Live Client Platform',
    theme: {
      cardBg: 'bg-gradient-to-b from-rose-950/60 via-slate-900 to-slate-950',
      border: 'border-rose-500/40 hover:border-rose-400',
      glow: 'from-rose-400/25 via-pink-400/20 to-transparent',
      dotColor: 'rgba(253, 164, 175, 0.15)',
      tagBg: 'bg-rose-950 text-rose-300 border-rose-500/40',
      speedTag: 'bg-rose-950/90 text-rose-200 border-rose-500/50',
    },
    chatPreview: 'Hi Sensei! Want to enrol my 7-year-old in evening karate classes.',
    stats: [
      { label: 'Active Students', val: '1,000+ Students' },
      { label: 'Monthly Retainer', val: '₹0 / Month' },
      { label: 'Google Speed', val: '99/100 Core' },
    ],
  },
  {
    id: 'ecommerce',
    name: 'Merqurie WhatsApp E-Store',
    url: null,
    domain: 'store.merqurie.cloud',
    sector: 'Instant Product Sales',
    simpleTitle: 'Online Store with 1-Tap WhatsApp Checkout',
    desc: 'Interactive product catalog with photos and prices. Customers tap 1 button on WhatsApp to order or request price quotes — zero confusing forms, zero monthly Shopify or agency fees.',
    image: '/images/showcase_ecommerce_catalog.webp',
    speed: 'Sub-Second Load',
    badge: 'Interactive Storefront',
    theme: {
      cardBg: 'bg-gradient-to-b from-emerald-950/60 via-slate-900 to-slate-950',
      border: 'border-emerald-500/40 hover:border-emerald-400',
      glow: 'from-emerald-400/25 via-teal-400/20 to-transparent',
      dotColor: 'rgba(110, 231, 183, 0.15)',
      tagBg: 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
      speedTag: 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50',
    },
    chatPreview: 'Hello! I want to order 2 boxes. What is delivery time to Chennai?',
    stats: [
      { label: 'Checkout', val: '1-Tap WhatsApp' },
      { label: 'Plugin Bloat', val: '0 Plugins' },
      { label: 'Monthly Fees', val: '₹0 Forever' },
    ],
  },
  {
    id: 'admin',
    name: 'Self-Serve Phone Admin Cockpit',
    url: null,
    domain: 'merqurie.cloud/admin',
    sector: '10-Second Visual Control',
    simpleTitle: 'Change Text & Prices from Your Phone',
    desc: 'Never wait 5 days for a web developer. Open your phone, edit headlines, change prices, and post announcements in 10 seconds. You own the keys with zero developer dependency.',
    image: '/images/showcase_admin_portal.webp',
    speed: '10s Edit Latency',
    badge: 'Phone App Included',
    theme: {
      cardBg: 'bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950',
      border: 'border-indigo-500/40 hover:border-indigo-400',
      glow: 'from-indigo-400/25 via-purple-400/20 to-transparent',
      dotColor: 'rgba(165, 180, 252, 0.15)',
      tagBg: 'bg-indigo-950 text-indigo-300 border-indigo-500/40',
      speedTag: 'bg-indigo-950/90 text-indigo-200 border-indigo-500/50',
    },
    chatPreview: 'Admin: Announcement updated in 8 seconds. Live across all edge nodes.',
    stats: [
      { label: 'Edit Time', val: '10 Seconds' },
      { label: 'Developer Cost', val: '₹0 Extra' },
      { label: 'Device Support', val: 'Mobile & Laptop' },
    ],
  },
];

export default function WorkPage({ onOpenPrototypeModal }) {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-slate-900 border border-white/15 text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="uppercase tracking-wider">REAL CLIENT WEBSITES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4 leading-tight">
          Websites Built for{' '}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
            Real Businesses.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Don’t take our word for it. Browse through live production client platforms and test their mobile speed, design precision, and lead generation in real time.
        </p>
      </div>

      {/* Projects Grid with Modern Layered Picture Mockups & Glowing Meshes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {projects.map((proj) => (
          <article
            key={proj.name}
            className={`rounded-3xl border ${proj.theme.cardBg} ${proj.theme.border} p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-400 ease-out flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden active:scale-[0.99]`}
          >
            {/* Soft Ambient Radiance Aura */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${proj.theme.glow} blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              
              {/* Layered Workstation Frame */}
              <div className="mb-6">
                <div className="rounded-2xl border border-white/15 bg-slate-950/90 p-2 sm:p-2.5 shadow-xl group-hover:shadow-2xl transition-all duration-500 relative">
                  
                  {/* Micro Browser Window Bar */}
                  <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300 max-w-[170px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{proj.domain}</span>
                    </div>

                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${proj.theme.tagBg}`}>
                      {proj.badge}
                    </span>
                  </div>

                  {/* Desktop Image Canvas with Specular Light Sweep */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 group/screen">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Speed Chip */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold backdrop-blur-md shadow-xs border ${proj.theme.speedTag} flex items-center gap-1`}>
                        <Zap className="w-2.5 h-2.5 text-amber-400" />
                        <span>{proj.speed}</span>
                      </span>
                    </div>

                    {/* Live Indicator */}
                    {proj.url && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-slate-900/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live Verified</span>
                        </span>
                      </div>
                    )}

                    {/* Overlapping Floating Titanium Smartphone */}
                    <div className="absolute -bottom-2 sm:-bottom-3 right-1 sm:right-3 w-[115px] sm:w-[140px] aspect-[9/17.5] rounded-[1.3rem] sm:rounded-[1.6rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ring-2 ring-slate-800 z-20 group-hover:-translate-y-3 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-500 ease-out">
                      <div className="w-full h-full rounded-[1.05rem] sm:rounded-[1.3rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                        <img
                          src={proj.image}
                          alt={`${proj.name} Mobile View`}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute top-0 inset-x-0 pt-1 px-2 flex items-center justify-between text-[7px] font-mono text-white/90 bg-gradient-to-b from-black/70 to-transparent z-20">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <Wifi className="w-2 h-2" />
                            <Battery className="w-2 h-2" />
                          </div>
                        </div>

                        {/* WhatsApp preview bubble */}
                        <div className="absolute bottom-1.5 inset-x-1 z-20 space-y-1">
                          <div className="p-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-emerald-400 shadow-md text-left">
                            <div className="flex items-center gap-1 text-[6.5px] font-mono font-bold text-emerald-400 mb-0.5">
                              <MessageSquare className="w-2 h-2 text-emerald-400 fill-current" />
                              <span>1-Tap WhatsApp</span>
                            </div>
                            <p className="text-[7px] leading-tight text-white line-clamp-2">
                              "{proj.chatPreview}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  {proj.sector}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight leading-tight group-hover:text-rose-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 mb-6">
                {proj.stats.map((st, sIdx) => (
                  <div key={sIdx} className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-center shadow-md">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">{st.label}</span>
                    <strong className="text-xs font-bold text-white block truncate mt-0.5">{st.val}</strong>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
              <button
                onClick={onOpenPrototypeModal}
                className="text-xs font-mono font-bold text-white hover:text-rose-400 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Plan Similar Site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20saw%20your%20project%20${encodeURIComponent(proj.name)}%20and%20want%20a%20similar%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 transition-colors shadow-md"
                  title="Inquire on WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                </a>

                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-900 border border-white/15 text-white hover:text-rose-400 hover:border-rose-500/50 transition-all shadow-md active:scale-95"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3 text-rose-400" />
                  </a>
                )}
              </div>
            </div>

          </article>
        ))}
      </div>

    </div>
  );
}
