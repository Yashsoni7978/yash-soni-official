"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, UserCheck, Users, Zap } from "lucide-react";



// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const CITY = "Udaipur";
const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Udaipur.%20Can%20you%20check%20availability%3F";
const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,#a8891a 0%,#D4AF37 30%,#f0d878 50%,#D4AF37 70%,#a8891a 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes slowzoom{0%{transform:scale(1)}100%{transform:scale(1.1)}}
  .slow-zoom{animation:slowzoom 18s ease-in-out infinite alternate;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 40s linear infinite;}
  .mask-fade{-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);}
`;
// ─────────────────────────────────────────────
// MICRO COMPONENTS
// ─────────────────────────────────────────────
const G = ({ children }) => (
  <span className="bg-clip-text text-transparent bg-cover bg-center gold-gradient-text"
    >
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
// DATA — All Udaipur-specific, zero generic copy
// ─────────────────────────────────────────────
const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];
const UDAIPUR_IDENTITY = [
  {
    icon: Crown,
    title: "Lake Palace Ceremonials",
    desc: "The Taj Lake Palace sits in the middle of Lake Pichola like a floating dream. Varmala ceremonies here require precise spatial management — the boat arrival, the dhol timing, the lakeside echo acoustics. Every transition must feel choreographed yet spontaneous."
  },
  {
    icon: Globe,
    title: "NRI & International Circuits",
    desc: "Udaipur hosts India's highest concentration of NRI destination weddings. UK, USA, Canada — three generations in one room. The anchor must hold each one. English for the diaspora grandchildren, warm Hindi for the elders, Rajasthani references for the home crowd."
  },
  {
    icon: Sparkles,
    title: "The Palace Protocol",
    desc: "Oberoi Udaivilas, Raffles Udaipur, Leela Udaipur — each property has its own sound restrictions, lighting cues, and protocol for royal families. Working within these constraints while keeping the crowd on fire is a craft learned over dozens of events."
  },
];
const SERVICES = [
  {
    icon: Heart,
    title: "Wedding Anchor",
    desc: "From the lakeside Varmala at Taj Lake Palace to the royal reception at Oberoi Udaivilas — each ritual is managed with cultural precision. NRI protocol, bilingual delivery, zero paper scripts.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Sangeet Emcee",
    desc: "Jagmandir Island Sangeets are iconic — they echo across the lake. The crowd energy needs to match. Unscripted games, live crowd work, and the muscle to keep 500 guests dancing until 2 AM.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Haldi & Mehndi Host",
    desc: "Intimate family events at Fateh Garh or Trident. The tone shifts from chaotic energy to warm inclusion. Games that make the uncles and aunties participate, not just watch.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Corporate Galas",
    desc: "Product launches, annual galas, and leadership summits at Radisson Blu and other Udaipur convention properties. Sharp, unscripted, matching the gravitas of CEOs and keynote speakers.",
    tag: "Corporate"
  },
];
const VENUES = [
  { name: "Taj Lake Palace", tag: "Floating Palace · Lake Pichola", icon: Crown },
  { name: "Oberoi Udaivilas", tag: "5-Star Luxury · 500+ capacity", icon: Gem },
  { name: "Jagmandir Island", tag: "Exclusive Island Venue", icon: MapPin },
  { name: "The Leela Udaipur", tag: "Palatial · 600+ capacity", icon: Building2 },
  { name: "Raffles Udaipur", tag: "Ultra-Luxury · Lake View", icon: Star },
  { name: "Fateh Garh", tag: "Heritage Fort · Hilltop", icon: Award },
  { name: "Trident Udaipur", tag: "Lakeside · Contemporary", icon: Zap },
  { name: "Aurika Udaipur", tag: "Modern Luxury · 400+", icon: Sparkles },
];
const VS = [
  { problem: "Reads from a script, loses the palace crowd by hour two", fix: "Unscripted mastery — same energy at the 5th hour as the 1st" },
  { problem: "Treats NRI guests and local family as the same audience", fix: "Switches registers instantly — English, Hindi, Rajasthani" },
  { problem: "Mispronounces Rajasthani family surnames and ritual names", fix: "Pre-event research — every name, every ritual, verified" },
  { problem: "Dead silence during boat-arrival at lake venues", fix: "Acoustic crowd-pull technique specific to lake settings" },
  { problem: "Panics when palace sound restrictions limit volume", fix: "Adapted intimacy-hosting style for heritage properties" },
  { problem: "Generic tone that fits every city", fix: "Poetic Udaipur register — regal, warm, and never loud" },
];
const TESTIMONIALS = [
  {
    name: "Arjun & Priya Mehta",
    quote: "We flew in guests from London, New York, and Singapore for our Taj Lake Palace wedding. Yash held every single one of them. He switched between English and Hindi so effortlessly, you'd think both were his first language. Our guests from abroad are still talking about the anchor.",
    event: "Wedding · Taj Lake Palace · 600 guests"
  },
  {
    name: "Singhania Family",
    quote: "The Jagmandir Sangeet was a different beast — the echo, the island acoustics, the crowd spread across three levels. Yash adapted in real time. Not once did the energy drop. When the power flickered for 90 seconds, he turned it into a crowd moment. Nobody noticed.",
    event: "Sangeet · Jagmandir Island · 450 guests"
  },
  {
    name: "Events Head — FMCG Group",
    quote: "Annual dealer meet at Leela Udaipur — 380 delegates from across Rajasthan and Gujarat. Day programme, evening gala. The anchor held both formats without a tone change that felt jarring. Senior dealers and new partners both felt seen. That is rare.",
    event: "Dealer Meet · The Leela Udaipur · 380 delegates"
  },
];
const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Udaipur?",
    a: "Anchor Yash Soni is rated 4.9★ by clients across India with 1,100+ events anchored. He specialises specifically in Udaipur's lake palace destination wedding circuit — Taj Lake Palace, Oberoi Udaivilas, Jagmandir Island, Leela Udaipur, Raffles, and Fateh Garh. Bilingual Hindi/English, unscripted, NRI-experienced, with zero paper scripts across his entire career."
  },
  {
    q: "Have you hosted events at Taj Lake Palace and Jagmandir Island?",
    a: "Yes — extensively. Both venues have specific acoustic challenges, boat-arrival timing, and heritage sound protocols. The Lago (lake) setting changes how crowd energy travels. These are not venues you learn on the job. The operational knowledge for Maharana Pratap Sthal, the terrace at Udaivilas, and the courtyard stages at Jagmandir comes from repeated work at these properties."
  },
  {
    q: "Can you manage a bilingual NRI wedding crowd in Udaipur?",
    a: "That is the core specialty for the Udaipur circuit. NRI families from the UK, USA, and Canada bring their extended diaspora. Three generations in one room means three different emotional vocabularies. Sophisticated English for the international crowd, warm rooted Hindi for the parents and elders, and cultural Rajasthani references that make the home crowd feel the pride of the city they chose."
  },
  {
    q: "What is the typical cost of hiring an anchor for a destination wedding in Udaipur?",
    a: "Destination wedding anchoring fees include event duration, travel logistics, pre-event research time, and programme complexity. Multi-day weddings with bi-lingual scripting and full event management are priced differently from single-ceremony events. WhatsApp the event details — a customised quote comes within the hour."
  },
  {
    q: "How far in advance should I book for Udaipur's peak wedding season?",
    a: "Udaipur's peak season runs October through March. Dates at lake palace venues fill 6–8 months ahead, especially for Diwali, New Year, and Valentine's weekend. I do not send replacements and do not maintain a waitlist. Your date is exclusively blocked on receipt of advance — WhatsApp the moment your date is confirmed."
  },
  {
    q: "Do you anchor Sangeet functions on Jagmandir Island?",
    a: "Yes. Jagmandir Island Sangeets are among the most technically complex events on the Udaipur circuit — island acoustics, elevated crowd spread, boat-transfer timing for guest flow, and the echo off Lake Pichola. I have managed Sangeets here that ran 4+ hours without an energy drop. Unscripted crowd games, high-energy bilingual hosting, and real-time adaptation to the island's quirks."
  },
  {
    q: "Can you anchor corporate events and dealer meets in Udaipur?",
    a: "Yes. Udaipur's corporate circuit includes Leela Udaipur, Radisson Blu, and Trident Udaipur. Annual galas, product launches, dealer meets, and leadership summits are a strong specialisation. The hosting register is sharp, brand-aligned, and aware of C-suite hierarchy — not a wedding energy copy-pasted into a boardroom setting."
  },
  {
    q: "What makes Anchor Yash different from local Udaipur anchors?",
    a: "Local anchors know the city. I know the city and the crowd psychology to command every segment of it. 1,100+ events, 10,000+ crowds commanded, 4.9★ rating, and a specific track record at Udaipur's top-tier palace properties. The difference shows in how the NRI grandfather from London feels as included as the local Rajasthani family cousin dancing in the front row."
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
export default function UdaipurPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />
      {/* ══ 1. HERO — Full-Bleed AI City Background ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/backgrounds/udaipur_bg.webp" alt="Best Anchor in Udaipur — Lake Pichola at dusk" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">
                Best Event Anchor · Udaipur · Lake City
              </span>
            </div>
            {/* H1 — ANCHOR + Texture City Name */}
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[15vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4" style={{ backgroundImage: "url('/texture/udaipur.webp')" }}>
                UDAIPUR
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>lake palace weddings</G>, NRI destination events, and elite corporate galas in the City of Lakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95">
                  SECURE YOUR DATE →
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-10 py-5 border border-[#D4AF37]/50 text-[#D4AF37] font-black uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">
                  VIEW PORTFOLIO
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>
      {/* ══ 2. STATS BAR ══ */}
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation for commanding crowds with zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light">
                From the floating elegance of <strong className="text-[#D4AF37]">Taj Lake Palace</strong> to the royal heritage of Udaivilas, Yash brings a level of sophistication and energy that matches Udaipur's premier standard.
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
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Udaipur" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* ══ 3. UDAIPUR IDENTITY — What makes this city unique ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Udaipur is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The City of Lakes Demands<br />a <G>Different Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Udaipur's wedding circuit is the most demanding in India. Palace properties, lake acoustics, royal family protocols, global NRI crowds — and an anchor who can read all of it in real time.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {UDAIPUR_IDENTITY.map((item, i) => (
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
      {/* ══ 4. THE PRO ANCHOR DIFFERENCE — VS TABLE ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Difference Is Visible</p>
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
                Every Format. <G>Every Venue.</G>
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
      {/* ══ 6. ELITE VENUES ══ */}
      <section className="py-16 bg-zinc-950 border-b border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Palaces & Lakes. <G>Known From Inside.</G></h2>
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
      {/* ══ 7. THE NRI CIRCUIT ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The NRI Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Three Continents.<br />One <G>Wedding Room.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Udaipur's lake palaces attract Indian families from London, New York, Toronto, and Sydney. These are not homogeneous crowds. The grandparents who've never left Rajasthan sit next to cousins who grew up speaking English. The anchor must hold everyone — simultaneously.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              The NRI grandchild needs an anchor who sounds like the world they grew up in. The Rajasthani parents need someone who respects the rituals they planned for their life. Both need to see their moments honoured — and neither can feel like the afterthought.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Bilingual code-switching, cultural fluency, and 8+ years of reading mixed rooms — this is what the Udaipur circuit demands and what this anchor delivers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Fluent English", sub: "For NRI & international guests" },
                { label: "Rooted Hindi", sub: "For family elders & local guests" },
                { label: "Rajasthani Context", sub: "Cultural references & rituals" },
                { label: "Zero Teleprompter", sub: "Live reading of every room" },
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
              {["/gallery-1.webp", "/gallery-2.webp", "/gallery-3.webp", "/gallery-4.webp", "/gallery-5.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni live event Udaipur ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/backgrounds/udaipur_bg.webp" alt="Udaipur Lake Palace view" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Udaipur · Lake Pichola</p>
                <p className="text-white text-xs">The most demanding destination wedding circuit in India.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              10,000+ Crowd.<br /><G>Never Unscripted.</G><br />Always Live.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Intimate 50-person VIP lake dinners and 3,000-guest fort weddings are different crafts entirely. Both have been mastered. The psychological grip on any crowd — regardless of size or setting — is the core skill that separates a real anchor from an announcer.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Crisis-Proof at Palace Venues
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Heritage sound restrictions, boat-arrival delays, lake-echo issues, last-minute programme changes. Every incident is invisible to the crowd because it is handled before they notice.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Real Udaipur Events.</G></h2>
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
              {["Taj Lake Palace", "Oberoi Udaivilas", "Jagmandir Island", "The Leela Udaipur", "NRI Destination Weddings", "Bilingual Hindi/English", "Unscripted Mastery", "4.9★ Rated", "1100+ Events"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Udaipur <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-udaipur-${idx}`} />
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
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Fort Weddings" },
              { icon: MapPin, label: "Jaisalmer", href: "/anchor-in-jaisalmer", desc: "Desert · Golden Fort" },
              { icon: MapPin, label: "Pushkar", href: "/anchor-in-pushkar", desc: "Lake Town · Spiritual" },
              { icon: MapPin, label: "Kumbhalgarh", href: "/anchor-in-kumbhalgarh", desc: "Fort Retreat · Hill" },
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
      {/* ══ 14. SCARCITY CTA ══ */}
      <section className="py-24 md:py-32 px-5 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8">
              <ShieldCheck size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Limited 2025–26 Season Dates</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Your Lake Palace Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Udaipur's peak season fills 6–8 months ahead. I do not maintain a waitlist and do not send replacements.
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
      {/* ══ FOOTER ══ */}
      <footer className="py-16 border-t border-white/10 bg-black text-center text-zinc-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold mb-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Anchor in Jaisalmer", href: "/anchor-in-jaisalmer" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · UDAIPUR, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
