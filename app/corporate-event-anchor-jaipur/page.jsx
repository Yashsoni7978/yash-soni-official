"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, Briefcase, Award, TrendingUp, Users, ArrowRight, 
  CheckCircle, Building2, Globe, ChevronDown, FileText, 
  MonitorPlay, Calendar, MapPin, Instagram, Youtube, Minus, Plus 
} from "lucide-react";

// --- REUSABLE COMPONENTS ---
const TextureText = ({ children, className }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 ${className}`}>
    {children}
  </span>
);

const SectionHeading = ({ subtitle, title, align = "left", dark = false }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-blue-500 text-xs uppercase tracking-[0.3em] mb-4 font-bold flex items-center gap-3 justify-center md:justify-start">
        {align === "center" && <span className="w-8 h-[1px] bg-blue-500"></span>}
        {subtitle}
        {align !== "center" && <span className="w-12 h-[1px] bg-blue-500"></span>}
        {align === "center" && <span className="w-8 h-[1px] bg-blue-500"></span>}
      </p>
      <h2 className={`text-4xl md:text-6xl font-display font-black leading-tight ${dark ? 'text-black' : 'text-white'}`}>
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- FAQ COMPONENT (Adapted to Blue Corporate Theme) ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen 
          ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-[15px] pr-4 transition-colors ${
          isOpen ? "text-blue-400" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-blue-500 text-white" : "bg-transparent border border-white/30 text-white group-hover:border-blue-500 group-hover:text-blue-500"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-blue-500/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CorporateAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* --- 1. CORPORATE HERO SECTION --- */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background - Professional/Stage Vibe */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-blue-900/10 z-10" />
          <img 
            src="/service-corporate.webp" 
            className="w-full h-full object-cover opacity-50 grayscale" 
            alt="Corporate Event Anchor Jaipur"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 mt-20">
          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              
              <div className="inline-flex items-center gap-2 border border-blue-500/30 px-5 py-2 rounded-full bg-blue-900/10 backdrop-blur-md mb-8">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-xs uppercase tracking-[0.2em] font-bold">
                  Corporate & Business Events
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 tracking-tight">
                Command <br /> <TextureText>The Room.</TextureText>
              </h1>
              
              <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mb-12 border-l-4 border-blue-600 pl-8">
                When the CEO speaks, the audience should listen. <br />
                I bridge the gap between your brand's message and the audience's attention span.
              </p>
              
              {/* UPDATED BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact">
                  <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Book Now
                  </button>
                </Link>
                <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer">
                  <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-full flex items-center justify-center gap-3 w-full sm:w-auto">
                     <Instagram className="w-4 h-4" /> Instagram
                  </button>
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. THE "WHY ME" SECTION (Stats & Authority) --- */}
      {/* Fake Marquee section completely removed! */}
      <section className="py-32 container mx-auto px-4 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <SectionHeading subtitle="The ROI" title="Precision. Authority. Engagement." />
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 Corporate events are not about "shouting into a mic." They are about <strong className="text-white">Brand Representation</strong>.
              </p>
              <div className="space-y-8">
                 <CheckItem title="Brand Guardian" desc="I represent your brand on stage. I dress the part (Tuxedos/Suits), speak the language, and adhere to your company guidelines strictly." />
                 <CheckItem title="Crisis Management" desc="Mic failure? Keynote speaker late? I fill the dead air seamlessly with intelligent engagement so the audience never notices a glitch." />
                 <CheckItem title="Audience Retention" desc="I use sharp wit and interactive segments to keep the energy high during long conferences, ensuring your message actually lands." />
              </div>
           </div>
           
           {/* Stats Grid */}
           <div className="grid grid-cols-2 gap-4">
              <StatCard num="500+" label="Corporate Shows" />
              <StatCard num="50+" label="Brands Served" />
              <StatCard num="100%" label="English Fluency" />
              <StatCard num="05+" label="Years Experience" />
           </div>
        </div>
      </section>

      {/* --- 3. VIDEO SHOWCASE (Dark Cinema) --- */}
      <section className="py-24 bg-[#080808] border-y border-neutral-900">
         <div className="container mx-auto px-4 text-center">
            <SectionHeading subtitle="Watch The Reel" title="In Action." align="center" />
         </div>
         
         <div className="container mx-auto px-4 mt-10">
            <div className="relative aspect-video w-full max-w-5xl mx-auto bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group cursor-pointer hover:border-blue-500/50 transition-colors duration-500">
               <img src="/gallery-5.webp" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700" alt="Showreel Cover" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                     <MonitorPlay className="w-8 h-8 text-white fill-current" />
                  </div>
               </div>
               <div className="absolute bottom-8 left-8">
                  <p className="text-white font-bold text-xl md:text-2xl">Corporate Showreel 2025</p>
                  <p className="text-blue-400 text-xs md:text-sm uppercase tracking-widest mt-1">Highlights & Testimonials</p>
               </div>
            </div>

            {/* UPDATED: Added Social Links for Videos */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
               <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">
                 <Youtube size={18} /> Watch on YouTube
               </a>
               <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">
                 <Instagram size={18} /> View on Instagram
               </a>
            </div>
         </div>
      </section>

      {/* --- 4. SERVICES GRID (Expanded) --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="Capabilities" title="Formats I Master." align="center" />
        
        <div className="grid md:grid-cols-3 gap-6 mt-16">
           <CorpCard 
             icon={<Award className="w-8 h-8 text-blue-400" />}
             title="Award Nights"
             desc="High-energy hosting that keeps the momentum going through 50+ award categories without letting the audience doze off."
           />
           <CorpCard 
             icon={<TrendingUp className="w-8 h-8 text-blue-400" />}
             title="Conferences & Summits"
             desc="Formal, articulate, and script-perfect. I moderate panels, introduce keynote speakers, and handle Q&A sessions with intellect."
           />
           <CorpCard 
             icon={<Users className="w-8 h-8 text-blue-400" />}
             title="Product Launches"
             desc="Building the hype before the reveal. I work with light & sound teams to create a 'Steve Jobs' moment for your product."
           />
           <CorpCard 
             icon={<Mic2 className="w-8 h-8 text-blue-400" />}
             title="Gala Dinners"
             desc="The perfect blend of formal and fun. Networking games, light engagement, and ensuring the VIPs feel honored."
           />
           <CorpCard 
             icon={<Building2 className="w-8 h-8 text-blue-400" />}
             title="Dealer Meets"
             desc="Motivating your sales network. High-octane anchoring that leaves your partners feeling valued and charged up."
           />
           <CorpCard 
             icon={<Globe className="w-8 h-8 text-blue-400" />}
             title="Team Building"
             desc="Interactive activities that break siloes. Turning a group of colleagues into a cohesive team through fun engagement."
           />
        </div>
      </section>

      {/* --- 5. THE PROCESS TIMELINE --- */}
      <section className="py-32 bg-[#080808]">
         <div className="container mx-auto px-4">
            <SectionHeading subtitle="Workflow" title="From Brief to Applause." align="center" />
            
            <div className="mt-20 relative max-w-4xl mx-auto">
               {/* Vertical Line */}
               <div className="absolute left-0 md:left-1/2 top-0 h-full w-[2px] bg-neutral-800 -translate-x-1/2 hidden md:block"></div>
               
               <TimelineItem 
                 step="01" 
                 title="The Briefing" 
                 desc="We hop on a call. I understand your brand tone, the audience profile, and the key message you want to deliver." 
                 side="left"
               />
               <TimelineItem 
                 step="02" 
                 title="Scripting & Flow" 
                 desc="I don't just show up. I help refine the run-of-show and prepare a script that balances information with entertainment." 
                 side="right"
               />
               <TimelineItem 
                 step="03" 
                 title="The Sound Check" 
                 desc="I arrive early. I check the mic, the lights, and the stage entry. I sync with the console team to ensure zero technical glitches." 
                 side="left"
               />
               <TimelineItem 
                 step="04" 
                 title="The Execution" 
                 desc="I take the stage. I manage the time, handle the energy, and deliver a seamless experience that makes you look good." 
                 side="right"
               />
            </div>
         </div>
      </section>

      {/* --- 6. CORPORATE FAQ --- */}
      <section className="py-32 max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="Details" title="Vendor Questions" align="center" />
        <div className="space-y-4 mt-8">
           <FAQItem question="Do you provide a GST Invoice?" answer="Yes, I am a registered entity and provide a fully compliant GST invoice for all corporate bookings." />
           <FAQItem question="Are you comfortable with teleprompters?" answer="Absolutely. For high-stakes summits, I am trained to read from teleprompters naturally while maintaining eye contact with the audience." />
           <FAQItem question="Do you travel for events?" answer="Yes. While based in Jaipur, 60% of my corporate work happens in Delhi, Mumbai, and Bangalore. Travel logistics are handled by the client." />
           <FAQItem question="Can you moderate panel discussions?" answer="Yes. I research the speakers beforehand to ask relevant, insightful questions that add value to the discussion." />
        </div>
      </section>

      {/* --- 7. FINAL CTA --- */}
      <section className="py-32 bg-blue-700 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">Ready to Elevate Your Event?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-12 text-xl font-light">
               Don't risk your brand reputation with an amateur. <br /> Hire a host who understands business.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-white text-blue-900 font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl">
                  Check Availability
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const StatCard = ({ num, label }) => (
  <div className="bg-[#111] p-6 rounded-xl border border-neutral-800 text-center hover:border-blue-500/50 transition-colors">
     <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{num}</h3>
     <p className="text-gray-500 text-[10px] uppercase tracking-widest">{label}</p>
  </div>
);

const CorpCard = ({ icon, title, desc }) => (
  <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group hover:-translate-y-2 duration-300">
     <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-blue-900/20 transition-colors text-blue-500">
        {icon}
     </div>
     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
     <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const CheckItem = ({ title, desc }) => (
  <div className="flex gap-5 group">
     <div className="mt-1 flex-shrink-0">
        <CheckCircle className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
     </div>
     <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
     </div>
  </div>
);

const TimelineItem = ({ step, title, desc, side }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
     {/* Dot */}
     <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full md:-translate-x-1/2 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10 hidden md:block"></div>
     
     {/* Content */}
     <div className={`w-full md:w-1/2 p-8 bg-[#111] border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-colors ${side === 'right' ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
        <span className="text-4xl font-display font-bold text-blue-900 mb-4 block">{step}</span>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
     </div>
     <div className="w-full md:w-1/2 hidden md:block"></div>
  </div>
);
