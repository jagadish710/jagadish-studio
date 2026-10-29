import React from 'react';
import Hero from '../components/Hero';
import TrustRibbon from '../components/TrustRibbon';
import ClientMarquee from '../components/ClientMarquee';
import InteractiveLiveShowcase from '../components/InteractiveLiveShowcase';
import MetricsDashboard from '../components/MetricsDashboard';
import InteractiveCardsSection from '../components/InteractiveCardsSection';
import FounderSpotlight from '../components/FounderSpotlight';
import ComparisonSection from '../components/ComparisonSection';
import PricingPhilosophy from '../components/PricingPhilosophy';
import FaqSection from '../components/FaqSection';

export default function HomePage({ 
  onOpenPrototypeModal, 
  setActivePage, 
  isDark 
}) {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. Hero: Minimalist Headline, Quick Selector Pills & Interactive Workstation Frame */}
      <Hero
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
        onNavigateToWork={() => {
          setActivePage('work');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToSolutions={() => {
          setActivePage('solutions');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Google Business Verified Trust Ribbon & Laurel Wreath Badges */}
      <TrustRibbon isDark={isDark} />

      {/* 3. Dual-Track Flowing Client Name & Platform Marquee (themaxgrowth style) */}
      <ClientMarquee isDark={isDark} />

      {/* 4. Visuals First: Interactive Live Workstation / Prototype Showcase */}
      <InteractiveLiveShowcase
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 5. Metrics Dashboard: Numbers, Telemetry Bars & Cinematic Planet-Horizon Blue Light Curve */}
      <MetricsDashboard
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 6. The 4 Website Solutions (Sleek Black/Charcoal with 3D Flip Cards & UI Mockup Banners) */}
      <InteractiveCardsSection
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 7. Leadership & Experience Spotlight: Jagadish (4+ Years Specialized Experience) */}
      <FounderSpotlight
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 8. Comparison Matrix: Merqurie Engineering vs Legacy Agencies (Cartoon Characters) */}
      <ComparisonSection 
        isDark={isDark} 
        onOpenPrototypeModal={onOpenPrototypeModal} 
      />

      {/* 9. Transparent Milestone Pricing (Zero Recurring Retainers) */}
      <PricingPhilosophy
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 10. Frequently Asked Questions */}
      <FaqSection isDark={isDark} />
    </div>
  );
}
