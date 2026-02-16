"use client";

import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../../data/blogs"; 
import { ArrowRight } from "lucide-react";

// --- LUXURY TEXTURE ASSET ---
const GoldTextureText = ({ children, className = "" }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

export default function BlogPage() {
  const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const accent = BLOG_POSTS.find(p => p.isAccent) || BLOG_POSTS[1];
  const vertical = BLOG_POSTS.find(p => p.isVertical) || BLOG_POSTS[2];

  const remainingPosts = BLOG_POSTS.filter(
    p => p.id !== featured.id && p.id !== accent.id && p.id !== vertical.id
  );

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 font-sans selection:bg-[#D4AF37] selection:text-black">
      <div className="container mx-auto px-6 max-w-7xl text-white">
        
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 border-b border-white/10 pb-8 drop-shadow-2xl">
          <GoldTextureText>Blog</GoldTextureText>
        </h1>

        {/* --- TOP GEMSTONE BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Main Featured (Deep Black & Gold) */}
          <div className="lg:col-span-7 group h-[600px] lg:h-auto">
            <Link href={`/blog/${featured.slug}`} className="block h-full">
              <div className="relative h-full rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/50 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500">
                <img src={featured.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale-[20%]" alt={featured.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-0 p-8 md:p-12 w-full z-10">
                  <p className="text-xs font-bold uppercase mb-4 tracking-widest text-[#D4AF37]">{featured.category} . {featured.date}</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-white group-hover:text-[#D4AF37] transition-colors duration-500">{featured.title}</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column Bento */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Accent Card (Dark Sapphire Royal Blue) */}
            <Link href={`/blog/${accent.slug}`} className="block">
              <div className="bg-gradient-to-br from-[#0A1128] to-[#050505] border border-[#1A2B5A]/50 hover:border-[#D4AF37]/50 rounded-[3rem] p-10 relative group shadow-[0_0_30px_rgba(10,17,40,0.5)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Subtle Diamond Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
                
                <p className="text-[10px] font-bold uppercase mb-6 tracking-widest text-blue-300">{accent.category}</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-6 text-white">{accent.title}</h2>
                <div className="absolute top-8 right-8 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black -rotate-45 group-hover:rotate-0 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* Vertical Card (Dark Ruby Royal Pink) */}
            <Link href={`/blog/${vertical.slug}`} className="block h-full">
              <div className="bg-gradient-to-br from-[#2A0813] to-[#050505] border border-[#5A1128]/50 hover:border-[#D4AF37]/50 rounded-[3rem] p-10 relative overflow-hidden h-full shadow-[0_0_30px_rgba(42,8,19,0.5)] min-h-[300px] group transition-all duration-500">
                <p className="text-[10px] font-bold uppercase mb-4 tracking-widest text-pink-300 relative z-10">{vertical.category}</p>
                <h3 className="text-3xl font-black uppercase leading-none mt-16 relative z-10 text-white">{vertical.title}</h3>
                <img src={vertical.image} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" alt={vertical.title} />
              </div>
            </Link>

          </div>
        </div>

        {/* --- BOTTOM GRID FOR REMAINING POSTS --- */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remainingPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group bg-[#0a0a0a] rounded-[3rem] p-6 md:p-8 border border-white/5 hover:border-[#D4AF37]/30 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 h-full flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-2/5 aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0" alt={post.title} />
                  </div>
                  <div className="w-full md:w-3/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">{post.category} . {post.date}</p>
                    <h3 className="text-2xl font-black uppercase leading-tight mb-4 text-white group-hover:text-gray-200">{post.title}</h3>
                    <p className="text-sm text-zinc-400 line-clamp-2 font-light">{post.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
