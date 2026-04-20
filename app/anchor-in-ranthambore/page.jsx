"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Tent, TreePine, Users } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20jungle%20luxury%20wedding%20in%20Ranthambore.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/ranthambore.png')", backgroundColor: GOLD }}>
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

const RANTHAMBORE_IDENTITY = [
  {
    icon: TreePine,
    title: "The Jungle Luxury Paradox",
    desc: "Ranthambore is the world's most sought-after tiger safari destination — and increasingly, one of India's most exclusive destination wedding circuits. The paradox of a black-tie Sangeet in a tented camp 400 metres from tiger territory requires an anchor who understands both luxury aesthetics and wildlife-adjacent environmental protocols. Getting either wrong is immediately visible to a discerning destination family."
  },
  {
    icon: Globe,
    title: "The International Wildlife Tourism Crossover",
    desc: "Ranthambore draws significant international wildlife tourists and ecotourism enthusiasts, many of whom form part of destination wedding guest lists at Sher Bagh and Khem Villas. The event hosting register must simultaneously satisfy the conservation ethos of guests who are conservation-aware and the luxury celebration expectations of a wedding family. A host who ignores one reality will create friction in the room."
  },
  {
    icon: Tent,
    title: "The Tented Camp Acoustic Challenge",
    desc: "Tented luxury camps — Sher Bagh, Khem Villas, The Oberoi's Vanyavilas — have no acoustic walls. The canvas ceiling, the open jungle air, and the strict sound ordinances in tiger reserve buffer zones create a hosting environment unlike any ballroom or fort courtyard. Volume is not the solution. Voice command, spatial crowd technique, and storytelling-led engagement are the only tools that work."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Jungle Luxury Wedding Anchor",
    desc: "Destination wedding ceremonies in the lawns and open-air event spaces of Ranthambore's luxury tented camps. Managing the ceremony energy in a wildlife-adjacent setting — where sound ordinances limit amplification and the evening jungle atmosphere does half the stage setting — requires a very specific hosting approach.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Tented Camp Sangeet Emcee",
    desc: "Sangeet nights at Sher Bagh and Khem Villas — candlelit tent stages, the Aravalli tree canopy overhead, the quiet of the tiger reserve behind. High energy through voice + crowd interaction rather than pure volume. Managing the energy arc of a four-hour Sangeet night in this extraordinary environment from opening act to final performance.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Dawn Pre-Wedding Events",
    desc: "Sunrise Mehndi ceremonies and Haldi mornings on the banks of the Chambal or in safari camp lawns. Creating warmth and genuine social connection among guests from across India and the world — many meeting for the first time in a shared jungle environment that itself becomes part of the event.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Ecotourism & Corporate Offsite",
    desc: "Conservation-focused corporate offsites and leadership retreats at Ranthambore — where the wildlife environment is the deliberate choice of the organiser. The anchor must reflect the environmental values of the setting while delivering sharp, bilingual corporate hosting across day sessions and evening galas.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Sher Bagh", tag: "Luxury Tented · Tiger Reserve", icon: TreePine },
  { name: "Khem Villas", tag: "Eco-Luxury · Reserve Fringe", icon: Gem },
  { name: "The Oberoi Vanyavilas", tag: "Ultra-Luxury · Tented Villa", icon: Crown },
  { name: "Nahargarh Fort", tag: "Heritage Fort · Fort View", icon: Sparkles },
  { name: "SUJÁN Sher Bagh", tag: "Conservation Luxury · SUJÁN", icon: Star },
  { name: "Tiger Den Resort", tag: "Boutique · Safari Gate", icon: MapPin },
  { name: "Sawai Madhopur Lodge", tag: "TAJ · Heritage · Jungle", icon: Building2 },
  { name: "The Ranthambore Bagh", tag: "Boutique Camp · Reserve", icon: Tent },
];

const VS = [
  { problem: "Cannot manage wildlife-adjacent acoustic restrictions — uses DJs and high amplification", fix: "Voice-led crowd command built for tiger reserve sound ordinance compliance" },
  { problem: "Brings city event energy to a conservation-conscious destination", fix: "Jungle luxury register — warm, intimate, environmentally attuned" },
  { problem: "No experience with tented camp venue logistics and canvas acoustic behaviour", fix: "Repeated Ranthambore tented camp events mean venue quirks are pre-managed" },
  { problem: "Treats the Sangeet like a hotel ballroom event — wrong energy, wrong tech", fix: "Open-air tented performance that uses storytelling and crowd work, not volume" },
  { problem: "International guests feel disconnected from a hosting style that ignores their context", fix: "Bilingual English/Hindi that respects both the jungle setting and international guest diversity" },
  { problem: "Cannot handle the multi-format arc of a wildlife destination multi-day event", fix: "Pre-event calibration covers every format — Mehndi warmth to Sangeet electric to ceremony gravitas" },
];

const TESTIMONIALS = [
  {
    name: "Mehta Family",
    quote: "We specifically chose Ranthambore because we wanted something completely different — a wedding that felt like it belonged to nature. The hosting had to match that intention. Yash understood without being told. He created an evening at Sher Bagh that felt genuinely wild and genuine luxury simultaneously. No one wanted to leave.",
    event: "Destination Wedding · Sher Bagh · 200 guests"
  },
  {
    name: "Kapoor Family",
    quote: "The Sangeet at Khem Villas was the most beautiful evening of our lives. Candlelit tent, jungle sounds, 180 guests from four countries. Yash managed the energy for four hours with no DJ, no loud speakers — just his voice and his absolute command of the crowd. It was unlike anything we have experienced at any other wedding.",
    event: "Sangeet · Khem Villas · 180 guests"
  },
  {
    name: "Conservation NGO Director",
    quote: "We hosted an international conservation leadership summit at The Oberoi Vanyavilas. Our guests included wildlife directors from fourteen countries. Yash managed the event with genuine intellectual respect for the subject, a warm bilingual fluency for the international delegates, and a hosting energy that kept a long two-day summit genuinely alive throughout.",
    event: "International Summit · Oberoi Vanyavilas · 120 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for wildlife destination weddings in Ranthambore?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Ranthambore's jungle luxury wedding circuit — Sher Bagh, Khem Villas, The Oberoi Vanyavilas, Nahargarh Fort, and the Sawai Madhopur Lodge. He brings wildlife-adjacent acoustic discipline, the specific hosting register of conservation-luxury destinations, and bilingual English/Hindi fluency for international guest mixes."
  },
  {
    q: "How do you manage sound and amplification within Ranthambore Tiger Reserve's buffer zone?",
    a: "Tiger reserve buffer zones have strict sound ordinances managed by forest department authorities. High-amplification DJs and PA systems that would be standard at a city hotel are simply not permissible — or appropriate — in this environment. The technique required is fundamentally different: voice-led crowd command, storytelling-driven engagement, and spatial crowd-work that creates energy without acoustic disruption to the wildlife habitat."
  },
  {
    q: "Have you hosted events at Sher Bagh and Khem Villas in Ranthambore?",
    a: "Yes. Sher Bagh and Khem Villas are the two most frequently booked luxury tented properties in Ranthambore's destination wedding circuit. Both have specific acoustic characteristics driven by their canvas construction, their open-air dinner integration, and their position within the reserve buffer. Having worked both repeatedly means the venue-specific hosting approach is pre-calibrated before the event begins."
  },
  {
    q: "How do you anchor an event at The Oberoi Vanyavilas?",
    a: "The Oberoi Vanyavilas is the ultra-luxury reference point for Ranthambore's destination circuit — and its guests are among the most discerning in India's hospitality segment. The hosting register at Vanyavilas must be warm, sophisticated, and genuinely attuned to both the conservation ethos of the property and the extraordinary luxury standards of the guests. It is a very specific tone — one that comes from working luxury destinations repeatedly, not from working luxury hotels generically."
  },
  {
    q: "Can you manage international guests at Ranthambore destination weddings?",
    a: "Yes. Ranthambore draws significant international guest mix for destination weddings — wildlife enthusiasts from Europe, corporate families from the UK and USA, and diaspora relatives from multiple countries who have chosen Ranthambore specifically for its unique character. The bilingual hosting here must bridge conservation-aware international guests, Indian urban families, and rural Rajasthan relatives within the same evening — all of whom have completely different entertainment expectations and cultural frameworks."
  },
  {
    q: "What is the best time of year for destination weddings in Ranthambore?",
    a: "Ranthambore Tiger Reserve is open to the public — and therefore available for tented camp events — between October and June. The peak wildlife season (October to April) is also the peak destination wedding season, when tiger sighting probability is highest and the temperature is manageable. The luxury tented properties book 5–7 months in advance for the November to February wedding season. Anchor availability mirrors venue availability — confirm simultaneously."
  },
  {
    q: "Do you anchor corporate retreats and conservation summits in Ranthambore?",
    a: "Yes. Ranthambore is increasingly popular for corporate leadership retreats specifically because of the environmental symbolism it carries — companies use the tiger reserve as a statement about their conservation values. The hosting for these events must reflect that environmental intelligence. A conservation corporation does not want an anchor whose environmental awareness is purely performative. The subject knowledge, the appropriate references, and the tone of engagement all matter."
  },
  {
    q: "How do you handle the multi-day energy arc of a Ranthambore destination wedding?",
    a: "Ranthambore destination weddings are typically 2–3 day affairs with early morning safari departures integrated into the event schedule. The energy arc is completely different from a city hotel event — mornings are shared wildlife experiences that naturally bond the crowd, afternoons are quieter recovery periods, and evenings are the premium event windows. The anchor must understand this rhythm and calibrate the hosting energy accordingly, rather than treating every segment with the same flat-line Sangeet energy."
  },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function RanthamborePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div class="relative w-full h-full"><Image src="/backgrounds/ranthambore_bg.webp" alt="Best Anchor in Ranthambore — Jungle luxury tented camp at dusk" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Ranthambore · The Tiger Reserve</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[10vw] md:text-[7.5vw] lg:text-[6rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/ranthambore.png')" }}>
                RANTHAMBORE
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>jungle luxury destination weddings</G>, tented camp Sangeets, and ecotourism corporate retreats in India's most exclusive tiger reserve circuit.
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation for commanding the most challenging and distinctive event environments in India — including the completely unique jungle luxury circuit of Ranthambore.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                From the candlelit tent lawns of <strong className="text-[#D4AF37]">Sher Bagh</strong> to the ultra-luxury tented villas of The Oberoi Vanyavilas, and from intimate 80-person Mehndi mornings to 250-person Sangeet nights under the Aravalli tree canopy — every Ranthambore event requires a fundamentally different hosting approach from the city or palace circuits.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                The hosting here must be simultaneously warm, sophisticated, environmentally intelligent, and bilingual across a guest list that routinely spans Indian business families, NRI diaspora, and international wildlife enthusiasts. No paper. No generic template. No city hotel approach transplanted into a tiger reserve.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">MY FULL STORY <ArrowRight size={14} /></Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash Ranthambore" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. RANTHAMBORE IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Ranthambore is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              India's Tiger Reserve Demands<br />a <G>Jungle Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Ranthambore is the only event destination in India where the environment is not a backdrop but an active participant in the event. The tiger reserve, the jungle sounds, the conservation protocol, and the extraordinary natural setting are as central to the guest experience as the event itself. The anchor who ignores this is not just aesthetically wrong — they are fundamentally misunderstanding the place they are hosting in.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {RANTHAMBORE_IDENTITY.map((item, i) => (
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
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Jungle Ceremonies to <br/><G>Tented Sangeets.</G></h2>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Jungle Luxury Camps. <G>Known From Inside.</G></h2>
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

      {/* ══ 7. JUNGLE LUXURY PROTOCOL ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Ranthambore Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">Wild Luxury.<br /><G>Zero Compromise.</G></h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Ranthambore's destination circuit caters to a very specific type of event client — one who is environmentally aware, aesthetically sophisticated, and deliberately choosing the wild over the conventional. These are guests who have read about the decline of tiger populations, who have booked Khem Villas specifically because of its conservation credentials, and who are hosting an event that is a reflection of their personal values.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              The anchor who walks into Sher Bagh and treats it like a Jaipur hotel ballroom has immediately communicated that they do not understand where they are or who they are serving. The resulting disconnect is felt immediately, most acutely by the most important guests in the room — the ones who chose this destination because of exactly the values the wrong anchor is ignoring.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Jungle luxury hosting requires voice-led command, environmental sensitivity, genuine international bilingual ease, and event-arc management calibrated to the safari rhythm of a wildlife destination. All of these are built — not improvised.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Sound Ordinance Compliance", sub: "Tiger reserve buffer zone protocol" },
                { label: "Tented Acoustic Mastery", sub: "Canvas + open-air crowd command" },
                { label: "Conservation-Aware Register", sub: "Wildlife ethos reflected in hosting" },
                { label: "International Guest Fluency", sub: "English · Hindi · Environmental ease" },
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

      {/* ══ 8. GALLERY ══ */}
      <section className="py-12 overflow-hidden border-b border-white/5 mask-fade">
        <div className="flex marquee whitespace-nowrap gap-5">
          {[...Array(3)].map((_, r) => (
            <div key={r} className="flex gap-5 shrink-0">
              {["/gallery-5.webp","/gallery-1.webp","/gallery-4.webp","/gallery-3.webp","/gallery-2.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Ranthambore jungle event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group"><Image src="/backgrounds/ranthambore_bg.webp" alt="Ranthambore Tiger Reserve Jungle Luxury" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Ranthambore · India's Premier Tiger Reserve</p>
                <p className="text-white text-xs">India's most exclusive jungle luxury wedding destination — hosted with full environmental awareness and premium guest command.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">The Jungle Stage.<br /><G>No Walls.</G><br />No Scripts.</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              A tented camp Sangeet in Ranthambore has no acoustic walls, no sound system infrastructure standard to city venues, and no crowd architecture designed to focus attention. The entire crowd focus is created by the anchor's voice, body language, crowd interaction technique, and storytelling — not by the venue's physical structure.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Safari Rhythm Energy Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Ranthambore guests wake at 5am for tiger safaris. The event hosting must account for this rhythm — building energy through the evening rather than burning it out early, and creating intimate warmth in the early segments that grows into full celebration by the time the tired safari guests have warmed into the night.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Ranthambore Jungle Events.</G></h2>
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
              {["Sher Bagh","Khem Villas","The Oberoi Vanyavilas","Nahargarh Fort","Tiger Reserve Anchor","Jungle Luxury Expert","Bilingual English/Hindi","4.9★ Rated","Conservation-Aware Hosting"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Ranthambore <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-ranthambore-${idx}`} />
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rajasthan & <G>Destinations.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · 2 hrs away" },
              { icon: MapPin, label: "Alwar", href: "/anchor-in-alwar", desc: "Sariska · Neemrana" },
              { icon: MapPin, label: "Delhi NCR", href: "/anchor-in-delhi", desc: "Capital · Farmhouses" },
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
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Your Jungle Date<br /><G>Won't Wait.</G></h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">Ranthambore's luxury tented camps have strictly limited capacity and dates fill 5–7 months in advance. The anchor calendar mirrors venue availability exactly.</p>
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
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Anchor in Alwar", href: "/anchor-in-alwar" },
              { label: "Anchor in Delhi", href: "/anchor-in-delhi" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (<Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">© {new Date().getFullYear()} ANCHOR YASH SONI · RANTHAMBORE, SAWAI MADHOPUR, RAJASTHAN</p>
        </div>
      </footer>
    </main>
  );
}