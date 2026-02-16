"use client";

import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../../data/blogs"; 
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  // 1. Separate the Bento Grid posts from the regular posts
  const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const accent = BLOG_POSTS.find(p => p.isAccent) || BLOG_POSTS[1];
  const vertical = BLOG_POSTS.find(p => p.isVertical) || BLOG_POSTS[2];

  // 2. Grab all the remaining posts that aren't in the top Bento Grid
  const remainingPosts = BLOG_POSTS.filter(
    p => p.id !== featured.id && p.id !== accent.id && p.id !== vertical.id
  );

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl text-black">
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 border-b border-black/5 pb-8">Blog</h1>

        {/* --- TOP BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Main Featured */}
          <div className="lg:col-span-7 group h-[600px] lg:h-auto">
            <Link href={`/blog/${featured.slug}`} className="block h-full">
              <div className="relative h-full rounded-[3rem] overflow-hidden bg-black shadow-xl">
                <img src={featured.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" alt={featured.title} />
                <div className="absolute bottom-0 p-8 md:p-12 text-white bg-gradient-to-t from-black/90 to-transparent w-full">
                  <p className="text-xs font-bold uppercase mb-4 tracking-widest">{featured.category} . {featured.date}</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9]">{featured.title}</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column Bento */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href={`/blog/${accent.slug}`} className="block">
              <div className="bg-[#E2FF31] rounded-[3rem] p-10 relative group shadow-lg transition-transform hover:-translate-y-1">
                <p className="text-[10px] font-bold uppercase mb-6 opacity-60 tracking-widest">{accent.category}</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-6">{accent.title}</h2>
                <div className="absolute top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            <Link href={`/blog/${vertical.slug}`} className="block h-full">
              <div className="bg-[#D9E4FF] rounded-[3rem] p-10 relative overflow-hidden h-full shadow-lg min-h-[300px] group">
                <p className="text-[10px] font-bold uppercase mb-4 opacity-50 tracking-widest relative z-10">{vertical.category}</p>
                <h3 className="text-3xl font-black uppercase leading-none mt-16 relative z-10">{vertical.title}</h3>
                <img src={vertical.image} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" alt={vertical.title} />
              </div>
            </Link>
          </div>
        </div>

        {/* --- BOTTOM GRID FOR REMAINING POSTS (#4, #5, etc.) --- */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remainingPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-[3rem] p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all h-full flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-2/5 aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                  </div>
                  <div className="w-full md:w-3/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{post.category} . {post.date}</p>
                    <h3 className="text-2xl font-black uppercase leading-tight mb-4">{post.title}</h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">{post.desc}</p>
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
