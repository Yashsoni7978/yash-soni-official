"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, MapPin, Mic, Users, Award, UserCheck,
  CheckCircle2, ArrowRight, CalendarCheck, ShieldCheck,
  Sparkles, Zap, Heart, Building2, Music2, Flower2,
  Globe, Quote, ChevronDown
} from "lucide-react";

// ─────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20read%20your%20about%20page%20and%20I%27d%20love%20to%20discuss%20my%20event.";
const GOLD = "#D4AF37";

const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation:marquee 35s linear infinite; }
  .mask-fade { mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent); -webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent); }
`;

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const STATS = [
  { val: "1100+", label: "Events Anchored", sub: "Across India", icon: Mic },
  { val: "10,000+", label: "Largest Crowd", sub: "Unscripted", icon: Users },
  { val: "4.9★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "70+", label: "Corporate Brands", sub: "Nationwide", icon: UserCheck },
];

const STORY_CHAPTERS = [
  {
    num: "01",
    title: "It Started With a Spark",
    body: [
      "Five years ago, a microphone and a single goal: kill the awkward silence. What started as a hobby turned into an obsession, and then into a profession that has now taken me across India.",
      "While others memorised scripts, I studied the room. I learned from the hard moments — bad sound systems, tough crowds, last-minute chaos, delayed brides, and power cuts that would make any announcer panic. Each one taught me something a script never could.",
    ],
  },
  {
    num: "02",
    title: "The Philosophy That Changed Everything",
    body: [
      "There are two types of anchors in Jaipur: the ones who announce, and the ones who connect. I chose to connect. The difference is not talent — it is intent.",
      "My philosophy is simple: the event is not about me. The moment I step on stage, I become an extension of your family, your brand, your vision. Every decision I make — every joke, every pause, every pivot — is made in service of your crowd's experience, not my performance.",
    ],
  },
  {
    num: "03",
    title: "1100 Events. One Standard.",
    body: [
      "From intimate 50-guest birthday galas in Mansarovar to 1,500-person farmhouse Sangeets on Ajmer Road — from corporate award nights at JECC Sitapura to royal Varmala ceremonies at heritage palaces in Kukas — every single event has received the same standard of preparation and presence.",
      "1100+ stages later, the standard has never dropped once. That consistency is what has earned a 4.9★ rating across 200+ verified reviews — not one big moment, but 1100+ moments of being completely reliable.",
    ],
  },
];

const VENUES = [
  {
    icon: MapPin,
    title: "The Palaces",
    list: "Rambagh Palace · Jai Mahal · City Palace Udaipur · Fairmont Jaipur",
    note: "Heritage & palace wedding specialist",
  },
  {
    icon: Star,
    title: "The Luxury Hotels",
    list: "Marriott Jaipur · The Leela · ITC Rajputana · Trident Jaipur",
    note: "5-star property events across Rajasthan",
  },
  {
    icon: Building2,
    title: "The Corporate Hubs",
    list: "JECC Sitapura · Birla Auditorium · Clarks Amer · Hotel Clarks",
    note: "National brand award nights & summits",
  },
  {
    icon: Users,
    title: "The Farmhouse Circuit",
    list: "Ajmer Road · Bhankrota · Jhotwara · Kukas",
    note: "1000–1500 guest large-format events",
  },
];

const STYLES = [
  {
    icon: Music2,
    format: "For Sangeet & Mehndi",
    color: "border-violet-900/40 bg-violet-950/20",
    items: [
      "The Couple Trivia — roast edition",
      "Dance-Off (Boys vs Girls — family version)",
      "Musical chairs with Bollywood twists",
      "Unscripted crowd callouts that make the elders laugh",
    ],
  },
  {
    icon: Building2,
    format: "For Corporate Events",
    color: "border-blue-900/40 bg-blue-950/20",
    items: [
      "Ice-breakers that don't feel forced",
      "Rapid-fire industry quizzes",
      "Award builds with genuine gravitas",
      "CEO introductions with zero awkwardness",
    ],
  },
  {
    icon: Flower2,
    format: "For Haldi & Weddings",
    color: "border-amber-900/40 bg-amber-950/20",
    items: [
      "Family games that include every generation",
      "Ritual commentary in Hindi + English seamlessly",
      "Emotional Varmala + energetic Baraat — same anchor",
      "NRI guest onboarding into every tradition",
    ],
  },
];

const DIFFERENTIATORS = [
  { title: "Never Scripted", desc: "Zero paper scripts in 1,100+ events. Every word is live, responsive, and earned in the moment." },
  { title: "Crisis Proof", desc: "Power cuts, 30-minute delays, audio failure mid-Sangeet — all turned invisible to your guests. Every time." },
  { title: "Bilingual Native", desc: "Hindi to English mid-sentence without the room noticing. International guests included, not tolerated." },
  { title: "Culturally Deep", desc: "Rajasthani traditions, NRI international protocols, corporate decorum — fluency in all three without a briefing." },
];

const PLATFORMS = [
  { name: "WedMeGood", href: "https://www.wedmegood.com/profile/anchor-yash-25628297" },
  { name: "WeddingWire", href: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166" },
  { name: "Justdial", href: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET" },
  { name: "ShaadiDukaan", href: "https://www.shaadidukaan.com/profile/yash-2" },
  { name: "StarClinch", href: "https://starclinch.com" },
  { name: "Google Reviews", href: "https://share.google/pMZGzEGOhXnJpLq5g" },
];

const SERVICES_LINKS = [
  { icon: Heart, label: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
  { icon: Music2, label: "Sangeet Host", href: "/sangeet-anchor-jaipur" },
  { icon: Flower2, label: "Haldi Anchor", href: "/haldi-anchor-jaipur" },
  { icon: Sparkles, label: "Mehendi Host", href: "/mehendi-anchor-jaipur" },
  { icon: Building2, label: "Corporate Events", href: "/corporate-event-anchor-jaipur" },
  { icon: Globe, label: "NRI Weddings", href: "/wedding-anchor-jaipur" },
];

const FAQS = [
  {
    q: "How many years of experience does Anchor Yash Soni have?",
    a: "Anchor Yash Soni has 8+ years of live stage experience with 1,100+ events hosted across India. He began hosting events 5 years into his career as a professional anchor and has since built a 4.9★ rating across 200+ verified reviews on Google, WedMeGood, WeddingWire, and Justdial.",
  },
  {
    q: "What types of events does Anchor Yash Soni specialise in?",
    a: "Yash Soni specialises in luxury wedding ceremonies (Varmala, Baraat, Bidaai), Sangeet and Mehndi events, Haldi ceremonies, corporate award nights, product launches, business summits, NRI destination weddings, and VIP birthday galas. He serves clients across Jaipur, Rajasthan, and pan-India.",
  },
  {
    q: "Is Anchor Yash Soni bilingual?",
    a: "Yes. Yash Soni hosts fluently in both Hindi and English, often transitioning between the two mid-sentence without breaking the room's energy. For NRI families with international guests, this bilingual fluency is completely seamless. He also has working knowledge of Rajasthani and Marwari for traditional ceremonies.",
  },
  {
    q: "What is Anchor Yash Soni's hosting style?",
    a: "Completely unscripted. Zero paper scripts in 1,100+ events. Yash reads the room in real time — adjusting energy, tone, and content based on the crowd's response, not a pre-written plan. This unscripted approach is what consistently earns him 5-star reviews from clients who say the event felt alive.",
  },
  {
    q: "Which venues in Jaipur has Anchor Yash Soni worked at?",
    a: "Yash Soni has hosted events at Rambagh Palace, Jai Mahal, Fairmont Jaipur, Marriott Jaipur, ITC Rajputana, JECC Sitapura, Birla Auditorium, and dozens of farmhouse venues on Ajmer Road and Bhankrota. He also hosts destination events at City Palace Udaipur, The Leela, and heritage properties across Rajasthan.",
  },
  {
    q: "How does Anchor Yash Soni handle event emergencies?",
    a: "Crisis management is a core strength. Power cuts, audio failures, delayed schedules, last-minute cancellations — all handled invisibly without the guests noticing anything is wrong. Yash has a library of 50+ crowd interactions ready for unexpected gaps, turning potential awkwardness into memorable crowd moments.",
  },
  {
    q: "How can I book Anchor Yash Soni for my event?",
    a: "The simplest way is to send a WhatsApp message with your event date, type, and guest count. Availability is checked and an introductory call is scheduled. A 50% advance confirms the date. The calendar fills 6–8 months ahead for peak season (October–February), so early contact is strongly advised.",
  },
  {
    q: "Does Anchor Yash Soni work outside Jaipur?",
    a: "Yes. While Jaipur is the primary base, Yash Soni regularly hosts events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer — and travels pan-India for destination weddings and corporate events. Travel logistics are structured into the booking terms.",
  },
];

// ─────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────
const G = ({ children, className = "", animate = false }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${animate ? "gold-shimmer" : ""} ${className}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD }}
  >
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.72, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl transition-all duration-300 ${open ? "border-[#D4AF37]/50 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>
          {q}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
          className="shrink-0 mt-0.5">
          <ChevronDown size={18} className={open ? "text-[#D4AF37]" : "text-zinc-500"} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────
export default function AboutPage() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-black text-white overflow-x-hidden font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ═══════════════════════════════
          BREADCRUMB
      ═══════════════════════════════ */}
      <nav className="pt-24 md:pt-28 pb-0 px-5 md:px-10">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-zinc-600">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-zinc-400">About</span>
        </div>
      </nav>

      {/* ═══════════════════════════════
          1. HERO — photo BG, keyword H1
      ═══════════════════════════════ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-end md:items-center overflow-hidden pb-16 md:pb-0 mt-2">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image
            src="/intro-portrait-top.webp"
            alt="Anchor Yash Soni — best anchor in Jaipur, premium event emcee"
            fill priority quality={90}
            className="object-cover object-top md:object-center opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-5 md:px-10 max-w-6xl mx-auto w-full pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-4 py-1.5 rounded-full bg-black/50 text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <Star size={10} fill={GOLD} /> 4.9★ · 200+ Verified Reviews · Jaipur
              </span>
            </div>

            {/* H1 — keyword optimised */}
            <h1 className="text-[2.8rem] leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-5">
              ANCHOR<br />
              <G animate>YASH SONI.</G>
            </h1>

            <p className="text-sm md:text-xl text-zinc-300 mb-3 max-w-lg font-light leading-relaxed">
              Jaipur's most reviewed event anchor. 1,100+ events across India — weddings, Sangeets, corporate galas, and everything in between.
            </p>
            <p className="text-xs md:text-sm text-zinc-500 mb-8 font-light">
              Bilingual Hindi/English &nbsp;·&nbsp; 100% Unscripted &nbsp;·&nbsp; 10,000+ crowd commanded
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all active:scale-95">
                  Book Yash for Your Event →
                </button>
              </a>
              <Link href="/best-anchor-in-jaipur" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-zinc-300 text-sm font-medium rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all active:scale-95">
                  Why I'm Jaipur's Most Reviewed
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════
          2. STATS — clean, no boxes
      ═══════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3">
                  <s.icon size={22} className="mx-auto mb-3 text-[#D4AF37]" />
                  <div className="text-4xl md:text-5xl font-black mb-1"><G>{s.val}</G></div>
                  <div className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">{s.label}</div>
                  <div className="text-zinc-600 text-[10px] mt-0.5 hidden md:block">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          3. THE STORY — 3 chapters
      ═══════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">The Story</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-14 leading-tight">
              The Making of <G>Jaipur's Most Trusted Anchor.</G>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: photo */}
            <Reveal delay={0.1} className="lg:sticky lg:top-28 self-start">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/intro-portrait-bottom.webp"
                  alt="Anchor Yash Soni live on stage Jaipur"
                  fill quality={90}
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">Anchor Yash Soni</p>
                  <p className="text-white text-xs">Premium Event Anchor · Jaipur, India</p>
                </div>
              </div>
            </Reveal>

            {/* Right: chapters */}
            <div className="flex flex-col gap-0">
              {STORY_CHAPTERS.map((ch, i) => (
                <Reveal key={i} delay={i * 0.12}>
                  <div className="relative pl-8 md:pl-10 pb-14 border-l border-white/10 hover:border-[#D4AF37]/30 transition-colors group last:pb-0">
                    {/* Number dot */}
                    <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-black border border-[#D4AF37] flex items-center justify-center text-[10px] font-black text-[#D4AF37] group-hover:scale-110 transition-transform">
                      {ch.num}
                    </span>
                    {/* Ghost number */}
                    <span className="text-[6rem] md:text-[8rem] font-black text-white/[0.025] leading-none select-none absolute -top-4 -left-2 pointer-events-none">
                      {ch.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative">{ch.title}</h3>
                    {ch.body.map((para, j) => (
                      <p key={j} className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-3 relative last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          4. DIFFERENTIATORS — what sets him apart
      ═══════════════════════════════ */}
      <section className="py-14 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">Why Clients Choose Yash</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                I Don&apos;t Manage Crowds. <G>I Move Them.</G>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#D4AF37]/40 transition-all group bg-zinc-900/20 hover:bg-zinc-900/50 h-full">
                  <CheckCircle2 size={20} className="text-[#D4AF37] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{d.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          5. VENUES CONQUERED
      ═══════════════════════════════ */}
      <section className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">Stages Conquered</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              You Don&apos;t Trust a Pilot Who Hasn&apos;t Flown. <G>I&apos;ve Flown.</G>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mb-10 max-w-xl">
              Every venue has its own acoustics, layout, and energy. Knowing them before you arrive is the difference between competent and commanding.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all group bg-zinc-900/20 hover:bg-zinc-900/50 h-full">
                  <v.icon size={18} className="text-[#D4AF37] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{v.title}</h3>
                  <p className="text-zinc-300 text-xs font-medium mb-2 leading-relaxed">{v.list}</p>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-wider">{v.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="text-center mt-8 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              Know your venue is on this list? Then I already know the drill.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════
          6. SIGNATURE STYLE — 3 formats
      ═══════════════════════════════ */}
      <section className="py-14 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">The Craft</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                No &quot;Pass the Parcel&quot; Here. <G>Ever.</G>
              </h2>
              <p className="text-zinc-500 text-sm mt-3 max-w-lg mx-auto">
                Every format is a different discipline. Here is what each one actually looks like on the night.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STYLES.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`border rounded-2xl p-6 h-full ${s.color}`}>
                  <s.icon size={20} className="text-[#D4AF37] mb-4" />
                  <h3 className="text-base font-bold text-white mb-4">{s.format}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                        <span className="text-zinc-400 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="text-center mt-7 text-zinc-600 text-xs italic">
              The rule: no one is forced to participate — but everyone will want to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════
          7. CRISIS MANAGEMENT
      ═══════════════════════════════ */}
      <section className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">Crisis Management</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Scripts Are Safety Nets. <G>I Don&apos;t Use Them.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              A script can&apos;t help when the electricity goes out at a 900-person Sangeet. A script can&apos;t help when the bride needs 20 more minutes. A script can&apos;t help when the DJ&apos;s laptop crashes mid-dance floor.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              Over 1,100+ events, I have built a mental library of 50+ crowd interactions specifically designed for these moments. When the unexpected happens, the audience doesn&apos;t see a problem — they see a planned moment. That is the real skill.
            </p>
            <div className="space-y-3">
              {[
                "PA system failed mid-Sangeet — turned into crowd call-and-response",
                "Bride delayed 30 mins — nobody in the room knew it was unplanned",
                "Power cut during awards night — improvised interactive round filled the gap",
                "DJ no-show — coordinated backup with venue team in 8 minutes",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ShieldCheck size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/service-wedding.webp"
                alt="Anchor Yash Soni commanding a crowd at a Jaipur wedding"
                fill quality={85}
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Quote size={20} className="text-[#D4AF37]/50 mb-2" />
                <p className="text-white text-sm md:text-base font-semibold italic leading-snug">
                  &ldquo;When you hand me the mic, you hand over your event&apos;s reputation. I handle it like it&apos;s my own.&rdquo;
                </p>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mt-2 font-bold">— Anchor Yash Soni</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════
          8. PLATFORMS MARQUEE
      ═══════════════════════════════ */}
      <section className="py-12 bg-zinc-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 mb-7 flex justify-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase border border-white/10 bg-white/5 rounded-full px-6 py-2.5">
            Verified & Reviewed On
          </span>
        </div>
        <div className="flex overflow-hidden mask-fade">
          <div className="flex whitespace-nowrap gap-16 items-center marquee w-max">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-black text-zinc-600 uppercase hover:text-[#D4AF37] transition-colors duration-300">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          9. SERVICES GRID — all internal links
      ═══════════════════════════════ */}
      <section className="py-14 md:py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">Explore All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                One Anchor. <G>Every Format.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES_LINKS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <Link href={s.href}>
                  <div className="border border-white/10 rounded-2xl p-5 hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50 text-center h-full">
                    <s.icon size={20} className="text-[#D4AF37] mx-auto mb-3" />
                    <p className="text-white text-sm font-semibold group-hover:text-[#D4AF37] transition-colors leading-snug">{s.label}</p>
                    <div className="mt-2 flex items-center justify-center gap-1 text-[#D4AF37] text-[10px] uppercase tracking-wider">
                      Explore <ArrowRight size={9} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          10. THE QUOTE — dark, not yellow
      ═══════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.02] leading-none whitespace-nowrap">YASH</span>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <Quote size={28} className="text-[#D4AF37]/40 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
              &ldquo;Your Stage. <G animate>My Responsibility.</G>&rdquo;
            </blockquote>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
              When you hand me the mic, you aren&apos;t just hiring a vendor. You are handing over the responsibility of your guests&apos; entire experience. I take that seriously. You enjoy the moment — I handle everything else.
            </p>

            {/* Signature */}
            <p className="text-4xl md:text-5xl text-[#D4AF37] font-black tracking-tight mb-10 opacity-80"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              Yash Soni
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all">
                  <CalendarCheck size={16} /> Book Your Date
                </button>
              </a>
              <Link href="/best-anchor-in-jaipur" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium rounded-full hover:bg-[#D4AF37]/10 transition-all">
                  Why I&apos;m Jaipur&apos;s Most Reviewed →
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════
          11. FAQ
      ═══════════════════════════════ */}
      <section className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">People Also Ask</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Anchor Yash Soni — <G>FAQ.</G>
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" />
            </div>
          </Reveal>
          <div className="flex flex-col gap-4">
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          12. FINAL CTA
      ═══════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-t border-white/5 px-5 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/8 rounded-full px-4 py-1.5 mb-8">
              <ShieldCheck size={12} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Available for 2025–2026</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Ready to Work <G animate>Together?</G>
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Calendar books <strong className="text-[#D4AF37]">6–8 months in advance</strong> for peak season. No waitlists. No replacements. One anchor, one event, per date.
            </p>
            <p className="text-zinc-600 text-xs mb-8">When the calendar is full — it is simply full.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <CalendarCheck size={16} /> Start the Conversation
              </button>
            </a>

            {/* Internal link footer */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
              <Link href="/sangeet-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Sangeet Host</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
