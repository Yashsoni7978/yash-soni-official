"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Play, ArrowRight, Star, Sparkles, Quote, Instagram, 
  Users, CalendarCheck, Phone, ChevronDown, Activity 
} from "lucide-react";

// --- 1. GLOBAL STYLES ---
const style = `
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 35s linear infinite; }
  .animate-slow-scroll { animation: marquee 60s linear infinite; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  @keyframes shimmer {
    0% { background-position: 0% 50%; filter: brightness(100%); }
    50% { background-position: 100% 50%; filter: brightness(130%); }
    100% { background-position: 0% 50%; filter: brightness(100%); }
  }
  .sparkle-text { background-size: 200% auto; animation: shimmer 4s linear infinite; }
`;

// --- 2. LUXURY ASSETS ---
const GoldTextureText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center sparkle-text ${className}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

const FilmGrain = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png")' }}>
  </div>
);

// --- 3. ANIMATION VARIANTS ---
const revealUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GoldDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30 my-16" />
);

// --- 4. DATA STORE (Full Content) ---
const brands = [
  "Fairmont", "Rambagh Palace", "The Leela", "Marriott", "City Palace", 
  "Taj Jai Mahal", "Hyatt Regency", "Raffles Udaipur", "Oberoi Rajvilas",
  "Radisson Blu", "ITC Rajputana", "DoubleTree by Hilton"
];

const services = [
  { title: "Royal Weddings", subtitle: "Sangeet, Varmala & Pheras", desc: "Orchestrating grandeur with shayaris, humor, and seamless ritual management.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", link: "/wedding-anchor-jaipur" },
  { title: "Corporate Galas", subtitle: "Awards, Summits & R&R", desc: "Crisp, professional hosting keeping stakeholders engaged with premium tonality.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800", link: "/corporate-event-anchor-jaipur" },
  { title: "Brand Activations", subtitle: "Mall & Roadshows", desc: "High-energy interaction to drive footfall and maximize brand visibility.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800", link: "/mall-activation-anchor" },
  { title: "Team Offsites", subtitle: "Building Connections", desc: "Ice-breakers and bonding activities that turn colleagues into family.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", link: "/team-building-host" },
];

const reviews = [
  { name: "Priya Sharma", date: "2 months ago", platform: "Google Reviews", text: "Yash was the soul of our Sangeet! He managed 500 guests effortlessly. The energy was insane from start to finish.", link: "https://share.google/pMZGzEGOhXnJpLq5g" },
  { name: "Rahul Verma", date: "1 month ago", platform: "WedMeGood", text: "Hired him for our Corporate R&R in Jaipur. Extremely professional, punctual, and witty. Our CEO was very impressed.", link: "#" },
  { name: "Amit & Sneha", date: "3 weeks ago", platform: "Google Reviews", text: "The best decision for our wedding. His command over Hindi and English is perfect for a mixed crowd. Highly recommended!", link: "https://share.google/pMZGzEGOhXnJpLq5g" },
  { name: "Vikram Rathore", date: "4 months ago", platform: "WeddingWire", text: "A true professional. He controlled the flow of our Varmala perfectly. The shayaris were beautiful.", link: "#" },
  { name: "Simran Kaur", date: "1 week ago", platform: "StarClinch", text: "Our guests are still talking about the games Yash hosted. He has a unique way of connecting with everyone.", link: "#" },
  { name: "Oberoi Group", date: "6 months ago", platform: "Corporate Client", text: "Excellent command over the stage. Handled our Annual General Meeting with grace and authority.", link: "#" },
  { name: "Nikhil Jain", date: "5 months ago", platform: "WedMeGood", text: "If you want your wedding to be memorable, book Yash. He is not just an anchor, he is an entertainer.", link: "#" },
  { name: "Anjali Mehta", date: "2 weeks ago", platform: "Google Reviews", text: "Punctual, well-dressed, and incredibly talented. He saved our event when the DJ had a technical glitch.", link: "https://share.google/pMZGzEGOhXnJpLq5g" },
];

const homeFAQs = [
  { question: "Who is the Best Anchor in Jaipur for events?", answer: "Yash Soni is widely rated as the best anchor in Jaipur, known for hosting 1100+ premium weddings and corporate events with a 5.0 Google rating." },
  { question: "What types of events do you specialize in?", answer: "I specialize in Royal Weddings (Sangeet, Varmala), Corporate Award Ceremonies, Brand Activations, and large-scale Concerts." },
  { question: "Do you travel for Destination Weddings outside Jaipur?", answer: "Yes. I frequently travel to Udaipur, Jodhpur, Goa, Dubai, and Thailand for destination weddings." },
  { question: "Which languages are you fluent in?", answer: "I am fluent in English (for corporate/formal tones) and Hindi/Urdu (for emotional connection and Shayaris)." },
  { question: "Do you also provide Event Management services?", answer: "Yes, via my 'Digital Empire' network, I provide end-to-end event planning, artist management, and production." },
  { question: "Can you provide a Female Anchor or Co-Host?", answer: "Absolutely. I collaborate with India's top female anchors for duo-hosting requirements." },
  { question: "How far in advance should we book you?", answer: "For peak wedding dates (Nov-Feb), it is recommended to book 4-6 months in advance. Corporate events can be booked 1 month prior." },
  { question: "What are your charges for an event?", answer: "Charges vary based on event type, duration, and location. Please click 'Initiate Project' for a custom quote." },
  { question: "Do you bring your own team?", answer: "Yes, I work with a dedicated technical team for sound cues, script management, and backstage coordination." },
  { question: "Why should we hire Anchor Yash over others?", answer: "I don't just speak; I engineer the room's energy. My style is spontaneous, interactive, and premium—no boring scripts." },
  { question: "How do I confirm a booking with you?", answer: "A booking is confirmed upon signing a formal contract and depositing a token advance." },
  { question: "Can we see videos of your past work?", answer: "Yes, you can view the 'Portfolio' page on this website or check my Instagram highlights for live event clips." }
];

const magicImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600", 
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600",
  "https://images.unsplash.com/photo-1505373877741-2d3940e8d6f8?w=600",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600"
];

const philosophy = [
  { icon: Sparkles, title: "Spontaneity", text: "Scripts are good, but the magic happens in the moment. I read the room, not just the paper." },
  { icon: Users, title: "Connection", text: "I don't speak *at* the audience; I speak *with* them. Every guest feels seen and involved." },
  { icon: Quote, title: "Storytelling", text: "Every event has a narrative. I weave anecdotes and emotions to create a cohesive journey." },
];

const processSteps = [
  { num: "01", title: "Discovery", text: "We discuss your vision, the guest profile, and the specific vibe you want to set." },
  { num: "02", title: "Curation", text: "I draft a custom run-of-show, selecting specific games, shayaris, and tone." },
  { num: "03", title: "Execution", text: "I arrive early, coordinate with sound/DJ, and deliver a flawless performance." },
  { num: "04", title: "Memories", text: "We wrap up with high energy, leaving your guests with stories they'll tell for years." },
];
// --- 5. HELPER COMPONENTS ---
const HeroSlider = () => {
  const images = ["https://images.unsplash.com/photo-1519741497674-611481863552?q=80", "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80", "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img key={index} src={images[index]} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="w-full h-full object-cover grayscale-[30%]" />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <FilmGrain />
    </div>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-6 text-left group hover:bg-white/5 transition-colors px-4">
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-gray-300 group-hover:text-white'}`}>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[#D4AF37]' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-4">
            <p className="pb-6 text-gray-400 text-sm leading-relaxed max-w-3xl font-light italic">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ReviewCard = ({ name, platform, text, link }: any) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="min-w-[280px] bg-[#111] p-6 border border-white/5 hover:border-[#D4AF37] transition-all group h-full">
      <div className="flex text-[#D4AF37] gap-1 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#D4AF37" />)}
      </div>
      <p className="text-gray-300 text-xs italic mb-4 leading-relaxed line-clamp-4">"{text}"</p>
      <div className="border-t border-white/10 pt-3 flex justify-between items-center mt-auto">
        <span className="font-bold text-[10px] uppercase tracking-widest text-white">{name}</span>
        <span className="text-[9px] text-gray-500 uppercase">{platform}</span>
      </div>
    </div>
  </a>
);

// --- 6. MAIN RENDER ---
export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "url": "https://yashsoni.in",
    "jobTitle": "Event Anchor & Emcee",
    "worksFor": { "@type": "Organization", "name": "Yash Soni Events" },
    "sameAs": ["https://instagram.com/anchor_yash_official", "https://youtube.com/@anchoryashsoni"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      <style>{style}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION (Restored Left Alignment) */}
      <section className="relative h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        <HeroSlider />
        <div className="relative container mx-auto px-4 z-20">
          <div className="max-w-4xl mr-auto text-left pl-2 md:pl-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-6 inline-block">
               <span className="border border-[#D4AF37] px-6 py-2 rounded-full backdrop-blur-md bg-black/40 text-[#D4AF37] text-sm tracking-wide font-medium">
                 Jaipur's Leading Event Anchor
               </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.95] mb-4">
              Anchor <GoldTextureText>Yash</GoldTextureText>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-gray-300 text-xl md:text-2xl font-light mb-4">
              Premium Wedding & Corporate Event Anchor
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <span className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-lg text-sm hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg text-sm hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" /> View Portfolio
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <h2 className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-4">The Introduction</h2>
             <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
               "I don't just speak. <br /> I <GoldTextureText>connect souls</GoldTextureText>."
             </h3>
             <p className="text-gray-400 text-lg mb-6 leading-relaxed font-light">From the royal palaces of Udaipur to the corporate boardrooms of Jaipur, I have spent the last 5 years mastering the art of audience engagement.</p>
             <div className="flex gap-12 mt-12 border-t border-neutral-800 pt-8">
               <div><p className="text-4xl font-display font-bold text-white">1100+</p><p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Events Hosted</p></div>
               <div><p className="text-4xl font-display font-bold text-white">05+</p><p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2">Years Experience</p></div>
             </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 opacity-80">
             <ScrollReveal delay={0.2}>
               <div className="relative aspect-[3/4] border border-neutral-800">
                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Anchor Yash Hosting" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.3}>
               <div className="relative aspect-[3/4] border border-neutral-800 mt-8">
                 <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Corporate Event" />
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* 3. SLEEK MARQUEE (New & Fixed) */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
         <div className="flex gap-20 animate-marquee whitespace-nowrap items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {[...brands, ...brands].map((b, i) => (
               <span key={i} className="text-xl font-black italic uppercase tracking-tighter">{b}</span>
            ))}
         </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-24 container mx-auto px-4">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Signature <span className="text-neutral-700">Services</span></h2>
            <Link href="/services" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1 uppercase text-xs tracking-widest hover:text-white transition-colors">View All</Link>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {services.map((s, i) => (
            <ScrollReveal key={i}>
              <Link href={s.link}>
                <div className="group border-t border-neutral-800 py-12 flex flex-col md:flex-row gap-8 items-center cursor-pointer hover:bg-neutral-900/30 transition-colors">
                  <span className="text-neutral-800 text-6xl font-display font-bold group-hover:text-[#D4AF37] group-hover:opacity-100 transition-all">0{i+1}</span>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                    <p className="text-gray-500 max-w-xl font-light">{s.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. CONDENSED REVIEWS (Fixed Layout) */}
      <section className="py-20 bg-black container mx-auto px-6">
         <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px]">Social Proof</span>
            <h2 className="text-3xl font-display font-black mt-2 uppercase">Rated 5.0 on Google</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
         </div>
      </section>

      {/* 6. INFINITE MAGIC GALLERY */}
      <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic">Moments of <GoldTextureText>Magic.</GoldTextureText></h2>
        </div>
        <div className="flex gap-4 animate-slow-scroll whitespace-nowrap">
          {[...magicImages, ...magicImages].map((img, i) => (
            <div key={i} className="min-w-[280px] h-[400px] bg-[#111] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative group">
               <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Anchor Yash Event" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* 7. AI OPTIMIZED FAQ */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Common Questions</h2>
          </div>
          <div className="space-y-1 mt-12 bg-[#0a0a0a] border border-white/5 p-6 rounded-none">
             {homeFAQs.map((faq, i) => <FAQItem key={i} {...faq} />)}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 border-t border-neutral-900 bg-[#050505] text-center">
         <div className="container mx-auto px-4">
           <ScrollReveal>
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Your Stage Awaits.</h2>
             <p className="text-gray-400 max-w-xl mx-auto mb-12 font-light text-lg">Dates for the 2026 wedding season are 80% booked.</p>
             <div className="flex justify-center">
               <Link href="/contact">
                 <div className="group relative cursor-pointer inline-block">
                   <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#806000] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                   <button className="relative bg-black border border-[#D4AF37] text-[#D4AF37] px-12 py-5 text-lg font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-3">
                     <CalendarCheck className="w-5 h-5" /> Check Availability
                   </button>
                 </div>
               </Link>
             </div>
           </ScrollReveal>
         </div>
      </section>
    </main>
  );
}
