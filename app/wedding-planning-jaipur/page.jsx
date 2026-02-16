"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Utensils, Truck, Users, 
  Crown, Sparkles, Minus, Plus, Gem, 
  ShieldCheck, ArrowRight, CheckCircle
} from "lucide-react";

// --- CUSTOM LUXURY BRANDING ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: GOLD_COLOR }}
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
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- FAQ COMPONENT ---
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

// --- DATA ---
const processSteps = [
  { num: "01", title: "Concept & Procurement", desc: "Vision boarding, strict budget engineering, and exclusive venue contract negotiations." },
  { num: "02", title: "Design & Architecture", desc: "Elite vendor onboarding, 3D spatial design approval, and aesthetic curation." },
  { num: "03", title: "Logistics & Detailing", desc: "Minute-by-minute timeline charting, VIP fleet routing, and F&B tasting protocols." },
  { num: "04", title: "Flawless Execution", desc: "Shadow team deployment, discreet hospitality management, and silent crisis mitigation." },
];

const FAQS = [
  { q: "How does your planning service differ from standard decorators?", a: "Decorators focus solely on aesthetics. We act as your Executive Producers. We manage the entire financial architecture, vendor procurement, VIP hospitality, and minute-by-minute execution to ensure a flawless experience." },
  { q: "Do you have exclusive tie-ups with Jaipur's palace venues?", a: "Yes. Our deep-rooted relationships with properties like Fairmont, Rambagh Palace, and Leela Palace allow us to secure premium inventory, negotiate superior rates, and navigate their strict operational guidelines seamlessly." },
  { q: "How is the wedding budget managed?", a: "With absolute transparency. We operate on a fixed management fee model. You pay vendors directly at our negotiated insider rates, ensuring zero hidden markups or unauthorized commissions." },
  { q: "Do you manage international guest logistics?", a: "Extensively. Our hospitality desk handles airport concierge services, luxury fleet coordination, bespoke welcome hampers, and 24/7 dedicated support for global attendees." },
  { q: "When should we secure our planning dates?", a: "For high-season destination weddings (Oct-Feb), we recommend securing our team 8 to 12 months in advance to guarantee the procurement of Jaipur's top-tier venues and vendors." }
];

export default function WeddingPlanning() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. THE ELITE HERO */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-40 grayscale-[20%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2 rounded-full bg-black/50 backdrop-blur-xl mb-8 shadow-2xl">
              <Gem className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">
                Luxury Wedding Planners • Jaipur
              </span>
            </div>

            <h1 className="text-6xl md:text-[8rem] lg:text-[9rem] font-display font-black leading-[0.85] mb-8 uppercase tracking-tighter drop-shadow-2xl">
              ARCHITECTING <br /> <GoldTextureText>LEGACIES.</GoldTextureText>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-white/10 pt-10">
               <p className="max-w-xl text-xl text-gray-300 font-light leading-relaxed">
                 Executing flawless, high-society destination weddings across Rajasthan. We blend palatial grandeur with absolute logistical precision.
               </p>
               <div className="flex gap-6 shrink-0">
                 <Link href="/contact">
                   <button className="px-12 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-full">
                     Consult The Agency
                   </button>
                 </Link>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY (Replacing Anchor Advantage) */}
      <section className="py-32 bg-[#080808] border-b border-white/5 relative z-20">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <SectionHeading subtitle="Our Ethos" title="Beyond Planning. Pure Execution." />
                  <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                     An elite wedding is not defined merely by its floral arrangements. It is defined by <strong className="text-[#D4AF37] font-bold">invisible logistics, impeccable hospitality, and absolute financial control.</strong> We do not just plan events; we engineer flawless experiences for the world's most discerning families.
                  </p>
                  <div className="space-y-6">
                     <div className="flex gap-5 items-start group">
                        <ShieldCheck className="w-8 h-8 text-[#D4AF37] shrink-0 mt-1" />
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Unrestricted Procurement</h4>
                           <p className="text-gray-400 font-light text-sm leading-relaxed">Direct access to the top 1% of venues, designers, and culinary masters. No middlemen. No compromises.</p>
                        </div>
                     </div>
                     <div className="flex gap-5 items-start group">
                        <Users className="w-8 h-8 text-[#D4AF37] shrink-0 mt-1" />
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Discreet Management</h4>
                           <p className="text-gray-400 font-light text-sm leading-relaxed">Our shadow teams operate silently in the background, ensuring your family remains as guests at their own celebration.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative h-[700px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] group">
                  <img src="https://images.unsplash.com/photo-1544728135-e117a0b30bb0?q=80&w=2000" className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-1000" alt="Luxury Wedding Planning" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold mb-2">The Signature Experience</p>
                     <p className="text-white text-3xl font-display font-light italic">"Perfection is not an accident. It is engineered."</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. CAPABILITIES (Vertical Vendor Cards) */}
      <section className="py-32 container mx-auto px-6">
         <SectionHeading subtitle="The Framework" title="Elite Capabilities." align="center" />
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
             <div className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1587271407850-8d4389106628?w=800&q=80" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000" alt="Palatial Venues" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <MapPin className="text-[#D4AF37] w-10 h-10 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Palatial Venues</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">Securing exclusive buyouts of Rajasthan's most iconic heritage properties and five-star resorts.</p>
                 </div>
             </div>

             <div className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1519225421980-715cb0201b28?w=800&q=80" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000" alt="Cinematic Production" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <Gem className="text-[#D4AF37] w-10 h-10 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Cinematic Design</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">Overseeing top-tier decorators to ensure the physical build matches the 3D aesthetic flawlessly.</p>
                 </div>
             </div>

             <div className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000" alt="Haute Cuisine" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <Utensils className="text-[#D4AF37] w-10 h-10 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Haute Cuisine</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">Curating global menus with master chefs, managing elite bar setups, and ensuring perfect service flow.</p>
                 </div>
             </div>

             <div className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000" alt="VIP Hospitality" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <Truck className="text-[#D4AF37] w-10 h-10 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">VIP Hospitality</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">Precision management of airport fleets, room allocations, guest RSVPs, and bespoke welcome gifting.</p>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. THE BLUEPRINT (Process) */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
         <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
               <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">The Methodology</span>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white mt-4 uppercase">The Curated <GoldTextureText>Journey.</GoldTextureText></h2>
            </div>

            <div className="relative mt-24 max-w-4xl mx-auto">
               <div className="absolute left-[39px] md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/20 to-transparent md:-translate-x-1/2"></div>
               
               {processSteps.map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-8 md:gap-16 mb-24 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="absolute left-4 md:left-1/2 top-0 w-20 h-20 bg-[#050505] border-2 border-[#D4AF37] rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center text-[#D4AF37] font-display font-bold text-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                          {step.num}
                      </div>
                      
                      <div className={`w-full md:w-1/2 pl-24 md:pl-0 pt-3 md:pt-5 ${i % 2 !== 0 ? 'md:text-left md:pr-20' : 'md:text-right md:pl-20'}`}>
                         <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                         <p className="text-gray-400 text-lg leading-relaxed font-light">{step.desc}</p>
                      </div>
                      <div className="w-full md:w-1/2 hidden md:block"></div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. VISUAL MASTERPIECE (Moodboard) */}
      <section className="py-32 bg-[#050505]">
          <div className="container mx-auto px-6 text-center">
              <SectionHeading subtitle="The Execution" title="We Visualize. Then We Build." align="center" />
              <p className="text-gray-400 mb-16 text-xl font-light max-w-2xl mx-auto">Ensuring every venue corner looks exactly as envisioned before a single guest arrives.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[700px] p-6 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 relative shadow-2xl">
                  <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-[#D4AF37]/30">
                      <img src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=1000&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" alt="Floral Mandap" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6"><p className="text-white text-sm uppercase tracking-widest font-bold">Mandap Architecture</p></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                      <img src="https://images.unsplash.com/photo-1519225421980-715cb0201b28?w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" alt="Tablescape" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6"><p className="text-white text-xs uppercase tracking-widest font-bold">Tablescapes</p></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                      <img src="https://images.unsplash.com/photo-1561344640-2453889cde5b?w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" alt="Florals" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6"><p className="text-white text-xs uppercase tracking-widest font-bold">Floral Curation</p></div>
                  </div>
                  <div className="col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                      <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f164?w=1000&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" alt="Sangeet Setup" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6"><p className="text-white text-xs uppercase tracking-widest font-bold">Lighting Design</p></div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-32 container mx-auto px-6 max-w-4xl border-t border-white/5">
        <SectionHeading subtitle="Inquiries" title="Planning FAQs" align="center" />
        <div className="mt-16 space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* 7. FINAL CALL TO ART */}
      <section className="py-40 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-white uppercase tracking-tighter">
            READY TO <br/> <GoldTextureText className="italic pr-4">EXECUTE.</GoldTextureText>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Don't leave your legacy to chance. Let's engineer your wedding with absolute precision and style.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="px-14 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white transition-transform rounded-full shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                Secure Our Agency
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
