"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, Shield, ShieldCheck, Sparkles, Star, UserCheck, Users, Zap } from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const CITY = "Kumbhalgarh";
const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20heritage%20wedding%20in%20Kumbhalgarh.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/kumbhalgarh.webp')", backgroundColor: GOLD }}>
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
// DATA — All Kumbhalgarh-specific
// ─────────────────────────────────────────────
const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const KUMBHALGARH_IDENTITY = [
  {
    icon: Shield,
    title: "The Great Wall Scale",
    desc: "The second-longest wall in the world stretching 36 kilometres forms part of the visual backdrop for weddings in Kumbhalgarh. Events in venues like The Kumbha Bagh or The Aodhi carry the entire historical weight of the Mewar kingdom behind them. The anchor must reflect that grandeur — not dilute it."
  },
  {
    icon: Globe,
    title: "The Isolation Advantage",
    desc: "Kumbhalgarh's geographic remoteness is precisely why premium destination families choose it. Guests have made the deliberate effort to travel here — which means expectations are extraordinarily high. When a family spends on logistics for 300 guests into the Aravalli hills, the stage performance needs to justify every rupee."
  },
  {
    icon: Crown,
    title: "The Mewar Heritage Register",
    desc: "Kumbhalgarh sits in the heartland of Mewar — the same lineage that gave India Maharana Pratap. The cultural identity is fiercely proud, deeply rooted, and historically literate. An anchor who mispronounces Rajputana names, misreads clan protocols, or brings a Jaipur-tourist energy to a Mewar hereditary celebration has fundamentally failed the room."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Heritage Fort-Wall Wedding",
    desc: "Majestic Varmala ceremonies and phero rituals against the backdrop of Kumbhalgarh Fort's walls. Managing the open-air courtyard acoustics, coordinating with pandit teams, and ensuring royal-level gravitas from baraat entry to reception close.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Hilltop Sangeet Emcee",
    desc: "Sunset Sangeets at The Kumbha Bagh or The Aodhi hotel rooftops — where the Aravalli ridgeline and the fort wall form the backdrop. Managing crowd energy across sprawling open-air stages in a desert-edge environment with zero acoustic support.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Intimate Haldi & Mehndi",
    desc: "Pre-wedding events for destination families who have gathered from across India and abroad. Icebreaker games, interactive Mehndi rituals, and Haldi moments that feel warm, genuine, and completely un-scripted — even when the crowd is international.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Corporate Heritage Retreats",
    desc: "Leadership offsites and annual award nights at Kumbhalgarh's safari and resort properties. The format blends team-building energy with the heritage gravitas of the location — a combination that requires precise tone calibration across day sessions and evening galas.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "The Kumbha Bagh", tag: "Heritage Luxury · Fort View", icon: Crown },
  { name: "The Aodhi Hotel", tag: "HRH Group · Wilderness", icon: Shield },
  { name: "Fateh Safari Lodge", tag: "Boutique Safari · Hilltop", icon: Gem },
  { name: "Kumbhalgarh Safari Camp", tag: "Luxury Tented · Aravalli", icon: Sparkles },
  { name: "WelcomHeritage Kumbhal", tag: "Heritage · Fort Fringe", icon: Building2 },
  { name: "The Mewar Fortress", tag: "Boutique · Stone Heritage", icon: MapPin },
  { name: "Ramada Resort", tag: "Contemporary · Valley View", icon: Star },
  { name: "Raas Kumbhalgarh", tag: "Boutique Pool Set · Luxury", icon: Award },
];

const VS = [
  { problem: "Generic tone completely misreads the Mewar heritage register", fix: "Mewar cultural fluency — Maharana references, Rajputana clan respect, correct pronunciation" },
  { problem: "Cannot manage open-air hilltop acoustics in Aravalli terrain", fix: "Fort-fringe outdoor mastery from repeated events at Kumbha Bagh and Aodhi" },
  { problem: "Unfamiliar with the isolation logistics of a hill destination", fix: "Pre-event coordination with Kumbhalgarh teams ensures zero on-stage surprises" },
  { problem: "Energy level mismatch — same tone for Sangeet and phero ceremony", fix: "Real-time calibration — electric for Sangeet, majestic for ceremony" },
  { problem: "Mispronounces Mewar clan names and wedding ritual references", fix: "Pre-event research deck — every name, every clan, every ritual pre-loaded" },
  { problem: "Cannot hold crowd attention over a long destination event night", fix: "8+ years of destination circuit means the stamina and crowd read are hardwired" },
];

const TESTIMONIALS = [
  {
    name: "Chauhan Family",
    quote: "We wanted a wedding that felt like it belonged to Kumbhalgarh — not a generic event transplanted to a hill. Yash understood that completely. His hosting reflected the Mewar heritage without ever feeling like a history lecture. The guests felt the weight and the celebration simultaneously.",
    event: "Wedding · The Kumbha Bagh · 450 guests"
  },
  {
    name: "Rajawat Family",
    quote: "The hilltop Sangeet at The Aodhi was our most complex event — open skies, Aravalli ridgeline, 380 guests across a massive lawn with no acoustic walls. Yash commanded the entire space without effort. The crowd did not drift once across a full four-hour Sangeet night.",
    event: "Sangeet · The Aodhi Hotel · 380 guests"
  },
  {
    name: "Senior VP — FMCG Brand",
    quote: "We brought 280 senior regional managers into Kumbhalgarh for an annual review and gala. The challenge was maintaining corporate professionalism in a heritage wilderness setting. Yash balanced both perfectly — sharp and brand-aligned through the conference, warm and entertaining through the evening awards.",
    event: "Corporate Retreat · Fateh Safari Lodge · 280 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Kumbhalgarh?",
    a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events anchored across India. He specialises in Kumbhalgarh's heritage and wilderness wedding circuit — The Kumbha Bagh, The Aodhi, Fateh Safari Lodge, and surrounding properties. He brings Mewar cultural fluency, open-air acoustic command, and bilingual Hindi/English hosting tailored for heritage destination families."
  },
  {
    q: "Have you hosted weddings at The Kumbha Bagh in Kumbhalgarh?",
    a: "Yes. The Kumbha Bagh's fort-view courtyard and surrounding gardens are among the most dramatic event spaces in Rajasthan. Working there repeatedly means the venue's acoustic behaviour, the sight lines from different guest positions, and the specific logistical flow of the property are already deeply familiar — not being figured out during your wedding."
  },
  {
    q: "How do you manage the open-air hilltop acoustics at Aodhi or Fateh Safari?",
    a: "The Aravalli terrain creates specific atmospheric sound challenges. Sound carries differently at altitude — there is very little wall reflection and the energy disperses quickly into open space. The technique for holding a large crowd on a hilltop venue is fundamentally different from a Delhi ballroom. It requires spatial crowd-work, not just mic projection, which is a skill built through repeated performance in these environments."
  },
  {
    q: "Can you manage NRI families at Kumbhalgarh destination weddings?",
    a: "Yes. Kumbhalgarh draws families from the UK, Canada, and UAE who specifically want a heritage wilderness wedding rather than a standard hotel event. The hosting challenge is keeping international guests culturally connected and genuinely entertained while ensuring the ritual and heritage moments carry their full weight for the Indian family members. Bilingual unscripted hosting is the only way to manage both simultaneously."
  },
  {
    q: "How far in advance should I book for a Kumbhalgarh destination wedding?",
    a: "Heritage properties in Kumbhalgarh have very limited room inventory, which means event dates are constrained by peak venue availability. The November to February destination season fills 6–8 months in advance at properties like Kumbha Bagh and Aodhi. The anchor calendar mirrors venue booking timelines — secure the date and WhatsApp immediately."
  },
  {
    q: "Do you anchor Sangeet functions in Kumbhalgarh?",
    a: "Yes. Hilltop Sangeets in Kumbhalgarh are among the most visually spectacular and logistically demanding events I anchor. The open-air stage at sunset, the Aravalli backdrop, the acoustic challenges of the terrain, the crowd spread across a large lawn — all of these require preparation, experience, and live adaptability that only comes from having worked these venues repeatedly."
  },
  {
    q: "Can you host corporate retreats and leadership offsites in Kumbhalgarh?",
    a: "Yes. Corporate leadership retreats at Kumbhalgarh's safari and heritage properties are a regular part of my calendar. The format typically includes a day-conference component and an evening awards or performance gala. The tone must shift cleanly between the two — professional and sharp during the day, warm and entertaining through the evening — without the two registers ever bleeding into each other."
  },
  {
    q: "What makes Anchor Yash different from anchors who do Rajasthan generically?",
    a: "Kumbhalgarh is a specific destination with a specific cultural identity. The Mewar heritage, the Maharana Pratap lineage, the isolation of the Aravalli hilltop, the particular acoustic behaviour of the venues — these are details that only matter to someone who has worked here repeatedly. I do not bring a generic Rajasthan set to Kumbhalgarh. I bring a Kumbhalgarh performance to Kumbhalgarh."
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
export default function KumbhalgarhPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/backgrounds/kumbhalgarh_bg.webp" alt="Best Anchor in Kumbhalgarh — The Great Fort Wall at twilight" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">
                Best Event Anchor · Kumbhalgarh · The Great Wall City
              </span>
            </div>

            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[13vw] md:text-[9vw] lg:text-[7rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/kumbhalgarh.webp')" }}>
                KUMBHALGARH
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>heritage fort weddings</G>, hilltop Sangeets, and luxury safari retreats in the shadow of India's Great Wall.
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation as Rajasthan's most trusted destination wedding anchor — commanding crowds with absolute zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light">
                From the massive courtyard of <strong className="text-[#D4AF37]">The Kumbha Bagh</strong> to the wilderness hilltop of The Aodhi, Yash commands the grandeur of Kumbhalgarh's unique heritage stage with a presence that matches the scale of the Great Wall itself.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                No guest list is too complex. No venue is too remote. No acoustic challenge is too unusual. The combination of Mewar cultural fluency, open-air crowd command, and genuine bilingual ease — developed over hundreds of destination events — is what separates a real Kumbhalgarh performance from a transplanted city show.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Kumbhalgarh" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. KUMBHALGARH IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Kumbhalgarh is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Great Wall City Demands<br />a <G>Mewar Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Kumbhalgarh is not a resort town. It is a heritage fortress city with one of the most storied military lineages in Indian history. Families who choose Kumbhalgarh for destination weddings are making a statement about their identity — and the anchor must understand what that statement means.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {KUMBHALGARH_IDENTITY.map((item, i) => (
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
                Every Format.<br /><G>Every Heritage Venue.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Heritage Palaces. <G>Known From Inside.</G></h2>
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

      {/* ══ 7. HERITAGE PROTOCOL ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Heritage Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Mewar Protocol.<br /><G>Uncompromised.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Kumbhalgarh weddings consistently involve families with deep Rajputana heritage. At a destination event in The Kumbha Bagh, the wrong cultural reference, the wrong clan joke, or the wrong energy at a phero ceremony is not a recoverable error. It is a misstep that echoes through the family for years.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              The Mewar identity is specific. Families from this lineage carry immense pride in the Maharana Pratap legacy, the sacrifices of the Haldighati battle, and the particular brand of Rajput dignity that distinguishes Mewar from every other Rajasthan heritage zone. An anchor who conflates Mewar with Jaipur or Jodhpur has already lost the room.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              8+ years of Rajasthan destination circuit means Mewar's clan structures, the correct Rajputana ceremonial sequences, and the particular emotional register of this region are already internalised — not researched the morning of the event.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Mewar Cultural Fluency", sub: "Maharana lineage & clan respect" },
                { label: "Hilltop Acoustic Command", sub: "Aravalli open-air mastery" },
                { label: "Remote Venue Coordination", sub: "Isolation logistics pre-managed" },
                { label: "Bilingual Precision", sub: "English · Hindi · Heritage context" },
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
              {["/gallery-3.webp", "/gallery-1.webp", "/gallery-4.webp", "/gallery-2.webp", "/gallery-5.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Kumbhalgarh event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/backgrounds/kumbhalgarh_bg.webp" alt="Kumbhalgarh Fort Great Wall" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Kumbhalgarh · India's Great Wall</p>
                <p className="text-white text-xs">The Aravalli's most dramatic wedding destination — commanded with full heritage authority.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              10,000+ Crowd.<br /><G>Aravalli Heights.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Commanding events in Kumbhalgarh's heritage venues demands a qualitatively different kind of stage presence. The physical scale of The Kumbha Bagh courtyard, the elevation of The Aodhi hilltop, and the atmospheric remoteness of the safari camps all create challenges that a city-stage anchor simply cannot anticipate.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Heritage Venue Crisis Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Power failures in remote heritage wings, weather changes on open hilltops, last-minute ceremony sequence changes from the pandit — all handled without the guests knowing anything has deviated from the plan.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Mewar Heritage Events.</G></h2>
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
              {["The Kumbha Bagh", "The Aodhi Hotel", "Fateh Safari Lodge", "Mewar Heritage", "Great Wall Weddings", "Bilingual Hindi/English", "Unscripted Mastery", "4.9★ Rated", "Kumbhalgarh Fort"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Kumbhalgarh <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-kumbhalgarh-${idx}`} />
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Also Anchoring In</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rajasthan & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Taj Lake Palace" },
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Mehrangarh" },
              { icon: MapPin, label: "Jaisalmer", href: "/anchor-in-jaisalmer", desc: "Desert · Golden Fort" },
              { icon: MapPin, label: "Pushkar", href: "/anchor-in-pushkar", desc: "Holy Lake · Westin" },
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
              Your Heritage Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Kumbhalgarh's peak destination season fills 6–8 months ahead. Heritage properties have strictly limited availability.
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
              { label: "Anchor in Udaipur", href: "/anchor-in-udaipur" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Anchor in Pushkar", href: "/anchor-in-pushkar" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · KUMBHALGARH, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
