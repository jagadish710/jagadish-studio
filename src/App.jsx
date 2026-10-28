import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import PrototypePage from './pages/PrototypePage';
import ChatbotWidget from './components/ChatbotWidget';
import PrototypeModal from './components/PrototypeModal';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  const [introFinished, setIntroFinished] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  // Automatic System Dark/Light Theme Detection
  const [themeMode, setThemeMode] = useState('dark'); // Dark mode priority as requested
  const [systemPrefersDark, setSystemPrefersDark] = useState(true);

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
        ? 'bg-[#08080A] text-[#EAEAEA] selection:bg-zinc-700 selection:text-white' 
        : 'bg-[#FFFFFF] text-[#0F172A] selection:bg-slate-900 selection:text-white'
    }`}>
      {/* 3D Entrance Loader (bypassed instant 0ms) */}
      {!introFinished && (
        <IntroLoader
          onComplete={() => setIntroFinished(true)}
          isDark={isDark}
        />
      )}

      {/* Unified Minimal Ambient Lighting — Sleek Monochrome */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[140px] pointer-events-none ${
            isDark ? 'bg-zinc-800/15' : 'bg-slate-200/50'
          }`}
        />
        <div 
          className={`absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${
            isDark ? 'bg-zinc-800/10' : 'bg-slate-100/60'
          }`}
        />
      </div>

      {/* Subtle architectural grid overlay */}
      <div className="adaptive-grid fixed inset-0 pointer-events-none opacity-15 z-0" />

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

      {/* Multi-Page Views with Smooth Transitions */}
      <main className="relative z-10 flex flex-col min-h-[85vh] pb-16 md:pb-0">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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

      {/* Embedded Intelligent AI Assistant */}
      <ChatbotWidget
        isOpen={chatOpen}
        setIsOpen={setChatOpen}
        isDark={isDark}
      />

      {/* Quick Enquiry Modal */}
      <PrototypeModal
        isOpen={prototypeModalOpen}
        onClose={() => setPrototypeModalOpen(false)}
        isDark={isDark}
      />

      {/* Modern App-Style Mobile Bottom Navigation Bar (PMS Style) */}
      <MobileBottomNav
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenChat={() => setChatOpen(true)}
        chatOpen={chatOpen}
        isDark={isDark}
      />
    </div>
  );
}
