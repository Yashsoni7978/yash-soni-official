"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plane, Plus, ShieldCheck, Ship, Sparkles, Star, Users, Waves } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Alibaug.%20Can%20you%20check%20availability%3F";

const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,#a8891a 0%,#D4AF37 30%,#f0d878 50%,#D4AF37 70%,#a8891a 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes slowzoom{0%{transform:scale(1)}100%{transform:scale(1.1)}}
  .slow-zoom{animation:slowzoom 18s ease-in-out infinite alternate;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 40s linear infinite;}
  .mask-fade{-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);}
`;

const G = ({ children }) => (
  <span
    className="bg-clip-text text-transparent bg-cover bg-center"
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    const to = parseInt(target.replace(/\D/g, ""), 10);
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2000, 1);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
}

const FAQItem = ({ q, a, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all mt-0.5 ${open ? "bg-[#D4AF37] text-black" : "border border-white/30"}`}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const ALIBAUG_IDENTITY = [
  {
    icon: Ship,
    title: "Mumbai's Billionaire Backyard",
    desc: "Alibaug is not a massive thousand-guest banquet market. It is the ultra-exclusive weekend retreat for Mumbai's billionaires and top-tier corporate families (arriving via Ro-Ro or private speedboat). The guest lists here are highly curated, meaning the anchor cannot rely on 'stage broadcasting'. The hosting must be exceptionally intimate, highly conversational, and flawlessly matched to the executive pedigree of the audience."
  },
  {
    icon: Gem,
    title: "Ultra-Luxury Villa Pacing",
    desc: "Events here frequently take place at extremely exclusive venues like The Mansion House or private coastal estates. Unlike massive lawns, these spaces are architecturally fragmented into pool decks, indoor lounges, and cabanas. Yash excels at 'timeline stitching'—using intelligent vocal pacing and physical movement to pull guests seamlessly through these fragmented luxury spaces without ever breaking the party momentum."
  },
  {
    icon: Sparkles,
    title: "The High-Society Transition",
    desc: "Alibaug Sangeets start with heavy corporate/business networking and transition into intense, all-night private parties. An amateur host fails to bridge these two extremes. Yash acts as the catalyst—navigating the formal executive English requirements of the evening reception flawlessly, before instantly converting into high-voltage, unscripted Hindi/English hype to drive the midnight dance floor."
  },
];

const SERVICES = [
  {
    icon: Crown,
    title: "Ultra-Premium VIP Hosting",
    desc: "Absolute executive-grade English mastery for highly curated, billion-dollar guest lists. Ensuring the deep traditional Marwari/Gujarati roots are respected while delivering an elite metropolitan experience.",
    tag: "Exclusive"
  },
  {
    icon: Music2,
    title: "Intimate High-Voltage Sangeets",
    desc: "Generating overwhelming crowd momentum in highly constrained luxury villa environments. Completely unscripted hosting that reacts organically, turning 150 VIPs into a roaring dance floor.",
    tag: "Energy"
  },
  {
    icon: Building2,
    title: "Mansion House Logistics",
    desc: "Seamless acoustic and schedule management across the premier private estates of Alibaug, guiding the crowd naturally between the ceremony decks and the after-party zones.",
    tag: "Luxury Scale"
  },
  {
    icon: Briefcase,
    title: "Corporate Retreat Moderation",
    desc: "Flawless unscripted English execution for C-suite offsites arriving from South Mumbai. Managing highly intelligent panels and leadership summits without relying on paper notes.",
    tag: "Executive"
  },
];

const VENUES = [
  { name: "The Mansion House", tag: "Ultra-Luxury VIP Estate", icon: Crown },
  { name: "Radisson Blu Alibaug", tag: "Premium Scale Hub", icon: Building2 },
  { name: "Outpost @ Alibaug", tag: "Boutique Intimacy", icon: Gem },
  { name: "U Tropicana", tag: "Poolside Elegance", icon: Waves },
  { name: "Awas Beach Estates", tag: "Private VIP Coastline", icon: MapPin },
  { name: "Silvanus Forest", tag: "Exclusive Retreats", icon: Sparkles },
  { name: "Bohemyan Blue", tag: "Chic Luxury Camping", icon: Heart },
  { name: "Mango Beach House", tag: "Coastal Intimacy", icon: Ship },
];

const VS = [
  { problem: "Using 'club MC' yelling that immediately alienates an ultra-premium Mumbai VIP guest list", fix: "Intimate, highly conversational executive-grade delivery matching the crowd's pedigree" },
  { problem: "Losing control of a 150-pax party drifting across a private villa's fragmented layout", fix: "Mastery of timeline-stitching and acoustic centralizing to pull the entire party together" },
  { problem: "Being unable to bridge the formal C-suite networking with the high-energy Sangeet", fix: "Executing an intense psychological transition that drags the VIPs directly to the dance floor" },
  { problem: "Reading rigidly from paper notes during a highly exclusive family Sangeet performance", fix: "100% unscripted flow—maintaining absolute eye contact and reacting to inside jokes in real-time" },
  { problem: "Failing to fuse the cultures during a massive Mumbai-Gujarati cross-border wedding", fix: "Bilingual emotional intelligence that bridges modern urban executives directly with local elders" },
  { problem: "Sound dispersion killing the Varmala energy on an open coastal property lawn", fix: "Aggressive, tight-knit crowd-condensing frameworks that force acoustic intimacy" },
];

const TESTIMONIALS = [
  {
    name: "Corporate Director — Mumbai Headquarters",
    quote: "Alibaug weddings are incredibly intimate and highly scrutinized because the guest list is pure VIP; our entire C-suite was there. Yash anchored our Sangeet at The Mansion House flawlessly. Phenomenal English dialect mixed with perfect comedic timing—he didn't just host the event, he controlled the entire weekend.",
    event: "Destination Sunset Wedding · The Mansion House"
  },
  {
    name: "Shah & Agarwal Families",
    quote: "We chose Radisson Blu for a 300-guest luxury event. The challenge was transitioning the crowd from the massive lawn ceremony to the indoor parties dynamically. Yash was absolute magic. He brought a totally unscripted, high-voltage energy that kept the Mumbai crowd hyped till 3 AM. A master at what he does.",
    event: "Cross-Cultural Sangeet · Radisson Blu Alibaug"
  },
  {
    name: "Managing Partner — National Law Firm",
    quote: "We hosted an exclusive multi-day partner retreat at a private estate in Mandwa. The challenge was keeping the executive team focused on strategy during the day, while hosting intense networking galas at night. Yash's intellectual, unscripted hosting was incredibly sharp. Complete, unshakeable authority.",
    event: "Leadership Retreat Gala · Mandwa Private Estate"
  },
];

const FAQS = [
  {
    q: "How do you handle the highly intimate, VIP dynamic of an Alibaug villa wedding?",
    a: "Alibaug is the opposite of a mega-banquet. You aren't broadcasting to a thousand strangers; you are hosting 150 incredibly high-net-worth individuals. I utilize 'Conversational Dominance'—putting down the heavy 'stage voice' in favor of sharp, highly intelligent, interactive English that treats the VIPs as participants rather than spectators. It instantly shatters the invisible wall between the stage and the audience."
  },
  {
    q: "Half our guests are traditional Gujarati/Marwari, and half are modern corporate friends from South Bombay. Can you manage both?",
    a: "Absolutely. This 'Cross-Cultural Collision' is my primary specialty. I provide flawless, executive-grade English anchoring to ensure your corporate guests stay locked in, while seamlessly code-switching into deep, respectful Hindi to honor the local elders. Neither side ever feels excluded, and the party remains fully integrated."
  },
  {
    q: "Do you use scripts during a chaotic multi-family Sangeet?",
    a: "Never. Scripts destroy the raw energy of an intimate Alibaug party. When you read from a clipboard, you break eye contact with the audience. I memorize the family dynamics, the complex performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu VIP toast."
  },
  {
    q: "Our event takes place across different areas of The Mansion House. How do you keep the crowd together?",
    a: "Private luxury estates are notorious for 'Audience Drift', where guests split off to the pool, the bar, and the lawn. I act as the central timeline engine. Using specific vocal pacing and hyper-interactive stage movement, I actively 'stitch' the event together, pulling the fragmented crowd back into a single, high-energy focal point."
  },
  {
    q: "Are you familiar with the logistics of Alibaug's top luxury properties?",
    a: "Intimately. Working at ultra-luxury properties like The Mansion House or Radisson Blu requires high-level coordination with the hotel's GM, banquet heads, and shadow planners. I understand the stringent luxury timelines and protocols, ensuring the hosting elevates the prestige of the property perfectly."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Alibaug?",
    a: "Because I travel Pan-India handling massive volumes of destination weddings, my technical rider and logistics to Alibaug (whether via Mumbai airport and Ro-Ro/Speedboat or by road) are completely streamlined. My team provides the exact requirements instantly upon booking to your planner."
  },
  {
    q: "When should we freeze your dates for an Alibaug wedding?",
    a: "Alibaug’s destination season (October through March) is incredibly dense, heavily overlapping with Mumbai's billionaire weekend retreat schedules. The premium dates vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  })),
};

export default function AlibaugPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div class="relative w-full h-full"><Image src="/backgrounds/alibaug_bg.webp" alt="Best Anchor in Alibaug — VIP Luxury Coastal Weddings" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Alibaug · Mumbai's Elite Retreat</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[15vw] md:text-[11vw] lg:text-[8.5rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[7.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)" }}
              >
                ALIBAUG
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The absolute apex of <G>highly-intimate VIP destination weddings</G>, bridging Mumbai's billionaire demographics with unscripted, high-voltage energy at properties like The Mansion House.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95">
                  SECURE YOUR DATE →
                </button>
              </a>
              <Link href="/portfolio">
                <button className="px-10 py-5 border border-[#D4AF37]/50 text-[#D4AF37] font-black uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">
                  VIEW PORTFOLIO
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* ══ 2. STATS ══ */}
      <section className="py-16 bg-zinc-950 border-y border-[#D4AF37]/12 z-20 relative">
        <div className="max-w-5xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-8 border-r border-white/5 last:border-r-0">
                  <s.icon size={16} className="text-[#D4AF37] mx-auto mb-3 opacity-60" />
                  <div className="text-4xl md:text-5xl font-black mb-1 gs">
                    <Counter target={s.val} suffix={s.suffix} />
                  </div>
                  <p className="text-zinc-200 text-[11px] font-semibold uppercase tracking-widest mb-0.5">{s.label}</p>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-wider">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2.5 ABOUT ══ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-5 md:px-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-6 block font-bold">About Anchor Yash</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                VIP Polish.<br /><G>Luxury Command.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute pinnacle of luxury destination hosting in Alibaug.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Alibaug functions as a highly exclusive, low-density ecosystem. You are not dealing with a thousand chaotic guests; you are dealing with a fiercely curated, 150-guest audience containing South Mumbai's <strong className="text-[#D4AF37]">top business executives and billionaires</strong>. Yash steps into these intensely VIP environments and manufactures raw, authentic dancing energy entirely organically.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He completely rejects paper scripts and standard 'MC yelling'. For high-net-worth cross-cultural weddings at The Mansion House or Radisson Blu, Yash provides an elite bilingual execution—flawless, commanding English that drops the invisible wall between the stage and the VIPs, integrated natively with the deep Hindi warmth that the traditional ceremonies demand.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">
                MY FULL STORY <ArrowRight size={14} />
              </Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Alibaug" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. ALIBAUG IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Alibaug is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Mansion Circuit Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Alibaug is the total inverse of a massive indoor banquet market. It is a highly exclusive, hyper-intimate coastal ecosystem catering largely to the elite tiers of Mumbai pulling up in speedboats. A successful anchor here must possess razor-sharp cultural intelligence to navigate complex corporate-family dynamics, the linguistic polish to entertain a high-net-worth VIP room, and the timeline precision to pull deeply fragmented Villa parties into a single, high-hype peak.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {ALIBAUG_IDENTITY.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all h-full group hover:bg-zinc-900/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition-all">
                    <item.icon size={18} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. VS TABLE ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Difference Is Real</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Generic Anchor <G>vs This One.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            <div className="bg-zinc-950 px-6 py-4 border-b border-white/5">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">What you usually get</p>
            </div>
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">What you get here</p>
            </div>
            {VS.map((row, i) => (
              <>
                <div key={`p${i}`} className="bg-zinc-950 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                  <p className="text-zinc-500 text-sm">{row.problem}</p>
                </div>
                <div key={`f${i}`} className="bg-zinc-900/30 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" />
                  <p className="text-zinc-200 text-sm font-medium">{row.fix}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. SERVICES ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">What I Anchor</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                VIP Private Estates to<br /><G>High-Voltage Sangeets.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all group h-full hover:bg-zinc-900/50 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#D4AF37]/60 border border-[#D4AF37]/20 px-2 py-0.5 rounded-full">{s.tag}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 mt-1 group-hover:bg-[#D4AF37] transition-all">
                    <s.icon size={18} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. VENUES ══ */}
      <section className="py-16 bg-zinc-950 border-b border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Alibaug's Best. <G>Known From Inside.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-4 text-center group transition-all">
                  <v.icon size={14} className="text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{v.name}</p>
                  <p className="text-zinc-600 text-[9px] mt-0.5">{v.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CULTURAL PROTOCOL ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Goan Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              VIP Reality.<br /><G>Massive Energy.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a luxury event in Alibaug requires an elite understanding of 'Intimate Crowd Compression'. Many of the area's most beautiful properties feature sweeping, sprawling villa layouts. An amateur anchor loses the crowd entirely out here, letting them drift to the bar or the pool. Yash actively collapses the psychological distance between the VIPs and the stage, using extremely sharp voice projection and timeline pacing to keep a 150-guest Sangeet locked in and fiercely hyped.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, Alibaug's crowds are almost invariably a mix of highly modern Mumbai executives and traditional business-family elders. The host must bridge this gap instantly. Yash does this through total unscripted fluidity—validating the corporate guests with pristine English, then flipping elegantly into deep Hindi/Gujarati warmth to anchor the core family.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Coastal VIP fluency—defeating the fragmented villa layouts and uniting the high-net-worth demographic—is the mark of an anchor who operates at the true apex of the luxury industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "High-Voltage Sangeet Hype", sub: "Explosive, unscripted momentum" },
                { label: "Elite English Protocol", sub: "Definitive VIP guest integration" },
                { label: "Intimate Villa Acoustics", sub: "Defeating fragmented estate drift" },
                { label: "Corporate Strategy Galas", sub: "Unshakeable executive moderation" },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 hover:border-[#D4AF37]/30 rounded-2xl p-5 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mb-3" />
                  <p className="text-white text-sm font-bold group-hover:text-[#D4AF37] transition-colors">{item.label}</p>
                  <p className="text-zinc-500 text-[10px] mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 8. GALLERY MARQUEE ══ */}
      <section className="py-12 overflow-hidden border-b border-white/5 mask-fade">
        <div className="flex marquee whitespace-nowrap gap-5">
          {[...Array(3)].map((_, r) => (
            <div key={r} className="flex gap-5 shrink-0">
              {["/gallery-5.webp","/gallery-2.webp","/gallery-1.webp","/gallery-4.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Alibaug event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 9. SCALE ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group">
              <Image src="/backgrounds/alibaug_bg.webp" alt="Alibaug Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Alibaug · The Elite Outpost</p>
                <p className="text-white text-xs">Commanding vast VIP intimacy at The Mansion House and driving unstoppable Sangeet energy across corporate Radisson Blu events.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Private Estates.<br /><G>VIP Focus.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Alibaug’s luxury ecosystem is an intimate logistical challenge. Properties like The Mansion House do not offer one massive lawn; they scatter 200 high-profile guests across indoor lounges and outdoor pools, leading to immense audience drift. Yash builds his stage presence to physically and vocally anchor these extreme environments—using timeline stitching to forcefully compress the venue, ensuring the host remains the undeniable center of gravity.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "Billionaire Retreat" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-net-worth Mumbai families do not accept generic templates. The execution here must reflect deep cultural intelligence, flawless bilingual articulation, and the ability to manufacture extreme crowd hype totally unscripted—even within sprawling private villa constraints.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 10. TESTIMONIALS ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Alibaug Events.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a
                  href="https://share.google/pMZGzEGOhXnJpLq5g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} fill={GOLD} className="text-[#D4AF37] w-3 h-3" />)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white text-xs font-bold group-hover:text-[#D4AF37] transition-colors">— {t.name}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{t.event}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. TICKER ══ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["The Mansion House","Radisson Blu Alibaug","VIP Intimate Sangeets","Mumbai Billionaire Retreats","Bilingual English/Hindi","Coastal Private Villa Host","Cross-Cultural Elite Weddings","4.9★ Rated","Corporate Offsite Seminars"].map((t, i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block" />{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 12. FAQ ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Alibaug <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-alibaug-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 13. RELATED CITIES ══ */}
      <section className="py-14 border-b border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Adjacent Coast & Hubs</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">India's <G>Elite Routes.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Mumbai", href: "/anchor-in-mumbai", desc: "Corporate Core" },
              { icon: MapPin, label: "Goa", href: "/anchor-in-goa", desc: "Beach Party Capital" },
              { icon: MapPin, label: "Andaman", href: "/anchor-in-andaman", desc: "Island Escapes" },
              { icon: MapPin, label: "Bangalore", href: "/anchor-in-bangalore", desc: "South Tech Route" },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link href={r.href}>
                  <div className="border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-4 text-center transition-all group cursor-pointer hover:bg-zinc-900/50">
                    <r.icon size={14} className="text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[9px] mt-0.5">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 14. CTA ══ */}
      <section className="py-24 md:py-32 px-5 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8">
              <ShieldCheck size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Limited 2025–26 Season Dates</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Your Event Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Alibaug experiences intense overlapping of the Mumbai VIP destination season and peak local corporate retreat dates. Travelling anchors require multi-day blockouts. I do not hold dates without confirmation.
            </p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the event details — quote within the hour.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-3 px-14 py-6 bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95">
                <CalendarCheck size={18} /> CLAIM YOUR DATE
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10 bg-black text-center text-zinc-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold mb-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Anchor in Mumbai", href: "/anchor-in-mumbai" },
              { label: "Anchor in Goa", href: "/anchor-in-goa" },
              { label: "Anchor in Bangalore", href: "/anchor-in-bangalore" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · ALIBAUG, INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}