import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, Mic, Users, CheckCircle2, 
  Plane, Star, Sparkles, Building2, Crown, Gem
} from "lucide-react";

// --- 1. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className = "" }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

// --- 2. EXPANDED CITY DATA ---
const CITY_DATA = {
  // --- RAJASTHAN ---
  jaipur: {
    title: "The Voice of the Pink City",
    subtitle: "Anchor Yash: Jaipur's Most Trusted Emcee",
    desc: "From the grand ballrooms of The Fairmont to intimate royal gatherings at Rambagh Palace, Yash Soni is the definitive choice for Jaipur's elite weddings and corporate summits.",
    vibe: "My home ground. I know every venue manager, every sound setup, and the exact pulse of a Jaipur celebration. I bring the perfect blend of Rajasthani heritage and modern luxury.",
    heroImage: "https://images.unsplash.com/photo-1605634261270-34907996342c?q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
    ],
    eventCount: "1100+",
    travelMode: "Local Base",
    venues: ["Rambagh Palace", "Fairmont Jaipur", "City Palace", "Leela Palace", "Jai Mahal"],
    faq: [
      { q: "Do you charge travel fees for Jaipur?", a: "No, as my headquarters are in Jaipur, there are absolutely no travel or accommodation charges for events within the city limits." },
      { q: "Have you hosted at The Fairmont before?", a: "Extensively. I have deep experience with the acoustics, logistics, and layout of The Fairmont Jaipur, ensuring flawless audio delivery." }
    ]
  },
  udaipur: {
    title: "Royal Weddings in the City of Lakes",
    subtitle: "Premium Anchoring for Udaipur Destination Weddings",
    desc: "Elevating lakeside vows and island parties. Anchor Yash brings a level of sophistication that perfectly matches the palatial grandeur of your Udaipur destination wedding.",
    vibe: "Udaipur requires a softer, more poetic hosting style. It is about respecting the royalty of the location while keeping the guest energy incredibly high.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb5689?q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1587271407850-8d4389106628?q=80&w=800",
      "https://images.unsplash.com/photo-1604904839548-93a3074b4731?q=80&w=800"
    ],
    eventCount: "50+",
    travelMode: "6hr Drive / 1hr Flight",
    venues: ["The Oberoi Udaivilas", "Jagmandir Island", "Taj Lake Palace", "Raffles Udaipur", "The Leela Palace"],
    faq: [
      { q: "Do you speak fluent English for NRI guests?", a: "Absolutely. My hosting is 100% bilingual (English/Hindi), perfectly tailored for international guests and NRI families." },
      { q: "How do you handle travel to Udaipur?", a: "My team drives or flies down 24 hours prior to the event. We handle our own logistics to ensure zero stress for the family." }
    ]
  },
  jodhpur: {
    title: "Majestic Hosting in the Blue City",
    subtitle: "Anchor Yash x Umaid Bhawan Palace",
    desc: "Matching the colossal scale of Umaid Bhawan and Mehrangarh Fort. A powerful, commanding voice required for Jodhpur's most prestigious celebrations.",
    vibe: "Jodhpur is about power, history, and scale. I bring high-octane energy and a commanding stage presence to match the sheer magnitude of the forts.",
    heroImage: "https://images.unsplash.com/photo-1534063250529-684ba2177e09?q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0201b28?q=80&w=800"
    ],
    eventCount: "40+",
    travelMode: "5hr Drive",
    venues: ["Umaid Bhawan Palace", "Mehrangarh Fort", "Indana Palace", "WelcomHotel", "Taj Hari Mahal"],
    faq: [
      { q: "Can you manage a Sangeet with 1000+ guests?", a: "Yes, I specialize in massive, large-format events. Crowd control and sustained energy for large audiences is my forte." }
    ]
  },
  bikaner: {
    title: "Heritage Event Hosting in Bikaner",
    subtitle: "Bringing Energy to the Heart of the Thar",
    desc: "From Junagarh Fort to Laxmi Niwas, Anchor Yash transforms traditional Bikaner gatherings into modern, high-energy, unforgettable experiences.",
    vibe: "Bikaner heavily values tradition. I flawlessly blend deep Marwari cultural nuances with modern, interactive engagement techniques.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1469371670807-013ccf25f164?q=80&w=800",
      "https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=800"
    ],
    eventCount: "25+",
    travelMode: "5hr Drive",
    venues: ["Laxmi Niwas Palace", "Narendra Bhawan", "Junagarh Fort", "Gajner Palace"],
    faq: [
      { q: "Are you familiar with Marwari traditions?", a: "Yes, being rooted in Rajasthan, I am deeply familiar with Myra, Tikka, and all traditional rituals, explaining them beautifully to the audience." }
    ]
  },
  // --- METROS ---
  delhi: {
    title: "Corporate & Wedding Emcee in Delhi NCR",
    subtitle: "Gurugram • Noida • South Delhi",
    desc: "The fast-paced energy of Delhi meets the regal charm of Jaipur. Perfect for high-stakes corporate summits in Gurugram and elite farm-house weddings in Chattarpur.",
    vibe: "Delhi audiences are sharp, fast, and demand excellence. I cut the fluff, keep the wit high, and ensure your brand message or wedding story lands with maximum impact.",
    heroImage: "https://images.unsplash.com/photo-1543835245-c4a0078233f2?q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
    ],
    eventCount: "60+",
    travelMode: "45min Flight / 4hr Drive",
    venues: ["Aerocity Hotels", "Chattarpur Farms", "Pragati Maidan", "Jaypee Greens", "Taj Palace"],
    faq: [
      { q: "Do you host Corporate R&R events in Gurgaon?", a: "Yes, I regularly fly to Delhi/NCR to host corporate galas, award nights, and team-building events for multinational brands." },
      { q: "What are your travel requirements for Delhi?", a: "I require standard return flights from Jaipur and accommodation near the event venue to ensure punctuality." }
    ]
  },
  mumbai: {
    title: "Anchor Yash in Mumbai",
    subtitle: "Elite Hosting for the City of Dreams",
    desc: "From Juhu sea-facing hotels to South Bombay galas, bringing a touch of Rajasthani royalty and pristine articulation to Mumbai's glittering event scene.",
    vibe: "Mumbai has seen it all. To stand out, I bring a unique 'Royal Anchor' persona that feels incredibly distinct and refreshing compared to the usual Mumbai emcees.",
    heroImage: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800",
      "https://images.unsplash.com/photo-1478146896981-b8084c62608f?q=80&w=800"
    ],
    eventCount: "30+",
    travelMode: "2hr Flight",
    venues: ["Taj Lands End", "Jio World Drive", "St. Regis", "Trident Nariman Point", "Grand Hyatt"],
    faq: [
      { q: "Do you have a support team in Mumbai?", a: "I travel with my core production team, but we have strong partnerships with elite Mumbai vendors for seamless on-ground execution." }
    ]
  }
};

// --- 3. SEO GENERATOR ---
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.toLowerCase();
  const data = CITY_DATA[cityKey];

  if (!data) return { title: "Location Not Found" };

  return {
    title: `${data.title} | Anchor Yash Soni`,
    description: data.desc,
    keywords: [`Anchor in ${resolvedParams.city}`, `Wedding Planner ${resolvedParams.city}`, `Corporate Emcee ${resolvedParams.city}`, `Best Anchor ${resolvedParams.city}`],
  };
}

// --- 4. PAGE COMPONENT ---
export default async function LocationPage({ params }) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.toLowerCase();
  const data = CITY_DATA[cityKey];

  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* SECTION 1: HYPER-LOCAL HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/40 z-10" />
          <img 
            src={data.heroImage} 
            alt={data.title} 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pt-32">
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2 rounded-full bg-black/60 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <MapPin size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
              Available in {resolvedParams.city}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-black uppercase tracking-tighter mb-8 leading-[0.85] drop-shadow-2xl">
            {data.title.split(' ').map((word, i, arr) => 
               i === arr.length - 1 ? <span key={i} className="block"><GoldTextureText>{word}</GoldTextureText></span> : word + ' '
            )}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
            {data.desc}
          </p>

          <Link href="/contact">
            <button className="px-12 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              Check {resolvedParams.city} Availability
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 1.5: THE STATS STRIP */}
      <section className="border-b border-white/5 bg-[#0a0a0a]">
         <div className="container mx-auto px-6 py-10">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-center divide-x divide-white/10">
               <div className="px-8 w-full md:w-auto">
                  <p className="text-4xl font-display font-black text-[#D4AF37] mb-2">{data.eventCount}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Events Executed</p>
               </div>
               <div className="px-8 w-full md:w-auto hidden md:block">
                  <p className="text-4xl font-display font-black text-white mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Client Satisfaction</p>
               </div>
               <div className="px-8 w-full md:w-auto">
                  <p className="text-4xl font-display font-black text-white mb-2 flex items-center justify-center gap-2">
                     5.0 <Star className="w-6 h-6 text-[#D4AF37] fill-current" />
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Google Rating</p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 2: THE MAN BEHIND THE MIC */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
               <Crown className="w-6 h-6 text-[#D4AF37]" />
               <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                 The {resolvedParams.city} Connection
               </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase leading-[0.9] mb-10 tracking-tight">
              I don't just host. <br/> I <GoldTextureText>Adapt.</GoldTextureText>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Every city has a unique rhythm. {data.vibe}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light mb-12">
              When you book the agency for {resolvedParams.city}, you aren't just paying for a flight ticket—you are securing an anchor and a management team who inherently knows how to command a room in that specific cultural region.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
               <div>
                 <div className="flex items-center gap-3 mb-3 text-white font-bold">
                   <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]"><Plane size={18} /></div>
                   Logistics
                 </div>
                 <p className="text-sm text-gray-500 font-light">{data.travelMode} to {resolvedParams.city}</p>
               </div>
               <div>
                 <div className="flex items-center gap-3 mb-3 text-white font-bold">
                   <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]"><Mic size={18} /></div>
                   Language
                 </div>
                 <p className="text-sm text-gray-500 font-light">English, Hindi & Regional Nuances</p>
               </div>
            </div>
          </div>

          <div className="relative h-[700px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] order-1 lg:order-2 group">
             <img 
               src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80" 
               alt="Anchor Yash" 
               className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
               <p className="text-[#D4AF37] font-display font-bold text-3xl mb-1">{data.eventCount}</p>
               <p className="text-xs text-gray-300 uppercase tracking-widest font-bold">Flawless Executions</p>
             </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SIGNATURE EXPERTISE */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-6 tracking-tight">
              Agency Services in <GoldTextureText>{resolvedParams.city}</GoldTextureText>
            </h2>
            <p className="text-gray-400 font-light text-lg">Scalable execution for the city's most exclusive events.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-[#050505] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 group shadow-xl">
               <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#D4AF37]/20">
                 <Gem size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">Destination Weddings</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light">
                 Specializing in Sangeet anchoring, VIP hospitality, and massive logistical management at {resolvedParams.city}'s top heritage properties.
               </p>
            </div>
            
            <div className="p-10 rounded-3xl bg-[#050505] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 group shadow-xl">
               <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#D4AF37]/20">
                 <Building2 size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">Corporate Summits</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light">
                 High-energy hosting and end-to-end management for Annual Meets, R&R Shows, and Product Launches in {resolvedParams.city}'s business hubs.
               </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#050505] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 group shadow-xl">
               <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#D4AF37]/20">
                 <Users size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">High-Profile Galas</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light">
                 Discreet, highly-engaging anchoring for Elite Anniversaries, Milestone Birthdays, and Private Concerts.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VENUE EXPERTISE & GALLERY */}
      <section className="py-32 bg-[#050505]">
         <div className="container mx-auto px-6 text-center">
            
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-16 tracking-tight">
              Venues Conquered in <span className="text-[#D4AF37]">{resolvedParams.city}</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-20">
              {data.venues.map((venue, i) => (
                <span key={i} className="px-8 py-4 rounded-full bg-[#0a0a0a] border border-white/10 text-gray-300 text-sm md:text-base font-bold uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 cursor-default shadow-lg">
                  {venue}
                </span>
              ))}
            </div>

            {/* Hyper-Local Image Gallery */}
            <div className="grid md:grid-cols-2 gap-4 h-[400px]">
               {data.galleryImages.map((img, i) => (
                  <div key={i} className="relative rounded-3xl overflow-hidden border border-white/10 group">
                     <img src={img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={`${resolvedParams.city} Event`} />
                     <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-700"></div>
                  </div>
               ))}
            </div>

         </div>
      </section>

      {/* SECTION 5: CITY SPECIFIC FAQ */}
      {data.faq && (
        <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-16 text-center tracking-tight">
              Inquiries regarding <br/> <GoldTextureText>{resolvedParams.city}</GoldTextureText> Events
            </h2>
            <div className="grid gap-6">
              {data.faq.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/10 bg-[#050505] hover:border-[#D4AF37]/30 transition-colors duration-300 shadow-lg">
                  <h3 className="font-bold text-xl text-white mb-4 flex items-start gap-4">
                     <span className="text-[#D4AF37]">Q.</span> {item.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8 border-l border-white/10 ml-2">
                     {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: FINAL CTA */}
      <section className="py-40 text-center relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-white uppercase tracking-tighter">
            YOUR <GoldTextureText>{resolvedParams.city}</GoldTextureText> <br/> LEGACY AWAITS.
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
             Dates for the upcoming season in {resolvedParams.city} are filling up. Secure the agency today for flawless execution.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <button className="px-14 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] transform hover:scale-105">
                Check Availability
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// 5. GENERATE STATIC PARAMS
export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({
    city: city,
  }));
}
