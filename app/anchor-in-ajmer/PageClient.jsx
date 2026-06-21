"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users, Wind } from "lucide-react";


const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Ajmer.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/ajmer.webp')", backgroundColor: GOLD }}
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
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#B5952F]" : "text-zinc-200"}`}>{q}</span>
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
            <p className="px-5 md:px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4 yash-faq-answer yash-citable">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const STATS = [
  { val: "1100", suffix: "+", label: "Events Anchored", sub: "across Rajasthan", icon: Mic2 },
  { val: "10", suffix: "K+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { val: "4.9", suffix: "★", label: "Client Rating", sub: "200+ reviews", icon: Star },
  { val: "8", suffix: "+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];

const AJMER_IDENTITY = [
  {
    icon: Globe,
    title: "The Syncretic Heritage",
    desc: "Ajmer is fundamentally differently positioned than the rest of Rajasthan. As home to the Dargah Sharif, it embodies a deeply spiritual, syncretic history that influences the local culture and the families who choose to celebrate here. An anchor must be capable of recognizing and respecting this culturally inclusive, warm environment rather than applying a blanket 'Maharaja' template to every event."
  },
  {
    icon: Landmark,
    title: "The Pratap Palace Standard",
    desc: "Properties like Pratap Palace (a Taj property) in Ajmer serve the very highest tier of NRI and domestic elite families. These venues mandate an extraordinary level of polish. The anchor serves as the bridge between the impeccable hospitality standards of the Taj and the joyful chaos of a large Indian wedding. Perfect English articulation combined with genuine Hindi warmth is required."
  },
  {
    icon: MapPin,
    title: "The Ajmer-Pushkar Corridor",
    desc: "Destination events in central Rajasthan constantly flow back and forth between Ajmer and Pushkar. A Sangeet might be by Ana Sagar lake, while the wedding takes place against the Pushkar desert backdrop. Managing this dual-identity corridor requires an anchor who understands how to shift the energy and cultural register to match the specific venue on the specific day, effortlessly."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Pratap Palace Heritage Anchor",
    desc: "Commanding the most prestigious heritage rooms in Ajmer. Flawless execution of Varmala and Phero rituals with deep cultural respect. Bilingual hosting designed specifically to engage NRI families and high-net-worth guests who expect international event standards.",
    tag: "Luxury"
  },
  {
    icon: Music2,
    title: "Ana Sagar Lake Sangeet",
    desc: "High-energy Sangeet anchoring at Ajmer's open-air lakefronts and garden resorts. Defeating outdoor acoustic challenges while building an unshakeable connection with the crowd, keeping 400+ guests absolutely glued to the stage and dance floor.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Gateway Corridor Pre-Wedding",
    desc: "Managing intimate, culturally rich Haldi and Mehndi ceremonies that introduce guests to the central Rajasthan experience without overwhelming them. Interactive storytelling and unscripted humor that makes everyone feel instantly at home.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Elite Medical & Corporate Summits",
    desc: "Ajmer is a historic hub for statewide medical summits, educational conferences, and corporate reward trips. Providing the sharp, authoritative, and perfectly timed anchoring required to make multi-speaker events and gala dinners flow seamlessly.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Pratap Palace (Taj)", tag: "Premium Royal Heritage", icon: Crown },
  { name: "Mansingh Palace", tag: "Lake-side Architecture", icon: Gem },
  { name: "Gateway Resort", tag: "Nature · Expansive", icon: Sparkles },
  { name: "Ana Sagar Properties", tag: "Open-Air Lakeside", icon: Wind },
  { name: "Phool Mahal Kishangarh", tag: "Nearby Royal Splendor", icon: Landmark },
  { name: "Kishangarh Fort", tag: "Heritage Proximity", icon: ShieldCheck },
  { name: "Bravia Hotel", tag: "Modern Corporate Banquet", icon: Building2 },
  { name: "Pushkar Border Resorts", tag: "Corridor Destination", icon: MapPin },
];

const VS = [
  { problem: "Using cheap, loud humor that ruins the elegance of a Pratap Palace (Taj) event", fix: "Taj-standard hosting — refined, impeccably bilingual, and deeply elegant" },
  { problem: "Ignoring Ajmer's syncretic culture and pushing a one-dimensional Royal Rajput theme", fix: "Culturally intelligent anchoring that reads and honors the family's exact heritage" },
  { problem: "Losing the crowd during outdoor Sangeets near the windy Ana Sagar Lake", fix: "Mastery of open-air acoustic projection and crowd-condensing psychology" },
  { problem: "Failing to bridge the gap between VIP guests/elders and younger NRI friends", fix: "Seamless code-switching between formal Hindi respect and metropolitan English" },
  { problem: "Over-reading scripts during complex corporate or felicitation galas", fix: "100% unscripted flow—maintaining direct eye contact and instant crowd control" },
  { problem: "Unable to adapt when an event transitions from Ajmer to Pushkar venues", fix: "Complete regional fluency, adapting energy to match the specific city vibe" },
];

const TESTIMONIALS = [
  {
    name: "Bansal Family",
    quote: "Choosing Pratap Palace meant we needed someone who matched the Taj standard. We were terrified of getting a loud 'typical' wedding MC. Yash was a revelation. His hosting was flawless—combining perfect poise during the formal ceremonies with unscripted celebration that got both sides of our international family fully invested.",
    event: "Heritage Wedding · Pratap Palace · 350 guests"
  },
  {
    name: "Qureshi Family",
    quote: "Bilingual, sophisticated, and deeply aware of our traditions. Yash hosted our massive reception near Ana Sagar with incredible dignity and warmth. He knew exactly when to command the room and when to let the family moments breathe. Absolutely world-class.",
    event: "Grand Reception · Ana Sagar Resort · 500 guests"
  },
  {
    name: "Secretary — State Medical Association",
    quote: "Our annual medical conference in Ajmer needed an anchor who could manage the felicitation of 60 senior doctors without a single hiccup, and then turn the evening into a lively gala. Yash executed both halves of the day flawlessly. Unbelievable memory, zero scripts, total control.",
    event: "Corporate Summit · Mansingh Palace · 400 Delegates"
  },
];

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Ajmer?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events, specialising in Ajmer and Pushkar's unique destination wedding circuit — including premium resorts and heritage properties. Bilingual Hindi/English, completely unscripted, and experienced in managing large-scale destination events for NRI and traditional Indian families." },
  { q: "How do you manage events in Ajmer given its proximity to Pushkar?", a: "Ajmer and Pushkar often operate as a combined destination wedding hub. While Pushkar venues focus on lakeside heritage, Ajmer venues often accommodate larger capacities with a blend of modern luxury and tradition. The hosting style adapts seamlessly between the spiritual depth required for a Pushkar ceremony and the high-energy luxury needed for an Ajmer reception." },
  { q: "Can you host bilingual events for NRI families in Ajmer?", a: "Yes. Destination weddings in Ajmer frequently attract NRI families. Bilingual hosting is critical here — sophisticated English for the international guests and respectful, culturally rich Hindi for the local relatives. This ensures every guest feels completely connected to the celebration." },
  { q: "Do you anchor corporate events in Ajmer?", a: "Corporate events, dealer meets, and annual galas at Ajmer's premium hotels are a strong specialisation. The corporate hosting register is sharp, brand-aligned, and professional, distinctly different from a wedding tone." },
  { q: "How far in advance should I book for an Ajmer wedding?", a: "Ajmer's peak season aligns with the general Rajasthan wedding season (October–March). Premium properties and top anchors book out 6–8 months ahead. Secure your dates via WhatsApp as soon as your venue is confirmed." },
  { q: "Who is the best emcee or host in Ajmer for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Ajmer destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies across all Ajmer venues." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Ajmer?", a: "Anchor, emcee, host, and MC refer to the same professional role leading the event. While event planners may say 'emcee' and traditional families say 'anchor', the skill set — managing transitions, commanding the room, and engaging the crowd — remains identical." },
];



export default function AjmerPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="relative w-full h-full"><Image src="/backgrounds/pushkar_bg.webp" alt="Best Anchor in Ajmer — Premium Heritage Destination" fill priority sizes="100vw" className="object-cover slow-zoom" quality={75} /></div>
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
              <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Ajmer · Heart of Rajasthan</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[8rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/ajmer.webp')" }}
              >
                AJMER
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Pratap Palace luxury weddings</G>, Ana Sagar Sangeets, and bilingual elite celebrations in Central Rajasthan.
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
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has redefined what elite hosting looks like in Central Rajasthan.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Whether commanding a Taj-standard reception at <strong className="text-[#B5952F]">Pratap Palace</strong> or electrifying an open-air Sangeet beside Ana Sagar lake, Yash brings an unmatched level of bilingual polish and unscripted authority.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                Ajmer requires a profound understanding of syncretic heritage. It is a city where deep spiritual roots meet spectacular palatial luxury. Yash bridges this dynamic flawlessly—delivering the formal elegance expected by NRI and HNI families while retaining the authentic cultural heartbeat of India’s most welcoming city.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Ajmer" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" quality={75} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. AJMER IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Ajmer is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              Central Rajasthan Demands<br />a <G>Syncretic Voice.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              Unlike the strict Rajputana formalism of Udaipur or Jodhpur, Ajmer is defined by its inclusive, syncretic history. It is a cultural melting pot serving as the gateway to Pushkar. Therefore, an event here should never feel rigid. It requires a host who understands how to blend premium Taj-property elegance with warm, expansive, culturally intelligent celebration.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {AJMER_IDENTITY.map((item, i) => (
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
                Taj Palaces to<br /><G>Lakeside Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Ajmer's Best. <G>Known From Inside.</G></h2>
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
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Ajmer Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              NRI Polish.<br /><G>Secular Warmth.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Because of Ajmer’s connectivity and its proximity to Kishangarh limits and Pushkar, it attracts vastly diverse guest lists. An NRI family flying down from Dubai might book Pratap Palace and demand absolute linguistic precision and time-management. The anchor has to be their immaculate ambassador on the microphone.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Simultaneously, the vast outdoor lawns by Ana Sagar lake host some of the most massive local Marwari and community weddings. Here, extreme crowd psychology and traditional linguistic markers are required to engage the elders. Operating successfully in Ajmer means never being a one-trick pony; you must be as capable in a Taj boardroom as you are commanding 1,000 guests under the desert stars.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Ajmer fluency—mastering the Taj protocol, managing lake-side acoustics, and providing elite bilingual flow—is not a skill that can be faked.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Taj Standard Polish", sub: "Flawless bilingual execution" },
                { label: "Lake-Side Acoustics", sub: "Defeating wind & open space" },
                { label: "Corridor Logistics", sub: "Seamless Ajmer-Pushkar transition" },
                { label: "Syncretic Awareness", sub: "Deep local cultural respect" },
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
              {["/gallery-1.webp","/gallery-3.webp","/gallery-5.webp","/gallery-2.webp","/gallery-4.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Ajmer Pratap Palace event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" quality={75} />
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
              <Image src="/backgrounds/pushkar_bg.webp" alt="Ajmer Destination Wedding" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" quality={75} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 /60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#B5952F] text-[9px] font-bold uppercase tracking-widest mb-1">Ajmer · The Central Hub</p>
                <p className="text-white text-xs">Scaling seamlessly from hyper-exclusive 80-guest royal functions to massive 1,500-guest lake-front receptions.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#B5952F] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Grand Receptions.<br /><G>Royal Banquets.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Ajmer events swing wildly in scale. One day you are ensuring an impeccably timed entrance for a VIP function at Pratap Palace; the next, you are controlling a booming Sangeet crowd across a massive garden near Ana Sagar. This isn't just about vocal projection—it is about possessing enough stage presence that 1,000 moving people stop and focus whenever you take the mic.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#B5952F]" /> The "Taj Standard" Guarantee
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Premium properties in Ajmer demand anchors who do not ruin the aesthetic with cheap commentary or poor time-management. Yash delivers an unscripted, executive-level performance that aligns perfectly with the multi-million rupee investment the family has made in the venue itself.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Ajmer Events.</G></h2>
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
                Whatever You Call It —{" "}<G>Ajmer's Best.</G>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mt-5 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you search for a wedding anchor, corporate emcee, event host, or MC in Ajmer —
                it is the same role, the same skill set, and the same name: Anchor Yash Soni.
              </p>
            </div>
          </Reveal>

          {/* Keyword service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                label: "Wedding Emcee · Wedding Host",
                title: "Best Wedding Anchor in Ajmer",
                desc: "Ceremonies, Varmala, Baraat entry, Bidaai — every wedding format hosted with cultural precision. The most reviewed wedding anchor and emcee in Ajmer.",
                keywords: ["best wedding anchor ajmer", "wedding emcee ajmer", "wedding host ajmer", "wedding mc ajmer"],
              },
              {
                label: "Sangeet Host · Sangeet MC",
                title: "Best Sangeet Emcee in Ajmer",
                desc: "High-energy Sangeet nights, unscripted crowd games, 500–1,500 guests. Dance floors packed until 4 AM. Ajmer's top-rated Sangeet emcee.",
                keywords: ["best sangeet emcee ajmer", "sangeet anchor ajmer", "sangeet host ajmer"],
              },
              {
                label: "Corporate Host · Corporate MC",
                title: "Best Corporate Emcee in Ajmer",
                desc: "Award nights, product launches, annual galas at premium properties. Sharp, bilingual, brand-aligned corporate MC hosting.",
                keywords: ["best corporate emcee ajmer", "corporate anchor ajmer", "corporate mc ajmer", "corporate host ajmer"],
              },
              {
                label: "Best MC · Best Host · Best Emcee",
                title: "Best Emcee in Ajmer",
                desc: "4.9★ across 200+ verified reviews. 1,100+ events. The most reviewed event professional in Ajmer — by any name.",
                keywords: ["best emcee in ajmer", "best anchor in ajmer", "best host in ajmer", "best mc ajmer"],
              },
              {
                label: "Bilingual Emcee · International Host",
                title: "NRI Wedding Host in Ajmer",
                desc: "Polished English for international guests, sophisticated Hindi for the family. Code-switching live and unscripted — making every guest feel at home.",
                keywords: ["nri wedding host ajmer", "english speaking anchor ajmer", "bilingual emcee ajmer"],
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
                  "Best Anchor in Ajmer", "Best Emcee in Ajmer", "Best Host in Ajmer",
                  "Wedding Anchor Ajmer", "Wedding Emcee Ajmer", "Wedding Host Ajmer",
                  "Corporate Anchor Ajmer", "Corporate Emcee Ajmer", "Corporate MC Ajmer",
                  "Best Anchor in Rajasthan", "Best Emcee in Rajasthan",
                  "Sangeet Anchor Ajmer", "Sangeet Emcee Ajmer", "Sangeet Host Ajmer",
                  "Haldi Anchor Ajmer", "Mehendi Host Ajmer",
                  "Birthday Anchor Ajmer", "Birthday Emcee Ajmer",
                  "Master of Ceremonies Ajmer", "MC for Wedding Ajmer",
                  "NRI Wedding Emcee Ajmer", "Bilingual Host Ajmer",
                  "Top Anchor Ajmer", "Top Emcee Ajmer", "Event Host Ajmer",
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
              {["Pratap Palace Taj","Mansingh Palace","Ana Sagar Lake","NRI Wedding Specialist","Bilingual English/Hindi","Ajmer-Pushkar Gateway","High-Net-Worth Ready","4.9★ Rated","Corporate Summits"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Ajmer <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-ajmer-${idx}`} />
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
              { icon: MapPin, label: "Pushkar", href: "/anchor-in-pushkar", desc: "Holy City · 30 mins away" },
              { icon: MapPin, label: "Jaipur", href: "/anchor-in-jaipur", desc: "Pink City · 2 hrs away" },
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Marwar" },
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · Luxury" },
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
              Your Palace Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Ajmer experiences massive overlap between premium destination weddings and large-scale medical/corporate conferences. Elite hosts are locked in months in advance.
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
              { label: "Anchor in Pushkar", href: "/anchor-in-pushkar" },
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#B5952F] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · AJMER, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
