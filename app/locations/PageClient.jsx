"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 

  MapPin, 
  Search, 
  ChevronDown, 
  Globe, 
  Compass,
  ArrowUpRight,
  TrendingUp,
  Award
} from "lucide-react";

// --- 1. CONFIG & ASSETS ---
const GOLD = "#D4AF37";

const GoldTextureText = ({ children, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- 2. DATA ---
const ALL_LOCATIONS = [
  { city: "Agra", slug: "anchor-in-agra", region: "Uttar Pradesh" },
  { city: "Ajmer", slug: "anchor-in-ajmer", region: "Rajasthan" },
  { city: "Alibaug", slug: "anchor-in-alibaug", region: "Maharashtra" },
  { city: "Alwar", slug: "anchor-in-alwar", region: "Rajasthan" },
  { city: "Andaman", slug: "anchor-in-andaman", region: "Islands" },
  { city: "Bangalore", slug: "anchor-in-bangalore", region: "Karnataka" },
  { city: "Bharatpur", slug: "anchor-in-bharatpur", region: "Rajasthan" },
  { city: "Bikaner", slug: "anchor-in-bikaner", region: "Rajasthan" },
  { city: "Chennai", slug: "anchor-in-chennai", region: "Tamil Nadu" },
  { city: "Chittorgarh", slug: "anchor-in-chittorgarh", region: "Rajasthan" },
  { city: "Coorg", slug: "anchor-in-coorg", region: "Karnataka" },
  { city: "Delhi", slug: "anchor-in-delhi", region: "NCR" },
  { city: "Dharamshala", slug: "anchor-in-dharamshala", region: "Himachal Pradesh" },
  { city: "Goa", slug: "anchor-in-goa", region: "Western" },
  { city: "Haridwar", slug: "anchor-in-haridwar", region: "Uttarakhand" },
  { city: "Hyderabad", slug: "anchor-in-hyderabad", region: "Telangana" },
  { city: "Jaipur", slug: "anchor-in-jaipur", region: "Rajasthan" },
  { city: "Jaisalmer", slug: "anchor-in-jaisalmer", region: "Rajasthan" },
  { city: "Jodhpur", slug: "anchor-in-jodhpur", region: "Rajasthan" },
  { city: "Kolkata", slug: "anchor-in-kolkata", region: "West Bengal" },
  { city: "Kota", slug: "anchor-in-kota", region: "Rajasthan" },
  { city: "Kumbhalgarh", slug: "anchor-in-kumbhalgarh", region: "Rajasthan" },
  { city: "Manali", slug: "anchor-in-manali", region: "Himachal Pradesh" },
  { city: "Mandawa", slug: "anchor-in-mandawa", region: "Rajasthan" },
  { city: "Mount Abu", slug: "anchor-in-mount-abu", region: "Rajasthan" },
  { city: "Mumbai", slug: "anchor-in-mumbai", region: "Maharashtra" },
  { city: "Mussoorie", slug: "anchor-in-mussoorie", region: "Uttarakhand" },
  { city: "Nainital", slug: "anchor-in-nainital", region: "Uttarakhand" },
  { city: "Neemrana", slug: "anchor-in-neemrana", region: "Rajasthan" },
  { city: "Ooty", slug: "anchor-in-ooty", region: "Tamil Nadu" },
  { city: "Pushkar", slug: "anchor-in-pushkar", region: "Rajasthan" },
  { city: "Rajasthan", slug: "anchor-in-rajasthan", region: "State Hub" },
  { city: "Ranthambore", slug: "anchor-in-ranthambore", region: "Rajasthan" },
  { city: "Rishikesh", slug: "anchor-in-rishikesh", region: "Uttarakhand" },
  { city: "Shimla", slug: "anchor-in-shimla", region: "Himachal Pradesh" },
  { city: "Udaipur", slug: "anchor-in-udaipur", region: "Rajasthan" },
  { city: "Varanasi", slug: "anchor-in-varanasi", region: "Uttar Pradesh" },
];

export default function LocationsPage() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = useMemo(() => {
    return ["All", ...new Set(ALL_LOCATIONS.map(loc => loc.region))].sort();
  }, []);

  const filteredLocations = useMemo(() => {
    return ALL_LOCATIONS.filter(loc => {
      const matchesSearch = loc.city.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === "All" || loc.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [search, selectedRegion]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Event Anchoring and Event Management",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni"
    },
    "areaServed": ALL_LOCATIONS.map(l => l.city),
    "url": "https://yashsoni.in/locations"
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 max-w-7xl mx-auto mb-20 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full bg-[#111]/50 backdrop-blur-md mb-8">
            <Globe size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">Jaipur & Rajasthan Availability</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
            Choose Your <br /> Destination <GoldTextureText>City</GoldTextureText>
          </h1>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            From the royal palaces of Rajasthan to the beachfront luxury of Goa, 
            Yash Soni is available for destination weddings and corporate galas across 35+ cities.
          </p>
        </Reveal>
      </section>

      {/* 2. SELECTOR UI (DROPDOWN + SEARCH) */}
      <section className="relative z-20 px-6 max-w-5xl mx-auto mb-16">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-4 md:p-8 shadow-2xl">
          <div className="grid md:grid-cols-[1fr_auto_1.5fr] gap-4 md:gap-8 items-center">
            
            {/* SEARCH */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10"></div>

            {/* REGION FILTER (Dropdown Proxy) */}
            <div className="flex flex-wrap gap-2">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    selectedRegion === region 
                      ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                      : "bg-white/5 text-zinc-500 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCATIONS GRID/DROPDOWN LIST */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredLocations.map((loc, idx) => (
              <motion.div
                layout
                key={loc.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
              >
                <Link href={`/${loc.slug}`}>
                  <div className="group bg-[#0a0a0a] border border-white/5 hover:border-[#D4AF37]/50 p-6 rounded-3xl transition-all duration-300 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none mb-1 group-hover:text-[#D4AF37] transition-colors">{loc.city}</h3>
                        <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-black leading-none">{loc.region}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredLocations.length === 0 && (
          <div className="py-20 text-center">
            <Compass size={48} className="mx-auto text-zinc-800 mb-4" />
            <p className="text-zinc-600 uppercase tracking-widest font-black text-xs">No destinations found. Check back later.</p>
          </div>
        )}
      </section>

      {/* --- NEW 600+ WORD SEO SECTION --- */}
      <section className="px-6 max-w-4xl mx-auto mt-20 pt-20 border-t border-white/5 space-y-16 pb-20">
        
        {/* Introduction */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Jaipur & Rajasthan Presence. <GoldTextureText>Global Standards.</GoldTextureText>
          </h2>
          <p className="text-gray-300 leading-relaxed font-light text-lg">
            While Jaipur serves as the strategic headquarters for Anchor Yash Soni Studio, our execution capabilities span across 35+ major metropolitan and heritage cities across Jaipur & Rajasthan. Destination events require more than just a loud voice on a microphone; they demand extreme logistical precision, cultural adaptability, and the ability to command crowds in entirely new environments. From the high-altitude acoustic challenges of Himalayan resorts in Shimla to the sprawling, open-air beach fronts of Goa, we bring the exact same flawless standard of event execution to every location.
          </p>
        </div>

        {/* Why Location Matters */}
        <div className="space-y-6 bg-[#0a0a0a] p-8 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-display font-bold text-white">Why Location Matters in Event Anchoring</h3>
          <div className="space-y-4 text-gray-400 font-light leading-relaxed">
            <p>
              Every city has its own pulse, its own cultural nuances, and its own logistical hurdles. A Marwari wedding in Kolkata requires a completely different comedic register and traditional understanding than an NRI destination wedding in Pushkar or a high-octane corporate award night in Bangalore. 
            </p>
            <p>
              Understanding regional dialects, knowing exactly how to bridge the gap between local traditions and modern entertainment, and having the network to handle technical emergencies in unfamiliar cities is what separates a local announcer from a national-level premium host. When you book Anchor Yash Soni for a destination event, you are not just flying in an emcee; you are importing an insurance policy against the unpredictability of remote event planning.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-display font-bold text-white">Frequently Asked Questions</h3>
          <div className="grid gap-4">
            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
              <h4 className="text-[#D4AF37] font-bold mb-2">Do you travel outside Jaipur?</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Yes, extensively. Over 60% of our premium calendar involves outstation travel. We regularly execute weddings and corporate summits in Delhi NCR, Mumbai, Goa, Udaipur, and international destinations.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
              <h4 className="text-[#D4AF37] font-bold mb-2">What cities have you anchored in?</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">We have successfully hosted over 1,100 events across 35+ cities including Agra, Alibaug, Bangalore, Chennai, Coorg, Hyderabad, Jodhpur, Kolkata, Mussoorie, and Varanasi. Check the grid above for our primary service areas.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
              <h4 className="text-[#D4AF37] font-bold mb-2">Is there a travel fee for outstation events?</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Yes. For all destination events outside of Jaipur city limits, travel (flights/premium ground transport), standard accommodation, and logistics are added to the retainer. This is transparently calculated and agreed upon during the initial contract phase.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[#111] to-[#050505] p-12 rounded-[2.5rem] border border-[#D4AF37]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative z-10">
            Planning a Destination Event?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
            Let's discuss the logistics. Secure your date early, as our calendar for destination weddings fills up 6-8 months in advance.
          </p>
          <Link href="/contact" className="inline-block relative z-10">
            <div className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Check Availability
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
