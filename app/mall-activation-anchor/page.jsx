"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, Camera, Star, Music, Zap, Users, 
  ArrowRight, Ticket, Film, Crown, Sparkles 
} from "lucide-react";

// --- SEO METADATA ---
export const metadata = {
  title: "Celebrity & Concert Anchor Jaipur | Yash Soni | Lifestyle Event Host",
  description: "Host for Music Festivals, Celebrity Meet & Greets, and Luxury Brand Launches in Jaipur. The voice that controls the crowd.",
  keywords: "Celebrity Anchor Jaipur, Concert Host Rajasthan, Fashion Show Emcee, Movie Promotion Host, Luxury Brand Launch Anchor",
};

// --- CHROME/PLATINUM TEXTURE (For that "Star" feel) ---
const PlatinumText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 ${className || ""}`}
    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
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
        <Camera className="w-5 h-5 text-white animate-pulse" />
        <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </p>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

export default function LifestyleAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* --- 1. HERO: THE PAPARAZZI MOMENT --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Concert Crowd / Flashbulbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1459749411177-3c9694d93605?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom grayscale contrast-125" 
            alt="Concert Crowd"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-white/30 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl mb-8">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">
                Lifestyle • Fashion • Concerts
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Hosting <br /> <PlatinumText>The Icons.</PlatinumText>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              From managing <span className="text-white font-bold">crowds of 5000+</span> at concerts to interviewing <span className="text-white font-bold">Bollywood Stars</span> on the red carpet. <br />
              I bring the hype, the class, and the control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  Book For Show
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE CELEBRITY TICKER (Social Proof) --- */}
      <div className="bg-white text-black py-4 overflow-hidden border-y border-gray-200">
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

      {/* --- 3. THE "NOT A MALL ANCHOR" REBRAND --- */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <SectionHeading subtitle="The Upgrade" title="Beyond The Mic." />
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 We are not talking about shouting offers in a food court. We are talking about <strong>High-Stakes Public Events.</strong>
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-4 border-white pl-6">
                 When a Bollywood star walks in, or a luxury brand like <span className="text-white font-bold">Gucci/Sephora</span> opens its doors, you need an anchor who looks the part and can handle the frenzy.
              </p>
              <div className="space-y-8">
                 <FeatureRow icon={<Users />} title="Crowd Control" desc="I know how to hype up a crowd of thousands without letting it turn into chaos. Safety + Energy." />
                 <FeatureRow icon={<Mic2 />} title="Star Management" desc="I handle celebrity Q&As with research and respect. No awkward questions, just smooth PR-friendly interaction." />
              </div>
           </div>
           
           <div className="relative h-[600px] w-full">
              {/* Image Stack */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-neutral-800 rounded-none overflow-hidden transform rotate-3 border border-neutral-700">
                 <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80" className="w-full h-full object-cover grayscale opacity-60" alt="Concert Crowd" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-black rounded-none overflow-hidden shadow-2xl border border-white transform -rotate-3">
                 <img src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=800&q=80" className="w-full h-full object-cover" alt="Yash Soni with Mic" />
              </div>
           </div>
        </div>
      </section>

      {/* --- 4. SERVICES: LIFESTYLE & SHOWBIZ --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900">
         <div className="container mx-auto px-4">
            <SectionHeading subtitle="Capabilities" title="The Showbiz Portfolio." align="center" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
               <StyleCard 
                 title="Celebrity Meet & Greets" 
                 icon={<Star className="w-8 h-8 text-yellow-400" />}
                 desc="Hosting movie promotions and star visits. Managing the fan frenzy while ensuring the star feels comfortable."
               />
               <StyleCard 
                 title="Music Concerts" 
                 icon={<Music className="w-8 h-8 text-purple-500" />}
                 desc="Opening acts for bands/DJs. I keep the crowd jumping before the headliner steps on stage."
               />
               <StyleCard 
                 title="Fashion Shows" 
                 icon={<Crown className="w-8 h-8 text-pink-500" />}
                 desc="The voice of the runway. Sophisticated commentary that matches the glamour of the collection."
               />
               <StyleCard 
                 title="Luxury Launches" 
                 icon={<Zap className="w-8 h-8 text-blue-500" />}
                 desc="Store openings for Premium Brands (Sephora, H&M, Apple). Creating a 'Queuing Culture' and high demand."
               />
            </div>
         </div>
      </section>

      {/* --- 5. VISUAL PROOF (The Crowd) --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="The Vibe" title="Electric Atmosphere." />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px]">
           <VibeImage img="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" span="col-span-2 row-span-2" label="Music Festival 2024" />
           <VibeImage img="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80" label="Celebrity Red Carpet" />
           <VibeImage img="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80" label="Concert Crowd" />
           <VibeImage img="https://images.unsplash.com/photo-1505236858274-038a44874e10?w=800&q=80" span="col-span-2 md:col-span-1" label="Fashion Week" />
        </div>
      </section>

      {/* --- 6. LOGISTICS FAQ --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 border-t border-neutral-900">
        <SectionHeading subtitle="Details" title="Production & Tech." align="center" />
        <div className="space-y-4 mt-8">
           <FAQItem question="Can you handle large stadium crowds?" answer="Yes. I have experience managing crowds of 2000+. I know how to use voice modulation to command attention in large open spaces." />
           <FAQItem question="Do you work with Teleprompters?" answer="For televised events or formal launches, yes. I am trained in reading teleprompters naturally." />
           <FAQItem question="Are you comfortable interviewing celebs?" answer="Absolutely. I research their recent work, prepare non-controversial engaging questions, and ensure the interview flows smoothly." />
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-32 bg-white text-black text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8">Need A Headliner?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-xl font-medium">
               For events that need more than just a host. <br /> You need a Personality.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl">
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
    <div className="w-14 h-14 rounded-full border border-neutral-800 bg-[#0a0a0a] flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const StyleCard = ({ title, icon, desc }) => (
  <div className="bg-[#0f0505] p-8 border border-neutral-800 hover:border-white/50 transition-colors group">
     <div className="mb-6">{icon}</div>
     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200">{title}</h3>
     <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const VibeImage = ({ img, span = "", label }) => (
    <div className={`relative group overflow-hidden border border-neutral-800 ${span}`}>
        <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
        <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-lg uppercase tracking-wider">{label}</p>
        </div>
    </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-none transition-all duration-300 hover:border-white/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <Sparkles className={`w-4 h-4 text-white transition-opacity ${isOpen ? 'opacity-100' : 'opacity-30'}`} />
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