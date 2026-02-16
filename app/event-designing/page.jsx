"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, Image as ImageIcon, Lightbulb, Layers, 
  ChevronRight, Plus, Minus, Wand2, Sparkles, Star, 
  Crown, Gem, Diamond, Camera, MessageCircle, MapPin, Phone
} from "lucide-react";

// --- ROYAL BRANDING ---
const GOLD_COLOR = "#D4AF37";
const PINK_ACCENT = "#F4C2C2"; // Royal Rose Gold / Soft Pink

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: GOLD_COLOR }}
  >
    {children}
  </span>
);

const DiamondText = ({ children, className }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ${className || ""}`}>
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

// --- EXTENDED DATA ---
const designServices = [
  { icon: Palette, title: "Bespoke Moodboarding", description: "Curating a sensory journey with royal textures, diamond finishes, and palatial color palettes. No recycled ideas." },
  { icon: ImageIcon, title: "3D Spatial Visualization", description: "Walk through your wedding mandap in ultra-realistic 3D before a single fabric is draped. Pure visual precision." },
  { icon: Lightbulb, title: "Cinematic Lighting", description: "Architectural lighting designed specifically to make your jewelry and haute couture attire shine flawlessly on camera." },
  { icon: Gem, title: "Artistic Curation", description: "Sourcing hand-picked crystal chandeliers, antique silver, and exotic global florals for a museum-grade finish." },
];

const royalThemes = [
  { title: "The Royal Rajputana", desc: "Velvet drapes, antique gold accents, and heritage structures fit for Rambagh Palace.", img: "/gallery-5.webp" },
  { title: "Diamond & Crystal", desc: "A modern wonderland of glass, mirrors, and thousands of hanging crystals.", img: "/service-fashion.webp" },
  { title: "Enchanted Rose Garden", desc: "Lush, imported florals in soft pinks and whites for a surreal Sangeet or Mehendi.", img: "/gallery-1.webp" },
];

const FAQS = [
  { q: "Why should I hire a designer instead of a standard decorator?", a: "Standard decorators provide what they already have sitting in a warehouse. We design what your dream demands. We act as your Creative Directors, crafting one-of-a-kind themes that have never been seen before in Jaipur." },
  { q: "How does 3D visualization help my wedding budget?", a: "It eliminates expensive guesswork. By seeing the realistic render beforehand, you avoid last-minute changes and ensure your vision and reality are 100% aligned before fabrication begins." },
  { q: "Can you design for heritage palaces like Rambagh or City Palace?", a: "Palace designing is our absolute specialty. We respect historical architecture while adding modern royal elegance that complements the venue's centuries-old heritage." },
  { q: "Do you work with global floral designers?", a: "Yes. For our 'Diamond' tier packages, we coordinate with international florists to source the rarest, most exotic blooms for your centerpieces, varmala, and entry passages." },
  { q: "How is the fabrication managed?", a: "Once you approve the 3D design, we hire specialized artisans, carpenters, and lighting engineers to build it perfectly. We oversee every inch of the on-site production." }
];

export default function EventDesigning() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO: THE PALACE BLUEPRINT */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10" />
          <img src="/gallery-6.webp" className="w-full h-full object-cover scale-105 animate-slow-zoom grayscale-[20%]" alt="Royal Wedding Design" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-6 py-2 rounded-full bg-black/40 backdrop-blur-xl mb-10 shadow-2xl">
              <Diamond className="w-4 h-4 text-pink-300" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">Atmosphere • Elegance • Engineering</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] mb-8 uppercase tracking-tighter">
              Bespoke <br /> <DiamondText>Visual Luxury.</DiamondText>
            </h1>
            <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              We don't just decorate; we <span className="text-pink-300 font-bold italic">engineer dreams</span>. From 3D architectural renders to the final diamond-finish touch, we build the best weddings in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#b48f25] text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  Begin Designing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MILESTONES / STATS (New Section) */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#D4AF37]/20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "150+", label: "Luxury Events Designed" },
              { val: "50+", label: "Palaces Transformed" },
              { val: "100%", label: "Bespoke 3D Concepts" },
              { val: "∞", label: "Unforgettable Memories" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2 group">
                <h3 className="text-5xl md:text-6xl font-display font-black text-white group-hover:text-[#D4AF37] transition-colors">{stat.val}</h3>
                <p className="text-pink-200 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="The Standard" title="The Creative Director Approach." />
            <div className="space-y-8 text-gray-300 text-lg font-light leading-relaxed">
              <p>Most decorators sell you what they own in a warehouse. <strong className="text-white font-bold italic underline decoration-[#D4AF37]">We design what your story demands.</strong></p>
              <p>Our studio acts as the <GoldTextureText className="font-bold">Creative Directing</GoldTextureText> arm for your wedding. We build a Moodboard and a 3D Concept unique to your persona. Once the aesthetic is locked, we oversee specialized fabricators to ensure the physical build is a flawless replica of the vision.</p>
              <p className="border-l-2 border-pink-300 pl-6 text-pink-100/80">
                Every design we create is optimized for premium event cinematography. We control the lighting, the floral textures, and the spatial flow so your photos look like a royal editorial.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-3xl blur-3xl group-hover:bg-pink-400/10 transition-colors" />
            <img src="/service-wedding.webp" className="relative z-10 rounded-3xl border border-[#D4AF37]/30 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" alt="Luxury Stage Design" />
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE THEMES (New Section) */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Aesthetics" title="Signature Collections." align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {royalThemes.map((theme, i) => (
              <div key={i} className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500">
                <img src={theme.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" alt={theme.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{theme.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{theme.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DESIGN SERVICES */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-24">
          <SectionHeading subtitle="The Toolkit" title="Design Infrastructure." align="center" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designServices.map((service, idx) => (
            <div key={idx} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:border-[#D4AF37]/50 hover:bg-[#111] transition-all duration-500 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-lg">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter group-hover:text-pink-200 transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VISUAL MASTERPIECE GALLERY (New Section) */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="The Canvas" title="Masterpieces." align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] mt-16">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden border border-white/10 group">
              <img src="/gallery-4.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Design" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img src="/gallery-2.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Design" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img src="/gallery-3.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Design" />
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group">
              <img src="/gallery-1.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Design" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION & CONSULTATION SPLIT */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <SectionHeading subtitle="Inquiries" title="Design FAQs" />
            <div className="mt-12 space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveFaq(idx)}
                  onMouseLeave={() => setActiveFaq(null)}
                  className={`group rounded-2xl border transition-all duration-300 ${activeFaq === idx ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "border-white/10 bg-transparent hover:border-white/20"}`}
                >
                  <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                    <span className={`font-semibold text-[15px] pr-4 transition-colors ${activeFaq === idx ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"}`}>
                      {faq.q}
                    </span>
                    <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${activeFaq === idx ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"}`}>
                      {activeFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
                          <div className="pt-4">{faq.a}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Consultation Sidebar */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-[2.5rem] p-10 space-y-8 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
              <h3 className="text-3xl font-display font-black uppercase tracking-tight leading-none">
                Design <br /> <GoldTextureText>Consultation</GoldTextureText>
              </h3>
              <p className="text-gray-400 text-base font-medium leading-relaxed">
                Have a palace or a theme in mind? Let's build a moodboard and visualize your event before you spend a single rupee on fabrication.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] border border-white/10 group-hover:border-[#D4AF37] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">VIP Line</p>
                    <p className="font-bold text-white text-lg">+91 77378 77978</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] border border-white/10 group-hover:border-[#D4AF37] transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Studio HQ</p>
                    <p className="font-bold text-white text-lg">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 space-y-4">
                <Link href="/contact">
                  <button className="w-full py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3">
                    Start Project <Wand2 size={18} />
                  </button>
                </Link>
                <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full py-5 border border-[#D4AF37]/30 text-[#D4AF37] font-black uppercase tracking-widest rounded-2xl hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center gap-3">
                    <MessageCircle size={18} /> WhatsApp Direct
                  </button>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 8. CTA FOOTER */}
      <section className="py-40 bg-black text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-300/10 via-transparent to-transparent opacity-60 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-8 text-white">
            Dream It. <DiamondText>Design It.</DiamondText>
          </h2>
          <p className="text-[#D4AF37] text-xl max-w-2xl mx-auto mb-12 font-medium italic drop-shadow-md">
            "Stop settling for standard decor catalogs. Let’s build something the world has never seen before."
          </p>
          <Link href="/contact">
            <button className="px-14 py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              Book Design Session
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}