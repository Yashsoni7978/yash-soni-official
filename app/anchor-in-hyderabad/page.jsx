"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, ChevronRight, Crown, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Sun, Users } from "lucide-react";
import { FAQItem } from "../_components/InteractiveFAQ";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20event%20in%20Hyderabad.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/hyderabad.webp')", backgroundColor: GOLD }}
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

const HYDERABAD_IDENTITY = [
  {
    icon: Crown,
    title: "The Nizam Heritage Protocol",
    desc: "Taj Falaknuma Palace is not just a venue; it is an institution of extreme royal heritage. When high-net-worth families book this property, they are buying into the legacy of the Nizams. The anchor must possess absolute architectural respect. Screaming into a microphone here is a critical failure. The delivery must be flawlessly articulated, deeply polite, and overwhelmingly authoritative."
  },
  {
    icon: Users,
    title: "The Ramoji Film City Scale",
    desc: "On the opposite end of the spectrum is Ramoji Film City, where weddings routinely scale past 2,000 guests, built on sets that look like Hollywood blockbusters. The acoustic and physical challenge here is immense. The anchor must use advanced crowd-psychology and vocal projection to dominate environments that were literally built for cameras, not intimate human interaction."
  },
  {
    icon: Globe,
    title: "The Cross-Cultural Convergence",
    desc: "Hyderabad is the ultimate bridge between North and South. The city hosts some of the wealthiest Marwari and Telugu communities in India, and cross-cultural weddings are the norm. The anchor must seamlessly code-switch between pristine formal English (for the local elite and corporate guests) and emotionally resonant Hindi (for traditional Marwari rituals), leaving no side feeling alienated."
  },
];

const SERVICES = [
  {
    icon: Crown,
    title: "Taj Falaknuma Luxury Anchor",
    desc: "Immaculate, highly formalized anchoring for ultra-premium weddings at Taj Falaknuma. Balancing the extreme architectural gravity of the palace with the joyous intimacy of the family celebration.",
    tag: "Luxury"
  },
  {
    icon: Users,
    title: "Ramoji Mega-Event Emcee",
    desc: "Mastering the acoustic void and immense scale of Ramoji Film City. Providing extreme physical and vocal crowd control for 2,000+ guest mega-weddings safely and seamlessly.",
    tag: "Mega-Scale"
  },
  {
    icon: Briefcase,
    title: "HITEC City Corporate Host",
    desc: "Directing multi-day tech summits, pharmaceutical galas, and executive leadership conferences. Flawless unscripted English delivery designed to hold the attention of CEOs and international delegates.",
    tag: "Corporate"
  },
  {
    icon: Music2,
    title: "Banjara Hills Elite Sangeet",
    desc: "Driving high-voltage, sophisticated Sangeet energy at premium metropolitan banquets in Banjara and Jubilee Hills. Transitioning rapidly from formal family performances to high-energy dance floor execution.",
    tag: "Sangeet"
  },
];

const VENUES = [
  { name: "Taj Falaknuma Palace", tag: "Ultimate Royal Heritage", icon: Crown },
  { name: "Ramoji Film City", tag: "Mega-Scale Productions", icon: Users },
  { name: "Taj Krishna", tag: "Banjara Hills Luxury", icon: Gem },
  { name: "ITC Kakatiya", tag: "Premium Banqueting", icon: Building2 },
  { name: "Novotel HITEC City", tag: "Corporate Mega-Summits", icon: Briefcase },
  { name: "Chowmahalla Palace", tag: "Historic Nizam Venue", icon: Landmark },
  { name: "Golkonda Resorts", tag: "Luxury Destination", icon: Sparkles },
  { name: "Hyderabad Marriott", tag: "Lake-facing Urban", icon: MapPin },
];

const VS = [
  { problem: "Screaming 'wedding-style' energy into the historic dining halls of Taj Falaknuma", fix: "Regal, understated authority that respects the venue's intense heritage" },
  { problem: "Losing the crowd's attention entirely inside the vast open sets of Ramoji Film City", fix: "Mastery of extreme-scale acoustic projection and physical stage dominance" },
  { problem: "Using only Hindi in a city where metropolitan Telugu elites expect English fluency", fix: "Flawless bilingual code-switching (English/Hindi) tuned to the specific guest list" },
  { problem: "Reading from paper scripts during high-stakes tech and medical summits in HITEC city", fix: "100% unscripted flow—maintaining absolute eye contact and timeline mastery" },
  { problem: "Failing to fuse the cultures during a massive North-South wedding", fix: "Cultural intelligence that honors Marwari rituals while engaging local VIPs" },
  { problem: "Using repetitive filler words that lower the perceived value of the event", fix: "High-net-worth vocabulary and executive-level articulation for premium crowds" },
];

const TESTIMONIALS = [
  {
    name: "Reddy Family",
    quote: "Hosting our event at Taj Falaknuma meant we needed an anchor the venue itself would respect. Yash understood the architectural authority of the palace perfectly. He bridged our North and South Indian relatives flawlessly, balancing deep Hindi warmth with immaculate English. Unbelievable control.",
    event: "Heritage Wedding · Taj Falaknuma · 250 guests"
  },
  {
    name: "Director — Media Conglomerate",
    quote: "Ramoji Film City is so incredibly large that you need an anchor with pure stage dominance to stop a 2,000-person crowd from fracturing into small groups. Yash held the event together from start to finish. His vocal projection and ability to read the massive room was incredible.",
    event: "Mega-Wedding Integration · Ramoji Film City · 2,200 guests"
  },
  {
    name: "VP Operations — Pharma Major",
    quote: "Our annual summit at Novotel HITEC city had 800 international delegates. Yash walked on stage with no script, moderated panel discussions cleanly, and kept the timeline razor-sharp. He transitioned from a highly formal daytime host to an engaging evening gala anchor seamlessly.",
    event: "Corporate Summit · HITEC City · 800 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for luxury and high-profile events in Hyderabad?",
    a: "Anchor Yash Soni is highly sought after across Hyderabad's elite tier. With 1,100+ events and a perfectly calibrated bilingual execution, he provides the deep cultural respect required for Taj Falaknuma weddings and the intellectual sharpness necessary for HITEC City summits."
  },
  {
    q: "Are you familiar with the protocol required for properties like Taj Falaknuma Palace?",
    a: "Absolutely. Taj properties—especially Falaknuma—mandate an 'understated authority.' You cannot use loud, club-style entertainment here. The host must act as the dignified voice of the family, projecting immense respect for the 19th-century architecture while keeping the event seamlessly on schedule."
  },
  {
    q: "Can you manage events at Ramoji Film City where the guest count exceeds 2,000?",
    a: "Yes. Mega-scale events require an entirely different skill set than indoor banquets. Sound dissipates, and guests tend to scatter. At Ramoji, I use aggressive crowd-condensing psychology and specific vocal projection to ensure 2,000 people feel like they are part of a tight, unified celebration."
  },
  {
    q: "Ours is a cross-cultural Marwari and South Indian wedding. How do you bridge the gap?",
    a: "This is the defining dynamic of modern Hyderabad weddings. I use rapid bilingual code-switching. I conduct the ritual aspects in deeply respectful Hindi to satisfy the Marwari elders, but transition instantly to polished, metropolitan English to ensure the local South Indian family and corporate guests are fully engaged."
  },
  {
    q: "Do you use teleprompters or paper scripts for corporate summits?",
    a: "Never. All my corporate anchoring is 100% unscripted. Executive audiences at HITEC city conferences immediately notice when a host is reading. By internalizing the run-sheet, I maintain constant eye contact and can dynamically adjust the timeline if speakers run over."
  },
  {
    q: "Do you host high-energy Sangeet events in Banjara Hills or Jubilee Hills?",
    a: "Yes. For elite metropolitan Sangeets, the key is momentum. I drive the timeline aggressively, transitioning the crowd from seated family dinner performances directly into a high-voltage dance floor environment without letting the energy drop."
  },
  {
    q: "Is it difficult to book you for dates in peak winter?",
    a: "Because I travel Pan-India and anchor extensively across the Rajasthan heritage properties, my winter calendar books out incredibly fast. When you lock a premium Hyderabad venue, I recommend WhatsApping me on the very same day to secure your dates."
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

export default function HyderabadPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/backgrounds/hyderabad_bg.webp" alt="Best Anchor in Hyderabad — Premium Heritage & Urban Events" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Hyderabad · City of Pearls</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[10vw] md:text-[8vw] lg:text-[7rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/hyderabad.webp')" }}
              >
                HYDERABAD
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Taj Falaknuma royal weddings</G>, Ramoji mega-events, and elite corporate summits demanding flawless bilingual command.
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
                Nizam Protocol.<br /><G>Megascale Command.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute summit of elite hosting in Hyderabad.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Hyderabad presents the most polarizing venue challenges in India. You can be hosting 150 global VIPs in the hyper-controlled royal environment of <strong className="text-[#B5952F]">Taj Falaknuma Palace</strong> one night, and commanding 2,000 uncontrolled guests across the sprawling cinematic sets of Ramoji Film City the next. Yash dominates both extremes.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He does not read from scripts. He does not rely on repetitive templates. By combining precision metropolitan English with deep, traditional Hindi, Yash brings an executive-level bilingual standard that perfectly bridges Hyderabad's North-South elite divide.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Hyderabad" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. HYDERABAD IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Hyderabad is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Dual Extremes Demand<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Hyderabad is a market of extremes. It hosts the most intimate, heavily scrutinized royal weddings at Nizam-era properties, while simultaneously supporting the largest corporate and mega-scale events in South India. An anchor here cannot be single-dimensional. You must possess the delicate respect required for a Taj property and the raw vocal firepower needed to hold Ramoji Film City together.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {HYDERABAD_IDENTITY.map((item, i) => (
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
                Taj Falaknuma to<br /><G>HITEC City.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Hyderabad's Best. <G>Known From Inside.</G></h2>
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
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Hyderabad Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Bilingual Mastery.<br /><G>Royal Standards.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a major event in Hyderabad requires an anchor to navigate intense sociological layers. When hosting a cross-cultural Marwari and Telugu elite wedding, the host is the sole bridge. Over-rely on Hindi, and the corporate and local guests check out. Mispronounce English, and the global standard falls apart. Rapid, deeply respectful code-switching is mandatory.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              On the corporate front, anchoring a medical or tech summit at HITEC City requires complete elimination of "wedding host" tropes. You must utilize elite vocabulary, handle complex multi-speaker transitions without reading from paper, and project raw confidence that commands CEOs.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Hyderabad fluency—from the intricate protocols of Taj Falaknuma to the sprawling sets of Ramoji—marks an anchor who operates at the absolute peak of the industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Elite English Calibration", sub: "For HITEC corporate summits" },
                { label: "Cross-Cultural Bridging", sub: "North meets South wedding fluency" },
                { label: "Ramoji Aesthetics", sub: "Defeating extreme mega-scale noise" },
                { label: "Taj Falaknuma", sub: "Understated, high-net-worth respect" },
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
              {["/gallery-4.webp","/gallery-2.webp","/gallery-5.webp","/gallery-1.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Hyderabad event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/backgrounds/hyderabad_bg.webp" alt="Hyderabad Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Hyderabad · The Mega Hub</p>
                <p className="text-white text-xs">Scaling seamlessly from exclusive Taj Falaknuma heritage to roaring 2,500-guest Ramoji sets.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Global Scale.<br /><G>Royal Intimacy.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Hyderabad tests the limits of an anchor. At Ramoji Film City, you are battling wind, massive echo, and crowds numbering in the thousands. At Taj Falaknuma, you are presenting to 150 elite guests in an environment where even a minor slip in etiquette is glaring. Yash builds his stage presence to physically and emotionally anchor these extreme opposites effortlessly.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#B5952F]" /> The "High-Net-Worth" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Premium Hyderabad clients do not accept generic hosting. The execution here must reflect deep cultural intelligence, flawless articulation, and rapid adaptability—delivering an unscripted moderation that ensures the family or brand is represented at the highest possible tier.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Hyderabad Events.</G></h2>
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
              {["Taj Falaknuma","Ramoji Film City","Taj Krishna","Corporate Summit Expert","Bilingual English/Hindi","HITEC City Emcee","Cross-Cultural Weddings","4.9★ Rated","Hyderabad Elite Host"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Hyderabad <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-hyderabad-${idx}`} />
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
              { icon: MapPin, label: "Bangalore", href: "/anchor-in-bangalore", desc: "IT Capital Hub" },
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
              Hyderabad experiences intense overlapping of the corporate summit season and peak luxury wedding dates. Travelling anchors require multi-day blockouts. I do not hold dates without confirmation.
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
              { label: "Anchor in Bangalore", href: "/anchor-in-bangalore" },
              { label: "Anchor in Mumbai", href: "/anchor-in-mumbai" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#B5952F] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · HYDERABAD, INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}
