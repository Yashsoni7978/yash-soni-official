"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Building2, Home, Star, Mic, Users,
  ArrowRight, Crown, Camera, Minus, Plus,
  Heart, Music2, Flower2, Sparkles, CalendarCheck,
  CheckCircle2, ShieldCheck, UserCheck, Award
} from "lucide-react";

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20found%20you%20searching%20for%20an%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";
const GOLD = "#D4AF37";

const style = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .sparkle { background-size:200% auto; animation:shimmer 4s linear infinite; }
  @keyframes slowzoom { 0%{transform:scale(1)} 100%{transform:scale(1.08)} }
  .slow-zoom { animation:slowzoom 12s ease-in-out infinite alternate; }
`;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle ${className}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD }}
  >
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fixed: subtitle is span (not h2), title is h2 (not h3)
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-12 md:mb-16 relative z-10 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Crown className="w-4 h-4 text-[#D4AF37]" />
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
  { val: "1100+", label: "Events in Jaipur", icon: Mic },
  { val: "10,000+", label: "Largest Crowd", icon: Users },
  { val: "4.9★", label: "Client Rating", icon: Star },
  { val: "8+", label: "Years Local", icon: Award },
];

// ALL Jaipur micro-zones — SEO net
const JAIPUR_ZONES = [
  {
    zone: "Kukas & Delhi Road",
    type: "Palace & Heritage Venues",
    venues: "Le Meridien · ITC Mughal · Heritage resorts",
    desc: "The gateway to Jaipur's most spectacular destination wedding properties. NRI families, international guests, and palace buyouts. Zero travel cost for Yash — maximum preparation.",
    href: "/best-anchor-in-jaipur",
    keywords: ["anchor kukas jaipur", "anchor delhi road jaipur"],
  },
  {
    zone: "Amer Road & Nahargarh",
    type: "Royal Heritage Properties",
    venues: "Rambagh Palace · Jai Mahal · Samode Haveli",
    desc: "Jaipur's most photographed wedding backdrop. Heritage venues demand an anchor who understands the acoustic quirks, the lighting transitions, and the protocols that make each property unique.",
    href: "/wedding-anchor-jaipur",
    keywords: ["anchor amer road jaipur", "rambagh palace wedding anchor"],
  },
  {
    zone: "Ajmer Road & Bhankrota",
    type: "Farmhouse Wedding Specialist",
    venues: "Sprawling private farmhouse lawns, 1000–1500 guests",
    desc: "Jaipur's elite family wedding belt. Massive crowds, open-air farmhouses, Sangeet nights that need to stay electric until 4 AM. This format is a specialty — the crowds that break average anchors.",
    href: "/sangeet-anchor-jaipur",
    keywords: ["anchor ajmer road jaipur", "farmhouse wedding anchor jaipur"],
  },
  {
    zone: "Jhotwara & Sikar Road",
    type: "Grand Venue Weddings",
    venues: "Large banquet properties, destination farmhouses",
    desc: "Home base territory. Yash knows every vendor, every venue layout, and every traffic pattern in this corridor. Events here are prepared with unmatched local precision.",
    href: "/wedding-anchor-jaipur",
    keywords: ["anchor jhotwara jaipur", "anchor sikar road jaipur"],
  },
  {
    zone: "Mansarovar & Civil Lines",
    type: "Premium Urban Banquets",
    venues: "Clarks Amer · Trident · Premium banquet halls",
    desc: "Jaipur's premium urban banquet corridor. Milestone birthdays, anniversary galas, corporate cocktail evenings, and VIP private events for the city's top families.",
    href: "/anchor-in-jaipur",
    keywords: ["anchor mansarovar jaipur", "event host civil lines jaipur"],
  },
  {
    zone: "Vaishali Nagar & C-Scheme",
    type: "VIP Social & Birthday Events",
    venues: "5-star hotels, premium private venues",
    desc: "Jaipur's urban elite circuit. High-net-worth milestone celebrations, luxury brand events, and intimate VIP socials where understated authority is the standard.",
    href: "/anchor-in-jaipur",
    keywords: ["anchor vaishali nagar jaipur", "anchor c-scheme jaipur"],
  },
  {
    zone: "Sitapura JECC & Tonk Road",
    type: "Corporate & Award Nights",
    venues: "JECC · Birla Auditorium · Corporate campuses",
    desc: "Jaipur's corporate event capital. National brands, government summits, and business galas choose this corridor. Sharp, unscripted, brand-aligned hosting that matches the gravitas of keynote speakers.",
    href: "/corporate-event-anchor-jaipur",
    keywords: ["anchor sitapura jecc", "corporate anchor tonk road jaipur"],
  },
  {
    zone: "JLN Marg & Malviya Nagar",
    type: "5-Star Hotel Events",
    venues: "Marriott · Fairmont · Hyatt Regency",
    desc: "Jaipur's luxury hotel strip. International brand events, CEO dinners, global NRI weddings, and broadcast-quality corporate productions. Yash has hosted all of them here.",
    href: "/corporate-event-anchor-jaipur",
    keywords: ["anchor jln marg jaipur", "anchor malviya nagar jaipur"],
  },
];

const SERVICES = [
  { icon: Heart, title: "Wedding Anchor Jaipur", desc: "Every ceremony format — Varmala, Baraat, Bidaai — with cultural precision.", img: "/service-wedding.webp", href: "/wedding-anchor-jaipur" },
  { icon: Music2, title: "Sangeet Host Jaipur", desc: "Dance floors packed until 4 AM. 500–1,500 guests, unscripted crowd games.", img: "/gallery-1.webp", href: "/sangeet-anchor-jaipur" },
  { icon: Flower2, title: "Haldi Anchor Jaipur", desc: "100% family-friendly games, viral moments, zero boring gaps.", img: "/gallery-2.webp", href: "/haldi-anchor-jaipur" },
  { icon: Sparkles, title: "Mehendi Host Jaipur", desc: "Musical games, couple trivia, crowd engagement throughout.", img: "/gallery-3.webp", href: "/mehendi-anchor-jaipur" },
  { icon: Building2, title: "Corporate Anchor Jaipur", desc: "Award nights, product launches, JECC Sitapura galas.", img: "/service-corporate.webp", href: "/corporate-event-anchor-jaipur" },
  { icon: Star, title: "Birthday Anchor Jaipur", desc: "Milestone birthdays, VIP galas in Mansarovar & Vaishali Nagar.", img: "/gallery-4.webp", href: "/anchor-in-jaipur" },
];

const TESTIMONIALS = [
  {
    name: "Sharma Family",
    quote: "The PA failed mid-Sangeet for 3 minutes. Yash turned it into a crowd call-and-response. 900 people screaming together. He didn't save the night — he made it.",
    event: "Farmhouse Sangeet — Ajmer Road, Jaipur",
    guests: "900 guests",
  },
  {
    name: "Kapoor Family",
    quote: "We flew from Toronto for our daughter's wedding near Amer. Yash handled every international guest and every Rajasthani ritual with complete precision. Extraordinary.",
    event: "Heritage Palace Wedding — Amer Road",
    guests: "NRI family, 600 guests",
  },
  {
    name: "Corporate Events Head",
    quote: "We've tried every anchor in Jaipur for our annual awards. Yash is in a completely different league — zero script, razor wit, presence that impressed our keynote speakers.",
    event: "Annual Gala — JECC Sitapura, Jaipur",
    guests: "1,200 delegates",
  },
];

const NEARBY_CITIES = [
  { city: "Jodhpur", note: "Blue City weddings", href: "/anchor-in-jodhpur" },
  { city: "Udaipur", note: "Lake city destination events", href: "/anchor-in-udaipur" },
  { city: "Jaisalmer", note: "Desert wedding specialist", href: "/anchor-in-jaisalmer" },
  { city: "Ajmer", note: "Corporate & social events", href: "/anchor-in-ajmer" },
  { city: "Pushkar", note: "Destination weddings", href: "/anchor-in-pushkar" },
  { city: "Kota", note: "Corporate galas", href: "/anchor-in-kota" },
];

const FAQS = [
  {
    q: "Who is the best anchor in Jaipur for weddings and corporate events?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 1,100+ events hosted. He is locally based, knows every premium venue in the city, and specialises in luxury weddings, Sangeet nights, corporate award shows, NRI destination weddings, and VIP birthday galas. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top-rated anchor in Jaipur across WedMeGood, WeddingWire, Justdial, and Google.",
  },
  {
    q: "Have you hosted events at our Jaipur wedding venue before?",
    a: "If it is a premium venue in Jaipur, the answer is almost certainly yes. From the grand ballrooms of Fairmont and Marriott to the heritage courtyards of Rambagh Palace, Jai Mahal, and Samode Haveli — from JECC Sitapura to farmhouse venues on Ajmer Road and Bhankrota — every major event zone in Jaipur has been covered.",
  },
  {
    q: "Can we meet in Jaipur to discuss our event?",
    a: "Absolutely. Yash is locally based in Jaipur and happy to meet at any central location — C-Scheme, Vaishali Nagar, or anywhere convenient — to discuss the run-of-show, crowd games, and customise the event plan face-to-face. No Zoom calls required.",
  },
  {
    q: "Do you charge extra travel fees for events in Kukas or Amer?",
    a: "No. All Jaipur zones — Kukas, Amer Road, Ajmer Road, Bhankrota, Jhotwara, Mansarovar, Sitapura — are treated as local. No flight costs, no hotel stays, no travel surcharges for any Jaipur venue. Yash arrives fresh, early, and fully prepared.",
  },
  {
    q: "Do you also host corporate events and award nights in Jaipur?",
    a: "Yes. Corporate events — award nights, product launches, annual galas, and business summits at JECC Sitapura, Tonk Road, Birla Auditorium, and JLN Marg — are a core specialisation. The corporate register is completely different from wedding hosting and both are mastered.",
  },
  {
    q: "Our family loves Marwari culture. Can you host in local languages?",
    a: "Khamma Ghani! As a Jaipur local, Yash switches between fluent Hindi, sophisticated English for international and NRI guests, and warm Marwari-Rajasthani banter that makes the elders feel right at home. Every family's cultural texture is different — he adapts to yours.",
  },
  {
    q: "What is the cost of hiring the best anchor in Jaipur?",
    a: "Pricing reflects premium, unscripted quality and varies based on event type, duration, date, and guest count. For complete transparent pricing, see the Anchor Charges in Jaipur 2026 guide on the blog. For a personalised quote, send a WhatsApp message with your event date, type, and guest count.",
  },
  {
    q: "How far in advance should we book a Jaipur anchor?",
    a: "Jaipur's peak wedding season (October–February) books 6–8 months in advance. No waitlists are maintained and no replacements are sent. Once a date is confirmed, it is exclusively reserved for that event. The moment your venue is locked, reach out via WhatsApp immediately.",
  },
  {
    q: "Can you handle an event with 1000+ guests?",
    a: "Large crowds are a signature strength. Yash has commanded open events of 10,000+ people unscripted. Farmhouse weddings on Ajmer Road with 1,000–1,500 guests are a standard evening. Crowd psychology — reading energy at scale, controlling chaos, and redirecting attention — is the core skill that separates a real anchor from an announcer.",
  },
  {
    q: "Can you host both the Haldi games and the Sangeet night?",
    a: "Highly recommended. When the same anchor hosts the Haldi and the Sangeet, the crowd already knows the energy by evening — the Sangeet starts hot instead of needing to warm up. The momentum compounds across the day.",
  },
  {
    q: "Do you travel outside Rajasthan for destination events?",
    a: "Yes. While Jaipur is the home base, Yash hosts events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and travels pan-India for destination weddings and corporate galas. Travel logistics are structured into the booking terms.",
  },
  {
    q: "What makes Anchor Yash the best anchor in Jaipur over other options?",
    a: "Three things: First, 4.9★ across 200+ verified reviews on Google, WedMeGood, and WeddingWire — earned through 1,100+ events, not one viral moment. Second, completely unscripted — zero paper scripts ever. Third, local Jaipur expertise — he knows every venue, every vendor, every zone in the city and uses that knowledge to anticipate problems before your guests ever notice them.",
  },
];

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────
const RoyalBenefitCard = ({ icon, title, desc }) => (
  <div className="p-7 md:p-10 bg-[#0f080a] rounded-3xl border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-400 group relative overflow-hidden hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    <div className="relative z-10">
      <div className="mb-6 bg-gradient-to-br from-[#D4AF37] to-[#b48f25] w-16 h-16 rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const VenueCard = ({ name, img, span = "", highlight = false }) => (
  <div className={`relative group overflow-hidden rounded-2xl border ${highlight ? "border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)]" : "border-[#D4AF37]/20"} ${span}`}>
    <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-400 m-2 rounded-xl pointer-events-none" />
    <p className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{name}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen ? "border-[#D4AF37] bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base pr-4 leading-snug transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-[#D4AF37] text-black" : "border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function JaipurAnchor() {

  // Schemas injected here (page body, not layout head)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://yashsoni.in/#business",
    name: "Anchor Yash Soni",
    description: "Best anchor in Jaipur. 4.9★, 1100+ events. Weddings, Sangeet, corporate events across all Jaipur zones.",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
    areaServed: { "@type": "City", name: "Jaipur" },
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black relative">
      <style>{style}</style>

      {/* Schemas in body — this is correct for Next.js App Router */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      {/* Subtle bg texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }} />

      {/* ══════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════ */}
      <nav className="pt-24 md:pt-28 pb-0 px-5 md:px-10 max-w-7xl mx-auto relative z-10 sr-only">
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-zinc-400">Anchor in Jaipur</span>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          1. HERO — gold only, no pink
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen pt-16 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30 z-10" />
          <img
            src="/service-corporate.webp"
            className="w-full h-full object-cover slow-zoom"
            alt="Anchor Yash Soni — best anchor in Jaipur hosting a premium event"
          />
        </div>

        <div className="relative z-20 text-center px-5 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {/* Badge — review-based, not "Rated #1" */}
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">
                4.9★ · 200+ Reviews · Local Jaipur Anchor
              </span>
            </div>

            {/* H1 — primary keyword */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
              Jaipur&apos;s <G>Premier</G><br />Wedding &amp; Event<br /><G>Anchor.</G>
            </h1>

            <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-4">
              From palace weddings at Rambagh and Fairmont to farmhouse Sangeets on Ajmer Road and corporate galas at JECC Sitapura — the definitive anchor for Jaipur&apos;s most prestigious events.
            </p>
            <p className="text-zinc-500 text-sm mb-10 tracking-wide">
              Locally based &nbsp;·&nbsp; 1,100+ Jaipur events &nbsp;·&nbsp; Zero travel fees within Jaipur
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-10 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                  Secure Your Date
                </button>
              </a>
              <Link href="/best-anchor-in-jaipur">
                <button className="w-full sm:w-auto px-10 py-5 border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-medium uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">
                  Why I&apos;m Jaipur&apos;s Most Reviewed
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS — no boxes
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-[#D4AF37]/15 relative z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-4">
                  <s.icon size={22} className="mx-auto mb-3 text-[#D4AF37]" />
                  <div className="text-4xl md:text-5xl font-black mb-1"><G>{s.val}</G></div>
                  <div className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. LOCAL ADVANTAGE — original 3 cards
          Fixed: no pink border on hover
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-b border-[#D4AF37]/15 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37]/15">
          <Crown className="w-20 h-20" />
        </div>
        <div className="container mx-auto px-5 md:px-10 relative z-10">
          <SectionHeading subtitle="Why Hire Local" title="The Jaipur Home Court Advantage." align="center" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <RoyalBenefitCard
              icon={<Home className="w-9 h-9" />}
              title="Zero Travel Logistics"
              desc="Locally based in Jaipur — no flight delays, no hotel costs. Yash arrives fresh, two hours early, fully prepared. From Kukas to Bhankrota, it is all local."
            />
            <RoyalBenefitCard
              icon={<Building2 className="w-9 h-9" />}
              title="Luxury Venue Mastery"
              desc="Knows the acoustics of the Rambagh ballroom, the sunset timing at Nahargarh, and every logistical quirk of Jaipur's top venues. Prepared for what other anchors discover on the day."
            />
            <RoyalBenefitCard
              icon={<Users className="w-9 h-9" />}
              title="Cultural Fluency"
              desc="Switches between sophisticated English for international guests, fluent Hindi for the family, and warm Marwari-Rajasthani banter to make every elder feel right at home."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. GALLERY — original grid kept
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 container mx-auto px-5 md:px-10 relative z-10">
        <SectionHeading subtitle="Event Portfolio" title="Unforgettable Moments in The Pink City." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
            <img src="/gallery-1.webp" alt="Anchor Yash Soni hosting Haldi ceremony in Jaipur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
            <img src="/gallery-2.webp" alt="Best anchor in Jaipur crowd interaction at destination wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
            <img src="/gallery-3.webp" alt="Sangeet anchor Jaipur high energy crowd" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
            <img src="/gallery-4.webp" alt="Corporate event anchor Jaipur on stage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
            <img src="/gallery-5.webp" alt="Anchor Yash Soni Varmala ceremony Jaipur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
          {/* Extra image added */}
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
            <img src="/gallery-6.webp" alt="Anchor in Jaipur luxury wedding venue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. SERVICES GRID — NEW with photos
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#D4AF37]/15 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="All Event Formats" title="Anchor in Jaipur for Every Occasion." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <Link href={s.href}>
                  <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden group border border-white/10 hover:border-[#D4AF37]/50 transition-all cursor-pointer">
                    <img src={s.img} alt={`${s.title} — anchor in Jaipur`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] uppercase tracking-widest bg-[#D4AF37] text-black px-2.5 py-1 rounded-full font-bold">Jaipur</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <s.icon size={18} className="text-[#D4AF37] mb-2" />
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">{s.title}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. JAIPUR ZONES — SEO location net
          ALL 8 zones with keywords
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Complete Jaipur Coverage" title="Anchor in Jaipur — Every Zone, Every Venue." align="center" />
          <p className="text-zinc-500 text-sm text-center max-w-2xl mx-auto -mt-8 mb-12 leading-relaxed">
            Jaipur is not one market. It is eight distinct event territories — each with its own crowd character, venue format, and hosting requirement. Yash Soni dominates all of them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {JAIPUR_ZONES.map((z, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={z.href}>
                  <div className="border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-[#0a0a0a] hover:bg-[#111]">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin size={15} className="text-[#D4AF37] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">{z.type}</p>
                        <p className="text-white font-bold text-base group-hover:text-[#D4AF37] transition-colors leading-snug">{z.zone}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-3 ml-6">{z.venues}</p>
                    <p className="text-zinc-600 text-xs leading-relaxed ml-6">{z.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3 ml-6">
                      {z.keywords.map((kw, j) => (
                        <span key={j} className="text-[9px] text-zinc-700 border border-zinc-800 px-2 py-0.5 rounded-full">{kw}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. VENUE SHOWCASE — original kept
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0f0508] border-y border-[#D4AF37]/15 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Trusted By Venues" title="Iconic Jaipur Event Venues." align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 h-[300px] md:h-[500px] mt-10 md:mt-16">
            <VenueCard name="Fairmont Jaipur" img="/gallery-6.webp" span="col-span-2 row-span-2" highlight />
            <VenueCard name="Rambagh Palace" img="/gallery-2.webp" />
            <VenueCard name="JECC Sitapura" img="/gallery-3.webp" />
            <VenueCard name="Le Meridien Kukas" img="/gallery-4.webp" />
            <VenueCard name="City Palace Jaipur" img="/gallery-5.webp" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. TESTIMONIALS — NEW section with photos
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Jaipur Says About Yash." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all bg-[#0a0a0a] hover:bg-[#0f0f0f] group cursor-pointer">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">— {t.name}</p>
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
          9. FAQ — original structure kept
          Questions upgraded for PAA
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-[#D4AF37]/15 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Local Expertise" title="Jaipur Anchor FAQs" align="center" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. NEARBY CITIES — NEW internal links
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">Beyond Jaipur</p>
              <h2 className="text-2xl md:text-3xl font-black">Anchor Across <G>Rajasthan.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {NEARBY_CITIES.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={c.href}>
                  <div className="border border-[#D4AF37]/15 rounded-xl p-4 text-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-[#0a0a0a] hover:bg-[#0f0f0f]">
                    <MapPin size={14} className="text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">{c.city}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5 leading-snug">{c.note}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. CTA — dark version, gold only
          Original was red/dark red bg — replaced
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[20vw] text-white/[0.02] leading-none whitespace-nowrap">JAIPUR</span>
        </div>

        <div className="container mx-auto px-5 md:px-10 relative z-10 text-center max-w-2xl">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-6 font-bold">Book the Best Anchor in Jaipur</p>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-[0.95]">
              Hosting an Event <G>in Jaipur?</G>
            </h2>
            <p className="text-zinc-400 text-base mb-3 leading-relaxed">
              Don&apos;t fly in an outsider. The best anchor in Jaipur is <strong className="text-[#D4AF37]">already here</strong> — locally based, zero travel fees, and booked <strong className="text-[#D4AF37]">6–8 months in advance</strong> for peak season.
            </p>
            <p className="text-zinc-600 text-sm mb-10">No waitlists. No replacements. One anchor, one event, per date.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={18} /> Check Availability
              </button>
            </a>
            <p className="text-zinc-700 text-[10px] uppercase tracking-widest mt-5">
              Best Anchor in Jaipur · <strong className="text-[#D4AF37]">Limited Slots Remaining</strong>
            </p>

            {/* Internal links */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
              <Link href="/sangeet-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Sangeet Host</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
              <Link href="/haldi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Haldi Anchor</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
