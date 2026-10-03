import React from 'react';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import InteractiveCardsSection from '../components/InteractiveCardsSection';
import ComparisonSection from '../components/ComparisonSection';
import AdminPortalDemo from '../components/AdminPortalDemo';
import PricingPhilosophy from '../components/PricingPhilosophy';
import FaqSection from '../components/FaqSection';

export default function HomePage({ onOpenPrototypeModal, setActivePage, isDark }) {
  return (
    <div className="space-y-6">
      {/* 1. Hero Section with Optimized 3D WebGL Torus & Snappy Tracking */}
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

      {/* 2. Marquee Ribbon #1: High-Performance Technical Stack & Frameworks */}
      <TechMarquee mode="tech" isDark={isDark} />

      {/* 3. Hostinger-Inspired 3D Interactive Flip Cards & Typing Header */}
      <InteractiveCardsSection
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 4. Comparison Section: "Solutions vs Just a Website" Manifesto */}
      <ComparisonSection isDark={isDark} />

      {/* 5. Marquee Ribbon #2: Digital Solutions & Software Capabilities */}
      <TechMarquee mode="solutions" isDark={isDark} />

      {/* 6. Self-Service Client Admin Cockpit Sandbox */}
      <AdminPortalDemo isDark={isDark} />

      {/* 7. Pricing Philosophy (No Maintenance Charges) */}
      <PricingPhilosophy
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />

      {/* 8. Frequently Asked Questions (SEO Boost & Client Clarity) */}
      <FaqSection isDark={isDark} />
    </div>
  );
}
