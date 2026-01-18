"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mic2, Music, UserCheck, Star, Headphones, 
  Guitar, Users, Zap, CheckCircle, ChevronDown, 
  Ticket, Play, Radio, ShieldAlert, Heart, Phone, MessageCircle
} from "lucide-react";

// --- DATA: TALENT CATEGORIES & LOGISTICS ---
const talentRoster = [
  {
    title: "Playback & Reality Stars",
    desc: "Direct coordination with Bollywood playback singers and finalists from Indian Idol, SaReGaMaPa, and The Voice. We handle the complex contract riders so you don't have to.",
    icon: <Mic2 />
  },
  {
    title: "Indie & Fusion Bands",
    desc: "From high-octane Rock and Retro-Bollywood bands to soulful Sufi ensembles. We curate the lineup based on the specific acoustics of your Jaipur venue.",
    icon: <Guitar />
  },
  {
    title: "Electronic & Percussion",
    desc: "Premium Club DJs paired with Live Dhol, Electric Violins, or LED Drummers. We engineer the 'After-Party' vibe with seamless transitions.",
    icon: <Headphones />
  }
];

const managementProtocol = [
  {
    step: "01",
    label: "Rider Negotiation",
    detail: "We audit the artist's Technical (Sound/Light) and Hospitality (Stay/F&B) riders to eliminate unnecessary 'inflated' requirements, saving you significant costs."
  },
  {
    step: "02",
    label: "Logistical Stealth",
    detail: "Managing airport 'Gate-to-Car' transfers, shadow security, and private check-ins at Jaipur's luxury hotels to ensure the artist is rested and ready."
  },
  {
    step: "03",
    label: "Sound Check & Rehearsal",
    detail: "As an Anchor-led team, we supervise the 3-hour technical sound check. We ensure the monitor mix and stage levels are perfect before the artist arrives."
  },
  {
    step: "04",
    label: "Stage Entry & Hype",
    detail: "We coordinate the precise moment of entry—managing the V-Launch, pyrotechnics, and the 'Intro-Voiceover' to ensure maximum crowd impact."
  }
];

const technicalExpertise = [
  { title: "Sound Audit", items: ["Line Array Calibration", "Monitor Mix Management", "RF Frequency Coordination"] },
  { title: "Hospitality", items: ["Green Room Curation", "Specific F&B Riders", "Artist Liaison Officers"] },
  { title: "Security", items: ["Crowd Control Barriers", "Stage Protection", "VIP Transit Routes"] }
];

export default function ArtistManagementMega() {
  return (
    <div className="bg-[#050505] text-white selection:bg-red-600">
      
      {/* 1. THE MARQUEE HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459749411177-3c9694d93605?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        
        <div className="relative z-10 w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="flex justify-center items-center gap-4 mb-8">
               <div className="w-8 h-8 rounded-full bg-red-600 animate-pulse"></div>
               <span className="text-red-500 font-bold tracking-[0.5em] uppercase text-xs">Direct Talent Access • Jaipur</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] mb-10 tracking-tighter">
              THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-white">TALENT.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
              Skip the middleman. We provide direct-to-manager access for India’s premier artists, ensuring transparency, technical excellence, and zero markup.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/contact">
                <button className="px-12 py-6 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                  Request Roster
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ROSTER MATRIX (DATA HEAVY) */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid lg:grid-cols-3 gap-12">
            {talentRoster.map((item, i) => (
               <div key={i} className="p-12 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group relative overflow-hidden">
                  <div className="text-red-600 mb-8 scale-[2] origin-left group-hover:translate-x-4 transition-transform">
                     {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                  <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl font-black italic">TALENT</div>
               </div>
            ))}
         </div>
      </section>

      {/* 3. THE PROTOCOL (VERTICAL PROCESS) */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
         <div className="container mx-auto px-6">
            <div className="mb-20">
               <span className="text-red-500 font-bold tracking-widest uppercase text-xs">The Backstage Blueprint</span>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white mt-4">Zero Friction Management.</h2>
            </div>

            <div className="space-y-px bg-white/5 border border-white/5">
               {managementProtocol.map((step, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-8 p-12 bg-[#050505] hover:bg-[#0a0a0a] transition-all group">
                     <div className="text-6xl font-black text-white/5 group-hover:text-red-600/20 transition-colors">
                        {step.step}
                     </div>
                     <div className="text-2xl font-bold text-white uppercase tracking-widest">
                        {step.label}
                     </div>
                     <div className="text-gray-500 font-light leading-relaxed">
                        {step.detail}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. THE TECH RIDER LIBRARY (BENTO GRID) */}
      <section className="py-32 container mx-auto px-6">
         <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white">The Tech Rider Audit.</h2>
            <p className="text-gray-500 mt-4 italic">Ensuring studio-quality performance on a live stage.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {technicalExpertise.map((lib, i) => (
               <div key={i} className="p-12 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-red-500 mb-8 uppercase tracking-[0.2em]">{lib.title}</h3>
                  <ul className="space-y-4">
                     {lib.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-400">
                           <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </section>

      {/* 5. THE TALENT TICKER */}
      <section className="py-20 bg-red-600 text-white overflow-hidden whitespace-nowrap border-y border-black">
         <div className="flex animate-marquee gap-20 items-center">
            <ArtistName name="Bollywood Playback" />
            <ArtistName name="Sufi Ensembles" />
            <ArtistName name="Reality Show Stars" />
            <ArtistName name="International Aerialists" />
            <ArtistName name="Folk Legends" />
            <ArtistName name="EDM Percussionists" />
            <ArtistName name="Celebrity Emcees" />
            {/* Repeat for loop */}
            <ArtistName name="Bollywood Playback" />
            <ArtistName name="Sufi Ensembles" />
         </div>
      </section>

      {/* 6. FINAL CALL TO HYPE */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-9xl font-display font-black mb-10 text-white uppercase italic">The Show <br/> <span className="text-red-600">Starts Here.</span></h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
             Don't let a bad sound check or a late artist ruin your night. Hire the team that speaks the language of the stage.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="px-14 py-6 bg-red-600 text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                Book Artist Roster
              </button>
            </Link>
            <a href="tel:+917737877978" className="px-14 py-6 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Talent Hotline
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

const ArtistName = ({ name }) => (
   <span className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter">
      {name} <span className="text-black mx-4">•</span>
   </span>
);
