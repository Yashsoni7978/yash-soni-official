"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Palette, Plus, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { FAQItem } from "../_components/InteractiveFAQ";


const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Mandawa%20or%20Shekhawati.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/mandawa.webp')", backgroundColor: GOLD }}
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

const MANDAWA_IDENTITY = [
  {
    icon: Palette,
    title: "The Fresco Haveli Universe",
    desc: "Mandawa is the undisputed capital of Shekhawati's open-air fresco art tradition. The havelis here are covered floor-to-ceiling in centuries-old painted murals depicting everything from mythological scenes to steam engines and early motorcars. Hosting a wedding against these painted walls is not decorating an event — it is stepping into a living museum. The anchor must inhabit that space with the awareness and reverence it deserves while generating genuine celebration energy."
  },
  {
    icon: Globe,
    title: "The Marwari Mercantile Legacy",
    desc: "Shekhawati was the home of Rajasthan's great trading families — the Birlas, the Singhanias, the Poddars — whose merchant wealth built the havelis and whose descendants now host destination weddings in them. The cultural register of a Mandawa event is governed by the Marwari mercantile tradition: understated elegance, community pride, and a very specific ceremonial vocabulary that distinguishes insiders from guests. The anchor who reads this room correctly creates an immediate bond of trust."
  },
  {
    icon: Landmark,
    title: "The International Artist Circuit",
    desc: "Mandawa has become a significant stop on the international heritage art tourism circuit. French, Italian, and Japanese art historians regularly visit the havelis. This means that destination wedding guest lists in Mandawa frequently include internationally educated, culturally sophisticated guests who are as interested in the venue's art history as in the celebration itself. The hosting must be warm and celebratory without ever feeling intellectually thin."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Haveli Fresco Wedding Anchor",
    desc: "Open-air and courtyarded wedding ceremonies in Mandawa's painted havelis. Managing the intimate architecture of haveli courtyards, the warm acoustics of painted stone, and the close-range guest proximity that distinguishes haveli events from palace or fort weddings. Each ritual is hosted with the correct Marwari ceremonial vocabulary and the visual intelligence to honour the extraordinary painted environment.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Castle Roof Sangeet Emcee",
    desc: "Rooftop Sangeet events at Castle Mandawa — where the Shekhawati horizon stretches in every direction and the painted tower silhouettes frame the stage. Managing the open rooftop acoustic and the dramatic sunset backdrop that arrives precisely at the peak energy moment — using it as a crescendo rather than a distraction.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Courtyard Pre-Wedding Events",
    desc: "Mehndi mornings in Mandawa's iconic painted haveli courtyards — where the fresco walls become the event's visual identity. Interactive, unscripted, and deeply attuned to the heritage character of the space and the diverse guest mix of a Shekhawati destination event. The warm personal hosting that turns strangers into family before the main wedding events.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Heritage Art Tourism Events",
    desc: "Cultural conferences, art connoisseur gatherings, and heritage tourism summits at Mandawa's iconic properties. Bilingual hosting that bridges academic cultural seriousness with warm hospitality for international and Indian delegates who have come to Shekhawati specifically for its extraordinary artistic heritage.",
    tag: "Cultural"
  },
];

const VENUES = [
  { name: "Castle Mandawa", tag: "18th Century · Heritage Hotel", icon: Crown },
  { name: "Murmuria Haveli", tag: "Fresco Heritage · Boutique", icon: Palette },
  { name: "The Desert Resort Mandawa", tag: "Boutique · Shekhawati", icon: Building2 },
  { name: "Jhunjhunu Heritage Hotels", tag: "Regional Heritage · Shekhawati", icon: Gem },
  { name: "Dundlod Fort", tag: "Nearby Heritage · 18th Century", icon: Landmark },
  { name: "Mandawa Haveli Hotel", tag: "Heritage Hotel · Fresco Art", icon: Sparkles },
  { name: "Nawalgarh Palaces", tag: "Nearby Shekhawati · Heritage", icon: MapPin },
  { name: "Morarka Haveli Nawalgarh", tag: "Mercantile Heritage Museum", icon: Star },
];

const VS = [
  { problem: "No awareness of Shekhawati's Marwari mercantile cultural identity and ceremonial protocols", fix: "Deep Marwari heritage fluency — correct community register, ceremony vocabulary, family structure respect" },
  { problem: "Treats the fresco haveli courtyards like any hotel banquet venue", fix: "Haveli-specific hosting that inhabits and honours the extraordinary painted artistic environment" },
  { problem: "Cannot manage the intimate acoustics of enclosed painted haveli courtyards", fix: "Stone courtyard acoustic technique — close-range crowd command without amplification disruption" },
  { problem: "International guests feel excluded by hosting that ignores their cultural context", fix: "Bilingual heritage-context English that makes international art-enthusiast guests genuinely included" },
  { problem: "Generic Jaipur-style energy feels completely misplaced in this quiet art town", fix: "Shekhawati register — warm, cultured, celebratory without mass-market event energy" },
  { problem: "No preparation for rooftop open-air acoustic challenges at Castle Mandawa", fix: "Rooftop crowd command technique built from repeated open-air destination heritage events" },
];

const TESTIMONIALS = [
  {
    name: "Birla Family",
    quote: "Our family's connection to Shekhawati is personal — it is where our great-grandfathers built their trading dynasty. Hosting the wedding at Mandawa was a homecoming. Yash understood that weight completely. His references to the Marwari heritage, the fresco tradition, and the specific identity of Shekhawati were accurate and deeply felt. The elders were moved in a way we have never seen at a wedding event.",
    event: "Heritage Wedding · Castle Mandawa · 300 guests"
  },
  {
    name: "Poddar Family",
    quote: "The Sangeet on Castle Mandawa's rooftop with the Shekhawati desert stretching behind the stage was a moment we will never forget. Yash held that entire crowd — many of them first-time visitors to Shekhawati who were overwhelmed by the environment — for four hours. He made the setting work with the celebration, not against it.",
    event: "Sangeet · Castle Mandawa Rooftop · 250 guests"
  },
  {
    name: "European Heritage Art Tour Group",
    quote: "We organised a cultural event for 80 art historians and heritage connoisseurs visiting Shekhawati's fresco circuit. Yash anchored the evening at Murmuria Haveli with both academic respect for the art tradition and genuine warmth as a host. Our international delegates were genuinely impressed — both by the venue and by how the event was managed.",
    event: "Cultural Summit · Murmuria Haveli · 80 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for haveli destination weddings in Mandawa and Shekhawati?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Mandawa and Shekhawati's fresco heritage wedding circuit — Castle Mandawa, Murmuria Haveli, Dundlod Fort, and the wider Nawalgarh-Mandawa-Fatehpur heritage belt. He brings Marwari mercantile cultural fluency, haveli courtyard acoustic expertise, and bilingual hosting attuned to both local heritage families and international art-tourism guests."
  },
  {
    q: "What makes Mandawa's fresco havelis unique as event venues?",
    a: "Mandawa's painted havelis are not merely beautiful backdrops — they are active cultural statements. The centuries-old frescoes depicting Marwari merchant life, Hindu mythology, and whimsical scenes from early colonial India create a visual narrative that surrounds every guest in the event. A host who can reference and inhabit this visual world — rather than just standing in front of it — transforms the event from a wedding with a great backdrop into a genuine heritage experience that guests carry for life."
  },
  {
    q: "How do you manage the intimate courtyard acoustics of painted havelis?",
    a: "Haveli courtyards are typically compact, enclosed on three or four sides by painted walls, and filled with guests at very close range. The acoustic behaviour is completely different from an open-air lawn or a stone fort courtyard. Sound bounces quickly from the painted walls, creating a natural intimacy — but also requiring a different pace and projection technique to avoid the sound becoming muddy. This is a skill developed through repeated haveli event experience, not improvised on the day."
  },
  {
    q: "Can you host English-language events for international guests visiting Mandawa on art heritage tours?",
    a: "Yes. Mandawa's fresco circuit attracts significant international heritage tourism traffic — French, Italian, and Japanese art scholars in particular. When these guests form part of a destination event, the hosting must bridge the cultural gap between Indian celebration norms and international guest comfort in a way that enriches both sides of the experience. Polished bilingual English/Hindi hosting with genuine art-historical awareness is the specific skill required."
  },
  {
    q: "Do you anchor events at Castle Mandawa specifically?",
    a: "Yes. Castle Mandawa is the flagship heritage hotel of the Shekhawati circuit and the most frequently booked property for destination events in this region. The castle's specific spaces — the rooftop terrace, the inner courtyard, the painted gateway — each have their own hosting character. Working here repeatedly means these spaces are understood from the inside, not navigated for the first time during your wedding."
  },
  {
    q: "How far in advance should we book for a Mandawa destination wedding?",
    a: "Castle Mandawa and Murmuria Haveli have strictly limited room and event space capacity. The peak Shekhawati winter season — October through February — fills several months in advance. Anchor availability is confirmed simultaneously with venue booking. WhatsApp as soon as your venue and date are confirmed."
  },
  {
    q: "Can you host Mehndi and Haldi pre-wedding events in haveli courtyards?",
    a: "Yes. Pre-wedding events in Mandawa's painted courtyards are among the most visually extraordinary moments in the Indian destination wedding circuit. The fresco walls become the event's art direction. The hosting challenge is creating genuine warmth and organic interaction for a multi-city, often international guest mix who are simultaneously absorbing the extraordinary visual environment and participating in the celebration."
  },
  {
    q: "Is Mandawa and Shekhawati a good destination for small intimate weddings?",
    a: "Yes. The haveli courtyard format is inherently intimate — best suited for 80 to 350 guests rather than large-scale fort events. Families who choose Mandawa are often making a deliberate choice for intimacy, authenticity, and cultural depth over spectacle and scale. The event hosting must reflect that choice — warm, personal, culturally rooted, and deeply attentive to each guest's experience rather than performing to the back row."
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

export default function MandawaPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/bride-groom-fort-shoot.webp" alt="Best Anchor in Mandawa — Shekhawati fresco havelis at twilight" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Mandawa · The Open-Air Gallery City</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[13vw] md:text-[9vw] lg:text-[7rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/mandawa.webp')" }}
              >
                MANDAWA
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Shekhawati fresco haveli weddings</G>, Castle Mandawa rooftop Sangeets, and painted courtyard celebrations in the world's greatest open-air art gallery.
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
                Beyond <G>Announcements.</G><br />Beyond Scripts.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation as Rajasthan's most culturally fluent destination wedding anchor — commanding crowds with zero paper scripts across every format and venue type in the state.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                From the painted courtyards of <strong className="text-[#B5952F]">Castle Mandawa</strong> to the rooftop stages overlooking the Shekhawati desert, Yash brings a level of cultural awareness and event command that transforms extraordinary venues into extraordinary experiences.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                Mandawa demands a very specific hosting intelligence — Marwari mercantile cultural fluency, haveli acoustic technique, and bilingual warmth for guest lists that regularly include international art enthusiasts alongside Indian heritage families. These are not improvised skills. They are built through deep cultural immersion and repeated performance in this unique ecosystem.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Mandawa" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. MANDAWA IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Mandawa is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The World's Open-Air Gallery<br />Demands a <G>Cultured Voice.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Mandawa is where centuries of Marwari mercantile wealth crystallised into painted art — covering entire havelis in fresco murals that have survived monsoons, wars, and the disappearance of the trading families who commissioned them. An event in this environment is inherently a cultural statement, and the anchor's hosting must reflect that depth.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {MANDAWA_IDENTITY.map((item, i) => (
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
                Courtyards to<br /><G>Castle Rooftops.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Painted Havelis. <G>Known From Inside.</G></h2>
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
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Mandawa Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Marwari Heritage.<br /><G>Fresco Context.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The families who host events at Castle Mandawa and Murmuria Haveli are, in many cases, descendants of the original Marwari merchant clans who built these properties. For them, a wedding at Mandawa is not a tourism choice — it is a return to the seat of their ancestral identity. The hosting must understand and honour that without ever turning the event into a heritage lecture.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              The fresco walls themselves require a specific hosting response. In a courtyard where every surface tells a visual story, the anchor competes for guest attention with centuries of extraordinary art. The technique is to work with the environment — referencing it warmly, incorporating it into the event narrative — rather than pretending it is not there and losing to it anyway.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Shekhawati cultural fluency — the Marwari merchant lineages, the fresco art tradition, the correct haveli ceremony vocabulary — is built from deep regional immersion. It is not googled the morning of the event.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Marwari Ceremony Fluency", sub: "Merchant legacy & clan honour" },
                { label: "Haveli Acoustic Mastery", sub: "Painted courtyard crowd command" },
                { label: "International Guest Bridge", sub: "Heritage art context in English" },
                { label: "Fresco Cultural Awareness", sub: "Art tradition woven into hosting" },
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
              {["/gallery-3.webp","/gallery-1.webp","/gallery-5.webp","/gallery-2.webp","/gallery-4.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Mandawa Shekhawati event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/bride-groom-fort-shoot.webp" alt="Mandawa Shekhawati Fresco Heritage" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Mandawa · Shekhawati · The Open-Air Gallery</p>
                <p className="text-white text-xs">India's most extraordinary fresco heritage destination — every wall a painting, every event a masterpiece.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Intimate Courtyards.<br /><G>Castle Rooftops.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Mandawa events range from 80-person intimate haveli courtyard Mehndis to 350-person rooftop Sangeets at Castle Mandawa. Each scale requires a completely different hosting approach — the same generic energy does not work across both formats. The intimate courtyard requires warmth, proximity, and personal interaction. The rooftop stage requires projection, horizon-scale energy, and acoustic command across an open space with no walls.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#B5952F]" /> Heritage Property Logistics Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Old havelis have unpredictable power infrastructure, narrow entrances for equipment, and structural quirks that affect stage positioning. Pre-event coordination with Castle Mandawa and Murmuria teams ensures zero on-stage surprises during your event. Every logistical issue is resolved before the first guest arrives.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Shekhawati Heritage Events.</G></h2>
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
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#B5952F]" />)}
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
              {["Castle Mandawa","Murmuria Haveli","Shekhawati Frescoes","Marwari Heritage","Fresco Courtyard Weddings","Bilingual English/Hindi","International Guest Expert","4.9★ Rated","Open-Air Gallery"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Mandawa & Shekhawati <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-mandawa-${idx}`} />
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rajasthan & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · 3 hrs away" },
              { icon: MapPin, label: "Bikaner", href: "/anchor-in-bikaner", desc: "Fort City · Marwari" },
              { icon: MapPin, label: "Delhi NCR", href: "/anchor-in-delhi", desc: "Capital · 4 hrs away" },
              { icon: MapPin, label: "Alwar", href: "/anchor-in-alwar", desc: "Neemrana · Sariska" },
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
              Your Haveli Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Castle Mandawa and Shekhawati's boutique havelis have strictly limited event capacity. Peak winter dates go fast and I do not hold dates without confirmation.
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
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Anchor in Bikaner", href: "/anchor-in-bikaner" },
              { label: "Anchor in Delhi", href: "/anchor-in-delhi" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#B5952F] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · MANDAWA, SHEKHAWATI, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
