"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../../../data/blogs"; 

// --- LUXURY TEXTURE ASSET ---
const GoldTextureText = ({ children, className = "" }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Editorial Header Image */}
      <div className="h-[75vh] w-full relative overflow-hidden bg-[#0a0a0a]">
        <img src={post.image} className="w-full h-full object-cover opacity-50 grayscale-[20%]" alt={post.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex items-end p-6 md:p-20">
          <div className="max-w-5xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 mb-8 hover:text-[#D4AF37] transition-colors tracking-widest">
              <ArrowLeft size={16} /> Back to Journal
            </Link>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.95] tracking-tighter drop-shadow-2xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Content (Dark Mode Prose) */}
      <article className="max-w-3xl mx-auto py-24 px-6 prose prose-lg md:prose-xl prose-invert prose-headings:font-black prose-headings:uppercase prose-p:font-light prose-a:text-[#D4AF37]">
        
        {/* Meta Data Strip */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-12 text-zinc-400 font-bold uppercase text-[10px] tracking-widest border-b border-white/10 pb-8">
          <span className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">{post.category}</span>
          <span className="flex items-center gap-2 mt-1"><Calendar size={14} className="text-[#D4AF37]" /> {post.fullDate}</span>
          <span className="flex items-center gap-2 mt-1"><Clock size={14} className="text-[#D4AF37]" /> {post.readTime} Read</span>
        </div>

        {/* The Text Body */}
        <div className="whitespace-pre-wrap text-zinc-300 leading-relaxed">
          {post.content}
        </div>

      </article>
    </main>
  );
}
