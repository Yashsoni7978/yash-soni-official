"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20event%20in%20Kota.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/kota.png')", backgroundColor: GOLD }}
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

const KOTA_IDENTITY = [
  {
    icon: Landmark,
    title: "The Umed Bhawan Prestige",
    desc: "Umed Bhawan Palace dominates Kota's luxury wedding scene. Designed by Sir Samuel Swinton Jacob, its blend of Rajput and Edwardian architecture requires a host who can command immense, formal imperial spaces. An event here is not a casual gathering; it is a display of ultimate heritage prestige for Kota's elite families, and the anchor’s tone must match that architectural weight perfectly."
  },
  {
    icon: Briefcase,
    title: "The Industrial & Educational Epicenter",
    desc: "Kota is unique in Rajasthan. Beyond its heritage, it is an economic powerhouse driven by massive coaching institutes and industrial conglomerates. The audiences here are often highly educated, intensely professional, and discerning. Whether hosting a wedding for an industrial family or a high-stakes corporate felicitation, the anchor must possess sharp, intellectual bilingual execution."
  },
  {
    icon: Globe,
    title: "The Hadoti Culture Integration",
    desc: "Kota is the heart of the Hadoti region. The local Marwari and Rajput families share a specific cultural context that differs significantly from Marwar or Mewar. Bringing authentic Hadoti references, honoring the Chambal river's significance in local life, and correctly executing regional ceremonial sequences builds an immediate, unbreakable trust with the family and business community."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Umed Bhawan Wedding Anchor",
    desc: "Masterful hosting for extravagant ceremonies at Umed Bhawan Palace and Brijraj Bhawan. Ensuring every ritual—from the grand Baraat entry to the Varmala—is articulated with royal dignity and deep reverence for the Marwari and Rajput families of the Hadoti region.",
    tag: "Royal"
  },
  {
    icon: Music2,
    title: "Chambal Riverside Sangeet",
    desc: "High-voltage Sangeet anchoring along the banks of the Chambal river or the gardens of Garh Palace. Balancing the open-air acoustic requirements with non-stop crowd engagement, turning formal VIP audiences into an unstoppable celebration.",
    tag: "Sangeet"
  },
  {
    icon: Building2,
    title: "Elite Corporate Summit Host",
    desc: "Precision anchoring for Kota's massive coaching institute networks, medical summits, and industrial galas. Delivering crisp, bilingual (Hindi/English) professional communication that commands a room of CEOs, directors, and top-tier educators.",
    tag: "Corporate"
  },
  {
    icon: Flower2,
    title: "Hadoti Pre-Wedding Emcee",
    desc: "Warm, culturally intelligent hosting for Mehndi and Haldi functions. Breaking the ice between diverse guest lists and getting the families fully integrated before the evening functions, using organic humor and unscripted interaction.",
    tag: "Pre-Wedding"
  },
];

const VENUES = [
  { name: "Umed Bhawan Palace", tag: "Royal Heritage · Taj", icon: Crown },
  { name: "Brijraj Bhawan", tag: "Colonial Heritage Hotel", icon: Gem },
  { name: "Garh Palace Kota", tag: "Historic · City Palace", icon: Landmark },
  { name: "Sukh Mahal Bundi", tag: "Nearby Lakeside Heritage", icon: Sparkles },
  { name: "WelcomHeritage Kota", tag: "Premium Banquet", icon: Building2 },
  { name: "Chambal River Resorts", tag: "Open-air · Riverside", icon: MapPin },
  { name: "Kota City Banquets", tag: "High-Capacity Corporate", icon: Briefcase },
  { name: "Hadoti Boutique Hotels", tag: "Intimate Pre-weddings", icon: Flower2 },
];

const VS = [
  { problem: "Overwhelming an elite corporate audience with loud 'wedding-style' shouting", fix: "Sharp, bilingual corporate calibration suited for Kota’s directors and educators" },
  { problem: "Ignoring the specific Hadoti cultural identity and using generic Mewari references", fix: "Authentic integration of Hadoti heritage and local Marwari/Rajput customs" },
  { problem: "Getting lost in the massive, imposing spaces of Umed Bhawan Palace", fix: "Imperial presence and acoustic command developed for massive heritage properties" },
  { problem: "Failing to connect the younger student/startup crowd with traditional elders", fix: "Flawless code-switching between highly formal respect and modern, engaging humor" },
  { problem: "Relying on paper notes during complex multi-speaker felicitation ceremonies", fix: "100% unscripted flow—maintaining absolute eye contact and audience control" },
  { problem: "Poor mic technique outdoors over the Chambal river causing echo and loss of speech", fix: "Expert outdoor signal handling and strategic crowd-condensing techniques" },
];

const TESTIMONIALS = [
  {
    name: "Gupta Family",
    quote: "Hosting our wedding at Umed Bhawan Palace was a lifelong dream, and the architecture itself commands respect. We needed an anchor who wouldn't diminish the venue. Yash balanced the royal gravity of the property with the warm, joyous celebration of our Marwari family flawlessly. Not one misstep over three days.",
    event: "Heritage Wedding · Umed Bhawan Palace · 600 guests"
  },
  {
    name: "Director — Premium Coaching Institute",
    quote: "Our annual faculty felicitation brings together 800 highly educated, extremely analytical professionals. It requires absolute intellectual polish. Yash was formidable. He did not use a single sheet of paper, transitioned smoothly between English and Hindi, and held the room's respect entirely. The standard in Kota has been raised.",
    event: "Corporate Summit · Kota City Banquet · 800 delegates"
  },
  {
    name: "Rajawat Family",
    quote: "The open-air riverside Sangeet was challenging because we had both highly traditional relatives and our friends from Mumbai. Yash broke the ice brilliantly. He got everyone involved without crossing any boundaries of respect, and the energy never dropped once.",
    event: "Sangeet · Chambal Riverside Property · 350 guests"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for luxury events and weddings in Kota?",
    a: "Anchor Yash Soni is widely regarded as the premier host for Kota's elite circuit. With 1,100+ events and a 4.9★ rating, he specializes in high-stakes environments like Umed Bhawan Palace and major corporate summits for the city's vast educational and industrial networks."
  },
  {
    q: "Can you host corporate summits for educational institutes in Kota?",
    a: "Absolutely. Kota's corporate landscape is heavily driven by education and industry. Hosting for directors, medical professionals, and top faculty requires a sharp, intellectual, and completely bilingual (English/Hindi) approach. I frequently command audiences of 500-1,000 corporate delegates with zero paper scripts, ensuring total engagement."
  },
  {
    q: "How do you manage events at legacy properties like Umed Bhawan Palace?",
    a: "Taj properties and historic palaces like Umed Bhawan have a specific architectural and cultural weight. An anchor cannot use cheap club-style energy here. The hosting must be regal, authoritative, and deeply respectful of the Hadoti heritage, ensuring the family's prestige is amplified by the way the event is conducted."
  },
  {
    q: "Are you familiar with the cultural nuances of the Hadoti region?",
    a: "Yes. Kota, Bundi, and the surrounding Hadoti belt possess a distinct culture, dialect influence, and Marwari/Rajput integration. Coming in with generic Rajasthani tropes feels inauthentic to local families. I integrate authentic Hadoti respect and ceremonial flow into the wedding narrative, building deep trust with the elders."
  },
  {
    q: "Can you manage open-air acoustics near the Chambal River venues?",
    a: "Riverside properties present acoustic challenges because sound vanishes over the water. I work dynamically to bring the crowd physically closer together, creating an acoustic 'sweet spot' for the Sangeet or reception so the energy remains trapped within the audience rather than bleeding out."
  },
  {
    q: "Do you host events in nearby cities like Bundi or Jhalawar?",
    a: "Yes. The entire Hadoti region is interconnected. I often anchor destination weddings at the heritage properties in Bundi or bespoke events in Jhalawar, applying the same standard of luxury execution established in Kota."
  },
  {
    q: "How do you handle a mixed guest list of highly traditional elders and modern youth?",
    a: "This is the most common scenario for Kota's business families. The secret lies in bilingual code-switching. I will address the elders with absolute formal Hindi respect during the Varmala, but seamlessly pivot to engaging, sharp English communication to pull the younger, metropolitan crowd onto the dance floor during the Sangeet."
  },
  {
    q: "When should we secure our dates for a Kota event?",
    a: "Because Kota blends both intense corporate season scheduling and peak winter wedding dates (October to February), elite anchors are booked well in advance. Once your venue (like Umed Bhawan) is locked, please WhatsApp me immediately to block the dates."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  })),
};

export default function KotaPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/varmala-fireworks-color-shots.webp" alt="Best Anchor in Kota — Umed Bhawan Palace and Heritage" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Kota · The Hadoti Capital</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/kota.png')" }}
              >
                KOTA
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Umed Bhawan luxury weddings</G>, high-stakes corporate summits, and elite Hadoti celebrations along the Chambal.
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
                Beyond <G>Announcements.</G><br />Beyond Scripts.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> is the undisputed authority for high-stakes anchoring in Kota's complex event ecosystem.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Kota operates on two distinct but equally demanding peaks: the supreme royal heritage of <strong className="text-[#D4AF37]">Umed Bhawan Palace</strong> and the hyper-intellectual environment of the city’s massive education and corporate sector. Yash commands both effortlessly.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                Delivering 100% unscripted, bilingual mastery, he possesses the cultural nuance to honor traditional Hadoti rituals and the corporate polish to engage 800+ executive delegates without breaking stride. In Kota, he doesn't just host the event—he anchors the prestige of the family and the brand.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Kota" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. KOTA IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Kota is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Hadoti Capital Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Kota is a fascinating duality. It is simultaneously a city of profound royal Rajasthani heritage and one of India’s most rigorous intellectual and industrial hubs. An event here—whether a Marwari palace wedding or a corporate mega-summit—requires an anchor who can walk comfortably in both worlds. A host who lacks intellect will fail the corporates; a host who lacks cultural depth will alienate the heritage families.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {KOTA_IDENTITY.map((item, i) => (
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
                Corporate Summits to<br /><G>Palace Weddings.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Hadoti Properties. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Kota Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Palatial Gravity.<br /><G>Intellectual Rigor.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting an event for Kota's top-tier families—the ones who book Umed Bhawan Palace or Brijraj Bhawan—means you are addressing some of the most influential industrialists and educators in India. They do not tolerate fluff. The anchor must be perfectly prepared, articulate, and capable of maintaining an aura of absolute prestige. 
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              At the same time, when the formality breaks into a Sangeet party by the Chambal river, you must be capable of injecting rapid, high-caliber energy without resorting to cheap tactics. It requires a highly sophisticated pendulum swing between royal respect and modern celebration.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Kota fluency—mastering the Hadoti heritage, the Umed Bhawan logistics, and the rigorous bilingual corporate standard—marks an anchor who operates at the summit of the industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Elite Bilingualism", sub: "Flawless English for Corporate logic" },
                { label: "Palace Protocol", sub: "Commanding Taj Umed Bhawan logistics" },
                { label: "Hadoti Integration", sub: "Deep local Marwari/Rajput respect" },
                { label: "River Acoustics", sub: "Defeating wind over the Chambal" },
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
              {["/gallery-5.webp","/gallery-2.webp","/gallery-1.webp","/gallery-4.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Kota Hadoti event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/varmala-fireworks-color-shots.webp" alt="Kota Umed Bhawan Palace Wedding" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Kota · The Hadoti Core</p>
                <p className="text-white text-xs">Balancing intense royal prestige at Umed Bhawan and sharp intellectual command at mega-corporate summits.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Palatial Gardens.<br /><G>800+ Delegates.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Kota often means managing extreme sizes. Whether anchoring a massive 1,000-guest wedding reception on the sprawling lawns of Umed Bhawan, or holding the unbreakable attention of 800 highly educated faculty delegates during a felicitation, Yash physically and vocally fills the space. 
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "Ed-Tech & Industrial" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Kota's corporate events are unusually complex—combining VIP networking, multi-speaker structures, and intricate award sequences. Yash executes these entirely unscripted, providing a seamless, bulletproof anchor layer that allows directors and organizers to fully relax.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Kota Events.</G></h2>
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
              {["Umed Bhawan Palace","Brijraj Bhawan","Corporate Summit Host","Hadoti Heritage","Bilingual English/Hindi","Chambal River Events","Educational Hub Expert","4.9★ Rated","Garh Palace Kota"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Kota & Hadoti <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-kota-${idx}`} />
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
              { icon: MapPin, label: "Ranthambore", href: "/anchor-in-ranthambore", desc: "Safari · 2 hrs away" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · 4 hrs away" },
              { icon: MapPin, label: "Chittorgarh", href: "/anchor-in-chittorgarh", desc: "Mewar · Historic Fort" },
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Luxury" },
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
              Kota's premium venues like Umed Bhawan have heavily contested calendars due to the overlap of peak wedding season and mega corporate events. I do not hold dates without confirmation.
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
              { label: "Anchor in Ranthambore", href: "/anchor-in-ranthambore" },
              { label: "Anchor in Chittorgarh", href: "/anchor-in-chittorgarh" },
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · KOTA, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}