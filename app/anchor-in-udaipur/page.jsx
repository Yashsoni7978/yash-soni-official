"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mic2, Star, Users, Award, MapPin, Globe,
  Heart, Music2, Crown, CalendarCheck,
  Plus, Minus, CheckCircle2, ChevronRight,
  Building2, Sparkles, Waves, Landmark
} from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20event%20in%20Udaipur%20and%20need%20an%20anchor.%20Can%20you%20check%20availability%3F";

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

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { val:"1100", suffix:"+", label:"Events Anchored",    sub:"Rajasthan & beyond",    icon:Mic2     },
  { val:"50",   suffix:"+", label:"Udaipur Events",     sub:"Lake city specialist",  icon:Waves    },
  { val:"4.9",  suffix:"★", label:"Client Rating",      sub:"200+ verified reviews", icon:Star     },
  { val:"10",   suffix:"K+",label:"Largest Crowd",      sub:"Commanded live",        icon:Users    },
];

const VENUES = [
  {
    name:"Taj Lake Palace",
    tag:"Iconic",
    desc:"The most photographed wedding venue in India. A floating palace on Pichola Lake — every ceremony here is a visual spectacle before the anchor says a word. The hosting register must match the venue's otherworldly grandeur.",
    highlight:true,
  },
  {
    name:"Oberoi Udaivilas",
    tag:"Ultra-Luxury",
    desc:"Consistently ranked among the world's best hotels. Palace-spread with lakeside ceremony lawns and indoor ballrooms. International guests, NRI families, and the highest hospitality standards in Rajasthan.",
  },
  {
    name:"Leela Palace Udaipur",
    tag:"5-Star",
    desc:"Lakefront heritage architecture with modern luxury interiors. Large-format weddings with 300–600 guests across the grand ballroom and outdoor ceremony spaces. Palace protocol combined with contemporary event production.",
  },
  {
    name:"RAAS Devigarh",
    tag:"Heritage Boutique",
    desc:"The restored 18th-century hill fort palace above Udaipur. Intimate destination weddings for 50–150 guests. The acoustic properties of a fort interior require a completely different vocal and energy approach.",
  },
  {
    name:"Fateh Garh Udaipur",
    tag:"Heritage",
    desc:"19th-century fort palace with panoramic Aravalli views. Sangeet evenings under the open sky with the city lights behind — the anchor is managing atmosphere as much as content.",
  },
  {
    name:"Trident Udaipur",
    tag:"Lakeside",
    desc:"Lakeside lawns and indoor banquets for mid-to-large weddings. Accessible luxury that handles 200–400 guests with full production support. A reliable venue that requires sharp anchoring to elevate it.",
  },
];

const FORMATS = [
  {
    icon:Heart,
    title:"Lake Palace Wedding Ceremony",
    desc:"Varmala, pheras, and bidaai at Udaipur's lake palace venues. The visual backdrop does half the work — the anchor's job is to hold space for the emotion without competing with the setting. Restraint and precision over volume.",
    tag:"Wedding",
  },
  {
    icon:Music2,
    title:"Destination Sangeet",
    desc:"High-energy Sangeet production at Taj Lake Palace courtyards, Oberoi lawns, and RAAS fort terraces. Outdoor lake-view venues with natural acoustic challenges. The crowd management is different at 2am under the stars than in a banquet hall.",
    tag:"Sangeet",
  },
  {
    icon:Globe,
    title:"NRI & International Families",
    desc:"The majority of Udaipur destination weddings involve NRI families from the UK, USA, Canada, and Gulf who have chosen the city specifically for its grandeur. Bilingual Hindi/English hosting ensures every guest — from grandparents to abroad-raised cousins — is genuinely included.",
    tag:"NRI & International",
  },
  {
    icon:Sparkles,
    title:"Pre-Wedding Ceremonies",
    desc:"Haldi at sunrise by the lake. Mehndi in a haveli courtyard. Roka at a rooftop with the Aravalli backdrop. Each pre-wedding ceremony in Udaipur has a built-in visual poetry — the anchor's script honours that without overexplaining it.",
    tag:"Pre-Wedding",
  },
  {
    icon:Building2,
    title:"Corporate Retreats & Conferences",
    desc:"National brands and MNCs choose Udaipur for offsite retreats, leadership summits, and annual days. The Lake Palace and Oberoi host conferences for 50–300 delegates. Corporate hosting at luxury properties requires specific restraint and precision.",
    tag:"Corporate",
  },
  {
    icon:Crown,
    title:"Private Celebrations & Galas",
    desc:"Milestone birthday galas, anniversary celebrations, and private family events at Udaipur's finest properties. Intimate high-net-worth events where discretion, personalisation, and emotional intelligence matter as much as energy.",
    tag:"Private Events",
  },
];

const WHY = [
  { num:"01", title:"Lake Venue Acoustic Expertise", desc:"Outdoor lake-facing venues — Taj Lake Palace courtyards, Oberoi lawns, RAAS fort terraces — each has specific acoustic behaviour. Wind direction, water echo, and open-air crowd dispersion all affect vocal delivery and mic management. Years of work at these exact venues means zero surprises." },
  { num:"02", title:"The Restraint That Udaipur Requires", desc:"Udaipur is not Jaipur. The Lake City's wedding aesthetic values elegance over volume, atmosphere over energy. The hosting register shifts completely — authoritative but quiet, warm but precise. Knowing when to let silence and setting carry the moment is the mark of the right anchor for Udaipur." },
  { num:"03", title:"NRI Protocol Fluency", desc:"Udaipur destination weddings attract NRI families from four continents. Bilingual Hindi/English hosting that adapts mid-ceremony to the demographic in front of you. International customs, family dynamics that span UK school runs and Delhi traditions — all navigated without a script." },
  { num:"04", title:"Udaipur Venue Relationships", desc:"Taj Lake Palace, Oberoi Udaivilas, Leela, RAAS, Fateh Garh — the operational teams, catering minimums, vendor protocols, and timing constraints at each property are known from direct experience. The anchor integrates with the venue team, not against it." },
];

const TESTIMONIALS = [
  {
    name:"Mehta Family — London & Jaipur",
    quote:"Taj Lake Palace at sunset. 160 guests from four countries. Our families speak Hindi, English, Gujarati, and everything in between. The anchor switched registers so smoothly across languages and tones that every single guest felt the ceremony was designed for them personally.",
    event:"Destination Wedding · Taj Lake Palace, Udaipur · 160 guests",
  },
  {
    name:"Kapoor-Sharma Family",
    quote:"The Sangeet at Oberoi's lakeside lawn at 11pm was something out of a film. The anchor read the crowd perfectly — high energy when they needed pushing, quiet and atmospheric when the setting called for it. The lake behind everything made it cinematic. He made it feel alive.",
    event:"Destination Sangeet · Oberoi Udaivilas, Udaipur",
  },
  {
    name:"HR Director — National Brand",
    quote:"Annual leadership retreat for 90 senior executives at Leela Udaipur. The anchor maintained corporate precision while using the venue's luxury to elevate the event energy. Not a single dull moment across two days of programming.",
    event:"Corporate Retreat · Leela Palace Udaipur · 90 delegates",
  },
];

const FAQS = [
  {
    q:"Who is the best anchor in Udaipur for destination weddings?",
    a:"Anchor Yash Soni is Rajasthan's 4.9★ rated event host with deep venue relationships at Udaipur's top properties — Taj Lake Palace, Oberoi Udaivilas, Leela Palace, and RAAS Devigarh. Specialist in NRI destination weddings with bilingual Hindi/English hosting and international protocol management.",
  },
  {
    q:"Do you anchor weddings at Taj Lake Palace in Udaipur?",
    a:"Yes. Taj Lake Palace is a core venue specialisation. The floating palace on Pichola Lake has specific operational protocols, ceremony space constraints, and an acoustic environment that requires experience to manage correctly. Multiple events at this property have been hosted across ceremony formats.",
  },
  {
    q:"Do you handle NRI families and international guests at Udaipur weddings?",
    a:"Yes. The majority of Udaipur destination weddings involve NRI families from the UK, USA, Canada, and Gulf. Bilingual Hindi/English hosting with genuine cultural fluency in both registers ensures every guest — grandparents to abroad-raised cousins — feels the ceremony is designed for them.",
  },
  {
    q:"What is the cost of hiring an anchor in Udaipur?",
    a:"Anchor fees for Udaipur events include travel and accommodation from Jaipur. The anchoring fee itself depends on event duration, format complexity, and whether multi-day coverage is required. WhatsApp the event details for a quote within the hour.",
  },
  {
    q:"Can you anchor multiple days at a Udaipur destination wedding?",
    a:"Yes. Udaipur destination weddings typically span 3–5 days — Welcome dinner, Haldi, Mehndi, Sangeet, Wedding ceremony, Reception. Full multi-day coverage is available and strongly recommended to ensure consistent energy and narrative across the entire wedding week.",
  },
  {
    q:"Which Udaipur venues do you anchor events at?",
    a:"Taj Lake Palace, Oberoi Udaivilas, Leela Palace Udaipur, RAAS Devigarh, Fateh Garh, Trident Udaipur, and all major heritage hotels and resorts in and around the city. Each property has its own protocols, acoustic properties, and operational requirements that inform the hosting approach.",
  },
  {
    q:"How far in advance should we book an anchor for a Udaipur destination wedding?",
    a:"For Taj Lake Palace and Oberoi Udaivilas peak season dates, 3–5 months minimum. These properties book out early and the anchor needs to coordinate with the property's event team well before the event. WhatsApp immediately once the venue and dates are confirmed.",
  },
  {
    q:"Do you anchor Sangeet nights in Udaipur?",
    a:"Yes. Sangeet production at Udaipur's lake-facing outdoor venues is a specific specialisation. Open-air acoustic management, crowd energy in a natural lakeside setting, late-night energy pacing — all require a different hosting approach than an indoor Sangeet in Jaipur.",
  },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};

export default function AnchorInUdaipur() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>

      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-rajasthan">Anchor in Rajasthan</Link> ›
        <span>Anchor in Udaipur</span>
      </nav>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-4.webp" alt="Anchor in Udaipur destination wedding lake palace"
            fill priority quality={100} className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(10%)", opacity:.38 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <Waves size={12} className="text-[#D4AF37]"/>
              <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[.3em]">Anchor in Udaipur · Lake City Specialist</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              Udaipur&apos;s<br/><G>Destination Wedding</G><br/>Anchor.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Taj Lake Palace · Oberoi Udaivilas · Leela Palace · RAAS Devigarh — bilingual, NRI-fluent, palace protocol specialist.
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
          3. WHY UDAIPUR IS DIFFERENT
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Lake City Standard</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Udaipur Is Not<br/>Like <G>Anywhere Else.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The lake palace venues, the Aravalli sunset backdrop, the floating ceremony stages — Udaipur's wedding aesthetic is built on restraint and atmosphere. Volume doesn't work here. Energy without elegance looks wrong against the setting.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              An anchor at Taj Lake Palace needs to know when to let silence carry the moment. An anchor at an Oberoi lakeside Sangeet at midnight needs to build energy without breaking the magic. These are completely different skills from anchoring an indoor Jaipur farmhouse wedding — and they come only from having done it, repeatedly, at these specific venues.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Udaipur deserves an anchor who <em className="text-[#D4AF37]">knows the lake</em> — not one learning the venue on your wedding day.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-2.webp" alt="Destination wedding anchor Udaipur lake palace ceremony"
                fill quality={100} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Lake Palace Specialist · NRI Protocol</p>
                <p className="text-white text-xs">Restraint, atmosphere, and bilingual precision — the Udaipur standard.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. VENUE CARDS — 6 properties
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Venue Expertise</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Every Udaipur Venue. <G>Known.</G>
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
          5. EVENT FORMATS — 6 cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Event Formats</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Every Format. <G>Every Lake.</G>
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
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Udaipur <G>Events.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-1.webp", alt:"Destination wedding anchor Udaipur lake palace ceremony",  span:"col-span-2 row-span-2" },
              { src:"/gallery-3.webp", alt:"Sangeet anchor Udaipur Oberoi outdoor night" },
              { src:"/gallery-5.webp", alt:"NRI wedding anchor Udaipur bilingual ceremony" },
              { src:"/gallery-2.webp", alt:"Wedding ceremony anchor Udaipur heritage venue",           span:"col-span-1" },
              { src:"/gallery-4.webp", alt:"Corporate retreat anchor Udaipur luxury property",         span:"col-span-2" },
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
          7. WHY — 4 pillars
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Difference</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Why Udaipur Events <G>Choose This Anchor.</G>
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Udaipur <G>Families.</G></h2>
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
              {["Udaipur Weddings","Taj Lake Palace","Oberoi Udaivilas","Leela Palace","RAAS Devigarh","NRI Families","Bilingual Host","Lake Ceremonies","4.9★ Rating","1100+ Events"].map((t,i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Anchor in <G>Udaipur FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-udp-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. RELATED LINKS
      ══════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">Explore More</p>
              <h2 className="text-2xl md:text-3xl font-bold">Udaipur Is One City. <G>We Cover All of Rajasthan.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon:MapPin,    label:"Anchor in Rajasthan",    href:"/anchor-in-rajasthan",       desc:"All cities" },
              { icon:Crown,     label:"Best Anchor Jaipur",     href:"/best-anchor-in-jaipur",     desc:"Jaipur HQ" },
              { icon:Heart,     label:"Wedding Anchor",         href:"/wedding-anchor-jaipur",     desc:"All formats" },
              { icon:Globe,     label:"Destination Weddings",   href:"/destination-wedding-anchor",desc:"NRI specialist" },
              { icon:Music2,    label:"Sangeet Host",           href:"/sangeet-anchor-jaipur",     desc:"High-energy" },
              { icon:Sparkles,  label:"Haldi Anchor",           href:"/haldi-anchor-jaipur",       desc:"Pre-wedding" },
              { icon:Building2, label:"Corporate Events",       href:"/corporate-event-anchor-jaipur",desc:"JECC & luxury" },
              { icon:Mic2,      label:"Anchor in Jaipur",       href:"/anchor-in-jaipur",          desc:"Full city guide" },
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
          12. SCARCITY CTA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-5 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/6 to-transparent pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[16vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">UDAIPUR</span>
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <Reveal>
            <Waves size={24} className="text-[#D4AF37] mx-auto mb-6 opacity-60"/>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
              Your Udaipur Wedding<br/>Deserves <G>This Anchor.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">Peak season at Taj Lake Palace and Oberoi books 4–5 months out.</p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the venue, date, and guest count — availability confirmed same day.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Check Availability
              </button>
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[9px] uppercase tracking-widest">
              {[
                ["/anchor-in-rajasthan","Anchor in Rajasthan"],
                ["/destination-wedding-anchor","Destination Wedding"],
                ["/wedding-anchor-jaipur","Wedding Anchor"],
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
