"use client";
import { useParams, notFound } from "next/navigation";
import { BLOG_POSTS } from "../../../data/blogs"; // Corrected deep path
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="h-[75vh] w-full relative overflow-hidden bg-zinc-900">
        <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
        <div className="absolute inset-0 bg-black/50 flex items-end p-6 md:p-20">
          <div className="max-w-5xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-white mb-8 hover:text-[#D4AF37] transition-all">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.95] tracking-tighter">{post.title}</h1>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto py-24 px-6 prose prose-xl">
        <div className="flex gap-6 mb-12 text-zinc-400 font-bold uppercase text-[10px] tracking-widest border-b border-zinc-100 pb-8">
          <span className="bg-[#D4AF37] text-black px-4 py-1 rounded-full">{post.category}</span>
          <span>{post.fullDate}</span>
          <span>{post.readTime} Read</span>
        </div>
        <div className="whitespace-pre-wrap text-zinc-800 text-xl leading-relaxed font-light">
          {post.content}
        </div>
      </article>
    </main>
  );
}