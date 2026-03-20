"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Minus, Plus, Star,
  CalendarCheck,
  Sparkles, Users, Quote, Mic, Award, UserCheck, ArrowRight, MapPin, CheckCircle2, ShieldCheck
} from "lucide-react";

// ─────────────────────────────────────────────
// 1. CONFIG & STYLES
// ─────────────────────────────────────────────
const GOLD_COLOR = "#D4AF37";
const WA_LINK = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20found%20you%20searching%20for%20the%20best%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";

const style = `
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .sparkle-text { background-size: 200% auto; animation: shimmer 4s linear infinite; }
  @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
  @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
  .animate-marquee { animation: marquee 45s linear infinite; }
  .animate-marquee-reverse { animation: marquee-reverse 45s linear infinite; }
  .animate-marquee-slow { animation: marquee 60s linear infinite; }
  .mask-linear-gradient {
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ─────────────────────────────────────────────
// 2. ANIMATION VARIANTS
// ─────────────────────────────────────────────
const revealUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// ─────────────────────────────────────────────
// 3. DATA
// ─────────────────────────────────────────────
const STATS_DATA = [
  { value: "1100+", label: "Events Anchored", sub: "Across Rajasthan & India", icon: Mic },
  { value: "10,000+", label: "Largest Crowd", sub: "Commanded. Unscripted.", icon: Users },
  { value: "8+", label: "Years in Jaipur", sub: "Zero paper scripts", icon: Award },
  { value: "4.9★", label: "Client Rating", sub: "Across 200+ reviews", icon: UserCheck }
];

const SIGNATURE_SERVICES = [
  {
    title: "Best Wedding Anchor in Jaipur",
    desc: "From the emotional Varmala to the chaotic Baraat — every ritual conducted with cultural precision. Specialist for NRI families, palace venues in Kukas & Amer Road, and massive farmhouse weddings on Ajmer Road.",
    img: "/service-wedding.webp",
    href: "/wedding-anchor-jaipur",
    tag: "Weddings"
  },
  {
    title: "Corporate Event Anchor Jaipur",
    desc: "Award nights, product launches, and business summits at JECC Sitapura and Tonk Road. Sharp, unscripted, and matching the gravitas of your brand and keynote speakers.",
    img: "/service-corporate.webp",
    href: "/corporate-event-anchor-jaipur",
    tag: "Corporate"
  },
  {
    title: "Sangeet Host — Floor Packed Until 4 AM",
    desc: "The dance floor doesn't just stay alive — it stays packed. Unscripted crowd games, high-energy transitions, and complete command of 500 to 1,500 guests across Ajmer Road farmhouse venues.",
    img: "/service-fashion.webp",
    href: "/sangeet-anchor-jaipur",
    tag: "Sangeet"
  }
];

const TRUSTED_TAGS = [
  { label: "Celebrity Weddings", href: "/wedding-anchor-jaipur" },
  { label: "Corporate R&R Events", href: "/corporate-event-anchor-jaipur" },
  { label: "Big Fat Indian Weddings", href: "/wedding-anchor-jaipur" },
  { label: "Award Ceremonies", href: "/corporate-event-anchor-jaipur" },
  { label: "Sangeet & Mehndi", href: "/sangeet-anchor-jaipur" },
  { label: "Haldi Ceremonies", href: "/haldi-anchor-jaipur" },
  { label: "National-Level Sports Events", href: "/anchor-in-jaipur" }
];

const PLATFORMS = [
  { name: "WedMeGood", link: "https://www.wedmegood.com/profile/anchor-yash-25628297", color: "hover:text-[#DE5D83]" },
  { name: "WeddingWire", link: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166", color: "hover:text-[#1467B0]" },
  { name: "Justdial", link: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET", color: "hover:text-[#FF9800]" },
  { name: "ShaadiDukaan", link: "https://www.shaadidukaan.com/profile/yash-2", color: "hover:text-[#E91E63]" },
  { name: "StarClinch", link: "https://starclinch.com", color: "hover:text-[#FF5722]" },
  { name: "Sulekha", link: "https://sulekha.com", color: "hover:text-[#D4AF37]" },
  { name: "WeddingBazaar", link: "https://weddingbazaar.com", color: "hover:text-[#E53935]" },
  { name: "Google Reviews", link: "https://share.google/pMZGzEGOhXnJpLq5g", color: "hover:text-[#4285F4]" }
];

const PHILOSOPHY = [
  { icon: Sparkles, title: "100% Unscripted", text: "Zero paper scripts in 1,100+ events. I read the room, not the paper. Every moment is responsive, real, and built for your specific crowd." },
  { icon: Users, title: "Crowd Psychology", text: "I don't manage crowds — I move them. Whether 50 guests in C-Scheme or 1,500 at an Ajmer Road farmhouse, the energy stays locked until I decide it peaks." },
  { icon: Quote, title: "Crisis Management", text: "Power cuts, delayed brides, audio failures — handled invisible to your guests every time. Your insurance policy against awkward silences." },
];

// Old Guard vs Yash comparison
const VS_DATA = [
  { old: "Paper scripts, robotic delivery", yash: "Unscripted crowd psychology" },
  { old: "One language, one register", yash: "Fluent Hindi + English" },
  { old: "Dead Sangeet floors", yash: "Packed until 4 AM" },
  { old: "Panics in tech failures", yash: "Saves events, invisibly" },
  { old: "Breaks with 500+ guests", yash: "Commands 10,000+ crowds" },
  { old: "Generic, forgettable", yash: "Distinctly, unforgettably yours" },
];

// Jaipur location coverage
const LOCATIONS = [
  { area: "The Royal Corridors", zones: "Kukas · Amer Road · Delhi Road", desc: "Palace buyouts and NRI destination weddings. International protocols, bilingual fluency." },
  { area: "The Grand Venues", zones: "Ajmer Road · Bhankrota · Jhotwara", desc: "Farmhouse weddings of 1,000–1,500+ guests. The crowds that break average anchors." },
  { area: "The Urban Elite", zones: "Mansarovar · Vaishali Nagar · C-Scheme", desc: "Premium banquets, milestone birthdays, and VIP social events." },
  { area: "The Corporate Hubs", zones: "Sitapura JECC · Tonk Road · JLN Marg", desc: "Award nights, product launches, and business galas for national brands." },
];

const PROCESS_STEPS = [
  { num: "01", title: "The Vision Call", text: "We align on your exact vibe — royal elegance or high-energy celebration. Crowd size, inside jokes, must-haves, and the moments that cannot go wrong." },
  { num: "02", title: "The Blueprint", text: "No templates. A custom run-of-show with tailored games, meaningful crowd work, and a flawless timeline built specifically for your event." },
  { num: "03", title: "The Sound Check", text: "I arrive early, sync with your technical team, and own the stage so you can be a guest at your own event." },
  { num: "04", title: "The Execution", text: "I close on a massive high. My benchmark: your guests leave asking — where did you find this anchor?" }
];

const REVIEWS = [
  { name: "Nikita Agarwal", text: "We couldn't have asked for a better anchor! Yash brought the perfect blend of energy, charm, and professionalism.", event: "Wedding, Jaipur" },
  { name: "Sakshi Soni", text: "One of the best anchors in Jaipur, really the top most anchor in Jaipur. Made our event truly memorable.", event: "Sangeet, Jaipur" },
  { name: "Divyansh Soni", text: "It was a very good experience with Yash. Handled my Sangeet function very well.", event: "Sangeet, Jaipur" },
  { name: "Bharat Sharma", text: "Good personality and anchoring with humour and professionalism. Everything goes in flow with him.", event: "Wedding, Jaipur" },
  { name: "Riya Chauhan", text: "Anchor Yash absolutely rocked the stage at India Kids Fashion Week Season 11 at The Lalit, Jaipur!", event: "Corporate, Jaipur" },
  { name: "Saurabh Agarwal", text: "The experience was phenomenal. Great anchor with a soft and attracting personality and eye-catching presence.", event: "Event, Jaipur" },
  { name: "Keshav Srivastav", text: "He was engaging, professional, and kept the audience captivated throughout the event.", event: "Corporate, Jaipur" },
  { name: "Vartika Jetawat", text: "Anchored at my brother's Sangeet. Very friendly, understood the requirements, energetic throughout the function.", event: "Sangeet, Ajmer Road" },
  { name: "Utkarsh Godha", text: "Very nice — perfect entertaining anchor for our event.", event: "Event, Jaipur" },
  { name: "Divya Shree", text: "A true master of connection, they made everyone feel included. Highly recommend for an unforgettable experience!", event: "Wedding, Jaipur" }
];

const FAQS = [
  {
    q: "Who is the best anchor in Jaipur for weddings and events?",
    a: "Anchor Yash Soni is widely regarded as the best anchor in Jaipur with 1,100+ events hosted across Rajasthan. He specialises in luxury weddings at palace venues in Kukas and Amer Road, farmhouse Sangeets on Ajmer Road, corporate galas at JECC Sitapura, and VIP events in Mansarovar and Vaishali Nagar. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top choice for elite families, NRI clients, and national brands."
  },
  {
    q: "Do you travel for Destination Weddings outside Jaipur?",
    a: "Absolutely. While Jaipur is home base, I host events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and travel pan-India for the right events. Travel logistics and accommodation are discussed during the first booking call."
  },
  {
    q: "Which languages are you fluent in?",
    a: "I switch effortlessly between Hindi for the emotions, English for the class, and a bit of Rajasthani/Marwari to make the elders smile. For NRI families with international guests, the Hindi-English transitions are completely seamless."
  },
  {
    q: "Can you handle a farmhouse wedding crowd of 1,000+ guests on Ajmer Road?",
    a: "Large-format crowds are a specialty. I have commanded open events of 10,000+ people unscripted. A farmhouse crowd of 1,000–1,500 guests on Ajmer Road is a standard evening. Crowd psychology — reading energy patterns, controlling chaos, and redirecting attention — is the core skill that separates a real anchor from an announcer."
  },
  {
    q: "Why should we hire Anchor Yash over others in Jaipur?",
    a: "Because I have never used a paper script in 1,100+ events. If the food is delayed, I keep the crowd entertained. If the PA fails, I turn it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. I am your insurance policy against awkward silences — and the difference between an event people attend and one they remember."
  },
  {
    q: "How far in advance should I book the best anchor in Jaipur?",
    a: "My calendar fills 6–8 months ahead for peak wedding season (October–February). I do not maintain a waitlist and do not send replacement anchors. Once your date is confirmed, it is exclusively reserved for your event. Reach out via WhatsApp immediately once your date is finalised."
  },
  {
    q: "Do you prepare scripts for our family members hosting games?",
    a: "Yes. I know Chachas and Masis get nervous. I provide simple, funny script templates and do a quick 10-minute rehearsal with them before the show so they look like pros on stage."
  },
  {
    q: "What happens if something goes wrong on the day of the event?",
    a: "Technical failures, power cuts, last-minute schedule changes, delayed brides — I have handled all of it without the guests noticing anything was wrong. Crisis management under pressure is a core competency. An anchor who has never rescued a failing event has never been truly tested."
  },
  {
    q: "Do you also anchor corporate events in Jaipur?",
    a: "Yes. Corporate events — award nights, product launches, annual galas, and business summits — are a core specialisation. I regularly anchor events at JECC Sitapura, Tonk Road, and JLN Marg for national corporations, delivering sharp, unscripted hosting that matches the gravitas of senior executives and keynote speakers."
  },
  {
    q: "What are your payment terms?",
    a: "A 50% advance is required to block your date. The remaining balance is due on the day of the event, before I take the stage. All terms are confirmed in a simple written agreement."
  },
  {
    q: "Is Anchor Yash available for birthday parties in Jaipur?",
    a: "Yes. Milestone birthdays, anniversary galas, and VIP private events in Mansarovar, Vaishali Nagar, and C-Scheme are a significant part of the calendar. The energy and tone is fully customised to the family's personality and vision."
  },
  {
    q: "Do you do virtual or hybrid events?",
    a: "Yes. Post-2020, I have mastered engaging audiences through a camera lens for virtual town halls, webinars, and hybrid corporate events across India."
  }
];

const GALLERY_IMAGES = [
  "/gallery-1.webp",
  "/gallery-2.webp",
  "/gallery-3.webp",
  "/gallery-4.webp",
  "/gallery-5.webp",
  "/gallery-6.webp"
];

// ─────────────────────────────────────────────
// 4. SUB-COMPONENTS
// ─────────────────────────────────────────────
const GoldTextureText = ({ children, className = "", animate = false }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${animate ? 'sparkle-text' : ''} ${className}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD_COLOR }}
  >
    {children}
  </span>
);

const ScrollReveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={revealUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          : "border-white/10 bg-transparent hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-lg pr-4 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"}`}>
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

// ─────────────────────────────────────────────
// 5. MAIN PAGE
// ─────────────────────────────────────────────
export default function HomePage() {

  // FAQ Schema — injected client-side (layout has LocalBusiness + Person already)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      <style>{style}</style>

      {/* FAQ JSON-LD — client injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════════════
          1. HERO — H1 targets primary keyword
      ═══════════════════════════════════════ */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 opacity-60">
            <Image
              src="/hero-slide-1.webp"
              alt="Anchor Yash Soni — best anchor in Jaipur hosting a premium live event on stage"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 z-30 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/40 text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                ★ Rated #1 Anchor in Jaipur
              </span>
            </div>

            {/* ── PRIMARY H1 — keyword-optimised ── */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.95]">
              JAIPUR&apos;S <br />
              <GoldTextureText animate={true}>BEST ANCHOR.</GoldTextureText>
            </h1>

            {/* ── SUBHEADING with location signals ── */}
            <p className="text-lg md:text-2xl text-zinc-300 mb-4 max-w-2xl font-light leading-relaxed">
              Anchor Yash Soni — the most commanding event host in Jaipur. 1,100+ events. Palace weddings in Kukas, farmhouse Sangeets on Ajmer Road, corporate galas at JECC Sitapura.
            </p>
            <p className="text-base text-zinc-500 mb-10 max-w-xl font-light">
              Bilingual Hindi/English · Unscripted · 10,000+ crowd commanded · Zero paper scripts
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  SECURE YOUR DATE →
                </button>
              </a>
              <Link href="/portfolio">
                <button className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-full hover:bg-[#D4AF37]/10 transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                  <Play size={18} fill="currentColor" /> VIEW PORTFOLIO
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. STATS STRIP — authority numbers
      ═══════════════════════════════════════ */}
      <section className="py-0 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {STATS_DATA.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="text-center group py-10 px-4">
                <div className="mb-3 flex justify-center">
                  <stat.icon className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-1">
                  <GoldTextureText>{stat.value}</GoldTextureText>
                </div>
                <div className="text-zinc-400 text-xs uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                <div className="text-zinc-600 text-[10px] tracking-wider mt-1">{stat.sub}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. INTRODUCTION — keyword-rich body text
      ═══════════════════════════════════════ */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block font-bold">The Best Anchor in Jaipur</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Beyond Announcements. <br />
              <GoldTextureText>Beyond Scripts. <br />Beyond Jaipur.</GoldTextureText>
            </h2>
            <p className="text-zinc-400 text-lg mb-5 leading-relaxed font-light">
              When Jaipur&apos;s elite families and NRI clients search for the <strong className="text-white">best anchor in Jaipur</strong>, one name consistently appears — Anchor Yash Soni. With 1,100+ events hosted across Rajasthan, Yash doesn&apos;t just host events. He engineers them.
            </p>
            <p className="text-zinc-400 text-base mb-5 leading-relaxed font-light">
              From palace weddings at Kukas and Amer Road heritage properties to high-energy Sangeets on Ajmer Road farmhouse lawns — from corporate award nights at JECC Sitapura to VIP birthday galas in Mansarovar — every format is a different craft, and Yash has mastered all of them.
            </p>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
              Bilingual in Hindi and English. Fluent in Rajasthani culture. <strong className="text-white">Zero paper scripts in 1,100+ events.</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 border-b border-[#D4AF37] pb-1 text-[#D4AF37] text-sm tracking-widest uppercase hover:text-white transition-colors">
                Read My Story <ArrowRight size={14} />
              </Link>
              <Link href="/best-anchor-in-jaipur" className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-zinc-400 text-sm tracking-widest uppercase hover:text-white transition-colors">
                Why I&apos;m the Best <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37]/50 group transition-all duration-500">
                <Image
                  src="/intro-portrait-top.webp"
                  alt="Anchor Yash Soni — best anchor in Jaipur in a luxury suit"
                  fill quality={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="mt-12">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37]/50 group transition-all duration-500">
                <Image
                  src="/intro-portrait-bottom.webp"
                  alt="Anchor Yash Soni engaging with a wedding crowd in Jaipur"
                  fill quality={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. PLATFORMS MARQUEE
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-black border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6 mb-10 flex justify-center">
          <span className="text-center text-xs font-black tracking-[0.3em] text-white/40 uppercase border border-white/10 bg-white/5 rounded-full px-8 py-3 backdrop-blur-md">
            VERIFIED & TRUSTED ON
          </span>
        </div>
        <div className="flex overflow-hidden mask-linear-gradient">
          <div className="flex whitespace-nowrap gap-24 items-center animate-marquee w-max">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((item, idx) => (
              <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer"
                className={`text-3xl md:text-5xl font-black text-zinc-600 uppercase no-underline transition-colors duration-500 hover:scale-105 transform ${item.color}`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. SERVICES BENTO — keyword in every card title
      ═══════════════════════════════════════ */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest">Event Mastery</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2">
              Best Anchor in Jaipur <span className="text-[#D4AF37]">For Every Format.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SIGNATURE_SERVICES.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <Link href={service.href}>
                <div className="relative h-[520px] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:border-[#D4AF37]/50 cursor-pointer">
                  <Image
                    src={service.img}
                    alt={`${service.title} — Anchor Yash Soni Jaipur`}
                    fill quality={100}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-widest bg-[#D4AF37] text-black px-3 py-1 rounded font-bold">{service.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="h-0.5 w-10 bg-[#D4AF37] mb-4 rounded-full" />
                    <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Internal links to all services */}
        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/wedding-anchor-jaipur">
            <button className="px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-sm rounded-lg hover:bg-[#D4AF37]/10 transition-all">
              Wedding Anchor Jaipur
            </button>
          </Link>
          <Link href="/sangeet-anchor-jaipur">
            <button className="px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-sm rounded-lg hover:bg-[#D4AF37]/10 transition-all">
              Sangeet Anchor
            </button>
          </Link>
          <Link href="/haldi-anchor-jaipur">
            <button className="px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-sm rounded-lg hover:bg-[#D4AF37]/10 transition-all">
              Haldi Host
            </button>
          </Link>
          <Link href="/mehendi-anchor-jaipur">
            <button className="px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-sm rounded-lg hover:bg-[#D4AF37]/10 transition-all">
              Mehendi Anchor
            </button>
          </Link>
          <Link href="/corporate-event-anchor-jaipur">
            <button className="px-6 py-3 border border-white/10 text-zinc-400 text-sm rounded-lg hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all">
              Corporate Events
            </button>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TRUSTED TAGS — with internal links
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 mb-10 text-sm uppercase tracking-widest font-medium">
            Trusted by leading brands and events across Jaipur & Rajasthan
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {TRUSTED_TAGS.map((tag, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Link href={tag.href}>
                  <div className="px-8 py-3 rounded-full border border-white/5 bg-white/5 text-zinc-300 text-sm md:text-base font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all cursor-pointer">
                    {tag.label}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. COMPETITOR TAKEDOWN — "Why Yash"
      ═══════════════════════════════════════ */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block font-bold">The Market Reality</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Experience is good. <br />
              <GoldTextureText>Relevance is better.</GoldTextureText>
            </h2>
            <p className="text-zinc-400 text-base mb-5 leading-relaxed font-light">
              Jaipur&apos;s event market is full of anchors who boast &quot;20 years of experience.&quot; What that actually means: 20 years of reading from the same paper script while your million-rupee decor rots in awkward silence.
            </p>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
              The <strong className="text-white">best anchor in Jaipur</strong> isn&apos;t the one with the most years — it&apos;s the one who commands your specific crowd, reads your specific room, and makes your family feel like the only event that has ever mattered.
            </p>
            <div className="space-y-3">
              {[
                "Never used a paper script in 1,100+ events",
                "Commands crowds of 10,000+ unscripted",
                "Bilingual Hindi/English in real time",
                "Crisis-tested: power cuts, audio failures, delayed brides — all handled",
                "Cultural fluency: Rajasthani rituals + international NRI protocol",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/best-anchor-in-jaipur" className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-black text-sm font-bold rounded-lg hover:bg-white transition-all">
                See Why I&apos;m #1 in Jaipur <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/40">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_auto_1fr] px-6 py-4 border-b border-white/10">
                <span className="text-zinc-500 text-xs uppercase tracking-wider">The Old Guard</span>
                <span className="bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded self-center mx-3">VS</span>
                <span className="text-[#D4AF37] text-xs uppercase tracking-wider text-right">Anchor Yash</span>
              </div>
              {VS_DATA.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_1px_1fr] border-b border-white/5 last:border-b-0">
                  <div className="px-5 py-3.5 text-zinc-600 text-sm line-through">{row.old}</div>
                  <div className="bg-white/5" />
                  <div className="px-5 py-3.5 text-white text-sm">{row.yash}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. WHY ME — 3 pillars
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest">The Yash Soni Difference</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Why Jaipur&apos;s Elite <span className="text-[#D4AF37]">Choose Yash.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-zinc-900/30 p-10 rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 group h-full hover:-translate-y-2">
                  <item.icon className="w-12 h-12 text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. LOCATION COVERAGE — local SEO net
      ═══════════════════════════════════════ */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest">Jaipur Coverage</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Anchor in Jaipur — <span className="text-[#D4AF37]">Every Zone.</span>
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              From palace corridors in Kukas to farmhouse belts on Ajmer Road — Yash Soni dominates every event territory in Jaipur.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS.map((loc, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href="/anchor-in-jaipur">
                <div className="border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                  <MapPin size={18} className="text-[#D4AF37] mb-3" />
                  <div className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">{loc.area}</div>
                  <div className="text-zinc-300 text-xs mb-3 font-medium">{loc.zones}</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{loc.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/anchor-in-jaipur" className="inline-flex items-center gap-2 text-[#D4AF37] text-sm uppercase tracking-widest border-b border-[#D4AF37]/40 pb-1 hover:text-white transition-colors">
            See Full Jaipur Coverage <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. GALLERY MARQUEE
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-zinc-900/20 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Moments of <GoldTextureText>Magic.</GoldTextureText>
            </h2>
            <p className="text-zinc-400 text-sm">
              Anchor Yash Soni live — Jaipur&apos;s weddings, Sangeets, and corporate events.
            </p>
          </div>
          <Link href="/portfolio" className="text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-1 shrink-0 hover:text-white transition-colors">
            Full Portfolio →
          </Link>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused] w-max pl-6">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
              <div key={idx} className="relative w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shrink-0 group cursor-pointer">
                <Image
                  src={img}
                  alt={`Anchor Yash Soni live event moment ${(idx % 6) + 1} — best anchor in Jaipur`}
                  fill quality={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          11. PROCESS
      ═══════════════════════════════════════ */}
      <section className="py-24 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              From First Call to <span className="text-[#D4AF37]">Standing Ovation.</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative p-6 border-l border-white/10 hover:border-[#D4AF37] transition-colors pl-8 group h-full">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-black border border-[#D4AF37] rounded-full flex items-center justify-center text-[10px] text-[#D4AF37] font-bold group-hover:scale-125 transition-transform">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          12. REVIEWS — moving marquee
      ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden relative bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              What Jaipur Says About <span className="text-[#D4AF37]">Yash.</span>
            </h2>
            <p className="text-center text-zinc-500 mt-3 text-sm">
              Real reviews from real events — weddings, Sangeets, and corporate galas across Jaipur
            </p>
          </ScrollReveal>
        </div>

        <div className="flex overflow-hidden mask-linear-gradient mb-6">
          <div className="flex whitespace-nowrap gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
            {[...REVIEWS.slice(0, 5), ...REVIEWS.slice(0, 5), ...REVIEWS.slice(0, 5)].map((review, idx) => (
              <a key={idx} href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                className="shrink-0 w-[320px] md:w-[400px] p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group cursor-pointer flex flex-col whitespace-normal">
                <div className="flex text-[#D4AF37] gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#D4AF37" />)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-normal flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">
                    — {review.name}
                  </h4>
                  <p className="text-zinc-600 text-[11px] mt-0.5">{review.event}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden mask-linear-gradient">
          <div className="flex whitespace-nowrap gap-6 animate-marquee-reverse w-max hover:[animation-play-state:paused]">
            {[...REVIEWS.slice(5), ...REVIEWS.slice(5), ...REVIEWS.slice(5)].map((review, idx) => (
              <a key={idx} href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                className="shrink-0 w-[320px] md:w-[400px] p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group cursor-pointer flex flex-col whitespace-normal">
                <div className="flex text-[#D4AF37] gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#D4AF37" />)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-normal flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">
                    — {review.name}
                  </h4>
                  <p className="text-zinc-600 text-[11px] mt-0.5">{review.event}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          13. FAQ — keyword-rich questions
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest">People Also Ask</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
                Best Anchor in Jaipur — <span className="text-[#D4AF37]">FAQ.</span>
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          14. SCARCITY CLOSE — urgency CTA
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.02] leading-none tracking-wide whitespace-nowrap">JAIPUR</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8">
              <ShieldCheck size={14} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">The Final Word</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.95]">
              Your Date <br /><GoldTextureText>Won&apos;t Wait.</GoldTextureText>
            </h2>
            <p className="text-zinc-400 mb-4 text-base leading-relaxed">
              The best anchor in Jaipur books <strong className="text-[#D4AF37]">6–8 months in advance.</strong> I do not maintain a waitlist. I do not send replacements. Every event on my calendar gets my complete, undivided presence.
            </p>
            <p className="text-zinc-500 mb-10 text-sm">
              When the calendar is full — it is simply full.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <button className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold text-lg uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <CalendarCheck size={22} /> Claim Your Date via WhatsApp
              </button>
            </a>
            <p className="mt-6 text-zinc-600 text-xs uppercase tracking-[0.2em]">
              Best Anchor in Jaipur · <strong className="text-[#D4AF37]">Limited Slots Remaining</strong> · 2025–2026 Season
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER CTA — internal links
      ═══════════════════════════════════════ */}
      <footer className="py-24 border-t border-white/10 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Your Stage Awaits.</h2>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto text-base">
            Jaipur&apos;s most trusted anchor. Dates for the upcoming season are filling fast.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold text-lg uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <CalendarCheck size={22} /> Check Availability
            </button>
          </Link>

          {/* Footer internal nav — SEO link juice */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-zinc-500 text-xs font-medium tracking-widest uppercase">
            <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
            <Link href="/wedding-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
            <Link href="/sangeet-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Sangeet Host</Link>
            <Link href="/haldi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Haldi Anchor</Link>
            <Link href="/mehendi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Mehendi Host</Link>
            <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
            <Link href="/anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Anchor in Jaipur</Link>
            <Link href="/event-management-jaipur" className="hover:text-[#D4AF37] transition-colors">Event Management</Link>
            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Yash</Link>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-zinc-600 text-xs tracking-widest uppercase">
            <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href="https://youtube.com/@anchor_yash" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
            <a href="mailto:info@yashsoni.in" className="hover:text-[#D4AF37] transition-colors">Email</a>
          </div>

          <div className="mt-6 text-zinc-700 text-xs">
            © {new Date().getFullYear()} Anchor Yash Soni — Best Anchor in Jaipur, Rajasthan. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
