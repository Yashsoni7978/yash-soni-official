"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Bird, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Bharatpur.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/bharatpur.jpg')", backgroundColor: GOLD }}
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

const BHARATPUR_IDENTITY = [
  {
    icon: Landmark,
    title: "The Golden Triangle Gateway",
    desc: "Bharatpur sits at the critical junction of the Agra–Jaipur–Delhi heritage triangle — the most-travelled heritage tourism corridor in India. Wedding families from Delhi who have guests flying into Agra, or Jaipur-based families whose guests are routing through Delhi, consistently find Bharatpur a strategic destination option. Heritage venues here service a metropolitan guest list without requiring long internal travel."
  },
  {
    icon: Bird,
    title: "The Keoladeo Bird Sanctuary Edge",
    desc: "The Keoladeo National Park — a UNESCO World Heritage Site — borders Bharatpur's event circuit. The world's premiere bird sanctuary creates a unique environmental character for adjacent venues: ecotourism-aware guests, early morning nature walks integrated into multi-day event schedules, and a natural quiet that defines the evening atmosphere. Events here must respect this environment while maximising the celebration energy within it."
  },
  {
    icon: Globe,
    title: "The Braj Cultural Heartland",
    desc: "Bharatpur sits at the edge of the Braj region — the geographical heart of Krishna devotion in India. The Braj cultural identity, with its specific musical traditions, its devotional aesthetic, and the deep Vaishnava heritage that permeates the region, creates a hosting context that is entirely different from the Rajputana circuits of western Rajasthan. The anchor who understands Braj culture can create moments that resonate at a truly spiritual depth."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Lohagarh Fort Heritage Wedding",
    desc: "Heritage fort ceremonies at Lohagarh — India's only unconquered fort, famous for repelling British forces. Managing the fort's unique identity, its historical significance to the Bharatpur Jat community, and the specific ceremonial requirements of a fort-heritage wedding in the Agra-Jaipur corridor.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Palace Heritage Sangeet",
    desc: "Sangeet nights at Laxmi Vilas Palace — Bharatpur's iconic heritage hotel — where the colonial-era architecture and formal garden setting create a Sangeet atmosphere unlike any modern hotel venue. Managing the indoor-outdoor acoustic transitions and the formal heritage character of the venue.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Garden Heritage Mehndi",
    desc: "Pre-wedding events in Bharatpur's heritage properties and garden venues — where the Braj cultural landscape creates a distinctively warm, devotional backdrop for morning pre-wedding celebrations that infuse genuine regional character into the event.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Heritage Corridor Corporate",
    desc: "Corporate retreats and team events at Bharatpur's heritage properties for Delhi NCR and Agra-based organisations. The Golden Triangle positioning makes Bharatpur a genuinely accessible corporate destination for companies with teams across the three cities.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Lohagarh Fort", tag: "Unconquered Fort · Heritage", icon: Crown },
  { name: "Laxmi Vilas Palace", tag: "Heritage Hotel · Colonial", icon: Gem },
  { name: "Hotel Sunbird", tag: "Heritage · Birder's Paradise", icon: Bird },
  { name: "The Bagh", tag: "Heritage Resort · Gardens", icon: Sparkles },
  { name: "Deeg Palace", tag: "Mughal-Rajput · Heritage", icon: Building2 },
  { name: "Jungle Lodge Keoladeo", tag: "Eco-Heritage · Sanctuary", icon: MapPin },
  { name: "Brij Bhoomi Hotel", tag: "Heritage · Braj Culture", icon: Star },
  { name: "Bharatpur Forest Lodge", tag: "Forest Heritage · Eco", icon: Globe },
];

const VS = [
  { problem: "No knowledge of Bharatpur's Jat community heritage and Lohagarh Fort's specific identity", fix: "Bharatpur-specific cultural fluency — Jat heritage, unconquered fort pride, correct ceremonial vocabulary" },
  { problem: "Cannot bridge Delhi NCR corporate mix and Braj heritage family in the same room", fix: "Golden Triangle cultural bilingualism — metro polish and regional Braj warmth simultaneously" },
  { problem: "Treats Laxmi Vilas Palace like a standard hotel banquet without heritage sensitivity", fix: "Colonial heritage property register — appropriate formality and historical awareness embedded in hosting" },
  { problem: "No awareness of the Keoladeo sanctuary environment and its event-specific implications", fix: "Wildlife sanctuary acoustic and environmental discipline for sanctuary-edge events" },
  { problem: "Cannot create genuine Braj devotional cultural resonance for heritage family guests", fix: "Braj cultural references woven warmly into event narrative without lecture-mode delivery" },
  { problem: "Bilingual gaps — loses the Delhi NCR professional guests or the heritage Bharatpur families", fix: "Full bilingual code-switching between polished English and Braj-register Hindi" },
];

const TESTIMONIALS = [
  {
    name: "Singhania Family",
    quote: "We chose Lohagarh Fort specifically because of what it represents — the fort that was never defeated. For our family, that identity matters. We needed an anchor who understood that this was not just a beautiful venue, but a statement about our heritage. Yash got it completely. His references to Lohagarh's history were specific, and the family felt genuinely honoured throughout.",
    event: "Heritage Wedding · Lohagarh Fort · 400 guests"
  },
  {
    name: "Agarwal Family",
    quote: "The Laxmi Vilas Sangeet was extraordinary — formal heritage gardens under lights, 300 guests from Delhi, Agra, and Jaipur, and a programme that ran from 7pm to midnight without dropping energy once. Yash managed the formal colonial property setting and the high-energy Sangeet crowd simultaneously with complete authority.",
    event: "Sangeet · Laxmi Vilas Palace · 300 guests"
  },
  {
    name: "Head of People — Delhi NCR Tech Company",
    quote: "We brought the entire leadership team to Bharatpur for our annual offsite — partly for the heritage experience, partly because it was equidistant for our Agra and Delhi teams. Yash anchored our gala evening at The Bagh with brand-appropriate professionalism and genuine warmth. Exactly the tone we needed for a senior leadership event in a heritage setting.",
    event: "Corporate Retreat · The Bagh · 120 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for heritage weddings in Bharatpur?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Bharatpur's heritage event circuit — Lohagarh Fort, Laxmi Vilas Palace, The Bagh, and Deeg Palace. He brings Bharatpur Jat community cultural fluency, Golden Triangle guest mix management experience, and bilingual hosting that bridges Delhi NCR metropolitan sophistication with the region's genuine Braj heritage identity."
  },
  {
    q: "Do you understand Lohagarh Fort's specific heritage identity and the Bharatpur Jat community?",
    a: "Yes. Lohagarh Fort — the only fort in India that was never captured by the British — carries a very specific identity within the Bharatpur Jat community. The families who host events within the fort are drawing on that identity deliberately. The anchor who understands this — who knows why Lohagarh matters beyond its generic heritage value — creates a connection with the family that generic hosting simply cannot achieve."
  },
  {
    q: "How do you manage the Golden Triangle guest mix at Bharatpur events?",
    a: "Bharatpur's strategic position at the intersection of Agra, Jaipur, and Delhi means that events here routinely assemble guest lists from three very different urban cultures simultaneously. Delhi NCR guests bring metropolitan professional expectations. Jaipur guests may bring heritage community expectations. Agra guests bring a different regional identity. The anchor must hold all three within a cohesive event experience — and do so while the heritage venue asserts its own strong identity."
  },
  {
    q: "Have you hosted events at Laxmi Vilas Palace in Bharatpur?",
    a: "Yes. Laxmi Vilas Palace is Bharatpur's flagship heritage hotel — a colonial-era property with formal garden ballrooms and open terrace event spaces. The property carries a very specific formal register that shapes what hosting is appropriate. Understanding the balance between the palace's heritage gravity and the warmth of an Indian family celebration is a skill developed through repeated work at heritage hotel properties across Rajasthan."
  },
  {
    q: "Can you manage events near or alongside the Keoladeo National Park?",
    a: "Yes. The Keoladeo UNESCO World Heritage bird sanctuary creates a unique atmosphere for adjacent events — particularly evening Sangeet events where the ambient sounds of the sanctuary form part of the natural acoustic. The hosting at sanctuary-edge venues must be environmentally aware: sound management discipline, respect for the sanctuary's protected status, and the ability to incorporate the extraordinary natural environment as a positive element of the event experience."
  },
  {
    q: "Is Bharatpur accessible for Delhi-based destination wedding families?",
    a: "Yes. Bharatpur is one of the closest true heritage destination options to Delhi — approximately 180km on the Yamuna Expressway and Jaipur highway, making it a 2.5 to 3-hour comfortable drive. For Delhi families whose guest mix is split between Delhi and Agra — 55km from Bharatpur — it is the most strategically accessible heritage destination in the entire corridor."
  },
  {
    q: "Do you have experience with Braj cultural references at Bharatpur heritage events?",
    a: "Yes. Bharatpur sits at the edge of the Braj region — the cultural and devotional heartland of Krishna worship in India. Events in this region carry a warm Vaishnava cultural undertone — specific musical traditions, devotional aesthetic references, and a spiritual warmth that permeates the community culture. Incorporating these references correctly and warmly — not academically — creates genuine emotional resonance with heritage Bharatpur families at a depth that generic hosting cannot touch."
  },
  {
    q: "How far in advance should we book for a Bharatpur destination wedding?",
    a: "Bharatpur's heritage properties — particularly Lohagarh Fort and Laxmi Vilas Palace — have limited event space capacity and book 4–6 months in advance for the October-February heritage wedding season. The anchor calendar mirrors venue availability. WhatsApp the moment your venue and date are confirmed — I operate strictly first-to-confirm."
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

export default function BharatpurPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/vintage-car-couple-shoot.webp"
            alt="Best Anchor in Bharatpur — Lohagarh Fort at twilight"
            className="w-full h-full object-cover slow-zoom"
          />
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Bharatpur · The Golden Triangle Hub</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[12vw] md:text-[8.5vw] lg:text-[6.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/bharatpur.jpg')" }}
              >
                BHARATPUR
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Lohagarh Fort heritage weddings</G>, Laxmi Vilas Palace Sangeets, and Braj cultural celebrations at India's Golden Triangle gateway.
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation as Rajasthan's most versatile destination event anchor — simultaneously commanding heritage fort ceremonies, palace Sangeets, and corporate retreats with equal authority.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Bharatpur occupies a unique strategic position — the <strong className="text-[#D4AF37]">Lohagarh Fort</strong>, the only unconquered fort in India, anchors a heritage circuit that connects seamlessly to Agra, Jaipur, and Delhi NCR. The guest lists at Bharatpur events are among the most diverse in Rajasthan's destination circuit.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                The Braj cultural heartland, the Keoladeo bird sanctuary, and the Jat community's fierce pride in Lohagarh's unconquered history create a hosting environment that demands genuine cultural depth — not a generic Rajasthan event template transplanted to the Golden Triangle gateway.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">
                MY FULL STORY <ArrowRight size={14} />
              </Link>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                  <img src="/intro-portrait-top.webp" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="Yash Soni Anchor" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                  <img src="/intro-portrait-bottom.webp" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="Anchor Yash in Bharatpur" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. BHARATPUR IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Bharatpur is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              India's Golden Triangle<br />Demands a <G>Gateway Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Bharatpur commands India's most-travelled heritage tourism corridor. Its fort has never been conquered. Its bird sanctuary is a UNESCO World Heritage Site. Its Braj cultural identity reaches back to the era of Krishna's mythology. An event here is simultaneously positioned at the crossroads of Indian heritage culture — and the anchor who understands none of this creates a jarring disconnect with every single family that chose this destination for a reason.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {BHARATPUR_IDENTITY.map((item, i) => (
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
                Lohagarh Fort to<br /><G>Palace Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Heritage Properties. <G>Known From Inside.</G></h2>
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

      {/* ══ 7. GATEWAY PROTOCOL ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Bharatpur Advantage</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Agra. Delhi. Jaipur.<br /><G>One Fort City.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The strategic value of Bharatpur for Delhi-based families cannot be overstated. At 2.5 hours from Delhi's Aerocity and 55km from Agra's Taj Mahal, it is the only heritage destination in Rajasthan that is simultaneously accessible to all six directions of India's elite destination wedding guest base. Families with international guests flying into Delhi and Indian relatives from Agra face a genuinely impossible geography — unless they choose Bharatpur.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Lohagarh Fort adds a heritage narrative that is genuinely unique — it is the only fort in India that withstood the full might of British colonial force and remained unconquered. For families with strong national identity pride — particularly those with military, civil service, or heritage community backgrounds — this narrative resonates at a level that no manufactured luxury venue can replicate.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              The Braj cultural heartland, the UNESCO bird sanctuary, and the unconquered fort create a hosting tapestry of rare depth. An anchor who can weave all three into an event narrative creates experiences that guests carry for decades.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Lohagarh Heritage Fluency", sub: "Unconquered fort — Jat community pride" },
                { label: "Braj Cultural Reference", sub: "Krishna devotion · Vaishnava warmth" },
                { label: "Golden Triangle Logistics", sub: "Delhi · Agra · Jaipur guest mix" },
                { label: "Bilingual Metro Register", sub: "NCR polish · Braj warmth" },
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
              {["/gallery-2.webp","/gallery-5.webp","/gallery-1.webp","/gallery-4.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">
                  <img
                    src={src}
                    alt={`Anchor Yash Soni Bharatpur event ${i + 1}`}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
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
              <img
                src="/vintage-car-couple-shoot.webp"
                alt="Bharatpur Lohagarh Fort Heritage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Bharatpur · The Unconquered Fort City</p>
                <p className="text-white text-xs">India's most strategically positioned heritage destination — Lohagarh, Keoladeo, and Braj in one city.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              10,000+ Crowd.<br /><G>Unconquered Fort.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Bharatpur events range from 80-person intimate ceremonies in Laxmi Vilas's formal gardens to 500-person full wedding receptions within Lohagarh Fort's historic walls. The guest mix diversity — spanning Delhi NCR professionals, Agra heritage families, and international guests — requires an anchor who can read and serve every community simultaneously without ever breaking the event's cohesive energy arc.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Multi-City Guest Logistics Awareness
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Bharatpur destination events draw guests from Delhi, Agra, Jaipur, and international origin simultaneously. The hosting must be culturally attuned to the diversity of this particular Golden Triangle mix — never defaulting to a single regional register that excludes any community in the room.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Bharatpur Heritage Events.</G></h2>
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
              {["Lohagarh Fort","Laxmi Vilas Palace","Keoladeo UNESCO Park","Golden Triangle Gateway","Braj Heritage Expert","Bilingual English/Hindi","Delhi NCR Accessible","4.9★ Rated","Unconquered Fort Pride"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Bharatpur <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-bharatpur-${idx}`} />
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Golden Triangle & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · 2 hrs" },
              { icon: MapPin, label: "Delhi NCR", href: "/anchor-in-delhi", desc: "Capital · 3 hrs" },
              { icon: MapPin, label: "Alwar", href: "/anchor-in-alwar", desc: "Neemrana · Sariska" },
              { icon: MapPin, label: "Ranthambore", href: "/anchor-in-ranthambore", desc: "Tiger Reserve · Jungle" },
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
              Your Fort Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Lohagarh Fort's event calendar and Laxmi Vilas Palace's private event spaces are strictly limited. Anchor dates mirror venue availability exactly.
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
              { label: "Anchor in Alwar", href: "/anchor-in-alwar" },
              { label: "Anchor in Ranthambore", href: "/anchor-in-ranthambore" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · BHARATPUR, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}