"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Diamond, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, Power, ShieldCheck, Sparkles, Star, UserCheck, Users, Zap } from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const CITY = "Delhi";
const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20event%20in%20Delhi%20NCR.%20Can%20you%20check%20availability%3F";

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
  <span className="bg-clip-text text-transparent bg-cover bg-center"
    style={{ backgroundImage: "url('/texture/delhi.webp')", backgroundColor: GOLD }}>
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}>
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
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none">
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all mt-0.5 ${open ? "bg-[#D4AF37] text-black" : "border border-white/30"}`}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="px-5 md:px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// DATA — All Delhi-specific
// ─────────────────────────────────────────────
const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const DELHI_IDENTITY = [
  {
    icon: Power,
    title: "The Capital Matrix",
    desc: "Delhi events consistently feature political dignitaries, bureaucrats, and the highest echelon of corporate leadership. Hosting at Taj Palace or ITC Maurya requires an anchor who understands implicit power dynamics and can conduct the room respectfully without losing control of the agenda."
  },
  {
    icon: Users,
    title: "Chhatarpur Farm Scale",
    desc: "A Delhi NCR farmhouse wedding operates on an entirely different scale — sprawling grounds, massive guest counts, and non-stop energy. The anchor must bridge the gap between keeping a 1000-person Punjabi Sangeet highly electric while ensuring the formal Varmala execution remains deeply regal."
  },
  {
    icon: Zap,
    title: "High-Octane Energy",
    desc: "Delhi crowds are unapologetic and demand high entertainment value. A low-energy host will get buried at an Aerocity Sangeet. It requires an aggressive, unscripted wit and the sheer vocal command to keep an entire ballroom locked in past midnight."
  },
];

const SERVICES = [
  {
    icon: Music2,
    title: "Punjabi Sangeet Emcee",
    desc: "Delhi Sangeets are legendary. Commanding hyper-energetic crowds, coordinating with massive dhol-troupes, managing family dance off-flows, and ensuring the energy peaks exactly when the DJ takes over.",
    tag: "High Energy"
  },
  {
    icon: Crown,
    title: "Farmhouse Wedding Anchor",
    desc: "Navigating massive multi-acre venues in Chhatarpur and NH8. Managing grandiose baraat entries, coordinating with large event teams, and pulling decentralized crowds into the main Phero sequences.",
    tag: "Shaadi"
  },
  {
    icon: Building2,
    title: "National Summits & Awards",
    desc: "Hosting national policy summits, association awards, and corporate leadership galas in Aerocity and Connaught Place with complete bilingual fluency and protocol adherence.",
    tag: "Corporate"
  },
  {
    icon: Star,
    title: "VIP & Diplomatic Galas",
    desc: "Hosting at venues heavily guarded by protocol. Discretion, sharp stage presence, and a formal English register tailored for international delegates.",
    tag: "Protocol"
  },
];

const VENUES = [
  { name: "Taj Palace Delhi", tag: "Diplomatic Enclave · Regal", icon: Crown },
  { name: "ITC Maurya", tag: "Iconic Luxury · Sardar Patel", icon: Gem },
  { name: "The Leela Palace", tag: "Ultra Premium · Chanakyapuri", icon: Diamond },
  { name: "Roseate House", tag: "Contemporary · Aerocity", icon: Sparkles },
  { name: "Morbagh", tag: "Luxury Farm · Chhatarpur", icon: MapPin },
  { name: "Pullman Aerocity", tag: "Massive Ballroom · NCR", icon: Building2 },
  { name: "Andaz Delhi", tag: "Modern Scale · Aerocity", icon: Users },
  { name: "A-Dosi Farm", tag: "Elite Estate · Chhatarpur", icon: Star },
];
// Note: diamond not imported, fallback to Gem
VENUES[2].icon = Gem;

const VS = [
  { problem: "Low energy anchors who lose the crowd at a Punjabi Sangeet", fix: "High-octane, magnetic stage presence that feeds off the crowd" },
  { problem: "Overly casual hosts who embarrass VIPs at corporate galas", fix: "Chanakyapuri-level protocol awareness and extreme discretion" },
  { problem: "Inability to project across a 3-acre Chhatarpur farm venue", fix: "Physical crowd-control mechanics and open-air vocal strength" },
  { problem: "Relying on outdated jokes that alienate a sophisticated crowd", fix: "Completely unscripted, organic crowd-work tailored to the moment" },
  { problem: "Cannot handle the bilingual demands of an NCR audience", fix: "Seamless code-switching between impeccable English and sharp Hindi" },
];

const TESTIMONIALS = [
  {
    name: "Arora Family",
    quote: "Our Sangeet at a Chhatarpur farmhouse had 1,200 people. It was chaotic in the best way possible. Yash stepped on stage and completely owned the sheer madness of a true Delhi Sangeet. He had uncles laughing, cousins cheering, and never once let the energy drop.",
    event: "Sangeet · Chhatarpur Farms · 1,200 guests"
  },
  {
    name: "Head of Events — National IT Association",
    quote: "We hosted an international tech summit at the Taj Palace with cabinet ministers in attendance. Yash handled the stage with such gravitas and precision that many delegates assumed he was a senior member of our own board. Highly articulate.",
    event: "Tech Summit · Taj Palace · 600 delegates"
  },
  {
    name: "Chadha Family",
    quote: "From the Varmala at The Leela to the late-night after-party, Yash's transitions were flawless. He understands the Delhi crowd deeply — he knows when to be fully respectful to the elders and when to turn up the heat for the youngsters.",
    event: "Wedding · The Leela Palace · 500 guests"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for massive weddings in Delhi NCR?",
    a: "Anchor Yash Soni is highly sought after for large-scale Delhi NCR events. With a 4.9★ rating across 1,100+ events, he brings the high-energy command required for massive Chhatarpur farm weddings and the sophisticated protocol needed for properties like Taj Palace and ITC Maurya."
  },
  {
    q: "Do you host high-energy Punjabi Sangeets in Delhi?",
    a: "Yes. Delhi Sangeets operate at a completely different energy level. They require an anchor who refuses to use paper scripts, feeds off massive crowds, and can seamlessly coordinate with large dhol troupes and complex family performances without losing control of the timeline."
  },
  {
    q: "Can you handle corporate summits with politicians and VIPs?",
    a: "Absolutely. Yash has extensive experience hosting protocol-heavy events in Delhi's Diplomatic Enclave and Aerocity. He understands the strict stage chronologies, the VIP acknowledgment hierarchies, and the precise English/Hindi register required for government and corporate elites."
  },
  {
    q: "Are you comfortable hosting outdoor events at Chhatarpur Farms?",
    a: "Yes. Open-air farmhouses present unique acoustic and crowd-control challenges. Yash uses advanced spatial crowd-work techniques — rather than just shouting into a mic, he physically works the zones of a massive lawn to unify a decentralized crowd into a single moment."
  },
  {
    q: "Do you travel to Gurugram and Noida for events?",
    a: "Yes. Anchor Yash covers the entire Delhi NCR region, including premium venues in Gurugram (like the DLF Country Club and Leela Ambiance) and massive exhibition grounds in Greater Noida."
  },
  {
    q: "How far in advance should we book for the Delhi winter wedding season?",
    a: "The Delhi peak wedding season (November to February) is the busiest in the country. Key saaya (auspicious) dates at prime venues like Roseate and Andaz book out 6 to 8 months in advance. Yash operates strictly on a first-to-confirm, advance-payment basis."
  },
];


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anchor Yash Soni",
  "image": "https://yashsoni.in/og-image.webp",
  "@id": "https://yashsoni.in/#organization",
  "url": "https://yashsoni.in",
  "telephone": "+917737877978",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vaishali Nagar",
    "addressLocality": "Jaipur",
    "postalCode": "302021",
    "addressRegion": "RJ",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/anchoryashsoni",
    "https://www.facebook.com/anchoryashsoni"
  ]
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function DelhiPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/backgrounds/delhi_bg.webp" alt="Best Anchor in Delhi — National Capital Heritage at twilight" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">
                Best Event Anchor · Delhi NCR · The Capital
              </span>
            </div>

            {/* H1 — ANCHOR + Texture City Name */}
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[15vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4" style={{ backgroundImage: "url('/texture/delhi.webp')" }}>
                DELHI
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>massive farm weddings</G>, high-energy Sangeets, and VIP corporate galas across the National Capital Region.
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

      {/* ══ 2.5 ABOUT SECTION ══ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-5 md:px-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-6 block font-bold">About Anchor Yash</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                Beyond <G>Announcements.</G><br />
                Beyond Scripts.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation for commanding massive crowds with zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light">
                From the protocol-heavy ballrooms of <strong className="text-[#D4AF37]">Taj Palace</strong> to the high-energy chaos of a massive Chhatarpur farm wedding, Yash brings a level of sophistication and electric command that matches Delhi's unmatched scale.
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
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Delhi" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. DELHI IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Delhi NCR is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Capital Demands<br />an <G>Unmatched Scale.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Delhi NCR does not do small events. Whether it is a sprawling farmhouse wedding in Chhatarpur or a government-attended corporate summit in Aerocity, the stages are massive. An anchor with a quiet presence will simply be swallowed by the room.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {DELHI_IDENTITY.map((item, i) => (
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
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                 Generic Anchor <G>vs This One.</G>
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
                Farmhouse Scale to <br/><G>Diplomatic Galas.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Capital <G>Dominance.</G></h2>
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

      {/* ══ 7. PROTOCOL SECTION ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The VIP Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Executive Presence.<br /><G>Uncompromised.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
               Delhi events frequently feature union ministers, international delegates, and the highest echelons of corporate India. The stage requires an anchor who is entirely unfazed by authority, capable of maintaining the event's timeline while respecting elite protocol.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
               Managing a crowd's energy while security details sweep the room or VVIPs make unscheduled appearances is the hallmark of a true professional. It requires discretion, a razor-sharp bilingual vocabulary, and zero panic.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
               8+ years of top-tier events across India means the brand sensitivities, the diplomatic protocols, and the live crisis management are already hardwired — no second-guessing required.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Diplomatic Protocol", sub: "Handling VVIP movement gracefully" },
                { label: "Live Agenda Bridging", sub: "Flawless delay management" },
                { label: "High-Energy Crowd Control", sub: "Managing massive Chhatarpur lawns" },
                { label: "Bilingual Precision", sub: "English · Hindi · Punjabi Context" },
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
               {["/gallery-5.webp", "/gallery-2.webp", "/gallery-1.webp", "/gallery-4.webp", "/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Delhi NCR event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 9. CROWD COMMAND ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/backgrounds/delhi_bg.webp" alt="Delhi Heritage Scale" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Delhi NCR · Farmhouse Scale</p>
                <p className="text-white text-xs">The epicenter of India's biggest celebrations — commanded with absolute authority.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
               10,000+ Crowd.<br /><G>Massive Lawns.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
               Delhi hosts the largest weddings and summits in the nation. The physical prowess required to project across a 3-acre Chhatarpur lawn or an Aerocity exhibition ground is vast. You need an anchor whose presence commands the perimeter, unifying a scattered crowd without merely shouting into a microphone.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                 <ShieldCheck size={16} className="text-[#D4AF37]" /> Open-Air Acoustics mastery
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                 Flawless handling of outdoor acoustic drops, wind factors, and massive spatial distribution — ensuring every guest, from the front row to the very back, is entirely locked in.
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
               <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Elite NCR Events.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />)}
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
               {["Taj Palace Delhi", "ITC Maurya", "The Leela Palace", "Massive Farm Weddings", "Corporate Summit Host", "Bilingual Hindi/English", "Unscripted Mastery", "4.9★ Rated"].map((t, i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block" />
                  {t}
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
               <h2 className="text-3xl md:text-4xl font-black uppercase">Delhi NCR <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-delhi-${idx}`} />
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
               <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Pan-India Authority</p>
               <h2 className="text-2xl md:text-3xl font-black uppercase">Metros & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Mumbai", href: "/anchor-in-mumbai", desc: "Corporate · Sea-Facing" },
              { icon: MapPin, label: "Goa", href: "/anchor-in-goa", desc: "Beachfront · Luxury" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Palace Destination" },
              { icon: MapPin, label: "Bangalore", href: "/anchor-in-bangalore", desc: "Tech Hub · Grand Galas" },
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
               Own The Stage <br /><G>In Delhi.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
               Winter dates for massive NCR events and prime auspicious wedding weekends fill 6–8 months in advance. 
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

      {/* ══ FOOTER ══ */}
      <footer className="py-16 border-t border-white/10 bg-black text-center text-zinc-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold mb-8">
            {[
              { label: "Home", href: "/" }, { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" }, { label: "Contact", href: "/contact" },
              { label: "Anchor in Mumbai", href: "/anchor-in-mumbai" },
              { label: "Anchor in Bangalore", href: "/anchor-in-bangalore" },
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · DELHI NCR & PAN-INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}
