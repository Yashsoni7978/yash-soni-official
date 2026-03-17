"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, Mic2, ShieldCheck, Flame, Users, HeartHandshake, Gift, 
  Quote, Plus, Minus, CheckCircle2, MapPin, Calendar, Star
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917737877978?text=Hi%20Yash,%20I%20am%20looking%20for%20the%20best%20anchor%20in%20Jaipur%20for%20an%20upcoming%20event.";

// --- ADVANCED UI COMPONENTS ---
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const GoldText = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
    {children}
  </span>
);

export default function PremiumMassiveJaipurPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [hoveredFAQ, setHoveredFAQ] = useState(null);

  // Parallax values for hero
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#020202] text-zinc-200 min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black sm:overflow-x-visible overflow-x-hidden">
      
      {/* 1. HERO WITH PARALLAX */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0 z-0">
          <Image 
            src="/varmala-fireworks-color-shots.webp" 
            alt="Best Anchor in Jaipur Yash Soni" 
            fill 
            priority
            className="object-cover grayscale-[60%] opacity-20 scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-[#020202]/80 to-[#020202]"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 flex items-center gap-3"
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-zinc-300 text-xs uppercase tracking-[0.3em] font-medium">Voted Best Anchor in Jaipur</span>
          </motion.div>

          <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase text-white mix-blend-difference mb-8">
            Command <br /> <GoldText>The Room.</GoldText>
          </h1>

          <FadeUp delay={0.2} className="max-w-3xl">
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-12 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
              From intimate family Haldis to commanding an audience of <strong className="text-white">over 10,000 people</strong>. I am Anchor Yash Soni. I don't use outdated scripts. I use modern crowd psychology and raw energy to make your event legendary.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <Link href={WHATSAPP_LINK} target="_blank">
              <button className="group relative px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest overflow-hidden flex items-center gap-3 transition-transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">Check Availability <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" /></span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 2. MODERN MASSIVE STATS STRIP */}
      <section className="py-16 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/5">
            {[
              { val: "10,000+", label: "Largest Crowd Controlled" },
              { val: "500+", label: "Successful Events Hosted" },
              { val: "100%", label: "Unscripted, Raw Energy" },
              { val: "0", label: "Awkward Silences" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-4xl md:text-5xl font-display font-black text-white">{stat.val}</span>
                <span className="text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-bold mt-3 leading-relaxed">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE TAKEDOWN (Tech-Style Layout) */}
      <section className="py-32 bg-[#020202] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">
                Experience is good. <br/><GoldText>Relevance is better.</GoldText>
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                <p>
                  Many anchors boast about having "20 years of experience," but they host your 2026 event using a script from 2010. They stand in the corner and announce names. That is not anchoring. That is reading.
                </p>
                <p>
                  I represent the modern era of hosting. I integrate seamlessly with your family. I handle <strong>last-minute technical glitches</strong> invisibly. Whether it's an anchor for event hosting or a massive wedding, I don't demand attention; I command it.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-zinc-900/40 p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
                <h3 className="text-2xl font-bold text-white mb-10">The Yash Soni Standard</h3>
                <div className="space-y-8">
                  {[
                    "Total control over massive crowds (up to 10,000+ attendees).",
                    "Deep respect for elders and Rajasthani cultural boundaries.",
                    "Bilingual fluency (English & Hindi) for NRI and global guests.",
                    "Zero awkward silences. 100% stage ownership."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <p className="text-zinc-300 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID: EVENT MASTERY (All Text Included) */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight mb-4">Mastering Every Celebration.</h2>
            <p className="text-zinc-500 text-lg max-w-2xl">From the highly emotional rituals of a Varmala to the explosive energy of a Grand Sangeet, my tone adapts instantly.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1} className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-zinc-900/50 border border-white/5 p-12 flex flex-col justify-end min-h-[350px]">
              <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"><Flame className="w-6 h-6 text-[#D4AF37]" /></div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">The High-Energy Sangeet</h3>
              <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">Recognized as the best wedding anchor in Jaipur, I turn families into superstars. I orchestrate dance-offs, interactive games, and an electrifying atmosphere that keeps the floor packed until 4 AM.</p>
            </FadeUp>

            <FadeUp delay={0.2} className="relative rounded-3xl overflow-hidden group bg-zinc-900/50 border border-white/5 p-12 flex flex-col justify-end min-h-[350px]">
              <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Elite Corporate Summits</h3>
              <p className="text-zinc-400 leading-relaxed">If you need a sharp, articulate anchor for event hosting at business galas, I bring bilingual professionalism that elevates your brand's prestige.</p>
            </FadeUp>

            <FadeUp delay={0.3} className="relative rounded-3xl overflow-hidden group bg-zinc-900/50 border border-white/5 p-12 flex flex-col justify-end min-h-[350px]">
              <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center"><HeartHandshake className="w-6 h-6 text-white" /></div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">The Royal Varmala</h3>
              <p className="text-zinc-400 leading-relaxed">Weddings are deeply emotional. I bring a sophisticated, respectful, and culturally rich voice to guide your guests through the most sacred moments.</p>
            </FadeUp>

            <FadeUp delay={0.4} className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-zinc-900/50 border border-white/5 p-12 flex flex-col justify-end min-h-[350px]">
              <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"><Gift className="w-6 h-6 text-[#D4AF37]" /></div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">VIP Socials & Birthdays</h3>
              <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">Beyond massive corporate summits, I bring unscripted energy to elite social gatherings. If you need a high-energy anchor for birthday party celebrations, I ensure your guests are purely entertained.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. SPLIT-SCREEN SEO LOCATION NET (Packed with Jaipur Data) */}
      <section className="py-40 bg-white text-black rounded-t-[3rem] md:rounded-t-[5rem] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5 relative">
              <div className="sticky top-40">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-6">
                  Dominating <br/> Jaipur.
                </h2>
                <p className="text-zinc-600 text-lg font-medium max-w-sm mb-8 leading-relaxed">
                  If you need an anchor, Jaipur has vastly different event cultures. A massive lawn on Ajmer Road requires a completely different anchoring style than a 5-star palace buyout in Kukas. I have mastered them all.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                { r: "The Grand Venues", a: "Ajmer Road, Bhankrota, Jhotwara", d: "Specializing in the massive farmhouse weddings Jaipur is famous for. High-capacity lawns that require an anchor with a booming voice and elite crowd psychology." },
                { r: "The Royal Corridors", a: "Kukas, Amer Road, Delhi Road", d: "Destination weddings and palace buyouts. NRI guests expect flawless bilingual hosting and supreme cultural respect from a premier anchor in Rajasthan." },
                { r: "The Urban Elite", a: "Mansarovar, Vaishali Nagar, Nirman Nagar", d: "Premium mid-segment and elegant neighborhood celebrations. Focus on warm, interactive family bonding and classy humor." },
                { r: "The Corporate Hubs", a: "Sitapura JECC, Tonk Road, JLN Marg", d: "Business summits, award shows, and corporate galas requiring sharp, articulate, and highly professional stage presence." },
                { r: "The Heritage Belts", a: "Agra Road, Sikar Road, Vidyadhar Nagar", d: "Traditional roots meeting grand scale. Seamlessly blending deeply emotional rituals with modern, high-energy entertainment." }
              ].map((loc, i) => (
                <FadeUp key={i}>
                  <div className="p-10 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-black transition-colors group">
                    <h3 className="text-2xl font-black mb-2 group-hover:text-[#D4AF37] transition-colors">{loc.r}</h3>
                    <p className="text-black text-xs font-bold uppercase tracking-widest mb-4 opacity-50">{loc.a}</p>
                    <p className="text-zinc-600 font-medium leading-relaxed">{loc.d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF (Tech Cards) */}
      <section className="py-32 bg-[#020202] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight">Trusted By Families.</h2>
            <p className="text-zinc-500 text-lg mt-4">Real proof from massive stages.</p>
          </FadeUp>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "The Sharma Family", event: "Grand Wedding, Ajmer Road", text: "We researched many anchors in Jaipur, but we wanted someone our family could trust. Anchor Yash felt like an elder brother handling the stage. He managed a massive crowd of 1,500 people with so much respect and energy." },
              { name: "Rishabh & Anjali", event: "Sangeet Night, Mansarovar", text: "Yash is a powerhouse. He saved our Sangeet when the DJ had a technical glitch by doing a 15-minute impromptu interactive game with the crowd. Definitely the best anchor in Jaipur." },
              { name: "Dr. Manish Gupta", event: "Corporate Gala, Tonk Road", text: "I have seen veteran anchors who sound like robots reading a paper. Yash is the modern voice. Fresh, highly energetic, and genuinely connects with every single person in the room." }
            ].map((test, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-10 bg-zinc-900/30 border border-white/5 rounded-[2rem] relative h-full flex flex-col">
                  <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed mb-8 grow">"{test.text}"</p>
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-bold">{test.name}</h4>
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest mt-1">{test.event}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HEADLESS UI FAQs (With Full SEO Content) */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">Total Transparency.</h2>
            <p className="text-zinc-500 mt-2 text-lg">Everything you need to know before handing over the mic.</p>
          </FadeUp>

          <div className="space-y-2">
            {[
              { q: "Why trust you over an anchor with 20 years of experience?", a: "Experience is good, but relevance is better. Many veteran anchors in Jaipur still rely on outdated scripts from 2010 and stand in the corner reading names. I bring modern, unscripted crowd psychology. I don't just announce; I actively entertain and manage the emotional flow of the room." },
              { q: "Can you handle massive crowds? Our guest list is huge.", a: "Absolutely. Crowd control is my ultimate strength. I have successfully anchored and held the undivided attention of over 10,000 people at a single event. A massive gathering at a farmhouse on Ajmer Road is my playground." },
              { q: "Do you travel across Rajasthan for destination events?", a: "Yes. As a leading anchor in Rajasthan, I frequently host palace buyouts in Udaipur, Jodhpur, and Jaisalmer, alongside my primary base covering every premium venue in Jaipur." },
              { q: "What kind of events do you host?", a: "I am a specialist. Whether you need the best wedding anchor in Jaipur for a Royal Sangeet, a bilingual professional for a corporate summit, or a highly interactive anchor for birthday party celebrations, I adapt my frequency to your exact crowd." }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="border-b border-white/10 overflow-hidden"
                onMouseEnter={() => setHoveredFAQ(i)}
                onMouseLeave={() => setHoveredFAQ(null)}
              >
                <button 
                  onClick={() => setHoveredFAQ(hoveredFAQ === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left"
                >
                  <span className={`text-xl md:text-2xl font-bold pr-8 transition-colors ${hoveredFAQ === i ? "text-[#D4AF37]" : "text-white"}`}>{faq.q}</span>
                  <div className="shrink-0">
                    {hoveredFAQ === i ? <Minus className="text-[#D4AF37]" /> : <Plus className="text-zinc-600" />}
                  </div>
                </button>
                <AnimatePresence>
                  {hoveredFAQ === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="pb-8"
                    >
                      <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MAGNETIC SCARCITY CTA */}
      <section className="py-40 relative flex items-center justify-center min-h-[70vh] overflow-hidden border-t border-white/5 bg-[#020202]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full blur-[200px] opacity-[0.07] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-5xl md:text-[7rem] font-display font-black leading-[0.85] tracking-tighter uppercase text-white mb-8">
              Secure <br/> <GoldText>The Date.</GoldText>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              I personally host every single event I book. I do not send juniors or replacements. When my calendar is full, it's full. 
            </p>
            <Link href={WHATSAPP_LINK} target="_blank">
              <button className="group relative px-10 py-6 bg-white hover:bg-[#D4AF37] text-black rounded-full font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 mx-auto">
                Message on WhatsApp <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
            </Link>
            <p className="text-zinc-600 text-sm uppercase tracking-widest font-bold mt-8 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Usually Books 6-8 Months in Advance
            </p>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
