"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ClipboardList, Users, Clock, CheckCircle, 
  ArrowRight, FileText, PieChart, Calendar, 
  PenTool, Gem, ChevronDown, ShieldCheck, Mic2 
} from "lucide-react";

// --- GOLD TEXTURE COMPONENT ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", // Ensure this image exists in /public
      backgroundColor: "#FFD700", 
    }}
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
      <p className="text-[#FFD700] text-xs uppercase tracking-[0.3em] mb-4 font-bold flex items-center gap-2 justify-center md:justify-start">
        {align === "center" && <span className="w-8 h-[1px] bg-[#FFD700]"></span>}
        <Gem className="w-3 h-3 text-[#FFD700]" />
        {subtitle}
        {align !== "center" && <span className="w-12 h-[1px] bg-[#FFD700]"></span>}
        {align === "center" && <span className="w-8 h-[1px] bg-[#FFD700]"></span>}
      </p>
      <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

export default function WeddingPlanning() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#FFD700] selection:text-black">
      
      {/* --- 1. HERO: THE INSIDER'S PROMISE --- */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background: Aspirational Wedding Setup */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0201b28?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-50 animate-slow-zoom" 
            alt="Luxury Wedding Planning Jaipur"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-[#FFD700]/50 px-6 py-2 rounded-full bg-[#FFD700]/10 backdrop-blur-xl mb-8">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm uppercase tracking-[0.2em] font-bold">
                The "Zero Commission" Approach
              </span>
            </div>

            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.9] mb-8">
              Your Vision. <br /> <GoldTextureText>My Network.</GoldTextureText>
            </h1>
            
            <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl mb-12 border-l-4 border-[#FFD700] pl-8">
              Stop paying inflated "Planner Rates." <br />
              Leverage my direct access to Jaipur's best vendors for a flawless, transparent wedding.
            </p>
            
            <Link href="/contact">
              <button className="px-12 py-5 bg-[#FFD700] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Get A Transparent Quote
              </button>
            </Link>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE PIVOT: WHY HIRE AN ANCHOR TO PLAN? --- */}
      <section className="py-32 container mx-auto px-4 border-b border-[#FFD700]/20">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
               <SectionHeading subtitle="The Honest Truth" title="The Anchor's Advantage." />
               <p className="text-gray-200 text-xl leading-relaxed mb-8 font-light">
                  I've stood on 1000+ stages. I've seen decorators arrive late. I've tasted cold food. I know exactly <strong className="text-[#FFD700]">who delivers</strong> and who just talks.
               </p>
               <div className="bg-[#111] p-10 rounded-3xl border border-[#FFD700]/30 shadow-2xl">
                  <h4 className="text-2xl font-display font-bold text-white mb-6">My "Insider" Guarantee:</h4>
                  <ul className="space-y-6">
                     <ListItem text="Direct Vendor Access: No middlemen. You get the industry rate." />
                     <ListItem text="The 'Real' Vendor List: I only work with teams I've seen perform live." />
                     <ListItem text="Flawless Flow: My anchoring experience means your itinerary is perfectly timed." />
                  </ul>
               </div>
            </div>
            {/* Image: You on stage, looking in control of a massive setup */}
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden order-1 md:order-2 border border-[#FFD700]/30">
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" className="w-full h-full object-cover contrast-110" alt="Yash Soni Event Expertise" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-[#FFD700]/50">
                  <p className="text-[#FFD700] text-2xl font-display font-bold">"I don't just host. I oversee."</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- 3. THE BLUEPRINT (4-Stage Process) --- */}
      <section className="py-32 bg-[#0a0a0a]">
         <div className="container mx-auto px-4">
            <SectionHeading subtitle="The Roadmap" title="How We Build It." align="center" />
            
            <div className="relative mt-24 max-w-5xl mx-auto">
               {/* Central Gold Line */}
               <div className="absolute left-8 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#FFD700] via-[#FFD700]/50 to-transparent md:-translate-x-1/2"></div>
               
               <TimelineItem 
                  step="01" 
                  title="The Vision & Budget Lock" 
                  desc="We sit down. You dump your Pinterest board on me. We put a realistic price tag on your dreams and define the non-negotiables." 
                  align="left" 
                  icon={<PenTool />}
               />
               <TimelineItem 
                  step="02" 
                  title="The Vendor Audit" 
                  desc="I open my contact book. I get quotes from my trusted network of Tent Houses, Florists, and Caterers. No inflated tourist pricing." 
                  align="right" 
                  icon={<Users />}
               />
               <TimelineItem 
                  step="03" 
                  title="The 'Run-of-Show' Design" 
                  desc="This is my forte. Using my stage experience, I design a minute-by-minute flow that ensures high energy and zero awkward delays." 
                  align="left" 
                  icon={<Clock />}
               />
               <TimelineItem 
                  step="04" 
                  title="On-Ground Execution" 
                  desc="My production team handles the backend (light, sound, logistics) while I handle the front-end (hosting and guest experience)." 
                  align="right" 
                  icon={<CheckCircle />}
               />
            </div>
         </div>
      </section>

      {/* --- 4. THE VENDOR ECOSYSTEM (Your Real Power) --- */}
      <section className="py-32 container mx-auto px-4">
         <SectionHeading subtitle="My Network" title="Access The Best." />
         <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            I don't own these services. I curate them. My relationships ensure you get priority service and honest pricing.
         </p>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <VendorCard title="Decor & Production" icon={<Gem />} desc="Access to Jaipur's top tent houses and floral designers who build massive sets." bgImage="https://images.unsplash.com/photo-1478146896981-b8084c62608f?w=800&q=80" />
             <VendorCard title="Catering & Bar" icon={<PieChart />} desc="Curating menus with the city's best caterers and high-end bar setups." bgImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" />
             <VendorCard title="Logistics & Stay" icon={<ClipboardList />} desc="Managing room blocks, airport transfers, and guest hospitality desks." bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" />
             <VendorCard title="Entertainment" icon={<Mic2 />} desc="Direct booking of DJs, Bands, Folk Artists, and Celebrity performers." bgImage="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80" />
         </div>
      </section>

      {/* --- 5. VISUALIZING THE DREAM (Moodboard Section) --- */}
      <section className="py-32 bg-[#080808] border-y border-[#FFD700]/20">
          <div className="container mx-auto px-4 text-center">
              <SectionHeading subtitle="Concept to Reality" title="We Visualize. Then We Build." align="center" />
              <p className="text-gray-400 mb-12">We use 3D renders and detailed moodboards to align on the vision before a single rupee is spent.</p>
              
              {/* A grid that looks like a Pinterest board / 3D render showcase */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] p-4 bg-[#111] rounded-3xl border border-[#FFD700]/30 relative">
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                      <p className="text-3xl md:text-5xl font-display font-bold text-white/20 uppercase tracking-widest rotate-12">From Sketch To Stage</p>
                  </div>
                  <MoodboardImage img="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=800&q=80" span="col-span-2 row-span-2" label="Mandap Concept" />
                  <MoodboardImage img="https://images.unsplash.com/photo-1519225421980-715cb0201b28?w=800&q=80" label="Table Setting" />
                  <MoodboardImage img="https://images.unsplash.com/photo-1561344640-2453889cde5b?w=800&q=80" label="Floral Design" />
                  <MoodboardImage img="https://images.unsplash.com/photo-1469371670807-013ccf25f164?w=800&q=80" span="col-span-2" label="Sangeet Stage Render" />
              </div>
          </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 text-center relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8"><GoldTextureText>Honest</GoldTextureText> Planning.</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-xl font-light">
               Let's discuss your wedding over coffee. No sales pitch. Just a transparent discussion about costs and concepts.
            </p>
            <Link href="/contact">
               <button className="px-14 py-6 bg-[#FFD700] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl text-lg">
                  Schedule Consultation
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const ListItem = ({ text }) => (
  <div className="flex gap-4 items-start group">
     <CheckCircle className="w-6 h-6 text-[#FFD700] shrink-0 group-hover:scale-110 transition-transform" />
     <span className="text-gray-300 text-lg font-light">{text}</span>
  </div>
);

const TimelineItem = ({ step, title, desc, align, icon }) => (
  <div className={`flex flex-col md:flex-row gap-10 mb-24 relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Center Icon */}
      <div className="absolute left-8 md:left-1/2 top-0 w-16 h-16 bg-[#0a0a0a] border-2 border-[#FFD700] rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center text-[#FFD700] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          {icon}
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${align === 'right' ? 'md:text-left md:pr-24' : 'md:text-right md:pl-24'}`}>
         <span className="text-[#FFD700] font-bold uppercase tracking-widest text-sm mb-3 block">Step {step}</span>
         <h3 className="text-3xl font-display font-bold text-white mb-4">{title}</h3>
         <p className="text-gray-400 text-lg leading-relaxed font-light">{desc}</p>
      </div>
      <div className="w-full md:w-1/2 hidden md:block"></div>
  </div>
);

const VendorCard = ({ title, icon, desc, bgImage }) => (
  <div className="relative h-96 rounded-3xl overflow-hidden group border border-[#FFD700]/30 transition-all hover:scale-[1.02] hover:border-[#FFD700]">
     <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
     <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
     
     <div className="absolute bottom-0 left-0 p-8">
        <div className="mb-4 text-[#FFD700] w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-[#FFD700]/50">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed font-light">{desc}</p>
     </div>
  </div>
);

const MoodboardImage = ({ img, span = "", label }) => (
    <div className={`relative group overflow-hidden rounded-2xl border border-[#FFD700]/20 ${span}`}>
        <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
        <div className="absolute bottom-4 left-4">
            <p className="text-white/80 text-xs uppercase tracking-widest font-bold group-hover:text-[#FFD700] transition-colors">{label}</p>
        </div>
    </div>
);
