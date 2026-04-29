"use client";


import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FAQItem } from "../_components/InteractiveFAQ";

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



export default function EventManagementJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/grand_wedding_venue.webp",
    "/premium_events/corporate_gala_setup.webp",
    "/premium_events/theme_wedding_setup.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#064E3B] selection:text-white">
      
      {/* 1. THE CINEMATIC HERO (100vh) */}
      <section className="relative w-full h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24 bg-black">
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
                alt="Event Management Jaipur"
                fill
                className="object-cover object-top opacity-70"
                priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#022C22] via-[#022C22]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-black/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#059669]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#34D399] text-xs md:text-sm mb-6 block">
            The Master Agency
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Event Management</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#10B981] mb-10">Executing grand scale weddings, corporate galas & concerts</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#064E3B] to-[#022C22] border border-emerald-900/50 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,78,59,0.4)]">
            Explore Capabilities
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#059669]/30 bg-gradient-to-r from-[#064E3B] to-[#065F46]">
        <div className="absolute inset-0 opacity-10 bg-[url('/udaipur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Massive Scale
            </span>
            <span className="hidden md:block text-[#34D399] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#34D399] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Precision Logistics
            </span>
            <span className="hidden md:block text-[#34D399] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Unrivaled Quality
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#022C22] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#10B981] mb-6 block">The Powerhouse</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">Scale changes everything. We are built for the big stage.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">Handling a 50-person dinner is coordination. Handling a 2000-person gala with international celebrity performers, massive LED rigging, and synchronized fireworks is Event Management. We are the overarching agency that brings design, technology, and sheer manpower under one roof.</p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK */}
      <section className="py-20 w-full bg-[#022C22] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/grand_wedding_venue.webp" alt="Royal Wedding" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/corporate_gala_setup.webp" alt="Corporate Gala" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/theme_wedding_setup.webp" alt="Thematic Build" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MANIFESTO */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#022C22]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"Amateurs hope for success. Professionals <span className="text-[#10B981]">engineer it</span>."</p>
        </motion.div>
      </section>

      {/* 6. PORTFOLIO CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#064E3B] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Agency Verticals</h2>
            <Link href="/anchor-in-rajasthan" className="font-sans text-[#34D399] font-medium hover:underline">Explore Cities &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#065F46] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Luxury Weddings ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Palace Buyouts & Destinations</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#065F46] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/grand_wedding_venue.webp" alt="Weddings" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#047857] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Corporate Galas ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Summits & Award Nights</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#047857] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Corporate" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#059669] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#10B981]/50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Live Concerts ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-200">Artist tech & crowd control</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#059669] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Concerts" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#064E3B] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#34D399] mb-1">Social Events ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Anniversaries & Milestones</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#064E3B] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Social" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#022C22] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">Agency Capabilities</h2>
            <p className="font-['Amandine'] text-4xl text-[#10B981] mt-2">What we bring to the table</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#064E3B] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-white/5">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Production Division" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">Production Division</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  In-house carpentry, welding, A/V tech, and lighting design. We don't outsource the core of your event; we build it ourselves.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(5,150,105,0.2)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#064E3B] to-[#022C22]">
              <div className="absolute inset-0 opacity-10 bg-[url('/udaipur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Hospitality Grid" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  Logistics & Hospitality
                </h3>
                <p className="font-sans text-lg text-[#34D399] font-light max-w-md">
                  Dedicated RSVP desks, transport grids, and 24/7 shadow managers to handle the human element of massive gatherings.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#059669]/30">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Weddings</span>
              <span className="text-[#059669] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Corporate Galas</span>
              <span className="text-[#059669] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Concerts</span>
              <span className="text-[#059669] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Exhibitions</span>
              <span className="text-[#059669] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#022C22] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#064E3B] to-[#022C22] p-8 text-[#FAF9F6] rounded-tl-3xl border-t border-l border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/udaipur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">Multi-City</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Execution Setup</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#10B981] mb-4 block">The Agency Head</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              Yash transitioned from being the face on the stage to managing the entire infrastructure behind it.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He brings a unique perspective—knowing exactly what a performer needs to deliver a great show, and exactly what an audience needs to have a great time. This top-down vision drives our entire management approach.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#059669]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Master Plan</h2>
          
          <div className="space-y-24 border-l border-[#34D399]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Blueprint & Budgeting", desc: "We map out the entire scope of work, allocating realistic budgets to decor, tech, artists, and F&B.", img: "/premium_events/corporate_gala_setup.webp" },
            { title: "Sourcing & Procurement", desc: "Securing the venue, booking the artists, and locking in the best rates across all supply chains.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "Risk Management", desc: "Identifying failure points (weather, power, transport) and implementing backup protocols.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "Live Execution", desc: "Our massive on-ground team takes over, directing the show flawlessly over the event days.", img: "/premium_events/celebrity_artist_stage.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#34D399] shadow-[0_0_15px_#34D399]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#10B981] block mb-2">Phase 0{idx + 1}</span>
                    <h3 className="font-['The_Seasons'] text-4xl md:text-5xl mb-4">{stage.title}</h3>
                    <p className="font-sans text-gray-400 font-light text-lg leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg border border-white/10">
                    <Image src={stage.img} alt={stage.title} fill className="object-cover hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. THE ART OF CURATION */}
      <section className="py-32 px-6 bg-[#022C22] text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover opacity-50 grayscale" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">The Peace of Mind</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            The true value of a top-tier event management company is not just what we build; it's the fact that you sleep soundly the night before knowing everything is handled.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#022C22] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Event <span className="font-['Amandine'] text-[#10B981]">Scale</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/grand_wedding_venue.webp", 
            "/premium_events/corporate_gala_setup.webp", 
            "/premium_events/theme_wedding_setup.webp", 
            "/premium_events/celebrity_artist_stage.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#064E3B] to-[#022C22] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/udaipur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#34D399] mb-8 block">Client Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "They handled our multi-day summit like it was nothing. We had 1200 guests arriving from 4 different countries. Every car was there, every room was ready, and the gala stage was spectacular."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Global Tech Firm</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Annual Retreat</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#059669]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "360°", label: "Agency Setup" },
            { num: "In-House", label: "Production Unit" },
            { num: "Pan-India", label: "Execution Reach" },
            { num: "Zero", label: "Outsourcing Risk" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#10B981] mb-4">{stat.num}</h3>
              <p className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. THE WHITE-GLOVE PROMISE (Deliverables) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#022C22] text-white">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-['Runiga'] text-6xl text-white mb-6">Our Promise</h2>
            <p className="font-sans text-gray-400 leading-relaxed">
              We provide a single point of contact. You don't deal with the tent house, the florist, the sound guy, and the hotel manager. You deal with us.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Complete Project Management", "Venue & Contract Negotiation", 
              "In-house Decor & Production", "Technical A/V Management",
              "Celebrity Artist Procurement", "Mass Hospitality Grids",
              "Licenses & Legal Clearances", "Financial Transparency & Budgeting"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#10B981] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#064E3B] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#34D399] mb-4">Agency Models</h2>
            <p className="font-sans text-gray-300 font-light text-xl">How we integrate with your vision.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#059669]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#34D399] transition-colors">Production Only</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Hardware & Build</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> Stage fabrication and setup</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> Light, Sound, and LED supply</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> Technical riders fulfilled</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> Perfect for planners needing a reliable vendor</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#059669]/80 p-10 relative bg-gradient-to-b from-[#065F46]/40 to-[#022C22] transform md:-translate-y-4 shadow-[0_0_30px_rgba(5,150,105,0.2)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#10B981] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">End To End</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#34D399]">Full Turnkey</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-300 uppercase tracking-widest mb-8">Concept to Execution</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-200 mb-10">
                <li className="flex gap-3"><span className="text-[#34D399]">✦</span> Complete venue sourcing and negotiation</li>
                <li className="flex gap-3"><span className="text-[#34D399]">✦</span> Design, decor, and technical build</li>
                <li className="flex gap-3"><span className="text-[#34D399]">✦</span> Full hospitality and logistics management</li>
                <li className="flex gap-3"><span className="text-[#34D399]">✦</span> Artist booking and show calling</li>
                <li className="flex gap-3"><span className="text-[#34D399]">✦</span> Dedicated 20+ person management team</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#059669]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#34D399] transition-colors">Specialized</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Consulting & Fixing</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> For massive events already partially planned</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> We audit the existing vendors and contracts</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> Fill in the logistical gaps</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> Take over the final month of execution</li>
                <li className="flex gap-3"><span className="text-[#10B981]">✦</span> High-level crisis management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. THE ULTIMATE FAQ (Interactive Dropdowns) */}
      <section className="py-32 bg-[#022C22] px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-white mb-4">Common Questions</h2>
            <p className="font-['Rekalgera'] text-[#10B981] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "What is the difference between an Event Manager and a Decorator?", a: "A decorator only handles the physical visual setup (flowers, drapes, stage). An Event Manager handles the decorator, the hotel, the transport, the artists, the timeline, the licenses, and the budget." },
              { q: "Do you travel outside of Jaipur for events?", a: "Yes, we execute events Pan-India and internationally. Our core setups are in Rajasthan (Jaipur, Udaipur, Jodhpur, Jaisalmer), but our logistics grid extends everywhere." },
              { q: "Can we hire you just for Artist Management or just Decor?", a: "Yes, we have specialized verticals. You can hire our Production Division solely for the tech and decor, or our Artist Division purely for booking celebrity performers." },
              { q: "How do you charge for your services?", a: "We charge a transparent, fixed agency fee based on the scale of work and the size of the team required, rather than taking hidden cuts from the vendor budgets." },
              { q: "How much notice do you need to manage a large event?", a: "For a 500+ guest wedding or gala, we prefer 4 to 6 months of lead time. However, our rapid-response teams have executed massive setups with just 3 weeks' notice." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-gray-400" />
            ))}
          </div>
        </div>
      </section>

      {/* 18. PRESS & RECOGNITION */}
      <section className="py-20 bg-black text-center border-t border-white/5">
        <span className="font-['Rekalgera'] text-gray-600 tracking-[0.3em] uppercase text-xs mb-8 block">Recognized By</span>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
          <span className="font-['Runiga'] text-3xl text-white">FORBES</span>
          <span className="font-['The_Seasons'] text-3xl text-white">ECONOMIC TIMES</span>
          <span className="font-['Runiga'] text-3xl text-white">BUSINESS TODAY</span>
          <span className="font-['The_Seasons'] text-3xl text-white">CNBC TV18</span>
        </div>
      </section>

      {/* 19. THE FINAL CTA & SIGNATURE */}
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#022C22] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/udaipur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#34D399] leading-[0.8] mb-16 mix-blend-lighten">
            Build The<br />Spectacle.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#064E3B] to-[#022C22] border border-emerald-900/50 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(6,78,59,0.3)]"
          >
            Hire The Agency
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-[0.03]">
          <span className="font-['Medino'] text-[150px] md:text-[300px] lg:text-[500px] text-white whitespace-nowrap select-none">
            Yash Soni
          </span>
        </div>
      </section>

      {/* 20. THE ECOSYSTEM INTERLINKS */}
      <section className="py-20 bg-[#022C22] px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-['The_Seasons'] text-4xl text-white mb-12">More Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Event Planning", url: "/event-planning-jaipur" },
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Corporate Management", url: "/corporate-event-management-company" },
              { label: "Artist Management", url: "/artist-management-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-gray-400 hover:text-white uppercase tracking-widest text-[10px] md:text-xs border border-white/10 px-6 py-3 hover:border-gray-500 hover:shadow-[0_5px_15px_rgba(6,78,59,0.1)] transition-all duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 21. SEO PILLAR FOOTER */}
      <section className="py-12 bg-black text-center px-6">
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">
          <p className="font-sans text-[10px] md:text-xs text-white/30 leading-loose text-justify text-balance">
            Top event management company in Jaipur. Anchor Yash Soni provides complete agency capabilities, including massive in-house production, A/V tech, hospitality logistics, and show calling for weddings, galas, and live concerts across Rajasthan and Pan-India. Best event management agency execution managed by Anchor Yash Soni.
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
