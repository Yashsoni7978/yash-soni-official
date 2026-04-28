"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Award, Building2, CalendarCheck, CheckCircle2, Crown, Globe, Heart, Laugh, MapPin, Mic2, Minus, Music2, Plus, Rings, Sparkles, Star, Users, Users2, Zap } from "lucide-react";




const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20engagement%2C%20roka%20or%20ring%20ceremony%20in%20Jaipur%20and%20need%20an%20anchor.%20Can%20you%20help%3F";
const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,${GOLD_D} 0%,${GOLD} 30%,${GOLD_L} 50%,${GOLD} 70%,${GOLD_D} 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 36s linear infinite;}
  .mask-fade{-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);}
  .img-h img{transition:transform .65s ease;}
  .img-h:hover img{transform:scale(1.05);}
`;
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
  { val:"1100", suffix:"+", label:"Events Anchored",      sub:"Across India",           icon:Mic2   },
  { val:"300",  suffix:"+", label:"Pre-Wedding Events",   sub:"Roka · Ring · Sagai",    icon:Heart  },
  { val:"4.9",  suffix:"★", label:"Client Rating",        sub:"200+ verified reviews",  icon:Star   },
  { val:"2",    suffix:"+", label:"Families United",      sub:"Every engagement",       icon:Users  },
];
const CEREMONY_TYPES = [
  {
    icon:Heart,
    title:"Roka Ceremony",
    sub:"The official family agreement",
    desc:"The roka is the moment two families formally agree to the union — often the first time both sides are in the same room. The anchor's job is to dissolve the formal stiffness and replace it with warmth. Custom games that get both families laughing together within the first twenty minutes.",
    tag:"Roka",
  },
  {
    icon:Sparkles,
    title:"Ring Exchange Ceremony",
    sub:"The public commitment moment",
    desc:"The ring exchange is the centrepiece. The build-up, the presentation, the emotional pause, the crowd's reaction — all of this is choreographed and narrated. The anchor creates a frame for the moment that makes it feel significant, not rushed.",
    tag:"Ring Ceremony",
  },
  {
    icon:Users2,
    title:"Sagai Ceremony",
    sub:"Traditional engagement with rituals",
    desc:"The sagai involves specific ritual sequences that vary by family and region. The anchor navigates these with cultural fluency — knowing the sequence, guiding guests through it, and maintaining the right tone across the formal ritual and the celebration that follows.",
    tag:"Sagai",
  },
  {
    icon:Globe,
    title:"NRI & Cross-Cultural Engagement",
    sub:"Bilingual · International protocols",
    desc:"Engagements where one or both families are NRI or international bring unique challenges — cultural assumptions don't align, language shifts mid-ceremony, and the audience demographic requires real bilingual fluency rather than token English phrases.",
    tag:"NRI",
  },
  {
    icon:Laugh,
    title:"Large Engagement Parties",
    sub:"100 to 400+ guests",
    desc:"Engagement celebrations that scale to wedding-format crowd sizes. Games, DJ handoffs, couple introductions, family segment management, and timeline control for events that run 4–6 hours. The energy must be built deliberately, not left to chance.",
    tag:"Large Format",
  },
  {
    icon:Crown,
    title:"Intimate Luxury Engagements",
    sub:"50 guests · Palace & heritage venues",
    desc:"High-net-worth intimate engagements at Jaipur's premium hotels and heritage properties. The register is completely different — understated elegance over broadcast energy. Personalisation and emotional precision over crowd games.",
    tag:"Luxury",
  },
];
const ICE_BREAKERS = [
  { title:"Two Families, One Quiz",    desc:"Custom trivia built around both families' shared history, the couple's story, and light cultural differences. Gets both sides competing and laughing simultaneously." },
  { title:"The Honest Roast",          desc:"Gentle, well-researched roast of the couple's best-known habits and quirks — contributed by family and close friends. Calculated to embarrass exactly the right amount." },
  { title:"Who Knows Them Better?",    desc:"A game played between both families — who knows the bride better, who knows the groom better, and what happens when they're both wrong about the same thing." },
  { title:"Couple's Truth Round",      desc:"Questions posed to the couple separately, answered simultaneously. The differences reveal the real story. The crowd is judge." },
];
const VS = [
  { problem:"Awkward silence while both families sit on opposite sides",    fix:"Custom games that force interaction within the first 15 minutes" },
  { problem:"Ring exchange feels rushed and unplanned",                     fix:"Scripted build-up, pause, and narrated moment — it lands emotionally" },
  { problem:"One language excludes half the guests",                        fix:"Bilingual Hindi/English switching — nobody misses a moment" },
  { problem:"Rituals happen without explanation for younger/NRI guests",    fix:"Cultural narration that honours ritual without making it feel like a class" },
  { problem:"Energy dies after the ring exchange",                          fix:"Designed second-half that transitions from formal to celebratory" },
  { problem:"Uncle ji awkwardly trying to run the event himself",           fix:"Professional anchor takes the pressure completely off the family" },
];
const TESTIMONIALS = [
  {
    name:"Sharma Family — Delhi & Jaipur",
    quote:"Our families had never met. Sixty people from two completely different cities, sitting in careful formation on opposite sides of the room. Within thirty minutes of the anchor starting the games, they were mixed together and nobody remembered which side they'd started on.",
    event:"Roka Ceremony · ITC Rajputana Jaipur · 60 guests",
  },
  {
    name:"Kapoor Family",
    quote:"The ring exchange was the best five minutes of the entire event. The build-up the anchor created, the pause before the exchange, the narration — it made something that could have felt like a formality feel genuinely significant. My daughter cried. So did I.",
    event:"Ring Ceremony · Jai Mahal Palace Jaipur · 120 guests",
  },
  {
    name:"Mehta-Singh Family",
    quote:"Our engagement had guests from the UK, US, and three Indian states. The bilingual hosting — genuinely bilingual, not just code-switching every few sentences — meant every single guest felt the event was made for them. That's rare.",
    event:"Sagai Ceremony · Fairmont Jaipur · NRI families · 200 guests",
  },
];
const FAQS = [
  {
    q:"How much does an engagement or roka ceremony anchor in Jaipur cost?",
    a:"Engagement and roka ceremony anchoring in Jaipur starts from ₹12,000 for a standard 2–3 hour event. Ring ceremony galas with custom scripting, family games, and ring exchange narration are priced based on event duration and complexity. WhatsApp the event details for a quote within the hour.",
  },
  {
    q:"What does an engagement ceremony anchor actually do?",
    a:"An engagement anchor scripts and manages the entire ceremony flow — the ring exchange build-up, family introductions, both-family games, ritual narration, and the transition from formal ceremony to celebration. The anchor is the reason the two families stop being strangers and start feeling like one extended family.",
  },
  {
    q:"Do you anchor roka ceremonies in Jaipur?",
    a:"Yes. Roka ceremonies are a specific specialisation — the first formal family meeting is the highest-pressure icebreaker situation in the wedding calendar. Custom games, bilingual hosting, and genuine warmth that turns a formal agreement into a real celebration.",
  },
  {
    q:"Can you host a ring ceremony or sagai in Jaipur?",
    a:"Yes. Ring ceremony and sagai anchoring includes custom scripted ring exchange narration, both-family games, cultural ritual guidance for guests unfamiliar with traditions, and bilingual Hindi/English hosting throughout.",
  },
  {
    q:"What makes a roka ceremony anchor different from a wedding anchor?",
    a:"A roka is about two families meeting for the first time and leaving as one. A wedding is about celebrating a union already established. The roka anchor's job is fundamentally about icebreaking — building warmth and laughter between strangers. This is a different skill set from wedding ceremony anchoring.",
  },
  {
    q:"Do you handle bilingual and NRI families at engagements?",
    a:"Yes. NRI and cross-cultural engagements are common — families where one side is from the UK or US and the other from Rajasthan or Delhi. Genuine bilingual Hindi/English hosting that adapts in real time to the demographic in front of you, not a scripted code-switch every paragraph.",
  },
  {
    q:"How far in advance should we book an engagement anchor in Jaipur?",
    a:"For engagement ceremonies at premium venues, 3–4 weeks minimum. For large-format engagement galas with extensive game design and custom scripting, 4–6 weeks. Weekend dates in peak season fill quickly. WhatsApp as soon as the date and venue are confirmed.",
  },
  {
    q:"Which venues in Jaipur do you anchor engagement events at?",
    a:"All major Jaipur engagement venues — hotel ballrooms and banquet halls at Fairmont, ITC Rajputana, Marriott, Leela, Jai Mahal Palace, standalone event venues in Mansarovar and Vaishali Nagar, and farmhouses on Ajmer Road. The anchor adapts the format to the venue's size, acoustic properties, and audience.",
  },
  {
    q:"Do you design the family games for the engagement ceremony?",
    a:"Yes. Games are custom-designed for each engagement based on the specific families — their backgrounds, the couple's story, and what will work for the exact guest mix present. Never recycled templates. The 'who knows them better' game uses real information gathered from both families in the pre-event briefing.",
  },
];
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};
export default function EngagementRokaAnchor() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/wedding-anchor-jaipur">Wedding Anchor Jaipur</Link> ›
        <span>Engagement & Roka Ceremony Anchor Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-2.webp" alt="Engagement roka ring ceremony anchor Jaipur two families"
            fill priority quality={100} className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(10%)", opacity:.38 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <Heart size={12} className="text-[#D4AF37]"/>
              <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[.3em]">Engagement · Roka · Ring Ceremony · Sagai · Jaipur</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              The Anchor Who<br/>Turns <G>Strangers</G><br/>Into Family.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Roka · Ring Ceremony · Sagai · Engagement — custom scripted, custom games, bilingual Hindi/English. Both families leave feeling like one.
                </p>
                <p className="text-zinc-500 text-sm">Jaipur · Rajasthan · 4.9★ · 1100+ events</p>
              </div>
              <div className="flex gap-3 flex-wrap shrink-0">
                <Link href={WA} target="_blank" rel="noopener noreferrer">
                  <button className="px-9 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                    Book via WhatsApp →
                  </button>
                </Link>
                <Link href="/wedding-anchor-jaipur">
                  <button className="px-7 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                    Wedding Anchor →
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
          3. THE PROBLEM — the awkward room
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Awkward Silence Problem</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Two Families.<br/>One Room. <G>Dead Silence.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              You have invited two families who have never met to sit across from each other in a formal setting and perform a ceremony. Without the right anchor, this is what happens: polite stiffness, careful seating arrangements, and sixty people waiting for somebody else to make it feel normal.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              The engagement anchor's job is to break that stiffness inside the first twenty minutes — using games designed specifically for the two families present, humour that works across generational and cultural divides, and a natural bilingual flow that makes every guest feel the event was made for them.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Done right, the two families leave the roka <em className="text-[#D4AF37]">actually liking each other</em> — not just having survived the formality.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-4.webp" alt="Engagement ceremony anchor Jaipur families icebreaker games"
                fill quality={100} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Custom Games · Ring Narration · Bilingual Host</p>
                <p className="text-white text-xs">Both families leave feeling like one. That's the job.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. CEREMONY TYPES — 6 cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Every Format</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Roka, Ring, Sagai. <G>Every Format Covered.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CEREMONY_TYPES.map((c,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all group hover:bg-zinc-900/60 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
                      <c.icon size={16} className="text-[#D4AF37] group-hover:text-black transition-colors"/>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4AF37]/70 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">{c.tag}</span>
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors">{c.title}</h3>
                  <p className="text-[#D4AF37]/50 text-[9px] font-bold uppercase tracking-widest mb-3">{c.sub}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. ICEBREAKER GAMES — the secret weapon
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Secret Weapon</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Games That <G>Actually Work.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {ICE_BREAKERS.map((g,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl p-7 transition-all group bg-[#0a0a0a] hover:bg-zinc-900/60 flex gap-5">
                  <p className="text-4xl font-black text-[#D4AF37]/15 leading-none shrink-0 group-hover:text-[#D4AF37]/30 transition-colors">0{i+1}</p>
                  <div>
                    <h3 className="text-sm font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">{g.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={.2}>
            <p className="text-zinc-600 text-xs text-center mt-8 italic">Every game is custom-designed for the specific families present — never recycled templates from the last engagement.</p>
          </Reveal>
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
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Real <G>Ceremonies.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-1.webp", alt:"Engagement ceremony anchor Jaipur ring exchange moment",   span:"col-span-2 row-span-2" },
              { src:"/gallery-3.webp", alt:"Roka ceremony anchor Jaipur two families icebreaker" },
              { src:"/gallery-5.webp", alt:"Sagai ceremony host Jaipur bilingual family games" },
              { src:"/gallery-4.webp", alt:"Ring ceremony anchor Jaipur emotional moment",             span:"col-span-2" },
              { src:"/gallery-2.webp", alt:"NRI engagement anchor Jaipur international families" },
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
          7. VS TABLE
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Standard</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Without This Anchor vs <G>With This Anchor.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            <div className="bg-zinc-950 px-6 py-4 border-b border-white/5">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">What usually happens</p>
            </div>
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">What happens here</p>
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
      {/* ══════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Both Families <G>Remember.</G></h2>
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
              {["Roka Ceremony","Ring Exchange","Sagai","Engagement Games","NRI Families","Bilingual Host","Custom Scripts","4.9★ Rating","Jaipur","Rajasthan","1100+ Events"].map((t,i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Engagement Anchor <G>Jaipur FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-eng-${idx}`}/>
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">Engagement Is the Start. <G>We Cover the Whole Wedding.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon:Heart,    label:"Wedding Anchor",      href:"/wedding-anchor-jaipur",         desc:"Varmala & ceremony" },
              { icon:Music2,   label:"Sangeet Host",        href:"/sangeet-anchor-jaipur",         desc:"High-energy Sangeet" },
              { icon:Sparkles, label:"Haldi Anchor",        href:"/haldi-anchor-jaipur",           desc:"Ceremony games" },
              { icon:Globe,    label:"Mehendi Anchor",      href:"/mehendi-anchor-jaipur",         desc:"Ladies events" },
              { icon:Crown,    label:"Best Anchor Jaipur",  href:"/best-anchor-in-jaipur",         desc:"All formats" },
              { icon:Building2,label:"Corporate Events",    href:"/corporate-event-anchor-jaipur", desc:"Award nights" },
              { icon:MapPin,   label:"Anchor in Rajasthan", href:"/anchor-in-rajasthan",           desc:"All cities" },
              { icon:Mic2,     label:"Anchor in Jaipur",    href:"/anchor-in-jaipur",              desc:"Full guide" },
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
          <span className="font-black text-[15vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">TOGETHER</span>
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <Reveal>
            <Heart size={24} className="text-[#D4AF37] mx-auto mb-6 opacity-60"/>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
              Two Families.<br/><G>One Celebration.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">Weekend engagement dates book 3–4 weeks out.</p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the ceremony format and guest count — quote within the hour.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Book via WhatsApp
              </button>
            </Link>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[9px] uppercase tracking-widest">
              {[
                ["/wedding-anchor-jaipur","Wedding Anchor"],
                ["/sangeet-anchor-jaipur","Sangeet Host"],
                ["/haldi-anchor-jaipur","Haldi Anchor"],
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