"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Palette, PenTool, Image as ImageIcon, Lightbulb, 
  Layers, ChevronRight, Wand2, Compass, Flower2,
  MousePointer2, ArrowDown, Ruler, Focus, 
  Maximize, Trees, Zap, Phone, MessageCircle
} from "lucide-react";

// --- DATA: TECHNICAL SPECS & DESIGN LAYERS ---
const designManifesto = [
  {
    title: "Cinematic Alignment",
    desc: "As an Anchor-led studio, we design for the lens first. We ensure every Mandap and Stage is framed for 4K cinematography, eliminating dead-zones and optimizing background depth.",
    icon: <Focus />
  },
  {
    title: "Material Sourcing",
    desc: "We don't use standard rentals. We source raw silks from Sanganer, hand-carved wood from local artisans, and international blooms flown in for 24-hour freshness.",
    icon: <Maximize />
  },
  {
    title: "Lighting Architecture",
    desc: "We treat light as a structural element. Our 'Atmospheric Mapping' shifts the venue vibe from a warm 2700K during dinner to a vibrant, intelligently-coded party mode.",
    icon: <Zap />
  }
];

const designProcess = [
  {
    step: "01",
    label: "Site Recce & CAD Mapping",
    detail: "We perform a 360° laser scan of your venue to identify structural strengths and spatial constraints before a single sketch is made."
  },
  {
    step: "02",
    label: "Theme Blueprinting",
    detail: "Conceptualizing narratives—be it 'Contemporary Heritage' or 'Minimalist Glamour'—using color theory and cultural symbolism."
  },
  {
    step: "03",
    label: "3D Photorealistic Rendering",
    detail: "High-fidelity digital previews including lighting simulations, allowing you to walk through your venue virtually months in advance."
  },
  {
    step: "04",
    label: "On-Site Fabrication",
    detail: "Our proprietary team of craftsmen builds bespoke furniture and structures that cannot be found in any rental catalog."
  }
];

const materialLibrary = [
  { title: "Luxe Textiles", items: ["Raw Silk", "Velvet Scapes", "Hand-Dyed Organza"] },
  { title: "Botanical Design", items: ["Exotic Proteas", "Local Marigold Fusion", "Preserved Foliage"] },
  { title: "Industrial Elements", items: ["Gold-Finish Trussing", "Acrylic Platforms", "Mirror Floorings"] }
];

export default function EventDesigningMega() {
  return (
    <div className="bg-[#050505] text-white selection:bg-purple-600">
      
      {/* 1. THE ARCHIVE HERO */}
      <section className="relative h-screen flex flex-col justify-end p-6 md:p-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0201b28?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-30 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        
        <div className="relative z-10 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-purple-500"></div>
               <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-xs">Yash Soni Design Studio</span>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-display font-black leading-none mb-10 tracking-tighter">
              BEYOND <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-300 to-white italic">DECOR.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-white/10 pt-10">
               <p className="max-w-xl text-xl text-gray-400 font-light leading-relaxed">
                  We engineer visual narratives. Our design methodology bridges the gap between traditional Rajasthani grandeur and contemporary architectural minimalism.
               </p>
               <div className="flex gap-6">
                 <Link href="/contact">
                   <button className="px-12 py-6 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all">
                     Initiate Design
                   </button>
                 </Link>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MANIFESTO (DATA HEAVY) */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid lg:grid-cols-3 gap-12">
            {designManifesto.map((item, i) => (
               <div key={i} className="p-10 bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="text-purple-500 mb-8 scale-150 origin-left group-hover:translate-x-4 transition-transform">
                     {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 3. THE ARCHITECTURAL JOURNEY (VERTICAL DATA) */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
         <div className="container mx-auto px-6">
            <div className="mb-20">
               <span className="text-purple-500 font-bold tracking-widest uppercase text-xs">The Methodology</span>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white mt-4">The Precision Cycle.</h2>
            </div>

            <div className="space-y-px bg-white/5 border border-white/5">
               {designProcess.map((step, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-8 p-12 bg-[#050505] hover:bg-[#0a0a0a] transition-all group">
                     <div className="text-6xl font-black text-white/5 group-hover:text-purple-500/20 transition-colors">
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

      {/* 4. THE MATERIALITY LIBRARY (BENTO GRID) */}
      <section className="py-32 container mx-auto px-6">
         <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white">The Materiality Library.</h2>
            <p className="text-gray-500 mt-4 italic">Bespoke sourcing for unique identities.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {materialLibrary.map((lib, i) => (
               <div key={i} className="p-12 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-purple-400 mb-8 uppercase tracking-[0.2em]">{lib.title}</h3>
                  <ul className="space-y-4">
                     {lib.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-400">
                           <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </section>

      {/* 5. AUTHORITY TICKER: THE VENUES */}
      <section className="py-20 bg-white text-black overflow-hidden whitespace-nowrap border-y border-black">
         <div className="flex animate-marquee gap-20 items-center">
            <VenueName name="Fairmont Jaipur" />
            <VenueName name="Rambagh Palace" />
            <VenueName name="City Palace" />
            <VenueName name="Mundota Fort" />
            <VenueName name="Jai Mahal Palace" />
            <VenueName name="Le Meridien" />
            <VenueName name="The Leela Palace" />
            {/* Repeat for loop */}
            <VenueName name="Fairmont Jaipur" />
            <VenueName name="Rambagh Palace" />
            <VenueName name="City Palace" />
         </div>
      </section>

      {/* 6. FINAL CALL TO ART */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-9xl font-display font-black mb-10 text-white">DESIGN <br/> <span className="italic">WITHOUT LIMITS.</span></h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light">
             Stop settling for standard decor. Let's create a signature identity for your event.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="px-14 py-6 bg-purple-600 text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_50px_rgba(147,51,234,0.3)]">
                Request a Design Recce
              </button>
            </Link>
            <a href="tel:+917737877978" className="px-14 py-6 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Call Studio
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

const VenueName = ({ name }) => (
   <span className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter">
      {name} <span className="text-purple-600 mx-4">•</span>
   </span>
);
