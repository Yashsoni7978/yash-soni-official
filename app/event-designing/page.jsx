"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Camera, CheckCircle2, Crown, Gem, Heart, Layers, Lightbulb, MapPin, MessageCircle, Minus, Music, Palette, Phone, Plus, Sparkles, Star, Wand2 } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG — brand-consistent, no pink
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20interested%20in%20luxury%20event%20designing%20in%20Jaipur.%20I%27d%20like%20to%20discuss%20a%20concept.";
const GOLD = "#D4AF37";
const GOLD_DARK = "#a8891a";
const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gold-shimmer{
    background:linear-gradient(120deg,#a8891a 0%,${GOLD} 35%,#f0d878 55%,${GOLD} 75%,#a8891a 100%);
    background-size:300% auto;animation:shimmer 4s linear infinite;
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  }
`;
// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage:"linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
);
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity:0, y:28 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:"-60px" }}
    transition={{ duration:.75, delay, ease:[.22,1,.36,1] }}
    className={className}
  >
    {children}
  </motion.div>
);
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity:0, y:20 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Crown className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
// Fixed: real credibility stats, not vague claims
const STATS = [
  { val: "1100+", label: "Events Hosted",         sub: "Anchoring & production" },
  { val: "4.9★",  label: "Client Rating",         sub: "200+ verified reviews"  },
  { val: "100%",  label: "Bespoke Concepts",       sub: "No warehouse recycling" },
  { val: "3D",    label: "Every Design Previewed", sub: "Before fabrication"     },
];
const SERVICES = [
  {
    icon: Palette,
    title: "Bespoke Moodboarding",
    desc: "Curating a sensory journey with royal textures, gold finishes, and palatial colour palettes. No recycled ideas — every mood board is built from scratch for your specific persona and venue.",
    tags: ["Custom Concepts", "Palette Curation"],
  },
  {
    icon: Camera,
    title: "3D Spatial Visualization",
    desc: "Walk through your wedding mandap in ultra-realistic 3D before a single fabric is draped. Visual precision that eliminates expensive guesswork and aligns vision with reality.",
    tags: ["3D Renders", "Pre-Visualisation"],
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: "Cinematic Lighting Design",
    desc: "Architectural lighting designed specifically to make jewellery and haute couture attire shine on camera. Every angle is lit for the photographer and the cinematographer.",
    tags: ["Architectural Lighting", "Camera-Ready"],
  },
  {
    icon: Gem,
    title: "Artistic Curation",
    desc: "Sourcing hand-picked crystal chandeliers, antique silver, and exotic global florals for a museum-grade finish. Rambagh Palace, Fairmont, and Leela — each venue has been worked with extensively.",
    tags: ["Palace Venues", "Global Florals"],
  },
];
const THEMES = [
  {
    title: "The Royal Rajputana",
    desc: "Velvet drapes, antique gold accents, and heritage structures fit for Rambagh Palace. Rajputana grandeur with contemporary precision.",
    img: "/gallery-5.webp",
    alt: "Royal Rajputana wedding decor theme Jaipur palace",
  },
  {
    title: "Diamond & Crystal",
    desc: "A modern wonderland of glass, mirrors, and cascading crystals. The theme that photographs best under Jaipur's palace floodlights.",
    img: "/rose-petal-tree-background.webp",
    alt: "Diamond crystal wedding decor design Jaipur",
  },
  {
    title: "Enchanted Floral Garden",
    desc: "Lush imported florals in soft whites and champagne for an ethereal Sangeet or Mehendi. The mandap becomes a living sculpture.",
    img: "/white-flower-mandap-jaipur.webp",
    alt: "White floral garden wedding design Jaipur mandap",
  },
];
const PROCESS = [
  { num: "01", title: "Vision Consultation",   desc: "We understand your aesthetic, your venue, and the visual story you want to tell. No templates — just your vision." },
  { num: "02", title: "Moodboard Creation",    desc: "A curated sensory board of textures, colour palettes, lighting moods, and floral references — unique to your event." },
  { num: "03", title: "3D Spatial Design",     desc: "Your event rendered in photorealistic 3D. Walk through the mandap, the entry, the stage — all before fabrication begins." },
  { num: "04", title: "Fabrication Oversight", desc: "Specialized artisans, carpenters, and lighting engineers briefed and supervised. Every inch built to match the render." },
  { num: "05", title: "On-Site Execution",     desc: "Hands-on presence through the entire setup. The final result is a flawless physical replica of the approved concept." },
];
const VENUES = [
  { name: "Rambagh Palace",  area: "Bhawani Singh Road" },
  { name: "Fairmont Jaipur", area: "Amer Road" },
  { name: "Leela Palace",    area: "Civil Lines" },
  { name: "City Palace",     area: "Old City, Jaipur" },
  { name: "Samode Palace",   area: "Samode, Jaipur" },
  { name: "Birla Auditorium",area: "Statue Circle" },
];
const TESTIMONIALS = [
  {
    name: "Singhania Family",
    quote: "The 3D visualization before the wedding was a revelation. We could see exactly where every floral arch, every chandelier, every lighting spot would fall — before a single nail went in the wall. The result was a perfect physical replica.",
    event: "Palace Wedding Design · Rambagh Palace, Jaipur",
  },
  {
    name: "Kapoor Family",
    quote: "Our Royal Rajputana theme was executed with a level of detail that honestly made us emotional on the day. The mandap looked like it had been built for a period film. Palace designing is their absolute specialty.",
    event: "Heritage Wedding Design · Fairmont Jaipur",
  },
  {
    name: "Mehta Family",
    quote: "The cinematic lighting alone justified the budget. Every photograph from the Sangeet looks like a magazine editorial. The team understood that lighting isn't just ambiance — it's the final design layer.",
    event: "Sangeet Stage Design · Leela Palace, Jaipur",
  },
];
const FAQS = [
  {
    q: "What is the best luxury event designer in Jaipur?",
    a: "Anchor Yash Soni's event designing service offers bespoke creative direction for palace weddings in Jaipur — including Rambagh Palace, Fairmont, Leela Palace, and City Palace. Every concept is built from scratch with a custom moodboard, 3D spatial visualization, cinematic lighting design, and on-site fabrication oversight.",
  },
  {
    q: "Why hire a designer instead of a standard decorator?",
    a: "Standard decorators provide what they already own in a warehouse. A designer creates what your story demands. We act as Creative Directors — building a one-of-a-kind moodboard and 3D concept unique to your persona and venue, then overseeing specialized fabricators to build it exactly as rendered.",
  },
  {
    q: "How does 3D visualization help my wedding budget?",
    a: "It eliminates expensive guesswork entirely. By seeing a photorealistic render before fabrication begins, you avoid costly last-minute changes on-site. Vision and reality are aligned before a single piece of fabric is purchased — which typically reduces budget overruns by a significant margin.",
  },
  {
    q: "Can you design for heritage palaces like Rambagh or City Palace?",
    a: "Palace designing is the core specialization. We have worked with Rambagh Palace, Fairmont Jaipur, Leela Palace, City Palace, and Samode Palace. Heritage architecture demands a different approach — adding modern royal elegance that complements centuries-old stonework rather than competing with it.",
  },
  {
    q: "What wedding venues in Jaipur do you design for?",
    a: "Every significant event venue in Jaipur has been worked with — Rambagh Palace, Fairmont, Leela Palace, City Palace, Samode Palace, Birla Auditorium, ITC Rajputana, and all major farmhouse properties on Ajmer Road. Each venue has its own structural constraints, lighting conditions, and logistical protocols that inform the design.",
  },
  {
    q: "Do you work with global floral designers?",
    a: "Yes. For premium packages, coordination with international florists to source the rarest exotic blooms for centerpieces, varmala, and entry passages is standard. Locally, Jaipur's finest floral artisans are engaged for the full mandap and ceremonial setups.",
  },
  {
    q: "How is the fabrication managed?",
    a: "Once the 3D design is approved, specialist artisans, carpenters, and lighting engineers are hired and directly overseen. On-site supervision continues through the entire setup until the venue matches the render exactly. Nothing is left to interpretation on the fabrication floor.",
  },
  {
    q: "How far in advance should we book event designing in Jaipur?",
    a: "For palace properties and peak season (October–February), 6–8 months in advance is recommended. The 3D concept and moodboard process alone takes 3–4 weeks — and fabrication for complex designs needs a minimum of 6–8 weeks lead time. Enquire the moment your venue is confirmed.",
  },
];
const RELATED = [
  { icon: Heart,    label: "Wedding Planning",  href: "/wedding-planning-jaipur",       desc: "Full-service planning" },
  { icon: Heart,    label: "Wedding Anchor",     href: "/wedding-anchor-jaipur",         desc: "Varmala & ceremony" },
  { icon: Music,    label: "Sangeet Host",       href: "/sangeet-anchor-jaipur",         desc: "Stage production" },
  { icon: Crown,    label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur",         desc: "All formats" },
];
// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all mt-0.5 ${
          isOpen ? "bg-[#D4AF37] text-black" : "border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={14} aria-hidden="true"/> : <Plus size={14} aria-hidden="true"/>}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div id={id} initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ─────────────────────────────────────────────
// FAQ SCHEMA
// ─────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function EventDesigning() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      {/* sr-only breadcrumb */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/wedding-planning-jaipur">Wedding Planner Jaipur</Link> ›
        <span>Event Designing Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10"/>
          {/* FIX: next/image replaces <img> */}
          <Image
            src="/gallery-5.webp"
            alt="Royal luxury event designing Jaipur palace wedding"
            fill priority quality={100}
            className="object-cover"
            sizes="100vw"
            style={{ filter:"grayscale(15%)" }}
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-10 text-center">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-5 py-2 rounded-full bg-black/40 backdrop-blur-xl mb-10">
              <Gem className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                Atmosphere · Elegance · Engineering
              </span>
            </div>
            {/* H1 — brand-consistent, no pink */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-8 uppercase tracking-tighter">
              Bespoke<br /><G>Visual Luxury.</G>
            </h1>
            <p className="text-zinc-200 text-base md:text-xl max-w-2xl mx-auto mb-5 font-light leading-relaxed">
              We don&apos;t decorate — we <span className="text-[#D4AF37] font-semibold italic">engineer dreams</span>. 3D architectural renders, cinematic lighting, and palace-grade fabrication for Jaipur&apos;s most discerning families.
            </p>
            <p className="text-zinc-500 text-sm mb-10">
              Rambagh Palace · Fairmont Jaipur · Leela Palace · Amer Road
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA — WhatsApp */}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] active:scale-95">
                  Begin Designing →
                </button>
              </a>
              <Link href="/wedding-planning-jaipur" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                  Wedding Planning →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. STATS — real numbers, no vague claims
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-[#D4AF37]/15">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3 border-r border-white/5 last:border-r-0">
                  <div className="text-4xl md:text-5xl font-black mb-1 gold-shimmer">{s.val}</div>
                  <div className="text-zinc-300 text-[11px] uppercase tracking-widest font-semibold mb-1">{s.label}</div>
                  <div className="text-zinc-600 text-[9px] uppercase tracking-wider">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. PHILOSOPHY — keyword-rich body text
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <SectionHeading subtitle="The Standard" title="The Creative Director Approach." />
            <div className="space-y-5 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              <p>
                Most decorators sell you what they already own in a warehouse. We design what your story demands — building a concept unique to your persona, your venue, and the visual legacy you want to leave.
              </p>
              <p>
                The studio acts as the <strong className="text-[#D4AF37]">Creative Direction</strong> arm for your wedding. Every project starts with a bespoke moodboard and a 3D spatial concept. Once the aesthetic is locked, we oversee specialized fabricators — artisans, carpenters, and lighting engineers — to ensure the physical build is a flawless replica of the approved render.
              </p>
              <p className="border-l-2 border-[#D4AF37]/40 pl-5 text-zinc-500 italic">
                Every design is optimized for premium wedding cinematography. We control the lighting, the floral textures, and the spatial flow — so your photographs look like a royal editorial, not an event.
              </p>
              <p>
                Palace venues across Jaipur — <strong className="text-zinc-200">Rambagh Palace, Fairmont, Leela Palace, City Palace, Samode Palace</strong> — have each been worked with extensively. Heritage architecture demands a different design vocabulary: adding modern grandeur that complements centuries-old stonework rather than competing with it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20 group">
              {/* FIX: next/image replaces <img> */}
              <Image
                src="/white-flower-mandap-jaipur.webp"
                alt="Luxury wedding stage design Jaipur mandap"
                fill quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-1">3D Designed · Palace-Grade Fabrication</p>
                <p className="text-white text-xs">Every concept previewed in 3D before a single nail is placed.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. SERVICES — 4 cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The Toolkit" title="Design Infrastructure." align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`p-7 rounded-2xl border transition-all duration-400 group hover:-translate-y-1 h-full ${
                  s.highlight
                    ? "bg-zinc-900 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                    : "bg-[#0a0a0a] border-white/8 hover:border-[#D4AF37]/30"
                }`}>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-400">
                    <s.icon className="w-7 h-7"/>
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-widest bg-[#D4AF37]/10 px-2.5 py-1 rounded-full text-[#D4AF37] border border-[#D4AF37]/15">{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. SIGNATURE THEMES
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Aesthetics" title="Signature Collections." align="center" />
          <div className="grid md:grid-cols-3 gap-5">
            {THEMES.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-colors duration-400">
                  {/* FIX: next/image replaces <img> */}
                  <Image
                    src={t.img}
                    alt={t.alt}
                    fill quality={100}
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">{t.title}</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed font-light">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. GALLERY — next/image, all available images
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The Canvas" title="Masterpieces." align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[300px] md:h-[500px]">
            {[
              { src:"/gallery-4.webp",                  alt:"Royal wedding design Jaipur",        span:"col-span-2 row-span-2" },
              { src:"/gallery-2.webp",                  alt:"Luxury event design Jaipur palace" },
              { src:"/gallery-3.webp",                  alt:"Wedding decor design Jaipur" },
              { src:"/vintage-car-couple-shoot.webp",   alt:"Couple wedding photography design",   span:"col-span-2 md:col-span-1" },
              { src:"/gallery-1.webp",                  alt:"Floral wedding design stage Jaipur" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`relative group overflow-hidden rounded-2xl border border-white/8 hover:border-[#D4AF37]/40 transition-all ${img.span || ""}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill quality={100}
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-600"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. PROCESS — 5 steps
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Methodology" title="From Concept to Reality." align="center" />
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="bg-zinc-900/50 border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl p-6 transition-all group h-full">
                  <p className="text-4xl font-black text-[#D4AF37]/20 mb-3 group-hover:text-[#D4AF37]/40 transition-colors">{p.num}</p>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{p.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. VENUE EXPERTISE — SEO keywords
      ══════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black">Palace Venues Across <G>Jaipur.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border border-white/10 hover:border-[#D4AF37]/40 transition-all rounded-xl p-4 text-center group bg-zinc-900/20">
                  <MapPin size={12} className="text-[#D4AF37] mx-auto mb-2"/>
                  <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{v.name}</p>
                  <p className="text-zinc-600 text-[9px] mt-1">{v.area}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          9. TESTIMONIALS — NEW section
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Clients Say." align="center" />
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group cursor-pointer">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_,j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]"/>)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-xs group-hover:text-[#D4AF37] transition-colors">— {t.name}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{t.event}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. FAQ + CONSULTATION SIDEBAR
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16">
            {/* FAQs */}
            <div className="lg:col-span-7">
              <SectionHeading subtitle="Design FAQs" title="Common Inquiries."/>
              <div className="flex flex-col gap-3">
                {FAQS.map((faq, idx) => (
                  <Reveal key={idx} delay={idx * 0.025}>
                    <FAQItem question={faq.q} answer={faq.a} id={`faq-design-${idx}`}/>
                  </Reveal>
                ))}
              </div>
            </div>
            {/* Sticky sidebar */}
            <aside className="lg:col-span-5">
              <div className="sticky top-32 bg-[#0a0a0a] border border-[#D4AF37]/25 rounded-2xl p-8 space-y-7 shadow-[0_0_40px_rgba(212,175,55,0.06)]">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-snug">
                  Design<br /><G>Consultation.</G>
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Have a palace or a theme in mind? Let&apos;s build a moodboard and visualize your event in 3D before you spend a single rupee on fabrication.
                </p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] border border-white/10 group-hover:border-[#D4AF37] transition-all">
                      <Phone className="w-4 h-4"/>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">VIP Line</p>
                      <a href="tel:+917737877978" className="font-bold text-white text-base hover:text-[#D4AF37] transition-colors">+91 77378 77978</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] border border-white/10">
                      <MapPin className="w-4 h-4"/>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">Studio</p>
                      <p className="font-bold text-white text-base">Jaipur, Rajasthan</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  {/* WhatsApp primary */}
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all flex items-center justify-center gap-2">
                      <MessageCircle size={16}/> WhatsApp Direct
                    </button>
                  </a>
                  <Link href="/contact" className="block">
                    <button className="w-full py-4 border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-sm uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center gap-2">
                      <Wand2 size={16}/> Start Project
                    </button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          11. RELATED — internal links
      ══════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold">Design is One Part. <G>We Cover Everything.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={r.href}>
                  <div className="border border-white/10 rounded-2xl p-5 text-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                    <r.icon size={18} className="text-[#D4AF37] mx-auto mb-2"/>
                    <p className="text-white text-sm font-semibold group-hover:text-[#D4AF37] transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[10px] mt-1">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          12. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 bg-black text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_65%)] pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[20vw] text-white/[0.02] leading-none whitespace-nowrap uppercase">DESIGN</span>
        </div>
        <div className="container mx-auto px-5 relative z-10 max-w-xl">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white leading-[0.9]">
              Dream It. <G>Design It.</G>
            </h2>
            <p className="text-[#D4AF37] text-base max-w-lg mx-auto mb-4 font-light italic">
              &ldquo;Stop settling for standard decor catalogs. Let&apos;s build something Jaipur has never seen.&rdquo;
            </p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp to begin the design conversation.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-14 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Book Design Session
              </button>
            </a>
            {/* Footer links */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/wedding-planning-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Planning</Link>
              <Link href="/wedding-anchor-jaipur"   className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
              <Link href="/destination-wedding-anchor" className="hover:text-[#D4AF37] transition-colors">Destination Wedding</Link>
              <Link href="/best-anchor-in-jaipur"   className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/contact"                 className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}