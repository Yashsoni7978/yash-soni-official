"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Trophy, Flag, Timer, Mic2, Star, Youtube, Instagram, MapPin, CheckCircle2, CalendarCheck, Plus, Minus, Users } from "lucide-react";
import { AnimatedStatsCard } from "../../components/AnimatedStatsCard";

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20sports%20commentator%20and%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability.";
const GOLD = "#D4AF37";

const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
`;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const B = ({ children, className = "" }) => (
  <span className={`text-[#D4AF37] ${className}`}>{children}</span>
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

const SectionHeading = ({ subtitle, title, align = "left", dark = false }) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        {align === "center" && <span className="w-8 h-px bg-[#D4AF37]" />}
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
        <span className="w-8 h-px bg-[#D4AF37]" />
      </div>
      <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black leading-tight ${dark ? "text-black" : "text-white"}`}>
        {title}
      </h2>
    </motion.div>
  </div>
);

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { value: "50+", label: "Sports Leagues", sub: "Hosted locally & nationally", icon: Trophy },
  { value: "10,000+", label: "Runners Hyped", sub: "Marathons & Cyclothons", icon: Flag },
  { value: "4.9★", label: "Client Rating", sub: "Verified reviews", icon: Star },
  { value: "8+", label: "Years Experience", sub: "Live commentary", icon: Mic2 },
];

const FORMATS = [
  {
    icon: Trophy,
    title: "Cricket Leagues",
    desc: "Live play-by-play commentary, pre-match hype, and post-match presentations. Keeping the stadium electric from the first ball to the final over." },
  {
    icon: Flag,
    title: "Marathons & Cyclothons",
    desc: "Start-line motivation, finishing line recognition, and continuous crowd engagement to keep athletes and spectators energized." },
  {
    icon: Users,
    title: "Corporate Sports Days",
    desc: "Bringing professional commentary to amateur corporate matches. Making employees feel like superstars while maintaining a fun, team-building atmosphere." },
  {
    icon: Timer,
    title: "Fitness Festivals",
    desc: "High-octane hosting for fitness challenges, CrossFit competitions, and wellness summits." },
  {
    icon: Mic2,
    title: "Esports Tournaments",
    desc: "Fast-paced, highly analytical, and wildly energetic shoutcasting for regional and national esports tournaments." },
  {
    icon: Star,
    title: "Athletic Meets",
    desc: "Professional tracking of multiple events simultaneously, ensuring the crowd knows exactly what is happening across the track and field." },
];

const VENUES = [
  {
    venue: "SMS Stadium",
    type: "National Level Tournaments",
    desc: "Jaipur's premier sports complex. High-stakes matches, marathons, and state-level athletic meets.",
    keywords: ["SMS Stadium Host", "Sports Anchor SMS"] },
  {
    venue: "Jaipur National University Ground",
    type: "Cricket Leagues",
    desc: "Home to major corporate and regional cricket leagues requiring high-energy live commentary.",
    keywords: ["JNU Ground Anchor", "Cricket Commentator Jaipur"] },
  {
    venue: "JLN Marg Route",
    type: "Marathons & Cyclothons",
    desc: "The classic marathon route in Jaipur. Early morning start-line hype and continuous engagement.",
    keywords: ["Marathon Host Jaipur", "Cyclothon Anchor"] },
  {
    venue: "Premium Corporate Turfs",
    type: "Corporate Sports",
    desc: "Box cricket leagues, futsal tournaments, and corporate weekend sports events across top turf venues in Jaipur.",
    keywords: ["Turf Cricket Commentator", "Corporate Sports Host"] },
];

const CAPABILITIES = [
  {
    title: "Bilingual Play-by-Play",
    desc: "Seamlessly switching between high-energy Hindi for local flavour and professional English for brand appeal. The entire crowd stays engaged." },
  {
    title: "Downtime Engagement",
    desc: "Drinks breaks, strategic timeouts, and delays are when the anchor's job begins. I keep the crowd hyped with interactive games and sponsor shoutouts." },
  {
    title: "Post-Match Presentations",
    desc: "Professional, broadcast-style award distributions. Interviewing the Man of the Match and team owners with the respect and gravitas the moment requires." },
  {
    title: "The Hype Engine",
    desc: "Sports is about emotion. I bring relentless, unflagging energy to the mic for 8+ hours, ensuring the final match feels just as electric as the first." },
];

const PROCESS = [
  {
    step: "01",
    title: "Tournament Briefing",
    desc: "Understanding the rules, the teams, the sponsor requirements, and the specific vibe (professional vs. highly informal) you want for the tournament." },
  {
    step: "02",
    title: "Player & Team Research",
    desc: "A good commentator knows the players. I gather stats, rivalries, and team history to bring context and drama to the live commentary." },
  {
    step: "03",
    title: "Live Commentary",
    desc: "High-octane play-by-play calling, crowd interaction, and seamless integration of sponsor messages during the live action." },
  {
    step: "04",
    title: "The Presentation",
    desc: "Closing the event with a structured, professional award ceremony that honours the athletes and provides great photo ops for sponsors." },
];

const TESTIMONIALS = [
  {
    name: "League Organizer",
    quote: "Yash brought international-level commentary to our local cricket league. The players felt like stars, the crowd was hooked, and the sponsors were thrilled with how seamlessly he integrated their names.",
    event: "Corporate Cricket League · Jaipur",
    guests: "20 Teams" },
  {
    name: "Marathon Director",
    quote: "Keeping 5,000 runners energized at 5 AM is not easy, but Yash did it effortlessly. His start-line countdowns are legendary.",
    event: "Jaipur City Marathon · JLN Marg",
    guests: "5,000+ Runners" },
  {
    name: "HR Head",
    quote: "We hired Yash for our annual corporate sports day. He turned a casual Sunday tournament into a highly competitive, incredibly entertaining event. He's easily the best sports host we've worked with.",
    event: "Corporate Sports Day · Turf Club Jaipur",
    guests: "500 Employees" },
];

const FAQS = [
  {
    q: "Who is the best sports commentator and anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's highly sought-after sports commentator, host, and anchor. He brings high-energy live commentary, engaging crowd interaction, and deep sports knowledge to marathons, cricket leagues, corporate sports events, and fitness festivals." },
  {
    q: "What types of sports events do you host?",
    a: "I host a wide variety of sports events including cricket tournaments, marathons, football leagues, corporate sports days, fitness challenges, and esports tournaments across Jaipur and Rajasthan." },
  {
    q: "Can you provide live play-by-play commentary in both English and Hindi?",
    a: "Yes. Bilingual commentary is a strong suit. Switching seamlessly between high-energy Hindi and professional English ensures the entire crowd, regardless of their preferred language, stays engaged and hyped during the matches." },
  {
    q: "Do you handle post-match presentations and award ceremonies?",
    a: "Absolutely. Hosting the post-match presentation, interviewing the Man of the Match, interacting with team owners, and managing the trophy distribution is handled with broadcast-level professionalism." },
  {
    q: "How do you keep the crowd engaged during breaks in the game?",
    a: "The downtime in sports is when the anchor's job truly begins. I use interactive crowd games, music coordination, sponsor shoutouts, and live interviews to keep the energy peaking even when the play is paused." },
  {
    q: "Do you travel for sports events outside Jaipur?",
    a: "Yes, I regularly travel across Rajasthan and India to host regional and national level sports events, leagues, and marathons." },
];

const RELATED = [
  { icon: Trophy, label: "Corporate Events", href: "/corporate-event-anchor-jaipur", desc: "Award Nights & Summits" },
  { icon: Users, label: "Team Building", href: "/team-building-host", desc: "Employee engagement" },
  { icon: Mic2, label: "Celebrity Events", href: "/celebrity-public-events-host", desc: "Launches & public events" },
  { icon: Star, label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur", desc: "All event formats" },
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
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 pt-4">
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
export default function SportsCommentator() {
  return (
    <main className="bg-transparent relative z-10 text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      
      {/* BREADCRUMB */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Sports Commentator Jaipur</span>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/30 z-10" />
          <Image src="/gallery-1.webp"
            alt="Best sports commentator and anchor in Jaipur — Yash Soni"
            fill priority
            className="object-cover opacity-50 grayscale"
            sizes="100vw"
            quality={75} />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-10">
          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-[#D4AF37]/10 backdrop-blur-md mb-8">
                <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                  4.9★ · Top Sports Anchor in Jaipur
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight uppercase">
                Hype<br /><B>The Crowd.</B>
              </h1>
              
              <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-3 border-l-4 border-[#D4AF37] pl-6">
                Live commentary, relentless energy, and professional play-by-play. Jaipur's top sports anchor for cricket leagues, marathons, corporate sports days, and fitness summits.
              </p>
              
              <p className="text-zinc-600 text-sm mb-8 pl-6">
                50+ Leagues &nbsp;·&nbsp; Bilingual Commentary &nbsp;·&nbsp; Broadcast-ready
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="gold-animated-btn w-full sm:w-64 h-16 text-[#D4AF37] font-black uppercase tracking-widest text-xs md:text-sm">
                    <span>Book Now →</span>
                  </button>
                </Link>
                <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="gold-animated-btn w-full sm:w-64 h-16 text-white font-bold uppercase tracking-widest text-[11px] md:text-xs">
                    <span className="flex items-center gap-2"><Youtube className="w-4 h-4" /> Watch Action</span>
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5 py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.1} className="w-full h-full flex">
                <AnimatedStatsCard value={s.value} label={s.label} sub={s.sub} icon={s.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16 md:py-24 px-5 md:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <SectionHeading subtitle="The Energy" title="Play-By-Play. High Octane." />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              Sports commentary isn't just about reading scores. It's about building the narrative, hyping the athletes, and keeping the crowd on their feet. Whether it's a marathon at 5 AM or a corporate cricket final under the floodlights, <strong className="text-white">I bring the stadium to life.</strong>
            </p>
            <div className="space-y-6">
              {CAPABILITIES.map((c, i) => (
                <div key={i} className="flex gap-4 group">
                  <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#D4AF37] transition-colors">{c.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:border-[#D4AF37]/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-2">{s.value}</div>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE GALLERY (Replacement for video reel since we want normal pictures) */}
      <section className="py-16 md:py-24 bg-transparent relative z-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeading subtitle="The Action" title="Live On Ground." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="relative aspect-video rounded-[20px] transition-all duration-300 bg-[linear-gradient(163deg,#FFFFF0_0%,#D4AF37_100%)] hover:shadow-[0_0_30px_1px_rgba(212,175,55,0.30)] group/card">
              <div className="absolute inset-0 bg-[#050505] rounded-[20px] transition-all duration-200 group-hover/card:scale-[0.98] overflow-hidden z-10">
                <Image src="/gallery-2.webp" alt="Yash Soni Sports Host" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
              </div>
            </div>
            <div className="relative aspect-video rounded-[20px] transition-all duration-300 bg-[linear-gradient(163deg,#FFFFF0_0%,#D4AF37_100%)] hover:shadow-[0_0_30px_1px_rgba(212,175,55,0.30)] group/card">
              <div className="absolute inset-0 bg-[#050505] rounded-[20px] transition-all duration-200 group-hover/card:scale-[0.98] overflow-hidden z-10">
                <Image src="/gallery-4.webp" alt="Anchor Yash Soni Commentary" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
            <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
              <Youtube size={16} /> Watch on YouTube
            </a>
            <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
              <Instagram size={16} /> View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-16 md:py-24 px-5 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Formats" title="Sports I Host." align="center" />
          <div className="grid md:grid-cols-3 gap-5">
            {FORMATS.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-7 rounded-2xl hover:border-[#D4AF37]/40 transition-all group hover:-translate-y-1 duration-300 h-full">
                  <div className="mb-5 bg-black/40 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                    <f.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{f.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE COVERAGE */}
      <section className="py-16 md:py-24 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Jaipur Venues" title="Commanding The Stadiums." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all group bg-zinc-900/20 hover:bg-zinc-900/50">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={15} className="text-[#D4AF37] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-0.5">{v.type}</p>
                      <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">{v.venue}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed ml-6 mb-3">{v.desc}</p>
                  <div className="flex flex-wrap gap-1.5 ml-6">
                    {v.keywords.map((kw, j) => (
                      <span key={j} className="text-[9px] text-zinc-700 border border-zinc-800 px-2 py-0.5 rounded-full">{kw}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Workflow" title="From Toss to Trophy." align="center" />
          <div className="mt-10 relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/8 -translate-x-1/2 hidden md:block" />
            {PROCESS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 relative ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-1/2 top-8 w-3 h-3 bg-[#D4AF37] rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 hidden md:block" />
                  <div className={`w-full md:w-1/2 p-7 bg-zinc-900/50 border border-white/8 rounded-2xl hover:border-[#D4AF37]/30 transition-colors ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-4xl font-black text-[#D4AF37]/20 mb-3 block">{p.step}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Verified Reviews" title="What Organizers Say." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group cursor-pointer">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} fill={GOLD} className="text-[#B5952F]" />
                    ))}
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

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Vendor Questions" title="Sports Anchor FAQ." align="center" />
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-sports-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.025] leading-none whitespace-nowrap">COMMENTATOR</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-6 font-bold">Book the Host</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight uppercase">
              Ready to <B>Hype</B><br />The Stadium?
            </h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Don't leave your sports event's energy to chance. Book Jaipur's most dynamic sports commentator.
            </p>
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.15)] active:scale-95">
                <CalendarCheck size={16} /> Check Availability
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}