"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, MapPin, Utensils, Truck, Gift, Users, 
  Crown, Sparkles, Minus, Plus, ShieldCheck, Clock
} from "lucide-react";

// --- CUSTOM LUXURY BRANDING ---
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
const services = [
  { 
    title: "Financial Engineering", 
    subtitle: "Budget Optimization",
    desc: "I don't just spend budget; I engineer it. Cost-benefit analysis on every vendor to ensure your ₹50L budget feels like an ₹80L experience. Complete transparency, zero hidden markups.",
    icon: <Calculator className="w-8 h-8" />
  },
  { 
    title: "Venue Procurement", 
    subtitle: "Insider Access",
    desc: "Negotiating exclusive contracts with Fairmont, Rambagh, and Leela. I know the hidden clauses, the corkage fees, and how to secure the best inventory during peak season.",
    icon: <MapPin className="w-8 h-8" />
  },
  { 
    title: "F&B Curation", 
    subtitle: "Menu Design",
    desc: "Designing menus that matter. We handle tasting sessions, elite bar management, and logistics to ensure the food stays perfectly hot for 500+ guests during winter weddings.",
    icon: <Utensils className="w-8 h-8" />
  },
  { 
    title: "Logistics & Fleet", 
    subtitle: "Transport Management",
    desc: "Managing VIP airport transfers, luxury Innova/Bus fleets, and seamless valet coordination. Your guests experience five-star hospitality from the moment they land.",
    icon: <Truck className="w-8 h-8" />
  },
];

const processSteps = [
  { num: "01", title: "The Blueprint", desc: "Vision boarding, strict budget locking, and high-level venue contracts." },
  { num: "02", title: "The Architecture", desc: "Elite vendor onboarding, 3D design approval, and F&B menu curation." },
  { num: "03", title: "The Detailing", desc: "Minute-by-minute logistics charting, fleet routing, and run-of-show creation." },
  { num: "04", title: "The Execution", desc: "Shadow team deployment, VIP hospitality, and silent crisis management." },
];

const FAQS = [
  { q: "How are you different from standard wedding planners?", a: "We don't do 'copy-paste' weddings. We act as Financial Engineers and Executive Producers. We protect your budget, source elite non-commercial vendors, and focus heavily on guest hospitality." },
  { q: "Do you charge a flat fee or a percentage of the budget?", a: "We charge a transparent flat management fee based on the scale and complexity of the event. We do not take hidden commissions from vendors, ensuring our recommendations are 100% unbiased." },
  { q: "Can you plan a destination wedding outside of Jaipur?", a: "Absolutely. While we hold immense leverage in Rajasthan (Jaipur, Udaipur, Jodhpur), our logistical frameworks allow us to execute flawless destination weddings globally, including Goa and Dubai." },
  { q: "When should we hire you?", a: "Ideally, 6 to 12 months before the wedding date. The earlier we step in, the more leverage we have to negotiate premium venue contracts and secure top-tier artists before they are booked out." },
  { q: "Do you handle the RSVPs and guest accommodations?", a: "Yes. Our Hospitality Wing manages digital RSVPs, room allocations, welcome hampers, and personalized itineraries for every guest." }
];

export default function WeddingPlanning() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. THE LUXURY HERO */}
      <section className="relative min-h-screen flex flex-col justify-center p-6 md:p-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-30 grayscale-[30%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-6 py-2 rounded-full bg-[#D4AF37]/10 backdrop-blur-xl mb-8">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">
                Strategic Planning & Management
              </span>
            </div>

            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-black leading-[0.85] mb-8 uppercase tracking-tighter drop-shadow-2xl">
              PLANNING WITH <br /> <GoldTextureText>PRECISION.</GoldTextureText>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-white/10 pt-10">
               <p className="max-w-xl text-xl text-gray-300 font-light leading-relaxed">
                 From absolute financial engineering to flawless logistical mastery. We don't just arrange events; we architect royal experiences.
               </p>
               <div className="flex gap-6 shrink-0">
                 <Link href="/contact">
                   <button className="px-12 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-full">
                     Consult The Firm
                   </button>
                 </Link>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 2. THE MANIFESTO */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">
            <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-display font-light leading-snug text-white">
                "An event is not successful because it looks beautiful. It is successful because the <span className="font-bold text-[#D4AF37]">logistics were invisible</span>, the <span className="font-bold text-[#D4AF37]">hospitality was flawless</span>, and the <span className="font-bold text-[#D4AF37]">budget was respected</span>."
            </h2>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID (Sticky Scroll Layout) */}
      <section className="py-32 container mx-auto px-6">
         <SectionHeading subtitle="Capabilities" title="The Architecture of Events." />
         
         <div className="grid lg:grid-cols-2 gap-16 mt-20">
            {/* Sticky Image Context */}
            <div className="hidden lg:block relative h-[600px] sticky top-32 rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
                <img src="/gallery-4.webp" className="w-full h-full object-cover grayscale-[20%]" alt="Event Planning Strategy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                    <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2">The Standard</p>
                    <p className="text-white text-3xl font-display font-bold">Zero Compromise.</p>
                </div>
            </div>

            {/* Scrolling Services */}
            <div className="space-y-8">
                {services.map((service, i) => (
                    <div key={i} className="p-10 bg-[#0a0a0a] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-3xl group">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                            {service.icon}
                        </div>
                        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-3">{service.subtitle}</p>
                        <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-lg">{service.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 4. THE MILITARY TIMELINE */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
         <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
               <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">The Roadmap</span>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white mt-4 uppercase">Execution <GoldTextureText>Phases.</GoldTextureText></h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
               {processSteps.map((step, i) => (
                  <div key={i} className="p-10 bg-[#050505] border border-white/10 hover:border-[#D4AF37]/40 transition-all group rounded-3xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 text-7xl font-black text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">
                        {step.num}
                     </div>
                     <div className="relative z-10">
                         <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider mt-12">{step.title}</h3>
                         <p className="text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. VISUAL PALACE SHOWCASE */}
      <section className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
            <SectionHeading subtitle="The Playground" title="Iconic Venues." align="center" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] mt-16">
                <div className="col-span-2 relative rounded-2xl overflow-hidden group border border-white/10">
                    <img src="https://images.unsplash.com/photo-1587271407850-8d4389106628?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]" alt="Palace Wedding" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden group border border-[#D4AF37]/40 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1604904839548-93a3074b4731?q=80&w=1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Luxury Setup" />
                </div>
                <div className="relative rounded-2xl overflow-hidden group border border-white/10">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Wedding Vibe" />
                </div>
            </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-32 container mx-auto px-4 max-w-4xl border-t border-white/5">
        <SectionHeading subtitle="Inquiries" title="Planning FAQs" align="center" />
        <div className="mt-16 space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* 7. FINAL CALL TO ART */}
      <section className="py-40 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-white uppercase tracking-tighter">
            READY TO <br/> <GoldTextureText className="italic pr-4">SCALE.</GoldTextureText>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 font-light">
              Don't leave your legacy to chance. Let's build your event with absolute precision and style.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="px-14 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                Get A Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
