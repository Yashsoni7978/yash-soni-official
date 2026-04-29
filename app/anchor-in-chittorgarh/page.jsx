"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Sword, Users } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20heritage%20wedding%20near%20Chittorgarh.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/chittorgarh.webp')", backgroundColor: GOLD }}>
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
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#B5952F]" : "text-zinc-200"}`}>{q}</span>
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

const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const CHITTORGARH_IDENTITY = [
  {
    icon: Sword,
    title: "The Rajput Honour Capital",
    desc: "Chittorgarh is not merely a heritage site — it is a symbol of supreme Rajput sacrifice and honour that resonates in every Rajputana family's identity across India. When a Rajput family chooses Chittorgarh for a destination event, they are making a statement about lineage, pride, and the unbroken thread of their ancestral culture. The anchor cannot walk into this space without understanding the immense cultural weight it carries."
  },
  {
    icon: Landmark,
    title: "India's Largest Fort Complex",
    desc: "At 700 acres, Chittorgarh Fort is the largest fort complex in India. The scale of the ceremonial spaces — the Rana Kumbha Palace courtyard, the Vijay Stambha plaza, the Padmini Palace lake views — creates staging challenges that smaller heritage properties simply do not present. Managing crowd energy, acoustic reach, and visual focus across these massive open spaces is a genuine technical skill."
  },
  {
    icon: Globe,
    title: "The Mewar Emotional Register",
    desc: "Chittorgarh draws deeply from the Mewar royal lineage — Rana Kumbha, Rana Sanga, Maharana Pratap, and the legendary Padmini. Families who host events here are deeply emotionally invested in these narratives. The anchor who can weave these references naturally into audience moments — without lecturing or performing — creates a depth of connection that generic hosting simply cannot achieve."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Fort Heritage Ceremony Anchor",
    desc: "Rajput honour ceremonies within Chittorgarh Fort's historic courtyards. Coordinating the full ceremonial arc — from the Ghodi baraat at the Suraj Pol gate to the Varmala on the Rana Kumbha Palace terrace — with the correct energy, the correct references, and the correct deep-Mewar register throughout.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Heritage Haveli Sangeet",
    desc: "Sangeet nights at heritage properties surrounding Chittorgarh — where the fort looms on the horizon as the backdrop. Managing the energy of a celebration in Rajputana territory requires tone calibration that delivers genuine entertainment without ever trivialising the historical weight of the location.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Intimate Fort Pre-Wedding",
    desc: "Sunrise Haldi and Mehndi events on the terraces of heritage properties overlooking the fort. Creating warmth and genuine inter-guest connection for destination families who have gathered from across India and abroad specifically to celebrate in Chittorgarh.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Heritage Research Summit",
    desc: "Corporate and institutional events at Chittorgarh — academic conferences, cultural summits, and leadership retreats that draw on the city's extraordinary historical depth. The anchor must deliver intellectual gravitas alongside event hosting craft.",
    tag: "Summit"
  },
];

const VENUES = [
  { name: "Chittorgarh Fort", tag: "India's Largest · 700 Acres", icon: Crown },
  { name: "Padmini Palace", tag: "Lake Palace · Heritage", icon: Gem },
  { name: "Rana Kumbha Palace", tag: "Royal Court · Historic", icon: Sparkles },
  { name: "Bassi Fort Palace", tag: "Heritage Boutique · Nearby", icon: Building2 },
  { name: "Castle Bijaipur", tag: "Boutique Heritage · Fort View", icon: MapPin },
  { name: "Pratap Palace Hotel", tag: "Heritage Hotel · City", icon: Star },
  { name: "Chittorgarh Palace Camp", tag: "Luxury Tented · Fort Base", icon: Award },
  { name: "Vijay Stambha Ground", tag: "Victory Tower · Iconic", icon: Sword },
];

const VS = [
  { problem: "No knowledge of Rajput honour ceremony protocols and Mewar ceremonial vocabulary", fix: "Mewar cultural fluency — Rana lineage references, correct Rajput ceremony sequence" },
  { problem: "Acoustics of Chittorgarh Fort's massive open spaces completely overwhelm a city anchor", fix: "Fort-scale crowd command technique developed across large heritage open-air events" },
  { problem: "Conflates Chittorgarh's deep Rajput identity with generic Rajasthan tourism content", fix: "Padmini, Rana Kumbha, Maharana Pratap — referenced correctly, not as tourist talking points" },
  { problem: "Emotional register is too light for a location carrying 700 years of sacrifice", fix: "Calibrated gravitas — the right depth at ceremony, the right energy at celebration" },
  { problem: "Cannot manage the dispersal of guests across a 700-acre fort event zone", fix: "Spatial crowd-management strategy pre-planned with venue team before day one" },
  { problem: "Bilingual gaps cause disconnection between elder Rajput guests and younger diaspora", fix: "Authentic Mewar-contextual Hindi and polished international English — no code-switching awkwardness" },
];

const TESTIMONIALS = [
  {
    name: "Sisodia Family",
    quote: "Chittorgarh was our only choice for the wedding — my family's lineage connects directly to the Mewar royal line. The anchor had to understand that. Yash absolutely did. His references were specific, accurate, and deeply respectful. The elders of the family — who are extraordinarily discerning about these things — were moved. That is the highest praise we can give.",
    event: "Heritage Wedding · Chittorgarh Fort · 350 guests"
  },
  {
    name: "Rathod Family",
    quote: "The scale of the fort makes events challenging — geography, acoustics, crowd dispersal. Yash managed all of it. He coordinated the baraat entry at Suraj Pol, the ceremony at Rana Kumbha Palace, and the reception at Padmini Palace with a precision that felt effortless. Nothing felt improvised.",
    event: "Rajput Wedding · Rana Kumbha Palace · 400 guests"
  },
  {
    name: "Cultural Heritage Organisation",
    quote: "We hosted an academic and cultural summit at Chittorgarh for 200 historians, artists, and government officials. Yash delivered an anchoring performance that matched the intellectual seriousness of the delegates while keeping the event moving with genuine energy. A rare combination.",
    event: "Heritage Summit · Vijay Stambha Ground · 200 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for Rajput heritage weddings at Chittorgarh?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Chittorgarh's deep Rajput heritage ceremony format. He brings Mewar cultural fluency — correct ceremonial vocabulary, Rana and Maharana lineage references, and appropriate emotional register — alongside the practical skills required to manage events in India's largest fort complex."
  },
  {
    q: "Do you understand Mewar Rajput ceremonial protocol and the specific cultural identity of Chittorgarh?",
    a: "Yes. Chittorgarh carries the heaviest cultural identity of any event destination in Rajasthan — possibly in India. The lineage of Rana Kumbha, the sacrifice of Padmini, the battles of Rana Sanga, and the legacy of Maharana Pratap are not background colour — they are the identity of the families who choose to celebrate here. The anchor who does not understand these references deeply cannot serve this room. The anchor who name-drops them incorrectly causes active offence. This fluency is developed through genuine immersion, not quick research."
  },
  {
    q: "How do you manage the acoustic and spatial challenges of Chittorgarh Fort at 700 acres?",
    a: "The sheer scale of Chittorgarh Fort creates event management challenges that most anchors are entirely unprepared for. At this scale, the acoustic behaviour of open stone spaces, the natural crowd dispersal driven by the geography, and the visual attention management across multiple heritage sight lines all need pre-event planning rather than on-stage improvisation. I work with the venue logistics team before every Chittorgarh event to establish crowd gathering strategy, acoustic positioning, and sight-line management."
  },
  {
    q: "Have you hosted events at Padmini Palace and Rana Kumbha Palace within the fort?",
    a: "Yes. Both of these sites have very different acoustic and atmospheric characteristics within the broader fort complex. Padmini Palace's lakeside setting offers natural crowd intimacy but wind-driven acoustic challenges. Rana Kumbha's courtyard offers dramatic scale but requires careful energy management to fill the space without the event feeling empty. Having worked both means these factors are pre-managed rather than discovered on the day."
  },
  {
    q: "Can you host events at boutique heritage properties near Chittorgarh like Bassi Fort or Castle Bijaipur?",
    a: "Yes. The Chittorgarh circuit includes several outstanding boutique heritage properties within 20–40km of the fort that are increasingly popular for destination wedding events. These properties offer heritage character within a more manageable scale for 100–300 guest events. The cultural identity of the region still governs the hosting register even at these smaller properties."
  },
  {
    q: "Is Chittorgarh a good destination for NRI family weddings?",
    a: "Yes. Chittorgarh has a very specific and powerful appeal for non-resident Rajput families — particularly those from the UK, USA, and UAE — who want to ground their child's wedding in the deepest possible expression of their ancestral identity. For a Mewar-lineage NRI family, there is no more meaningful wedding backdrop in the world than Chittorgarh Fort. The hosting must bridge the international entertainment expectations of the diaspora guests with the ceremonial gravity that the Indian family elders require."
  },
  {
    q: "How far in advance should we book for a Chittorgarh destination wedding?",
    a: "Chittorgarh operates as a destination wedding circuit primarily in the winter months — October through February. Fort permissions for private events have a separate approval pathway that requires significant advance planning. I recommend confirming the anchor booking simultaneously with the initial venue application — 6 to 9 months in advance for premium dates."
  },
  {
    q: "Do you host corporate and institutional events in Chittorgarh beyond weddings?",
    a: "Yes. Chittorgarh increasingly draws cultural organisations, heritage foundations, and government departments for conferences, summits, and commemorative events. These require a very different hosting register — intellectual gravitas, historical accuracy, and a deep respect for the site's significance — combined with the practical skills of keeping an audience engaged over a multi-session event day."
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

export default function ChittorgarhPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/bride-groom-fort-shoot.webp" alt="Best Anchor in Chittorgarh — Rajput Fort of Honour at dusk" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#B5952F]" />
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Chittorgarh · The Fort of Honour</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[10vw] md:text-[7vw] lg:text-[5.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/chittorgarh.webp')" }}>
                CHITTORGARH
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Rajput honour heritage weddings</G>, fort-scale ceremonies, and deep Mewar cultural celebrations in the capital of Rajputana pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95">SECURE YOUR DATE →</button>
              </Link>
              <Link href="/portfolio">
                <button className="px-10 py-5 border border-[#D4AF37]/50 text-[#B5952F] font-black uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">VIEW PORTFOLIO</button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-40"><div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" /></div>
      </section>

      {/* ══ 2. STATS ══ */}
      <section className="py-16 bg-zinc-950 border-y border-[#D4AF37]/12 z-20 relative">
        <div className="max-w-5xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-8 border-r border-white/5 last:border-r-0">
                  <s.icon size={16} className="text-[#B5952F] mx-auto mb-3 opacity-60" />
                  <div className="text-4xl md:text-5xl font-black mb-1 gs"><Counter target={s.val} suffix={s.suffix} /></div>
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
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">Beyond <G>Announcements.</G><br />Beyond Scripts.</h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built an unmatched reputation for commanding the most complex and culturally significant events in Rajasthan — with complete zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Chittorgarh is the most culturally demanding destination in the entire Rajasthan circuit. Its identity is not constructed around tourism or luxury aesthetics — it is built on 700 years of Rajput sacrifice, sovereign honour, and cultural pride. An anchor working in <strong className="text-[#B5952F]">Chittorgarh Fort</strong> is not decorating an event. They are participating in a living cultural statement.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                The families who choose Chittorgarh for destination events choose with extraordinary intentionality. The hosting must match that intentionality — with genuine Mewar cultural knowledge, appropriate ceremonial weight, and the practical skill to command India's largest fort complex.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#B5952F] text-xs tracking-widest uppercase hover:text-white transition-colors">MY FULL STORY <ArrowRight size={14} /></Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash at Chittorgarh" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. CHITTORGARH IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Chittorgarh is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              India's Honour Capital Demands<br />a <G>Genuine Mewar Voice.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              There is no destination in Rajasthan where the wrong anchor creates more damage than Chittorgarh. The fort's identity as India's supreme symbol of Rajput honour means that every moment of a hosted event here carries cultural charge. Getting it right requires a level of preparation, cultural fluency, and genuine respect that cannot be faked.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {CHITTORGARH_IDENTITY.map((item, i) => (
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
            <div className="bg-zinc-950 px-6 py-4 border-b border-white/5"><p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">What you usually get</p></div>
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5"><p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-widest">What you get here</p></div>
            {VS.map((row, i) => (<>
              <div key={`p${i}`} className="bg-zinc-950 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" /><p className="text-zinc-500 text-sm">{row.problem}</p></div>
              <div key={`f${i}`} className="bg-zinc-900/30 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3"><CheckCircle2 size={14} className="text-[#B5952F] shrink-0" /><p className="text-zinc-200 text-sm font-medium">{row.fix}</p></div>
            </>))}
          </div>
        </div>
      </section>

      {/* ══ 5. SERVICES ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">What I Anchor</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Fort Ceremonies to <br/><G>Cultural Summits.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all group h-full hover:bg-zinc-900/50 relative overflow-hidden">
                  <div className="absolute top-3 right-3"><span className="text-[8px] font-bold uppercase tracking-widest text-[#B5952F]/60 border border-[#D4AF37]/20 px-2 py-0.5 rounded-full">{s.tag}</span></div>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">700 Acres. <G>Every Inch Commanded.</G></h2>
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

      {/* ══ 7. HONOUR PROTOCOL ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Chittorgarh Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">Rajput Honour.<br /><G>700 Years Deep.</G></h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The events hosted at Chittorgarh carry the identity of a community whose sacrifice at this exact location is the defining narrative of Rajput culture across India. When a Sisodia, Chauhan, or Rathore family from anywhere in the country chooses Chittorgarh for a destination wedding, the response to that choice must come from a place of genuine understanding.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              A single incorrect reference — to Padmini, to the Jauhar, to Rana Kumbha's legacy — delivered with the wrong tone or the wrong context creates an immediate disconnect with the most culturally literate family members in the room. In a Rajput honour ceremony, those are always the people who matter most.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              The hosting at Chittorgarh must carry the same weight as the location itself — genuinely grounded, deeply respectful, and emotionally resonant with the full depth of Mewar identity.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Mewar Rajput Fluency", sub: "Rana lineage, Padmini, Jauhar protocol" },
                { label: "Fort-Scale Crowd Command", sub: "700 acres, massive open space mastery" },
                { label: "Ceremonial Sequence Precision", sub: "Correct Rajput ritual flow" },
                { label: "Bilingual Heritage Register", sub: "Hindi depth · English polish" },
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

      {/* ══ 8. GALLERY ══ */}
      <section className="py-12 overflow-hidden border-b border-white/5 mask-fade">
        <div className="flex marquee whitespace-nowrap gap-5">
          {[...Array(3)].map((_, r) => (
            <div key={r} className="flex gap-5 shrink-0">
              {["/gallery-1.webp","/gallery-5.webp","/gallery-3.webp","/gallery-2.webp","/gallery-4.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Chittorgarh heritage event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/bride-groom-fort-shoot.webp" alt="Chittorgarh Fort Scale" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Chittorgarh · India's Fort of Honour</p>
                <p className="text-white text-xs">700 acres. 700 years of Rajput sacrifice. India's most culturally powerful event destination.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">India's Largest Fort.<br /><G>700 Acres.</G><br />Zero Scripts.</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              The physical scale of Chittorgarh's event spaces — from the Suraj Pol entry to the Padmini Palace lake — is unlike any other heritage venue in India. Commanding this scale requires not just vocal projection but a complete spatial strategy for how the crowd is gathered, directed, and held at each ceremonial transition point.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#B5952F]" /> UNESCO Heritage Site Protocol
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Events at Chittorgarh Fort — a UNESCO World Heritage Site — operate within specific Archaeological Survey of India guidelines. Every event is planned in coordination with venue management and site authorities to ensure compliance while maximising the event's grandeur.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Chittorgarh Heritage Events.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#B5952F]" />)}</div>
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
              {["Chittorgarh Fort","Rana Kumbha Palace","Padmini Palace","Vijay Stambha","Mewar Heritage","Rajput Honour Weddings","Bilingual Hindi/English","4.9★ Rated","UNESCO Heritage Site"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Chittorgarh <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-chittorgarh-${idx}`} />
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Mewar & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Mewar Capital" },
              { icon: MapPin, label: "Kumbhalgarh", href: "/anchor-in-kumbhalgarh", desc: "Great Wall · Mewar" },
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Mehrangarh" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · Palaces" },
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
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Your Honour Event<br /><G>Won't Wait.</G></h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">Chittorgarh heritage event dates require early venue approval and anchor confirmation. Do not leave it late.</p>
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
              { label: "Home", href: "/" },{ label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },{ label: "Contact", href: "/contact" },
              { label: "Anchor in Udaipur", href: "/anchor-in-udaipur" },
              { label: "Anchor in Kumbhalgarh", href: "/anchor-in-kumbhalgarh" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (<Link key={i} href={l.href} className="hover:text-[#B5952F] transition-colors">{l.label}</Link>))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">© {new Date().getFullYear()} ANCHOR YASH SONI · CHITTORGARH, RAJASTHAN</p>
        </div>
      </footer>
    </main>
  );
}
