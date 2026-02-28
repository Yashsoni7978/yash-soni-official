import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // 1. Imported next/image for LCP optimization
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../../../data/blogs"; 

// --- 1. DYNAMIC SEO METADATA ---
// This automatically reads the blog data and creates perfect SEO tags for Google
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);
  
  if (!post) return {};
  
  return {
    title: `${post.title} | Anchor Yash Soni`,
    description: `Read the latest insights on ${post.title} and luxury event management in Rajasthan.`,
    keywords: [post.category, "Event Anchoring", "Anchor Yash Soni Blog"],
  };
}

// --- 2. PRE-BUILD STATIC GENERATOR ---
// This tells Vercel to pre-build every blog post so they load instantly
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// --- 3. LUXURY TEXTURE ASSET ---
// Note: Make sure your actual file is saved as gold-texture.webp for maximum speed!
const GoldTextureText = ({ children, className = "" }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

// --- 4. SERVER COMPONENT (Removed "use client") ---
export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Editorial Header Image */}
      <div className="h-[75vh] w-full relative overflow-hidden bg-[#0a0a0a]">
        
        {/* REPLACED <img> with next/image for instant loading */}
        {post.image && (
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            priority // This forces the browser to load this image FIRST
            className="object-cover opacity-50 grayscale-[20%]"
            sizes="100vw"
          />
        )}
        
        {/* Added z-10 to ensure text stays above the Next/Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex items-end p-6 md:p-20 z-10">
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
