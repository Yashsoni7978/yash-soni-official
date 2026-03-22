"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Users, Minus, Plus, Gem,
  ShieldCheck, ArrowRight, Heart, Music,
  Flower2, Utensils, CalendarCheck,
  Building2, Globe, ChevronRight, Crown, Sparkles
} from "lucide-react";

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20interested%20in%20luxury%20wedding%20planning%20in%20Jaipur.%20I%27d%20like%20to%20schedule%20a%20consultation.";
const GOLD = "#D4AF37";
const GOLD_DARK = "#b8941e";
const IVORY = "#faf8f4";
const IVORY_2 = "#f0ebe0";
const INK = "#2a2218";
const INK_LIGHT = "#8a7d6a";
const DARK_BG = "#1a1508";
const DARK_BG_2 = "#2a2218";

// ─────────────────────────────────────────────
// GLOBAL STYLES — injected once
// ─────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500&display=swap');

  .font-cormorant { font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif !important; }
  .font-montserrat { font-family: 'Montserrat', sans-serif !important; }

  @keyframes shimmer-gold {
    0%   { background-position: 0%   50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0%   50%; }
  }
  .gold-shimmer {
    background: linear-gradient(135deg, #D4AF37 0%, #f0d080 50%, #D4AF37 100%);
    background-size: 200% auto;
    animation: shimmer-gold 4s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* thin gold line for section dividers */
  .gold-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 18px;
  }
  .gold-divider::before,
  .gold-divider::after {
    content: '';
    flex: 0 0 28px;
    height: 0.5px;
    background: #D4AF37;
  }
  .gold-divider span {
    font-family: 'Montserrat', sans-serif;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  /* service card hover line at top */
  .service-card-wp::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    opacity: 0;
    transition: opacity 0.35s;
  }
  .service-card-wp:hover::before { opacity: 1; }

  /* gallery hover */
  .gallery-cell img { transition: transform 0.6s ease, filter 0.4s; }
  .gallery-cell:hover img { transform: scale(1.05); filter: grayscale(0%) !important; }

  /* testimonial card */
  .test-card {
    border: 0.5px solid rgba(212,175,55,0.18);
    transition: border-color 0.3s;
  }
  .test-card:hover { border-color: rgba(212,175,55,0.5); }

  /* blog card line at bottom */
  .blog-card-wp {
    border: 0.5px solid #e8e0d0;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .blog-card-wp:hover {
    border-color: #D4AF37;
    box-shadow: 0 4px 24px rgba(212,175,55,0.08);
  }
`;

// ─────────────────────────────────────────────
// FLORAL SVG COMPONENTS
// ─────────────────────────────────────────────

// Hero corner flower — large, right side
const FloralHeroRight = () => (
  <svg
    viewBox="0 0 420 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-0 top-0 h-full w-auto pointer-events-none"
    style={{ opacity: 0.14 }}
  >
    {/* Main large bloom */}
    <circle cx="310" cy="160" r="110" stroke="#D4AF37" strokeWidth="0.5"/>
    <circle cx="310" cy="160" r="80"  stroke="#D4AF37" strokeWidth="0.5"/>
    <circle cx="310" cy="160" r="50"  stroke="#D4AF37" strokeWidth="0.5"/>
    <ellipse cx="310" cy="57"  rx="16" ry="42" fill="#D4AF37" opacity="0.35"/>
    <ellipse cx="310" cy="263" rx="16" ry="42" fill="#D4AF37" opacity="0.35"/>
    <ellipse cx="207" cy="160" rx="42" ry="16" fill="#D4AF37" opacity="0.35"/>
    <ellipse cx="413" cy="160" rx="42" ry="16" fill="#D4AF37" opacity="0.35"/>
    <ellipse cx="236" cy="87"  rx="16" ry="42" transform="rotate(-45 236 87)"  fill="#D4AF37" opacity="0.2"/>
    <ellipse cx="384" cy="87"  rx="16" ry="42" transform="rotate(45 384 87)"   fill="#D4AF37" opacity="0.2"/>
    <ellipse cx="236" cy="233" rx="16" ry="42" transform="rotate(45 236 233)"  fill="#D4AF37" opacity="0.2"/>
    <ellipse cx="384" cy="233" rx="16" ry="42" transform="rotate(-45 384 233)" fill="#D4AF37" opacity="0.2"/>
    <circle  cx="310" cy="160" r="18" fill="#D4AF37" opacity="0.6"/>
    <circle  cx="310" cy="160" r="9"  fill="#D4AF37" opacity="0.9"/>
    {/* Vine */}
    <path d="M310 270 Q260 360 170 400" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4"/>
    <path d="M265 310 Q240 295 250 275" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" fill="none"/>
    <path d="M265 310 Q245 325 250 275" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" fill="none"/>
    {/* Second smaller bloom */}
    <circle cx="160" cy="420" r="65"  stroke="#D4AF37" strokeWidth="0.5" opacity="0.7"/>
    <ellipse cx="160" cy="360" rx="9"  ry="24" fill="#D4AF37" opacity="0.25"/>
    <ellipse cx="160" cy="480" rx="9"  ry="24" fill="#D4AF37" opacity="0.25"/>
    <ellipse cx="100" cy="420" rx="24" ry="9"  fill="#D4AF37" opacity="0.25"/>
    <ellipse cx="220" cy="420" rx="24" ry="9"  fill="#D4AF37" opacity="0.25"/>
    <ellipse cx="118" cy="378" rx="9"  ry="24" transform="rotate(-45 118 378)" fill="#D4AF37" opacity="0.18"/>
    <ellipse cx="202" cy="378" rx="9"  ry="24" transform="rotate(45 202 378)"  fill="#D4AF37" opacity="0.18"/>
    <ellipse cx="118" cy="462" rx="9"  ry="24" transform="rotate(45 118 462)"  fill="#D4AF37" opacity="0.18"/>
    <ellipse cx="202" cy="462" rx="9"  ry="24" transform="rotate(-45 202 462)" fill="#D4AF37" opacity="0.18"/>
    <circle  cx="160" cy="420" r="10" fill="#D4AF37" opacity="0.5"/>
    {/* Tiny accent */}
    <circle cx="370" cy="480" r="30"  stroke="#D4AF37" strokeWidth="0.5" opacity="0.4"/>
    <ellipse cx="370" cy="453" rx="5"  ry="15" fill="#D4AF37" opacity="0.2"/>
    <ellipse cx="370" cy="507" rx="5"  ry="15" fill="#D4AF37" opacity="0.2"/>
    <ellipse cx="343" cy="480" rx="15" ry="5"  fill="#D4AF37" opacity="0.2"/>
    <ellipse cx="397" cy="480" rx="15" ry="5"  fill="#D4AF37" opacity="0.2"/>
    <circle  cx="370" cy="480" r="6"  fill="#D4AF37" opacity="0.35"/>
  </svg>
);

// Section divider — small delicate flower row
const FloralDivider = ({ light = false }) => (
  <div className="flex items-center justify-center gap-5 py-10 md:py-16">
    <div style={{ flex: 1, height: "0.5px", background: light ? "rgba(212,175,55,0.25)" : "rgba(212,175,55,0.15)" }} />
    <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 32, flexShrink: 0 }}>
      {/* left petal cluster */}
      <circle cx="20" cy="16" r="12" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6"/>
      <ellipse cx="20" cy="6"  rx="4" ry="8"  fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="20" cy="26" rx="4" ry="8"  fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="10" cy="16" rx="8" ry="4"  fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="30" cy="16" rx="8" ry="4"  fill="#D4AF37" opacity="0.3"/>
      <circle  cx="20" cy="16" r="3"  fill="#D4AF37" opacity="0.6"/>
      {/* center diamond */}
      <path d="M60 8 L65 16 L60 24 L55 16 Z" stroke="#D4AF37" strokeWidth="0.5" fill="#D4AF37" opacity="0.2"/>
      <circle cx="60" cy="16" r="2" fill="#D4AF37" opacity="0.7"/>
      {/* right petal cluster */}
      <circle cx="100" cy="16" r="12" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6"/>
      <ellipse cx="100" cy="6"  rx="4" ry="8"  fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="100" cy="26" rx="4" ry="8"  fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="90"  cy="16" rx="8" ry="4"  fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="110" cy="16" rx="8" ry="4"  fill="#D4AF37" opacity="0.3"/>
      <circle  cx="100" cy="16" r="3"  fill="#D4AF37" opacity="0.6"/>
    </svg>
    <div style={{ flex: 1, height: "0.5px", background: light ? "rgba(212,175,55,0.25)" : "rgba(212,175,55,0.15)" }} />
  </div>
);

// Gallery floral placeholder — shown when image missing
const FloralPlaceholder = ({ dark = false, size = "sm" }) => {
  const bg = dark ? "#2a2218" : IVORY_2;
  const h = size === "tall" ? "100%" : "100%";
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: h }}>
      <rect width="300" height="300" fill={bg}/>
      <circle cx="150" cy="140" r="70"  stroke="#D4AF37" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="150" cy="140" r="48"  stroke="#D4AF37" strokeWidth="0.5" opacity="0.3"/>
      <ellipse cx="150" cy="78"  rx="10" ry="28" fill="#D4AF37" opacity="0.25"/>
      <ellipse cx="150" cy="202" rx="10" ry="28" fill="#D4AF37" opacity="0.25"/>
      <ellipse cx="88"  cy="140" rx="28" ry="10" fill="#D4AF37" opacity="0.25"/>
      <ellipse cx="212" cy="140" rx="28" ry="10" fill="#D4AF37" opacity="0.25"/>
      <ellipse cx="105" cy="95"  rx="10" ry="28" transform="rotate(-45 105 95)"  fill="#D4AF37" opacity="0.16"/>
      <ellipse cx="195" cy="95"  rx="10" ry="28" transform="rotate(45 195 95)"   fill="#D4AF37" opacity="0.16"/>
      <ellipse cx="105" cy="185" rx="10" ry="28" transform="rotate(45 105 185)"  fill="#D4AF37" opacity="0.16"/>
      <ellipse cx="195" cy="185" rx="10" ry="28" transform="rotate(-45 195 185)" fill="#D4AF37" opacity="0.16"/>
      <circle  cx="150" cy="140" r="13" fill="#D4AF37" opacity="0.4"/>
      <circle  cx="150" cy="140" r="6"  fill="#D4AF37" opacity="0.7"/>
    </svg>
  );
};

// CTA background bloom
const FloralCTABg = () => (
  <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }}>
    <circle cx="400" cy="200" r="180" stroke="#D4AF37" strokeWidth="0.5"/>
    <circle cx="400" cy="200" r="130" stroke="#D4AF37" strokeWidth="0.5"/>
    <circle cx="400" cy="200" r="80"  stroke="#D4AF37" strokeWidth="0.5"/>
    <ellipse cx="400" cy="28"  rx="20" ry="56" fill="#D4AF37"/>
    <ellipse cx="400" cy="372" rx="20" ry="56" fill="#D4AF37"/>
    <ellipse cx="228" cy="200" rx="56" ry="20" fill="#D4AF37"/>
    <ellipse cx="572" cy="200" rx="56" ry="20" fill="#D4AF37"/>
    <ellipse cx="279" cy="79"  rx="20" ry="56" transform="rotate(-45 279 79)"  fill="#D4AF37"/>
    <ellipse cx="521" cy="79"  rx="20" ry="56" transform="rotate(45 521 79)"   fill="#D4AF37"/>
    <ellipse cx="279" cy="321" rx="20" ry="56" transform="rotate(45 279 321)"  fill="#D4AF37"/>
    <ellipse cx="521" cy="321" rx="20" ry="56" transform="rotate(-45 521 321)" fill="#D4AF37"/>
    <circle  cx="400" cy="200" r="28" fill="#D4AF37"/>
    <circle  cx="400" cy="200" r="14" fill="#D4AF37"/>
  </svg>
);

// ─────────────────────────────────────────────
// REUSABLE HEADING — Cormorant Garamond
// ─────────────────────────────────────────────
const Heading = ({ label, title, align = "left", light = false }) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className={`gold-divider ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span>{label}</span>
      </div>
      <h2
        className="font-cormorant font-light leading-tight"
        style={{ fontSize: "clamp(36px, 5vw, 58px)", color: light ? IVORY : INK }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </motion.div>
  </div>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ borderColor: isOpen ? "rgba(212,175,55,0.5)" : "rgba(212,175,55,0.12)", background: isOpen ? "rgba(212,175,55,0.03)" : "transparent" }}
      className="rounded-2xl border transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 px-6 py-5 text-left focus:outline-none"
      >
        <span className="font-cormorant text-base md:text-lg leading-snug pr-2 transition-colors"
          style={{ color: isOpen ? GOLD_DARK : INK, fontWeight: 400 }}>
          {question}
        </span>
        <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full mt-0.5 transition-all"
          style={{ background: isOpen ? GOLD : "transparent", border: `0.5px solid ${isOpen ? GOLD : "rgba(212,175,55,0.4)"}` }}>
          {isOpen
            ? <Minus size={13} color={INK} />
            : <Plus size={13} color={GOLD_DARK} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden">
            <div className="px-6 pb-5 text-sm leading-relaxed font-montserrat"
              style={{ color: INK_LIGHT, borderTop: "0.5px solid rgba(212,175,55,0.15)", paddingTop: "16px" }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const SERVICES = [
  { num: "01", title: "Full Wedding Planning", sub: "Bride & Groom Experience", desc: "End-to-end management from first concept call to the final farewell. Venue, vendors, timelines, VIP hospitality — every element architected with precision.", tags: ["Venue Procurement", "Vendor Management", "Full Execution"], link: "/contact" },
  { num: "02", title: "Sangeet & Pre-Wedding", sub: "Mehndi, Sangeet & Haldi", desc: "The pre-wedding ceremonies that define the emotional arc of your wedding week. Sangeet at Rambagh, Mehndi at Fairmont, Haldi on palace lawns — each a separate production.", tags: ["Sangeet Production", "Mehndi Setup", "Haldi Coordination"], link: "/sangeet-anchor-jaipur" },
  { num: "03", title: "Palace & Heritage Venues", sub: "Fairmont · Rambagh · Leela", desc: "Deep relationships with Jaipur's most sought-after properties. Premium inventory access, negotiated insider rates, and full navigation of strict operational protocols.", tags: ["Fairmont Jaipur", "Rambagh Palace", "Leela Palace"], link: "/destination-wedding-anchor" },
  { num: "04", title: "Bridal Décor Curation", sub: "3D Design to Execution", desc: "3D spatial design approval before a single flower is placed. Elite decorators briefed and supervised to ensure the physical build matches the aesthetic vision flawlessly.", tags: ["3D Design", "Floral Mandap", "Stage Architecture"], link: "/event-designing" },
  { num: "05", title: "Destination Weddings", sub: "Rajasthan & International", desc: "Udaipur, Jodhpur, Jaisalmer, Goa, and beyond. The same logistical precision travels. NRI families and international guests handled seamlessly.", tags: ["Udaipur", "Jodhpur", "NRI Weddings"], link: "/destination-wedding-anchor" },
  { num: "06", title: "F&B & Guest Hospitality", sub: "VIP Fleet & Welcome Hampers", desc: "Global menus with master chefs, elite bar setups, airport concierge, luxury fleet routing, and bespoke welcome hampers for international guests.", tags: ["Cuisine Curation", "VIP Transfers", "Guest Management"], link: "/contact" },
];

const GALLERY = [
  { src: "/white-flower-mandap-jaipur.webp", alt: "White floral mandap luxury wedding Jaipur", label: "Mandap Architecture", tall: true },
  { src: "/indian-bride-solo-decor.webp",      alt: "Indian bride wedding decor Jaipur",          label: "Bridal Moments" },
  { src: "/bride-groom-flower-petals.webp",    alt: "Bride groom flower petals varmala",          label: "Varmala" },
  { src: "/rose-petal-tree-background.webp",   alt: "Rose petal floral tree wedding decor",       label: "Floral Design", wide: true },
  { src: "/haldi-bride-groom-family.webp",     alt: "Haldi ceremony bride groom family",          label: "Haldi Ceremony" },
  { src: "/vintage-car-couple-shoot.webp",     alt: "Vintage car couple shoot wedding Jaipur",    label: "Couple Shoot" },
];

const TESTIMONIALS = [
  { name: "Singhania Family", quote: "The Fairmont Jaipur execution was flawless. Our family experienced the wedding as guests — not coordinators. Every detail was handled invisibly.", event: "Palace Wedding · Fairmont Jaipur", guests: "400 guests, 3 days" },
  { name: "Kapoor Family — Toronto", quote: "Planning from Canada felt impossible until we found the right ground team. Airport logistics, 80 international guests, welcome hampers — zero gaps.", event: "Destination Wedding · Rambagh Palace", guests: "NRI family, 300 guests" },
  { name: "Mehta Family", quote: "The 3D design approval meant we knew exactly what the venue would look like before landing in Jaipur. Zero surprises — only upgrades on what we imagined.", event: "Heritage Wedding · Amer Road, Jaipur", guests: "250 guests" },
];

const BLOG_CARDS = [
  { img: "/haldi-bride-groom-family.webp", alt: "Haldi ceremony Jaipur guide", tag: "Haldi Guide",   title: "Haldi Ceremony in Jaipur: Traditions, Ideas & Planning 2026",    href: "/blog/haldi-ceremony-planning-guide-jaipur" },
  { img: "/sangeet-red-glitter-stage.webp",alt: "Sangeet planning Jaipur 2026", tag: "Sangeet Guide", title: "Sangeet Ceremony Planning in Jaipur: Complete 2026 Guide",         href: "/blog/sangeet-ceremony-planning-guide-jaipur" },
  { img: "/indian-bride-solo-decor.webp",  alt: "Mehendi planning Jaipur",      tag: "Mehndi Guide",  title: "Mehendi Ceremony Planning in Jaipur: Ideas, Games & Tips",         href: "/blog/mehendi-ceremony-planning-jaipur" },
  { img: "/white-flower-mandap-jaipur.webp",alt:"Jaipur wedding budget 2026",   tag: "Budget Guide",  title: "Jaipur Wedding Costs 2026: Complete Budget Breakdown",             href: "/blog/jaipur-wedding-costs-budget-breakdown-2026" },
  { img: "/jal-mahal-jaipur-artist.webp",  alt: "Udaipur vs Jaipur wedding",    tag: "Destination",   title: "Udaipur vs Jaipur for Weddings: Which City in 2026?",              href: "/blog/udaipur-vs-jaipur-for-weddings-2026" },
  { img: "/bride-groom-white-decor.webp",  alt: "Anchor charges Jaipur 2026",   tag: "Pricing",       title: "Anchor Charges in Jaipur 2026: Complete Pricing Guide",            href: "/blog/anchor-charges-jaipur-2026" },
];

const PROCESS = [
  { num: "01", title: "Concept & Vision",            desc: "Vision boarding, mood curation, and strict budget engineering. Your entire wedding week mapped from first enquiry to final farewell." },
  { num: "02", title: "Venue & Vendor Procurement",  desc: "Exclusive access to Jaipur's palace properties. Direct negotiations with Fairmont, Rambagh, Leela at insider rates — no middlemen." },
  { num: "03", title: "Design & Architecture",        desc: "3D spatial design approval before a single element is placed. Elite decorators briefed and supervised to match the vision exactly." },
  { num: "04", title: "Logistics & Hospitality",     desc: "Minute-by-minute timeline, VIP fleet routing, F&B tasting, international guest management, and welcome hamper curation." },
  { num: "05", title: "Flawless Execution",           desc: "Shadow team deployment across all events. Discreet crisis management. Your family stays as guests — not coordinators." },
];

const FAQS = [
  { q: "What does a luxury wedding planner in Jaipur do that a decorator doesn't?", a: "Decorators make it beautiful. A wedding planner makes it flawless. We act as Executive Producers — managing venue procurement, vendor contracts, VIP hospitality, timeline, and day-of execution. Decorators work for us, not alongside us." },
  { q: "Which palace venues in Jaipur do you work with?", a: "Fairmont Jaipur, Rambagh Palace, Leela Palace, Samode Palace, and the major heritage havelis on Amer Road and in Kukas. Each property has its own protocols, catering minimums, and vendor approval requirements — all navigated from prior experience with each property." },
  { q: "How is the wedding budget managed transparently?", a: "Fixed management fee model. You pay vendors directly at our negotiated insider rates — caterers, decorators, artists, photographers. Zero hidden percentages on invoices, zero commissions. Every rupee documented and reported." },
  { q: "Do you plan destination weddings outside Jaipur?", a: "Yes. Full destination management across Rajasthan — Udaipur (Taj Lake Palace, Oberoi Udaivilas, Leela), Jodhpur (Umaid Bhawan), Jaisalmer (Suryagarh), Pushkar. And internationally for NRI families in Dubai, Thailand, and Southeast Asia." },
  { q: "How do you protect the bride and groom experience on the wedding day?", a: "Shadow team deployment means a dedicated coordinator is assigned to the bride, one to the groom, and one to each set of parents. Every logistical issue is resolved before it reaches the couple. Your wedding day is experienced — not managed — by the bride and groom." },
  { q: "What is included in the full wedding planning package?", a: "Concept and vision, venue procurement and contract negotiation, complete vendor onboarding, 3D spatial design approval, F&B tasting, minute-by-minute timeline, VIP fleet routing, shadow team deployment across all events, and discreet day-of crisis management." },
  { q: "Do you also provide the wedding anchor and host?", a: "Yes. Anchor Yash Soni personally hosts the wedding ceremonies — Varmala, Baraat, Bidaai — as well as the Sangeet, Haldi, and Mehndi. Having the planner and anchor as one entity means zero coordination gaps between the production team and the stage." },
  { q: "When should we book a luxury wedding planner in Jaipur?", a: "For palace properties and peak season (October–February), 8–12 months in advance. Fairmont and Rambagh Palace premium inventory blocks early — the best vendor slots follow. Once confirmed, intensive planning runs for 6–8 months before the wedding week." },
  { q: "How do you manage NRI and international guests?", a: "A dedicated hospitality desk handles airport concierge, luxury fleet coordination, room allocation management, bespoke welcome hampers, dietary requirements, and 24/7 guest support. UK, USA, Canada, and Gulf families are a core clientele." },
  { q: "What wedding ceremonies do you plan and manage?", a: "The complete wedding week — Welcome Sundowner, Mehndi ceremony, Haldi function, Sangeet gala, Wedding ceremony (Varmala, pheras, bidaai), and Reception. Each ceremony has its own design brief, timeline, and dedicated vendor team." },
];

const RELATED = [
  { icon: Heart,     label: "Wedding Anchor",    href: "/wedding-anchor-jaipur",         desc: "Varmala, Baraat, Bidaai" },
  { icon: Music,     label: "Sangeet Host",      href: "/sangeet-anchor-jaipur",         desc: "High-energy Sangeet" },
  { icon: Flower2,   label: "Mehndi Anchor",     href: "/mehendi-anchor-jaipur",         desc: "Ladies Sangeet" },
  { icon: Sparkles,  label: "Haldi Anchor",      href: "/haldi-anchor-jaipur",           desc: "Ceremony games" },
  { icon: Globe,     label: "Destination",       href: "/destination-wedding-anchor",    desc: "Udaipur, Jodhpur, Goa" },
  { icon: Gem,       label: "Event Designing",   href: "/event-designing",               desc: "3D & decor" },
  { icon: Building2, label: "Corporate Events",  href: "/corporate-event-anchor-jaipur", desc: "Award nights" },
  { icon: Crown,     label: "Best Anchor Jaipur",href: "/best-anchor-in-jaipur",         desc: "All formats" },
];

// ─────────────────────────────────────────────
// FAQ schema
// ─────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function WeddingPlanning() {
  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif", background: IVORY, color: INK, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* sr-only breadcrumb */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/wedding-anchor-jaipur">Wedding Anchor Jaipur</Link> ›
        <span>Wedding Planner Jaipur</span>
      </nav>

      {/* ══════════════════════════════════════
          1. HERO — dark warm + floral right
      ══════════════════════════════════════ */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "100vh", background: `linear-gradient(160deg, ${DARK_BG} 0%, ${DARK_BG_2} 45%, ${DARK_BG} 100%)` }}
      >
        {/* Floral decoration — right side */}
        <FloralHeroRight />

        {/* Hero image — left side, faded */}
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-20">
          <Image
            src="/white-flower-mandap-jaipur.webp"
            alt="Luxury white floral mandap wedding Jaipur"
            fill priority quality={100}
            className="object-cover"
            sizes="50vw"
            style={{ filter: "grayscale(30%)" }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, transparent 0%, ${DARK_BG} 100%)` }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8"
              style={{ border: "0.5px solid rgba(212,175,55,0.45)", padding: "7px 20px", borderRadius: 999, background: "rgba(0,0,0,0.35)" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD }} />
              <span className="font-montserrat" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD }}>
                Luxury Wedding Planners &nbsp;·&nbsp; Jaipur
              </span>
            </div>

            {/* Sub label */}
            <p className="font-montserrat mb-5" style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.22em", textTransform: "uppercase", color: `${GOLD}80` }}>
              Palace Weddings &nbsp;·&nbsp; Destination &nbsp;·&nbsp; Rajasthan
            </p>

            {/* H1 */}
            <h1 className="font-cormorant" style={{ fontSize: "clamp(52px, 8vw, 100px)", fontWeight: 300, lineHeight: 0.9, color: IVORY, marginBottom: 20, letterSpacing: "-0.01em" }}>
              Architecting<br />
              <span className="gold-shimmer" style={{ fontStyle: "italic" }}>Wedding Legacies.</span>
            </h1>

            <div style={{ width: 40, height: "0.5px", background: GOLD, margin: "24px 0" }} />

            {/* Description */}
            <p className="font-montserrat" style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: "rgba(250,248,244,0.55)", maxWidth: 460, marginBottom: 40 }}>
              Full-service luxury wedding planning in Jaipur — palace venue procurement, Sangeet, Mehndi, Haldi, Varmala & destination weddings across Rajasthan. Your family stays as guests, not coordinators.
            </p>

            {/* CTA */}
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="font-montserrat" style={{
                background: GOLD, color: DARK_BG, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 44px",
                borderRadius: 999, border: "none", cursor: "pointer",
              }}>
                Begin the Conversation &nbsp; →
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. PHILOSOPHY STRIP — ivory bg
      ══════════════════════════════════════ */}
      <section style={{ background: "#fff", borderBottom: "0.5px solid #e8e0d0" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {[
            { icon: "🕐", title: "One Event at a Time",    desc: "We never double-book. Your wedding is the only wedding that day." },
            { icon: "🛡",  title: "Transparent Fixed Fee",  desc: "You pay vendors directly at our rates. Zero hidden commissions — ever." },
            { icon: "👤", title: "You Stay as Guests",     desc: "Shadow teams handle every detail. Your family celebrates, not coordinates." },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="text-center" style={{ padding: "40px 32px", borderRight: i < 2 ? "0.5px solid #e8e0d0" : "none" }}>
                {/* SVG icons instead of emoji */}
                {i === 0 && <svg viewBox="0 0 28 28" fill="none" style={{ width: 24, height: 24, margin: "0 auto 14px" }}><circle cx="14" cy="14" r="12.5" stroke={GOLD} strokeWidth="0.75"/><path d="M14 7v7l4 4" stroke={GOLD} strokeWidth="0.75" strokeLinecap="round"/></svg>}
                {i === 1 && <svg viewBox="0 0 28 28" fill="none" style={{ width: 24, height: 24, margin: "0 auto 14px" }}><path d="M14 3L5 9v8c0 4.5 4 7.5 9 8.5 5-1 9-4 9-8.5V9L14 3z" stroke={GOLD} strokeWidth="0.75"/><path d="M10 14l3 3 5-5.5" stroke={GOLD} strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                {i === 2 && <svg viewBox="0 0 28 28" fill="none" style={{ width: 24, height: 24, margin: "0 auto 14px" }}><circle cx="14" cy="10" r="4.5" stroke={GOLD} strokeWidth="0.75"/><path d="M6 24c0-4.5 3.6-7.5 8-7.5s8 3 8 7.5" stroke={GOLD} strokeWidth="0.75" strokeLinecap="round"/></svg>}
                <p className="font-cormorant" style={{ fontSize: 19, fontWeight: 400, color: INK, marginBottom: 8 }}>{p.title}</p>
                <p className="font-montserrat" style={{ fontSize: 11, fontWeight: 300, lineHeight: 1.8, color: INK_LIGHT }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Floral divider */}
      <div style={{ background: IVORY, padding: "0 48px" }}><FloralDivider /></div>

      {/* ══════════════════════════════════════
          3. SERVICES GRID — ivory, gold borders
      ══════════════════════════════════════ */}
      <section style={{ background: IVORY, padding: "0 48px 80px" }}>
        <div className="max-w-6xl mx-auto">
          <Heading label="Wedding Services" title="Everything for the<br /><em style='color:#b8941e'>Bride &amp; Groom.</em>" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <Link href={s.link}>
                  <div className="service-card-wp"
                    style={{ background: "#fff", padding: "36px 28px", border: "0.5px solid #e8e0d0", position: "relative", overflow: "hidden", cursor: "pointer", height: "100%" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}50`}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#e8e0d0"}
                  >
                    <p className="font-cormorant" style={{ fontSize: 52, fontWeight: 300, color: "#e8e0d0", lineHeight: 1, marginBottom: 16 }}>{s.num}</p>
                    <p className="font-cormorant" style={{ fontSize: 22, fontWeight: 400, color: INK, marginBottom: 6 }}>{s.title}</p>
                    <p className="font-montserrat" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD_DARK, marginBottom: 14 }}>{s.sub}</p>
                    <p className="font-montserrat" style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: INK_LIGHT, marginBottom: 20 }}>{s.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.tags.map(tag => (
                        <span key={tag} className="font-montserrat"
                          style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, color: GOLD_DARK, border: `0.5px solid ${GOLD}60`, padding: "4px 12px", borderRadius: 999, background: "#fdf8ee" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Floral divider */}
      <div style={{ background: IVORY, padding: "0 48px" }}><FloralDivider /></div>

      {/* ══════════════════════════════════════
          4. GALLERY — masonry with real images
             + floral placeholders for missing ones
      ══════════════════════════════════════ */}
      <section style={{ background: IVORY, padding: "0 48px 80px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <Heading label="The Portfolio" title="Real <em style='color:#b8941e'>Weddings.</em>" />
            <Link href="/portfolio">
              <span className="font-montserrat" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD_DARK, borderBottom: `0.5px solid ${GOLD}60`, paddingBottom: 2, cursor: "pointer" }}>
                View All →
              </span>
            </Link>
          </div>

          {/* 4-col masonry-style grid */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "260px 260px", gap: 3 }}>
            {GALLERY.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="gallery-cell"
                  style={{
                    gridColumn: img.tall ? "1" : (img.wide ? "2 / span 2" : "auto"),
                    gridRow: img.tall ? "1 / span 2" : "auto",
                    position: "relative", overflow: "hidden", background: IVORY_2,
                    border: "0.5px solid #e0d8c8",
                  }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill quality={100}
                    className="object-cover"
                    style={{ filter: "grayscale(20%)" }}
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  {/* gradient + label */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,21,8,0.75) 0%, transparent 50%)" }} />
                  <p className="font-montserrat"
                    style={{ position: "absolute", bottom: 14, left: 14, fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,248,244,0.8)" }}>
                    {img.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. TESTIMONIALS — dark warm bg
      ══════════════════════════════════════ */}
      <section style={{ background: DARK_BG_2, padding: "80px 48px" }}>
        <div className="max-w-6xl mx-auto">
          <Heading label="Client Stories" title="Families who trusted <em style='color:#D4AF37'>the process.</em>" light />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginTop: 0 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="test-card"
                  style={{ display: "flex", flexDirection: "column", padding: "36px 28px", background: "rgba(255,255,255,0.03)", cursor: "pointer" }}>
                  <p className="font-cormorant" style={{ fontSize: 52, color: GOLD, lineHeight: 0.6, marginBottom: 20, opacity: 0.4 }}>&ldquo;</p>
                  <p className="font-cormorant" style={{ fontSize: 17, fontWeight: 300, fontStyle: "italic", lineHeight: 1.75, color: "rgba(250,248,244,0.72)", marginBottom: 24, flex: 1 }}>{t.quote}</p>
                  <div>
                    <p className="font-montserrat" style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>{t.name}</p>
                    <p className="font-montserrat" style={{ fontSize: 10, fontWeight: 300, color: "rgba(250,248,244,0.3)" }}>{t.event}</p>
                    <p className="font-montserrat" style={{ fontSize: 9, fontWeight: 400, letterSpacing: "0.1em", color: `${GOLD}80`, marginTop: 3, textTransform: "uppercase" }}>{t.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Floral divider on ivory */}
      <div style={{ background: IVORY, padding: "0 48px" }}><FloralDivider /></div>

      {/* ══════════════════════════════════════
          6. PROCESS — ivory, numbered timeline
      ══════════════════════════════════════ */}
      <section style={{ background: IVORY, padding: "0 48px 80px" }}>
        <div className="max-w-6xl mx-auto">
          <Heading label="The Methodology" title="The Curated <em style='color:#b8941e'>Journey.</em>" align="center" />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: 23, top: 0, bottom: 0, width: "0.5px", background: `linear-gradient(to bottom, ${GOLD}, ${GOLD}20)` }} />
            {PROCESS.map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 24, marginBottom: 36, position: "relative" }}>
                  <div className="font-cormorant"
                    style={{ width: 46, height: 46, borderRadius: "50%", background: "#fff", border: `0.5px solid ${GOLD}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 400, color: GOLD_DARK, flexShrink: 0, zIndex: 1, boxShadow: `0 0 16px ${GOLD}20` }}>
                    {step.num}
                  </div>
                  <div style={{ paddingTop: 10 }}>
                    <p className="font-cormorant" style={{ fontSize: 20, fontWeight: 400, color: INK, marginBottom: 6 }}>{step.title}</p>
                    <p className="font-montserrat" style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: INK_LIGHT }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Floral divider */}
      <div style={{ background: IVORY, padding: "0 48px" }}><FloralDivider /></div>

      {/* ══════════════════════════════════════
          7. BLOG CARDS — white bg, editorial
      ══════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 48px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <Heading label="Wedding Guides" title="Plan smarter with <em style='color:#b8941e'>expert guides.</em>" />
            <Link href="/blog">
              <span className="font-montserrat" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD_DARK, borderBottom: `0.5px solid ${GOLD}60`, paddingBottom: 2, cursor: "pointer" }}>
                All Articles →
              </span>
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {BLOG_CARDS.map((b, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={b.href}>
                  <div className="blog-card-wp" style={{ overflow: "hidden", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* image */}
                    <div style={{ height: 180, position: "relative", overflow: "hidden", background: IVORY_2 }}>
                      <Image src={b.img} alt={b.alt} fill quality={100}
                        className="object-cover"
                        style={{ filter: "grayscale(15%)", transition: "transform 0.5s, filter 0.4s" }}
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,21,8,0.6) 0%, transparent 55%)" }} />
                      {/* gold tag chip */}
                      <span className="font-montserrat"
                        style={{ position: "absolute", top: 14, left: 14, background: GOLD, color: DARK_BG, fontSize: 8, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>
                        {b.tag}
                      </span>
                    </div>
                    {/* content */}
                    <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column", background: "#fff" }}>
                      <p className="font-cormorant" style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.4, color: INK, marginBottom: 14, flex: 1 }}>{b.title}</p>
                      <p className="font-montserrat" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD_DARK }}>
                        Read Guide →
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. FAQ — ivory
      ══════════════════════════════════════ */}
      <section style={{ background: IVORY, padding: "80px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Heading label="Planning FAQs" title="Wedding Planner <em style='color:#b8941e'>Jaipur FAQ.</em>" align="center" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-wp-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. RELATED SERVICES GRID — white
      ══════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "64px 48px" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <div className="gold-divider justify-center"><span>All Services</span></div>
              <h2 className="font-cormorant" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: INK }}>
                One Team. <span style={{ fontStyle: "italic", color: GOLD_DARK }}>Every Wedding Event.</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Link href={r.href}>
                  <div className="text-center"
                    style={{ border: "0.5px solid #e8e0d0", padding: "24px 16px", cursor: "pointer", transition: "border-color 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${GOLD}60`; e.currentTarget.style.background = "#fdf8ee"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e0d0"; e.currentTarget.style.background = "transparent"; }}>
                    <r.icon size={16} color={GOLD_DARK} style={{ margin: "0 auto 10px" }} />
                    <p className="font-cormorant" style={{ fontSize: 15, fontWeight: 400, color: INK, marginBottom: 4 }}>{r.label}</p>
                    <p className="font-montserrat" style={{ fontSize: 9, fontWeight: 300, color: INK_LIGHT }}>{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. CTA — dark + floral bloom
      ══════════════════════════════════════ */}
      <section style={{ background: DARK_BG, padding: "100px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <FloralCTABg />
        {/* watermark text */}
        <p className="font-cormorant" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(80px, 18vw, 180px)", fontWeight: 300, color: `${GOLD}06`, letterSpacing: "-0.04em", pointerEvents: "none", whiteSpace: "nowrap", userSelect: "none" }}>
          WEDDING
        </p>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 540, margin: "0 auto" }}>
          <Reveal>
            <h2 className="font-cormorant" style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 300, color: IVORY, lineHeight: 0.95, marginBottom: 20 }}>
              Ready to<br /><span className="gold-shimmer" style={{ fontStyle: "italic" }}>Execute.</span>
            </h2>
            <p className="font-montserrat" style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.95, color: "rgba(250,248,244,0.4)", marginBottom: 8 }}>
              Palace venues for peak season book 8–12 months in advance.
            </p>
            <p className="font-montserrat" style={{ fontSize: 11, fontWeight: 300, color: "rgba(250,248,244,0.25)", marginBottom: 40 }}>
              Don&apos;t leave your legacy to chance.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="font-montserrat" style={{
                background: GOLD, color: DARK_BG, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px",
                borderRadius: 999, border: "none", cursor: "pointer",
                boxShadow: `0 0 40px ${GOLD}30`,
              }}>
                Secure Our Agency &nbsp; →
              </button>
            </a>
            {/* footer links */}
            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 20px" }}>
              {[
                { label: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
                { label: "Sangeet Host", href: "/sangeet-anchor-jaipur" },
                { label: "Destination Wedding", href: "/destination-wedding-anchor" },
                { label: "Event Designing", href: "/event-designing" },
                { label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur" },
                { label: "Contact", href: "/contact" },
              ].map(l => (
                <Link key={l.href} href={l.href}>
                  <span className="font-montserrat"
                    style={{ fontSize: 9, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: `${GOLD}40`, cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.style.color = `${GOLD}90`}
                    onMouseLeave={e => e.currentTarget.style.color = `${GOLD}40`}>
                    {l.label}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
