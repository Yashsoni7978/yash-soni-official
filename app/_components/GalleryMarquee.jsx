"use client";
import Image from "next/image";
import Link from "next/link";
import { GoldText } from "./GoldText";

export const GalleryMarquee = ({ images }) => {
  return (
    <section className="py-20 md:py-24 overflow-hidden bg-zinc-900/20">
      <div className="container mx-auto px-5 md:px-10 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-1">Moments of <GoldText>Magic.</GoldText></h2>
          <p className="text-zinc-500 text-xs md:text-sm">Live on stage — weddings, Sangeets, and corporate events across India.</p>
        </div>
        <Link href="/portfolio" className="text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]/40 pb-0.5 hover:text-white transition-colors shrink-0">
          Full Portfolio →
        </Link>
      </div>
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-4 md:gap-6 animate-marquee-slow hover:[animation-play-state:paused] w-max pl-5">
          {[...images, ...images, ...images].map((img, i) => (
            <div key={i} className="relative w-[220px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shrink-0 group">
              <Image
                src={img}
                alt={`Anchor Yash Soni live moment ${(i % 6) + 1}`}
                fill 
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={65}
                className="object-cover transition-transform duration-700 group-hover:scale-108 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
