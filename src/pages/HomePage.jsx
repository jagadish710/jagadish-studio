import React from 'react';
import Hero from '../components/Hero';
import InteractiveLiveShowcase from '../components/InteractiveLiveShowcase';
import InteractiveCardsSection from '../components/InteractiveCardsSection';
import ComparisonSection from '../components/ComparisonSection';
import PricingPhilosophy from '../components/PricingPhilosophy';
import FaqSection from '../components/FaqSection';

export default function HomePage({ 
  onOpenPrototypeModal, 
  setActivePage, 
  isDark 
}) {
  return (
    <div className="space-y-12">
      {/* 1. Hero: Minimalist Headline & Immediate Value */}
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

      {/* 2. Visuals Speak First: Interactive Live Workstation / Prototype Showcase */}
      <InteractiveLiveShowcase
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 3. The 4 Website Solutions (Sleek Black/Charcoal with 3D Flip Cards) */}
      <InteractiveCardsSection
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 4. Comparison Matrix: Merqurie Engineering vs Legacy Agencies */}
      <ComparisonSection 
        isDark={isDark} 
        onOpenPrototypeModal={onOpenPrototypeModal} 
      />

      {/* 5. Transparent Milestone Pricing (Zero Recurring Retainers) */}
      <PricingPhilosophy
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 6. Frequently Asked Questions */}
      <FaqSection isDark={isDark} />
    </div>
  );
}
