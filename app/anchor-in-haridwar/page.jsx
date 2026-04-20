"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, Crown, Flame, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users, Waves } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Haridwar.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD }}
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

const HARIDWAR_IDENTITY = [
  {
    icon: Flame,
    title: "Ganga Aarti Scale & Silence",
    desc: "Events in Haridwar, especially at properties like Pilibhit House, often feature private Ganga Aartis or incredibly intimate spiritual rituals. The acoustic challenge here is immense: the river is loud, but microphones are deeply inappropriate. Yash executes 'Acoustic Reverence'—utilizing pure, unamplified vocal projection and intense physical stage anchoring to guide the NRI or corporate audience through the spiritual timeline without ever breaking the sanctity of the ghats."
  },
  {
    icon: Building2,
    title: "The IHCL Heritage Protocol",
    desc: "Because Haridwar is a profound spiritual center, the luxury venues here operate with extreme operational rigidity. Properties like Pilibhit House manage some of the highest-net-worth spiritual retreats in India. A standard anchor fails here. Yash operates as a highly articulate Executive Moderator—utilizing pristine English to translate deep Sanskrit rituals for international families, ensuring the spiritual weight feels globally accessible and highly refined."
  },
  {
    icon: Music2,
    title: "Satvik Energy Momentum",
    desc: "Almost all high-end destinations in Haridwar run entirely Satvik limits (zero alcohol/strict property rules). Generating a massive, high-energy Sangeet under those conditions is the ultimate test of a host. Yash dives entirely unscripted into the crowd, utilizing raw bilingual crowd psychology to explode the dance floor entirely without the crutch of alcohol."
  },
];

const SERVICES = [
  {
    icon: Flame,
    title: "Private Ghat Routines",
    desc: "Executing sprawling, visually overwhelming Ganga Aarti and spiritual integration sequences using unscripted English/Hindi bridging for NRI VIPs.",
    tag: "Exclusive"
  },
  {
    icon: Crown,
    title: "Pilibhit House Galas",
    desc: "Anchoring heavily restricted, prestigious IHCL luxury ceremonies, utilizing formal executive moderation to match the historical and spiritual weight.",
    tag: "Heritage"
  },
  {
    icon: Waves,
    title: "Satvik Sangeet Energy",
    desc: "Defeating massive 'zero-alcohol' limits by generating intense, fast-paced organic party momentum entirely natively.",
    tag: "Energy"
  },
  {
    icon: Briefcase,
    title: "Executive Spiritual Offsites",
    desc: "Unscripted, highly sophisticated hosting for corporate leadership symposiums holding alignment retreats along the Ganges corridor.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Pilibhit House, IHCL", tag: "The Ganges Apex", icon: Crown },
  { name: "Amatra By The Ganges", tag: "Contemporary Luxury", icon: Building2 },
  { name: "Ganga Lahari", tag: "Heritage Intimacy", icon: Gem },
  { name: "Amrit Bhawan", tag: "Boutique Scale", icon: Briefcase },
  { name: "Aalia Resort", tag: "Riverside Estates", icon: Waves },
  { name: "Godwin Hotel", tag: "Classic Grandeur", icon: Star },
  { name: "Radisson Blu Haridwar", tag: "Executive Central", icon: MapPin },
  { name: "The Haveli Hari Ganga", tag: "Spiritual Exclusivity", icon: Heart },
];

const VS = [
  { problem: "Using loud, 'cheap MC' club humor that instantly destroys the sanctity of a spiritual Ganges event", fix: "Intimate, highly conversational executive-grade delivery matching absolute reverence and VIP pedigree" },
  { problem: "Failing entirely to explain the spiritual weight of ceremonies to international/NRI guests in English", fix: "Executing flawless bilingual (English/Sanskrit) bridging to translate deep heritage directly to a global audience" },
  { problem: "The anchor freezing when the entire multi-day itinerary is completely Satvik (no alcohol)", fix: "Generating pure organic 'unplugged' hype using rapid pacing to heat up the crowd without relying on a bar" },
  { problem: "Reading rigidly from paper notes during an incredibly exposed outdoor Aarti against the river", fix: "100% unscripted flow—maintaining absolute eye contact and stage control despite severe acoustic distractions" },
  { problem: "Being unable to transition from deep, silent spiritual retreats into a massive family dancing format", fix: "Executing an intense psychological shift that drags the corporate VIPs seamlessly into celebration mode" },
  { problem: "The anchor's voice dissipating across the sprawling ghats or massive outdoor luxury lawms", fix: "Mastery of timeline sequencing and vocal centralizing to pull the entire party tightly towards the event core" },
];

const TESTIMONIALS = [
  {
    name: "NRI Destination Wedding — London",
    quote: "Hosting at Pilibhit House required absolute reverence but also the ability to run a highly sophisticated cross-cultural timeline. Yash was flawless. His English narration of our private Ganga Aarti brought the entire international guest list to tears. Astounding stage command.",
    event: "VIP Spiritual Wedding · Pilibhit House (IHCL)"
  },
  {
    name: "Corporate Heritage Initiative",
    quote: "We held an executive spiritual retreat on the ghats for our board of directors. Yash moderated the multi-day event with incredible grace. He possesses an authentic understanding of spiritual logistics combined with raw corporate polish.",
    event: "Executive Alignment Summit · The Ganges Ghats"
  },
  {
    name: "Bansal Family — Delhi NCR",
    quote: "Our entire destination wedding in Haridwar was Satvik. No alcohol, strict timings. We were terrified the Sangeet would be dead. Yash dropped into the crowd natively and exploded the room purely on energy and unscripted crowd-work. Absolutely electric.",
    event: "Destination Sangeet · Amatra By The Ganges"
  },
];

const FAQS = [
  {
    q: "How do you handle Sangeets and high-energy functions in Haridwar where alcohol is strictly prohibited?",
    a: "This is the true test of a destination anchor. You cannot rely on the bar to loosen the crowd up. I utilize 'Psychological Combat'—speeding up the entire timeline aggressively, plunging into the audience physically, and detonating a massive dancing session through pure unscripted, highly personalized interaction. I manufacture the hype out of thin air."
  },
  {
    q: "Our guest list is half Delhi NCR executives and half international (NRI) family members. Can you bridge the cultural gap?",
    a: "Completely. This is my exact specialization. A VIP spiritual destination wedding does not need a loud 'hype man'; it requires a Cultural Bridge. I host with pristine, unscripted English that translates the incredible depth of the rituals for the NRI guests, while seamlessly flipping into high-end Hindi to respect the traditional elders."
  },
  {
    q: "Properties by the Ganges (like Pilibhit House) have extremely strict silence and acoustic curfews. How do you adapt?",
    a: "I execute 'Acoustic Reverence'. I never fight the property rules. If the timeline hits a strict decibel curfew by the river, I drop the microphone. I pull the entire audience physically tighter to the stage and transition into an incredibly intimate, unplugged hosting style that preserves the exclusivity without ruining the momentum."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day spiritual itineraries?",
    a: "Never. Reading from a clipboard instantly destroys the authenticity of a spiritual retreat. It breaks eye contact, and the high-net-worth audience realizes you are a spectator, not a leader. I memorize the complex family lineages and the entire timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What happens if massive crowds near the ghats or sudden weather forces us to abruptly change our outdoor ceremony timing?",
    a: "Spiritual corridors are deeply unpredictable. If extreme crowds or weather forces us to rip down an outdoor setup and compress the entire event flow into the indoor courtyards dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing and reconstruct the sequence flawlessly."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Haridwar?",
    a: "Travel to Haridwar (via Dehradun Jolly Grant Airport or the NCR highway corridor) is completely streamlined. I am constantly active across the Uttarakhand luxury wedding circuit (Rishikesh/Mussoorie/Haridwar), so there are zero hidden logistical risks. All exact requirements are calculated instantly upon booking."
  },
  {
    q: "When should we freeze your dates for a Haridwar spiritual event?",
    a: "Haridwar’s premium destination windows are incredibly tight, mirroring massive auspicious dates. Elite properties like Pilibhit House vanish over 12 months in advance. Lock my dates the instant your luxury venue contract is confirmed."
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

export default function HaridwarPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div class="relative w-full h-full"><Image src="/backgrounds/haridwar_bg.webp" alt="Best Anchor in Haridwar — VIP Luxury Spiritual Weddings" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Haridwar · The Ganges Protocol</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[15vw] md:text-[11vw] lg:text-[8.5rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[7.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/gold-texture.webp')" }}
              >
                HARIDWAR
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The absolute apex of <G>highly-exclusive spiritual destination weddings</G>, fusing unscripted VIP English moderation with profound Ganges heritage.
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
                Spiritual Scale.<br /><G>Global Flow.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute pinnacle of luxury spiritual destination hosting across the Ganges corridor.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Haridwar operates with extreme reverence. You are dealing with ultra-restricted properties like Pilibhit House where <strong className="text-[#D4AF37]">absolute acoustic curfews, zero-alcohol (Satvik) limits, and top-tier NRI/Corporate families</strong> collide. A loud, disorganized anchor ruins the spiritual flow. Yash steps into these environments and executes perfectly polished, articulate English moderation, managing the silence of the ghats while still manufacturing raw, exploding energy when the timeline transitions to celebration.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He completely rejects paper scripts. For global cross-cultural weddings, Yash provides seamless translation—executing unscripted English that breaks down the profound Sanskrit rituals for the international network, entirely validating the presence of the highest-net-worth guests.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Haridwar" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. HARIDWAR IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Haridwar is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Ganges Corridor Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Haridwar blends absolute, ancient spiritual intensity with ultra-modern luxury execution. The properties here demand perfection—there are strict decibel curfews, complex rituals by the river, and the demographic is heavily weighted towards NRIs and Delhi NCR's highest corporate tier looking for roots. An anchor here cannot be a 'hype man'. He must possess razor-sharp cultural intelligence to navigate VIP Sanskrit/English bridging, the polish to match high-end legacy, and the psychological power to detonate a Sangeet entirely without alcohol.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {HARIDWAR_IDENTITY.map((item, i) => (
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
                Spiritual Retreats to<br /><G>Massive Satvik Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Haridwar's Best. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Spiritual Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              VIP Reality.<br /><G>Ganga Convergence.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a luxury event in Haridwar requires an absolute mastery of 'Acoustic Reverence'. Venues like Pilibhit House demand extreme precision. The moment formal Aarti concludes, the transition to the reception must be handled flawlessly. Yash acts as a bridge—using impeccable English narration to ground NRI guests in the profound rituals, then transitioning seamlessly to physically compress the crowd into the evening flow entirely without breaking the heritage atmosphere.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, Haridwar is heavily Satvik. You cannot mask a poorly-hosted event with alcohol. Yash drops the script and dives into the crowd, validating the elite presence naturally and forcing explosive energy entirely through raw, psychological crowd dominance. 
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Cross-cultural VIP fluency—defeating strict acoustic limits and driving intense Satvik energy—is the mark of an anchor who operates at the true apex of the destination industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Bilingual NRI Bridge", sub: "Flawless English translation" },
                { label: "Elite Satvik Protocol", sub: "Explosive energy without alcohol" },
                { label: "Ganges Acoustic Control", sub: "Intimate vocal presence on ghats" },
                { label: "Pilibhit Flow", sub: "Perfecting heritage timelines" },
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
                  <Image src={src} alt={`Anchor Yash Soni Haridwar event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/backgrounds/haridwar_bg.webp" alt="Haridwar Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Haridwar · The Spiritual Vanguard</p>
                <p className="text-white text-xs">Commanding extreme VIP intimacy at properties like Pilibhit House and guiding intense spiritual timelines for global audiences.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Global Scale.<br /><G>Spiritual Focus.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Haridwar is deeply nuanced. Properties physically lock you against the river, and crowd control is paramount. Yash builds his stage presence to physically and vocally anchor these serene environments—using pristine English to synthesize the experience for NRIs while maintaining absolute command over the sprawling logistical timeline.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "NRI VIP Bridging" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-net-worth international families do not accept generic templates. The execution here must reflect profound spiritual intelligence, flawless corporate bilingual articulation, and the ability to manufacture extreme crowd hype totally unscripted without relying on standard party crutches.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Haridwar Events.</G></h2>
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
              {["Pilibhit House Executive","Ganges Aarti Bridging","Intimate Satvik Sangeets","Delhi NCR Business Hub","Bilingual English/Sanskrit","Spiritual Architecture Host","Cross-Cultural Elite Weddings","4.9★ Rated","Corporate Strategy Offsites"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Haridwar <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-haridwar-${idx}`} />
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">India's <G>Elite Routes.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Rishikesh", href: "/anchor-in-rishikesh", desc: "Wellness Escapes" },
              { icon: MapPin, label: "Delhi", href: "/anchor-in-delhi", desc: "Corporate Core" },
              { icon: MapPin, label: "Varanasi", href: "/anchor-in-varanasi", desc: "Spiritual Peak" },
              { icon: MapPin, label: "Mussoorie", href: "/anchor-in-mussoorie", desc: "Doon Valley Focus" },
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
              Haridwar experiences intense overlapping of the Delhi VIP destination season and incredibly crowded auspicious dates. Top-tier anchors require multi-day blockouts. I do not hold dates without confirmation.
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
              { label: "Anchor in Delhi", href: "/anchor-in-delhi" },
              { label: "Anchor in Rishikesh", href: "/anchor-in-rishikesh" },
              { label: "Anchor in Varanasi", href: "/anchor-in-varanasi" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · HARIDWAR (UK), INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}