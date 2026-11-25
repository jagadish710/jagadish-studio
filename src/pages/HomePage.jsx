import React, { lazy, Suspense } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import OceanCanvas from '../components/OceanCanvas';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';

// Everything below the hero is split out of the initial bundle, so the first
// paint no longer waits on the 3D crew arena, pricing tables and FAQ code.
const BeforeAfterSection = lazy(() => import('../components/BeforeAfterSection'));
const EngineeringCrewSection = lazy(() => import('../components/EngineeringCrewSection'));
const ProjectShowcaseCarousel = lazy(() => import('../components/ProjectShowcaseCarousel'));
const FounderSpotlight = lazy(() => import('../components/FounderSpotlight'));
const PricingPackages = lazy(() => import('../components/PricingPackages'));
const InteractiveQuoteBuilder = lazy(() => import('../components/InteractiveQuoteBuilder'));
const FaqSection = lazy(() => import('../components/FaqSection'));

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function HomePage({ onOpenPrototypeModal, setActivePage }) {
  const navigateTo = (pageId) => {
    if (setActivePage) {
      setActivePage(pageId);
      window.location.hash = pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToQuote = () => {
    const el = document.getElementById('quote-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenPrototypeModal) {
      onOpenPrototypeModal();
    }
  };

  return (
    <div className="space-y-0 text-slate-900 selection:bg-treasure-400 selection:text-ocean-950 bg-[#F8FAFC] relative">
      
      {/* Ambient Starlight & Ocean Particle Background */}
      <OceanCanvas />

      {/* 1. Cinematic Hero with Talking-Tom Style Captain Merq / 3D Loop & Live Device Preview */}
      <Hero 
        onOpenPrototypeModal={onOpenPrototypeModal}
        onNavigateToWork={() => navigateTo('work')}
        onNavigateToSolutions={() => navigateTo('solutions')}
      />

      {/* 2. Flowing Client & Architecture Marquee */}
      <ClientMarquee />

      {/* 3. The Business Reality Check + Live 4G Mobile Speed Race Simulator */}
      <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
        <BeforeAfterSection />
      </Suspense>

      {/* 4. Meet The Merqurie Engineering Crew (Merq, Zoro, Nami, Sanji) */}
      <Suspense fallback={<div className="min-h-[80vh]" aria-hidden="true" />}>
        <EngineeringCrewSection onOpenQuote={scrollToQuote} />
      </Suspense>

      {/* 5. Interactive Project Showcase Carousel with Authentic Client Screens */}
      <section id="case-studies">
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
          <ProjectShowcaseCarousel onOpenPrototypeModal={onOpenPrototypeModal} />
        </Suspense>
      </section>

      {/* 6. Technical Leadership & Studio Standards (Founder Card with Amazon & Turing Badges) */}
      <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
        <FounderSpotlight onOpenPrototypeModal={onOpenPrototypeModal} />
      </Suspense>

      {/* 7. Transparent Pricing Packages with 100% Code Ownership Guarantee */}
      <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
        <PricingPackages onOpenPrototypeModal={onOpenPrototypeModal} />
      </Suspense>

      {/* 8. Interactive Quote Builder + Zero-Risk Free 24h Sample Request */}
      <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
        <InteractiveQuoteBuilder />
      </Suspense>

      {/* 9. Frequently Asked Questions */}
      <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
        <FaqSection onOpenPrototypeModal={onOpenPrototypeModal} />
      </Suspense>

      {/* 10. Final High-Converting Call to Action Banner */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200/80 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="uppercase tracking-wider">NO FORCED CONTRACTS • 100% YOUR DIGITAL ASSET</span>
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
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm bg-emerald-700 hover:bg-emerald-600 text-white flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer font-mono"
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
