"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, Music, Zap, Sparkles, Star, Users, 
  ArrowRight, Play, Headphones, ChevronDown, 
  Trophy, Flame 
} from "lucide-react";

// --- 1. CUSTOM NEON TEXTURE (Purple/Blue Gradient) ---
const NeonText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 ${className || ""}`}
    style={{ textShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
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
        <p className="text-purple-400 text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </p>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- 2. SEO KEYWORDS & CONTENT ---
const KEYWORDS = {
  heroTitle: "Sangeet Anchor in Jaipur",
  heroSubtitle: "Turn Your Night Into A Concert.",
  metaDesc: "High-energy Sangeet Host in Jaipur. Expert in crowd interaction, couple games, and non-stop entertainment for weddings in Rajasthan."
};

const FAQS = [
  { q: "Do you help script the family performances?", a: "Yes! I provide a funny, engaging script template for family members who are announcing performances. I also add my own witty one-liners to keep the flow smooth." },
  { q: "How do you handle the 'Dead Air' between dances?", a: "That is my specialty. I fill gaps with interactive couple games, rapid-fire crowd questions, and impromptu dance-offs to ensure the energy never drops." },
  { q: "Can you co-host with a family member?", a: "Absolutely. I love the 'Professional + Family' duo dynamic. I handle the flow and energy, while your cousin/friend adds the personal inside jokes." },
  { q: "Do you host the After-Party?", a: "Yes. Once the performances end, I transition into an MC role to hype up the DJ set and get everyone (including the non-dancers) on the floor." },
  { q: "What do you wear for a Sangeet?", a: "I dress to match the glamour of the night. Typically a sharp, designer Indo-Western outfit or a Tuxedo, depending on your theme." },
  { q: "Do you travel for Sangeets outside Jaipur?", a: "Yes, I regularly host Sangeets in Udaipur, Jodhpur, Goa, and Delhi. Travel logistics are simple and handled professionally." },
  { q: "How long do you stay at the event?", a: "I am there from the first song until the DJ takes over completely. Usually, a 4-6 hour high-energy shift." },
  { q: "Do you bring your own sound system?", a: "No, I work with your appointed DJ/Sound vendor. However, I do a sound check 2 hours prior to ensure the mics are crisp." },
  { q: "What makes you different from other anchors?", a: "I treat a Sangeet like a concert, not a school assembly. No boring poetry. Just high-octane interaction and entertainment." },
  { q: "How do we book you?", a: "Click the 'Book The Hype' button below to check my availability for your date. Sangeet dates book out very fast." },
  { q: "Can we see videos of your past Sangeets?", a: "Yes! Scroll up to the 'Watch Showreel' button or visit my Instagram for raw, unedited clips of my crowd work." },
  { q: "What are your charges for a Sangeet?", a: "My fee depends on the location and duration. Contact me directly for a custom quote." }
];

export default function SangeetAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-purple-600 selection:text-white">
      
      {/* --- 1. HERO: THE CONCERT STAGE --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Concert/Stage Vibe */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-purple-900/20 z-10" />
          <img 
            src="/hero-slide-1.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Sangeet Anchor Jaipur"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-purple-500/50 px-6 py-2 rounded-full bg-purple-900/20 backdrop-blur-xl mb-8">
              <Mic2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs uppercase tracking-[0.2em] font-bold">
                The Showman
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Turn Your Night <br /> <NeonText>Into A Concert.</NeonText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Less "And next coming on stage..." <br />
              More <span className="font-bold text-white">"MAKE SOME NOISE!"</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                  Book The Hype
                </button>
              </Link>
              <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-purple-900/20 transition-colors rounded-full flex items-center justify-center gap-3">
                  <Play className="w-4 h-4 fill-current" /> Watch Showreel
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. ENERGY METRICS --- */}
      <div className="bg-[#0a0a0a] border-y border-neutral-800 py-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              <VibeStat icon={<Flame className="w-6 h-6 text-orange-500" />} val="High" label="Voltage" />
              <VibeStat icon={<Users className="w-6 h-6 text-blue-500" />} val="Engaged" label="Crowd" />
              <VibeStat icon={<Music className="w-6 h-6 text-purple-500" />} val="Non-Stop" label="Beats" />
              <VibeStat icon={<Star className="w-6 h-6 text-yellow-400" />} val="Filmy" label="Drama" />
          </div>
      </div>

      {/* --- 3. THE SANGEET MENU (Segments) --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="The Script" title="Not Just Dance Performances." align="center" />
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
           A Sangeet isn't just a talent show. It needs structure, humor, and interactive fillers to keep the energy peaking between performances.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
           {/* Card 1 */}
           <ShowCard 
              title="The Roast" 
              icon={<Flame className="w-8 h-8 text-orange-500" />}
              desc="A lighthearted, scripted comedy segment roasting the Bride & Groom's quirks. We keep it family-friendly but hilarious."
              tags={["Scripted", "Comedy", "Viral"]}
           />
           {/* Card 2 */}
           <ShowCard 
              title="The Awards Night" 
              icon={<Trophy className="w-8 h-8 text-yellow-500" />}
              desc="Forget 'Best Dancer'. We give awards for 'Late Lateef', 'Kanjoos Chacha', and 'Drama Queen'. Complete with acceptance speeches."
              tags={["Interactive", "Props", "Fun"]}
              highlight
           />
           {/* Card 3 */}
           <ShowCard 
              title="The Dance Battle" 
              icon={<Zap className="w-8 h-8 text-purple-500" />}
              desc="Ladke-wale vs Ladki-wale. I divide the room, assign captains, and host a high-decibel cheer-off."
              tags={["High Energy", "Loud", "Crowd Work"]}
           />
        </div>
      </section>

      {/* --- 4. VISUAL PROOF (Gallery Style) --- */}
      <section className="py-32 bg-[#080808] border-y border-neutral-900 relative">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               <div className="relative h-[600px] w-full group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl transform -rotate-2 opacity-50 group-hover:rotate-0 transition-all duration-500"></div>
                  <img src="/gallery-4.webp" className="relative w-full h-full object-cover rounded-2xl shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500" alt="Stage Hosting" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md border border-purple-500/50 p-6 rounded-xl">
                      <p className="text-white font-bold text-xl">"Unmatched Energy"</p>
                      <div className="flex gap-1 mt-2 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                      </div>
                  </div>
               </div>

               <div>
                  <SectionHeading subtitle="My Style" title="The Host with the Most." />
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     I don't stand behind a podium. I own the stage. <br /><br />
                     Whether it's hyping up a nervous solo performer, managing a technical glitch with a joke, or getting the shyest uncle to do the 'Naagin Dance', I ensure the flow is seamless.
                  </p>
                  
                  <div className="space-y-6">
                      <VibeCheck title="Scripting Support" desc="I help write the anchors' script for family members hosting segments." />
                      <VibeCheck title="DJ Coordination" desc="I sync with the DJ for perfect entry music and punchline sound effects." />
                      <VibeCheck title="After-Party Hype" desc="When the performances end, I turn into an MC to kickstart the open dance floor." />
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* --- 5. SANGEET FAQ --- */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="Backstage" title="The Technicals" align="center" />
        <div className="space-y-4 mt-8">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
           ))}
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-gradient-to-r from-purple-800 to-indigo-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 text-white">The Spotlight is Waiting.</h2>
            <p className="text-purple-200 max-w-2xl mx-auto mb-12 text-xl font-medium">
               Don't let your Sangeet be a snooze-fest. <br /> Let's make it a blockbuster.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-white text-purple-900 font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]">
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
    <div className="flex flex-col items-center justify-center gap-2 group">
        <div className="bg-[#111] p-4 rounded-full border border-neutral-800 group-hover:border-purple-500 transition-colors">
            {icon}
        </div>
        <h3 className="text-3xl font-black text-white">{val}</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest">{label}</p>
    </div>
);

const ShowCard = ({ title, icon, desc, tags, highlight }) => (
    <div className={`p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 ${highlight ? 'bg-[#0f0518] border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]' : 'bg-[#0a0a0a] border-neutral-800 hover:border-purple-500/30'}`}>
        <div className="mb-6 bg-black w-16 h-16 rounded-2xl flex items-center justify-center border border-neutral-800 group-hover:border-purple-500 transition-colors">
           {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase font-bold tracking-wider bg-white/5 px-3 py-1 rounded-full text-gray-300 border border-white/5">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const VibeCheck = ({ title, desc }) => (
    <div className="flex gap-4 group">
       <div className="mt-1 flex-shrink-0">
          <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
             <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
       </div>
       <div>
          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
