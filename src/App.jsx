import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './pages/HomePage';

const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PrototypeModal = lazy(() => import('./components/PrototypeModal'));

export default function App() {
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'solutions', 'work', 'about'].includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'solutions', 'work', 'about'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openPlan = () => setPrototypeModalOpen(true);
  
  const selectPage = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = {
    home: <HomePage onOpenPrototypeModal={openPlan} setActivePage={selectPage} />,
    solutions: <SolutionsPage onOpenPrototypeModal={openPlan} />,
    work: <WorkPage onOpenPrototypeModal={openPlan} />,
    about: <AboutPage onOpenPrototypeModal={openPlan} />,
  };

  return (
    <div className="min-h-screen bg-[#07070A] text-[#EDEDED] font-sans antialiased selection:bg-cyan-500/25 selection:text-white">
      {/* Top Studio Navbar */}
      <Navbar
        onOpenPrototypeModal={openPlan}
        activePage={activePage}
        setActivePage={selectPage}
      />

      {/* Dynamic Multi-Page Main Content View */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-zinc-500 font-mono text-xs">Loading...</div>}>
          {pages[activePage] || pages.home}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onOpenPrototypeModal={openPlan} />

      {/* Native App-Like Mobile Navigation Bar */}
      <MobileBottomNav
        activePage={activePage}
        setActivePage={selectPage}
        onOpenChat={openPlan}
        chatOpen={false}
        isDark={true}
      />

      {/* Free Sample Request Prototype Modal */}
      {prototypeModalOpen && (
        <Suspense fallback={null}>
          <PrototypeModal
            isOpen={prototypeModalOpen}
            onClose={() => setPrototypeModalOpen(false)}
            isDark={true}
          />
        </Suspense>
      )}
    </div>
  );
}
