"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plane, Plus, ShieldCheck, Sparkles, Star, Sun, TreePine, Users } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Pushkar.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
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

const FAQItem = ({ q, a, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all mt-0.5 ${open ? "bg-[#D4AF37] text-black" : "border border-white/30"}`}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const PUSHKAR_IDENTITY = [
  {
    icon: Globe,
    title: "The NRI Convergence Zone",
    desc: "Pushkar is a massive magnet for international and NRI families seeking an authentic desert wedding outside of the heavier Jaipur/Udaipur commercial circuits. Delivering an event here requires flawless bilingual execution. The anchor must bridge the deeply traditional rituals expected by Marwari elders with the metropolitan English fluency expected by guests flying in from London, Dubai, or New York."
  },
  {
    icon: ShieldCheck,
    title: "The Satvik Protocol Challenge",
    desc: "Because Pushkar is a holy city around the Brahma Temple, many properties completely prohibit alcohol and non-vegetarian catering. This profoundly impacts the energy of a Sangeet. Without a bar to artificially loosen the crowd, the anchor must possess an extraordinary ability to manufacture raw, organic energy and drive the dancing through sheer charisma, audience psychology, and explosive pacing."
  },
  {
    icon: TreePine,
    title: "Sprawling Resort Acoustics",
    desc: "Properties like Ananta Spa or Westin are massively spread out over harsh terrain, featuring colossal open-air lawns and dunes. Desert wind instantly dissipates sound. An anchor here must understand specialized vocal projection, timeline synchronization across vast walking distances, and physical crowd-condensing techniques to ensure the event feels intimate rather than scattered."
  },
];

const SERVICES = [
  {
    icon: Plane,
    title: "NRI Destination Hosting",
    desc: "Absolute bilingual mastery for international guest lists. Ensuring the deeply rooted Rajasthani culture is presented beautifully in elite English without ever losing the warmth of Hindi traditions.",
    tag: "International"
  },
  {
    icon: Music2,
    title: "Satvik High-Energy Sangeet",
    desc: "Generating overwhelming crowd momentum and explosive dance-floor hypes organically, entirely independent of alcohol or modern club environments.",
    tag: "High-Voltage"
  },
  {
    icon: Crown,
    title: "Westin & Ananta Logistics",
    desc: "Seamless acoustic and schedule management across the massive 5-star properties of Pushkar, keeping the 500+ sprawling guest lists localized and engaged at the main stage.",
    tag: "Luxury Scale"
  },
  {
    icon: Heart,
    title: "Cross-Cultural Ceremonies",
    desc: "Expertly anchoring weddings that fuse traditional Marwari and international families. Utilizing advanced code-switching so no sector of the audience ever feels disconnected from the ceremony.",
    tag: "Cross-Cultural"
  },
];

const VENUES = [
  { name: "The Westin Pushkar", tag: "Ultra-Luxury Resort", icon: Crown },
  { name: "Ananta Spa & Resort", tag: "Sprawling Valley Setup", icon: TreePine },
  { name: "The Greenhouse Resort", tag: "Eco-Luxury Intimacy", icon: Gem },
  { name: "Taj Pratap Palace", tag: "Ajmer Border Heritage", icon: Building2 },
  { name: "Brahma Horizon", tag: "Premium Hospitality", icon: Sparkles },
  { name: "Desert Hills", tag: "Dune-Side Scale", icon: Users },
  { name: "Pushkar Resorts", tag: "Classic Destination", icon: MapPin },
  { name: "Savasi Camp", tag: "Luxury Tent Protocols", icon: Sun },
];

const VS = [
  { problem: "Sangeet dying out early because the venue strictly prohibited an open bar", fix: "Mastering raw, organic crowd psychology to manufacture intense, natural dancing energy" },
  { problem: "Losing the crowd physically due to massive sound scatter on open desert lawns", fix: "Utilizing deep vocal projection and crowd-condensing techniques to force intimacy" },
  { problem: "Using cheap local humor that alienates the high-net-worth NRI guest list", fix: "Flawless, executive-grade English delivery mixed with highly respectful traditional Hindi" },
  { problem: "Reading from paper notes during rapid-fire, multi-family Sangeet performances", fix: "100% unscripted flow—maintaining absolute eye contact and continuous stage momentum" },
  { problem: "Failing to fuse the cultures during an international-Marwari wedding", fix: "Bilingual intelligence that bridges London/Dubai VIPs directly with local elders" },
  { problem: "Failing to respect the holy perimeter of Pushkar with inappropriate jokes", fix: "Pristine, culturally-aware hosting that elevates the prestige of the entire family" },
];

const TESTIMONIALS = [
  {
    name: "Jindal Family (Dubai)",
    quote: "Pushkar is a holy town with strict alcohol restrictions, so we were genuinely terrified the Sangeet at Ananta Resort would fall completely flat. Yash came in completely unscripted and generated so much raw, explosive energy that nobody even noticed the lack of a bar. We were dancing till 2 AM. An absolute masterclass.",
    event: "Destination Sangeet · Ananta Resort · 400 guests"
  },
  {
    name: "Deshmukh & Sharma Families",
    quote: "Our wedding at Westin Pushkar featured guests from London alongside our very traditional elders from Jaipur. Yash's bilingual capability ensured the ceremonies felt impossibly grand but culturally connected for everyone. He didn't just host the event; he held the two sides of the family together. Best host in Rajasthan.",
    event: "Cross-Cultural Wedding · Westin Pushkar · 500 guests"
  },
  {
    name: "VP Marketing — International Brand",
    quote: "We hosted an exclusive corporate retreat at The Greenhouse. The challenge was keeping the executive team engaged during evening galas in the middle of the desert without typical city distractions. Yash's intellectual, unscripted hosting was incredibly sharp. Complete authority.",
    event: "Corporate Retreat Gala · Greenhouse Resort · 150 delegates"
  },
];

const FAQS = [
  {
    q: "Pushkar venues often have a 'No Alcohol' (Satvik) policy. Can you still drive a high-energy Sangeet?",
    a: "Absolutely. This is the biggest challenge of a Pushkar destination wedding. When there is no bar to artificially loosen the crowd, the anchor must act as the primary catalyst. I use specific crowd-psychology, hyper-interactive games, and explosive vocal pacing to generate immense organic dancing energy that easily replaces a club environment."
  },
  {
    q: "We have NRI guests flying in from London/USA. Can you conduct the event in English?",
    a: "Yes. Pushkar is one of the heaviest NRI wedding zones in Rajasthan. I provide flawless, executive-grade English anchoring to ensure your international guests understand and appreciate the grandeur of the Indian traditions, while utilizing deep Hindi to honor the local elders. This bilingual bridging is my specialty."
  },
  {
    q: "How do you handle the massive outdoor spaces at properties like The Westin or Ananta Spa?",
    a: "Sprawling resorts suffer from 'acoustic scatter'—the wind carries the sound away, and the 500 guests physically drift apart over the giant lawns. I actively employ 'crowd-condensing' techniques, utilizing stage movement and specific audio projection to draw everyone visually and physically into the center, forcing intimacy into massive spaces."
  },
  {
    q: "Do you use scripts or teleprompters during multi-family Sangeet performances?",
    a: "Never. An anchor reading from a clipboard instantly kills the energy of a Sangeet. I memorize the entire sequence of performances, the family dynamics, and the inside jokes. This allows me to seamlessly transition between dances, interact with the VIP tables, and maintain 100% eye contact."
  },
  {
    q: "Are you familiar with the cultural protocols of the Pushkar/Ajmer area?",
    a: "Yes. I frequently anchor heavily traditional Marwari and Rajput weddings across the Pushkar-Ajmer bypass. I understand the intense respect required for the Brahma Temple vicinity, ensuring the hosting is profoundly dignified while still being spectacularly entertaining."
  },
  {
    q: "Do we need to arrange your logistics if we book you for Pushkar?",
    a: "As I frequently execute events across Rajasthan's Golden Triangle, my logistics into Pushkar are highly streamlined. My technical rider and travel requirements are exceedingly simple and provided instantly upon booking."
  },
  {
    q: "When is the latest we should book you for a Pushkar wedding?",
    a: "Pushkar's wedding season peaks violently between October and February, often clashing directly with the legendary Pushkar Camel Fair dates and heavy NRI inflows. The premier luxury resorts (Westin/Ananta) sell out a year in advance. The moment your resort is locked, send me a WhatsApp to freeze the date."
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

export default function PushkarPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div class="relative w-full h-full"><Image src="/backgrounds/pushkar_bg.webp" alt="Best Anchor in Pushkar — NRI & Luxury Desert Weddings" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
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
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Pushkar · The Holy Desert</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)" }}
              >
                PUSHKAR
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Westin Pushkar NRI weddings</G>, vast open-air Ananta desert events, and elite Satvik Sangeets demanding flawless execution.
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

      {/* ══ 2.5 ABOUT ══ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-5 md:px-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-6 block font-bold">About Anchor Yash</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                NRI Polish.<br /><G>Raw Desert Energy.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute pinnacle of destination wedding hosting in Pushkar.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Pushkar functions entirely differently from the rest of Rajasthan. You aren't just dealing with massive fortresses; you are dealing with the <strong className="text-[#D4AF37]">Satvik Protocol</strong>—where the finest 5-star properties often lack alcohol. Yash steps into these highly restricted 500-guest environments and manufactures intense, raw dancing energy entirely organically.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He completely rejects paper scripts. For high-net-worth NRI families flying into Ananta or The Westin, Yash provides an elite bilingual execution—flawless English that validates the international guests, layered over the deep Hindi warmth that the traditional Marwari ceremonies demand.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Pushkar" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. PUSHKAR IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Pushkar is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Holy Desert Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Pushkar is not a standard banquet market. It is a highly localized microcosm defined by sprawling luxury ecology (like The Westin and Ananta) colliding with intense religious heritage. A successful anchor here must possess the cultural pedigree to navigate Brahma Temple ceremonial boundaries, the linguistic polish to entertain a massive influx of NRI guests, and the sheer vocal dominance to command open-valley acoustics.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {PUSHKAR_IDENTITY.map((item, i) => (
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
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Generic Anchor <G>vs This One.</G></h2>
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
                NRI Elite to<br /><G>Satvik Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Pushkar's Best. <G>Known From Inside.</G></h2>
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

      {/* ══ 7. CULTURAL PROTOCOL ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Pushkar Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Satvik Reality.<br /><G>Massive Energy.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a luxury event in Pushkar requires an elite understanding of the 'Satvik Protocol'. Many of the area's most beautiful 5-star properties operate under strict no-alcohol guidelines to respect the nearby Brahma Temple. An amateur anchor relies on a bar to loosen the crowd. Here, that crutch does not exist. The anchor must use rapid-fire bilingual humor, intense eye contact, and aggressive timeline pacing to pull a massive Sangeet into overdrive organically.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, the sheer volume of international and NRI weddings at properties like The Westin demands absolute English proficiency. The host must translate the emotional weight of Rajasthani Marwari rituals into an inclusive, global framework without losing the inherent desi warmth.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Pushkar fluency—defeating the Satvik limitations and uniting the NRI divide—is the mark of an anchor who operates at the apex of Rajasthan’s destination industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Satvik Sangeet Hype", sub: "Organic, alcohol-free momentum" },
                { label: "Elite English Protocol", sub: "Definitive NRI guest integration" },
                { label: "Sprawling Resort Acoustics", sub: "Defeating Westin/Ananta echo" },
                { label: "Brahma Temple Respect", sub: "Deep local cultural dignity" },
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
              {["/gallery-3.webp","/gallery-4.webp","/gallery-1.webp","/gallery-5.webp","/gallery-2.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Pushkar event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/backgrounds/pushkar_bg.webp" alt="Pushkar Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Pushkar · The Valley Oasis</p>
                <p className="text-white text-xs">Commanding vast open-air luxury at The Westin and driving unstoppable Sangeet energy at Ananta.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Vast Valley Lawns.<br /><G>Intimate Crowd.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Pushkar’s luxury ecosystem is a massive logistical challenge. Properties like Ananta Spa or The Westin throw 500+ guests across colossal open valley lawns, leading to immediate acoustic scatter and audience drift. Yash builds his stage presence to physically and vocally anchor these extreme environments—using pacing and crowd psychology to compress the venue, ensuring the host remains the undeniable center of gravity.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "Destination Protocol" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-net-worth NRI families do not accept generic templates. The execution here must reflect deep cultural intelligence, flawless bilingual articulation, and the ability to manufacture extreme crowd hype totally unscripted—even within stringent Satvik resort conditions.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Pushkar Events.</G></h2>
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
                    {[...Array(5)].map((_, j) => <Star key={j} fill={GOLD} className="text-[#D4AF37] w-3 h-3" />)}
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
              {["Westin Pushkar","Ananta Resort","Satvik High-Energy Sangeets","NRI Destination Emcee","Bilingual English/Hindi","Marwari Wedding Host","Brahma Valley Protocols","4.9★ Rated","Luxury Desert Events"].map((t, i) => (
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Pushkar <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-pushkar-${idx}`} />
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Adjacent Hubs</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rajasthan's <G>Golden Triangle.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Ajmer", href: "/anchor-in-ajmer", desc: "Bordering Hub" },
              { icon: MapPin, label: "Kishangarh", href: "/anchor-in-kishangarh", desc: "Transit Route" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City" },
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City" },
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
              Your Event Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Pushkar experiences intense overlapping of the international destination season and peak local luxury wedding dates. Travelling anchors require multi-day blockouts. I do not hold dates without confirmation.
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

      <footer className="py-16 border-t border-white/10 bg-black text-center text-zinc-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold mb-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Anchor in Ajmer", href: "/anchor-in-ajmer" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · PUSHKAR (RAJASTHAN), INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}