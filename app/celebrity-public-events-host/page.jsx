"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, CalendarCheck, Camera, CheckCircle2, Crown, Heart, MapPin, Mic2, Minus, Music, Plus, ShieldCheck, Sparkles, Star, Users, Zap } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20celebrity%20or%20public%20event%20host%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability.";
const GOLD = "#D4AF37";
const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .ticker { animation:marquee 28s linear infinite; }
`;
// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center gold-shimmer ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
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
// Fixed: subtitle = span, title = h2, no heading hierarchy skip
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-2 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Camera className="w-4 h-4 text-[#B5952F]" />
        <span className="text-[#B5952F] text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">{title}</h2>
    </motion.div>
  </div>
);
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { val: "5,000+", label: "Largest Public Crowd", icon: Users },
  { val: "4.9★", label: "Client Rating", icon: Star },
  { val: "1100+", label: "Total Events Hosted", icon: Mic2 },
  { val: "70+", label: "National Brands", icon: Crown },
];
const SERVICES = [
  {
    icon: Star,
    title: "Celebrity Meet & Greets",
    desc: "Movie promotions, Bollywood star visits, and celebrity fan interactions. Managing the frenzy while ensuring the star feels comfortable and the crowd stays electric.",
    tags: ["Bollywood", "Fan Interactions", "Red Carpet"],
  },
  {
    icon: Music,
    title: "Music Concerts & Festivals",
    desc: "Opening acts, inter-set crowd activation, and headliner builds. Keeping 2,000–10,000 people at concert energy from doors open until the last encore.",
    tags: ["Concerts", "Crowd Hype", "DJ Shows"],
    highlight: true,
  },
  {
    icon: Crown,
    title: "Fashion Shows & Ramp Walks",
    desc: "The voice of the runway. Sophisticated real-time commentary that matches the glamour of the collection without ever overshadowing the designs.",
    tags: ["Fashion Week", "Runway", "Luxury Brands"],
  },
  {
    icon: Zap,
    title: "Luxury Brand Launches",
    desc: "Store openings, product launches, and premium brand events. Creating the anticipation, the queue culture, and the moment that makes a launch unforgettable.",
    tags: ["Product Launches", "Store Opens", "VIP Events"],
  },
];
const CAPABILITIES = [
  {
    title: "Crowd Control at Scale",
    desc: "Managing 5,000+ people safely and energetically requires a completely different skill set than a 500-person wedding. Voice modulation, spatial awareness, and crowd psychology — mastered across 70+ large-format public events.",
  },
  {
    title: "Celebrity Q&A Management",
    desc: "Researched, PR-friendly questions. No awkward moments, no overstepping, no uncomfortable silences. Stars leave feeling respected. Fans leave feeling satisfied.",
  },
  {
    title: "Live Broadcast Precision",
    desc: "Many celebrity and fashion events are televised or livestreamed. Tight timing, clean transitions, and zero on-air errors — the discipline that separates broadcast-ready anchors from stage hosts.",
  },
  {
    title: "Bilingual Fluency",
    desc: "Hindi and English simultaneously for mixed audiences. National brand events with pan-India delegates, Bollywood events with international press — both handled seamlessly.",
  },
];
const EVENTS_HOSTED = [
  { event: "India Kids Fashion Week", venue: "The Lalit, Jaipur", type: "Fashion" },
  { event: "Corporate Awards Gala", venue: "JECC Sitapura, Jaipur", type: "Corporate" },
  { event: "Luxury Brand Launch", venue: "JLN Marg, Jaipur", type: "Launch" },
  { event: "Music Festival Opening", venue: "Jaipur, Rajasthan", type: "Concert" },
  { event: "Fashion Designer Showcase", venue: "Marriott, Jaipur", type: "Fashion" },
  { event: "Celebrity Meet & Greet", venue: "Rajasthan, India", type: "Celebrity" },
];
const FAQS = [
  {
    q: "Who is the best celebrity event host in Jaipur?",
    a: "Anchor Yash Soni is one of Jaipur's most reviewed public event hosts with a 4.9★ rating across 200+ verified reviews. He has hosted celebrity meet-and-greets, India Kids Fashion Week at The Lalit Jaipur, luxury brand launches, corporate award galas at JECC Sitapura, and music events across Rajasthan. His experience spans 1,100+ events including 70+ national brand formats.",
  },
  {
    q: "Can you manage a crowd of 5,000+ at a public event?",
    a: "Large-scale public event management is a core specialisation. Yash has commanded open events of 10,000+ people unscripted. Managing crowd energy at scale — keeping thousands energised and safe simultaneously — requires a completely different discipline from wedding or corporate hosting. Both have been mastered.",
  },
  {
    q: "Do you host Bollywood celebrity interviews and red carpet events?",
    a: "Yes. Celebrity Q&A and red carpet hosting involves research into the star's recent work, preparation of PR-friendly questions, and smooth management of fan interactions. The goal: the celebrity feels respected and at ease, the fans feel connected, and the media gets clean, usable footage.",
  },
  {
    q: "Can you anchor a fashion show or runway event in Jaipur?",
    a: "Fashion show hosting is a specialisation. The voice of the runway must match the aesthetic of the collection — sophisticated, confident, and never overshadowing the designs. Yash has hosted fashion events at premium Jaipur venues including The Lalit and Marriott.",
  },
  {
    q: "Do you work with teleprompters for televised events?",
    a: "Yes. For televised events, formal product launches, and broadcast-quality corporate productions, teleprompter work is standard. Reading naturally while maintaining eye contact with a live audience — so it never looks scripted on camera — is a trained skill.",
  },
  {
    q: "Can you host a luxury brand launch or store opening?",
    a: "Luxury brand launches are a core format. Creating the anticipation, the queue culture, the social media moment, and the VIP experience that turns a store opening into a city event — this is the craft. From premium brand events on JLN Marg to large-format launches at Jaipur's five-star hotels.",
  },
  {
    q: "Do you travel for celebrity events outside Jaipur?",
    a: "Yes. While Jaipur is the base, Yash hosts public events, concerts, and celebrity events across Rajasthan and pan-India. Delhi, Mumbai, Goa, Dubai destination events are available for the right engagements. Travel logistics are structured into the booking terms.",
  },
  {
    q: "What is your experience with music concerts and festivals?",
    a: "Concert hosting involves inter-set crowd activation, headliner builds, and keeping thousands of people at peak energy from doors open to last song. Yash has hosted music events as both opening act host and primary MC for DJ shows and live performances across Jaipur and Rajasthan.",
  },
  {
    q: "How far in advance should a celebrity event be booked?",
    a: "For peak-season events and large public formats, 3–6 months advance is recommended. No waitlists are maintained and no replacement anchors are sent. Once a date is confirmed, it is exclusively reserved. WhatsApp the moment the event is confirmed to secure availability.",
  },
];
const RELATED = [
  { icon: Building2, label: "Corporate Events", href: "/corporate-event-anchor-jaipur", desc: "Award nights & summits" },
  { icon: Heart, label: "Wedding Anchor", href: "/wedding-anchor-jaipur", desc: "Luxury wedding hosting" },
  { icon: Music, label: "Sangeet Host", href: "/sangeet-anchor-jaipur", desc: "High-energy Sangeet" },
  { icon: Crown, label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur", desc: "All event formats" },
];
const TICKER_ITEMS = [
  "Movie Promotions", "Music Festivals", "Fashion Weeks",
  "Luxury Launches", "Celebrity Interviews", "Concert Hosting",
  "Red Carpet Events", "Brand Activations", "Ramp Walk Commentary",
];
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
        isOpen ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${
          isOpen ? "text-[#B5952F]" : "text-zinc-200 group-hover:text-white"
        }`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 mt-0.5 ${
          isOpen ? "bg-[#D4AF37] text-black" : "border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#B5952F]"
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
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
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">
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
export default function CelebrityAnchorPage() {
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
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* BREADCRUMB — sr-only */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Celebrity Events Host Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/55 to-black/20 z-10" />
          {/* FIX: next/image replaces <img> */}
          <Image
            src="/service-fashion.webp"
            alt="Celebrity and public events host Jaipur — Anchor Yash Soni"
            fill priority quality={90}
            className="object-cover grayscale contrast-125"
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 text-center px-5 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/50 backdrop-blur-xl mb-8">
              <Star className="w-3 h-3 text-[#B5952F] fill-[#D4AF37]" />
              <span className="text-[#B5952F] text-[10px] uppercase tracking-widest font-bold">
                4.9★ · Celebrity & Public Events Host · Jaipur
              </span>
            </div>
            {/* H1 — primary keyword */}
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
              Hosting<br /><G>The Icons.</G>
            </h1>
            <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-3">
              From managing crowds of <strong className="text-[#B5952F]">5,000+</strong> at concerts to Bollywood celebrity interviews on the red carpet — the full spectrum of public event hosting in Jaipur and across India.
            </p>
            <p className="text-zinc-500 text-sm mb-8 tracking-wide">
              Concerts &nbsp;·&nbsp; Fashion Shows &nbsp;·&nbsp; Luxury Launches &nbsp;·&nbsp; Celebrity Events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-95">
                  Book For Event →
                </button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-zinc-300 text-sm font-medium rounded-full hover:border-[#D4AF37]/50 hover:text-[#B5952F] transition-all">
                  View Portfolio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. GOLD TICKER — fixed animation
      ══════════════════════════════════════ */}
      <div className="bg-[#D4AF37] text-black py-3.5 overflow-hidden border-y border-white/10 relative z-30">
        <div className="flex whitespace-nowrap w-max ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mr-6">
              <span className="font-black uppercase tracking-widest text-sm">{item}</span>
              <Star className="w-3 h-3 shrink-0" />
            </span>
          ))}
        </div>
      </div>
      {/* ══════════════════════════════════════
          3. STATS — real numbers
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3">
                  <s.icon size={20} className="mx-auto mb-3 text-[#B5952F]" />
                  <div className="text-4xl md:text-5xl font-black mb-1"><G>{s.val}</G></div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. INTRO — keyword-rich body text
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] uppercase tracking-widest mb-4 font-bold">Beyond The Mic</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Not Just A Host.<br /><G>A Personality.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              When a Bollywood star walks into a Jaipur venue, when a luxury brand opens on JLN Marg, when a music festival fills JECC Sitapura with 5,000 people — you don&apos;t need an announcer. You need someone who can hold the entire room, manage the unexpected, and make it look effortless on camera.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed font-light">
              Anchor Yash Soni has hosted celebrity meet-and-greets, India Kids Fashion Week at The Lalit Jaipur, luxury brand launches, music events, and award galas for <strong className="text-white">70+ national brands</strong> across India. A <strong className="text-white">4.9★ rating across 200+ verified reviews</strong> is the evidence.
            </p>
            <div className="space-y-3">
              {[
                "Crowd management from 200 to 10,000+ — same composure",
                "Televised and livestreamed events — broadcast-ready",
                "Bilingual Hindi/English — national and international audiences",
                "Celebrity Q&A — researched, smooth, PR-safe every time",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-[#B5952F] mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Stacked images — original design kept */}
          <Reveal delay={0.15}>
            <div className="relative h-[500px] md:h-[600px] w-full">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-white/10 transform rotate-3 group">
                <Image
                  src="/gallery-5.webp"
                  alt="Anchor Yash Soni at a public event in Jaipur"
                  fill
                  className="object-cover grayscale opacity-60"
                  sizes="(max-width:1024px) 75vw, 37vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/intro-portrait-bottom.webp"
                  alt="Anchor Yash Soni celebrity event host Jaipur"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 75vw, 37vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. SERVICES — 4 cards, gold branding
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The Showbiz Portfolio" title="Every Public Format Covered." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`p-7 rounded-3xl border transition-all duration-400 group hover:-translate-y-1 h-full ${
                  s.highlight
                    ? "bg-zinc-900 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                    : "bg-[#0a0a0a] border-white/8 hover:border-[#D4AF37]/30"
                }`}>
                  <s.icon size={22} className="text-[#B5952F] mb-4" />
                  <h3 className="text-base font-black text-white mb-3 group-hover:text-[#B5952F] transition-colors">{s.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-widest bg-[#D4AF37]/10 px-2.5 py-1 rounded-full text-[#B5952F] border border-[#D4AF37]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. THE METHOD — capabilities
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <SectionHeading subtitle="The Method" title="What Separates a Host From a Personality." />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4 font-light">
              Public events and celebrity formats are a completely different discipline from weddings or corporate shows. The stakes are higher, the audiences are less forgiving, and the cameras are always rolling.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              The craft is in managing 5,000 people safely while keeping them at concert energy — knowing when to build, when to release, and when to hold the room in silence so the next moment lands harder.
            </p>
            <div className="space-y-6">
              {CAPABILITIES.map((c, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#B5952F] transition-colors">{c.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Events hosted list */}
          <Reveal delay={0.12}>
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 bg-zinc-900/50">
                <p className="text-[#B5952F] text-[10px] uppercase tracking-widest font-bold">Recent Public Events</p>
              </div>
              {EVENTS_HOSTED.map((e, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-4 border-b border-white/5 last:border-b-0 hover:bg-zinc-900/30 transition-colors">
                  <div>
                    <p className="text-white text-sm font-medium">{e.event}</p>
                    <p className="text-zinc-600 text-[11px] mt-0.5 flex items-center gap-1">
                      <MapPin size={9} className="text-[#B5952F]" /> {e.venue}
                    </p>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest bg-[#D4AF37]/10 text-[#B5952F] border border-[#D4AF37]/20 px-2.5 py-1 rounded-full font-bold shrink-0">
                    {e.type}
                  </span>
                </div>
              ))}
            </div>
            {/* Quick CTA after events list */}
            <div className="mt-5 text-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-7 py-3 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all">
                  Check Availability →
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. GALLERY GRID — next/image, proper alts
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The Vibe" title="Electric Atmosphere." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[300px] md:h-[500px]">
            {[
              { src: "/gallery-1.webp", alt: "Anchor Yash Soni hosting music festival in Jaipur", span: "col-span-2 row-span-2" },
              { src: "/gallery-2.webp", alt: "Celebrity event anchor Jaipur red carpet" },
              { src: "/gallery-5.webp", alt: "Concert crowd activation Jaipur" },
              { src: "/service-fashion.webp", alt: "Fashion show anchor Jaipur runway", span: "col-span-2 md:col-span-1" },
            ].map((img, i) => (
              <div key={i} className={`relative group overflow-hidden border border-white/8 rounded-2xl ${img.span || ""}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. FAQ — expanded 9 questions
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="People Also Ask" title="Celebrity Events Host Jaipur — FAQ." align="center" />
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-celebrity-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          9. RELATED SERVICES — internal links
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#B5952F] text-[10px] uppercase tracking-widest mb-2 font-bold">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">One Anchor. <G>Every Format.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={r.href}>
                  <div className="border border-white/10 rounded-2xl p-5 text-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                    <r.icon size={18} className="text-[#B5952F] mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold group-hover:text-[#B5952F] transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[10px] mt-1">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. SCARCITY CTA — dark gold
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.02] leading-none whitespace-nowrap">ICON</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] uppercase tracking-widest mb-6 font-bold">Book the Event Host</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight uppercase">
              Need a <G>Headliner?</G>
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              For events that need more than a host — they need a <strong className="text-[#B5952F]">personality</strong>. Dates book quickly for peak season events. No replacements sent.
            </p>
            <p className="text-zinc-600 text-xs mb-8">WhatsApp the moment your event is confirmed.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] active:scale-95">
                <CalendarCheck size={16} /> Book For Event
              </button>
            </Link>
            {/* Footer link strip */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/anchor-in-jaipur" className="hover:text-[#B5952F] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#B5952F] transition-colors">Corporate Events</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-[#B5952F] transition-colors">Wedding Anchor</Link>
              <Link href="/sangeet-anchor-jaipur" className="hover:text-[#B5952F] transition-colors">Sangeet Host</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-[#B5952F] transition-colors">Anchor Jaipur</Link>
              <Link href="/portfolio" className="hover:text-[#B5952F] transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-[#B5952F] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}