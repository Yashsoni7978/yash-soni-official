"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Music, Smile, Heart, Zap, Trophy, 
  Users, Camera, ArrowRight, Play, Star, 
  ChevronDown, PartyPopper, Sparkles 
} from "lucide-react";

// --- 1. CUSTOM TEXTURE FOR HALDI VIBE (Ultra-Vibrant Gradient) ---
const FestivalText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 drop-shadow-md ${className || ""}`}
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

// --- 2. EXPANDED SEO & CONTENT DATA (Long-tail keyword focused) ---
const FAQS = [
  { q: "Why hire a specialized Haldi Games Anchor?", a: "A Haldi requires a completely different energy than a formal reception. It’s loud, messy, and intimate. You need a specialized emcee who excels at high-energy crowd control, interactive games, and bringing out the crazy side of your family without making it awkward." },
  { q: "Do you travel for Destination Weddings?", a: "Absolutely. Whether your Haldi is in a heritage palace in Rajasthan or a beachfront resort in Goa, I travel globally to bring unmatched energy to your destination wedding." },
  { q: "What kind of interactive Haldi games do you play?", a: "I completely customize the games based on your crowd. We do everything from high-voltage Tug-of-War (Bride Squad vs. Groom Squad) and Saree Draping Challenges for the boys, to intimate Couple Trivia and Bollywood Dance-Offs." },
  { q: "Do you bring the props for the games?", a: "Yes! I bring a dedicated 'Fun Kit' loaded with buzzers, blindfolds, placards, and game accessories. You just show up and play." },
  { q: "Will the games be too messy or wild for elders?", a: "Not at all. I categorize the interactions. We have 'Messy & Wild' games for the friends and cousins, and 'Classy & Entertaining' games for the elders. Dadis and Nanis love judging the contests while the youth gets dirty!" },
  { q: "Do you handle the Dholwala and DJ coordination?", a: "Yes. The music makes the Haldi. I coordinate directly with your DJ and Dhol team to sync the beats with my commentary, the games, and the couple's grand entry." },
  { q: "Can you host a Phoolon Ki Holi?", a: "100%. It is the most photogenic part of the ceremony. I choreograph the entire flower shower so your wedding photographers get those perfect, viral-worthy shots." },
  { q: "What if my family members are shy to play?", a: "That is exactly why you hire a professional. I don't force anyone; I use seamless 'Ice-Breakers' that naturally pull people in. Within the first 15 minutes, even the shyest relatives are shouting answers and cheering." },
  { q: "Do you wear yellow to match the Haldi theme?", a: "Always. I wear vibrant, premium traditional wear (usually yellow, mustard, or floral) to blend perfectly into your Haldi aesthetics like a true family member." },
  { q: "What languages do you host in?", a: "I seamlessly switch between English, Hindi, and regional touches like Marwari or Punjabi. I make sure the NRI friends and the local relatives all feel equally involved." },
  { q: "How long is your Haldi hosting package?", a: "Typically 3 to 4 hours. I am there from the first welcome dhol beat to the final 'throw the groom in the pool' moment." },
  { q: "How do we secure our wedding date?", a: "Hit the 'Book The Vibe' button. Haldi dates, especially morning slots during peak wedding season, book out months in advance!" }
];

export default function HaldiAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-pink-500 selection:text-white">
      
      {/* --- 1. HERO: THE MONEY SECTION (SEO Optimized H1) --- */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background - High Energy Haldi Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-purple-900/30 z-10" />
          <img 
            src="/gallery-1.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Top Haldi Games Anchor and Interactive Emcee"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-yellow-500/50 px-6 py-2 rounded-full bg-yellow-900/30 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-xs uppercase tracking-[0.2em] font-bold">
                The Haldi Specialist
              </span>
            </div>

            {/* Crucial SEO H1 Tag */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              The Ultimate <br /> <FestivalText>Haldi Games Anchor.</FestivalText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              No boring seating arrangements. No awkward silences. <br />
              Just interactive games, viral moments, and 100% pure <span className="text-pink-500 font-bold drop-shadow-md">CHAOS</span> & <span className="text-yellow-400 font-bold drop-shadow-md">JOY</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                  Secure Your Date
                </button>
              </Link>
              <button className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-full flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-current" /> See The Madness
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE STATS (Fun Metrics) --- */}
      <div className="bg-[#111] border-y border-neutral-800 py-12 overflow-hidden relative z-20">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FunStat icon={<Zap className="w-6 h-6 text-yellow-400" />} val="100%" label="Energy Level" />
              <FunStat icon={<Camera className="w-6 h-6 text-pink-500" />} val="Viral" label="Photo Moments" />
              <FunStat icon={<Users className="w-6 h-6 text-green-400" />} val="Zero" label="Awkward Silence" />
              <FunStat icon={<Trophy className="w-6 h-6 text-blue-400" />} val="Legendary" label="Interactive Games" />
          </div>
      </div>

      {/* --- 3. THE "GAME JOCKEY" MENU (Keyword Heavy) --- */}
      <section className="py-32 container mx-auto px-4 relative z-20">
        <SectionHeading subtitle="Crowd Engagement" title="Interactive Haldi Games." align="center" />
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
           I don't just hand over the mic. I curate a <strong className="text-yellow-400 font-bold">high-voltage battlefield of fun</strong>. Pick your poison from the ultimate Haldi entertainment menu.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
           {/* High Energy Category */}
           <GameCategory 
              title="High Voltage" 
              color="yellow"
              icon={<Zap className="w-8 h-8" />}
              games={[
                  "The Ultimate Tug-of-War (Bride vs Groom)",
                  "Saree Draping Challenge (For the Boys)",
                  "The 'Knot' Challenge (Team Relay)",
                  "Musical Chairs (Extreme Haldi Edition)"
              ]}
           />
           {/* Couple Chemistry Category */}
           <GameCategory 
              title="Couple Chemistry" 
              color="pink"
              icon={<Heart className="w-8 h-8" />}
              games={[
                  "The Shoe Game (Spicy & Viral)",
                  "Paper Dance (Close & Cozy)",
                  "The Whisper Challenge",
                  "Blindfold Partner Search"
              ]}
           />
           {/* Crowd Chaos Category */}
           <GameCategory 
              title="Crowd Chaos" 
              color="purple"
              icon={<Music className="w-8 h-8" />}
              games={[
                  "Antakshari War (With a modern twist)",
                  "Pass the Prop (With wild Dares)",
                  "Bollywood Hookstep Challenge",
                  "Find the Ring (The Traditional Classic)"
              ]}
           />
        </div>
      </section>

      {/* --- 4. VISUAL PROOF (Gallery Style) --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900 relative z-20">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative h-[600px] group rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl">
                  <img src="/gallery-3.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="High Energy Haldi Event Anchor Hosting Games" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10">
                      <h3 className="text-5xl font-display font-black text-yellow-400 mb-4 drop-shadow-lg">The Experience</h3>
                      <p className="text-white text-lg leading-relaxed font-medium">
                          Flower showers, dhol beats, and yellow chaos. I manage the traditional rituals with absolute respect, but ensure the high-energy "Holi" vibe completely takes over.
                      </p>
                  </div>
               </div>

               <div>
                  <SectionHeading subtitle="The Vibe Check" title="Pure, Unfiltered Joy." />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      The Haldi is the most intimate, unfiltered event of the entire destination wedding. It is where the real personalities shine through. <br /><br />
                      My job as your host is to amplify that energy. I make the shy uncle dance, get the strict aunties laughing, and ensure the groom regrets not applying waterproof makeup!
                  </p>
                  <ul className="space-y-4">
                      {["Zero boring, canned jokes", "100% Family-friendly humor", "Seamless crowd engagement", "Viral, camera-ready moments"].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-white font-medium text-lg">
                              <div className="bg-yellow-500/20 p-2 rounded-full">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                              </div>
                              {item}
                          </li>
                      ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. FAQ (Expanded for Trust & SEO) --- */}
      <section className="py-32 max-w-4xl mx-auto px-4 relative z-20">
        <SectionHeading subtitle="Good to Know" title="Frequently Asked Questions" align="center" />
        <div className="space-y-4 mt-12">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
           ))}
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white drop-shadow-lg">Let's Get This Party Started.</h2>
            <p className="text-white max-w-2xl mx-auto mb-12 text-2xl font-bold drop-shadow-md">
               Warning: Booking me may result in excessive laughter and sore feet from dancing.
            </p>
            <Link href="/contact">
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
        <div className="bg-[#050505] p-5 rounded-full border border-neutral-800 group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300">
            {icon}
        </div>
        <h3 className="text-4xl font-black text-white">{val}</h3>
        <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">{label}</p>
    </div>
);

const GameCategory = ({ title, color, icon, games }) => {
    const colorClasses = {
        yellow: "text-yellow-400 border-yellow-500/30 hover:border-yellow-400 bg-yellow-900/10 hover:bg-yellow-900/20 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
        pink: "text-pink-400 border-pink-500/30 hover:border-pink-400 bg-pink-900/10 hover:bg-pink-900/20 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
        purple: "text-purple-400 border-purple-500/30 hover:border-purple-400 bg-purple-900/10 hover:bg-purple-900/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    };

    return (
        <div className={`p-8 rounded-3xl border transition-all duration-300 group ${colorClasses[color]}`}>
            <div className="mb-6 bg-[#0a0a0a] inline-block p-4 rounded-2xl border border-white/5">{icon}</div>
            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{title}</h3>
            <ul className="space-y-4">
                {games.map((game, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Star className={`w-5 h-5 shrink-0 mt-0.5 fill-current ${color === 'yellow' ? 'text-yellow-500' : color === 'pink' ? 'text-pink-500' : 'text-purple-500'}`} />
                        <span className="text-base font-medium leading-tight">{game}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-2xl overflow-hidden transition-all duration-300 hover:border-yellow-500/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-bold text-white text-xl pr-8 leading-snug">{question}</span>
        <div className={`p-2 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-yellow-500/20' : 'bg-neutral-800'}`}>
          <ChevronDown className={`w-5 h-5 text-yellow-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
            <p className="p-6 pt-0 text-gray-300 leading-relaxed text-base font-medium border-t border-neutral-800/50 mt-2 pt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
