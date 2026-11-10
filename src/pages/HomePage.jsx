import React from 'react';
import { 
  ArrowRight, 
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
import CinematicVideoSection from '../components/CinematicVideoSection';
import ProjectShowcaseCarousel from '../components/ProjectShowcaseCarousel';
import InteractiveRoiCalculator from '../components/InteractiveRoiCalculator';
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
    <div className="space-y-0 text-slate-900 selection:bg-rose-500/15 selection:text-rose-900 bg-[#F8FAFC]">
      
      {/* 1. Cinematic Hero with 3D Three.js Liquid Mercury Centerpiece & Multi-Scene Showcase */}
      <Hero 
        onOpenPrototypeModal={onOpenPrototypeModal}
        onNavigateToWork={() => navigateTo('work')}
        onNavigateToSolutions={() => navigateTo('solutions')}
      />

      {/* 2. Continuous Silky Flowing Client & Architecture Marquee */}
      <ClientMarquee />

      {/* 3. Cinematic Video & Live Speed Race Lab (0.24s Edge vs 8.4s WordPress) */}
      <CinematicVideoSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 4. Interactive Project Showcase Carousel with Authentic Client Screens */}
      <section id="work">
        <ProjectShowcaseCarousel onOpenPrototypeModal={onOpenPrototypeModal} />
      </section>

      {/* 5. Interactive Customer ROI & WhatsApp Lead Calculator */}
      <InteractiveRoiCalculator onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 6. Technical Leadership & Studio Standards (VIP Founder Card with Amazon & Turing Badges) */}
      <FounderSpotlight onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 7. Transparent Pricing Packages with ₹0 Retainer Debt Guarantee */}
      <section id="pricing">
        <PricingPackages onOpenPrototypeModal={onOpenPrototypeModal} />
      </section>

      {/* 8. Honest Comparison: How Merqurie is Built Differently */}
      <ComparisonSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 9. Metrics & Telemetry: The Work Behind The Results */}
      <MetricsDashboard onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 10. The 4 Core Pillars: Trusted By Growing Businesses */}
      <TrustedHeritage onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 11. Frequently Asked Questions */}
      <FaqSection onOpenPrototypeModal={onOpenPrototypeModal} />

      {/* 12. Final High-Converting Call to Action Banner */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200/80 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="uppercase tracking-wider">NO RETAINERS • NO RISK • NO JARGON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-tight font-display">
            Get a Website That Wins You Customers on{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              WhatsApp.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            We build your working prototype first. You test it on your mobile phone before paying a single rupee. If you love it, you pay once and own it 100% forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer font-mono"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
              <span>Get Free Sample on WhatsApp</span>
            </a>

            <button
              onClick={onOpenPrototypeModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white flex items-center justify-center gap-2.5 shadow-xl shadow-rose-500/25 transition-all cursor-pointer font-mono hover:brightness-105"
            >
              <span>Request Free Architecture Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
