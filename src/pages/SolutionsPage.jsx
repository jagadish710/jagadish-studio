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
        cardBg: 'bg-white',
        border: 'border-rose-200 hover:border-rose-400',
        glow: 'from-rose-400/20 via-pink-400/10 to-transparent',
        dotColor: 'rgba(225, 29, 72, 0.12)',
        tagBg: 'bg-rose-50 text-rose-800 border-rose-200',
        speedTag: 'bg-rose-50 text-rose-800 border-rose-200',
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
        cardBg: 'bg-white',
        border: 'border-emerald-200 hover:border-emerald-400',
        glow: 'from-emerald-400/20 via-teal-400/10 to-transparent',
        dotColor: 'rgba(16, 185, 129, 0.12)',
        tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        speedTag: 'bg-emerald-50 text-emerald-800 border-emerald-200',
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
        cardBg: 'bg-white',
        border: 'border-indigo-200 hover:border-indigo-400',
        glow: 'from-indigo-400/20 via-purple-400/10 to-transparent',
        dotColor: 'rgba(99, 102, 241, 0.12)',
        tagBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
        speedTag: 'bg-indigo-50 text-indigo-800 border-indigo-200',
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
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-900">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-white border border-slate-200 text-slate-800 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span className="uppercase tracking-wider">SOLUTIONS FOR YOUR BUSINESS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight mb-4 leading-tight">
          Websites Built to Turn Visitors Into{' '}
          <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            Paying Customers.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          No complicated tech jargon. We build fast, beautiful websites that make your business look credible, load instantly on mobile, and let customers reach you directly on WhatsApp. One-time build, zero monthly fees.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="space-y-10 sm:space-y-14">
        {offers.map((offer, idx) => {
          const Icon = offer.icon;
          const currentView = activeViews[idx] || 'mobile';

          return (
            <article
              key={offer.title}
              className={`rounded-3xl border ${offer.theme.cardBg} ${offer.theme.border} p-6 sm:p-9 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 ease-out grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group hover:-translate-y-1`}
            >
              {/* Left Column: Solution Narrative & Value */}
              <div className="lg:col-span-7 space-y-5 text-left relative z-10">
                
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-rose-600" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                    SOLUTION {offer.solutionNum}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${offer.theme.tagBg}`}>
                    {offer.badge}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl sm:text-3xl font-extrabold font-display text-slate-950 tracking-tight leading-tight mb-2">
                    {offer.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-rose-600 mb-2">
                    {offer.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {offer.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Micro Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {offer.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">
                        {st.label}
                      </span>
                      <strong className="text-xs font-bold text-slate-950 font-display">
                        {st.val}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenPrototypeModal}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25 active:scale-95 hover:brightness-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Free Sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Multi-Device Interactive Canvas */}
              <div className="lg:col-span-5 relative z-10">
                
                {/* Device Switcher */}
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">Interactive Mockup:</span>
                  <div className="inline-flex p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-[10px] font-mono">
                    <button
                      onClick={() => toggleView(idx, 'mobile')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        currentView === 'mobile'
                          ? 'bg-rose-600 text-white font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      📱 Phone View
                    </button>
                    <button
                      onClick={() => toggleView(idx, 'desktop')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        currentView === 'desktop'
                          ? 'bg-rose-600 text-white font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      💻 Desktop View
                    </button>
                  </div>
                </div>

                {/* Modern Workstation Frame */}
                <div className="rounded-2xl border border-slate-200 bg-slate-900 p-2 sm:p-2.5 shadow-xl group/frame relative">
                  
                  {/* Micro Browser Bar */}
                  <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950 border border-white/10 text-[10px] font-mono text-slate-300">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span>merqurie.cloud/live</span>
                    </div>

                    <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-500/40">
                      ⚡ 0.24s Speed
                    </span>
                  </div>

                  {/* Main Desktop Image Viewport */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 group/img">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                    />

                    {/* Overlapping Floating Titanium Smartphone */}
                    <div className={`absolute -bottom-2 sm:-bottom-3 -right-1 sm:right-2 w-[115px] sm:w-[145px] aspect-[9/18] rounded-[1.3rem] sm:rounded-[1.6rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ring-2 ring-slate-800 z-20 transition-all duration-500 ease-out ${
                      currentView === 'desktop' ? 'opacity-40 scale-95 translate-y-3' : 'group-hover:-translate-y-2 group-hover:scale-103'
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

                          <div className="py-1 px-2 rounded-full bg-[#25D366] text-white text-[7px] font-mono font-bold flex items-center justify-center gap-1 shadow-sm">
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
