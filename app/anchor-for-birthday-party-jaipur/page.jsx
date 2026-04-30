"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Cake, CalendarCheck, CheckCircle2, Crown, Globe, Heart, MapPin, Mic2, Minus, Music2, PartyPopper, Plus, ShieldCheck, Sparkles, Star, Users, Zap } from "lucide-react";





// ─────────────────────────────────────────────
// THEME — Black Gold (Anchoring pages)
// ─────────────────────────────────────────────
const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20an%20anchor%20for%20a%20birthday%20party%20in%20Jaipur.%20Can%20you%20check%20availability%3F";
const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,${GOLD_D} 0%,${GOLD} 30%,${GOLD_L} 50%,${GOLD} 70%,${GOLD_D} 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 35s linear infinite;}
  .mask-fade{-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);}
  .img-h img{transition:transform .6s ease;}
  .img-h:hover img{transform:scale(1.05);}
`;
// ─────────────────────────────────────────────
// REUSABLES
// ─────────────────────────────────────────────
const G = ({ children }) => (
  <span className="bg-clip-text text-transparent bg-cover bg-center gold-gradient-text"
    >
    {children}
  </span>
);
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:"-50px" }} transition={{ duration:.75, delay, ease:[.22,1,.36,1] }}
    className={className}>
    {children}
  </motion.div>
);
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  useEffect(() => {
    if (!inView) return;
    const to = parseInt(target.replace(/\D/g,""), 10);
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1600, 1);
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
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button onClick={() => setOpen(o=>!o)} aria-expanded={open} aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none">
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#B5952F]" : "text-zinc-200 hover:text-white"}`}>{q}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all mt-0.5 ${open ? "bg-[#D4AF37] text-black" : "border border-white/30 text-white"}`}>
          {open ? <Minus size={13}/> : <Plus size={13}/>}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id={id} initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
            <p className="px-5 md:px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { val:"1100", suffix:"+", label:"Events Anchored",   sub:"Across India",          icon:Mic2   },
  { val:"200",  suffix:"+", label:"Verified Reviews",  sub:"4.9★ average",          icon:Star   },
  { val:"500",  suffix:"+", label:"Birthday Events",   sub:"Kids to celebrity galas",icon:Cake  },
  { val:"8",    suffix:"+", label:"Years on Stage",    sub:"Zero paper scripts",    icon:Award  },
];
const PARTY_TYPES = [
  {
    icon:Cake,
    title:"Milestone Birthday Galas",
    sub:"18th · 25th · 30th · 50th · 60th",
    desc:"The guest of honour doesn't get a template — they get a story. Every milestone birthday script is built around their specific journey: moments the crowd recognises, surprises they don't see coming, and tributes that land emotionally. The 50th birthday script has made entire rooms of 300 people cry and laugh inside the same five minutes.",
    tag:"Milestone",
  },
  {
    icon:Users,
    title:"Kids Birthday Parties",
    sub:"Ages 5 to 14 · 30 to 200 guests",
    desc:"Kids are the most unforgiving audience in the world. They don't pretend to have fun — they either have it or they don't. High-energy games, interactive character hosting, structured crowd management, and energy pacing that keeps 80 children genuinely engaged from start to finish. Parents get to actually enjoy the party.",
    tag:"Kids Party",
  },
  {
    icon:Sparkles,
    title:"Surprise Birthday Reveals",
    sub:"Coordinated live reveals",
    desc:"A surprise party lives or dies in the thirty seconds after the reveal. The emotional transition from shock to celebration, the crowd's energy management, the pivot from secret-keeping to open celebration — all of it is scripted and coordinated with the organising family days in advance. Nothing is improvised at the reveal.",
    tag:"Surprise",
  },
  {
    icon:Crown,
    title:"Celebrity-Style Birthday Galas",
    sub:"100 to 500+ guests · VIP events",
    desc:"Red carpet entries, live crowd interaction, award-style tribute segments, Bollywood-energy entertainment hosting. For high-profile birthdays where the standard isn't just 'good' — it's the kind of event that gets talked about for years. Every element is choreographed from the first guest entry to the final send-off.",
    tag:"Celebrity Gala",
  },
  {
    icon:Heart,
    title:"Anniversary Celebrations",
    sub:"25th Silver · 50th Golden · Milestone vows",
    desc:"A couple's anniversary deserves an anchor who can hold space for genuine emotion. The script walks through their journey — with contributions gathered from children, grandchildren, old friends — and builds a narrative arc that publicly honours the relationship. The evening moves between laughter and tears exactly when it's supposed to.",
    tag:"Anniversary",
  },
  {
    icon:Globe,
    title:"NRI & Destination Birthday Events",
    sub:"International guests · Bilingual hosting",
    desc:"Birthday celebrations where family flies in from the UK, USA, Canada, and Gulf. Bilingual Hindi/English hosting that ensures every guest in the room — from the grandparents who speak only Hindi to the cousins who've grown up abroad — feels included and part of the celebration.",
    tag:"NRI",
  },
];
const VS = [
  { problem:"Recycled party games nobody wants to play",   fix:"Custom crowd games designed for the exact guest mix" },
  { problem:"Script read off a piece of paper",           fix:"100% unscripted — adapts live to crowd energy" },
  { problem:"Only Hindi or only English",                 fix:"Bilingual — seamless Hindi/English switching" },
  { problem:"Generic 'happy birthday' hosting",           fix:"Personalised script built around the guest of honour" },
  { problem:"Dead energy between segments",               fix:"Zero filler — every minute has a purpose" },
  { problem:"Can't manage kids and adults both",          fix:"Format shifts completely for different age groups" },
];
const VENUES = [
  "Fairmont Jaipur", "ITC Rajputana", "Marriott Jaipur", "Leela Palace",
  "Jai Mahal Palace", "Samode Haveli", "Palladio Jaipur",
  "Rambagh Palace", "Trident Jaipur",
  "Banquet halls — Mansarovar", "Venues — Vaishali Nagar",
  "Farmhouses — Ajmer Road", "Rooftops — C-Scheme",
];
const TESTIMONIALS = [
  {
    name:"Priya Sharma",
    rating:5,
    quote:"The 50th birthday script had my father's entire 50-year journey compressed into 20 minutes. He cried, we cried, the guests laughed — all in exactly the right sequence. When we say the anchor made the evening, we mean it literally.",
    event:"50th Birthday Gala · Fairmont Jaipur · 280 guests",
  },
  {
    name:"Ritu Agarwal",
    rating:5,
    quote:"Our daughter's surprise 25th was pulled off perfectly. Yash knew the reveal timing, coordinated with us for weeks, managed 80 guests while they were waiting, and then turned the energy from 'shh it's a surprise' to full celebration in seconds. Flawless.",
    event:"Surprise 25th Birthday · Jai Mahal Palace · 80 guests",
  },
  {
    name:"Vikram Singhania",
    rating:5,
    quote:"Kids party for 60 children aged 6–12. I was genuinely worried. Two hours of structured games, energy management, and genuine fun. Every child was engaged the entire time. Parents were impressed. This is a completely different skill set — and he has it.",
    event:"Kids Birthday Party · Samode Haveli · 60 children",
  },
];
const FAQS = [
  {
    q:"How much does a birthday party anchor in Jaipur cost?",
    a:"Birthday party anchoring in Jaipur starts from ₹15,000 for a standard 2–3 hour event. Milestone birthday galas with custom scripting, multiple game segments, and surprise coordination are quoted based on event complexity and duration. WhatsApp the date, venue, and guest count for a quote within the hour.",
  },
  {
    q:"Do you anchor kids' birthday parties in Jaipur?",
    a:"Yes. Kids' birthday parties for ages 5–14 are a specific specialisation. The hosting approach is completely different from adult events — structured games, high interactivity, character-themed segments, and crowd energy management that keeps children genuinely engaged. Available across all Jaipur venues and farmhouses.",
  },
  {
    q:"Can you host a surprise birthday party reveal in Jaipur?",
    a:"Yes. Surprise party hosting requires pre-event planning with the organising family. The reveal timing, the emotional transition from surprise to celebration, the crowd's energy management during the reveal — all scripted and coordinated before the event. Nothing about a surprise reveal should be improvised.",
  },
  {
    q:"What is the difference between a birthday anchor and a regular DJ?",
    a:"A DJ controls the music. A birthday anchor controls the entire experience — the narrative arc of the evening, the crowd energy between segments, the personalised script, the games, the tributes, the emotional moments, and the physical energy in the room. The anchor is why the evening feels curated rather than accidental.",
  },
  {
    q:"Do you anchor birthday parties outside Jaipur?",
    a:"Yes. Birthday event anchoring is available pan-Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and nationally for high-profile or destination birthday events. Travel and accommodation are billed separately and discussed at booking.",
  },
  {
    q:"How far in advance should we book a birthday party anchor in Jaipur?",
    a:"For milestone birthdays with custom scripting, 2–4 weeks minimum. For celebrity-style galas requiring extensive script research and family coordination, 4–6 weeks. Weekend bookings for the October–February peak season fill 6–8 weeks in advance. WhatsApp to check availability immediately.",
  },
  {
    q:"Can you anchor a 50th or 25th milestone birthday in Jaipur?",
    a:"Milestone birthdays are the most emotionally significant events to host well. A 50th birthday script involves research into the guest of honour's life, gathering contributions from family and friends, and building a narrative that genuinely moves the room. These take 2–3 weeks of pre-event preparation and are booked well in advance.",
  },
  {
    q:"Which birthday venues in Jaipur do you work with?",
    a:"All major Jaipur venues have been worked with — Fairmont, ITC Rajputana, Marriott, Leela Palace, Rambagh Palace, Jai Mahal Palace, Samode Haveli, Trident Jaipur, and all standalone banquet venues in Mansarovar, Vaishali Nagar, C-Scheme, and the major farmhouse properties on Ajmer Road.",
  },
  {
    q:"Do you also host anniversary celebrations in Jaipur?",
    a:"Yes. Silver jubilee (25th) and golden jubilee (50th) anniversary celebrations are a natural extension of birthday hosting. The scripting focuses on the couple's journey, with contributions from children, grandchildren, and old friends — building a public tribute that honours the relationship in front of everyone who matters.",
  },
  {
    q:"What games do you use at birthday parties?",
    a:"Never the same games twice. Games are designed based on the specific guest mix — age range, energy level, family dynamics, and what the guest of honour would enjoy. Milestone birthdays get memory-based games, couples get anniversary trivia, kids parties get structured interactive games. Nothing from a recycled template.",
  },
];
const RELATED = [
  { icon:Heart,    label:"Wedding Anchor Jaipur",  href:"/wedding-anchor-jaipur",         desc:"Varmala, Baraat, Bidaai" },
  { icon:Music2,   label:"Sangeet Host Jaipur",    href:"/sangeet-anchor-jaipur",         desc:"High-energy Sangeet" },
  { icon:Sparkles, label:"Haldi Anchor Jaipur",    href:"/haldi-anchor-jaipur",           desc:"Ceremony games" },
  { icon:Users,    label:"Corporate Events",       href:"/corporate-event-anchor-jaipur", desc:"Award nights" },
  { icon:Crown,    label:"Best Anchor Jaipur",     href:"/best-anchor-in-jaipur",         desc:"All formats" },
  { icon:Globe,    label:"Anchor in Jaipur",       href:"/anchor-in-jaipur",              desc:"Full city guide" },
];
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};
// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BirthdayAnchorJaipur() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-jaipur">Anchor in Jaipur</Link> ›
        <span>Anchor for Birthday Party Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-1.webp" alt="Birthday party anchor Jaipur — Yash Soni high energy crowd"
            fill priority className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(15%)", opacity:.4 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <Cake size={12} className="text-[#B5952F]"/>
              <span className="text-[#B5952F] text-[9px] font-bold uppercase tracking-[.3em]">Birthday Party Anchor · Jaipur</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              The Anchor Who<br/>Makes <G>Birthdays</G><br/>Legendary.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Custom scripted. Bilingual Hindi/English. Built around the guest of honour's actual story — not a recycled template.
                </p>
                <p className="text-zinc-500 text-sm">Jaipur · Rajasthan · Pan-India</p>
              </div>
              <div className="flex gap-3 shrink-0 flex-wrap">
                <Link href={WA} target="_blank" rel="noopener noreferrer">
                  <button className="px-9 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                    Book via WhatsApp →
                  </button>
                </Link>
                <Link href="/anchor-in-jaipur">
                  <button className="px-7 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#B5952F] transition-all">
                    All Events →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. ANIMATED STATS
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-[#D4AF37]/12">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="text-center py-10 md:py-14 border-r border-white/5 last:border-r-0">
                  <s.icon size={16} className="text-[#B5952F] mx-auto mb-3 opacity-60"/>
                  <div className="text-4xl md:text-5xl font-black mb-1 gs">
                    <Counter target={s.val} suffix={s.suffix}/>
                  </div>
                  <p className="text-zinc-200 text-[11px] font-semibold uppercase tracking-widest mb-0.5">{s.label}</p>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-wider">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. THE REAL PROBLEM — pattern interrupt
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Most Birthday<br/>Parties Are <G>Boring.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The anchor reads off a script. The games are recycled from the last ten events. Nobody in the room actually knows what's coming next — and that includes the anchor.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              A birthday happens once a year. A milestone birthday — a 25th, a 50th — happens once in a lifetime. The anchor is the single person who controls whether the evening feels like a curated, emotional, energetic celebration or a forgettable function with music.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              The right anchor doesn't just fill time between cake and dancing. The right anchor <em className="text-[#B5952F]">makes the birthday</em>.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-2.webp" alt="Birthday party anchor Jaipur energetic crowd engagement"
                fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Live · Unscripted · Personalised</p>
                <p className="text-white text-xs">Custom built for every birthday. Never the same show twice.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. PARTY FORMATS — 6 cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Every Format</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Whichever Birthday It Is, <G>There's a Format.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PARTY_TYPES.map((p,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="bg-[#0a0a0a] border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all group hover:bg-zinc-900/60 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
                      <p.icon size={16} className="text-[#B5952F] group-hover:text-black transition-colors"/>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#B5952F]/70 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#B5952F] transition-colors">{p.title}</h3>
                  <p className="text-[#B5952F]/50 text-[9px] font-bold uppercase tracking-widest mb-4">{p.sub}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. GALLERY — bento grid
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
              <div>
                <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Visual Proof</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Real <G>Birthday Events.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">View Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-3.webp", alt:"Milestone birthday celebration anchor Jaipur",     span:"col-span-2 row-span-2" },
              { src:"/gallery-4.webp", alt:"Kids birthday party host Jaipur crowd management" },
              { src:"/gallery-5.webp", alt:"Surprise birthday reveal anchor Jaipur" },
              { src:"/gallery-2.webp", alt:"Celebrity birthday gala host Jaipur",              span:"col-span-1" },
              { src:"/gallery-1.webp", alt:"Anniversary celebration anchor Jaipur",             span:"col-span-2" },
            ].map((img, i) => (
              <Reveal key={i} delay={i*.05}>
                <div className={`img-h relative overflow-hidden rounded-xl border border-white/8 hover:border-[#D4AF37]/40 transition-all ${img.span||""}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover"
                    style={{ filter:"grayscale(15%)" }} sizes="(max-width:768px) 50vw, 33vw"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. VS — THE DIFFERENCE
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Standard</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Standard Anchor vs <G>This One.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            <div className="bg-zinc-950 px-6 py-4 border-b border-white/5">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">What you usually get</p>
            </div>
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-widest">What you get here</p>
            </div>
            {VS.map((row, i) => (
              <>
                <div key={`p${i}`} className="bg-zinc-950 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0"/>
                  <p className="text-zinc-500 text-sm">{row.problem}</p>
                </div>
                <div key={`f${i}`} className="bg-zinc-900/30 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-[#B5952F] shrink-0"/>
                  <p className="text-zinc-200 text-sm font-medium">{row.fix}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. VENUE EXPERTISE
      ══════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Birthday Venues Across <G>Jaipur.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i*.03}>
                <span className="text-[10px] font-medium uppercase tracking-widest border border-white/10 hover:border-[#D4AF37]/40 px-4 py-2 rounded-full text-zinc-400 hover:text-[#B5952F] transition-all cursor-default">
                  {v}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">What Families <G>Remember.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t,i) => (
              <Reveal key={i} delay={i*.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_,j) => <Star key={j} size={11} fill={GOLD} className="text-[#B5952F]"/>)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white text-xs font-bold group-hover:text-[#B5952F] transition-colors">— {t.name}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{t.event}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          9. SCROLLING TICKER — social proof
      ══════════════════════════════════════ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["1100+ Events", "4.9★ Rating", "Kids Parties", "50th Birthdays", "Surprise Reveals", "Anniversary Galas", "Celebrity Events", "Bilingual Host", "Zero Templates", "Pan-India"].map((t,i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block"/>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. FAQ
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Birthday Anchor <G>Jaipur FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-bd-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          11. RELATED SERVICES
      ══════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[.3em] mb-2">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">Birthdays Are One Format. <G>We Do Them All.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {RELATED.map((r,i) => (
              <Reveal key={i} delay={i*.04}>
                <Link href={r.href}>
                  <div className="border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-4 text-center transition-all group cursor-pointer hover:bg-zinc-900/50">
                    <r.icon size={16} className="text-[#B5952F] mx-auto mb-2"/>
                    <p className="text-white text-xs font-semibold group-hover:text-[#B5952F] transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[9px] mt-0.5">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          12. SCARCITY CTA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-5 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/6 to-transparent pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">BIRTHDAY</span>
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <Reveal>
            <Cake size={24} className="text-[#B5952F] mx-auto mb-6 opacity-60"/>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
              Let's Make This<br/><G>Birthday Legendary.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">Peak season weekends fill 6–8 weeks in advance.</p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the date and guest count — quote within the hour.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> WhatsApp to Book
              </button>
            </Link>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[9px] uppercase tracking-widest">
              {[
                ["/wedding-anchor-jaipur","Wedding Anchor"],
                ["/sangeet-anchor-jaipur","Sangeet Host"],
                ["/haldi-anchor-jaipur","Haldi Anchor"],
                ["/best-anchor-in-jaipur","Best Anchor Jaipur"],
                ["/anchor-in-jaipur","Anchor in Jaipur"],
                ["/contact","Contact"],
              ].map(([h,l]) => (
                <Link key={h} href={h}><span className="hover:text-[#B5952F] transition-colors">{l}</span></Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}