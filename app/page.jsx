"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, CalendarCheck, CheckCircle2, MapPin, Mic, Minus, Play, Plus, Quote, ShieldCheck, Sparkles, Star, UserCheck, Users } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const GOLD = "#D4AF37";
const WA_LINK = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20found%20your%20website%20and%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";
const style = `
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .sparkle-text { background-size: 200% auto; animation: shimmer 4s linear infinite; }
  @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
  @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
  @keyframes marquee-slow { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 45s linear infinite; }
  .animate-marquee-reverse { animation: marquee-reverse 45s linear infinite; }
  .animate-marquee-slow { animation: marquee-slow 60s linear infinite; }
  .mask-fade {
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  }
`;
// ─────────────────────────────────────────────
// ANIMATION
// ─────────────────────────────────────────────
const revealUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};
const ScrollReveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={revealUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);
// ─────────────────────────────────────────────
// GOLD TEXT
// ─────────────────────────────────────────────
const GoldText = ({ children, animate = false, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${animate ? "sparkle-text" : ""} ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
);
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { value: "1100+", label: "Events Anchored", sub: "Across India", icon: Mic },
  { value: "10,000+", label: "Largest Crowd", sub: "Commanded live", icon: Users },
  { value: "8+", label: "Years on Stage", sub: "Zero scripts", icon: Award },
  { value: "4.9★", label: "Rated by Clients", sub: "200+ reviews", icon: UserCheck },
];
const SERVICES = [
  {
    title: "Wedding Anchor",
    desc: "From the emotional Varmala to a chaotic Baraat — every ritual with cultural precision. NRI families, palace venues, and farmhouse lawns handled flawlessly.",
    img: "/service-wedding.webp",
    href: "/wedding-anchor-jaipur",
    tag: "Weddings",
  },
  {
    title: "Corporate Events",
    desc: "Award nights, product launches, and business summits. Sharp, unscripted, and matching the gravitas of your brand and keynote speakers.",
    img: "/service-corporate.webp",
    href: "/corporate-event-anchor-jaipur",
    tag: "Corporate",
  },
  {
    title: "Sangeet Host",
    desc: "The dance floor doesn't just stay alive — it stays packed. Unscripted crowd games, high-energy transitions, complete command of 500 to 1,500 guests.",
    img: "/service-fashion.webp",
    href: "/sangeet-anchor-jaipur",
    tag: "Sangeet",
  },
];
const SERVICE_PILLS = [
  { label: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
  { label: "Sangeet Host", href: "/sangeet-anchor-jaipur" },
  { label: "Corporate emcee", href: "/corporate-event-anchor-jaipur" },
  { label: "Goa & Mumbai", href: "/anchor-in-goa" },
  { label: "Delhi NCR", href: "/anchor-in-delhi" },
  { label: "Udaipur & Jodhpur", href: "/anchor-in-rajasthan" },
  { label: "Destination Weddings", href: "/destination-wedding-anchor" },
];
const PLATFORMS = [
  { name: "WedMeGood", link: "https://www.wedmegood.com/profile/anchor-yash-25628297", color: "hover:text-[#DE5D83]" },
  { name: "WeddingWire", link: "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166", color: "hover:text-[#1467B0]" },
  { name: "Justdial", link: "https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET", color: "hover:text-[#FF9800]" },
  { name: "ShaadiDukaan", link: "https://www.shaadidukaan.com/profile/yash-2", color: "hover:text-[#E91E63]" },
  { name: "StarClinch", link: "https://starclinch.com", color: "hover:text-[#FF5722]" },
  { name: "Sulekha", link: "https://sulekha.com", color: "hover:text-[#D4AF37]" },
  { name: "Google Reviews", link: "https://share.google/pMZGzEGOhXnJpLq5g", color: "hover:text-[#4285F4]" },
];
const WHY_ME = [
  { icon: Sparkles, title: "100% Unscripted", text: "Zero paper scripts in 1,100+ events. Every moment is responsive, real, and built for your specific crowd — not a template." },
  { icon: Users, title: "Crowd Psychology", text: "I don't manage crowds — I move them. Whether 50 guests or 1,500 at an open venue, the energy stays locked until I decide it peaks." },
  { icon: Quote, title: "Crisis-Proof", text: "Power cuts, delayed brides, audio failures — handled invisible to guests every time. Your insurance policy against awkward silences." },
];
const VS_DATA = [
  { old: "Paper scripts, robotic delivery", yash: "Unscripted crowd psychology" },
  { old: "One language, one register", yash: "Fluent Hindi + English" },
  { old: "Dead dance floors", yash: "Packed until 4 AM" },
  { old: "Panics in tech failures", yash: "Saves events, invisibly" },
  { old: "Breaks with 500+ guests", yash: "Commands 10,000+ crowds" },
  { old: "Generic, forgettable", yash: "Distinctly, unforgettably yours" },
];
const LOCATIONS = [
  { area: "Pan-India Presence", zones: "Goa · Mumbai · Delhi NCR · Bangalore", desc: "Premium hosting for luxury weddings and corporate galas in India's top 21+ hubs." },
  { area: "Rajasthan Roots", zones: "Jaipur · Udaipur · Jodhpur · Jaisalmer", desc: "13+ cities across the royal state covered with full heritage logistics." },
  { area: "Hill & Beach Circuit", zones: "Shimla · Mussoorie · Andaman · Alibaug", desc: "Specialist in high-altitude and coastal destination events." },
  { area: "Corporate Tech Hubs", zones: "Hyderabad · Chennai · Kolkata · Pune", desc: "Award nights and summits for national brands and tech giants." },
];
const PROCESS = [
  { num: "01", title: "The Vision Call", text: "We align on your vibe — royal elegance or high energy. Crowd size, inside jokes, must-have moments." },
  { num: "02", title: "The Blueprint", text: "No templates. A custom run-of-show with tailored games, crowd work, and a flawless timeline." },
  { num: "03", title: "The Sound Check", text: "I arrive early, sync with your technical team, and own the stage so you can actually enjoy your event." },
  { num: "04", title: "The Execution", text: "I close on a massive high. Benchmark: your guests leave asking — where did you find this anchor?" },
];
const REVIEWS = [
  { name: "Nikita Agarwal", text: "We couldn't have asked for a better anchor! Yash brought the perfect blend of energy, charm, and professionalism.", event: "Wedding" },
  { name: "Sakshi Soni", text: "One of the best anchors, really the top most anchor. Made our event truly memorable.", event: "Sangeet" },
  { name: "Bharat Sharma", text: "Good personality and anchoring with humour and professionalism. Everything goes in flow with him.", event: "Wedding" },
  { name: "Riya Chauhan", text: "Anchor Yash absolutely rocked the stage at India Kids Fashion Week Season 11 at The Lalit, Jaipur!", event: "Corporate" },
  { name: "Saurabh Agarwal", text: "The experience was phenomenal. Great anchor with a soft and attracting personality and eye-catching presence.", event: "Event" },
  { name: "Keshav Srivastav", text: "He was engaging, professional, and kept the audience captivated throughout the event.", event: "Corporate" },
  { name: "Vartika Jetawat", text: "Anchored at my brother's Sangeet. Very friendly, understood the requirements, energetic throughout.", event: "Sangeet" },
  { name: "Divya Shree", text: "A true master of connection — made everyone feel included. Highly recommend for an unforgettable experience!", event: "Wedding" },
  { name: "Divyansh Soni", text: "Very good experience. Handled my Sangeet function very well.", event: "Sangeet" },
  { name: "Utkarsh Godha", text: "Perfect entertaining anchor. Exactly what we needed for our event.", event: "Event" },
];
const FAQS = [
  { q: "Who is Anchor Yash Soni?", a: "Anchor Yash Soni is a premium event host and emcee with 1,100+ events hosted across India. With a 4.9★ rating across 200+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in Rajasthani cultural traditions." },
  { q: "Do you travel for Destination Weddings?", a: "Absolutely. While Jaipur is home, I host events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and travel pan-India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "Which languages are you fluent in?", a: "I switch effortlessly between Hindi for the emotions, English for the class, and a bit of Rajasthani/Marwari to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Can you handle a crowd of 1,000+ guests?", a: "Large-format crowds are a specialty. I have commanded open events of 10,000+ people unscripted. Crowd psychology — reading energy patterns, controlling chaos, redirecting attention — is the core skill that separates a real anchor from an announcer." },
  { q: "Why should we hire Anchor Yash over others?", a: "Because I have never used a paper script in 1,100+ events. If the PA fails, I turn it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. I am your insurance policy against awkward silences — the difference between an event people attend and one they remember. My 4.9★ rating across 200+ reviews says the rest." },
  { q: "How far in advance should I book?", a: "My calendar fills 6–8 months ahead for peak wedding season (October–February). I do not maintain a waitlist and do not send replacements. Once your date is confirmed, it is exclusively reserved. Reach out via WhatsApp the moment your date is finalised." },
  { q: "Do you prepare scripts for our family members?", a: "Yes. I know Chachas and Masis get nervous. I provide simple, funny script templates and do a quick 10-minute rehearsal with them before the show so they look like pros on stage." },
  { q: "What happens if something goes wrong on the day?", a: "Technical failures, power cuts, last-minute schedule changes, delayed brides — all handled without the guests noticing. Crisis management under pressure is a core competency, not an afterthought." },
  { q: "Do you anchor corporate events?", a: "Yes. Award nights, product launches, annual galas, and business summits are a core specialisation. I deliver sharp, unscripted hosting that matches the gravitas of senior executives and keynote speakers." },
  { q: "What are your payment terms?", a: "A 50% advance blocks your date. The remaining balance is due on the day of the event, before I take the stage. All terms are confirmed in a simple written agreement." },
  { q: "Is Anchor Yash available for birthday parties?", a: "Yes. Milestone birthdays, anniversary galas, and VIP private events are a significant part of the calendar. Energy and tone fully customised to your family's personality and vision." },
  { q: "Do you do virtual or hybrid events?", a: "Yes. Post-2020, I've mastered engaging audiences through a camera lens for virtual town halls, webinars, and hybrid corporate events." },
];
const GALLERY_IMAGES = ["/gallery-1.webp", "/gallery-2.webp", "/gallery-3.webp", "/gallery-4.webp", "/gallery-5.webp", "/gallery-5.webp"];
// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37] bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none" aria-expanded={open}>
        <span className={`font-semibold text-base md:text-lg pr-4 transition-colors leading-snug ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${open ? "bg-[#D4AF37] border-[#D4AF37] text-black" : "border-white/30 text-white"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ─────────────────────────────────────────────
// FAQ SCHEMA (client-injected)
// ─────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};
// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{style}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen w-full flex items-end pb-16 md:pb-24 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-slide-1.webp"
            alt="Anchor Yash Soni hosting a premium live event on stage"
            fill priority
            sizes="100vw"
            quality={75}
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>
        {/* Content — bottom aligned, mobile-first */}
        <div className="relative z-10 w-full px-5 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-4 py-1.5 rounded-full bg-black/50 text-[#D4AF37] text-[11px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <Star size={10} fill="#D4AF37" /> 4.9★ Rated · 200+ Reviews
              </span>
            </div>
            {/* H1 — name first, keyword in subhead */}
            <h1 className="font-black tracking-tighter leading-[0.9] mb-5">
              <span className="block text-white text-[13vw] md:text-[9vw] lg:text-8xl">ANCHOR</span>
              <GoldText animate className="block text-[13vw] md:text-[9vw] lg:text-8xl">YASH.</GoldText>
            </h1>
            {/* Subheading — keyword-rich, not Jaipur-locked */}
            <p className="text-zinc-300 text-base md:text-xl font-light leading-relaxed mb-3 max-w-lg">
              The most commanding event host in India. 1,100+ events — palace weddings, high-energy Sangeets, corporate summits, and VIP galas across Rajasthan and beyond.
            </p>
            <p className="text-zinc-500 text-sm mb-8 tracking-wide">
              Bilingual Hindi/English &nbsp;·&nbsp; Unscripted &nbsp;·&nbsp; 10,000+ crowd commanded &nbsp;·&nbsp; Zero paper scripts
            </p>
            {/* CTAs — stacked on mobile, side by side on md+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button 
                  aria-label="Secure your date via WhatsApp"
                  className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold text-base rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  SECURE YOUR DATE →
                </button>
              </a>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <button 
                  aria-label="View portfolio"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-[#D4AF37]/60 text-[#D4AF37] font-bold text-base rounded-full hover:bg-[#D4AF37]/10 transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Play size={16} fill="currentColor" /> VIEW PORTFOLIO
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          STATS — borderless, clean numbers
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-0 md:divide-x md:divide-white/5">
            {STATS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="text-center group flex flex-col items-center gap-3">
                <s.icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl md:text-5xl lg:text-6xl font-black leading-none">
                  <GoldText>{s.value}</GoldText>
                </div>
                <div className="text-zinc-400 text-xs uppercase tracking-[0.15em] font-medium">{s.label}</div>
                <div className="text-zinc-600 text-[10px] tracking-wide">{s.sub}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          INTRO
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-4 block font-bold">About Anchor Yash</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Beyond Announcements.<br />
                <GoldText>Beyond Scripts.</GoldText>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-4 leading-relaxed font-light">
                With 1,100+ events hosted across India, Anchor Yash Soni is not just a host — he is a crowd psychologist, a cultural navigator, and a pressure-tested professional who has never reached for a paper script.
              </p>
              <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
                Palace weddings, open-air Sangeets, national corporate galas, destination events — every format is a different craft. Yash has mastered all of them.
              </p>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-light">
                Bilingual in Hindi and English. Fluent in Rajasthani culture. <strong className="text-white">Rated 4.9★ by 200+ clients across India.</strong>
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 border-b border-[#D4AF37]/50 pb-1 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">
                Read My Story <ArrowRight size={12} />
              </Link>
            </ScrollReveal>
            {/* Portrait grid — mobile: side by side, no offset */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <ScrollReveal delay={0.15}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 group transition-all duration-500">
                  <Image 
                    src="/intro-portrait-top.webp" 
                    alt="Anchor Yash Soni professional portrait" 
                    fill 
                    sizes="(max-width: 768px) 50vw, 33vw"
                    quality={70} 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25} className="mt-8 md:mt-12">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 group transition-all duration-500">
                  <Image 
                    src="/intro-portrait-bottom.webp" 
                    alt="Anchor Yash Soni engaging with a wedding crowd" 
                    fill 
                    sizes="(max-width: 768px) 50vw, 33vw"
                    quality={70} 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          PLATFORMS MARQUEE
      ══════════════════════════════════════ */}
      <section className="py-14 md:py-16 border-y border-white/5 bg-black">
        <div className="mb-8 flex justify-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase border border-white/8 bg-white/3 rounded-full px-6 py-2.5">
            VERIFIED & TRUSTED ON
          </span>
        </div>
        <div className="flex overflow-hidden mask-fade">
          <div className="flex whitespace-nowrap gap-16 md:gap-24 items-center animate-marquee w-max">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
                className={`text-2xl md:text-4xl font-black text-zinc-700 uppercase transition-all duration-300 hover:scale-105 ${p.color}`}>
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          SERVICES — photo cards
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">What I Do</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Signature <GoldText>Services.</GoldText>
              </h2>
            </div>
          </ScrollReveal>
          {/* Cards — single column mobile, 3-col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Link href={s.href}>
                  <div className="relative h-[440px] md:h-[520px] rounded-2xl overflow-hidden group border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] cursor-pointer">
                    <Image 
                      src={s.img} 
                      alt={`${s.title} — Anchor Yash Soni`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={70} 
                      className="object-cover transition-transform duration-700 group-hover:scale-108" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-widest bg-[#D4AF37] text-black px-3 py-1 rounded-full font-bold">{s.tag}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{s.title}</h3>
                      <div className="h-0.5 w-8 bg-[#D4AF37] mb-3 rounded-full" />
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          {/* Service pills — fully rounded, more spacing */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-12">
            {SERVICE_PILLS.map((p, i) => (
              <Link key={i} href={p.href}>
                <span className="px-5 py-2.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs md:text-sm font-medium hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all cursor-pointer whitespace-nowrap">
                  {p.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          TRUSTED TAGS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <p className="text-zinc-500 mb-8 text-[10px] uppercase tracking-[0.3em] font-medium">Trusted across formats & industries</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Celebrity Weddings", "Corporate R&R Events", "Big Fat Indian Weddings", "Award Ceremonies", "Sangeet & Mehndi", "Haldi Ceremonies", "Sports Events"].map((tag, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <span className="px-5 py-2.5 rounded-full border border-white/8 bg-white/4 text-zinc-300 text-sm hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                  {tag}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          WHY YASH — 3 pillars
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">The Yash Soni Difference</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Rated 4.9★ <GoldText>For a Reason.</GoldText>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {WHY_ME.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-zinc-900/30 p-8 md:p-10 rounded-2xl border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 group h-full hover:-translate-y-1.5">
                  <item.icon className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          COMPETITOR TAKEDOWN
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <ScrollReveal>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-4 block font-bold">The Market Reality</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                Experience is good.<br />
                <GoldText>Relevance is better.</GoldText>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
                The event market is full of anchors who boast &quot;20 years of experience.&quot; What that actually means: 20 years of reading from the same paper script while your carefully planned event rots in awkward silence.
              </p>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
                The right anchor isn&apos;t the one with the most years — it&apos;s the one who commands your specific crowd, reads your room, and makes your family feel like the only event that has ever mattered. <strong className="text-white">That&apos;s why 200+ clients have rated Yash 4.9★.</strong>
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Never used a paper script in 1,100+ events",
                  "Commands crowds of 10,000+ unscripted",
                  "Bilingual Hindi/English in real time",
                  "Crisis-tested: power cuts, audio failures, delays — all handled",
                  "Cultural fluency: traditional rituals + international NRI protocol",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/anchor-in-jaipur">
                <button 
                  aria-label="See why clients choose Yash"
                  className="px-7 py-3 bg-[#D4AF37] text-black text-sm font-bold rounded-full hover:bg-white transition-all inline-flex items-center gap-2"
                >
                  See Why Clients Choose Yash <ArrowRight size={14} />
                </button>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/30">
                <div className="grid grid-cols-[1fr_auto_1fr] px-5 py-3.5 border-b border-white/10 items-center">
                  <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Others</span>
                  <span className="bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mx-3">VS</span>
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-wider text-right">Anchor Yash</span>
                </div>
                {VS_DATA.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_1px_1fr] border-b border-white/5 last:border-0">
                    <div className="px-4 py-3.5 text-zinc-600 text-xs md:text-sm line-through leading-snug">{row.old}</div>
                    <div className="bg-white/5" />
                    <div className="px-4 py-3.5 text-white text-xs md:text-sm leading-snug">{row.yash}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          LOCATION NET — Jaipur SEO
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">Coverage</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Pan-India <GoldText>Authority.</GoldText>
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
                Every event zone in Jaipur, plus Rajasthan-wide and pan-India destination events.
              </p>
            </div>
          </ScrollReveal>
          {/* 2 col mobile, 4 col desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {LOCATIONS.map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <Link href="/anchor-in-jaipur">
                  <div className="border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50 h-full">
                    <MapPin size={16} className="text-[#D4AF37] mb-2.5" />
                    <div className="text-[#D4AF37] text-[9px] uppercase tracking-[0.18em] mb-1 font-bold">{loc.area}</div>
                    <div className="text-zinc-300 text-[11px] mb-2 font-medium leading-snug">{loc.zones}</div>
                    <p className="text-zinc-600 text-[11px] leading-relaxed hidden md:block">{loc.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          GALLERY MARQUEE
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-24 overflow-hidden bg-zinc-900/20">
        <div className="container mx-auto px-5 md:px-10 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-1">Moments of <GoldText>Magic.</GoldText></h2>
            <p className="text-zinc-500 text-xs md:text-sm">Live on stage — weddings, Sangeets, and corporate events across India.</p>
          </div>
          <Link href="/portfolio" className="text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors shrink-0">
            Full Portfolio →
          </Link>
        </div>
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 animate-marquee-slow hover:[animation-play-state:paused] w-max pl-5">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
              <div key={i} className="relative w-[220px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shrink-0 group">
                <Image
                  src={img}
                  alt={`Anchor Yash Soni live moment ${(i % 6) + 1}`}
                  fill 
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={65}
                  className="object-cover transition-transform duration-700 group-hover:scale-108 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">How It Works</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                From First Call to <GoldText>Standing Ovation.</GoldText>
              </h2>
            </div>
          </ScrollReveal>
          {/* Vertical on mobile, horizontal on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {PROCESS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-10 md:pl-8 border-l md:border-l border-white/10 hover:border-[#D4AF37] transition-colors group h-full">
                  <span className="absolute -left-3 top-0 w-6 h-6 bg-black border border-[#D4AF37] rounded-full flex items-center justify-center text-[9px] text-[#D4AF37] font-bold group-hover:scale-125 transition-transform">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 overflow-hidden bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-5 md:px-10 mb-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Real Words. <GoldText>Real Impact.</GoldText>
            </h2>
            <p className="text-center text-zinc-500 text-xs md:text-sm mt-2">
              4.9★ across 200+ client reviews — weddings, Sangeets, and corporate events
            </p>
          </ScrollReveal>
        </div>
        <div className="flex overflow-hidden mask-fade mb-5">
          <div className="flex whitespace-nowrap gap-4 animate-marquee w-max hover:[animation-play-state:paused]">
            {[...REVIEWS.slice(0, 5), ...REVIEWS.slice(0, 5), ...REVIEWS.slice(0, 5)].map((r, i) => (
              <a key={i} href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                className="shrink-0 w-[280px] md:w-[360px] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-pointer flex flex-col whitespace-normal">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#D4AF37" className="text-[#D4AF37]" />)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <span className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">— {r.name}</span>
                  <span className="text-zinc-600 text-[11px] ml-2">{r.event}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden mask-fade">
          <div className="flex whitespace-nowrap gap-4 animate-marquee-reverse w-max hover:[animation-play-state:paused]">
            {[...REVIEWS.slice(5), ...REVIEWS.slice(5), ...REVIEWS.slice(5)].map((r, i) => (
              <a key={i} href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                className="shrink-0 w-[280px] md:w-[360px] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-pointer flex flex-col whitespace-normal">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#D4AF37" className="text-[#D4AF37]" />)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <span className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">— {r.name}</span>
                  <span className="text-zinc-600 text-[11px] ml-2">{r.event}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">People Also Ask</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Frequently Asked <GoldText>Questions.</GoldText>
              </h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-5 rounded-full" />
            </div>
          </ScrollReveal>
          {/* Single column on mobile, 2-col on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          SCARCITY CLOSE
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[22vw] text-white/[0.018] leading-none tracking-wide whitespace-nowrap">YASH</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
        <div className="container mx-auto px-5 md:px-10 text-center relative z-10 max-w-xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8">
              <ShieldCheck size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Limited Availability</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-[0.95]">
              Your Date <br /><GoldText>Won&apos;t Wait.</GoldText>
            </h2>
            <p className="text-zinc-400 mb-3 text-sm md:text-base leading-relaxed">
              I do not maintain a waitlist. I do not send replacements. Every event gets my complete, undivided presence.
            </p>
            <p className="text-zinc-500 mb-10 text-sm">
              Calendar fills <strong className="text-[#D4AF37]">6–8 months in advance.</strong> When it&apos;s full — it&apos;s full.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-base md:text-lg uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)] w-full sm:w-auto">
                <CalendarCheck size={20} /> Claim Your Date via WhatsApp
              </button>
            </a>
            <p className="mt-5 text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
              4.9★ Rated &nbsp;·&nbsp; <strong className="text-[#D4AF37]/70">Limited Slots Remaining</strong> &nbsp;·&nbsp; 2025–2026 Season
            </p>
          </ScrollReveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          FOOTER CTA + INTERNAL LINKS
      ══════════════════════════════════════ */}
      <footer className="py-20 md:py-24 border-t border-white/10 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-5 md:px-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Your Stage Awaits.</h2>
          <p className="text-zinc-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            Dates for the upcoming season are filling fast. Secure yours now.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 px-8 md:px-12 py-4 bg-[#D4AF37] text-black font-bold text-base uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] w-full sm:w-auto justify-center">
              <CalendarCheck size={20} /> Check Availability
            </button>
          </Link>
          {/* Internal link footer — SEO */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-3 text-zinc-600 text-[10px] font-medium tracking-widest uppercase">
            {[
              { label: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
              { label: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
              { label: "Sangeet Host", href: "/sangeet-anchor-jaipur" },
              { label: "Haldi Anchor", href: "/haldi-anchor-jaipur" },
              { label: "Mehendi Host", href: "/mehendi-anchor-jaipur" },
              { label: "Corporate Events", href: "/corporate-event-anchor-jaipur" },
              { label: "Event Management", href: "/event-management-jaipur" },
              { label: "About Yash", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-6 text-zinc-600 text-[10px] tracking-widest uppercase">
            <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href="https://youtube.com/@anchor_yash" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
            <a href="mailto:info@yashsoni.in" className="hover:text-[#D4AF37] transition-colors">Email</a>
          </div>
          <p className="mt-8 text-zinc-700 text-[11px]">
            © {new Date().getFullYear()} Anchor Yash Soni. All rights reserved. Jaipur, Rajasthan, India.
          </p>
        </div>
      </footer>
    </main>
  );
}