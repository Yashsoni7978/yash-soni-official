"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, ChevronRight, Crown, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { FAQItem } from "../_components/InteractiveFAQ";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20event%20in%20Bangalore.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/bangalore.webp')", backgroundColor: GOLD }}
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



const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const BANGALORE_IDENTITY = [
  {
    icon: Briefcase,
    title: "The Ultimate Corporate Standard",
    desc: "Bangalore is the Silicon Valley of India. The audience here is highly analytical, deeply professional, and aggressively global. Whether hosting a tech summit in Whitefield or a corporate VC gala, the anchor must possess flawless English articulation. Cheap humor or amateur stage tactics will immediately alienate this demographic. Precision logic and authoritative delivery are mandatory."
  },
  {
    icon: Globe,
    title: "The Cross-Cultural Convergence",
    desc: "Bengaluru's weddings are uniquely diverse. You frequently see high-profile Marwari or North Indian business families marrying into elite South Indian families. The anchor is the cultural bridge. You must seamlessly code-switch between pristine formal English (to honor the metropolitan context) and rich Hindi (to navigate the North Indian rituals), ensuring neither side ever feels excluded."
  },
  {
    icon: Users,
    title: "The Palace Grounds Mega-Scale",
    desc: "When Bangalore hosts a massive wedding, the scale is staggering. Venues like the Bangalore Palace Grounds can host upwards of 2,000 guests in a single event. At this scale, the anchor must possess dominating physical and vocal presence. You aren't just speaking; you are directing traffic, holding attention across football-field-sized venues, and projecting energy that reaches the back row."
  },
];

const SERVICES = [
  {
    icon: Crown,
    title: "Taj & Leela Luxury Protocol",
    desc: "Executing bespoke wedding timelines at ultra-premium properties like the Taj West End and Leela Palace. Impeccable bilingual hosting that respects both the grandeur of the venue and the intimate heritage of the family.",
    tag: "Luxury"
  },
  {
    icon: Briefcase,
    title: "Global Tech Summit Anchor",
    desc: "Directing multi-day corporate conferences, product launches, and startup award galas. Sharp, highly intellectual English moderation tailored for CEOs, investors, and international tech delegates.",
    tag: "Corporate"
  },
  {
    icon: Users,
    title: "Palace Grounds Mega-Weddings",
    desc: "Acoustic command and unscripted crowd control for massive 1,500+ guest Marwari and cross-cultural weddings. Ensuring the timeline flows perfectly despite the overwhelming scale of the venue.",
    tag: "Mega-Scale"
  },
  {
    icon: Music2,
    title: "Elite Urban Sangeet Facilitator",
    desc: "Driving intense, sophisticated Sangeet energy at premium metropolitan banquets. Balancing traditional family dance performances with high-energy modern floor execution, completely unscripted.",
    tag: "Sangeet"
  },
];

const VENUES = [
  { name: "Taj West End", tag: "Heritage Luxury", icon: Crown },
  { name: "The Leela Palace", tag: "Opulent Premium", icon: Gem },
  { name: "Bangalore Palace Grounds", tag: "Mega-Scale Weddings", icon: Users },
  { name: "ITC Gardenia", tag: "Elite Banqueting", icon: Building2 },
  { name: "JW Marriott Bengaluru", tag: "Metropolitan Luxury", icon: Sparkles },
  { name: "BIEC // Whitefield Hubs", tag: "Corporate Mega-Summits", icon: Briefcase },
  { name: "Clarks Exotica", tag: "Resort Destination", icon: MapPin },
  { name: "Ritz-Carlton", tag: "Intimate High-Net-Worth", icon: Heart },
];

const VS = [
  { problem: "Overwhelming an elite tech audience with loud, irrelevant 'wedding-style' shouting", fix: "Sharp, highly articulate corporate calibration suited for global executives" },
  { problem: "Using only pure Hindi in a city where English is the primary metropolitan bridge", fix: "Flawless bilingual code-switching (English/Hindi) tuned to the regional dynamic" },
  { problem: "Losing control of 1,500+ guests at the sprawling Bangalore Palace Grounds", fix: "Mastery of mega-scale acoustic projection and physical stage presence" },
  { problem: "Unable to respectfully weave together a North-South cross-cultural wedding", fix: "Cultural intelligence that honors Marwari rituals while engaging local VIPs" },
  { problem: "Reading from paper notes during rapid-fire startup pitch events or felicitations", fix: "100% unscripted flow—maintaining absolute eye contact and timeline mastery" },
  { problem: "Failing to match the understated elegance required at the Taj West End", fix: "Refined, Taj-standard hosting that elevates the family's prestige" },
];

const TESTIMONIALS = [
  {
    name: "Agarwal Family",
    quote: "Hosting our Marwari wedding at the Taj West End required someone who could respect our rituals deeply in Hindi, while communicating perfectly with our local business partners and friends in English. Yash executed this duality perfectly. He never lost control of the room.",
    event: "Luxury Wedding · Taj West End · 400 guests"
  },
  {
    name: "VP Marketing — Global Software Firm",
    quote: "We flew Yash to Bengaluru for our annual leadership summit. Standing in front of 1,200 tech executives, he carried the entire three-day agenda without a single script or teleprompter. He pivoted effortlessly from serious keynotes to evening gala entertainment. A genuinely elite corporate asset.",
    event: "IT Leadership Summit · Whitefield · 1,200 delegates"
  },
  {
    name: "Reddy & Jain Families",
    quote: "Ours was a cross-cultural massive wedding at Palace Grounds with over 2,000 guests. The noise and scale were terrifying. Yash stepped up and literally commanded the entire ground. His voice, his energy, and his ability to make both sides of the family laugh together... unmatched.",
    event: "Cross-Cultural Wedding · Palace Grounds · 2,200 guests"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for luxury and corporate events in Bangalore?",
    a: "Anchor Yash Soni is highly sought after in Bangalore's elite circuit. With 1,100+ events and a flawless bilingual (English/Hindi) capability, he provides the intellectual polish required for Whitefield corporate summits and the deep cultural respect needed for Taj West End or Palace Grounds luxury weddings."
  },
  {
    q: "We are an IT firm hosting a major summit in Bangalore. Do you use scripts?",
    a: "No. All my corporate anchoring is 100% unscripted. Executive and tech audiences instantly disengage when a host reads from cards. I memorize timelines, panelist bios, and transition logic so I can maintain absolute eye contact and command the room dynamically."
  },
  {
    q: "Ours is a cross-cultural wedding (North Indian & South Indian) in Bengaluru. Can you manage both crowds?",
    a: "Yes. This is a very common requirement in Bangalore. The hosting strategy here is bilingual code-switching. I utilize deeply respectful Hindi to honor the North Indian/Marwari rituals, and flawless metropolitan English to ensure the South Indian family and local VIPs are completely integrated and engaged."
  },
  {
    q: "Can you project enough energy for a mega-wedding at Bangalore Palace Grounds?",
    a: "Venues like Palace Grounds require a completely different skill set than indoor banquets due to massive sound dissipation and crowd scatter. I use specific acoustic pacing, strategic stage movement, and crowd-condensing techniques to ensure a 2,000-person event feels tightly unified."
  },
  {
    q: "Are you familiar with the protocol for properties like The Leela Palace or Taj West End?",
    a: "Absolutely. These ultra-premium urban properties mandate 'understated authority.' You cannot use loud, cheap humor here. The anchor must be the authoritative spine of the event—directing proceedings with immaculate diction and ensuring the host family's prestige is protected at all times."
  },
  {
    q: "Do you anchor Sangeet events in Bangalore?",
    a: "Yes. For elite metropolitan Sangeets, I focus on rapid timeline execution. I transition the evening smoothly from formal family dance performances directly into a high-voltage, interactive dance floor environment, ensuring there are no dead spaces in the energy."
  },
  {
    q: "What languages do you anchor in?",
    a: "I provide premium bilingual anchoring in English and Hindi. For Bangalore, this exact combination is usually perfect—English serves the global, professional, and cross-cultural demographic, while Hindi drives the energy for Sangeets and North Indian ceremonial rituals."
  },
  {
    q: "When should we book you for a Bangalore event?",
    a: "Because I travel pan-India from Rajasthan, flying to Bangalore requires dedicated multi-day blockouts. The corporate summit season often clashes directly with peak wedding dates (Oct–Feb). Please reach out via WhatsApp the moment your venue dates are finalized."
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
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  })),
};

export default function BangalorePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/backgrounds/bangalore_bg.webp" alt="Best Anchor in Bangalore — Luxury Urban Events" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <MapPin size={13} className="text-[#B5952F]" />
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Bangalore · The IT Capital</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[10vw] md:text-[9vw] lg:text-[7.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/bangalore.webp')" }}
              >
                BANGALORE
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Taj West End luxury weddings</G>, Palace Grounds mega-events, and elite tech summits demanding flawless bilingual command.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95">
                  SECURE YOUR DATE →
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-10 py-5 border border-[#D4AF37]/50 text-[#B5952F] font-black uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">
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
                  <s.icon size={16} className="text-[#B5952F] mx-auto mb-3 opacity-60" />
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
              <span className="text-[#B5952F] text-xs uppercase tracking-[0.3em] mb-6 block font-bold">About Anchor Yash</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                Urban Polish.<br /><G>Megascale Command.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled natively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute summit of corporate and luxury hosting in Bengaluru.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Bengaluru is a city of distinct power centers: from the hyper-intellectual tech parks in Whitefield to the deeply heritage-driven ballrooms of <strong className="text-[#B5952F]">The Leela Palace</strong>. Yash operates seamlessly across these lines. His English articulation is precision-engineered for global CEOs, while his Hindi grounds traditional Marwari events with authentic emotional weight.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He does not read from scripts. He does not use generic templates. For high-net-worth cross-cultural weddings or 2,000-delegate tech summits, Yash provides a bulletproof, authoritative anchor layer that elevates the entire ecosystem of an event.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#B5952F] text-xs tracking-widest uppercase hover:text-white transition-colors">
                MY FULL STORY <ArrowRight size={14} />
              </Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Bangalore" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. BANGALORE IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Bengaluru is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The IT Capital Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Bangalore does not tolerate amateurism. The city is defined by global professionals, venture capitalists, and a massive convergence of North and South Indian wealth. An anchor here cannot rely on loud noise and cheap mimicry; the hosting must be intellectually sharp, culturally bridging, and impeccably fluent in both formal English and traditional Hindi.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {BANGALORE_IDENTITY.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all h-full group hover:bg-zinc-900/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition-all">
                    <item.icon size={18} className="text-[#B5952F] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#B5952F] transition-colors">{item.title}</h3>
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
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Difference Is Real</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Generic Anchor <G>vs This One.</G></h2>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                  <p className="text-zinc-500 text-sm">{row.problem}</p>
                </div>
                <div key={`f${i}`} className="bg-zinc-900/30 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-[#B5952F] shrink-0" />
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
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">What I Anchor</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Tech Summits to<br /><G>Luxury Weddings.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all group h-full hover:bg-zinc-900/50 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#B5952F]/60 border border-[#D4AF37]/20 px-2 py-0.5 rounded-full">{s.tag}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 mt-1 group-hover:bg-[#D4AF37] transition-all">
                    <s.icon size={18} className="text-[#B5952F] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#B5952F] transition-colors">{s.title}</h3>
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
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Bangalore's Best. <G>Known From Inside.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-4 text-center group transition-all">
                  <v.icon size={14} className="text-[#B5952F] mx-auto mb-2" />
                  <p className="text-white text-xs font-semibold group-hover:text-[#B5952F] transition-colors">{v.name}</p>
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
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Bangalore Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Bilingual Mastery.<br /><G>Global Standards.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a major event in Bengaluru requires an anchor to navigate intense demographic layers. If you are hosting a cross-cultural wedding between a Marwari family and a local Kannadiga elite, the anchor is the only person who can unify the room. Too much Hindi, and half the room tunes out. Poor English, and the global standard falls apart. Impeccable, rapid code-switching is an absolute necessity.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              On the corporate front, speaking to 1,200 tech delegates in Whitefield requires an entirely different frequency. You must understand panel moderation, exact execution of timed agendas, and the ability to project raw confidence without reading from a script.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Bengaluru fluency—from Palace Grounds to the Taj—marks an anchor who operates at the true metropolitan peak of the industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Elite English Calibration", sub: "For IT & Tech Summits" },
                { label: "Cross-Cultural Bridging", sub: "North meets South wedding fluency" },
                { label: "Palace Grounds Acoustics", sub: "Defeating extreme mega-scale noise" },
                { label: "Taj West End Protocol", sub: "Understated, high-net-worth respect" },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 hover:border-[#D4AF37]/30 rounded-2xl p-5 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mb-3" />
                  <p className="text-white text-sm font-bold group-hover:text-[#B5952F] transition-colors">{item.label}</p>
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
              {["/gallery-2.webp","/gallery-4.webp","/gallery-1.webp","/gallery-5.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Bangalore event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/backgrounds/bangalore_bg.webp" alt="Bangalore Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Bengaluru · The Mega Hub</p>
                <p className="text-white text-xs">Scaling seamlessly from exclusive Taj boardrooms to roaring 2,000-guest Palace Grounds festivities.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Global Scale.<br /><G>Intimate Command.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Bangalore represents massive logistical pressure. When you are managing an international business family's wedding at The Leela Palace, every minute of the timeline is scrutinized. Yash builds his stage presence to physically and vocally anchor these extreme environments—ensuring no matter how large the venue, the host remains the undeniable center of gravity.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#B5952F]" /> The "Venture Standard" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Bangalore clients do not accept generic templates. The hosting here must reflect intelligence, flawless articulation, and rapid adaptability. Delivering completely unscripted, executive-level moderation ensures the brand and the family are represented at the highest possible tier.
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
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Bangalore Events.</G></h2>
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
                    {[...Array(5)].map((_, j) => <Star key={j} fill={GOLD} className="text-[#B5952F] w-3 h-3" />)}
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

      {/* ══ 11. TICKER ══ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["Taj West End","Palace Grounds Bangalore","The Leela Palace","Tech Summit Expert","Bilingual English/Hindi","Corporate Emcee","Cross-Cultural Weddings","4.9★ Rated","Bengaluru Elite Host"].map((t, i) => (
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
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Bangalore <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-bangalore-${idx}`} />
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
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Also Anchoring In</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Metros & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Chennai", href: "/anchor-in-chennai", desc: "Coromandel Coast" },
              { icon: MapPin, label: "Hyderabad", href: "/anchor-in-hyderabad", desc: "Nizam Heritage" },
              { icon: MapPin, label: "Mumbai", href: "/anchor-in-mumbai", desc: "Financial Capital" },
              { icon: MapPin, label: "Goa", href: "/anchor-in-goa", desc: "Beach Destinaton" },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link href={r.href}>
                  <div className="border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-4 text-center transition-all group cursor-pointer hover:bg-zinc-900/50">
                    <r.icon size={14} className="text-[#B5952F] mx-auto mb-2" />
                    <p className="text-white text-xs font-semibold group-hover:text-[#B5952F] transition-colors">{r.label}</p>
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
              <ShieldCheck size={13} className="text-[#B5952F]" />
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-widest">Limited 2025–26 Season Dates</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Your Event Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Bengaluru experiences intense overlapping of the corporate summit season and peak luxury wedding dates. Travelling anchors require multi-day blockouts. I do not hold dates without confirmation.
            </p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the event details — quote within the hour.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-3 px-14 py-6 bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95">
                <CalendarCheck size={18} /> CLAIM YOUR DATE
              </button>
            </Link>
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
              { label: "Anchor in Chennai", href: "/anchor-in-chennai" },
              { label: "Anchor in Hyderabad", href: "/anchor-in-hyderabad" },
              { label: "Anchor in Mumbai", href: "/anchor-in-mumbai" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#B5952F] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · BENGALURU, INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}
