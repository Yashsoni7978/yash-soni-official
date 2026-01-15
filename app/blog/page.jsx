"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs"; // Importing your data

export default function BlogListing() {
  return (
    <div className="bg-neutral-950 min-h-screen pt-32 pb-20 text-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Latest <span className="text-amber-500">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert advice, behind-the-scenes stories, and tips to make your next event unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors flex flex-col">
              
              {/* Image */}
              <div className="aspect-video relative overflow-hidden bg-neutral-800">
                 {/* Use Next.js Image for optimization */}
                 {/* <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-600">Image: {post.title}</div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Dynamic Link to the specific blog */}
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-amber-500 text-sm font-medium hover:gap-2 transition-all mt-auto"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}