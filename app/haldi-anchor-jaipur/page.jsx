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

// --- 2. SEO & CONTENT DATA ---
const FAQS = [
  { q: "Do you bring the props for games?", a: "Yes! I bring a 'Fun Kit' with ribbons, placards, blindfolds, and buzzers. You don't need to worry about sourcing the small stuff." },
  { q: "Will the games be too messy for elders?", a: "Not at all. I categorize games into 'Messy' (for friends) and 'Classy' (for family). Elders enjoy watching and judging, while the youth gets dirty!" },
  { q: "Do you handle the Dholwala?", a: "Yes, I coordinate with the Dhol team to sync beats with my commentary and the couple's entry. I make sure they stop when I speak!" },
  { q: "Can you host a Phoolon Ki Holi?", a: "Absolutely. It's the most photogenic part of the Haldi. I choreograph the flower shower so your photographers get the perfect shot." },
  { q: "What if people are shy to play?", a: "That's why you hire me. I don't force people; I lure them in with easy 'Ice-Breakers' that make everyone laugh. Within 10 minutes, even the shyest cousin is shouting answers." },
  { q: "Do you wear yellow?", a: "I usually wear a vibrant Kurta (Yellow, Orange, or Floral) to match the Haldi theme perfectly. I blend in like a family member." },
  { q: "How long is your Haldi package?", a: "Typically 3-4 hours. From the welcome dhol to the final 'everyone in the pool' moment." },
  { q: "Can we customize the games?", a: "100%. If you want a specific 'Rapid Fire' about the couple or a 'Saree Draping Contest', we can add it to the run-of-show." },
  { q: "Do you speak Marwari/Local languages?", a: "Khamma Ghani! Yes, I switch between Hindi, English, and Marwari/Punjabi to connect with the Dadi-Sa and the NRI cousins equally." },
  { q: "What happens if it rains?", a: "I always have a 'Plan B' set of indoor games (Quizzes, Antakshari) that don't require running around, just in case the weather turns." },
  { q: "Is sound system included?", a: "No, sound is provided by your vendor. I need one handheld mic and a good speaker system to control the crowd." },
  { q: "How do we book you?", a: "Click the 'Book The Vibe' button below. Haldi dates fill up fast during the wedding season!" }
];

export default function HaldiAnchor() {
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

      {/* --- 4. VISUAL PROOF (Gallery Style) --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative h-[600px] group rounded-3xl overflow-hidden border border-yellow-500/30">
                  <img src="https://images.unsplash.com/photo-1596199644274-04f10d370c7f?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Haldi Fun" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10">
                      <h3 className="text-5xl font-display font-black text-yellow-400 mb-4">The Haldi</h3>
                      <p className="text-white text-lg leading-relaxed">
                         Flower showers, dhol beats, and yellow chaos. I manage the rituals with respect but ensure the "Holi" vibe takes over.
                      </p>
                  </div>
               </div>

               <div>
                  <SectionHeading subtitle="The Vibe" title="Laughter Guaranteed." />
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Haldi is the most intimate, fun event of the wedding. It's where the real personalities come out. <br /><br />
                     My job is to amplify that. I make the shy chacha dance, the strict bua laugh, and the groom regret not applying waterproof makeup!
                  </p>
                  <ul className="space-y-4">
                      {["No cringy jokes", "Family-friendly humor", "High engagement", "Viral video moments"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-white">
                              <Star className="w-5 h-5 text-yellow-500 fill-current" /> {item}
                          </li>
                      ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. FAQ (The Fun Edition) --- */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="Good to Know" title="Common Questions" align="center" />
        <div className="space-y-4 mt-8">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
           ))}
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
