"use client";
import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blogs"; // Adjusted path
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const others = BLOG_POSTS.filter(p => !p.featured);

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl text-black">
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 border-b border-black/5 pb-8">Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured */}
          <div className="lg:col-span-7 group">
            <Link href={`/blog/${featured.slug}`}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-black shadow-2xl">
                <img src={featured.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" alt={featured.title} />
                <div className="absolute bottom-0 p-12 text-white">
                  <p className="text-xs font-bold uppercase mb-4 tracking-widest">{featured.category}</p>
                  <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9]">{featured.title}</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column Bento */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className={`p-10 rounded-[3rem] shadow-lg transition-transform hover:scale-[1.02] ${post.isVertical ? "bg-[#D9E4FF]" : "bg-[#E2FF31]"}`}>
                  <p className="text-[10px] font-bold uppercase mb-6 opacity-60">{post.category}</p>
                  <h2 className="text-3xl font-black uppercase leading-none">{post.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}