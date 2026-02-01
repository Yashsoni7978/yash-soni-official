"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Building2, Home, Star, Mic2, Users, 
  ArrowRight, CheckCircle, ChevronDown, Phone, Crown, Camera 
} from "lucide-react";

// --- ROYAL COMPONENTS ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#D4AF37", 
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
        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">
          {subtitle}
        </p>
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- HUMANIZED SEO DATA (12 FAQs) ---
const FAQS = [
  { q: "Why do people call you the 'Best' in Jaipur?", a: "Honestly? Because I don't treat your event like 'just another gig.' I live here. I know the venues, the vendors, and the vibe of this city better than anyone flying in. Plus, 1100+ happy clients can't be wrong!" },
  { q: "Have you worked at our venue before?", a: "If it's in Jaipur, 99% yes. From the grand ballrooms of Fairmont and Marriott to the heritage courtyards of Diggi Palace and Jai Mahal, I've hosted everywhere." },
  { q: "Can we meet for a coffee?", a: "Absolutely! I'm based in Jhotwara. We can meet at a cafe in C-Scheme or Vaishali Nagar to discuss your run-of-show face-to-face. Nothing beats a personal connection." },
  { q: "Do you charge extra for travel to Kukas/Amer?", a: "Nope. Whether your wedding is at Le Meridien in Kukas or a resort on Sikar Road, it's all 'Local' for me. No flight tickets, no hotel stay required." },
  { q: "Do you do Corporate Events too?", a: "Yes. I switch gears easily. One day I'm hosting a loud Sangeet, the next day I'm anchoring a formal summit at JECC Sitapura. I adapt my tone to the room." },
  { q: "My family loves Marwari jokes. Can you handle that?", a: "Khamma Ghani! Being a local, I speak fluent Hindi, English, and enough Marwari to make your Dadi-Sa laugh and feel right at home." },
  { q: "What's the price for a 2-day wedding?", a: "My rates are premium but fair. It depends on the dates and scope. Click 'Check Availability' below, and I'll send you a custom quote instantly." },
  { q: "Do you have your own team?", a: "I'm a one-man army on the mic, but I work smoothly with your DJ and Sound team. If you need recommendations for local vendors, just ask!" },
  { q: "When should we book you?", a: "Jaipur's wedding season (Nov-Feb) is crazy. Dates often get locked 6-8 months in advance. If you have a venue, book your anchor next." },
  { q: "Can you host the Haldi AND the Sangeet?", a: "Yes! That's actually better. By the time Sangeet starts, the guests already know me from the Haldi, so the energy is double." },
  { q: "We have 1000+ guests. Is that okay?", a: "Easy. I've handled massive crowds at JECC and sprawling lawns. I know how to command attention even when 500 people are busy eating at the buffet." },
  { q: "Do you travel outside Jaipur?", a: "Of course. While Jaipur is home, my passport is ready. I've hosted destination weddings in Udaipur, Goa, and even Dubai." }
];

export default function JaipurAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#E91E63] selection:text-white relative">
      
      {/* --- BACKGROUND ROYAL TEXTURE --- */}
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>

      {/* --- 1. HERO: THE ROYAL WELCOME --- */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#2a0a15]/80 to-[#3d0c0c]/60 z-10" />
          
          {/* 📸 HERO IMAGE */}
          <img 
            src="https://images.unsplash.com/photo-1599661046289-e318d6d48ed1?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Best Anchor in Jaipur - Yash Soni"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-8 py-3 rounded-full bg-black/60 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <img src="/gold-texture.png" className="w-6 h-6 rounded-full animate-spin-slow" alt="Gold" />
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.25em] font-bold">
                Rated #1 Event Host in Jaipur
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Jaipur's <RoyalPinkText>Finest</RoyalPinkText> <br /> <GoldTextureText>Anchor.</GoldTextureText>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto mb-12">
              From the opulent halls of <RoyalPinkText className="font-bold">Rambagh</RoyalPinkText> to the grand stages of <RoyalPinkText className="font-bold">Fairmont</RoyalPinkText>. <br />
              The definitive voice for Jaipur's most prestigious weddings & events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#b48f25] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] relative overflow-hidden group">
                  <span className="relative z-10">Book The Best</span>
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
            <SectionHeading subtitle="Why Me" title="The Home Court Advantage." align="center" />
            <div className="grid md:grid-cols-3 gap-10 mt-20">
               <RoyalBenefitCard 
                  icon={<Home className="w-10 h-10" />}
                  title="Zero Travel Logistics"
                  desc="I live here! Based in Jhotwara. No flight delays, no hotel costs. I arrive in my own car, fresh and ready to host."
               />
               <RoyalBenefitCard 
                  icon={<Building2 className="w-10 h-10" />}
                  title="Venue Mastery"
                  desc="I know the acoustics of the Rambagh ballroom and the sunset timing at Nahargarh. I anticipate logistical hiccups before they happen."
               />
               <RoyalBenefitCard 
                  icon={<Users className="w-10 h-10" />}
                  title="Cultural Fluency"
                  desc="I switch seamlessly between sophisticated English for global guests and warm 'Marwari' banter to charm the local elders."
               />
            </div>
         </div>
      </section>

      {/* --- 3. ROYAL GALLERY (YOUR PICTURES) --- */}
      <section className="py-32 container mx-auto px-4 relative z-10">
         <SectionHeading subtitle="Portfolio" title="Moments in The Pink City." />
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] mt-12">
            
            {/* 📸 PHOTO 1 */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img 
                 src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80" 
                 alt="Yash Soni Hosting" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
               <p className="absolute bottom-4 left-4 text-white font-bold text-lg">Live at Fairmont</p>
            </div>

            {/* 📸 PHOTO 2 */}
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img 
                 src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" 
                 alt="Crowd Interaction" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>

            {/* 📸 PHOTO 3 */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img 
                 src="https://images.unsplash.com/photo-1596199644274-04f10d370c7f?w=800&q=80" 
                 alt="Haldi Vibes" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
            </div>

            {/* 📸 PHOTO 4 */}
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img 
                 src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" 
                 alt="Sangeet Night" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                  <Camera className="w-4 h-4" /> Real Wedding
               </div>
            </div>

             {/* 📸 PHOTO 5 */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-[#D4AF37]/20">
               <img 
                 src="https://images.unsplash.com/photo-1475721027767-f42a66a010d9?w=800&q=80" 
                 alt="Corporate Hosting" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
               <p className="absolute bottom-4 left-4 text-white font-bold text-lg">JECC Summit</p>
            </div>

         </div>
      </section>

      {/* --- 4. VENUE SHOWCASE (The Palaces) --- */}
      <section className="py-32 bg-[#0f0508] border-y border-[#D4AF37]/20 container-fluid relative z-10">
        <div className="container mx-auto px-4">
           <SectionHeading subtitle="My Playground" title="Iconic Jaipur Venues." align="center" />
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[500px] mt-16">
              <VenueCard name="Fairmont Jaipur" img="https://images.unsplash.com/photo-1582972120532-431ccad24dac?w=800&q=80" span="col-span-2 row-span-2" highlight />
              <VenueCard name="Rambagh Palace" img="https://images.unsplash.com/photo-1590050752117-238cb0fb5689?w=800&q=80" />
              <VenueCard name="JECC Sitapura" img="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" />
              <VenueCard name="Le Meridien Kukas" img="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" />
              <VenueCard name="City Palace" img="https://images.unsplash.com/photo-1599661046289-e318d6d48ed1?w=800&q=80" />
           </div>
        </div>
      </section>

      {/* --- 5. JAIPUR FAQ (12 Questions) --- */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
           <SectionHeading subtitle="Local Expertise" title="Jaipur Specific FAQs" align="center" />
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
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white">Hosting in Jaipur?</h2>
            <p className="text-[#D4AF37] max-w-2xl mx-auto mb-12 text-2xl font-light leading-relaxed">
               Don't fly in an outsider. <br /> Hire the <RoyalPinkText>Local Authority.</RoyalPinkText>
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <Link href="/contact">
                  <button className="px-14 py-6 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_50px_rgba(212,175,55,0.5)] text-lg">
                     Check My Availability
                  </button>
               </Link>
            </div>
         </div>
      </section>

    </div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
        
        <div className="absolute inset-0 border-2 border-[#E91E63] opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-2 rounded-xl pointer-events-none"></div>
        
        <div className="absolute bottom-6 left-6 z-10">
            {highlight && <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 font-bold">Featured Venue</p>}
            <p className="text-white font-display font-bold text-3xl group-hover:text-[#E91E63] transition-colors duration-500">{name}</p>
        </div>
    </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[#D4AF37]/30 bg-[#0f0508] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#E91E63]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#E91E63] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-gray-400 leading-relaxed text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
