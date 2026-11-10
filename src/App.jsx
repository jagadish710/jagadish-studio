import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './pages/HomePage';
import Box3DLoader from './components/Box3DLoader';

const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PrototypeModal = lazy(() => import('./components/PrototypeModal'));

export default function App() {
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
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
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans antialiased selection:bg-rose-500/15 selection:text-rose-900">
      
      {/* 3D Perspective Cube Loader (Chennaidesigner Style) */}
      {showLoader && (
        <Box3DLoader onComplete={() => setShowLoader(false)} />
      )}

      {/* Top Studio Navbar */}
      <Navbar
        onOpenPrototypeModal={openPlan}
        activePage={activePage}
        setActivePage={selectPage}
      />

      {/* Dynamic Multi-Page Main Content View */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-slate-400 font-mono text-xs">Loading...</div>}>
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
        isDark={false}
      />

      {/* Free Sample Request Prototype Modal */}
      {prototypeModalOpen && (
        <Suspense fallback={null}>
          <PrototypeModal
            isOpen={prototypeModalOpen}
            onClose={() => setPrototypeModalOpen(false)}
            isDark={false}
          />
        </Suspense>
      )}
    </div>
  );
}
