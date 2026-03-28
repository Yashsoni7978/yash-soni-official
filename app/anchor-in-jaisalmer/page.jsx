"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mic2, Star, Users, MapPin, Globe,
  Heart, Music2, Crown, CalendarCheck,
  Plus, Minus, CheckCircle2, Wind,
  Building2, Sparkles, Flame, Moon
} from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20or%20event%20in%20Jaisalmer.%20Can%20you%20check%20availability%3F";

const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,${GOLD_D} 0%,${GOLD} 30%,${GOLD_L} 50%,${GOLD} 70%,${GOLD_D} 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 40s linear infinite;}
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
  { val:"1100", suffix:"+", label:"Events Anchored",    sub:"Rajasthan & India",     icon:Mic2    },
  { val:"30",   suffix:"+", label:"Jaisalmer Events",   sub:"Desert specialist",     icon:Flame   },
  { val:"4.9",  suffix:"★", label:"Client Rating",      sub:"200+ verified reviews", icon:Star    },
  { val:"575",  suffix:"km",label:"From Jaipur",        sub:"Travel-ready always",   icon:MapPin  },
];

const VENUES = [
  {
    name:"Suryagarh Palace",
    tag:"Iconic · Top-Tier",
    desc:"Jaisalmer's most celebrated luxury property. A fortress palace on the edge of the desert with dramatic architecture, torchlit courtyards, and sand dune views. The premier address for destination weddings in Rajasthan's Golden City.",
    highlight:true,
  },
  {
    name:"Serai Luxury Camp",
    tag:"Desert Camp · Ultra-Luxury",
    desc:"The Serai sits in the heart of the Thar Desert — 100 acres of private wilderness, luxury tented suites, and Sangeet evenings under a sky with zero light pollution. The most immersive outdoor event experience in India.",
  },
  {
    name:"Marriott Jaisalmer",
    tag:"5-Star Contemporary",
    desc:"The city's modern luxury anchor for mid-to-large format weddings. Ballrooms and outdoor lawns for 200–500 guests, with consistent AV infrastructure and international hospitality standards.",
  },
  {
    name:"Jaisalmer Fort Viewpoints",
    tag:"Heritage · Open-Air",
    desc:"Events on the ramparts and rooftops overlooking the 12th-century Sonar Qila. The fort glows gold at night — Sangeet evenings and Haldi ceremonies with this backdrop are unforgettable. Acoustic management for altitude and wind.",
  },
  {
    name:"Private Desert Camps",
    tag:"Exclusive · Open Desert",
    desc:"Bespoke desert camp setups organised by destination wedding planners — bonfire Sangeets, sunrise Haldis, and moonlit ceremonies. The most intimate destination wedding format in all of Rajasthan.",
  },
  {
    name:"The Gulaal Kothi",
    tag:"Heritage Boutique",
    desc:"Heritage haveli converted to a boutique property with rooftop event spaces overlooking the fort. Intimate weddings and corporate retreats for 50–120 guests in authentic Jaisalmer architecture.",
  },
];

const FORMATS = [
  {
    icon:Moon,
    title:"Desert Sangeet Night",
    sub:"Under stars · Open desert · 10pm–3am",
    desc:"A Sangeet in the Thar Desert at night is unlike anything else in the Indian wedding calendar. The acoustic void of the open desert, the temperature drop after sunset, the bonfire centrepiece — crowd energy management in this environment requires complete adaptation from an indoor Sangeet.",
    tag:"Desert Sangeet",
  },
  {
    icon:Flame,
    title:"Sufi Night Hosting",
    sub:"Qawwali · Spiritual ambience",
    desc:"Jaisalmer's cultural heritage makes it the natural home for Sufi night events — qawwali performances, devotional music, and a hosting register that honours the spiritual roots of the form without making it feel solemn. The anchor guides guests through the experience.",
    tag:"Sufi Night",
  },
  {
    icon:Heart,
    title:"Desert Destination Wedding",
    sub:"Varmala · Pheras · Bidaai",
    desc:"Wedding ceremonies at Suryagarh, Serai, or open desert venues. Sand dune ceremony backdrops, torchlit mandaps, and the dramatic scale of the Thar as witness. The visual poetry is built-in — the anchor's register must honour the scale without trying to fill it.",
    tag:"Wedding Ceremony",
  },
  {
    icon:Sparkles,
    title:"Pre-Wedding Ceremonies",
    sub:"Haldi · Mehndi · Welcome dinners",
    desc:"Sunrise Haldi by the dunes. Mehndi under pavilions overlooking the fort. Welcome dinners beside bonfire setups at desert camps. Each pre-wedding ceremony in Jaisalmer has a visual backdrop that makes the hosting almost effortless — if the anchor knows how to use it.",
    tag:"Pre-Wedding",
  },
  {
    icon:Globe,
    title:"NRI & International Families",
    sub:"Bilingual · International protocol",
    desc:"Jaisalmer destination weddings draw NRI families specifically because no other place on earth looks like this. UK, USA, Canada, and Gulf families with international guests need a bilingual anchor who can do justice to the choice they made.",
    tag:"NRI",
  },
  {
    icon:Building2,
    title:"Corporate Desert Retreats",
    sub:"Leadership summits · Team events",
    desc:"National brands use Suryagarh and Serai for leadership offsite events, incentive trips, and team-building retreats. The desert setting creates a genuinely different mental space. Corporate hosting here requires the same precision as a city conference — with the ability to match the environment.",
    tag:"Corporate",
  },
];

const ACOUSTIC = [
  { num:"01", title:"Open Desert Wind Management",   desc:"Desert wind at night creates unpredictable acoustic interference. Mic technique, positioning, and vocal projection adapt specifically to wind direction and speed. Never fought with a windscreen — worked with the environment instead." },
  { num:"02", title:"Sand Dune Sound Dispersion",    desc:"Open-air events on dunes have zero natural acoustic walls. Sound disperses in all directions simultaneously. Voice projection technique compensates for the absence of reflecting surfaces — a skill that only comes from actually having hosted dune events." },
  { num:"03", title:"Fort Altitude & Echo",          desc:"Events on Jaisalmer Fort's ramparts and rooftops have altitude, wind, and the occasional echo off stone walls. The hosting register adapts — more projection where needed, controlled delivery where the stone creates echo." },
  { num:"04", title:"Temperature & Energy Shifts",   desc:"Desert nights drop sharply after sunset. A Sangeet starting at 10pm is physically cold by midnight. Crowd energy management accounts for the temperature — building momentum that carries people through the thermal drop without letting it kill the atmosphere." },
];

const TESTIMONIALS = [
  {
    name:"Agarwal Family — Mumbai & Jaisalmer",
    quote:"Suryagarh at midnight. 140 guests. Bonfire in the courtyard and a Sangeet that ran until 3am. The anchor understood the desert — when to let the setting carry the moment and when to push the energy. That balance is everything at Suryagarh.",
    event:"Destination Sangeet · Suryagarh Palace, Jaisalmer · 140 guests",
  },
  {
    name:"Sharma-Patel Family — London & Delhi",
    quote:"Our Sufi night was the part of the wedding weekend that international guests talked about most. The anchor guided the audience through the qawwali context, built the spiritual atmosphere, and then transitioned to high energy for the second half without it feeling jarring. Genuinely masterful.",
    event:"Sufi Night Event · Serai Luxury Camp, Jaisalmer",
  },
  {
    name:"HR Director — FMCG Brand",
    quote:"Leadership offsite at Serai for 65 senior leaders. The desert setting did half the work — the anchor did the other half. Two days of programming in the desert, zero dead moments, every session ran on schedule. The dunes at sunrise for the closing session will not be forgotten.",
    event:"Corporate Desert Retreat · Serai Camp, Jaisalmer · 65 delegates",
  },
];

const FAQS = [
  {
    q:"Who is the best anchor for destination weddings in Jaisalmer?",
    a:"Anchor Yash Soni is Rajasthan's 4.9★ rated event host with specialist experience at Suryagarh Palace, Serai Luxury Camp, and open desert venues in Jaisalmer. Bilingual Hindi/English hosting with NRI protocol management and open-air acoustic expertise specific to desert environments.",
  },
  {
    q:"Do you anchor weddings and Sangeets at Suryagarh Palace Jaisalmer?",
    a:"Yes. Suryagarh is a core venue specialisation. The fortress palace's torchlit courtyards, rooftop terraces, and sand dune-view event spaces each have distinct acoustic properties and operational protocols that require prior venue experience to navigate correctly.",
  },
  {
    q:"Can you host events at Serai Luxury Camp in the open desert?",
    a:"Yes. Serai desert camp events are a specific specialisation. Open-air acoustic management in the Thar Desert — wind, sound dispersion, temperature management, and late-night energy pacing — requires completely different skills from an indoor venue. These come only from having hosted events at Serai.",
  },
  {
    q:"What is a Sufi night and how do you host one?",
    a:"A Sufi night is a cultural music event built around qawwali and Sufi devotional performances — common at Jaisalmer destination weddings because of the city's deep connection to the Sufi tradition. The hosting role involves contextualising the performances for guests unfamiliar with the tradition, building the spiritual atmosphere, and managing the energy arc of the evening.",
  },
  {
    q:"How do you handle open-air acoustic challenges in the desert?",
    a:"Desert venues present specific acoustic challenges: open-air sound dispersion with no reflecting walls, wind interference at night, fort-altitude echo at rampart venues. Mic positioning, vocal projection technique, and hosting delivery all adapt specifically to each outdoor environment. This comes from direct experience at these venues, not textbook knowledge.",
  },
  {
    q:"Do you handle NRI and international families at Jaisalmer weddings?",
    a:"Yes. Jaisalmer destination weddings specifically attract NRI families who chose the Golden City for its visual uniqueness. Bilingual Hindi/English hosting with international guest protocols ensures every guest — grandparents to abroad-raised cousins — feels the wedding was designed for them.",
  },
  {
    q:"How far in advance should we book an anchor for Jaisalmer?",
    a:"For Suryagarh and Serai peak season (October–February), 3–5 months minimum. Both properties book out very early and the anchor needs advance coordination with their event teams. WhatsApp immediately once venue and dates are confirmed.",
  },
  {
    q:"What events do you anchor in Jaisalmer besides weddings?",
    a:"Corporate desert retreats and leadership offsite events at Suryagarh and Serai, Sufi nights, milestone anniversary celebrations, and private destination birthday events. All formats handled — from 50-person intimate desert camps to 400-guest palace weddings.",
  },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};

export default function AnchorInJaisalmer() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>

      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-rajasthan">Anchor in Rajasthan</Link> ›
        <span>Anchor in Jaisalmer</span>
      </nav>

      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-5.webp" alt="Anchor in Jaisalmer desert destination wedding Suryagarh"
            fill priority quality={100} className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(10%)", opacity:.38 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <Flame size={12} className="text-[#D4AF37]"/>
              <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[.3em]">Anchor in Jaisalmer · Desert Specialist</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              The Golden City&apos;s<br/><G>Desert Wedding</G><br/>Anchor.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Suryagarh Palace · Serai Luxury Camp · Open Desert · Fort Rooftops — bilingual, open-air acoustic specialist, Sufi night host.
                </p>
                <p className="text-zinc-500 text-sm">4.9★ · 1100+ events · Available for multi-day desert coverage</p>
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

      {/* ══ 2. STATS ══ */}
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

      {/* ══ 3. WHY JAISALMER IS DIFFERENT ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Desert Standard</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              No Other Destination<br/>Looks Like <G>Jaisalmer.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The Thar Desert is the backdrop that cannot be manufactured anywhere else. The golden fort rising from the sand. The desert night sky with no light pollution. The bonfire Sangeet at Serai with dunes as far as the eye can see. Couples choose Jaisalmer because no studio, no venue, no decorator can replicate what this place simply is.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              But the desert presents challenges that break unprepared anchors. Wind kills open-air mics. Sound disperses into nothing without walls to reflect it. Temperature drops of 15°C after sunset shift crowd energy mid-Sangeet. Hosting in Jaisalmer means mastering the environment, not fighting it.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              The Golden City deserves an anchor who has <em className="text-[#D4AF37]">hosted inside its dunes</em> — not one learning the desert on your wedding day.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-3.webp" alt="Desert destination anchor Jaisalmer Suryagarh Serai open air"
                fill quality={100} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Desert Acoustic Mastery · Sufi Night Host</p>
                <p className="text-white text-xs">The Thar is the backdrop. The anchor makes it come alive.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 4. VENUES ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Venue Expertise</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Every Desert Venue. <G>Known.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VENUES.map((v,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className={`rounded-2xl border p-7 relative overflow-hidden transition-all group hover:border-[#D4AF37]/50 h-full ${
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

      {/* ══ 5. EVENT FORMATS ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Event Formats</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Desert Sangeets to <G>Sufi Nights.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FORMATS.map((f,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all group hover:bg-zinc-900/60 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
                      <f.icon size={16} className="text-[#D4AF37] group-hover:text-black transition-colors"/>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4AF37]/70 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">{f.tag}</span>
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors">{f.title}</h3>
                  <p className="text-[#D4AF37]/50 text-[9px] font-bold uppercase tracking-widest mb-3">{f.sub}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. GALLERY ══ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Visual Proof</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Desert <G>Events.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-4.webp", alt:"Desert wedding anchor Jaisalmer Suryagarh palace ceremony",  span:"col-span-2 row-span-2" },
              { src:"/gallery-1.webp", alt:"Sangeet anchor Jaisalmer open desert bonfire night" },
              { src:"/gallery-2.webp", alt:"Sufi night host Jaisalmer cultural event" },
              { src:"/gallery-3.webp", alt:"NRI destination anchor Jaisalmer desert camp",               span:"col-span-2" },
              { src:"/gallery-5.webp", alt:"Heritage fort event anchor Jaisalmer rooftop" },
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

      {/* ══ 7. ACOUSTIC EXPERTISE — unique section ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Desert Advantage</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Open-Air Acoustic <G>Mastery.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACOUSTIC.map((a,i) => (
              <Reveal key={i} delay={i*.08}>
                <div className="bg-zinc-900/40 border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl p-7 transition-all h-full">
                  <p className="text-4xl font-black text-[#D4AF37]/15 mb-4 leading-none">{a.num}</p>
                  <h3 className="text-sm font-black text-white mb-3 uppercase tracking-tight">{a.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. TESTIMONIALS ══ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Under the <G>Desert Sky.</G></h2>
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

      {/* ══ 9. TICKER ══ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_,r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["Jaisalmer","Suryagarh Palace","Serai Luxury Camp","Open Desert","Sufi Nights","Desert Sangeet","Fort Rooftops","NRI Families","Bilingual Host","4.9★ Rating"].map((t,i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block"/>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 10. FAQ ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Anchor in <G>Jaisalmer FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-jsl-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. RELATED ══ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">Explore More</p>
              <h2 className="text-2xl md:text-3xl font-bold">Jaisalmer Is One City. <G>We Cover All Rajasthan.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon:MapPin,    label:"Anchor in Rajasthan",    href:"/anchor-in-rajasthan",        desc:"All 7 cities" },
              { icon:Globe,     label:"Anchor in Udaipur",      href:"/anchor-in-udaipur",          desc:"Lake Palace" },
              { icon:Crown,     label:"Anchor in Jodhpur",      href:"/anchor-in-jodhpur",          desc:"Umaid Bhawan" },
              { icon:Heart,     label:"Destination Weddings",   href:"/destination-wedding-anchor", desc:"NRI specialist" },
              { icon:Music2,    label:"Sangeet Host",           href:"/sangeet-anchor-jaipur",      desc:"High-energy" },
              { icon:Building2, label:"Corporate Events",       href:"/corporate-event-anchor-jaipur",desc:"Summits" },
              { icon:Sparkles,  label:"Wedding Anchor",         href:"/wedding-anchor-jaipur",      desc:"All formats" },
              { icon:Mic2,      label:"Best Anchor Jaipur",     href:"/best-anchor-in-jaipur",      desc:"Jaipur HQ" },
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

      {/* ══ 12. CTA ══ */}
      <section className="py-24 md:py-32 px-5 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/6 to-transparent pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[16vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">JAISALMER</span>
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <Reveal>
            <Flame size={24} className="text-[#D4AF37] mx-auto mb-6 opacity-60"/>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
              The Desert Awaits.<br/><G>Book the Anchor.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">Suryagarh and Serai peak dates book 4–5 months in advance.</p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the venue and date — availability confirmed same day.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Check Availability
              </button>
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[9px] uppercase tracking-widest">
              {[["/anchor-in-rajasthan","Anchor in Rajasthan"],["/anchor-in-udaipur","Anchor in Udaipur"],["/anchor-in-jodhpur","Anchor in Jodhpur"],["/destination-wedding-anchor","Destination Wedding"],["/contact","Contact"]].map(([h,l]) => (
                <Link key={h} href={h}><span className="hover:text-[#D4AF37] transition-colors">{l}</span></Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
