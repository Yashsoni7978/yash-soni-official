import { blogs } from "@/data/blogs";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// This function tells Next.js which blogs exist so it can build them (SEO)
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Not Found" };
  
  return {
    title: `${post.title} | Anchor Yash Soni`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogs.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Shows the 404 page if slug is wrong
  }

  return (
    <article className="bg-neutral-950 min-h-screen pt-32 pb-20 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-amber-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-amber-500">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-neutral-800 pb-8">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="aspect-video bg-neutral-900 rounded-2xl mb-12 overflow-hidden relative">
           {/* Replace with <Image /> when ready */}
           {/* <Image src={post.image} fill className="object-cover" alt={post.title} /> */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-500">Blog Cover Image</div>
        </div>

        {/* Content Body */}
        <div 
          className="prose prose-invert prose-amber max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
      </div>
    </article>
  );
}
