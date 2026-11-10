import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  ShoppingBag, 
  PanelsTopLeft, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Lock, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink, 
  Wifi, 
  Battery 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function SolutionsPage({ onOpenPrototypeModal }) {
  const [activeViews, setActiveViews] = useState({
    0: 'mobile',
    1: 'mobile',
    2: 'mobile',
  });

  const toggleView = (idx, view) => {
    setActiveViews((prev) => ({ ...prev, [idx]: view }));
  };

  const offers = [
    {
      icon: PanelsTopLeft,
      solutionNum: '01',
      title: 'High-Speed Website for Your Business',
      tagline: 'Ideal for clinics, local businesses, schools, and professional practices.',
      desc: 'A beautiful, modern website designed to make your business look established, win customer trust, and make it effortless for visitors to reach you.',
      image: '/images/showcase_business_website.webp',
      badge: 'Most Popular for Local Businesses',
      theme: {
        cardBg: 'bg-gradient-to-b from-rose-950/60 via-slate-900 to-slate-950',
        border: 'border-rose-500/40 hover:border-rose-400',
        glow: 'from-rose-400/25 via-pink-400/20 to-transparent',
        dotColor: 'rgba(253, 164, 175, 0.15)',
        tagBg: 'bg-rose-950 text-rose-300 border-rose-500/40',
        speedTag: 'bg-rose-950/90 text-rose-200 border-rose-500/50',
      },
      points: [
        'Loads in under 1 second on any mobile phone',
        'Direct 1-tap WhatsApp button for instant customer enquiries',
        'Change text, prices, and announcements from your phone in 10 seconds',
        'Setup on Google Search & Google Maps so local customers find you',
        '100% full ownership — zero recurring monthly agency fees forever',
      ],
      chatPreview: 'Hi! I saw your website and would like to book an appointment.',
      stats: [
        { label: 'Mobile Speed', val: '< 0.3s' },
        { label: 'Monthly Retainer', val: '₹0 / Month' },
        { label: 'Enquiry Flow', val: '1-Tap WhatsApp' },
      ],
    },
    {
      icon: ShoppingBag,
      solutionNum: '02',
      title: 'Interactive Catalog & WhatsApp Store',
      tagline: 'Ideal for retailers, wholesalers, distributors, and manufacturers.',
      desc: 'Display your entire product line with high-resolution photos, prices, and specifications. Customers browse smoothly and place orders or ask for price quotes directly through WhatsApp.',
      image: '/images/showcase_ecommerce_catalog.webp',
      badge: 'Zero Cart Drop-Offs',
      theme: {
        cardBg: 'bg-gradient-to-b from-emerald-950/60 via-slate-900 to-slate-950',
        border: 'border-emerald-500/40 hover:border-emerald-400',
        glow: 'from-emerald-400/25 via-teal-400/20 to-transparent',
        dotColor: 'rgba(110, 231, 183, 0.15)',
        tagBg: 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
        speedTag: 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50',
      },
      points: [
        'Clean product catalog with clear photos, specs, and prices',
        '1-tap WhatsApp order button bypassing confusing checkout forms',
        'Sub-second fast loading with zero lag or frustrating delays',
        'Easily add new products and edit prices from your smartphone',
        'No monthly Shopify or agency fees — you keep 100% of your profit',
      ],
      chatPreview: 'Hello! I want to order 2 units of this item. Can you confirm price?',
      stats: [
        { label: 'Checkout Flow', val: '1-Tap WhatsApp' },
        { label: 'Plugin Bloat', val: '0 Plugins' },
        { label: 'Monthly Retainer', val: '₹0 / Month' },
      ],
    },
    {
      icon: Layers,
      solutionNum: '03',
      title: 'Custom Portals & Booking Systems',
      tagline: 'Ideal for sports academies, medical suppliers, and growing companies.',
      desc: 'Custom web tools and member systems (proven live on pmssolution.co.in and upskskarate.com). From student belt registries to hospital equipment quote engines, built to run smoothly without bugs.',
      image: '/images/showcase_custom_cloud_system.webp',
      badge: 'Enterprise Engineering',
      theme: {
        cardBg: 'bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950',
        border: 'border-indigo-500/40 hover:border-indigo-400',
        glow: 'from-indigo-400/25 via-purple-400/20 to-transparent',
        dotColor: 'rgba(165, 180, 252, 0.15)',
        tagBg: 'bg-indigo-950 text-indigo-300 border-indigo-500/40',
        speedTag: 'bg-indigo-950/90 text-indigo-200 border-indigo-500/50',
      },
      points: [
        'Customer quote enquiries delivered straight to your WhatsApp & email',
        'Private dashboard to manage students, inventory, or client bookings',
        'Engineered with Amazon & Turing big-tech precision',
        'Sub-second speed that scores 99/100 on Google tests',
        'Full transfer of code and database on launch day — 100% owned by you',
      ],
      chatPreview: 'Hi Jagadish! We need an equipment quote for ICU setup in Chennai.',
      stats: [
        { label: 'Lead Delivery', val: 'Instant 0.2s' },
        { label: 'Architecture', val: 'Direct Founder' },
        { label: 'Ongoing Retainers', val: '₹0 Forever' },
      ],
    },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      
      {/* Page Header: Simple, Clear & Inviting */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-slate-900 border border-white/15 text-slate-300 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span className="uppercase tracking-wider">SOLUTIONS FOR YOUR BUSINESS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4 leading-tight">
          Websites Built to Turn Visitors Into{' '}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
            Paying Customers.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          No complicated tech jargon. We build fast, beautiful websites that make your business look credible, load instantly on mobile, and let customers reach you directly on WhatsApp. One-time build, zero monthly fees.
        </p>
      </div>

      {/* Solutions Cards: Colorful Meshes & Interactive Multi-Device Mockups */}
      <div className="space-y-10 sm:space-y-14">
        {offers.map((offer, idx) => {
          const Icon = offer.icon;
          const currentView = activeViews[idx] || 'mobile';

          return (
            <article
              key={offer.title}
              className={`rounded-3xl border ${offer.theme.cardBg} ${offer.theme.border} p-6 sm:p-9 shadow-2xl backdrop-blur-xl transition-all duration-400 ease-out grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group hover:-translate-y-1.5`}
            >
              {/* Subtle Ambient Radiance Aura */}
              <div className={`absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br ${offer.theme.glow} blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Left Column: Solution Details & Simple Terms */}
              <div className="lg:col-span-6 space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center text-rose-400 shadow-md">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
                      SOLUTION // {offer.solutionNum}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${offer.theme.tagBg} shadow-sm`}>
                    {offer.badge}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight leading-tight group-hover:text-rose-400 transition-colors">
                    {offer.title}
                  </h2>
                  <p className="text-xs font-mono font-semibold text-rose-400 mt-1">
                    {offer.tagline}
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mt-2.5">
                    {offer.desc}
                  </p>
                </div>

                {/* Plain-English Benefits Checklist */}
                <ul className="space-y-2.5 pt-2 border-t border-white/10">
                  {offer.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-slate-900 border border-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 shadow-xs">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* 3 Key Metric Pills */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  {offer.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-2 rounded-xl bg-slate-900/90 border border-white/10 text-center shadow-md">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">{st.label}</span>
                      <strong className="text-xs font-bold text-white block truncate mt-0.5">{st.val}</strong>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenPrototypeModal}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white shadow-xl shadow-rose-950/50 flex items-center gap-1.5 active:scale-95 cursor-pointer border border-rose-400/40"
                  >
                    <span>Get Free Sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-slate-950" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Layered Dual-Device Viewport */}
              <div className="lg:col-span-6 relative z-10">
                
                {/* Viewport Header Controls: Interactive Device Switcher */}
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Interactive View</span>
                  </span>

                  <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/10 text-[10px] font-mono">
                    <button
                      onClick={() => toggleView(idx, 'mobile')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        currentView === 'mobile'
                          ? 'bg-rose-600 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      📱 Phone View
                    </button>
                    <button
                      onClick={() => toggleView(idx, 'desktop')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        currentView === 'desktop'
                          ? 'bg-rose-600 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      💻 Desktop View
                    </button>
                  </div>
                </div>

                {/* Modern Workstation Frame with Parallax & Specular Sheen */}
                <div className="rounded-2xl border border-white/15 bg-slate-950/90 p-2 sm:p-2.5 shadow-2xl group/frame relative">
                  
                  {/* Micro Browser Bar */}
                  <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span>merqurie.cloud/live</span>
                    </div>

                    <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/40">
                      ⚡ 0.24s Speed
                    </span>
                  </div>

                  {/* Main Desktop Image Viewport */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 group/img">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Overlapping Floating Titanium Smartphone */}
                    <div className={`absolute -bottom-2 sm:-bottom-3 -right-1 sm:right-2 w-[115px] sm:w-[145px] aspect-[9/17.5] rounded-[1.3rem] sm:rounded-[1.6rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ring-2 ring-slate-800 z-20 transition-all duration-500 ease-out ${
                      currentView === 'desktop' ? 'opacity-40 scale-95 translate-y-3' : 'group-hover:-translate-y-3 group-hover:translate-x-1 group-hover:scale-105'
                    }`}>
                      <div className="w-full h-full rounded-[1.05rem] sm:rounded-[1.3rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                        <img
                          src={offer.image}
                          alt={`${offer.title} Mobile View`}
                          className="w-full h-full object-cover object-top"
                        />

                        {/* Top Mobile Status Bar */}
                        <div className="absolute top-0 inset-x-0 pt-1 px-2 flex items-center justify-between text-[7px] font-mono text-white/90 bg-gradient-to-b from-black/70 to-transparent z-20">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <Wifi className="w-2 h-2" />
                            <Battery className="w-2 h-2" />
                          </div>
                        </div>

                        {/* Simulated Customer WhatsApp Message Bubble */}
                        <div className="absolute bottom-2 inset-x-1.5 z-20 space-y-1">
                          <div className="p-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-emerald-400 shadow-md text-left">
                            <div className="flex items-center gap-1 text-[7px] font-mono font-bold text-emerald-400 mb-0.5">
                              <MessageSquare className="w-2 h-2 text-emerald-400 fill-current" />
                              <span>Direct WhatsApp Enquiry</span>
                            </div>
                            <p className="text-[7.5px] leading-tight text-white line-clamp-2">
                              "{offer.chatPreview}"
                            </p>
                          </div>

                          <div className="py-1 px-2 rounded-full bg-[#25D366] text-slate-950 text-[7px] font-mono font-bold flex items-center justify-center gap-1 shadow-sm">
                            <span>1-Tap Connect</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </article>
          );
        })}
      </div>

    </div>
  );
}
