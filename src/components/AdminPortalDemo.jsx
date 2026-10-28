import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  LayoutDashboard,
  Eye,
  Edit3,
  Save,
  Check,
  Megaphone,
  Settings,
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
      isDark ? 'border-white/5 bg-[#121212]' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#18181C] border-[#E4E4E7]/30 text-[#E4E4E7]' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <LayoutDashboard className={`w-3.5 h-3.5 ${isDark ? 'text-[#E4E4E7]' : 'text-blue-600'}`} />
            <span>OPERATIONAL COCKPIT &bull; INTERACTIVE DEMO</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Self-Serve Executive Cockpit <br />
            <span className={isDark ? 'text-[#E4E4E7]' : 'text-blue-700'}>
              Test-Drive Real-Time Updates
            </span>
          </h2>
          <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Every deployment includes a dedicated, password-protected management cockpit. Modify parameters on the left and observe instantaneous live synchronization on the right.
          </p>
        </div>

        {/* Simulator Frame */}
        <div className={`rounded-2xl border overflow-hidden shadow-lg ${
          isDark 
            ? 'border-white/10 bg-[#161619]' 
            : 'border-slate-200 bg-white'
        }`}>
          {/* Top Window Bar */}
          <div className={`px-5 py-3.5 border-b flex items-center justify-between ${
            isDark ? 'bg-[#1A1A1E] border-white/5' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className={`ml-3 text-xs font-mono hidden sm:inline ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                https://admin.merqurie.com/cockpit/live-preview
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
                      ? 'bg-zinc-200/20 text-zinc-200 border border-zinc-200/40' 
                      : 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                    : isDark ? 'opacity-60 hover:opacity-100 text-white' : 'text-slate-500 hover:text-slate-900'
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
                      ? 'bg-zinc-200/20 text-zinc-200 border border-zinc-200/40' 
                      : 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                    : isDark ? 'opacity-60 hover:opacity-100 text-white' : 'text-slate-500 hover:text-slate-900'
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
                      ? 'bg-zinc-200/25 text-zinc-200 border border-zinc-200/50' 
                      : 'bg-white text-slate-900 border border-slate-200 shadow-xs font-bold'
                    : isDark ? 'opacity-60 hover:opacity-100 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                SPLIT DUAL VIEW
              </button>
            </div>
          </div>

          {/* Interactive Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/10 min-h-[500px]">
            {/* Left: Admin Controls */}
            {(activeTab === 'admin' || activeTab === 'split') && (
              <div className={`p-6 sm:p-8 flex flex-col justify-between ${
                isDark ? 'bg-[#181818]' : 'bg-white'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex items-center gap-2 font-mono text-xs font-bold ${
                      isDark ? 'text-zinc-200' : 'text-slate-900'
                    }`}>
                      <Edit3 className="w-4 h-4" />
                      <span>CLIENT CONTROL PANEL</span>
                    </div>
                    {savedNotice && (
                      <span className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border animate-pulse ${
                        isDark 
                          ? 'text-zinc-200 bg-zinc-200/15 border-zinc-200/30' 
                          : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                        SYNCED TO EDGE IN 14MS
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Brand / Business Display Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-lg border font-sans text-sm focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#121212] border-white/15 text-white focus:border-zinc-200' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Homepage Hero Headline
                      </label>
                      <textarea
                        rows={2}
                        value={heroTagline}
                        onChange={(e) => setHeroTagline(e.target.value)}
                        className={`w-full px-3.5 py-2 rounded-lg border font-sans text-sm focus:outline-none transition-colors resize-none ${
                          isDark 
                            ? 'bg-[#121212] border-white/15 text-white focus:border-zinc-200' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Top Promotional Alert Banner
                      </label>
                      <input
                        type="text"
                        value={promoText}
                        onChange={(e) => setPromoText(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-lg border font-sans text-sm focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#121212] border-white/15 text-white focus:border-zinc-200' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                        }`}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 rounded-lg border ${
                      isDark ? 'bg-[#121212] border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Display Promotional Banner
                      </span>
                      <button
                        onClick={() => {
                          playCyberTone('click');
                          setPromoActive(!promoActive);
                        }}
                        className={`w-11 h-6 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
                          promoActive 
                            ? isDark ? 'bg-zinc-200 justify-end' : 'bg-blue-600 justify-end' 
                            : 'bg-slate-300 justify-start'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-white shadow" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <div className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    No developer tickets. 1-click publish.
                  </div>
                  <button
                    onClick={handleSave}
                    className={`px-5 py-2.5 rounded-lg font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      isDark 
                        ? 'bg-white hover:bg-zinc-200 text-black shadow-sm' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
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
                isDark ? 'bg-[#0E0E0E]' : 'bg-slate-50/70'
              }`}>
                <div>
                  <div className={`flex items-center justify-between mb-4 pb-2 border-b ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`}>
                    <div className={`flex items-center gap-2 font-mono text-xs font-bold ${
                      isDark ? 'text-zinc-200' : 'text-slate-900'
                    }`}>
                      <Eye className="w-4 h-4" />
                      <span>LIVE CLIENT DOMAIN OUTPUT</span>
                    </div>
                    <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Auto-Updated in Real-Time
                    </span>
                  </div>

                  {/* Mock Site Render */}
                  <div className={`rounded-xl border p-5 shadow-inner ${
                    isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-slate-200'
                  }`}>
                    {promoActive && (
                      <div className={`mb-4 py-1.5 px-3 rounded text-xs font-mono text-center border animate-pulse ${
                        isDark 
                          ? 'bg-zinc-200/15 border-zinc-200/40 text-zinc-200' 
                          : 'bg-blue-50 border-blue-200 text-blue-700'
                      }`}>
                        <span className="inline-flex items-center gap-1.5"><Megaphone className="w-3.5 h-3.5" />{promoText}</span>
                      </div>
                    )}

                    <div className={`flex items-center justify-between border-b pb-3 mb-5 ${
                      isDark ? 'border-white/10' : 'border-slate-100'
                    }`}>
                      <div className="font-display font-extrabold text-base tracking-wide flex items-center gap-2">
                        <Settings className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className={isDark ? 'text-white' : 'text-slate-900'}>{companyName || 'Your Business Name'}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-mono border ${
                          isDark 
                            ? 'bg-zinc-200/10 text-zinc-200 border-zinc-200/30' 
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}>
                          Products
                        </span>
                        <span className={`px-2.5 py-1 rounded text-[10px] font-mono border ${isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                          Inquiry
                        </span>
                      </div>
                    </div>

                    <div className="py-6 text-center">
                      <h3 className={`text-lg sm:text-2xl font-bold font-display mb-2 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {heroTagline || 'Your Custom Tagline Appears Instantly Here'}
                      </h3>
                      <p className={`text-xs max-w-sm mx-auto mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Autonomous digital operations, instant customer scheduling, and live product catalog.
                      </p>
                      <button className={`px-4 py-2 rounded-lg font-bold text-xs font-mono ${
                        isDark 
                          ? 'bg-zinc-200 text-black' 
                          : 'bg-slate-900 text-white'
                      }`}>
                        Explore Offerings
                      </button>
                    </div>

                    {/* Catalog Mini Preview */}
                    <div className={`grid grid-cols-2 gap-3 mt-4 pt-4 border-t text-left ${
                      isDark ? 'border-white/5' : 'border-slate-100'
                    }`}>
                      <div className={`p-2.5 rounded-lg border ${
                        isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className={`text-[10px] font-mono ${isDark ? 'text-zinc-200' : 'text-blue-700 font-bold'}`}>PRODUCT #01</div>
                        <div className={`text-xs font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Core Client Package</div>
                        <div className="text-[10px] text-emerald-600 font-medium mt-1">Status: Active &bull; Instant Booking</div>
                      </div>
                      <div className={`p-2.5 rounded-lg border ${
                        isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className={`text-[10px] font-mono ${isDark ? 'text-zinc-200' : 'text-blue-700 font-bold'}`}>PRODUCT #02</div>
                        <div className={`text-xs font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Custom Business Solution</div>
                        <div className="text-[10px] text-emerald-600 font-medium mt-1">Status: Active &bull; Instant Booking</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
                }`}>
                  <span>SSL ENCRYPTED &bull; CLOUDFLARE EDGE</span>
                  <span className={`font-bold ${isDark ? 'text-zinc-200' : 'text-blue-700'}`}>100% RESPONSIVE</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
