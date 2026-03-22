"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music, Smile, Heart, Zap, Trophy,
  Users, Play, Star,
  Sparkles, Minus, Plus, Leaf,
  MapPin, CheckCircle2, CalendarCheck, ArrowRight,
  Building2, Flower2, Mic2, ShieldCheck
} from "lucide-react";

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20Mehendi%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";
const GOLD = "#D4AF37";
// Keep the emerald accent — it's the Mehendi signature color
const EMERALD = "#10b981";

const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
`;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
// Gold for the brand name / primary accents
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center gold-shimmer ${className}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD }}
  >
    {children}
  </span>
);

// Emerald for the Mehendi personality accent — kept as requested
const E = ({ children, className = "" }) => (
  <span className={`text-emerald-400 ${className}`}>{children}</span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fixed: subtitle = span, title = h2
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-2 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Leaf className="w-4 h-4 text-emerald-400" aria-hidden="true" />
        <span className="text-emerald-400 text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">{title}</h2>
    </motion.div>
  </div>
);

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
// Fixed: real credibility numbers, not vague qualifiers
const STATS = [
  { val: "1100+", label: "Events Hosted", icon: Mic2, color: "text-emerald-400" },
  { val: "4.9★", label: "Client Rating", icon: Star, color: "text-[#D4AF37]" },
  { val: "3-4 hrs", label: "Zero Boring Moments", icon: Music, color: "text-emerald-400" },
  { val: "200+", label: "Verified Reviews", icon: Trophy, color: "text-[#D4AF37]" },
];

const GAME_CATEGORIES = [
  {
    title: "Musical Madness",
    color: "emerald",
    icon: Music,
    games: [
      "Bollywood Antakshari — Modern Rules",
      "Guess The Song Challenge",
      "The Hookstep Dance-Off",
      "Traditional Dholak Jam Sessions",
    ],
  },
  {
    title: "Couple Chemistry",
    color: "teal",
    icon: Heart,
    games: [
      "The Shoe Game — Spicy Edition",
      "Couple Trivia & Family Roasts",
      "Find the Name in the Henna",
      "Who Knows the Bride Best?",
    ],
    highlight: true,
  },
  {
    title: "Crowd Engagement",
    color: "green",
    icon: Users,
    games: [
      "Pass the Pillow with Dares",
      "Musical Tambola / Bingo",
      "Family Awards Ceremony",
      "Rapid Fire Ice-Breakers",
    ],
  },
];

const LOCATIONS = [
  {
    zone: "Ajmer Road & Bhankrota",
    type: "Farmhouse Mehendi Events",
    desc: "Large farmhouse weddings with 500–1,000 guests across Jaipur's most popular event corridor. Managing multiple family groups with zero dead time.",
    keywords: ["Mehendi anchor Ajmer Road", "Farmhouse Mehendi host Jaipur"],
  },
  {
    zone: "Kukas & Amer Road",
    type: "Palace & Heritage Mehendi",
    desc: "NRI families, international guests, heritage venue Mehendi ceremonies. Bilingual hosting with deep Rajasthani cultural warmth.",
    keywords: ["Mehendi anchor Kukas Jaipur", "Ladies Sangeet heritage venue Jaipur"],
  },
  {
    zone: "Mansarovar & Vaishali Nagar",
    type: "Premium Banquet Mehendi",
    desc: "Intimate to mid-size Mehendi events for Jaipur's urban families. Sophisticated energy that keeps every generation engaged.",
    keywords: ["Mehendi host Mansarovar Jaipur", "Ladies Sangeet Vaishali Nagar"],
  },
  {
    zone: "Destination & All India",
    type: "Destination Mehendi",
    desc: "Udaipur, Jodhpur, Goa, Dubai — the same warmth and energy travels. Hands-free games and Dholak sessions work everywhere.",
    keywords: ["Destination Mehendi anchor India", "Mehendi host Rajasthan"],
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Singhania",
    quote: "Yash anchored my Mehendi in Mansarovar. The Antakshari rounds had my 80-year-old Nani on her feet. That alone was worth every rupee. Absolutely unforgettable.",
    event: "Mehendi Ceremony · Mansarovar, Jaipur",
    guests: "Family event",
  },
  {
    name: "Kapoor Family",
    quote: "Our Mehendi was combined with a Ladies Sangeet for 400 guests. Yash bridged the Dholak sessions for elders and the Bollywood games for the younger crowd perfectly. Not a single boring moment.",
    event: "Combined Mehendi + Ladies Sangeet · Kukas, Jaipur",
    guests: "400 guests",
  },
  {
    name: "Mehta Family",
    quote: "The 'Shoe Game' roast had the entire family in tears of laughter. He read our crowd perfectly — knew when to slow down for the rituals and when to ignite the dance floor.",
    event: "Mehendi Ceremony · Ajmer Road, Jaipur",
    guests: "Family wedding",
  },
];

const FAQS = [
  {
    q: "Who is the best Mehendi anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated Mehendi host with 1,100+ events hosted. He specialises in hands-free interactive Mehendi games, Ladies Sangeet hosting, musical trivia, and combined Mehendi-Sangeet events. His bilingual Hindi/English fluency makes him the top choice for both local Jaipur families and NRI weddings.",
  },
  {
    q: "Why hire a specialised Mehendi anchor in Jaipur?",
    a: "Mehendi ceremonies run 3–4 hours while guests have wet henna. Without a specialised host, those hours drag. A Mehendi anchor curates hands-free musical games, verbal trivia, and crowd interactions that keep energy peaking for the entire ceremony — no awkward silences, no guests on their phones, no boring waiting.",
  },
  {
    q: "What kind of Mehendi games are played for guests with henna on?",
    a: "Because guests can't use their hands freely, all games are specifically designed for verbal and visual participation. Bollywood Antakshari with modern rules, Guess the Song Challenge, Couple Trivia Roasts, Musical Tambola, and Rapid Fire Ice-Breakers. Every game keeps the crowd active without requiring hands.",
  },
  {
    q: "Do you host Ladies Sangeet alongside the Mehendi ceremony?",
    a: "Yes. Combined Mehendi and Ladies Sangeet events are a core specialisation. The challenge is bridging traditional Dholak sessions for the elders and modern Bollywood games for the youth — doing both in the same evening without losing either group. That transition is a skill that takes 1,100+ events to perfect.",
  },
  {
    q: "Can you handle the groom's entry at a combined Mehendi event?",
    a: "Absolutely. Combined Mehendi events with a groom's entry are incredibly energetic. The Bride Squad vs. Groom Squad dynamic, a Dhol-backed entry build, and the couple games that follow — all choreographed to feel spontaneous and organic, never rehearsed.",
  },
  {
    q: "Do you coordinate with the DJ and Dhol team for Mehendi?",
    a: "Yes. Arriving at least 1.5 hours early for a coordination call with the DJ and Dholwala is standard. Specific music cues, game background beats, and entry tracks are all synced so the audio-visual experience is seamless throughout the Mehendi.",
  },
  {
    q: "What if some family members are shy to participate?",
    a: "That's exactly what professional crowd psychology is for. I use seamless Ice-Breakers that pull people in naturally without putting them on the spot. The goal is for every guest — from Nani to the youngest cousin — to feel included and engaged, never forced.",
  },
  {
    q: "Do you travel for Mehendi events outside Jaipur?",
    a: "Yes. Destination Mehendi events in Udaipur, Jodhpur, Jaisalmer, Goa, Dubai, and across India are a regular part of the calendar. Travel logistics are structured into the booking terms. Early enquiry is recommended as destination slots fill before regular Jaipur dates.",
  },
  {
    q: "What is the hosting duration for a Mehendi ceremony?",
    a: "A standard Mehendi package is 3–4 hours — from guest arrivals through the henna application games and into the open Dholak or dance session at the end. For combined Mehendi + Ladies Sangeet events, extended 5–6 hour formats are available.",
  },
  {
    q: "How far in advance should we book a Mehendi anchor in Jaipur?",
    a: "Mehendi and Sangeet dates fill faster than wedding ceremony slots during peak season (October–February) because multiple clients from the same week compete for the same anchor. Booking 6–8 months in advance is strongly recommended. WhatsApp the moment your venue is confirmed.",
  },
  {
    q: "What languages does the Mehendi anchor host in?",
    a: "Hindi and English fluently, often simultaneously. For NRI families and international guests, the switch between the two is seamless. Warm Marwari and Rajasthani touches for local family elders are included — Nani's reaction is always the best moment of the ceremony.",
  },
];

const RELATED = [
  { icon: Flower2, label: "Haldi Anchor", href: "/haldi-anchor-jaipur", desc: "Ceremony games & energy" },
  { icon: Music, label: "Sangeet Host", href: "/sangeet-anchor-jaipur", desc: "High-energy Sangeet" },
  { icon: Heart, label: "Wedding Anchor", href: "/wedding-anchor-jaipur", desc: "Varmala, Baraat, Bidaai" },
  { icon: Building2, label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur", desc: "All event formats" },
];

// Color map for game category cards — keeps the emerald/teal/green vibe
const COLOR_CLASSES = {
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-400",
    bg: "bg-emerald-900/10 hover:bg-emerald-900/20",
    text: "text-emerald-400",
    dot: "bg-emerald-500",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  teal: {
    border: "border-teal-500/30 hover:border-teal-400",
    bg: "bg-teal-900/10 hover:bg-teal-900/20",
    text: "text-teal-400",
    dot: "bg-teal-500",
    tag: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
  green: {
    border: "border-green-500/30 hover:border-green-400",
    bg: "bg-green-900/10 hover:bg-green-900/20",
    text: "text-green-400",
    dot: "bg-green-500",
    tag: "bg-green-500/10 text-green-400 border-green-500/20",
  },
};

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen ? "border-emerald-500/60 bg-emerald-500/5" : "border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${
          isOpen ? "text-emerald-400" : "text-zinc-200 group-hover:text-white"
        }`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 mt-0.5 ${
          isOpen ? "bg-emerald-500 text-black" : "border border-white/30 text-white group-hover:border-emerald-500 group-hover:text-emerald-400"
        }`}>
          {isOpen ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
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
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-emerald-500/20 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function MehendiAnchor() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    // selection color: gold for brand consistency, emerald accent kept elsewhere
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* BREADCRUMB — sr-only for SEO */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/best-anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Mehendi Anchor Jaipur</span>
      </nav>

      {/* ══════════════════════════════════════
          1. HERO — emerald vibe preserved
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          {/* Emerald gradient overlay — the signature Mehendi feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/65 to-emerald-900/20 z-10" />
          {/* FIX: next/image replaces <img> */}
          <Image
            src="/gallery-4.webp"
            alt="Best Mehendi anchor in Jaipur — Anchor Yash Soni hosting a Mehendi ceremony"
            fill priority quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 text-center px-5 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>

            {/* Badge — emerald accent preserved */}
            <div className="inline-flex items-center gap-2 border border-emerald-500/50 px-5 py-2 rounded-full bg-emerald-900/30 backdrop-blur-xl mb-8">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300 text-[10px] uppercase tracking-widest font-bold">
                4.9★ · Best Mehendi Anchor in Jaipur
              </span>
            </div>

            {/* H1 — keyword-first */}
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
              The Ultimate<br /><E>Mehendi Anchor.</E>
            </h1>

            <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-3">
              No dull waiting times. No awkward silences. Hands-free musical games, traditional warmth, and zero boring moments — across all Jaipur zones and beyond.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              1,100+ events &nbsp;·&nbsp; Ladies Sangeet specialist &nbsp;·&nbsp; Bilingual Hindi/English
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-95">
                  Secure Your Date →
                </button>
              </a>
              <a href="https://youtube.com/@anchoryashsoni" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 border border-emerald-500/30 text-emerald-300 text-sm font-medium rounded-full hover:bg-emerald-900/20 transition-all flex items-center justify-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-current" /> See The Vibe
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS — real numbers
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3">
                  <s.icon size={20} className={`mx-auto mb-3 ${s.color}`} />
                  <div className={`text-4xl md:text-5xl font-black mb-1 ${s.color}`}>{s.val}</div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. INTRO — keyword-rich body text
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-emerald-400 text-[10px] uppercase tracking-widest mb-4 font-bold">Mehendi Ceremony Specialist</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Bridging Tradition <br />and <E>Pure Celebration.</E>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              The Mehendi is the most colourful, relaxed event of the entire wedding week. It&apos;s where families truly bond before the heavy ceremonies begin. But 3–4 hours of henna application with no hosting structure turns into 3–4 hours of guests on their phones.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              With <strong className="text-white">1,100+ events hosted</strong> and a <strong className="text-white">4.9★ rating across 200+ verified reviews</strong>, Anchor Yash Soni has mastered the Mehendi format across every Jaipur zone — farmhouse weddings on Ajmer Road with 500+ guests, palace Mehendi events in Kukas and Amer Road for NRI families, and intimate family ceremonies in Mansarovar and Vaishali Nagar.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              Hands-free musical games. Couple trivia roasts. Dholak sessions that bridge elders and youth. And a dance floor that opens before the henna even dries.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="px-7 py-3.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all">
                Check Mehendi Availability →
              </button>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-500/20 group">
              {/* FIX: next/image replaces <img> */}
              <Image
                src="/gallery-2.webp"
                alt="Anchor Yash Soni hosting Mehendi ceremony in Jaipur"
                fill quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-black text-emerald-400 mb-2">The Experience</h3>
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                  From soulful Dholak beginnings to high-energy Bollywood dance floors — managing the ritual respect and the festive vibe simultaneously.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. GAMES MENU — emerald/teal/green kept
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Crowd Engagement" title="Interactive Mehendi Games." align="center" />
          <p className="text-center text-zinc-500 max-w-xl mx-auto -mt-8 mb-12 text-sm leading-relaxed">
            Guests have wet henna — so every game is hands-free. Musical, verbal, and visual interactions that keep every generation off their phones and in the moment.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {GAME_CATEGORIES.map((cat, i) => {
              const c = COLOR_CLASSES[cat.color];
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className={`p-7 md:p-8 rounded-3xl border transition-all duration-300 group h-full ${c.border} ${c.bg}`}>
                    <div className="mb-5 bg-[#050505] inline-block p-4 rounded-2xl border border-white/5">
                      <cat.icon className={`w-7 h-7 ${c.text}`} />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-black mb-5 tracking-tight ${c.text}`}>{cat.title}</h3>
                    <ul className="space-y-3">
                      {cat.games.map((game, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 shrink-0`} />
                          <span className="text-zinc-300 text-sm leading-snug">{game}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. THE VIBE — what makes it special
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <SectionHeading subtitle="The Vibe Check" title="Elegant. Musical. Fun." />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 font-light">
              The Mehendi is the most relaxed, colourful event of the entire wedding. It&apos;s where families truly bond before the heavy ceremonies begin. My job as host is to amplify that warmth — bridging the elders singing traditional folk songs and the youth ready for a Bollywood party.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
              Every game, every transition, every moment of crowd interaction is calibrated to feel spontaneous and joyful — never scripted or forced.
            </p>
            <div className="space-y-3">
              {[
                "Zero boring seating times across 3–4 hours",
                "100% hands-free games for henna guests",
                "Bridges elders and youth in the same event",
                "Bilingual Hindi/English — NRI families included",
                "Dholak-synced games and DJ coordination",
                "Crisis-proof — delays and schedule changes invisible",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/gallery-3.webp"
                alt="Mehendi ceremony in Jaipur with interactive crowd games"
                fill quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4">
                <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-bold mb-1">4.9★ Mehendi Anchor</p>
                <p className="text-white text-xs">Hands-free games · Zero boring moments · 1,100+ events</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. LOCATION COVERAGE — SEO section
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Jaipur Coverage" title="Mehendi Anchor Across All Jaipur Zones." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group bg-zinc-900/20 hover:bg-zinc-900/50">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">{loc.type}</p>
                      <p className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">{loc.zone}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed ml-6 mb-3">{loc.desc}</p>
                  <div className="flex flex-wrap gap-1.5 ml-6">
                    {loc.keywords.map((kw, j) => (
                      <span key={j} className="text-[9px] text-zinc-700 border border-zinc-800 px-2 py-0.5 rounded-full">{kw}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-7">
            <Link href="/anchor-in-jaipur" className="inline-flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest border-b border-emerald-400/40 pb-0.5 hover:text-white transition-colors">
              See Complete Jaipur Coverage <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Jaipur Families Say." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group cursor-pointer">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-xs group-hover:text-emerald-400 transition-colors">— {t.name}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{t.event}</p>
                    <p className="text-emerald-400 text-[10px] uppercase tracking-wider mt-0.5">{t.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. FAQ — 11 questions targeting PAA
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="People Also Ask" title="Mehendi Anchor Jaipur — FAQ." align="center" />
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-mehendi-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. RELATED SERVICES — internal links
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-emerald-400 text-[10px] uppercase tracking-widest mb-2 font-bold">All Wedding Events</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                One Anchor. <G>Every Ceremony.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={r.href}>
                  <div className="border border-white/10 rounded-2xl p-5 text-center hover:border-emerald-500/30 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                    <r.icon size={18} className="text-emerald-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold group-hover:text-emerald-400 transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[10px] mt-1">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. SCARCITY CTA
          Fixed: no green gradient bg — dark base
          with emerald accents kept for identity
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-white/5 px-5 md:px-10 relative overflow-hidden">
        {/* Subtle emerald glow — keeps the Mehendi identity without the garish gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.025] leading-none whitespace-nowrap">MEHENDI</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <Leaf className="w-8 h-8 text-emerald-400 mx-auto mb-6 opacity-60" />
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight uppercase">
              Ready For The <E>Celebration?</E>
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Mehendi and Sangeet dates fill faster than ceremony slots. Book <strong className="text-emerald-400">6–8 months in advance</strong> for peak season. No waitlist. No replacements.
            </p>
            <p className="text-zinc-600 text-xs mb-8">WhatsApp the moment your venue is confirmed.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(16,185,129,0.15)] active:scale-95">
                <CalendarCheck size={16} /> Check Availability Now
              </button>
            </a>
            {/* Footer link strip */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/best-anchor-in-jaipur" className="hover:text-emerald-400 transition-colors">Best Anchor Jaipur</Link>
              <Link href="/sangeet-anchor-jaipur" className="hover:text-emerald-400 transition-colors">Sangeet Host</Link>
              <Link href="/haldi-anchor-jaipur" className="hover:text-emerald-400 transition-colors">Haldi Anchor</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-emerald-400 transition-colors">Wedding Anchor</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-emerald-400 transition-colors">Anchor Jaipur</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
