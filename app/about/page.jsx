"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Mic, Sparkles, Quote, MapPin, Calendar, Briefcase, Zap, Globe } from "lucide-react";

// --- 1. LUXURY TEXTURE ASSETS ---
// Removed TypeScript types here
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

// --- 2. ANIMATION HELPERS ---
// Removed ": any" here
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
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img 
            src="/anchor-portrait.webp" 
            alt="Anchor Yash Soni" 
            className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          {/* Floating Name (Desktop) */}
          <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
            <p className="text-white/60 text-sm uppercase tracking-[0.4em] mb-2">The Host</p>
            <h1 className="text-8xl font-display font-black leading-none text-white mix-blend-difference opacity-90">
              YASH <br /> SONI
            </h1>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE SCROLLING SAGA (The Legend) --- */}
        <div className="lg:w-1/2 relative bg-[#050505]">
          
          {/* 1. INTRO: THE HOOK */}
          <section className="min-h-screen flex items-center justify-center p-8 md:p-20 border-b border-neutral-900">
            <FadeIn>
              <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> About Me
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Not Just a Host. <br /> An <GoldTextureText>Experience.</GoldTextureText>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                Anyone can hold a microphone. My job isn't just to speak; it's to sense the room's heartbeat and sync it with the event's flow.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                From the royal corridors of <strong>Jaipur</strong> to high-stakes corporate boardrooms, I bring a blend of **wit, warmth, and command** that turns a scheduled timeline into a seamless memory.
              </p>
            </FadeIn>
          </section>

          {/* 2. THE STATS: HARD PROOF */}
          <section className="py-20 p-8 md:p-20 border-b border-neutral-900 bg-[#080808]">
            <FadeIn>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">1100+</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Events Hosted</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">05+</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Years Active</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">50+</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Cities Covered</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-white mb-2">100%</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Client Return Rate</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* 3. CHAPTER 1: THE SPARK */}
          <section className="min-h-[60vh] flex flex-col justify-center p-8 md:p-20 border-b border-neutral-900 group hover:bg-[#0a0a0a] transition-colors duration-500">
            <span className="text-9xl font-display font-black text-neutral-900 mb-[-40px] z-0 opacity-50 group-hover:text-[#D4AF37]/10 transition-colors">01</span>
            <FadeIn>
              <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">The Spark</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10">
                It started in 2019. Not on a grand stage, but with a simple realization: **People don't remember what you said, they remember how you made them feel.** </p>
              <p className="text-gray-400 leading-relaxed font-light text-lg mt-4 relative z-10">
                I obsessed over the craft. I studied stand-up comedy to master timing. I studied psychology to understand crowds. I didn't want to be a "filler" between performances; I wanted to be the glue that held the night together.
              </p>
            </FadeIn>
          </section>

          {/* 4. THE SIGNATURE STYLE */}
          <section className="py-20 p-8 md:p-20 border-b border-neutral-900 bg-[#080808]">
            <FadeIn>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">My Signature Style</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Unscripted Wit</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">I hate cue cards. I read the room, roast the groom's best friend, and create moments that feel spontaneous, not rehearsed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">High Voltage Energy</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Whether it's 2 PM or 2 AM, my energy level stays at a 10. I am the coffee for your event.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Corporate Elegance</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">I know when to switch from "Party Mode" to "Professional Mode." Seamless transitions for Awards, Summits, and R&R.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* 5. CHAPTER 2: THE ASCENT */}
          <section className="min-h-[60vh] flex flex-col justify-center p-8 md:p-20 border-b border-neutral-900 group hover:bg-[#0a0a0a] transition-colors duration-500">
            <span className="text-9xl font-display font-black text-neutral-900 mb-[-40px] z-0 opacity-50 group-hover:text-[#D4AF37]/10 transition-colors">02</span>
            <FadeIn>
              <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">The Ascent</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10">
                By 2022, the calendar was full. Crossing the **500+ event mark** wasn't just a number; it was 500 different audiences, 500 unexpected technical glitches handled with a smile, and 500 families trusting me with their biggest days.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                {["Weddings", "Corporate", "Sangeet", "Launches", "Concerts"].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-neutral-800 rounded-full text-xs text-gray-500 uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* 6. EDITORIAL REVIEW (Visual Break) */}
          <section className="py-32 p-8 md:p-20 border-b border-neutral-900 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
            <FadeIn>
              <Quote className="w-12 h-12 text-[#D4AF37] mb-8" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-8">
                "We have hired many anchors before, but Yash brings a different class. He doesn't just speak; he commands the room."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-full overflow-hidden flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <div>
                  <p className="text-white font-bold">Rajesh Gupta</p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest">CEO, TechStreams</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* 7. CHAPTER 3: THE STANDARD */}
          <section className="min-h-[60vh] flex flex-col justify-center p-8 md:p-20 border-b border-neutral-900 group hover:bg-[#0a0a0a] transition-colors duration-500">
            <span className="text-9xl font-display font-black text-neutral-900 mb-[-40px] z-0 opacity-50 group-hover:text-[#D4AF37]/10 transition-colors">03</span>
            <FadeIn>
              <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">The Standard</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg relative z-10">
                Today, with **1100+ events** across India, my philosophy has evolved. It's no longer about proving I can hold a stage. It's about **elevating** it. 
              </p>
              <p className="text-gray-400 leading-relaxed font-light text-lg mt-4 relative z-10">
                I work with brands and families who refuse to settle for "average." When you book Anchor Yash Soni, you aren't booking a vendor. You are booking insurance against boredom.
              </p>
            </FadeIn>
          </section>

          {/* 8. SIGNATURE SIGN OFF */}
          <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-8 md:p-20 bg-[#D4AF37] text-black">
            <Quote className="w-12 h-12 mb-6 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              "Your stage is waiting. <br/> Let's make it legendary."
            </h2>
            
            {/* Digital Signature Graphic */}
            <div className="font-handwriting text-7xl md:text-8xl opacity-80 rotate-[-5deg] mb-12 font-black tracking-tighter mix-blend-multiply">
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
