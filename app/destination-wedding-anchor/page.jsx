"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plane, MapPin, Sun, Moon, Wine, Music, 
  Palmtree, ArrowRight, Globe, Anchor, CheckCircle, 
  ChevronDown, Luggage
} from "lucide-react";

// --- 1. REUSABLE COMPONENTS ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.webp')", 
      backgroundColor: "#D4AF37", 
    }}
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
      <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4 font-bold flex items-center gap-3 justify-center md:justify-start">
        {align === "center" && <span className="w-8 h-[1px] bg-[#D4AF37]"></span>}
        <Plane className="w-3 h-3 text-[#D4AF37]" />
        {subtitle}
        {align !== "center" && <span className="w-12 h-[1px] bg-[#D4AF37]"></span>}
        {align === "center" && <span className="w-8 h-[1px] bg-[#D4AF37]"></span>}
      </p>
      <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- 2. SEO KEYWORDS & CONTENT ---
const KEYWORDS = {
  heroTitle: "Destination Wedding Anchor",
  locations: "Udaipur, Goa, Jaipur, Dubai, Thailand",
  metaDesc: "Top Destination Wedding Emcee for 3-day royal weddings. Expert in crowd engagement, pool parties, and sangeet hosting globally."
};

const FAQS = [
  { q: "Do you travel for weddings outside India?", a: "Yes! I hold a valid passport and frequently host weddings in Dubai, Thailand, and Bali. International bookings require at least 3 months' notice for visa logistics." },
  { q: "How many days do you stay for a destination wedding?", a: "I stay for the entire duration (usually 2-3 days). I arrive one day prior to the first event to sync with the venue team and depart the morning after the reception." },
  { q: "What is your role during non-stage events (like lunch)?", a: "I act as a 'Social Glue.' I mingle with guests, play ice-breaker games, and ensure both sides of the family are interacting, rather than sitting in separate groups." },
  { q: "Who handles your travel and stay?", a: "The client arranges return flights (from Jaipur) and accommodation at the wedding venue (same hotel as guests) for myself and one assistant." },
  { q: "Can you host the Pool Party or Haldi?", a: "Absolutely. These are my favorite events! I bring high-energy games, water activities (if pool), and fun commentary to kickstart the party vibe." },
  { q: "Do you charge extra for blocking 3 full days?", a: "My Destination Wedding Package is a flat fee that covers all events over the 2-3 days. There are no hidden hourly charges." },
  { q: "What if our flight gets delayed?", a: "I always fly in 24 hours early precisely to avoid this risk. Reliability is part of the premium service." },
  { q: "Do you have experience with palace weddings?", a: "Yes, I have extensively hosted at Rambagh Palace, Umaid Bhawan, and City Palace Udaipur. I understand the protocols and acoustics of heritage venues." },
  { q: "Can you speak local languages for guests?", a: "I am fluent in English and Hindi. I can also use basic phrases in Gujarati, Punjabi, or Marwari to make elders feel at home." },
  { q: "How do we coordinate with you before the wedding?", a: "We will have 2-3 Zoom video calls to finalize the itinerary, scripts, and games. I also create a dedicated WhatsApp group with your planner." },
  { q: "Do you bring your own team?", a: "I travel with a manager who handles my sound check, script cues, and coordination. We work alongside your event planner." },
  { q: "How early should we book for a destination wedding?", a: "Since these block 3-4 days of my calendar, I recommend booking 6-9 months in advance." }
];

export default function DestinationAnchor() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- 1. HERO: THE JETSETTER VIBE --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image of a Palace or Beach */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505] z-10" />
          <img 
            src="/hero-slide-2.webp" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom" 
            alt="Destination Wedding Anchor"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center mt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            <div className="inline-flex items-center gap-3 border border-white/20 px-6 py-2 rounded-full bg-black/40 backdrop-blur-xl mb-8">
              <Globe className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">
                Passport Ready • Global Events
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 drop-shadow-2xl">
              Have Mic, <br /> <GoldTextureText>Will Travel.</GoldTextureText>
            </h1>
            
            <p className="text-white text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-lg">
              From the royal palaces of Udaipur to the white sands of Goa. <br className="hidden md:block" />
              I don't just host your wedding; I curate the 3-day experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  Check Travel Dates
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. THE DESTINATION TICKER --- */}
      <div className="bg-[#D4AF37] text-black py-4 overflow-hidden">
         <div className="animate-marquee whitespace-nowrap flex gap-12 font-bold uppercase tracking-widest text-sm">
            <span>Udaipur • Jodhpur • Jaipur • Goa • Dubai • Thailand • Bali • Mussoorie • Kerala •</span>
            <span>Udaipur • Jodhpur • Jaipur • Goa • Dubai • Thailand • Bali • Mussoorie • Kerala •</span>
            <span>Udaipur • Jodhpur • Jaipur • Goa • Dubai • Thailand • Bali • Mussoorie • Kerala •</span>
         </div>
      </div>

      {/* --- 3. THE "CRUISE DIRECTOR" PHILOSOPHY --- */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <SectionHeading subtitle="The Role" title="The Social Glue." />
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 Destination weddings are different. Guests are tired from travel, families are meeting for the first time, and the itinerary is packed.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-4 border-[#D4AF37] pl-6">
                 I act as the <strong>"Social Glue"</strong> that binds the two families together. From the Welcome Lunch to the After-Party, I ensure the energy never drops.
              </p>
              <div className="space-y-8">
                 <FeatureRow icon={<Luggage />} title="Logistics Aware" desc="I understand hotel logistics, room check-in delays, and how to keep guests entertained while things get set up." />
                 <FeatureRow icon={<Wine />} title="The Ice-Breaker" desc="I turn awkward 'Hello's' into 'Let's take a shot' moments within the first 2 hours." />
              </div>
           </div>
           
           <div className="relative h-[600px] w-full">
              {/* Image Stack */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-neutral-800 rounded-2xl overflow-hidden transform rotate-3 border border-neutral-700">
                 <img src="/gallery-6.webp" className="w-full h-full object-cover grayscale opacity-60" alt="Resort Vibe" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37] transform -rotate-3">
                 <img src="/intro-portrait-top.jpg" className="w-full h-full object-cover" alt="Yash Soni Travel" />
              </div>
           </div>
        </div>
      </section>

      {/* --- 4. THE 3-DAY ITINERARY (The Flight Path) --- */}
      <section className="py-32 bg-[#0a0a0a] border-y border-neutral-900">
         <div className="container mx-auto px-4">
            <SectionHeading subtitle="The Experience" title="Your 3-Day Journey." align="center" />
            
            <div className="mt-20 relative max-w-5xl mx-auto">
               {/* Vertical Flight Path Line */}
               <div className="absolute left-8 md:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-[#D4AF37] via-neutral-800 to-transparent -translate-x-1/2"></div>

               {/* Day 1 */}
               <ItineraryCard 
                 day="Day 01"
                 title="The Welcome & Sundowner"
                 icon={<Sun className="w-6 h-6 text-[#D4AF37]" />}
                 desc="Guests arrive. The vibe is chill but exciting. I host a casual 'Know Your Family' session over high-tea or cocktails to break the ice."
                 align="left"
               />

               {/* Day 2 (Morning) */}
               <ItineraryCard 
                 day="Day 02 (AM)"
                 title="The Pool Party / Haldi"
                 icon={<Palmtree className="w-6 h-6 text-[#D4AF37]" />}
                 desc="Chaos mode on. Floral Holi, Tug-of-War, and high-energy anchor games. I make sure no one stays dry and everyone is dancing."
                 align="right"
               />

               {/* Day 2 (Night) */}
               <ItineraryCard 
                 day="Day 02 (PM)"
                 title="The Sangeet Gala"
                 icon={<Music className="w-6 h-6 text-[#D4AF37]" />}
                 desc="Glitz and Glamour. I transition into a Tuxedo. This is about family performances, heartfelt roasts, and managing the stage flow perfectly."
                 align="left"
               />

               {/* Day 3 */}
               <ItineraryCard 
                 day="Day 03"
                 title="The Royal Wedding"
                 icon={<Moon className="w-6 h-6 text-[#D4AF37]" />}
                 desc="The Grand Varmala. I switch to traditional attire and poetic storytelling, creating a cinematic atmosphere for the main ceremony."
                 align="right"
               />
            </div>
         </div>
      </section>

      {/* --- 5. FEATURED LOCATIONS (Postcards) --- */}
      <section className="py-32 container mx-auto px-4">
        <SectionHeading subtitle="Expertise" title="Home Grounds." />
        
        <div className="grid md:grid-cols-4 gap-4 h-[500px]">
           {/* Card 1 */}
           <LocationCard 
              name="Udaipur" 
              tag="The City of Lakes" 
              img="/gallery-1.webp" 
              colSpan="col-span-2"
           />
           {/* Card 2 */}
           <LocationCard 
              name="Goa" 
              tag="Beach Vibes" 
              img="/gallery-4.webp" 
           />
           {/* Card 3 */}
           <LocationCard 
              name="Jaipur" 
              tag="Royal Palaces" 
              img="/service-wedding.webp" 
           />
        </div>
        <div className="text-center mt-12">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Also available for</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Dubai", "Thailand", "Mussoorie", "Jodhpur", "Ranthambore", "Pushkar"].map(city => (
                    <span key={city} className="border border-neutral-800 px-6 py-2 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default text-sm">
                        {city}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* --- 6. LOGISTICS FAQ --- */}
      <section className="py-24 max-w-6xl mx-auto px-4 border-t border-neutral-900">
        <SectionHeading subtitle="Logistics" title="Travel & Stay." align="center" />
        <div className="grid md:grid-cols-2 gap-6 mt-16">
           {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
           ))}
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-32 bg-[#0a0a0a] text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 text-white">Packing My Bags?</h2>
            <p className="text-[#D4AF37] max-w-2xl mx-auto mb-12 text-xl font-light">
               Dates for 2026 Destination Weddings are booking 8-12 months in advance.
            </p>
            <Link href="/contact">
               <button className="px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-2xl">
                  Inquire Now
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex gap-5 group">
    <div className="w-14 h-14 rounded-full border border-neutral-800 bg-[#0a0a0a] flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const ItineraryCard = ({ day, title, desc, icon, align }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Dot */}
      <div className="absolute left-8 md:left-1/2 top-0 w-8 h-8 bg-[#0a0a0a] border-2 border-[#D4AF37] rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-1/2 p-8 ml-16 md:ml-0 hover:bg-[#111] border border-transparent hover:border-[#D4AF37]/30 rounded-2xl transition-all duration-500 group ${align === 'right' ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
         <div className={`flex items-center gap-3 mb-4 ${align === 'right' ? 'md:justify-start' : 'md:justify-end'}`}>
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">{day}</span>
            {icon}
         </div>
         <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
         <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="w-full md:w-1/2 hidden md:block"></div>
  </div>
);

const LocationCard = ({ name, tag, img, colSpan = "" }) => (
    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${colSpan}`}>
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
        <div className="absolute bottom-6 left-6">
            <p className="text-white font-black text-3xl uppercase">{name}</p>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mt-1">
                <MapPin className="w-3 h-3" /> {tag}
            </div>
        </div>
    </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
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
            <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
