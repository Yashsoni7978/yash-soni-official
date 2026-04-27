"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarCheck, CheckCircle2, Crown, Flower2, Gem, Globe, Heart, Landmark, MapPin, Mic2, Minus, Music2, Plus, ShieldCheck, Sparkles, Star, Users, Wind } from "lucide-react";

const GOLD = "#D4AF37";
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20planning%20a%20destination%20wedding%20in%20Mount%20Abu.%20Can%20you%20check%20availability%3F";

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
    style={{ backgroundImage: "url('/texture/mount-abu.webp')", backgroundColor: GOLD }}
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

const MOUNT_ABU_IDENTITY = [
  {
    icon: Wind,
    title: "The Hill Station Acoustic",
    desc: "Rajasthan's only hill station presents unique hosting dynamics. The air is thinner, the evenings are colder, and the open-air venues on the Aravalli peaks—like Cama Rajputana Club—do not trap sound the way a walled fort does. Sound dissipates quickly. An anchor here must understand how to project energy into open mountain air without simply increasing the volume. It requires a specific vocal technique and crowd containment strategy."
  },
  {
    icon: Globe,
    title: "The Gujarat-Rajasthan Bridge",
    desc: "Geographically and culturally, Mount Abu sits exactly on the border of Gujarat and Rajasthan. The vast majority of destination weddings here are hosted by affluent Gujarati families who want a Rajasthani heritage aesthetic within driving distance. The event register must seamlessly bridge Gujarati warmth and community feel with the formal Rajasthani royal heritage setting—failing to balance both leaves half the guest list alienated."
  },
  {
    icon: Landmark,
    title: "Jain Heritage Protocol",
    desc: "Mount Abu is home to the Dilwara Temples, one of the most sacred Jain pilgrimage sites in the world. Consequently, the region is a premier destination for elite Jain community weddings. Hosting a Jain ceremony requires strict adherence to specific dietary, ceremonial, and cultural protocols. An anchor who is unaware of these boundaries, or who uses generic Punjabi-style wedding energy at a traditional Jain function, compromises the entire event."
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Jain Heritage Wedding Host",
    desc: "Specialised anchoring for Jain community weddings in Mount Abu. Full understanding of the nuanced ceremonial protocol, strict adherence to cultural expectations, and the ability to maintain celebratory energy without crossing the boundaries of community propriety. From the quiet solemnity of the core rituals to the joy of the family reception.",
    tag: "Shaadi"
  },
  {
    icon: Music2,
    title: "Nakki Lake Sangeet Emcee",
    desc: "High-energy Sangeet nights at venues with open Aravalli views and Nakki Lake backgrounds. Managing the cooling evening temperatures and the open-air acoustics while keeping the crowd locked in on the dance floor. Bilingual delivery (Hindi/Gujarati/English) to ensure multi-generational Gujarati families stay completely engaged.",
    tag: "Sangeet"
  },
  {
    icon: Flower2,
    title: "Aravalli Pre-Wedding Events",
    desc: "Daytime outdoor Mehndi and Haldi celebrations taking full advantage of Mount Abu's agreeable climate. Interactive, unscripted hosting that builds community among the guests—bridging the gap between the formal Rajasthani setting and the Gujarati family atmosphere before the main wedding night.",
    tag: "Pre-Wedding"
  },
  {
    icon: Building2,
    title: "Hill Station Corporate Retreat",
    desc: "Corporate offsites and leadership summits for Ahmedabad and Surat-based companies choosing Mount Abu for its proximity and climate. Professional, brand-aligned morning session anchoring combined with warm, engaging gala dinner hosting at premier heritage properties.",
    tag: "Corporate"
  },
];

const VENUES = [
  { name: "Cama Rajputana Club", tag: "Heritage Resort · Premium", icon: Crown },
  { name: "Hotel Hillock", tag: "Aravalli Views · Luxury", icon: Gem },
  { name: "Bikaner House", tag: "Heritage Property · Royal", icon: Landmark },
  { name: "Connaught House", tag: "Boutique Heritage · Colonial", icon: Building2 },
  { name: "Kesar Bhawan Palace", tag: "Eco-Heritage · Hilltop", icon: Wind },
  { name: "Palace Hotel (Bikaner House)", tag: "Lake Vistas · Historic", icon: Sparkles },
  { name: "Chacha Inn", tag: "Garden Resort · Classic", icon: MapPin },
  { name: "WelcomHeritage Oasis", tag: "Premium Resort · Escapes", icon: Star },
];

const VS = [
  { problem: "Using loud Punjabi-wedding energy that offends traditional Jain family boundaries", fix: "Calibrated Jain-heritage register — joyful, respectful, culturally appropriate" },
  { problem: "Overlooking the Gujarati guest majority in favour of generic Rajasthani hosting", fix: "Bilingual (Gujarati/Hindi/English) code-switching that validates the guest identity" },
  { problem: "Sound gets lost in the open air of peak-top venues like Cama Rajputana", fix: "Hill station acoustic projection techniques — condensing crowd focus physically" },
  { problem: "Treats a Jain ceremony like a generic Hindu wedding, missing key ritual nuances", fix: "Pre-researched protocol adherence — correct vocabulary, correct sequencing" },
  { problem: "Fails to engage elders who expect formal respect in a heritage setting", fix: "Understated elegance and Marwari/Gujarati business community fluency" },
  { problem: "Loses control of outdoor Sangeets when temperatures drop rapidly at night", fix: "Pacing techniques that keep the crowd physically engaged and active on the floor" },
];

const TESTIMONIALS = [
  {
    name: "Shah Family",
    quote: "Our family is from Surat, and bringing 400 guests to Mount Abu meant balancing our Jain traditions with a true destination experience. Yash was flawless. He was completely attuned to our community's values and ceremonial structure. The elders were respected, the youngsters danced until 2 AM, and the event felt both joyful and dignified throughout.",
    event: "Jain Destination Wedding · Cama Rajputana Club · 400 guests"
  },
  {
    name: "Mehta Family",
    quote: "The Nakki Lake Sangeet was a dream, but we were worried about the open-air acoustics and the chill in the air. Yash read the environment completely—he tightened the seating arrangement, built the energy rapidly, and used the mist and the lake atmosphere as an asset rather than a problem. He held the crowd perfectly.",
    event: "Sangeet · Hotel Hillock · 300 guests"
  },
  {
    name: "Director — Textile Group Ahmedabad",
    quote: "We chose Mount Abu for our annual dealer meet because it's easily accessible from Gujarat. We needed an anchor who could manage a senior corporate audience during the day sessions and transition into high energy for the evening gala. Yash's bilingual ability and sheer stage presence made it the best retreat we've had in a decade.",
    event: "Corporate Summit · Connaught House · 150 delegates"
  },
];

const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Mount Abu?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific, deep experience with Mount Abu's premium circuit including Cama Rajputana Club, Hotel Hillock, and Bikaner House. He brings a unique understanding of the Gujarati-Rajasthani cultural bridge, Jain ceremony protocols, and the specific open-air acoustics of Rajasthan's only hill station."
  },
  {
    q: "Do you have experience anchoring Jain community destination weddings?",
    a: "Yes. Mount Abu is a major hub for Jain weddings due to the proximity of the Dilwara Temples. Jain ceremonies require a distinct hosting register—one that is celebratory but maintains strict boundaries regarding respect, decorum, and specific ritual vocabulary. Applying standard 'big fat Indian wedding' templates here often causes discomfort among the elders; having an anchor who understands these nuances is critical."
  },
  {
    q: "Are you comfortable hosting for predominantly Gujarati guest lists?",
    a: "Absolutely. Around 80% of destination weddings in Mount Abu are hosted by Gujarati families (from Ahmedabad, Surat, or the diaspora) who appreciate the Rajasthani heritage setting without the long travel to Jaipur. My hosting smoothly integrates Gujarati cultural touchpoints and bilingual greetings so the family feels completely at home in the Rajasthani environment."
  },
  {
    q: "How do you handle the acoustics of open-air hilltop venues like Cama Rajputana Club?",
    a: "Hill station sound behaves differently than fort or indoor hotel sound. In open, high-altitude venues like Cama Rajputana, sound has nothing to bounce off and dissipates instantly into the valley. I work closely with your sound team on dynamic range and speaker placement, but more importantly, I use crowd-clustering techniques to pull the audience closer to the stage, ensuring engagement isn't lost to the open air."
  },
  {
    q: "Can you manage events if the temperature drops drastically during a Mount Abu winter Sangeet?",
    a: "Yes. In December and January, Mount Abu nights can be freezing. When the temperature drops, you cannot let the Sangeet lag or people will retreat to their rooms. The anchor must accelerate the pacing, minimize long speeches, and move the crowd physically into interactive segments and dancing much faster. It's an environmental event-management skill."
  },
  {
    q: "Do you anchor corporate retreats in Mount Abu?",
    a: "Yes. Mount Abu is a favored accessible retreat destination for corporate teams from Gujarat. I frequently anchor leadership summits, gala dinners, and team-building events that require a polished, brand-aware, professional delivery—switching between formal corporate structure during the day and entertainment at night."
  },
  {
    q: "Have you hosted at Hotel Hillock?",
    a: "Yes, Hotel Hillock is one of my regular venues in Mount Abu. Its multi-level spaces and Aravalli views offer great versatility, but coordinating guest movement between the indoor banquets and outdoor terraces requires firm, clear anchoring. I ensure transitions are smooth without killing the momentum of the event."
  },
  {
    q: "When should we book you for a Mount Abu wedding?",
    a: "Mount Abu has a very concentrated peak season (October to February) and a much smaller inventory of premium heritage rooms compared to Udaipur or Jaipur. Therefore, dates at top properties book out very early. My calendar aligns with venue availability. Reach out on WhatsApp the moment your venue is secured."
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

export default function MountAbuPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />

      {/* ══ 1. HERO ══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/varmala-fireworks-color-shots.webp" alt="Best Anchor in Mount Abu — Nakki Lake and Aravalli Hills" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Best Event Anchor · Mount Abu · The Hill Station</span>
            </div>
            <h1 className="font-black uppercase tracking-tighter leading-[0.82] mb-8">
              <span className="block text-white text-[17vw] md:text-[12vw] lg:text-[9rem] opacity-90 drop-shadow-2xl">ANCHOR</span>
              <span
                className="block text-[13vw] md:text-[9vw] lg:text-[7rem] bg-clip-text text-transparent bg-cover bg-center mt-2 pb-4"
                style={{ backgroundImage: "url('/texture/mount-abu.webp')" }}
              >
                MOUNT ABU
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              The premier choice for <G>Jain destination weddings</G>, hill station Sangeets, and Gujarati-Rajasthani cross-cultural celebrations atop the Aravalli range.
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
                Beyond <G>Announcements.</G><br />Beyond Scripts.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                With 8+ years on stage and 1,100+ events handled, <strong className="text-white">Anchor Yash Soni</strong> has built a reputation as the most technically proficient and culturally aware host in Rajasthan's unique hill station environment.
              </p>
              <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed font-light">
                Mount Abu is not just another Rajasthan city; it is an acoustic and cultural anomaly. From the open air of <strong className="text-[#D4AF37]">Cama Rajputana Club</strong> to the lakeside terraces of Nakki Lake, Yash commands these challenging environments with zero reliance on paper scripts.
              </p>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
                More importantly, his mastery of the Gujarati-Rajasthani cultural intersection and his flawless execution of Jain heritage protocols make him the single most reliable anchor for the specific demographic that chooses Mount Abu for their most important life events.
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="Anchor Yash in Mount Abu" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. MOUNT ABU IDENTITY ══ */}
      <section className="py-20 md:py-28 px-5 md:px-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Why Mount Abu is Different</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              A Hill Station Requires<br />a <G>Higher Frequency.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mb-14 font-light">
              You cannot host a wedding at 4,000 feet the same way you host it on the plains. The cold air affects crowd energy, the open mountain peaks scatter acoustic projection, and the deeply rooted Jain and Gujarati guest demographics demand a specific cultural respect. Mount Abu requires a host who understands environmental event management as perfectly as they understand the microphone.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {MOUNT_ABU_IDENTITY.map((item, i) => (
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
                Jain Ceremonies to<br /><G>Aravalli Sangeets.</G>
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
              <h2 className="text-2xl md:text-3xl font-black uppercase">Hilltop Estates. <G>Known From Inside.</G></h2>
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
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Mount Abu Challenge</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Gujarati Warmth.<br /><G>Jain Propriety.</G>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
              Mount Abu is technically Rajasthan, but functionally, it is the premier heritage destination for Gujarat's elite. Families driving up from Ahmedabad and Surat want the Rajputana visual aesthetic but crave Gujarati hospitality and cultural comfort. If an anchor only speaks formal royal Hindi and ignores this demographic reality, the connection with the audience is broken instantly.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              Furthermore, the prominence of Jain weddings here means the anchor must be deeply educated in the community's protocols. Knowing when to elevate the energy and when to step back in reverence is the mark of a seasoned professional. You cannot 'wing' a Jain ceremony.
            </p>
            <p className="text-zinc-300 text-sm font-semibold border-l-2 border-[#D4AF37]/50 pl-4">
              Mount Abu cultural fluency—the Gujarati-Rajasthani bridge, the Jain protocols, and the hilltop acoustic mastery—is a highly specific trinity of skills built over years.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Jain Protocol Mastery", sub: "Respectful boundary awareness" },
                { label: "Gujarati-Hindi Code-Switch", sub: "Cultural connectivity for guests" },
                { label: "Hill Station Acoustics", sub: "Open-air projection technique" },
                { label: "Climate Pacing", sub: "Energy management in cold temps" },
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
              {["/gallery-2.webp","/gallery-5.webp","/gallery-1.webp","/gallery-3.webp","/gallery-4.webp"].map((src, i) => (
                <div key={i} className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                  <Image src={src} alt={`Anchor Yash Soni Mount Abu Aravalli event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
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
              <Image src="/varmala-fireworks-color-shots.webp" alt="Mount Abu Heritage Hill Station" fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">Mount Abu · The Aravalli Crown</p>
                <p className="text-white text-xs">Rajasthan's only hill station — requiring specialized outdoor acoustic command and deep cultural nuance.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Scale</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Nakki Lake Vistas.<br /><G>Open Air.</G><br />Zero Scripts.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
              Whether projecting past the wind at Cama Rajputana Club for a 400-guest Jain wedding reception, or maintaining the intimacy of an indoor corporate retreat at Connaught House, Yash’s stage presence scales flawlessly. Environmental challenges that derail inexperienced anchors—like dropping nighttime temperatures—are actively managed through pacing and crowd interaction.
            </p>
            <div className="p-5 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/25">
              <div className="flex items-center gap-3 text-white font-bold mb-2 text-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" /> Venue-Specific Stage Management
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Understanding the exact acoustic decay of Mount Abu's hilltop terraces and the logistical constraints of its historic properties. This ensures seamless audio coordination with the DJ and sound teams, preventing the hollow, echoing sound common at amateur hill station events.
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Real Words. <G>Mount Abu Events.</G></h2>
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
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={GOLD} className="text-[#D4AF37]" />)}
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
              {["Cama Rajputana Club","Hotel Hillock","Nakki Lake","Jain Ceremonies","Gujarati Wedding Expert","Bilingual Hindi/Gujarati","Hill Station Acoustics","4.9★ Rated","Bikaner House"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Mount Abu <G>Anchor FAQ.</G></h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem q={faq.q} a={faq.a} id={`faq-mount-abu-${idx}`} />
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
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Also Anchoring In</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rajasthan & <G>Beyond.</G></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Udaipur", href: "/anchor-in-udaipur", desc: "Lake City · 3 hrs away" },
              { icon: MapPin, label: "Jodhpur", href: "/anchor-in-jodhpur", desc: "Blue City · Marwar" },
              { icon: MapPin, label: "Kumbhalgarh", href: "/anchor-in-kumbhalgarh", desc: "Fortress · Aravallis" },
              { icon: MapPin, label: "Pushkar", href: "/anchor-in-pushkar", desc: "Holy City · Desert" },
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
              Your Hill Station Date<br /><G>Won't Wait.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-3 leading-relaxed">
              Mount Abu has fewer premium heritage properties than Udaipur or Jaipur, meaning peak winter dates disappear rapidly. I do not hold dates without confirmation.
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
              { label: "Anchor in Udaipur", href: "/anchor-in-udaipur" },
              { label: "Anchor in Kumbhalgarh", href: "/anchor-in-kumbhalgarh" },
              { label: "Anchor in Jodhpur", href: "/anchor-in-jodhpur" },
              { label: "Rajasthan Hub", href: "/anchor-in-rajasthan" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
            ))}
          </div>
          <p className="text-[11px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} ANCHOR YASH SONI · MOUNT ABU, RAJASTHAN
          </p>
        </div>
      </footer>
    </main>
  );
}
