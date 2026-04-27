"use client";

export const PlatformsMarquee = ({ platforms }) => {
  return (
    <section className="py-14 md:py-16 border-y border-white/5 bg-black">
      <div className="mb-8 flex justify-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase border border-white/8 bg-white/3 rounded-full px-6 py-2.5">
          VERIFIED & TRUSTED ON
        </span>
      </div>
      <div className="flex overflow-hidden mask-fade">
        <div className="flex whitespace-nowrap gap-16 md:gap-24 items-center animate-marquee w-max">
          {[...platforms, ...platforms, ...platforms].map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
              className={`text-2xl md:text-4xl font-black text-zinc-700 uppercase transition-all duration-300 hover:scale-105 ${p.color}`}>
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
