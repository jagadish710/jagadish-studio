import React from 'react';
import { ArrowUpRight, Heart, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Logo from './Logo';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function Footer({ onOpenPrototypeModal }) {
  return (
    <footer className="bg-[#060608] border-t border-zinc-800/80 text-zinc-400 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Brand & Founder Bio */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <Logo isDark={true} className="w-8 h-8" />
            <span className="font-display font-black text-base tracking-[0.18em] text-white">
              MERQURIE
            </span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            Merqurie takes its name from mercury: the metal that never sits still, and the messenger god known for speed. We engineer digital platforms the same way: fast, fluid, and clear.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-400">
            <span className="inline-flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Chennai, India
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for Projects
            </span>
          </div>
        </div>

        {/* Middle: Live Proof & Quick Links */}
        <div className="md:col-span-4 space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-white">
            Live Verified Proof
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://upskskarate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                <span>UPSKS Karate Academy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </li>
            <li>
              <a
                href="https://pmssolution.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                <span>PMS Solution (Hospital Medical Equipment)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </li>
            <li>
              <span className="text-xs text-zinc-400 font-mono">
                100% Client Code Ownership • Zero Retainer Fees
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Direct Founder Contact */}
        <div className="md:col-span-3 space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-white">
            Direct Founder Contact
          </p>
          <div className="space-y-2 text-sm">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>+91 73586 18789</span>
            </a>
            <p className="text-xs text-zinc-400">
              Personal oversight on every website build. No account managers, no junior handoffs.
            </p>
            <button
              onClick={onOpenPrototypeModal}
              className="mt-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
            >
              Request a free website preview →
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Merqurie Studio. Crafted with care by Jagadish.</p>
        <p className="font-mono text-zinc-400">Fast • Reliable • Built to Convert</p>
      </div>
    </footer>
  );
}
