"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../../../data/blogs"; 

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      
      {/* Editorial Header Image */}
      <div className="h-[75vh] w-full relative overflow-hidden bg-zinc-900">
        <img src={post.image} className="w-full h-full object-cover opacity-80" alt={post.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-20">
          <div className="max-w-5xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-white mb-8 hover:text-[#D4AF37] transition-all">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.95] tracking-tighter">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto py-24 px-6 prose prose-lg md:prose-xl prose-headings:font-black prose-headings:uppercase prose-p:font-light">
        
        {/* Meta Data Strip */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-12 text-zinc-500 font-bold uppercase text-[10px] tracking-widest border-b border-zinc-100 pb-8">
          <span className="bg-[#D4AF37] text-black px-4 py-1 rounded-full">{post.category}</span>
          <span className="flex items-center gap-2 mt-1"><Calendar size={14} /> {post.fullDate}</span>
          <span className="flex items-center gap-2 mt-1"><Clock size={14} /> {post.readTime} Read</span>
        </div>

        {/* The Text Body */}
        <div className="whitespace-pre-wrap text-zinc-800 leading-relaxed">
          {post.content}
        </div>

      </article>
    </main>
  );
}
