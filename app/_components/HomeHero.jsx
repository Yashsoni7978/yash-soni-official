"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Play } from "lucide-react";
import { GoldText } from "./GoldText";

export const HomeHero = ({ waLink }) => {
  return (
    <section className="relative min-h-screen w-full flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-slide-1.webp"
          alt="Anchor Yash Soni hosting a premium live event on stage"
          fill priority
          sizes="100vw"
          quality={75}
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>
      {/* Content — bottom aligned, mobile-first */}
      <div className="relative z-10 w-full px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 border border-[#D4AF37]/50 px-4 py-1.5 rounded-full bg-black/50 text-[#D4AF37] text-[11px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Star size={10} fill="#D4AF37" /> 4.9★ Rated · 200+ Reviews
            </span>
          </div>
          {/* H1 — name first, keyword in subhead */}
          <h1 className="font-black tracking-tighter leading-[0.9] mb-5">
            <span className="block text-white text-[13vw] md:text-[9vw] lg:text-8xl">ANCHOR</span>
            <GoldText animate className="block text-[13vw] md:text-[9vw] lg:text-8xl">YASH.</GoldText>
          </h1>
          {/* Subheading — keyword-rich, not Jaipur-locked */}
          <p className="text-zinc-300 text-base md:text-xl font-light leading-relaxed mb-3 max-w-lg">
            The most commanding event host in India. 1,100+ events — palace weddings, high-energy Sangeets, corporate summits, and VIP galas across Rajasthan and beyond.
          </p>
          <p className="text-zinc-500 text-sm mb-8 tracking-wide">
            Bilingual Hindi/English &nbsp;·&nbsp; Unscripted &nbsp;·&nbsp; 10,000+ crowd commanded &nbsp;·&nbsp; Zero paper scripts
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={waLink} target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 text-xs md:text-sm">
                CLAIM YOUR DATE →
              </button>
            </Link>
            <div className="flex gap-2">
               <Link href="/portfolio" className="flex-1 sm:flex-none">
                 <button className="w-full px-8 py-5 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all text-[11px] md:text-xs">
                   PORTFOLIO
                 </button>
               </Link>
               <button className="p-5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all flex items-center justify-center group">
                 <Play size={14} className="fill-white group-hover:scale-110 transition-transform" />
               </button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden lg:block opacity-40">
        <div className="flex items-center gap-4 rotate-90 origin-right">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#D4AF37]">SCROLL TO EXPLORE</span>
          <div className="w-12 h-px bg-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
};
