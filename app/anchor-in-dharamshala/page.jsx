"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, CloudFog, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Snowflake, Sparkles, Star, Users } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Dharamshala.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
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

const DHARAMSHALA_IDENTITY = [
  {
    icon: CloudFog,
    title: "Dhauladhar Weather Reality",
    desc: "Events spanning across properties like Taj Dharamshala or Hyatt Regency are constantly subject to rapid, unpredictable cloud cover and temperature drops coming off the Dhauladhar range. Yash executes 'Timeline Defense'—he never waits for the evening to 'die down'. He dynamically accelerates the Sangeet's timeline organically, using unscripted bilingual crowd psychology to ignite the party aggressively before the cold forces families indoors."
  },
  {
    icon: Building2,
    title: "Mountain Retreat Protocol",
    desc: "Because Dharamshala is deeply associated with Buddhist serenity and extreme luxury retreats, the daytime ceremonies require absolute grace. Yash operates as a highly articulate Executive Host—navigating the profound architectural weight of these luxury mountain properties utilizing flawless English that validates the C-suite network, entirely avoiding loud, disruptive 'DJ-style MCing'."
  },
  {
    icon: Music2,
    title: "Chandigarh VIP Transition",
    desc: "Dharamshala is a prime getaway for Chandigarh's absolute elite. These families demand formal respect during the Pheras but want astronomically high momentum for the Sangeet. Yash executes the perfect cross-over: from highly respectful daytime moderation to intense, crowd-immersed heavy Punjabi/Hindi execution that blows the roof off the mountain ballrooms entirely naturally."
  },
];

const SERVICES = [
  {
    icon: Crown,
    title: "Taj Dharamshala Galas",
    desc: "Executing sprawling, sweeping VIP destination events utilizing the absolute scale of the Taj property without allowing the high-net-worth crowd to scatter.",
    tag: "Exclusive"
  },
  {
    icon: Music2,
    title: "Hyatt Regency Sangeets",
    desc: "Defeating dropping temperatures and indoor acoustic challenges by generating massive, fast-paced organic party momentum.",
    tag: "Energy"
  },
  {
    icon: Briefcase,
    title: "Executive Offsite Moderation",
    desc: "Unscripted, zero-notes hosting for high-stakes leadership symposiums holding 'digital detox' and strategic alignment retreats deep in Kangra.",
    tag: "Corporate"
  },
  {
    icon: Snowflake,
    title: "Alpine Weather Mitigation",
    desc: "Restructuring the event flow totally natively if adverse mountain weather (intense fog/rain) forces an outdoor sundowner to abruptly pull indoors.",
    tag: "Protocol"
  },
];

const VENUES = [
  { name: "Taj Dharamshala", tag: "The Dhauladhar Apex", icon: Crown },
  { name: "Hyatt Regency Resort", tag: "Mountain Grandeur", icon: Building2 },
  { name: "Rakkh Resort", tag: "Kangra Exclusivity", icon: Gem },
  { name: "Adivaha", tag: "Heritage Intimacy", icon: Briefcase },
  { name: "Norwood Green", tag: "Tea Garden Estates", icon: Sparkles },
  { name: "Mradul Estate", tag: "Boutique Scale", icon: Star },
  { name: "Prakriti Aalay", tag: "Eco Luxury Retreat", icon: MapPin },
  { name: "Indraprastha Spa", tag: "Executive Central", icon: Heart },
];

const VS = [
  { problem: "The anchor freezing and panicking when mountain rain forces an outdoor Sangeet suddenly indoors", fix: "Absolute stoic command, restructuring the event flow and timeline natively without the guests sensing the shift" },
  { problem: "Using 'cheap MC' club humor that instantly alienates an ultra-premium VIP guest list at the Taj", fix: "Intimate, highly conversational executive-grade delivery matching the absolute pinnacle of crowd pedigree" },
  { problem: "Guests retreating to their heated rooms early because the mountain temperatures freeze the event", fix: "Generating pure organic 'unplugged' hype using rapid pacing to heat up the crowd instantaneously" },
  { problem: "Reading rigidly from paper notes during a visually sweeping outdoor mountain ceremony", fix: "100% unscripted flow—maintaining absolute eye contact despite severe high-altitude distractions" },
  { problem: "Being unable to bridge formal C-suite networking with a massive Punjabi high-energy Sangeet format", fix: "Executing an intense psychological transition that drags the Punjab VIPs directly to the dance floor natively" },
  { problem: "The anchor's voice dissipating entirely as guests wander across the vast Himalayan estates", fix: "Mastery of timeline sequencing and vocal centralizing to pull the entire party tightly towards the event core" },
];

const TESTIMONIALS = [
  {
    name: "Corporate Summit — Chandigarh",
    quote: "Choosing Taj Dharamshala meant we needed an incredibly refined host for our executive summit. Yash anchored with pure executive polish. Unscripted, razor-sharp, and totally in control of the multi-day strategic agenda.",
    event: "Leadership Offsite · Taj Dharamshala"
  },
  {
    name: "Sodhi Family — Punjab",
    quote: "Mountain weather is a Sangeet killer. But Yash didn't wait. He brought massive hype right from the entrance entirely natively. He switched between English for the VIPs and heavy Punjabi banter effortlessly. The dance floor at Hyatt Regency exploded.",
    event: "Destination Sangeet · Hyatt Regency Dharamshala"
  },
  {
    name: "Heritage Wedding Retreat — NCR",
    quote: "We hosted deep in the Kangra valley at a boutique estate. We had high-profile guests who hate 'typical' wedding anchors. Yash bypassed all the generic games and hosted conversationally. He built immense momentum through pure stage dominance.",
    event: "VIP Intimate Wedding · Rakkh Resort"
  },
];

const FAQS = [
  {
    q: "How do you handle open-air events in Dharamshala when the Dhauladhar cold rolls in at sunset?",
    a: "This is the cardinal rule of high-altitude hosting. The second the sun sets over Kangra, the crowd wants to go inside. A basic DJ setup cannot counter this psychology. I utilize 'Temperature Compression'—speeding up the entire timeline aggressively, plunging into the crowd physically, and detonating a massive dancing session with high-intensity unscripted crowd-work before the cold paralyzes the night."
  },
  {
    q: "Our Mussoorie guest list is absolutely exclusive—mostly Chandigarh executives and corporate VIPs. Can you match this tone?",
    a: "Completely. Elite destination properties like Taj Dharamshala do not need a loud, shouting 'hype man'. They require an Executive Moderator. I deliberately drop standard, childish 'wedding gimmicks'. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The properties here are beautiful but sprawling. How do you prevent guests from wandering off to the lounges?",
    a: "Large luxury properties inevitably cause 'Audience Drift'. In Dharamshala, guests go wandering for valley views. I play the role of the 'Timeline Catalyst'—deploying rapid-fire, high-frequency pacing that constantly drags the guests back to the main stage, actively preventing the energy from bleeding away across the resort footprint."
  },
  {
    q: "Do you use teleprompters or scripts during these massive VIP itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if Himalayan weather systems (heavy fog/rain) force us to suddenly move our event indoors into the ballrooms?",
    a: "Mountain logistics are totally volatile. If extreme mountain weather forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor banquet hall dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Dharamshala?",
    a: "Travel to Dharamshala (via Gaggal Airport or the highway) is completely streamlined. I am constantly active across the Northern India luxury wedding circuit (Chandigarh/Punjab/Himachal), so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Dharamshala event?",
    a: "Dharamshala’s premium destination windows perfectly mirror the absolute peak luxury dates of North India. Elite properties like Taj and Hyatt vanish over 18 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
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

export default function DharamshalaPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div class="relative w-full h-full"><Image src="/backgrounds/dharamshala_bg.webp" alt="Best Anchor in Dharamshala — VIP Luxury Mountain Weddings" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Dharamshala · The Elite Retreat</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[15vw] md:text-[11vw] lg:text-[8.5rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[7.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)" }}
              >
                DHARAMSHALA
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The absolute apex of <G>highly-exclusive luxury mountain retreats</G>, commanding unscripted VIP energy at Taj Dharamshala and Hyatt Regency.
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
                Retreat Scale.<br /><G>High-Altitude Elite.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute pinnacle of luxury destination hosting across the Dharamshala and Kangra valley ranges.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Dharamshala operates as an exclusive sanctuary away from standard chaotic wedding hubs. You are dealing with vast properties like Taj Dharamshala where <strong className="text-[#D4AF37]">sweeping mountain views and top-tier Chandigarh/Punjab corporate crowds</strong> require flawless execution. Yash steps into these sprawling, spiritually-tied mountain architectures and manufactures incredibly tight, explosive dancing energy entirely organically, pulling the VIPs together before the altitude drops the temperature.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He completely rejects paper scripts and basic 'MC behavior'. For high-net-worth cross-cultural weddings, Yash provides an elite bilingual execution—flawless, commanding English that drops the invisible wall between the stage and the corporate network, suddenly flipping into heavy Punjabi momentum when the Sangeet demands unhinged energy.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Dharamshala" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. DHARAMSHALA IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Dharamshala is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Dhauladhar Estates Demand<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Dharamshala blends extreme spiritual serenity with sprawling, ultra-modern luxury infrastructure. The properties here feature sweeping Dhauladhar mountain backdrops that scatter massive outdoor soundscapes, and the demographic is decisively weighted towards Chandigarh and Punjab's highest corporate tier. An anchor here cannot just be loud and generic. He must possess razor-sharp cultural intelligence to navigate VIP corporate mechanics, the linguistic polish to match high-end lineage, and the unscripted power to detonate a Sangeet against the aggressively dropping mountain weather.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {DHARAMSHALA_IDENTITY.map((item, i) => (
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
                VIP Altitude Retreats to<br /><G>Massive Hyatt Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Dharamshala's Best. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Altitude Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              VIP Reality.<br /><G>Dhauladhar Scale.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a luxury event in Dharamshala requires an elite understanding of 'Property Dominance'. Venues like Hyatt Regency drag across vast terrains. The moment formal day-networking concludes, the crowd fragments entirely across the resort. Yash assumes the role of the Timeline Architect—using extreme vocal pacing and dominant stage psychology to forcefully pull the Chandigarh VIPs into the central phase, instantly generating massive momentum before the mountain drop paralyzes energy.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, Dharamshala is a definitive destination for Chandigarh and Punjab's most sophisticated corporate families. Yash fundamentally validates their presence with pristine, unscripted English moderation, then seamlessly flips into an aggressively high-energy Punjabi format when the evening formal wear comes off.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              High-altitude VIP fluency—defeating sprawling architectures and dominating the Chandigarh corporate tier—is the mark of an anchor who operates at the true apex of the destination industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "High-Voltage Punjabi Hype", sub: "Explosive, unscripted momentum" },
                { label: "Elite English Protocol", sub: "Definitive VIP corporate integration" },
                { label: "Acoustic Mountain Control", sub: "Defeating massive outdoor valley sound loss" },
                { label: "Taj Architecture Flow", sub: "Unshakeable crowd compression" },
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
                  <Image src={src} alt={`Anchor Yash Soni Dharamshala event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/backgrounds/dharamshala_bg.webp" alt="Dharamshala Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Dharamshala · The Retreat Summit</p>
                <p className="text-white text-xs">Commanding extreme VIP intimacy at properties like Taj Dharamshala and driving unstoppable energy across massive Hyatt Regency estates.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Himalayan Retreat.<br /><G>Chandigarh Focus.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Dharamshala is an intense logistical challenge. Properties physically drop off across the Kangra valleys, scattering guests continuously. Yash builds his stage presence to physically and vocally anchor these extreme environments—using timeline stitching to forcefully compress the venue, ensuring the host remains the undeniable center of gravity.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "VVIP Retreat" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-net-worth Punjab families do not accept generic templates. The execution here must reflect deep cultural intelligence, flawless corporate bilingual articulation, and the ability to manufacture extreme crowd hype totally unscripted—even within sprawling Himlayan constraints.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Dharamshala Events.</G></h2>
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
              {["Taj Dharamshala Executive","Hyatt Regency Sangeets","Intimate Retreat Sangeets","Chandigarh Business Hub","Bilingual English/Punjabi","Dhauladhar Architecture Host","Cross-Cultural Elite Weddings","4.9★ Rated","Corporate Strategy Offsites"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Dharamshala <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-dharamshala-${idx}`} />
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
              { icon: MapPin, label: "Shimla", href: "/anchor-in-shimla", desc: "Heritage Peaks" },
              { icon: MapPin, label: "Manali", href: "/anchor-in-manali", desc: "Alpine Scale" },
              { icon: MapPin, label: "Chandigarh", href: "/anchor-in-chandigarh", desc: "Punjab Hub" },
              { icon: MapPin, label: "Delhi", href: "/anchor-in-delhi", desc: "Corporate Core" },
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
              Dharamshala experiences intense overlapping of the Punjab VIP destination season and peak Chandigarh extreme-luxury dates. Top-tier anchors require multi-day blockouts. I do not hold dates without confirmation.
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
              { label: "Anchor in Shimla", href: "/anchor-in-shimla" },
              { label: "Anchor in Manali", href: "/anchor-in-manali" },
              { label: "Anchor in Chandigarh", href: "/anchor-in-chandigarh" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · DHARAMSHALA (HP), INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}