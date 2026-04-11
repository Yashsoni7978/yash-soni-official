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
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: GOLD }}
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

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 max-w-7xl mx-auto mb-20 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full bg-[#111]/50 backdrop-blur-md mb-8">
            <Globe size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">Pan-India Availability</span>
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

      {/* 4. FOOTER NOTE */}
      <section className="px-6 max-w-4xl mx-auto mt-20 pt-20 border-t border-white/5 text-center">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Standard Pricing</h4>
            <p className="text-zinc-500 text-[10px] leading-relaxed">Tiered local pricing for Rajasthan, NCR, and Goa hubs.</p>
          </div>
          <div>
            <Compass className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Global Travel</h4>
            <p className="text-zinc-500 text-[10px] leading-relaxed">Available worldwide. Travel/stay logistics provided upon booking.</p>
          </div>
          <div>
            <TrendingUp className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">One Lead Anchor</h4>
            <p className="text-zinc-500 text-[10px] leading-relaxed">Yash personally hosts every event. No replacements ever.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
