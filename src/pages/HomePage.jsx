import React from 'react';
import Hero from '../components/Hero';
import InteractiveCardsSection from '../components/InteractiveCardsSection';
import MercuryHeritageSection from '../components/MercuryHeritageSection';
import ComparisonSection from '../components/ComparisonSection';
import AdminPortalDemo from '../components/AdminPortalDemo';
import PricingPhilosophy from '../components/PricingPhilosophy';
import FaqSection from '../components/FaqSection';

export default function HomePage({ 
  onOpenPrototypeModal, 
  setActivePage, 
  isDark 
}) {
  return (
    <div className="space-y-6">
      {/* 1. Hero Section: Premium Website Solutions & Mercury Tagline */}
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

      {/* 2. Interactive 3D Flip Cards: The 4 Core Website Solutions (Champagne Gold + Obsidian) */}
      <InteractiveCardsSection
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 3. The Spirit of Mercury: புதன் (Budhan) & பாதரசம் (Paatharasam) Heritage */}
      <MercuryHeritageSection isDark={isDark} />

      {/* 4. Comparison Section: Modern Architecture vs Outdated Agency Retainers */}
      <ComparisonSection isDark={isDark} />

      {/* 5. Self-Service Executive Admin Cockpit Sandbox */}
      <AdminPortalDemo isDark={isDark} />

      {/* 6. Transparent Pricing Philosophy (Zero Maintenance Retainers) */}
      <PricingPhilosophy
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 7. Frequently Asked Questions */}
      <FaqSection isDark={isDark} />
    </div>
  );
}
