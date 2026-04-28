"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, ArrowRight, Building2, CalendarCheck, CheckCircle2, MapPin, Mic2, Minus, Plus, ShieldCheck, Smile, Sparkles, Star, Target, Trophy, Users, Zap } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20corporate%20team%20building%20host%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability.";
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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
// Fixed: real numbers, not vague qualifiers
const STATS = [
  { val: "70+", label: "Corporate Brands", icon: Building2 },
  { val: "4.9★", label: "Client Rating", icon: Star },
  { val: "1100+", label: "Total Events", icon: Mic2 },
  { val: "1000+", label: "Max Group Size", icon: Users },
];
const MODULES = [
  {
    icon: Users,
    title: "Ice Breakers",
    desc: "Quick, energetic activities that get strangers talking within minutes. The intern high-fiving the CEO by the end of round one. Every time.",
  },
  {
    icon: Target,
    title: "Goal-Based Challenges",
    desc: "Strategic games requiring collaboration, planning, and execution. Teams solve real problems under pressure — revealing natural leaders and hidden skills.",
  },
  {
    icon: Trophy,
    title: "Corporate Tournaments",
    desc: "Cricket, box cricket, tug-of-war, and department leagues for 100–1,000+ employees. Managed end-to-end — brackets, commentary, trophies.",
  },
  {
    icon: Smile,
    title: "Fun Friday Sessions",
    desc: "Weekly or monthly in-office engagement to keep morale high between quarterly offsites. Quick 30–60 minute energisers that the team actually looks forward to.",
  },
];
const ACTIVITIES = [
  {
    title: "Drum Circles",
    desc: "Rhythmic synchronisation where every employee plays a beat to create one collective sound. Impossible to do without listening to each other — the lesson lands without a word of instruction.",
  },
  {
    title: "Scavenger Hunts",
    desc: "Treasure hunts across the resort or office premises that build navigation, communication, and teamwork. Custom versions for resort offsites in Jaipur's Aravalli circuit.",
  },
  {
    title: "The Squid Game Challenges",
    desc: "Popular adrenaline formats — Red Light Green Light, glass bridge decisions, trust-based challenges. Safe, controlled, and absolutely electric for large groups.",
  },
  {
    title: "Talent Hunt",
    desc: "Unearthing hidden singers, dancers, and comedians within the workforce. The Finance team's secret rapper is always the biggest surprise of the offsite.",
  },
  {
    title: "Blindfold Challenges",
    desc: "Trust-building exercises where communication is the only tool. Teams that can't see must direct each other precisely — the debrief writes itself.",
  },
  {
    title: "Rapid Fire Quiz",
    desc: "Fast-paced trivia combining company knowledge, pop culture, and general knowledge. Department vs department. Keeps the competitive spirit channelled productively.",
  },
];
const TESTIMONIALS = [
  {
    name: "HR Head, National Brand",
    quote: "We've done team building every year and it always feels forced. Yash turned it into something our employees were genuinely competing in and talking about the next week. 300 people, zero awkward moments.",
    event: "Annual Offsite · Jaipur Resort",
    size: "300 employees",
  },
  {
    name: "Operations Director",
    quote: "Fun Friday sessions for our Jaipur office. Yash does the virtual ones too. Both formats keep the energy completely different from every other vendor we've tried.",
    event: "Monthly Engagement Sessions · Jaipur",
    size: "150 employees",
  },
  {
    name: "CEO, Tech Company",
    quote: "Annual Day for 600 staff at JECC Sitapura. The drum circle segment was the moment the entire organisation felt like one team. Unscripted, unrehearsed, and completely genuine.",
    event: "Annual Day · JECC Sitapura, Jaipur",
    size: "600 employees",
  },
];
const FAQS = [
  {
    q: "Who is the best corporate team building host in Jaipur?",
    a: "Anchor Yash Soni is a 4.9★ rated corporate team building host with 70+ national brands served and 1,100+ events hosted. He specialises in employee engagement, drum circles, scavenger hunts, corporate tournaments, and annual day hosting for groups of 50–1,000+ employees across Jaipur, Rajasthan, and pan-India offsites.",
  },
  {
    q: "Why do we need a professional host for team building instead of HR?",
    a: "An internal HR manager can organise the games — but a professional host brings neutral authority, high energy, and the crowd psychology to manage 100–500 people simultaneously without office politics interfering. The intern participates the same as the CEO. That psychological safety is what makes team building actually work.",
  },
  {
    q: "Can you manage large groups of 100+ employees for team building?",
    a: "Yes. Large-format employee engagement is a core specialisation. Groups of 100–1,000+ are managed using clear microphone instructions, subgroup division strategies, and a pace that keeps every team engaged simultaneously — nobody waits, nobody sits out.",
  },
  {
    q: "Do you conduct team building activities in Jaipur resorts?",
    a: "Yes. Corporate offsites at Jaipur's Aravalli circuit resorts — Rambagh, Fairmont, Trident, and resort properties near Ajmer Road — are a regular format. Scavenger hunts, drum circles, and outdoor challenges are customised for the specific property layout.",
  },
  {
    q: "Do you bring your own props and materials?",
    a: "Yes. Standard game kits — ropes, balls, placards, blindfolds, trivia boards, and tournament brackets — are carried. The client provides the venue and audience. Everything else is handled.",
  },
  {
    q: "Can you conduct indoor team building for small offices in Jaipur?",
    a: "Yes. A dedicated conference room module is designed for small spaces — mental challenges, rapid fire quizzes, virtual scavenger hunts, and Pictionary formats that work with 20–50 people in a standard office setting.",
  },
  {
    q: "Do you host virtual team building sessions?",
    a: "Yes. Virtual team building via Zoom and Microsoft Teams — virtual scavenger hunts, online Pictionary, rapid fire quizzes, and digital ice-breakers — for remote and hybrid teams across India.",
  },
  {
    q: "How long does a typical team building session last?",
    a: "A standard high-energy session runs 60–90 minutes. Full-day facilitation for residential offsites ranges from 4–6 hours across multiple activity modules. Annual Day programmes run 3–5 hours including awards, entertainment, and engagement segments.",
  },
  {
    q: "Can you host Annual Day events for companies in Jaipur?",
    a: "Yes. Annual Day hosting — awards ceremony, entertainment anchoring, employee recognition, and engagement activities — for 200–1,000+ employees is a core corporate format. Venues across Jaipur including JECC Sitapura, Birla Auditorium, and five-star hotel ballrooms are regularly hosted.",
  },
  {
    q: "How far in advance should corporate team building be booked?",
    a: "For large-format offsites and Annual Day events, 4–6 weeks in advance is recommended. For smaller Fun Friday or monthly sessions, 2 weeks is usually sufficient. Reach out via WhatsApp with your date, group size, and activity preference for a quick confirmation.",
  },
];
const RELATED = [
  { icon: Building2, label: "Corporate Anchor", href: "/corporate-event-anchor-jaipur", desc: "Award nights & summits" },
  { icon: Sparkles, label: "Celebrity Events", href: "/celebrity-public-events-host", desc: "Launches & public events" },
  { icon: Star, label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur", desc: "All event formats" },
  { icon: Trophy, label: "Anchor in Jaipur", href: "/anchor-in-jaipur", desc: "All Jaipur coverage" },
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
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 mt-0.5 ${
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
export default function TeamBuildingHost() {
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
        <Link href="/best-anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Team Building Host Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#050505] z-10" />
          {/* FIX: next/image replaces <img> */}
          <Image
            src="/service-corporate.webp"
            alt="Corporate team building host Jaipur — Anchor Yash Soni"
            fill priority quality={100}
            className="object-cover opacity-40 grayscale"
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 px-5 py-2 rounded-full bg-[#D4AF37]/10 backdrop-blur-md mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                4.9★ · Team Building Host · Jaipur
              </span>
            </div>
            {/* H1 — primary keyword */}
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-black leading-tight mb-6 uppercase">
              Team Building<br /><G>Host in Jaipur.</G>
            </h1>
            <p className="text-zinc-300 text-base md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed font-light">
              Recharge your workforce. Drum circles, scavenger hunts, corporate tournaments, and Fun Friday sessions for 50–1,000+ employees across Jaipur and Rajasthan.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              70+ national brands &nbsp;·&nbsp; 4.9★ rated &nbsp;·&nbsp; Virtual & in-person
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95">
                  Book for Offsite →
                </button>
              </Link>
              <Link href="/corporate-event-anchor-jaipur" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                  Corporate Events →
                </button>
              </Link>
            </div>
          </Reveal>
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
          3. INTRO — keyword-rich body text
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-b border-white/5 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">More Than Just Games</p>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Bonding Happens Best When People<br /><G>Forget They&apos;re at Work.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 font-light max-w-2xl mx-auto">
              In corporate Jaipur, &ldquo;team building&rdquo; has a reputation for being awkward — forced trust falls, painfully slow ice-breakers, and an HR manager who also looks like they&apos;d rather be somewhere else.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 font-light max-w-2xl mx-auto">
              With <strong className="text-white">70+ national brands</strong> and a <strong className="text-white">4.9★ rating across 200+ verified reviews</strong>, Anchor Yash Soni creates the atmosphere of <strong className="text-[#D4AF37]">psychological safety</strong> where the intern feels comfortable high-fiving the CEO — not because they were told to, but because the energy of the room made it natural.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-2xl mx-auto">
              From 60-minute Fun Friday sessions at Jaipur&apos;s IT parks in Malviya Nagar and Sitapura, to full-day residential offsites at Aravalli resort properties near Ajmer Road, to Annual Day productions for 600+ employees at JECC Sitapura — every format is a different discipline, and every one has been mastered.
            </p>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. MODULES — 4 cards (original kept)
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">The Strategy</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">
                Engagement <G>Modules.</G>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULES.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full flex flex-col p-7 bg-zinc-900/50 border border-white/8 rounded-3xl hover:border-[#D4AF37]/50 transition-all duration-400 group">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shrink-0">
                    <m.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">{m.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. ACTIVITIES — 6 cards (original kept + expanded)
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">The Fun Menu</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">
                Popular <G>Activities.</G>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACTIVITIES.map((a, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full flex flex-col p-7 bg-black border border-white/8 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-400 hover:-translate-y-1 group">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-3 group-hover:text-[#D4AF37] transition-colors">
                    <Zap className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    {a.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. LOCATION COVERAGE — NEW SEO section
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Jaipur Coverage</span>
              <h2 className="text-3xl md:text-4xl font-black">
                Team Building Across <G>All Jaipur Zones.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                zone: "Sitapura & Malviya Nagar",
                type: "IT Parks & Corporate Campuses",
                desc: "Jaipur's tech corridor. Fun Friday sessions, townhalls, and quarterly engagement for IT companies and startups. Indoor modules work perfectly for campus settings.",
                keywords: ["team building Sitapura Jaipur", "corporate engagement Malviya Nagar"],
              },
              {
                zone: "Aravalli Resort Circuit",
                type: "Residential Offsites",
                desc: "Full-day and 2-day residential offsite facilitation at Jaipur's Aravalli belt properties. Outdoor scavenger hunts, drum circles, and tournament formats.",
                keywords: ["corporate offsite Jaipur", "team building resort Jaipur"],
              },
              {
                zone: "JECC Sitapura & Hotel Ballrooms",
                type: "Large-Format Annual Days",
                desc: "200–1,000+ employee Annual Day events at JECC, Marriott, Fairmont, and ITC Rajputana. Full production — awards, entertainment, and engagement in one seamless evening.",
                keywords: ["annual day host JECC Jaipur", "corporate annual day Jaipur"],
              },
              {
                zone: "Pan-India & Virtual",
                type: "Remote & Hybrid Teams",
                desc: "Virtual team building via Zoom and Microsoft Teams for distributed teams. The same energy, different screen. Companies across India with Jaipur offices regularly book virtual sessions.",
                keywords: ["virtual team building India", "hybrid corporate engagement Jaipur"],
              },
            ].map((loc, i) => (
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
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. TESTIMONIALS — NEW
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold block mb-2">4.9★ Verified Reviews</span>
              <h2 className="text-2xl md:text-3xl font-bold">What Corporate Teams Say.</h2>
            </div>
          </Reveal>
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
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-wider mt-0.5">{t.size}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. FAQ — 10 questions
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-5xl font-black">
                Team Building <G>FAQs.</G>
              </h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-team-${idx}`} />
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
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">One Anchor. <G>Every Format.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={r.href}>
                  <div className="border border-white/10 rounded-2xl p-5 text-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                    <r.icon size={18} className="text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold group-hover:text-[#D4AF37] transition-colors">{r.label}</p>
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
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[14vw] text-white/[0.025] leading-none whitespace-nowrap">TEAMWORK</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight uppercase">
              Energize Your <G>Workforce.</G>
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              No boring trust falls. Just pure engagement, meaningful bonding, and an activity session your team will actually talk about next week.
            </p>
            <p className="text-zinc-600 text-xs mb-8">WhatsApp with your date, group size, and preference — quick confirmation guaranteed.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] active:scale-95">
                <CalendarCheck size={16} /> Get a Custom Quote
              </button>
            </Link>
            {/* Footer links */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
              <Link href="/celebrity-public-events-host" className="hover:text-[#D4AF37] transition-colors">Celebrity Events</Link>
              <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Anchor Jaipur</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}