"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Music2, ShieldCheck, Sparkles, Star, Sun, Users, Wind } from "lucide-react";
import { FAQItem } from "../_components/InteractiveFAQ";


const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Jaisalmer.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/jaisalmer.webp')", backgroundColor: GOLD }}
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
  { val: "700", suffix: "+", label: "Shows Hosted", sub: "across Rajasthan", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "50+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const JAISALMER_IDENTITY = [
  {
    icon: Sun,
    title: "The Open Desert Horizon",
    desc: "Jaisalmer breaks all acoustic rules. A wedding function at the Sam Sand Dunes or a bespoke desert camp lacks walls, ceilings, or any natural sound reinforcement. The wind literally swallows speech. An anchor here must possess sheer vocal power, mic placement proficiency, and the physical crowd-command skills necessary to draw hundreds of guests into a tight circle of energy in the middle of nowhere."
  },
  {
    icon: Globe,
    title: "The NRI Luxury Epicenter",
    desc: "Because of properties like Suryagarh, Jaisalmer has become the pinnacle of extreme luxury destination weddings. The families flying their guests into this remote city are expecting an international standard of production. The hosting must reflect that polish. There is no room here for cheap humor or loud, unstructured interruptions. It requires a flawlessly bilingual, deeply sophisticated presence."
  },
  {
    icon: Landmark,
    title: "The Golden Bhati Lineage",
    desc: "The culture of the Golden City is dictated by its 12th-century Rajput heritage. When hosting inside the Jaisalmer Fort—the only living fort in India—or in its surrounding palaces, the event is immediately imbued with historical weight. Incorporating the right clan references, acknowledging the local Manganiyar musical traditions, and maintaining Rajasthani dignity is non-negotiable."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Suryagarh Heritage Protocol",
    desc: "Bespoke ceremony and reception hosting for the ultra-luxury bracket at Suryagarh and the Jaisalmer Marriott. Flawless balancing of Rajputana hospitality and international HNI expectations. Every sequence managed with quiet, overwhelming authority.",
    tag: "Luxury"
  },
  {
    icon: Music2,
    title: "Desert Dune Sangeet Emcee",
    desc: "Commanding the most difficult acoustic environment in Rajasthan: the open Thar Desert. Building explosive Sangeet energy at luxury desert camps against the Sam Sand Dunes, keeping the crowd locked in despite plunging temperatures and vast open spaces.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Golden Fort Pre-Wedding",
    desc: "Managing high-spirited Mehndi and Haldi events in Jaisalmer's golden sandstone courtyards. Integrating local Manganiyar folk artists into the event timeline without the transition feeling disjointed or forced.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Elite Corporate Retreats",
    desc: "Guiding CEO-level corporate groups through desert safaris, private dune dinners, and leadership galas. Maintaining a crisp, engaging anchor profile that respects the seniority of the delegates while validating their luxury destination choice.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Suryagarh Jaisalmer", tag: "Ultra-Luxury Fortress", icon: Crown },
  { name: "Jaisalmer Marriott", tag: "Premium · Golden City", icon: Gem },
  { name: "The Serai", tag: "Luxury Desert Camp", icon: Sparkles },
  { name: "Sujan Jaisalmer", tag: "Boutique Wilderness", icon: Wind },
  { name: "WelcomHeritage Mandir Palace", tag: "Royal Residence", icon: Landmark },
  { name: "Sam Sand Dunes", tag: "Open Thar Desert", icon: Sun },
  { name: "Fort Rajwada", tag: "Classic Heritage", icon: Building2 },
  { name: "Garh Jaisalmer", tag: "Living Fort Venue", icon: MapPin },
];

const VS = [
  { problem: "Voice and energy lost completely to the open desert wind at dune events", fix: "Specialised open-air acoustic technique and physical crowd-condensing capability" },
  { problem: "Local folk artists (Manganiyars) clumsily inserted into the modern timeline", fix: "Seamless, respectful integration of Rajasthani folk music with DJ sets" },
  { problem: "Over-the-top, loud Indian wedding tropes that ruin an ultra-luxury Suryagarh aesthetic", fix: "International-standard luxury hosting — refined, understated, yet totally commanding" },
  { problem: "Incapable of bridging elder traditional respects with NRI diaspora expectations", fix: "Flawless bilingual code-switching (English/Hindi) preserving cultural gravitas" },
  { problem: "Fails to manage the harsh temperature drops of the desert winter nights", fix: "Aggressive Sangeet pacing — moving the crowd quickly from seats to the dance floor" },
  { problem: "Reading from paper scripts while standing in a 12th-century golden fort", fix: "100% unscripted, eyes-up crowd connection from start to finish" },
];

const TESTIMONIALS = [
  {
    name: "Goenka Family",
    quote: "Our Suryagarh wedding required absolute understated elegance. We had guests flying in from London, Dubai, and Mumbai. Yash read the room perfectly. He never screamed into the mic, never forced the humor, yet he commanded 400 people effortlessly. He connected deeply with the elders while keeping our international friends wholly engaged.",
    event: "Luxury Wedding · Suryagarh · 400 guests"
  },
  {
    name: "Desai Family",
    quote: "Managing a Sangeet in the open desert dunes was an acoustic nightmare—until Yash took the stage. The wind was fierce, but his energy outmatched the desert. He physically arranged the crowd, built an intimate circle in infinite space, and held 500 guests locked to the stage for a straight 4-hour set. Incredible.",
    event: "Desert Camp Sangeet · Sam Sand Dunes · 500 guests"
  },
  {
    name: "VP Marketing — Corporate MNC",
    quote: "We flew 80 of our top performing partners to The Serai for an exclusive retreat. Yash hosted our gala dinner under the stars with supreme professionalism. He brought out the rich history of Jaisalmer without turning the evening into a history lecture. The perfect balance of elite corporate standard and Rajasthani warmth.",
    event: "Corporate Gala · The Serai · 80 delegates"
  },
];

const FAQS = [
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  {
    q: "Who is the best anchor for luxury weddings in Jaisalmer?",
    a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and specialises in the ultra-luxury and NRI destination wedding demographic in Jaisalmer — with deep experience at Suryagarh, Marriott Jaisalmer, The Serai, and premium desert camp venues. He delivers the flawless, bilingual, and sophisticated hosting required for Jaisalmer's discerning clientele.",
  },
  {
    q: "How do you handle the acoustics of open desert events at Sam Sand Dunes?",
    a: "Open desert is one of the hardest acoustic environments in the world — sound dissipates instantly and wind interferes with microphone usage. The solution is crowd psychology: using precise pacing to draw the audience physically closer to the stage, creating an intimate bubble of energy that defies the infinite space around it. This is a technique that comes from experience, not theory.",
  },
  {
    q: "Can you host a bilingual event that bridges NRI modern life with Rajasthani tradition?",
    a: "Bilingual cultural bridging is the cornerstone of Jaisalmer destination wedding hosting. NRI families from the US, UK, and UAE bring their extended diaspora — the hosting must be perfectly bilingual, ensuring international guests are completely engrossed while Indian relatives feel the full cultural depth and pride of the Rajputana Thar setting.",
  },
  {
    q: "Do you integrate local Rajasthani folk musicians (like Manganiyars) into your events?",
    a: "Manganiyar folk musicians are woven seamlessly into Jaisalmer events — respectfully introduced and strategically placed so the transition from heritage folk to modern Sangeet beats feels like a natural cultural evolution, not a jarring interruption. Yash coordinates directly with musicians and DJs to manage this flow.",
  },
  {
    q: "Have you hosted corporate elite events and offsites in Jaisalmer?",
    a: "Jaisalmer is a highly sought-after destination for CEO-level retreats and top-tier reward trips. Brand-aligned, executive-level hosting for daytime leadership summits and premium gala hosting for evening desert safaris maintain a professional yet highly engaging tone throughout.",
  },
  {
    q: "What makes Jaisalmer different from Jaipur or Udaipur for a wedding host?",
    a: "Jaisalmer is remote and extreme — families who choose the Golden City are deliberately isolating themselves in luxury at the edge of the Thar Desert. The hosting must match the vastness of the setting: unmatched elegance, profound environmental awareness, and a stage presence that can command an audience under the weight of a living 12th-century fort.",
  },
  {
    q: "What happens if it gets very cold during our desert Sangeet?",
    a: "Desert temperatures plummet rapidly after sunset from November to February. As the host, the timeline is aggressively adjusted — cutting long gaps, driving interactive segments rapidly, and immediately moving the crowd to the dance floor to maintain energy and core temperature. This real-time adaptation is what separates experienced Jaisalmer anchors from untested ones.",
  },
  {
    q: "How far in advance should we book for a Jaisalmer event?",
    a: "Jaisalmer events often require multi-day blockouts due to travel distance from central Rajasthan — availability disappears quickly during peak winter months. Families booking Suryagarh or the Marriott typically lock their anchor simultaneously with the venue. WhatsApp immediately upon confirming your dates.",
  },
  {
    q: "Who is the best emcee in Jaisalmer for desert weddings?",
    a: "Anchor Yash Soni is the top-rated wedding emcee and host for Jaisalmer destination events — with a 4.9★ verified rating and experience at Suryagarh, The Serai, Gorbandh Palace, and Sam Sand Dunes venues. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies across all Jaisalmer settings.",
  },
  {
    q: "What is the difference between a wedding anchor, emcee, and host in Jaisalmer?",
    a: "Anchor, emcee, host, and MC are four terms for the same role. International destination wedding planners typically prefer 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates across all formats flawlessly — the Jaisalmer fort and desert circuit demands the same skill regardless of what the role is called.",
  },
];



export default function JaisalmerPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/backgrounds/jaisalmer_bg.webp" alt="Best Anchor in Jaisalmer — The Golden Fort and Thar Desert" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" quality={75} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full /60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#B5952F]" />
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Jaisalmer · The Golden City</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[13vw] md:text-[9vw] lg:text-[7rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/jaisalmer.webp')" }}
              >
                JAISALMER
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Suryagarh luxury weddings</G>, Marriott Sangeets, and ultra-premium desert camp celebrations in the heart of the Thar Desert.
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
      <section className="py-16  border-y border-[#D4AF37]/12 z-20 relative">
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
                With 5+ years on stage and 700+ shows handled, <strong className="text-white">Anchor Yash Soni</strong> is the definitive voice for luxury destination weddings that refuse to compromise.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                In Jaisalmer, where the margin for error is zero due to the extreme logistics and HNI expectations, Yash brings absolute control. Whether anchoring a flawless bilingual reception at <strong className="text-[#B5952F]">Suryagarh</strong> or mastering the wind-swept acoustics of a private desert dune, his execution is entirely unscripted.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                Jaisalmer requires more than just speaking into a microphone; it requires elite crowd management, environmental adaptability, and a cultural register that honors the 12th-century Golden City while engaging the world's most discerning NRI guests.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#B5952F] text-xs tracking-widest uppercase hover:text-white transition-colors">
                MY FULL STORY <ArrowRight size={14} />
              </Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" quality={75} />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Jaisalmer" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" quality={75} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. JAISALMER IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Jaisalmer is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Golden City Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Jaisalmer represents the absolute extreme of Rajasthan's destination wedding circuit. It is dramatically remote, visually overwhelming, and favored by families who want luxury far beyond the typical tourist corridors. Consequently, the hosting standard must rise to match. There is no tolerance for amateur crowd work or generic templates here.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {JAISALMER_IDENTITY.map((item, i) => (
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
      <section className="py-20 md:py-28 px-5 md:px-12  border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Difference Is Real</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Generic Anchor <G>vs This One.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            <div className=" px-6 py-4 border-b border-white/5">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">What you usually get</p>
            </div>
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-widest">What you get here</p>
            </div>
            {VS.map((row, i) => (
              <>
                <div key={`p${i}`} className=" px-6 py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
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
                Suryagarh to<br /><G>Sand Dunes.</G>
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
      <section className="py-16  border-b border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Luxury Dunes. <G>Known From Inside.</G></h2>
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
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Jaisalmer Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              NRI Polish.<br /><G>Desert Reality.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting an event for an international family at Suryagarh means you are operating under intense scrutiny. The aesthetic is heavily curated, the production value is immense, and the attendees have global expectations. The anchor must be the authoritative spine of the event—directing proceedings with immaculate English, unshakeable confidence, and profound respect for the Rajasthani setting.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Conversely, stepping out onto the Sam Sand Dunes strips away all architectural comfort. You are fighting the freezing night wind, rapidly changing acoustics, and thousands of miles of empty desert. This requires physical command. You have to instinctively close the distance between you and the crowd to keep them locked into the celebration.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Jaisalmer fluency—from the hyper-refined interiors of the Marriott to the wild expanse of the Thar—is the mark of an anchor who operates at the absolute peak of the destination industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Luxury NRI Bilingualism", sub: "Impeccable English // Hindi bridging" },
                { label: "Open-Air Acoustic Control", sub: "Defeating wind and vast space" },
                { label: "Suryagarh Protocol", sub: "Ultimate high-net-worth event fluency" },
                { label: "Folk Integration", sub: "Seamlessly blending Manganiyar art" },
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
              {["/gallery-4.webp","/gallery-5.webp","/gallery-1.webp","/gallery-2.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Jaisalmer Thar event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" quality={75} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 9. SCALE ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12  border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group">
              <Image src="/backgrounds/jaisalmer_bg.webp" alt="Jaisalmer Thar Desert Wedding" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" quality={75} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 /60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Jaisalmer · The Golden City</p>
                <p className="text-white text-xs">India's extreme luxury destination — requiring flawless production and absolute anchor authority.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Infinite Dunes.<br /><G>Luxury Forts.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Jaisalmer is about bridging two massive extremes: the highly controlled, opulent environments of properties like Suryagarh, and the entirely uncontrolled, wild expanse of the Thar desert. Delivering unscripted excellence across both within the same 3-day wedding demands total command of the craft.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#B5952F]" /> High-Net-Worth Event Readiness
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Jaisalmer operates on an entirely different budget and expectation layer. The anchor is the interface between the family's massive investment and the guests' actual experience. Pre-event calibration, total situational awareness, and executive-level delivery are the baseline requirements.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Jaisalmer Events.</G></h2>
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

                  {/* ══════════════════════════════════════
          KEYWORD CLUSTER SECTION
          Anchor · Emcee · Host · MC — All Variants
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32  border-y border-[#D4AF37]/15 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[#B5952F] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Anchor · Emcee · Host · MC</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Whatever You Call It —{" "}<G>Jaisalmer's Best.</G>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mt-5 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you search for a wedding anchor, corporate emcee, event host, or MC in Jaisalmer —
                it is the same role, the same skill set, and the same name: Anchor Yash Soni.
              </p>
            </div>
          </Reveal>

          {/* Keyword service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                label: "Wedding Emcee · Wedding Host",
                title: "Best Wedding Anchor in Jaisalmer",
                desc: "Ceremonies, Varmala, Baraat entry, Bidaai — every wedding format hosted with cultural precision. The most reviewed wedding anchor and emcee in Jaisalmer.",
                keywords: ["best wedding anchor jaisalmer", "wedding emcee jaisalmer", "wedding host jaisalmer", "wedding mc jaisalmer"],
              },
              {
                label: "Sangeet Host · Sangeet MC",
                title: "Best Sangeet Emcee in Jaisalmer",
                desc: "High-energy Sangeet nights, unscripted crowd games, 500–1,500 guests. Dance floors packed until 4 AM. Jaisalmer's top-rated Sangeet emcee.",
                keywords: ["best sangeet emcee jaisalmer", "sangeet anchor jaisalmer", "sangeet host jaisalmer"],
              },
              {
                label: "Corporate Host · Corporate MC",
                title: "Best Corporate Emcee in Jaisalmer",
                desc: "Award nights, product launches, annual galas at premium properties. Sharp, bilingual, brand-aligned corporate MC hosting.",
                keywords: ["best corporate emcee jaisalmer", "corporate anchor jaisalmer", "corporate mc jaisalmer", "corporate host jaisalmer"],
              },
              {
                label: "Best MC · Best Host · Best Emcee",
                title: "Best Emcee in Jaisalmer",
                desc: "4.9★ across 50+ verified reviews. 700+ shows. The most reviewed event professional in Jaisalmer — by any name.",
                keywords: ["best emcee in jaisalmer", "best anchor in jaisalmer", "best host in jaisalmer", "best mc jaisalmer"],
              },
              {
                label: "Bilingual Emcee · International Host",
                title: "NRI Wedding Host in Jaisalmer",
                desc: "Polished English for international guests, sophisticated Hindi for the family. Code-switching live and unscripted — making every guest feel at home.",
                keywords: ["nri wedding host jaisalmer", "english speaking anchor jaisalmer", "bilingual emcee jaisalmer"],
              },
              {
                label: "Best Emcee Rajasthan · Best Host Rajasthan",
                title: "Best Anchor in Rajasthan",
                desc: "Available across all of Rajasthan. The top anchor and emcee in Rajasthan.",
                keywords: ["best anchor in rajasthan", "best emcee rajasthan", "best host rajasthan"],
                href: "/anchor-in-rajasthan",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.07}>
                {card.href ? (
                  <Link href={card.href} className="block h-full">
                    <div className="h-full border border-white/8 hover:border-[#D4AF37]/50 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                      <p className="text-[#B5952F] text-[9px] uppercase tracking-widest mb-2 font-bold">{card.label}</p>
                      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#B5952F] transition-colors leading-snug">{card.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light mb-4">{card.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {card.keywords.map((kw, j) => (
                          <span key={j} className="text-[9px] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-full">{kw}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="h-full border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#0a0a0a]">
                    <p className="text-[#B5952F] text-[9px] uppercase tracking-widest mb-2 font-bold">{card.label}</p>
                    <h3 className="text-white font-bold text-lg mb-3 leading-snug">{card.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.keywords.map((kw, j) => (
                        <span key={j} className="text-[9px] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-full">{kw}</span>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* Search term cloud — entity density for GEO */}
          <Reveal>
            <div className="border border-white/5 rounded-2xl p-6 bg-[#0a0a0a]">
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-4">Also Searched As</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Best Anchor in Jaisalmer", "Best Emcee in Jaisalmer", "Best Host in Jaisalmer",
                  "Wedding Anchor Jaisalmer", "Wedding Emcee Jaisalmer", "Wedding Host Jaisalmer",
                  "Corporate Anchor Jaisalmer", "Corporate Emcee Jaisalmer", "Corporate MC Jaisalmer",
                  "Best Anchor in Rajasthan", "Best Emcee in Rajasthan",
                  "Sangeet Anchor Jaisalmer", "Sangeet Emcee Jaisalmer", "Sangeet Host Jaisalmer",
                  "Haldi Anchor Jaisalmer", "Mehendi Host Jaisalmer",
                  "Birthday Anchor Jaisalmer", "Birthday Emcee Jaisalmer",
                  "Master of Ceremonies Jaisalmer", "MC for Wedding Jaisalmer",
                  "NRI Wedding Emcee Jaisalmer", "Bilingual Host Jaisalmer",
                  "Top Anchor Jaisalmer", "Top Emcee Jaisalmer", "Event Host Jaisalmer",
                ].map((term, i) => (
                  <span key={i} className="text-xs text-zinc-500 border border-zinc-800/80 px-3 py-1 rounded-full hover:text-zinc-300 hover:border-zinc-600 transition-colors cursor-default">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

{/* ══ 11. TICKER ══ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["Suryagarh Expert","Jaisalmer Marriott","Sam Sand Dunes","NRI Wedding Specialist","Bilingual English/Hindi","Desert Safari Host","High-Net-Worth Ready","4.9★ Rated","Golden City Anchor"].map((t, i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block" />{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 12. FAQ ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12  border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Jaisalmer <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-jaisalmer-${idx}`} />
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
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Marwar" },
              { icon: MapPin, label: "Bikaner", href: "/anchor-in-bikaner", desc: "Fort City · 4 hrs away" },
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Luxury" },
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
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Your Golden Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Jaisalmer's premium properties book out months in advance, and because of travel logistics, host block-outs in this region happen simultaneously. I do not hold dates without confirmation.
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

      <footer className="py-16 border-t border-white/10  text-center text-zinc-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold mb-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Anchor in Bikaner", href: "/anchor-in-bikaner" },
              { label: "Anchor in Udaipur", href: "/anchor-in-udaipur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#B5952F] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · JAISALMER, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
