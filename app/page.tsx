"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Play, ArrowRight, Star, Sparkles, Quote, Instagram, 
  Users, CalendarCheck, Phone, Plus, Minus, Activity, 
  MapPin, Mic, ExternalLink 
} from "lucide-react";

// --- 1. GLOBAL STYLES ---
const style = `
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  
  /* Fast Marquee (20s) - NO PAUSE on hover */
  .animate-marquee { animation: marquee 20s linear infinite; }
  
  /* Gallery Scroll (60s) - Pauses on Hover */
  .animate-slow-scroll { animation: marquee 60s linear infinite; }
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
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GoldDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30 my-16" />
);

// --- 4. REAL DATA STORE ---

// PLATFORMS
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

// SERVICE PILLS
const serviceTags = [
  "Weddings & Receptions", "Sangeet & Haldi Ceremonies", "Corporate Annual Meets", "Product Launches",
  "Fashion Shows", "College Fests", "Cultural Nights", "Kids Shows & Birthday Parties",
  "Award Ceremonies", "Social Events", "Team Building", "Live Concerts"
];

// REVIEWS
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

// FAQs
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

// 20+ Images for Infinite Scroll
const magicImages = Array.from({ length: 20 }, (_, i) => `https://images.unsplash.com/photo-${1519741497674 + i * 10}-611481863552?w=600&q=80`);
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

// NEW: Grid-Style FAQ Item (Matching Screenshot)
const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-[#D4AF37]/50">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full p-6 text-left"
      >
        <span className={`text-base md:text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-gray-200'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors ${isOpen ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'text-gray-400'}`}>
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
            <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed font-light border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ReviewCard = ({ name, date, text }: any) => (
  <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer" className="block h-full">
    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-[#D4AF37] transition-all group h-full flex flex-col shadow-lg cursor-pointer hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
         <div className="flex text-[#D4AF37] gap-0.5">
           {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" />)}
         </div>
         <span className="text-[9px] text-gray-500 uppercase font-bold">{date}</span>
      </div>
      <p className="text-gray-200 text-xs italic mb-4 leading-relaxed flex-grow line-clamp-4">"{text}"</p>
      <div className="border-t border-white/10 pt-3 mt-auto flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center text-black font-bold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <span className="font-bold text-[10px] uppercase tracking-widest text-white block group-hover:text-[#D4AF37] transition-colors">{name}</span>
          <span className="text-[8px] text-gray-500 uppercase flex items-center gap-1">Google Review <ExternalLink size={8} /></span>
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

      {/* 1. HERO */}
      <section className="relative h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-6 z-20">
          <div className="max-w-4xl mr-auto text-left pl-2 md:pl-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-6 inline-block">
               <span className="border border-[#D4AF37] px-6 py-2 rounded-full backdrop-blur-md bg-black/40 text-[#D4AF37] text-sm tracking-wide font-medium">Jaipur's Leading Event Anchor</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.95] mb-4">
              Anchor <GoldTextureText>Yash</GoldTextureText>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-gray-300 text-xl md:text-2xl font-light mb-8 max-w-xl">Premium Wedding & Corporate Event Anchor</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-wrap gap-4 items-center">
              <Link href="/contact"><span className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-lg text-sm hover:bg-white transition-all cursor-pointer flex items-center gap-2">Book Now <ArrowRight className="w-4 h-4" /></span></Link>
              <Link href="/portfolio"><span className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg text-sm hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2"><Play className="w-4 h-4 fill-current" /> View Portfolio</span></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <h2 className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-4">The Introduction</h2>
             <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">"I don't just speak. <br /> I <GoldTextureText>connect souls</GoldTextureText>."</h3>
             <p className="text-gray-400 text-lg mb-6 leading-relaxed font-light">From the royal palaces of Udaipur to the corporate boardrooms of Jaipur, I have spent the last 5 years mastering the art of audience engagement.</p>
             <div className="flex gap-12 mt-12 border-t border-neutral-800 pt-8">
               <div><p className="text-4xl font-display font-bold text-white">1100+</p><p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Events Hosted</p></div>
               <div><p className="text-4xl font-display font-bold text-white">05+</p><p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Years Experience</p></div>
             </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 opacity-80">
             <ScrollReveal delay={0.2}><div className="relative aspect-[3/4] border border-neutral-800"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" /></div></ScrollReveal>
             <ScrollReveal delay={0.3}><div className="relative aspect-[3/4] border border-neutral-800 mt-8"><img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" /></div></ScrollReveal>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* 3. FEATURED MARQUEE (Bold, Fast, No Pause) */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
         <div className="container mx-auto px-6 mb-8 text-center">
            <span className="text-[#D4AF37] font-black tracking-[0.3em] uppercase text-2xl">FEATURED ON</span>
         </div>
         <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
            {[...trustedPlatforms, ...trustedPlatforms].map((brand, i) => (
               <a key={i} href={brand.link} target="_blank" rel="noopener noreferrer" className={`text-2xl font-bold uppercase tracking-tighter text-white/40 hover:text-white transition-colors`}>
                 {brand.name}
               </a>
            ))}
         </div>
      </section>

      {/* 4. SERVICES (Textual Pills) */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">EXPERTISE</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">Events I Specialize In</h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {serviceTags.map((tag, i) => (
            <motion.div key={i} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="px-8 py-3 rounded-full border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default text-sm tracking-wide uppercase font-medium bg-[#111]">
                {tag}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. REVIEWS (Rounded, Blurred, Small) */}
      <section className="py-24 bg-black container mx-auto px-6">
         <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px]">Social Proof</span>
            <h2 className="text-3xl font-display font-black mt-2 uppercase">Authentic Client Love</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-8xl mx-auto">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
         </div>
      </section>

      {/* 6. MAGIC GALLERY (Infinite Scroll, Pause on Hover) */}
      <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/5 hover-pause">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic">Moments of <GoldTextureText>Magic.</GoldTextureText></h2>
        </div>
        <div className="flex gap-4 animate-slow-scroll whitespace-nowrap">
          {[...magicImages, ...magicImages].map((img, i) => (
            <div key={i} className="min-w-[300px] h-[450px] bg-[#111] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative group rounded-lg">
               <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Anchor Yash Event" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ (Grid Layout with Plus Icon) */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionTitle sub="Clarifications" title="Frequently Asked Questions" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
             {homeFAQs.map((faq, i) => <FAQItem key={i} {...faq} />)}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 border-t border-neutral-900 bg-[#050505] text-center">
         <div className="container mx-auto px-6">
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

