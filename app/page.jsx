import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarCheck, CheckCircle2, MapPin, Mic, Quote, ShieldCheck, Sparkles, UserCheck, Users } from "lucide-react";
import { ScrollReveal } from "./_components/ScrollReveal";
import { GoldText } from "./_components/GoldText";
import { HomeHero } from "./_components/HomeHero";
import { PlatformsMarquee } from "./_components/PlatformsMarquee";
import { ReviewsMarquee } from "./_components/ReviewsMarquee";
import { FAQSection } from "./_components/FAQSection";
import { GalleryMarquee } from "./_components/GalleryMarquee";

export const metadata = {
  title: "Anchor Yash Soni — Best Wedding & Corporate Emcee in India",
  description: "Anchor Yash Soni is India's premier event host for luxury weddings, corporate galas, and celebrity events. 1,100+ events hosted unscripted with a 4.9★ rating.",
  alternates: {
    canonical: "https://yashsoni.in",
  },
};

const WA_LINK = "https://wa.me/917737877978?text=Hi%20Yash!%20I%20found%20your%20website%20and%20I%27d%20like%20to%20check%20availability%20for%20my%20event.";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* HERO — Now a Client Component for animations */}
      <HomeHero waLink={WA_LINK} />

      {/* STATS */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-zinc-950 relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <s.icon size={22} className="text-[#D4AF37] mx-auto mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <div className="text-3xl md:text-5xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    {s.value}
                  </div>
                  <p className="text-zinc-200 text-[11px] font-bold uppercase tracking-widest mb-0.5">{s.label}</p>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-wider">{s.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
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
              <p className="text-zinc-400 text-sm md:text-8 mb-4 leading-relaxed font-light">
                Bilingual in Hindi and English. Fluent in Rajasthani culture. <strong className="text-white">Rated 4.9★ by 200+ clients across India.</strong>
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 border-b border-[#D4AF37]/50 pb-1 text-[#D4AF37] text-xs tracking-widest uppercase hover:text-white transition-colors">
                Read My Story <ArrowRight size={12} />
              </Link>
            </ScrollReveal>
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

      {/* PLATFORMS */}
      <PlatformsMarquee platforms={PLATFORMS} />

      {/* SERVICES */}
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
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
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

      {/* TRUSTED TAGS */}
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

      {/* WHY YASH */}
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

      {/* VS TABLE */}
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

      {/* LOCATIONS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">Coverage</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Pan-India <GoldText>Authority.</GoldText>
              </h2>
            </div>
          </ScrollReveal>
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

      {/* GALLERY */}
      <GalleryMarquee images={GALLERY_IMAGES} />

      {/* PROCESS */}
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

      {/* REVIEWS */}
      <ReviewsMarquee reviews={REVIEWS} />

      {/* FAQS */}
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
          <FAQSection faqs={FAQS} />
        </div>
      </section>

      {/* SCARCITY CLOSE */}
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
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#D4AF37] text-black font-bold text-base md:text-lg uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)] w-full sm:w-auto">
                <CalendarCheck size={20} /> Claim Your Date via WhatsApp
              </button>
            </Link>
            <p className="mt-5 text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
              4.9★ Rated &nbsp;·&nbsp; <strong className="text-[#D4AF37]/70">Limited Slots Remaining</strong> &nbsp;·&nbsp; 2025–2026 Season
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ══ SEO PILLAR: THE YASH SONI PHILOSOPHY ══ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 max-w-5xl">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">The Yash Soni Philosophy</p>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">
                  Mastering the <br /><GoldText>Unscripted Moment.</GoldText>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-light">
                  True event anchoring is not about reading from a paper script or shouting over the music. It is about <strong className="text-white">vulnerability, presence, and unyielding energy</strong>. As a premier wedding anchor in Jaipur and corporate emcee across India, my approach is built on the foundation of 1,100+ live stage hours where every word is calculated for impact but delivered with raw authenticity.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Whether it is a royal destination wedding at Rambagh Palace or a high-stakes corporate summit at the Taj Palace Aerocity, the anchor acts as the heartbeat of the room. My mastery lies in <strong className="text-[#D4AF37]">Reading the Energy</strong>—knowing exactly when to elevate the room for a high-octane Sangeet performance and when to hold a space of quiet dignity for a Varmala ceremony.
                </p>
              </div>
              <div className="space-y-10 lg:pt-16">
                <div>
                  <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-widest border-l-2 border-[#D4AF37] pl-4">Zero Paper Scripts</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    A script is a wall between the host and the audience. By operating entirely unscripted, I maintain 100% eye contact with your guests, allowing for spontaneous wit, organic crowd-work, and the ability to pivot instantly if the event timeline shifts.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-widest border-l-2 border-[#D4AF37] pl-4">Bilingual Command</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Hosting for the global elite requires a seamless transition between impeccable, formal English and the deep, cultural warmth of Hindi. I bridge that gap natively, ensuring international delegates and traditional family elders feel equally represented and engaged.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-widest border-l-2 border-[#D4AF37] pl-4">10,000+ Crowd Mastery</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Scale does not intimidate; it inspires. Commanding a crowd of ten thousand requires a physical stage presence and vocal resonance that can unify massive exhibition halls and sprawling desert landscapes into a single, cohesive celebration.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}

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
            <a href="https://facebook.com/anchoryashsoni" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Facebook</a>
            <a href="https://linkedin.com/in/anchoryashsoni" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
            <span className="text-[#D4AF37]">info [at] yashsoni [dot] in</span>

          </div>
          <p className="mt-8 text-zinc-700 text-[11px]">
            © {new Date().getFullYear()} Anchor Yash Soni. All rights reserved. Jaipur, Rajasthan, India.
          </p>
        </div>
      </footer>
    </main>
  );
}