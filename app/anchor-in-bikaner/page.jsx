"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users, Wind } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20heritage%20wedding%20in%20Bikaner.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/bikaner.webp')", backgroundColor: GOLD }}>
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

const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const BIKANER_IDENTITY = [
  {
    icon: Landmark,
    title: "The Marwari Business Capital",
    desc: "Bikaner is not only a city of forts — it is one of Rajasthan's primary Marwari business communities. Weddings here carry dual expectations: the deep Rajputana ceremonial weight of the fort-city backdrop AND the refined, understated elegance that affluent Marwari families invest in their celebrations. An anchor must hold both registers simultaneously without over-performing in either direction."
  },
  {
    icon: Wind,
    title: "The Desert Fort Acoustic",
    desc: "Junagarh Fort's red sandstone courtyards and Lallgarh Palace's Jaipur-style arched halls have some of the most complex acoustic characteristics in Rajasthan's heritage circuit. The stone walls create long reverb tails that swallow speech unless the anchor has developed specific techniques for enunciation and pacing in these environments. It is a skill impossible to improvise."
  },
  {
    icon: Crown,
    title: "True Northern Rajasthan Gravitas",
    desc: "Bikaner sits in the north of Rajasthan, drawing its character from centuries of Rathore Rajput rule and the specific cultural identity of that lineage. The clan protocols, the ceremonial vocabulary, and the specific emotional notes of a Bikaner wedding are distinct from a Jaipur, Jodhpur, or Udaipur event. Conflating them is a cultural misstep that the entire family will notice."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Junagarh Fort Heritage Wedding",
    desc: "Majestic fort-side ceremonies in Junagarh's iconic courtyards. Managing the red sandstone acoustic, coordinating with Marwari family traditions, and ensuring the Rathore heritage is honoured through every ceremonial segment — from the baraat entry to the final phero ritual.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Lallgarh Palace Sangeet",
    desc: "High-energy Sangeet emcee in Lallgarh's royal banquet halls and open lawns. Managing the acoustic shifts between indoor stone halls and outdoor gardens, while keeping the energy of a large Marwari Sangeet crowd locked in from the first performance through the last thumka.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Heritage Pre-Wedding Events",
    desc: "Mehndi and Haldi mornings at Bikaner's boutique heritage properties — where the pre-wedding vibe blends Rajasthani artisanal culture with modern destination entertainment. Unscripted crowd interaction that warms up a multi-city guest list organically.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Corporate Heritage Retreat Host",
    desc: "Leadership summits, dealer meets, and annual galas at Bikaner's palace and fort properties. Brand-aligned, bilingual delivery for senior corporate audiences who have specifically chosen a heritage destination for the prestige it communicates.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Junagarh Fort", tag: "Royal Heritage · 16th Century", icon: Crown },
  { name: "Lallgarh Palace", tag: "HRH Heritage · Arched Halls", icon: Gem },
  { name: "Karni Bhawan Palace", tag: "Heritage Hotel · Royal Gardens", icon: Sparkles },
  { name: "Narendra Bhawan", tag: "Boutique Luxury · Heritage", icon: Building2 },
  { name: "Brijraj Bhawan", tag: "Heritage Property · Central", icon: MapPin },
  { name: "The Camel Festival Ground", tag: "Iconic Open-Air · Desert", icon: Wind },
  { name: "Gajner Palace", tag: "Lake Palace · Hunting Lodge", icon: Star },
  { name: "Bikaner Haveli Gardens", tag: "Boutique Heritage · Old City", icon: Award },
];

const VS = [
  { problem: "No understanding of Marwari wedding ceremonial structure and business community protocols", fix: "Marwari ceremony fluency — correct sequence, right references, business family respect" },
  { problem: "Cannot manage Junagarh Fort's complex stone reverb in open courtyards", fix: "Fort-specific acoustic technique from repeated events in red sandstone heritage halls" },
  { problem: "Confuses Bikaner's Rathore identity with generic Western Rajasthan culture", fix: "Clan-specific cultural fluency — Rathore lineage, Bikaner history, correct ceremonial vocabulary" },
  { problem: "Generic energy that disrespects the understated Marwari business elite aesthetic", fix: "Calibrated premium register that matches Bikaner's restrained, deep cultural pride" },
  { problem: "Bilingual gaps causing disconnection between elder Marwari guests and younger diapora", fix: "Authentic bilingual code-switching — formal Marwari-contextual Hindi and polished English" },
  { problem: "Cannot adapt across indoor stone halls and outdoor desert-edge lawns in the same event", fix: "8+ years of venue-specific adaptability built in Rajasthan's hardest acoustic environments" },
];

const TESTIMONIALS = [
  {
    name: "Bajaj Family",
    quote: "We were clear from day one — our wedding at Junagarh had to feel like it belonged there. Not a generic event with a fort backdrop. Yash understood completely. His references to Bikaner's history were accurate, his energy matched the grandeur without being theatrical, and the entire family — from the oldest to the youngest — was completely engaged throughout.",
    event: "Heritage Wedding · Junagarh Fort · 500 guests"
  },
  {
    name: "Singhania Family",
    quote: "The Lallgarh Sangeet was the highlight of our three-day event. Yash had the crowd on their feet for four straight hours. He managed the indoor-to-outdoor transition perfectly — different energy, different acoustic, same locked crowd. We have never seen anything like it.",
    event: "Sangeet · Lallgarh Palace · 400 guests"
  },
  {
    name: "Regional Head — Industrial Group",
    quote: "We brought 150 senior dealers and distributors to Narendra Bhawan for our annual review and gala. The challenge was keeping a conservative business audience genuinely entertained in a heritage setting without the evening becoming stiff. Yash delivered a perfectly calibrated evening — authoritative, warm, and memorable.",
    event: "Corporate Gala · Narendra Bhawan · 150 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for heritage weddings in Bikaner?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Bikaner's Marwari heritage wedding circuit — Junagarh Fort, Lallgarh Palace, Karni Bhawan, and Narendra Bhawan. He brings Rathore clan fluency, fort acoustic expertise, and authentic bilingual hosting that respects the understated grandeur of Bikaner's business community weddings."
  },
  {
    q: "Do you understand Marwari wedding ceremonial structure and relevant cultural references?",
    a: "Yes. Marwari weddings have a specific ceremonial vocabulary and community expectations around the sequence and energy of each ritual. The business families of Bikaner are discerning — they notice when references are wrong, when the sequence is mishandled, or when an anchor treats their ceremony as generic content. This level of cultural preparation is non-negotiable for every Bikaner event."
  },
  {
    q: "How do you manage the acoustics of Junagarh Fort's open courtyards?",
    a: "Junagarh's red sandstone creates a very specific acoustic environment. The long reverb decay of stone walls means speech must be delivered with deliberate pacing and clear enunciation — faster delivery becomes unintelligible in these spaces. Projecting energy without projecting noise is a specific skill developed through repeated performance in heritage fort settings."
  },
  {
    q: "Have you hosted events at Lallgarh Palace in Bikaner?",
    a: "Yes. Lallgarh's combination of Indo-Saracenic arched halls and open garden spaces creates a fascinating acoustic range within the same event. The transition from the high-reverb interior hall Sangeet performances to the open garden after-party requires on-the-fly crowd management technique adjustments — something that only works seamlessly when you have navigated this specific transition here before."
  },
  {
    q: "Can you host bilingual English and Hindi events for NRI guests at Bikaner weddings?",
    a: "Yes. Bikaner attracts destination wedding families whose networks include NRI relatives from the UK, USA, Singapore, and the UAE. The hosting must satisfy both the formal ceremonial expectations of the elder Marwari community and the international entertainment standards of the younger diaspora. Seamless bilingual switching — without either register feeling forced — is the core competency here."
  },
  {
    q: "How far in advance should we book for Bikaner's wedding season?",
    a: "Bikaner's winter destination circuit — October through February — is far less crowded than Jaipur or Udaipur, but premium dates at Junagarh and Lallgarh fill quickly for the same reason: limited venue capacity. The anchor calendar mirrors this. WhatsApp as soon as your venue is confirmed — I operate strictly first-to-confirm."
  },
  {
    q: "Do you anchor corporate events and leadership retreats in Bikaner?",
    a: "Yes. Heritage properties like Narendra Bhawan and Karni Bhawan are increasingly hosting corporate leadership retreats for companies that want a premium Rajasthan heritage setting away from the tourist circuits of Jaipur. The corporate event tone — brand-aligned, bilingual, sophisticated — is as important to get right as the wedding register."
  },
  {
    q: "What makes the Bikaner wedding circuit distinctive from other Rajasthan destinations?",
    a: "Bikaner occupies a unique niche in the Rajasthan destination circuit — it has the full heritage architecture of Jodhpur or Jaipur, but without the tourist commercialisation. Families who choose Bikaner are making a statement about their cultural identity and heritage pride. The events here consistently feel more genuinely rooted in Rajasthani culture and less like luxury theme parks. That difference requires a host who actually understands the culture — not one who uses Rajasthan as an exotic backdrop."
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

export default function BikanerPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/vintage-car-couple-shoot.webp" alt="Best Anchor in Bikaner — Junagarh Fort at twilight" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Bikaner · The Fort City</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[14vw] md:text-[9.5vw] lg:text-[7.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4" style={{ backgroundImage: "url('/texture/bikaner.webp')" }}>
                BIKANER
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Royal Marwari heritage weddings</G>, Junagarh Fort ceremonies, and Lallgarh Palace Sangeets in Rajasthan's Desert Fort City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95">SECURE YOUR DATE →</button>
              </a>
              <Link href="/portfolio">
                <button className="px-10 py-5 border border-[#D4AF37]/50 text-[#D4AF37] font-black uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">VIEW PORTFOLIO</button>
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
                  <s.icon size={16} className="text-[#D4AF37] mx-auto mb-3 opacity-60" />
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
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-6 block font-bold">About Anchor Yash</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">Beyond <G>Announcements.</G><br />Beyond Scripts.</h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> is Rajasthan's most trusted heritage destination wedding anchor — commanding crowds with zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                From the iconic red sandstone courtyards of <strong className="text-[#D4AF37]">Junagarh Fort</strong> to the royal banquet halls of Lallgarh Palace, Yash commands Bikaner's unique fusion of Rathore Rajput heritage and Marwari business community elegance.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                Bikaner demands a specific cultural fluency that most anchors simply do not have. The Marwari community's understated refinement, the correct Rathore ceremonial vocabulary, and the complex acoustics of 16th-century fort architecture are not skills that can be improvised on the day of the event.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">MY FULL STORY <ArrowRight size={14} /></Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Bikaner" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. BIKANER IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Bikaner is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Desert Fort City Demands<br />a <G>Rathore Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Bikaner is a city of genuine, undiluted heritage. Unlike the heavily-touristed circuits of Jaipur and Udaipur, a Bikaner event is rarely staged for an external audience. The families here celebrate for themselves — and the anchor who cannot read that self-possessed pride will immediately feel out of place.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {BIKANER_IDENTITY.map((item, i) => (
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
            <div className="bg-zinc-950 px-6 py-4 border-b border-white/5"><p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">What you usually get</p></div>
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5"><p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">What you get here</p></div>
            {VS.map((row, i) => (<>
              <div key={`p${i}`} className="bg-zinc-950 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" /><p className="text-zinc-500 text-sm">{row.problem}</p></div>
              <div key={`f${i}`} className="bg-zinc-900/30 px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3"><CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" /><p className="text-zinc-200 text-sm font-medium">{row.fix}</p></div>
            </>))}
          </div>
        </div>
      </section>

      {/* ══ 5. SERVICES ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">What I Anchor</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Fort Ceremonies to <br/><G>Palace Sangeets.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all group h-full hover:bg-zinc-900/50 relative overflow-hidden">
                  <div className="absolute top-3 right-3"><span className="text-[8px] font-bold uppercase tracking-widest text-[#D4AF37]/60 border border-[#D4AF37]/20 px-2 py-0.5 rounded-full">{s.tag}</span></div>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Royal Venues. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Bikaner Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">Marwari Dignity.<br /><G>Rathore Honour.</G></h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The Marwari business community of Bikaner is one of the most culturally self-aware audiences in Rajasthan. They have seen enough events to know immediately when an anchor is working from a template versus when they are working from genuine cultural understanding. The difference is communicated not just through the words but through the pace, the tone, the references, and the silences.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Rathore Rajput ceremonial structure has specific sequences, specific energy requirements at each stage, and specific protocols around how family members are named, acknowledged, and invited into the ritual. An anchor who handles this correctly creates moments the family will talk about for years. An anchor who gets it wrong does the opposite.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Bikaner heritage fluency — Rathore ceremonial vocabulary, Marwari business family register, Junagarh acoustic technique — is built from deep immersion in this specific cultural ecosystem. It is not improvised.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Marwari Ceremony Fluency", sub: "Business community ritual structure" },
                { label: "Rathore Cultural Protocol", sub: "Correct clan references & honours" },
                { label: "Fort Acoustic Mastery", sub: "Red sandstone reverb technique" },
                { label: "Bilingual Precision", sub: "Formal Hindi · Polished English" },
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
              {["/gallery-2.webp","/gallery-4.webp","/gallery-1.webp","/gallery-5.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Bikaner event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/vintage-car-couple-shoot.webp" alt="Bikaner Junagarh Fort Heritage" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Bikaner · The Desert Fort City</p>
                <p className="text-white text-xs">Rajasthan's most culturally rooted heritage event destination — commanded with authentic Rathore authority.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">10,000+ Crowd.<br /><G>Fort Courtyards.</G><br />Zero Scripts.</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Commanding Bikaner's heritage venues — from the massive open courtyards of Junagarh to the sweeping desert-edge gardens of Gajner Palace — requires a host whose stage presence is genuinely large enough to fill a 16th-century fort without amplification alone. The acoustic challenges of heritage sandstone demand technique, not volume.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Marwari Community Protocol Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Multi-generational family structures, specific ceremonial sequencing requirements, and the understated elegance expected of a Marwari business elite wedding — all pre-researched, pre-calibrated, and seamlessly executed from the first baraat beat to the final reception toast.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Bikaner Heritage Events.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />)}</div>
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
              {["Junagarh Fort","Lallgarh Palace","Karni Bhawan","Gajner Palace","Marwari Wedding Expert","Bilingual Hindi/English","Unscripted Mastery","4.9★ Rated","Rathore Heritage"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Bikaner <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-bikaner-${idx}`} />
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
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Mehrangarh" },
              { icon: MapPin, label: "Jaisalmer", href: "/anchor-in-jaisalmer", desc: "Golden Fort · Desert" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · Palaces" },
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Taj" },
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
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Your Junagarh Date<br /><G>Won't Wait.</G></h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">Bikaner's peak season fills faster than most of Rajasthan. Heritage venue availability is strictly limited and I do not hold dates without confirmation.</p>
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
              { label: "Home", href: "/" },{ label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },{ label: "Contact", href: "/contact" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Anchor in Jaisalmer", href: "/anchor-in-jaisalmer" },
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (<Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">© {new Date().getFullYear()} ANCHOR YASH SONI · BIKANER, RAJASTHAN</p>
        </div>
      </footer>
    </main>
  );
}
