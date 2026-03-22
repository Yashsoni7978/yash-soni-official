"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20read%20your%20story%20and%20I%27d%20love%20to%20discuss%20my%20event.";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
  .serif { font-family: 'Playfair Display', Georgia, serif; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .fade-up { animation: fadeUp 0.9s ease forwards; }
  .fade-up-d1 { animation-delay: 0.15s; opacity: 0; }
  .fade-up-d2 { animation-delay: 0.3s; opacity: 0; }
  .fade-up-d3 { animation-delay: 0.45s; opacity: 0; }
  .shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
`;

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────
const G = ({ children, serif = false, shimmer = false }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${shimmer ? "shimmer" : ""} ${serif ? "serif" : ""}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Rule = () => (
  <div className="flex items-center gap-4 py-2">
    <div className="flex-1 h-px bg-white/8" />
    <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
    <div className="flex-1 h-px bg-white/8" />
  </div>
);

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>

      {/* ══════════════════════════════════════
          1. MAGAZINE COVER HERO
          Full-bleed portrait. Large editorial
          title bottom-left. Date/issue top-right.
          Feels like a GQ or Vogue profile opener.
      ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax portrait */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="/intro-portrait-top.webp"
            alt="Anchor Yash Soni — Premium Event Anchor, Jaipur"
            fill priority quality={95}
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlays — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent" />

        {/* Top-right editorial tag */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute top-0 right-0 pt-28 pr-6 md:pr-10 text-right hidden md:block"
        >
          <p className="text-zinc-600 text-[10px] tracking-[0.35em] uppercase mb-1">Profile</p>
          <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase">Jaipur, Rajasthan</p>
        </motion.div>

        {/* Bottom-left: the editorial headline */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-0 left-0 pb-10 md:pb-16 px-5 md:px-10 max-w-4xl"
        >
          {/* Issue line */}
          <p className="fade-up text-[#D4AF37]/70 text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#D4AF37]/50" />
            The Anchor · Jaipur
          </p>

          {/* Magazine-style H1 */}
          <h1 className="fade-up fade-up-d1 serif text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-[0.88] tracking-tight mb-5">
            <span className="text-white">The Man</span><br />
            <span className="text-white">Behind</span><br />
            <G serif shimmer>The Mic.</G>
          </h1>

          <p className="fade-up fade-up-d2 text-zinc-300 text-sm md:text-base max-w-md font-light leading-relaxed mb-6">
            Anchor Yash Soni — 1,100+ events, 4.9★, and a philosophy that changed how Jaipur thinks about what an anchor actually does.
          </p>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="fade-up fade-up-d3 flex items-center gap-2 text-zinc-600"
          >
            <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to read</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          2. EDITORIAL BYLINE
          Like the opening paragraph of a magazine
          profile — sets the tone, not a sales pitch.
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 pt-16 md:pt-24 pb-12 max-w-6xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_2px_1.6fr] gap-8 md:gap-12 items-start">
            {/* Left: stat column — editorial sidebar style */}
            <div className="md:pr-8">
              <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase mb-8 font-medium">At a Glance</p>
              <div className="space-y-7">
                {[
                  { n: "1100+", l: "Events hosted" },
                  { n: "10,000+", l: "Largest crowd commanded" },
                  { n: "4.9★", l: "Rating — 200+ reviews" },
                  { n: "8+", l: "Years on stage" },
                  { n: "70+", l: "Corporate brands served" },
                ].map((s) => (
                  <div key={s.n}>
                    <p className="text-3xl md:text-4xl font-black leading-none mb-1">
                      <G>{s.n}</G>
                    </p>
                    <p className="text-zinc-500 text-xs tracking-wider uppercase">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical rule */}
            <div className="hidden md:block w-px bg-white/8 self-stretch" />

            {/* Right: opening editorial prose */}
            <div>
              <p className="serif text-2xl md:text-3xl text-zinc-200 leading-relaxed font-bold italic mb-7">
                &ldquo;There are two types of anchors. The ones who announce. And the ones who connect. I chose the second path — and have never looked back.&rdquo;
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
                I am Yash Soni. Over the last 8+ years and 1,100+ events, I have hosted everything from intimate 50-guest birthday galas in Mansarovar to 1,500-person farmhouse Sangeets on Ajmer Road — from royal Varmala ceremonies at Rambagh Palace to national brand award nights at JECC Sitapura.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                What I do is not announcing. It is crowd psychology. It is cultural navigation. It is the invisible architecture that determines whether your guests remember your event as ordinary — or unforgettable.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="px-5 md:px-10 max-w-6xl mx-auto"><Rule /></div>

      {/* ══════════════════════════════════════
          3. CHAPTER 01 — THE ORIGIN
          Full prose. Editorial. No bullets.
          Photo breaks the grid.
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <span className="serif text-[7rem] md:text-[10rem] font-black text-white/[0.04] leading-none select-none block -mb-8">01</span>
            <h2 className="serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              It Started With<br /><G serif>a Spark.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              Five years ago, I picked up a microphone with one goal: kill the awkward silence. Not as a career move. Not following a plan. Just a genuine inability to watch a room full of people feel uncomfortable when it didn&apos;t have to be that way.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              While others memorised scripts, I studied the room. I observed what made crowds laugh, what made them lean in, and what made them check their phones. I learned from the hard moments — bad sound systems, tough crowds, power cuts mid-Sangeet, delayed brides that would make any announcer freeze.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Each failure taught me something no rehearsal could. And slowly, what started as a hobby became an obsession — and then a profession that has since taken me across India and into the rooms where the stakes are highest and the silences are most expensive.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:mt-16">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/intro-portrait-bottom.webp"
                alt="Anchor Yash Soni on stage at a Jaipur event"
                fill quality={100}
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-zinc-500 text-[10px] uppercase tracking-widest">
                Live — Jaipur, 2024
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PULL QUOTE 1 — dramatic, full-width
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="px-5 md:px-10 py-14 md:py-20 max-w-4xl mx-auto text-center">
          <p className="serif text-2xl md:text-4xl lg:text-5xl font-bold italic text-zinc-200 leading-tight">
            &ldquo;My secret sauce isn&apos;t a fancy suit.<br className="hidden md:block" />
            It&apos;s <G serif>adaptability.</G>&rdquo;
          </p>
        </div>
      </Reveal>

      <div className="px-5 md:px-10 max-w-6xl mx-auto"><Rule /></div>

      {/* ══════════════════════════════════════
          4. CHAPTER 02 — PHILOSOPHY
          Reversed layout. Image first on desktop.
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Image — left on desktop, top on mobile */}
          <Reveal className="md:order-1">
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/service-wedding.webp"
                alt="Anchor Yash Soni commanding a wedding crowd in Jaipur"
                fill quality={100}
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 to-transparent" />
              {/* Stat overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-1 font-bold">Zero paper scripts</p>
                  <p className="text-white text-xs leading-relaxed">
                    Not a single event in 1,100+ has been hosted from a written script. Every word is earned live, in the room.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text — right on desktop */}
          <Reveal delay={0.12} className="md:order-2">
            <span className="serif text-[7rem] md:text-[10rem] font-black text-white/[0.04] leading-none select-none block -mb-8">02</span>
            <h2 className="serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              I Don&apos;t Manage<br />Crowds. <G serif>I Move Them.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              There are two types of anchors in Jaipur. The ones who announce — names, schedules, instructions. And the ones who connect — with the specific crowd in front of them, in the specific moment they are in.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              The difference is not talent. It is intent. The moment I step on stage, every decision I make — every pause, every pivot, every joke I choose not to make — is made in service of your crowd&apos;s experience, not my performance.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Whether it is a chaotic Sangeet with 800 dancing relatives on Ajmer Road, or a strictly formatted corporate award night at JECC Sitapura with a CEO in the front row — I switch gears instantly, without the audience ever seeing the gear shift. That is the craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PULL QUOTE 2
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="bg-zinc-950/60 border-y border-white/5 py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mb-6">The Standard</p>
            <p className="serif text-2xl md:text-4xl font-bold italic text-zinc-200 leading-tight">
              &ldquo;1,100 events. One standard.<br className="hidden md:block" />
              <G serif>It has never dropped once.</G>&rdquo;
            </p>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          5. CHAPTER 03 — THE CRAFT
          Prose-heavy, specific, authentic.
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto md:mx-0">
          <Reveal>
            <span className="serif text-[7rem] md:text-[10rem] font-black text-white/[0.04] leading-none select-none block -mb-8">03</span>
            <h2 className="serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              The Craft Behind<br /><G serif>Every Stage.</G>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-2">
          <Reveal>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              My games are not generic. For a Sangeet, I do not run &quot;Pass the Parcel.&quot; I run a Couple Trivia Roast that has the elders laughing and the younger crowd screaming. For a corporate awards night, I do not do ice-breakers that make people uncomfortable — I do rapid-fire industry formats that make people competitive and engaged.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              Every format — Sangeet, Haldi, Varmala, Bidaai, corporate gala, birthday milestone — is a different discipline. What works on a 1,500-person Ajmer Road lawn at midnight will destroy the energy of an intimate 80-person anniversary dinner in C-Scheme. Reading that difference instantly, without a briefing, is the skill.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              The rule I live by: no one is forced to participate — but everyone will want to.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              And then there is crisis. A script cannot help when the electricity goes out mid-Sangeet. A script cannot help when the DJ&apos;s laptop crashes on the dance floor. A script cannot help when the bride needs 20 more minutes and 900 people are watching the stage, wondering what is happening.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-5">
              Over 1,100+ events, I have built a library of 50+ crowd interactions specifically designed for these gaps. When the unexpected happens — and it always does at least once — the audience does not see a problem. They see a planned moment.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
              That invisible competence is what a 4.9★ rating across 200+ reviews actually measures.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="px-5 md:px-10 max-w-6xl mx-auto"><Rule /></div>

      {/* ══════════════════════════════════════
          6. VENUES — editorial list, not a grid
      ══════════════════════════════════════ */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="serif text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            Stages I&apos;ve <G serif>Conquered.</G>
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-lg leading-relaxed">
            You don&apos;t trust a pilot who hasn&apos;t flown. Over the last 8 years, I have held the mic at some of India&apos;s most iconic venues. I know their acoustics, their layouts, and their teams.
          </p>
        </Reveal>

        {/* Editorial venue list — horizontal lines, not cards */}
        <div className="divide-y divide-white/5">
          {[
            { cat: "The Palaces", venues: "Rambagh Palace · Jai Mahal · City Palace Udaipur · Fairmont Jaipur", note: "Royal weddings & heritage events" },
            { cat: "The Luxury Hotels", venues: "Marriott Jaipur · The Leela · ITC Rajputana · Trident Jaipur", note: "Five-star property events" },
            { cat: "The Corporate Hubs", venues: "JECC Sitapura · Birla Auditorium · Clarks Amer", note: "National brand award nights & summits" },
            { cat: "The Farmhouse Circuit", venues: "Ajmer Road · Bhankrota · Jhotwara · Kukas", note: "1,000–1,500 guest large-format weddings" },
          ].map((v, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="py-5 flex flex-col md:flex-row md:items-center gap-2 md:gap-8 group hover:bg-zinc-900/30 -mx-5 md:-mx-10 px-5 md:px-10 transition-colors">
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold w-36 shrink-0">{v.cat}</p>
                <p className="text-zinc-300 text-sm font-medium flex-1">{v.venues}</p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider shrink-0">{v.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mt-8">
            Know your venue is on this list? Then I already know the drill.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════
          7. PLATFORMS — minimal, inline
          Not a marquee. More editorial.
      ══════════════════════════════════════ */}
      <Reveal>
        <div className="border-y border-white/5 px-5 md:px-10 py-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest shrink-0">Verified on</p>
            {[
              { name: "WedMeGood", href: "https://www.wedmegood.com/profile/anchor-yash-25628297" },
              { name: "WeddingWire", href: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166" },
              { name: "Justdial", href: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET" },
              { name: "ShaadiDukaan", href: "https://www.shaadidukaan.com/profile/yash-2" },
              { name: "StarClinch", href: "https://starclinch.com" },
              { name: "Google Reviews", href: "https://share.google/pMZGzEGOhXnJpLq5g" },
            ].map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                className="text-zinc-500 text-xs font-medium hover:text-[#D4AF37] transition-colors uppercase tracking-wider">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          8. THE CLOSING MANIFESTO
          Full-bleed dark section. Large serif quote.
          Signature. ONE CTA. Nothing else.
      ══════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-5 md:px-10 overflow-hidden">
        {/* Subtle BG */}
        <div className="absolute inset-0">
          <Image
            src="/service-corporate.webp"
            alt=""
            fill quality={100}
            className="object-cover opacity-10 grayscale"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#050505]/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mb-8">The Promise</p>
            <h2 className="serif text-4xl md:text-6xl lg:text-7xl font-black italic text-white leading-[0.95] mb-6">
              &ldquo;Your Stage.<br />
              <G serif shimmer>My Responsibility.&rdquo;</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
              When you hand me the mic, you aren&apos;t just hiring a vendor. You are handing over the responsibility of your guests&apos; experience — the night they will talk about for years. I take that seriously. You enjoy the moment. I handle everything else.
            </p>

            {/* Handwritten-style signature */}
            <p className="serif text-4xl md:text-6xl font-black italic text-[#D4AF37]/75 mb-12 tracking-tight">
              Yash Soni
            </p>

            {/* Single, final CTA */}
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-3 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] active:scale-95">
                <CalendarCheck size={17} /> Start the Conversation
              </button>
            </a>

            <p className="text-zinc-700 text-[10px] uppercase tracking-widest mt-6">
              Calendar books 6–8 months in advance &nbsp;·&nbsp; No replacements sent
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER NAV — minimal internal links
      ══════════════════════════════════════ */}
      <div className="border-t border-white/5 px-5 md:px-10 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <Link href="/" className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
            ← Back to Home
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              ["Best Anchor Jaipur", "/best-anchor-in-jaipur"],
              ["Wedding Anchor", "/wedding-anchor-jaipur"],
              ["Sangeet Host", "/sangeet-anchor-jaipur"],
              ["Corporate Events", "/corporate-event-anchor-jaipur"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
