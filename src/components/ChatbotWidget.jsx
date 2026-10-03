import React, { useState, useRef, useEffect } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  X,
  Send,
  Sparkles,
  Bot,
  MessageCircle,
} from 'lucide-react';
import Logo from './Logo';

export default function ChatbotWidget({ isOpen, setIsOpen, isDark }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Jagadish's AI assistant. Ask me anything about our websites, custom software, admin portal, or zero maintenance guarantee.",
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'Why ₹0 maintenance charges?',
    'How does the Admin Portal work?',
    'What projects have you built?',
    'How can I get started?',
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

    if (q.includes('maintenance') || q.includes('0') || q.includes('cost') || q.includes('fee')) {
      return "Traditional agencies build on bloated setups that break on every update, so they charge monthly retainers forever. We build custom high-speed web solutions that run on global cloud edge servers. You pay once with zero recurring maintenance charges and 100% full ownership.";
    }

    if (q.includes('admin') || q.includes('portal') || q.includes('edit') || q.includes('change')) {
      return "Every client receives a custom visual Admin Portal. You can log in securely from your phone or laptop to edit text, update prices, add products, and see customer inquiries directly in seconds—no developer required!";
    }

    if (q.includes('project') || q.includes('work') || q.includes('upsks') || q.includes('pms')) {
      return "We have worked on 100+ projects delivered with excellence, including upskskarate.com (martial arts platform), pmssolution (machinery catalog), and various custom business softwares and ERPs.";
    }

    if (q.includes('start') || q.includes('enquir') || q.includes('contact') || q.includes('hire')) {
      return "To discuss your project, you can click 'Enquire Now' in the header or message Jagadish directly on WhatsApp (+91 73586 18789). We respond within minutes!";
    }

    return "Great question! We build fast, modern business websites and custom software with zero maintenance charges and a self-serve admin panel. Would you like to connect directly on WhatsApp (+91 73586 18789) to discuss your project?";
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
    }, 500);
  };

  return (
    <>
      {/* Floating Trigger Button (Compact 'AI' pill as requested) */}
      {!isOpen && (
        <button
          onClick={() => {
            playCyberTone('access');
            setIsOpen(true);
          }}
          onMouseEnter={() => playCyberTone('hover')}
          className={`fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group shadow-xl ${
            isDark
              ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
              : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
          }`}
          aria-label="Open AI Assistant"
        >
          <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="font-mono font-bold text-xs tracking-wider">
            AI
          </span>
        </button>
      )}

      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl ${
          isDark 
            ? 'bg-[#161616] border-luxury-gold/40 shadow-black/90 text-[#EAEAEA]' 
            : 'bg-white border-fresh-border shadow-emerald-950/20 text-[#0C1F16]'
        }`}>
          {/* Header */}
          <div className={`px-5 py-4 border-b flex items-center justify-between ${
            isDark ? 'bg-[#1C1C1C] border-white/10' : 'bg-[#F2F7F4] border-black/10'
          }`}>
            <div className="flex items-center gap-3">
              <Logo isDark={isDark} className="w-8 h-8" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`font-display font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    JAGADISH AI
                  </span>
                  <span className={`w-2 h-2 rounded-full animate-pulse ${
                    isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
                  }`} />
                </div>
                <div className={`text-[10px] font-mono ${
                  isDark ? 'text-luxury-gold' : 'text-fresh-green'
                }`}>
                  Instant Project Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                playCyberTone('click');
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Close"
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
                        ? 'bg-[#222222] border border-white/10 text-slate-200 rounded-tl-none shadow-sm' 
                        : 'bg-slate-100 border border-black/5 text-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{m.text}</p>
                  <div className={`text-[9px] mt-1 text-right font-mono ${
                    m.sender === 'user'
                      ? isDark ? 'text-black/60' : 'text-white/70'
                      : isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {m.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs font-mono opacity-70 p-2">
                <span className="w-2 h-2 rounded-full animate-bounce bg-luxury-gold" />
                <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:0.2s] bg-luxury-gold" />
                <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:0.4s] bg-luxury-gold" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className={`p-2.5 border-t flex flex-wrap gap-1.5 ${
            isDark ? 'bg-[#181818] border-white/10' : 'bg-slate-50 border-black/10'
          }`}>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  isDark 
                    ? 'bg-[#222222] border-white/10 text-slate-300 hover:border-luxury-gold/50 hover:text-white' 
                    : 'bg-white border-black/10 text-slate-700 hover:border-fresh-emerald/50 hover:text-fresh-forest shadow-xs'
                }`}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input & WhatsApp Action */}
          <div className={`p-3 border-t flex items-center gap-2 ${
            isDark ? 'bg-[#1A1A1A] border-white/10' : 'bg-white border-black/10'
          }`}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              className={`flex-1 px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                isDark 
                  ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                  : 'bg-slate-50 border-black/15 text-slate-900 focus:border-fresh-emerald'
              }`}
            />
            <button
              onClick={() => handleSendMessage()}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center cursor-pointer ${
                isDark 
                  ? 'bg-luxury-gold text-black hover:bg-amber-300' 
                  : 'bg-fresh-emerald text-white hover:bg-fresh-green'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20chatting%20from%20your%20website%20AI%20and%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20BA5A] cursor-pointer"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
