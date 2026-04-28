"use client";


import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FAQItem = ({ faq, colorClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#1A1A1A]/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left">
        <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] pr-4">{faq.q}</h3>
        <span className={`text-2xl ${colorClass}`}>{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <p className="font-sans text-gray-600 font-light leading-relaxed mt-4">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WeddingPlanningJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/palace_wedding_decor.webp",
    "/ivory_hero_wedding_1776853928413.webp",
    "/premium_events/traditional_phoolon_ki_chaadar.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#991B1B] selection:text-white">
      
      {/* 1. THE CINEMATIC HERO (100vh) */}
      <section className="relative w-full h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="Wedding Planning Jaipur"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/50 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#991B1B]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#991B1B] text-xs md:text-sm mb-6 block">
            End-to-End Orchestration
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Wedding Planners</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#7F1D1D] mb-10">Executing flawless logistics and royal hospitality</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#991B1B] to-[#450A0A] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]">
            Start Planning
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#EF4444]/30 bg-gradient-to-r from-[#991B1B] to-[#450A0A]">
        <div className="absolute inset-0 opacity-20 bg-[url('/pushkar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Turnkey Management
            </span>
            <span className="hidden md:block text-[#FCA5A5] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FCA5A5] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Vendor Sourcing
            </span>
            <span className="hidden md:block text-[#FCA5A5] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Guest Logistics
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#991B1B] mb-6 block">The Silent Architects</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">You should be a guest at your own wedding.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">Planning a 500-person Indian wedding involves hundreds of vendors, thousands of details, and strict timelines. We take on the entire burden of execution. From booking the venue and managing flight arrivals to ensuring the Varmala happens exactly at the auspicious Muhurat, we act as your personal family office for the event.</p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK */}
      <section className="py-20 w-full bg-[#FAF9F6] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/palace_wedding_decor.webp" alt="Wedding Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/ivory_hero_wedding_1776853928413.webp" alt="Couple Entry" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/traditional_phoolon_ki_chaadar.webp" alt="Traditional Ceremonies" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MANIFESTO */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"A perfect wedding is <span className="text-[#991B1B]">10% design</span> and <span className="text-[#991B1B]">90% logistics</span>."</p>
        </motion.div>
      </section>

      {/* 6. PLANNING CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Scope of Work</h2>
            <a href="#packages" className="font-sans text-[#991B1B] font-medium hover:underline">View Packages &gt;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#FEF2F2] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-red-50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Vendor Sourcing ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Photographers, MUAs, DJs</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Vendors" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FEE2E2] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-red-100">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Guest Management ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">RSVPs, Flights & Room Allocation</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Guests" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FECACA] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-red-200">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Show Calling ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">On-ground event running</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Show" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FCA5A5] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#991B1B]/30">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#991B1B] mb-1">F&B Curation ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-700">Menu tasting & bar management</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="F&B" fill className="object-cover" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Hospitality Desk</h2>
            <p className="font-['Amandine'] text-4xl text-[#991B1B] mt-2">Managing people and process</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Logistics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">Transport & Logistics</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  Managing a massive fleet of Innovas and tempo travelers. We track flights, coordinate airport pickups, and handle the entire transport grid.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(153,27,27,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#991B1B] to-[#450A0A]">
              <div className="absolute inset-0 opacity-20 bg-[url('/pushkar.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/ivory_hero_wedding_1776853928413.webp" alt="Shadow Service" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Family Shadowing
                </h3>
                <p className="font-sans text-lg text-[#FCA5A5] font-light max-w-md">
                  We assign dedicated 'shadow' managers to the bride, groom, and parents. We carry your phones, bring you water, and fix timelines so you can just enjoy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#991B1B]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Contract Negotiation</span>
              <span className="text-[#991B1B] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Artist Booking</span>
              <span className="text-[#991B1B] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">RSVP Management</span>
              <span className="text-[#991B1B] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Stage Directing</span>
              <span className="text-[#991B1B] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#991B1B] to-[#450A0A] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/pushkar.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">15+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Years Experience</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#991B1B] mb-4 block">The Principal Planner</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Yash has seen the chaotic backstage reality of hundreds of weddings. He knows exactly where delays happen and which vendors usually overpromise.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He uses this insider knowledge to vet every single supplier, negotiate the hardest contracts, and build a timeline that actually works in reality, not just on paper.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#991B1B]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Planning Phases</h2>
          
          <div className="space-y-24 border-l border-[#EF4444]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Venue & Contract Negotiation", desc: "We secure the best dates at premium palace properties and negotiate the exact F&B per plate rates to save you money.", img: "/premium_events/palace_wedding_decor.webp" },
            { title: "Vendor Curation", desc: "Booking the absolute best photographers, makeup artists, and decorators before they get sold out.", img: "/premium_events/modern_sangeet_stage.webp" },
            { title: "Logistics Mapping", desc: "Creating the master spreadsheet: Room allocations, flight timings, and exact minute-by-minute event flow.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "On-Ground Execution", desc: "Deploying a team of 20+ managers at the venue to ensure you don't receive a single stressful phone call.", img: "/premium_events/traditional_phoolon_ki_chaadar.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#EF4444] shadow-[0_0_15px_#EF4444]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#FCA5A5] block mb-2">Phase 0{idx + 1}</span>
                    <h3 className="font-['The_Seasons'] text-4xl md:text-5xl mb-4">{stage.title}</h3>
                    <p className="font-sans text-gray-400 font-light text-lg leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg">
                    <Image src={stage.img} alt={stage.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. THE ART OF CURATION */}
      <section className="py-32 px-6 bg-[#FAF9F6] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Crisis Aversion</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Something will always go wrong at a live event. A flight delays, a generator fails, or the weather turns. A great planner doesn't just execute the plan—they seamlessly pivot to Plan B without the family ever finding out.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Perfect <span className="font-['Amandine'] text-[#991B1B]">Execution</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/palace_wedding_decor.webp", 
            "/premium_events/luxury_dining_setup.webp", 
            "/ivory_hero_wedding_1776853928413.webp", 
            "/premium_events/traditional_phoolon_ki_chaadar.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#991B1B] to-[#450A0A] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/pushkar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#FCA5A5] mb-8 block">What Families Say</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "We gave Yash the entire contract for 450 guests. He handled the resort buyout, all the flights, the decor, and the artists. For the first time, my father actually sat down and enjoyed the wedding instead of running around coordinating."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">The Sharma Family</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Fairmont Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#991B1B]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "300+", label: "Weddings Executed" },
            { num: "50+", label: "Venues Partnered" },
            { num: "100%", label: "Turnkey Focus" },
            { num: "Zero", label: "Stress" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#EF4444] mb-4">{stat.num}</h3>
              <p className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. THE WHITE-GLOVE PROMISE (Deliverables) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#FAF9F6]">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-['Runiga'] text-6xl text-[#1A1A1A] mb-6">Our Promise</h2>
            <p className="font-sans text-gray-500 leading-relaxed">
              We promise total financial transparency. We do not take hidden commissions from vendors. We work for you, protecting your budget at every step.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Complete Venue Buyout Negotiation", "Master Itinerary Creation", 
              "Dedicated RSVP Calling Team", "Airport Helpdesks & Transport Grid",
              "Hospitality & Room Hampers", "F&B Menu Curation",
              "Licenses & Permission Handling", "Show Calling & Flow Management"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#991B1B] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#1A1A1A] text-[#FAF9F6] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#EF4444] mb-4">Planning Models</h2>
            <p className="font-sans text-gray-400 font-light text-xl">How we structure our agency involvement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#991B1B]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FCA5A5] transition-colors">Partial Planning</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Coordination Based</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> You book the major vendors yourself</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> We step in 2 months prior</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> Create the master timeline</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> Manage on-ground event flow</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#EF4444]/50 p-10 relative bg-gradient-to-b from-[#991B1B]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(153,27,27,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#EF4444] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Recommended</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#FCA5A5]">Full Service Turnkey</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">A to Z Management</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#FCA5A5]">✦</span> Venue sourcing and rate negotiation</li>
                <li className="flex gap-3"><span className="text-[#FCA5A5]">✦</span> Booking all vendors (Decor, Photo, Makeup)</li>
                <li className="flex gap-3"><span className="text-[#FCA5A5]">✦</span> RSVP & Guest room allocation grid</li>
                <li className="flex gap-3"><span className="text-[#FCA5A5]">✦</span> Complete transport and airport logistics</li>
                <li className="flex gap-3"><span className="text-[#FCA5A5]">✦</span> Full show calling and shadow teams</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#991B1B]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FCA5A5] transition-colors">The Palace Buyout</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">VVIP Level</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> Taking over entire heritage properties</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> Extreme privacy and security details</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> Private charters and VIP airport escorts</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> 1-on-1 hospitality manager per guest</li>
                <li className="flex gap-3"><span className="text-[#991B1B]">✦</span> Celebrity bookings & NDAs managed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. THE ULTIMATE FAQ (Interactive Dropdowns) */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-[#1A1A1A] mb-4">Common Questions</h2>
            <p className="font-['Rekalgera'] text-[#991B1B] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "What is your pricing model for planning?", a: "We typically work on a fixed agency fee model rather than a percentage of your total budget. This ensures our goals align with yours—we want to save you money during negotiations, not increase your spend." },
              { q: "Do we have to use your decorators?", a: "Not at all. While we have an excellent in-house production team, you are free to bring in any decorator, photographer, or makeup artist you prefer. We will manage them for you." },
              { q: "How many team members do you bring on-site?", a: "For a standard 300-guest wedding, we deploy a core team of 10-15 professionals, including dedicated stage managers, hospitality leads, and transport coordinators." },
              { q: "Can you help with obtaining government licenses?", a: "Yes, we handle all the tedious paperwork, including PPL/Novex music licenses, liquor permits, and local police permissions required for late-night events." },
              { q: "How do you manage last-minute guest additions?", a: "We always maintain a buffer with the hotel and caterer. Our RSVP team constantly updates the master sheet, and we keep extra rooms blocked specifically for unannounced arrivals." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-[#991B1B]" />
            ))}
          </div>
        </div>
      </section>

      {/* 18. PRESS & RECOGNITION */}
      <section className="py-20 bg-[#FAF9F6] border-t border-gray-200 text-center">
        <span className="font-['Rekalgera'] text-gray-400 tracking-[0.3em] uppercase text-xs mb-8 block">Recognized By</span>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
          <span className="font-['Runiga'] text-3xl">VOGUE</span>
          <span className="font-['The_Seasons'] text-3xl">WEDMEGOOD</span>
          <span className="font-['Runiga'] text-3xl">HARPER'S</span>
          <span className="font-['The_Seasons'] text-3xl">WEDDING SUTRA</span>
        </div>
      </section>

      {/* 19. THE FINAL CTA & SIGNATURE */}
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#1A1A1A] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('/pushkar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#FCA5A5] leading-[0.8] mb-16 mix-blend-lighten">
            Plan With<br />Certainty.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#991B1B] to-[#450A0A] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(153,27,27,0.4)]"
          >
            Hire Our Agency
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-[0.03]">
          <span className="font-['Medino'] text-[150px] md:text-[300px] lg:text-[500px] text-[#FAF9F6] whitespace-nowrap select-none">
            Yash Soni
          </span>
        </div>
      </section>

      {/* 20. THE ECOSYSTEM INTERLINKS */}
      <section className="py-20 bg-[#FAF9F6] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-['The_Seasons'] text-4xl text-[#1A1A1A] mb-12">More Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Luxury Sourcing", url: "/luxury-wedding-planner-rajasthan" },
              { label: "Artist Management", url: "/artist-management-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#991B1B] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#991B1B] hover:shadow-[0_5px_15px_rgba(153,27,27,0.05)] transition-all duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 21. SEO PILLAR FOOTER */}
      <section className="py-12 bg-[#1A1A1A] text-center px-6">
        <div className="max-w-5xl mx-auto border-t border-[#FAF9F6]/10 pt-12">
          <p className="font-sans text-[10px] md:text-xs text-[#FAF9F6]/30 leading-loose text-justify text-balance">
            Top wedding planners in Jaipur. Anchor Yash Soni provides complete turnkey wedding planning, RSVP management, transport logistics, and on-ground hospitality for premium destination weddings in Rajasthan. Best wedding planning agency execution managed by Anchor Yash Soni.
          </p>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
