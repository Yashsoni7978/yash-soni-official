"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Sword, UserCheck, Users, Zap } from "lucide-react";



// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const CITY = "Jodhpur";
const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Jodhpur.%20Can%20you%20check%20availability%3F";
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
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}>
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
// DATA — All Jodhpur-specific
// ─────────────────────────────────────────────
const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];
const JODHPUR_IDENTITY = [
  {
    icon: Crown,
    title: "Umaid Bhawan Scale",
    desc: "The largest private residence in the world that still functions as a working palace. Events here operate under a different set of rules — royal family protocols, strict sound corridors, and a guest list that often includes nobility and senior government figures. The anchor must command this room without being diminished by it."
  },
  {
    icon: Sword,
    title: "Mehrangarh Fort Acoustics",
    desc: "The fort courtyard is one of the most dramatic wedding venues in India and also one of the most acoustically challenging. Stone walls, open sky, crowd spread across multiple levels, and unpredictable desert wind. Commanding this space is a learned skill — not an improvised one."
  },
  {
    icon: Globe,
    title: "The Blue City's Royal Register",
    desc: "Jodhpur's heritage families are not Jaipur. The register is more austere, the protocol more formal. The anchor who brings the same high-energy Bollywood tone to a Jodhpur royal wedding has fundamentally misread the room. The hosting style must match the city's personality — dignified, powerful, and deeply rooted."
  },
];
const SERVICES = [
  {
    icon: Heart,
    title: "Royal Wedding Anchor",
    desc: "Umaid Bhawan, Mehrangarh Fort, RAAS Jodhpur — each demands precise protocol, bilingual hosting, and the ability to adapt mid-event. From the baraat entry at the fort gates to the reception at the palace courtyard.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Sangeet Emcee",
    desc: "High-energy fort-courtyard Sangeets where sound bounces off stone walls and crowds spread across three levels. Unscripted crowd games, real-time energy читал, and the command to pull 600 guests into one moment.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Haldi & Mehndi Host",
    desc: "Intimate haveli-courtyard events where family elders expect respect and the younger crowd wants energy. The tone shifts effortlessly — games that include everyone, transitions that honour the ritual.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Corporate Galas",
    desc: "Annual awards, dealer meets, and product launches at Ajit Bhawan, Vivanta Jodhpur, and surrounding properties. Bilingual hosting, brand-aligned delivery, sharp enough for senior leadership rooms.",
    tag: "Corporate"
  },
];
const VENUES = [
  { name: "Umaid Bhawan Palace", tag: "340-room Palace · Royalty", icon: Crown },
  { name: "Mehrangarh Fort", tag: "Fort Courtyard · Iconic", icon: Sword },
  { name: "RAAS Jodhpur", tag: "Boutique Heritage · 5-Star", icon: Gem },
  { name: "Ajit Bhawan", tag: "Heritage Hotel · Garden", icon: Building2 },
  { name: "Vivanta Jodhpur", tag: "Contemporary · 400+", icon: Sparkles },
  { name: "Bal Samand Lake Palace", tag: "Lakeside · Heritage", icon: Star },
  { name: "WelcomHeritage Mandir Palace", tag: "Palace Property · Regal", icon: Award },
  { name: "Bijolai Palace", tag: "Boutique Heritage · 150+", icon: MapPin },
];
const VS = [
  { problem: "Generic hosting tone misreads Jodhpur's royal register", fix: "Dignified, powerful delivery calibrated to the Blue City's personality" },
  { problem: "Cannot manage fort-courtyard acoustic challenges", fix: "Mehrangarh stone-wall echo technique from repeated events at the fort" },
  { problem: "Unfamiliar with Umaid Bhawan's palace protocols", fix: "Royal family protocol awareness from prior events at the palace" },
  { problem: "Desert wind creates dead microphone moments", fix: "Open-air contingency hosting that turns technical gaps into crowd moments" },
  { problem: "Mispronounces Rajputana surnames and ritual names", fix: "Pre-event research deck — every name, every clan, every ritual verified" },
  { problem: "Same energy level for Sangeet and reception", fix: "Real-time energy calibration — electric for Sangeet, regal for reception" },
];
const TESTIMONIALS = [
  {
    name: "Rathore Family",
    quote: "Our Umaid Bhawan wedding had 700 guests — ranging from Delhi industrialists to ancestral Jodhpuri families who have never left the city. Yash read every section of that room. The royal elders were nodding in approval, the Delhi crowd was dancing. I have never seen an anchor manage that range.",
    event: "Wedding · Umaid Bhawan Palace · 700 guests"
  },
  {
    name: "Shekhawat Family",
    quote: "The Meherangarh Sangeet was everything we dreamed. Three courtyard levels, 500 guests, stone-wall acoustics. Most anchors would have lost the crowd in that space. He owned it. When the sound cut for two minutes, he went completely unplugged and crowd cheered louder.",
    event: "Sangeet · Mehrangarh Fort · 500 guests"
  },
  {
    name: "VP Marketing — Auto OEM",
    quote: "National dealer meet at Ajit Bhawan — 420 channel partners from across Rajasthan and Gujarat. Day conference, evening awards gala, dinner performance. Yash hosted all three formats without the tone bleeding from one into the next. That commercial awareness is very rare.",
    event: "Dealer Meet · Ajit Bhawan · 420 delegates"
  },
];
const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Jodhpur?",
    a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events anchored across India. He specialises in Jodhpur's fort and palace wedding circuit — Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur, Ajit Bhawan, Bal Samand, and Vivanta. Bilingual Hindi/English, unscripted, experienced in royal family protocols and NRI destination weddings."
  },
  {
    q: "Have you hosted weddings at Umaid Bhawan Palace?",
    a: "Yes. Umaid Bhawan is among the most demanding venues in India. The palace management has strict protocols — specific staging areas, sound system limitations in the heritage wings, and the requirement to interact respectfully with members of the royal family who may attend. Knowing what is and isn't appropriate in this setting comes from working there, not from research."
  },
  {
    q: "How do you manage the acoustics at Mehrangarh Fort events?",
    a: "The fort courtyard bounces sound off thick stone walls and loses it to the open sky simultaneously. The technique is to use the crowd rather than fight the acoustics — pulling people closer, building circular energy rather than projecting out. It is why this setting specifically requires an anchor who has worked it before, not one figuring it out during your wedding."
  },
  {
    q: "Can you manage a large NRI crowd at a Jodhpur palace wedding?",
    a: "The Jodhpur destination circuit consistently brings families from the UK, US, and UAE. The hosting challenge is specific — the international cousins need English that sounds native, not anchored. The Rajputana family elders need a tone that respects the heritage of the house. Both needs are real and neither can be ignored. Code-switching across these registers, live and unscripted, is the core skill."
  },
  {
    q: "How far in advance should I book for a Jodhpur destination wedding?",
    a: "Palace venues in Jodhpur — particularly Umaid Bhawan — have extremely limited availability windows. The anchor calendar for November through February fills 6–8 months ahead at premium properties. Blocking the date requires an advance payment and I do not hold tentative reservations. WhatsApp the moment your venue is confirmed."
  },
  {
    q: "Do you anchor Sangeet functions at Jodhpur fort venues?",
    a: "Yes. Mehrangarh Fort Sangeets are among the most complex events I anchor — the courtyard layout, the acoustic behavior of the stone, the crowd movement across multiple levels, and the desert chill that arrives after 9 PM affecting crowd energy. All of these are variables I manage in real time. The result is a Sangeet that feels electric rather than fighting the space."
  },
  {
    q: "Can you anchor corporate events in Jodhpur?",
    a: "Yes. Dealer meets, annual galas, and leadership summits at Ajit Bhawan, Vivanta Jodhpur, and WelcomHeritage Mandir Palace are a regular part of the calendar. The corporate register is brand-specific and sharp — not a wedding tone re-purposed for a boardroom. Bilingual Hindi/English is standard."
  },
  {
    q: "What makes Anchor Yash different from local Jodhpur anchors?",
    a: "Local anchors know Jodhpur. I know Jodhpur and the full spectrum of event formats, crowd psychologies, and venue-specific requirements that come with the destination wedding and corporate circuit. The 4.9★ rating from 200+ clients, the track record at palace properties, and 1,100+ events without a paper script are the evidence. The question to ask any anchor is: what happens when something goes wrong at Mehrangarh at 11 PM? The answer tells you everything."
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
export default function JodhpurPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />
      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/backgrounds/jodhpur_bg.webp" alt="Best Anchor in Jodhpur — Mehrangarh Fort at twilight" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">
                Best Event Anchor · Jodhpur · The Blue City
              </span>
            </div>
            {/* H1 — ANCHOR + Texture City Name */}
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[15vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4" style={{ backgroundImage: "url('/texture/jodhpur.webp')" }}>
                JODHPUR
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>palace weddings</G>, fort Sangeets, and royal destination events in the Blue City of India.
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation for commanding crowds with zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light">
                From the grand heights of <strong className="text-[#D4AF37]">Umaid Bhawan Palace</strong> to the historic Mehrangarh Fort, Yash brings a level of sophistication and energy that reflects the royal heritage of Jodhpur.
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
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Jodhpur" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* ══ 3. JODHPUR IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Jodhpur is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Blue City Demands<br />a <G>Royal Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Jodhpur is not Jaipur. The heritage is deeper, the protocol is stricter, and the wrong tone at a Rajputana wedding is not a minor error — it is a cultural misread that the family remembers.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {JODHPUR_IDENTITY.map((item, i) => (
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
                Every Format. <G>Every Fort.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Palaces & Forts. <G>Known From Inside.</G></h2>
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
      {/* ══ 7. ROYAL PROTOCOL SECTION ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Royal Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Palace Protocol.<br /><G>Uncompromised.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Jodhpur destination weddings carry the weight of lineage. At a Rathore family wedding at Umaid Bhawan, the wrong joke, the wrong reference, or the wrong energy at the wrong moment is not a recoverable error. The anchor is representing the family to everyone in that room.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Royal family members may attend. Heritage guests from ancestral Jodhpur lineages will notice every detail. NRI cousins from London who've heard top international MCs will notice a different set of details. The register must satisfy all of them simultaneously — and it must feel effortless.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              8+ years of Rajasthan's top-tier wedding circuit means the palace protocols, the clan references, and the cultural nuances are already known — not studied the night before.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Royal Protocol Awareness", sub: "Umaid Bhawan heritage rules" },
                { label: "Fort Acoustic Command", sub: "Mehrangarh outdoor mastery" },
                { label: "Rajputana Cultural Fluency", sub: "Clan, ritual, and reference" },
                { label: "Bilingual Precision", sub: "English · Hindi · Context" },
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
              {["/gallery-1.webp", "/gallery-3.webp", "/gallery-2.webp", "/gallery-4.webp", "/gallery-5.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Jodhpur event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/backgrounds/jodhpur_bg.webp" alt="Mehrangarh Fort Jodhpur" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Jodhpur · Mehrangarh Fort</p>
                <p className="text-white text-xs">India's most dramatic wedding fortress — commanded repeatedly.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              10,000+ Crowd.<br /><G>Fort Walls.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Fort-scale crowds are a specific skill. Sound disperses differently in open heritage spaces. The energy that works in a hotel ballroom evaporates in a fort courtyard. The technique for commanding 600 guests across Mehrangarh's three courtyard levels is something built over repeated events — not borrowed from a wedding emcee reel.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Heritage Venue Crisis Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Desert wind, stone-wall echo, power challenges in heritage wings, last-minute programme changes at the fort — all handled without the guests knowing anything happened.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Royal Jodhpur Events.</G></h2>
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
              {["Umaid Bhawan Palace", "Mehrangarh Fort", "RAAS Jodhpur", "Ajit Bhawan", "Bal Samand", "Royal Wedding Anchor", "Bilingual Hindi/English", "Unscripted Mastery", "4.9★ Rated"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Jodhpur <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-jodhpur-${idx}`} />
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
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Palace Weddings" },
              { icon: MapPin, label: "Jaisalmer", href: "/anchor-in-jaisalmer", desc: "Desert · Golden Fort" },
              { icon: MapPin, label: "Kumbhalgarh", href: "/anchor-in-kumbhalgarh", desc: "Fort Retreat · Hilltop" },
              { icon: MapPin, label: "Pushkar", href: "/anchor-in-pushkar", desc: "Lake Town · Heritage" },
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
              Your Palace Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Jodhpur's peak destination season fills 6–8 months ahead. I do not maintain a waitlist and do not send replacements.
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
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Anchor in Udaipur", href: "/anchor-in-udaipur" },
              { label: "Anchor in Jaisalmer", href: "/anchor-in-jaisalmer" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · JODHPUR, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
