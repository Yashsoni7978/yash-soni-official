"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, Camera, Star, Music, Zap, Users, 
  ArrowRight, Crown, Sparkles, Minus, Plus, Globe
} from "lucide-react";

// --- BRANDING COMPONENTS ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: GOLD_COLOR 
    }}
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
      <div className={`flex items-center gap-2 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Camera className="w-5 h-5 text-[#D4AF37] animate-pulse" />
        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </p>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen 
          ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-[15px] pr-4 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LifestyleAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- 1. HERO: FIXED OVERLAP --- */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent z-10" />
          <img 
            src="/service-fashion.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom grayscale contrast-125" 
            alt="Concert Crowd"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 px-6 py-2 rounded-full bg-black/40 backdrop-blur-xl mb-8 shadow-lg">
              <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">
                Lifestyle • Fashion • Concerts
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Hosting <br /> <GoldTextureText>The Icons.</GoldTextureText>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              From managing <span className="text-[#D4AF37] font-bold">crowds of 5000+</span> at concerts to interviewing <span className="text-[#D4AF37] font-bold">Bollywood Stars</span> on the red carpet. <br />
              I bring the hype, the class, and the control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  Book For Show
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE CELEBRITY TICKER --- */}
      <div className="bg-[#D4AF37] text-black py-4 overflow-hidden border-y border-white/10 shadow-xl relative z-30">
          <div className="animate-marquee whitespace-nowrap flex gap-16 font-bold uppercase tracking-widest text-sm items-center">
            <span>Movie Promotions</span> <Star className="w-3 h-3" />
            <span>Music Festivals</span> <Star className="w-3 h-3" />
            <span>Fashion Weeks</span> <Star className="w-3 h-3" />
            <span>Luxury Launches</span> <Star className="w-3 h-3" />
            <span>Celebrity Interviews</span> <Star className="w-3 h-3" />
            <span>Movie Promotions</span> <Star className="w-3 h-3" />
            <span>Music Festivals</span> <Star className="w-3 h-3" />
          </div>
      </div>

      {/* --- 3. REBRAND SECTION --- */}
      <section className="py-32 container mx-auto px-4 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading subtitle="The Upgrade" title="Beyond The Mic." />
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We are not talking about shouting offers in a food court. We are talking about <strong className="text-white">High-Stakes Public Events.</strong>
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-4 border-[#D4AF37] pl-6 font-light">
                  When a Bollywood star walks in, or a luxury brand like <span className="text-[#D4AF37] font-bold">Gucci or Sephora</span> opens its doors, you need an anchor who looks the part and can handle the frenzy.
              </p>
              <div className="space-y-8">
                  <FeatureRow icon={<Users />} title="Crowd Control" desc="I know how to hype up a crowd of thousands without letting it turn into chaos. Safety + Energy." />
                  <FeatureRow icon={<Mic2 />} title="Star Management" desc="I handle celebrity Q&As with research and respect. No awkward questions, just smooth PR-friendly interaction." />
              </div>
            </div>
            
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-neutral-800 rounded-none overflow-hidden transform rotate-3 border border-neutral-700">
                  <img src="/gallery-6.webp" className="w-full h-full object-cover grayscale opacity-60" alt="Concert Crowd" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-black rounded-none overflow-hidden shadow-2xl border border-[#D4AF37] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="/intro-portrait-bottom.webp" className="w-full h-full object-cover" alt="Yash Soni with Mic" />
              </div>
            </div>
        </div>
      </section>

      {/* --- 4. SERVICES --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900">
          <div className="container mx-auto px-4">
            <SectionHeading subtitle="Capabilities" title="The Showbiz Portfolio." align="center" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                <StyleCard 
                  title="Celebrity Meet & Greets" 
                  icon={<Star className="w-8 h-8 text-[#D4AF37]" />}
                  desc="Hosting movie promotions and star visits. Managing the fan frenzy while ensuring the star feels comfortable."
                />
                <StyleCard 
                  title="Music Concerts" 
                  icon={<Music className="w-8 h-8 text-[#D4AF37]" />}
                  desc="Opening acts for bands/DJs. I keep the crowd jumping before the headliner steps on stage."
                />
                <StyleCard 
                  title="Fashion Shows" 
                  icon={<Crown className="w-8 h-8 text-[#D4AF37]" />}
                  desc="The voice of the runway. Sophisticated commentary that matches the glamour of the collection."
                />
                <StyleCard 
                  title="Luxury Launches" 
                  icon={<Zap className="w-8 h-8 text-[#D4AF37]" />}
                  desc="Store openings for Premium Brands. Creating a 'Queuing Culture' and high demand."
                />
            </div>
          </div>
      </section>

      {/* --- 5. VISUAL PROOF --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="The Vibe" title="Electric Atmosphere." />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px]">
            <VibeImage img="/gallery-1.webp" span="col-span-2 row-span-2" label="Music Festival" />
            <VibeImage img="/gallery-2.webp" label="Celebrity Red Carpet" />
            <VibeImage img="/gallery-5.webp" label="Concert Crowd" />
            <VibeImage img="/service-fashion.webp" span="col-span-2 md:col-span-1" label="Fashion Week" />
        </div>
      </section>

      {/* --- 6. LOGISTICS FAQ --- */}
      <section className="py-32 container mx-auto px-4 max-w-4xl border-t border-white/10">
        <SectionHeading subtitle="Details" title="Production & Tech." align="center" />
        <div className="mt-12">
            <FAQItem question="Can you handle large stadium crowds?" answer="Yes. I have experience managing crowds of 2000+. I know how to use voice modulation to command attention in large open spaces." />
            <FAQItem question="Do you work with Teleprompters?" answer="For televised events or formal launches, yes. I am trained in reading teleprompters naturally while maintaining eye contact with the crowd." />
            <FAQItem question="Are you comfortable interviewing celebs?" answer="Absolutely. I research their recent work, prepare engaging, PR-friendly questions, and ensure the interaction flows smoothly under pressure." />
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-32 bg-black text-white text-center relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 leading-tight">Need A <GoldTextureText>Headliner?</GoldTextureText></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-xl font-light">
                For events that need more than just a host. <br /> You need a Personality.
            </p>
            <Link href="/contact">
                <button className="px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                  Book For Event
                </button>
            </Link>
          </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex gap-5 group">
    <div className="w-14 h-14 rounded-full border border-neutral-800 bg-[#0a0a0a] flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const StyleCard = ({ title, icon, desc }) => (
  <div className="bg-[#0f0505] p-8 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 group rounded-3xl">
     <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
     <p className="text-gray-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const VibeImage = ({ img, span = "", label }) => (
    <div className={`relative group overflow-hidden border border-white/5 rounded-2xl ${span}`}>
        <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
        <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-lg uppercase tracking-wider drop-shadow-md">{label}</p>
        </div>
    </div>
);
