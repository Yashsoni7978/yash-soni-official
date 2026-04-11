"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, CheckCircle2, Globe, Heart, MapPin, Mic2, Minus, Moon, Music, Plane, Plus, ShieldCheck, Sparkles, Star, Sun, Users, Wine } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20and%20I%27d%20love%20to%20check%20your%20availability.";
const GOLD = "#D4AF37";
const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .ticker { animation:marquee 30s linear infinite; }
`;
// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center gold-shimmer ${className}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD }}
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
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        {align === "center" && <span className="w-8 h-px bg-[#D4AF37]" />}
        <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
        <span className="w-8 h-px bg-[#D4AF37]" />
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
  { val: "3 Days", label: "Full Coverage", icon: CalendarCheck },
  { val: "Pan-India", label: "& International", icon: Globe },
];
const TICKER_CITIES = [
  "Udaipur", "Jodhpur", "Jaisalmer", "Jaipur", "Pushkar",
  "Goa", "Mumbai", "Dubai", "Mussoorie", "Kerala", "Ranthambore", "Thailand",
];
// 13 destination cities with SEO data
const DESTINATIONS = [
  {
    city: "Udaipur",
    tag: "City of Lakes",
    desc: "Palace properties on the lake. Taj Lake Palace, Leela Palace, Oberoi Udaivilas — the most photographed destination wedding backdrop in India. Yash has hosted extensively across Udaipur's heritage properties.",
    venues: "Taj Lake Palace · Leela Palace · Oberoi Udaivilas · City Palace",
    img: "/gallery-1.webp",
    colSpan: "col-span-2",
    keywords: ["destination wedding anchor udaipur", "wedding anchor udaipur"],
  },
  {
    city: "Jodhpur",
    tag: "Blue City",
    desc: "Umaid Bhawan Palace buyouts, Mehrangarh fort ceremonies. The most dramatic skyline in India. NRI families choose Jodhpur for the scale that no other city can match.",
    venues: "Umaid Bhawan Palace · Mehrangarh Fort · Raas Jodhpur",
    img: "/gallery-4.webp",
    keywords: ["destination wedding anchor jodhpur", "umaid bhawan wedding anchor"],
  },
  {
    city: "Jaisalmer",
    tag: "Golden City",
    desc: "Desert camp weddings, fort ceremonies under the stars. Jaisalmer is the ultimate sunset backdrop — Sangeet nights here are in a completely different league.",
    venues: "Suryagarh · Serai · Fort properties",
    img: "/gallery-3.webp",
    keywords: ["destination wedding anchor jaisalmer", "desert wedding anchor india"],
  },
  {
    city: "Goa",
    tag: "Beach Vibes",
    desc: "Beachfront ceremonies, sunset cocktails, barefoot luxury. The format is completely different from palace weddings — high-energy, international crowd, and a vibe that stays electric until 6 AM.",
    venues: "W Goa · ITC Grand · Alila Diwa · Beach properties",
    img: "/gallery-2.webp",
    keywords: ["destination wedding anchor goa", "beach wedding anchor goa"],
  },
];
const ITINERARY = [
  {
    day: "Day 01",
    title: "The Welcome & Sundowner",
    icon: Sun,
    desc: "Guests arrive. The vibe is chill but charged. I host a 'Know Your Family' session over high-tea or cocktails — breaking the ice between two families meeting for the first time, turning nervous introductions into genuine warmth within 2 hours.",
    align: "left",
  },
  {
    day: "Day 02 — Morning",
    title: "The Pool Party or Haldi",
    icon: Sparkles,
    desc: "Chaos mode on. Floral Holi, Tug-of-War, Bride Squad vs Groom Squad battles. I make sure no one stays dry and everyone's dancing. The energy set here carries through the entire evening.",
    align: "right",
  },
  {
    day: "Day 02 — Night",
    title: "The Sangeet Gala",
    icon: Music,
    desc: "Glitz and glamour. I switch to a tuxedo. This is the Bollywood Awards Night — family performances, heartfelt roasts, crowd games, and managing stage flow for 4–6 hours without a single dead moment.",
    align: "left",
  },
  {
    day: "Day 03",
    title: "The Royal Varmala",
    icon: Moon,
    desc: "The main event. Traditional attire, poetic bilingual narration, and a cinematic Varmala build that creates the single most photographed moment of the entire wedding. Everything leads to this.",
    align: "right",
  },
];
const WHY_DIFFERENT = [
  {
    title: "The Social Glue",
    desc: "Destination weddings have guests who are tired from travel, families meeting for the first time, and an itinerary that runs 3 days straight. I act as the binding force that keeps the energy cohesive across every event — Welcome Lunch to After-Party.",
  },
  {
    title: "Logistics Awareness",
    desc: "Hotel check-in delays, sound checks in unfamiliar venues, vendors who don't know each other. I've hosted at enough destination properties to anticipate every logistical issue before it reaches the guests.",
  },
  {
    title: "NRI Protocol Fluency",
    desc: "International guests, bilingual hosting, cultural navigation between Rajasthani traditions and Western etiquette. Families flying in from the UK, USA, Canada, and Gulf feel completely included — not observers.",
  },
  {
    title: "Crisis at Scale",
    desc: "A 3-day destination wedding is three separate shows. Power cuts, weather changes, delayed arrivals — all handled invisible to 400+ guests across multiple venues. In 1,100+ events, not once has a guest seen a problem.",
  },
];
const TESTIMONIALS = [
  {
    name: "Kapoor Family",
    quote: "We flew from Toronto for a 3-day palace wedding in Udaipur. Yash managed 600 guests across the Welcome Sundowner, Sangeet at the City Palace, and the Varmala with complete precision. Our international guests had never seen anything like it.",
    event: "3-Day Destination Wedding · Udaipur, Rajasthan",
    guests: "NRI family, 600 guests",
  },
  {
    name: "Singhania Family",
    quote: "Destination wedding at Umaid Bhawan, Jodhpur. Yash arrived a day early, synced with the palace events team, and managed 800 guests across three events. The Sangeet on the fort terrace was the most electric night of our lives.",
    event: "Palace Destination Wedding · Jodhpur",
    guests: "800 guests, 3 days",
  },
  {
    name: "Mehta Family (UK)",
    quote: "Our son's wedding in Jaisalmer. 400 guests, many from London and Dubai. Yash's bilingual hosting made every international guest feel completely at home while honouring every Rajasthani tradition perfectly.",
    event: "Desert Destination Wedding · Jaisalmer",
    guests: "NRI family, 400 guests",
  },
];
const FAQS = [
  {
    q: "Who is the most reviewed destination wedding anchor in India?",
    a: "Anchor Yash Soni is a 4.9★ rated destination wedding specialist with 1,100+ events hosted across India and international locations. He has hosted destination weddings at Taj Lake Palace and Leela Palace in Udaipur, Umaid Bhawan in Jodhpur, Suryagarh in Jaisalmer, and beach properties in Goa. His bilingual Hindi/English fluency and NRI protocol expertise make him the top choice for families flying in from the UK, USA, Canada, and Gulf.",
  },
  {
    q: "What does the destination wedding package cover?",
    a: "The full 2–3 day destination wedding package covers every event from the Welcome Lunch or Sundowner through the Pool Party or Haldi, Sangeet Gala, Varmala ceremony, and Reception. Every event gets a custom run-of-show, dedicated preparation, and a professional presence that matches the venue's grandeur. There are no hidden hourly charges — it is a flat package fee.",
  },
  {
    q: "Do you travel for weddings in Udaipur and other Rajasthan cities?",
    a: "Yes. Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer, and all Rajasthan destination cities are regularly hosted. Rajasthan is the primary destination wedding territory — the heritage venues, the palace properties, and the visual backdrop are unmatched in India. Travel from Jaipur to any Rajasthan city is seamless.",
  },
  {
    q: "Do you travel for destination weddings in Goa and other Indian states?",
    a: "Yes. Goa, Mumbai, Kerala, Mussoorie, Ranthambore, and other destination locations across India are available. Beach weddings in Goa and hill station weddings in Mussoorie are completely different formats from palace weddings — the energy, the crowd profile, and the hosting style adapt to each location.",
  },
  {
    q: "Do you host international destination weddings?",
    a: "Yes. A valid passport is held and international destination weddings in Dubai, Thailand, Bali, and other global locations are available. International bookings require at least 3–4 months notice for visa logistics and require client arrangement of return flights from Jaipur and accommodation at the wedding venue.",
  },
  {
    q: "Do you have experience with palace weddings — Rambagh, Umaid Bhawan, Leela?",
    a: "Yes. Rambagh Palace Jaipur, Umaid Bhawan Jodhpur, Taj Lake Palace Udaipur, Leela Palace, and City Palace Udaipur have all been hosted. Heritage palace venues have their own acoustic quirks, lighting protocols, and event team hierarchies — knowing these before you arrive is the difference between competent and commanding.",
  },
  {
    q: "Can you handle NRI guests and international families at destination weddings?",
    a: "NRI destination weddings are a core specialisation. Bilingual Hindi/English hosting, international etiquette awareness, and cultural navigation between Rajasthani traditions and Western protocols — all handled seamlessly. Families from the UK, USA, Canada, and Gulf fly in with specific expectations of both the cultural experience and the international standard of presentation. Both are delivered.",
  },
  {
    q: "What is your role during the non-stage events like a Welcome Lunch?",
    a: "At non-stage events, I act as the 'Social Glue.' I move through the room, facilitate introductions between families who are meeting for the first time, run casual ice-breaker games, and ensure both sides of the family are genuinely mixing — not sitting in separate groups. By the time the Sangeet starts, the room already knows each other. That changes everything.",
  },
  {
    q: "Who handles travel and accommodation for destination bookings?",
    a: "The client arranges return flights from Jaipur and accommodation at the wedding venue — same hotel as guests — for the anchor and one assistant. I always arrive at least one full day before the first event specifically to sync with the venue events team, check all technical setups, and anticipate any location-specific challenges.",
  },
  {
    q: "How far in advance should we book a destination wedding anchor?",
    a: "Destination wedding packages block 3–4 full days of the calendar. Book 6–9 months in advance for peak destination season (October–February for Rajasthan, November–January for Goa). International bookings need a minimum 3–4 months notice. WhatsApp the moment your venue and dates are confirmed — destination slots are the first to fill.",
  },
  {
    q: "What languages do you host in at destination weddings?",
    a: "Hindi and English fluently, often simultaneously. For Rajasthani palace weddings, warm Marwari and local cultural references for the family elders. For international guests, completely seamless English with zero code-switching awkwardness. Gujarati and Punjabi phrases are available for additional family connection.",
  },
  {
    q: "Do you bring a team to destination weddings?",
    a: "Yes. I travel with a manager who handles sound check, script cues, and coordination with the venue events team. We work alongside your wedding planner from arrival to departure. A dedicated WhatsApp group with the planner and key family members is set up 2–3 weeks before the wedding for real-time coordination.",
  },
];
const RELATED = [
  { icon: Heart, label: "Wedding Anchor", href: "/wedding-anchor-jaipur", desc: "Varmala & ceremonies" },
  { icon: Music, label: "Sangeet Host", href: "/sangeet-anchor-jaipur", desc: "High-energy Sangeet" },
  { icon: Sparkles, label: "Haldi Anchor", href: "/haldi-anchor-jaipur", desc: "Games & crowd energy" },
  { icon: Star, label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur", desc: "All formats" },
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
export default function DestinationAnchor() {
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
        <span>Destination Wedding Anchor India</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#050505] z-10" />
          <Image
            src="/gallery-4.webp"
            alt="Destination wedding anchor India — Anchor Yash Soni"
            fill priority quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2 rounded-full bg-black/40 backdrop-blur-xl mb-8">
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-white text-[10px] uppercase tracking-widest font-bold">
                4.9★ · Destination Wedding Anchor · India & Global
              </span>
            </div>
            {/* H1 — national keyword */}
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
              Have Mic,<br /><G>Will Travel.</G>
            </h1>
            <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-3">
              From the palace lakes of Udaipur to the desert forts of Jaisalmer, the beaches of Goa to international destinations — 4.9★ rated destination wedding anchor — Udaipur, Jodhpur, Jaisalmer, Goa &amp; international.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              Udaipur · Jodhpur · Jaisalmer · Goa · Dubai &amp; worldwide &nbsp;·&nbsp; NRI specialist &nbsp;·&nbsp; Full 2–3 day package
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95">
                  Check Travel Dates →
                </button>
              </a>
              <Link href="/wedding-anchor-jaipur" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                  Wedding Anchor →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. GOLD DESTINATION TICKER — fixed animation
      ══════════════════════════════════════ */}
      <div className="bg-[#D4AF37] text-black py-3.5 overflow-hidden border-y border-white/10 relative z-20">
        <div className="flex whitespace-nowrap w-max ticker">
          {[...TICKER_CITIES, ...TICKER_CITIES, ...TICKER_CITIES].map((city, i) => (
            <span key={i} className="inline-flex items-center gap-6 mr-8 font-black uppercase tracking-widest text-sm">
              {city} <span className="text-black/40">✦</span>
            </span>
          ))}
        </div>
      </div>
      {/* ══════════════════════════════════════
          3. STATS
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-b border-white/5">
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
          4. INTRO — keyword-dense national SEO
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">Destination Wedding Specialist</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              I Don&apos;t Just Host<br />Your Wedding. <G>I Curate</G><br />the 3-Day Experience.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              Destination weddings are a completely different discipline from single-day events. Guests are tired from travel, two families are meeting for the first time, the itinerary runs 72 hours, and the venues are unfamiliar to everyone — including most vendors.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              With <strong className="text-white">1,100+ events hosted</strong> and a <strong className="text-white">4.9★ rating across 200+ verified reviews</strong>, Anchor Yash Soni has hosted destination weddings at Taj Lake Palace and Leela Palace in Udaipur, Umaid Bhawan and Mehrangarh Fort in Jodhpur, Suryagarh in Jaisalmer, beach properties in Goa, and international venues across Dubai and Southeast Asia.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              Bilingual Hindi/English. NRI protocol fluent. Every Rajasthani tradition respected and every international guest included. This is the complete destination wedding experience.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="px-7 py-3.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all">
                Check Destination Availability →
              </button>
            </a>
          </Reveal>
          {/* Stacked image — original design kept */}
          <Reveal delay={0.15}>
            <div className="relative h-[500px] md:h-[600px] w-full">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-white/10 transform rotate-3">
                <Image
                  src="/gallery-5.webp"
                  alt="Destination wedding venue India"
                  fill quality={100}
                  className="object-cover grayscale opacity-60"
                  sizes="(max-width:1024px) 75vw, 37vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/intro-portrait-top.webp"
                  alt="Anchor Yash Soni destination wedding anchor India"
                  fill quality={100}
                  className="object-cover"
                  sizes="(max-width:1024px) 75vw, 37vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. WHY DIFFERENT — 4 points
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <SectionHeading subtitle="The Role" title="The Social Glue." />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              Destination weddings demand a completely different approach. The anchor isn&apos;t just a stage host — they&apos;re the connective tissue across 3 days, multiple venues, 400+ guests, and families who barely know each other.
            </p>
            <div className="space-y-6">
              {WHY_DIFFERENT.map((w, i) => (
                <div key={i} className="flex gap-4 group">
                  <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#D4AF37] transition-colors">{w.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Right: quick visual */}
          <Reveal delay={0.12} className="lg:mt-16">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20 group">
              <Image
                src="/gallery-2.webp"
                alt="Destination wedding anchor hosting at a palace in India"
                fill quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-1">4.9★ Destination Wedding Anchor</p>
                <p className="text-white text-xs">NRI specialist · Bilingual · Full 2–3 day coverage</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. 3-DAY ITINERARY — original kept, upgraded
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The Experience" title="Your 3-Day Journey." align="center" />
          <div className="mt-10 relative max-w-4xl mx-auto">
            {/* Vertical flight path line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#D4AF37] via-zinc-800 to-transparent -translate-x-1/2 hidden md:block" />
            {ITINERARY.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 relative ${item.align === "right" ? "md:flex-row-reverse" : ""}`}>
                  {/* Gold dot */}
                  <div className="absolute left-1/2 top-8 w-8 h-8 bg-[#050505] border-2 border-[#D4AF37] rounded-full -translate-x-1/2 z-10 items-center justify-center hidden md:flex">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  </div>
                  <div className={`w-full md:w-1/2 p-6 md:p-8 ml-0 md:ml-0 hover:bg-zinc-900/50 border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl transition-all duration-400 group ${item.align === "right" ? "text-left" : "text-left md:text-right"}`}>
                    <div className={`flex items-center gap-3 mb-3 ${item.align === "right" ? "justify-start" : "justify-start md:justify-end"}`}>
                      <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">{item.day}</span>
                      <item.icon size={16} className="text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. DESTINATION GRID — SEO location cards
          (Original location postcards expanded)
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Home Grounds" title="Destination Expertise Across India." />
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {DESTINATIONS.map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/8 hover:border-[#D4AF37]/50 transition-all duration-400 ${i === 0 ? "md:col-span-2 h-[280px]" : "h-[220px]"}`}>
                  <Image
                    src={d.img}
                    alt={`Destination wedding anchor ${d.city} — Anchor Yash Soni`}
                    fill quality={100}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-black text-2xl md:text-3xl uppercase">{d.city}</p>
                    <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mt-1">
                      <MapPin className="w-3 h-3" /> {d.tag}
                    </div>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{d.venues}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Also available strip */}
          <Reveal delay={0.2}>
            <div className="text-center">
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-4">Also Available For</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Dubai", "Thailand", "Bali", "Mussoorie", "Pushkar", "Ranthambore", "Kerala", "Mumbai"].map(city => (
                  <span key={city} className="border border-white/10 px-5 py-2 rounded-full text-zinc-400 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all text-xs cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. TESTIMONIALS — NEW
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Destination Families Say." align="center" />
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
          9. FAQ — 12 questions, national PAA
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading subtitle="Logistics & Planning" title="Destination Wedding Anchor — FAQ." align="center" />
          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-dest-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. RELATED SERVICES — internal links
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">All Wedding Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">One Anchor. <G>Every Wedding Event.</G></h2>
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
          11. SCARCITY CTA
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-white/5 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[16vw] text-white/[0.02] leading-none whitespace-nowrap">DESTINATION</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <Plane className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 opacity-60" />
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight uppercase">
              Packing <G>My Bags?</G>
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Destination wedding packages block <strong className="text-[#D4AF37]">3–4 full days</strong> of the calendar. They book <strong className="text-[#D4AF37]">6–9 months in advance</strong> — faster than any other format.
            </p>
            <p className="text-zinc-600 text-xs mb-8">The moment your venue and dates are confirmed — WhatsApp immediately.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] active:scale-95">
                <CalendarCheck size={16} /> Inquire Now
              </button>
            </a>
            {/* Footer links */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
              <Link href="/sangeet-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Sangeet Host</Link>
              <Link href="/haldi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Haldi Anchor</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Anchor Jaipur</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}