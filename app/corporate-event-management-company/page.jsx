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



export default function CorporateEventManagement() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/corporate_gala_setup.webp",
    "/premium_events/celebrity_artist_stage.webp",
    "/premium_events/modern_sangeet_stage.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#1E3A8A] selection:text-white">
      
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
                alt="Corporate Event Management Company"
                fill
                className="object-cover object-top opacity-70"
                priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-black/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#1E3A8A]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#93C5FD] text-xs md:text-sm mb-6 block">
            Executive Execution
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Corporate Events</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#60A5FA] mb-10">Executing high-stakes galas, product launches & summits</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#1E3A8A] to-[#172554] border border-blue-900/50 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)]">
            Plan Your Summit
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#1E3A8A]/30 bg-gradient-to-r from-[#1E3A8A] to-[#0F172A]">
        <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Brand Precision
            </span>
            <span className="hidden md:block text-[#93C5FD] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#93C5FD] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Tech & Production
            </span>
            <span className="hidden md:block text-[#93C5FD] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Flawless Logistics
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#020617] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#60A5FA] mb-6 block">The Corporate Standard</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">Your event is a direct reflection of your company's brand equity.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">Corporate events require military-level precision. There is no room for delayed schedules or technical glitches. We handle end-to-end production—from massive LED screen setups and artist management to executing high-security VIP protocols for your board of directors and chief guests.</p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK */}
      <section className="py-20 w-full bg-[#020617] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/corporate_gala_setup.webp" alt="Corporate Gala" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/celebrity_artist_stage.webp" alt="Award Shows" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/modern_sangeet_stage.webp" alt="Tech Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MANIFESTO */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#020617]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"In the corporate world, the details are not the details. <span className="text-[#60A5FA]">They make the design</span>."</p>
        </motion.div>
      </section>

      {/* 6. EVENT CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F172A] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Corporate Portfolios</h2>
            <Link href="/anchor-in-rajasthan" className="font-sans text-[#60A5FA] font-medium hover:underline">View all Cities &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#1E293B] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Annual Galas ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Award Nights & Recognitions</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#1E293B] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Galas" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#334155] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Conferences ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Summits & Dealer Meets</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#334155] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Conferences" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#0F172A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#1E3A8A]/50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#60A5FA] mb-1">Product Launches ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Theatrical reveal setups</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#0F172A] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Launches" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#020617] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">MICE Travel ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Corporate Offsites & Retreats</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#020617] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="MICE" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">Production House</h2>
            <p className="font-['Amandine'] text-4xl text-[#60A5FA] mt-2">The architecture of corporate shows</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-white/5">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Tech Production" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">A/V & Tech Production</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  Massive P3 LED walls, line-array sound systems, intelligent lighting, and flawless show-calling by experienced directors.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(30,58,138,0.2)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A]">
              <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Artist Booking" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  Artist & Celebrity Management
                </h3>
                <p className="font-sans text-lg text-[#93C5FD] font-light max-w-md">
                  We book A-list motivational speakers, standup comedians, and celebrity performers to elevate your corporate gala.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#1E3A8A]/30">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Award Nights</span>
              <span className="text-[#1E3A8A] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Tech Summits</span>
              <span className="text-[#1E3A8A] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Product Unveilings</span>
              <span className="text-[#1E3A8A] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Dealer Meets</span>
              <span className="text-[#1E3A8A] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] p-8 text-[#FAF9F6] rounded-tl-3xl border-t border-l border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">500+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Corporate Shows</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#60A5FA] mb-4 block">The Corporate Anchor</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              Having hosted over 500 massive corporate events himself, Yash understands the exact rhythm and professionalism required.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He knows that a CEO's microphone cannot drop out, the awards graphics must match the winners perfectly, and the branding must be absolutely pristine. He brings this stage-level perfection to the entire event planning process.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E3A8A]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Blueprint</h2>
          
          <div className="space-y-24 border-l border-[#3B82F6]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Venue & Contract Negotiation", desc: "Securing 5-star properties, massive exhibition centers, and negotiating corporate rates for 500+ room bookings.", img: "/premium_events/grand_wedding_venue.webp" },
            { title: "Stage & Set Fabrication", desc: "Building 3D-designed corporate stages, branding elements, and immersive tunnels.", img: "/premium_events/corporate_gala_setup.webp" },
            { title: "Show Calling & A/V", desc: "Programming the exact sequence of lights, sound cues, and presentations for the business sessions.", img: "/premium_events/modern_sangeet_stage.webp" },
            { title: "Entertainment & Gala", desc: "Transitioning the serious conference into a high-energy award night with top-tier celebrity entertainment.", img: "/premium_events/celebrity_artist_stage.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#3B82F6] shadow-[0_0_15px_#3B82F6]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#60A5FA] block mb-2">Phase 0{idx + 1}</span>
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
      <section className="py-32 px-6 bg-[#020617] text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover opacity-50 grayscale" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Crisis Management</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Corporate events operate on tight schedules. We deploy shadow teams with backup microphones, backup generators, and secondary plans. We do not hope for the best; we engineer it.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#020617] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Event <span className="font-['Amandine'] text-[#60A5FA]">Spectacles</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/corporate_gala_setup.webp", 
            "/premium_events/modern_sangeet_stage.webp", 
            "/premium_events/celebrity_artist_stage.webp", 
            "/premium_events/grand_wedding_venue.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#93C5FD] mb-8 block">Client Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "They handled our 800-person dealer meet in Jaipur flawlessly. From the airport arrivals to the massive LED stage production, Yash's team operated with absolute military precision."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Director of Marketing</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Top Tier Real Estate Firm</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#1E3A8A]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "500+", label: "Events Executed" },
            { num: "10K+", label: "Delegates Hosted" },
            { num: "100%", label: "Brand Compliance" },
            { num: "Zero", label: "Downtime" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#60A5FA] mb-4">{stat.num}</h3>
              <p className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. THE WHITE-GLOVE PROMISE (Deliverables) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#020617] text-white">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-['Runiga'] text-6xl text-white mb-6">Our Promise</h2>
            <p className="font-sans text-gray-400 leading-relaxed">
              We act as an extension of your marketing team, ensuring your brand guidelines and corporate identity are perfectly represented.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "End-to-End MICE Management", "Hotel Sourcing & Negotiation", 
              "Large Scale A/V & Tech", "Airport & Logistics Desks",
              "Award Show Scripting", "Celebrity Artist Booking",
              "Gala Dinner Styling", "High-Level Security"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#3B82F6] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#0F172A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#60A5FA] mb-4">Corporate Tiers</h2>
            <p className="font-sans text-gray-400 font-light text-xl">Solutions for events of every scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#1E3A8A]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#93C5FD] transition-colors">Executive Meets</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-500 uppercase tracking-widest mb-8">50 - 150 Delegates</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Boutique Hotel Sourcing</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Premium Conference Setup</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Professional A/V & Screens</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Evening Networking Dinner Setup</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#1E3A8A]/80 p-10 relative bg-gradient-to-b from-[#1E3A8A]/40 to-[#020617] transform md:-translate-y-4 shadow-[0_0_30px_rgba(30,58,138,0.2)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#3B82F6] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Enterprise Level</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#93C5FD]">The Annual Gala</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">200 - 800 Delegates</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Complete MICE Travel & Hotel Booking</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Massive P3 LED Stage Design</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Customized Award Trophies & Graphics</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Celebrity/Anchor Booking (Yash Soni)</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Complete Transport & Airport Desks</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#1E3A8A]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#93C5FD] transition-colors">The Reveal</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-500 uppercase tracking-widest mb-8">Product Launches</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> High-concept stage fabrication</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Theatrical lighting & SFX (CO2, Lasers)</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Hydraulic lifts & projection mapping</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Media & PR management areas</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> VIP Guest & Influencer management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. THE ULTIMATE FAQ (Interactive Dropdowns) */}
      <section className="py-32 bg-[#020617] px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-white mb-4">Common Questions</h2>
            <p className="font-['Rekalgera'] text-[#60A5FA] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Do you handle MICE travel and hotel bookings?", a: "Yes, we handle complete MICE (Meetings, Incentives, Conferences, and Exhibitions) logistics. We source 5-star properties, block hundreds of rooms, and manage the check-in process." },
              { q: "Can you arrange branded stage setups and photo booths?", a: "Absolutely. We fabricate massive LED stages, 3D branded entry arches, and customized corporate photo booths using your exact brand guidelines and color palettes." },
              { q: "What is 'Show Calling'?", a: "Show calling is the act of directing a live event. Our technical director sits at the console and cues the lights, sound, graphics, and anchor scripts down to the exact second for a flawless show." },
              { q: "Can you book celebrity performers for our gala?", a: "Yes, Anchor Yash Soni has direct access to top-tier Bollywood singers, stand-up comedians, and motivational speakers to elevate your award nights." },
              { q: "Do you handle transport and airport logistics?", a: "Yes, we set up branded helpdesks at the airport and deploy fleets of luxury coaches and cars to transport your delegates safely to the venue." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-gray-500" />
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
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#020617] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#60A5FA] leading-[0.8] mb-16 mix-blend-lighten">
            Execute With<br />Authority.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] border border-blue-900/50 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(30,58,138,0.3)]"
          >
            Schedule a Meeting
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-[0.03]">
          <span className="font-['Medino'] text-[150px] md:text-[300px] lg:text-[500px] text-white whitespace-nowrap select-none">
            Yash Soni
          </span>
        </div>
      </section>

      {/* 20. THE ECOSYSTEM INTERLINKS */}
      <section className="py-20 bg-[#020617] px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-['The_Seasons'] text-4xl text-white mb-12">More Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Corporate Event Anchor", url: "/corporate-event-anchor-jaipur" },
              { label: "Award Night Host", url: "/award-night-anchor-jaipur" },
              { label: "Artist Management", url: "/artist-management-jaipur" },
              { label: "Gala Dinner", url: "/gala-dinner-event-planner" },
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-gray-400 hover:text-white uppercase tracking-widest text-[10px] md:text-xs border border-white/10 px-6 py-3 hover:border-gray-500 hover:shadow-[0_5px_15px_rgba(30,58,138,0.1)] transition-all duration-300">
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
            Top corporate event management company in Jaipur. Anchor Yash Soni organizes high-end corporate galas, MICE travel, dealer meets, and product launches with massive tech production and flawless show calling across Rajasthan and India. Best corporate planner agency execution managed by Anchor Yash Soni.
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
