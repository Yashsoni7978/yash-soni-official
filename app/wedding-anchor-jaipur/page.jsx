"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, Heart, Music, Star, Calendar, ArrowRight, Play, 
  CheckCircle, Sparkles, ChevronDown, Quote, Camera, Wine, Sun, Users, MapPin, Minus, Plus, ShieldCheck
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
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
`;

// --- 2. ANIMATION HELPERS ---
const revealUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const ScrollReveal = ({ children, delay = 0, className = "" }) => (
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

// --- 3. COMPONENTS ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: GOLD_COLOR, 
    }}
  >
    {children}
  </span>
);

// SEO FIX: subtitle is now a span, title is h2 for proper hierarchy
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3 justify-center md:justify-start font-bold">
        {align === "center" && <span className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true"></span>}
        {subtitle}
        {align !== "center" && <span className="w-12 h-[1px] bg-[#D4AF37]" aria-hidden="true"></span>}
        {align === "center" && <span className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true"></span>}
      </span>
      <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-white uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- 4. DATA ---
const WEDDING_TYPES = [
  { title: "Hindu Weddings", desc: "Expertise in Vedic rituals, soulful Pheras commentary, and commanding the high-energy Baraat.", icon: "🕉️" },
  { title: "Punjabi Weddings", desc: "Unmatched energy for the Dhol, Bhangra entries, and high-voltage cocktail parties.", icon: "🪘" },
  { title: "Jain Weddings", desc: "Elegant, sophisticated hosting that deeply respects traditions and high family values.", icon: "🪷" },
  { title: "Islamic Nikkah", desc: "Adding grace to the Walima and Nikkah with poetic Urdu hosting and soulful Shayari.", icon: "🌙" },
  { title: "Christian Weddings", desc: "Classy and formal emceeing for the Toast, Cake Cutting, and the First Dance.", icon: "⛪" },
  { title: "Cross-Cultural", desc: "Seamlessly blending diverse traditions for modern, global destination couples.", icon: "🤝" }
];

const EVENT_FLOW = [
  { title: "Welcome Lunch", icon: Sun },
  { title: "Haldi Games", icon: Sparkles },
  { title: "Mehendi Sangeet", icon: Music },
  { title: "Gala Night", icon: Wine },
  { title: "Varmala", icon: Heart },
  { title: "The Pheras", icon: ShieldCheck },
  { title: "Grand Reception", icon: Camera },
  { title: "After Party", icon: Users },
];

const FAQS = [
  { q: "Who is the best wedding anchor in Jaipur for premium weddings?", a: "With over 5 years of experience in the luxury wedding industry, Yash Soni is rated among Jaipur's top wedding emcees. He specializes in unscripted wit, crowd control, and seamless management for high-profile events." },
  { q: "Do you prepare scripts for our family members hosting performances?", a: "Yes! I provide funny, engaging script templates and spend time rehearsing with family members to ensure they look confident and professional on stage." },
  { q: "Can you handle a crowd that is shy to dance or participate?", a: "That is my specialty. I use interactive 'Ice-Breaker' games and psychological crowd-work that naturally pulls even the shyest guests onto the floor without force." },
  { q: "Do you travel for destination weddings across Rajasthan and India?", a: "Absolutely. While I am based in Jaipur, I frequently host luxury destination weddings in Udaipur, Jodhpur, Goa, and Mumbai. Travel and logistics are handled as per the client's arrangement." },
  { q: "What is your hosting style: Traditional or Modern?", a: "I am highly adaptable. I bring high-energy and sharp wit for the Sangeet, yet transition to a traditional, poetic, and sophisticated tone for the Varmala and Pheras." },
  { q: "Do you provide fluent commentary in English and Hindi?", a: "Yes, I am fluent in both English and Hindi. I also add Marwari or Punjabi cultural touches to connect more deeply with the family elders." },
  { q: "What happens if the wedding event timeline runs late?", a: "Indian weddings always run late! I am fully prepared with filler interactions and spontaneous crowd engagement to ensure your guests remain entertained during any delay." },
  { q: "How far in advance should we book a professional anchor?", a: "Jaipur's peak wedding season (Nov-Feb) is very busy. I recommend booking your emcee 4-6 months in advance once your venue is locked." }
];

export default function WeddingAnchor() {
  const [index, setIndex] = useState(0);
  const heroImages = ["/hero-slide-1.webp", "/gallery-4.webp", "/service-wedding.webp"];

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // SEO SCHEMA MARKUP
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yash Soni",
    "jobTitle": "Professional Wedding Emcee",
    "url": "https://yashsoni.in",
    "image": "https://yashsoni.in/service-wedding.webp",
    "sameAs": ["https://www.instagram.com/Anchor_Yash_official"],
    "description": "Premium Wedding Anchor and Emcee in Jaipur specializing in luxury destination weddings and high-energy Sangeet hosting."
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans relative">
      <style>{style}</style>
      
      {/* INJECT JSON-LD SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={index}
              src={heroImages[index]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover absolute inset-0"
              alt="Professional Wedding Anchor hosting a luxury event in Jaipur"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-6 py-2 rounded-full bg-black/40 backdrop-blur-md mb-8 shadow-2xl">
              <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">Premium Wedding Emcee Jaipur</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl tracking-tighter uppercase">
              The Voice of <br /> <GoldTextureText>Forever.</GoldTextureText>
            </h1>
            <p className="text-gray-100 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-lg">
              Your wedding is a once-in-a-lifetime legacy. <br /> Don't settle for boring. Let's make every moment legendary.
            </p>
            <Link href="/contact" aria-label="Book Anchor Yash Soni for your wedding">
              <button className="group relative px-10 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest overflow-hidden rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Secure Your Date <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="py-32 container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading subtitle="The Professional Approach" title="Beyond The Microphone." />
            <p className="text-gray-300 text-xl leading-relaxed mb-12 border-l-4 border-[#D4AF37] pl-8 font-medium">
              I specialize in bridging the gap between families, transforming a room of strangers into one high-energy celebration.
            </p>
            <div className="space-y-10">
              <div className="flex gap-6 group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all">
                <Heart className="w-12 h-12 text-[#D4AF37] shrink-0" />
                <div>
                  <h4 className="text-2xl font-bold mb-2">Emotional Intelligence</h4>
                  <p className="text-gray-400 text-base leading-relaxed">Knowing exactly when to hype the dance floor and when to let the sacred rituals take the spotlight.</p>
                </div>
              </div>
              <div className="flex gap-6 group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all">
                <Sparkles className="w-12 h-12 text-[#D4AF37] shrink-0" />
                <div>
                  <h4 className="text-2xl font-bold mb-2">Unscripted Wit</h4>
                  <p className="text-gray-400 text-base leading-relaxed">Spontaneous humor and family-style banter that feels personal, never like a rehearsed script.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative h-[650px]">
             <div className="absolute bottom-0 left-0 w-full h-full z-10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/service-wedding.webp" className="w-full h-full object-cover scale-105" alt="Yash Soni - Premium Wedding Host and Anchor in Rajasthan" loading="lazy" />
                <div className="absolute inset-0 border-2 border-[#D4AF37]/30 m-6 rounded-2xl pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURAL EXPERTISE */}
      <section className="py-32 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Cultural Fluency" title="Celebrating Every Tradition" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {WEDDING_TYPES.map((w, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-10 rounded-3xl hover:border-[#D4AF37] transition-all duration-500 group hover:-translate-y-2">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{w.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{w.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENT JOURNEY */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Total Show Management" title="From Welcome to After Party" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {EVENT_FLOW.map((e, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl text-center hover:bg-[#D4AF37] hover:text-black transition-all group cursor-default">
                  <e.icon className="w-8 h-8 mx-auto mb-4 text-[#D4AF37] group-hover:text-black transition-colors" />
                  <p className="font-bold uppercase tracking-widest text-sm">{e.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE TRILOGY */}
      <section className="py-32 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Signature Hosting" title="The Wedding Event Trilogy" align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "The Sangeet", img: "/gallery-1.webp", icon: Music, desc: "High voltage energy, interactive family roasts, and non-stop hype." },
              { title: "The Varmala", img: "/gallery-4.webp", icon: Heart, desc: "Poetic shayari and cinematic grandeur for the wedding's main spotlight." },
              { title: "The Reception", img: "/service-wedding.webp", icon: Star, desc: "Crisp, sophisticated, and formal emceeing for the grand gala finale." }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[550px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={item.title} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-10 flex flex-col justify-end">
                  <item.icon className="w-12 h-12 text-[#D4AF37] mb-6" />
                  <h3 className="text-4xl font-black text-white mb-3 uppercase">{item.title}</h3>
                  <p className="text-gray-300 text-lg font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPDATED FAQ (Premium Style) */}
      <section className="py-32 container mx-auto px-4 max-w-4xl relative z-20">
        <SectionHeading subtitle="Show Support" title="Wedding Specific FAQs" align="center" />
        <div className="mt-16 space-y-4">
          {FAQS.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} id={`faq-${i}`} />
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 bg-[#D4AF37] text-black text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 uppercase tracking-tight">The Stage Awaits.</h2>
            <p className="text-2xl mb-12 max-w-2xl mx-auto font-black uppercase opacity-90 tracking-wide">Don't leave your legacy to chance. Book the definitive voice of Jaipur.</p>
            <Link href="/contact" aria-label="Check Anchor Yash Availability">
               <button className="px-14 py-6 bg-black text-white text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl rounded-full border-2 border-black hover:border-white">
                 Check Availability Now
               </button>
            </Link>
         </div>
      </section>
    </main>
  );
}

// --- UPDATED MAIN-PAGE STYLE FAQ ITEM ---
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-3xl border transition-all duration-300 ${
        isOpen 
          ? "border-black bg-black/5 shadow-xl" 
          : "border-white/10 bg-transparent" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
      >
        <span className={`font-bold text-xl pr-6 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
          isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-0 text-gray-400 text-base leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-6 font-medium">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
