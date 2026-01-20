"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Play, ArrowRight, Star, Sparkles, Quote, Instagram, 
  Users, CalendarCheck, Phone, ChevronDown, Activity, 
  MapPin, Mic, Plus, Minus 
} from "lucide-react";

// --- 1. GLOBAL EMPIRE STYLES ---
const style = `
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 35s linear infinite; }
  .animate-slow-scroll { animation: marquee 50s linear infinite; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  @keyframes shimmer {
    0% { background-position: 0% 50%; filter: brightness(100%); }
    50% { background-position: 100% 50%; filter: brightness(130%); }
    100% { background-position: 0% 50%; filter: brightness(100%); }
  }
  .sparkle-text { background-size: 200% auto; animation: shimmer 4s linear infinite; }
`;

// --- 2. ANIMATION VARIANTS (Fixed for TypeScript) ---
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

const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// --- 3. THE EMPIRE DATA STORE (Full Content) ---

// A. Brand Marquee
const brands = [
  "Fairmont", "Rambagh Palace", "The Leela", "Marriott", "City Palace", 
  "Taj Jai Mahal", "Hyatt Regency", "Raffles Udaipur", "Oberoi Rajvilas",
  "Radisson Blu", "ITC Rajputana", "DoubleTree by Hilton"
];

// B. Signature Services
const services = [
  { title: "Royal Weddings", num: "01", desc: "Orchestrating grandeur with shayaris, humor, and seamless ritual management.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", link: "/wedding-anchor-jaipur" },
  { title: "Corporate Galas", num: "02", desc: "Crisp, professional hosting keeping stakeholders engaged with premium tonality.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800", link: "/corporate-event-anchor-jaipur" },
  { title: "Brand Activations", num: "03", desc: "High-energy interaction to drive footfall and maximize brand visibility.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800", link: "/mall-activation-anchor" },
  { title: "Team Building", num: "04", desc: "Ice-breakers and bonding activities that turn colleagues into family.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", link: "/team-building-host" },
];

// C. Full Review List (8 Items)
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

// D. AI Optimized FAQs (12 Items)
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

// E. Infinite Gallery Images (Expanded to 12)
const magicImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600", 
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600",
  "https://images.unsplash.com/photo-1505373877741-2d3940e8d6f8?w=600",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600"
];
// --- 4. LUXURY SUB-COMPONENTS ---
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-6 text-left group hover:bg-white/5 transition-colors px-4">
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-gray-300 group-hover:text-white'}`}>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[#D4AF37]' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-4">
            <p className="pb-6 text-gray-400 text-sm leading-relaxed max-w-3xl font-light italic">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionTitle = ({ sub, title }: any) => (
  <div className="text-center mb-16">
    <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">{sub}</span>
    <h2 className="text-4xl md:text-6xl font-display font-black mt-3 uppercase leading-none">{title}</h2>
  </div>
);

// --- 5. MAIN RENDER ---
export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "url": "https://yashsoni.in",
    "jobTitle": "Event Anchor & Emcee",
    "description": "Premium Wedding and Corporate Event Anchor based in Jaipur, hosting 1100+ events worldwide.",
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

      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <HeroSlider />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-20">
          <motion.div variants={revealUp} className="flex items-center gap-3 mb-6">
            <Activity className="text-[#D4AF37] w-5 h-5" />
            <span className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Live Event Authority • Jaipur</span>
          </motion.div>
          <motion.h1 variants={revealUp} className="text-6xl md:text-[10rem] font-display font-black leading-[0.85] tracking-tighter uppercase mb-10">
            Anchor <br /> <GoldTextureText>YASH.</GoldTextureText>
          </motion.h1>
          <motion.p variants={revealUp} className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 border-l-2 border-[#D4AF37] pl-6">
            I don't just speak. I engineer the energy of the room. <br /> Transforming high-stakes events into legendary experiences.
          </motion.p>
          <motion.div variants={revealUp} className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact">
              <motion.button whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Initiate Project
              </motion.button>
            </Link>
            <Link href="/portfolio">
               <motion.button whileTap={{ scale: 0.95 }} className="px-10 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white hover:text-black transition-all">
                  <Play size={14} className="fill-current" /> View Archive
               </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
           <span className="text-[9px] uppercase tracking-widest font-bold text-[#D4AF37]">Explore Empire</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* 2. SLEEK BRAND MARQUEE (Reduced Padding) */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
         <div className="flex gap-20 animate-marquee whitespace-nowrap items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {[...brands, ...brands, ...brands].map((b, i) => (
               <span key={i} className="text-xl font-black italic uppercase tracking-tighter">{b}</span>
            ))}
         </div>
      </section>

      {/* 3. THE PERSONA */}
      <section className="py-32 bg-[#050505] container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative group">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 transition-all duration-700 group-hover:border-[#D4AF37]/50">
               <img src="/anchor-portrait.webp" alt="Yash Soni" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#111] border border-[#D4AF37] p-8 hidden md:block shadow-2xl">
               <p className="text-4xl font-black text-white">1100+</p>
               <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mt-2 font-bold">Shows Conquered</p>
            </div>
         </motion.div>
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-10">
            <motion.h2 variants={revealUp} className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">"I don't just speak. <br /> I <GoldTextureText>connect souls</GoldTextureText>."</motion.h2>
            <motion.p variants={revealUp} className="text-xl text-gray-400 font-light leading-relaxed">From royal palaces to high-octane arenas, my stagecraft bridges the gap between an audience and an experience.</motion.p>
            <motion.div variants={revealUp} className="pt-10 flex gap-10 border-t border-white/10">
               <div><p className="text-3xl font-black uppercase text-[#D4AF37]">05+</p><p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Years Exp</p></div>
               <div><p className="text-3xl font-black uppercase text-[#D4AF37]">20+</p><p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Cities</p></div>
            </motion.div>
         </motion.div>
      </section>

      {/* 4. THE ECOSYSTEM (BENTO SERVICES) */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <SectionTitle sub="The Digital Empire" title="Signature Specialties" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {services.map((s, i) => (
              <motion.div key={i} variants={revealUp} className={`${i === 0 || i === 3 ? 'md:col-span-8' : 'md:col-span-4'} group relative h-[350px] overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-700`}>
                <img src={s.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <Link href={s.link} className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <span className="text-4xl font-display font-black text-white/10 mb-2 group-hover:text-[#D4AF37]/20 transition-colors">{s.num}</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CONDENSED REVIEWS (Full List but Compact) */}
      <section className="py-20 container mx-auto px-6">
         <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px]">Social Proof</span>
            <h2 className="text-3xl font-display font-black mt-2 uppercase">Rated 5.0 on Google</h2>
         </div>
         {/* Using CSS Grid to fit more reviews cleanly */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {reviews.map((r, i) => (
               <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#111] p-6 border border-white/5 hover:border-[#D4AF37] transition-all group">
                  <div className="flex text-[#D4AF37] gap-1 mb-3">
                     {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#D4AF37" />)}
                  </div>
                  <p className="text-xs text-gray-400 italic mb-4 leading-relaxed line-clamp-4">"{r.text}"</p>
                  <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                     <span className="font-bold text-[10px] uppercase tracking-widest text-white">{r.name}</span>
                     <span className="text-[9px] text-gray-600 uppercase">{r.platform}</span>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 6. INFINITE MAGIC GALLERY (12+ Images) */}
      <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic">Moments of <GoldTextureText>Magic.</GoldTextureText></h2>
        </div>
        <div className="flex gap-4 animate-slow-scroll whitespace-nowrap">
          {[...magicImages, ...magicImages].map((img, i) => (
            <div key={i} className="min-w-[280px] h-[400px] bg-[#111] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative group">
               <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Anchor Yash Event" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* 7. AI OPTIMIZED FAQ (12 Questions) */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle sub="Clarifications" title="Common Inquiries" />
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="space-y-1 mt-12 bg-[#0a0a0a] border border-white/5 p-6 rounded-none">
             {homeFAQs.map((faq, i) => <motion.div key={i} variants={revealUp}><FAQItem question={faq.question} answer={faq.answer} /></motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* 8. THE CLOSER (CTA) */}
      <section className="py-40 bg-white text-black text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-6xl md:text-[10rem] font-display font-black leading-none mb-10 tracking-tighter uppercase italic">No More <br /> Simple.</h2>
            <p className="text-xl md:text-2xl font-medium mb-16 max-w-2xl mx-auto opacity-70">Dates for 2026 are 80% booked. Secure the anchor who transforms rooms.</p>
            <Link href="/contact"><button className="px-16 py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-[#D4AF37] transition-all shadow-2xl hover:-translate-y-2">Initiate Project</button></Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}