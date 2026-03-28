"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mic2, Star, Users, Award, Building2,
  Crown, CalendarCheck, Plus, Minus,
  CheckCircle2, Briefcase, Trophy,
  Sparkles, Globe, MapPin, Zap, Heart
} from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20award%20night%20or%20corporate%20gala%20in%20Jaipur.%20Can%20you%20check%20availability%3F";

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
  { val:"1100", suffix:"+", label:"Events Anchored",    sub:"Anchoring & production",  icon:Mic2     },
  { val:"70",   suffix:"+", label:"Corporate Brands",   sub:"National & international",icon:Briefcase},
  { val:"4.9",  suffix:"★", label:"Client Rating",      sub:"200+ verified reviews",   icon:Star     },
  { val:"10",   suffix:"K+",label:"Largest Crowd",      sub:"Commanded live",          icon:Users    },
];

const FORMATS = [
  {
    icon:Trophy,
    title:"Annual Award Night",
    sub:"Performers · Managers · Teams of the Year",
    desc:"The annual award night is the highest-stakes internal event a company runs. The anchor sets the tone for the entire year's performance culture. Script precision, winner transition management, and the ability to hold an audience through a 3-hour programme without losing energy.",
    tag:"Annual Awards",
  },
  {
    icon:Crown,
    title:"CEO & Leadership Galas",
    sub:"500+ delegates · Black-tie format",
    desc:"Senior leadership events demand a completely different register — authoritative, concise, and aware of the room's hierarchy. Keynote introductions, CEO felicitations, and VIP protocol at luxury venues handled with the gravitas these events require.",
    tag:"Leadership Gala",
  },
  {
    icon:Sparkles,
    title:"Dealer & Channel Partner Meets",
    sub:"300–2000 delegates",
    desc:"Dealer meets are hybrid events — part corporate summit, part celebration. The anchor manages the programme content during the day and drives energy during the evening gala. Bilingual Hindi/English mandatory for dealer meets across Rajasthan.",
    tag:"Dealer Meet",
  },
  {
    icon:Briefcase,
    title:"Product Launch Events",
    sub:"Press · Trade · Consumer launches",
    desc:"A product launch has one job: make the product feel significant. Brand articulation, media engagement, CEO-to-camera moments, and the reveal build-up are all managed from the anchor's position. One wrong tone and the brand equity evaporates.",
    tag:"Product Launch",
  },
  {
    icon:Building2,
    title:"JECC Sitapura Events",
    sub:"Jaipur's largest conference centre",
    desc:"JECC Sitapura is Jaipur's premier convention centre — 5,000 person capacity, national brand events, government summits, and trade exhibitions. The operational protocols, AV infrastructure, and crowd management requirements at JECC are known from multiple events at the property.",
    tag:"JECC Sitapura",
  },
  {
    icon:Zap,
    title:"Annual Day Celebrations",
    sub:"Employee recognition · Entertainment",
    desc:"Annual day is where the entire company is in one room — from senior management to frontline staff. The anchor builds a bridge between the formal recognition programme and the entertainment that follows, without the transition killing the energy of either.",
    tag:"Annual Day",
  },
];

const STANDARD = [
  { num:"01", title:"Zero Teleprompter Dependency",     desc:"Script-reading anchors are the single biggest risk at corporate award nights. Every winner transition, every CEO introduction, every sponsor mention delivered from memory and real-time adaptation — never from a screen. The audience feels the difference immediately." },
  { num:"02", title:"Winner Transition Management",     desc:"The two most dangerous moments in an award night are the gap between category announcement and winner walking on stage, and the gap between acceptance speech and the next award. Both are managed precisely — no dead air, no awkward silences, no energy drop." },
  { num:"03", title:"VIP & CEO Protocol",               desc:"Senior executives and VIP guests require a hosting register that signals awareness of the room's hierarchy without being obsequious. Introductions that add genuine context, not generic titles. This comes from working with C-suite audiences repeatedly." },
  { num:"04", title:"Brand Tone Alignment",             desc:"Every company has a distinct culture — some formal, some celebratory, some high-energy. The hosting register matches the brand precisely, not a generic corporate template. Pre-event brand briefings ensure the anchor is an extension of the company's communication style." },
];

const VENUES = [
  { name:"JECC Sitapura",      note:"5,000 capacity · Jaipur's largest",  tag:"Conference Centre" },
  { name:"Fairmont Jaipur",    note:"5-Star · 800+ capacity",             tag:"Luxury Hotel" },
  { name:"ITC Rajputana",      note:"Heritage luxury · 600 capacity",     tag:"Heritage Hotel" },
  { name:"Marriott Jaipur",    note:"Contemporary · 500 capacity",        tag:"5-Star Hotel" },
  { name:"Birla Auditorium",   note:"Conference · 1,000 capacity",        tag:"Auditorium" },
  { name:"Novotel Jaipur",     note:"Business hotel · 400 capacity",      tag:"Corporate Hotel" },
];

const VS = [
  { problem:"Script-reading robot who loses the room by hour two",  fix:"Unscripted, adapted live — energy consistent throughout" },
  { problem:"Mispronounces winner names and brand terminology",      fix:"Pre-event research — every name, every term, verified" },
  { problem:"Dead air between award categories",                     fix:"Managed transitions — zero gaps, zero energy drop" },
  { problem:"One language excludes half the audience",               fix:"Bilingual Hindi/English — every delegate included" },
  { problem:"Generic corporate tone that fits nobody",               fix:"Brand-briefed hosting that matches company culture exactly" },
  { problem:"Panics when the programme runs over or under time",     fix:"Real-time timeline management — adapts live" },
];

const TESTIMONIALS = [
  {
    name:"Head of Marketing — FMCG Giant",
    quote:"Annual award night for 600 employees across three states. The anchor managed a 4-hour programme — 22 award categories, three keynote speakers, and a live entertainment segment — without a single dead moment. The CEO specifically commented on the host. That never happens.",
    event:"Annual Award Night · JECC Sitapura, Jaipur · 600 employees",
  },
  {
    name:"Events Head — Auto Brand",
    quote:"Dealer meet for 800 channel partners from across Rajasthan and MP. Day programme in Hindi, evening gala in bilingual. The anchoring bridged a very diverse audience — senior dealers who've been with us 25 years and new partners joining for the first time. Seamless.",
    event:"Dealer Meet & Gala · Fairmont Jaipur · 800 delegates",
  },
  {
    name:"VP Operations — National Conglomerate",
    quote:"Product launch for a brand entering a new category. Press, trade buyers, and a live audience. The anchor built the reveal moment correctly — genuine tension before the unveiling, the right energy at the moment of reveal. The coverage was exactly what we needed.",
    event:"Product Launch · ITC Rajputana, Jaipur · Press & Trade",
  },
];

const FAQS = [
  {
    q:"Who is the best award night anchor in Jaipur?",
    a:"Anchor Yash Soni is Jaipur's 4.9★ rated corporate anchor with 70+ national brands served. Specialist in award ceremonies, annual day hosting, CEO galas, and dealer meets at JECC Sitapura, Fairmont, ITC Rajputana, and all major Jaipur corporate venues. Teleprompter-free, brand-aligned, bilingual Hindi/English.",
  },
  {
    q:"Do you anchor corporate award nights at JECC Sitapura in Jaipur?",
    a:"Yes. JECC Sitapura is a core venue specialisation — Jaipur's largest convention centre at 5,000 person capacity. National brand summits, government award nights, and corporate galas at JECC have been anchored multiple times. The venue's AV infrastructure, staging protocols, and operational requirements are known from direct experience.",
  },
  {
    q:"What makes a corporate award night anchor different from a wedding anchor?",
    a:"Register, precision, and brand alignment. A wedding anchor builds emotion and energy. A corporate award night anchor must hold a professional audience's attention across a 3–4 hour programme with multiple award categories, keynote speakers, and sponsor moments — while maintaining brand tone throughout. These are completely different skill sets.",
  },
  {
    q:"Do you anchor dealer meets and channel partner events in Jaipur?",
    a:"Yes. Dealer meets are a regular format — typically 300–2,000 delegates, bilingual Hindi/English mandatory, day programme combined with evening gala. The anchor manages both the structured business programme and the evening celebration. National brands including FMCG, automotive, and BFSI sectors have been served.",
  },
  {
    q:"Can you anchor a product launch event in Jaipur?",
    a:"Yes. Product launches require the anchor to build genuine pre-reveal tension, manage media and trade interactions, facilitate CEO-to-camera moments, and sustain audience engagement across what is often a technically complex programme. Brand briefing happens in advance to ensure the hosting is an extension of the product's communication strategy.",
  },
  {
    q:"What is the cost of hiring an award night anchor in Jaipur?",
    a:"Corporate award night anchoring fees depend on event duration, programme complexity, and whether bilingual scripting and pre-event research are required. WhatsApp the event details for a quote within the hour.",
  },
  {
    q:"Which corporate venues in Jaipur do you anchor events at?",
    a:"JECC Sitapura, Fairmont Jaipur, ITC Rajputana, Marriott Jaipur, Birla Auditorium, Novotel Jaipur, and all major corporate event hotels on JLN Marg and Tonk Road. Each venue has its own technical setup, staging protocols, and AV capabilities — all known from prior events.",
  },
  {
    q:"How far in advance should we book a corporate anchor in Jaipur?",
    a:"For large-format award nights at JECC and major hotels, 4–6 weeks minimum to allow for brand briefing, script research, and winner list preparation. For complex multi-brand events with teleprompter rejection, book 6–8 weeks out. WhatsApp immediately once the date and venue are confirmed.",
  },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};

export default function AwardNightAnchorJaipur() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>

      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/corporate-event-anchor-jaipur">Corporate Anchor Jaipur</Link> ›
        <span>Award Night Anchor Jaipur</span>
      </nav>

      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-3.webp" alt="Award night anchor Jaipur corporate gala JECC Sitapura"
            fill priority quality={100} className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(15%)", opacity:.38 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <Trophy size={12} className="text-[#D4AF37]"/>
              <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[.3em]">Award Night Anchor · Jaipur · JECC Sitapura</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              Corporate Galas<br/>Deserve <G>This</G><br/>Standard.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Award nights · Annual days · CEO galas · Dealer meets · Product launches — teleprompter-free, brand-aligned, bilingual Hindi/English.
                </p>
                <p className="text-zinc-500 text-sm">70+ national brands · 4.9★ · JECC Sitapura specialist</p>
              </div>
              <div className="flex gap-3 flex-wrap shrink-0">
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <button className="px-9 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                    Book via WhatsApp →
                  </button>
                </a>
                <Link href="/corporate-event-anchor-jaipur">
                  <button className="px-7 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                    Corporate Events →
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

      {/* ══ 3. THE PROBLEM ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Script-Reading Problem</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Your Brand Is on Stage.<br/>So Is <G>the Anchor.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The award night anchor represents your company to every employee, client, and partner in the room. A script-reader who stumbles on names, loses the audience between categories, and delivers sponsor mentions like a legal disclaimer is not a neutral presence — they are actively damaging your brand equity in front of your most important audience.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              A corporate award night runs 3–4 hours. Twenty-plus award categories. Keynote speakers. Entertainment transitions. Sponsor acknowledgements. CEO felicitation. Every element has a specific tone requirement. The anchor who can navigate all of it — adapting live, brand-aligned, teleprompter-free — is genuinely rare.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              70+ national brands chose this anchor because <em className="text-[#D4AF37]">the risk of getting it wrong was too high</em> to settle for generic.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-1.webp" alt="Award night anchor Jaipur corporate gala stage presence"
                fill quality={100} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Teleprompter-Free · Brand-Aligned · Bilingual</p>
                <p className="text-white text-xs">70+ national brands. Zero teleprompters. Zero dead moments.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 4. EVENT FORMATS ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Corporate Formats</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Award Nights to <G>Product Launches.</G>
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

      {/* ══ 5. GALLERY ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Visual Proof</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Corporate <G>Events.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-2.webp", alt:"Award night anchor Jaipur JECC Sitapura stage",       span:"col-span-2 row-span-2" },
              { src:"/gallery-4.webp", alt:"Corporate gala host Jaipur Fairmont award ceremony" },
              { src:"/gallery-5.webp", alt:"Annual day anchor Jaipur company event" },
              { src:"/gallery-1.webp", alt:"CEO gala host Jaipur luxury venue",                   span:"col-span-2" },
              { src:"/gallery-3.webp", alt:"Dealer meet anchor Jaipur brand event" },
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

      {/* ══ 6. THE STANDARD — 4 pillars ══ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Standard</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Why 70+ Brands <G>Choose This Anchor.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STANDARD.map((s,i) => (
              <Reveal key={i} delay={i*.08}>
                <div className="bg-zinc-900/40 border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl p-7 transition-all h-full">
                  <p className="text-4xl font-black text-[#D4AF37]/15 mb-4 leading-none">{s.num}</p>
                  <h3 className="text-sm font-black text-white mb-3 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. VS TABLE ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Comparison</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Generic Anchor vs <G>This One.</G>
              </h2>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0"/>
                  <p className="text-zinc-500 text-sm">{row.problem}</p>
                </div>
                <div key={`f${i}`} className="bg-zinc-900/30 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0"/>
                  <p className="text-zinc-200 text-sm font-medium">{row.fix}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. VENUE GRID ══ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Corporate Venues Across <G>Jaipur.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {VENUES.map((v,i) => (
              <Reveal key={i} delay={i*.05}>
                <div className="border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-4 text-center group transition-all">
                  <Building2 size={12} className="text-[#D4AF37] mx-auto mb-2"/>
                  <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{v.name}</p>
                  <p className="text-zinc-600 text-[9px] mt-0.5">{v.note}</p>
                  <span className="text-[8px] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/15 px-2 py-0.5 rounded-full mt-1.5 inline-block uppercase tracking-wide">{v.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. TESTIMONIALS ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">What <G>Brands Say.</G></h2>
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

      {/* ══ 10. TICKER ══ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_,r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["70+ National Brands","JECC Sitapura","Fairmont Jaipur","Annual Award Nights","Dealer Meets","CEO Galas","Product Launches","Teleprompter-Free","Bilingual Host","4.9★"].map((t,i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block"/>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 11. FAQ ══ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Award Night <G>Jaipur FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-awn-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 12. RELATED + CTA ══ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">Awards Are One Format. <G>We Cover Everything.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            {[
              { icon:Building2, label:"Corporate Anchor",    href:"/corporate-event-anchor-jaipur", desc:"All corporate" },
              { icon:Heart,     label:"Wedding Anchor",      href:"/wedding-anchor-jaipur",         desc:"Varmala & ceremony" },
              { icon:Crown,     label:"Best Anchor Jaipur",  href:"/best-anchor-in-jaipur",         desc:"All formats" },
              { icon:MapPin,    label:"Anchor in Rajasthan", href:"/anchor-in-rajasthan",           desc:"Pan-Rajasthan" },
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
          <div className="text-center relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/6 to-transparent pointer-events-none"/>
            <Reveal>
              <Trophy size={24} className="text-[#D4AF37] mx-auto mb-5 opacity-60"/>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
                Your Brand Deserves<br/><G>This Standard.</G>
              </h2>
              <p className="text-zinc-400 text-sm mb-2">Corporate dates at JECC and Fairmont fill 4–6 weeks out.</p>
              <p className="text-zinc-600 text-xs mb-8 uppercase tracking-widest">WhatsApp the event details — quote within the hour.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                  <CalendarCheck size={16}/> Book via WhatsApp
                </button>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
