"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Minus, Plus, Crown, ArrowRight, Star, Mic, Sparkles, 
  MapPin, CheckCircle2, Quote 
} from "lucide-react";

// --- 1. CSS FOR SPARKLING GOLD ANIMATION ---
// This makes the gold texture move slightly to catch the light
const style = `
  @keyframes shimmer {
    0% { background-position: 0% 50%; filter: brightness(100%); }
    50% { background-position: 100% 50%; filter: brightness(130%); }
    100% { background-position: 0% 50%; filter: brightness(100%); }
  }
  .sparkle-text {
    background-size: 200% auto;
    animation: shimmer 4s linear infinite;
  }
`;

// --- 2. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className}`}
    style={{ 
      backgroundImage: "url('/gold-texture.jpg')", 
      backgroundColor: "#D4AF37", 
    }}
  >
    {children}
  </span>
);

const FilmGrain = () => (
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png")' }}>
  </div>
);

// --- 3. BACKGROUND SLIDER ---
const HeroSlider = () => {
  // REPLACE THESE WITH YOUR OWN PHOTOS LATER
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }} // Low opacity so text is readable
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Anchor Yash Event"
        />
      </AnimatePresence>
      {/* Gradient fades from Bottom-Left (Black) to Top-Right (Transparent) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

// --- 4. REUSABLE COMPONENTS ---
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

// --- 5. GOOGLE STYLE REVIEW CARD (BLACK & GOLD) ---
const GoogleReviewCard = ({ name, date, text, rating }: any) => (
  <div className="bg-[#111] p-6 rounded-2xl border border-neutral-800 hover:border-[#D4AF37]/50 transition-colors h-full flex flex-col shadow-lg">
    <div className="flex items-start gap-4 mb-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center text-black font-bold text-lg">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-white text-sm">{name}</h4>
        <div className="flex items-center gap-2 text-xs text-gray-400">
           <span>{date}</span> • <span className="flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-3 h-3 grayscale opacity-50" /> Review</span>
        </div>
      </div>
    </div>
    
    <div className="flex text-[#D4AF37] gap-1 mb-3">
      {[...Array(rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
    </div>

    <p className="text-gray-300 text-sm leading-relaxed flex-grow font-light">"{text}"</p>
  </div>
);

// --- DATA ---
const services = [
  { title: "Royal Weddings", subtitle: "Sangeet, Varmala & Pheras", desc: "Orchestrating the grandeur of big fat Indian weddings with shayaris, humor, and seamless ritual management.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", link: "/wedding-anchor-jaipur" },
  { title: "Corporate Galas", subtitle: "Awards, Summits & R&R", desc: "Crisp, professional hosting that keeps stakeholders engaged and maintains the brand's premium tonality.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", link: "/corporate-event-anchor-jaipur" },
  { title: "Brand Activations", subtitle: "Mall & Roadshows", desc: "High-energy crowd interaction to drive footfall and maximize brand visibility in public spaces.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", link: "/mall-activation-anchor" },
];

const reviews = [
  { name: "Priya Sharma", date: "2 months ago", rating: 5, text: "Yash was the soul of our Sangeet! He managed 500 guests effortlessly. The energy was insane from start to finish." },
  { name: "Rahul Verma", date: "1 month ago", rating: 5, text: "Hired him for our Corporate R&R in Jaipur. Extremely professional, punctual, and witty. Our CEO was very impressed." },
  { name: "Amit & Sneha", date: "3 weeks ago", rating: 5, text: "The best decision for our wedding. His command over Hindi and English is perfect for a mixed crowd. Highly recommended!" },
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
      <style>{style}</style> 
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* --- SECTION 1: HERO (LEFT ALIGNED) --- */}
      <section className="relative h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-4 z-20">
          
          {/* TEXT CONTAINER - PUSHED TO LEFT */}
          <div className="max-w-4xl mr-auto text-left pl-2 md:pl-10">
            
            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-3 mb-6">
               <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
               <span className="text-[#D4AF37] font-display text-xs tracking-[0.2em] uppercase font-bold">India's Premium Host</span>
            </motion.div>

            {/* MASSIVE SPARKLING HEADLINE */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8"
            >
              ANCHOR <br />
              {/* THE NAME IS HERE - Change to just YASH if you ignore my advice */}
              <GoldTextureText>YASH SONI</GoldTextureText>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-gray-300 max-w-lg text-lg md:text-xl font-light tracking-wide mb-10 leading-relaxed">
              Orchestrating emotions at India's most prestigious weddings and corporate summits.
            </motion.p>

            {/* Buttons (Left Aligned) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-6 items-start">
              <Link href="/contact">
                <span className="px-10 py-4 bg-[#D4AF37] text-black font-bold tracking-widest text-sm hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  INQUIRE DATES
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-10 py-4 border border-white/20 backdrop-blur-md text-white font-bold tracking-widest text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" /> WATCH SHOWREEL
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE INTRODUCTION --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <h2 className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-4">The Philosophy</h2>
             <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
               "I don't just speak. <br /> I <GoldTextureText>connect souls</GoldTextureText>."
             </h3>
             <p className="text-gray-400 text-lg mb-6 leading-relaxed font-light">
               From the royal palaces of Udaipur to the corporate boardrooms of Jaipur, I have spent the last 5 years mastering the art of audience engagement.
             </p>
             <div className="flex gap-12 mt-12 border-t border-neutral-800 pt-8">
               <div>
                 <p className="text-4xl font-display font-bold text-white">1100+</p>
                 <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Events Hosted</p>
               </div>
               <div>
                 <p className="text-4xl font-display font-bold text-white">05+</p>
                 <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Years Experience</p>
               </div>
             </div>
          </ScrollReveal>

          {/* Abstract Image Grid */}
          <div className="grid grid-cols-2 gap-4 opacity-80">
             <ScrollReveal delay={0.2}>
               <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-neutral-800" />
             </ScrollReveal>
             <ScrollReveal delay={0.3}>
               <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 mt-8 border border-neutral-800" />
             </ScrollReveal>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* --- SECTION 3: SERVICES (Magazine Style List) --- */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Signature <span className="text-neutral-700">Services</span></h2>
            <Link href="/services" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1 uppercase text-xs tracking-widest hover:text-white transition-colors">
              View All
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {services.map((s, i) => (
            <ScrollReveal key={i}>
              <Link href={s.link}>
                <div className="group border-t border-neutral-800 py-12 flex flex-col md:flex-row gap-8 items-center cursor-pointer hover:bg-neutral-900/30 transition-colors">
                  <span className="text-neutral-800 text-6xl font-display font-bold group-hover:text-[#D4AF37] group-hover:opacity-100 transition-all">0{i+1}</span>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                    <p className="text-gray-500 max-w-xl">{s.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: THE REVIEWS (Luxury Google Cards) --- */}
      <section className="py-24 bg-[#0a0a0a] border-y border-neutral-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Client Love</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Rated 5.0 on <span className="text-white">Google</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GoogleReviewCard {...r} />
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <button className="text-gray-500 text-xs tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto uppercase">
               <MapPin className="w-4 h-4 text-[#D4AF37]" /> Based in Jaipur, Available Globally
             </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-40 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/gold-texture.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay animate-pulse"></div>
         
         <div className="container mx-auto px-4 relative z-10">
           <ScrollReveal>
             <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight uppercase">
               Let's Create <br /> <GoldTextureText>History.</GoldTextureText>
             </h2>
             <p className="text-xl font-light text-gray-300 mb-12 max-w-2xl mx-auto">
               Your event deserves a voice that echoes. Dates for 2026 are filling up fast.
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