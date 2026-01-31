"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Clock } from "lucide-react";

// --- MOCK DATA ---
const posts = [
  {
    id: 1,
    title: "The Unspoken Rules of Palace Weddings in Rajasthan",
    category: "Venue Insights",
    date: "Oct 12, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
    slug: "palace-wedding-rules",
    featured: true
  },
  {
    id: 2,
    title: "Mastering the Mic: Voice Modulation Techniques",
    category: "Anchoring",
    date: "Sep 28, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2070",
    slug: "voice-modulation",
    featured: false
  },
  {
    id: 3,
    title: "2026 Event Trends: Immersive Tech & Sustainability",
    category: "Trends",
    date: "Sep 15, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070",
    slug: "event-trends-2026",
    featured: false
  },
  {
    id: 4,
    title: "Managing High-Net-Worth Guest Lists",
    category: "Management",
    date: "Aug 30, 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070",
    slug: "hnw-guest-lists",
    featured: false
  },
  {
    id: 5,
    title: "The Art of the Sangeet Script",
    category: "Anchoring",
    date: "Aug 10, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070",
    slug: "sangeet-script-art",
    featured: false
  }
];

const categories = ["All", "Venue Insights", "Anchoring", "Trends", "Management"];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPosts = activeTab === "All" ? posts : posts.filter(p => p.category === activeTab);
  const featuredPost = posts.find(p => p.featured);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Split Layout) */}
      <section className="pt-32 pb-12 border-b border-white/10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase block mb-4"
            >
              The Editorial
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6"
            >
              INSIGHTS <br/> <span className="text-zinc-700">&</span> STORIES
            </motion.h1>
            <p className="text-zinc-400 max-w-md text-lg font-light">
              A curated collection of thoughts on anchoring, event production, and the luxury lifestyle industry.
            </p>
          </div>
          
          {/* Search Bar aligned bottom right */}
          <div className="w-full">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-zinc-900/50 border border-white/10 p-6 pr-12 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-[#D4AF37] transition-all"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#D4AF37]" size={20} />
             </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER (Sticky) */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative py-2
                  ${activeTab === cat ? "text-[#D4AF37]" : "text-zinc-500 hover:text-white"}`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        
        {/* 3. FEATURED POST (Immersive Card) */}
        {activeTab === "All" && featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 group cursor-pointer"
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="relative h-[60vh] w-full overflow-hidden border border-white/10">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
                 <img 
                   src={featuredPost.image} 
                   alt={featuredPost.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" 
                 />
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="flex items-center gap-4 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4">
                       <span>{featuredPost.category}</span>
                       <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                       <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6 group-hover:text-[#D4AF37] transition-colors max-w-4xl">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80 group-hover:translate-x-4 transition-transform">
                      Read Feature <ArrowUpRight size={18} />
                    </div>
                 </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 4. POSTS GRID (Asymmetrical) */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredPosts.filter(p => activeTab !== "All" || !p.featured).map((post, idx) => (
             <motion.div 
               key={post.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="group cursor-pointer flex flex-col h-full"
             >
               <Link href={`/blog/${post.slug}`} className="block h-full">
                 <div className="relative aspect-[4/3] overflow-hidden border border-white/5 mb-8">
                    <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {post.date}
                    </div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                 </div>
                 
                 <div className="flex-1 flex flex-col">
                   <div className="flex justify-between items-start mb-4">
                     <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/30 px-2 py-1">
                       {post.category}
                     </span>
                     <span className="text-zinc-500 text-xs flex items-center gap-1">
                       <Clock size={12} /> {post.readTime}
                     </span>
                   </div>
                   
                   <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-4 group-hover:text-[#D4AF37] transition-colors">
                     {post.title}
                   </h3>
                   
                   <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                     <span>Read Article</span>
                     <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                   </div>
                 </div>
               </Link>
             </motion.div>
          ))}
        </div>

      </div>

      {/* 5. NEWSLETTER (Minimalist) */}
      <section className="border-t border-white/10 bg-[#050505]">
         <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
               <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">
                 Join the <span className="text-[#D4AF37]">Inner Circle</span>.
               </h3>
               <p className="text-zinc-400 font-light text-lg">
                 Bi-weekly insights on event production, anchoring, and industry trends delivered to your inbox.
               </p>
            </div>
            
            <form className="flex w-full md:w-auto border-b border-white/30 focus-within:border-[#D4AF37] transition-colors">
               <input 
                 type="email" 
                 placeholder="YOUR EMAIL ADDRESS" 
                 className="bg-transparent py-4 pr-12 text-sm font-bold uppercase tracking-widest w-full md:w-80 focus:outline-none"
               />
               <button className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                 Subscribe
               </button>
            </form>
         </div>
      </section>

    </div>
  );
}