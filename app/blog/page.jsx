"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, Tag, Clock, ArrowRight, BookOpen, 
  Sparkles, Newspaper, Bookmark, ChevronRight
} from "lucide-react";

// --- DATA: EDITORIAL CONTENT ---
// In a real app, this would come from a CMS or local markdown files
const blogPosts = [
  {
    slug: "jaipur-palace-wedding-economics",
    title: "The Economics of Jaipur Palace Weddings: Hidden Costs Exposed",
    excerpt: "Planning at Fairmont or Rambagh? We break down the technical riders and hospitality logistics that traditional planners won't tell you about.",
    category: "Planning",
    date: "Jan 18, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
    featured: true
  },
  {
    slug: "sound-engineering-success",
    title: "Why Sound Engineering is 50% of Your Event's Success",
    excerpt: "Crystal clear audio isn't an accident. A deep dive into line arrays, RF frequencies, and technical checklists for high-stakes stages.",
    category: "Production",
    date: "Jan 14, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070"
  },
  {
    slug: "2026-design-trends",
    title: "2026 Trend: From Maximalism to Narrative Architecture",
    excerpt: "Decor is shifting. Discover how we use 3D projection mapping and sustainable materials to create immersive guest journeys.",
    category: "Design",
    date: "Jan 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0201b28?q=80&w=2070"
  }
];

const categories = ["All", "Planning", "Production", "Design", "Management", "Artist Insider"];

export default function PremiumJournal() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- 1. EDITORIAL HERO --- */}
      <section className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-20 right-[-10%] opacity-5 pointer-events-none">
          <Newspaper size={600} />
        </div>
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-[1px] bg-[#D4AF37]"></div>
               <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs">The Industry Archive</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.85] mb-12 tracking-tighter uppercase">
              The <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700">Journal.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
              Deep-dives into event engineering, design philosophy, and the economics of luxury celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE NAVIGATOR (Sticky) --- */}
      <section className="sticky top-[0px] z-30 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/5 py-8">
         <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap gap-3">
               {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-2.5 rounded-none text-[10px] font-black uppercase tracking-[0.2em] transition-all border
                      ${activeCategory === cat ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-transparent text-gray-500 border-white/10 hover:border-[#D4AF37]'}
                    `}
                  >
                    {cat}
                  </button>
               ))}
            </div>
            <div className="relative w-full lg:w-96 group">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" />
               <input 
                 type="text" 
                 placeholder="SEARCH INVESTIGATIONS..." 
                 className="w-full bg-[#0a0a0a] border border-white/10 rounded-none py-4 pl-14 pr-6 text-xs font-bold tracking-widest focus:outline-none focus:border-[#D4AF37] transition-all"
               />
            </div>
         </div>
      </section>

      {/* --- 3. FEATURED CASE STUDY --- */}
      <section className="py-24 container mx-auto px-6">
         {blogPosts.filter(p => p.featured).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
               <div className="relative grid lg:grid-cols-12 gap-0 bg-[#0a0a0a] border border-white/5 overflow-hidden">
                  <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden">
                     <img 
                       src={post.image} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                       alt={post.title}
                     />
                  </div>
                  <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center">
                     <div className="flex items-center gap-6 text-[10px] text-[#D4AF37] font-black uppercase tracking-[0.3em] mb-8">
                        <span className="bg-[#D4AF37] text-black px-3 py-1">Cover Story</span>
                        <span>{post.readTime}</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 group-hover:text-[#D4AF37] transition-colors uppercase">
                        {post.title}
                     </h2>
                     <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                        {post.excerpt}
                     </p>
                     <div className="flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-[10px]">
                        Read Full Audit <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                     </div>
                  </div>
               </div>
            </Link>
         ))}
      </section>

      {/* --- 4. THE GRID --- */}
      <section className="py-24 container mx-auto px-6">
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogPosts.filter(p => !p.featured).map((post) => (
               <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-white/5">
                     <img 
                       src={post.image} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                       alt={post.title}
                     />
                     <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[9px] font-black text-[#D4AF37] uppercase tracking-widest border border-white/10">
                        {post.category}
                     </div>
                  </div>
                  <div className="flex-grow">
                     <h3 className="text-2xl font-display font-bold group-hover:text-[#D4AF37] transition-colors leading-tight mb-4 uppercase tracking-tight">
                        {post.title}
                     </h3>
                     <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-light mb-6">
                        {post.excerpt}
                     </p>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                     <span className="text-gray-600">{post.date}</span>
                     <span className="text-[#D4AF37] group-hover:underline">View Article</span>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* --- 5. THE MANIFESTO --- */}
      <section className="py-40 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
         <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
            <Sparkles size={48} className="text-[#D4AF37] mx-auto mb-10 animate-pulse" />
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 italic uppercase tracking-tighter leading-none">Stay Ahead of <br/> the Industry.</h2>
            <p className="text-gray-500 mb-12 text-xl font-light leading-relaxed">
               Join 5,000+ professionals receiving our monthly breakdown of event tech and venue secrets.
            </p>
            <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-white/20">
               <input 
                 type="email" 
                 placeholder="PROFESSIONAL EMAIL" 
                 className="flex-grow bg-black px-8 py-5 focus:outline-none text-[10px] font-black tracking-widest uppercase"
               />
               <button className="bg-white text-black px-10 py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#D4AF37] transition-colors">
                  Subscribe
               </button>
            </form>
         </div>
      </section>
    </div>
  );
}
