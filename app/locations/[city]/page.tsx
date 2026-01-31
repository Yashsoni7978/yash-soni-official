import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, Star, CalendarCheck, Mic, 
  Award, Users, ArrowRight, CheckCircle2 
} from "lucide-react";

// --- 1. INTELLIGENT CITY DATA ---
// This is the "Brain". Add a new city here, and the page creates itself.
const CITY_DATA: Record<string, { 
  title: string; 
  subtitle: string;
  desc: string; 
  vibe: string; // Used for "Why Hire in [City]" section
  heroImage: string;
  tags: string[];
}> = {
  // --- RAJASTHAN (The Core) ---
  jaipur: {
    title: "The Voice of the Pink City",
    subtitle: "Anchor Yash: Jaipur's Most Trusted Emcee",
    desc: "From the grand ballrooms of The Fairmont to intimate gatherings at Rambagh Palace, Yash Soni is the definitive choice for Jaipur's elite weddings and corporate summits.",
    vibe: "As a Jaipur local, I know the acoustics of every major palace and the rhythm of Rajasthani hospitality better than anyone.",
    heroImage: "https://images.unsplash.com/photo-1605634261270-34907996342c?q=80&w=2070", // Hawa Mahal/Jaipur Vibe
    tags: ["Rambagh Palace", "Fairmont Jaipur", "City Palace Events"]
  },
  udaipur: {
    title: "Royal Weddings in the City of Lakes",
    subtitle: "Premium Anchoring for Udaipur Destination Weddings",
    desc: "Elevating lakeside vows at The Oberoi Udaivilas and Jagmandir Island. Anchor Yash brings sophistication that matches the grandeur of your Udaipur destination wedding.",
    vibe: "Udaipur demands romance and royalty. My hosting style shifts here—softer, more poetic, yet commanding enough for grand island entries.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb5689?q=80&w=2070", // Lake/Palace
    tags: ["Jagmandir Island", "The Oberoi Udaivilas", "Lake Pichola Weddings"]
  },
  jodhpur: {
    title: " majestic Hosting in the Blue City",
    subtitle: "Anchor Yash x Umaid Bhawan Palace",
    desc: "Matching the scale of Umaid Bhawan and Mehrangarh Fort. A powerful voice for Jodhpur's most colossal celebrations.",
    vibe: "Jodhpur is about power and history. I bring high-octane energy to match the sheer scale of the forts and palaces.",
    heroImage: "https://images.unsplash.com/photo-1534063250529-684ba2177e09?q=80&w=2070", // Jodhpur Blue/Fort
    tags: ["Umaid Bhawan", "Mehrangarh Fort", "Indana Palace"]
  },
  bikaner: {
    title: "Heritage Event Hosting in Bikaner",
    subtitle: "Bringing Energy to the Heart of the Thar",
    desc: "From Junagarh Fort to Laxmi Niwas, Anchor Yash turns traditional Bikaner gatherings into modern, unforgettable experiences.",
    vibe: "Bikaner values tradition. I blend Marwari cultural nuances with modern engagement techniques to keep all generations connected.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070", // Desert/Fort texture
    tags: ["Laxmi Niwas Palace", "Narendra Bhawan", "Junagarh Fort"]
  },
  alwar: {
    title: "Event Anchor for Alwar & Neemrana",
    subtitle: "Perfecting Fort Weddings & Local Events",
    desc: "Specializing in destination weddings at Neemrana Fort and grand local celebrations in Alwar.",
    vibe: "Alwar is the gateway to Rajasthan. I bring the Jaipur polish to your local events, ensuring a premium experience close to home.",
    heroImage: "https://images.unsplash.com/photo-1596558236209-77726477b838?q=80&w=2070", // Fort style
    tags: ["Neemrana Fort", "Tijara Fort", "Alwar Bagh"]
  },
  sikar: {
    title: "Celebrity Anchor for Sikar & Shekhawati",
    subtitle: "High-Energy Hosting for Shekhawati's Grandest Events",
    desc: "The preferred choice for high-profile weddings and business meets in the Shekhawati region.",
    vibe: "Sikar crowds love energy. I ensure the dance floor never stops and the engagement remains 100% high-voltage.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f0bd44?q=80&w=2070", // Vibrant/Traditional
    tags: ["Shekhawati Havelis", "Grand Weddings", "Local Concerts"]
  },
  khatu: {
    title: "Devotional & Event Anchor for Khatu",
    subtitle: "Soulful Hosting for Khatu Shyam Ji Events",
    desc: "Balancing reverence with celebration. Expert hosting for jagged, kirtan, and weddings in the holy city of Khatu.",
    vibe: "Events here are spiritual yet celebratory. My tone respects the sanctity of the location while ensuring guests are joyfully engaged.",
    heroImage: "https://images.unsplash.com/photo-1604084964673-94c637370a2d?q=80&w=2070", // Spiritual/Temple vibe
    tags: ["Khatu Shyam Ji", "Bhajan Sandhya", "Dharamshala Events"]
  },

  // --- METROS ---
  delhi: {
    title: "Corporate & Wedding Emcee in Delhi NCR",
    subtitle: "Gurugram • Noida • South Delhi",
    desc: "The speed of Delhi meets the charm of Jaipur. Perfect for fast-paced corporate summits in Gurugram and farm-house weddings in Chattarpur.",
    vibe: "Delhi audiences are sharp and fast. I cut the fluff, keep the wit high, and ensure your brand message lands with impact.",
    heroImage: "https://images.unsplash.com/photo-1543835245-c4a0078233f2?q=80&w=2070", // Urban/Corporate
    tags: ["Aerocity Hotels", "Chattarpur Farms", "Pragati Maidan"]
  },
  mumbai: {
    title: "Anchor Yash in Mumbai",
    subtitle: "Bollywood Style Hosting for the City of Dreams",
    desc: "From Juhu hotels to South Bombay galas, bringing a touch of Rajasthani royalty to Mumbai's glittering event scene.",
    vibe: "Mumbai has seen it all. To stand out, I bring a unique 'Royal Anchor' persona that feels distinct from the usual Mumbai emcees.",
    heroImage: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070", // Skyline/Glamour
    tags: ["Taj Lands End", "Jio World Drive", "Colaba Events"]
  }
};

// --- 2. SEO GENERATOR ---
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityKey = params.city.toLowerCase();
  const data = CITY_DATA[cityKey];

  if (!data) return { title: "Location Not Found" };

  return {
    title: `${data.title} | Anchor Yash`,
    description: data.desc,
    openGraph: {
      title: data.title,
      description: data.desc,
      images: [data.heroImage],
    }
  };
}

// --- 3. PAGE COMPONENT ---
export default function LocationPage({ params }: { params: { city: string } }) {
  const cityKey = params.city.toLowerCase();
  const data = CITY_DATA[cityKey];

  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={data.heroImage} 
            alt={data.title} 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md mb-6">
            <MapPin size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              Available in {params.city.charAt(0).toUpperCase() + params.city.slice(1)}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
            {data.title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 || i === 2 ? "text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#8a6e1c]" : "text-white"}>
                {word} </span>
            ))}
          </h1>
          
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light mb-10">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Book for {params.city}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE LOCAL ADVANTAGE */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] text-sm font-black uppercase tracking-widest mb-4 block">
              The {params.city.charAt(0).toUpperCase() + params.city.slice(1)} Edge
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
              Why hire Anchor Yash for <span className="text-zinc-500">Your Event?</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 border-l-2 border-[#D4AF37] pl-6">
              "{data.vibe}"
            </p>
            <ul className="space-y-4">
              {[
                "Fluent in English & Hindi (Perfect for diverse crowds)",
                "Experince managing 1000+ Guest crowds",
                "Technical knowledge of Sound & Light setups",
                "Zero-travel hassle (Team ready to deploy)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                  <CheckCircle2 size={18} className="text-[#D4AF37]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#111] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center aspect-square">
                <Mic size={40} className="text-[#D4AF37] mb-4" />
                <span className="text-3xl font-black text-white">1100+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Shows</span>
             </div>
             <div className="bg-[#111] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center aspect-square">
                <Users size={40} className="text-[#D4AF37] mb-4" />
                <span className="text-3xl font-black text-white">500+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Happy Clients</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. VENUE EXPERTISE */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-12">
            Experience at Top {params.city.charAt(0).toUpperCase() + params.city.slice(1)} Venues
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.tags.map((tag, i) => (
              <span key={i} className="px-8 py-4 rounded-full border border-white/10 bg-zinc-900 text-zinc-300 text-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">
                {tag}
              </span>
            ))}
            <span className="px-8 py-4 rounded-full border border-white/10 bg-zinc-900 text-zinc-500 text-lg">
              + Many More
            </span>
          </div>
        </div>
      </section>

      {/* 4. CTA FOOTER SPECIFIC TO CITY */}
      <section className="py-24 bg-[#D4AF37] text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none">
            Planning an event in <br/> {params.city}?
          </h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
            Don't settle for a generic host. Get the anchor who knows the city, the venues, and the vibe.
          </p>
          <Link href="/contact">
            <button className="bg-black text-white px-12 py-5 text-lg font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl">
              Get {params.city.charAt(0).toUpperCase() + params.city.slice(1)} Quote
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

// 4. GENERATE STATIC PARAMS (For SEO & Performance)
// This tells Next.js to pre-build these pages at deploy time.
export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({
    city: city,
  }));
}