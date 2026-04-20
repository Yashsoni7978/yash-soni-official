"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plane, Plus, ShieldCheck, Ship, Sparkles, Star, Users, Waves } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Andaman.%20Can%20you%20check%20availability%3F";

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

const ANDAMAN_IDENTITY = [
  {
    icon: Ship,
    title: "The Ultimate Private Island Protocol",
    desc: "A destination wedding in the Andamans (specifically Havelock Island) represents the absolute pinnacle of luxury logistics. This is not a drop-in banquet; guests must fly into Port Blair and take private ferries to reach the resort. Because of this massive barrier to entry, the guest list is incredibly distilled—only the most important 100-150 VIPs make the cut. The anchor here must operate with total intimacy, delivering a pristine, executive-level experience that honors the immense effort it took to arrive."
  },
  {
    icon: Gem,
    title: "Extreme Barefoot Luxury",
    desc: "Properties like Taj Exotica at Radhanagar Beach merge staggering luxury with raw, unleashed nature. The architectural bounds are totally open. Wind, ocean roar, and sweeping beaches heavily distort acoustic control. Yash utilizes advanced physical stage dominance to create 'micro-arenas', forcefully condensing the VIP crowd into perfectly balanced, highly intimate focal points so the sound and the energy never drift away into the ocean."
  },
  {
    icon: Plane,
    title: "Global VIP Code-Switching",
    desc: "Couples who choose the Andamans are typically high-net-worth NRIs, tech founders, or top-tier legacy business families. The audience holds an extreme intellectual pedigree. Yash entirely rejects generic wedding templates, employing razor-sharp, unscripted English moderation that validates international guests, while retaining the deep Hindi reverence necessary for the core family ceremonies."
  },
];

const SERVICES = [
  {
    icon: Crown,
    title: "Taj Exotica Havelock Flow",
    desc: "Absolute executive-grade English mastery for highly curated guest lists at the Andamans' premier 5-star properties. Ensuring flawless integration with hotel timelines.",
    tag: "Exclusive"
  },
  {
    icon: Waves,
    title: "Radhanagar Beach Varmalas",
    desc: "Defeating massive open-air beachfront acoustics using extreme vocal compression techniques. Forcing the crowd perfectly tight during the sacred Pheras against the ocean wind.",
    tag: "Acoustics"
  },
  {
    icon: Building2,
    title: "Distilled VIP Intimacy",
    desc: "Bridging the gap between deeply traditional elders and modern international corporate friends in an environment where everyone is stripped down to 'island time'.",
    tag: "Luxury Scale"
  },
  {
    icon: Briefcase,
    title: "Unscripted Sangeet Hype",
    desc: "Transitioning a highly formal crowd seamlessly into explosive, raw dancing momentum without relying on paper notes. Reacting totally in the moment.",
    tag: "Executive"
  },
];

const VENUES = [
  { name: "Taj Exotica Resort & Spa", tag: "Radhanagar Beach Benchmark", icon: Crown },
  { name: "Barefoot at Havelock", tag: "Eco-Luxury Intimacy", icon: Building2 },
  { name: "Symphony Palms", tag: "Beach Resort Scale", icon: Gem },
  { name: "Sea Shell Havelock", tag: "Coastal Elegance", icon: Waves },
  { name: "Welcomhotel Port Blair", tag: "Capital City Luxury", icon: MapPin },
  { name: "Silver Sand Beach Resort", tag: "Havelock Prestige", icon: Sparkles },
  { name: "TSG Blue Resort", tag: "Radhanagar Proximity", icon: Heart },
  { name: "Munjoh Ocean Resort", tag: "Private Coastal Suites", icon: Ship },
];

const VS = [
  { problem: "Using 'cheap MC' club humor that immediately alienates an ultra-premium VIP island guest list", fix: "Intimate, highly conversational executive-grade delivery matching the crowd's pedigree" },
  { problem: "The anchor's voice dissipating entirely over the roar of the ocean during a beachfront ceremony", fix: "Mastery of timeline-stitching and acoustic centralizing to pull the entire party together" },
  { problem: "Being unable to bridge the formal C-suite networking with the high-energy destination Sangeet", fix: "Executing an intense psychological transition that drags the VIPs directly to the dance floor" },
  { problem: "Reading rigidly from paper notes during a highly exclusive family performance on the beach", fix: "100% unscripted flow—maintaining absolute eye contact and reacting to inside jokes in real-time" },
  { problem: "Failing to fuse the cultures during a massive US/UK-Indian cross-border island wedding", fix: "Bilingual emotional intelligence that bridges modern urban executives directly with local elders" },
  { problem: "An anchor getting flustered by the sudden logistical timeline shifts common to remote islands", fix: "Absolute stoic command, restructuring the event flow natively without the guests ever noticing" },
];

const TESTIMONIALS = [
  {
    name: "NRI Executive Family — UAE & London",
    quote: "Flying our 100 closest guests to Havelock was a logistical mountain. We needed an anchor who didn't just 'talk' but actively managed the entire flow of the island resort. Yash was brilliant. His English delivery for our international guests was sharper than any host we've seen in Dubai, and his control over the event was unshakeable.",
    event: "Destination Sunset Wedding · Taj Exotica Havelock"
  },
  {
    name: "Singhania Foundation (Mumbai HQ)",
    quote: "Taj Exotica Havelock is massive and entirely open to the sea. The acoustics are terrible for ordinary speakers. Yash used sheer stage dominance to physically pull our guests together during the dusk Varmala, making it feel perfectly intimate against the ocean. A masterclass in hosting.",
    event: "Barefoot Beach Wedding · Radhanagar Beach"
  },
  {
    name: "Director — Silicon Valley Tech Firm",
    quote: "Getting our tech friends and traditional family to the Andamans was beautiful but stressful. Yash was the anchor that literally held the two worlds together. He transitioned our extremely formal welcome dinner into an insanely hyped, 3 AM Sangeet entirely unscripted. Absolute legend.",
    event: "Cross-Cultural VIP Sangeet · Sea Shell Havelock"
  },
];

const FAQS = [
  {
    q: "How do you manage the massive, open acoustics of a remote Andaman beach?",
    a: "The ocean is essentially an acoustic void—it absorbs all standard sound. Furthermore, properties on Radhanagar Beach are sprawling. I actively prevent 'audience drift'. I use targeted vocal projection and physical stage boundaries to condense the VIPs exactly where the energy needs to be, forcing an intimate, tightly-packed atmosphere despite the infinite horizon."
  },
  {
    q: "Our Andaman guest list is incredibly distilled—only 100 highly important VIPs. Can you host a room this small?",
    a: "This is exactly my specialty. A 1,000-person wedding requires broadcasting. A 100-person island wedding requires 'Conversational Dominance'. I dismantle the formal 'stage persona' and interact with the VIPs intimately, in immaculate English. It feels more like a high-end executive gala hosted by a close friend than a scripted show."
  },
  {
    q: "We have international guests flying into Port Blair and traditional family from mainland India. Can you bridge them?",
    a: "Absolutely. I execute pristine 'Bilingual Code-Switching'. The modern, global guests receive sharp, highly intelligent English validation, while I seamlessly intertwine deep, respectful Hindi so the traditional family feels completely centered and secure in the rituals."
  },
  {
    q: "Do you use teleprompters or scripts for these intricate VIP events?",
    a: "Never. Reading from paper in front of 100 highly intelligent VIPs instantly drops your authority. I memorize the family lineages, the complex itineraries, and the cross-border dynamics. This allows me to maintain absolute eye contact and run the entire multi-day itinerary 100% unscripted."
  },
  {
    q: "How are your logistics and travel managed for the Andamans?",
    a: "Because I travel Pan-India handling massive volumes of destination weddings, my technical rider is highly optimized. Travel to Port Blair (and the subsequent ferry to Havelock/Neil) is clearly defined in the initial contract. There are no hidden surprises; my team coordinates seamlessly with your destination planner."
  },
  {
    q: "What if island logistics (like ferry delays) force a sudden change in our Sangeet timeline?",
    a: "Island logistics are inherently volatile. If a ferry delay forces us to compress a 4-hour Sangeet into 2 hours, I do not panic. Because I am entirely unscripted, I can instantly rewrite the pacing, stitch performances together on the fly, and accelerate the hype without the audience ever realizing the timeline was compromised."
  },
  {
    q: "When should we freeze your dates for an Andaman event?",
    a: "The Andaman wedding season aligns closely with extreme peak winter dates nationwide. Because flying into Port Blair and transferring to Havelock requires a multi-day blackout on my calendar, I strictly do not hold dates. The moment your resort is finalized, secure the dates immediately."
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

export default function AndamanPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div class="relative w-full h-full"><Image src="/backgrounds/andaman_bg.webp" alt="Best Anchor in Andaman — VIP Luxury Island Weddings" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Andaman · The Private Island Protocol</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[14vw] md:text-[10vw] lg:text-[7.5rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[13vw] md:text-[9.5vw] lg:text-[7rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)" }}
              >
                ANDAMAN
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The absolute apex of <G>highly-exclusive remote destination weddings</G>, commanding unscripted VIP energy from Port Blair to the pristine beaches of Havelock.
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
                VIP Polish.<br /><G>Island Command.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute pinnacle of luxury destination hosting for remote private islands.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                The Andamans present extreme logistical barriers. Finding a venue like Taj Exotica Havelock means you are dealing with a fiercely curated, <strong className="text-[#D4AF37]">highly distilled 100-guest audience containing top-tier VIPs and global executives</strong>. Yash steps into these intensely beautiful, ocean-swept environments and manufactures raw, authentic dancing energy entirely organically, defeating the wind and scale.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He completely rejects paper scripts and basic 'MC yelling'. For high-net-worth cross-cultural weddings on Havelock Island, Yash provides an elite bilingual execution—flawless, commanding English that drops the invisible wall between the stage and the VIPs, integrated natively with the deep Hindi warmth necessary for the traditions.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Andaman" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. ANDAMAN IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Andaman is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              Remote Island Luxury Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              The Andamans completely dismantle the playbook of standard indoor banquet weddings. It is a highly exclusive, hyper-intimate coastal ecosystem cut off from the mainland. The logistics are strict, the ocean acoustics are massive, and the guest list is pure VIP. A successful anchor here must possess razor-sharp cultural intelligence to navigate global cross-border dynamics, the linguistic polish to entertain a high-net-worth room, and the timeline precision to command volatile island schedules perfectly.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {ANDAMAN_IDENTITY.map((item, i) => (
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
                Havelock Estates to<br /><G>Beach Sangeet Mayhem.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Andaman's Best. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Island Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              VIP Reality.<br /><G>Massive Energy.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting an event on Havelock requires an elite understanding of 'Intimate Crowd Compression'. The massive beaches are breathtaking but acoustically lethal. An amateur anchor loses the crowd immediately out here, letting the energy scatter to the ocean. Yash actively collapses the psychological distance between the VIPs and the stage, using extremely sharp voice projection and timeline pacing to keep a 100-guest party locked in and fiercely hyped.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, Andaman crowds are invariably a mix of highly modern international corporate guests and traditional families taking the massive trip over. The host must bridge this gap instantly. Yash does this through total unscripted fluidity—validating the global guests with pristine English, then flipping elegantly into deep Hindi warmth to anchor the core family.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Island VIP fluency—defeating the raw coastal acoustics and uniting the high-net-worth demographic—is the mark of an anchor who operates at the true apex of the luxury industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "High-Voltage Sangeet Hype", sub: "Explosive, unscripted momentum" },
                { label: "Elite English Protocol", sub: "Definitive VIP guest integration" },
                { label: "Intimate Beach Acoustics", sub: "Defeating massive open-air drift" },
                { label: "Havelock Logistics Mastery", sub: "Unshakeable island command" },
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
              {["/gallery-4.webp","/gallery-5.webp","/gallery-1.webp","/gallery-2.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Andaman event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/backgrounds/andaman_bg.webp" alt="Andaman Event Command" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Andaman · Pristine Control</p>
                <p className="text-white text-xs">Commanding vast VIP intimacy at Taj Exotica Havelock and driving unstoppable Sangeet energy against the ocean wind.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Private Islands.<br /><G>VIP Focus.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in the Andamans is a hyper-intimate logistical challenge. Properties physically open onto the sea, leading to immense acoustic drift for 100-guest gatherings. Yash builds his stage presence to physically and vocally anchor these extreme environments—using timeline stitching to forcefully compress the venue, ensuring the host and the couple remain the undeniable center of gravity.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "Private Island Retreat" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-net-worth families flying out to remote islands do not accept generic templates. The execution here must reflect deep cultural precision, flawless bilingual articulation for global guests, and the ability to manufacture extreme crowd hype totally unscripted—even within sprawling beachfront constraints.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Andaman Events.</G></h2>
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
              {["Taj Exotica Havelock","Private Island Sangeets","NRI Destination Emcee","Bilingual English/Hindi","Coastal VIP Host","Cross-Cultural Elite Weddings","4.9★ Rated","Radhanagar Beach Flow"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Andaman <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-andaman-${idx}`} />
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Adjacent Coast & Hubs</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">India's <G>Elite Routes.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Mumbai", href: "/anchor-in-mumbai", desc: "Corporate Core" },
              { icon: MapPin, label: "Goa", href: "/anchor-in-goa", desc: "Beach Party Capital" },
              { icon: MapPin, label: "Alibaug", href: "/anchor-in-alibaug", desc: "VIP Coastal Hub" },
              { icon: MapPin, label: "Bangalore", href: "/anchor-in-bangalore", desc: "South Tech Route" },
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
              The Andamans experience intense overlapping of the international destination season and peak local luxury wedding dates. Travelling anchors require multi-day blockouts for the flights and ferries. I do not hold dates without confirmation.
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
              { label: "Anchor in Mumbai", href: "/anchor-in-mumbai" },
              { label: "Anchor in Goa", href: "/anchor-in-goa" },
              { label: "Anchor in Alibaug", href: "/anchor-in-alibaug" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · ANDAMAN LIFESTYLE, INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}