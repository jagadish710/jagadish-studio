import React from 'react';
import { ArrowRight, Check, Layers, ShoppingBag, PanelsTopLeft, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20solution.';

const offers = [
  {
    icon: PanelsTopLeft,
    title: 'High-Converting Business Website',
    desc: 'A polished, fast digital storefront for service businesses, clinics, and professional practices. Built to communicate your offer clearly, establish immediate credibility, and route leads directly to your WhatsApp.',
    image: '/images/showcase_business_website.webp',
    points: [
      'Sub-1.0s mobile load speed on edge CDN',
      'Direct 1-tap WhatsApp lead capture',
      'Mobile-first responsive design',
      'Self-serve 10s phone admin cockpit',
      '₹0 recurring agency retainer fees',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Interactive Catalog & WhatsApp Commerce',
    desc: 'A seamless product browsing experience for retailers, wholesalers, and manufacturers. Customers can browse products, configure specs, and tap to order directly via WhatsApp.',
    image: '/images/showcase_ecommerce_catalog.webp',
    points: [
      'Fast visual product showcase & filters',
      'One-tap WhatsApp checkout and quote inquiry',
      'No clunky checkout drop-offs or plugin bloat',
      'Easily update prices and inventory from your phone',
      '100% full intellectual property ownership',
    ],
  },
  {
    icon: Layers,
    title: 'Custom B2B Portal & Industrial Specification',
    desc: 'Engineered for manufacturers, industrial suppliers, and academies (proven at pmssolution.co.in and upskskarate.com). Features multi-channel RFQ lead routing, student management, or specialized workflows.',
    image: '/images/showcase_custom_cloud_system.webp',
    points: [
      'Custom RFQ lead routing to email and WhatsApp',
      'Role-based visual management portal',
      'Built with Amazon & Turing engineering precision',
      'Zero maintenance debt & high reliability',
      'Complete code & database transfer at launch',
    ],
  },
];

export default function SolutionsPage({ onOpenPrototypeModal }) {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 bg-zinc-900 border border-zinc-800 text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="uppercase tracking-wider">SOLUTIONS &amp; CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4 leading-tight">
          Websites Built to Turn Interest Into Enquiries
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          We start with what will make your business look credible, easy to understand, and effortless to contact. One-time build, zero recurring retainers.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="space-y-8">
        {offers.map((offer, idx) => {
          const Icon = offer.icon;
          return (
            <article
              key={offer.title}
              className="rounded-3xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    SOLUTION 0{idx + 1}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {offer.title}
                </h2>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {offer.desc}
                </p>

                <ul className="space-y-2 pt-2">
                  {offer.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenPrototypeModal}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold font-mono bg-white text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-md"
                  >
                    <span>GET FREE PREVIEW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-zinc-900 border-t lg:border-t-0 lg:border-l border-zinc-800">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
