import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, Mic, Users, CheckCircle2, 
  Plane, Car, Star, Calendar, 
  ArrowRight, Sparkles, Building2 
} from "lucide-react";

// --- 1. EXPANDED CITY DATA ---
const CITY_DATA: Record<string, { 
  title: string; 
  subtitle: string;
  desc: string; 
  vibe: string;
  heroImage: string;
  eventCount: string; // "N+ Events"
  travelMode: string; // "Direct Flight" or "4hr Drive"
  venues: string[]; // SEO Keywords
  faq: { q: string, a: string }[];
}> = {
  // --- RAJASTHAN ---
  jaipur: {
    title: "The Voice of the Pink City",
    subtitle: "Anchor Yash: Jaipur's Most Trusted Emcee",
    desc: "From the grand ballrooms of The Fairmont to intimate gatherings at Rambagh Palace, Yash Soni is the definitive choice for Jaipur's elite weddings and corporate summits.",
    vibe: "My home ground. I know every venue manager, every sound setup, and the exact pulse of a Jaipur celebration.",
    heroImage: "https://images.unsplash.com/photo-1605634261270-34907996342c?q=80&w=2070",
    eventCount: "1100+",
    travelMode: "Local Base",
    venues: ["Rambagh Palace", "Fairmont Jaipur", "City Palace", "Leela Palace", "Jai Mahal"],
    faq: [
      { q: "Do you charge travel fees for Jaipur?", a: "No, as I am based in Jaipur, there are no travel or accommodation charges." },
      { q: "Have you hosted at The Fairmont before?", a: "Yes, I have extensive experience with the acoustics and layout of The Fairmont Jaipur." }
    ]
  },
  udaipur: {
    title: "Royal Weddings in the City of Lakes",
    subtitle: "Premium Anchoring for Udaipur Destination Weddings",
    desc: "Elevating lakeside vows and island parties. Anchor Yash brings sophistication that matches the grandeur of your Udaipur destination wedding.",
    vibe: "Udaipur requires a softer, more poetic hosting style that respects the royalty of the location while keeping the energy high.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb5689?q=80&w=2070",
    eventCount: "50+",
    travelMode: "6hr Drive / 1hr Flight",
    venues: ["The Oberoi Udaivilas", "Jagmandir Island", "Taj Lake Palace", "Raffels Udaipur"],
    faq: [
      { q: "Do you speak fluent English for NRI guests?", a: "Absolutely. My hosting is 100% bilingual (English/Hindi) suitable for global audiences." },
      { q: "How do you handle travel to Udaipur?", a: "My team drives or flies down 24 hours prior to the event to ensure punctuality." }
    ]
  },
  jodhpur: {
    title: "Majestic Hosting in the Blue City",
    subtitle: "Anchor Yash x Umaid Bhawan Palace",
    desc: "Matching the scale of Umaid Bhawan and Mehrangarh Fort. A powerful voice for Jodhpur's most colossal celebrations.",
    vibe: "Jodhpur is about power and history. I bring high-octane energy to match the sheer scale of the forts.",
    heroImage: "https://images.unsplash.com/photo-1534063250529-684ba2177e09?q=80&w=2070",
    eventCount: "40+",
    travelMode: "5hr Drive",
    venues: ["Umaid Bhawan Palace", "Mehrangarh Fort", "Indana Palace", "WelcomHotel"],
    faq: [
      { q: "Can you manage a Sangeet with 1000+ guests?", a: "Yes, I specialize in large-format events common in Jodhpur weddings." }
    ]
  },
  bikaner: {
    title: "Heritage Event Hosting in Bikaner",
    subtitle: "Bringing Energy to the Heart of the Thar",
    desc: "From Junagarh Fort to Laxmi Niwas, Anchor Yash turns traditional Bikaner gatherings into modern, unforgettable experiences.",
    vibe: "Bikaner values tradition. I blend Marwari cultural nuances with modern engagement techniques.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070",
    eventCount: "25+",
    travelMode: "5hr Drive",
    venues: ["Laxmi Niwas Palace", "Narendra Bhawan", "Junagarh Fort"],
    faq: [
      { q: "Are you familiar with Marwari traditions?", a: "Yes, being from Rajasthan, I am deeply familiar with Myra, Tikka, and other rituals." }
    ]
  },
  // --- METROS ---
  delhi: {
    title: "Corporate & Wedding Emcee in Delhi NCR",
    subtitle: "Gurugram • Noida • South Delhi",
    desc: "The speed of Delhi meets the charm of Jaipur. Perfect for fast-paced corporate summits in Gurugram and farm-house weddings in Chattarpur.",
    vibe: "Delhi audiences are sharp and fast. I cut the fluff, keep the wit high, and ensure your brand message lands with impact.",
    heroImage: "https://images.unsplash.com/photo-1543835245-c4a0078233f2?q=80&w=2070",
    eventCount: "60+",
    travelMode: "45min Flight / 4hr Drive",
    venues: ["Aerocity Hotels", "Chattarpur Farms", "Pragati Maidan", "Jaypee Greens"],
    faq: [
      { q: "Do you host Corporate R&R events in Gurgaon?", a: "Yes, I regularly host corporate galas and team-building events in DLF Cyber Hub/Gurgaon areas." },
      { q: "What are your travel requirements for Delhi?", a: "I require return flights and accommodation near the venue." }
    ]
  },
  mumbai: {
    title: "Anchor Yash in Mumbai",
    subtitle: "Bollywood Style Hosting for the City of Dreams",
    desc: "From Juhu hotels to South Bombay galas, bringing a touch of Rajasthani royalty to Mumbai's glittering event scene.",
    vibe: "Mumbai has seen it all. To stand out, I bring a unique 'Royal Anchor' persona that feels distinct from the usual Mumbai emcees.",
    heroImage: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070",
    eventCount: "30+",
    travelMode: "2hr Flight",
    venues: ["Taj Lands End", "Jio World Drive", "St. Regis", "Trident Nariman Point"],
    faq: [
      { q: "Do you have a team in Mumbai?", a: "I travel with my core team, but we partner with local Mumbai vendors for seamless execution." }
    ]
  }
};

// --- 2. SEO GENERATOR ---
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.toLowerCase();
  const data = CITY_DATA[cityKey];

  if (!data) return { title: "Location Not Found" };

  return {
    title: `${data.title} | Anchor Yash`,
    description: data.desc,
  };
}

// --- 3. PAGE COMPONENT ---
export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.toLowerCase();
  const data = CITY_DATA[cityKey];

  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FFD700] selection:text-black">
      
      {/* SECTION 1: HYPER-LOCAL HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-10" />
          <img 
            src={data.heroImage} 
            alt={data.title} 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
          <div className="inline-flex items-center gap-2 border border-[#FFD700]/50 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md mb-8">
            <CheckCircle2 size={16} className="text-[#FFD700]" />
            <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">
              Successfully hosted {data.eventCount} Events in {resolvedParams.city}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            {data.title}
          </h1>
          
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light mb-12">
            {data.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact">
              <button className="px-10 py-5 bg-[#FFD700] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Check {resolvedParams.city} Dates
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MAN BEHIND THE MIC (Personal Connection) */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-[#FFD700]/20 rounded-2xl rotate-3 blur-lg"></div>
             {/* PLACEHOLDER FOR YOUR PHOTO - Replace src with your actual photo */}
             <img 
               src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" 
               alt="Anchor Yash" 
               className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
             />
             <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur border border-[#FFD700] p-4 rounded-xl">
               <p className="text-[#FFD700] font-black text-2xl">{data.eventCount}</p>
               <p className="text-xs text-white uppercase tracking-widest">Events in {resolvedParams.city}</p>
             </div>
          </div>
          
          <div>
            <span className="text-[#FFD700] text-sm font-black uppercase tracking-widest mb-4 block">
              The {resolvedParams.city.charAt(0).toUpperCase() + resolvedParams.city.slice(1)} Connection
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
              "I don't just host. <br/> I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-200">Adapt</span> to the city."
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Every city has a rhythm. {data.vibe}
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              When you book me for {resolvedParams.city}, you aren't just paying for a flight ticket—you are paying for an anchor who knows how to control a crowd in that specific region.
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
               <div>
                 <div className="flex items-center gap-2 mb-2 text-white font-bold">
                   <Plane size={20} className="text-[#FFD700]" /> Logistics
                 </div>
                 <p className="text-sm text-zinc-500">{data.travelMode} to {resolvedParams.city}</p>
               </div>
               <div>
                 <div className="flex items-center gap-2 mb-2 text-white font-bold">
                   <Mic size={20} className="text-[#FFD700]" /> Language
                 </div>
                 <p className="text-sm text-zinc-500">English, Hindi & Regional Nuances</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES IN THIS CITY */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              My Services in {resolvedParams.city}
            </h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-[#FFD700]/50 transition-all group">
               <div className="w-14 h-14 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] mb-6 group-hover:scale-110 transition-transform">
                 <Sparkles size={28} />
               </div>
               <h3 className="text-xl font-bold mb-4">Destination Weddings</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Specializing in Sangeet, Varmala, and Reception hosting at {resolvedParams.city}'s top heritage and luxury venues.
               </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-[#FFD700]/50 transition-all group">
               <div className="w-14 h-14 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] mb-6 group-hover:scale-110 transition-transform">
                 <Building2 size={28} />
               </div>
               <h3 className="text-xl font-bold mb-4">Corporate Summits</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 High-energy hosting for Annual Meets, R&R Shows, and Product Launches in {resolvedParams.city}'s business hubs.
               </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-[#FFD700]/50 transition-all group">
               <div className="w-14 h-14 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] mb-6 group-hover:scale-110 transition-transform">
                 <Users size={28} />
               </div>
               <h3 className="text-xl font-bold mb-4">Social Galas</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Engaging anchoring for Anniversaries, Milestone Birthdays, and Private Concerts.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VENUE EXPERTISE (SEO KEYWORDS) */}
      <section className="py-20 bg-zinc-950">
         <div className="container mx-auto px-6 text-center">
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-10">
              Venues in {resolvedParams.city} we are ready to serve
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {data.venues.map((venue, i) => (
                <span key={i} className="px-6 py-3 rounded-full bg-black border border-white/10 text-zinc-300 text-sm md:text-base font-medium hover:text-[#FFD700] hover:border-[#FFD700] transition-colors cursor-default">
                  {venue}
                </span>
              ))}
            </div>
         </div>
      </section>

      {/* SECTION 5: CITY SPECIFIC FAQ */}
      {data.faq && (
        <section className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-black uppercase mb-12 text-center">
              Common Questions about <br/> hiring me for <span className="text-[#FFD700]">{resolvedParams.city}</span>
            </h2>
            <div className="grid gap-6">
              {data.faq.map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 bg-zinc-900/50">
                  <h3 className="font-bold text-lg text-white mb-3">{item.q}</h3>
                  <p className="text-zinc-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: CTA FOOTER */}
      <section className="py-24 bg-[#FFD700] text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none">
            Your {resolvedParams.city} Event <br/> Deserves the Best.
          </h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
            Dates for the upcoming season in {resolvedParams.city} are filling up. Secure your booking today.
          </p>
          <Link href="/contact">
            <button className="bg-black text-white px-12 py-5 text-lg font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl">
              Get Quote for {resolvedParams.city}
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

// 4. GENERATE STATIC PARAMS
export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({
    city: city,
  }));
}