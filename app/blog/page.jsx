"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, Clock, ArrowUpRight, ChevronRight, 
  Calendar, TrendingUp 
} from "lucide-react";

// --- 1. CONFIGURATION ---
const GOLD_COLOR = "#D4AF37";

// --- 2. DATA: THE 9 BLOGS ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 5 Luxury Wedding Venues in Jaipur (2025 Guide): A Professional Anchor's Review",
    excerpt: "Planning a royal destination wedding in Rajasthan? Read this in-depth review of Jaipur's top 5 venues including Fairmont, The Leela, and Rambagh Palace, featuring insider tips on acoustics, layout, and entertainment from Anchor Yash.",
    category: "Venue Guide",
    date: "Dec 29, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
    slug: "luxury-wedding-venues-jaipur-2025",
    featured: true
  },
  {
    id: 2,
    title: "7 Hilarious Wedding Games for Couples & Guests (No Props Required)",
    excerpt: "Want to turn a boring reception into a party? Here are 7 high-energy games like 'The Shoe Game' and 'Paper Dance' that I use to get everyone laughing.",
    category: "Engagement",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070",
    slug: "hilarious-wedding-games",
    featured: false
  },
  {
    id: 3,
    title: "How Much Does a Wedding Anchor Charge in Jaipur? (2025 Price Guide)",
    excerpt: "Budgeting for your big day? From budget beginners to celebrity emcees, here is a transparent breakdown of wedding anchor rates in Rajasthan and what you actually get for your money.",
    category: "Budgeting",
    date: "Dec 26, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=2070",
    slug: "wedding-anchor-charges-jaipur",
    featured: false
  },
  {
    id: 4,
    title: "Top 5 Corporate Team Building Activities for Offsites in Jaipur",
    excerpt: "Planning an annual meet or offsite in Jaipur? Ditch the boring PowerPoints. Here are 5 high-energy team building activities like 'The Scavenger Hunt' and 'Drum Circles' that actually work.",
    category: "Corporate",
    date: "Dec 24, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070",
    slug: "corporate-team-building-activities",
    featured: false
  },
  {
    id: 5,
    title: "The Ultimate Checklist for a Destination Wedding in Rajasthan (2025)",
    excerpt: "Planning a royal wedding in Jaipur or Udaipur? Don't get overwhelmed. Here is my month-by-month checklist for booking venues, vendors, and your anchor to ensure a flawless event.",
    category: "Planning",
    date: "Dec 23, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1519225448526-0cb85878da63?q=80&w=2070",
    slug: "destination-wedding-checklist-rajasthan",
    featured: false
  },
  {
    id: 6,
    title: "Viral Bride & Groom Entry Ideas for 2025 Weddings",
    excerpt: "Want an entry that breaks the internet? From vintage cars to emotional voiceovers, here are the trendiest entry ideas I have announced this wedding season.",
    category: "Trends",
    date: "Dec 22, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
    slug: "viral-bride-groom-entry-ideas",
    featured: false
  },
  {
    id: 7,
    title: "Don't Let Bad Sound Ruin Your Sangeet: A Technical Checklist",
    excerpt: "The best anchor cannot save an event if the mic stops working. Here is the technical Sound & Light checklist I insist on for every wedding I host.",
    category: "Technical",
    date: "Dec 20, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    slug: "sangeet-sound-checklist",
    featured: false
  },
  {
    id: 8,
    title: "5 Rajasthani Wedding Traditions Every Guest Should Know",
    excerpt: "Confused by the 'Toran' or the 'Juta Chupai'? As a Jaipur anchor, I explain the fun, the money, and the meaning behind Rajasthan's most famous wedding rituals.",
    category: "Culture",
    date: "Dec 16, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070",
    slug: "rajasthani-wedding-traditions",
    featured: false
  },
  {
    id: 9,
    title: "Why Anchor Yash is the Top Choice for Premium Events in Jaipur",
    excerpt: "Your event deserves more than just a 'mic holder.' With 1100+ events, bilingual fluency, and unmatched energy, here is why top event planners in Rajasthan trust Anchor Yash.",
    category: "Branding",
    date: "Dec 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1521334884326-754092fea637?q=80&w=2070",
    slug: "why-choose-anchor-yash",
    featured: false
  }
];

const CATEGORIES = ["All", "Venue Guide", "Planning", "Corporate", "Trends", "Technical"];

// --- 3. COMPONENTS ---

const ArticleCard = ({ post }) => (
  <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
    <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6 border border-white/10">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest border border-white/10 rounded-md">
        {post.category}
      </div>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-3 text-zinc-500 text-xs mb-3 font-medium uppercase tracking-wider">
        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
        {post.title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center text-[#D4AF37] text-xs font-black uppercase tracking-widest gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
        Read Article <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  </Link>
);

// --- 4. MAIN PAGE ---

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter logic
  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS.filter(p => !p.featured) // Exclude featured from grid if 'All'
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const featuredPost = BLOG_POSTS.find(p => p.featured);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HEADER SECTION (SEO Optimized H1) */}
      <section className="pt-32 pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[#D4AF37] font-black tracking-[0.2em] uppercase text-xs mb-4 block">
              The Anchor's Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white leading-[0.9]">
              Latest Insights <span className="text-zinc-600">&</span> <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8a6e1c]">Expert Advice</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              Expert advice, behind-the-scenes stories, and tips to make your next event unforgettable. Curated by Anchor Yash.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Content (9 cols) */}
          <div className="lg:col-span-9">
            
            {/* FEATURED POST (Full Width) */}
            {activeCategory === "All" && featuredPost && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-20"
              >
                <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden border border-white/10">
                  <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-90" />
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 z-20 bg-[#D4AF37] text-black px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-md">
                      Featured Guide
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
                      <div className="flex items-center gap-4 text-zinc-300 text-xs mb-4 font-medium uppercase tracking-wider">
                        <span>{featuredPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-zinc-300 text-lg md:text-xl font-light mb-8 line-clamp-2 md:line-clamp-none">
                        {featuredPost.excerpt}
                      </p>
                      <button className="flex items-center gap-3 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-black uppercase tracking-widest group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all">
                        Read Full Article <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* GRID LAYOUT FOR OTHER POSTS */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ArticleCard post={post} />
                </motion.div>
              ))}
            </div>

            {/* EMPTY STATE */}
            {filteredPosts.length === 0 && (
              <div className="py-20 text-center border border-white/10 rounded-2xl bg-zinc-900/30">
                <p className="text-zinc-500">No articles found in this category.</p>
                <button onClick={() => setActiveCategory("All")} className="mt-4 text-[#D4AF37] underline">View All Posts</button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar (3 cols) - Sticky */}
          <aside className="lg:col-span-3 space-y-12">
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6 border-l-2 border-[#D4AF37] pl-3">
                Explore Topics
              </h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group
                      ${activeCategory === cat ? "bg-[#D4AF37] text-black font-bold" : "bg-zinc-900/30 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                  >
                    {cat}
                    {activeCategory === cat && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending / Quick Links */}
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
               <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
                 <TrendingUp size={20} />
                 <span className="text-xs font-black uppercase tracking-widest">Trending Now</span>
               </div>
               <ul className="space-y-4">
                 <li className="text-sm text-zinc-300 hover:text-[#D4AF37] cursor-pointer transition-colors border-b border-white/5 pb-3">
                   → 5 Rajasthani Wedding Traditions
                 </li>
                 <li className="text-sm text-zinc-300 hover:text-[#D4AF37] cursor-pointer transition-colors border-b border-white/5 pb-3">
                   → Viral Bride & Groom Entry Ideas
                 </li>
                 <li className="text-sm text-zinc-300 hover:text-[#D4AF37] cursor-pointer transition-colors">
                   → Sangeet Technical Checklist
                 </li>
               </ul>
            </div>

            {/* Newsletter Mini */}
            <div className="text-center p-8 border border-[#D4AF37]/30 rounded-xl bg-[#D4AF37]/5">
               <h4 className="font-bold text-white mb-2">Get the Weekly Digest</h4>
               <p className="text-xs text-zinc-400 mb-4">Event trends & secrets delivered to your inbox.</p>
               <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs mb-3 focus:outline-none focus:border-[#D4AF37]" />
               <button className="w-full bg-[#D4AF37] text-black font-bold text-xs uppercase py-3 rounded hover:bg-white transition-colors">
                 Subscribe
               </button>
            </div>
          </aside>

        </div>
      </div>

      {/* 3. FOOTER CTA AREA */}
      <section className="border-t border-white/10 bg-black py-20 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Need a Host for Your Event?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Read enough? Let's make magic happen. Book Anchor Yash for your next wedding or corporate gala.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Check Availability
              </button>
            </Link>
         </div>
      </section>

    </main>
  );
}
