"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Play, Minus, Plus, ArrowRight, Star, Mic, Sparkles, 
  MapPin, Quote, Instagram, Users, CalendarCheck, Phone, ChevronDown 
} from "lucide-react";

// --- 1. CSS STYLES ---
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
  /* Hide scrollbar */
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- 2. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#D4AF37", 
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

// --- 3. ANIMATION VARIANTS (FIXED FOR TYPESCRIPT) ---
const revealUp: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.33, 1, 0.68, 1] as const // Fixed: Added 'as const'
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

// --- 4. SUB-COMPONENTS ---
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover absolute inset-0 grayscale-[20%]"
          alt="Anchor Yash Event"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GoldDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30 my-16" />
);

const TrustedMarquee = () => {
  const brands = [
    { name: "Google Reviews", color: "hover:text-[#4285F4]", link: "https://share.google/pMZGzEGOhXnJpLq5g" }, 
    { name: "WedMeGood", color: "hover:text-[#DE5D83]", link: "#" },
    { name: "WeddingWire", color: "hover:text-[#1467B0]", link: "#" },
    { name: "StarClinch", color: "hover:text-[#FF5722]", link: "#" },
    { name: "ShaadiDukaan", color: "hover:text-[#E91E63]", link: "#" },
    { name: "Justdial", color: "hover:text-[#FF9800]", link: "#" },
    { name: "Sulekha", color: "hover:text-[#FFC107]", link: "#" },
    { name: "WeddingBazaar", color: "hover:text-[#E53935]", link: "#" }
  ];

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div 
        className="flex gap-40 items-center whitespace-nowrap px-4" 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <a 
            key={i} 
            href={brand.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-xl md:text-3xl font-display font-bold text-white/80 uppercase tracking-widest transition-colors duration-300 ${brand.color}`}
          >
            {brand.name}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

const ReviewCard = ({ name, date, text, platform, link }: any) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
    <div className="min-w-[320px] md:min-w-[400px] bg-[#111] p-8 rounded-2xl border border-neutral-800 hover:border-[#D4AF37] transition-all duration-300 flex flex-col shadow-lg mx-4 group cursor-pointer h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white text-base group-hover:text-[#D4AF37] transition-colors">{name}</h4>
          <div className="flex items-center gap-2 text-xs text-gray-400">
             <span>{date}</span> • <span className="text-[#D4AF37] font-medium">{platform}</span>
          </div>
        </div>
      </div>
      <div className="flex text-[#D4AF37] gap-1 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed flex-grow font-light tracking-wide relative z-10 group-hover:text-white transition-colors">"{text}"</p>
      
      <div className="mt-4 flex items-center text-[#D4AF37] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
        Read Full Review <ArrowRight className="w-3 h-3 ml-1" />
      </div>
    </div>
  </a>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-8 text-left group transition-all"
      >
        <span className={`text-xl md:text-2xl font-display transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-200 group-hover:text-[#D4AF37]'}`}>
          {question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 text-lg leading-relaxed max-w-3xl font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
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

const reviews = [
  { name: "Priya Sharma", date: "2 months ago", platform: "Google Reviews", text: "Yash was the soul of our Sangeet! He managed 500 guests effortlessly. The energy was insane from start to finish.", link: "https://share.google/pMZGzEGOhXnJpLq5g" },
  { name: "Rahul Verma", date: "1 month ago", platform: "WedMeGood", text: "Hired him for our Corporate R&R in Jaipur. Extremely professional, punctual, and witty. Our CEO was very impressed.", link: "#" },
  { name: "Amit & Sneha", date: "3 weeks ago", platform: "Google Reviews", text: "The best decision for our wedding. His command over Hindi and English is perfect for a mixed crowd. Highly recommended!", link: "https://share.google/pMZGzEGOhXnJpLq5g" },
  { name: "Vikram Rathore", date: "4 months ago", platform: "WeddingWire", text: "A true professional. He controlled the flow of our Varmala perfectly. The shayaris were beautiful.", link: "#" },
  { name: "Simran Kaur", date: "1 week ago", platform: "StarClinch", text: "Our guests are still talking about the games Yash hosted. He has a unique way of connecting with everyone.", link: "#" },
  { name: "Oberoi Group", date: "6 months ago", platform: "Corporate Client", text: "Excellent command over the stage. Handled our Annual General Meeting with grace and authority.", link: "#" },
  { name: "Nikhil Jain", date: "5 months ago", platform: "WedMeGood", text: "If you want your wedding to be memorable, book Yash. He is not just an anchor, he is an entertainer.", link: "#" },
  { name: "Anjali Mehta", date: "2 weeks ago", platform: "Google Reviews", text: "Punctual, well-dressed, and incredibly talented. He saved our event when the DJ had a technical glitch.", link: "https://share.google/pMZGzEGOhXnJpLq5g" },
];

const philosophy = [
  { icon: Sparkles, title: "Spontaneity", text: "Scripts are good, but the magic happens in the moment. I read the room, not just the paper." },
  { icon: Users, title: "Connection", text: "I don't speak *at* the audience; I speak *with* them. Every guest feels seen and involved." },
  { icon: Quote, title: "Storytelling", text: "Every event has a narrative. I weave anecdotes and emotions to create a cohesive journey." },
];

const processSteps = [
  { num: "01", title: "Discovery", text: "We discuss your vision, the guest profile, and the specific vibe you want to set." },
  { num: "02", title: "Curation", text: "I draft a custom run-of-show, selecting specific games, shayaris, and tone." },
  { num: "03", title: "Execution", text: "I arrive early, coordinate with sound/DJ, and deliver a flawless performance." },
  { num: "04", title: "Memories", text: "We wrap up with high energy, leaving your guests with stories they'll tell for years." },
];

const homeFAQs = [
  { question: "How do you handle a large crowd?", answer: "Energy is key. I use a mix of humor, interactive games, and commanding stage presence to ensure even the back row feels connected." },
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
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      <style>{style}</style> 
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* --- SECTION 1: HERO (LEFT ALIGNED) --- */}
      <section className="relative h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-4 z-20">
          <div className="max-w-4xl mr-auto text-left pl-2 md:pl-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-6 inline-block">
               <span className="border border-[#D4AF37] px-6 py-2 rounded-full backdrop-blur-md bg-black/40 text-[#D4AF37] text-sm tracking-wide font-medium">
                 Jaipur's Leading Event Anchor
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.95] mb-4"
            >
              Anchor <GoldTextureText>Yash</GoldTextureText>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-gray-300 text-xl md:text-2xl font-light mb-4">
              Premium Wedding & Corporate Event Anchor
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-[#D4AF37] text-sm md:text-base font-medium mb-10">
              1100+ Events • Weddings • Corporate • Sports • Fashion Shows • Event Planning & Designing
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <span className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-lg text-sm hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Book Now <ArrowRight className="w-4 h-4 inline-block ml-1" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg text-sm hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" /> View Portfolio
                </span>
              </Link>
              <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer">
                <span className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg text-sm hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: INTRODUCTION --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <h2 className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-4">The Introduction</h2>
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

          <div className="grid grid-cols-2 gap-4 opacity-80">
             <ScrollReveal delay={0.2}>
               <div className="relative aspect-[3/4] border border-neutral-800">
                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Anchor Yash Hosting" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.3}>
               <div className="relative aspect-[3/4] border border-neutral-800 mt-8">
                 <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Corporate Event" />
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* --- SECTION 3: THE STYLE (Why Me) --- */}
      <section className="py-12 container mx-auto px-4">
         <ScrollReveal>
           <div className="text-center mb-12">
             <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Why Me</span>
             <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">The <span className="text-[#D4AF37]">Yash Soni</span> Signature</h2>
           </div>
         </ScrollReveal>
         
         <div className="grid md:grid-cols-3 gap-8">
           {philosophy.map((item, i) => (
             <ScrollReveal key={i} delay={i * 0.1}>
               <div className="bg-[#111] p-10 border border-neutral-800 hover:border-[#D4AF37] transition-all duration-500 group h-full hover:-translate-y-2">
                 <item.icon className="w-12 h-12 text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-bold mb-4 font-display text-white">{item.title}</h3>
                 <p className="text-gray-400 leading-relaxed font-light">{item.text}</p>
               </div>
             </ScrollReveal>
           ))}
         </div>
      </section>

      {/* --- SECTION 4: TRUSTED BY MARQUEE (Below Why Me) --- */}
      <section className="bg-[#111] border-y border-neutral-800 relative z-30 py-12 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
           <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] whitespace-nowrap font-bold">
             Trusted On
           </div>
           <div className="flex-1 overflow-hidden relative h-10 flex items-center">
             <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#111] to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#111] to-transparent z-10" />
             <TrustedMarquee />
           </div>
        </div>
      </section>

      {/* --- SECTION 5: SERVICES (UPDATED CARD DESIGN) --- */}
      <section className="py-12 container mx-auto px-4">
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
                  
                  {/* Image Reveal on Hover (Mobile Hidden for Space) */}
                  <div className="hidden md:block w-32 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg transform translate-x-4 group-hover:translate-x-0">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                    <p className="text-gray-500 max-w-xl font-light">{s.desc}</p>
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

      {/* --- SECTION 6: REVIEWS (Above Process, Reduced Gap, Clickable) --- */}
      <section className="py-12 bg-black overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <ScrollReveal>
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Client Love</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Rated 5.0 on <span className="text-white">Google</span></h2>
          </ScrollReveal>
        </div>

        <div className="flex overflow-hidden relative w-full py-8">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
           
           <motion.div 
             className="flex"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 60, ease: "linear", repeat: Infinity }}
           >
             {[...reviews, ...reviews].map((r, i) => (
               <ReviewCard key={i} {...r} />
             ))}
           </motion.div>
        </div>
      </section>

      {/* --- SECTION 7: NEW SECTION - LIVE MOMENTS (Gallery Teaser) --- */}
      <section className="py-20 bg-[#111] overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
           <ScrollReveal>
             <h2 className="text-3xl md:text-5xl font-display font-bold">Moments of <span className="text-[#D4AF37]">Magic</span></h2>
           </ScrollReveal>
        </div>
        
        {/* Horizontal Scroll Strip */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 pb-8">
          {[1,2,3,4,5].map((i) => (
             <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-lg overflow-hidden group">
               <img src={`https://images.unsplash.com/photo-${i === 1 ? '1519741497674-611481863552' : i === 2 ? '1540039155733-5bb30b53aa14' : '1501281668745-f7f57925c3b4'}?w=600&q=80`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Event" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
             </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 8: THE PROCESS (How It Works) --- */}
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
               <div className="relative p-6 border-l border-neutral-800 hover:border-[#D4AF37] transition-colors pl-8 group">
                 <span className="absolute -left-3 top-0 w-6 h-6 bg-black border border-[#D4AF37] rounded-full flex items-center justify-center text-[10px] text-[#D4AF37] font-bold group-hover:scale-125 transition-transform">
                   {step.num}
                 </span>
                 <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed font-light">{step.text}</p>
               </div>
             </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SECTION 9: LUXURY FAQ (REDESIGNED) --- */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Common Questions</h2>
          </div>
          <div className="space-y-2">
            {homeFAQs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* --- SECTION 10: NEW PREMIUM CTA --- */}
      <section className="py-32 border-t border-neutral-900 bg-[#050505] text-center">
         <div className="container mx-auto px-4">
           <ScrollReveal>
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
               Your Stage Awaits.
             </h2>
             <p className="text-gray-400 max-w-xl mx-auto mb-12 font-light text-lg">
               Dates for the 2026 wedding season are 80% booked. <br /> Secure your date before someone else does.
             </p>
             <div className="flex justify-center">
               <Link href="/contact">
                 <div className="group relative cursor-pointer inline-block">
                   <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#806000] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                   <button className="relative bg-black border border-[#D4AF37] text-[#D4AF37] px-12 py-5 text-lg font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-3">
                     <CalendarCheck className="w-5 h-5" /> Check Availability
                   </button>
                 </div>
               </Link>
             </div>
             <p className="mt-8 text-gray-600 text-sm flex items-center justify-center gap-2">
               <Phone className="w-3 h-3" /> Direct Line: +91 77378 77978
             </p>
           </ScrollReveal>
         </div>
      </section>

    </div>
  );
}