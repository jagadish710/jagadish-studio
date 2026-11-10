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
import ProjectShowcaseCarousel from '../components/ProjectShowcaseCarousel';
import PricingPackages from '../components/PricingPackages';
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
    <div className="space-y-0 text-slate-900 selection:bg-rose-500/15 selection:text-rose-900">
      
      {/* 1. Cinematic Hero with Curved Horizon Arc & Multi-Scene Showcase */}
      <Hero 
        onOpenPrototypeModal={onOpenPrototypeModal}
        onNavigateToWork={() => navigateTo('work')}
        onNavigateToSolutions={() => navigateTo('solutions')}
      />

      {/* 2. Continuous Silky Flowing Client & Architecture Marquee */}
      <ClientMarquee />

      {/* 3. Satria-Style Interactive Horizontal Project Showcase Carousel */}
      <section id="work">
        <ProjectShowcaseCarousel onOpenPrototypeModal={onOpenPrototypeModal} />
      </section>

      {/* 4. Technical Leadership & Studio Standards (Professional Executive Framing) */}
      <FounderSpotlight onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 5. Webspacekit-Style Transparent Pricing Packages & Retainer Freedom */}
      <section id="pricing">
        <PricingPackages onOpenPrototypeModal={onOpenPrototypeModal} />
      </section>

      {/* 6. Metrics & Telemetry: The Work Behind The Results */}
      <MetricsDashboard onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 7. Honest Comparison: How Merqurie is Built Differently */}
      <ComparisonSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 8. The 4 Core Pillars: Trusted By Growing Businesses */}
      <TrustedHeritage onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 9. Frequently Asked Questions */}
      <FaqSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 10. Final High-Converting Call to Action (Swiss Editorial Polish) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#FAFAFC] border-t border-slate-200/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none bg-rose-500/[0.04]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">LET’S BUILD SOMETHING EXCEPTIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Websites that make you the <br />
            <span className="font-serif italic font-normal text-rose-600">obvious</span>{' '}
            <span className="crimson-text">choice.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Direct engineering partnership with Jagadish (former Amazon &amp; Turing AI systems engineering). Fast builds, mirror-finish mobile details, and zero ongoing agency retainer fees.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary Crimson Button */}
            <button
              onClick={onOpenPrototypeModal}
              className="btn-crimson-primary w-full sm:w-auto px-8 py-4 text-xs sm:text-sm tracking-wider uppercase font-mono cursor-pointer shadow-lg shadow-rose-600/20 active:scale-98"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md shadow-emerald-500/15 transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current text-slate-950" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
            <span>⚡ 5-7 Day Delivery</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span>📱 100% Mobile Optimized</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-emerald-700 font-semibold">₹0 Recurring Retainer Fees</span>
          </div>
        </div>
      </section>

    </div>
  );
}
