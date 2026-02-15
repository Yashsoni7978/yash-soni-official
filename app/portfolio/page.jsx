"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MapPin, ArrowUpRight, Camera, Instagram, Youtube } from "lucide-react";

// --- 1. LUXURY TEXTURE ASSETS ---
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

// --- 2. PORTFOLIO DATA (Using Your Local Images) ---
const portfolioItems = [
  {
    id: 1,
    type: "video",
    category: "Wedding",
    title: "The Royal Sangeet",
    venue: "Fairmont, Jaipur",
    desc: "500+ guests. High-octane energy. Non-stop dancing.",
    image: "/gallery-1.webp",
    link: "https://youtube.com/@anchoryashsoni",
    height: "h-96" // Tall
  },
  {
    id: 2,
    type: "photo",
    category: "Corporate",
    title: "Tech Summit 2025",
    venue: "Marriott, Jaipur",
    desc: "Hosting the annual awards for top industry leaders.",
    image: "/service-corporate.webp",
    link: "https://instagram.com/anchor_yash_official",
    height: "h-64" // Short
  },
  {
    id: 3,
    type: "photo",
    category: "Wedding",
    title: "Varmala Moment",
    venue: "Rambagh Palace",
    desc: "Orchestrating the emotional high-point with poetic flair.",
    image: "/gallery-3.webp",
    link: "https://instagram.com/anchor_yash_official",
    height: "h-80" // Medium
  },
  {
    id: 4,
    type: "video",
    category: "Haldi",
    title: "The Holi Haldi",
    venue: "Chomu Palace",
    desc: "Flower holi, anchor-led games, and pure chaos.",
    image: "/gallery-4.webp",
    link: "https://youtube.com/@anchoryashsoni",
    height: "h-72" 
  },
  {
    id: 5,
    type: "photo",
    category: "Social",
    title: "Fashion Ramp Walk",
    venue: "The Lalit, Jaipur",
    desc: "Driving energy and pace for a major designer showcase.",
    image: "/service-fashion.webp",
    link: "https://instagram.com/anchor_yash_official",
    height: "h-64"
  },
  {
    id: 6,
    type: "video",
    category: "Wedding",
    title: "Bride & Groom Entry",
    venue: "Le Meridien",
    desc: "Creating a cinematic entry moment.",
    image: "/service-wedding.webp",
    link: "https://youtube.com/@anchoryashsoni",
    height: "h-96"
  },
  {
    id: 7,
    type: "photo",
    category: "Corporate",
    title: "Gala Dinner",
    venue: "Taj Jai Mahal",
    desc: "Networking night with stakeholders and VIPs.",
    image: "/gallery-5.webp",
    link: "https://instagram.com/anchor_yash_official",
    height: "h-80"
  },
  {
    id: 8,
    type: "video",
    category: "Social",
    title: "Concert Hosting",
    venue: "JECC, Jaipur",
    desc: "Opening and hyping the crowd for a major artist.",
    image: "/gallery-6.webp",
    link: "https://youtube.com/@anchoryashsoni",
    height: "h-72"
  },
];

const categories = ["All", "Wedding", "Corporate", "Haldi", "Social"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // JSON-LD Schema for the Portfolio Gallery
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Anchor Yash Soni Portfolio",
    "description": "Live event hosting portfolio of Anchor Yash Soni.",
    "url": "https://yashsoni.in/portfolio",
    "author": {
      "@type": "Person",
      "name": "Yash Soni"
    }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4 font-bold">Selected Works</p>
          <h1 className="text-6xl md:text-8xl font-display font-black mb-8 leading-tight">
            The <GoldTextureText>Showreel</GoldTextureText>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
            A curated collection of moments where energy meets elegance. <br className="hidden md:block" />
            From high-octane sangeets to prestigious corporate galas.
          </p>
        </motion.div>
      </div>

      {/* --- FILTER BAR --- */}
      <div className="container mx-auto px-4 mb-16 sticky top-20 z-30">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-black/80 backdrop-blur-md py-4 border-y border-neutral-900 w-fit mx-auto px-8 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 text-xs md:text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeFilter === cat 
                  ? "bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                  : "text-gray-500 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- MASONRY GRID --- */}
      <div className="container mx-auto px-4">
        {/* CSS Columns for smooth Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="break-inside-avoid mb-6"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="group relative rounded-xl overflow-hidden cursor-pointer border border-neutral-900 bg-[#0a0a0a] hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                    
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={`Anchor Yash Soni hosting ${item.category} event at ${item.venue} - ${item.title}`} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        loading="lazy"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-20">
                         {item.type === "video" ? (
                           <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                             <Play className="w-4 h-4 fill-current" />
                           </div>
                         ) : (
                           <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-white transition-colors">
                             <Camera className="w-4 h-4" />
                           </div>
                         )}
                      </div>
                    </div>

                    {/* Dark Overlay with Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      
                      <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold drop-shadow-md">
                          {item.category}
                        </p>
                        
                        <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">{item.title}</h3>
                        
                        <div className="flex items-center gap-2 text-gray-300 text-xs mb-3 font-medium">
                          <MapPin className="w-3 h-3 text-[#D4AF37]" /> {item.venue}
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#D4AF37] pl-3 mb-5 font-light">
                          {item.desc}
                        </p>
                        
                        <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest group/link">
                          {item.type === "video" ? "Watch on YouTube" : "View on Instagram"} 
                          <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="text-center mt-32 border-t border-neutral-900 pt-20 px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Want to see more?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://instagram.com/anchor_yash_official" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-neutral-800 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-[#f09433] hover:to-[#e6683c] hover:border-transparent transition-all flex items-center justify-center gap-3 shadow-lg">
               <Instagram className="w-5 h-5" /> Instagram Feed
            </button>
          </a>
          <a 
            href="https://youtube.com/@anchoryashsoni" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-neutral-800 text-white font-bold rounded-full hover:bg-red-600 hover:border-red-600 transition-all flex items-center justify-center gap-3 shadow-lg">
               <Youtube className="w-5 h-5" /> YouTube Channel
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}
