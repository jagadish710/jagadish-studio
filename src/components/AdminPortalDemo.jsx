import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  LayoutDashboard,
  Eye,
  Edit3,
  Save,
  Check,
} from 'lucide-react';

export default function AdminPortalDemo({ isDark }) {
  const [activeTab, setActiveTab] = useState('split');
  const [companyName, setCompanyName] = useState('Your Company / Brand Name');
  const [heroTagline, setHeroTagline] = useState('Modern Digital Solutions & Instant Client Booking');
  const [promoText, setPromoText] = useState('Special Launch Offer: 10% Off New Client Enrollments!');
  const [promoActive, setPromoActive] = useState(true);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    playCyberTone('success');
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2400);
  };

  return (
    <section id="admin-demo" className={`py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#121212]' : 'border-black/5 bg-[#F7FAF8]'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border ${
            isDark 
              ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
              : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
          }`}>
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>INTERACTIVE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            THE CLIENT ADMIN PORTAL <br />
            <span className="text-gradient-main">TEST-DRIVE IT RIGHT HERE</span>
          </h2>
          <p className="opacity-75 text-sm sm:text-base font-sans">
            Every client gets a dedicated, password-protected management cockpit. Try editing the fields on the left and watch the live website update instantly on the right.
          </p>
        </div>

        {/* Simulator Frame */}
        <div className={`rounded-2xl border overflow-hidden shadow-2xl ${
          isDark 
            ? 'border-luxury-gold/30 bg-[#161616] shadow-black/80' 
            : 'border-fresh-border bg-white shadow-emerald-950/10'
        }`}>
          {/* Top Window Bar */}
          <div className={`px-5 py-3.5 border-b flex items-center justify-between ${
            isDark ? 'bg-[#1B1B1B] border-white/10' : 'bg-[#EDF3EF] border-black/10'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono opacity-60 hidden sm:inline">
                https://portal.jagadish.online/client/live-sandbox
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playCyberTone('click');
                  setActiveTab('admin');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === 'admin'
                    ? isDark 
                      ? 'bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40' 
                      : 'bg-fresh-tint text-fresh-green border border-fresh-emerald/40'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                ADMIN VIEW
              </button>
              <button
                onClick={() => {
                  playCyberTone('click');
                  setActiveTab('preview');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === 'preview'
                    ? isDark 
                      ? 'bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40' 
                      : 'bg-fresh-tint text-fresh-green border border-fresh-emerald/40'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                WEBSITE VIEW
              </button>
              <button
                onClick={() => {
                  playCyberTone('click');
                  setActiveTab('split');
                }}
                className={`hidden md:block px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === 'split'
                    ? isDark 
                      ? 'bg-luxury-gold/25 text-luxury-gold border border-luxury-gold/50' 
                      : 'bg-fresh-tint text-fresh-green border border-fresh-emerald/50'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                SPLIT DUAL VIEW
              </button>
            </div>
          </div>

          {/* Interactive Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 min-h-[500px]">
            {/* Left: Admin Controls */}
            {(activeTab === 'admin' || activeTab === 'split') && (
              <div className={`p-6 sm:p-8 flex flex-col justify-between ${
                isDark ? 'bg-[#181818]' : 'bg-[#FAFCFB]'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex items-center gap-2 font-mono text-xs font-bold ${
                      isDark ? 'text-luxury-gold' : 'text-fresh-green'
                    }`}>
                      <Edit3 className="w-4 h-4" />
                      <span>CLIENT CONTROL PANEL</span>
                    </div>
                    {savedNotice && (
                      <span className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border animate-pulse ${
                        isDark 
                          ? 'text-luxury-gold bg-luxury-gold/15 border-luxury-gold/30' 
                          : 'text-fresh-green bg-fresh-tint border-fresh-emerald/30'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                        SYNCED TO EDGE IN 14MS
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono opacity-80 mb-1.5">
                        Brand / Business Display Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-lg border font-sans text-sm focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                            : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono opacity-80 mb-1.5">
                        Homepage Hero Headline
                      </label>
                      <textarea
                        rows={2}
                        value={heroTagline}
                        onChange={(e) => setHeroTagline(e.target.value)}
                        className={`w-full px-3.5 py-2 rounded-lg border font-sans text-sm focus:outline-none transition-colors resize-none ${
                          isDark 
                            ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                            : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono opacity-80 mb-1.5">
                        Top Promotional Alert Banner
                      </label>
                      <input
                        type="text"
                        value={promoText}
                        onChange={(e) => setPromoText(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-lg border font-sans text-sm focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                            : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                        }`}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 rounded-lg border ${
                      isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/10'
                    }`}>
                      <span className="text-xs font-mono opacity-80">
                        Display Promotional Banner
                      </span>
                      <button
                        onClick={() => {
                          playCyberTone('click');
                          setPromoActive(!promoActive);
                        }}
                        className={`w-11 h-6 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
                          promoActive 
                            ? isDark ? 'bg-luxury-gold justify-end' : 'bg-fresh-emerald justify-end' 
                            : 'bg-slate-400 justify-start'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-black shadow" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}>
                  <div className="text-[11px] font-mono opacity-60">
                    No developer tickets. 1-click publish.
                  </div>
                  <button
                    onClick={handleSave}
                    className={`px-5 py-2.5 rounded-lg font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      isDark 
                        ? 'bg-luxury-gold hover:bg-amber-300 text-black shadow-gold-glow' 
                        : 'bg-fresh-emerald hover:bg-emerald-400 text-white shadow-emerald-glow'
                    }`}
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>PUBLISH EDITS</span>
                  </button>
                </div>
              </div>
            )}

            {/* Right: Live Website Output Preview */}
            {(activeTab === 'preview' || activeTab === 'split') && (
              <div className={`p-6 sm:p-8 flex flex-col justify-between ${
                isDark ? 'bg-[#0E0E0E]' : 'bg-[#F2F6F4]'
              }`}>
                <div>
                  <div className={`flex items-center justify-between mb-4 pb-2 border-b ${
                    isDark ? 'border-white/10' : 'border-black/10'
                  }`}>
                    <div className={`flex items-center gap-2 font-mono text-xs font-bold ${
                      isDark ? 'text-luxury-gold' : 'text-fresh-green'
                    }`}>
                      <Eye className="w-4 h-4" />
                      <span>LIVE CLIENT DOMAIN OUTPUT</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-60">
                      Auto-Updated in Real-Time
                    </span>
                  </div>

                  {/* Mock Site Render */}
                  <div className={`rounded-xl border p-5 shadow-inner ${
                    isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-black/10'
                  }`}>
                    {promoActive && (
                      <div className={`mb-4 py-1.5 px-3 rounded text-xs font-mono text-center border animate-pulse ${
                        isDark 
                          ? 'bg-luxury-gold/15 border-luxury-gold/40 text-luxury-gold' 
                          : 'bg-fresh-tint border-fresh-border text-fresh-green'
                      }`}>
                        📣 {promoText}
                      </div>
                    )}

                    <div className={`flex items-center justify-between border-b pb-3 mb-5 ${
                      isDark ? 'border-white/10' : 'border-black/10'
                    }`}>
                      <div className="font-display font-extrabold text-base tracking-wide flex items-center gap-2">
                        <span className={isDark ? 'text-luxury-gold' : 'text-fresh-green'}>⚙️</span>
                        <span>{companyName || 'Your Business Name'}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-mono border ${
                          isDark 
                            ? 'bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30' 
                            : 'bg-fresh-tint text-fresh-green border-fresh-border'
                        }`}>
                          Products
                        </span>
                        <span className="px-2.5 py-1 rounded text-[10px] font-mono border border-black/5 opacity-60">
                          Inquiry
                        </span>
                      </div>
                    </div>

                    <div className="py-6 text-center">
                      <h3 className="text-lg sm:text-2xl font-bold font-display mb-2 leading-snug">
                        {heroTagline || 'Your Custom Tagline Appears Instantly Here'}
                      </h3>
                      <p className="text-xs opacity-70 max-w-sm mx-auto mb-4">
                        Autonomous digital operations, instant customer scheduling, and live product catalog.
                      </p>
                      <button className={`px-4 py-2 rounded-lg font-bold text-xs font-mono ${
                        isDark 
                          ? 'bg-luxury-gold text-black' 
                          : 'bg-fresh-emerald text-white'
                      }`}>
                        Explore Offerings
                      </button>
                    </div>

                    {/* Catalog Mini Preview */}
                    <div className={`grid grid-cols-2 gap-3 mt-4 pt-4 border-t text-left ${
                      isDark ? 'border-white/5' : 'border-black/5'
                    }`}>
                      <div className={`p-2.5 rounded-lg border ${
                        isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'
                      }`}>
                        <div className={`text-[10px] font-mono ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>PRODUCT #01</div>
                        <div className="text-xs font-bold mt-0.5">Core Client Package</div>
                        <div className="text-[10px] text-emerald-500 mt-1">Status: Active &bull; Instant Booking</div>
                      </div>
                      <div className={`p-2.5 rounded-lg border ${
                        isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'
                      }`}>
                        <div className={`text-[10px] font-mono ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>PRODUCT #02</div>
                        <div className="text-xs font-bold mt-0.5">Custom Business Solution</div>
                        <div className="text-[10px] text-emerald-500 mt-1">Status: Active &bull; Instant Booking</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-white/10 text-slate-400' : 'border-black/10 text-slate-600'
                }`}>
                  <span>SSL ENCRYPTED &bull; CLOUDFLARE EDGE</span>
                  <span className={`font-bold ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>100% RESPONSIVE</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
