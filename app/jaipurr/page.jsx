"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic2, AlertTriangle, CheckCircle2, MapPin, 
  Crown, Minus, Plus, MessageCircle, Star, 
  Quote, Calendar, ShieldCheck, Users, Zap, 
  HeartHandshake, Flame, Gift
} from "lucide-react";

// --- CUSTOM LUXURY BRANDING ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD_COLOR }}
  >
    {children}
  </span>
);

const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Crown className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- DATA ARRAYS ---
const WHATSAPP_LINK = "https://wa.me/917737877978?text=Hi%20Yash,%20I%20am%20looking%20for%20the%20best%20anchor%20in%20Jaipur%20for%20an%20upcoming%20event.%20Please%20share%20your%20availability.";

const massiveStats = [
  { value: "10,000+", label: "Largest Crowd Controlled" },
  { value: "500+", label: "Successful Events Hosted" },
  { value: "100%", label: "Unscripted, Raw Energy" },
  { value: "0", label: "Awkward Silences" }
];

const eventMastery = [
  { title: "The High-Energy Sangeet", desc: "Recognized as the best wedding anchor in Jaipur, I turn families into superstars. I orchestrate dance-offs, interactive games, and an electrifying atmosphere that keeps the floor packed until 4 AM.", icon: <Flame className="w-8 h-8 text-[#D4AF37]" /> },
  { title: "Elite Corporate Summits", desc: "If you need a sharp, articulate anchor for event hosting at business galas or award shows, I bring bilingual professionalism that elevates your brand's prestige.", icon: <Users className="w-8 h-8 text-[#D4AF37]" /> },
  { title: "VIP Socials & Birthdays", desc: "Beyond massive corporate summits, I bring unscripted energy to elite social gatherings. If you need a high-energy anchor for birthday party celebrations or anniversary galas, I ensure your guests are purely entertained.", icon: <Gift className="w-8 h-8 text-[#D4AF37]" /> },
  { title: "The Royal Varmala", desc: "Weddings are deeply emotional. I bring a sophisticated, respectful, and culturally rich voice to guide your guests through the most sacred moments of your life.", icon: <HeartHandshake className="w-8 h-8 text-[#D4AF37]" /> }
];

const jaipurRegions = [
  { region: "The Grand Venues", areas: "Ajmer Road, Bhankrota, Jhotwara", vibe: "Specializing in the massive farmhouse weddings Jaipur is famous for. High-capacity lawns that require an anchor with a booming voice and elite crowd psychology." },
  { region: "The Royal Corridors", areas: "Kukas, Amer Road, Delhi Road", vibe: "Destination weddings and palace buyouts. NRI guests expect flawless bilingual hosting and supreme cultural respect from a premier anchor in Rajasthan." },
  { region: "The Urban Elite", areas: "Mansarovar, Vaishali Nagar, Nirman Nagar", vibe: "Premium mid-segment and elegant neighborhood celebrations. Focus on warm, interactive family bonding and classy humor." },
  { region: "The Corporate Hubs", areas: "Sitapura JECC, Tonk Road, JLN Marg", vibe: "Business summits, award shows, and corporate galas requiring sharp, articulate, and highly professional stage presence." },
  { region: "The Heritage Belts", areas: "Agra Road, Sikar Road, Vidyadhar Nagar", vibe: "Traditional roots meeting grand scale. Seamlessly blending deeply emotional rituals with modern, high-energy entertainment." }
];

const testimonials = [
  { name: "The Sharma Family", event: "Grand Wedding, Ajmer Road", text: "We researched many anchors in Jaipur, but we wanted someone our family could trust. Anchor Yash felt like an elder brother handling the stage. He managed a massive crowd of 1,500 people with so much respect and energy." },
  { name: "Rishabh & Anjali", event: "Sangeet Night, Mansarovar", text: "Yash is a powerhouse. He saved our Sangeet when the DJ had a technical glitch by doing a 15-minute impromptu interactive game with the crowd. Definitely the best anchor in Jaipur." },
  { name: "Dr. Manish Gupta", event: "Corporate Gala, Tonk Road", text: "I have seen veteran anchors who sound like robots reading a paper. Yash is the modern voice. Fresh, highly energetic, and genuinely connects with every single person in the room." }
];

const FAQS = [
  { q: "Why should we trust you over an anchor with 20 years of experience?", a: "Experience is good, but relevance is better. Many veteran anchors in Jaipur still rely on outdated scripts from 2010 and stand in the corner reading names. I bring modern, unscripted crowd psychology. I don't just announce; I actively entertain and manage the emotional flow of the room." },
  { q: "Can you handle massive crowds? Our guest list is huge.", a: "Absolutely. Crowd control is my ultimate strength. I have successfully anchored and held the undivided attention of over 10,000 people at a single event. A massive gathering at a farmhouse on Ajmer Road is my playground." },
  { q: "Do you travel across Rajasthan for destination events?", a: "Yes. As a leading anchor in Rajasthan, I frequently host palace buyouts in Udaipur, Jodhpur, and Jaisalmer, alongside my primary base covering every premium venue in Jaipur." },
  { q: "What kind of events do you host?", a: "I am a specialist. Whether you need the best wedding anchor in Jaipur for a Royal Sangeet, a bilingual professional for a corporate summit, or a highly interactive anchor for birthday party celebrations, I adapt my frequency to your exact crowd." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "border-white/10 bg-transparent hover:border-white/20"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
        <span className={`font-semibold text-lg pr-4 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AnchorInJaipurLeadGen() {
  const [hoveredFAQ, setHoveredFAQ] = useState(null);

  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. THE HOOK */}
      <section className="relative min-h-[95vh] flex flex-col justify-center border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/varmala-fireworks-color-shots.webp" 
            alt="Best Anchor in Jaipur Yash Soni" 
            fill 
            priority
            className="object-cover grayscale-[40%] opacity-30 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md mb-8">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">Voted Best Anchor in Jaipur</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black leading-[0.9] mb-8 uppercase tracking-tighter drop-shadow-2xl">
              I DON'T JUST SPEAK. <br /> <GoldTextureText>I COMMAND THE ROOM.</GoldTextureText>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-gray-300 font-light leading-relaxed mb-10 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
              From intimate family Haldis to commanding an audience of <strong className="text-white">over 10,000 people</strong>. I am Anchor Yash Soni. I don't use outdated scripts. I use modern crowd psychology and raw energy to make your event legendary.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-full">
                  <MessageCircle className="w-6 h-6" />
                  Check My Availability
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 2. THE MASSIVE STATS STRIP */}
      <section className="border-b border-white/5 bg-[#080808] relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5 border-x border-white/5">
            {massiveStats.map((stat, i) => (
              <div key={i} className="p-10 text-center hover:bg-white/5 transition-colors">
                <div className="text-4xl md:text-5xl font-display font-black text-[#D4AF37] mb-3">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODERN VS TRADITIONAL (The Takedown) */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Experience is good. <br/><GoldTextureText>Relevance is better.</GoldTextureText>
              </h2>
              <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">
                Many anchors boast about having "20 years of experience," but they host your 2026 event using a script from 2010. They stand in the corner and announce names. That is not anchoring. That is reading.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                I represent the modern era of hosting. I integrate seamlessly with your family. I handle <strong>last-minute technical glitches</strong> invisibly. Whether it's an anchor for event hosting or a massive wedding, I don't demand attention; I command it.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold text-white mb-8">The Yash Soni Standard</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <p className="text-gray-300 font-light">Total control over massive crowds (up to 10,000+ attendees).</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <p className="text-gray-300 font-light">Deep respect for elders and Rajasthani cultural boundaries.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <p className="text-gray-300 font-light">Bilingual fluency (English & Hindi) for NRI and global guests.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <p className="text-gray-300 font-light">Zero awkward silences. 100% stage ownership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVENT MASTERY (Services) */}
      <section className="py-32 bg-[#080808] border-b border-white/5 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <SectionHeading subtitle="The Expertise" title="Mastering Every Celebration." />
            <p className="text-gray-400 text-lg mb-16 font-light max-w-3xl">
              From the highly emotional rituals of a Varmala to the explosive energy of a Grand Sangeet, my tone and frequency adapt instantly to the environment.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {eventMastery.map((event, i) => (
                <div key={i} className="p-10 bg-[#050505] border border-white/5 rounded-[2rem] hover:border-[#D4AF37]/40 transition-all group">
                  <div className="mb-8 p-4 bg-[#D4AF37]/10 inline-block rounded-2xl group-hover:scale-110 transition-transform">{event.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">{event.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 5. THE ULTIMATE JAIPUR SEO NET */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <Crown className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Dominating the Pink City.</h2>
            <p className="text-gray-400 text-lg font-light max-w-3xl mx-auto">
              If you need an anchor, Jaipur has vastly different event cultures. A massive lawn on Ajmer Road requires a completely different anchoring style than a 5-star palace buyout in Kukas. I have mastered them all.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {jaipurRegions.map((region, i) => (
              <div key={i} className="p-8 border border-white/10 bg-[#0a0a0a] rounded-3xl hover:border-[#D4AF37]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-2xl font-bold text-white">{region.region}</h3>
                </div>
                <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">{region.areas}</p>
                <p className="text-gray-400 font-light leading-relaxed">{region.vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-32 bg-[#080808] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading subtitle="The Verdict" title="Trusted By Families." align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((test, i) => (
              <div key={i} className="p-10 bg-[#050505] border border-white/5 rounded-3xl relative">
                <Quote className="absolute top-8 right-8 w-8 h-8 text-[#D4AF37] opacity-20" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}
                </div>
                <p className="text-gray-300 font-light leading-relaxed mb-8 italic">"{test.text}"</p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-bold">{test.name}</h4>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-1">{test.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading subtitle="Clarity" title="Frequently Asked Questions." align="center" />
          <p className="text-gray-400 text-center font-light mb-16">Total transparency before you hand over the microphone.</p>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. SCARCITY CLOSE */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#050505] to-[#050505]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <AlertTriangle className="w-12 h-12 text-[#D4AF37] mx-auto mb-8 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 text-white uppercase tracking-tighter">
            DON'T LEAVE YOUR <br/> <GoldTextureText className="italic pr-4">DATE TO CHANCE.</GoldTextureText>
          </h2>
          <p className="text-gray-300 text-xl mx-auto mb-12 font-light leading-relaxed">
            I personally host every single event I book. When my calendar is full, I do not send juniors or replacements. Tap below to secure your date before another planner claims it.
          </p>
          <div className="flex justify-center">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-3 px-14 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                <MessageCircle className="w-6 h-6" />
                Claim Your Date on WhatsApp
              </button>
            </Link>
          </div>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-bold mt-8 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" /> Usually Books 6-8 Months in Advance
          </p>
        </div>
      </section>

    </main>
  );
}
