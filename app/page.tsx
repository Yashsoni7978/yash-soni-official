"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Play, Minus, Plus, Star, 
  ExternalLink, CalendarCheck, 
  Sparkles, Users, Quote, Mic, Award, UserCheck, ArrowRight
} from "lucide-react";

// --- 1. CONFIGURATION & STYLES ---
const GOLD_COLOR = "#D4AF37";

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
    animation: marquee 45s linear infinite;
  }
  .animate-marquee-slow {
    animation: marquee 60s linear infinite;
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

// --- 3. DATA CONSTANTS ---

const STATS_DATA = [
  { value: "1100+", label: "Mic Checks", icon: Mic },
  { value: "05+", label: "Years Live", icon: Award },
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "70+", label: "Corporate Brands", icon: UserCheck }
];

const SIGNATURE_SERVICES = [
  { 
    title: "The Wedding Architect", 
    desc: "The 'Family Member with a Mic.' I handle everything from the chaotic Baraat entry to the emotional Varmala. I don't just host; I manage the crowd, keep the drunk uncles in check, and make sure the Sangeet games actually get people laughing.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
  },
  { 
    title: "The Corporate Pro", 
    desc: "Professional doesn't have to mean 'boring.' I bridge the gap between the boardroom and the banquet hall. High energy for the awards, sharp wit for the engagement, and total brand alignment for your stakeholders.",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
  },
  { 
    title: "The Runway Voice", 
    desc: "A ramp walk needs a rhythm, not just a speaker. I provide the voice that matches the swagger of the models, keeping the tempo high and the audience’s cameras flashing.",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&q=80"
  }
];

const TRUSTED_TAGS = [
  "Celebrity Weddings", "Corporate R&R Events", "Big Fat Indian Weddings", 
  "Award Ceremonies", "Live Productions", "Award Shows", "National-Level Sports Events"
];

const PLATFORMS = [
  { name: "WedMeGood", link: "https://www.wedmegood.com/profile/anchor-yash-25628297", color: "hover:text-[#DE5D83]" },
  { name: "WeddingWire", link: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166", color: "hover:text-[#1467B0]" },
  { name: "Justdial", link: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET", color: "hover:text-[#FF9800]" },
  { name: "ShaadiDukaan", link: "https://www.shaadidukaan.com/profile/yash-2", color: "hover:text-[#E91E63]" },
  { name: "StarClinch", link: "https://starclinch.com", color: "hover:text-[#FF5722]" },
  { name: "Sulekha", link: "https://sulekha.com", color: "hover:text-[#FFC107]" },
  { name: "WeddingBazaar", link: "https://weddingbazaar.com", color: "hover:text-[#E53935]" },
  { name: "Google Reviews", link: "https://share.google/pMZGzEGOhXnJpLq5g", color: "hover:text-[#4285F4]" }
];

const PHILOSOPHY = [
  { icon: Sparkles, title: "Spontaneity", text: "Scripts are good, but the magic happens in the moment. I read the room, not just the paper." },
  { icon: Users, title: "Connection", text: "I don't speak at the audience; I speak with them. Every guest feels seen and involved." },
  { icon: Quote, title: "Storytelling", text: "Every event has a narrative. I weave anecdotes and emotions to create a cohesive journey." },
];

const PROCESS_STEPS = [
  { num: "01", title: "The Vibe Check", text: "We hop on a call. You tell me if you want 'Royal & Elegant' or 'Wild & Crazy.' We discuss the guest list, the inside jokes, and the 'Do Not Play' list." },
  { num: "02", title: "Script & Spice", text: "I don't use templates. I draft a run-of-show that includes custom games for your specific crowd, shayaris that actually make sense, and a timeline that flows perfectly." },
  { num: "03", title: "Showtime", text: "I arrive before the sound guy does. I sync with the DJ, check the mics, and handle the stage so you can actually enjoy your own party." },
  { num: "04", title: "The After-Effect", text: "We end on a high note. My goal is simple: when guests leave, they should be asking you, 'Where did you find this guy?'" },
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
  { q: "Who is the Best Anchor in Jaipur for events?", a: "While Jaipur is full of talent, my clients hire me (Anchor Yash) because I treat the audience like friends, not spectators. I combine the traditional grace of Rajasthani hospitality with modern, high-energy hosting. Check my 500+ happy client reviews—they tell the story better than I can." },
  { q: "Do you travel for Destination Weddings outside Jaipur?", a: "Absolutely. 'Have Mic, Will Travel.' While Jaipur is home, I’ve hosted weddings in Udaipur, Jodhpur, and across India. Travel logistics are simple and we can discuss them during our first call." },
  { q: "Which languages are you fluent in?", a: "I switch effortlessly between Hindi (for the emotions), English (for the class), and a bit of Marwari (to make the elders smile)." },
  { q: "Do you also provide Event Management services?", a: "I focus 100% on the mic to ensure your hosting is perfect. However, after 5 years in the industry, I know the best vendors in Jaipur. I can definitely connect you with trusted planners, DJs, and decorators." },
  { q: "Why should we hire Anchor Yash over others?", a: "Because I don't just read a script. I improvise. If the food is late, I keep the crowd entertained. If the bride needs 5 more minutes, I handle the delay without anyone noticing. I am your insurance policy against awkward silences." },
  { q: "How do I confirm a booking with you?", a: "Simple. Click the 'Book Now' or WhatsApp button. We check the date, sign a simple agreement, and lock it in. Dates for the wedding season (Nov-Feb) usually book out 3-4 months in advance." },
  { q: "Do you prepare scripts for our family members?", a: "Yes! I know Chachas and Masis get nervous. I provide simple, funny script templates and even do a quick rehearsal with them 10 minutes before the show to make them look like pros." },
  { q: "Can you handle a crowd that doesn't dance?", a: "That is my specialty. I have a set of 'Ice-Breaker' games and interactive crowd-pullers (like 'The Train' or 'Paper Dance') that force even the shyest guests off their chairs." },
  { q: "What do you wear to the event?", a: "I don't just show up; I blend in. Whether it's a tuxedo for a Corporate Gala or a heavy Sherwani for a Royal Wedding, my attire always matches your event's theme." },
  { q: "Do you bring your own sound system/DJ?", a: "I am an artist, not a rental company. However, I have preferred technical partners in Jaipur who provide concert-level sound and lighting if you need recommendations." },
  { q: "What are your payment terms?", a: "To block the date, we take a 50% advance. The remaining balance is due on the day of the event, before I take the stage." },
  { q: "Do you do virtual or hybrid events?", a: "Yes, post-2020, I’ve mastered the art of engaging audiences through a camera lens for virtual town halls and webinars." }
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
    <div 
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" // Active Style: Gold Border
          : "border-white/10 bg-transparent hover:border-white/20" // Inactive Style
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className={`font-semibold text-lg pr-4 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {q}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
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
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{a}</div>
            </div>
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
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block">
               <span className="border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/40 text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                 A PREMIUM AWARD WINNING ANCHOR
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.95]">
              ANCHOR <br />
              <GoldTextureText>YASH</GoldTextureText>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl font-light leading-relaxed">
              Commanding the stage with wit, warmth, and a voice that defines the moment.
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
               Scripts are boring. <br /> <GoldTextureText>Spontaneity is Magic</GoldTextureText>.
             </h3>
             <p className="text-zinc-400 text-lg mb-6 leading-relaxed font-light">
               Let’s be real—nobody remembers the decor if the vibe is dead. That’s where I step in.
             </p>
             <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
               I’m not just there to announce names; I’m there to read the room. Whether it’s decoding Sanskrit shlokas for a traditional ceremony or roasting the boss (respectfully!) at a corporate party, I know exactly when to dial up the energy and when to let the moment breathe.
             </p>
             <p className="text-white text-xl font-bold italic mb-8">
               5 Years. 1100+ Mic Checks. Zero dull moments.
             </p>
             <div className="mt-8">
               <span className="inline-block border-b border-[#D4AF37] pb-1 text-[#D4AF37] text-sm tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                 Read My Story &rarr;
               </span>
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

      {/* 3. STATS SECTION */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS_DATA.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <stat.icon className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-5xl md:text-6xl font-black mb-3">
                  <GoldTextureText>{stat.value}</GoldTextureText>
                </div>
                <div className="text-zinc-500 text-sm uppercase tracking-[0.2em] font-medium group-hover:text-white transition-colors">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED MARQUEE */}
      <section className="py-20 bg-black border-b border-white/5 relative z-20">
        <h2 className="text-center text-sm font-black tracking-[0.3em] text-white/30 mb-14 uppercase">
          FEATURED ON
        </h2>
        <div className="flex overflow-hidden mask-linear-gradient">
          <div className="flex whitespace-nowrap gap-32 items-center animate-marquee w-max">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((item, idx) => (
              <a 
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl md:text-6xl font-black text-zinc-800 uppercase no-underline transition-colors duration-500 hover:scale-105 transform ${item.color}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE SERVICES */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
             <span className="text-[#D4AF37] text-sm uppercase tracking-widest">What I Do</span>
             <h2 className="text-4xl md:text-6xl font-bold mt-2">Signature <span className="text-[#D4AF37]">Services</span></h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SIGNATURE_SERVICES.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <h3 className="text-3xl font-bold text-white mb-3 font-display">{service.title}</h3>
                   <div className="h-1 w-12 bg-[#D4AF37] mb-4 rounded-full" />
                   <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                     {service.desc}
                   </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2 mx-auto">
             View All Anchoring Services <ArrowRight size={18} />
           </button>
        </div>
      </section>

      {/* 6. TRUSTED BY TAGS */}
      <section className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 mb-10 text-sm uppercase tracking-widest font-medium">Trusted by leading brands and events across</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {TRUSTED_TAGS.map((tag, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="px-8 py-3 rounded-full border border-white/5 bg-white/5 text-zinc-300 text-sm md:text-lg font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all cursor-default">
                  {tag}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY ME */}
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

      {/* 8. MOMENTS OF MAGIC */}
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

      {/* 9. PROCESS STEPS */}
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
              <div className="relative p-6 border-l border-white/10 hover:border-[#D4AF37] transition-colors pl-8 group h-full">
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

      {/* 10. REVIEWS */}
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
                <p className="text-zinc-300 text-sm md:text-lg leading-relaxed mb-8 font-normal">
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

      {/* 11. FAQ (12 Questions) */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                 Frequently Asked <span className="text-[#D4AF37]">Questions</span>
               </h2>
               <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" />
            </div>
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

      {/* 12. FOOTER CTA */}
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
