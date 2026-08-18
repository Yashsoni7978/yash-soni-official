"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, CalendarCheck, ChevronDown, Heart, Mic2,
  ShieldCheck, Sparkles, Star, Users, MapPin, CheckCircle2,
} from "lucide-react";

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA =
  "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20wedding%20emcee%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const G = ({ children }) => (
  <span
    className="bg-clip-text text-transparent bg-cover bg-center"
    style={{
      backgroundImage: "url('/gold-texture.webp')",
      backgroundColor: "#D4AF37",
    }}
  >
    {children}
  </span>
);

const ScrollReveal = ({
  children,
  delay = 0,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({
  subtitle,
  title,
  align = "left",
}) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <ScrollReveal>
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        {align === "center" && <span className="w-8 h-px bg-[#D4AF37]/50" />}
        <span className="text-[#B5952F] text-[10px] uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </span>
        <span className="w-8 h-px bg-[#D4AF37]/50" />
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
        {title}
      </h2>
    </ScrollReveal>
  </div>
);

const FAQItem = ({
  q,
  a,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all"
      id={id}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm md:text-base group-hover:text-[#B5952F] transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#B5952F] shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 text-sm leading-relaxed px-6 pb-6 font-light">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const EMCEE_FORMATS = [
  {
    icon: Heart,
    title: "Full Ceremony Emcee",
    desc: "From the Baraat entry and Varmala to the Pheras and Bidaai. A single commanding voice guiding every sacred ritual with cultural precision and emotional intelligence.",
  },
  {
    icon: Sparkles,
    title: "Sangeet Emcee",
    desc: "High-energy Sangeet nights with unscripted crowd games, family performance introductions, and dance floors packed until 4 AM. The most-booked format.",
  },
  {
    icon: Users,
    title: "Reception Emcee",
    desc: "Dinner announcements, couple introductions, toast facilitation, cake cutting - handled with sharp wit and the warmth that keeps every table engaged.",
  },
  {
    icon: Mic2,
    title: "Full Wedding Package",
    desc: "A single bilingual emcee across Haldi, Mehendi, Sangeet, Varmala, Pheras, and Reception. One voice, consistent energy, your family knows exactly who to rely on.",
  },
];

const WHY_EMCEE = [
  {
    title: "Controls the Entire Room",
    desc: "A DJ controls music. A family friend controls nothing. A trained wedding emcee controls the energy, the crowd, the timeline, and every moment your guests will remember.",
  },
  {
    title: "Zero Paper Scripts",
    desc: "Every show in 700+ has been hosted live, unscripted, reading the room. No robotic recitation. Every word is earned in the moment for your specific crowd.",
  },
  {
    title: "Crisis-Proof",
    desc: "PA failures, delayed brides, power cuts, last-minute schedule changes. All handled invisible to guests. Your insurance policy against awkward silences.",
  },
  {
    title: "Bilingual by Default",
    desc: "Fluent Hindi for the emotion. Crisp English for the class. Seamless mid-sentence switching for NRI families with international guests. No separate English host required.",
  },
];

const VENUES = [
  { name: "Rambagh Palace", area: "Bhawani Singh Marg", type: "Heritage Palace" },
  { name: "Fairmont Jaipur", area: "Kukas", type: "5-Star Resort" },
  { name: "Dera Amer", area: "Amer Road", type: "Heritage Tented Resort" },
  { name: "Chomu Palace", area: "Chomu", type: "Royal Palace" },
  { name: "Samode Palace", area: "Samode Village", type: "Heritage Palace" },
  { name: "Farmhouse Sangeets", area: "Ajmer Road and Bhankrota", type: "Open Farmhouses" },
  { name: "ITC Rajputana", area: "Collectorate Circle", type: "5-Star Hotel" },
  { name: "Marriott Jaipur", area: "Ashram Marg", type: "5-Star Hotel" },
];

const FAQS = [
  {
    q: "What exactly does a wedding emcee do?",
    a: "A wedding emcee (also called anchor, MC, or Master of Ceremonies) is the single commanding voice who runs your entire wedding. They introduce rituals and ceremonies, manage family and couple entries, facilitate crowd participation, handle announcements, keep the event on time, and fill any gaps with engaging crowd interactions. In short: the emcee is who your guests follow throughout the event.",
  },
  {
    q: "Is there a difference between a wedding anchor and a wedding emcee in India?",
    a: "No meaningful difference in practice. In India, 'anchor' is the most common term, while 'emcee' (MC, Master of Ceremonies) is the internationally recognised equivalent. Many families searching for a 'wedding emcee Jaipur' are looking for exactly the same service. Yash Soni is both: a trained stage anchor and a professional emcee with 4.9 star ratings across 50+ verified reviews.",
  },
  {
    q: "Can you emcee in both Hindi and English for our wedding?",
    a: "Yes, bilingual emceeing is the default. Hindi for the cultural warmth and family connection, English for the class and international guests. Yash Soni switches mid-sentence without breaking the room's energy, making him the first choice for NRI couples, destination weddings, and families with guests from the UK, USA, Canada, and the Gulf.",
  },
  {
    q: "Do you emcee only in Jaipur or across Rajasthan?",
    a: "Jaipur is the base, but destination weddings across Rajasthan and India are a regular part of the calendar. Udaipur lake palace weddings, Jodhpur fortress ceremonies, Jaisalmer desert experiences, Pushkar resort events. Travel and accommodation logistics are discussed transparently during the first booking call.",
  },
  {
    q: "How far in advance should we book a wedding emcee in Jaipur?",
    a: "Jaipur's peak wedding season (October to February) books 6 to 8 months in advance. One event per date, no waitlist, no replacements sent. The moment your venue is confirmed, WhatsApp directly to check availability: +91 77378 77978.",
  },
  {
    q: "What happens if something goes wrong during the wedding?",
    a: "In 700+ shows, guests have never known when something went wrong. PA failures, delayed brides, audio crashes, last-minute schedule changes - all handled invisible to the room. Crisis management under pressure is not an afterthought. It is the core skill.",
  },
  {
    q: "What is your fee as a wedding emcee in Jaipur?",
    a: "Fees depend on event format, duration, number of ceremonies, venue, and date. WhatsApp for a direct, transparent quote within the hour. There are no hidden charges and no markup on vendor costs.",
  },
];

const ANCHOR_VS_EMCEE = [
  { term: "Anchor (India)", usage: "Most common term in Indian weddings and events", same: true },
  { term: "Emcee / MC (International)", usage: "Globally recognised term, preferred by NRI families", same: true },
  { term: "Master of Ceremonies", usage: "Formal contexts, corporate events, televised weddings", same: true },
  { term: "Host", usage: "Informal usage, same role", same: true },
  { term: "DJ / Sound Operator", usage: "Controls music only, not the crowd or ceremony", same: false },
  { term: "Event Coordinator", usage: "Behind-the-scenes logistics, not on stage", same: false },
];

// ─────────────────────────────────────────────
// SCHEMA (inline, page-specific)
// ─────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Wedding Emcee Jaipur", item: "https://yashsoni.in/wedding-emcee-jaipur" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Emcee",
  name: "Wedding Emcee Jaipur",
  description: "Professional bilingual wedding emcee and anchor in Jaipur. Yash Soni has hosted 700+ shows across Rajasthan. Specialist in luxury palace weddings, NRI destination weddings, and high-energy Sangeet nights.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    alternateName: "Anchor Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
    sameAs: [
      "https://www.instagram.com/anchor_yash_official",
      "https://www.wedmegood.com/profile/anchor-yash-25628297",
      "https://www.google.com/search?kgmid=/g/11w1fnfjrs",
    ],
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
  ],
  knowsAbout: ["Wedding Emcee", "Master of Ceremonies", "Bilingual Hosting", "Sangeet Emcee", "Wedding Anchor"],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: "Jaipur, Rajasthan, India",
  },
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function WeddingEmceeJaipur() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black">

        {/* ──────────────────────────────────────────
            1. HERO
        ────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-slide-1.webp"
              alt="Wedding emcee Yash Soni hosting a luxury Jaipur wedding ceremony"
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
          </div>

          <div className="relative z-20 text-center px-5 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-5 py-2 rounded-full backdrop-blur-md mb-8">
                <Star className="w-3 h-3 text-[#B5952F] fill-[#D4AF37]" />
                <span className="text-[#B5952F] text-[10px] uppercase tracking-widest font-bold">
                  4.9&#9733; - Best Wedding Emcee in Jaipur
                </span>
              </div>

              {/* H1 - primary keyword in heading */}
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
                Your Wedding. <br />
                <G>Your Emcee.</G>
              </h1>

              {/* Subhead */}
              <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-4">
                Jaipur's most reviewed wedding emcee and anchor. Palace ceremonies in Kukas, Sangeet nights on Ajmer Road, NRI destination weddings across Rajasthan.
              </p>
              <p className="text-zinc-500 text-sm mb-10 tracking-wide">
                700+ shows &nbsp;&#183;&nbsp; Bilingual Hindi/English &nbsp;&#183;&nbsp; 100% Unscripted &nbsp;&#183;&nbsp; NRI specialist
              </p>

              <Link href={WA} target="_blank" rel="noopener noreferrer" aria-label="Book the best wedding emcee in Jaipur">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] active:scale-95">
                  Check Emcee Availability <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            2. ANCHOR VS EMCEE DISAMBIGUATION
            (The key content gap vs. directory sites)
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 container mx-auto px-5 md:px-10 max-w-5xl">
          <SectionHeading
            subtitle="Understanding the Terms"
            title={<>Anchor, Emcee, MC. <G>Same Person.</G></>}
            align="center"
          />
          <ScrollReveal>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
              In India, "anchor" is the everyday term. Internationally, "emcee" (MC, Master of Ceremonies) is standard. 
              When you search "wedding emcee Jaipur," you are looking for exactly the same professional as "wedding anchor Jaipur." 
              The role is identical: one bilingual voice running your entire wedding, from Baraat to Bidaai.
            </p>
          </ScrollReveal>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#111] border-b border-white/10">
                  <th className="px-6 py-4 text-[#B5952F] font-bold uppercase tracking-widest text-xs">Term</th>
                  <th className="px-6 py-4 text-[#B5952F] font-bold uppercase tracking-widest text-xs">Common Usage</th>
                  <th className="px-6 py-4 text-[#B5952F] font-bold uppercase tracking-widest text-xs">Yash Does This</th>
                </tr>
              </thead>
              <tbody>
                {ANCHOR_VS_EMCEE.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#080808]"}`}
                  >
                    <td className="px-6 py-4 text-white font-semibold">{row.term}</td>
                    <td className="px-6 py-4 text-zinc-400 font-light">{row.usage}</td>
                    <td className="px-6 py-4">
                      {row.same ? (
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      ) : (
                        <span className="text-zinc-600 text-xs">Different role</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            3. WHY A PROFESSIONAL EMCEE
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#080808] border-t border-white/5">
          <div className="container mx-auto px-5 md:px-10">
            <SectionHeading
              subtitle="The Case for a Professional"
              title={<>Why Your Wedding Needs <G>A Real Emcee.</G></>}
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {WHY_EMCEE.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all bg-[#0a0a0a] hover:bg-[#111] h-full">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            4. EMCEE FORMATS
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 container mx-auto px-5 md:px-10">
          <SectionHeading
            subtitle="Emcee Services"
            title={<>Every Wedding Format. <G>Mastered.</G></>}
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {EMCEE_FORMATS.map((format, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all h-full">
                  <format.icon className="w-10 h-10 text-[#B5952F] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{format.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{format.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────
            5. JAIPUR VENUES
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#080808] border-t border-white/5">
          <div className="container mx-auto px-5 md:px-10">
            <SectionHeading
              subtitle="Venue Expertise"
              title={<>Wedding Emcee Across <G>Jaipur's Top Venues.</G></>}
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {VENUES.map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="border border-white/10 rounded-2xl p-5 hover:border-[#D4AF37]/40 transition-all bg-[#0a0a0a] hover:bg-[#111] group">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin size={14} className="text-[#B5952F] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white font-bold text-sm group-hover:text-[#B5952F] transition-colors">{v.name}</p>
                        <p className="text-[#B5952F] text-[10px] uppercase tracking-widest font-bold mt-0.5">{v.type}</p>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs ml-5 leading-relaxed">{v.area}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            6. EMCEE CREDENTIALS
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 container mx-auto px-5 md:px-10 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
                <Image
                  src="/service-wedding.webp"
                  fill
                  className="object-cover"
                  alt="Emcee Yash Soni on stage at a luxury Jaipur wedding ceremony"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[#B5952F] text-[10px] uppercase tracking-widest font-bold mb-0.5">4.9&#9733; Wedding Emcee</p>
                  <p className="text-white text-xs">700+ shows - Jaipur and Rajasthan</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#B5952F] text-[10px] uppercase tracking-widest font-bold mb-4">About the Emcee</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Jaipur's Most Reviewed <G>Wedding Emcee.</G>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-6 border-l-4 border-[#D4AF37] pl-6 font-medium">
                A wedding emcee's job is not to announce. It is to feel the room, own the energy, and make every ritual feel like it was written for this exact family, on this exact night.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "700+ shows hosted, zero paper scripts used",
                  "Bilingual Hindi/English - NRI families' first choice",
                  "4.9 star rating across 200+ verified reviews",
                  "Specialist in palace, farmhouse, and destination weddings",
                  "Crisis-proof: PA failures, delays, overruns all invisible to guests",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-zinc-300 text-sm font-light">{point}</p>
                  </div>
                ))}
              </div>
              <Link href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95">
                  Book Your Wedding Emcee <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            7. FAQ
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#080808] border-t border-white/5">
          <div className="container mx-auto px-5 md:px-10 max-w-4xl">
            <SectionHeading
              subtitle="Wedding Emcee FAQs"
              title={<>Everything You Need <G>To Know.</G></>}
              align="center"
            />
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} id={`faq-emcee-${i}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            8. CTA
        ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-black text-[20vw] text-white/[0.02] leading-none whitespace-nowrap">EMCEE</span>
          </div>
          <div className="container mx-auto px-5 md:px-10 text-center relative z-10 max-w-2xl">
            <ScrollReveal>
              <p className="text-[#B5952F] text-[10px] uppercase tracking-widest mb-6 font-bold">The Final Word</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[0.95] uppercase">
                Your Wedding Needs <G>A Voice.</G>
              </h2>
              <p className="text-zinc-400 text-base mb-3 leading-relaxed max-w-lg mx-auto">
                Jaipur's most reviewed wedding emcee books{" "}
                <strong className="text-[#B5952F]">6-8 months in advance.</strong>
              </p>
              <p className="text-zinc-600 text-sm mb-10">One wedding per date. No replacements sent. No waitlist.</p>
              <Link href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                  <CalendarCheck size={18} /> Check Availability Now
                </button>
              </Link>
              <p className="text-zinc-700 text-[10px] uppercase tracking-widest mt-5">
                Best Wedding Emcee in Jaipur - <strong className="text-[#B5952F]">Limited Dates Remaining</strong>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────
            9. RELATED PAGES
        ────────────────────────────────────────── */}
        <section className="py-16 border-t border-white/5 bg-[#050505]">
          <div className="container mx-auto px-5 md:px-10 max-w-3xl text-center">
            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6">Also serving as</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Wedding Anchor Jaipur", href: "/wedding-anchor-jaipur" },
                { label: "Sangeet Emcee Jaipur", href: "/sangeet-anchor-jaipur" },
                { label: "Corporate Emcee Jaipur", href: "/corporate-event-anchor-jaipur" },
                { label: "Destination Wedding Anchor", href: "/destination-wedding-anchor" },
                { label: "Best Anchor in Jaipur", href: "/best-anchor-in-jaipur" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-zinc-400 hover:text-[#D4AF37] text-xs border border-white/10 hover:border-[#D4AF37]/40 px-4 py-2 rounded-full transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
