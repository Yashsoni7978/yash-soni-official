"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, Heart, Music, Star, Calendar, ArrowRight, Play, 
  CheckCircle, Sparkles, ChevronDown, Quote, Camera, Wine, Sun, Users
} from "lucide-react";

// --- 1. REUSABLE LUXURY COMPONENTS ---
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

const SectionHeading = ({ subtitle, title, align = "left", dark = false }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-3 flex items-center gap-3 justify-center md:justify-start">
        {align === "center" && <span className="w-8 h-[1px] bg-[#D4AF37]"></span>}
        {subtitle}
        {align !== "center" && <span className="w-12 h-[1px] bg-[#D4AF37]"></span>}
        {align === "center" && <span className="w-8 h-[1px] bg-[#D4AF37]"></span>}
      </p>
      <h2 className={`text-3xl md:text-5xl font-display font-black leading-tight ${dark ? 'text-black' : 'text-white'}`}>
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- 2. DATA: CULTURAL EXPERTISE ---
const WEDDING_TYPES = [
  { title: "Hindu Weddings", desc: "Mastering the Vedic rituals, Pheras commentary, and the high-energy Baraat.", icon: "🕉️" },
  { title: "Punjabi Weddings", desc: "Unmatched energy for the Dhol, Bhangra, and the wildest cocktail parties.", icon: "🪘" },
  { title: "Jain Weddings", desc: "Elegant, sophisticated hosting that respects traditions and family values.", icon: "🪷" },
  { title: "Islamic Nikkah", desc: "Poetic Urdu hosting (Shayari) adding grace to the Walima and Nikkah.", icon: "🌙" },
  { title: "Christian Weddings", desc: "Classic, formal emceeing for the Toast, Cake Cutting, and First Dance.", icon: "⛪" },
  { title: "Cross-Cultural", desc: "Blending traditions seamlessly for modern couples.", icon: "🤝" }
];

// --- 3. DATA: THE EVENT JOURNEY ---
const EVENT_FLOW = [
  { title: "Welcome Lunch", icon: Sun },
  { title: "Mayara / Bhaat", icon: Users },
  { title: "Haldi Ceremony", icon: Sparkles },
  { title: "Mehandi & Sangeet", icon: Music },
  { title: "Sufi / Mocktail Night", icon: Wine },
  { title: "Gala Night", icon: Star },
  { title: "Baraat on Wheels", icon: Mic },
  { title: "Varmala", icon: Heart },
  { title: "The Wedding", icon: CheckCircle },
  { title: "Reception", icon: Camera },
  { title: "After Party", icon: Music },
];

// --- 4. DATA: 12 FAQS ---
const FAQS = [
  { q: "Do you prepare scripts for our family members?", a: "Yes! I know Chachas and Masis get nervous. I provide simple, funny script templates and rehearse with them 10 minutes before the show to make them look like pros." },
  { q: "Can you handle a crowd that doesn't dance?", a: "That is my specialty. I have a set of 'Ice-Breaker' games and interactive crowd-pullers (like 'The Train' or 'Paper Dance') that force even the shyest guests off their chairs." },
  { q: "Do you travel for Destination Weddings?", a: "Yes. I am based in Jaipur but frequently host in Udaipur, Jodhpur, Pushkar, and Goa. Travel, stay, and logistics are to be arranged by the client." },
  { q: "What is your hosting style: Formal or Fun?", a: "I adapt to the event. For the Sangeet, I am high-energy and witty. For the Pheras/Varmala, I am traditional and poetic. I read the room and switch gears instantly." },
  { q: "Do you bring your own team?", a: "I usually work solo on the mic but coordinate seamlessly with your DJ and Sound team. If you need a co-host (female anchor), I can arrange one from my trusted network." },
  { q: "How long do you stay at the event?", a: "I am there from the first guest's arrival until the last performance or ritual is done. I don't count hours; I count moments." },
  { q: "What languages are you fluent in?", a: "I am fluent in English and Hindi. I can also throw in some Marwari/Punjabi phrases to connect with the elders!" },
  { q: "Do you engage with the audience?", a: "100%. I don't just stand on stage. I walk into the crowd, interview guests, crack jokes with the front row, and make everyone feel involved." },
  { q: "What if the event runs late?", a: "Indian weddings always run late! I am mentally prepared for delays and know exactly how to fill the gaps so the guests don't get bored." },
  { q: "Can we see videos of your past work?", a: "Absolutely. Scroll up to the 'Watch Me Live' section or check my Instagram/YouTube for raw, unedited clips of my hosting." },
  { q: "How far in advance should we book?", a: "For peak wedding dates (Nov-Feb), I recommend booking 3-6 months in advance. My calendar fills up fast." },
  { q: "What are your charges?", a: "My fee depends on the number of days, location, and scope of work. Click 'Check Availability' to get a custom quote instantly." }
];

export default function WeddingAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans relative">
      
      {/* Background Noise Texture for Premium Feel */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      {/* --- 1. CINEMATIC HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/20 z-10" />
          {/* Replace with high-quality wedding video/image */}
          <img 
            src="https://images.unsplash.com/photo-1606216794074-735e91aa5c92?q=80&w=1974&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Royal Wedding Jaipur"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md mb-8">
              <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">
                Premium Wedding Emcee
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              The Voice of <br /> <GoldTextureText>Forever.</GoldTextureText>
            </h1>
            
            <p className="text-gray-100 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-lg">
              Your wedding isn't just an event; it's a legacy. <br className="hidden md:block" />
              Don't let it be boring. Let's make it legendary.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="group relative px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest overflow-hidden rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <span className="relative z-10 flex items-center gap-2">Check Availability <ArrowRight className="w-4 h-4" /></span>
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE PHILOSOPHY (Editorial Layout) --- */}
      <section className="py-24 container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (Col 5) */}
          <div className="lg:col-span-5">
            <SectionHeading subtitle="The Approach" title="More Than Just A Mic." />
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Most anchors just read names off a paper. <strong className="text-white font-bold">I don't.</strong>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 border-l-2 border-[#D4AF37] pl-6 font-light">
              I bridge the gap between the *Ladki-walas* and *Ladke-walas*, turning a room full of strangers into one big, loud, happy family.
            </p>
            
            <div className="space-y-8">
              <FeatureRow icon={<Heart />} title="Emotional Intelligence" desc="Knowing when to hype the crowd and when to let silence speak during rituals." />
              <FeatureRow icon={<Sparkles />} title="Unscripted Wit" desc="Spontaneous humor that feels natural, not rehearsed. No cringy jokes." />
            </div>
          </div>
          
          {/* Image Collage (Col 7) */}
          <div className="lg:col-span-7 relative h-[600px]">
             <div className="absolute top-0 right-0 w-4/5 h-4/5 z-0">
                <img src="https://images.unsplash.com/photo-1583203363541-f5c1d632969f?w=800&q=80" className="w-full h-full object-cover rounded-xl grayscale contrast-125 opacity-50" alt="Background Emotion" />
             </div>
             <div className="absolute bottom-0 left-0 w-4/5 h-4/5 z-10 border-4 border-[#050505] rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" className="w-full h-full object-cover scale-110" alt="Yash Soni Hosting" />
                {/* Gold Frame Accent */}
                <div className="absolute inset-0 border-2 border-[#D4AF37]/50 m-4 rounded-lg pointer-events-none"></div>
             </div>
          </div>

        </div>
      </section>

      {/* --- 3. CULTURAL WEDDINGS EXPERTISE (Updated with Data) --- */}
       <section className="py-32 bg-[#080808] relative z-10 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Cultural Expertise" title="Celebrating Every Tradition" align="center" />
          
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {WEDDING_TYPES.map((wedding, idx) => (
                  <div key={idx} className="bg-[#111] border border-neutral-800 p-8 rounded-xl hover:border-[#D4AF37] transition-all duration-300 group">
                      <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{wedding.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{wedding.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{wedding.desc}</p>
                  </div>
              ))}
           </div>
        </div>
      </section>


      {/* --- 4. THE EVENT JOURNEY (Updated with Icons) --- */}
      <section className="py-32 bg-[#050505] relative z-10 border-t border-neutral-900">
         <div className="container mx-auto px-4">
             <SectionHeading subtitle="The Full Experience" title="From Welcome To Varmala" align="center" />
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 {EVENT_FLOW.map((event, i) => (
                     <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg text-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-default group">
                         <event.icon className="w-6 h-6 mx-auto mb-3 text-[#D4AF37] group-hover:text-black transition-colors" />
                         <p className="font-bold uppercase tracking-wider text-xs md:text-sm">{event.title}</p>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- 5. THE TRINITY (VISUAL CARDS) --- */}
      <section className="py-32 bg-[#080808] relative z-10 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Expertise" title="The Wedding Trilogy" align="center" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <VisualServiceCard 
              title="The Sangeet"
              subtitle="High Voltage Energy"
              img="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80"
              icon={<Music className="w-8 h-8" />}
              desc="The night of dance and drama. I handle the flow, introduce performances with personalized anecdotes, and run interactive couple games that get everyone on the floor."
              tags={["Couple Games", "Family Roasts", "Non-Stop Hype"]}
            />
            <VisualServiceCard 
              title="The Varmala"
              subtitle="Cinematic Grandeur"
              img="https://images.unsplash.com/photo-1604904839548-93a3074b4731?w=800&q=80" 
              icon={<Heart className="w-8 h-8" />}
              desc="The main event. I use poetic shayari and voice modulation to turn the garland exchange into a movie scene. Themes: Royal, Floral, or Fun."
              tags={["Grand Entry", "Shayari", "Crowd Control"]}
              highlight
            />
            <VisualServiceCard 
              title="The Reception"
              subtitle="Formal Elegance"
              img="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
              icon={<Star className="w-8 h-8" />}
              desc="Crisp, classy, and polished. Ensuring VIP guests are acknowledged, the cake cutting is picture-perfect, and the couple looks like royalty."
              tags={["VIP Protocol", "Cake Cutting", "Toastmaster"]}
            />
          </div>
        </div>
      </section>

      {/* --- 6. MOMENTS (GALLERY) --- */}
      <section className="py-24 container mx-auto px-4 relative z-10">
         <SectionHeading subtitle="Moments" title="Real Weddings. Real Emotion." />
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
           {/* Tall Item 1 */}
           <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1587271407850-8d4389106628?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding Moment" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
           </div>
           {/* Square Item 2 */}
           <div className="relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1611105637889-3e7960025e83?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding Moment" />
           </div>
            {/* Square Item 3 */}
           <div className="relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1596199644274-04f10d370c7f?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding Moment" />
           </div>
           {/* Wide Item 4 */}
           <div className="col-span-2 relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1523438097201-5390507d5664?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding Moment" />
           </div>
         </div>
         <div className="text-center mt-10">
            <Link href="/portfolio">
               <button className="flex items-center gap-2 mx-auto text-[#D4AF37] uppercase tracking-widest text-xs font-bold border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
                  <Camera className="w-4 h-4" /> View Full Gallery
               </button>
            </Link>
         </div>
      </section>

      {/* --- 7. VIDEO STRIP --- */}
      <section className="py-20 bg-[#080808] border-y border-neutral-900 overflow-hidden relative z-10">
        <div className="container mx-auto px-4 mb-10">
           <div className="flex justify-between items-end">
             <h2 className="text-3xl font-display font-bold">Watch Me <span className="text-[#D4AF37]">Live</span></h2>
           </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 px-4 no-scrollbar">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="min-w-[350px] md:min-w-[450px] aspect-video bg-[#111] relative group rounded-xl overflow-hidden cursor-pointer border border-neutral-800">
                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1545232979-8bf68ee9b1af' : '1511578314322-379afb476865'}?w=800&q=80`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all shadow-xl">
                      <Play className="w-6 h-6 fill-current" />
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- 8. WEDDING SPECIFIC FAQ (12 QUESTIONS) --- */}
      <section className="py-24 max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeading subtitle="Clarifications" title="Common Wedding Questions" align="center" />
        
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {FAQS.map((faq, idx) => (
             <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* --- 9. FINAL CTA --- */}
      <section className="py-32 bg-[#D4AF37] text-black text-center relative overflow-hidden z-10">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-6">Dates Filling Fast for 2026</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">
               Don't leave your big day to chance. <br /> Book an anchor who guarantees a celebration, not just an event.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-black text-white text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl rounded-full">
                  Check Your Date Availability
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- NEW SUB-COMPONENTS ---

const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex gap-5 group">
    <div className="w-14 h-14 rounded-full border border-neutral-800 bg-[#0a0a0a] flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed font-light max-w-md">{desc}</p>
    </div>
  </div>
);

// THE NEW VISUAL SERVICE CARD (HOVER REVEAL)
const VisualServiceCard = ({ title, subtitle, img, icon, desc, tags, highlight }) => (
  <div className={`group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer ${highlight ? 'ring-2 ring-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)]' : 'border border-neutral-900'}`}>
    
    {/* Background Image */}
    <div className="absolute inset-0">
       <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
    </div>
    
    {/* Content Layer */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
       
       {/* Initial View (Icon & Title) */}
       <div className="transform transition-all duration-500 group-hover:-translate-y-4">
          <div className={`w-14 h-14 mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${highlight ? 'bg-[#D4AF37] text-black' : 'bg-black/50 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-black'}`}>
            {icon}
          </div>
          <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">{subtitle}</p>
          <h3 className="text-3xl font-display font-bold text-white mb-0 group-hover:mb-4 transition-all">{title}</h3>
       </div>

       {/* Hidden Details (Reveal on Hover) */}
       <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100 overflow-hidden">
          <p className="text-gray-300 text-sm leading-relaxed font-light mb-6 border-l-2 border-[#D4AF37] pl-4">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
       </div>

    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-gray-400 leading-relaxed font-light text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
