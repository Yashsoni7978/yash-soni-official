"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Globe, Heart, Instagram, MapPin, Mic2, Minus, MonitorPlay, Plus, Star, TrendingUp, Users, Youtube } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20corporate%20event%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability.";
const GOLD = "#D4AF37";
// Blue is the corporate identity accent — kept throughout
const BLUE = "#3b82f6";
const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-shimmer { background-size:200% auto; animation:shimmer 4s linear infinite; }
`;
// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center gold-shimmer ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
);
// Corporate blue accent — the page's personality color
const B = ({ children, className = "" }) => (
  <span className={`text-blue-400 ${className}`}>{children}</span>
);
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
// Fixed: subtitle = span (not p), title = h2 (not p)
const SectionHeading = ({ subtitle, title, align = "left", dark = false }) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        {align === "center" && <span className="w-8 h-px bg-blue-500" />}
        <span className="text-blue-400 text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
        <span className="w-8 h-px bg-blue-500" />
      </div>
      <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black leading-tight ${dark ? "text-black" : "text-white"}`}>
        {title}
      </h2>
    </motion.div>
  </div>
);
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
// Fixed: updated to match 1100+ sitewide numbers
const STATS = [
  { num: "1100+", label: "Total Events Hosted" },
  { num: "70+", label: "Corporate Brands" },
  { num: "4.9★", label: "Client Rating" },
  { num: "8+", label: "Years Experience" },
];
const FORMATS = [
  {
    icon: Award,
    title: "Award Nights",
    desc: "High-energy hosting through 50+ award categories without the audience ever losing interest. Every announcement is a moment, not a formality.",
  },
  {
    icon: TrendingUp,
    title: "Conferences & Summits",
    desc: "Formal, articulate, brand-aligned. Panel moderation, keynote introductions, Q&A management — all handled with the gravitas the room demands.",
  },
  {
    icon: Users,
    title: "Product Launches",
    desc: "Building the hype before the reveal. Working with light and sound teams to create a cinematic product moment that makes headlines.",
  },
  {
    icon: Mic2,
    title: "Gala Dinners",
    desc: "The perfect blend of formal authority and sharp wit. VIPs feel honoured, the table stays engaged, and the brand leaves an impression.",
  },
  {
    icon: Building2,
    title: "Dealer & Distributor Meets",
    desc: "Motivating your sales network. High-octane anchoring that leaves your partners feeling energised, valued, and loyal to the brand.",
  },
  {
    icon: Globe,
    title: "Team Building Events",
    desc: "Interactive activities that break silos. A group of colleagues becomes a cohesive team through intelligent, energetic engagement.",
  },
];
const VENUES = [
  {
    venue: "JECC Sitapura",
    type: "Large-Format Corporate Events",
    desc: "Jaipur's largest convention centre. National brand summits, government events, and industry galas. Yash has hosted events here for 1,000+ delegates.",
    keywords: ["Corporate anchor JECC Sitapura", "Anchor JECC Jaipur"],
  },
  {
    venue: "JLN Marg — Marriott & Fairmont",
    type: "5-Star Hotel Corporate Events",
    desc: "CEO dinners, brand launches, and international delegation events at Jaipur's luxury hotel corridor. Broadcast-ready precision.",
    keywords: ["Corporate anchor JLN Marg", "Anchor Marriott Jaipur"],
  },
  {
    venue: "Birla Auditorium",
    type: "Conferences & Cultural Events",
    desc: "Jaipur's premier auditorium. Academic conferences, national brand presentations, and large-scale award ceremonies.",
    keywords: ["Anchor Birla Auditorium Jaipur", "Conference host Jaipur"],
  },
  {
    venue: "Tonk Road & Malviya Nagar",
    type: "Corporate Campuses & Hubs",
    desc: "IT parks, corporate campuses, and business parks. Annual Day celebrations, townhalls, and employee engagement events.",
    keywords: ["Corporate anchor Tonk Road", "Anchor Malviya Nagar Jaipur"],
  },
];
const CAPABILITIES = [
  {
    title: "Brand Guardian",
    desc: "I represent your brand on stage. I dress the part, speak the language, and adhere strictly to your company tone and guidelines. The CEO never winces.",
  },
  {
    title: "Crisis Management",
    desc: "Mic failure? Keynote speaker late? I fill dead air seamlessly with intelligent engagement so the audience never notices a glitch. In 1,100+ events, not once.",
  },
  {
    title: "Audience Retention",
    desc: "Sharp wit and interactive segments keep energy high during long conferences. Your message doesn't just get delivered — it actually lands.",
  },
  {
    title: "Broadcast Ready",
    desc: "Televised events, livestreams, and recorded productions. Teleprompter-trained. Clean transitions. Zero on-air errors. The media team relaxes.",
  },
];
const PROCESS = [
  {
    step: "01",
    title: "The Briefing",
    desc: "We hop on a call. I understand your brand tone, audience profile, key messages, and the one thing you need the event to achieve.",
  },
  {
    step: "02",
    title: "Scripting & Flow",
    desc: "I help refine the run-of-show and prepare a script that balances information with engagement. No generic templates — custom every time.",
  },
  {
    step: "03",
    title: "The Sound Check",
    desc: "I arrive 2 hours early. Mic, lighting, stage entry, console team sync. Zero technical surprises on the day.",
  },
  {
    step: "04",
    title: "The Execution",
    desc: "I take the stage. Time managed, energy controlled, audience engaged. The result: you look exceptional and the brand wins.",
  },
];
const TESTIMONIALS = [
  {
    name: "Events Head, National Brand",
    quote: "Yash anchored our annual awards at JECC Sitapura for 1,200 delegates. He made 58 award categories feel like 58 distinct moments. Zero dead air, perfect timing, and the CEO specifically asked for his name for next year.",
    event: "Annual Awards Night · JECC Sitapura, Jaipur",
    guests: "1,200 delegates",
  },
  {
    name: "Marketing Director",
    quote: "Our product launch at the Marriott needed a presenter who could match the brand's premium positioning. Yash arrived with research, delivered clean transitions on a broadcast feed, and the product moment landed exactly as designed.",
    event: "Product Launch · JLN Marg, Jaipur",
    guests: "Live broadcast event",
  },
  {
    name: "HR Director, Corporate Group",
    quote: "Annual Day for 800 employees. Yash handled the awards, the performances, the CEO speech transitions, and the after-party MC role — all in one evening. Seamless.",
    event: "Annual Day · Corporate Campus, Jaipur",
    guests: "800 employees",
  },
];
const FAQS = [
  {
    q: "Who is the best corporate event anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated corporate event anchor with 1,100+ events hosted and 70+ national brands served. He specialises in award nights, conferences, product launches, gala dinners, dealer meets, and annual day celebrations at venues including JECC Sitapura, Birla Auditorium, Marriott Jaipur, Fairmont, and corporate campuses across Jaipur.",
  },
  {
    q: "Do you provide a GST invoice for corporate bookings?",
    a: "Yes. A fully compliant GST invoice is issued for every corporate booking. The booking process includes a formal agreement, advance confirmation, and complete documentation for your accounts team.",
  },
  {
    q: "Are you comfortable with teleprompters for televised events?",
    a: "Yes. For high-stakes summits, product launches, and broadcast-quality corporate productions, teleprompter work is standard. Reading naturally while maintaining full eye contact with a live audience — so it never looks scripted on camera — is a trained skill that comes from experience.",
  },
  {
    q: "Can you moderate panel discussions and Q&A sessions?",
    a: "Yes. Panel moderation includes pre-event research into each speaker's recent work and positions, preparation of insightful questions, and real-time management of audience Q&A. The discussion flows, stays on time, and the panellists feel respected.",
  },
  {
    q: "Do you travel for corporate events outside Jaipur?",
    a: "Yes. While Jaipur is the base, corporate events in Delhi, Mumbai, Bangalore, and other cities are a regular part of the calendar. A significant portion of corporate work happens outside Rajasthan. Travel and accommodation are typically arranged by the client as part of the engagement terms.",
  },
  {
    q: "How do you handle audience engagement in long conferences?",
    a: "Long conferences lose audiences in the gaps between sessions. The craft is in managing those transitions — using sharp wit, brief interactive moments, and energy pivots at exactly the right points. The audience stays present and your message gets through. This is what 70+ corporate brands have paid for.",
  },
  {
    q: "Can you anchor both the formal ceremony and the gala dinner afterparty?",
    a: "Yes. Shifting from formal award ceremony to high-energy gala entertainment in the same evening — without the room noticing the gear change — is a core corporate skill. Both registers are mastered.",
  },
  {
    q: "What is your approach to brand alignment on stage?",
    a: "I read the brand brief before every event. Tone of voice, prohibited language, key messages to reinforce, and the exact persona the brand wants on stage. I dress the part, speak the part, and never deviate from the brand's positioning. No freelancing.",
  },
  {
    q: "How far in advance should corporate events be booked?",
    a: "For large-format corporate events at JECC Sitapura and five-star venues, 3–4 months in advance is recommended during peak season. Annual Day events and Q4 award nights book even faster. Reach out via WhatsApp as soon as the venue is confirmed.",
  },
  {
    q: "What sets Anchor Yash apart from other corporate anchors in Jaipur?",
    a: "Three things: First, 70+ national brands served — the experience shows. Second, completely unscripted crisis management — PA failures, delayed speakers, schedule overruns all handled invisible to the audience. Third, broadcast-ready precision — for events that are recorded or livestreamed, there are zero on-air errors.",
  },
];
const RELATED = [
  { icon: Award, label: "Celebrity Events", href: "/celebrity-public-events-host", desc: "Launches & public events" },
  { icon: Users, label: "Team Building", href: "/team-building-host", desc: "Employee engagement" },
  { icon: Heart, label: "Wedding Anchor", href: "/wedding-anchor-jaipur", desc: "Luxury weddings" },
  { icon: Star, label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur", desc: "All event formats" },
];
// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen ? "border-blue-500/60 bg-blue-500/5" : "border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${
          isOpen ? "text-blue-400" : "text-zinc-200 group-hover:text-white"
        }`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 mt-0.5 ${
          isOpen ? "bg-blue-500 text-white" : "border border-white/30 text-white group-hover:border-blue-500 group-hover:text-blue-400"
        }`}>
          {isOpen ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-blue-500/20 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function CorporateAnchor() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    // selection: gold brand color, not blue
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* BREADCRUMB — sr-only */}
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Corporate Event Anchor Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO — blue theme preserved
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-blue-900/10 z-10" />
          {/* FIX: next/image replaces <img> */}
          <Image
            src="/service-corporate.webp"
            alt="Best corporate event anchor in Jaipur — Anchor Yash Soni on stage"
            fill priority
            className="object-cover opacity-50 grayscale"
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-10">
          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 border border-blue-500/40 px-5 py-2 rounded-full bg-blue-900/20 backdrop-blur-md mb-8">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-blue-300 text-[10px] uppercase tracking-widest font-bold">
                  4.9★ · Best Corporate Anchor in Jaipur
                </span>
              </div>
              {/* H1 — primary keyword */}
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight uppercase">
                Command<br /><B>The Room.</B>
              </h1>
              <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-3 border-l-4 border-blue-600 pl-6">
                When the CEO speaks, the audience should listen. Jaipur&apos;s most reviewed corporate anchor — award nights at JECC Sitapura, summits at Birla Auditorium, product launches at Marriott and Fairmont.
              </p>
              <p className="text-zinc-600 text-sm mb-8 pl-6">
                70+ national brands &nbsp;·&nbsp; 4.9★ across 200+ reviews &nbsp;·&nbsp; Broadcast-ready
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-95">
                    Book Now →
                  </button>
                </Link>
                <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-10 py-4 border border-blue-500/40 text-blue-300 text-sm font-medium rounded-full hover:bg-blue-900/20 transition-all flex items-center justify-center gap-2">
                    <Youtube className="w-4 h-4" /> Watch Reel
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. STATS — updated to real numbers
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3">
                  <div className="text-4xl md:text-5xl font-black mb-1 text-blue-400">{s.num}</div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. WHY YASH — capabilities + photo
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <SectionHeading subtitle="The ROI" title="Precision. Authority. Engagement." />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              Corporate events are not about &ldquo;shouting into a mic.&rdquo; They are about <strong className="text-white">brand representation</strong>. Every word, every pause, every transition on that stage either strengthens or weakens your brand&apos;s perception with the room. That responsibility has been handled for <strong className="text-white">70+ national brands</strong> across India.
            </p>
            <div className="space-y-6">
              {CAPABILITIES.map((c, i) => (
                <div key={i} className="flex gap-4 group">
                  <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">{c.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Stats grid — kept from original */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="bg-zinc-900/50 p-6 rounded-xl border border-white/8 text-center hover:border-blue-500/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">{s.num}</div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. VIDEO SHOWREEL — next/image fix
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Watch The Reel" title="In Action." align="center" />
          <div className="relative aspect-video w-full max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden border border-white/8 shadow-2xl group cursor-pointer hover:border-blue-500/40 transition-colors duration-400">
            {/* FIX: next/image replaces <img> */}
            <Image
              src="/gallery-5.webp"
              alt="Anchor Yash Soni corporate event showreel Jaipur"
              fill
              className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-500"
              sizes="(max-width:1024px) 100vw, 896px"
            />
            <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <MonitorPlay className="w-8 h-8 text-white fill-current" />
              </div>
            </a>
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <p className="text-white font-bold text-lg md:text-xl">Corporate Showreel 2025</p>
              <p className="text-blue-400 text-[10px] uppercase tracking-widest mt-1">Award Nights · Summits · Launches</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
            <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
              <Youtube size={16} /> Watch on YouTube
            </a>
            <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
              <Instagram size={16} /> View on Instagram
            </a>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. FORMATS — 6 cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Capabilities" title="Corporate Formats I Master." align="center" />
          <div className="grid md:grid-cols-3 gap-5">
            {FORMATS.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="bg-[#0a0a0a] border border-white/8 p-7 rounded-2xl hover:border-blue-500/40 transition-all group hover:-translate-y-1 duration-300 h-full">
                  <div className="mb-5 bg-zinc-900 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-blue-900/20 transition-colors">
                    <f.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 group-hover:text-blue-400 transition-colors">{f.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. VENUE COVERAGE — NEW SEO section
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Jaipur Corporate Venues" title="Corporate Anchor Across All Jaipur Hubs." align="center" />
          <p className="text-center text-zinc-500 max-w-xl mx-auto -mt-8 mb-12 text-sm leading-relaxed">
            Every venue has its own acoustics, protocol, and technical setup. Knowing them before you arrive is the difference between competent and commanding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all group bg-zinc-900/20 hover:bg-zinc-900/50">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-blue-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">{v.type}</p>
                      <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{v.venue}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed ml-6 mb-3">{v.desc}</p>
                  <div className="flex flex-wrap gap-1.5 ml-6">
                    {v.keywords.map((kw, j) => (
                      <span key={j} className="text-[9px] text-zinc-700 border border-zinc-800 px-2 py-0.5 rounded-full">{kw}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-7">
            <Link href="/anchor-in-jaipur" className="inline-flex items-center gap-2 text-blue-400 text-xs uppercase tracking-widest border-b border-blue-400/40 pb-0.5 hover:text-white transition-colors">
              See Complete Jaipur Coverage <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. PROCESS TIMELINE — kept + upgraded
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Workflow" title="From Brief to Applause." align="center" />
          <div className="mt-10 relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/8 -translate-x-1/2 hidden md:block" />
            {PROCESS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 relative ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Blue dot */}
                  <div className="absolute left-1/2 top-8 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 hidden md:block" />
                  <div className={`w-full md:w-1/2 p-7 bg-zinc-900/50 border border-white/8 rounded-2xl hover:border-blue-500/30 transition-colors ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-4xl font-black text-blue-900 mb-3 block">{p.step}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. TESTIMONIALS — NEW section
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Corporate Clients Say." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group cursor-pointer">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} fill={GOLD} className="text-[#B5952F]" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-xs group-hover:text-blue-400 transition-colors">— {t.name}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{t.event}</p>
                    <p className="text-blue-400 text-[10px] uppercase tracking-wider mt-0.5">{t.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          9. FAQ — 10 questions
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Vendor Questions" title="Corporate Anchor Jaipur — FAQ." align="center" />
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-corp-${idx}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. RELATED SERVICES — internal links
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-blue-400 text-[10px] uppercase tracking-widest mb-2 font-bold">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">One Anchor. <B>Every Format.</B></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={r.href}>
                  <div className="border border-white/10 rounded-2xl p-5 text-center hover:border-blue-500/40 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50">
                    <r.icon size={18} className="text-blue-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[10px] mt-1">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          11. SCARCITY CTA — blue accent kept
          but dark base instead of solid blue bg
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-10 relative overflow-hidden">
        {/* Kept the blue glow but on dark base — not solid blue background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.025] leading-none whitespace-nowrap">CORPORATE</span>
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-blue-400 text-[10px] uppercase tracking-widest mb-6 font-bold">Book the Corporate Anchor</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight uppercase">
              Ready to <B>Elevate</B><br />Your Event?
            </h2>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Don&apos;t risk your brand reputation with an amateur. Jaipur&apos;s most reviewed corporate anchor — <strong className="text-blue-400">70+ national brands</strong> have made that call.
            </p>
            <p className="text-zinc-600 text-xs mb-8">No waitlist. No replacements. WhatsApp to confirm availability.</p>
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(59,130,246,0.15)] active:scale-95">
                <CalendarCheck size={16} /> Check Availability
              </button>
            </Link>
            {/* Footer links */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/anchor-in-jaipur" className="hover:text-blue-400 transition-colors">Best Anchor Jaipur</Link>
              <Link href="/celebrity-public-events-host" className="hover:text-blue-400 transition-colors">Celebrity Events</Link>
              <Link href="/team-building-host" className="hover:text-blue-400 transition-colors">Team Building</Link>
              <Link href="/wedding-anchor-jaipur" className="hover:text-blue-400 transition-colors">Wedding Anchor</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-blue-400 transition-colors">Anchor Jaipur</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}