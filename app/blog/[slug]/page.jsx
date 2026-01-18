"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";

export default function BlogPost({ params }) {
  // In a real app, use the 'slug' to fetch data from your API/CMS
  // const { slug } = params;

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- ARTICLE HEADER --- */}
      <header className="pt-40 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
          
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">
            <span className="text-[#D4AF37]">Strategy Audit</span>
            <span className="flex items-center gap-2"><Calendar size={12} /> Jan 18, 2026</span>
            <span className="flex items-center gap-2"><Clock size={12} /> 12 Min Read</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.9] uppercase tracking-tighter mb-12">
            The Economics of <span className="italic text-gray-500">Jaipur Palace</span> Weddings.
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-white/5">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-gray-600 flex items-center justify-center font-black text-black">YS</div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-white">Yash Soni</p>
                   <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Industry Authority</p>
                </div>
             </div>
             <div className="flex gap-4">
                <button className="p-3 border border-white/10 hover:border-[#D4AF37] transition-all"><Share2 size={16} /></button>
                <button className="p-3 border border-white/10 hover:border-[#D4AF37] transition-all"><Bookmark size={16} /></button>
             </div>
          </div>
        </div>
      </header>

      {/* --- ARTICLE CONTENT --- */}
      <main className="py-24 container mx-auto px-6 max-w-3xl">
         <article className="prose prose-invert prose-amber max-w-none">
            <p className="text-2xl text-gray-300 font-light leading-relaxed mb-12 italic">
               Traditional planners often obscure the true costs of heritage venues. In this audit, we expose the logistical realities of hosting at Jaipur’s premier palaces.
            </p>
            
            <h2 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-6">01. The Technical Rider Gap</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
               Most palaces in Jaipur were built for acoustics of acoustic instruments, not 100,000-watt line arrays. When you bring a Bollywood artist to a heritage lawn, the power requirements alone can cost upwards of ₹2 Lakhs in silent gensets and isolated earthing.
            </p>

            <div className="my-16 aspect-video bg-[#111] border border-white/5 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1599661046289-e318d6d48ed1?q=80&w=2070" 
                 className="w-full h-full object-cover grayscale opacity-50"
                 alt="Technical Setup"
               />
               <p className="text-[10px] text-gray-600 p-4 uppercase tracking-[0.2em]">Fig 1.1: Audio calibration for open-air heritage lawns.</p>
            </div>

            <h2 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-6">02. Hospitality Logic</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
               RSVP management for 500+ guests at Fairmont or Rambagh requires more than just a list. It requires an 'Operations Center' located in the hotel lobby.
            </p>
         </article>
      </main>
    </div>
  );
}
