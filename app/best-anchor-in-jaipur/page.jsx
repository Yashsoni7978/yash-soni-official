"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, Cake, CalendarCheck, CheckCircle2, ChevronLeft, ChevronRight, Flower2, Globe, GraduationCap, Heart, Landmark, MapPin, Mic, Music2, Play, Quote, ShieldCheck, Sparkles, Star, UserCheck, Users } from "lucide-react";




// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20found%20your%20page%20for%20best%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";
const GOLD = "#D4AF37";
const css = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .gold-text { background-size:200% auto; animation:shimmer 4s linear infinite; }
  @keyframes fadeSlide { 0%{opacity:0;transform:translateY(16px)} 100%{opacity:1;transform:translateY(0)} }
  .fade-slide { animation:fadeSlide 0.7s ease forwards; }
  @keyframes pulse-ring { 0%{box-shadow:0 0 0 0 rgba(212,175,55,0.4)} 70%{box-shadow:0 0 0 12px rgba(212,175,55,0)} 100%{box-shadow:0 0 0 0 rgba(212,175,55,0)} }
  .pulse-gold { animation:pulse-ring 2s infinite; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .marquee { animation:marquee 40s linear infinite; }
  .mask-fade { mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent); -webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent); }
`;
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const SLIDER_IMAGES = [
  { src: "/gallery-1.webp", caption: "Luxury Wedding — Kukas, Jaipur" },
  { src: "/gallery-2.webp", caption: "Sangeet Night — Ajmer Road" },
  { src: "/gallery-3.webp", caption: "Corporate Gala — JECC Sitapura" },
  { src: "/gallery-4.webp", caption: "Royal Varmala — Amer Road" },
  { src: "/gallery-5.webp", caption: "Haldi Ceremony — Mansarovar" },
  { src: "/gallery-5.webp", caption: "Award Night — Tonk Road" },
  { src: "/service-wedding.webp", caption: "NRI Destination Wedding — Jaipur" },
  { src: "/service-corporate.webp", caption: "VIP Birthday Gala — Vaishali Nagar" },
];
const STATS = [
  { val: "1100+", label: "Events Anchored", sub: "Across India", icon: Mic },
  { val: "10,000+", label: "Largest Crowd", sub: "Commanded. Unscripted.", icon: Users },
  { val: "4.9★", label: "Client Rating", sub: "200+ verified reviews", icon: Star },
  { val: "8+", label: "Years on Stage", sub: "Zero paper scripts", icon: Award },
];
const SERVICES = [
  { icon: Heart, title: "Wedding Anchor Jaipur", desc: "Every ritual — Varmala, Baraat, Bidaai — conducted with cultural precision. Palace venues, farmhouse lawns, destination properties.", href: "/wedding-anchor-jaipur", tag: "Weddings", color: "from-rose-950/40" },
  { icon: Music2, title: "Sangeet Host Jaipur", desc: "Dance floor packed until 4 AM. Unscripted crowd games and high-energy transitions for 500–1,500 guests.", href: "/sangeet-anchor-jaipur", tag: "Sangeet", color: "from-violet-950/40" },
  { icon: Flower2, title: "Haldi Anchor Jaipur", desc: "100% family-friendly energy. Interactive games, viral moments, and zero boring gaps from start to finish.", href: "/haldi-anchor-jaipur", tag: "Haldi", color: "from-yellow-950/40" },
  { icon: Sparkles, title: "Mehendi Anchor Jaipur", desc: "Musical games, couple trivia, and crowd engagement that keeps guests entertained while the mehendi is applied.", href: "/mehendi-anchor-jaipur", tag: "Mehendi", color: "from-emerald-950/40" },
  { icon: Building2, title: "Corporate Anchor Jaipur", desc: "Award nights, product launches, and summits at JECC Sitapura. Sharp, unscripted, brand-aligned.", href: "/corporate-event-anchor-jaipur", tag: "Corporate", color: "from-blue-950/40" },
  { icon: Cake, title: "Birthday Anchor Jaipur", desc: "Milestone birthdays and anniversary galas in Mansarovar, C-Scheme, Vaishali Nagar. Intimate to grand.", href: "/anchor-in-jaipur", tag: "Birthday", color: "from-pink-950/40" },
  { icon: Globe, title: "NRI & Destination Weddings", desc: "Bilingual Hindi/English. International protocols and deep Rajasthani cultural fluency. Families from UK, USA, Canada, Gulf.", href: "/wedding-anchor-jaipur", tag: "NRI", color: "from-cyan-950/40" },
  { icon: Landmark, title: "Farmhouse Wedding Anchor", desc: "Specialist for massive Ajmer Road and Bhankrota farmhouse crowds. The anchor elite local families choose.", href: "/wedding-anchor-jaipur", tag: "Farmhouse", color: "from-amber-950/40" },
];
const VS_ROWS = [
  { old: "Paper scripts, robotic delivery", yash: "Unscripted crowd psychology" },
  { old: "One language, one register", yash: "Fluent Hindi + English" },
  { old: "Dead Sangeet dance floors", yash: "Packed floors until 4 AM" },
  { old: "Panics in tech failures", yash: "Saves events invisibly" },
  { old: "Breaks with 500+ guests", yash: "Commands 10,000+ crowds" },
  { old: "Can't handle NRI guests", yash: "International protocols fluent" },
  { old: "Needs a 2-week written brief", yash: "Adapts on the day, live" },
  { old: "Generic and forgettable", yash: "Distinctly, unforgettably yours" },
];
const LOCATIONS = [
  { zone: "The Royal Corridors", areas: "Kukas · Amer Road · Delhi Road", desc: "Heritage palace buyouts and NRI destination weddings. Yash is the anchor of choice for every palace property on the Amer corridor — international protocols, bilingual fluency, Rajasthani cultural depth.", keywords: ["Anchor Kukas Jaipur", "Anchor Amer Road", "NRI wedding anchor Jaipur"] },
  { zone: "The Grand Venues", areas: "Ajmer Road · Bhankrota · Jhotwara", desc: "Elite families bring 1,000–1,500+ guests to these sprawling farmhouse lawns. These crowds are loud and completely unforgiving of a weak anchor. Yash doesn't manage them — he commands them.", keywords: ["Farmhouse wedding anchor Ajmer Road", "Anchor Bhankrota Jaipur", "1000 guest wedding anchor"] },
  { zone: "The Urban Elite", areas: "Mansarovar · Vaishali Nagar · C-Scheme · Civil Lines", desc: "Milestone birthdays, luxury anniversary galas, and high-net-worth private celebrations. Premium banquet venues demand a completely different register — understated authority that can pivot to electric energy.", keywords: ["Anchor Mansarovar Jaipur", "Birthday anchor Vaishali Nagar", "Event host C-Scheme"] },
  { zone: "The Corporate Hubs", areas: "Sitapura JECC · Tonk Road · JLN Marg · Malviya Nagar", desc: "National brands, government summits, and corporate conglomerates choose Sitapura JECC for a reason. They need an anchor who is sharp, concise, unscripted, and capable of matching the gravitas of keynote speakers.", keywords: ["Corporate anchor JECC Sitapura", "Award night host Jaipur", "Anchor Tonk Road Jaipur"] },
];
const REVIEWS = [
  { name: "Sharma Family", text: "The PA system failed for 3 minutes mid-Sangeet. Yash turned it into a crowd call-and-response that had 900 people screaming together. He didn't just save the night — he made it the best moment.", event: "Farmhouse Sangeet", location: "Ajmer Road, Jaipur", guests: "900 guests" },
  { name: "Kapoor Family", text: "We flew from Toronto for my daughter's wedding at a heritage palace near Amer. Yash handled our NRI guests, traditional rituals, and every family moment with complete precision. Extraordinary.", event: "Palace Wedding", location: "Amer Road, Jaipur", guests: "600 guests" },
  { name: "Riya Chauhan", text: "Anchor Yash absolutely rocked the stage at India Kids Fashion Week Season 11 at The Lalit, Jaipur. Every transition, every energy shift — perfectly timed.", event: "Corporate Event", location: "The Lalit, Jaipur", guests: "Live broadcast" },
  { name: "Vartika Jetawat", text: "Anchored at my brother's Sangeet. Very friendly, understood the requirements, energetic throughout the function. One of the best anchors we've seen in Jaipur.", event: "Sangeet", location: "Jaipur", guests: "Family event" },
  { name: "Mehta Family", text: "My father's 70th birthday in Mansarovar felt like a state function. Every tribute, every transition — perfectly engineered. He understood our family without needing a single briefing.", event: "VIP Birthday Gala", location: "Mansarovar, Jaipur", guests: "150 guests" },
  { name: "Singhania Family", text: "1,400 Baraat guests waiting in summer heat for two hours. Yash had them fully energized in under 90 seconds — completely unscripted. I will never use any other anchor.", event: "Grand Wedding", location: "Bhankrota, Jaipur", guests: "1,400 guests" },
];
const PILLARS = [
  { icon: Mic, title: "Never Scripted", desc: "Zero paper scripts in 1,100+ events. Every moment is live, responsive, and engineered for your specific crowd. The room never knows what hit it." },
  { icon: ShieldCheck, title: "Crisis Proof", desc: "Power cuts, audio failures, delayed brides, last-minute changes — all handled invisible to your guests. Every single time. No exceptions." },
  { icon: GraduationCap, title: "Culturally Fluent", desc: "Deep Rajasthani wedding traditions, NRI international protocols, corporate decorum, and Bollywood crowd energy — all in one anchor." },
];
const PROCESS = [
  { n: "01", title: "The Vision Call", desc: "We align on your exact vibe — royal elegance or high-energy madness. Crowd profile, inside jokes, must-have moments, and absolute non-negotiables." },
  { n: "02", title: "The Blueprint", desc: "No templates. A fully custom run-of-show with tailored games, timed crowd work, and a minute-by-minute timeline built for your event specifically." },
  { n: "03", title: "The Sound Check", desc: "I arrive 2 hours early. Sync with technical team, walk the venue, brief the DJ, and own every inch of that stage before the first guest walks in." },
  { n: "04", title: "The Execution", desc: "I close on a massive, unforgettable high. My benchmark: your guests leave asking — who was that anchor? Where do I get him for my event?" },
];
const CITIES = [
  { city: "Jodhpur", keyword: "anchor in jodhpur", href: "/anchor-in-jodhpur", note: "Blue City destination weddings" },
  { city: "Udaipur", keyword: "anchor in udaipur", href: "/anchor-in-udaipur", note: "City of Lakes luxury events" },
  { city: "Jaisalmer", keyword: "anchor jaisalmer", href: "/anchor-in-jaisalmer", note: "Desert destination weddings" },
  { city: "Ajmer", keyword: "anchor in ajmer", href: "/anchor-in-ajmer", note: "Corporate & social events" },
  { city: "Pushkar", keyword: "anchor pushkar", href: "/anchor-in-pushkar", note: "Destination wedding specialist" },
  { city: "Kota", keyword: "anchor kota", href: "/anchor-in-kota", note: "Corporate events & galas" },
];
const BLOGS = [
  { title: "Sangeet Ceremony Planning in Jaipur: Your Complete 2026 Guide", href: "/blog/sangeet-ceremony-planning-jaipur", category: "Wedding Planning", date: "01 Mar 2026" },
  { title: "Best Farmhouse Wedding Venues in Jaipur 2026: Complete Guide", href: "/blog/farmhouse-wedding-venues-jaipur", category: "Venue Guide", date: "09 Mar 2026" },
  { title: "Anchor Charges in Jaipur 2026: Complete Transparent Pricing", href: "/blog/anchor-charges-jaipur-2026", category: "Pricing Guide", date: "07 Mar 2026" },
];
const FAQS = [
  { q: "Who is the best anchor in Jaipur for weddings and events?", a: "Anchor Yash Soni is one of Jaipur's most reviewed event anchors with a 4.9★ rating across 200+ verified reviews on Google, WedMeGood, WeddingWire, and Justdial. He has hosted 1,100+ events across Rajasthan and India, specialising in luxury weddings, Sangeet nights, corporate award shows, Haldi and Mehendi ceremonies, NRI destination weddings, and VIP birthday galas." },
  { q: "What areas of Jaipur does the anchor cover?", a: "Yash Soni covers all major event zones across Jaipur — palace and heritage venues in Kukas, Amer Road, and Delhi Road; farmhouse wedding venues on Ajmer Road, Bhankrota, and Jhotwara; premium banquets in Mansarovar, Vaishali Nagar, and C-Scheme; and corporate hubs including JECC Sitapura, Tonk Road, and JLN Marg. He also travels pan-India and across Rajasthan for destination events." },
  { q: "Is Anchor Yash Soni available for Sangeet and Haldi in Jaipur?", a: "Yes. Sangeet and Haldi ceremonies are core specialisations. For Sangeet events on Ajmer Road and Bhankrota farmhouses, he routinely manages 500–1,500 guests with dance floors packed until 4 AM. For Haldi, he curates interactive games, viral moments, and crowd energy that makes the ceremony genuinely memorable." },
  { q: "Can this anchor handle a large farmhouse crowd of 1000+ guests on Ajmer Road?", a: "This is a signature strength. Yash Soni has commanded open events of 10,000+ people unscripted. A farmhouse crowd of 1,000–1,500 guests on Ajmer Road is a standard evening. The ability to read a large crowd's energy, control chaos, and redirect attention is the core skill that separates a real anchor from an announcer." },
  { q: "Does Anchor Yash Soni host NRI and destination weddings in Jaipur?", a: "NRI families and international guests are a core specialisation. Yash is completely fluent in English and Hindi, understands international etiquette and protocols, and has deep knowledge of traditional Rajasthani wedding customs — making him the anchor of choice for families flying into Jaipur from the UK, USA, Canada, and the Gulf." },
  { q: "How far in advance should I book the anchor?", a: "The calendar fills 6–8 months ahead for peak wedding season (October–February). No waitlists are maintained and no replacement anchors are sent. Once your date is confirmed, it is exclusively reserved for your event. Reach out via WhatsApp the moment your date is finalised." },
  { q: "Is Anchor Yash Soni available for corporate events at JECC Sitapura?", a: "Yes. Corporate events — award nights, product launches, annual galas, and business summits — are a core specialisation. Events at JECC Sitapura, Tonk Road, JLN Marg, and Malviya Nagar for national corporations are a regular part of the calendar. The corporate register is completely different from wedding hosting — sharp, concise, brand-aligned, and capable of matching the gravitas of keynote speakers." },
  { q: "What languages does Anchor Yash Soni host in?", a: "Hindi and English fluently, often simultaneously. For NRI families and international guests, transitions between Hindi and English are completely seamless — sometimes mid-sentence. There is also working knowledge of Rajasthani and Marwari for traditional ceremonies and rituals." },
  { q: "Is Anchor Yash available for birthday parties in Jaipur?", a: "Yes. Milestone birthdays, anniversary galas, and VIP private events in Mansarovar, Vaishali Nagar, and C-Scheme are a significant part of the calendar. Every event is fully customised — the energy and tone matched precisely to the family's personality and vision." },
  { q: "What makes this anchor different from other anchors in Jaipur?", a: "Three things: First, not a single paper script has been used in 1,100+ events. Second, crisis management — power cuts, audio failures, delayed schedules — are all handled invisible to guests. Third, cultural fluency across Rajasthani traditions, NRI international protocols, and corporate decorum that most anchors simply don't have." },
  { q: "Does Yash Soni travel outside Jaipur for events?", a: "Yes. Events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer — are a regular part of the calendar. Pan-India destination events are also available for the right engagements. Travel logistics and accommodation are structured into the booking terms." },
  { q: "How much does the best anchor in Jaipur charge?", a: "Pricing varies based on event type, duration, date, and location. For a transparent pricing breakdown, see the Anchor Charges in Jaipur 2026 guide on the blog. To get an exact quote for your event, reach out via WhatsApp with your event date, type, and guest count." },
  { q: "What is the booking process?", a: "Step 1: Send a WhatsApp message with your event date, type, and guest count. Step 2: Availability check and introductory call. Step 3: Simple written agreement and 50% advance to confirm the date. The remaining balance is due on the event day before the show begins." },
  { q: "Can Anchor Yash Soni do virtual or hybrid events?", a: "Yes. Virtual town halls, hybrid corporate galas, and online award ceremonies are part of the service offering. The craft of engaging an audience through a camera lens is fundamentally different from stage hosting, and both have been mastered." },
];
// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────
const G = ({ children, className = "", animate = false }) => (
  <span className={`bg-clip-text text-transparent bg-cover bg-center ${animate ? "gold-text" : ""} ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}>
    {children}
  </span>
);
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }} className={className}>
      {children}
    </motion.div>
  );
};
// ─────────────────────────────────────────────
// IMAGE SLIDER COMPONENT
// ─────────────────────────────────────────────
function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const total = SLIDER_IMAGES.length;
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };
  return (
    <div className="relative w-full h-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Slides */}
      {SLIDER_IMAGES.map((img, i) => (
        <AnimatePresence key={i}>
          {i === current && (
            <motion.div className="absolute inset-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}>
              <Image src={img.src} alt={`${img.caption} — Anchor Yash Soni best anchor in Jaipur`}
                fill quality={100} className="object-cover" priority={i === 0} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />
      {/* Caption */}
      <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <AnimatePresence mode="wait">
          <motion.span key={current} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            {SLIDER_IMAGES[current].caption}
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Arrows — desktop only */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
        <ChevronRight size={18} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 mt-4 md:mt-0">
        {SLIDER_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`transition-all rounded-full ${i === current ? "w-6 h-1.5 bg-[#D4AF37]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"}`} />
        ))}
      </div>
      {/* Pause indicator */}
      {paused && (
        <div className="absolute top-4 right-4 z-20 text-[10px] uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Paused
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────
function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none">
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold transition-all ${open ? "bg-[#D4AF37] border-[#D4AF37] text-black rotate-45" : "border-white/30 text-white"}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function BestAnchorJaipurPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <main className="bg-black text-white overflow-x-hidden font-sans">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ══════════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════════ */}
      <nav className="pt-24 md:pt-28 pb-0 px-5 md:px-10 sr-only">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-zinc-600">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-zinc-400">Best Anchor in Jaipur</span>
        </div>
      </nav>
      {/* ══════════════════════════════════════════
          1. HERO — fullscreen slider with H1
      ══════════════════════════════════════════ */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
        {/* Auto-scroll slider as background */}
        <ImageSlider />
        {/* Content over slider */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end md:justify-center px-5 md:px-10 pb-20 md:pb-0">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
              {/* Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-4 py-1.5 rounded-full bg-black/50 text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  <Star size={10} fill={GOLD} /> 4.9★ · 200+ Verified Reviews · Jaipur
                </span>
              </div>
              {/* H1 — primary keyword */}
              <h1 className="text-[2.6rem] leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-5">
                BEST ANCHOR<br />
                <G animate>IN JAIPUR.</G>
              </h1>
              {/* Subhead — India-wide scope, key locations */}
              <p className="text-sm md:text-lg text-zinc-300 mb-3 max-w-xl font-light leading-relaxed">
                Anchor Yash Soni — 1,100+ events across India. Palace weddings in Kukas, Sangeets on Ajmer Road, corporate galas at JECC Sitapura, and destination events across Rajasthan.
              </p>
              <p className="text-xs md:text-sm text-zinc-500 mb-8 font-light tracking-wide">
                Bilingual Hindi/English &nbsp;·&nbsp; Unscripted &nbsp;·&nbsp; 10,000+ crowd commanded &nbsp;·&nbsp; Zero paper scripts
              </p>
              {/* CTAs — stacked mobile, row desktop */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="pulse-gold w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-white transition-all active:scale-95">
                    Secure Your Date →
                  </button>
                </a>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all active:scale-95 flex items-center justify-center gap-2">
                    <Play size={14} fill="currentColor" /> Watch Reel
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          2. CREDENTIAL BAR — no boxes
      ══════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-white/5 py-0">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="text-center py-10 md:py-14 px-4 group">
                  <s.icon size={24} className="mx-auto mb-3 text-[#D4AF37]" />
                  <div className="text-4xl md:text-5xl font-black mb-1"><G>{s.val}</G></div>
                  <div className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">{s.label}</div>
                  <div className="text-zinc-600 text-[10px] mt-0.5 hidden md:block">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          3. WHO IS YASH — keyword-dense intro
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">The Best Anchor in Jaipur</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              When Jaipur Searches for the Best Anchor —<br />
              <G>One Name Appears.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              With <strong className="text-white">1,100+ events hosted across India</strong> and a <strong className="text-white">4.9★ rating across 200+ verified reviews</strong>, Anchor Yash Soni has earned a reputation that no award can manufacture — only 1,100+ events can build.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              Whether it is a royal Varmala ceremony at a Kukas palace property, a 1,500-guest farmhouse Sangeet on Ajmer Road that needs to stay electric until 4 AM, a national brand&apos;s annual award night at JECC Sitapura, or a milestone birthday gala in Mansarovar — Yash Soni is the anchor Jaipur&apos;s elite families, NRI clients, and national corporations choose when the event cannot afford to be ordinary.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              Bilingual Hindi/English. Fluent in Rajasthani culture. Zero paper scripts. <strong className="text-white">The most reviewed anchor in Jaipur.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all">
                  Check Availability →
                </button>
              </a>
              <Link href="/about">
                <button className="px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-medium rounded-full hover:bg-[#D4AF37]/10 transition-all">
                  About Yash
                </button>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#D4AF37]/40 transition-all">
              <Image src="/intro-portrait-top.webp" alt="Anchor Yash Soni best anchor in Jaipur" fill quality={100} className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#D4AF37]/40 transition-all mt-8">
              <Image src="/intro-portrait-bottom.webp" alt="Anchor Yash Soni wedding event Jaipur" fill quality={100} className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          4. SERVICES GRID — 8 cards, all linked
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">All Event Formats</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                Best Anchor in Jaipur <G> for Every Event.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={s.href}>
                  <div className={`relative h-full rounded-2xl border border-white/10 bg-gradient-to-b ${s.color} to-zinc-900/60 p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1`}>
                    <div className="flex items-center justify-between mb-4">
                      <s.icon size={22} className="text-[#D4AF37]" />
                      <span className="text-[9px] uppercase tracking-widest bg-[#D4AF37]/15 text-[#D4AF37] px-2.5 py-1 rounded-full font-bold border border-[#D4AF37]/20">{s.tag}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">{s.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#D4AF37] text-[10px] uppercase tracking-wider font-bold">
                      Learn more <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          5. STANDALONE IMAGE SLIDER SECTION
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-1">Live Moments</p>
                <h2 className="text-2xl md:text-4xl font-bold">Yash Soni in Action — <G>Across Jaipur.</G></h2>
              </div>
              <Link href="/portfolio" className="text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors shrink-0">
                Full Portfolio →
              </Link>
            </div>
          </Reveal>
          {/* Standalone slider — different from hero */}
          <Reveal delay={0.1}>
            <div className="relative h-[280px] sm:h-[380px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <ImageSlider />
            </div>
          </Reveal>
          {/* Thumbnail strip — desktop */}
          <div className="hidden md:grid grid-cols-8 gap-2 mt-3">
            {SLIDER_IMAGES.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all cursor-pointer group">
                <Image src={img.src} alt={img.caption} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" sizes="80px" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          6. COMPETITOR TAKEDOWN
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">The Market Reality</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Experience is good.<br /><G>Relevance is better.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed font-light">
              Jaipur&apos;s event market is saturated with anchors who boast &quot;20 years of experience.&quot; What that means in practice: 20 years of reading from the same paper script while your million-rupee venue decor rots in awkward silence.
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
              With a <strong className="text-white">4.9★ rating across 200+ verified reviews</strong>, Anchor Yash Soni has built his reputation the only way that matters — through 1,100+ events where clients kept coming back and guests kept asking for his number.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Never used a paper script in 1,100+ events. Zero.",
                "Commands crowds of 10,000+ unscripted — farmhouse to stadium",
                "Bilingual Hindi/English in real time, mid-sentence if needed",
                "Crisis-tested: power cuts, audio fails, delayed schedules — all invisible to guests",
                "Cultural depth: Rajasthani rituals, NRI protocols, corporate decorum",
                "4.9★ across Google, WedMeGood, WeddingWire, Justdial",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="px-7 py-3.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all">
                Book the Best Anchor in Jaipur →
              </button>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-zinc-900/30">
              <div className="grid grid-cols-[1fr_auto_1fr] px-5 py-3.5 border-b border-white/10 items-center gap-2">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider">The old guard</span>
                <span className="bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">VS</span>
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-wider text-right">Anchor Yash</span>
              </div>
              {VS_ROWS.map((r, i) => (
                <div key={i} className="grid grid-cols-[1fr_1px_1fr] border-b border-white/5 last:border-b-0">
                  <div className="px-4 py-3 text-zinc-600 text-xs line-through leading-snug">{r.old}</div>
                  <div className="bg-white/5" />
                  <div className="px-4 py-3 text-white text-xs leading-snug font-medium">{r.yash}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          7. LOCATION NET — every Jaipur zone
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">Jaipur Coverage Map</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Anchor in Jaipur — <G>Every Zone. Every Venue.</G>
              </h2>
              <p className="text-zinc-500 text-sm mt-3 max-w-xl mx-auto">
                Jaipur is not one market. It is four distinct event territories — each with its own crowd character, venue format, and hosting requirement.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link href="/anchor-in-jaipur">
                  <div className="border border-white/10 rounded-2xl p-6 md:p-7 hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">{loc.zone}</p>
                        <p className="text-zinc-300 text-xs font-medium">{loc.areas}</p>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-4">{loc.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.keywords.map((kw, j) => (
                        <span key={j} className="text-[9px] text-zinc-600 border border-zinc-700/50 px-2 py-0.5 rounded-full">{kw}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          8. TESTIMONIALS — 6 cards with location data
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">4.9★ · 200+ Verified Reviews</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Jaipur <G>Trusts Yash.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group cursor-pointer">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />)}
                  </div>
                  <Quote size={14} className="text-[#D4AF37]/40 mb-2" />
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">— {r.name}</p>
                    <p className="text-zinc-500 text-[11px] mt-0.5">{r.event} · {r.location}</p>
                    <p className="text-[#D4AF37] text-[10px] mt-0.5 uppercase tracking-wider">{r.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors">
              See All Reviews on Google <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          9. THREE PILLARS
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">The Yash Soni Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                What Makes Him <G>Jaipur&apos;s Most Chosen Anchor.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-2xl p-7 md:p-10 hover:border-[#D4AF37]/40 transition-all group h-full bg-zinc-900/20 hover:bg-zinc-900/50">
                  <p.icon size={28} className="text-[#D4AF37] mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-white">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          10. PROCESS — 4 steps
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                From First Call to <G>Standing Ovation.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
            {PROCESS.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-8 pr-4 py-6 border-l border-white/10 hover:border-[#D4AF37]/50 group transition-colors pb-10">
                  <span className="absolute -left-3 top-6 w-6 h-6 bg-black border border-[#D4AF37] rounded-full text-[10px] text-[#D4AF37] font-black flex items-center justify-center group-hover:scale-125 transition-transform">
                    {s.n}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          11. NEARBY CITIES — internal link expansion
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">Beyond Jaipur</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Anchor in Rajasthan — <G>Pan-India Available.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CITIES.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={c.href}>
                  <div className="border border-white/10 rounded-xl p-4 text-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/60">
                    <MapPin size={14} className="text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">{c.city}</p>
                    <p className="text-zinc-600 text-[10px] mt-1 leading-snug">{c.note}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/anchor-in-rajasthan" className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors">
              Best Anchor in Rajasthan <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          12. BLOG PREVIEW — 3 articles
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-zinc-950 border-y border-white/5 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-1">From the Blog</p>
                <h2 className="text-2xl md:text-3xl font-bold">Jaipur Wedding & Event <G>Planning Guides.</G></h2>
              </div>
              <Link href="/blog" className="text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors shrink-0">
                All Articles →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOGS.map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={b.href}>
                  <div className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all group cursor-pointer h-full bg-zinc-900/20 hover:bg-zinc-900/50">
                    <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mb-1">{b.category}</p>
                    <p className="text-zinc-600 text-[10px] mb-3">{b.date}</p>
                    <h3 className="text-white text-sm font-bold leading-snug group-hover:text-[#D4AF37] transition-colors">{b.title}</h3>
                    <div className="mt-4 flex items-center gap-1 text-[#D4AF37] text-[10px] uppercase tracking-wider font-bold">
                      Read Article <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          13. FAQ — 14 questions
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">People Also Ask</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Best Anchor in Jaipur — <G>FAQ.</G>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <FAQ q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          14. SCARCITY CLOSE
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-zinc-950 border-t border-white/5 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[20vw] text-white/[0.02] leading-none whitespace-nowrap">JAIPUR</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/8 rounded-full px-4 py-1.5 mb-8">
              <ShieldCheck size={12} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">The Final Word</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-5 leading-[0.95]">
              Your Date<br /><G animate>Won&apos;t Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              The best anchor in Jaipur books <strong className="text-[#D4AF37]">6–8 months in advance.</strong> No waitlists. No replacements. Every event on the calendar gets complete, undivided presence.
            </p>
            <p className="text-zinc-600 text-sm mb-10">When the calendar is full — it is simply full.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="pulse-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-white transition-all">
                <CalendarCheck size={18} /> Claim Your Date via WhatsApp
              </button>
            </a>
            <p className="mt-5 text-zinc-600 text-[10px] uppercase tracking-widest">
              Best Anchor in Jaipur · <strong className="text-[#D4AF37]">Limited Slots</strong> · 2025–2026 Season
            </p>
            {/* Internal links footer */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/wedding-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Wedding Anchor</Link>
              <Link href="/sangeet-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Sangeet Host</Link>
              <Link href="/haldi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Haldi Anchor</Link>
              <Link href="/mehendi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Mehendi Host</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate</Link>
              <Link href="/anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Anchor Jaipur</Link>
              <Link href="/anchor-in-rajasthan" className="hover:text-[#D4AF37] transition-colors">Anchor Rajasthan</Link>
              <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}