"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Mic,
  Sparkles,
  Users,
  Award,
  Quote,
  CheckCircle2,
  Star,
  MapPin,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GoldBorderCard from "./components/GoldBorderCard";
import StatsHoverGroup from "./components/StatsHoverGroup";
import GlowCard from "./components/GlowCard";

// ─────────────────────────────────────────
// CONFIG — all from canonical site sources
// ─────────────────────────────────────────
const WA =
  "https://wa.me/917737877978?text=Hi%20Yash!%20I%20read%20your%20story%20and%20I%27d%20love%20to%20discuss%20my%20event.";

// Stats: values from homepage STATS + lib/schema/serviceSchema.js
const STATS = [
  { value: "700+", label: "Events Anchored", sub: "Across Jaipur & Rajasthan", variant: "gold" },
  { value: "10,000+", label: "Largest Crowd", sub: "Commanded live, unscripted", variant: "green" },
  { value: "4.9★", label: "Client Rating", sub: "Across 40+ verified reviews", variant: "hunter" },
  { value: "4+", label: "Years on Stage", sub: "Zero paper scripts", variant: "sage" },
];

// Specializations — all facts from homepage SERVICES & WHY_ME arrays
const SPECIALIZATIONS = [
  {
    icon: Mic,
    title: "Wedding Anchor",
    tag: "Weddings",
    desc: "From the emotional Varmala to a chaotic Baraat — every ritual hosted with cultural precision. NRI families, palace venues, and farmhouse lawns handled flawlessly.",
    href: "/wedding-anchor-jaipur",
    accent: "#D4AF37",
  },
  {
    icon: Users,
    title: "Sangeet Host",
    tag: "Sangeet",
    desc: "The dance floor doesn't just stay alive — it stays packed. Unscripted crowd games, high-energy transitions, complete command of 500 to 1,500 guests.",
    href: "/sangeet-anchor-jaipur",
    accent: "#2D6A4F",
  },
  {
    icon: Award,
    title: "Corporate Emcee",
    tag: "Corporate",
    desc: "Award nights, product launches, and business summits. Sharp, unscripted, and matching the gravitas of your brand and keynote speakers.",
    href: "/corporate-event-anchor-jaipur",
    accent: "#4A6741",
  },
  {
    icon: Globe,
    title: "Destination Weddings",
    tag: "Destination",
    desc: "Heritage venues, coastal resorts, and hill retreats across India. Jaipur, Udaipur, Jodhpur, Goa — full logistics handled, no anchor anxiety.",
    href: "/destination-wedding-anchor",
    accent: "#B5C4AE",
  },
];

// Credentials from homepage WHY_ME + VS_DATA
const CREDENTIALS = [
  { label: "100% Unscripted", detail: "Zero paper scripts in 700+ events. Every word built live for your specific crowd." },
  { label: "Crowd Psychology", detail: "50+ crisis interactions for power cuts, audio failures, delayed brides — all handled invisibly." },
  { label: "Bilingual Command", detail: "Flawless Hindi/English transitions. International guests and traditional elders both feel at home." },
  { label: "10,000+ Crowd Scale", detail: "Large-format events, open venues, stadium-scale command. Scale does not intimidate — it inspires." },
  { label: "Cultural Fluency", detail: "Deep fluency in Rajasthani traditions, NRI protocols, and regional ceremony formats." },
  { label: "Crisis-Proof Standard", detail: "If the PA fails, it becomes a crowd moment. The audience never sees the problem — only the performance." },
];

// Philosophy pillars from homepage 'SEO PHILOSOPHY PILLAR' section
const PHILOSOPHY = [
  {
    title: "Zero Paper Scripts",
    text: "A script is a wall between the host and the audience. By operating entirely unscripted, I maintain 100% eye contact with your guests, allowing for spontaneous wit, organic crowd-work, and the ability to pivot instantly if the event timeline shifts.",
  },
  {
    title: "Bilingual Command",
    text: "Hosting for the global elite requires a seamless transition between impeccable, formal English and the deep, cultural warmth of Hindi. I bridge that gap natively, ensuring international delegates and traditional family elders feel equally represented and engaged.",
  },
  {
    title: "10,000+ Crowd Mastery",
    text: "Scale does not intimidate; it inspires. Commanding a crowd of ten thousand requires a physical stage presence and vocal resonance that can unify massive exhibition halls and sprawling desert landscapes into a single, cohesive celebration.",
  },
];

// Venues from existing about PageClient
const VENUES = [
  { cat: "The Palaces", venues: "Rambagh Palace · Jai Mahal · City Palace Udaipur · Fairmont Jaipur", note: "Royal weddings & heritage events" },
  { cat: "The Luxury Hotels", venues: "Marriott Jaipur · The Leela · ITC Rajputana · Trident Jaipur", note: "Five-star property events" },
  { cat: "The Corporate Hubs", venues: "JECC Sitapura · Birla Auditorium · Clarks Amer", note: "National brand award nights & summits" },
  { cat: "The Farmhouse Circuit", venues: "Ajmer Road · Bhankrota · Jhotwara · Kukas", note: "1,000–1,500 guest large-format weddings" },
];

// Verified platforms from existing about PageClient
const PLATFORMS = [
  { name: "WedMeGood", href: "https://www.wedmegood.com/profile/anchor-yash-25628297" },
  { name: "WeddingWire", href: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166" },
  { name: "Justdial", href: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET" },
  { name: "ShaadiDukaan", href: "https://www.shaadidukaan.com/profile/yash-2" },
  { name: "StarClinch", href: "https://starclinch.com" },
  { name: "Google Reviews", href: "https://share.google/pMZGzEGOhXnJpLq5g" },
];

// ─────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────
const GoldText = ({ children, serif = false }) => (
  <span
    className={serif ? "font-display" : ""}
    style={{
      background: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionDivider = () => (
  <div className="flex items-center gap-5 py-2 max-w-6xl mx-auto px-5 md:px-10">
    <div className="flex-1 h-px bg-white/5" />
    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30" />
    <div className="w-1 h-1 rounded-full bg-[#D4AF37]/15" />
    <div className="flex-1 h-px bg-white/5" />
  </div>
);

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────
export default function AboutPageClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <main
      className="bg-[#050505] text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
    >
      {/* ══════════════════════════════════════
          1. MAGAZINE COVER HERO
          Full-bleed portrait, editorial bottom-left headline.
          Parallax on scroll. No JS-only effects — CSS handles overlay.
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] overflow-hidden"
        aria-label="Anchor Yash Soni — About hero"
      >
        {/* Parallax portrait */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
          aria-hidden="true"
        >
          <Image
            src="/intro-portrait-top.webp"
            alt="Anchor Yash Soni — Premium Event Anchor, Jaipur"
            fill
            priority
            quality={95}
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/65 via-transparent to-transparent pointer-events-none" />

        {/* Top-right editorial tag */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute top-0 right-0 pt-32 pr-8 text-right hidden md:block"
        >
          <p className="text-zinc-600 text-[10px] tracking-[0.38em] uppercase mb-1.5">
            Profile · Issue 01
          </p>
          <p className="text-zinc-600 text-[10px] tracking-[0.22em] uppercase">
            Jaipur, Rajasthan
          </p>
        </motion.div>

        {/* Bottom-left editorial headline */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-0 left-0 pb-10 md:pb-16 px-5 md:px-10 max-w-5xl"
        >
          <p
            className="text-[#B5952F]/70 text-[10px] tracking-[0.42em] uppercase mb-5 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-[#D4AF37]/45" />
            The Anchor · Jaipur
          </p>

          <h1
            className="text-[2.8rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-black leading-[0.88] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            <span className="text-white">The Man</span>
            <br />
            <span className="text-white">Behind</span>
            <br />
            <GoldText serif>The Mic.</GoldText>
          </h1>

          <p className="text-zinc-300 text-sm md:text-base max-w-md font-light leading-relaxed mb-7">
            Anchor Yash Soni — 700+ events, 4.9★, and a philosophy that
            changed how Jaipur thinks about what an anchor actually does.
          </p>

          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2.5 text-zinc-600"
          >
            <div className="w-px h-9 bg-gradient-to-b from-[#D4AF37]/55 to-transparent" />
            <span className="text-[10px] tracking-[0.32em] uppercase">
              Scroll to read
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          2. EDITORIAL BYLINE — opening quote + sidebar stats
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 pt-20 md:pt-28 pb-16 max-w-6xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.5px_1.8fr] gap-8 md:gap-14 items-start">
            {/* Stat sidebar */}
            <div className="md:pr-8">
              <p className="text-zinc-600 text-[10px] tracking-[0.32em] uppercase mb-8 font-semibold">
                At a Glance
              </p>
              <StatsHoverGroup stats={STATS} />
            </div>

            {/* Vertical rule */}
            <div className="hidden md:block w-px bg-white/6 self-stretch" />

            {/* Opening editorial prose — sourced from existing PageClient Ch.1 */}
            <div>
              <p
                className="text-2xl md:text-3xl text-zinc-200 leading-[1.5] font-bold italic mb-7"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                &ldquo;There are two types of anchors. The ones who announce.
                And the ones who connect. I chose the second path — and have
                never looked back.&rdquo;
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
                I am Yash Soni. Over the last 4+ years and 700+ events, I have
                hosted everything from intimate 50-guest birthday galas in
                Mansarovar to 1,500-person farmhouse Sangeets on Ajmer Road —
                from royal Varmala ceremonies at Rambagh Palace to national
                brand award nights at JECC Sitapura.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                What I do is not announcing. It is crowd psychology. It is
                cultural navigation. It is the invisible architecture that
                determines whether your guests remember your event as ordinary
                — or unforgettable.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════
          3. CHAPTER 01 — THE ORIGIN (Effect 1 on the image panel)
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <span
              className="text-[6rem] md:text-[9rem] font-black text-white/[0.035] leading-none select-none block -mb-8"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
              aria-hidden="true"
            >
              01
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              It Started With
              <br />
              <GoldText serif>a Spark.</GoldText>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              Five years ago, I picked up a microphone with one goal: kill the
              awkward silence. Not as a career move. Not following a plan. Just
              a genuine inability to watch a room full of people feel
              uncomfortable when it didn&apos;t have to be that way.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              While others memorised scripts, I studied the room. I observed
              what made crowds laugh, what made them lean in, and what made
              them check their phones. I learned from the hard moments — bad
              sound systems, tough crowds, power cuts mid-Sangeet, delayed
              brides that would make any announcer freeze.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Each failure taught me something no rehearsal could. And slowly,
              what started as a hobby became an obsession — and then a
              profession that has since taken me across Jaipur &amp; Rajasthan
              and into the rooms where the stakes are highest and the silences
              are most expensive.
            </p>
          </Reveal>

          {/* Effect 1 — GoldBorderCard wraps the portrait */}
          <Reveal delay={0.15} className="md:mt-14">
            <GoldBorderCard>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/intro-portrait-bottom.webp"
                  alt="Anchor Yash Soni on stage at a Jaipur event"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-zinc-500 text-[10px] uppercase tracking-widest">
                  Live — Jaipur, 2024
                </p>
              </div>
            </GoldBorderCard>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PULL QUOTE 1 — full-width, dramatic
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="px-5 md:px-10 py-16 md:py-20 max-w-4xl mx-auto text-center">
          <p
            className="text-2xl md:text-4xl lg:text-5xl font-bold italic text-zinc-200 leading-tight"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            &ldquo;My secret sauce isn&apos;t a fancy suit.
            <br className="hidden md:block" />
            It&apos;s <GoldText serif>adaptability.</GoldText>&rdquo;
          </p>
        </div>
      </Reveal>

      <SectionDivider />

      {/* ══════════════════════════════════════
          4. SPECIALIZATIONS — 2×2 grid with rich cards
      ══════════════════════════════════════ */}
      <section
        className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto"
        aria-labelledby="spec-heading"
      >
        <Reveal>
          <p className="text-[#B5952F] text-[10px] tracking-[0.32em] uppercase mb-3 font-semibold">
            What I Do
          </p>
          <h2
            id="spec-heading"
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Signature <GoldText>Specializations.</GoldText>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SPECIALIZATIONS.map((spec, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link
                href={spec.href}
                className="block h-full group"
                aria-label={`Learn more about ${spec.title}`}
              >
                <div
                  className="border border-white/8 rounded-2xl p-7 md:p-9 h-full transition-all duration-500 hover:-translate-y-1 hover:border-opacity-60 bg-zinc-950/50"
                  style={{
                    "--spec-accent": spec.accent,
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = spec.accent + "66")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                >
                  <div
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full mb-5"
                    style={{
                      color: spec.accent,
                      background: spec.accent + "18",
                      border: `1px solid ${spec.accent}40`,
                    }}
                  >
                    <spec.icon size={11} aria-hidden="true" />
                    {spec.tag}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {spec.title}
                  </h3>
                  <div
                    className="h-0.5 w-8 mb-4 rounded-full"
                    style={{ background: spec.accent }}
                  />
                  <p className="text-zinc-400 text-sm leading-relaxed font-light mb-5">
                    {spec.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors"
                    style={{ color: spec.accent }}
                  >
                    Explore <ArrowRight size={10} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════
          5. CHAPTER 02 — PHILOSOPHY
          Text-heavy. Sources: homepage Philosophy section verbatim.
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Image — left on desktop */}
          <Reveal className="md:order-1">
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/service-wedding.webp"
                alt="Anchor Yash Soni commanding a wedding crowd in Jaipur"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p className="text-[#B5952F] text-[10px] uppercase tracking-widest mb-1.5 font-bold">
                    Zero paper scripts
                  </p>
                  <p className="text-white text-xs leading-relaxed">
                    Not a single event in 700+ has been hosted from a written
                    script. Every word is earned live, in the room.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text — right on desktop */}
          <Reveal delay={0.12} className="md:order-2">
            <span
              className="text-[6rem] md:text-[9rem] font-black text-white/[0.035] leading-none select-none block -mb-8"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
              aria-hidden="true"
            >
              02
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              I Don&apos;t Manage Crowds.{" "}
              <GoldText serif>I Move Them.</GoldText>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              There are two types of anchors in Jaipur. The ones who announce
              — names, schedules, instructions. And the ones who connect —
              with the specific crowd in front of them, in the specific moment
              they are in.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              The difference is not talent. It is intent. The moment I step on
              stage, every decision I make — every pause, every pivot, every
              joke I choose not to make — is made in service of your
              crowd&apos;s experience, not my performance.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Whether it is a chaotic Sangeet with 800 dancing relatives on
              Ajmer Road, or a strictly formatted corporate award night at JECC
              Sitapura with a CEO in the front row — I switch gears instantly,
              without the audience ever seeing the gear shift. That is the
              craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PULL QUOTE 2 — full-bleed dark panel
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="bg-zinc-950/60 border-y border-white/5 py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-600 text-[10px] tracking-[0.42em] uppercase mb-7">
              The Standard
            </p>
            <p
              className="text-2xl md:text-4xl font-bold italic text-zinc-200 leading-tight"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              &ldquo;700 events. One standard.
              <br className="hidden md:block" />
              <GoldText serif>It has never dropped once.</GoldText>&rdquo;
            </p>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          6. CHAPTER 03 — THE CRAFT
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Reveal>
            <span
              className="text-[6rem] md:text-[9rem] font-black text-white/[0.035] leading-none select-none block -mb-8"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
              aria-hidden="true"
            >
              03
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              The Craft Behind
              <br />
              <GoldText serif>Every Stage.</GoldText>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-4">
          <Reveal>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              My games are not generic. For a Sangeet, I do not run
              &ldquo;Pass the Parcel.&rdquo; I run a Couple Trivia Roast that
              has the elders laughing and the younger crowd screaming. For a
              corporate awards night, I do not do ice-breakers that make
              people uncomfortable — I do rapid-fire industry formats that
              make people competitive and engaged.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              Every format — Sangeet, Haldi, Varmala, Bidaai, corporate gala,
              birthday milestone — is a different discipline. What works on a
              1,500-person Ajmer Road lawn at midnight will destroy the energy
              of an intimate 80-person anniversary dinner in C-Scheme. Reading
              that difference instantly, without a briefing, is the skill.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              The rule I live by: no one is forced to participate — but
              everyone will want to.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              And then there is crisis. A script cannot help when the
              electricity goes out mid-Sangeet. A script cannot help when the
              DJ&apos;s laptop crashes on the dance floor. A script cannot
              help when the bride needs 20 more minutes and 900 people are
              watching the stage, wondering what is happening.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              Over 700+ events, I have built a library of 50+ crowd
              interactions specifically designed for these gaps. When the
              unexpected happens — and it always does at least once — the
              audience does not see a problem. They see a planned moment.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
              That invisible competence is what a 4.9★ rating across 40+
              reviews actually measures.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════
          7. PHILOSOPHY PILLARS (Effect 1 — GoldBorderCard on hero pillar)
          Source: homepage SEO Philosophy Pillar section
      ══════════════════════════════════════ */}
      <section
        className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto"
        aria-labelledby="philosophy-heading"
      >
        <Reveal>
          <p className="text-[#B5952F] text-[10px] tracking-[0.32em] uppercase mb-3 font-semibold">
            The Yash Soni Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Mastering the{" "}
            <GoldText>Unscripted Moment.</GoldText>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-12 max-w-2xl font-light">
            True event anchoring is not about reading from a paper script or
            shouting over the music. It is about{" "}
            <strong className="text-white">
              vulnerability, presence, and unyielding energy
            </strong>
            . Built on the foundation of 700+ live stage hours where every
            word is calculated for impact but delivered with raw authenticity.
          </p>
        </Reveal>

        {/* First pillar wrapped in GoldBorderCard (Effect 1) — standout moment */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {PHILOSOPHY.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              {i === 0 ? (
                <GoldBorderCard className="h-full">
                  <div className="p-7 md:p-9 h-full">
                    <h3 className="text-white text-base font-bold mb-4 uppercase tracking-widest border-l-2 border-[#D4AF37] pl-4">
                      {p.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </GoldBorderCard>
              ) : (
                <div className="border border-white/8 rounded-2xl p-7 md:p-9 h-full bg-zinc-950/50 hover:border-[#D4AF37]/25 transition-colors">
                  <h3 className="text-white text-base font-bold mb-4 uppercase tracking-widest border-l-2 border-[#D4AF37] pl-4">
                    {p.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {p.text}
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════
          8. WHY YASH — credentials (Effect 3 GlowCard on each)
          Source: homepage WHY_ME + VS_DATA
      ══════════════════════════════════════ */}
      <section
        className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto"
        aria-labelledby="why-heading"
      >
        <Reveal>
          <p className="text-[#B5952F] text-[10px] tracking-[0.32em] uppercase mb-3 font-semibold">
            The Yash Soni Difference
          </p>
          <h2
            id="why-heading"
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Rated 4.9★ <GoldText>For a Reason.</GoldText>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {CREDENTIALS.map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <GlowCard className="h-full">
                <div className="p-6 md:p-7 h-full">
                  <CheckCircle2
                    size={20}
                    className="text-[#D4AF37] mb-4 opacity-80"
                    aria-hidden="true"
                  />
                  <h3 className="text-white text-sm font-bold mb-2.5 uppercase tracking-wider">
                    {c.label}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════
          9. VENUES — editorial list
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-16 md:py-24 max-w-6xl mx-auto">
        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Stages I&apos;ve <GoldText serif>Conquered.</GoldText>
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-lg leading-relaxed">
            You don&apos;t trust a pilot who hasn&apos;t flown. Over the last
            4+ years, I have held the mic at some of India&apos;s most iconic
            venues. I know their acoustics, their layouts, and their teams.
          </p>
        </Reveal>

        <div className="divide-y divide-white/5">
          {VENUES.map((v, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="py-5 flex flex-col md:flex-row md:items-center gap-2 md:gap-8 group hover:bg-zinc-900/30 -mx-5 md:-mx-10 px-5 md:px-10 transition-colors">
                <p className="text-[#B5952F] text-[10px] uppercase tracking-[0.2em] font-bold w-38 shrink-0">
                  {v.cat}
                </p>
                <p className="text-zinc-300 text-sm font-medium flex-1">
                  {v.venues}
                </p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider shrink-0">
                  {v.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="text-[#B5952F] text-xs font-bold uppercase tracking-widest mt-9">
            Know your venue is on this list? Then I already know the drill.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════
          10. GEOGRAPHIC REACH
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="bg-zinc-950/40 border-y border-white/5 px-5 md:px-10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={14} className="text-[#B5952F]" aria-hidden="true" />
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-semibold">
                Geographic Reach
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { region: "Rajasthan Roots", places: "Jaipur · Udaipur · Jodhpur · Jaisalmer · Pushkar · Kota · Ajmer" },
                { region: "Metro India", places: "Delhi NCR · Mumbai · Bangalore · Hyderabad · Chennai · Kolkata" },
                { region: "Hill & Beach", places: "Goa · Shimla · Mussoorie · Nainital · Manali · Andaman · Alibaug" },
                { region: "Heritage Circuits", places: "Ranthambore · Kumbhalgarh · Mandawa · Neemrana · Agra · Varanasi" },
              ].map((loc, i) => (
                <div key={i}>
                  <p className="text-[#B5952F] text-[9px] uppercase tracking-[0.2em] font-bold mb-2">
                    {loc.region}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {loc.places}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          11. VERIFIED PLATFORMS
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="border-b border-white/5 px-5 md:px-10 py-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest shrink-0">
              Verified on
            </p>
            {PLATFORMS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 text-xs font-medium hover:text-[#B5952F] transition-colors uppercase tracking-wider"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          12. CLOSING MANIFESTO — CTA
      ══════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-5 md:px-10 overflow-hidden">
        {/* Subtle BG image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/service-corporate.webp"
            alt=""
            fill
            className="object-cover opacity-8 grayscale"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-[#050505]/92" />
          {/* Gold radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_65%)]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-zinc-600 text-[10px] tracking-[0.42em] uppercase mb-9">
              The Promise
            </p>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-black italic text-white leading-[0.92] mb-7"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              &ldquo;Your Stage.
              <br />
              <GoldText serif>My Responsibility.&rdquo;</GoldText>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-11 leading-relaxed font-light">
              When you hand me the mic, you aren&apos;t just hiring a vendor.
              You are handing over the responsibility of your guests&apos;
              experience — the night they will talk about for years. I take
              that seriously. You enjoy the moment. I handle everything else.
            </p>

            {/* Signature */}
            <p
              className="text-4xl md:text-5xl font-black italic text-[#B5952F]/70 mb-12 tracking-tight"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
              aria-label="Signature: Yash Soni"
            >
              Yash Soni
            </p>

            {/* CTA */}
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              id="about-cta-whatsapp"
            >
              <button
                className="inline-flex items-center gap-3 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_45px_rgba(212,175,55,0.22)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Start the conversation with Anchor Yash Soni on WhatsApp"
              >
                <CalendarCheck size={17} aria-hidden="true" />
                Start the Conversation
              </button>
            </Link>

            <p className="text-zinc-700 text-[10px] uppercase tracking-widest mt-6">
              Calendar books 6–8 months in advance&nbsp;·&nbsp;No
              replacements sent
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER NAV — minimal internal links
      ══════════════════════════════════════ */}
      <div className="border-t border-white/5 px-5 md:px-10 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <Link
            href="/"
            className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-[#B5952F] transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              ["Wedding Anchor", "/wedding-anchor-jaipur"],
              ["Sangeet Host", "/sangeet-anchor-jaipur"],
              ["Corporate Events", "/corporate-event-anchor-jaipur"],
              ["Destination Weddings", "/destination-wedding-anchor"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-[#B5952F] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}