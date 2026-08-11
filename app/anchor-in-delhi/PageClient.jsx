"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mic2,
  Users,
  Award,
  CalendarCheck,
  MapPin,
  ChevronRight,
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Crown,
  Building2,
  Music2,
  Layers,
  Sparkle,
  Star
} from "lucide-react";

// ───────────────────────────────────────────────────────────────────────────
// CONSTANTS & HELPERS
// ───────────────────────────────────────────────────────────────────────────
const GOLD = "#D4AF37";
const WHATSAPP_URL = "https://wa.me/917737877978?text=Hi%20Anchor%20Yash!%20I%27m%20planning%20an%20event%20in%20Delhi%20NCR.%20I%27d%20like%20to%20check%20your%20availability.";

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 2000, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(num * ease));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

// ───────────────────────────────────────────────────────────────────────────
// DATA STRUCTURES
// ───────────────────────────────────────────────────────────────────────────

// Section 02 — Event Categories
const ENERGY_CATEGORIES = [
  {
    id: "weddings",
    title: "WEDDINGS",
    subtitle: "GRAND BARAAT & VARMALA",
    tag: "Luxury Shaadi",
    desc: "Delhi weddings demand an anchor who can elevate royal traditions, coordinate effortlessly with multi-acre decor setups, and command massive family gatherings with poise.",
    highlights: ["Baraat Entry Coordination", "Varmala Stage Spectacle", "Family Cultural Protocols"],
    image: "/premium_events/grand_wedding_venue.webp"
  },
  {
    id: "corporate",
    title: "CORPORATE",
    subtitle: "DIPLOMATIC & VIP SUMMITS",
    tag: "Aerocity & BKC",
    desc: "From Aerocity summits to C-suite awards at Taj Palace, Yash brings protocol awareness, bilingual eloquence, and flawless run-of-show timing.",
    highlights: ["Diplomatic Protocol", "C-Suite & VIP Courtesy", "Bilingual English/Hindi"],
    image: "/corporate-anchor-yash-soni-presentation.webp"
  },
  {
    id: "celebrations",
    title: "CELEBRATIONS",
    subtitle: "PUNJABI SANGEET & COCKTAILS",
    tag: "High Octane",
    desc: "Electric after-parties and Punjabi Sangeet nights in Chhatarpur require an anchor with unscripted wit, DJ coordination, and non-stop crowd energy.",
    highlights: ["Crowd Energy Control", "DJ & Dhol Sync", "Family Dance Sequence Flow"],
    image: "/sangeet-red-glitter-stage.webp"
  },
  {
    id: "big-stages",
    title: "BIG STAGES",
    subtitle: "MASSIVE LAWNS & ARENAS",
    tag: "10,000+ Audience",
    desc: "Projecting across open-air lawns without losing intimacy. Managing spatial crowd dynamics and keeping thousands engaged without reading from paper scripts.",
    highlights: ["Open-Air Lawn Acoustics", "10,000+ Crowd Command", "Zero Paper Scripts"],
    image: "/hero-slide-1.webp"
  }
];

// Section 03 — Territory Locations
const TERRITORIES = [
  {
    id: "chattarpur",
    name: "CHATTARPUR",
    type: "Farmhouse Luxury",
    desc: "Sprawling farmhouse weddings, Sangeet celebrations, and multi-event wedding weekends across multi-acre estates.",
    highlights: ["Morbagh", "A-Dosi Estate", "Manaktala Farms"]
  },
  {
    id: "aerocity",
    name: "AEROCITY",
    type: "Corporate & Hospitality Hub",
    desc: "Corporate summits, international conferences, brand launches, and formal evening galas at 5-star properties.",
    highlights: ["Andaz Delhi", "Roseate House", "Pullman Aerocity"]
  },
  {
    id: "gurugram",
    name: "GURUGRAM",
    type: "Executive & Luxury Galas",
    desc: "Executive gatherings, corporate celebrations, tech launches, and high-net-worth family celebrations.",
    highlights: ["DLF Cyber City", "Oberoi Gurugram", "Leela Ambience"]
  },
  {
    id: "south-delhi",
    name: "SOUTH DELHI",
    type: "Elite Social Events",
    desc: "Premium social celebrations, intimate high-end weddings, cocktail evenings, and milestone anniversaries.",
    highlights: ["Taj Palace", "ITC Maurya", "The Leela Palace"]
  },
  {
    id: "noida",
    name: "NOIDA",
    type: "Conventions & Summits",
    desc: "Large-scale corporate summits, industrial conventions, exhibition galas, and public event arenas.",
    highlights: ["India Expo Centre", "Radisson Blu", "Stellar Gymkhana"]
  },
  {
    id: "faridabad",
    name: "FARIDABAD",
    type: "Grand Celebrations",
    desc: "Industrial leadership conventions, expansive wedding lawns, and multi-generational family celebrations.",
    highlights: ["Surajkund Resorts", "Radisson Blu", "Imperial Lawns"]
  }
];

// Section 04 — Playbook Tabs
const PLAYBOOK_TABS = [
  {
    id: "weddings",
    label: "WEDDINGS",
    title: "Grand Farmhouse & Palace Weddings",
    desc: "Delhi weddings move between profound emotional rituals and grand spectacle. As your emcee, Yash connects family elders, guides Varmala sequences, and ensures the entire wedding timeline flows without awkward lulls.",
    contribution: "Seamless transition management, family member introductions, and commanding multi-acre lawn crowds during main rituals.",
    energy: "Regal, warm, and respectfully authoritative.",
    image: "/premium_events/grand_wedding_venue.webp"
  },
  {
    id: "sangeet",
    label: "SANGEET",
    title: "High-Energy Punjabi Sangeet Nights",
    desc: "A Delhi Sangeet is an explosion of music, dance, and competitive family banter. Yash keeps the energy soaring between family performances, coordinates cues with the DJ and Dhol team, and turns the dance floor into a celebration.",
    contribution: "Unscripted crowd banter, rhythm control, family group integration, and high-octane stage energy.",
    energy: "Electrifying, witty, and infectious.",
    image: "/sangeet-red-glitter-stage.webp"
  },
  {
    id: "corporate",
    label: "CORPORATE EVENTS",
    title: "Bilingual Corporate Galas & Leadership Gatherings",
    desc: "Corporate rooms in Aerocity and Connaught Place demand absolute professional clarity. Yash balances executive protocol with subtle humor, ensuring sponsors, keynote speakers, and awardees are presented with dignity.",
    contribution: "Flawless bilingual delivery (English/Hindi), strict timeline adherence, and protocol-aware stage introductions.",
    energy: "Sophisticated, articulate, and poised.",
    image: "/corporate-anchor-yash-soni-presentation.webp"
  },
  {
    id: "conferences",
    label: "CONFERENCES",
    title: "National Summits & Industry Conventions",
    desc: "Managing full-day conference agendas with panel discussions, keynote transitions, and audience Q&A sessions across Delhi NCR's major convention centers.",
    contribution: "Stage continuity across multi-session events, speaker moderation, and audience engagement.",
    energy: "Professional, focused, and crisp.",
    image: "/product-launch-corporate-hero.webp"
  },
  {
    id: "awards",
    label: "AWARDS",
    title: "Annual Award Nights & Excellence Galas",
    desc: "Creating cinematic build-ups for award rollouts, keeping trophy distribution swift, and maintaining audience enthusiasm through long presentation sequences.",
    contribution: "High-impact winner announcements, trophy handoff choreography, and pacing control.",
    energy: "Celebratory, impactful, and dramatic.",
    image: "/corporate_gala_dinner-green.webp"
  },
  {
    id: "launches",
    label: "PRODUCT LAUNCHES",
    title: "Brand Reveals & Experiential Launches",
    desc: "Building suspense leading up to key product unveilings for automotive, tech, fashion, and luxury brands across Delhi.",
    contribution: "Countdown hype creation, brand narrative delivery, and media-friendly stage moments.",
    energy: "Dynamic, modern, and high-value.",
    image: "/product-launch-stage-reveal.webp"
  },
  {
    id: "fests",
    label: "COLLEGE / FEST EVENTS",
    title: "Large-Scale College Fests & Concert Stages",
    desc: "Commanding thousands of energetic youth, artist introductions, and keeping crowd safety and enthusiasm balanced.",
    contribution: "Audience chant activation, artist entry hype, and crowd control.",
    energy: "Vibrant, electric, and unstoppable.",
    image: "/hero-slide-1.webp"
  },
  {
    id: "private",
    label: "PRIVATE CELEBRATIONS",
    title: "Cocktail Soirées & Anniversary Dinners",
    desc: "Intimate gatherings requiring personalized storytelling, family anecdotes, and a warm, approachable host presence.",
    contribution: "Personalized toast facilitation, interactive guest moments, and graceful ceremony flow.",
    energy: "Intimate, warm, and charming.",
    image: "/sagai-ring-ceremony-jaipur-hero.webp"
  }
];

// Section 05 — Event Stories Gallery
const EVENT_STORIES = [
  {
    id: 1,
    title: "Chhatarpur Farmhouse Wedding Spectacle",
    category: "WEDDING",
    location: "Chattarpur Farms, Delhi NCR",
    desc: "A grand 1,200-guest outdoor wedding celebration across 3 acres of open lawns. Yash commanded the crowd from Baraat arrival through the Varmala pyro sequence.",
    image: "/premium_events/grand_wedding_venue.webp"
  },
  {
    id: 2,
    title: "Aerocity Punjabi Sangeet Night",
    category: "SANGEET",
    location: "Aerocity Ballroom, Delhi",
    desc: "High-energy Sangeet night with 30+ family dance performances, live Dhol synchronization, and non-stop after-party momentum.",
    image: "/sangeet-red-glitter-stage.webp"
  },
  {
    id: 3,
    title: "Taj Palace National Corporate Summit",
    category: "CORPORATE",
    location: "Taj Palace, Diplomatic Enclave",
    desc: "Protocol-heavy summit attended by cabinet dignitaries and industry leaders. Flawless bilingual hosting with zero script reliance.",
    image: "/corporate-anchor-yash-soni-presentation.webp"
  },
  {
    id: 4,
    title: "Large-Format Concert & Stage Reveal",
    category: "LIVE EVENT",
    location: "Delhi NCR Arena",
    desc: "Commanding a crowd of over 10,000 live attendees with open-air acoustics and high-impact stage presence.",
    image: "/hero-slide-1.webp"
  }
];

// Section 07 — Approved Statistics
const STATS = [
  { val: "700", suffix: "+", label: "EVENTS HOSTED", sub: "Pan-India Record" },
  { val: "10", suffix: "K+", label: "LIVE AUDIENCE", sub: "Single Stage Scale" },
  { val: "5", suffix: "+", label: "YEARS EXPERIENCE", sub: "Unscripted Mastery" },
  { val: "5", suffix: "+", label: "EVENT TYPES", sub: "Corporate to Weddings" }
];

// Section 07 — Real Authentic Testimonials
const TESTIMONIALS = [
  {
    quote: "Our Sangeet at a Chhatarpur farmhouse had 1,200 people. It was chaotic in the best way possible. Yash stepped on stage and completely owned the sheer madness of a true Delhi Sangeet. He had uncles laughing, cousins cheering, and never once let the energy drop.",
    name: "Arora Family",
    event: "Sangeet · Chhatarpur Farms · 1,200 guests"
  },
  {
    quote: "We hosted an international tech summit at the Taj Palace with cabinet ministers in attendance. Yash handled the stage with such gravitas and precision that many delegates assumed he was a senior member of our own board. Highly articulate.",
    name: "Head of Events — National IT Association",
    event: "Tech Summit · Taj Palace · 600 delegates"
  },
  {
    quote: "From the Varmala at The Leela to the late-night after-party, Yash's transitions were flawless. He understands the Delhi crowd deeply — he knows when to be fully respectful to the elders and when to turn up the heat for the youngsters.",
    name: "Chadha Family",
    event: "Wedding · The Leela Palace · 500 guests"
  }
];

// Section 08 — The Difference Comparison
const DIFFERENCES = [
  {
    generic: "ANNOUNCES",
    yash: "CONNECTS",
    genericSub: "Reads names off a queue sheet mechanically",
    yashSub: "Creates organic emotional bridges with the audience"
  },
  {
    generic: "FOLLOWS THE SCRIPT",
    yash: "READS THE ROOM",
    genericSub: "Panics when delays or schedule shifts occur",
    yashSub: "Uses zero paper scripts, adapting instantly to crowd energy"
  },
  {
    generic: "FILLS TIME",
    yash: "CREATES MOMENTS",
    genericSub: "Uses generic filler copy between stage setups",
    yashSub: "Crafts memorable interactive highlights every minute on stage"
  }
];

// Section 09 — Delhi FAQs
const FAQS = [
  {
    q: "Can you host weddings in Chattarpur?",
    a: "Yes. Sprawling Chattarpur farmhouses are a mainstay of Delhi weddings. Anchor Yash specializes in managing open-air acoustic distribution, massive baraat entries, and unscripted family Sangeets on multi-acre lawns."
  },
  {
    q: "Do you travel across Delhi NCR?",
    a: "Yes. Anchor Yash hosts events across South Delhi, Chattarpur, Aerocity, Gurugram, Noida, and Faridabad, maintaining seamless punctuality and venue familiarity across the entire National Capital Region."
  },
  {
    q: "Can you host events in Gurugram?",
    a: "Yes. From corporate leadership summits at Cyber City to luxury ballroom galas at Golf Course Road hotels, Yash brings sharp executive presence and bilingual command to Gurugram stages."
  },
  {
    q: "Do you host corporate events in Aerocity?",
    a: "Yes. Aerocity hosts major national summits and corporate galas at venues like Andaz Delhi, Roseate House, and Pullman. Yash handles protocol-heavy stages with cabinet ministers, C-suite executives, and international delegates."
  },
  {
    q: "Can you handle large wedding audiences?",
    a: "Yes. Anchor Yash regularly commands 1,000+ guest audiences in Delhi. His unscripted crowd work and vocal command keep expansive crowds focused without relying on paper scripts."
  },
  {
    q: "Do you host Sangeet and cocktail evenings?",
    a: "Yes. High-energy Punjabi Sangeets and glamorous cocktail nights in Delhi are his signature events, bridging upbeat crowd interaction with structured sequence transitions."
  },
  {
    q: "Can you coordinate with wedding planners and event production teams?",
    a: "Yes. Yash collaborates seamlessly with top wedding planners, dhol troupes, production crews, and DJs across Delhi NCR to ensure tight cue execution and zero stage downtime."
  },
  {
    q: "How early should we book an anchor for a Delhi event?",
    a: "For peak Delhi winter wedding season (November to February), bookings are recommended 6 to 8 months in advance as prime dates sell out rapidly."
  }
];

// Section 10 — Booking Steps
const BOOKING_STEPS = [
  { step: "01", title: "TELL ME THE EVENT", desc: "Share your event format, whether it's a grand Chhatarpur wedding or an Aerocity summit." },
  { step: "02", title: "SHARE THE DATE + VENUE", desc: "Specify the exact venue and date so date exclusivity can be checked immediately." },
  { step: "03", title: "UNDERSTAND THE AUDIENCE", desc: "We discuss the crowd profile, language preferences (English/Hindi), and key highlights." },
  { step: "04", title: "BUILD THE HOSTING APPROACH", desc: "Crafting the stage narrative, cue sheets, and coordination points with planners & DJs." },
  { step: "05", title: "TAKE THE STAGE", desc: "Flawless, unscripted live execution that leaves the room electric and memorable." }
];

// Section 12 — City Links
const CITY_NETWORK = [
  { name: "JAIPUR", href: "/anchor-in-jaipur", desc: "Palace & Royal Heritage" },
  { name: "UDAIPUR", href: "/anchor-in-udaipur", desc: "Lake Palace Destination" },
  { name: "MUMBAI", href: "/anchor-in-mumbai", desc: "Sea-Facing Luxury & BKC" },
  { name: "GURUGRAM", href: "/anchor-in-delhi", desc: "Cyber City & Corporate" },
  { name: "GOA", href: "/anchor-in-goa", desc: "Beachfront Celebrations" },
  { name: "BANGALORE", href: "/anchor-in-bangalore", desc: "Tech Galas & Summits" },
  { name: "JODHPUR", href: "/anchor-in-jodhpur", desc: "Fort & Royal Weddings" },
  { name: "AGRA", href: "/anchor-in-agra", desc: "Heritage Taj Celebrations" }
];

// ───────────────────────────────────────────────────────────────────────────
// COMPONENT
// ───────────────────────────────────────────────────────────────────────────
export default function PageClient() {
  const [activeTab, setActiveTab] = useState("weddings");
  const [activeStory, setActiveStory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const selectedTabData = PLAYBOOK_TABS.find((t) => t.id === activeTab) || PLAYBOOK_TABS[0];
  const selectedStoryData = EVENT_STORIES[activeStory] || EVENT_STORIES[0];

  return (
    <div className="bg-[#050505] text-[#FDFBF7] font-sans antialiased overflow-x-hidden selection:bg-[#D4AF37] selection:text-black min-h-screen">
      
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 01 — CINEMATIC HERO */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/20">
        
        {/* Responsive AI Generated Hero Background */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/backgrounds/delhi_hero_desktop.png" />
            <img
              src="/backgrounds/delhi_hero_mobile.png"
              alt="Anchor Yash Soni commanding a grand luxury Delhi event stage"
              className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.1] scale-105 transition-transform duration-1000"
              loading="eager"
            />
          </picture>
          
          {/* Subtle editorial overlays for readability & luxury ambience */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-5 md:px-8 text-center max-w-5xl py-24 md:py-32">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-[#050505]/80 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <MapPin size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase">
              DELHI NCR · PROFESSIONAL EVENT HOST & EMCEE
            </span>
          </motion.div>

          {/* H1 Title — Primary H1 on Page */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#FDFBF7] leading-[1.1] mb-8"
          >
            DELHI DOESN’T NEED<br />
            <span className="text-[#D4AF37] italic font-normal">AN ANNOUNCEMENT.</span><br />
            IT NEEDS AN ARRIVAL.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#E8E2D5]/90 max-w-3xl mx-auto font-light leading-relaxed mb-10"
          >
            From grand weddings and Sangeet celebrations to corporate stages and large-format events across Delhi NCR, Anchor Yash brings structure, spontaneity and unmistakable stage presence to rooms that demand more than a microphone.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#FDFBF7] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95"
            >
              <CalendarCheck size={16} />
              PLAN YOUR DELHI EVENT
            </a>
            
            <a
              href="#delhi-energy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#FDFBF7]/30 text-[#FDFBF7] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#FDFBF7]/10 hover:border-[#D4AF37] transition-all duration-300"
            >
              EXPLORE THE EXPERIENCE
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Bottom subtle gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 02 — DELHI EVENT ENERGY */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="delhi-energy" className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15 relative">
        <div className="container mx-auto max-w-6xl">
          
          <Reveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              THE CAPITAL AUDIENCE DYNAMIC
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6">
              DELHI HAS A DIFFERENT KIND OF ENERGY.
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm sm:text-base font-light leading-relaxed">
              Delhi celebrations move rapidly between deep emotional family rituals, formal protocol, uninhibited dance celebrations, and high-octane audience interaction. An anchor must read the room continuously to match and elevate that momentum.
            </p>
          </Reveal>

          {/* Desktop Grid / Mobile Horizontal Swipe Carousel */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
            {ENERGY_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.1} className="w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center">
                <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                  <div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-[#D4AF37]/15">
                      <Image
                        src={cat.image}
                        alt={`Anchor Yash Soni hosting ${cat.title} in Delhi`}
                        fill
                        sizes="(max-width: 768px) 80vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                      />
                      <div className="absolute top-3 right-3 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] font-semibold tracking-wider">
                        {cat.tag}
                      </div>
                    </div>

                    <span className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.2em] uppercase block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#E8E2D5]/75 leading-relaxed font-light mb-5">
                      {cat.desc}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-[#D4AF37]/10 pt-4">
                    {cat.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-[#E8E2D5]/90">
                        <Sparkle size={10} className="text-[#D4AF37] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Swipe indicator on mobile */}
          <div className="text-center md:hidden mt-4 text-[10px] text-[#D4AF37]/60 uppercase tracking-widest flex items-center justify-center gap-2">
            <span>SWIPE TO EXPLORE CATEGORIES</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 03 — DELHI / NCR TERRITORY */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15 bg-[#030303]">
        <div className="container mx-auto max-w-6xl">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              GEOGRAPHIC & VENUE COVERAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6">
              FROM SOUTH DELHI TO THE NCR STAGE.
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm sm:text-base font-light leading-relaxed">
              Every region in Delhi NCR has its distinct event ethos. Anchor Yash understands the specific logistics, audience profiles, and stage requirements across the premier hubs.
            </p>
          </Reveal>

          {/* Grid of Locations with Map Context */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TERRITORIES.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 0.08}>
                <div className="bg-[#080808] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/60 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#D4AF37]" />
                      <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-[#FDFBF7]">
                        {loc.name}
                      </h3>
                    </div>
                    <span className="text-[10px] text-[#D4AF37] font-mono tracking-wider border border-[#D4AF37]/30 px-2 py-0.5 rounded-full">
                      {loc.type}
                    </span>
                  </div>

                  <p className="text-xs text-[#E8E2D5]/80 leading-relaxed font-light mb-5">
                    {loc.desc}
                  </p>

                  <div className="border-t border-[#D4AF37]/10 pt-3">
                    <span className="text-[10px] text-[#D4AF37]/70 font-semibold tracking-wider uppercase block mb-1.5">
                      KEY VENUES & NODES:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.highlights.map((h, idx) => (
                        <span key={idx} className="text-[10px] bg-[#111111] text-[#E8E2D5]/90 border border-white/5 px-2 py-0.5 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 04 — DELHI EVENT PLAYBOOK */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15">
        <div className="container mx-auto max-w-6xl">
          
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              THE HOSTING PLAYBOOK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6">
              WHAT KIND OF ROOM ARE YOU ASKING ME TO COMMAND?
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm sm:text-base font-light leading-relaxed">
              Select an event format below to explore how Anchor Yash shapes the stage narrative, crowd dynamics, and hosting contributions for specific celebrations.
            </p>
          </Reveal>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-[#D4AF37]/15 pb-6">
            {PLAYBOOK_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-[#0A0A0A] text-[#E8E2D5]/70 hover:text-[#FDFBF7] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              <div>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
                  EVENT SPECIFIC PLAYBOOK · {selectedTabData.label}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase text-[#FDFBF7] mb-4">
                  {selectedTabData.title}
                </h3>
                <p className="text-sm text-[#E8E2D5]/85 leading-relaxed font-light mb-6">
                  {selectedTabData.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-[#050505] p-4 rounded-xl border border-[#D4AF37]/15">
                    <h4 className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-1 flex items-center gap-2">
                      <Award size={14} /> WHAT THE HOST CONTRIBUTES:
                    </h4>
                    <p className="text-xs text-[#E8E2D5]/80 font-light leading-relaxed">
                      {selectedTabData.contribution}
                    </p>
                  </div>

                  <div className="bg-[#050505] p-4 rounded-xl border border-[#D4AF37]/15">
                    <h4 className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-1 flex items-center gap-2">
                      <Users size={14} /> AUDIENCE & ENERGY CONTEXT:
                    </h4>
                    <p className="text-xs text-[#E8E2D5]/80 font-light leading-relaxed">
                      {selectedTabData.energy}
                    </p>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#FDFBF7] transition-all"
                >
                  DISCUSS YOUR {selectedTabData.label} EVENT
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl">
                <Image
                  src={selectedTabData.image}
                  alt={`Anchor Yash hosting ${selectedTabData.title} in Delhi`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FDFBF7]/90 font-serif italic bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  &ldquo;Every stage demands its own rhythm — never a copy-paste routine.&rdquo;
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 05 — EVENT STORIES */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15 bg-[#030303]">
        <div className="container mx-auto max-w-6xl">
          
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              AUTHENTIC STAGE MEMORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6">
              THE ROOMS I’VE BEEN ASKED TO COMMAND.
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm sm:text-base font-light leading-relaxed">
              Explore authentic photographs from actual events. Select any thumbnail to view stage details and location context.
            </p>
          </Reveal>

          {/* Main Story Display */}
          <div className="bg-[#0A0A0A] border border-[#D4AF37]/25 rounded-2xl p-6 md:p-8 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D4AF37]/20">
                <Image
                  src={selectedStoryData.image}
                  alt={selectedStoryData.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover filter brightness-95 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold">
                  {selectedStoryData.category}
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <MapPin size={12} /> {selectedStoryData.location}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase text-[#FDFBF7] mb-4">
                  {selectedStoryData.title}
                </h3>
                <p className="text-sm text-[#E8E2D5]/80 leading-relaxed font-light mb-6">
                  {selectedStoryData.desc}
                </p>
                <div className="border-t border-[#D4AF37]/15 pt-4 text-xs text-[#D4AF37] font-mono">
                  AUTHENTIC UNRETROSPECTIVE STAGE PHOTOGRAPHY
                </div>
              </div>

            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EVENT_STORIES.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all duration-300 text-left group ${
                  activeStory === index
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-[1.02]"
                    : "border-white/10 hover:border-[#D4AF37]/40 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
                  <span className="text-[9px] text-[#D4AF37] font-semibold tracking-wider uppercase block">
                    {story.category}
                  </span>
                  <span className="text-[11px] text-[#FDFBF7] font-medium truncate">
                    {story.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 06 — HOSTING PHILOSOPHY */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-8 border-b border-[#D4AF37]/20 bg-[#020202] text-center relative overflow-hidden">
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          
          <Reveal>
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.35em] block mb-4">
              STAGE CREED & PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#FDFBF7] leading-tight mb-12">
              A HOST IS NOT<br />
              <span className="text-[#D4AF37] italic font-normal">A HUMAN MICROPHONE.</span>
            </h2>
          </Reveal>

          {/* 5 Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            {[
              { num: "01", title: "READ THE ROOM", sub: "Anticipate energy shifts continuously" },
              { num: "02", title: "CONTROL THE MOMENT", sub: "Turn delays into seamless highlights" },
              { num: "03", title: "BUILD THE ENERGY", sub: "Escalate crowd participation naturally" },
              { num: "04", title: "KNOW WHEN TO DISAPPEAR", sub: "Let elders and VIPs own the spotlight" },
              { num: "05", title: "KNOW WHEN TO TAKE OVER", sub: "Step up immediately during glitches" }
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.08}>
                <div className="bg-[#070707] border border-[#D4AF37]/20 rounded-xl p-5 h-full flex flex-col items-center justify-center hover:border-[#D4AF37]/60 transition-all duration-300 group">
                  <span className="text-xs font-mono text-[#D4AF37] mb-2">{item.num}</span>
                  <h3 className="font-serif text-sm font-bold uppercase text-[#FDFBF7] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#E8E2D5]/70 font-light leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 07 — EXPERIENCE + SOCIAL PROOF */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15">
        <div className="container mx-auto max-w-6xl">
          
          {/* Approved Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="text-center bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-6">
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#D4AF37] mb-2">
                  <AnimatedCounter target={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FDFBF7] mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#E8E2D5]/60 font-light uppercase tracking-wider">
                  {stat.sub}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Testimonials */}
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#FDFBF7]">
              WORDS FROM REAL DELHII EVENTS
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all">
                  <div>
                    <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={14} fill="#D4AF37" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#E8E2D5]/85 italic leading-relaxed font-light mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-[#D4AF37]/10 pt-4">
                    <h4 className="text-xs font-bold text-[#FDFBF7] uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <span className="text-[10px] text-[#D4AF37]/80 block mt-0.5">
                      {t.event}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 08 — THE DIFFERENCE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15 bg-[#030303]">
        <div className="container mx-auto max-w-5xl">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              POSITIONING & APPROACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6">
              THE DIFFERENCE ISN’T THE MICROPHONE.
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm sm:text-base font-light leading-relaxed">
              How a true event emcee elevates an entire evening compared to conventional announcements.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENCES.map((diff, i) => (
              <Reveal key={diff.generic} delay={i * 0.1}>
                <div className="bg-[#080808] border border-[#D4AF37]/20 rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <span className="text-[10px] text-red-400/80 uppercase tracking-widest font-mono block mb-1">
                      GENERIC HOST
                    </span>
                    <h3 className="font-serif text-lg font-bold text-red-300 uppercase mb-2">
                      {diff.generic}
                    </h3>
                    <p className="text-xs text-[#E8E2D5]/60 font-light leading-relaxed">
                      {diff.genericSub}
                    </p>
                  </div>

                  <div className="bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-xl p-4">
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-mono block mb-1">
                      ANCHOR YASH
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#D4AF37] uppercase mb-2">
                      {diff.yash}
                    </h4>
                    <p className="text-xs text-[#FDFBF7]/90 font-light leading-relaxed">
                      {diff.yashSub}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 09 — FAQ */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15">
        <div className="container mx-auto max-w-4xl">
          
          <Reveal className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              DELHI BOOKING CLARITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm font-light">
              Clear answers regarding logistics, travel, venue formats, and host booking across Delhi NCR.
            </p>
          </Reveal>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-xl overflow-hidden transition-colors">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-serif text-base md:text-lg font-semibold text-[#FDFBF7]">
                        {faq.q}
                      </span>
                      <span className="text-[#D4AF37] p-1 bg-[#111111] rounded-full shrink-0">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-5 text-xs sm:text-sm text-[#E8E2D5]/80 font-light leading-relaxed border-t border-[#D4AF37]/10 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 10 — BOOKING PROCESS */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-[#D4AF37]/15 bg-[#030303]">
        <div className="container mx-auto max-w-6xl">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              PRE-STAGE COLLABORATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6">
              YOUR DELHI EVENT STARTS LONG BEFORE THE STAGE.
            </h2>
            <p className="text-[#E8E2D5]/80 text-sm sm:text-base font-light leading-relaxed">
              A structured 5-step process ensures complete alignment between your planner, production team, and host.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {BOOKING_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="bg-[#080808] border border-[#D4AF37]/20 rounded-2xl p-5 h-full flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all">
                  <div>
                    <span className="text-2xl font-mono font-bold text-[#D4AF37] block mb-3">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-xs font-bold uppercase text-[#FDFBF7] tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[#E8E2D5]/70 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#FDFBF7] transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              <CalendarCheck size={16} />
              CHECK DATE AVAILABILITY
            </a>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 11 — FINAL CTA */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-8 border-b border-[#D4AF37]/20 relative overflow-hidden text-center">
        
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium_events/grand_wedding_venue.webp"
            alt="Anchor Yash Soni Delhi Stage Finale"
            fill
            sizes="100vw"
            className="object-cover filter brightness-[0.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]" />
        </div>

        <div className="relative z-10 container mx-auto max-w-3xl">
          <Reveal>
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.35em] block mb-4">
              SECURE YOUR DELHI DATES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#FDFBF7] mb-6 leading-tight">
              READY TO PUT<br />
              <span className="text-[#D4AF37] italic font-normal">A HOST ON THAT STAGE?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#E8E2D5]/90 font-light leading-relaxed mb-10">
              Tell me about your Delhi event — dates, venue, and scale. Receive immediate availability and booking details.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase px-9 py-4.5 rounded-full hover:bg-[#FDFBF7] transition-all shadow-[0_0_35px_rgba(212,175,55,0.4)]"
              >
                <CalendarCheck size={16} />
                CHECK DATE AVAILABILITY
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#FDFBF7]/30 text-[#FDFBF7] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4.5 rounded-full hover:bg-[#FDFBF7]/10 transition-all"
              >
                <MessageCircle size={16} />
                TALK TO ANCHOR YASH
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 12 — CITY NETWORK */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-5 md:px-8 bg-[#030303]">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-[0.25em] block mb-2">
              DESTINATION & METRO HOST NETWORK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#FDFBF7]">
              EXPLORE OTHER CITY STAGES
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CITY_NETWORK.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="bg-[#080808] border border-[#D4AF37]/20 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-all group"
              >
                <span className="font-serif text-sm font-bold text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors block">
                  {city.name}
                </span>
                <span className="text-[10px] text-[#E8E2D5]/60 block mt-1 font-light">
                  {city.desc}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* STICKY MOBILE CTA */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-[9990] bg-[#050505]/95 backdrop-blur-md border-t border-[#D4AF37]/30 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold text-xs tracking-[0.15em] uppercase py-3.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95 transition-transform"
        >
          <CalendarCheck size={16} />
          CHECK DATE AVAILABILITY
        </a>
      </div>

    </div>
  );
}
