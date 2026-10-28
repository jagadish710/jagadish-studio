import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Activity, 
  Cpu, 
  Settings, 
  Check,
  Star, 
  ExternalLink,
  Plus,
  Minus,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { playCyberTone } from '../utils/audio';

export default function InteractiveLiveShowcase({ onOpenPrototypeModal, isDark = true }) {
  const [activeTab, setActiveTab] = useState('ecommerce'); // 'ecommerce', 'sports', 'machinery', 'admin'
  
  // Interactive E-Commerce State
  const [activeCategory, setActiveCategory] = useState('helmets');
  const [cartCount, setCartCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(0);

  // Interactive Admin State
  const [adminTitle, setAdminTitle] = useState('Apex Urban Systems');
  const [adminTagline, setAdminTagline] = useState('High-Performance Web Platforms & Catalogs');
  const [adminPrice, setAdminPrice] = useState('₹18,500');

  // Interactive Sports State
  const [selectedBelt, setSelectedBelt] = useState('black');

  const products = {
    helmets: [
      { id: 1, name: 'Pro Carbon Aero Helmet', price: '₹4,499', rating: '4.9', stock: 'In Stock', badge: 'Best Seller', specs: 'Weight: 280g • Aerodynamic Carbon Shell' },
      { id: 2, name: 'Urban Matte Commuter', price: '₹2,899', rating: '4.8', stock: 'In Stock', badge: 'Trending', specs: 'Integrated LED Rear Light • Magnetic Buckle' },
      { id: 3, name: 'Trail Enduro Shield', price: '₹3,750', rating: '5.0', stock: 'Limited', badge: 'Pro Series', specs: 'MIPS Protection System • Dual Visor' },
    ],
    apparel: [
      { id: 4, name: 'Stormproof Riding Jacket', price: '₹5,999', rating: '4.9', stock: 'In Stock', badge: 'Waterproof', specs: 'Breathable 3-Layer Shell • Reflective Accents' },
      { id: 5, name: 'Ergonomic Impact Gloves', price: '₹1,499', rating: '4.7', stock: 'In Stock', badge: 'Kevlar Palm', specs: 'Touchscreen Compatible • D3O Knuckle Armor' },
    ],
    hardware: [
      { id: 6, name: 'Precision CNC Hub Component', price: '₹12,499', rating: '5.0', stock: 'Pre-order', badge: 'Machined', specs: 'Aircraft-grade 7075 Aluminum • Dual Bearings' },
      { id: 7, name: 'Long-Range Lithium Battery', price: '₹9,800', rating: '4.9', stock: 'In Stock', badge: 'Samsung Cells', specs: '42V 10Ah • 35km Real-world Range' },
    ],
  };

  const handleTabChange = (tab) => {
    playCyberTone('click');
    setActiveTab(tab);
  };

  return (
    <motion.section 
      id="live-showcase" 
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE INTERACTIVE SHOWCASE &bull; TEST DRIVE BELOW</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight font-display ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Visuals First. Experience The Systems We Deliver.
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-xl ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              Switch between real production workflows below. Every platform features sub-0.3s speed, intuitive client controls, and zero maintenance fees.
            </p>
          </div>

          {/* Tab Selector Pills */}
          <div className={`flex items-center gap-1.5 p-1 rounded-xl border overflow-x-auto no-scrollbar ${
            isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => handleTabChange('ecommerce')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                activeTab === 'ecommerce'
                  ? isDark 
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs' 
                    : 'bg-white text-slate-950 font-semibold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>E-Commerce</span>
            </button>

            <button
              onClick={() => handleTabChange('sports')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                activeTab === 'sports'
                  ? isDark 
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs' 
                    : 'bg-white text-slate-950 font-semibold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Sports SaaS (upsks)</span>
            </button>

            <button
              onClick={() => handleTabChange('machinery')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                activeTab === 'machinery'
                  ? isDark 
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs' 
                    : 'bg-white text-slate-950 font-semibold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Industrial (pms)</span>
            </button>

            <button
              onClick={() => handleTabChange('admin')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                activeTab === 'admin'
                  ? isDark 
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs' 
                    : 'bg-white text-slate-950 font-semibold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Client Admin Cockpit</span>
            </button>
          </div>
        </div>

        {/* The Sleek Hardware / Browser Mockup Container */}
        <div className={`rounded-2xl border shadow-2xl overflow-hidden transition-colors ${
          isDark 
            ? 'border-zinc-800/90 bg-[#0A0A0C]' 
            : 'border-slate-200 bg-white shadow-xl'
        }`}>
          
          {/* Workstation Browser Chrome */}
          <div className={`px-4 py-3 border-b flex items-center justify-between ${
            isDark ? 'border-zinc-800/80 bg-zinc-950' : 'border-slate-200 bg-slate-100'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`} />
              <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`} />
              <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`} />
              <div className={`ml-3 px-3 py-1 rounded-md border text-[11px] font-mono hidden sm:flex items-center gap-2 ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-400' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <span className="opacity-50">https://</span>
                <span className={isDark ? 'text-zinc-200' : 'text-slate-950 font-medium'}>
                  {activeTab === 'ecommerce' && 'store.merqurie.cloud/live-storefront'}
                  {activeTab === 'sports' && 'upskskarate.com/student-portal'}
                  {activeTab === 'machinery' && 'pmssolution.co.in/machinery-catalog'}
                  {activeTab === 'admin' && 'admin.merqurie.cloud/cockpit-sandbox'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="hidden md:inline text-[11px] text-emerald-500 font-semibold">● 0.28s Load Time</span>
              <span className={`px-2 py-0.5 rounded border text-[10px] ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                100% CODE OWNERSHIP
              </span>
            </div>
          </div>

          {/* Interactive Screen Body */}
          <div className={`p-5 sm:p-8 min-h-[460px] ${
            isDark ? 'bg-[#0E0E12]' : 'bg-slate-50/50'
          }`}>
            <AnimatePresence mode="wait">
              
              {/* TAB 1: E-COMMERCE SHOWCASE */}
              {activeTab === 'ecommerce' && (
                <motion.div
                  key="ecommerce"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Store Navigation Bar */}
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b ${
                    isDark ? 'border-zinc-800' : 'border-slate-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center font-bold text-sm ${
                        isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-slate-950 text-white border-slate-900'
                      }`}>
                        M
                      </div>
                      <div>
                        <span className={`text-sm font-bold tracking-wide ${isDark ? 'text-white' : 'text-slate-950'}`}>
                          MR. GEAR &bull; E-STORE
                        </span>
                        <span className={`block text-[10px] font-mono ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                          E-Commerce Architecture &bull; Instant WhatsApp Checkout
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {['helmets', 'apparel', 'hardware'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            playCyberTone('click');
                            setActiveCategory(cat);
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeCategory === cat
                              ? isDark 
                                ? 'bg-zinc-200 text-zinc-950 font-bold' 
                                : 'bg-slate-950 text-white font-bold'
                              : isDark 
                                ? 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800' 
                                : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Product Feature Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Featured Interactive Hero Card */}
                    <div className={`lg:col-span-7 p-6 rounded-xl border flex flex-col justify-between ${
                      isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                            isDark 
                              ? 'bg-zinc-900 border-zinc-700 text-zinc-300' 
                              : 'bg-slate-100 border-slate-200 text-slate-800'
                          }`}>
                            Featured Item
                          </span>
                          <span className="text-xs font-mono text-emerald-500 font-bold">
                            <span className="inline-flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-current text-amber-400" /> 4.9 (128 reviews)</span>
                          </span>
                        </div>

                        <h3 className={`text-xl sm:text-2xl font-bold mb-2 font-display ${
                          isDark ? 'text-white' : 'text-slate-950'
                        }`}>
                          {products[activeCategory][selectedProduct % products[activeCategory].length].name}
                        </h3>
                        <p className={`text-xs mb-4 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                          {products[activeCategory][selectedProduct % products[activeCategory].length].specs}
                        </p>

                        <div className="flex items-baseline gap-3 mb-6">
                          <span className={`text-2xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>
                            {products[activeCategory][selectedProduct % products[activeCategory].length].price}
                          </span>
                          <span className="text-xs text-zinc-500 line-through">₹6,999</span>
                          <span className="text-[11px] font-mono text-emerald-500 font-semibold">Save 35%</span>
                        </div>
                      </div>

                      {/* Interactive Controls */}
                      <div className={`pt-4 border-t flex flex-col sm:flex-row items-center gap-3 ${
                        isDark ? 'border-zinc-800' : 'border-slate-200'
                      }`}>
                        <div className={`flex items-center rounded-lg border p-1 ${
                          isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'
                        }`}>
                          <button 
                            onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                            className={`p-1.5 transition-colors ${
                              isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                            }`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className={`px-3 text-xs font-mono font-bold ${
                            isDark ? 'text-white' : 'text-slate-950'
                          }`}>{cartCount}</span>
                          <button 
                            onClick={() => setCartCount(cartCount + 1)}
                            className={`p-1.5 transition-colors ${
                              isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                            }`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <a
                          href="https://wa.me/917358618789?text=Hi%20Merqurie!%20I%20tested%20your%20E-Commerce%20demo%20and%20want%20a%20similar%20store."
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playCyberTone('click')}
                          className={`w-full sm:w-auto flex-1 py-2.5 px-4 rounded-lg font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                            isDark 
                              ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                              : 'bg-slate-950 hover:bg-slate-800 text-white'
                          }`}
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                          <span>WhatsApp Instant Order Flow</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Product Catalog List */}
                    <div className="lg:col-span-5 space-y-3">
                      <span className={`text-[11px] font-mono uppercase tracking-wider block mb-2 ${
                        isDark ? 'text-zinc-400' : 'text-slate-500'
                      }`}>
                        Click Product to Preview:
                      </span>
                      {products[activeCategory].map((prod, pIdx) => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            playCyberTone('click');
                            setSelectedProduct(pIdx);
                          }}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            selectedProduct === pIdx
                              ? isDark 
                                ? 'bg-zinc-900 border-zinc-700 shadow-sm' 
                                : 'bg-slate-100 border-slate-300 shadow-sm'
                              : isDark 
                                ? 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/40' 
                                : 'bg-white border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-950'}`}>{prod.name}</span>
                              <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                                isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-200 text-slate-800'
                              }`}>
                                {prod.badge}
                              </span>
                            </div>
                            <span className={`text-[11px] font-mono mt-0.5 block ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>{prod.price}</span>
                          </div>
                          <span className="text-[11px] font-mono opacity-60">Select &rarr;</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              )}

              {/* TAB 2: MARTIAL ARTS SAAS (Real upskskarate.com) */}
              {activeTab === 'sports' && (
                <motion.div
                  key="sports"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b ${
                    isDark ? 'border-zinc-800' : 'border-slate-200'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                          UPSKS KARATE GLOBAL ACADEMY
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                          Live Production
                        </span>
                      </div>
                      <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                        Domain: upskskarate.com &bull; 1,000+ Students
                      </span>
                    </div>

                    <a
                      href="https://upskskarate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                        isDark 
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white' 
                          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs'
                      }`}
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`p-4 rounded-xl border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-xs'}`}>
                      <span className="text-xs font-mono opacity-70 block mb-1">Total Enrolled Students</span>
                      <span className={`text-2xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>1,248</span>
                      <span className="text-[10px] font-mono text-emerald-500 mt-1 block">+84 this tournament cycle</span>
                    </div>

                    <div className={`p-4 rounded-xl border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-xs'}`}>
                      <span className="text-xs font-mono opacity-70 block mb-1">Belt Advancement Database</span>
                      <span className={`text-2xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>100% Digital</span>
                      <span className="text-[10px] font-mono opacity-60 mt-1 block">Zero manual paperwork</span>
                    </div>

                    <div className={`p-4 rounded-xl border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-xs'}`}>
                      <span className="text-xs font-mono opacity-70 block mb-1">Ongoing Maintenance Fee</span>
                      <span className="text-2xl font-bold font-mono text-emerald-500">₹0 / Year</span>
                      <span className="text-[10px] font-mono opacity-60 mt-1 block">Full code ownership</span>
                    </div>
                  </div>

                  <div className={`p-5 rounded-xl border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'}`}>
                    <span className="text-xs font-mono opacity-70 block mb-3 uppercase tracking-wider">
                      Interactive Dan/Kyu Progression Verification:
                    </span>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['White Belt', 'Yellow Belt', 'Green Belt', 'Brown Belt', 'Black Belt 1st Dan'].map((belt) => (
                        <button
                          key={belt}
                          onClick={() => {
                            playCyberTone('click');
                            setSelectedBelt(belt);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            selectedBelt === belt
                              ? isDark ? 'bg-zinc-200 text-zinc-950 font-bold' : 'bg-slate-950 text-white font-bold'
                              : isDark ? 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800' : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
                          }`}
                        >
                          {belt}
                        </button>
                      ))}
                    </div>

                    <div className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
                      isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-100 border-slate-200'
                    }`}>
                      <span>Selected Level: <strong>{selectedBelt}</strong></span>
                      <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                        <Check className="w-3.5 h-3.5" />
                        <span>Verified Digital Record</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: INDUSTRIAL MACHINERY (Real pmssolution.co.in) */}
              {activeTab === 'machinery' && (
                <motion.div
                  key="machinery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b ${
                    isDark ? 'border-zinc-800' : 'border-slate-200'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                          PMS MACHINE SOLUTIONS
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}>
                          Industrial Catalog
                        </span>
                      </div>
                      <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                        Domain: pmssolution.co.in &bull; Heavy Machinery Catalog
                      </span>
                    </div>

                    <a
                      href="https://pmssolution.co.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                        isDark 
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white' 
                          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs'
                      }`}
                    >
                      <span>Visit Live Catalog</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-5 rounded-xl border space-y-3 ${
                      isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <span className="text-xs font-mono opacity-70 uppercase tracking-wider block">Featured Machinery Spec:</span>
                      <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        Continuous Band Sealer Series (FR-900)
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                        High-speed industrial packaging sealer with digital temperature control, conveyor speed synchronization, and solid-ink date coding.
                      </p>
                      
                      <div className="space-y-1.5 pt-2 text-xs font-mono">
                        <div className="flex justify-between opacity-80"><span>Sealing Speed:</span><span className="font-bold">0-12m / min</span></div>
                        <div className="flex justify-between opacity-80"><span>Film Thickness:</span><span className="font-bold">0.02 - 0.80 mm</span></div>
                        <div className="flex justify-between opacity-80"><span>RFQ Response:</span><span className="text-emerald-500 font-bold">&lt; 15 mins via WhatsApp</span></div>
                      </div>
                    </div>

                    <div className={`p-5 rounded-xl border flex flex-col justify-between ${
                      isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <div>
                        <span className="text-xs font-mono opacity-70 uppercase tracking-wider block mb-2">Instant RFQ Generator:</span>
                        <p className={`text-xs mb-4 ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
                          Prospective buyers click one button to generate a tailored technical quotation delivered directly to their WhatsApp.
                        </p>
                      </div>

                      <a
                        href="https://wa.me/917358618789?text=Hi%20Merqurie!%20I%20am%20interested%20in%20an%20industrial%20machinery%20catalog%20like%20PMS."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playCyberTone('click')}
                        className={`py-2.5 px-4 rounded-lg font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isDark 
                            ? 'bg-zinc-100 hover:bg-white text-zinc-950' 
                            : 'bg-slate-950 hover:bg-slate-800 text-white'
                        }`}
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                        <span>Request Machinery Catalog Architecture</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: CLIENT SELF-SERVE ADMIN COCKPIT */}
              {activeTab === 'admin' && (
                <motion.div
                  key="admin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className={`pb-4 border-b flex items-center justify-between ${
                    isDark ? 'border-zinc-800' : 'border-slate-200'
                  }`}>
                    <div>
                      <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        SELF-SERVE CLIENT ADMIN COCKPIT
                      </span>
                      <span className={`block text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                        Type on the left &bull; Watch the live storefront update on the right
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-slate-100 border-slate-200 text-slate-800'
                    }`}>
                      Zero Developer Wait Time
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Admin Inputs */}
                    <div className={`p-5 rounded-xl border space-y-4 ${
                      isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-xs'
                    }`}>
                      <span className="text-[11px] font-mono opacity-70 uppercase tracking-wider block">Admin Controls:</span>
                      
                      <div>
                        <label className="text-[11px] font-mono opacity-75 block mb-1">Company / Store Headline:</label>
                        <input
                          type="text"
                          value={adminTitle}
                          onChange={(e) => setAdminTitle(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border text-xs font-mono focus:outline-none ${
                            isDark 
                              ? 'bg-zinc-900 border-zinc-700 text-white focus:border-zinc-400' 
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-slate-950 focus:bg-white'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono opacity-75 block mb-1">Sub-Tagline:</label>
                        <input
                          type="text"
                          value={adminTagline}
                          onChange={(e) => setAdminTagline(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border text-xs font-mono focus:outline-none ${
                            isDark 
                              ? 'bg-zinc-900 border-zinc-700 text-white focus:border-zinc-400' 
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-slate-950 focus:bg-white'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono opacity-75 block mb-1">Featured Price:</label>
                        <input
                          type="text"
                          value={adminPrice}
                          onChange={(e) => setAdminPrice(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border text-xs font-mono focus:outline-none ${
                            isDark 
                              ? 'bg-zinc-900 border-zinc-700 text-white focus:border-zinc-400' 
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-slate-950 focus:bg-white'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Live Synchronized Storefront Preview */}
                    <div className={`p-5 rounded-xl border flex flex-col justify-between ${
                      isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-100/80 border-slate-200'
                    }`}>
                      <div>
                        <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
                          isDark ? 'border-zinc-800' : 'border-slate-200'
                        }`}>
                          <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1.5 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Store Preview (Updated in 0.01s)
                          </span>
                        </div>

                        <h3 className={`text-xl font-bold mb-1 font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                          {adminTitle}
                        </h3>
                        <p className={`text-xs mb-4 ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
                          {adminTagline}
                        </p>
                        <div className={`text-2xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                          {adminPrice}
                        </div>
                      </div>

                      <div className={`pt-3 border-t text-[11px] font-mono ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-slate-200 text-slate-600'}`}>
                        • No agency ticketing &bull; No monthly retainers &bull; Live in seconds
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Bottom Trust Strip */}
          <div className={`px-5 py-3 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono ${
            isDark ? 'border-zinc-800/80 bg-zinc-950 text-zinc-400' : 'border-slate-200 bg-slate-100 text-slate-600'
          }`}>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Full Source Code &amp; Repositories Transferred on Completion</span>
            </span>
            <button
              onClick={() => {
                playCyberTone('click');
                onOpenPrototypeModal();
              }}
              className={`hover:underline flex items-center gap-1 font-medium cursor-pointer ${
                isDark ? 'text-white' : 'text-slate-950 font-semibold'
              }`}
            >
              <span>Request Custom Architecture Proposal</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
