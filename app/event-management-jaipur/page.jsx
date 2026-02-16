"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Users, Calendar, ShieldCheck, 
  Crown, Sparkles, Minus, Plus, Gem, Star, 
  Briefcase, MapPin, ArrowRight
} from "lucide-react";

// --- ROYAL LUXURY BRANDING ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: GOLD_COLOR }}
  >
    {children}
  </span>
);

const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Crown className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- FAQ COMPONENT ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "border-white/10 bg-transparent hover:border-white/20"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
        <span className={`font-semibold text-[15px] pr-4 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- DATA ---
const managementPillars = [
  {
    title: "Elite Vendor Sourcing",
    desc: "We do not rely on standard vendor lists. We negotiate and source the top 1% of caterers, decorators, and technicians in India to ensure zero compromises on quality.",
    icon: <Gem className="w-8 h-8" />
  },
  {
    title: "Crisis Mitigation",
    desc: "Events are unpredictable. Our management team anticipates logistical failures, weather changes, and schedule delays, resolving them silently behind the scenes.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Hospitality & Protocol",
    desc: "From VIP airport transfers in luxury vehicles to 24/7 dedicated shadow teams for the families, we manage the people as flawlessly as we manage the production.",
    icon: <Users className="w-8 h-8" />
  }
];

const capabilities = [
  { title: "Destination Weddings", items: ["Palace Buyouts", "Multi-Day Logistics", "Guest RSVP Management"] },
  { title: "Corporate Galas", items: ["CEO Summits", "Product Launches", "Award Ceremonies"] },
  { title: "High-Profile Events", items: ["Celebrity Management", "Private Concerts", "Security Protocol"] }
];

const FAQS = [
  { q: "Do you only manage events in Jaipur?", a: "While Jaipur is our headquarters and we hold strong influence over local luxury venues (like Fairmont and Rambagh), we execute destination weddings and corporate galas globally." },
  { q: "We already have a decorator. Can we hire you just for management?", a: "Yes. We offer 'Shadow Management' services where our team acts as the executive producers, overseeing your hired decorators and vendors to ensure flawless on-ground execution." },
  { q: "How do you handle guest hospitality for large weddings?", a: "We deploy dedicated 'Hospitality Desks' at the hotel, manage a fleet of luxury transport for airport pickups, and assign shadow managers to VIP family members." },
  { q: "Can you manage celebrity artists or Bollywood performers?", a: "Absolutely. Our Artist Management wing handles the complex technical riders, secure travel, and backstage protocol required for high-profile performers." }
];

export default function EventManagement() {
  return (
    <div className="bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* 1. THE LUXURY HERO */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-end p-6 md:p-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069')] bg-cover bg-fixed bg-center opacity-40 grayscale-[20%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
               <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs">Yash Soni • Management</span>
            </div>
            
            <h1 className="text-5xl md:text-[8rem] font-display font-black leading-none mb-10 tracking-tighter uppercase">
              FLAWLESS <br /> <GoldTextureText className="italic pr-4">EXECUTION.</GoldTextureText>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-white/10 pt-10">
               <p className="max-w-xl text-xl text-gray-300 font-light leading-relaxed">
                  Beyond planning. We engineer high-end experiences for Jaipur's most prestigious events. Precision logistics meets royal hospitality.
               </p>
               <div className="flex gap-6 shrink-0">
                 <Link href="/contact">
                   <button className="px-12 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-full">
                     Hire The Firm
                   </button>
                 </Link>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PILLARS OF MANAGEMENT */}
      <section className="py-32 container mx-auto px-6">
         <SectionHeading subtitle="Our Methodology" title="The Pillars of Control." />
         <div className="grid lg:grid-cols-3 gap-12 mt-16">
            {managementPillars.map((item, i) => (
               <div key={i} className="p-10 bg-[#0a0a0a] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-3xl group shadow-2xl">
                  <div className="text-[#D4AF37] mb-8 group-hover:scale-110 origin-left transition-transform duration-500">
                     {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 3. VISUAL SHOWCASE */}
      <section className="py-20 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
                <div className="col-span-2 relative rounded-2xl overflow-hidden group border border-white/10">
                    <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]" alt="Corporate Gala" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden group border border-white/10">
                    <img src="https://images.unsplash.com/photo-1464366400600-7168b8481490?q=80&w=2069" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Luxury Setup" />
                </div>
                <div className="relative rounded-2xl overflow-hidden group border border-white/10">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Wedding Vibe" />
                </div>
            </div>
        </div>
      </section>

      {/* 4. THE CAPABILITIES (BENTO GRID) */}
      <section className="py-32 container mx-auto px-6">
         <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight">The <GoldTextureText>Portfolio.</GoldTextureText></h2>
            <p className="text-[#D4AF37] mt-4 italic font-medium">Scalable logistics for every magnitude.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
               <div key={i} className="p-12 border border-white/10 rounded-3xl relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-500 bg-[#050505]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-[0.2em] relative z-10">{cap.title}</h3>
                  <ul className="space-y-4 relative z-10">
                     {cap.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-4 text-gray-400 font-light">
                           <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </section>
      
      {/* 5. FAQ SECTION */}
      <section className="py-32 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading subtitle="Inquiries" title="Management FAQs" align="center" />
          <div className="mt-16 space-y-4">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ART */}
      <section className="py-40 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-white uppercase tracking-tighter">
            READY TO <br/> <GoldTextureText className="italic">EXECUTE.</GoldTextureText>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 font-light">
              You celebrate. We manage the chaos. Let's discuss your event logistics.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="px-14 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                Schedule a Meeting
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
