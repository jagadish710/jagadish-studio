import React from 'react';
import Hero from '../components/Hero';
import ComparisonSection from '../components/ComparisonSection';
import AdminPortalDemo from '../components/AdminPortalDemo';
import PricingPhilosophy from '../components/PricingPhilosophy';

export default function HomePage({ onOpenPrototypeModal, setActivePage, isDark }) {
  return (
    <div className="space-y-4">
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

      <ComparisonSection isDark={isDark} />

      <AdminPortalDemo isDark={isDark} />

      <PricingPhilosophy
        isDark={isDark}
        onOpenPrototypeModal={onOpenPrototypeModal}
      />
    </div>
  );
}
