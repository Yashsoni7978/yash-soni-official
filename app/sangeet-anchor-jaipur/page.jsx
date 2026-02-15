"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, Music, Zap, Sparkles, Star, Users, 
  ArrowRight, Play, Headphones, ChevronDown, 
  Trophy, Flame, Minus, Plus 
} from "lucide-react";

// --- 1. CUSTOM NEON TEXTURE (Purple/Fuchsia/Indigo Gradient) ---
const NeonText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] ${className || ""}`}
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
        <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
        <span className="text-purple-400 text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- 2. EXPANDED SEO & FAQ DATA (Targeting Sangeet & Awards Night Search) ---
const FAQS = [
  { q: "Why hire a professional Sangeet Anchor instead of a family member?", a: "A professional anchor ensures the flow remains seamless. While family members bring personal touch, a pro handles the technical coordination with the DJ, manages 'Dead Air' between performances, and keeps the energy peaking for 4-6 hours without fatigue." },
  { q: "Do you help script the family performances and entries?", a: "Absolutely. I provide witty, engaging script templates for family members and help draft creative entry concepts. My goal is to make every announcement sound like a blockbuster movie intro." },
  { q: "How do you handle technical glitches or delays during the show?", a: "In 5+ years of live hosting, I’ve seen it all. If a track doesn't play or a performer is late, I pivot instantly to interactive crowd games or rapid-fire roasts so the audience thinks the delay was part of the plan." },
  { q: "Can you host a Bollywood-style 'Awards Night' Sangeet?", a: "This is my signature style! I can host a complete 'Filmfare' style evening with custom award categories, acceptance speeches, and high-energy trophy segments that involve the whole family." },
  { q: "Do you travel for Destination Sangeet events?", a: "Yes. I am a global destination emcee. Whether your Sangeet is in a Jaipur palace, a beach in Goa, or a rooftop in Dubai, I bring the same concert-level energy." },
  { q: "Do you coordinate with our DJ and Sound Team?", a: "Yes. I arrive 2 hours early for a rigorous sound check. I coordinate with the DJ for specific 'stingers' (punchline sounds), entry tracks, and background scores to ensure the audio-visual experience is flawless." },
  { q: "Can you co-host with my siblings or friends?", a: "I love the 'Pro + Family' duo dynamic! I handle the structure, timing, and energy, while your family members add the personal inside jokes and nostalgia. It’s the perfect balance." },
  { q: "What happens after the stage performances end?", a: "I don't just leave! I transition into an MC role to kickstart the after-party, hyping up the DJ set and ensuring the dance floor is packed until the very last song." },
  { q: "What is your attire for a Sangeet night?", a: "I dress to match the glamour of your theme. Typically, I wear designer Indo-Western sherwanis or a sharp tuxedo to ensure I look as premium as the event I am hosting." },
  { q: "How long is your standard Sangeet hosting duration?", a: "A typical Sangeet shift is 4-6 hours, starting from the guest arrivals and family entries to the opening of the main dance floor." }
];

export default function SangeetAnchor() {

  // --- SEO SCHEMA FOR GOOGLE ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-purple-600 selection:text-white">
      
      {/* INJECT SCHEMA MARKUP */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- 1. HERO: THE CONCERT STAGE --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Stage Vibe */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-purple-900/40 z-10" />
          <img 
            src="/hero-slide-1.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Best Sangeet Anchor in Jaipur - Yash Soni"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-purple-500/50 px-6 py-2 rounded-full bg-purple-900/30 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Mic2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs uppercase tracking-[0.2em] font-bold">
                The Sangeet Showman
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Turn Your Night <br /> <NeonText>Into A Concert.</NeonText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Forget the "And next on stage..." monotony. <br />
              Let’s build an atmosphere where every <span className="font-bold text-white">Guest is an Outsider</span> and every <span className="font-bold text-white">Performance is a Hit</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" aria-label="Book Sangeet Host">
                <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                  Book The Hype
                </button>
              </Link>
              <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-purple-900/20 transition-colors rounded-full flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-current" /> Watch Showreel
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. ENERGY METRICS --- */}
      <div className="bg-[#0a0a0a] border-y border-neutral-800 py-12 overflow-hidden relative z-20">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              <VibeStat icon={<Flame className="w-6 h-6 text-orange-500" />} val="High" label="Voltage Energy" />
              <VibeStat icon={<Users className="w-6 h-6 text-blue-500" />} val="100%" label="Crowd Engagement" />
              <VibeStat icon={<Music className="w-6 h-6 text-purple-500" />} val="Seamless" label="Show Flow" />
              <VibeStat icon={<Star className="w-6 h-6 text-yellow-400" />} val="Filmy" label="Entertainment" />
          </div>
      </div>

      {/* --- 3. THE SANGEET MENU --- */}
      <section className="py-32 container mx-auto px-4 relative z-20">
        <SectionHeading subtitle="Signature Segments" title="The Blockbuster Lineup." align="center" />
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
           A great Sangeet needs more than just dances. I curate <strong className="text-purple-400">interactive fillers</strong> that bridge the gap between performances.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
           <ShowCard 
              title="The Royal Roast" 
              icon={<Flame className="w-8 h-8 text-orange-500" />}
              desc="A scripted, family-friendly comedy segment roasting the couple's quirks. It breaks the ice and gets the whole room laughing."
              tags={["Custom Script", "Comedy"]}
           />
           <ShowCard 
              title="The Sangeet Awards" 
              icon={<Trophy className="w-8 h-8 text-yellow-500" />}
              desc="Forget boring titles. We give awards for 'The Drama Queen' or 'The Late Arrival' with acceptance speeches and fanfares."
              tags={["Interactive", "Trophies"]}
              highlight
           />
           <ShowCard 
              title="The Ultimate Battle" 
              icon={<Zap className="w-8 h-8 text-purple-500" />}
              desc="Ladke-wale vs Ladki-wale. I divide the room for a high-decibel cheer-off and impromptu hookstep challenges."
              tags={["High Energy", "Crowd Work"]}
           />
        </div>
      </section>

      {/* --- 4. VISUAL PROOF (Gallery Style) --- */}
      <section className="py-32 bg-[#080808] border-y border-neutral-900 relative z-20">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               <div className="relative h-[600px] w-full group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl transform -rotate-2 opacity-50 group-hover:rotate-0 transition-all duration-500" />
                  <img src="/gallery-4.webp" className="relative w-full h-full object-cover rounded-3xl shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500" alt="Yash Soni Hosting Sangeet Night" loading="lazy" />
                  
                  <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md border border-purple-500/50 p-6 rounded-2xl">
                      <p className="text-white font-bold text-xl uppercase italic">"The Stage King"</p>
                      <div className="flex gap-1 mt-2 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                      </div>
                  </div>
               </div>

               <div>
                  <SectionHeading subtitle="The Method" title="Directing the Chaos." />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
                      I don't just announce names. I direct the energy. <br /><br />
                      Whether it's hyping up a nervous solo performer, managing a technical glitch with a quick-witted joke, or getting the shyest elders to do a hookstep, I ensure the spotlight never fades.
                  </p>
                  
                  <div className="space-y-8">
                      <VibeCheck title="Professional Scripting" desc="I help refine the family anchors' scripts to ensure jokes land and transitions are sharp." />
                      <VibeCheck title="Technical Synergy" desc="I coordinate directly with your DJ for 'stingers' and entry music that hits at the perfect second." />
                      <VibeCheck title="The After-Party MC" desc="When the stage show ends, I turn into an MC to kickstart the open dance floor and keep the party alive." />
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* --- 5. UPDATED SANGEET FAQ (Premium Style) --- */}
      <section className="py-32 max-w-4xl mx-auto px-4 relative z-20">
        <SectionHeading subtitle="Backstage" title="Common Questions" align="center" />
        <div className="space-y-4 mt-12">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} id={`faq-${idx}`} />
           ))}
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-gradient-to-r from-purple-800 to-indigo-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 text-white drop-shadow-lg">The Spotlight is Yours.</h2>
            <p className="text-purple-200 max-w-2xl mx-auto mb-12 text-xl font-bold italic">
               Don't let your Sangeet be a standard routine. <br /> Let's make it a blockbuster event.
            </p>
            <Link href="/contact" aria-label="Book Sangeet Anchor">
               <button className="px-12 py-5 bg-white text-purple-900 font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)] border-2 border-white hover:border-purple-300">
                  Check Sangeet Dates
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const VibeStat = ({ icon, val, label }) => (
    <div className="flex flex-col items-center justify-center gap-3 group">
        <div className="bg-[#111] p-5 rounded-full border border-neutral-800 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
            {icon}
        </div>
        <h3 className="text-3xl font-black text-white uppercase">{val}</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{label}</p>
    </div>
);

const ShowCard = ({ title, icon, desc, tags, highlight }) => (
    <div className={`p-10 rounded-[2.5rem] border transition-all duration-500 group hover:-translate-y-2 ${highlight ? 'bg-[#0f0518] border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.1)]' : 'bg-[#0a0a0a] border-neutral-800 hover:border-purple-500/30'}`}>
        <div className="mb-8 bg-black w-20 h-20 rounded-3xl flex items-center justify-center border border-neutral-800 group-hover:border-purple-500 transition-all duration-500">
           {icon}
        </div>
        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{title}</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-8 font-medium">{desc}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase font-black tracking-widest bg-purple-500/10 px-4 py-2 rounded-full text-purple-300 border border-purple-500/10">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const VibeCheck = ({ title, desc }) => (
    <div className="flex gap-6 group">
       <div className="mt-1 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
             <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
       </div>
       <div>
          <h4 className="text-2xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{title}</h4>
          <p className="text-gray-400 text-base leading-relaxed font-medium">{desc}</p>
       </div>
    </div>
);

// --- PREMIUM PLUS/MINUS FAQ ITEM ---
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-[1.5rem] border transition-all duration-300 ${
        isOpen 
          ? "border-purple-500 bg-purple-500/5 shadow-[0_0_20px_rgba(168,85,247,0.1)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-center p-7 text-left focus:outline-none"
      >
        <span className={`font-bold text-xl pr-6 transition-colors tracking-tight ${
          isOpen ? "text-purple-400" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
          isOpen ? "bg-purple-500 text-black" : "bg-transparent border border-white/30 text-white group-hover:border-purple-500 group-hover:text-purple-500"
        }`}>
          {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 pt-0 text-gray-400 text-base leading-relaxed border-t border-purple-500/20 mt-2">
              <div className="pt-6 font-medium">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
