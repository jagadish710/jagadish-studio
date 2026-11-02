import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';
import FounderSpotlight from '../components/FounderSpotlight';
import MetricsDashboard from '../components/MetricsDashboard';
import ComparisonSection from '../components/ComparisonSection';
import TrustedHeritage from '../components/TrustedHeritage';
import FaqSection from '../components/FaqSection';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function HomePage({ onOpenPrototypeModal, setActivePage }) {
  const navigateTo = (pageId) => {
    if (setActivePage) {
      setActivePage(pageId);
      window.location.hash = pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0 text-white selection:bg-cyan-500/30 selection:text-white">
      
      {/* 1. Cinematic Hero with Curved Horizon Arc & Multi-Scene Showcase */}
      <Hero 
        onOpenPrototypeModal={onOpenPrototypeModal}
        onNavigateToWork={() => navigateTo('work')}
        onNavigateToSolutions={() => navigateTo('solutions')}
      />

      {/* 2. Continuous Silky Flowing Client & Architecture Marquee */}
      <ClientMarquee />

      {/* 3. In-Depth Live Client Case Studies (Real Production Evidence) */}
      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090D] border-t border-zinc-800/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-wider">LIVE PRODUCTION CLIENTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
              Real Websites Engineered for Real Businesses
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Don't take our word for it. Click and test the speed, design, and mobile experience directly on live production platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Case Study 1: PMS Solution (Healthcare & Medical Equipment) */}
            <article className="rounded-3xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src="/images/pms_real.webp"
                    alt="PMS Solution Hospital Equipment Platform Preview"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      Live Production: pmssolution.co.in
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    HEALTHCARE &amp; MEDICAL SALES &amp; RENTALS • CHENNAI
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    PMS Solution Healthcare
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    A prominent Chennai medical equipment platform managing ICU beds, oxygen concentrators, and hospital setup inquiries. Features instant multi-channel WhatsApp RFQ routing, rental calculators, and zero monthly maintenance debt.
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono mb-6">
                    <div>
                      <span className="text-zinc-400 block">Lead Routing</span>
                      <strong className="text-emerald-400 text-sm font-bold">Direct WhatsApp &amp; RFQ</strong>
                    </div>
                    <div>
                      <span className="text-zinc-400 block">Agency Retainer</span>
                      <strong className="text-white text-sm font-bold">₹0 / Month</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-zinc-900 mt-auto">
                <a
                  href="https://pmssolution.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Visit pmssolution.co.in</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenPrototypeModal}
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Plan similar site →</span>
                </button>
              </div>
            </article>

            {/* Case Study 2: UPSKS Karate */}
            <article className="rounded-3xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src="/images/upsks_real.webp"
                    alt="UPSKS Karate Academy Platform Preview"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      Live Production: upskskarate.com
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    SPORTS &amp; MARTIAL ARTS ACADEMY • INDIA
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    Unique Power Shito-Ryu Karate School
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    A high-speed digital home for a premier international martial arts school. Connects students across India to Japanese karate heritage, belt grading registries, tournament schedules, and direct parent WhatsApp admissions.
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono mb-6">
                    <div>
                      <span className="text-zinc-400 block">Mobile Speed</span>
                      <strong className="text-emerald-400 text-sm font-bold">0.22s Edge Load</strong>
                    </div>
                    <div>
                      <span className="text-zinc-400 block">Agency Retainer</span>
                      <strong className="text-white text-sm font-bold">₹0 / Month</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-zinc-900 mt-auto">
                <a
                  href="https://upskskarate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Visit upskskarate.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenPrototypeModal}
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Plan similar site →</span>
                </button>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* 4. Technical Leadership & Studio Standards (Professional Executive Framing) */}
      <FounderSpotlight onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 5. Metrics & Telemetry: The Work Behind The Results */}
      <MetricsDashboard onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 6. Honest Comparison: How Merqurie is Built Differently */}
      <ComparisonSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 7. The 4 Core Pillars: Trusted By Growing Businesses */}
      <TrustedHeritage onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 8. Frequently Asked Questions */}
      <FaqSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 9. Final High-Converting Call to Action */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#09090D] via-[#0E0F16] to-[#060608] border-t border-zinc-800/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none bg-cyan-950/25" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider">LET’S BUILD SOMETHING EXCEPTIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Ready to give your business <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              the website it deserves?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Message our engineering team today. We’ll discuss your goals and build a free mobile design sample for your business with zero upfront commitment.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 shadow-xl shadow-emerald-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current text-zinc-950" />
              <span>Connect Directly on WhatsApp</span>
            </a>

            <button
              onClick={onOpenPrototypeModal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              <span>Get Free Website Sample</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
            <span>⚡ 5-7 Day Delivery</span>
            <span>•</span>
            <span>📱 100% Mobile Optimized</span>
            <span>•</span>
            <span>₹0 Recurring Retainer Fees</span>
          </div>
        </div>
      </section>

    </div>
  );
}
