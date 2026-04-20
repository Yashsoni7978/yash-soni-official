"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Camera, CheckCircle2, ChevronDown, Heart, MapPin, Mic, Minus, Music, Plus, ShieldCheck, Sparkles, Star, Sun, Users, Wine } from "lucide-react";



// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20a%20wedding%20anchor%20in%20Jaipur.%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";
const style = `
  @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  .sparkle-text { background-size:200% auto; animation:shimmer 4s linear infinite; }
`;
// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const revealUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
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
const G = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);
// Keeps original SectionHeading structure — SEO fix: subtitle is span, title is h2
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className={`text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3 font-bold ${align === "center" ? "justify-center" : "justify-start"}`}>
        {align === "center" && <span className="w-8 h-px bg-[#D4AF37]" aria-hidden="true" />}
        {subtitle}
        <span className="w-12 h-px bg-[#D4AF37]" aria-hidden="true" />
        {align === "center" && <span className="w-8 h-px bg-[#D4AF37]" aria-hidden="true" />}
      </span>
      <h2 className="text-4xl md:text-6xl font-black leading-tight text-white uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);
// ─────────────────────────────────────────────
// DATA — SEO text upgraded throughout
// ─────────────────────────────────────────────
const WEDDING_TYPES = [
  {
    title: "Hindu Weddings",
    desc: "Expert Vedic ritual commentary, soulful Pheras narration, and commanding Baraat energy. The best wedding anchor in Jaipur for traditional Hindu ceremonies across all venues.",
    icon: "🕉️"
  },
  {
    title: "Punjabi Weddings",
    desc: "Unmatched energy for Dhol entries, Bhangra crowd activation, and high-voltage cocktail evenings. Farmhouse weddings on Ajmer Road are a Punjabi Sangeet specialty.",
    icon: "🪘"
  },
  {
    title: "Jain Weddings",
    desc: "Sophisticated, respectful hosting that deeply honours Jain traditions and family values. Elegant hosting for premium banquet venues across Mansarovar and Vaishali Nagar.",
    icon: "🪷"
  },
  {
    title: "Islamic Nikkah",
    desc: "Grace and dignity for the Walima and Nikkah ceremony — poetic Urdu hosting and thoughtful bilingual narration for the sacred milestones.",
    icon: "🌙"
  },
  {
    title: "Christian Weddings",
    desc: "Classy, formal emceeing for the Toast, Cake Cutting, and First Dance. Crisp English hosting with the warmth that makes every family feel included.",
    icon: "⛪"
  },
  {
    title: "Cross-Cultural",
    desc: "Seamlessly blending diverse traditions for modern, global destination couples flying into Jaipur from the UK, USA, Canada, and Gulf. Bilingual. Protocol-aware. Fully adaptable.",
    icon: "🤝"
  }
];
const EVENT_FLOW = [
  { title: "Welcome Lunch", icon: Sun },
  { title: "Haldi Games", icon: Sparkles },
  { title: "Mehendi Sangeet", icon: Music },
  { title: "Gala Night", icon: Wine },
  { title: "Varmala", icon: Heart },
  { title: "The Pheras", icon: ShieldCheck },
  { title: "Grand Reception", icon: Camera },
  { title: "After Party", icon: Users },
];
// Location-specific coverage — SEO signals
const WEDDING_ZONES = [
  { zone: "Kukas & Amer Road", type: "Palace & Heritage Weddings", note: "NRI families, international guests, heritage protocol" },
  { zone: "Ajmer Road & Bhankrota", type: "Farmhouse Sangeet Specialist", note: "1,000–1,500 guests, packed floors until 4 AM" },
  { zone: "Mansarovar & Vaishali Nagar", type: "Premium Banquet Weddings", note: "Urban elite families, milestone celebrations" },
  { zone: "Sitapura & JLN Marg", type: "5-Star Hotel Weddings", note: "Fairmont, Marriott, ITC Rajputana" },
];
const FAQS = [
  {
    q: "Who is the best wedding anchor in Jaipur for premium weddings?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated wedding anchor with 1,100+ weddings hosted across Rajasthan and India. He specialises in luxury weddings at palace venues in Kukas and Amer Road, farmhouse Sangeets on Ajmer Road, and NRI destination weddings. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top choice for elite families."
  },
  {
    q: "Do you prepare scripts for family members hosting performances?",
    a: "Yes. I know Chachas and Masis get nervous. I provide simple, funny script templates and do a quick 10-minute rehearsal with family members before the show so they look confident and professional on stage. This is included as part of the preparation for every Sangeet."
  },
  {
    q: "Can you handle a crowd that is shy to dance or participate?",
    a: "That is a specialty. I use interactive Ice-Breaker games and crowd psychology techniques that naturally pull even the shyest guests onto the floor — without force or awkwardness. The dance floor at every Sangeet I host ends up packed. That is the benchmark."
  },
  {
    q: "Do you travel for destination weddings across Rajasthan and India?",
    a: "Absolutely. While Jaipur is the base, I regularly host destination weddings in Udaipur, Jodhpur, Jaisalmer, Pushkar, and across India. Travel logistics and accommodation are structured into the booking terms. Early enquiry is recommended as destination slots fill faster."
  },
  {
    q: "What is your hosting style — traditional or modern?",
    a: "Both, and knowing which to use when is the craft. High-energy, sharp wit for the Sangeet and Baraat. Deeply traditional, poetic, and sophisticated for the Varmala and Pheras. The ability to shift between these registers seamlessly — without the room noticing the switch — is what sets a real wedding anchor apart."
  },
  {
    q: "Do you provide fluent commentary in English and Hindi?",
    a: "Yes, fluently in both. For NRI families with international guests, I switch between Hindi and English seamlessly — sometimes mid-sentence — without breaking the room's energy. I also add Marwari and Rajasthani cultural touches to connect with family elders."
  },
  {
    q: "What happens if the wedding timeline runs late?",
    a: "Indian weddings always run late — I plan for it. I carry a library of crowd interactions, games, and filler moments specifically designed for unexpected gaps. When the delay happens, the guests don't see a problem. They see a planned crowd moment. That is the real skill."
  },
  {
    q: "How far in advance should we book a wedding anchor in Jaipur?",
    a: "Jaipur's peak wedding season (October–February) fills 6–8 months in advance. I do not maintain a waitlist and do not send replacements. Once your date is confirmed, it is exclusively reserved for your event. The moment your venue is locked, reach out via WhatsApp."
  }
];
// ─────────────────────────────────────────────
// FAQ ITEM — keeps original hover-to-open behaviour
// ─────────────────────────────────────────────
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-3xl border transition-all duration-300 ${
        isOpen ? "border-[#D4AF37] bg-[#D4AF37]/5" : "border-white/10 bg-transparent"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
      >
        <span className={`font-bold text-base md:text-lg pr-6 transition-colors leading-snug ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
          isOpen ? "bg-[#D4AF37] text-black" : "border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
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
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
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
export default function WeddingAnchor() {
  const [index, setIndex] = useState(0);
  const heroImages = ["/hero-slide-1.webp", "/gallery-4.webp", "/service-wedding.webp"];
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);
  // FAQ JSON-LD — injected in page (LocalBusiness is in layout)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };
  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      <style>{style}</style>
      {/* FAQ schema only — LocalBusiness + Breadcrumb are in layout.jsx */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ══════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════ */}
      <nav className="pt-24 md:pt-28 pb-0 px-5 md:px-10 max-w-6xl mx-auto sr-only">
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>›</span>
          <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
          <span>›</span>
          <span className="text-zinc-400">Wedding Anchor</span>
        </div>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO — H1 is the primary keyword
      ══════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={index}
              src={heroImages[index]}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover absolute inset-0"
              alt="Best wedding anchor in Jaipur hosting a luxury wedding event"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        </div>
        <div className="relative z-20 text-center px-5 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md mb-8">
              <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">4.9★ · Best Wedding Anchor in Jaipur</span>
            </div>
            {/* H1 — primary keyword */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
              The Voice of <br /> <G>Forever.</G>
            </h1>
            {/* Subhead with location keywords */}
            <p className="text-zinc-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-4">
              Jaipur&apos;s most trusted wedding anchor — palace weddings in Kukas, Sangeets on Ajmer Road, and destination weddings across Rajasthan.
            </p>
            <p className="text-zinc-500 text-sm mb-10 tracking-wide">
              1,100+ weddings &nbsp;·&nbsp; Bilingual Hindi/English &nbsp;·&nbsp; 100% Unscripted &nbsp;·&nbsp; NRI specialist
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Book best wedding anchor in Jaipur">
              <button className="px-10 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] active:scale-95">
                Secure Your Wedding Date <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. PHILOSOPHY — kept original structure
          SEO: h4 upgraded to h3
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 container mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading subtitle="The Professional Approach" title="Beyond The Microphone." />
            <p className="text-zinc-300 text-lg leading-relaxed mb-10 border-l-4 border-[#D4AF37] pl-6 font-medium">
              The best wedding anchor in Jaipur isn&apos;t the one with the most years — it&apos;s the one who becomes part of your family for the night. I bridge the gap between families, transforming a room of strangers into one unforgettable celebration.
            </p>
            <div className="space-y-6">
              <div className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all">
                <Heart className="w-10 h-10 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Emotional Intelligence</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Knowing exactly when to ignite the Sangeet and when to let the sacred Varmala ritual breathe in silence. Two completely different disciplines — mastered in one.</p>
                </div>
              </div>
              <div className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all">
                <Sparkles className="w-10 h-10 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Unscripted</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Zero paper scripts in 1,100+ weddings. Every word is earned live. Spontaneous family banter and crowd psychology that feels personal, never rehearsed.</p>
                </div>
              </div>
              <div className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/30 transition-all">
                <ShieldCheck className="w-10 h-10 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Crisis Invisible</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">PA failures, delayed brides, last-minute changes — all handled invisible to your guests. Your wedding runs flawlessly. Always.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative h-[500px] md:h-[650px]">
            <div className="absolute inset-0 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/service-wedding.webp"
                className="w-full h-full object-cover"
                alt="Anchor Yash Soni — best wedding anchor in Jaipur hosting a luxury Rajasthan wedding"
                loading="eager"
              />
              <div className="absolute inset-0 border-2 border-[#D4AF37]/20 m-5 rounded-2xl pointer-events-none" />
              {/* Credential overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-4">
                  <div>
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-0.5">4.9★ Wedding Anchor</p>
                    <p className="text-white text-xs">1,100+ weddings · Jaipur & pan-India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. CULTURAL EXPERTISE — SEO text upgraded
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Cultural Fluency" title="Celebrating Every Tradition" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WEDDING_TYPES.map((w, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-8 md:p-10 rounded-3xl hover:border-[#D4AF37]/60 transition-all duration-400 group hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform duration-400 inline-block">{w.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{w.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. EVENT FLOW — same structure
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Total Show Management" title="From Welcome to After Party" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {EVENT_FLOW.map((e, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-6 md:p-8 rounded-2xl text-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all group cursor-default">
                  <e.icon className="w-7 h-7 mx-auto mb-3 text-[#D4AF37] group-hover:text-black transition-colors" />
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm group-hover:text-black transition-colors">{e.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. LOCATION COVERAGE — NEW SEO SECTION
          Replaces no location data in original
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Jaipur Coverage" title="Wedding Anchor Across All Jaipur Zones" align="center" />
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {WEDDING_ZONES.map((z, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all bg-[#0a0a0a] hover:bg-[#111] group">
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-base group-hover:text-[#D4AF37] transition-colors">{z.zone}</p>
                      <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mt-0.5">{z.type}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs ml-7 leading-relaxed">{z.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Link href="/best-anchor-in-jaipur" className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors">
                See Complete Jaipur Coverage <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. THE TRILOGY — same structure, upgraded alt text
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <SectionHeading subtitle="Signature Hosting" title="The Wedding Event Trilogy" align="center" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "The Sangeet",
                img: "/gallery-1.webp",
                icon: Music,
                desc: "High-voltage energy, interactive family roasts, and non-stop crowd activation. Dance floor packed until 4 AM — guaranteed.",
                href: "/sangeet-anchor-jaipur"
              },
              {
                title: "The Varmala",
                img: "/gallery-4.webp",
                icon: Heart,
                desc: "Poetic commentary and cinematic narration for the wedding's most emotional spotlight. Bilingual — Hindi poetry and English warmth.",
                href: "/wedding-anchor-jaipur"
              },
              {
                title: "The Reception",
                img: "/service-wedding.webp",
                icon: Star,
                desc: "Crisp, sophisticated, and formal emceeing for the grand gala finale. The closing night that guests talk about for years.",
                href: "/wedding-anchor-jaipur"
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={item.href}>
                  <div className="group relative h-[480px] md:h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/40 transition-all duration-400">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 grayscale group-hover:grayscale-0"
                      alt={`${item.title} — best wedding anchor in Jaipur`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 flex flex-col justify-end">
                      <item.icon className="w-10 h-10 text-[#D4AF37] mb-4" />
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase">{item.title}</h3>
                      <div className="h-0.5 w-8 bg-[#D4AF37] mb-3 rounded-full" />
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. FAQ — same hover behaviour kept
          Questions upgraded for Google PAA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 container mx-auto px-5 md:px-10 max-w-4xl">
        <SectionHeading subtitle="Wedding Support" title="Wedding Anchor FAQs" align="center" />
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} id={`faq-wedding-${i}`} />
          ))}
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. CTA — dark version, keeps urgency
          Original was yellow bg — changed to dark
          brand-consistent version
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[20vw] text-white/[0.02] leading-none whitespace-nowrap">WEDDING</span>
        </div>
        <div className="container mx-auto px-5 md:px-10 text-center relative z-10 max-w-2xl">
          <ScrollReveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-6 font-bold">The Final Word</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[0.95] uppercase">
              The Stage <G>Awaits.</G>
            </h2>
            <p className="text-zinc-400 text-base mb-3 leading-relaxed max-w-lg mx-auto">
              Don&apos;t leave your wedding&apos;s most important voice to chance. Jaipur&apos;s most reviewed wedding anchor books <strong className="text-[#D4AF37]">6–8 months in advance.</strong>
            </p>
            <p className="text-zinc-600 text-sm mb-10">No replacements sent. No waitlist kept. One wedding per date.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={18} /> Check Availability Now
              </button>
            </a>
            <p className="text-zinc-700 text-[10px] uppercase tracking-widest mt-5">
              Best Wedding Anchor in Jaipur · <strong className="text-[#D4AF37]">Limited Dates Remaining</strong>
            </p>
            {/* Internal links */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/sangeet-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Sangeet Host</Link>
              <Link href="/haldi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Haldi Anchor</Link>
              <Link href="/mehendi-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Mehendi Host</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
              <Link href="/best-anchor-in-jaipur" className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}