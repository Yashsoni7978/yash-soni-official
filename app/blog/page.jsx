"use client";
import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../../data/blogs";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const featured = BLOG_POSTS.find(p => p.featured);
  const accent = BLOG_POSTS.find(p => p.isAccent);
  const vertical = BLOG_POSTS.find(p => p.isVertical);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-black pt-32 pb-20 font-sans selection:bg-[#D4AF37] selection:text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12 border-b border-black/5 pb-8">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">Blog</h1>
          <p className="hidden md:block text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Journal by Yash Soni</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Post - SEO Heavyweight */}
          <div className="lg:col-span-7 group">
            <Link href={`/blog/${featured.slug}`}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-black shadow-2xl">
                <img src={featured.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={featured.title} />
                <div className="absolute bottom-0 p-12 text-white bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-xs font-bold uppercase mb-4 tracking-widest">{featured.category} . {featured.date}</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9]">{featured.title}</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Bento Layout */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* High-Visibility Accent Card */}
            <div className="bg-[#E2FF31] rounded-[3rem] p-10 relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-[10px] font-bold uppercase mb-6 opacity-60 tracking-widest">{accent.category}</p>
              <h2 className="text-4xl font-black uppercase leading-none mb-6">{accent.title}</h2>
              <Link href={`/blog/${accent.slug}`} className="absolute top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform">
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Vertical Showcase Card */}
            <div className="bg-[#D9E4FF] rounded-[3rem] p-10 relative overflow-hidden h-full shadow-lg">
              <p className="text-[10px] font-bold uppercase mb-4 opacity-50 tracking-widest">{vertical.category}</p>
              <h3 className="text-4xl font-black uppercase leading-none mt-20 relative z-10 text-black">{vertical.title}</h3>
              <img src={vertical.image} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 grayscale group-hover:grayscale-0 transition-all" alt="Editorial Vertical" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
