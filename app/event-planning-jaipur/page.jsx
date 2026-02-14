"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Phone, CheckCircle, 
  Calculator, MapPin, Utensils, Truck, 
  Gift, Users, PenTool, Crown 
} from "lucide-react";

// --- GOLD TEXTURE COMPONENT ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#FFC107", 
    }}
  >
    {children}
  </span>
);

// --- DATA: THE SERVICES (Gold Edition) ---
const services = [
  { 
    id: 1, 
    title: "Financial Engineering", 
    subtitle: "Budget Optimization",
    desc: "I don't just spend budget; I engineer it. Cost-benefit analysis on every vendor to ensure your ₹50L looks like ₹80L.",
    icon: <Calculator className="w-10 h-10 text-[#FFC107]" />
  },
  { 
    id: 2, 
    title: "Venue Procurement", 
    subtitle: "Insider Access",
    desc: "Negotiating contracts with Fairmont, Rambagh & Leela. I know the hidden clauses and the best inventory.",
    icon: <MapPin className="w-10 h-10 text-[#FFC107]" />
  },
  { 
    id: 3, 
    title: "F&B Curation", 
    subtitle: "Menu Design",
    desc: "Designing menus that matter. Tasting sessions, bar management, and ensuring the food stays hot for 400 guests.",
    icon: <Utensils className="w-10 h-10 text-[#FFC107]" />
  },
  { 
    id: 4, 
    title: "Logistics & Fleet", 
    subtitle: "Transport Management",
    desc: "Managing airport transfers, Innova/Bus fleets, and valet coordination for a seamless guest arrival.",
    icon: <Truck className="w-10 h-10 text-[#FFC107]" />
  },
  { 
    id: 5, 
    title: "Gifting & Hampers", 
    subtitle: "Guest Experience",
    desc: "Sourcing, packaging, and room-placement of welcome hampers. I handle the logistics of gratitude.",
    icon: <Gift className="w-10 h-10 text-[#FFC107]" />
  },
];

const processSteps = [
  { num: "01", title: "The Blueprint", desc: "Vision, Budget Lock, & Venue Contracts." },
  { num: "02", title: "The Architecture", desc: "Vendor Onboarding & Menu Curation." },
  { num: "03", title: "The Detailing", desc: "Logistics Charting & Run-of-Show." },
  { num: "04", title: "The Execution", desc: "Team Deployment & Crisis Management." },
];

export default function EventPlanningPro() {
  const [activeIndex, setActiveIndex] = useState(2); // Start in the middle

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Auto-rotate effect (optional, feels premium)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans overflow-x-hidden selection:bg-[#FFC107] selection:text-black">
      
      {/* --- 1. HERO HEADER --- */}
      <section className="pt-32 pb-10 text-center relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.8 }}
        >
           <div className="inline-flex items-center gap-2 border border-[#FFC107]/50 px-6 py-2 rounded-full bg-[#FFC107]/10 backdrop-blur-xl mb-8">
              <Crown className="w-4 h-4 text-[#FFC107]" />
              <span className="text-[#FFC107] text-xs uppercase tracking-[0.2em] font-bold">
                Strategic Planning
              </span>
           </div>

           <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-8 leading-tight">
             PLANNING WITH <br />
             <GoldTextureText>PRECISION.</GoldTextureText>
           </h1>
           
           <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg font-light">
             From financial engineering to logistical mastery. <br />
             We don't just arrange events; we architect experiences.
           </p>

           <Link href="/contact">
             <button className="px-10 py-4 bg-[#FFC107] text-black font-bold uppercase tracking-widest hover:bg-white transition-all rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)]">
               Start Consultation
             </button>
           </Link>
        </motion.div>
      </section>

      {/* --- 2. 3D COVERFLOW SLIDER (PREMIUM EDITION) --- */}
      <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden py-20">
        
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 md:left-20 z-50 p-4 bg-black/50 hover:bg-[#FFC107] hover:text-black rounded-full border border-[#FFC107]/30 transition-all group">
           <ChevronLeft className="w-8 h-8 text-[#FFC107] group-hover:text-black" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 md:right-20 z-50 p-4 bg-black/50 hover:bg-[#FFC107] hover:text-black rounded-full border border-[#FFC107]/30 transition-all group">
           <ChevronRight className="w-8 h-8 text-[#FFC107] group-hover:text-black" />
        </button>

        {/* The Cards Container */}
        <div className="relative w-full max-w-6xl mx-auto h-full flex justify-center items-center perspective-1000">
           <AnimatePresence mode='popLayout'>
             {services.map((service, index) => {
               let offset = index - activeIndex;
               const isActive = offset === 0;
               const isPrev = offset === -1;
               const isNext = offset === 1;
               
               if (Math.abs(offset) > 2) return null; // Optimization

               // Styling Logic
               let x = "0%";
               let scale = 1;
               let zIndex = 0;
               let opacity = 1;
               let rotateY = 0;
               let brightness = "brightness(100%)";

               if (isActive) {
                 scale = 1.1;
                 zIndex = 10;
               } else if (isPrev) {
                 x = "-55%";
                 scale = 0.85;
                 zIndex = 5;
                 opacity = 0.7;
                 rotateY = 25;
                 brightness = "brightness(50%)";
               } else if (isNext) {
                 x = "55%";
                 scale = 0.85;
                 zIndex = 5;
                 opacity = 0.7;
                 rotateY = -25;
                 brightness = "brightness(50%)";
               } else {
                 x = offset < 0 ? "-110%" : "110%";
                 scale = 0.7;
                 opacity = 0;
               }

               return (
                 <motion.div
                   key={service.id}
                   initial={false}
                   animate={{ x, scale, opacity, zIndex, rotateY, filter: brightness }}
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   onClick={() => setActiveIndex(index)}
                   className={`absolute w-[300px] md:w-[380px] h-[500px] rounded-2xl p-8 flex flex-col justify-end items-center text-center cursor-pointer border transition-all duration-500
                     ${isActive 
                        ? "bg-[#0f0f0f] border-[#FFC107] shadow-[0_0_50px_rgba(212,175,55,0.2)]" 
                        : "bg-black border-[#333] shadow-xl"
                     }
                   `}
                   style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                 >
                    {/* Background Texture for Cards */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col items-center h-full justify-center">
                       {/* Icon Circle */}
                       <div className={`p-6 rounded-full mb-8 border transition-all duration-500
                          ${isActive 
                             ? "bg-[#FFC107]/10 border-[#FFC107] shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-110" 
                             : "bg-[#111] border-[#333]"
                          }
                       `}>
                          {service.icon}
                       </div>

                       <p className="text-[#FFC107] text-xs uppercase tracking-[0.3em] font-bold mb-3">{service.subtitle}</p>
                       <h3 className="text-3xl font-display font-bold text-white mb-6 uppercase leading-none">{service.title}</h3>
                       
                       <AnimatePresence>
                         {isActive && (
                           <motion.div 
                             initial={{ opacity: 0, height: 0 }} 
                             animate={{ opacity: 1, height: "auto" }}
                             className="overflow-hidden"
                           >
                             <p className="text-gray-400 text-sm leading-relaxed mb-8 border-t border-[#FFC107]/20 pt-6">
                               {service.desc}
                             </p>
                             <Link href="/contact">
                               <button className="px-8 py-3 border border-[#FFC107] text-[#FFC107] font-bold uppercase text-[10px] tracking-widest hover:bg-[#FFC107] hover:text-black transition-all rounded-full">
                                 View Details
                               </button>
                             </Link>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                 </motion.div>
               );
             })}
           </AnimatePresence>
        </div>
      </section>

      {/* --- 3. THE WAR ROOM PROCESS (Updated Style) --- */}
      <section className="py-24 container mx-auto px-4 border-t border-[#FFC107]/10 bg-[#0a0a0a]">
         <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white">The Execution Roadmap</h2>
            <p className="text-gray-500 mt-4 text-sm uppercase tracking-widest">We rely on a proven 4-phase military timeline</p>
         </div>
         
         <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
               <div key={i} className="p-8 bg-[#0f0f0f] border border-[#222] hover:border-[#FFC107]/50 transition-all group hover:-translate-y-2">
                  <div className="text-5xl font-black text-[#222] mb-6 group-hover:text-[#FFC107]/20 transition-colors">{step.num}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* --- 4. CTA FOOTER --- */}
      <section className="py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/10 to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 text-white">Ready to Scale?</h2>
            <p className="text-[#FFC107] mb-10 text-xl font-light">Let's build your event with precision and style.</p>
            <Link href="/contact">
               <button className="px-14 py-5 bg-[#FFC107] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  Get A Quote
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}
