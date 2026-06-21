import React from "react";

export const AnimatedStatsCard = ({ value, label, sub, icon: Icon }) => {
  return (
    <div className="stats-outer w-full h-full min-h-[220px] max-w-[300px] mx-auto group">
      <div className="stats-dot"></div>
      <div className="stats-card p-6">
        <div className="stats-ray group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="stats-line stats-topl"></div>
        <div className="stats-line stats-leftl"></div>
        <div className="stats-line stats-bottoml"></div>
        <div className="stats-line stats-rightl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center justify-center h-full">
          {Icon && (
            <Icon
              size={22}
              className="text-[#D4AF37] mx-auto mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              aria-hidden="true"
            />
          )}
          <div className="stats-text text-4xl md:text-5xl font-black mb-2 tracking-tight">
            {value}
          </div>
          <p className="text-zinc-200 text-[11px] font-bold uppercase tracking-widest mb-1">
            {label}
          </p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
};
