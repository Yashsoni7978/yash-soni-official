"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Building2, Home, Star, Mic2, Users, 
  ArrowRight, CheckCircle, ChevronDown, Phone, Crown, Camera, Minus, Plus 
} from "lucide-react";

// --- ROYAL COMPONENTS ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: GOLD_COLOR, 
    }}
  >
    {children}
  </span>
);

const RoyalPinkText = ({ children, className }) => (
  <span className={`text-[#E91E63] drop-shadow-[0_0_15px_rgba(233,30,99,0.3)] ${className || ""}`}>
    {children}
  </span>
);

const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <div className={`mb-16 relative z-10 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <Crown className="w-5 h-5 text-[#D4AF37]" />
        <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </h2>
      </div>
      <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h3>
    </motion.div>
  </div>
);

// --- HUMANIZED SEO DATA (12 FAQs Targeted for Search) ---
const FAQS = [
  { q: "Who is the best anchor in Jaipur for weddings and corporate events?", a: "With over 5 years of experience and 1100+ successful events, I specialize in premium, high-energy hosting. I don't treat your event like 'just another gig.' I live here, I know the top luxury venues, the premium vendors, and the exact vibe of this city." },
  { q: "Have you hosted events at our Jaipur wedding venue before?", a: "If it is a premium venue in Jaipur, 99% yes. From the grand ballrooms of Fairmont and Marriott to the heritage courtyards of Diggi Palace, Jai Mahal, and Rambagh Palace, I am a trusted emcee across the city's finest locations." },
  { q: "Can we meet in Jaipur to discuss our event script?", a: "Absolutely! I am locally based. We can easily meet at a cafe in C-Scheme or Vaishali Nagar to discuss your run-of-show and customize your interactive games face-to-face." },
  { q: "Do you charge extra travel fees for destination weddings in Kukas or Amer?", a: "No. Whether your luxury wedding is at Le Meridien in Kukas or a resort on Sikar Road, it is all considered 'Local' for me. No flight tickets or hotel stays required for Jaipur events." },
  { q: "Do you also host corporate events and awards nights in Jaipur?", a: "Yes. I am highly versatile. I regularly anchor formal corporate summits, product launches, and gala dinners at major hubs like JECC Sitapura and Birla Auditorium, adapting my tone perfectly to a professional room." },
  { q: "Our family loves Marwari culture. Can you host in local languages?", a: "Khamma Ghani! Being a local Rajasthan anchor, I seamlessly switch between fluent Hindi, sophisticated English for global guests, and enough warm Marwari banter to make your Dadi-Sa laugh and feel right at home." },
  { q: "What is the cost of hiring a premium wedding anchor in Jaipur?", a: "My rates reflect premium, unscripted quality. Pricing depends on the dates, guest count, and the number of events (like Haldi, Sangeet, and Varmala). Click 'Book The Best' below for a customized quote." },
  { q: "Do you provide your own sound system and DJ?", a: "I am a specialist on the mic. I work seamlessly with your hired DJ and sound production team. If you need trusted recommendations for Jaipur's best event vendors, I am happy to help!" },
  { q: "How far in advance should we book a Jaipur event anchor?", a: "Jaipur's peak destination wedding season (November to February) is incredibly busy. Premium dates often get locked 6-8 months in advance. Once your venue is booked, your anchor should be next." },
  { q: "Can you host both the Haldi games and the Sangeet night?", a: "Yes! That is highly recommended. By the time the Sangeet starts, your guests already know my energy from the interactive Haldi games, making the evening celebrations twice as engaging." },
  { q: "We are having a massive Indian wedding with 1000+ guests. Can you handle the crowd?", a: "Easily. I have commanded massive crowds at JECC and sprawling palace lawns. I specialize in crowd control and audience engagement, even when 500 people are distracted by the buffet." },
  { q: "Do you travel outside Rajasthan for destination events?", a: "Of course. While Jaipur is my home base, I am a global destination anchor. I frequently travel to host luxury weddings and corporate galas in Udaipur, Goa, Dubai, and beyond." }
];

export default function JaipurAnchor() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#E91E63] selection:text-white relative">
      
      {/* --- BACKGROUND ROYAL TEXTURE --- */}
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>

      {/* --- 1. HERO: THE ROYAL WELCOME (SEO H1 Focused) --- */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#2a0a15]/80 to-[#3d0c0c]/60 z-10" />
          
          <img 
            src="/service-corporate.webp" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Yash Soni - Best Professional Anchor and Emcee in Jaipur"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-8 py-3 rounded-full bg-black/60 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <img src="/gold-texture.png" className="w-6 h-6 rounded-full animate-spin-slow" alt="Gold Crown Icon" />
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.25em] font-bold">
                Rated #1 Event Host in Rajasthan
              </span>
            </div>

            {/* SEO Keyword Heavy H1 */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Jaipur's <RoyalPinkText>Premier</RoyalPinkText> <br /> <GoldTextureText>Wedding & Event Anchor.</GoldTextureText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto mb-12">
              From the opulent halls of <RoyalPinkText className="font-bold">Rambagh Palace</RoyalPinkText> to the grand corporate stages of <RoyalPinkText className="font-bold">Fairmont</RoyalPinkText>. <br />
              The definitive voice for Jaipur's most prestigious luxury events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#b48f25] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] relative overflow-hidden group">
                  <span className="relative z-10">Secure Your Date</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE LOCAL ADVANTAGE --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-[#D4AF37]/20 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37]/20">
            <Crown className="w-24 h-24" />
         </div>

         <div className="container mx-auto px-4 relative z-10">
            <SectionHeading subtitle="Why Hire Local" title="The Jaipur Home Court Advantage." align="center" />
            <div className="grid md:grid-cols-3 gap-10 mt-20">
               <RoyalBenefitCard 
                 icon={<Home className="w-10 h-10" />}
                 title="Zero Travel Logistics"
                 desc="I live here! Based in Jaipur, you pay zero flight delays or hotel costs. I arrive fresh, early, and ready to host your destination wedding."
               />
               <RoyalBenefitCard 
                 icon={<Building2 className="w-10 h-10" />}
                 title="Luxury Venue Mastery"
                 desc="I know the acoustics of the Rambagh ballroom and the sunset timing at Nahargarh. I anticipate logistical hiccups before they happen."
               />
               <RoyalBenefitCard 
                 icon={<Users className="w-10 h-10" />}
                 title="Cultural Fluency"
                 desc="I switch seamlessly between sophisticated English for global corporate guests and warm 'Marwari' banter to charm the local family elders."
               />
            </div>
         </div>
      </section>

      {/* --- 3. ROYAL GALLERY --- */}
      <section className="py-32 container mx-auto px-4 relative z-10">
         <SectionHeading subtitle="Event Portfolio" title="Unforgettable Moments in The Pink City." />
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] mt-12">
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img src="/gallery-1.webp" alt="Top Jaipur Anchor Yash Soni Hosting a Haldi Ceremony" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>

            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img src="/gallery-2.webp" alt="Crowd Interaction at a Jaipur Destination Wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>

            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img src="/gallery-3.webp" alt="High Energy Sangeet Anchor in Rajasthan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>

            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img src="/gallery-4.webp" alt="Corporate Event Emcee on Stage in Jaipur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>

            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img src="/gallery-5.webp" alt="Professional Host Managing a Varmala Ceremony" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>
         </div>
      </section>

      {/* --- 4. VENUE SHOWCASE --- */}
      <section className="py-32 bg-[#0f0508] border-y border-[#D4AF37]/20 container-fluid relative z-10">
        <div className="container mx-auto px-4">
           <SectionHeading subtitle="Trusted By Venues" title="Iconic Jaipur Event Venues." align="center" />
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[500px] mt-16">
              <VenueCard name="Fairmont Jaipur Wedding Venue" img="/gallery-6.webp" span="col-span-2 row-span-2" highlight />
              <VenueCard name="Rambagh Palace Jaipur Events" img="/gallery-2.webp" />
              <VenueCard name="JECC Sitapura Corporate Events" img="/gallery-3.webp" />
              <VenueCard name="Le Meridien Kukas Destination Weddings" img="/gallery-4.webp" />
              <VenueCard name="City Palace Jaipur Royal Weddings" img="/gallery-5.webp" />
           </div>
        </div>
      </section>

      {/* --- 5. JAIPUR FAQ --- */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
           <SectionHeading subtitle="Local Expertise" title="Jaipur Event Host FAQs" align="center" />
           <div className="grid md:grid-cols-2 gap-6 mt-16">
              {FAQS.map((faq, idx) => (
                 <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
           </div>
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-[#3d0c0c] to-[#1a0509]"></div>
         <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white">Hosting an Event in Jaipur?</h2>
            <p className="text-[#D4AF37] max-w-2xl mx-auto mb-12 text-2xl font-light leading-relaxed">
               Don't fly in an outsider. <br /> Hire the <RoyalPinkText className="font-bold">Premium Local Authority.</RoyalPinkText>
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <Link href="/contact">
                  <button className="px-14 py-6 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 rounded-full shadow-[0_0_50px_rgba(212,175,55,0.5)] text-lg">
                     Check Availability
                  </button>
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
}

// --- ROYAL SUB COMPONENTS ---

const RoyalBenefitCard = ({ icon, title, desc }) => (
    <div className="p-10 bg-[#0f0508] rounded-3xl border border-[#D4AF37]/30 hover:border-[#E91E63] transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="mb-8 bg-gradient-to-br from-[#D4AF37] to-[#b48f25] w-20 h-20 rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform">
               {icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
        </div>
    </div>
);

const VenueCard = ({ name, img, span = "", highlight = false }) => (
    <div className={`relative group overflow-hidden rounded-2xl border ${highlight ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'border-[#D4AF37]/20'} ${span}`}>
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-50" />
        <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-2 rounded-xl pointer-events-none"></div>
    </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-lg pr-4 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};