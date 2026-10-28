import React, { useState, useRef, useEffect } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  X,
  Send,
  Sparkles,
  Bot,
} from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

export default function ChatbotWidget({ isOpen, setIsOpen, isDark }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Welcome to Merqurie Group. I am your executive AI concierge. Inquire about Merqurie Cloud, vertical SaaS platforms (Sports/Dojo & Health), our zero maintenance architecture, or tailored enterprise proposals.",
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
      return "To discuss your technology requirements, you can click 'Consultation' in the navigation bar or message our engineering desk directly on WhatsApp.";
    }

    return "Thank you for reaching out to Merqurie Group. We architect high-performance cloud platforms, vertical SaaS, and custom software with zero maintenance fees and full IP sovereignty. Would you like to connect directly on WhatsApp?";
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
          className={`hidden md:flex fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-2xl items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group shadow-xl border ${
            isDark
              ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700 shadow-2xl'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg border-slate-800'
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
        <div className={`fixed bottom-0 md:bottom-6 right-0 md:right-6 z-50 w-full sm:w-[400px] h-[85vh] sm:h-[550px] rounded-t-3xl sm:rounded-3xl border shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl ${
          isDark 
            ? 'bg-[#0E0E12] border-zinc-800 shadow-black/90 text-[#EAEAEA]' 
            : 'bg-white border-slate-200 shadow-2xl text-slate-900'
        }`}>
          {/* Header */}
          <div className={`px-5 py-4 border-b flex items-center justify-between ${
            isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <Logo isDark={isDark} className="w-8 h-8" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`font-display font-bold text-sm tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    MERQURIE AI
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className={`text-[10px] font-mono ${
                  isDark ? 'text-zinc-400' : 'text-slate-500'
                }`}>
                  Executive Technology Concierge
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
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl ${
                    m.sender === 'user'
                      ? isDark 
                        ? 'bg-white text-zinc-950 font-semibold rounded-tr-none shadow-md' 
                        : 'bg-slate-900 text-white font-semibold rounded-tr-none shadow-md'
                      : isDark 
                        ? 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-none shadow-sm' 
                        : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{m.text}</p>
                  <div className={`text-[9px] mt-1 text-right font-mono ${
                    m.sender === 'user'
                      ? isDark ? 'text-zinc-600' : 'text-white/70'
                      : isDark ? 'text-zinc-400' : 'text-slate-500'
                  }`}>
                    {m.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs font-mono opacity-70 p-2">
                <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-zinc-400' : 'bg-slate-900'}`} />
                <span className={`w-2 h-2 rounded-full animate-bounce [animation-delay:0.2s] ${isDark ? 'bg-zinc-400' : 'bg-slate-900'}`} />
                <span className={`w-2 h-2 rounded-full animate-bounce [animation-delay:0.4s] ${isDark ? 'bg-zinc-400' : 'bg-slate-900'}`} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className={`p-2.5 border-t flex flex-wrap gap-1.5 ${
            isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-50 border-slate-200'
          }`}>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 shadow-xs'
                }`}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input & WhatsApp Action */}
          <div className={`p-3 border-t flex items-center gap-2 ${
            isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'
          }`}>
            <input
              type="text"
              maxLength={500}
              placeholder="Ask a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              className={`flex-1 px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-700 text-white focus:border-white' 
                  : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-slate-950 focus:bg-white'
              }`}
            />
            <button
              onClick={() => handleSendMessage()}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center cursor-pointer ${
                isDark 
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20chatting%20from%20your%20website%20AI%20and%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-800 text-emerald-400 hover:bg-zinc-700 border border-zinc-700 cursor-pointer transition-transform active:scale-95"
              title="Chat directly on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
