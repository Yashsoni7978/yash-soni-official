"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, CalendarCheck, CheckCircle2, Flame, Flower2, Heart, MapPin, Mic2, Minus, Music, Play, Plus, ShieldCheck, Sparkles, Star, Trophy, Users, Zap } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20Sangeet%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";
const GOLD = "#D4AF37";
const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
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
        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">{title}</h2>
    </motion.div>
  </div>
);
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { val: "1100+", label: "Events Hosted", icon: Mic2 },
  { val: "4.9★", label: "Client Rating", icon: Star },
  { val: "4 AM", label: "Dance Floor Until", icon: Music },
  { val: "500+", label: "Sangeet Guests Max", icon: Users },
];
const SHOW_CARDS = [
  {
    title: "The Royal Roast",
    icon: Flame,
    color: "text-orange-400",
    desc: "Scripted, family-friendly comedy roasting the couple's quirks. Gets the room laughing in 60 seconds — elders, cousins, everyone.",
    tags: ["Custom Script", "Comedy", "Family-Safe"],
  },
  {
    title: "The Sangeet Awards",
    icon: Trophy,
    color: "text-[#D4AF37]",
    desc: "Custom award categories — 'The Drama Queen', 'The Late Arrival' — with acceptance speeches and fanfares. Crowd favourite every time.",
    tags: ["Interactive", "Trophies", "Bollywood-Style"],
    highlight: true,
  },
  {
    title: "The Ultimate Battle",
    icon: Zap,
    color: "text-blue-400",
    desc: "Ladke-wale vs Ladki-wale. High-decibel cheer-off and hookstep challenge that splits the room and doubles the energy in 3 minutes.",
    tags: ["High Energy", "Crowd Work", "Teams"],
  },
];
const LOCATIONS = [
  {
    zone: "Ajmer Road & Bhankrota",
    type: "Farmhouse Sangeet Specialist",
    desc: "1,000–1,500 guests on open lawns until 4 AM. The format that breaks average anchors. Yash commands them.",
    keywords: ["Farmhouse Sangeet anchor Ajmer Road", "Sangeet host Bhankrota Jaipur"],
  },
  {
    zone: "Kukas & Amer Road",
    type: "Palace & Heritage Sangeet",
    desc: "International protocols, bilingual fluency. NRI families flying in for palace Sangeet events in Jaipur's most photographed venues.",
    keywords: ["Sangeet anchor Kukas Jaipur", "Palace Sangeet host Amer Road"],
  },
  {
    zone: "Mansarovar & Vaishali Nagar",
    type: "Premium Banquet Sangeet",
    desc: "Urban elite Sangeet events in premium banquet halls. Understated authority that can pivot to electric energy on command.",
    keywords: ["Sangeet host Mansarovar Jaipur", "Sangeet anchor Vaishali Nagar"],
  },
  {
    zone: "All India & Destination",
    type: "Destination Sangeet",
    desc: "Udaipur, Jodhpur, Jaisalmer, Goa, Dubai — the same concert-level Sangeet energy, anywhere in the world.",
    keywords: ["Destination Sangeet anchor India", "Sangeet host Rajasthan"],
  },
];
const TESTIMONIALS = [
  {
    name: "Sharma Family",
    quote: "The sound system failed for 3 minutes mid-Sangeet. Yash turned it into a crowd call-and-response that had 900 people screaming together. He didn't just save the night — he made it.",
    event: "Farmhouse Sangeet · Ajmer Road, Jaipur",
    guests: "900 guests",
  },
  {
    name: "Vartika Jetawat",
    quote: "Anchored my brother's Sangeet. Very friendly, understood all requirements, and was energetic throughout the function. One of the best Sangeet anchors we've seen in Jaipur.",
    event: "Family Sangeet · Jaipur",
    guests: "Family event",
  },
  {
    name: "Mehta Family",
    quote: "The 'Ladke-wale vs Ladki-wale' game had both sides screaming so loud the neighbours called. 1,200 guests and not a single person sat down after 10 PM.",
    event: "Grand Sangeet · Bhankrota, Jaipur",
    guests: "1,200 guests",
  },
];
const FAQS = [
  {
    q: "Who is the best Sangeet anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated Sangeet host with 1,100+ events hosted. He specialises in farmhouse Sangeets on Ajmer Road with 500–1,500 guests, palace Sangeet events in Kukas and Amer Road, and destination Sangeets across India. His unscripted crowd psychology keeps dance floors packed until 4 AM — consistently.",
  },
  {
    q: "Why hire a professional Sangeet anchor instead of a family member?",
    a: "A professional anchor manages the technical coordination with the DJ, eliminates dead air between performances, handles crises invisibly, and keeps energy peaking for 4–6 hours without fatigue. Family members bring personal moments — Yash brings the architecture that makes those moments land perfectly.",
  },
  {
    q: "Do you help script family performances and entries?",
    a: "Yes. Script templates for family members, creative entry concepts, and a pre-show briefing are included. The goal is to make every family member's announcement sound like a blockbuster movie intro. Nervous Chacha becomes a crowd favourite within 60 seconds.",
  },
  {
    q: "Can you handle farmhouse Sangeets on Ajmer Road with 1,000+ guests?",
    a: "This is a core specialisation. Farmhouse Sangeets on Ajmer Road and Bhankrota with 1,000–1,500 guests are a regular format. Commanding open-air crowds at scale without a script — reading energy, redirecting it, and keeping the dance floor electric until 4 AM — is the skill that separates Yash from announcers.",
  },
  {
    q: "How do you handle technical glitches or delays?",
    a: "A library of 50+ crowd interactions exists specifically for this. If a track doesn't play or a performer is running late, the audience sees a planned crowd moment, not a problem. In 1,100+ events, no guest has ever known when something went wrong.",
  },
  {
    q: "Can you host a Bollywood-style Awards Night Sangeet?",
    a: "The Sangeet Awards segment is a signature format — custom award categories like 'The Drama Queen' or 'The Late Arrival', acceptance speeches, trophy moments, and fanfares that involve the whole family. It turns a standard Sangeet into a full production.",
  },
  {
    q: "Do you coordinate with our DJ and sound team?",
    a: "Yes. Arriving 2 hours early for a rigorous sound check is standard. Coordination with the DJ includes specific 'stingers' (punchline sounds), entry tracks, and background scores timed to the millisecond. The audio-visual experience is flawless because it's rehearsed.",
  },
  {
    q: "Do you travel for destination Sangeet events?",
    a: "Yes. Sangeets in Udaipur, Jodhpur, Jaisalmer, Goa, Dubai, and pan-India are a regular part of the calendar. The same concert-level energy travels with the anchor. Travel logistics and accommodation are structured into the booking terms.",
  },
  {
    q: "How far in advance should we book a Sangeet anchor in Jaipur?",
    a: "Jaipur's peak wedding season (October–February) books 6–8 months in advance. No waitlists are maintained and no replacement anchors are sent. The moment your venue is locked, reach out via WhatsApp immediately — Sangeet dates in peak season fill before wedding slots.",
  },
  {
    q: "What is the hosting duration for a Sangeet?",
    a: "A standard Sangeet shift is 4–6 hours — from guest arrivals and family entries through the stage show and into the open dance floor. For large farmhouse events on Ajmer Road that run until 4 AM, extended duration terms are available.",
  },
];
const RELATED = [
  { icon: Heart, label: "Wedding Anchor", href: "/wedding-anchor-jaipur", desc: "Varmala, Baraat, Bidaai" },
  { icon: Flower2, label: "Haldi Anchor", href: "/haldi-anchor-jaipur", desc: "Games & crowd energy" },
  { icon: Sparkles, label: "Mehendi Host", href: "/mehendi-anchor-jaipur", desc: "Ladies Sangeet specialist" },
  { icon: Building2, label: "Corporate Anchor", href: "/corporate-event-anchor-jaipur", desc: "JECC Sitapura & award nights" },
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
        className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base pr-4 leading-snug transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          isOpen ? "bg-[#D4AF37] text-black" : "border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
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
export default function SangeetAnchor() {
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
      {/* ══════════════════════════════════════
          BREADCRUMB — sr-only for SEO
      ══════════════════════════════════════ */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/best-anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Sangeet Anchor Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/65 to-black/20 z-10" />
          {/* FIX: next/image instead of <img> */}
          <Image
            src="/hero-slide-1.webp"
            alt="Best Sangeet anchor in Jaipur — Anchor Yash Soni hosting a Sangeet night"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 text-center px-5 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {/* Badge — gold, not purple */}
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/50 backdrop-blur-xl mb-8">
              <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                4.9★ · Best Sangeet Anchor in Jaipur
              </span>
            </div>
            {/* H1 — primary keyword */}
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
              Turn Your Night<br /><G>Into A Concert.</G>
            </h1>
            {/* Subhead with location keywords */}
            <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-3">
              Jaipur&apos;s most reviewed Sangeet anchor. Farmhouse Sangeets on Ajmer Road, palace events in Kukas, and destination Sangeets across India.
            </p>
            <p className="text-zinc-500 text-sm mb-8 tracking-wide">
              1,100+ events &nbsp;·&nbsp; Dance floors until 4 AM &nbsp;·&nbsp; 100% Unscripted
            </p>
            {/* CTAs — WhatsApp primary, not /contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                  Book Your Sangeet →
                </button>
              </Link>
              <a href="https://youtube.com/@anchoryashsoni" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-medium text-sm uppercase tracking-widest rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-current" /> Watch Showreel
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. STATS — real numbers, gold, no boxes
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3">
                  <s.icon size={20} className="mx-auto mb-3 text-[#D4AF37]" />
                  <div className="text-4xl md:text-5xl font-black mb-1"><G>{s.val}</G></div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. KEYWORD-RICH INTRO — body text for Google
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">The Best Sangeet Anchor in Jaipur</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Forget &ldquo;And Next on Stage...&rdquo;<br /><G>This is a Concert.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              With <strong className="text-white">1,100+ events hosted</strong> and a <strong className="text-white">4.9★ rating across 200+ verified reviews</strong>, Anchor Yash Soni is the Sangeet host Jaipur&apos;s elite families trust when a Sangeet needs to be more than background noise.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              Farmhouse Sangeets on Ajmer Road with 1,500 guests packed until 4 AM. Palace Sangeet events at heritage venues in Kukas and Amer Road with NRI families from the UK, USA, and Gulf. Intimate family Sangeets in Mansarovar and Vaishali Nagar. Every format is a different discipline — and every one has been mastered.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              Zero paper scripts. Unscripted crowd psychology. Family roasts that get elders laughing in 60 seconds. And a dance floor that never empties.
            </p>
            <Link href={WA} target="_blank" rel="noopener noreferrer">
              <button className="px-7 py-3.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all">
                Check Sangeet Availability →
              </button>
            </Link>
          </Reveal>
          {/* Photo */}
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/gallery-4.webp"
                alt="Anchor Yash Soni hosting Sangeet night in Jaipur"
                fill quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-sm border border-[#D4AF37]/30 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-1">4.9★ Sangeet Anchor</p>
                <p className="text-white text-xs">Dance floors packed until 4 AM · 1,100+ events</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. SIGNATURE SEGMENTS — 3 show cards
          (Structure kept, colors fixed to gold)
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Signature Segments" title="The Blockbuster Lineup." align="center" />
          <p className="text-center text-zinc-500 max-w-xl mx-auto -mt-8 mb-12 text-sm leading-relaxed">
            A great Sangeet needs more than dances. These are the interactive crowd segments that turn a standard Sangeet into a night people talk about for years.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {SHOW_CARDS.map((card, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`p-7 md:p-10 rounded-3xl border transition-all duration-400 group hover:-translate-y-1 h-full ${
                  card.highlight
                    ? "bg-zinc-900 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                    : "bg-[#0a0a0a] border-white/8 hover:border-[#D4AF37]/30"
                }`}>
                  <div className="mb-5 w-14 h-14 rounded-2xl bg-black border border-white/10 group-hover:border-[#D4AF37]/40 flex items-center justify-center transition-all">
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">{card.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-full text-[#D4AF37] border border-[#D4AF37]/15">
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
          5. THE METHOD — directing the chaos
          (Original section, images fixed)
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group border border-white/10">
              <Image
                src="/gallery-1.webp"
                alt="Anchor Yash Soni directing Sangeet energy in Jaipur"
                fill quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading subtitle="The Method" title="Directing the Chaos." />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 font-light">
              I don&apos;t announce names. I direct energy. Whether it&apos;s hyping up a nervous solo performer, managing a technical glitch invisibly, or getting the shyest elders to do a hookstep — the spotlight never fades.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              And when the stage show ends, the job doesn&apos;t. I transition into MC mode, kick open the dance floor, and keep the energy at concert levels until the very last song.
            </p>
            <div className="space-y-5">
              {[
                { title: "Script Support", desc: "Family member scripts refined so jokes land and transitions are sharp. Nervous Chacha becomes a star." },
                { title: "Technical Sync", desc: "Arrive 2 hours early. Coordinate with DJ for stingers, entry tracks, and background scores timed perfectly." },
                { title: "The After-Party MC", desc: "Stage show ends — dance floor opens. The energy doesn't drop. That's the benchmark." },
                { title: "Crisis Invisible", desc: "50+ crowd interactions ready for any gap. PA failure, delayed performer, schedule change — guests never know." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">{item.title}</p>
                    <p className="text-zinc-500 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. LOCATION COVERAGE — SEO section
          (NEW — was missing from original)
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Jaipur Coverage" title="Sangeet Anchor Across All Jaipur Zones." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all group bg-zinc-900/20 hover:bg-zinc-900/50">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={15} className="text-[#D4AF37] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-0.5">{loc.type}</p>
                      <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">{loc.zone}</p>
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
            <Link href="/anchor-in-jaipur" className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors">
              See Complete Jaipur Coverage <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. TESTIMONIALS — NEW section
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Jaipur Says." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group cursor-pointer">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-xs group-hover:text-[#D4AF37] transition-colors">— {t.name}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{t.event}</p>
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-wider mt-0.5">{t.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. FAQ — upgraded questions
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="People Also Ask" title="Sangeet Anchor Jaipur — FAQ." align="center" />
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-sangeet-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          9. RELATED SERVICES — internal links
          (NEW — was completely missing)
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">More Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">One Anchor. <G>Every Wedding Event.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={r.href}>
                  <div className="border border-white/10 rounded-2xl p-5 text-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                    <r.icon size={18} className="text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold group-hover:text-[#D4AF37] transition-colors leading-snug">{r.label}</p>
                    <p className="text-zinc-600 text-[10px] mt-1">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. SCARCITY CTA — dark gold, not purple
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-white/5 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.02] leading-none whitespace-nowrap">SANGEET</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-6 font-bold">The Spotlight is Yours</p>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-[0.95] uppercase">
              Don&apos;t Let Your<br /><G>Sangeet Be Ordinary.</G>
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Jaipur&apos;s most reviewed Sangeet anchor books <strong className="text-[#D4AF37]">6–8 months in advance</strong> for peak season. No replacements sent. No waitlist kept.
            </p>
            <p className="text-zinc-600 text-xs mb-8">When the calendar is full — it is simply full.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] active:scale-95">
                <CalendarCheck size={16} /> Check Sangeet Dates
              </button>
            </Link>
            {/* Internal footer links */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
              <Link href="/haldi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Haldi Anchor</Link>
              <Link href="/mehendi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Mehendi Host</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Anchor Jaipur</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}