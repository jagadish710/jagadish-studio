import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroLoader from './components/IntroLoader';
import ThreeCanvasHero from './components/ThreeCanvasHero';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import PrototypePage from './pages/PrototypePage';
import ChatbotWidget from './components/ChatbotWidget';
import PrototypeModal from './components/PrototypeModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  // Automatic System Dark/Light Theme Detection
  const [themeMode, setThemeMode] = useState('system'); // 'system', 'dark', or 'light'
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      setSystemPrefersDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const isDark = themeMode === 'system' ? systemPrefersDark : themeMode === 'dark';

  // Apply dark or light class to html & body for native CSS & scrollbars
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }, [isDark]);

  // Sync hash routing if user opens with #work or #solutions
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'solutions', 'work', 'about', 'prototype'].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page;
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${
      isDark 
        ? 'bg-[#121212] text-[#EAEAEA] selection:bg-luxury-gold selection:text-black' 
        : 'bg-[#F7FAF8] text-[#0C1F16] selection:bg-fresh-emerald selection:text-white'
    }`}>
      {/* 3D Cinematic Entrance Loader */}
      {!introFinished && (
        <IntroLoader
          onComplete={() => setIntroFinished(true)}
          isDark={isDark}
        />
      )}

      {/* Dynamic 3D WebGL Torus Knot & Particle Background */}
      <ThreeCanvasHero isDark={isDark} />

      {/* Adaptive Grid overlay */}
      <div className="adaptive-grid fixed inset-0 pointer-events-none opacity-25 z-0" />

      {/* Header Navigation with Theme Switcher */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenChat={() => setChatOpen(true)}
        onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
        isDark={isDark}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />

      {/* Multi-Page Views with Framer Motion Transitions */}
      <main className="relative z-10 flex flex-col min-h-[85vh]">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <HomePage
                isDark={isDark}
                onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
                setActivePage={handlePageChange}
              />
            </motion.div>
          )}

          {activePage === 'solutions' && (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <SolutionsPage
                isDark={isDark}
                onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
                onNavigateToWork={() => handlePageChange('work')}
              />
            </motion.div>
          )}

          {activePage === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <WorkPage
                isDark={isDark}
                onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
              />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <AboutPage
                isDark={isDark}
                onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
              />
            </motion.div>
          )}

          {activePage === 'prototype' && (
            <motion.div
              key="prototype"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <PrototypePage
                isDark={isDark}
                onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Terminal Footer */}
      <Footer
        isDark={isDark}
        setActivePage={handlePageChange}
        onOpenPrototypeModal={() => setPrototypeModalOpen(true)}
      />

      {/* Embedded Intelligent AI Concierge */}
      <ChatbotWidget
        isOpen={chatOpen}
        setIsOpen={setChatOpen}
        isDark={isDark}
      />

      {/* 48h Prototype Request Modal */}
      <PrototypeModal
        isOpen={prototypeModalOpen}
        onClose={() => setPrototypeModalOpen(false)}
        isDark={isDark}
      />

      {/* Direct WhatsApp Floating CTA (Number: +91 7358618789) */}
      <FloatingWhatsApp isDark={isDark} />
    </div>
  );
}
