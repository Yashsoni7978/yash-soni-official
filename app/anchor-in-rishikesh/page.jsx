"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Building2, CalendarCheck, CheckCircle2, Crown, Flame, Flower2, Gem, Globe, Heart, MapPin, Mic2, Minus, Music2, Plane, Plus, ShieldCheck, Sparkles, Star, Users, Waves } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Rishikesh.%20Can%20you%20check%20availability%3F";

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

const RISHIKESH_IDENTITY = [
  {
    icon: Flame,
    title: "The Ultimate Satvik Challenge",
    desc: "Rishikesh is a holy city. Events here run on a strict 'Satvik Protocol'—meaning no alcohol, and often, no meat. For an amateur anchor, alcohol is a crutch used to get guests dancing. Yash does not need it. He specializes in 'Pure Organic Momentum', using razor-sharp interactive crowd psychology, flawless humor, and immense stage dominance to create a totally sober Sangeet that feels more explosive than a nightclub."
  },
  {
    icon: Waves,
    title: "Himalayan Ridge Acoustics",
    desc: "Properties like Taj Rishikesh and The Roseate Ganges are carved directly into the Himalayan foothills alongside the river. The natural acoustics are chaotic—wind coming down the valley actively strips the sound away. Yash uses 'Acoustic Compression', physically restructuring the crowd layout and projecting his voice through the wind to ensure the emotional intimacy of the Varmala is never lost to the sheer scale of the mountains."
  },
  {
    icon: Briefcase,
    title: "Delhi NCR Executive Convergence",
    desc: "Because it is driveable from Delhi, Rishikesh serves as the apex destination for high-end NCR corporate families seeking spiritual wellness retreats mixed with extreme luxury. The crowd is highly intelligent and completely metropolitan. Yash anchors this perfectly: skipping the cheesy jokes and delivering an unscripted, executive-grade English flow that validates the VIPs entirely."
  },
];

const SERVICES = [
  {
    icon: Crown,
    title: "Taj Rishikesh Event Governance",
    desc: "Executing highly pristine, VIP-heavy events in luxury wellness properties where excessive DJ noise is prohibited entirely by the resort.",
    tag: "Exclusive"
  },
  {
    icon: Music2,
    title: "High-Hype Satvik Sangeets",
    desc: "Igniting explosive, packed dance floors utilizing 0% alcohol and 100% pure organic psychological crowd momentum.",
    tag: "Energy"
  },
  {
    icon: Globe,
    title: "Bilingual Spiritual Bridging",
    desc: "Fusing the incredibly deep spiritual roots of a Ganges-side Phera with the highly modern English articulation required for global NRI guests.",
    tag: "International"
  },
  {
    icon: Briefcase,
    title: "Corporate Wellness Retreats",
    desc: "Anchoring high-stakes strategy summits and 'Digital Detox' executive offsites for top-tier tech and finance firms from Gurgaon.",
    tag: "Executive"
  },
];

const VENUES = [
  { name: "Taj Rishikesh Resort", tag: "Singthali Luxury", icon: Crown },
  { name: "The Roseate Ganges", tag: "Architectural Wellness", icon: Building2 },
  { name: "Aloha on the Ganges", tag: "Premium Riverside", icon: Waves },
  { name: "Ananda in the Himalayas", tag: "Global VIP Retreat", icon: Sparkles },
  { name: "Ganga Kinare", tag: "Boutique Heritage", icon: Star },
  { name: "Divine Resort", tag: "Laxman Jhula Scale", icon: MapPin },
  { name: "Modi Yoga Retreat", tag: "Executive Wellness", icon: Gem },
  { name: "Atali Ganga", tag: "Adventure & Strategy", icon: Flame },
];

const VS = [
  { problem: "The party completely dying at 9 PM because there is no alcohol to lower guests' inhibitions", fix: "Manufacturing pure organic hype—using the anchor to actively force the crowd out of their shells" },
  { problem: "Using 'cheap MC' club humor that instantly ruins the serene, spiritual prestige of Taj Rishikesh", fix: "Intimate, highly conversational executive-grade delivery matching the VIP crowd's pedigree" },
  { problem: "The anchor's voice dissipating entirely into the Himalayan valley winds during a riverside Phera", fix: "Mastery of timeline-stitching and acoustic centralizing to pull the entire party tightly together" },
  { problem: "Reading rigidly from paper notes during a highly exclusive family performance", fix: "100% unscripted flow—maintaining absolute eye contact and reacting to inside jokes in real-time" },
  { problem: "Failing to fuse the cultures during a massive US/UK-Indian cross-border wedding in Rishikesh", fix: "Bilingual emotional intelligence that bridges modern urban executives directly with local elders" },
  { problem: "The corporate wellness offsite feeling like a boring seminar instead of a luxury escape", fix: "Unscripted, highly articulate strategy moderation that feels like a TED-style conversation" },
];

const TESTIMONIALS = [
  {
    name: "Bansal Family — Delhi NCR",
    quote: "Hosting a Satvik wedding at Taj Rishikesh was incredibly beautiful, but we were terrified the Sangeet would be boring without a bar. Yash completely changed the game. He brought an insane level of pure, organic hype using his voice and crowd interaction. The dance floor was packed till the venue shut down.",
    event: "Destination Satvik Wedding · Taj Rishikesh"
  },
  {
    name: "Venture Capital Summit — Gurgaon",
    quote: "We held a 3-day wellness and strategy summit at The Roseate Ganges. Yash anchored the entire schedule. His English is exceptionally sharp, and his ability to pace a room without relying on notes made him look like one of the executives. True professional.",
    event: "Executive Retreat · The Roseate Ganges"
  },
  {
    name: "Dr. Shah & Family — US/Mumbai",
    quote: "We chose Aloha on the Ganges to perform deeply traditional ceremonies, but all our friends flew in from the US. Yash was the ultimate bridge. He brought perfect English context for the Americans, and immense Hindi respect for the spiritual rituals by the river.",
    event: "Cross-Cultural Wedding · Aloha on the Ganges"
  },
];

const FAQS = [
  {
    q: "A lot of our guests are worried the Sangeet will be dull because it’s a strict dry (no-alcohol) event. How do you fix this?",
    a: "This is arguably the most valuable skillset an anchor can possess. When alcohol isn't present to loosen up a crowd, the anchor must become the catalyst. I employ 'Psychological Momentum'—using rapid-fire interactive segments, highly personalized unscripted humor, and aggressive timeline pacing to pull guests onto the dance floor via pure, organic energy."
  },
  {
    q: "We are holding a corporate offsite at Taj Rishikesh. Our crowd is purely C-Suite. Can you match this tone?",
    a: "Absolutely. A VIP corporate audience doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop all standard 'entertainment tropes' and host with sharp, highly conversational English taking zero paper notes to the stage. It bridges the gap between formal strategy and luxury relaxation seamlessly."
  },
  {
    q: "How do you handle the massive outdoor acoustics of a riverside Varmala?",
    a: "The Himalayan valley wind acts as a giant vacuum, instantly sucking away standard DJ sound. I actively prevent 'audience drift'. I use targeted vocal projection and physical stage boundaries to condense the VIPs exactly where the energy needs to be, forcing an intimate, tightly-packed atmosphere despite the infinite backdrop."
  },
  {
    q: "Do you use scripts during a chaotic multi-family timeline?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you break eye contact with the audience. I memorize the complex family dynamics, the performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu delay."
  },
  {
    q: "Since our event is heavily spiritual, can you ensure the modern English hosting doesn't disrespect the traditions?",
    a: "This is exactly why couples book me for Rishikesh. I execute pristine 'Bilingual Code-Switching'. The modern, global guests receive sharp, highly intelligent English validation, while I seamlessly intertwine deep, respectful Hindi so the gravity of the spiritual rituals by the Ganges is completely honored."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Rishikesh?",
    a: "Because I am heavily active across the Delhi-NCR circuit, the logistics to Rishikesh (via Dehradun Jolly Grant Airport or highway) are completely streamlined. There are no hidden complications, and the exact travel rider is provided instantly upon booking to your planner."
  },
  {
    q: "When should we freeze your dates for a Rishikesh wedding?",
    a: "Rishikesh’s destination season aligns directly with the absolute peak winter dates of North India. The premium luxury properties (like Taj and Roseate) vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
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

export default function RishikeshPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/backgrounds/rishikesh_bg.webp"
            alt="Best Anchor in Rishikesh — Satvik Weddings & Taj Wellness"
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Rishikesh · The Himalayan Protocol</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[15vw] md:text-[11vw] lg:text-[8.5rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[7.5rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/gold-texture.webp')" }}
              >
                RISHIKESH
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The absolute apex of <G>ultra-luxury Satvik destination events</G>, commanding unscripted VIP energy at properties like Taj Rishikesh and The Roseate.
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
                Satvik Flow.<br /><G>VIP Command.</G>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled instinctively, <strong className="text-white">Anchor Yash Soni</strong> represents the absolute pinnacle of luxury spiritual destination hosting in Rishikesh.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Rishikesh presents a completely unique high-net-worth challenge. The properties here (like Taj Rishikesh) enforce <strong className="text-[#D4AF37]">extremely strict 'Satvik' protocols without alcohol</strong>. Many anchors fail entirely in this environment because they cannot hype a sober crowd. Yash steps into these pristine valleys and manufactures raw, explosive dancing energy entirely organically, using sheer psychology and vocal momentum.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                He completely rejects paper scripts and basic 'MC behavior'. For VIP corporate retreats and spiritual cross-cultural weddings, Yash provides an elite bilingual execution—commanding executive English that validates global/Delhi NCR guests, perfectly fused with the deep Hindi reverence required for ceremonies on the Ganges.
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
                  <img src="/intro-portrait-bottom.webp" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="Anchor Yash in Rishikesh" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. RISHIKESH IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Rishikesh is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              The Himalayan Corridor Demands<br />an <G>Elite Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Rishikesh fundamentally dismantles standard wedding strategies. It is an intensely spiritual, highly regulated acoustic sanctuary. The massive valley winds rip sound away, and the absence of a bar forces the anchor to be the singular engine of party momentum. A successful host here must possess extreme cultural intelligence to navigate Delhi NCR corporate guests, the linguistic depth to preserve deep-rooted spiritual rituals, and the raw energy to explode a dry Sangeet entirely unscripted.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {RISHIKESH_IDENTITY.map((item, i) => (
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
                Spiritual Heritage to<br /><G>Explosive Satvik Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rishikesh's Best. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Himalayan Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              VIP Reality.<br /><G>Satvik Scale.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Hosting a luxury event in Rishikesh requires absolute mastery over 'Psychological Engagement'. Without alcohol to lower the guests' inhibitions, a standard party frequently fails. An amateur anchor loses the crowd entirely out here. Yash acts as the singular energy catalyst, actively collapsing the psychological distance between the VIPs and the stage, using extremely sharp unscripted interactions to keep a 200-guest Sangeet locked in and fiercely hyped entirely sober.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, Rishikesh crowds are heavily weighted towards highly modern Delhi executives and traditional spiritual elders. The host must bridge this gap instantly. Yash does this through total bilingual fluidity—validating the corporate guests with pristine English, then flipping elegantly into deep Hindi/Sanskrit reverence to anchor the core ceremonies by the Ganges.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Himalayan VIP fluency—defeating strict Satvik acoustic limits and uniting the high-net-worth demographic—is the mark of an anchor who operates at the true apex of the wellness destination industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "High-Voltage Satvik Hype", sub: "Explosive, alcohol-free momentum" },
                { label: "Elite English Protocol", sub: "Definitive NCR VIP integration" },
                { label: "Himalayan Ridge Acoustics", sub: "Defeating massive open-valley wind" },
                { label: "Corporate Retreat Galas", sub: "Unshakeable executive moderation" },
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
              {["/gallery-4.webp","/gallery-2.webp","/gallery-1.webp","/gallery-5.webp","/gallery-3.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">
                  <img
                    src={src}
                    alt={`Anchor Yash Soni Rishikesh event ${i + 1}`}
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
                src="/backgrounds/rishikesh_bg.webp"
                alt="Rishikesh Event Command"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Rishikesh · The Riverside Summit</p>
                <p className="text-white text-xs">Commanding extreme VIP intimacy at Taj Rishikesh and driving unstoppable Satvik energy across wellness retreats.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Himalayan Wellness.<br /><G>VIP Focus.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Scaling an event in Rishikesh’s luxury ecosystem is an acoustic and psychological challenge. Properties along the Ganges suffer from massive acoustic drift as the wind rips through the valley. Furthermore, maintaining energy with 0% alcohol requires absolute perfection. Yash builds his stage presence to physically and vocally anchor these extreme environments—using conversational dominance to forcefully compress the venue, ensuring the host remains the undeniable center of gravity.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> The "Spiritual Retreat" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-net-worth Delhi NCR families do not accept generic templates. The execution here must reflect deep cultural integrity, flawless bilingual articulation, and the ability to manufacture extreme crowd hype totally unscripted—even within strictly Satvik, zero-alcohol Himalayan constraints.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Rishikesh Events.</G></h2>
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
              {["Taj Rishikesh Luxury","The Roseate Ganges","Satvik Intimate Sangeets","Delhi NCR Business Retreats","Bilingual English/Hindi","Spiritual Himalayan Property Host","Cross-Cultural Elite Weddings","4.9★ Rated","Corporate Offsite Seminars"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Rishikesh <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-rishikesh-${idx}`} />
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
              { icon: MapPin, label: "Delhi", href: "/anchor-in-delhi", desc: "Corporate Core" },
              { icon: MapPin, label: "Varanasi", href: "/anchor-in-varanasi", desc: "Holy Belt" },
              { icon: MapPin, label: "Agra", href: "/anchor-in-agra", desc: "Heritage Forts" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Royal Triangle" },
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
              Rishikesh experiences intense overlapping of the Delhi VIP destination season and peak local corporate retreat dates. Travelling anchors require multi-day blockouts. I do not hold dates without confirmation.
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
              { label: "Anchor in Varanasi", href: "/anchor-in-varanasi" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · RISHIKESH (UK), INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}