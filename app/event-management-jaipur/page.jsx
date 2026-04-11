"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, CalendarCheck, Crown, Gem, Globe, Heart, MapPin, Mic2, Minus, Music, Plus, ShieldCheck, Sparkles, Star, Users } from "lucide-react";




// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20looking%20for%20premium%20event%20management%20in%20Jaipur.%20I%27d%20like%20to%20discuss%20my%20event.";
const GOLD = "#D4AF37";
const css = `
  @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .gs{background:linear-gradient(120deg,#a8891a 0%,${GOLD} 35%,#f0d878 55%,${GOLD} 75%,#a8891a 100%);background-size:300% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
`;
const G = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage:"url('/gold-texture.webp')", backgroundColor: GOLD }}>
    {children}
  </span>
);
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:"-60px" }} transition={{ duration:.75, delay, ease:[.22,1,.36,1] }}
    className={className}>
    {children}
  </motion.div>
);
const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-10 md:mb-14 ${align==="center"?"text-center":"text-left"}`}>
    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.6 }}>
      <div className={`flex items-center gap-3 mb-4 ${align==="center"?"justify-center":"justify-start"}`}>
        <Crown className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight">{title}</h2>
    </motion.div>
  </div>
);
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${isOpen?"border-[#D4AF37]/60 bg-[#D4AF37]/5":"border-white/10 hover:border-white/20"}`}>
      <button onClick={() => setIsOpen(o=>!o)} aria-expanded={isOpen} aria-controls={id}
        className="w-full flex justify-between items-start gap-4 p-5 md:p-6 text-left focus:outline-none">
        <span className={`font-semibold text-sm md:text-base leading-snug pr-2 transition-colors ${isOpen?"text-[#D4AF37]":"text-zinc-200 group-hover:text-white"}`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all mt-0.5 ${isOpen?"bg-[#D4AF37] text-black":"border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"}`}>
          {isOpen ? <Minus size={14} aria-hidden="true"/> : <Plus size={14} aria-hidden="true"/>}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div id={id} initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
// Real numbers — no vague stats
const STATS = [
  { val: "1100+", label: "Events Hosted",      sub: "Anchoring & production" },
  { val: "70+",   label: "Corporate Brands",   sub: "National & international" },
  { val: "4.9★",  label: "Client Rating",      sub: "200+ verified reviews" },
  { val: "JECC",  label: "Sitapura Specialist", sub: "Largest Jaipur venue" },
];
const PILLARS = [
  {
    icon: Gem,
    title: "Elite Vendor Sourcing",
    desc: "We do not rely on standard vendor lists. We negotiate and source the top caterers, decorators, and technicians across India — no compromises on quality for any budget tier.",
  },
  {
    icon: ShieldCheck,
    title: "Crisis Mitigation",
    desc: "Events are unpredictable. Our management team anticipates logistical failures, weather changes, and schedule delays — resolving them silently while guests remain completely unaware.",
  },
  {
    icon: Users,
    title: "Hospitality & Protocol",
    desc: "VIP airport transfers, luxury fleet coordination, 24/7 shadow teams for family members, dedicated hospitality desks. People are managed as flawlessly as the production.",
  },
];
const CAPABILITIES = [
  {
    title: "Destination Weddings",
    items: [
      "Palace buyouts — Fairmont, Rambagh, Leela",
      "Multi-day logistics management",
      "Guest RSVP & hospitality desk",
      "NRI & international guest coordination",
    ],
  },
  {
    title: "Corporate Galas",
    items: [
      "CEO summits & conferences",
      "Product launches & brand events",
      "Award ceremonies at JECC Sitapura",
      "Dealer meets & annual days",
    ],
  },
  {
    title: "High-Profile Events",
    items: [
      "Celebrity & artist management",
      "Private concerts & music events",
      "Security protocol coordination",
      "Broadcast & livestream production",
    ],
  },
];
const VENUES = [
  { name: "JECC Sitapura",    area: "Sitapura, Jaipur",  note: "1,000+ capacity" },
  { name: "Fairmont Jaipur",  area: "Amer Road",         note: "5-Star" },
  { name: "Rambagh Palace",   area: "Bhawani Singh Road",note: "Heritage Palace" },
  { name: "Leela Palace",     area: "Civil Lines",       note: "5-Star" },
  { name: "Birla Auditorium", area: "Statue Circle",     note: "Conference" },
  { name: "ITC Rajputana",    area: "Palace Road",       note: "5-Star" },
];
const TESTIMONIALS = [
  {
    name: "Events Head, National Brand",
    quote: "Yash's management team handled a 3-day corporate summit at JECC Sitapura for 800 delegates. The logistics — venue setup, vendor coordination, speaker management, and hospitality — ran without a single visible glitch. Shadow management at its best.",
    event: "Corporate Summit · JECC Sitapura, Jaipur",
    guests: "800 delegates, 3 days",
  },
  {
    name: "Singhania Family",
    quote: "Our destination wedding had guests flying in from four countries. The hospitality desk, airport transfers, and suite allocations were managed so smoothly that our international guests thought Jaipur had a world-class concierge standard. It does — because of this team.",
    event: "Destination Wedding · Fairmont Jaipur",
    guests: "NRI family, 400 guests",
  },
  {
    name: "Marketing Director",
    quote: "The product launch at Marriott required artist management, a full broadcast setup, and a live audience of 300. Every element was executed on time, on brand, and on camera. The CEO asked specifically for the same team next quarter.",
    event: "Product Launch · Marriott, JLN Marg, Jaipur",
    guests: "300 guests, live broadcast",
  },
];
const FAQS = [
  {
    q: "Who is the best event management company in Jaipur?",
    a: "Anchor Yash Soni's event management service is a 4.9★ rated operation with 1,100+ events executed and 70+ national brands served. Specialisations include destination wedding management, corporate gala production at JECC Sitapura, VIP hospitality management, and shadow management for large-format events at Fairmont, Rambagh Palace, and Leela Palace Jaipur.",
  },
  {
    q: "Do you only manage events in Jaipur?",
    a: "While Jaipur is the headquarters and we hold deep relationships with all major Jaipur venues (JECC Sitapura, Fairmont, Rambagh, Leela, Birla Auditorium), we execute destination weddings and corporate galas across Rajasthan — Udaipur, Jodhpur, Jaisalmer — and nationally for the right engagements.",
  },
  {
    q: "We already have a decorator. Can you just provide management?",
    a: "Yes. Shadow Management is available as a standalone service. Our team acts as Executive Producers — overseeing your hired decorators and vendors, managing the timeline, coordinating on-ground logistics, and handling everything that goes wrong before the client notices.",
  },
  {
    q: "How do you handle VIP and international guest hospitality?",
    a: "A dedicated Hospitality Desk is deployed at the venue hotel. Luxury fleet coordination handles airport pickups and transfers. Shadow managers are assigned to VIP family members. Room allocation, welcome hampers, dietary management, and 24/7 support are all standard for high-tier bookings.",
  },
  {
    q: "Can you manage celebrity artists or Bollywood performers?",
    a: "Yes. Artist management covers complex technical riders, secure travel arrangements, green room protocols, and backstage coordination required for high-profile performers. The management team has handled celebrity appearances and live concert production across Rajasthan.",
  },
  {
    q: "What is shadow management and how does it work?",
    a: "Shadow management means deploying a dedicated coordinator to key stakeholders — typically one for the bride, one for the groom, one for each set of parents — who manages every logistical issue before it reaches the family. Guests celebrate. We manage. Shadow management is how a 400-person wedding feels effortless.",
  },
  {
    q: "Do you manage corporate events at JECC Sitapura?",
    a: "Yes. JECC Sitapura is Jaipur's largest convention centre and is a core specialisation. National brand summits, government events, annual day celebrations, award galas, and dealer meets for 500–2,000 delegates have all been executed at JECC. The venue's specific operational protocols and technical setup are well known from prior events.",
  },
  {
    q: "How far in advance should we book event management in Jaipur?",
    a: "For large-format events at palace properties and JECC Sitapura, 3–4 months minimum. For destination wedding management, 6–8 months is strongly recommended. No waitlists are maintained. Reach out via WhatsApp as soon as the venue and dates are confirmed.",
  },
  {
    q: "What events do you manage and what does the scope include?",
    a: "Full-scope management covers destination weddings, corporate summits, product launches, award ceremonies, dealer meets, annual days, private concerts, and celebrity events. Scope includes vendor sourcing and negotiation, complete timeline management, on-site team deployment, VIP hospitality, artist coordination, and real-time crisis management.",
  },
];
const RELATED = [
  { icon: Heart,    label: "Wedding Planning",  href: "/wedding-planning-jaipur",       desc: "Full planning service" },
  { icon: Building2,label: "Corporate Anchor",  href: "/corporate-event-anchor-jaipur", desc: "Award nights & summits" },
  { icon: Globe,    label: "Destination Wedding",href: "/destination-wedding-anchor",   desc: "Udaipur, Jodhpur, Goa" },
  { icon: Crown,    label: "Best Anchor Jaipur", href: "/best-anchor-in-jaipur",        desc: "All formats" },
];
// FAQ schema
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
export default function EventManagement() {
  return (
    <div className="bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <nav className="sr-only">
        <Link href="/">Home</Link> ›
        <Link href="/best-anchor-in-jaipur">Best Anchor in Jaipur</Link> ›
        <span>Event Management Jaipur</span>
      </nav>
      {/* ══════════════════════════════════════
          1. HERO — local image, no Unsplash
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24 px-6 md:px-20">
        {/* FIX: next/image with local image — no Unsplash */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery-4.webp"
            alt="Premium event management Jaipur — Anchor Yash Soni"
            fill priority quality={100}
            className="object-cover"
            sizes="100vw"
            style={{ filter:"grayscale(15%)", opacity:.45 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"/>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#D4AF37]"/>
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs">Anchor Yash Soni · Event Management</span>
            </div>
            {/* H1 */}
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-black leading-none mb-10 tracking-tighter uppercase">
              FLAWLESS<br />
              <span className="gs italic pr-4">EXECUTION.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
              <div>
                <p className="max-w-xl text-zinc-300 text-base md:text-xl font-light leading-relaxed mb-3">
                  Beyond planning. We engineer high-end experiences for Jaipur&apos;s most prestigious events — JECC Sitapura, Fairmont, Rambagh Palace, and Leela Palace.
                </p>
                <p className="text-zinc-500 text-sm">
                  70+ national brands &nbsp;·&nbsp; 4.9★ rated &nbsp;·&nbsp; Destination weddings &amp; corporate galas
                </p>
              </div>
              {/* PRIMARY: WhatsApp */}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <button className="px-10 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] active:scale-95">
                  Hire The Firm →
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. STATS — real numbers
      ══════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-[#D4AF37]/12">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center py-10 md:py-14 px-3 border-r border-white/5 last:border-r-0">
                  <div className="text-4xl md:text-5xl font-black mb-1 gs">{s.val}</div>
                  <div className="text-zinc-300 text-[11px] uppercase tracking-widest font-semibold mb-1">{s.label}</div>
                  <div className="text-zinc-600 text-[9px] uppercase tracking-wider">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. PILLARS — 3 management cards
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Our Methodology" title="The Pillars of Control." />
          <div className="grid lg:grid-cols-3 gap-5">
            {PILLARS.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-8 bg-zinc-900/50 border border-white/8 hover:border-[#D4AF37]/40 transition-all duration-400 rounded-2xl group h-full">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-400">
                    <item.icon className="w-7 h-7"/>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. INTRO BODY — location keywords
      ══════════════════════════════════════ */}
      <section className="py-10 md:py-16 bg-zinc-950 border-y border-white/5 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 font-bold">Jaipur's Event Management Specialists</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
              From JECC Sitapura to <G>Rambagh Palace.</G>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto mb-4">
              Every significant event venue in Jaipur has been worked with — JECC Sitapura for national brand summits and award galas, Fairmont Jaipur for destination weddings and corporate dinners, Rambagh Palace and Leela Palace for heritage luxury events, Birla Auditorium for conferences, and the major farmhouse properties on Ajmer Road for wedding weekends.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-2xl mx-auto">
              The 70+ national brands and 4.9★ rating across 200+ verified reviews come from one discipline: managing the logistics that nobody sees, so the experiences everyone remembers feel effortless.
            </p>
          </Reveal>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. GALLERY — local images only, no Unsplash
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The Work" title="In Action." align="center"/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[300px] md:h-[480px]">
            {[
              { src:"/gallery-5.webp",                alt:"Corporate event management Jaipur",        span:"col-span-2 row-span-2" },
              { src:"/gallery-2.webp",                alt:"Luxury event production Jaipur" },
              { src:"/gallery-3.webp",                alt:"VIP hospitality event Jaipur" },
              { src:"/vintage-car-couple-shoot.webp", alt:"Wedding management Jaipur",               span:"col-span-2 md:col-span-1" },
              { src:"/gallery-1.webp",                alt:"Destination wedding management Jaipur" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`relative group overflow-hidden rounded-2xl border border-white/8 hover:border-[#D4AF37]/40 transition-all ${img.span||""}`}>
                  <Image
                    src={img.src} alt={img.alt} fill quality={100}
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-600"
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
          6. CAPABILITIES — 3 col bento
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">The Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                The <G>Portfolio.</G>
              </h2>
              <p className="text-zinc-500 text-sm mt-3 italic">Scalable logistics for every magnitude.</p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-8 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-400 bg-[#050505] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"/>
                  <h3 className="text-base font-black text-white mb-6 uppercase tracking-[0.18em] group-hover:text-[#D4AF37] transition-colors">{cap.title}</h3>
                  <ul className="space-y-3">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5"/>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          7. VENUE EXPERTISE — SEO keyword grid
      ══════════════════════════════════════ */}
      <section className="py-14 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">Venue Expertise</p>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Key Jaipur <G>Event Venues.</G>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {VENUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border border-white/10 hover:border-[#D4AF37]/40 transition-all rounded-xl p-4 text-center group bg-zinc-900/20">
                  <MapPin size={12} className="text-[#D4AF37] mx-auto mb-2"/>
                  <p className="text-white text-xs font-semibold group-hover:text-[#D4AF37] transition-colors">{v.name}</p>
                  <p className="text-zinc-600 text-[9px] mt-0.5">{v.area}</p>
                  <span className="text-[8px] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/15 px-2 py-0.5 rounded-full mt-1.5 inline-block uppercase tracking-wide font-bold">{v.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          8. TESTIMONIALS — NEW
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="4.9★ Verified Reviews" title="What Clients Say." align="center"/>
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
                    <p className="text-[#D4AF37] text-[9px] uppercase tracking-wider mt-0.5">{t.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          9. FAQ — 9 questions
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Inquiries" title="Management FAQs." align="center"/>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.025}>
                <FAQItem question={faq.q} answer={faq.a} id={`faq-em-${idx}`}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          10. RELATED — internal links
      ══════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-white/5 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2 font-bold">All Services</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Management is One Part. <G>We Cover Everything.</G></h2>
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
          11. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/8 to-transparent pointer-events-none"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black text-[18vw] text-white/[0.025] leading-none whitespace-nowrap uppercase">EXECUTE</span>
        </div>
        <div className="container mx-auto px-5 relative z-10 max-w-xl">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-[0.9]">
              READY TO<br /><G className="italic">EXECUTE.</G>
            </h2>
            <p className="text-zinc-400 text-base max-w-lg mx-auto mb-3 font-light">
              You celebrate. We manage the chaos.
            </p>
            <p className="text-zinc-600 text-xs mb-10 uppercase tracking-widest">WhatsApp to discuss your event logistics.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-14 py-5 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-95">
                <CalendarCheck size={16}/> Schedule a Meeting
              </button>
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-zinc-600 text-[10px] uppercase tracking-widest">
              <Link href="/wedding-planning-jaipur"       className="hover:text-[#D4AF37] transition-colors">Wedding Planning</Link>
              <Link href="/corporate-event-anchor-jaipur" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link>
              <Link href="/destination-wedding-anchor"    className="hover:text-[#D4AF37] transition-colors">Destination Wedding</Link>
              <Link href="/event-designing"               className="hover:text-[#D4AF37] transition-colors">Event Designing</Link>
              <Link href="/best-anchor-in-jaipur"         className="hover:text-[#D4AF37] transition-colors">Best Anchor Jaipur</Link>
              <Link href="/contact"                       className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}