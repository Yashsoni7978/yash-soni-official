"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Minus, Plus, Crown, ArrowRight, Star, Mic, Sparkles, 
  ScrollText, MapPin, Users, CalendarCheck, Music 
} from "lucide-react";

// --- 1. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ 
      backgroundImage: "url('/gold-texture.jpg')", 
      backgroundColor: "#D4AF37", 
      backgroundSize: "cover"
    }}
  >
    {children}
  </span>
);

const FilmGrain = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png")' }}>
  </div>
);

// --- 2. CINEMATIC BACKGROUND SLIDER ---
const HeroSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover absolute inset-0 grayscale-[30%]"
          alt="Anchor Yash Event"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

// --- 3. COMPONENTS ---
const GoldDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30 my-24" />
);

const ScrollReveal = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left group"
      >
        <span className={`text-lg md:text-xl font-display transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-gray-300 group-hover:text-[#D4AF37]'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-[#D4AF37] text-black' : 'bg-neutral-800 text-white'}`}>
           {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 text-base leading-relaxed max-w-2xl font-light tracking-wide">{answer}</p>
      </motion.div>
    </div>
  );
};

// --- DATA ---
const services = [
  { title: "Royal Weddings", subtitle: "Sangeet, Varmala & Pheras", desc: "Orchestrating the grandeur of big fat Indian weddings with shayaris, humor, and seamless ritual management.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", link: "/wedding-anchor-jaipur" },
  { title: "Corporate Galas", subtitle: "Awards, Summits & R&R", desc: "Crisp, professional hosting that keeps stakeholders engaged and maintains the brand's premium tonality.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", link: "/corporate-event-anchor-jaipur" },
  { title: "Brand Activations", subtitle: "Mall & Roadshows", desc: "High-energy crowd interaction to drive footfall and maximize brand visibility in public spaces.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", link: "/mall-activation-anchor" },
  { title: "Team Offsites", subtitle: "Building Connections", desc: "Ice-breakers and team-bonding activities that turn colleagues into a cohesive family.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", link: "/team-building-host" },
];

const philosophy = [
  { icon: Sparkles, title: "Spontaneity", text: "Scripts are good, but the magic happens in the moment. I read the room, not just the paper." },
  { icon: Users, title: "Connection", text: "I don't speak *at* the audience; I speak *with* them. Every guest feels seen and involved." },
  { icon: ScrollText, title: "Storytelling", text: "Every event has a narrative. I weave anecdotes and emotions to create a cohesive journey." },
];

const venues = [
  "Rambagh Palace", "The Oberoi Rajvilas", "Fairmont Jaipur", "City Palace Udaipur", "Le Méridien", "Taj Jai Mahal"
];

const processSteps = [
  { num: "01", title: "Discovery", text: "We discuss your vision, the guest profile, and the specific vibe you want to set." },
  { num: "02", title: "Curation", text: "I draft a custom run-of-show, selecting specific games, shayaris, and tone." },
  { num: "03", title: "Execution", text: "I arrive early, coordinate with sound/DJ, and deliver a flawless performance." },
  { num: "04", title: "Memories", text: "We wrap up with high energy, leaving your guests with stories they'll tell for years." },
];

const homeFAQs = [
  { question: "How do you handle a crowd of 1000+ people?", answer: "Energy is key. I use a mix of humor, interactive games, and commanding stage presence to ensure even the back row feels connected." },
  { question: "Can you host in both Hindi and English?", answer: "Absolutely. I switch seamlessly between Hindi (for emotional connection/shayari) and English (for professional/corporate notes) depending on the audience vibe." },
  { question: "Do you travel outside Jaipur?", answer: "Yes! While Jaipur is home, I frequently travel to Udaipur, Jodhpur, Goa, and Delhi for destination weddings and events." },
  { question: "Do you provide scripts beforehand?", answer: "Yes. For corporate events and sangeets, I provide a draft script for approval to ensure we are aligned on the messaging." },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "url": "https://yashsoni.in",
    "jobTitle": "Event Anchor & Emcee",
    "worksFor": { "@type": "Organization", "name": "Yash Soni Events" },
    "sameAs": ["https://instagram.com/anchor_yash_official", "https://youtube.com/@anchoryashsoni"]
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* --- SECTION 1: THE ROYAL HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-4 z-20 text-center">
          
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex justify-center mb-6">
             <div className="border border-[#D4AF37]/50 px-6 py-2 rounded-full backdrop-blur-sm bg-black/30 flex items-center gap-2">
               <Crown className="w-4 h-4 text-[#D4AF37]" />
               <span className="text-[#D4AF37] font-display text-xs tracking-[0.2em] uppercase">Jaipur's Premium Host</span>
             </div>
          </motion.div>

          {/* MASSIVE GOLD HEADLINE */}
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-tight mb-6"
          >
            ANCHOR <br />
            <GoldTextureText className="animate-pulse">YASH SONI</GoldTextureText>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-gray-300 max-w-lg mx-auto text-lg md:text-xl font-light tracking-wide mb-10">
            Orchestrating emotions at India's most prestigious weddings and corporate summits.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <span className="px-10 py-4 bg-[#D4AF37] text-black font-bold tracking-widest text-sm rounded-none hover:bg-white transition-all cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                INQUIRE FOR DATES
              </span>
            </Link>
            <Link href="/portfolio">
              <span className="flex items-center gap-3 text-white hover:text-[#D4AF37] transition-colors cursor-pointer tracking-widest text-sm font-medium group">
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37]">
                   <Play className="w-3 h-3 fill-current" />
                </span>
                WATCH SHOWREEL
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE INTRODUCTION --- */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <ScrollReveal>
               <div className="relative aspect-[3/4] border-l-2 border-t-2 border-[#D4AF37]/30 p-4">
                 <img src="/hero-anchor.webp" alt="Yash Soni Portrait" className="w-full h-full object-cover grayscale contrast-125" />
                 <div className="absolute -bottom-10 -right-10 bg-neutral-900 p-6 border border-neutral-800 shadow-2xl">
                   <p className="font-display text-[#D4AF37] text-4xl font-bold">1100+</p>
                   <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">Successful Events</p>
                 </div>
               </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <ScrollReveal delay={0.2}>
              <h2 className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-4">The Man Behind The Mic</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                "I don't just speak. <br /> I <span className="text-[#D4AF37]">connect souls</span>."
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed font-light">
                From the royal palaces of Udaipur to the corporate boardrooms of Jaipur, I have spent the last 5 years mastering the art of audience engagement.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                My philosophy is simple: <strong>Every event has a heartbeat.</strong> My job is to find it, amplify it, and sync it with every guest in the room. Whether it's a tearful bride's farewell or a roaring corporate sales victory, I ensure the moment is felt, not just heard.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
                <div>
                  <Mic className="w-6 h-6 text-[#D4AF37] mb-3" />
                  <h4 className="font-bold text-white mb-1">Fluent Speech</h4>
                  <p className="text-gray-500 text-sm">English, Hindi & Marwari</p>
                </div>
                <div>
                  <Sparkles className="w-6 h-6 text-[#D4AF37] mb-3" />
                  <h4 className="font-bold text-white mb-1">High Energy</h4>
                  <p className="text-gray-500 text-sm">Non-stop Engagement</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* --- SECTION 3: THE PHILOSOPHY (New Data) --- */}
      <section className="py-20 container mx-auto px-4">
         <ScrollReveal>
           <div className="text-center mb-16">
             <span className="text-[#D4AF37] text-sm uppercase tracking-widest">My Style</span>
             <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">The <span className="text-[#D4AF37]">Yash Soni</span> Signature</h2>
           </div>
         </ScrollReveal>
         
         <div className="grid md:grid-cols-3 gap-8">
           {philosophy.map((item, i) => (
             <ScrollReveal key={i} delay={i * 0.1}>
               <div className="bg-neutral-900/50 p-8 border border-neutral-800 hover:border-[#D4AF37] transition-all duration-300 group h-full">
                 <item.icon className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-bold mb-4 font-display">{item.title}</h3>
                 <p className="text-gray-400 leading-relaxed font-light">{item.text}</p>
               </div>
             </ScrollReveal>
           ))}
         </div>
      </section>

      {/* --- SECTION 4: SIGNATURE SERVICES --- */}
      <section className="py-20 container mx-auto px-4 bg-neutral-900/30">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Expertise</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-2">Signature <span className="text-gray-600">Services</span></h2>
            </div>
            <Link href="/services">
              <span className="hidden md:flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors cursor-pointer border-b border-white/20 pb-1">
                View All <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {services.map((s, i) => (
            <ScrollReveal key={i}>
              <Link href={s.link}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group cursor-pointer`}>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 overflow-hidden border border-white/10 relative h-[400px]">
                     <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2">
                     <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2 block">{s.subtitle}</span>
                     <h3 className="text-4xl font-display font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                     <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md font-light">{s.desc}</p>
                     <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                       Learn More <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                     </span>
                  </div>

                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* --- SECTION 5: THE PROCESS (New Data) --- */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">From Booking to <span className="text-[#D4AF37]">Applause</span></h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
             <ScrollReveal key={i} delay={i * 0.1}>
               <div className="relative p-6 border-l border-neutral-800 hover:border-[#D4AF37] transition-colors pl-8">
                 <span className="absolute -left-3 top-0 w-6 h-6 bg-black border border-[#D4AF37] rounded-full flex items-center justify-center text-[10px] text-[#D4AF37] font-bold">
                   {step.num}
                 </span>
                 <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
               </div>
             </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: THE PROOF (Stats & Venues) --- */}
      <section className="py-20 bg-neutral-900/50 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-20">
            {[
              { label: "Years Active", val: "05+" },
              { label: "Total Events", val: "1100+" },
              { label: "Corporate Clients", val: "70+" },
              { label: "Client Rating", val: "5.0" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-2">{stat.val}</h3>
                <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em]">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Featured at Premier Venues</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {venues.map((venue, i) => (
                <span key={i} className="text-xl md:text-2xl font-display font-bold text-white/50 hover:text-[#D4AF37] cursor-default transition-colors">
                  {venue}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SECTION 7: FAQ --- */}
      <section className="py-32 container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Common Questions</h2>
            <p className="text-gray-400 font-light">Everything you need to know before the show.</p>
          </div>
          <div className="space-y-4">
            {homeFAQs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* --- SECTION 8: GRAND FINALE CTA --- */}
      <section className="py-40 text-center relative overflow-hidden">
        {/* Abstract Gold Background */}
        <div className="absolute inset-0 bg-[url('/gold-texture.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight uppercase">
              Let's Create <br /> <span className="text-[#D4AF37]">History.</span>
            </h2>
            <p className="text-xl font-light text-gray-300 mb-12 max-w-2xl mx-auto">
              Your event deserves a voice that echoes. Dates for 2026 are filling up.
            </p>
            <Link href="/contact">
              <button className="px-12 py-5 bg-[#D4AF37] text-black text-lg font-bold tracking-widest hover:bg-white transition-colors shadow-2xl hover:scale-105 transform duration-300">
                BOOK ANCHOR YASH
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}