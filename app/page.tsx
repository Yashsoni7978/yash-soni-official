"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Play, ArrowRight, Star, Sparkles, Quote, Instagram, 
  Users, CalendarCheck, Phone, ChevronDown, Activity, 
  MapPin, Mic, ExternalLink 
} from "lucide-react";

// --- 1. GLOBAL STYLES (Glassmorphism & Pausable Marquee) ---
const style = `
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 40s linear infinite; }
  .animate-slow-scroll { animation: marquee 60s linear infinite; }
  /* Pause animation on hover for user control */
  .hover-pause:hover .animate-marquee,
  .hover-pause:hover .animate-slow-scroll { animation-play-state: paused; }
  
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  @keyframes shimmer {
    0% { background-position: 0% 50%; filter: brightness(100%); }
    50% { background-position: 100% 50%; filter: brightness(130%); }
    100% { background-position: 0% 50%; filter: brightness(100%); }
  }
  .sparkle-text { background-size: 200% auto; animation: shimmer 4s linear infinite; }
`;

// --- 2. LUXURY ASSETS ---
const GoldTextureText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

const FilmGrain = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png")' }}>
  </div>
);

// --- 3. ANIMATION VARIANTS ---
const revealUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
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

// --- 4. DATA STORE (Real Reviews & Links) ---

// Trusted Platforms (Clickable)
const trustedPlatforms = [
  { name: "WedMeGood", link: "https://www.wedmegood.com/profile/anchor-yash-25628297", color: "hover:text-[#DE5D83]" },
  { name: "WeddingWire", link: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166", color: "hover:text-[#1467B0]" },
  { name: "Justdial", link: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET", color: "hover:text-[#FF9800]" },
  { name: "ShaadiDukaan", link: "https://www.shaadidukaan.com/profile/yash-2", color: "hover:text-[#E91E63]" },
  { name: "StarClinch", link: "https://starclinch.com", color: "hover:text-[#FF5722]" },
  { name: "Sulekha", link: "https://sulekha.com", color: "hover:text-[#FFC107]" },
  { name: "WeddingBazaar", link: "https://weddingbazaar.com", color: "hover:text-[#E53935]" },
  { name: "Google Reviews", link: "https://share.google/pMZGzEGOhXnJpLq5g", color: "hover:text-[#4285F4]" }
];

// Authentic Google Reviews
const reviews = [
  { name: "Nikita Agarwal", date: "15 weeks ago", text: "We couldn’t have asked for a better anchor! Yash brought the perfect blend of energy, charm, and professionalism." },
  { name: "Sakshi Soni", date: "19 weeks ago", text: "One of the best Anchor in jaipur, really the top most Anchor in jaipur. Made our event really Memorable." },
  { name: "Divyansh Soni", date: "22 Dec 2024", text: "It was a very good experience with Yash. Handled my sangeet function very well." },
  { name: "Utkarsh Godha", date: "22 Dec 2024", text: "Very nice 👍 perfect entertaining." },
  { name: "Bharat Sharma", date: "21 Dec 2024", text: "Good personality and anchoring with humour and professionalism. Everything goes in flow with him." },
  { name: "Riya Chauhan", date: "8 Oct 2024", text: "Anchor Yash absolutely rocked the stage at India Kids Fashion Week Season 11 at The Lalit, Jaipur!" },
  { name: "Rishita Sharma", date: "7 Oct 2024", text: "Anchor Yash hosted a memorable Dandiya night! His professionalism made it a truly enjoyable experience." },
  { name: "Saurabh Agarwal", date: "5 Jul 2024", text: "The experience was phenomenal. Great anchor with soft and attracting personality and eye catching presence." },
  { name: "Divya Shree", date: "4 Jul 2024", text: "A true master of connection, they made everyone feel included. Highly recommend for an unforgettable experience!" },
  { name: "Keshav Srivastav", date: "19 Jun 2024", text: "He was engaging, professional, and kept the audience captivated throughout the event." },
  { name: "Vartika Jetawat", date: "19 Jun 2024", text: "Anchored at my brother's Sangeet. Very friendly, understood the requirements, energetic thorough the function." },
  { name: "Riya Sharma", date: "19 Jun 2024", text: "He is very nice anchor, has a great personality and makes every event successful with his charm." },
  { name: "Saksham Thakral", date: "8 Oct 2024", text: "These anchors typically bring energy and humor, ensuring the show flows smoothly." }
];

const homeFAQs = [
  { question: "Who is the Best Anchor in Jaipur for events?", answer: "Yash Soni is widely rated as the best anchor in Jaipur, known for hosting 1100+ premium weddings and corporate events with a 5.0 Google rating." },
  { question: "What types of events do you specialize in?", answer: "I specialize in Royal Weddings (Sangeet, Varmala), Corporate Award Ceremonies, Brand Activations, and large-scale Concerts." },
  { question: "Do you travel for Destination Weddings outside Jaipur?", answer: "Yes. I frequently travel to Udaipur, Jodhpur, Goa, Dubai, and Thailand for destination weddings." },
  { question: "Which languages are you fluent in?", answer: "I am fluent in English (for corporate/formal tones) and Hindi/Urdu (for emotional connection and Shayaris)." },
  { question: "Do you also provide Event Management services?", answer: "Yes, via my 'Digital Empire' network, I provide end-to-end event planning, artist management, and production." },
  { question: "Can you provide a Female Anchor or Co-Host?", answer: "Absolutely. I collaborate with India's top female anchors for duo-hosting requirements." },
  { question: "How far in advance should we book you?", answer: "For peak wedding dates (Nov-Feb), it is recommended to book 4-6 months in advance. Corporate events can be booked 1 month prior." },
  { question: "What are your charges for an event?", answer: "Charges vary based on event type, duration, and location. Please click 'Initiate Project' for a custom quote." },
  { question: "Do you bring your own team?", answer: "Yes, I work with a dedicated technical team for sound cues, script management, and backstage coordination." },
  { question: "Why should we hire Anchor Yash over others?", answer: "I don't just speak; I engineer the room's energy. My style is spontaneous, interactive, and premium—no boring scripts." },
  { question: "How do I confirm a booking with you?", answer: "A booking is confirmed upon signing a formal contract and depositing a token advance." },
  { question: "Can we see videos of your past work?", answer: "Yes, you can view the 'Portfolio' page on this website or check my Instagram highlights for live event clips." }
];

const services = [
  { title: "Royal Weddings", num: "01", desc: "Orchestrating grandeur with shayaris, humor, and seamless ritual management.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", link: "/wedding-anchor-jaipur" },
  { title: "Corporate Galas", num: "02", desc: "Crisp, professional hosting keeping stakeholders engaged with premium tonality.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800", link: "/corporate-event-anchor-jaipur" },
  { title: "Brand Activations", num: "03", desc: "High-energy interaction to drive footfall and maximize brand visibility.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800", link: "/mall-activation-anchor" },
  { title: "Team Building", num: "04", desc: "Ice-breakers and bonding activities that turn colleagues into family.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", link: "/team-building-host" },
];

const magicImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600", "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600", 
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600", "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600", "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600",
  "https://images.unsplash.com/photo-1505373877741-2d3940e8d6f8?w=600", "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600", "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600"
];

const philosophy = [
  { icon: Sparkles, title: "Spontaneity", text: "Scripts are good, but the magic happens in the moment. I read the room." },
  { icon: Users, title: "Connection", text: "I don't speak *at* the audience; I speak *with* them. Every guest feels seen." },
  { icon: Quote, title: "Storytelling", text: "Every event has a narrative. I weave anecdotes to create a cohesive journey." },
];

const processSteps = [
  { num: "01", title: "Discovery", text: "We discuss your vision, the guest profile, and the specific vibe you want to set." },
  { num: "02", title: "Curation", text: "I draft a custom run-of-show, selecting specific games, shayaris, and tone." },
  { num: "03", title: "Execution", text: "I arrive early, coordinate with sound/DJ, and deliver a flawless performance." },
  { num: "04", title: "Memories", text: "We wrap up with high energy, leaving your guests with stories they'll tell for years." },
];
// --- 5. HELPER COMPONENTS ---
const HeroSlider = () => {
  const images = ["https://images.unsplash.com/photo-1519741497674-611481863552?q=80", "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80", "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img key={index} src={images[index]} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="w-full h-full object-cover grayscale-[30%]" />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800 last:border-0 group">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full py-8 text-left transition-all"
      >
        <span className={`text-xl font-display transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-300 group-hover:text-white'}`}>
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
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 text-lg leading-relaxed max-w-3xl font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Updated: Rounded, Blur Effect, Clickable Review Card
const ReviewCard = ({ name, date, text }: any) => (
  <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer" className="block h-full">
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-all group h-full flex flex-col shadow-lg cursor-pointer">
      <div className="flex justify-between items-start mb-4">
         <div className="flex text-[#D4AF37] gap-1">
           {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" />)}
         </div>
         <span className="text-[10px] text-gray-500 uppercase font-bold">{date}</span>
      </div>
      <p className="text-gray-200 text-sm leading-relaxed flex-grow font-light">"{text}"</p>
      <div className="border-t border-white/10 pt-4 mt-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center text-black font-bold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <span className="font-bold text-xs uppercase tracking-widest text-white block group-hover:text-[#D4AF37] transition-colors">{name}</span>
          <span className="text-[9px] text-gray-500 uppercase flex items-center gap-1">Google Review <ExternalLink size={8} /></span>
        </div>
      </div>
    </div>
  </a>
);

const SectionTitle = ({ sub, title }: any) => (
  <div className="text-center mb-16">
    <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">{sub}</span>
    <h2 className="text-4xl md:text-6xl font-display font-black mt-3 uppercase leading-none">{title}</h2>
  </div>
);

// --- 6. MAIN RENDER ---
export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "url": "https://yashsoni.in",
    "jobTitle": "Event Anchor & Emcee",
    "sameAs": ["https://instagram.com/anchor_yash_official"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      <style>{style}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-4 z-20">
          <div className="max-w-4xl mr-auto text-left pl-2 md:pl-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-6 inline-block">
               <span className="border border-[#D4AF37] px-6 py-2 rounded-full backdrop-blur-md bg-black/40 text-[#D4AF37] text-sm tracking-wide font-medium">
                 Jaipur's Leading Event Anchor
               </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.95] mb-4">
              Anchor <GoldTextureText>Yash</GoldTextureText>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-gray-300 text-xl md:text-2xl font-light mb-4">
              Premium Wedding & Corporate Event Anchor
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <span className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-lg text-sm hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg text-sm hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" /> View Portfolio
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <h2 className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-4">The Introduction</h2>
             <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
               "I don't just speak. <br /> I <GoldTextureText>connect souls</GoldTextureText>."
             </h3>
             <p className="text-gray-400 text-lg mb-6 leading-relaxed font-light">From the royal palaces of Udaipur to the corporate boardrooms of Jaipur, I have spent the last 5 years mastering the art of audience engagement.</p>
             <div className="flex gap-12 mt-12 border-t border-neutral-800 pt-8">
               <div><p className="text-4xl font-display font-bold text-white">1100+</p><p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Events Hosted</p></div>
               <div><p className="text-4xl font-display font-bold text-white">05+</p><p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Years Experience</p></div>
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

      {/* 3. TRUSTED ON MARQUEE (Clickable Links) */}
      <section className="py-12 bg-[#0a0a0a] border-y border-white/5 overflow-hidden hover-pause">
         <div className="container mx-auto px-6 mb-8 text-center">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">Featured On</span>
         </div>
         <div className="flex gap-20 animate-marquee whitespace-nowrap items-center">
            {[...trustedPlatforms, ...trustedPlatforms].map((brand, i) => (
               <a key={i} href={brand.link} target="_blank" rel="noopener noreferrer" className={`text-2xl font-black italic uppercase tracking-tighter text-white/30 transition-colors ${brand.color}`}>
                 {brand.name}
               </a>
            ))}
         </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-24 container mx-auto px-4">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Signature <span className="text-neutral-700">Services</span></h2>
            <Link href="/services" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1 uppercase text-xs tracking-widest hover:text-white transition-colors">View All</Link>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={i}>
              <Link href={s.link}>
                <div className="group relative h-[400px] border border-neutral-800 hover:border-[#D4AF37] transition-all overflow-hidden">
                  <img src={s.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-4xl font-display font-black text-white/20 mb-2 block group-hover:text-[#D4AF37] transition-colors">{s.num}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">{s.desc}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. AUTHENTIC GOOGLE REVIEWS (Rounded & Blurred) */}
      <section className="py-24 bg-black container mx-auto px-6">
         <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px]">Social Proof</span>
            <h2 className="text-3xl font-display font-black mt-2 uppercase">Authentic Client Love</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-8xl mx-auto">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
         </div>
      </section>

      {/* 6. INFINITE MAGIC GALLERY (Pause on Hover) */}
      <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/5 hover-pause">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic">Moments of <GoldTextureText>Magic.</GoldTextureText></h2>
        </div>
        <div className="flex gap-4 animate-slow-scroll whitespace-nowrap">
          {[...magicImages, ...magicImages].map((img, i) => (
            <div key={i} className="min-w-[300px] h-[450px] bg-[#111] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative group">
               <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Anchor Yash Event" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* 7. AI OPTIMIZED FAQ (Empire Design) */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle sub="Clarifications" title="Common Questions" />
          <div className="space-y-1 mt-12">
             {homeFAQs.map((faq, i) => <FAQItem key={i} {...faq} />)}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 border-t border-neutral-900 bg-[#050505] text-center">
         <div className="container mx-auto px-4">
           <ScrollReveal>
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Your Stage Awaits.</h2>
             <p className="text-gray-400 max-w-xl mx-auto mb-12 font-light text-lg">Dates for the 2026 wedding season are 80% booked.</p>
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
           </ScrollReveal>
         </div>
      </section>
    </main>
  );
}
