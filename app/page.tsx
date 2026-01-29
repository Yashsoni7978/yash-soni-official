"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { 
  Play, Minus, Plus, ArrowRight, Star, 
  Instagram, ChevronDown, ExternalLink, CalendarCheck, 
  Sparkles, Users, Quote, Mic
} from "lucide-react";

// --- 1. CONFIGURATION & STYLES ---
const GOLD_COLOR = "#D4AF37";

// Custom CSS for advanced animations
const style = `
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .sparkle-text {
    background-size: 200% auto;
    animation: shimmer 4s linear infinite;
  }
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
  .animate-marquee-slow {
    animation: marquee 45s linear infinite;
  }
  .mask-linear-gradient {
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- 2. ANIMATION VARIANTS ---
const revealUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// --- 3. DATA CONSTANTS ---
const PLATFORMS = [
  "WedMeGood", "WeddingWire", "Justdial", "ShaadiDukaan", 
  "StarClinch", "Sulekha", "WeddingBazaar", "Google Reviews"
];

const SERVICES = [
  "Weddings & Receptions", "Sangeet & Haldi Ceremonies", "Corporate Annual Meets",
  "Product Launches", "Fashion Shows", "College Fests", "Cultural Nights",
  "Kids Shows & Birthday Parties", "Award Ceremonies", "Social Events",
  "Team Building", "Live Concerts"
];

const PHILOSOPHY = [
  { icon: Sparkles, title: "Spontaneity", text: "Scripts are good, but the magic happens in the moment. I read the room, not just the paper." },
  { icon: Users, title: "Connection", text: "I don't speak *at* the audience; I speak *with* them. Every guest feels seen and involved." },
  { icon: Quote, title: "Storytelling", text: "Every event has a narrative. I weave anecdotes and emotions to create a cohesive journey." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", text: "We discuss your vision, the guest profile, and the specific vibe you want to set." },
  { num: "02", title: "Curation", text: "I draft a custom run-of-show, selecting specific games, shayaris, and tone." },
  { num: "03", title: "Execution", text: "I arrive early, coordinate with sound/DJ, and deliver a flawless performance." },
  { num: "04", title: "Memories", text: "We wrap up with high energy, leaving your guests with stories they'll tell for years." },
];

const REVIEWS = [
  { name: "Nikita Agarwal", date: "15 weeks ago", text: "We couldn’t have asked for a better anchor! Yash brought the perfect blend of energy, charm, and professionalism." },
  { name: "Sakshi Soni", date: "19 weeks ago", text: "One of the best Anchor in jaipur, really the top most Anchor in jaipur. Made our event really Memorable." },
  { name: "Divyansh Soni", date: "22 Dec 2024", text: "It was a very good experience with Yash. Handled my sangeet function very well." },
  { name: "Utkarsh Godha", date: "22 Dec 2024", text: "Very nice 👍 perfect entertaining." },
  { name: "Bharat Sharma", date: "21 Dec 2024", text: "Good personality and anchoring with humour and professionalism. Everything goes in flow with him." },
  { name: "Riya Chauhan", date: "8 Oct 2024", text: "Anchor Yash absolutely rocked the stage at India Kids Fashion Week Season 11 at The Lalit, Jaipur!" },
  { name: "Saurabh Agarwal", date: "5 Jul 2024", text: "The experience was phenomenal. Great anchor with soft and attracting personality and eye catching presence." },
  { name: "Divya Shree", date: "4 Jul 2024", text: "A true master of connection, they made everyone feel included. Highly recommend for an unforgettable experience!" },
  { name: "Keshav Srivastav", date: "19 Jun 2024", text: "He was engaging, professional, and kept the audience captivated throughout the event." },
  { name: "Vartika Jetawat", date: "19 Jun 2024", text: "Anchored at my brother's Sangeet. Very friendly, understood the requirements, energetic thorough the function." }
];

const FAQS = [
  { q: "Who is the Best Anchor in Jaipur for events?", a: "Anchor Yash is widely recognized for his charismatic presence and professional versatility across Jaipur." },
  { q: "What types of events do you specialize in?", a: "Specializations include Weddings, Sangeets, Corporate Meets, Fashion Shows, and Live Concerts." },
  { q: "Do you travel for Destination Weddings outside Jaipur?", a: "Yes, I travel globally to host weddings and corporate events." },
  { q: "Which languages are you fluent in?", a: "I am fluent in Hindi and English, allowing me to connect with diverse audiences." },
  { q: "Do you also provide Event Management services?", a: "My primary focus is Anchoring/Emceeing, but I can recommend top-tier management partners." },
  { q: "Can you provide a Female Anchor or Co-Host?", a: "Yes, co-hosted events can be arranged upon request." },
  { q: "How far in advance should we book you?", a: "It is recommended to book 3-6 months in advance, especially for wedding seasons." },
  { q: "What are your charges for an event?", a: "Charges vary based on event type, duration, and location. Please click 'Book Now' for a quote." },
  { q: "Do you bring your own team?", a: "I work with your existing technical team or can bring a dedicated assistant if required." },
  { q: "Why should we hire Anchor Yash over others?", a: "A unique blend of humor, professionalism, and a 'soft yet attracting' personality that keeps guests engaged." },
  { q: "How do I confirm a booking with you?", a: "Bookings are confirmed via a formal agreement and an initial advance payment." },
  { q: "Can we see videos of your past work?", a: "Absolutely! Visit the 'Portfolio' section or my YouTube channel for live performance clips." }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=600&q=80",
  "https://images.unsplash.com/photo-1475721027785-f74eccf8e5fe?w=600&q=80",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80",
  "https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&q=80"
];

// --- 4. SUB-COMPONENTS ---

const GoldTextureText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: GOLD_COLOR }}
  >
    {children}
  </span>
);

const FilmGrain = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png")' }}>
  </div>
);

const HeroSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070", 
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069", 
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover absolute inset-0 grayscale-[20%]"
          alt="Anchor Yash Event"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

const ScrollReveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={revealUp}
    className={className}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group border border-white/10 bg-zinc-900/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className={`font-semibold text-base pr-4 transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-zinc-200'}`}>{q}</span>
        {isOpen ? <Minus className="text-[#D4AF37] shrink-0" /> : <Plus className="text-zinc-600 group-hover:text-[#D4AF37] shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// --- 5. MAIN PAGE COMPONENT ---

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "jobTitle": "Event Anchor & Emcee",
    "url": "https://yashsoni.in"
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      <style>{style}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <HeroSlider />
        <div className="container mx-auto px-6 z-30 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-block">
               <span className="border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/40 text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                 Jaipur's Premier Event Host
               </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.95]">
              ANCHOR <br />
              <GoldTextureText>YASH</GoldTextureText>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-lg font-light leading-relaxed">
              Elevating your moments with <span className="text-white font-medium">energy</span>, <span className="text-white font-medium">charm</span>, and a touch of gold.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                BOOK NOW
              </button>
              <button className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-full hover:bg-[#D4AF37]/10 transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                <Play size={18} fill="currentColor" /> VIEW PORTFOLIO
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <h2 className="text-[#D4AF37] text-sm uppercase tracking-widest mb-4 font-bold">The Introduction</h2>
             <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
               "I don't just speak. <br /> I <GoldTextureText>connect souls</GoldTextureText>."
             </h3>
             <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
               From the royal palaces of Udaipur to corporate boardrooms in Jaipur, I have spent the last 5 years mastering the art of audience engagement.
             </p>
             <div className="flex gap-12 border-t border-white/10 pt-8">
               <div>
                 <p className="text-4xl font-black text-white">1100+</p>
                 <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Events Hosted</p>
               </div>
               <div>
                 <p className="text-4xl font-black text-white">05+</p>
                 <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Years Exp.</p>
               </div>
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
             <ScrollReveal delay={0.2}>
               <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Anchor Yash" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.4} className="mt-12">
               <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                 <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Corporate Event" />
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. FEATURED MARQUEE */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 relative z-20">
        <h2 className="text-center text-sm font-black tracking-[0.3em] text-white/30 mb-10 uppercase">
          FEATURED ON
        </h2>
        <div className="flex overflow-hidden mask-linear-gradient">
          <div className="flex whitespace-nowrap gap-16 items-center animate-marquee w-max pointer-events-none">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((item, idx) => (
              <span key={idx} className="text-3xl md:text-5xl font-black text-zinc-800 uppercase hover:text-[#D4AF37] transition-colors duration-500">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY ME (PHILOSOPHY) */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Why Me</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">The <span className="text-[#D4AF37]">Yash Soni</span> Signature</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PHILOSOPHY.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-zinc-900/30 p-10 rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 group h-full hover:-translate-y-2">
                <item.icon className="w-12 h-12 text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. SERVICES (PILLS/TAGS) - STRICTLY NO IMAGES */}
      <section className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Mastering Every Stage</h2>
              <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/5 font-bold text-sm md:text-lg uppercase tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {service}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MOMENTS OF MAGIC (GALLERY) */}
      <section className="py-24 bg-zinc-900/30 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Moments of <GoldTextureText>Magic</GoldTextureText></h2>
            <p className="text-zinc-400">Capturing the pulse of the celebration.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span> Hover to Pause
          </div>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused] w-max pl-6">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shrink-0 group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt="Gallery Moment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#D4AF37] text-xs font-black tracking-widest bg-black/60 px-3 py-1 rounded backdrop-blur-sm">LIVE MOMENT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS STEPS */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">The Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">From Booking to <span className="text-[#D4AF37]">Applause</span></h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative p-6 border-l border-white/10 hover:border-[#D4AF37] transition-colors pl-8 group">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-black border border-[#D4AF37] rounded-full flex items-center justify-center text-[10px] text-[#D4AF37] font-bold group-hover:scale-125 transition-transform">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 8. REVIEWS */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Real Words. <span className="text-[#D4AF37]">Real Impact.</span>
          </h2>
        </ScrollReveal>
        
        <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {REVIEWS.map((review, idx) => (
            <a 
              key={idx}
              href="https://www.google.com/search?q=anchor+yash+jaipur+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="snap-center shrink-0 w-[300px] md:w-[450px] p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-[#D4AF37] gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" />)}
                  </div>
                  <ExternalLink className="text-zinc-600 group-hover:text-[#D4AF37] transition-colors" size={18} />
                </div>
                <p className="text-zinc-300 text-sm md:text-lg leading-relaxed mb-8 font-light italic">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-zinc-800 flex items-center justify-center font-bold text-black text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">{review.name}</h4>
                  <span className="text-zinc-500 text-xs">{review.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Common <span className="text-[#D4AF37]">Questions</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER CTA */}
      <footer className="py-32 border-t border-white/10 bg-black text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent opacity-60 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
              Your Stage Awaits.
            </h2>
            <p className="text-zinc-400 mb-12 max-w-lg mx-auto text-lg">
              Dates for the upcoming season are filling fast. Secure your date with Jaipur's most trusted voice.
            </p>
            <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#D4AF37] text-black font-bold text-xl uppercase tracking-widest rounded-full overflow-hidden transition-all hover:bg-white hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <span className="relative z-10 flex items-center gap-3">
                <CalendarCheck size={24} /> Check Availability
              </span>
            </button>
            <div className="mt-20 flex justify-center gap-10 text-zinc-500 text-sm font-medium tracking-widest uppercase">
               <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
               <a href="#" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
               <a href="#" className="hover:text-[#D4AF37] transition-colors">Email</a>
            </div>
            <div className="mt-8 text-zinc-700 text-xs">
              © {new Date().getFullYear()} Anchor Yash. All rights reserved.
            </div>
         </div>
      </footer>
    </main>
  );
}
