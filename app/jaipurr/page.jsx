"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, Globe, MapPin, Crown, Minus, Plus, 
  MessageCircle, Star, ShieldCheck, PlayCircle,
  Video, CreditCard, Users, Zap, PenTool
} from "lucide-react";

// --- CUSTOM LUXURY BRANDING ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD_COLOR }}
  >
    {children}
  </span>
);

const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Crown className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- FAQ COMPONENT & SCHEMA DATA ---
const FAQS = [
  { q: "Who is the best anchor in Jaipur for luxury weddings?", a: "Yash Soni is widely recognized as one of the best anchors in Jaipur, specifically for high-end destination weddings, Sangeet nights, and corporate galas, bringing over 5 years of unscripted energy." },
  { q: "Are you available for events at Fairmont and Rambagh Palace?", a: "Yes. I have extensive experience hosting at Jaipur's most elite palace properties, including Fairmont, Rambagh Palace, The Leela, and Jai Mahal Palace, fully understanding their specific event protocols." },
  { q: "Do you host corporate events and summits in Jaipur?", a: "Absolutely. I frequently host large-scale corporate galas, award ceremonies, and summits at premium venues like JECC Sitapura, ITC Rajputana, and Clarks Amer." },
  { q: "Do you provide bilingual hosting (English & Hindi)?", a: "Yes, bilingual mastery is my signature. I seamlessly switch between English and Hindi, which is crucial for NRI weddings and global corporate events happening in Rajasthan." }
];

// Generates the JSON-LD Script for Google Drop-down Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "border-white/10 bg-transparent hover:border-white/20"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
        <span className={`font-semibold text-lg pr-4 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- DATA ---
const WHATSAPP_LINK = "https://wa.me/917737877978?text=Hi%20Yash,%20I%20was%20looking%20at%20your%20website%20and%20wanted%20to%20check%20your%20availability%20for%20an%20upcoming%20event.";

const venueSilos = [
  {
    title: "Palace & Heritage Weddings",
    target: "Kukas, Amer, & Delhi Road",
    venues: "Fairmont • Rambagh Palace • The Leela",
    desc: "When international guests fly into Jaipur, they expect absolute royalty. I provide elegant, highly articulate bilingual hosting that matches the prestige of a 5-star palace buyout.",
    image: "/jal-mahal-jaipur-artist.webp"
  },
  {
    title: "Grand Lawns & Sangeets",
    target: "Ajmer Road & Bhankrota",
    venues: "Entertainment Paradise • The Woods",
    desc: "1,000+ guests. Massive stages. Deafening music. You need an anchor who can control chaos, manage the crowd psychology, and keep the dance floor packed until 3 AM.",
    image: "/sangeet-red-glitter-stage.webp"
  },
  {
    title: "Elite Corporate Summits",
    target: "Sitapura JECC, Tonk Road & JLN Marg",
    venues: "JECC • ITC Rajputana • Clarks Amer",
    desc: "Sharp, witty, and profoundly professional. From CEO introductions to rapid-fire crowd engagement, ensuring your brand's prestige is elevated on the corporate stage.",
    image: "/corporate-gala-dinner-green.webp"
  }
];

const jaipurZones = [
  { zone: "Kukas & Amer Road", vibe: "Ultra-Luxury" },
  { zone: "Ajmer Road", vibe: "Massive Farmhouses" },
  { zone: "Mansarovar", vibe: "Premium Mid-Segment" },
  { zone: "Vaishali Nagar", vibe: "Elegant Neighborhoods" },
  { zone: "Sikar Road", vibe: "High-Capacity Royal" },
  { zone: "Tonk Road", vibe: "Hotel & Corporate" },
  { zone: "Agra Road", vibe: "Heritage Gardens" },
  { zone: "Jagatpura", vibe: "Modern Resorts" },
  { zone: "Jhotwara", vibe: "Large-Scale Value" },
  { zone: "Old City", vibe: "Traditional Royal" }
];

const anchorAdvantage = [
  { icon: <Globe className="w-6 h-6 text-[#D4AF37]" />, title: "Bilingual Mastery", desc: "Seamlessly switching between English, Hindi, and regional dialects to engage diverse crowds." },
  { icon: <Users className="w-6 h-6 text-[#D4AF37]" />, title: "Crowd Psychology", desc: "Reading the room instantly. Knowing exactly when to elevate the energy and when to bring a sophisticated tone." },
  { icon: <Zap className="w-6 h-6 text-[#D4AF37]" />, title: "Crisis Management", desc: "Technical glitches? Delayed entries? I handle on-ground chaos invisibly, keeping the audience entertained." },
  { icon: <PenTool className="w-6 h-6 text-[#D4AF37]" />, title: "Custom Scripting", desc: "No generic templates. Every script is custom-written to reflect your family's unique story or brand's voice." }
];

const masonryImages = [
  { src: "/varmala-fireworks-color-shots.webp", alt: "Best Wedding Anchor Yash Soni hosting varmala ceremony in Jaipur" },
  { src: "/corporate-gala-dinner-green.webp", alt: "Corporate Event Anchor hosting business summit in Sitapura Jaipur" },
  { src: "/sangeet-red-glitter-stage.webp", alt: "High energy Sangeet Anchor in Jaipur Ajmer Road" },
  { src: "/indian-bride-solo-decor.webp", alt: "Luxury NRI Destination Wedding Host Kukas Jaipur" },
  { src: "/rajasthani-artist-fort-entry.webp", alt: "Traditional Rajasthani Anchor Agra Road Jaipur" },
  { src: "/white-flower-mandap-jaipur.webp", alt: "Elegant wedding emcee Jagatpura Jaipur" }
];

const nriSteps = [
  { icon: <Video className="w-6 h-6 text-[#D4AF37]" />, title: "Virtual Consultation", desc: "We map out your vision, guest profile, and event flow via Zoom or Google Meet." },
  { icon: <CreditCard className="w-6 h-6 text-[#D4AF37]" />, title: "Global Payments", desc: "Seamless cross-border booking. USD, GBP, EUR, AUD, and AED accepted." },
  { icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />, title: "On-Ground Control", desc: "You handle the travel; I coordinate with your local planners and hotel teams." }
];

export default function AnchorInJaipur() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* INJECT FAQ SCHEMA FOR GOOGLE */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. THE DWELL-TIME VIDEO HERO */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden border-b border-white/5">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-40 scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <Image src="/varmala-fireworks-color-shots.webp" alt="Fallback" fill className="object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2 rounded-full bg-black/50 backdrop-blur-xl mb-8 shadow-2xl">
              <Mic2 className="w-4 h-4 text-[#D4AF37]" />
              <h1 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">Voted Best Anchor in Jaipur</h1>
            </div>
            <div className="text-5xl md:text-[6rem] lg:text-[8rem] font-display font-black leading-[0.85] mb-8 uppercase tracking-tighter drop-shadow-2xl">
              THE VOICE OF <br /> <GoldTextureText>CELEBRATION.</GoldTextureText>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-white/10 pt-10">
               <p className="max-w-xl text-xl text-gray-300 font-light leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-xl">
                 With over 5 years of mastery, I engineer the vibe, flow, and energy for luxury weddings and corporate galas across Rajasthan's most iconic venues.
               </p>
               <div className="flex gap-6 shrink-0">
                 <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                   <button className="flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-full group">
                     <PlayCircle className="w-6 h-6 group-hover:animate-pulse" />
                     Book The Stage
                   </button>
                 </Link>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. HYPER-LOCAL VENUE SILOS */}
      <section className="py-32 bg-[#080808] border-b border-white/5 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <SectionHeading subtitle="Territory Expertise" title="Mastering Jaipur's Venues." />
            <p className="text-gray-400 text-lg mb-16 font-light max-w-3xl">
              From the heritage palaces of Kukas to the grand corporate halls of Sitapura, your venue dictates the vibe. I tailor the engagement to dominate the exact environment you have booked.
            </p>
            <div className="grid lg:grid-cols-3 gap-8">
              {venueSilos.map((silo, i) => (
                <div key={i} className="group relative rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 h-[550px] flex flex-col justify-end">
                  <Image src={silo.image} alt={`${silo.title} in Jaipur`} fill unoptimized quality={100} className="object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-100 z-10"></div>
                  <div className="relative z-20 p-8 w-full">
                    <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded-full mb-4 backdrop-blur-md">
                      📍 {silo.target}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">{silo.title}</h3>
                    <p className="text-[#D4AF37] text-sm font-semibold mb-4 tracking-wider">{silo.venues}</p>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">{silo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 3. THE 10 MICRO-MARKETS GRID (Maximum SEO Density) */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Commanding Every Zone in the Pink City</h3>
            <p className="text-gray-400 text-sm font-light">Targeted expertise across all major wedding and corporate hubs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {jaipurZones.map((zone, i) => (
              <div key={i} className="p-4 border border-white/5 bg-[#050505] rounded-2xl hover:border-[#D4AF37]/40 transition-colors group">
                <MapPin className="w-5 h-5 text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-sm mb-1">{zone.zone}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">{zone.vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ANCHOR ADVANTAGE (Elongating the page) */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading subtitle="The Mechanics" title="The Anchor Advantage." align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {anchorAdvantage.map((adv, i) => (
              <div key={i} className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{adv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MASONRY "PROOF" GALLERY */}
      <section className="py-32 bg-[#080808] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading subtitle="Visual Proof" title="The Stage in Action." align="center" />
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-16">
            {masonryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 group break-inside-avoid">
                <Image 
                  src={img.src} alt={img.alt} width={600} height={800} 
                  className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NRI GLOBAL TRUST FUNNEL */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">Overseas Bookings</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tight mb-8">
                Designed for <br/><GoldTextureText>Global Clients.</GoldTextureText>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-12">
                Planning a luxury Jaipur wedding from New York, London, or Dubai? I am trusted by international couples to deliver a world-class hosting experience. Zero time-zone friction. Absolute cultural intelligence.
              </p>
              <div className="space-y-8">
                {nriSteps.map((step, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 font-light text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] group hidden lg:block">
              <Image src="/indian-bride-solo-decor.webp" alt="NRI Destination Wedding Anchor Jaipur" fill unoptimized quality={100} className="object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold mb-2">The Global Standard</p>
                <p className="text-white text-2xl font-display font-light italic">"You focus on the guests. I focus on the execution."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-32 container mx-auto px-6 max-w-4xl border-b border-white/5">
        <SectionHeading subtitle="Clarity" title="Frequently Asked" align="center" />
        <p className="text-gray-400 text-center mb-16">Everything you need to know before securing the microphone.</p>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* 8. AGGRESSIVE WHATSAPP CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-white uppercase tracking-tighter">
            SECURE THE <br/> <GoldTextureText className="italic pr-4">MICROPHONE.</GoldTextureText>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Premium dates for the upcoming wedding season are heavily restricted. Bypass the forms and connect with me directly.
          </p>
          <div className="flex justify-center">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-3 px-14 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                <MessageCircle className="w-6 h-6" />
                Message on WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
