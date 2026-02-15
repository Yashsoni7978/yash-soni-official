import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Mic, Sparkles, Quote, MapPin, Calendar, Briefcase, Zap, Globe, ShieldAlert, Layers } from "lucide-react";

// --- ADVANCED SEO METADATA ---
export const metadata = {
  title: "About Anchor Yash Soni | Premium Event Emcee in Jaipur",
  description: "With over 5 years of experience and 1100+ live events, Anchor Yash Soni is Jaipur's top choice for luxury weddings, sangeets, and corporate hosting.",
  keywords: ["Anchor Yash Soni", "About Yash Soni", "Best Anchor in Jaipur", "Professional Emcee Rajasthan", "Luxury Event Host"],
  openGraph: {
    title: "About Anchor Yash Soni | Premium Event Emcee",
    description: "The difference between a mic holder and a Master of Ceremonies. 1100+ stages later, I’m just getting started.",
    url: "https://yashsoni.in/about",
    siteName: "Anchor Yash Soni",
    images: [
      {
        url: "/intro-portrait-top.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni - Premium Event Host",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
};

// --- 1. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#D4AF37", 
    }}
  >
    {children}
  </span>
);

// --- 2. ANIMATION HELPERS (Client Component Wrapper) ---
"use client";
import { useRef } from "react";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function About() {
  const containerRef = useRef(null);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* --- SPLIT SCREEN LAYOUT --- */}
      <div ref={containerRef} className="relative flex flex-col lg:flex-row">
        
        {/* --- LEFT SIDE: THE STICKY VISUAL (The Man) --- */}
        <div className="lg:w-1/2 h-[60vh] lg:h-screen lg:sticky lg:top-0 relative overflow-hidden border-r border-neutral-900 z-10">
          <div className="absolute inset-0 bg-black/20 z-10" />
          
          {/* UPDATED: Original full-color image (removed grayscale classes) */}
          <img 
            src="/intro-portrait-top.webp" 
            alt="Anchor Yash Soni - Premium Event Emcee in Jaipur" 
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
          
          {/* Floating Name (Desktop) - UPDATED with Gold Texture */}
          <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
            <p className="text-white/80 text-sm uppercase tracking-[0.4em] mb-2 font-bold drop-shadow-md">
              <GoldTextureText>The Host</GoldTextureText>
            </p>
            <h1 className="text-8xl font-display font-black leading-none drop-shadow-2xl">
              <GoldTextureText>YASH <br /> SONI</GoldTextureText>
            </h1>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE SCROLLING SAGA (The Legend) --- */}
        <div className="lg:w-1/2 relative bg-[#050505]">
          
          {/* 1. INTRO: THE HERO */}
          <section className="min-h-screen flex items-center justify-center p-8 md:p-20 border-b border-neutral-900">
            <FadeIn>
              <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                The Difference Between  <br/> "Mic Holder" and a <br/>
                <GoldTextureText>Master Of Ceremonies.</GoldTextureText>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
               I am Yash Soni. For over 5 years, I haven't just hosted events—I have elevated them into unforgettable experiences. As a premium wedding emcee and corporate event anchor, I transform ordinary gatherings into seamless, high-energy celebrations.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                1100+ stages later, I’m just getting started.
              </p>
            </FadeIn>
          </section>

          {/* 2. THE STATS: SOCIAL PROOF */}
          <section className="py-20 p-8 md:p-20 border-b border-neutral-900 bg-[#080808]">
            <FadeIn>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">1100+</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Live Events</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">05+</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">70+</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Cities</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">100%</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Unscripted Energy</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* 3. THE ORIGIN STORY */}
          <section className="min-h-[60vh] flex flex-col justify-center p-8 md:p-20 border-b border-neutral-900 group hover:bg-[#0a0a0a] transition-colors duration-500">
            <span className="text-9xl font-display font-black text-neutral-900 mb-[-40px] z-0 opacity-50 group-hover:text-[#D4AF37]/10 transition-colors">01</span>
            <FadeIn>
              <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">It Started With a Spark</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10 mb-6">
                Five years ago, I picked up a microphone with a simple goal: to kill the awkward silence. What started as a hobby quickly turned into an obsession.
              </p>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10">
                While others were memorizing scripts, I was studying human behavior. I learned the hard way—dealing with bad sound systems, tough crowds, and last-minute schedule changes. I learned how to read a room instantly, understanding exactly when to crack a joke and when to let the emotion sink in.
              </p>
            </FadeIn>
          </section>

          {/* 4. THE PHILOSOPHY */}
          <section className="py-20 p-8 md:p-20 border-b border-neutral-900 bg-[#080808]">
            <FadeIn>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">My Philosophy</h3>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                I Don't "Manage" Crowds. <br/> <GoldTextureText>I Move Them.</GoldTextureText>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                There are two types of anchors in Jaipur: the ones who read poetry from a phone, and the ones who connect. I am the second type.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                My "secret sauce" isn't a fancy suit; it’s adaptability. Whether it’s a chaotic Sangeet with 500 dancing relatives or a strict Corporate Award show, I switch gears instantly. I am the calm in the chaos.
              </p>
            </FadeIn>
          </section>

          {/* 5. VENUE AUTHORITY */}
          <section className="min-h-[60vh] flex flex-col justify-center p-8 md:p-20 border-b border-neutral-900 group hover:bg-[#0a0a0a] transition-colors duration-500">
            <span className="text-9xl font-display font-black text-neutral-900 mb-[-40px] z-0 opacity-50 group-hover:text-[#D4AF37]/10 transition-colors">02</span>
            <FadeIn>
              <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">Stages I've Conquered</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10 mb-8">
                You don't trust a pilot who hasn't flown. Over the last 5 years, I’ve held the mic at some of India's most iconic venues. I know their acoustics, their layouts, and their teams.
              </p>
              
              <div className="grid gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">The Palaces</h4>
                    <p className="text-gray-500 text-sm">Rambagh Palace, Jai Mahal, City Palace Udaipur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">The Luxury Hotels</h4>
                    <p className="text-gray-500 text-sm">Fairmont Jaipur, Marriott, The Leela</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">The Corporate Hubs</h4>
                    <p className="text-gray-500 text-sm">JECC Sitapura, Birla Auditorium</p>
                  </div>
                </div>
              </div>
              <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mt-10">Know your venue is on this list? Then I already know the drill.</p>
            </FadeIn>
          </section>

          {/* 6. SIGNATURE STYLE */}
          <section className="py-20 p-8 md:p-20 border-b border-neutral-900 bg-[#080808]">
            <FadeIn>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">Signature Style</h3>
              <h2 className="text-3xl font-display font-bold text-white mb-6">No "Pass the Parcel" Here.</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                My games aren't for kids (unless it's a kids' party). I curate modern, high-energy interactions that get people off their chairs.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:border-[#D4AF37]/50 transition-colors">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Sparkles size={18} className="text-[#D4AF37]"/> For Sangeets</h4>
                  <p className="text-gray-400 text-sm">"The Couple Trivia" (Roast edition), "Dance-Offs" (Boys vs. Girls).</p>
                </div>
                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:border-[#D4AF37]/50 transition-colors">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Zap size={18} className="text-[#D4AF37]"/> For Corporates</h4>
                  <p className="text-gray-400 text-sm">"Ice-Breakers" that don't feel awkward, Rapid-fire industry quizzes.</p>
                </div>
              </div>
              <p className="text-gray-500 italic mt-6 text-sm">The Rule: No one is forced to participate, but everyone will want to.</p>
            </FadeIn>
          </section>

          {/* 7. CRISIS MANAGEMENT */}
          <section className="min-h-[60vh] flex flex-col justify-center p-8 md:p-20 border-b border-neutral-900 group hover:bg-[#0a0a0a] transition-colors duration-500">
            <span className="text-9xl font-display font-black text-neutral-900 mb-[-40px] z-0 opacity-50 group-hover:text-[#D4AF37]/10 transition-colors">03</span>
            <FadeIn>
              <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <ShieldAlert className="text-[#D4AF37]" /> Crisis Management
              </h3>
              <h4 className="text-2xl font-bold text-white mb-6 relative z-10">Scripts are Safety Nets. I Don't Use Them.</h4>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10 mb-6">
                A script can't help you when the electricity goes out or the Bride is 20 minutes late. Most anchors panic. I pivot.
              </p>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10">
                I have a mental library of 50+ filler interactions ready for these exact moments. When the unexpected happens, I don't just fill the silence; I make the audience think it was part of the plan all along.
              </p>
            </FadeIn>
          </section>

          {/* 8. THE CLOSER */}
          <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-8 md:p-20 bg-[#D4AF37] text-black">
            <Quote className="w-12 h-12 mb-6 opacity-50 text-black" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              "Your Stage, <br/> My Responsibility."
            </h2>
            <p className="text-black/80 text-xl max-w-2xl mx-auto mb-12 font-medium">
              When you hand me the mic, you aren't just hiring a vendor. You are handing over the responsibility of your reputation. I take that seriously. You enjoy the party; I'll handle the rest.
            </p>
            
            {/* Digital Signature Graphic */}
            <div className="font-handwriting text-7xl md:text-8xl opacity-80 rotate-[-5deg] mb-12 font-black tracking-tighter mix-blend-multiply text-black">
              Yash Soni
            </div>

            <Link href="/contact">
              <button className="px-12 py-5 bg-black text-white text-lg font-bold tracking-widest hover:scale-105 transition-transform shadow-2xl uppercase">
                Start The Conversation
              </button>
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
