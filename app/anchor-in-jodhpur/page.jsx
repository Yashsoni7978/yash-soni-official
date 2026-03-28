"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mic2, Star, Users, Award, MapPin, Globe,
  Heart, Music2, Crown, CalendarCheck,
  Plus, Minus, CheckCircle2, ChevronRight,
  Building2, Sparkles, Landmark, Shield
} from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20or%20event%20in%20Jodhpur.%20Can%20you%20check%20availability%3F";

const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,${GOLD_D} 0%,${GOLD} 30%,${GOLD_L} 50%,${GOLD} 70%,${GOLD_D} 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 38s linear infinite;}
  .mask-fade{-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);}
  .img-h img{transition:transform .65s ease;}
  .img-h:hover img{transform:scale(1.05);}
`;

const G = ({ children }) => (
  <span className="bg-clip-text text-transparent bg-cover bg-center"
    style={{ backgroundImage:"url('/gold-texture.webp')", backgroundColor:GOLD }}>
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
      const p = Math.min((ts - start) / 1800, 1);
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
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all mt-0.5 ${open ? "bg-[#D4AF37] text-black" : "border border-white/30"}`}>
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

const STATS = [
  { val:"1100", suffix:"+", label:"Events Anchored",    sub:"Rajasthan & India",     icon:Mic2     },
  { val:"40",   suffix:"+", label:"Jodhpur Events",     sub:"Blue city specialist",  icon:Landmark },
  { val:"4.9",  suffix:"★", label:"Client Rating",      sub:"200+ verified reviews", icon:Star     },
  { val:"10",   suffix:"K+",label:"Largest Crowd",      sub:"Commanded live",        icon:Users    },
];

const VENUES = [
  {
    name:"Umaid Bhawan Palace",
    tag:"Royal · Iconic",
    desc:"One of the last functioning royal palaces in the world and still home to the Jodhpur royal family. Hosting an event here is not just a luxury decision — it carries historical weight and a very specific ceremonial register that generic anchors cannot navigate.",
    highlight:true,
  },
  {
    name:"Mehrangarh Fort",
    tag:"Heritage Fort",
    desc:"The 500-year-old fort that defines Jodhpur's skyline. Fort courtyard Sangeets and evening galas inside the ramparts are among the most dramatic event backdrops in all of India. Open-air acoustic management at this altitude is a distinct challenge.",
  },
  {
    name:"RAAS Jodhpur",
    tag:"Boutique Luxury",
    desc:"A heritage hotel built into the fort walls with panoramic views of the Blue City. Intimate destination weddings and Sangeet evenings for 80–200 guests. The contemporary luxury inside the 17th-century structure requires a hosting register that honours both.",
  },
  {
    name:"Ajit Bhawan",
    tag:"Heritage Palace",
    desc:"India's first heritage hotel, still managed by the royal family. Courtyards, gardens, and palace wings for intimate to mid-size events. The sense of living heritage here is palpable — the anchor needs genuine cultural fluency to match it.",
  },
  {
    name:"Vivanta Jodhpur",
    tag:"5-Star Contemporary",
    desc:"Modern luxury property for contemporary destination weddings and corporate retreats. Large-format ballrooms and outdoor lawns for 300–600 guests. Contemporary event production alongside Jodhpur's heritage backdrop.",
  },
  {
    name:"Indana Palace Jodhpur",
    tag:"Heritage",
    desc:"Heritage property in the heart of the Blue City. Central location with palace architecture and large event spaces. Mid-to-large weddings with authentic Jodhpur atmosphere for families who want heritage without the Umaid price point.",
  },
];

const FORMATS = [
  { icon:Heart,    title:"Umaid Bhawan Weddings",      desc:"The most prestigious address in Jodhpur. Varmala, pheras, and bidaai ceremonies that honour the royal setting — authoritative, precise hosting that matches the venue's historical significance without overshadowing the family.", tag:"Palace Wedding" },
  { icon:Landmark, title:"Mehrangarh Fort Sangeets",   desc:"Fort courtyard Sangeet evenings are unlike anything else in Rajasthan. The acoustic properties of the fort ramparts, the visual drama of the Blue City below, and the late-night desert sky above — crowd management here requires complete adaptation.", tag:"Fort Sangeet" },
  { icon:Globe,    title:"NRI & International Families",desc:"Jodhpur's royal heritage attracts NRI families from across the world for whom the destination choice itself is a statement. Bilingual Hindi/English hosting with international protocols ensures every guest feels the grandeur was designed for them.", tag:"NRI" },
  { icon:Music2,   title:"Heritage Property Events",   desc:"RAAS, Ajit Bhawan, and Indana Palace each have their own atmospheric identity. The anchor reads the specific personality of the venue and adapts — intimate and warm at RAAS, regal and grand at Ajit Bhawan.", tag:"Heritage Venues" },
  { icon:Sparkles, title:"Pre-Wedding Ceremonies",     desc:"Haldi in a royal courtyard. Mehndi under palace arches. The pre-wedding ceremonies in Jodhpur are as architecturally dramatic as the wedding itself — the hosting style elevates the setting rather than filling the silence with noise.", tag:"Pre-Wedding" },
  { icon:Building2,title:"Corporate Retreats",         desc:"National brands and MNCs use Jodhpur's unique combination of accessibility and grandeur for leadership summits and annual events. Vivanta and Umaid Bhawan host corporate groups for 50–300. Sharp, brand-aligned hosting at luxury properties.", tag:"Corporate" },
];

const WHY = [
  { num:"01", title:"Umaid Bhawan Protocol",      desc:"Umaid Bhawan Palace is still home to the Jodhpur royal family. Events here operate under specific protocols — vendor timings, ceremonial sequences, architectural restrictions. These are known from prior events at the property, not learned on the day." },
  { num:"02", title:"Fort Acoustic Management",   desc:"Mehrangarh Fort's open-air courtyards have complex acoustic behaviour — stone walls, height, wind, and the natural amphitheatre effect of the fort's architecture. Vocal projection and mic management adapt completely to these conditions." },
  { num:"03", title:"Blue City Cultural Fluency", desc:"Jodhpur's Marwari heritage has specific wedding traditions, ritual sequences, and cultural expectations that differ from Jaipur and Udaipur. The anchor navigates these with genuine knowledge — not a generic Rajasthani template." },
  { num:"04", title:"NRI & Global Guest Handling",desc:"Royal heritage destinations attract the most discerning international guests. Bilingual Hindi/English with cultural intelligence on both ends — families who chose Jodhpur as their destination deserve an anchor who can do justice to that choice." },
];

const TESTIMONIALS = [
  {
    name:"Rathore Family — London & Jodhpur",
    quote:"Umaid Bhawan Palace is not just a venue — it is our family's history. Finding an anchor who understood that, who brought the right gravitas to the ceremony without making it feel heavy, was the critical decision. Yash understood the palace before he understood the event.",
    event:"Palace Wedding · Umaid Bhawan Palace, Jodhpur · 250 guests",
  },
  {
    name:"Singhania Family",
    quote:"Sangeet at Mehrangarh Fort at midnight. The Blue City glowing below. 180 guests. The anchor managed the outdoor acoustic challenges, the late-night energy, and the dramatic setting simultaneously. The crowd was electric from start to finish.",
    event:"Fort Sangeet · Mehrangarh Fort, Jodhpur · 180 guests",
  },
  {
    name:"VP Marketing — FMCG Brand",
    quote:"Annual leadership summit for 70 senior leaders at RAAS Jodhpur. The anchor balanced corporate precision with the heritage atmosphere of the venue. Every session ran on time. Every speaker felt supported. Zero dead moments.",
    event:"Corporate Summit · RAAS Jodhpur · 70 delegates",
  },
];

const FAQS = [
  {
    q:"Who is the best anchor for events at Umaid Bhawan Palace Jodhpur?",
    a:"Anchor Yash Soni has hosted events at Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur, and Ajit Bhawan. The palace operates under specific ceremonial protocols that require prior experience to navigate correctly. 4.9★ rated with bilingual Hindi/English hosting and NRI destination wedding expertise.",
  },
  {
    q:"Can you anchor a wedding at Mehrangarh Fort in Jodhpur?",
    a:"Yes. Mehrangarh Fort Sangeet evenings and ceremony events are a specific specialisation. The open-air fort courtyard acoustic environment, the late-night energy management, and the visual drama of the Blue City backdrop all require a completely adapted hosting approach from an indoor venue.",
  },
  {
    q:"Do you handle NRI families at Jodhpur destination weddings?",
    a:"Yes. Jodhpur's royal heritage attracts NRI families from the UK, USA, Canada, and Gulf. Bilingual Hindi/English hosting that switches registers seamlessly — grandparents who speak only Marwari, cousins who grew up in Manchester, and everyone in between all feel genuinely included.",
  },
  {
    q:"What is the process for booking an anchor for a Jodhpur destination wedding?",
    a:"WhatsApp the venue name, event date, expected guest count, and ceremonies required. Availability is confirmed same day. Quote follows. Token confirms the booking. Pre-event coordination, venue-specific briefing, and script development happen over the following weeks.",
  },
  {
    q:"Do you anchor events at RAAS Jodhpur and Ajit Bhawan?",
    a:"Yes. RAAS Jodhpur's heritage boutique format and Ajit Bhawan's living palace atmosphere each require a specific hosting register that differs from large-format palace venues. Intimate precision over broadcast energy — both venues demand this and it is a distinct skill.",
  },
  {
    q:"How far in advance should we book for a Jodhpur event?",
    a:"For Umaid Bhawan Palace and Mehrangarh Fort peak season (October–February), 3–5 months minimum. These are high-demand venues that book early, and the anchor needs advance coordination with the property's event team. Confirm the venue first, then WhatsApp immediately.",
  },
  {
    q:"Can you anchor corporate retreats and conferences in Jodhpur?",
    a:"Yes. Corporate events at Vivanta, RAAS, and Umaid Bhawan are a regular format. Leadership summits, product launches, and annual days for 50–300 delegates. Corporate hosting at luxury heritage properties requires specific restraint and a completely different register from wedding anchoring.",
  },
  {
    q:"Do you cover all event formats at Jodhpur venues?",
    a:"Yes. Full multi-day destination wedding coverage — Welcome dinner, Haldi, Mehndi, Sangeet, Wedding ceremony, and Reception — as well as standalone corporate events, private galas, and milestone celebrations. Single-day and multi-day bookings both available.",
  },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};

export default function AnchorInJodhpur() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>

      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-rajasthan">Anchor in Rajasthan</Link> ›
        <span>Anchor in Jodhpur</span>
      </nav>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-3.webp" alt="Anchor in Jodhpur Umaid Bhawan Palace destination wedding"
            fill priority quality={100} className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(10%)", opacity:.38 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <Landmark size={12} className="text-[#D4AF37]"/>
              <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[.3em]">Anchor in Jodhpur · Blue City Specialist</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              Jodhpur&apos;s<br/><G>Royal Palace</G><br/>Anchor.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Umaid Bhawan Palace · Mehrangarh Fort · RAAS Jodhpur · Ajit Bhawan — bilingual, NRI-fluent, royal protocol specialist.
                </p>
                <p className="text-zinc-500 text-sm">4.9★ · 1100+ events · Available for multi-day destination coverage</p>
              </div>
              <div className="flex gap-3 flex-wrap shrink-0">
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <button className="px-9 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                    Check Availability →
                  </button>
                </a>
                <Link href="/anchor-in-rajasthan">
                  <button className="px-7 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                    All Rajasthan →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-[#D4AF37]/12">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="text-center py-10 md:py-14 border-r border-white/5 last:border-r-0">
                  <s.icon size={16} className="text-[#D4AF37] mx-auto mb-3 opacity-60"/>
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
          3. WHY JODHPUR IS DIFFERENT
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Blue City Standard</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Umaid Bhawan Is Not<br/>Just a <G>Venue.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Umaid Bhawan Palace is one of the last functioning royal residences in India, still home to the Jodhpur royal family. Mehrangarh Fort has stood for 500 years above the Blue City. These are not generic luxury venues — they carry historical weight that changes what the anchor's role actually means.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Events at Jodhpur's palace properties require an anchor who understands that the setting is a collaborator, not just a backdrop. The hosting register shifts to honour the architecture — authoritative where the palace demands gravitas, warm where the family needs comfort, and always precise in a setting that punishes improvisation.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Jodhpur's palaces deserve an anchor who has <em className="text-[#D4AF37]">actually worked within their walls</em> — not one visiting for the first time on your wedding day.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-5.webp" alt="Anchor Jodhpur palace wedding heritage venue Umaid Bhawan"
                fill quality={100} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Royal Protocol · Fort Acoustic · NRI Host</p>
                <p className="text-white text-xs">The Blue City's weddings deserve the right anchor. Every time.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. VENUE CARDS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Venue Expertise</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Jodhpur&apos;s Finest. <G>All Known.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VENUES.map((v,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className={`rounded-2xl border p-7 relative overflow-hidden transition-all group hover:border-[#D4AF37]/50 ${
                  v.highlight ? "border-[#D4AF37]/40 bg-[#D4AF37]/4" : "border-white/8 bg-[#0a0a0a] hover:bg-zinc-900/60"
                }`}>
                  {v.highlight && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"/>}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white font-black text-lg uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">{v.name}</p>
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mt-1 inline-block ${
                        v.highlight ? "bg-[#D4AF37] text-black" : "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25"
                      }`}>{v.tag}</span>
                    </div>
                    <MapPin size={14} className="text-zinc-600 mt-1"/>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. EVENT FORMATS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Event Formats</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Palace Weddings to <G>Fort Sangeets.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FORMATS.map((f,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all group hover:bg-zinc-900/60 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
                      <f.icon size={16} className="text-[#D4AF37] group-hover:text-black transition-colors"/>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4AF37]/70 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">{f.tag}</span>
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors">{f.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. GALLERY
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Visual Proof</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Jodhpur <G>Events.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-2.webp", alt:"Umaid Bhawan Palace wedding anchor Jodhpur ceremony",  span:"col-span-2 row-span-2" },
              { src:"/gallery-4.webp", alt:"Mehrangarh Fort Sangeet anchor Jodhpur night event" },
              { src:"/gallery-1.webp", alt:"RAAS Jodhpur wedding host destination event" },
              { src:"/gallery-5.webp", alt:"Heritage venue anchor Jodhpur pre-wedding ceremony",   span:"col-span-2" },
              { src:"/gallery-3.webp", alt:"NRI destination wedding anchor Jodhpur blue city" },
            ].map((img,i) => (
              <Reveal key={i} delay={i*.05}>
                <div className={`img-h relative overflow-hidden rounded-xl border border-white/8 hover:border-[#D4AF37]/40 transition-all ${img.span||""}`}>
                  <Image src={img.src} alt={img.alt} fill quality={100} className="object-cover"
                    style={{ filter:"grayscale(15%)" }} sizes="(max-width:768px) 50vw, 33vw"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. WHY
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Difference</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Why Jodhpur&apos;s Finest <G>Choose This Anchor.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY.map((w,i) => (
              <Reveal key={i} delay={i*.08}>
                <div className="bg-zinc-900/40 border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl p-7 transition-all h-full">
                  <p className="text-4xl font-black text-[#D4AF37]/15 mb-4 leading-none">{w.num}</p>
                  <h3 className="text-sm font-black text-white mb-3 uppercase tracking-tight">{w.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{w.desc}</p>
                </div>
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Jodhpur <G>Families.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t,i) => (
              <Reveal key={i} delay={i*.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_,j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]"/>)}
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

      {/* ══════════════════════════════════════
          9. TICKER
      ══════════════════════════════════════ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_,r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["Umaid Bhawan Palace","Mehrangarh Fort","RAAS Jodhpur","Ajit Bhawan","NRI Families","Bilingual Host","Fort Sangeets","Palace Weddings","4.9★ Rating","1100+ Events"].map((t,i) => (
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Anchor in <G>Jodhpur FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-jdp-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. RELATED
      ══════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">Explore More</p>
              <h2 className="text-2xl md:text-3xl font-bold">Jodhpur Is One City. <G>We Cover All Rajasthan.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon:MapPin,    label:"Anchor in Rajasthan",    href:"/anchor-in-rajasthan",        desc:"All 7 cities" },
              { icon:Globe,     label:"Anchor in Udaipur",      href:"/anchor-in-udaipur",          desc:"Lake Palace" },
              { icon:Crown,     label:"Best Anchor Jaipur",     href:"/best-anchor-in-jaipur",      desc:"Jaipur HQ" },
              { icon:Heart,     label:"Destination Weddings",   href:"/destination-wedding-anchor", desc:"NRI specialist" },
              { icon:Music2,    label:"Sangeet Host",           href:"/sangeet-anchor-jaipur",      desc:"High-energy" },
              { icon:Building2, label:"Corporate Events",       href:"/corporate-event-anchor-jaipur",desc:"Summits" },
              { icon:Sparkles,  label:"Wedding Anchor",         href:"/wedding-anchor-jaipur",      desc:"All formats" },
              { icon:Mic2,      label:"Anchor in Jaipur",       href:"/anchor-in-jaipur",           desc:"City guide" },
            ].map((r,i) => (
              <Reveal key={i} delay={i*.04}>
                <Link href={r.href}>
                  <div className="border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-4 text-center transition-all group cursor-pointer hover:bg-zinc-900/50">
                    <r.icon size={16} className="text-[#D4AF37] mx-auto mb-2"/>
                    <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[9px] mt-0.5">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          12. CTA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-5 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/6 to-transparent pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[16vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">JODHPUR</span>
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <Reveal>
            <Landmark size={24} className="text-[#D4AF37] mx-auto mb-6 opacity-60"/>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
              Jodhpur&apos;s Palaces<br/>Deserve <G>This Anchor.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">Umaid Bhawan and Mehrangarh peak dates book 4–5 months out.</p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the venue and date — availability confirmed same day.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Check Availability
              </button>
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[9px] uppercase tracking-widest">
              {[
                ["/anchor-in-rajasthan","Anchor in Rajasthan"],
                ["/anchor-in-udaipur","Anchor in Udaipur"],
                ["/destination-wedding-anchor","Destination Wedding"],
                ["/best-anchor-in-jaipur","Best Anchor Jaipur"],
                ["/contact","Contact"],
              ].map(([h,l]) => (
                <Link key={h} href={h}><span className="hover:text-[#D4AF37] transition-colors">{l}</span></Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
