import React from 'react';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import InteractiveCardsSection from '../components/InteractiveCardsSection';
import ComparisonSection from '../components/ComparisonSection';
import AdminPortalDemo from '../components/AdminPortalDemo';
import PricingPhilosophy from '../components/PricingPhilosophy';
import FaqSection from '../components/FaqSection';

export default function HomePage({ 
  onOpenPrototypeModal, 
  setActivePage, 
  isDark,
  ambientColor,
  setAmbientColor,
}) {
  return (
    <div className="space-y-6">
      {/* 1. Hero Section with Interactive System Focus Switcher */}
      <Hero
        isDark={isDark}
        ambientColor={ambientColor}
        setAmbientColor={setAmbientColor}
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

      {/* 2. Marquee Ribbon: Technical Architecture */}
      <TechMarquee mode="tech" isDark={isDark} />

      {/* 3. The Merqurie Ecosystem with 3D Flip Cards & Color-Changing Atmosphere */}
      <InteractiveCardsSection
        isDark={isDark}
        ambientColor={ambientColor}
        setAmbientColor={setAmbientColor}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 4. Comparison Section: Architectural Standard vs Legacy Retainers */}
      <ComparisonSection isDark={isDark} />

      {/* 5. Marquee Ribbon: Ecosystem Capabilities */}
      <TechMarquee mode="solutions" isDark={isDark} />

      {/* 6. Self-Service Executive Admin Cockpit Sandbox */}
      <AdminPortalDemo isDark={isDark} />

      {/* 7. Transparent Architecture Investment (Zero Retainers) */}
      <PricingPhilosophy
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 8. Frequently Asked Questions */}
      <FaqSection isDark={isDark} />
    </div>
  );
}
