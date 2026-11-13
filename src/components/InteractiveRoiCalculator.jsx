import React, { useState } from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  DollarSign, 
  Gift, 
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';

export default function InteractiveRoiCalculator({ onOpenPrototypeModal }) {
  const [selectedCategory, setSelectedCategory] = useState('clinic');

  const categories = [
    {
      id: 'clinic',
      label: '🏥 Clinic & Healthcare',
      typicalAgencyBuild: 45000,
      monthlyRetainer: 8000,
      merquriePrice: 14999,
      deliveryDays: '2 Days',
      highlight: 'Direct WhatsApp appointment booking with sub-second mobile speed',
    },
    {
      id: 'academy',
      label: '🥋 Academy & School',
      typicalAgencyBuild: 50000,
      monthlyRetainer: 8000,
      merquriePrice: 14999,
      deliveryDays: '2 Days',
      highlight: 'Class schedules, belt rosters, and direct parent admissions',
    },
    {
      id: 'store',
      label: '🛍️ Store & Product Catalog',
      typicalAgencyBuild: 75000,
      monthlyRetainer: 12000,
      merquriePrice: 29999,
      deliveryDays: '2-3 Days',
      highlight: 'Interactive catalog with 1-tap WhatsApp order flow & zero Shopify fees',
    },
    {
      id: 'app',
      label: '⚡ Custom App & Web Portal',
      typicalAgencyBuild: 120000,
      monthlyRetainer: 15000,
      merquriePrice: 34999,
      deliveryDays: '3-5 Days',
      highlight: 'Member logins, student registries, custom quote engines, and databases',
    },
  ];

  const current = categories.find((c) => c.id === selectedCategory) || categories[0];

  const agencyYear1Total = current.typicalAgencyBuild + (current.monthlyRetainer * 12);
  const merqurieYear1Total = current.merquriePrice;
  const cashSaved = agencyYear1Total - merqurieYear1Total;

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Jagadish! I checked the cost savings calculator for my business (${current.label}). Merqurie saves me ₹${cashSaved.toLocaleString('en-IN')} in agency retainer fees. I'd like to get my free sample website!`
    );
    return `https://wa.me/917358618789?text=${text}`;
  };

  const handleClaimSample = () => {
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#10B981', '#0284C7', '#E11D48', '#D97706'],
    });
    window.open(generateWhatsAppUrl(), '_blank');
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200/80">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-rose-400/10 via-purple-400/10 to-cyan-400/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-800 mb-4 shadow-xs">
            <Gift className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider font-semibold">HONEST PRICING &amp; COST COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight mb-4 font-display">
            See How Much Money You Save{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Without Agency Retainer Debt.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No confusing traffic estimates. Choose what your business needs and see the real cost difference between traditional agencies and Merqurie:
          </p>
        </div>

        {/* 1. Category Switcher */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-rose-50 border-rose-500 shadow-md text-slate-950 font-bold scale-102'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 shadow-2xs'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold">{cat.label}</span>
                <span className="text-[10px] font-mono text-emerald-700 font-bold mt-2">
                  Build: ₹{cat.merquriePrice.toLocaleString('en-IN')}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. Side-by-Side Financial Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Traditional Agency Retainer Trap */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-rose-50/60 border border-rose-200/90 text-slate-900 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Traditional Agency</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 font-bold">
                  Retainer Lock-In
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-950 mb-4">
                What Typical Agencies Charge:
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-rose-200/60">
                  <span>Initial Website Build:</span>
                  <strong className="font-mono text-slate-950">₹{current.typicalAgencyBuild.toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-rose-200/60">
                  <span>Monthly Retainer ("Maintenance"):</span>
                  <strong className="font-mono text-rose-700">₹{current.monthlyRetainer.toLocaleString('en-IN')} / month</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-rose-200/60">
                  <span>12 Months Retainer Debt:</span>
                  <strong className="font-mono text-rose-700">₹{(current.monthlyRetainer * 12).toLocaleString('en-IN')} / year</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-rose-200/60 text-slate-600">
                  <span>Delay for small price/text edits:</span>
                  <span>3 to 5 Days Ticket</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-rose-200/60 text-slate-600">
                  <span>Code &amp; Domain Ownership:</span>
                  <span className="text-rose-700 font-semibold">Locked on Agency Server</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200/80">
              <span className="text-xs font-mono text-slate-500 block mb-1">TOTAL 1ST YEAR MONEY PAID:</span>
              <div className="text-3xl font-black font-mono text-rose-700">
                ₹{agencyYear1Total.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Right Column: Merqurie High-Speed Freedom */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 text-slate-900 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Merqurie Architecture</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold">
                  ₹0 Retainer Forever
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-950 mb-1">
                One-Time Build. 100% Yours.
              </h3>
              <p className="text-xs text-emerald-700 font-semibold mb-4">
                {current.highlight}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span>Initial Website Build:</span>
                  <strong className="font-mono text-slate-950">₹{current.merquriePrice.toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span>Monthly Retainer Fees:</span>
                  <strong className="font-mono text-emerald-700 font-bold">₹0 Forever (Zero Retainers)</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span>Guaranteed Delivery Speed:</span>
                  <strong className="font-mono text-emerald-800">{current.deliveryDays}</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span>Update prices &amp; photos from phone:</span>
                  <strong className="font-mono text-slate-950">10 Seconds Cockpit</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span>Code &amp; Domain Sovereignty:</span>
                  <span className="text-emerald-700 font-bold">100% Owned by You</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-500 block">TOTAL 1ST YEAR COST:</span>
                  <span className="text-2xl font-black font-mono text-slate-950">
                    ₹{merqurieYear1Total.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-emerald-700 font-bold block">DIRECT CASH SAVED:</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">
                    +₹{cashSaved.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleClaimSample}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Claim Free Working Sample on WhatsApp</span>
                </button>

                <button
                  onClick={onOpenPrototypeModal}
                  className="w-full py-2 px-3 rounded-xl text-xs font-mono text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Or Request Free Architecture Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
