"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, Truck, ShieldCheck, Zap, 
  Speaker, Monitor, Hammer, Radio, 
  CheckCircle, ArrowRight, ChevronDown 
} from "lucide-react";

// --- EXPANDING CARD DATA ---
const productionServices = [
  {
    id: "01",
    title: "Technical Production",
    subtitle: "Sound, Light & Visuals",
    desc: "We own the console. From JBL Line Arrays to P3 LED Walls, we ensure your event sounds crisp and looks cinematic. Zero feedback loops. Zero blackouts.",
    icon: <Speaker className="w-12 h-12 text-[#D4AF37]" />,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Fabrication & Decor",
    subtitle: "Stage & Structures",
    desc: "Custom carpentry and metalwork. We build 60ft stages, massive entry arches, and intricate photobooths that can withstand the weather and the crowd.",
    icon: <Hammer className="w-12 h-12 text-[#D4AF37]" />,
    image: "https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Logistics & Fleet",
    subtitle: "Transport & Movement",
    desc: "Moving 500 guests and 5 trucks of gear requires military precision. We manage the fleet, the loading docks, and the parking logic.",
    icon: <Truck className="w-12 h-12 text-[#D4AF37]" />,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Artist Management",
    subtitle: "Hospitality & Tech Rider",
    desc: "We bridge the gap between the Star and the Stage. Green rooms, technical riders, and secure entry/exit routes for celebrity performers.",
    icon: <Settings className="w-12 h-12 text-[#D4AF37]" />,
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function EventManagementPro() {
  const [activeCard, setActiveCard] = useState("01");

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- 1. HERO: INDUSTRIAL GRANDEUR --- */}
      <section className="relative h-screen flex flex-col justify-center px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/50"></div>
        
        <div className="relative z-10 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
               <Settings className="w-6 h-6 text-[#D4AF37] animate-spin-slow" />
               <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">Production House</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.9] text-white mb-8">
              ENGINEERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8a6e1c]">PERFECTION.</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 border-l-2 border-[#D4AF37] pl-6">
              Events are not just "managed." They are <strong>built.</strong> <br />
              We provide the backbone of steel, sound, and logistics that allows the magic to happen.
            </p>
            
            <div className="flex gap-6">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
                  Deploy Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE EXPANDING CARDS (New Layout) --- */}
      <section className="hidden lg:flex h-[800px] w-full bg-[#050505] overflow-hidden">
        {productionServices.map((service) => (
          <motion.div 
            key={service.id}
            onClick={() => setActiveCard(service.id)}
            className={`relative h-full border-r border-white/10 cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0
              ${activeCard === service.id ? "w-[50%]" : "w-[16.66%]"}
            `}
          >
            {/* Background Image (Visible only when active) */}
            <div className="absolute inset-0">
               <img 
                 src={service.image} 
                 alt={service.title} 
                 className={`w-full h-full object-cover transition-all duration-700 grayscale ${activeCard === service.id ? "opacity-40 grayscale-0" : "opacity-20"}`} 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Vertical Text (When Inactive) */}
            {activeCard !== service.id && (
               <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-500 uppercase tracking-widest -rotate-90 whitespace-nowrap">
                     {service.title}
                  </h3>
                  <div className="absolute bottom-10 text-[#D4AF37] font-black text-4xl opacity-50">{service.id}</div>
               </div>
            )}

            {/* Content (When Active) */}
            <AnimatePresence>
              {activeCard === service.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 p-16 w-full z-10"
                >
                   <div className="text-[#D4AF37] mb-6">{service.icon}</div>
                   <span className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2 block">{service.subtitle}</span>
                   <h2 className="text-6xl font-display font-black text-white mb-6 leading-none">{service.title}</h2>
                   <p className="text-xl text-gray-300 max-w-lg leading-relaxed">{service.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* --- Mobile View for Services (Since expanding cards don't work well on mobile) --- */}
      <section className="lg:hidden py-20 px-4">
         {productionServices.map((service) => (
            <div key={service.id} className="mb-8 bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
               <div className="h-64 overflow-hidden relative">
                  <img src={service.image} className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                     <span className="text-6xl font-black text-white/10">{service.id}</span>
                  </div>
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4">{service.subtitle}</p>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
               </div>
            </div>
         ))}
      </section>

      {/* --- 3. THE TECH ARSENAL (Grid) --- */}
      <section className="py-32 container mx-auto px-4">
         <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold">The Hardware.</h2>
            <p className="text-gray-500 mt-4">We don't rent mediocrity. We deploy industry-standard gear.</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <TechItem label="JBL Vertec / RCF" sub="Line Array Audio" />
            <TechItem label="DiGiCo / Yamaha" sub="Digital Consoles" />
            <TechItem label="P3 LED Walls" sub="4K Visuals" />
            <TechItem label="Watchout Server" sub="Visual Mapping" />
            <TechItem label="Sharpy / Beam" sub="Intelligent Lights" />
            <TechItem label="GrandMA2" sub="Lighting Console" />
            <TechItem label="62.5 kVA Genset" sub="Silent Power" />
            <TechItem label="Trussing" sub="Certified Rigging" />
         </div>
      </section>

      {/* --- 4. THE PROTOCOL (Process) --- */}
      <section className="py-24 bg-[#111] border-y border-white/5">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">The "Zero Error" Protocol.</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Production is binary. It works, or it fails. <br />
                     Because I am an Anchor first, I know the pain of a mic drop or a feedback loop. My team operates on a military-grade checklist to ensure 100% uptime.
                  </p>
                  <ul className="space-y-4">
                     <CheckItem text="Double-redundancy on all Microphones." />
                     <CheckItem text="Dedicated Genset for Sound (Isolated Earth)." />
                     <CheckItem text="3D Stage Renders approved before fabrication." />
                     <CheckItem text="Safety-First Rigging for overhead LEDs." />
                  </ul>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <StatCard num="2m" label="Response Time" />
                  <StatCard num="100%" label="Safety Record" />
                  <StatCard num="50+" label="Team Strength" />
                  <StatCard num="0" label="Blackouts" />
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. CTA FOOTER --- */}
      <section className="py-32 relative overflow-hidden bg-white text-black text-center">
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8">READY TO EXECUTE?</h2>
            <p className="text-gray-600 mb-10 text-xl max-w-2xl mx-auto font-medium">
               Don't risk your reputation with amateur gear. <br /> Hire the team that understands the stage.
            </p>
            <Link href="/contact">
               <button className="px-14 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                  Check Availability
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const TechItem = ({ label, sub }) => (
   <div className="bg-[#050505] p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a1a1a] transition-colors">
      <h4 className="text-white font-bold text-lg group-hover:text-[#D4AF37] transition-colors">{label}</h4>
      <p className="text-gray-600 text-xs uppercase tracking-widest mt-2">{sub}</p>
   </div>
);

const CheckItem = ({ text }) => (
   <li className="flex items-start gap-4">
      <CheckCircle className="w-6 h-6 text-[#D4AF37] shrink-0" />
      <span className="text-gray-300">{text}</span>
   </li>
);

const StatCard = ({ num, label }) => (
   <div className="bg-black border border-white/10 p-6 text-center">
      <div className="text-3xl font-black text-white mb-1">{num}</div>
      <div className="text-[#D4AF37] text-[10px] uppercase tracking-widest">{label}</div>
   </div>
);
