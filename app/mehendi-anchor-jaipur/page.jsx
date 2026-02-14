"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Leaf, Music, Heart, Mic2, Coffee, 
  Users, Camera, ArrowRight, Play, Star, 
  ChevronDown, Flower, Crown
} from "lucide-react";

// --- 1. CUSTOM TEXTURE FOR MEHENDI VIBE (Green to Teal Gradient) ---
const HennaText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 ${className || ""}`}
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
        <Leaf className="w-5 h-5 text-green-500 animate-pulse" />
        <p className="text-green-500 text-xs uppercase tracking-[0.3em] font-bold">
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
  { q: "The bride can't move her hands. How will she play?", a: "I have a special set of 'Verbal & Audio' games designed specifically for the bride. She participates with her wit, not her hands. She remains the star without smudging her design." },
  { q: "Is Antakshari too old school?", a: "Not the way I do it. I host 'Antakshari 2.0' with props, buzzers, and twists (like 'Don't sing the Mukhda'). It turns into a high-energy concert within minutes." },
  { q: "Do you manage the ladies' Sangeet performances?", a: "Yes! Often Mehendi transitions into a mini-Sangeet. I introduce the aunties and cousins with fun backstories to make their dance performances feel special." },
  { q: "Will you force guests to dance?", a: "Mehendi is a relaxed vibe. I don't force anyone. I use 'Seat-Based Interactions' first. Once the comfort level is high, people naturally move to the dance floor on their own." },
  { q: "What do you wear?", a: "I blend in with a stylish Green, Floral, or Pastel Kurta Jacket set. I look like a well-dressed cousin, not a corporate presenter." },
  { q: "How do you handle the microphone if guests have henna?", a: "I carry a cordless mic and physically move to the guest to hold it for them. No one needs to touch the mic. I am their personal voice assistant!" },
  { q: "Can you host the Groom's entry?", a: "Absolutely. Whether he enters on an ATV or with Dhol, I build the hype and ensure the Bride's side is ready to welcome (or block!) him." },
  { q: "Do you bring the game props?", a: "Yes. My kit includes buzzers, placards, and safe props that don't mess up the Henna. I handle all the logistics." },
  { q: "How long is the event?", a: "Usually 3-4 hours. It starts slow with background music and peaks when the Groom arrives or the Antakshari begins." },
  { q: "Do we need a DJ?", a: "Yes, a DJ is crucial for the vibe. I sync with them for sound effects during games and song transitions." },
  { q: "What language do you host in?", a: "A mix of Hindi and English (Hinglish). I also use local slang (Punjabi/Marwari) to bond with the elders instantly." },
  { q: "How do we book?", a: "Click the 'Secure The Date' button below. Mehendi slots often get booked in conjunction with Sangeet dates." }
];

export default function MehendiAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-green-500 selection:text-black">
      
      {/* --- 1. HERO: THE VIBE DOCTOR --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Lush Green/Floral Vibe */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-green-900/20 z-10" />
          <img 
            src="/gallery-3.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Mehendi Anchor Jaipur"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-green-500/50 px-6 py-2 rounded-full bg-green-900/20 backdrop-blur-xl mb-8">
              <Crown className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs uppercase tracking-[0.2em] font-bold">
                The Vibe Manager
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Green Hands. <br /> <HennaText>Golden Memories.</HennaText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Mehendi takes hours. Don't let your guests just sit there. <br />
              I turn "waiting for henna to dry" into <span className="text-green-400 font-bold">pure entertainment</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  Secure The Date
                </button>
              </Link>
              <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-full flex items-center justify-center gap-3">
                  <Play className="w-4 h-4 fill-current" /> Watch The Fun
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE STATS (Engagement Metrics) --- */}
      <div className="bg-[#111] border-y border-neutral-800 py-12 overflow-hidden">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FunStat icon={<Music className="w-6 h-6 text-green-400" />} val="Endless" label="Antakshari Rounds" />
              <FunStat icon={<Heart className="w-6 h-6 text-pink-500" />} val="100%" label="Romance & Roasts" />
              <FunStat icon={<Coffee className="w-6 h-6 text-yellow-400" />} val="Zero" label="Bored Guests" />
              <FunStat icon={<Users className="w-6 h-6 text-blue-400" />} val="Active" label="Crowd Participation" />
          </div>
      </div>

      {/* --- 3. THE "SIT-DOWN" GAME MENU --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="The Entertainment" title="Fun Without The Fuss." align="center" />
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
           The challenge: Guests can't use their hands. <br/>
           The solution: <strong className="text-white">Brain, Voice, and Laughter.</strong>
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
           {/* Musical Madness */}
           <GameCategory 
              title="Musical Madness" 
              color="green"
              icon={<Music className="w-8 h-8" />}
              games={[
                  "Antakshari 2.0 (With Twists)",
                  "Guess The Song (Humming Only)",
                  "Musical Chairs (Using Eyes!)",
                  "Finish The Lyrics"
              ]}
           />
           {/* Family Feud */}
           <GameCategory 
              title="Family Face-Off" 
              color="teal"
              icon={<Users className="w-8 h-8" />}
              games={[
                  "Ladki-wale vs Ladke-wale Quiz",
                  "Who Knows The Couple Best?",
                  "Rapid Fire Roast",
                  "The 'Mummy' Challenge"
              ]}
           />
           {/* Bride Special */}
           <GameCategory 
              title="Bride Special" 
              color="emerald"
              icon={<Crown className="w-8 h-8" />}
              games={[
                  "Find The Groom's Name",
                  "Husband Material Quiz",
                  "Advice from Aunties (Funny)",
                  "The Love Story Timeline"
              ]}
           />
        </div>
      </section>

      {/* --- 4. VISUAL PROOF (Gallery Style) --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative h-[600px] group rounded-3xl overflow-hidden border border-green-500/30">
                  <img src="/gallery-2.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Mehendi Fun" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10">
                      <h3 className="text-5xl font-display font-black text-green-400 mb-4">The Mehendi</h3>
                      <p className="text-white text-lg leading-relaxed">
                         It's intimate, it's floral, and it's long. I ensure the energy stays vibrant without disrupting the delicate art being applied.
                      </p>
                  </div>
               </div>

               <div>
                  <SectionHeading subtitle="The Atmosphere" title="Intimate Yet Electric." />
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Mehendi is often the ice-breaker event. Families meet, sometimes for the first time. <br /><br />
                     My job is to shatter the awkwardness. I turn "Namaste" into inside jokes and ensure that by the time the Sangeet starts, everyone feels like old friends.
                  </p>
                  <ul className="space-y-4">
                      {["No awkward silence", "Respectful of traditions", "Engaging the elders", "Perfect photo ops"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-white">
                              <Flower className="w-5 h-5 text-green-500 fill-current" /> {item}
                          </li>
                      ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. FAQ --- */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="Good to Know" title="Common Questions" align="center" />
        <div className="space-y-4 mt-8">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
           ))}
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-gradient-to-r from-green-800 to-teal-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 text-white">Let's Create Magic</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-12 text-xl font-medium">
               Booking me ensures your Mehendi isn't just a ritual, but a memory.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-white text-green-900 font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl">
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
        <div className="bg-[#050505] p-4 rounded-full border border-neutral-800 group-hover:border-green-500 transition-colors">
            {icon}
        </div>
        <h3 className="text-3xl font-black text-white">{val}</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest">{label}</p>
    </div>
);

const GameCategory = ({ title, color, icon, games }) => {
    const colorClasses = {
        green: "text-green-400 border-green-500/20 hover:border-green-500 bg-green-900/10",
        teal: "text-teal-400 border-teal-500/20 hover:border-teal-500 bg-teal-900/10",
        emerald: "text-emerald-400 border-emerald-500/20 hover:border-emerald-500 bg-emerald-900/10",
    };

    return (
        <div className={`p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 ${colorClasses[color]}`}>
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
            <ul className="space-y-4">
                {games.map((game, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                        <Flower className={`w-4 h-4 fill-current ${color === 'green' ? 'text-green-500' : color === 'teal' ? 'text-teal-500' : 'text-emerald-500'}`} />
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
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-green-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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