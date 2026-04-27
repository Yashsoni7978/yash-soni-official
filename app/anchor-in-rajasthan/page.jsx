"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, Camera, CheckCircle2, ChevronRight, Crown, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, Sparkles, Star, Users, Zap } from "lucide-react";




// ─────────────────────────────────────────────
// THEME — Black Gold (Anchoring pages)
// ─────────────────────────────────────────────
const GOLD = "#D4AF37";
const GOLD_D = "#a8891a";
const GOLD_L = "#f0d878";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20an%20anchor%20for%20an%20event%20in%20Rajasthan.%20Can%20you%20check%20availability%3F";
const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,${GOLD_D} 0%,${GOLD} 30%,${GOLD_L} 50%,${GOLD} 70%,${GOLD_D} 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee{animation:marquee 40s linear infinite;}
  .mask-fade{-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);}
  .img-h img{transition:transform .65s ease;}
  .img-h:hover img{transform:scale(1.05);}
  .city-card{transition:all .3s;}
  .city-card:hover{border-color:rgba(212,175,55,0.6) !important;background:rgba(212,175,55,0.04) !important;}
  .city-card:hover .city-name{color:#D4AF37 !important;}
`;
// ─────────────────────────────────────────────
// REUSABLES
// ─────────────────────────────────────────────
const G = ({ children }) => (
  <span className="bg-clip-text text-transparent bg-cover bg-center gold-gradient-text"
    >
    {children}
  </span>
);
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:"-50px" }} transition={{ duration:.75, delay, ease:[.22,1,.36,1] }}
    className={className}>
    {children}
  </motion.div>
);
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  useEffect(() => {
    if (!inView) return;
    const to = parseInt(target.replace(/\D/g,""), 10);
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
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
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37]/60 bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button onClick={() => setOpen(o=>!o)} aria-expanded={open} aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none">
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all mt-0.5 ${open ? "bg-[#D4AF37] text-black" : "border border-white/30"}`}>
          {open ? <Minus size={13}/> : <Plus size={13}/>}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id={id} initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
            <p className="px-5 md:px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { val:"1100", suffix:"+", label:"Events Anchored",     sub:"Across Rajasthan & India", icon:Mic2     },
  { val:"13",   suffix:"+", label:"Rajasthan Cities",    sub:"Complete coverage",        icon:MapPin   },
  { val:"4.9",  suffix:"★", label:"Client Rating",       sub:"200+ verified reviews",    icon:Star     },
  { val:"10",   suffix:"K+",label:"Largest Crowd",       sub:"Commanded live",           icon:Users    },
];
const CITIES = [
  {
    city: "Jaipur",
    tag: "Home Base",
    href: "/anchor-in-jaipur",
    venues: "Rambagh Palace · Fairmont · Leela · JECC · Amer Road",
    desc: "The Pink City headquarters. Palace buyouts, corporate summits at JECC, and every format of wedding. Deep venue relationships at every major property.",
    highlight: true,
  },
  {
    city: "Udaipur",
    tag: "Lake City",
    href: "/anchor-in-udaipur",
    venues: "Taj Lake Palace · Udaivilas · Leela Udaipur · RAAS",
    desc: "Rajasthan's most romantic destination. NRI families choose Udaipur first—requires international protocols and deep venue knowledge.",
  },
  {
    city: "Jodhpur",
    tag: "Blue City",
    href: "/anchor-in-jodhpur",
    venues: "Umaid Bhawan · Mehrangarh Fort · RAAS · Ajit Bhawan",
    desc: "Umaid Bhawan Palace and Mehrangarh Fort. These venues demand a hosting register that matches the grandeur of royal architecture.",
  },
  {
    city: "Jaisalmer",
    tag: "Desert City",
    href: "/anchor-in-jaisalmer",
    venues: "Suryagarh · Serai · Marriott · Desert Camps",
    desc: "Open-air desert weddings with acoustic challenges. Sufi night Sangeets and dune ceremonies require specialized energy management.",
  },
  {
    city: "Pushkar",
    tag: "Spiritual City",
    href: "/anchor-in-pushkar",
    venues: "Westin Pushkar · Ananta Spa · Tivoli",
    desc: "Bohemian destination weddings and pool party Haldis. The Pushkar crowd is typically younger and expects high-energy modern anchoring.",
  },
  {
    city: "Alwar & Sariska",
    tag: "Heritage Gateway",
    href: "/anchor-in-alwar",
    venues: "Neemrana Fort · Tijara Fort · Sariska Palace",
    desc: "Close to Delhi NCR, perfect for weekend destination weddings. High-end heritage properties requiring royal yet accessible hosting.",
  },
  {
    city: "Ranthambore",
    tag: "Wilderness Luxe",
    href: "/anchor-in-ranthambore",
    venues: "Six Senses Fort Barwara · Aman-i-Khas · Oberoi Vanyavilas",
    desc: "Luxury wildlife weddings. The anchor must balance the raw wilderness vibe with ultra-sophisticated hosting for elite global guests.",
  },
  {
    city: "Mount Abu",
    tag: "Hill Station",
    href: "/anchor-in-mount-abu",
    venues: "Cama Rajputana · Bikaner House · Hilltone",
    desc: "Rajasthan's only hill station. Lush greenery and cooler climates. Perfect for summer destination weddings with a boutique heritage feel.",
  },
  {
    city: "Kumbhalgarh",
    tag: "Fortress Heights",
    href: "/anchor-in-kumbhalgarh",
    venues: "The Aodhi · Kumbhalgarh Safari Camp · Renaissance",
    desc: "Events in the shadow of the Great Wall of India. Dramatic slopes and fortress views requiring strong vocal command and logistics.",
  },
  {
    city: "Mandawa",
    tag: "Open Art Gallery",
    href: "/anchor-in-mandawa",
    venues: "Castle Mandawa · Desert Resort · Vivaana",
    desc: "Shekhawati's painted havelis. Artistic, intimate destination weddings that require a host who understands heritage and art culture.",
  },
  {
    city: "Bikaner",
    tag: "Camel Country",
    href: "/anchor-in-bikaner",
    venues: "Narendra Bhawan · Laxmi Niwas · Gajner Palace",
    desc: "Intimate luxury and grand palace courtyards. Royal Mewar traditions meet sophisticated modern anchoring expectations.",
  },
  {
    city: "Kota",
    tag: "Chambal Hub",
    href: "/anchor-in-kota",
    venues: "Umed Bhawan Palace · Brijraj Bhawan · Country Inn",
    desc: "Industrial hub with royal roots. Corporate galas and heritage weddings along the Chambal riverfront.",
  },
  {
    city: "Bharatpur",
    tag: "Nature & Heritage",
    href: "/anchor-in-bharatpur",
    venues: "Laxmi Vilas Palace · The Bagh · Chandra Mahal",
    desc: "Where nature meets history. Garden weddings and palace galas in the bird-watching capital of Rajasthan.",
  },
  {
    city: "Chittorgarh",
    tag: "Valor City",
    href: "/anchor-in-chittorgarh",
    venues: "Bassi Fort · Castle Bijaipur · Padmini Haveli",
    desc: "Hosting in the city of forts. Epic scales and historic venues that demand a powerful, commanding stage presence.",
  },
];
const EVENT_TYPES = [
  { icon:Heart,    title:"Palace Weddings",        desc:"Varmala, Baraat, Pheras, Bidaai across every palace property in Rajasthan. Heritage venues with centuries-old protocol — navigated.", href:"/wedding-anchor-jaipur" },
  { icon:Music2,   title:"Destination Sangeets",   desc:"High-energy Sangeet production in fort courtyards, rooftop terraces, desert camps, and lake palace ballrooms. The acoustic challenges are real — so is the experience.", href:"/sangeet-anchor-jaipur" },
  { icon:Globe,    title:"NRI & International",    desc:"Bilingual Hindi/English. International protocols. Families from UK, USA, Canada, and Gulf who chose Rajasthan for a reason — the event needs to honour that choice.", href:"/destination-wedding-anchor" },
  { icon:Building2,title:"Corporate & Conferences",desc:"National brand summits, government galas, and award nights at Jaipur's JECC Sitapura and major conference properties across Rajasthan cities.", href:"/corporate-event-anchor-jaipur" },
  { icon:Sparkles, title:"Pre-Wedding Ceremonies", desc:"Haldi, Mehndi, Roka, and engagement ceremonies. Each format requires a completely different energy register — all available across Rajasthan.", href:"/haldi-anchor-jaipur" },
  { icon:Crown,    title:"Destination Events",     desc:"Celebration of life events, milestone birthdays, anniversary galas, and family reunions across Rajasthan's most iconic venues.", href:"/anchor-in-jaipur" },
];
const WHY_RAJASTHAN = [
  {
    num:"01",
    title:"Every Venue Protocol Known",
    desc:"Rambagh Palace, Fairmont, Umaid Bhawan, Taj Lake Palace, Suryagarh — each has its own vendor protocols, sound restrictions, timing constraints, and operational requirements. Years of work at these properties means zero surprises on the event day.",
  },
  {
    num:"02",
    title:"Acoustic Expertise for Heritage Spaces",
    desc:"Fort courtyards, haveli interiors, desert open-air, lake palace ballrooms — each is an acoustic problem that kills unprepared anchors. Voice projection, mic positioning, and crowd management adapt completely to each space.",
  },
  {
    num:"03",
    title:"Cultural Fluency — Rajasthani, Hindi, English",
    desc:"Rajasthan's royal wedding culture has specific rituals, specific register, and specific expectations. Bilingual Hindi/English switching with genuine Rajasthani cultural knowledge — not a Google-translated script.",
  },
  {
    num:"04",
    title:"Pan-Rajasthan Logistics",
    desc:"Jaipur to Jaisalmer is 575 kilometres. Jodhpur to Udaipur is 250. Events happen at all hours across all distances. Travel logistics are fully managed — the anchor arrives fresh, on time, and fully briefed.",
  },
];
const TESTIMONIALS = [
  {
    name:"Sharma Family — Jodhpur",
    quote:"Umaid Bhawan Palace has seen a thousand anchors. Yash was the first one who matched the venue without trying to overshadow it. The grandeur of the space and the warmth of the family — both preserved simultaneously.",
    event:"Palace Wedding · Umaid Bhawan Palace, Jodhpur",
  },
  {
    name:"Kapoor Family — Udaipur",
    quote:"Taj Lake Palace at sunset with 200 international guests and two families from different states. The bilingual hosting, the NRI protocols, the emotional moments — every single element landed exactly right.",
    event:"Destination Wedding · Taj Lake Palace, Udaipur",
  },
  {
    name:"Events Head — National Brand",
    quote:"We've run corporate summits across five Rajasthan cities. The anchor is the highest-risk element of any live event. Yash is the only anchor we've worked with who has never, not once, required a rescue.",
    event:"Corporate Summit Series · Jaipur · Udaipur · Jodhpur",
  },
];
const FAQS = [
  {
    q:"Who is the best anchor in Rajasthan?",
    a:"Anchor Yash Soni is Rajasthan's 4.9★ rated event host with 1,100+ events across the state — Jaipur palace buyouts, Udaipur lake palace destination weddings, Jodhpur fort Sangeets, Jaisalmer desert camps, and corporate galas at JECC Sitapura. Bilingual Hindi/English, zero paper scripts, and full pan-Rajasthan availability.",
  },
  {
    q:"Which cities in Rajasthan do you anchor events in?",
    a:"Full coverage across Rajasthan — Jaipur (home base), Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer, and Bikaner. Smaller heritage cities and resort properties are also covered depending on availability. WhatsApp the city and date for immediate availability confirmation.",
  },
  {
    q:"Do you anchor destination weddings in Rajasthan?",
    a:"Yes. Destination weddings in Rajasthan are a core specialisation — particularly Udaipur (Taj Lake Palace, Oberoi Udaivilas, Leela), Jodhpur (Umaid Bhawan Palace, Mehrangarh Fort), and Jaisalmer (Suryagarh, Serai). NRI families and international guests are handled with full bilingual hosting and international protocol management.",
  },
  {
    q:"Can you anchor events at palace venues in Rajasthan?",
    a:"Yes. Palace venue anchoring is the primary specialisation across Rajasthan. Rambagh Palace, Fairmont Jaipur, Leela Palace, Taj Lake Palace, Oberoi Udaivilas, Umaid Bhawan Palace, Mehrangarh Fort, Suryagarh, and Narendra Bhawan have all been worked with. Each property has its own protocols — all navigated from experience.",
  },
  {
    q:"Do you handle NRI and international guests at Rajasthan events?",
    a:"Yes. Bilingual Hindi/English hosting with international protocol management is standard for destination weddings across Rajasthan. Families from the UK, USA, Canada, and Gulf regularly choose Rajasthan for weddings — the anchor needs to ensure every guest, regardless of background, feels fully included.",
  },
  {
    q:"What is the process for booking an anchor in Rajasthan?",
    a:"WhatsApp the event city, date, venue, expected guest count, and event type. Availability is confirmed within the hour. A quote follows. Token payment confirms the booking. Pre-event coordination, script development, and briefing happen over the following weeks.",
  },
  {
    q:"How do you manage acoustic challenges in Rajasthan's heritage venues?",
    a:"Fort courtyards, haveli interiors, and desert open-air venues each present specific acoustic problems that standard anchors can't handle. Voice projection technique, mic positioning, crowd placement, and energy management all adapt completely to the venue. This comes from years of work at these specific properties.",
  },
  {
    q:"Do you anchor corporate events and conferences in Rajasthan?",
    a:"Yes. Corporate events at JECC Sitapura in Jaipur, conference hotels across Udaipur and Jodhpur, and national brand summits across the state. The corporate register is completely different from wedding hosting — sharp, concise, brand-aligned, and unscripted.",
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
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};
// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function AnchorInRajasthan() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify([faqSchema, localBusinessSchema]) }}/>
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/best-anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Anchor in Rajasthan</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image src="/gallery-5.webp" alt="Anchor in Rajasthan — palace wedding event host across Rajasthan"
            fill priority quality={100} className="object-cover" sizes="100vw"
            style={{ filter:"grayscale(15%)", opacity:.4 }}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-7">
              <MapPin size={12} className="text-[#D4AF37]"/>
              <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[.3em]">Anchor in Rajasthan · 7+ Cities</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[.88] tracking-tighter uppercase mb-7">
              Rajasthan&apos;s<br/><G>Premier Anchor.</G>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-2">
                  Jaipur · Udaipur · Jodhpur · Jaisalmer · Pushkar · Alwar · Ranthambore · Mount Abu · Kumbhalgarh · Mandawa · Bikaner · Kota · Bharatpur · Chittorgarh. One anchor. 8 years experience. Unscripted.
                </p>
                <p className="text-zinc-500 text-sm">1100+ events · 4.9★ · Available pan-Rajasthan</p>
              </div>
              <div className="flex gap-3 flex-wrap shrink-0">
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <button className="px-9 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.35)] active:scale-95">
                    Check Availability →
                  </button>
                </a>
                <Link href="/best-anchor-in-jaipur">
                  <button className="px-7 py-4 border border-white/20 text-zinc-300 text-sm rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                    Jaipur Hub →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. ANIMATED STATS
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-[#D4AF37]/12">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s,i) => (
              <Reveal key={i} delay={i*.07}>
                <div className="text-center py-10 md:py-14 border-r border-white/5 last:border-r-0">
                  <s.icon size={16} className="text-[#D4AF37] mx-auto mb-3 opacity-60"/>
                  <div className="text-4xl md:text-5xl font-black mb-1 gs">
                    <Counter target={s.val} suffix={s.suffix}/>
                  </div>
                  <p className="text-zinc-200 text-[11px] font-semibold uppercase tracking-widest mb-0.5">{s.label}</p>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-wider">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. RAJASTHAN HUB — intro
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Royal State</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              One Anchor.<br/>All of <G>Rajasthan.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Rajasthan's wedding and event circuit is unlike any other state in India. The venues are centuries-old palaces and forts with acoustic properties that break unprepared anchors. The families are royal lineage with cultural expectations that generic hosting can't meet. The destination wedding guests are international, NRI, and multilingual.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Seven cities. Every major palace property. Every event format. Bilingual Hindi/English with genuine Rajasthani cultural fluency — not a translated template. This is what anchoring across Rajasthan actually requires.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Jaipur","Udaipur","Jodhpur","Jaisalmer","Pushkar","Bikaner","Ajmer"].map(c => (
                <span key={c} className="text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1.5 rounded-full">{c}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <div className="img-h relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
              <Image src="/gallery-3.webp" alt="Anchor in Rajasthan palace wedding heritage venue"
                fill quality={100} className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                style={{ filter:"grayscale(10%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Pan-Rajasthan · All Venues</p>
                <p className="text-white text-xs">Palace. Fort. Desert camp. Heritage haveli. Every format covered.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. CITY CARDS — internal linking hub
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">City by City</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Seven Cities. <G>One Standard.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map((c, i) => (
              <Reveal key={i} delay={i*.07}>
                <Link href={c.href}>
                  <div className={`city-card border rounded-2xl p-7 cursor-pointer h-full relative overflow-hidden ${
                    c.highlight
                      ? "border-[#D4AF37]/40 bg-[#D4AF37]/4"
                      : "border-white/8 bg-[#0a0a0a]"
                  }`}>
                    {c.highlight && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"/>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="city-name text-xl font-black uppercase tracking-tight text-white transition-colors">{c.city}</p>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mt-1 inline-block ${
                          c.highlight ? "bg-[#D4AF37] text-black" : "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25"
                        }`}>{c.tag}</span>
                      </div>
                      <ChevronRight size={16} className="text-zinc-600 mt-1"/>
                    </div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-3 font-medium">{c.venues}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. EVENT TYPES — 6 cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">Event Formats</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Every Format. <G>Every City.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENT_TYPES.map((e,i) => (
              <Reveal key={i} delay={i*.07}>
                <Link href={e.href}>
                  <div className="border border-white/8 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all group hover:bg-zinc-900/60 cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition-all">
                      <e.icon size={16} className="text-[#D4AF37] group-hover:text-black transition-colors"/>
                    </div>
                    <h3 className="text-sm font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">{e.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{e.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. GALLERY — 5 image bento
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Across Rajasthan</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight"><G>Royal Events.</G></h2>
              </div>
              <Link href="/portfolio"><span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 cursor-pointer">Portfolio →</span></Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src:"/gallery-4.webp", alt:"Palace wedding anchor Rajasthan",                span:"col-span-2 row-span-2" },
              { src:"/gallery-1.webp", alt:"Destination event anchor Udaipur Rajasthan" },
              { src:"/gallery-2.webp", alt:"Fort Sangeet anchor Jodhpur Rajasthan" },
              { src:"/gallery-5.webp", alt:"Desert wedding anchor Jaisalmer Rajasthan",     span:"col-span-2" },
              { src:"/gallery-3.webp", alt:"Heritage haveli wedding host Rajasthan" },
            ].map((img,i) => (
              <Reveal key={i} delay={i*.05}>
                <div className={`img-h relative overflow-hidden rounded-xl border border-white/8 hover:border-[#D4AF37]/40 transition-all ${img.span||""}`}>
                  <Image src={img.src} alt={img.alt} fill quality={100} className="object-cover"
                    style={{ filter:"grayscale(15%)" }} sizes="(max-width:768px) 50vw, 33vw"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. WHY — 4 pillars
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-4">The Standard</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Why Rajasthan Events <G>Choose This Anchor.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_RAJASTHAN.map((w,i) => (
              <Reveal key={i} delay={i*.08}>
                <div className="bg-zinc-900/40 border border-white/8 hover:border-[#D4AF37]/30 rounded-2xl p-7 transition-all h-full">
                  <p className="text-4xl font-black text-[#D4AF37]/15 mb-4 leading-none">{w.num}</p>
                  <h3 className="text-sm font-black text-white mb-3 uppercase tracking-tight">{w.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">4.9★ Verified</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase"><G>Across Rajasthan.</G></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t,i) => (
              <Reveal key={i} delay={i*.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col h-full border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_,j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]"/>)}
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
      {/* ══════════════════════════════════════
          9. SCROLLING TICKER
      ══════════════════════════════════════ */}
      <section className="py-8 border-b border-white/5 overflow-hidden mask-fade">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {["Jaipur","Udaipur","Jodhpur","Jaisalmer","Pushkar","Bikaner","Ajmer","Palace Weddings","Desert Sangeets","Fort Ceremonies","NRI Families","1100+ Events","4.9★ Rating"].map((t,i) => (
                <span key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block"/>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. FAQ
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-3">Planning FAQs</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Anchor in <G>Rajasthan FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,idx) => (
              <Reveal key={idx} delay={idx*.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-rj-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          11. CITY LINKS — internal link grid
      ══════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-5 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">Explore by City</p>
              <h2 className="text-2xl md:text-3xl font-bold">All Rajasthan <G>Anchoring Pages.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon:Crown,    label:"Best Anchor Jaipur",   href:"/best-anchor-in-jaipur",    desc:"Jaipur headquarters" },
              { icon:MapPin,   label:"Anchor in Jaipur",     href:"/anchor-in-jaipur",         desc:"Full city guide" },
              { icon:Heart,    label:"Wedding Anchor",       href:"/wedding-anchor-jaipur",    desc:"All wedding formats" },
              { icon:Music2,   label:"Sangeet Host",         href:"/sangeet-anchor-jaipur",    desc:"High-energy Sangeet" },
              { icon:Sparkles, label:"Haldi Anchor",         href:"/haldi-anchor-jaipur",      desc:"Pre-wedding ceremonies" },
              { icon:Globe,    label:"Destination Weddings", href:"/destination-wedding-anchor",desc:"NRI & international" },
              { icon:Building2,label:"Corporate Events",     href:"/corporate-event-anchor-jaipur",desc:"JECC & conferences" },
              { icon:Mic2,     label:"Mehendi Anchor",       href:"/mehendi-anchor-jaipur",    desc:"Ladies events" },
            ].map((r,i) => (
              <Reveal key={i} delay={i*.04}>
                <Link href={r.href}>
                  <div className="border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-4 text-center transition-all group cursor-pointer hover:bg-zinc-900/50">
                    <r.icon size={16} className="text-[#D4AF37] mx-auto mb-2"/>
                    <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{r.label}</p>
                    <p className="text-zinc-600 text-[9px] mt-0.5">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-16 mb-10">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[.3em] mb-2">National Reach</p>
              <h2 className="text-2xl md:text-3xl font-bold">Premium National <G>Destinations.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label:"Anchor in Goa",       href:"/anchor-in-goa" },
              { label:"Anchor in Mumbai",    href:"/anchor-in-mumbai" },
              { label:"Anchor in Delhi NCR", href:"/anchor-in-delhi" },
              { label:"Anchor in Bangalore", href:"/anchor-in-bangalore" },
              { label:"Anchor in Hyderabad", href:"/anchor-in-hyderabad" },
              { label:"Anchor in Chennai",   href:"/anchor-in-chennai" },
              { label:"Anchor in Kolkata",   href:"/anchor-in-kolkata" },
              { label:"Anchor in Andaman",   href:"/anchor-in-andaman" },
            ].map((r,i) => (
              <Reveal key={i} delay={i*.04}>
                <Link href={r.href}>
                  <div className="border border-white/5 hover:border-[#D4AF37]/30 rounded-xl p-3 text-center transition-all group cursor-pointer bg-white/2 hover:bg-white/5">
                    <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">{r.label}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          12. SCARCITY CTA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-5 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/6 to-transparent pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[15vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">RAJASTHAN</span>
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <Reveal>
            <MapPin size={24} className="text-[#D4AF37] mx-auto mb-6 opacity-60"/>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-[.9]">
              Ready to <G>Execute</G><br/>Across Rajasthan.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">Palace venue peak season books 6–8 weeks in advance.</p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp the city, date, and venue — availability confirmed within the hour.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Check Availability
              </button>
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[9px] uppercase tracking-widest">
              {[
                ["/best-anchor-in-jaipur","Best Anchor Jaipur"],
                ["/anchor-in-jaipur","Anchor in Jaipur"],
                ["/destination-wedding-anchor","Destination Wedding"],
                ["/wedding-anchor-jaipur","Wedding Anchor"],
                ["/corporate-event-anchor-jaipur","Corporate Events"],
                ["/contact","Contact"],
              ].map(([h,l]) => (
                <Link key={h} href={h}><span className="hover:text-[#D4AF37] transition-colors">{l}</span></Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}