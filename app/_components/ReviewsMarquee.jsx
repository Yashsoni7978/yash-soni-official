"use client";
import { Star } from "lucide-react";

export const ReviewsMarquee = ({ reviews }) => {
  return (
    <section className="py-20 md:py-28 overflow-hidden bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-5 md:px-10 mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Real Words. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">Real Impact.</span>
        </h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-2">
          4.9★ across 200+ client reviews — weddings, Sangeets, and corporate events
        </p>
      </div>
      <div className="flex overflow-hidden mask-fade mb-5">
        <div className="flex whitespace-nowrap gap-4 animate-marquee w-max hover:[animation-play-state:paused]">
          {[...reviews.slice(0, 5), ...reviews.slice(0, 5), ...reviews.slice(0, 5)].map((r, i) => (
            <a key={i} href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
              className="shrink-0 w-[280px] md:w-[360px] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-pointer flex flex-col whitespace-normal">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#D4AF37" className="text-[#B5952F]" />)}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-1">&ldquo;{r.text}&rdquo;</p>
              <div>
                <span className="text-white font-bold text-sm group-hover:text-[#B5952F] transition-colors">— {r.name}</span>
                <span className="text-zinc-600 text-[11px] ml-2">{r.event}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex overflow-hidden mask-fade">
        <div className="flex whitespace-nowrap gap-4 animate-marquee-reverse w-max hover:[animation-play-state:paused]">
          {[...reviews.slice(5), ...reviews.slice(5), ...reviews.slice(5)].map((r, i) => (
            <a key={i} href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
              className="shrink-0 w-[280px] md:w-[360px] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-pointer flex flex-col whitespace-normal">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#D4AF37" className="text-[#B5952F]" />)}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-1">&ldquo;{r.text}&rdquo;</p>
              <div>
                <span className="text-white font-bold text-sm group-hover:text-[#B5952F] transition-colors">— {r.name}</span>
                <span className="text-zinc-600 text-[11px] ml-2">{r.event}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
