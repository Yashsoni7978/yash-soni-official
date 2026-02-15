"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Music, Smile, Heart, Zap, Trophy, 
  Users, Camera, Play, Star, 
  PartyPopper, Sparkles, Minus, Plus, Leaf 
} from "lucide-react";

// --- 1. CUSTOM TEXTURE FOR MEHENDI VIBE (Emerald/Teal Gradient) ---
const EmeraldText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-green-400 drop-shadow-md ${className || ""}`}
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
        <Leaf className="w-5 h-5 text-emerald-400" aria-hidden="true" />
        <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- 2. EXPANDED SEO & CONTENT DATA (Mehendi/Sangeet Focused) ---
const FAQS = [
  { q: "Why hire a specialized Mehendi Anchor in Jaipur?", a: "Mehendi ceremonies can often drag on while guests get their henna applied. You need a specialized emcee who excels at musical games, verbal trivia, and 'hands-free' crowd engagement to keep the energy peaking for 3 to 4 hours." },
  { q: "Do you host Ladies Sangeet alongside the Mehendi?", a: "Yes! The Mehendi and Ladies Sangeet often blend together. I bridge the gap between traditional Dholak sessions for the elders and modern Bollywood musical games for the youth." },
  { q: "What kind of interactive Mehendi games do you play?", a: "Because guests have wet henna, I focus on games that don't require hands! We play high-energy Bollywood Antakshari, Couple Trivia, 'Guess the Song', and verbal Ice-Breakers." },
  { q: "Do you travel for Destination Weddings outside Jaipur?", a: "Absolutely. Whether your Mehendi is in a heritage palace in Rajasthan or a beachfront resort in Goa, I travel globally to host luxury destination weddings." },
  { q: "Can you handle the groom's entry at a combined Mehendi?", a: "100%. Combined Mehendi events are incredibly fun. I hype up the Bride Squad vs. Groom Squad dynamics and choreograph a high-energy, Dhol-backed entry for the groom." },
  { q: "Do you coordinate with the DJ and Dhol team?", a: "Yes. Music is the soul of a Mehendi. I coordinate directly with your DJ and Dholwala to sync the beats with my games, commentary, and the family dance performances." },
  { q: "What if my family members are shy to participate?", a: "That is exactly why you hire a professional. I don't force anyone; I use seamless 'Ice-Breakers' that naturally pull people in without making them feel awkward." },
  { q: "Do you wear green to match the Mehendi theme?", a: "Always. I wear premium traditional wear (usually in shades of emerald, teal, mint, or floral prints) to blend perfectly into your Mehendi decor aesthetics." },
  { q: "What languages do you host in?", a: "I seamlessly switch between English, Hindi, and regional touches like Marwari or Punjabi. I make sure the NRI friends and the local Jaipur relatives all feel equally involved." },
  { q: "How long is your Mehendi hosting package?", a: "Typically 3 to 4 hours. I keep the crowd entertained from the guest arrivals to the open dance floor at the end." },
  { q: "How do we secure our wedding date?", a: "Hit the 'Secure Your Date' button below. Mehendi and Sangeet dates book out 6-8 months in advance during peak wedding season!" }
];

export default function MehendiAnchor() {
  
  // --- INJECT JSON-LD SCHEMA FOR SEO ---
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
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* INJECT SCHEMA MARKUP INTO THE DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- 1. HERO: THE MONEY SECTION (SEO Optimized H1) --- */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background - Elegant Mehendi Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-emerald-900/20 z-10" />
          {/* Update this image source to a Mehendi specific photo if you have one */}
          <img 
            src="/gallery-4.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Top Mehendi Anchor and Sangeet Host in Jaipur"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-emerald-500/50 px-6 py-2 rounded-full bg-emerald-900/30 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-xs uppercase tracking-[0.2em] font-bold">
                The Mehendi & Sangeet Specialist
              </span>
            </div>

            {/* Crucial SEO H1 Tag */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              The Ultimate <br /> <EmeraldText>Mehendi Anchor.</EmeraldText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              No dull waiting times. No awkward silences. <br />
              Just interactive musical games, traditional warmth, and 100% pure <span className="text-teal-400 font-bold drop-shadow-md">CELEBRATION</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" aria-label="Book Mehendi Anchor">
                <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  Secure Your Date
                </button>
              </Link>
              <button className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-full flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-current" /> See The Vibe
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE STATS (Fun Metrics) --- */}
      <div className="bg-[#111] border-y border-neutral-800 py-12 overflow-hidden relative z-20">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FunStat icon={<Music className="w-6 h-6 text-emerald-400" />} val="100%" label="Musical Vibe" />
              <FunStat icon={<Camera className="w-6 h-6 text-teal-500" />} val="Viral" label="Candid Moments" />
              <FunStat icon={<Users className="w-6 h-6 text-green-400" />} val="Zero" label="Bored Guests" />
              <FunStat icon={<Trophy className="w-6 h-6 text-blue-400" />} val="Legendary" label="Antakshari Battles" />
          </div>
      </div>

      {/* --- 3. THE "GAME JOCKEY" MENU (Hands-Free Focus) --- */}
      <section className="py-32 container mx-auto px-4 relative z-20">
        <SectionHeading subtitle="Crowd Engagement" title="Interactive Mehendi Games." align="center" />
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
           Guests have wet henna? No problem. I curate <strong className="text-emerald-400 font-bold">hands-free musical and trivia games</strong> that keep everyone off their phones and in the moment.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
           <GameCategory 
              title="Musical Madness" 
              color="emerald"
              icon={<Music className="w-8 h-8" />}
              games={[
                  "Bollywood Antakshari (Modern Rules)",
                  "Guess The Song Challenge",
                  "The Hookstep Dance-Off",
                  "Traditional Dholak Jam Sessions"
              ]}
           />
           <GameCategory 
              title="Couple Chemistry" 
              color="teal"
              icon={<Heart className="w-8 h-8" />}
              games={[
                  "The Shoe Game (Spicy Edition)",
                  "Couple Trivia & Roasts",
                  "Find the Name in the Henna",
                  "Who Knows The Bride Best?"
              ]}
           />
           <GameCategory 
              title="Crowd Engagement" 
              color="green"
              icon={<Users className="w-8 h-8" />}
              games={[
                  "Pass the Pillow (With Dares)",
                  "Musical Tambola / Bingo",
                  "Family Awards Ceremony",
                  "Rapid Fire Ice-Breakers"
              ]}
           />
        </div>
      </section>

      {/* --- 4. VISUAL PROOF (Gallery Style) --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900 relative z-20">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative h-[600px] group rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl">
                  <img src="/gallery-2.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Mehendi and Ladies Sangeet Anchor Jaipur" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10">
                      <h3 className="text-5xl font-display font-black text-emerald-400 mb-4 drop-shadow-lg">The Experience</h3>
                      <p className="text-white text-lg leading-relaxed font-medium">
                          From soulful Sufi beginnings to high-energy Bollywood dance floors. I manage the traditional rituals with absolute respect, but ensure the festive vibe takes over.
                      </p>
                  </div>
               </div>

               <div>
                  <SectionHeading subtitle="The Vibe Check" title="Elegant, Musical, Fun." />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      The Mehendi is the most relaxed, colorful event of the entire wedding. It's where the families truly bond before the heavy ceremonies begin. <br /><br />
                      My job as your host is to amplify that warmth. I bridge the gap between the elders singing traditional folk songs and the youth ready for a Bollywood party!
                  </p>
                  <ul className="space-y-4">
                      {["Zero boring seating times", "100% Musical & Trivia engagement", "Hands-free games for henna guests", "Viral, aesthetic photo moments"].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-white font-medium text-lg">
                              <div className="bg-emerald-500/20 p-2 rounded-full">
                                <Star className="w-5 h-5 text-emerald-500 fill-current" />
                              </div>
                              {item}
                          </li>
                      ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. FAQ (Interactive Style) --- */}
      <section className="py-32 max-w-4xl mx-auto px-4 relative z-20">
        <SectionHeading subtitle="Good to Know" title="Frequently Asked Questions" align="center" />
        <div className="space-y-4 mt-12">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} id={`faq-${idx}`} />
           ))}
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white drop-shadow-lg">Ready For The Celebration?</h2>
            <p className="text-white max-w-2xl mx-auto mb-12 text-2xl font-bold drop-shadow-md">
               Dates for the upcoming wedding season are filling fast.
            </p>
            <Link href="/contact" aria-label="Contact Yash Soni">
               <button className="px-12 py-5 bg-black text-white font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl border-2 border-black hover:border-white">
                  Check Availability Now
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const FunStat = ({ icon, val, label }) => (
    <div className="flex flex-col items-center justify-center gap-3 group">
        <div className="bg-[#050505] p-5 rounded-full border border-neutral-800 group-hover:border-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
            {icon}
        </div>
        <h3 className="text-4xl font-black text-white">{val}</h3>
        <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">{label}</p>
    </div>
);

const GameCategory = ({ title, color, icon, games }) => {
    // Custom colors mapped for the Mehendi theme
    const colorClasses = {
        emerald: "text-emerald-400 border-emerald-500/30 hover:border-emerald-400 bg-emerald-900/10 hover:bg-emerald-900/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
        teal: "text-teal-400 border-teal-500/30 hover:border-teal-400 bg-teal-900/10 hover:bg-teal-900/20 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
        green: "text-green-400 border-green-500/30 hover:border-green-400 bg-green-900/10 hover:bg-green-900/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    };

    return (
        <div className={`p-8 rounded-3xl border transition-all duration-300 group ${colorClasses[color]}`}>
            <div className="mb-6 bg-[#0a0a0a] inline-block p-4 rounded-2xl border border-white/5">{icon}</div>
            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{title}</h3>
            <ul className="space-y-4">
                {games.map((game, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Star className={`w-5 h-5 shrink-0 mt-0.5 fill-current ${color === 'emerald' ? 'text-emerald-500' : color === 'teal' ? 'text-teal-500' : 'text-green-500'}`} />
                        <span className="text-base font-medium leading-tight">{game}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// --- UPDATED MAIN-PAGE STYLE FAQ ITEM (Mehendi Colors) ---
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? "border-emerald-500 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-lg pr-4 transition-colors ${
          isOpen ? "text-emerald-400" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-emerald-500 text-black" : "bg-transparent border border-white/30 text-white group-hover:border-emerald-500 group-hover:text-emerald-500"
        }`}>
          {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
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
            <div className="px-6 pb-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-emerald-500/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
