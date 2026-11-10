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
      cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(204,251,241,0.7),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(224,242,254,0.6),transparent_55%),linear-gradient(to_bottom_right,#F0FDFA,#FFFFFF,#F8FAFC)]',
      border: 'border-teal-200/90 hover:border-teal-400',
      glow: 'from-teal-400/20 via-cyan-400/15 to-transparent',
      dotColor: '#5EEAD4',
      tagBg: 'bg-teal-50 text-teal-800 border-teal-200',
      speedTag: 'bg-teal-950/90 text-teal-200 border-teal-700/60',
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
      cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.7),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(254,243,199,0.6),transparent_55%),linear-gradient(to_bottom_right,#FFF1F2,#FFFFFF,#FFFBEB)]',
      border: 'border-rose-200/90 hover:border-rose-400',
      glow: 'from-rose-400/20 via-amber-400/15 to-transparent',
      dotColor: '#FDA4AF',
      tagBg: 'bg-rose-50 text-rose-800 border-rose-200',
      speedTag: 'bg-rose-950/90 text-rose-200 border-rose-700/60',
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
      cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(209,250,229,0.75),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(204,251,241,0.6),transparent_55%),linear-gradient(to_bottom_right,#ECFDF5,#FFFFFF,#F0FDFA)]',
      border: 'border-emerald-200/90 hover:border-emerald-400',
      glow: 'from-emerald-400/20 via-teal-400/15 to-transparent',
      dotColor: '#6EE7B7',
      tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      speedTag: 'bg-emerald-950/90 text-emerald-200 border-emerald-700/60',
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
      cardBg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(224,231,255,0.75),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(243,232,255,0.6),transparent_55%),linear-gradient(to_bottom_right,#EEF2FF,#FFFFFF,#FAF5FF)]',
      border: 'border-indigo-200/90 hover:border-indigo-400',
      glow: 'from-indigo-400/20 via-purple-400/15 to-transparent',
      dotColor: '#A5B4FC',
      tagBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      speedTag: 'bg-indigo-950/90 text-indigo-200 border-indigo-700/60',
    },
    chatPreview: 'Price updated from ₹2,500 to ₹1,999 in 8 seconds from phone!',
    stats: [
      { label: 'Edit Time', val: '10 Seconds' },
      { label: 'Developer Cost', val: '₹0 Extra' },
      { label: 'Device Support', val: 'Mobile & Laptop' },
    ],
  },
];

export default function WorkPage({ onOpenPrototypeModal }) {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header: Simple & Credible */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-white border border-slate-200 text-slate-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
          <span className="uppercase tracking-wider">REAL CLIENT WEBSITES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight mb-4 leading-tight">
          Websites Built for{' '}
          <span className="font-serif italic font-normal text-rose-600">
            Real Businesses.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Don’t take our word for it. Browse through live production client platforms and test their mobile speed, design precision, and lead generation in real time.
        </p>
      </div>

      {/* Projects Grid with Modern Layered Picture Mockups & Chromatic Meshes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {projects.map((proj) => (
          <article
            key={proj.name}
            className={`rounded-3xl border ${proj.theme.cardBg} ${proj.theme.border} p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-400 ease-out flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden active:scale-[0.99]`}
          >
            {/* Dotted Matrix Texture */}
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(${proj.theme.dotColor} 1.2px, transparent 1.2px)`,
                backgroundSize: '18px 18px'
              }}
            />

            {/* Soft Ambient Radiance Aura */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${proj.theme.glow} blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              
              {/* 
                ============================================================
                MODERN LAYERED DUAL-DEVICE VIEWPORT
                Replaces conventional flat box picture with interactive mockup
                ============================================================
              */}
              <div className="mb-6">
                <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-2 sm:p-2.5 shadow-md group-hover:shadow-xl transition-all duration-500 relative">
                  
                  {/* Micro Browser Window Bar */}
                  <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-slate-100/90 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-mono text-slate-500 max-w-[170px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{proj.domain}</span>
                    </div>

                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${proj.theme.tagBg}`}>
                      {proj.badge}
                    </span>
                  </div>

                  {/* Desktop Image Canvas with Specular Light Sweep */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 group/screen">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Specular Diagonal Sheen Sweep on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Floating Speed Chip on Top Left */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold backdrop-blur-md shadow-xs border ${proj.theme.speedTag} flex items-center gap-1`}>
                        <Zap className="w-2.5 h-2.5 text-amber-400" />
                        <span>{proj.speed}</span>
                      </span>
                    </div>

                    {/* Live Indicator on Top Right */}
                    {proj.url && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Site
                        </span>
                      </div>
                    )}

                    {/* 
                      ------------------------------------------------------
                      OVERLAPPING FLOATING TITANIUM SMARTPHONE MOCKUP
                      With simulated customer WhatsApp chat inquiry
                      ------------------------------------------------------
                    */}
                    <div className="absolute -bottom-2 sm:-bottom-3 -right-1 sm:right-2 w-[110px] sm:w-[135px] aspect-[9/17.5] rounded-[1.3rem] sm:rounded-[1.5rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ring-2 ring-slate-800/90 z-20 group-hover:-translate-y-2.5 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-2 rounded-full bg-slate-950 z-30 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-slate-800" />
                      </div>

                      {/* Inner Mobile Screen */}
                      <div className="w-full h-full rounded-[1.05rem] sm:rounded-[1.25rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                        <img
                          src={proj.image}
                          alt={`${proj.name} Mobile Preview`}
                          className="w-full h-full object-cover object-top"
                        />

                        {/* Top Status Bar */}
                        <div className="absolute top-0 inset-x-0 pt-1 px-2 flex items-center justify-between text-[7px] font-mono text-white/90 bg-gradient-to-b from-black/70 to-transparent z-20">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <Wifi className="w-2 h-2" />
                            <Battery className="w-2 h-2" />
                          </div>
                        </div>

                        {/* WhatsApp Message Simulation */}
                        <div className="absolute bottom-2 inset-x-1.5 z-20 space-y-1">
                          <div className="p-1 rounded-lg bg-white/95 backdrop-blur-md border border-emerald-300 shadow-sm text-left">
                            <div className="flex items-center gap-0.5 text-[6.5px] font-mono font-bold text-emerald-800">
                              <MessageSquare className="w-2 h-2 text-emerald-600 fill-current" />
                              <span>Direct WhatsApp</span>
                            </div>
                            <p className="text-[7px] leading-tight text-slate-800 line-clamp-2 mt-0.5">
                              "{proj.chatPreview}"
                            </p>
                          </div>

                          <div className="py-0.5 px-1.5 rounded-full bg-[#25D366] text-slate-950 text-[6.5px] font-mono font-bold flex items-center justify-center gap-1 shadow-xs">
                            <span>1-Tap Order</span>
                          </div>
                        </div>

                        {/* Gloss */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Card Text Content with Simple, High-Converting Copy */}
              <div className="space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono text-rose-700 font-bold uppercase tracking-wider block">
                  {proj.sector}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight leading-snug group-hover:text-rose-600 transition-colors">
                  {proj.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {proj.desc}
                </p>

                {/* 3 Micro-Metrics Pills */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200/60">
                  {proj.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-2 rounded-xl bg-white/90 border border-slate-200/80 text-center shadow-2xs">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">{st.label}</span>
                      <strong className="text-xs font-bold text-slate-900 block truncate mt-0.5">{st.val}</strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Action Footer */}
            <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between gap-3 relative z-10">
              <button
                onClick={onOpenPrototypeModal}
                className="text-xs font-mono font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
              >
                <span>Plan Similar Site</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {proj.url ? (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-all shadow-2xs active:scale-95"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3 h-3 text-rose-600" />
                </a>
              ) : (
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Interactive Demo
                </span>
              )}
            </div>

          </article>
        ))}
      </div>

      {/* Bottom CTA Card with Free Mobile Preview Guarantee */}
      <div className="mt-16 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />
        
        <div className="space-y-1 relative z-10">
          <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900">
            Want to see how your business will look with this design?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            We will design a free interactive mobile sample for your business in 48 hours. No commitment, pay only if you love it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md shadow-emerald-500/15 transition-all active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-slate-950" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onOpenPrototypeModal}
            className="btn-crimson-primary w-full sm:w-auto px-5 py-3 text-xs sm:text-sm uppercase font-mono tracking-wider cursor-pointer shadow-md shadow-rose-600/15 active:scale-95"
          >
            <span>Get Free Preview</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
