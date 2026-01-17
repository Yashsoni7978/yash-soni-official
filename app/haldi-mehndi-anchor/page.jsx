"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Music, Smile, Heart, Zap, Trophy, 
  Users, Camera, ArrowRight, Play, Star, 
  ChevronDown, PartyPopper 
} from "lucide-react";

// --- 1. CUSTOM TEXTURE FOR HALDI VIBE (Yellow to Pink Gradient) ---
const FestivalText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 ${className || ""}`}
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
        <Sun className="w-5 h-5 text-yellow-400 animate-spin-slow" />
        <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </p>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

export default function HaldiMehndiAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-pink-500 selection:text-white">
      
      {/* --- 1. HERO: THE CHIEF FUN OFFICER --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - High Energy Haldi Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-purple-900/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1605634428453-65239e5e782e?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Haldi Ceremony Anchor Jaipur"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-yellow-500/50 px-6 py-2 rounded-full bg-yellow-900/20 backdrop-blur-xl mb-8">
              <PartyPopper className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-xs uppercase tracking-[0.2em] font-bold">
                The Game Master
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Turning Rituals <br /> <FestivalText>Into Riots.</FestivalText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              No boring speeches. No awkward silences. <br />
              Just 100% pure, unadulterated <span className="text-pink-500 font-bold">CHAOS</span> & <span className="text-yellow-400 font-bold">JOY</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                  Book The Vibe
                </button>
              </Link>
              <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-full flex items-center justify-center gap-3">
                 <Play className="w-4 h-4 fill-current" /> Watch The Madness
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE STATS (Fun Metrics) --- */}
      <div className="bg-[#111] border-y border-neutral-800 py-12 overflow-hidden">
         <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <FunStat icon={<Zap className="w-6 h-6 text-yellow-400" />} val="100%" label="Energy Level" />
             <FunStat icon={<Camera className="w-6 h-6 text-pink-500" />} val="Uncounted" label="Crazy Selfies" />
             <FunStat icon={<Users className="w-6 h-6 text-green-400" />} val="Zero" label="Awkward Silence" />
             <FunStat icon={<Trophy className="w-6 h-6 text-blue-400" />} val="Legendary" label="Game Moments" />
         </div>
      </div>

      {/* --- 3. THE "GAME JOCKEY" MENU --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="The Entertainment" title="The Game Menu." align="center" />
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
           I don't just say "let's play a game." I curate a <strong className="text-white">battlefield of fun</strong>. Pick your poison.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
           {/* High Energy Category */}
           <GameCategory 
              title="High Voltage" 
              color="yellow"
              icon={<Zap className="w-8 h-8" />}
              games={[
                 "The Tug-of-War (Ladki vs Ladke)",
                 "Saree Draping Challenge (For Men)",
                 "The 'Knot' Challenge",
                 "Musical Chairs (Extreme Edition)"
              ]}
           />
           {/* Couple Chemistry Category */}
           <GameCategory 
              title="Couple Chemistry" 
              color="pink"
              icon={<Heart className="w-8 h-8" />}
              games={[
                 "The Shoe Game (Viral Content)",
                 "Paper Dance (Close & Cozy)",
                 "The Whisper Challenge",
                 "Blindfold Groom Search"
              ]}
           />
           {/* Crowd Chaos Category */}
           <GameCategory 
              title="Crowd Chaos" 
              color="purple"
              icon={<Music className="w-8 h-8" />}
              games={[
                 "Antakshari War (Boys vs Girls)",
                 "Pass the Pillow (With Dares)",
                 "Bollywood Hookstep Challenge",
                 "Find the Ring (Haldi Special)"
              ]}
           />
        </div>
      </section>

      {/* --- 4. THE TWO VIBES (Haldi vs Sangeet) --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900">
         <div className="container mx-auto px-4">
            <SectionHeading subtitle="The Flow" title="Two Moods. One Host." />
            
            <div className="grid lg:grid-cols-2 gap-12 mt-16">
               {/* Haldi Card */}
               <div className="relative h-[600px] group rounded-3xl overflow-hidden cursor-pointer border border-yellow-500/30">
                  <img src="https://images.unsplash.com/photo-1596199644274-04f10d370c7f?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Haldi" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10">
                     <h3 className="text-5xl font-display font-black text-yellow-400 mb-4">The Haldi</h3>
                     <p className="text-white text-lg leading-relaxed">
                        Flower showers, dhol beats, and yellow chaos. I manage the rituals with respect but ensure the "Holi" vibe takes over.
                     </p>
                  </div>
               </div>

               {/* Sangeet Card */}
               <div className="relative h-[600px] group rounded-3xl overflow-hidden cursor-pointer border border-pink-500/30">
                  <img src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Sangeet" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10">
                     <h3 className="text-5xl font-display font-black text-pink-500 mb-4">The Sangeet</h3>
                     <p className="text-white text-lg leading-relaxed">
                        Lights, Camera, Action. I introduce performances like a Filmfare host and roast the family (lovingly) in between sets.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. FAQ (The Fun Edition) --- */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="Good to Know" title="Common Questions" align="center" />
        <div className="space-y-4 mt-8">
           <FAQItem question="Do you bring the props for games?" answer="Yes! I bring a 'Fun Kit' with ribbons, placards, blindfolds, and buzzers. You don't need to worry about sourcing the small stuff." />
           <FAQItem question="Can you speak Marwari?" answer="Khamma Ghani! Absolutely. I switch between Hindi, English, and Marwari to connect with the Dadi-Sa and the NRI cousins equally." />
           <FAQItem question="Will you drag people to the dance floor?" answer="100%. I have specific 'Ice-Breaker' techniques to get the non-dancers on the floor without making them feel awkward." />
           <FAQItem question="Do you handle the Dholwala?" answer="Yes, I coordinate with the Dhol team to sync beats with my commentary and the couple's entry." />
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-gradient-to-r from-yellow-500 to-pink-600 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 text-white">Let's Get This Party Started</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-12 text-xl font-medium">
               Warning: Booking me may result in excessive laughter and sore feet from dancing.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl">
                  Check Availability
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const FunStat = ({ icon, val, label }) => (
    <div className="flex flex-col items-center justify-center gap-2 group">
        <div className="bg-[#050505] p-4 rounded-full border border-neutral-800 group-hover:border-white transition-colors">
            {icon}
        </div>
        <h3 className="text-3xl font-black text-white">{val}</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest">{label}</p>
    </div>
);

const GameCategory = ({ title, color, icon, games }) => {
    const colorClasses = {
        yellow: "text-yellow-400 border-yellow-500/20 hover:border-yellow-500 bg-yellow-900/10",
        pink: "text-pink-400 border-pink-500/20 hover:border-pink-500 bg-pink-900/10",
        purple: "text-purple-400 border-purple-500/20 hover:border-purple-500 bg-purple-900/10",
    };

    return (
        <div className={`p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 ${colorClasses[color]}`}>
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
            <ul className="space-y-4">
                {games.map((game, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                        <Star className={`w-4 h-4 fill-current ${color === 'yellow' ? 'text-yellow-500' : color === 'pink' ? 'text-pink-500' : 'text-purple-500'}`} />
                        <span className="text-sm font-medium">{game}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-yellow-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};