import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Zap, ShieldCheck, Smartphone, Clock, ArrowRight, Volume2, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20spoke%20with%20Captain%20Merq%20and%20want%20to%20know%20more%20about%20a%20website%20for%20my%20business.';

export default function CartoonMascotExplainer({ onOpenPrototypeModal }) {
  const [activeTopic, setActiveTopic] = useState('speed');
  const [isWaving, setIsWaving] = useState(false);
  const [mascotMood, setMascotMood] = useState('happy');

  const topics = [
    {
      id: 'speed',
      label: '⚡ Why so fast?',
      shortTitle: 'Sub-0.3s Lightning Speed',
      accent: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 border-amber-200 text-amber-800',
      mascotExpression: 'excited',
      speechBubble: (
        <span>
          <strong className="text-slate-900 font-bold block mb-1">"No heavy anchor dragging you down!"</strong>
          Most standard websites use bulky WordPress themes with 40+ plugins that make customers wait 8 seconds. We hand-craft clean, modern code that opens in <strong>0.24 seconds</strong> on mobile. Smooth and instant!
        </span>
      ),
      highlight: '99/100 Mobile Performance Score',
      cardDetail: 'Clean native code deployed across global edge networks so your visitors never see a loading spinner.',
    },
    {
      id: 'whatsapp',
      label: '📱 How do I get leads?',
      shortTitle: '1-Tap WhatsApp Conversion',
      accent: 'from-emerald-500 to-teal-500',
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      mascotExpression: 'wink',
      speechBubble: (
        <span>
          <strong className="text-slate-900 font-bold block mb-1">"Zero boring forms to fill!"</strong>
          Nobody wants to type their name, email, and captcha into a 10-line form. Your customer taps one button, and <strong>WhatsApp opens directly</strong> on their phone with their product question pre-typed. You reply in seconds!
        </span>
      ),
      highlight: 'Direct WhatsApp Chat with Customers',
      cardDetail: 'Turn casual mobile visitors into warm inquiries immediately without losing them in email spam.',
    },
    {
      id: 'pricing',
      label: '💰 Any hidden fees?',
      shortTitle: 'Pay Once • 100% Yours',
      accent: 'from-rose-500 to-pink-500',
      badgeBg: 'bg-rose-50 border-rose-200 text-rose-800',
      mascotExpression: 'confident',
      speechBubble: (
        <span>
          <strong className="text-slate-900 font-bold block mb-1">"Genuine one-time pricing — no traps!"</strong>
          You pay for the build once. You get <strong>100% full ownership</strong> of your domain, files, and source code. No monthly retainers, no hostage situations, and no forced maintenance bills.
        </span>
      ),
      highlight: '100% Code & Domain Sovereignty',
      cardDetail: 'Every digital asset is transferred to your name from day one with 30 days of free launch support.',
    },
    {
      id: 'delivery',
      label: '⏱️ Delivery in 2 days?',
      shortTitle: '2-Day Working Sample',
      accent: 'from-cyan-500 to-blue-500',
      badgeBg: 'bg-cyan-50 border-cyan-200 text-cyan-800',
      mascotExpression: 'cheer',
      speechBubble: (
        <span>
          <strong className="text-slate-900 font-bold block mb-1">"Test on your phone before paying!"</strong>
          We build a live, working sample for your business within <strong>24 to 48 hours</strong>. You open it on your phone, click around, and test it yourself. If you love it, we complete it!
        </span>
      ),
      highlight: 'Zero Risk • Live Sample on Your Phone',
      cardDetail: 'See real results upfront before making any final commitment. Fast, transparent, and hassle-free.',
    },
    {
      id: 'edits',
      label: '🛠️ Can I edit prices?',
      shortTitle: '10-Second Phone Cockpit',
      accent: 'from-purple-500 to-indigo-500',
      badgeBg: 'bg-purple-50 border-purple-200 text-purple-800',
      mascotExpression: 'cool',
      speechBubble: (
        <span>
          <strong className="text-slate-900 font-bold block mb-1">"Update everything from your pocket!"</strong>
          Need to change a price or post a holiday offer? You don't have to call a developer. Just open your <strong>10-Second Phone Admin</strong>, type the new price, tap save, and you are done!
        </span>
      ),
      highlight: 'Self-Serve Phone Admin Access',
      cardDetail: 'Take full control of your business content directly from your smartphone at any time of day.',
    },
  ];

  const currentTopic = topics.find((t) => t.id === activeTopic) || topics[0];

  const triggerConfetti = () => {
    setIsWaving(true);
    setMascotMood('cheer');
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F59E0B', '#EF4444', '#10B981', '#3B82F6'],
      });
    } catch {}
    setTimeout(() => {
      setIsWaving(false);
      setMascotMood('happy');
    }, 1800);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Playful Ambient Background Blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-rose-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-amber-50 border border-amber-200 text-amber-800 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="uppercase tracking-wider">MEET YOUR GUIDE • SIMPLE &amp; CLEAR</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-950 mb-3">
            Websites Explained{' '}
            <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              In Plain English.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            No confusing tech jargon. Tap below to see how Merqurie helps your business grow:
          </p>
        </div>

        {/* Interactive Topic Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {topics.map((t) => {
            const isActive = activeTopic === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTopic(t.id);
                  setMascotMood(t.mascotExpression);
                }}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-lg shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mascot & Speech Dialogue Showcase Stage */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: The Animated Character Mascot (Captain Merq) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
              
              {/* Mascot Interactive Stage */}
              <motion.div
                className="relative cursor-pointer select-none group"
                onClick={triggerConfetti}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: isWaving ? [0, -12, 0] : [0, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: isWaving ? 0.6 : 3.2,
                  ease: 'easeInOut',
                }}
              >
                {/* Mascot Aura Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-rose-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />

                {/* SVG Illustrated Anime Straw-Hat Navigator Mascot */}
                <svg
                  viewBox="0 0 200 220"
                  className="w-44 h-48 sm:w-52 sm:h-56 relative z-10 drop-shadow-xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Straw Hat Crown */}
                  <ellipse cx="100" cy="50" rx="42" ry="26" fill="#FBBF24" stroke="#D97706" strokeWidth="3" />
                  
                  {/* Iconic Red Ribbon on Hat */}
                  <path d="M 60 54 Q 100 64 140 54 L 141 62 Q 100 72 59 62 Z" fill="#EF4444" />

                  {/* Straw Hat Wide Brim (Luffy-inspired curvature) */}
                  <path
                    d="M 28 66 Q 100 86 172 66 Q 100 48 28 66 Z"
                    fill="#FDE68A"
                    stroke="#D97706"
                    strokeWidth="3.5"
                  />

                  {/* Character Head */}
                  <circle cx="100" cy="115" r="46" fill="#FED7AA" stroke="#FDBA74" strokeWidth="2.5" />

                  {/* Cheerful Anime Blushing Cheeks */}
                  <ellipse cx="76" cy="126" rx="8" ry="4" fill="#F87171" opacity="0.55" />
                  <ellipse cx="124" cy="126" rx="8" ry="4" fill="#F87171" opacity="0.55" />

                  {/* Expressive Anime Eyes (State Dependent) */}
                  {mascotMood === 'wink' ? (
                    <>
                      {/* Left Eye: Big Happy Sparkle */}
                      <circle cx="82" cy="112" r="7.5" fill="#1E293B" />
                      <circle cx="84" cy="109" r="2.5" fill="#FFFFFF" />
                      {/* Right Eye: Joyful Winking Arc */}
                      <path d="M 116 112 Q 124 104 132 112" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </>
                  ) : mascotMood === 'cheer' || mascotMood === 'excited' ? (
                    <>
                      {/* Excited Star Eyes */}
                      <path d="M 76 112 Q 82 103 88 112" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                      <path d="M 112 112 Q 118 103 124 112" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </>
                  ) : (
                    <>
                      {/* Happy Standard Big Anime Eyes */}
                      <circle cx="82" cy="112" r="7" fill="#0F172A" />
                      <circle cx="84.5" cy="109.5" r="2.5" fill="#FFFFFF" />
                      <circle cx="118" cy="112" r="7" fill="#0F172A" />
                      <circle cx="120.5" cy="109.5" r="2.5" fill="#FFFFFF" />
                    </>
                  )}

                  {/* Smiling Mouth */}
                  <path
                    d={isWaving ? "M 88 128 Q 100 146 112 128 Z" : "M 90 128 Q 100 138 110 128"}
                    stroke="#1E293B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill={isWaving ? "#EF4444" : "none"}
                  />

                  {/* Cool Navigator Aviator Goggles above Brow */}
                  <g opacity="0.95">
                    <rect x="68" y="74" width="28" height="18" rx="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="2.5" />
                    <rect x="104" y="74" width="28" height="18" rx="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="2.5" />
                    <path d="M 96 82 L 104 82" stroke="#0284C7" strokeWidth="3" />
                    <line x1="72" y1="78" x2="80" y2="78" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    <line x1="108" y1="78" x2="116" y2="78" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Cute Red Navigator Scarf / Bandana */}
                  <path d="M 72 152 Q 100 166 128 152 L 132 170 Q 100 178 68 170 Z" fill="#EF4444" />
                  <circle cx="100" cy="164" r="5" fill="#FBBF24" />

                  {/* Body & Little Hands */}
                  <path d="M 70 170 L 60 200 L 140 200 L 130 170 Z" fill="#3B82F6" stroke="#2563EB" strokeWidth="2.5" />

                  {/* Animated Hand: Waving gesture on tap */}
                  {isWaving ? (
                    <g className="animate-bounce">
                      <circle cx="152" cy="120" r="10" fill="#FED7AA" stroke="#FDBA74" strokeWidth="2" />
                      <line x1="148" y1="110" x2="156" y2="104" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                      <line x1="156" y1="114" x2="164" y2="112" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  ) : (
                    <circle cx="140" cy="160" r="8" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
                  )}
                </svg>

                {/* Fun "Tap Me" Prompt Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-xs mt-1 group-hover:scale-105 transition-transform">
                  <Smile className="w-3.5 h-3.5 text-amber-700" />
                  <span>Tap Captain Merq! 🎉</span>
                </div>
              </motion.div>

              <div className="mt-3">
                <span className="font-display font-black text-slate-900 text-base">Captain Merq</span>
                <span className="text-xs text-slate-500 block">Your Fast-Web Navigator</span>
              </div>
            </div>

            {/* Right: The Conversational Speech Bubble & Value Card */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Speech Bubble Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTopic.id}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.25 }}
                  className="relative p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed shadow-sm"
                >
                  {/* Speech Bubble Pointer (pointing towards left mascot) */}
                  <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-200" />
                  <div className="hidden md:block absolute -left-2.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-7 border-t-transparent border-b-7 border-b-transparent border-r-7 border-r-slate-50" />

                  {/* Dialogue Content */}
                  <div className="space-y-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border ${currentTopic.badgeBg} mb-2`}>
                      {currentTopic.shortTitle}
                    </span>
                    <div className="text-slate-700">
                      {currentTopic.speechBubble}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Verified Value Check Card */}
              <article className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                    ✓ Verified Standard
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    {currentTopic.highlight}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {currentTopic.cardDetail}
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all cursor-pointer font-mono"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Ask On WhatsApp</span>
                  </a>
                </div>
              </article>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
