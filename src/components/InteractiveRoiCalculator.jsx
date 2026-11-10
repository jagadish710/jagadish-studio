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
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';

export default function InteractiveRoiCalculator({ onOpenPrototypeModal }) {
  const [visitors, setVisitors] = useState(3000);
  const [industry, setIndustry] = useState('clinic');

  const industries = [
    { id: 'clinic', label: '🏥 Clinic & Healthcare', avgOrder: 2500, oldConv: 0.8, merqConv: 3.4 },
    { id: 'academy', label: '🥋 Academy & School', avgOrder: 3000, oldConv: 1.0, merqConv: 3.8 },
    { id: 'retail', label: '🛍️ Store & Catalog', avgOrder: 1800, oldConv: 1.2, merqConv: 4.2 },
    { id: 'services', label: '💼 Professional Services', avgOrder: 5000, oldConv: 0.6, merqConv: 2.9 },
  ];

  const currentInd = industries.find((i) => i.id === industry) || industries[0];

  // Calculations
  const oldLeads = Math.round((visitors * currentInd.oldConv) / 100);
  const newLeads = Math.round((visitors * currentInd.merqConv) / 100);
  const extraLeads = Math.max(1, newLeads - oldLeads);
  const annualRetainerSaved = 96000; // ₹8,000/mo * 12

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Jagadish! I ran the Website ROI Calculator for my business (${currentInd.label}) with ~${visitors.toLocaleString('en-IN')} monthly visitors. It showed an estimated +${extraLeads} WhatsApp inquiries/month. I'd like to get my free sample website!`
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
            <span className="uppercase tracking-wider">FREE SAMPLE WEBSITE ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight mb-4 font-display">
            Calculate How Many Extra Customers You Gain{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              With 1-Tap WhatsApp.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Drag the slider to your estimated monthly visitor count and select your industry to see real numbers.
          </p>
        </div>

        {/* Interactive Calculator Grid Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50/70 border-2 border-slate-200 shadow-2xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Step 1: Industry Selector */}
            <div>
              <label className="text-xs font-mono uppercase text-slate-700 tracking-wider font-bold block mb-3">
                1. Select Your Business Type:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustry(ind.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      industry === ind.id
                        ? 'bg-rose-50 border-rose-500 shadow-sm text-slate-900 font-bold'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-2xs'
                    }`}
                  >
                    <span className="text-sm font-semibold">{ind.label}</span>
                    <span className="text-[11px] font-mono text-slate-500 mt-1">
                      Avg Inquiry Val: ₹{ind.avgOrder.toLocaleString('en-IN')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Visitors Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase text-slate-700 tracking-wider font-bold">
                  2. Monthly Website Visitors:
                </label>
                <span className="text-xl font-bold font-mono text-rose-600">
                  {visitors.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-normal">visitors</span>
                </span>
              </div>

              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600 border border-slate-300"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>500 (Local Clinic / Academy)</span>
                <span>10,000 (Growing Store)</span>
                <span>25,000+ (High Volume)</span>
              </div>
            </div>

            {/* Trust Assurance */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Monthly Bills Forever</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Sub-0.3s Edge Speed</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Free Sample First</span>
              </span>
            </div>

          </div>

          {/* Right Live Results Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                PROJECTED MONTHLY GAIN
              </span>
              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                Your Revenue Impact
              </h3>
            </div>

            {/* Big Metrics */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-600 block">Extra WhatsApp Enquiries</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Instead of lost forms</span>
                </div>
                <span className="text-3xl font-black font-mono text-emerald-600">
                  +{extraLeads} <span className="text-xs text-emerald-700">/mo</span>
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-600 block">Agency Retainer Debt Saved</span>
                  <span className="text-[11px] text-cyan-700 font-medium">₹0/mo maintenance forever</span>
                </div>
                <span className="text-2xl font-black font-mono text-cyan-700">
                  ₹{annualRetainerSaved.toLocaleString('en-IN')} <span className="text-xs text-cyan-800">/yr</span>
                </span>
              </div>
            </div>

            {/* Direct High-Converting Call to Action */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleClaimSample}
                className="w-full py-4 px-5 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/40"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                <span>Claim My Free Sample Website</span>
              </button>

              <button
                onClick={onOpenPrototypeModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-mono text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Or Request Free Architecture Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
