import React, { useState, useRef, useEffect } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  X,
  Send,
  Sparkles,
  Bot,
  ExternalLink,
} from 'lucide-react';

export default function ChatbotWidget({ isOpen, setIsOpen, isDark }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Jagadish's AI Solutions Concierge. Whether you need an autonomous web platform, zero-maintenance architecture, or want to test a live staging prototype, ask me anything.",
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'Why $0 monthly maintenance?',
    'How does the Admin Portal work?',
    'Tell me about Jagadish (Amazon & AI)',
    'How do staging subdomains work (like PMS)?',
    'How do I get a 48-hour prototype?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (query) => {
    const q = query.toLowerCase();

    if (q.includes('maintenance') || q.includes('$0') || q.includes('cost')) {
      return "Traditional agencies build on bloated WordPress setups that break on every update, so they charge $100-$300/mo forever. We engineer custom static-edge and serverless web solutions. With no fragile plugins or database bloat, your system runs forever with $0 maintenance fees. You own 100% of the asset.";
    }

    if (q.includes('admin') || q.includes('portal') || q.includes('edit')) {
      return "Every client receives a custom visual Admin Portal. You can log in securely from your phone or laptop to edit headlines, change prices, upload high-res photos, manage inventory, and view inbound client inquiries—no coding or waiting for a developer required!";
    }

    if (q.includes('amazon') || q.includes('background') || q.includes('jagadish') || q.includes('who') || q.includes('ai')) {
      return "Jagadish brings senior engineering experience from Amazon and architects platforms utilizing next-generation frontier multimodal AI architectures. This guarantees your business gets enterprise-grade scalability: sub-second global latency, rock-solid security, automated workflows, and high-converting UI.";
    }

    if (q.includes('pms') || q.includes('staging') || q.includes('subdomain') || q.includes('praveen')) {
      return "We create custom staging environments (like pmssolution.jagadish.online for Praveen's PMS Solution). The client can review the live, working system on mobile and desktop without paying for a domain upfront. Once approved, we point their custom domain in minutes!";
    }

    if (q.includes('prototype') || q.includes('hire') || q.includes('start') || q.includes('quote')) {
      return "We can deliver a live interactive staging prototype of your business platform within 48 hours. Ready to discuss? Tap the WhatsApp button below or message Jagadish directly to get started!";
    }

    return "Great question! Jagadish builds custom autonomous business solutions with $0 maintenance, full self-serve admin portals, and embedded AI chatbots. Would you like to connect directly on WhatsApp to explore a custom build for your business?";
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    playCyberTone('click');

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      playCyberTone('success');
      const reply = generateBotReply(text);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: reply,
        time: 'Just now',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            playCyberTone('access');
            setIsOpen(true);
          }}
          onMouseEnter={() => playCyberTone('hover')}
          className={`fixed bottom-6 right-6 z-40 p-4 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group ${
            isDark
              ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
              : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
          }`}
          aria-label="Open AI Concierge"
        >
          <div className="relative">
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 animate-ping ${
              isDark ? 'bg-black border-luxury-gold' : 'bg-white border-fresh-emerald'
            }`} />
          </div>
          <span className="hidden sm:inline font-mono font-bold text-xs tracking-wider">
            AI CONCIERGE
          </span>
        </button>
      )}

      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl ${
          isDark 
            ? 'bg-[#161616] border-luxury-gold/40 shadow-black/90 text-[#EAEAEA]' 
            : 'bg-white border-fresh-border shadow-emerald-950/20 text-[#0C1F16]'
        }`}>
          {/* Header */}
          <div className={`px-5 py-4 border-b flex items-center justify-between ${
            isDark ? 'bg-[#1C1C1C] border-white/10' : 'bg-[#F2F7F4] border-black/10'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${
                isDark 
                  ? 'bg-luxury-gold text-black shadow-gold-glow' 
                  : 'bg-fresh-emerald text-white shadow-emerald-glow'
              }`}>
                ⚡
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-sm">
                    JAGADISH AI CONCIERGE
                  </span>
                  <span className={`w-2 h-2 rounded-full animate-pulse ${
                    isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
                  }`} />
                </div>
                <div className={`text-[10px] font-mono ${
                  isDark ? 'text-luxury-gold' : 'text-fresh-green'
                }`}>
                  Multimodal Intelligent Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                playCyberTone('click');
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 text-xs leading-relaxed ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 mt-1 ${
                    isDark 
                      ? 'bg-luxury-gold/15 border-luxury-gold/30 text-luxury-gold' 
                      : 'bg-fresh-tint border-fresh-border text-fresh-green'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl ${
                    m.sender === 'user'
                      ? isDark 
                        ? 'bg-luxury-gold text-black font-semibold rounded-tr-none shadow-md' 
                        : 'bg-fresh-emerald text-white font-semibold rounded-tr-none shadow-md'
                      : isDark 
                        ? 'bg-[#202020] border border-white/10 text-slate-200 rounded-tl-none font-sans' 
                        : 'bg-[#F2F6F4] border border-black/5 text-slate-800 rounded-tl-none font-sans'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className="block text-[9px] mt-1.5 font-mono opacity-60">
                    {m.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`flex gap-2 items-center text-xs font-mono p-2.5 rounded-xl max-w-[140px] border animate-pulse ${
                isDark 
                  ? 'text-luxury-gold bg-luxury-gold/10 border-luxury-gold/20' 
                  : 'text-fresh-green bg-fresh-tint border-fresh-border'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Chips */}
          <div className={`px-4 py-2 border-t overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none ${
            isDark ? 'bg-[#121212] border-white/5' : 'bg-[#FAFCFB] border-black/5'
          }`}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-mono border transition-colors shrink-0 cursor-pointer ${
                  isDark 
                    ? 'bg-[#1A1A1A] hover:bg-luxury-gold/15 border-white/10 text-slate-300 hover:text-luxury-gold' 
                    : 'bg-white hover:bg-fresh-tint border-black/10 text-slate-700 hover:text-fresh-green'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className={`px-4 py-2 border-t flex items-center justify-between ${
            isDark 
              ? 'bg-luxury-gold/10 border-luxury-gold/20 text-luxury-gold' 
              : 'bg-fresh-tint border-fresh-border text-fresh-green'
          }`}>
            <span className="text-[11px] font-mono">
              Need urgent project scope?
            </span>
            <a
              href="https://wa.me/?text=Hi%20Jagadish%2C%20I%20saw%20your%20studio%20platform%20and%20want%20to%20discuss%20a%20modern%20web%20solution."
              target="_blank"
              rel="noreferrer"
              onClick={() => playCyberTone('click')}
              className="flex items-center gap-1 text-[11px] font-mono font-bold underline cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className={`p-3 border-t flex gap-2 items-center ${
              isDark ? 'bg-[#1A1A1A] border-white/10' : 'bg-[#F2F7F4] border-black/10'
            }`}
          >
            <input
              type="text"
              placeholder="Ask about solutions, admin, pricing..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className={`flex-1 px-3 py-2 rounded-xl border text-xs font-sans focus:outline-none transition-colors ${
                isDark 
                  ? 'bg-[#121212] border-white/15 text-white placeholder-slate-500 focus:border-luxury-gold' 
                  : 'bg-white border-black/15 text-fresh-forest placeholder-slate-400 focus:border-fresh-emerald'
              }`}
            />
            <button
              type="submit"
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                isDark 
                  ? 'bg-luxury-gold hover:bg-amber-300 text-black shadow-gold-glow' 
                  : 'bg-fresh-emerald hover:bg-emerald-400 text-white shadow-emerald-glow'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
