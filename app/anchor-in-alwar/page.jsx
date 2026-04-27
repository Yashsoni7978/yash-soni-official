"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, TreePine, UserCheck, Users, Zap } from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const CITY = "Alwar";
const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20an%20event%20near%20Alwar%20or%20Sariska.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/alwar.webp')", backgroundColor: GOLD }}>
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
// DATA — All Alwar-specific
// ─────────────────────────────────────────────
const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "Across India", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const ALWAR_IDENTITY = [
  {
    icon: Globe,
    title: "The NCR Destination Gateway",
    desc: "Alwar and the surrounding circuit — Sariska, Neemrana, Siliserh — sits at a strategic sweet spot between Delhi NCR and Jaipur. Families booking destination events here are choosing a heritage experience within reach of a metropolitan guest list. The anchor must understand both the NCR client expectations and the Rajputana hospitality culture they are creating."
  },
  {
    icon: TreePine,
    title: "The Sariska Wilderness Factor",
    desc: "The Sariska Tiger Reserve creates a unique character for events in the Alwar region. Safari tented resorts, wildlife-adjacent lawns, and jungle-fringe venues demand a host who can generate enormous energy in an environment where blaring horns and DJ drops are simply not options. Crowd command through voice, storytelling, and interactive technique — not volume."
  },
  {
    icon: Crown,
    title: "The Neemrana Heritage Prestige",
    desc: "Neemrana Fort Palace is one of the most photographed heritage event venues in India. International publications, travel magazines, and Instagram luxury accounts regularly feature its stepped battlements and blue-pool terraces. Clients booking Neemrana have chosen it as a personal brand statement. The event anchor must match that level of prestige — in voice, presence, and cultural discernment."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Neemrana Palace Wedding",
    desc: "Grand destination weddings on Neemrana Fort's stepped terraces and central courtyard. Managing the specific acoustic challenges of stone-walled heritage corridors, coordinating with luxury hospitality teams, and ensuring every guest experiences the grandeur of the most Instagrammed fort in India.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Heritage Sangeet Emcee",
    desc: "Sangeet nights at Siliserh Lake Palace or Sariska Palace — where the lakeside or jungle backdrop creates a once-in-a-lifetime stage setting. High-energy crowd management through the full NRI family-plus-local guest mix without losing the luxury and heritage tone of the venue.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Intimate Pre-Wedding Events",
    desc: "Poolside Mehndi ceremonies and open-air Haldi mornings at Neemrana or Sariska Tiger Den. Creating genuine warmth and organic interaction for 80 to 250 destination guests who span multiple generations, geographies, and cultural comfort levels.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "NCR Corporate Offsite Host",
    desc: "Delhi NCR corporate leadership and sales team offsites at Alwar heritage and wildlife resorts. The format shifts from high-energy day sessions to polished evening awards without losing momentum — and always operates within the specific aesthetic of whichever heritage property is hosting.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Neemrana Fort Palace", tag: "Iconic Heritage · 15th cent.", icon: Crown },
  { name: "Siliserh Lake Palace", tag: "RTDC Lake Palace · Romantic", icon: Gem },
  { name: "Sariska Palace Hotel", tag: "Royal Heritage · Forest", icon: Sparkles },
  { name: "Sariska Tiger Den", tag: "Luxury Tented · Wildlife", icon: TreePine },
  { name: "Tijara Fort Palace", tag: "Heritage Boutique · Alwar", icon: Building2 },
  { name: "Hill Fort Kesroli", tag: "Ancient Fort · WelcomHeritage", icon: MapPin },
  { name: "Amanbagh Resort", tag: "Aman Luxury · Aravalli", icon: Star },
  { name: "Alsisar Haveli", tag: "Heritage Haveli · Alwar City", icon: Award },
];

const VS = [
  { problem: "NCR city anchor brings metro energy — completely wrong for Sariska jungle", fix: "Wildlife-adjacent crowd management through voice and interaction, not volume" },
  { problem: "Unfamiliar with Neemrana's specific acoustic zones and terrace layout", fix: "Venue-specific knowledge from repeated events at Neemrana Fort Palace" },
  { problem: "Cannot bridge Delhi NCR corporate guests and Rajasthani heritage families", fix: "Fluent cultural code-switching built over 8+ years of cross-demographic events" },
  { problem: "Generic anchor who treats Alwar like a hotel ballroom event", fix: "Heritage venue specialist — every property's character informs every hosting choice" },
  { problem: "Low energy during the Mehndi morning that ruins the pre-wedding vibe", fix: "Warm, interactive, unscripted crowd warmth specifically calibrated for intimate events" },
  { problem: "Cannot handle remote destination logistics or venue-side coordination", fix: "Pro-active venue liaison and pre-event walkthrough — zero on-stage surprises" },
];

const TESTIMONIALS = [
  {
    name: "Mittal Family",
    quote: "We hosted our daughter's wedding at Neemrana Fort Palace with 320 guests — many of them NRIs from the UK and Singapore. Yash understood the venue completely. He knew which terraces to use for different moments, how to manage the acoustics in the stone corridors, and how to keep the Delhi guests and Rajasthan family equally engaged across three days.",
    event: "Destination Wedding · Neemrana Fort Palace · 320 guests"
  },
  {
    name: "Gupta Family",
    quote: "The Siliserh Lake Palace Sangeet was something out of a film — lakeside stage, full moon, 250 guests. The setting did half the work, but Yash did the other half completely. He created moments that the lake backdrop could not have created alone. The energy at midnight was as high as it was at the opening performance.",
    event: "Sangeet · Siliserh Lake Palace · 250 guests"
  },
  {
    name: "Head of Sales — Delhi-based MNC",
    quote: "We brought 200 regional managers to Sariska Tiger Den for our annual kick-off. The challenge was energising a diverse team after a gruelling conference day. Yash took the stage for the evening gala and completely transformed the energy. The team left Sariska genuinely motivated — not just through the presentations, but through the entire experience he created.",
    event: "Sales Offsite · Sariska Tiger Den · 200 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for Neemrana Fort Palace destination weddings?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Neemrana Fort's heritage terrace weddings. He understands the stepped stone architecture, the acoustic behaviour of the fort's corridors and courtyards, and how to manage a large guest mix of Delhi NCR professionals and Rajasthan heritage families without losing the premium tone of one of India's most iconic wedding destinations."
  },
  {
    q: "Do you anchor events at Siliserh Lake Palace in Alwar?",
    a: "Yes. Siliserh Lake Palace is one of the most romantically scenic venues in the entire NCR-Rajasthan circuit. The lakeside setting creates a unique atmospheric stage — but it also comes with specific sound dynamics, guest gathering challenges, and a heritage property protocol. Working here repeatedly means these factors are pre-managed, not discovered on the day of your event."
  },
  {
    q: "How do you manage events at wildlife-adjacent venues like Sariska?",
    a: "Sariska creates a very different anchor brief. The wilderness setting means the venue's atmosphere is already doing significant work — the challenge is amplifying the human experience without fighting the environment. I use voice-led storytelling, interactive crowd work, and intimate energy techniques rather than relying on DJ-level amplification that would be acoustically inappropriate and disruptive to the wildlife-adjacent setting."
  },
  {
    q: "Are you experienced with NRI families at Alwar and Neemrana destination events?",
    a: "Yes. The Alwar-Neemrana circuit draws a significant number of NRI families specifically because the destination is significantly closer to Delhi IGI than Rajasthan's traditional circuits. Families from the UK, Canada, USA, and UAE who want a heritage experience without a 6-hour drive choose this belt. The bilingual hosting — polished international-quality English and warm, culturally grounded Hindi — is specifically calibrated for this audience."
  },
  {
    q: "How does the Alwar-Neemrana circuit benefit from Yash's Rajasthan experience?",
    a: "The Alwar region sits at the intersection of Rajasthan's heritage culture and Delhi NCR's metropolitan expectations. An anchor who only knows city events cannot read the cultural cues that heritage families bring to a Neemrana wedding. An anchor who only does Jaipur or Jodhpur circuits may not have the professional polish demanded by corporate-heavy Delhi NCR guest lists. The combination — built across 8+ years of cross-demographic event experience — is the specific asset for this region."
  },
  {
    q: "Can you anchor a Mehndi or Haldi event at Neemrana in addition to the main wedding?",
    a: "Yes. Pre-wedding events at Neemrana or Sariska are a specific challenge. Guests have arrived from multiple cities and geographies and are not yet socially warm with each other. The pre-wedding anchor's job is fundamentally different from the wedding or Sangeet anchor — it is about building genuine warmth and breaking social ice across a mixed international-domestic group in a heritage setting. This requires a very different toolkit from the main wedding hosting."
  },
  {
    q: "Do you offer packages for full destination multi-day events in Alwar?",
    a: "Yes. Most Alwar, Neemrana, and Sariska destination bookings are multi-day events covering Mehndi, Haldi, Sangeet, and Wedding ceremonies at minimum. I offer full-event anchoring across all formats, managed with a single pre-event philosophy session that covers tone calibration, guest mixing strategy, and venue-specific adaptation across the entire event arc."
  },
  {
    q: "How early should we book for a Neemrana or Siliserh peak season date?",
    a: "The winter destination wedding season in the Alwar belt — October through February — is heavily demanded, particularly for Neemrana Fort Palace which has limited total capacity. Premium dates at marquee venues book 5–7 months in advance. The anchor calendar mirrors venue demand closely. WhatsApp the moment your venue is confirmed to avoid losing the date."
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
export default function AlwarPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full"><Image src="/backgrounds/alwar_bg.webp" alt="Best Anchor in Alwar — Neemrana Fort and Sariska landscape at twilight" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">
                Best Event Anchor · Alwar · Neemrana · Sariska
              </span>
            </div>

            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span className="block text-[15vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/alwar.webp')" }}>
                ALWAR
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Neemrana Fort Palace weddings</G>, Siliserh Lake Sangeets, and luxury Sariska retreats — the NCR's most prestigious destination circuit.
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation as Rajasthan's most trusted destination event anchor — commanding crowds with absolute zero paper scripts.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                From the dramatic stepped terraces of <strong className="text-[#D4AF37]">Neemrana Fort Palace</strong> to the serene lakeside gardens of Siliserh, and from the tiger-territory tented lounges of Sariska to the hilltop heritage havelis of Alwar — every corner of this circuit has been hosted with the same absolute command.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                The Alwar-Neemrana circuit draws some of India's most discerning event families — Delhi NCR elites, NRI diaspora, and Rajputana heritage clans — all within the same guest list. Navigating this mix without diluting the luxury experience requires a host who understands corporate polish, international warmth, and heritage protocol simultaneously.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 border-b border-[#D4AF37]/50 pb-2 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">
                MY FULL STORY <ArrowRight size={14} />
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              <Reveal className="mt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative">
                  <Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative">
                  <Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Alwar" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. ALWAR IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Alwar is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The NCR Gateway Demands<br />a <G>Premium Standard.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              The Alwar belt — encompassing Neemrana, Sariska, Siliserh, and Tijara — is India's most accessible luxury heritage destination. It offers Rajasthan's grandeur within three hours of Delhi IGI. But accessibility does not mean simplicity. The events here are premium, multi-day, multi-cultural, and logistically complex.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {ALWAR_IDENTITY.map((item, i) => (
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
                Neemrana to Sariska.<br /><G>Every Format Covered.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Heritage Palaces. <G>Known From Inside.</G></h2>
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

      {/* ══ 7. CIRCUIT EXPERTISE ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Alwar Advantage</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Delhi NCR's Luxury<br /><G>Rajasthan Gateway.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              The Alwar circuit occupies a rare strategic position in Indian destination weddings. It delivers the full heritage experience — fort venues, palace hotels, wildlife landscapes — within practical travel distance for the country's largest metropolitan guest base. The events here are consistently premium, consistently large, and consistently demanding.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              The guest lists routinely mix Delhi NCR corporate professionals, Rajput heritage families, NRI relatives from multiple countries, and younger guests who have international entertainment expectations. Holding all four communities in the same energy requires a very specific combination of cultural awareness, bilingual ease, and pure stage craft.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              The Alwar-Neemrana circuit has grown dramatically as a destination wedding market over the past five years, and specific venue expertise — built from repeatedly working each property — is the single most significant asset an anchor can bring to this circuit.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Neemrana Fort Expertise", sub: "Stepped terrace & courtyard mastery" },
                { label: "Sariska Wildlife Protocol", sub: "Voice-led crowd command, no volume" },
                { label: "NCR–Rajasthan Cultural Bridge", sub: "Metro polish meets heritage depth" },
                { label: "Bilingual NRI Fluency", sub: "English · Hindi · International ease" },
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
              {["/gallery-4.webp", "/gallery-2.webp", "/gallery-5.webp", "/gallery-1.webp", "/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Alwar Neemrana event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group">
              <Image src="/backgrounds/alwar_bg.webp" alt="Alwar Neemrana Heritage" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Alwar · Neemrana · Sariska</p>
                <p className="text-white text-xs">Delhi NCR's most prestigious heritage destination circuit — commanded with full authority.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              10,000+ Crowd.<br /><G>Heritage Palaces.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              The Alwar circuit events range from intimate 80-person Mehndi mornings in Neemrana's poolside gardens to 500-person Sangeet nights on the stepped terraces of the fort. The acoustic behaviour, the crowd dynamics, and the venue-specific logistics shift dramatically between each format — and the anchor must shift seamlessly with them.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Multi-Day Event Arc Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Managing tone across a 3-day destination event — from the casual warmth of Day 1 Mehndi to the grandeur of Day 3 Wedding ceremony — without the momentum ever flattening or the crowd ever disengaging.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Elite Alwar Events.</G></h2>
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
              {["Neemrana Fort Palace", "Siliserh Lake Palace", "Sariska Palace", "NCR Destination Expert", "Heritage Anchoring", "Bilingual Hindi/English", "NRI Wedding Specialist", "4.9★ Rated", "Tijara Fort Palace"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Alwar, Neemrana & Sariska <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-alwar-${idx}`} />
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rajasthan & <G>Pan-India.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · Premium" },
              { icon: MapPin, label: "Delhi NCR", href: "/anchor-in-delhi", desc: "Capital · Farmhouses" },
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Heritage" },
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
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Your Neemrana Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Neemrana's peak destination season fills 5–7 months in advance. Sariska dates mirror venue availability which is strictly limited.
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
              { label: "Anchor in Delhi NCR", href: "/anchor-in-delhi" },
              { label: "Anchor in Udaipur", href: "/anchor-in-udaipur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · ALWAR, NEEMRANA & SARISKA, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
