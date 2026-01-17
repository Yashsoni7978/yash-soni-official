"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, Instagram, Star, Mic, ChevronRight, ArrowRight, Minus, Plus, Quote, Sparkles } from "lucide-react";

// --- 1. FILM GRAIN TEXTURE (The "Expensive" Look) ---
const FilmGrain = () => (
  <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png")' }}>
  </div>
);

// --- 2. CINEMATIC HERO SLIDER ---
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
    }, 4000); // Fast cuts
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 bg-neutral-950">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover absolute inset-0 opacity-60"
          alt="Anchor Yash Event"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

// --- 3. INFINITE MARQUEE STRIP ---
const Marquee = () => {
  return (
    <div className="bg-amber-500 py-4 overflow-hidden relative z-20 -rotate-1 origin-left scale-110 border-y-4 border-black">
      <motion.div 
        className="flex gap-12 whitespace-nowrap text-black font-display font-black text-3xl uppercase tracking-wider items-center"
        animate={{ x: "-50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Repeated content for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            <span>Corporate Events</span> <Star className="w-6 h-6 fill-black" />
            <span>Grand Weddings</span> <Star className="w-6 h-6 fill-black" />
            <span>Celebrity Shows</span> <Star className="w-6 h-6 fill-black" />
            <span>Team Building</span> <Star className="w-6 h-6 fill-black" />
            <span>Mall Activations</span> <Star className="w-6 h-6 fill-black" />
            <span>Sports Leagues</span> <Star className="w-6 h-6 fill-black" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- ANIMATION WRAPPERS ---
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
        <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-amber-500' : 'text-gray-300 group-hover:text-amber-500'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-amber-500 text-black' : 'bg-neutral-800 text-white'}`}>
           {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 text-base leading-relaxed max-w-2xl">{answer}</p>
      </motion.div>
    </div>
  );
};

// --- BENTO GRID SERVICES DATA ---
const services = [
  { title: "Wedding Anchor", subtitle: "Sangeet, Varmala & Pheras", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", link: "/wedding-anchor-jaipur", col: "md:col-span-2" },
  { title: "Corporate Host", subtitle: "Awards & Summits", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", link: "/corporate-event-anchor-jaipur", col: "md:col-span-1" },
  { title: "Mall Activations", subtitle: "Crowd Engagement", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", link: "/mall-activation-anchor", col: "md:col-span-1" },
  { title: "Team Building", subtitle: "Corporate Fun", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", link: "/team-building-host", col: "md:col-span-2" },
];

const homeFAQs = [
  { question: "How do you handle a crowd of 1000+ people?", answer: "Energy is key. I use a mix of humor, interactive games, and commanding stage presence to ensure even the back row feels connected." },
  { question: "Can you host in both Hindi and English?", answer: "Absolutely. I switch seamlessly between Hindi (for emotional connection/shayari) and English (for professional/corporate notes) depending on the audience vibe." },
  { question: "Do you travel outside Jaipur?", answer: "Yes! While Jaipur is home, I frequently travel to Udaipur, Jodhpur, Goa, and Delhi for destination weddings and events." },
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
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-amber-500 selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* --- SECTION 1: CINEMATIC HERO --- */}
      <section className="relative h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-4 z-20">
          
          {/* Animated Badge */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="mb-6 flex items-center gap-3">
             <div className="h-[2px] w-12 bg-amber-500"></div>
             <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">India's Premium Host</span>
          </motion.div>

          {/* MASSIVE HEADLINE */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-9xl font-display font-black leading-[0.9] text-white mix-blend-screen"
            >
              ANCHOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600">YASH SONI</span>
            </motion.h1>
          </div>

          {/* Description & Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t border-white/10 pt-8 backdrop-blur-sm bg-black/10 p-6 rounded-t-2xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-gray-200 max-w-md text-lg leading-relaxed font-light">
              Elevating events with wit, energy, and elegance. From royal weddings in Rajasthan to corporate summits across India.
            </motion.p>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex gap-4">
              <Link href="/contact">
                <span className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 cursor-pointer flex items-center gap-2">
                  <span className="relative z-10">Book Dates</span> <ChevronRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-8 py-4 border border-white/30 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" /> Showreel
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: INFINITE MARQUEE --- */}
      <Marquee />

      {/* --- SECTION 3: THE ARTIST (New About Section) --- */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-purple-600 rounded-3xl opacity-30 blur-2xl"></div>
               <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800">
                 <img src="/hero-anchor.webp" alt="Yash Soni Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
               {/* Floating Stat */}
               <div className="absolute -bottom-10 -right-10 bg-neutral-900 border border-neutral-700 p-8 rounded-2xl shadow-2xl hidden md:block">
                 <p className="text-5xl font-display font-bold text-amber-500">1100+</p>
                 <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">Events Hosted</p>
               </div>
             </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-amber-500 font-bold uppercase tracking-widest mb-4 text-sm">Meet The Host</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              More Than Just <br /> A Voice On Stage.
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Hey, I'm Yash. I don't just "speak" at events; I <span className="text-white font-bold">orchestrate emotions</span>. Whether it's making a grandmother dance at a Sangeet or keeping CEOs engaged at a Summit, my USP is <span className="text-amber-500">Connection</span>.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              With over 5 years of experience in Jaipur's elite event circuit, I bring a blend of traditional values and modern wit that keeps audiences hooked from start to finish.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
              <div>
                <Sparkles className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-bold text-xl mb-1">High Energy</h4>
                <p className="text-gray-500 text-sm">Never a dull moment.</p>
              </div>
              <div>
                <Mic className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-bold text-xl mb-1">Fluent Speech</h4>
                <p className="text-gray-500 text-sm">Hindi, English & Marwari.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SECTION 4: BENTO GRID SERVICES --- */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                Crafting <span className="text-amber-500 italic">Experiences</span>
              </h2>
            </ScrollReveal>
            <Link href="/services">
              <span className="text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={s.link} className={`${s.col} group relative block h-[400px] rounded-3xl overflow-hidden`}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-display font-bold mb-2 text-white group-hover:text-amber-500 transition-colors">{s.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{s.subtitle}</p>
                    <div className="mt-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: LIVE STATS (Animated) --- */}
      <section className="py-20 container mx-auto px-4 border-b border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Events", val: "1100+" },
            { label: "Experience", val: "5 Years" },
            { label: "Corporate Clients", val: "70+" },
            { label: "Rating", val: "5.0/5" },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <h3 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2">
                {stat.val}
              </h3>
              <p className="text-amber-500 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: FAQ --- */}
      <section className="py-32 container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Common Questions</h2>
            <p className="text-gray-400">Everything you need to know before booking.</p>
          </div>
          <div className="space-y-4">
            {homeFAQs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* --- SECTION 7: BIG CTA --- */}
      <section className="py-32 bg-amber-500 text-black text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight">
              LET'S CREATE <br /> HISTORY.
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
              Your event deserves a voice that echoes. Dates for 2026 are filling up fast.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/contact">
                <span className="px-12 py-5 bg-black text-white text-lg font-bold rounded-full hover:bg-neutral-800 transition-all cursor-pointer inline-block shadow-2xl hover:-translate-y-1">
                  Book Anchor Yash
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-12 py-5 border-2 border-black text-black text-lg font-bold rounded-full hover:bg-black hover:text-white transition-all cursor-pointer inline-block">
                  Watch Videos
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}