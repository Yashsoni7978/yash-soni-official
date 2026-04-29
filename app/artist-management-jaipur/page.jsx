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



export default function ArtistManagementJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/celebrity_artist_stage.webp",
    "/premium_events/modern_sangeet_stage.webp",
    "/premium_events/corporate_gala_setup.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
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
                alt="Celebrity Artist Management"
                fill
                className="object-cover object-top opacity-60"
                priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-black/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#374151]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#9CA3AF] text-xs md:text-sm mb-6 block">
            The VIP Access
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Artist Management</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#B5952F] mb-10">Booking celebrities, bands, and top performers</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#1F2937] to-[#030712] border border-white/20 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Book Your Artist
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#D4AF37]/30 bg-gradient-to-r from-[#1F2937] to-[#030712]">
        <div className="absolute inset-0 opacity-10 bg-[url('/chittorgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Direct Industry Links
            </span>
            <span className="hidden md:block text-[#B5952F] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#B5952F] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Live Symphony Bands
            </span>
            <span className="hidden md:block text-[#B5952F] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Celebrity DJs
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#030712] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#B5952F] mb-6 block">Backstage Pass</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">We connect you directly to the stars, cutting out the middlemen.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">Booking a celebrity or a live band can be extremely expensive if you go through multiple agencies. Because Yash is a top performer himself, we have direct access to artist managers, ensuring you get the best talent at the actual price.</p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK */}
      <section className="py-20 w-full bg-[#030712] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/celebrity_artist_stage.webp" alt="Celebrity Stage" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/modern_sangeet_stage.webp" alt="Live Band" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/corporate_gala_setup.webp" alt="Gala Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MANIFESTO */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#030712]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"Great entertainment turns an ordinary evening into an <span className="text-[#9CA3AF]">unforgettable concert</span>."</p>
        </motion.div>
      </section>

      {/* 6. ARTIST CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#111827] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Talent Roster</h2>
            <Link href="/anchor-in-rajasthan" className="font-sans text-gray-400 font-medium hover:underline">View all Artists &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#1F2937] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Live Bands ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Sufi, Symphony, Unplugged</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#1F2937] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Bands" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#374151] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Celebrities ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Bollywood Stars, Comedians</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#374151] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Celebrities" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#111827] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#D4AF37]/30">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#B5952F] mb-1">Star Anchors ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Yash Soni & TV Personalities</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#111827] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchors" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#030712] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Premium DJs ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">EDM, Bollywood, Club DJs</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#030712] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="DJs" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#030712] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">Stage Management</h2>
            <p className="font-['Amandine'] text-4xl text-[#9CA3AF] mt-2">How we manage the talent</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#111827] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-white/10">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Artist Booking" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">Direct Artist Booking</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  We negotiate directly with the artist's personal manager, getting you the best rates and managing all legal contracts.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1F2937] to-[#030712] border border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/chittorgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Tech Rider" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  Tech Rider & Sound
                </h3>
                <p className="font-sans text-lg text-gray-400 font-light max-w-md">
                  Every big artist needs specific sound systems and lighting. We handle their entire tech rider so they sound perfect.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#D4AF37]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Live Symphony</span>
              <span className="text-[#374151] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Celebrity DJ</span>
              <span className="text-[#374151] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Bollywood Stars</span>
              <span className="text-[#374151] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Standup Comedy</span>
              <span className="text-[#374151] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#030712] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#1F2937] to-[#030712] border-t border-l border-white/20 p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-10 bg-[url('/chittorgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">100+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Artists Booked</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-gray-400 mb-4 block">The Stage King</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              Being a top performer himself, Yash has direct connections with almost every major celebrity and artist agency in Mumbai and Delhi.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He knows how to handle VIP hospitality, flight logistics, and exactly what an artist needs in their green room to deliver a blockbuster performance.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#374151]/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The VIP Flow</h2>
          
          <div className="space-y-24 border-l border-[#D4AF37]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Booking & Contracts", desc: "We secure the dates, negotiate prices, and handle all legal paperwork.", img: "/premium_events/modern_sangeet_stage.webp" },
            { title: "Flights & Hospitality", desc: "Booking business class flights, luxury suites, and fulfilling all green room riders.", img: "/premium_events/corporate_gala_setup.webp" },
            { title: "Tech & Sound Check", desc: "Setting up the massive line-array sound systems and doing microphone tests.", img: "/premium_events/celebrity_artist_stage.webp" },
            { title: "The Blockbuster Show", desc: "The artist performs while we handle stage security and crowd control.", img: "/premium_events/theme_wedding_setup.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#B5952F] block mb-2">Step 0{idx + 1}</span>
                    <h3 className="font-['The_Seasons'] text-4xl md:text-5xl mb-4">{stage.title}</h3>
                    <p className="font-sans text-gray-400 font-light text-lg leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg">
                    <Image src={stage.img} alt={stage.title} fill className="object-cover hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. THE ART OF CURATION */}
      <section className="py-32 px-6 bg-[#030712] text-center border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover opacity-50" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Flawless Execution</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            A celebrity performance is only as good as the sound system they sing on. We provide world-class tech, lighting, and security.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#030712] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Live <span className="font-['Amandine'] text-gray-500">Concerts</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/modern_sangeet_stage.webp", 
            "/premium_events/celebrity_artist_stage.webp", 
            "/premium_events/corporate_gala_setup.webp", 
            "/premium_events/traditional_phoolon_ki_chaadar.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#1F2937] to-[#030712] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/chittorgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#B5952F] mb-8 block">What People Say</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "Yash got us our favorite Bollywood singer at a price no other agency could match. The concert was flawless, the sound was insane, and they managed the celebrity perfectly."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">The Mehta Group</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Corporate Gala, Udaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "100+", label: "Celebrities Booked" },
            { num: "500+", label: "Live Bands" },
            { num: "100%", label: "Direct Access" },
            { num: "Zero", label: "Middlemen" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#B5952F] mb-4">{stat.num}</h3>
              <p className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. THE WHITE-GLOVE PROMISE (Deliverables) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#030712] text-white">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-['Runiga'] text-6xl text-white mb-6">Our Promise</h2>
            <p className="font-sans text-gray-400 leading-relaxed">
              We handle the complicated logistics of big stars. You just stand back and enjoy the show.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Direct Price Negotiation", "Legal Contracts & Visas", 
              "Flight & Hotel Booking", "Green Room Hospitality",
              "Sound & Tech Rider", "Stage Security Guards",
              "Luxury Car Transport", "Stage Show Calling"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-gray-500 text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#111827] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#B5952F] mb-4">Talent Packages</h2>
            <p className="font-sans text-gray-400 font-light text-xl">Packages made for incredible nights.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#B5952F] transition-colors">The Sangeet Vibe</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-500 uppercase tracking-widest mb-8">High Energy</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Professional Anchor (Yash Soni)</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Famous Club DJ</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Basic Sound System Setup</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> LED Screen Graphics</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#D4AF37]/50 p-10 relative bg-gradient-to-b from-[#1F2937] to-black transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#B5952F]">The Live Concert</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Symphony & Sufi</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> 10+ Piece Live Symphony Band</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Full Concert Sound Line-Array</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Professional Sound Engineer</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Stage Lighting Programmer</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Band Travel & Stay Managed</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#B5952F] transition-colors">The Bollywood Star</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-500 uppercase tracking-widest mb-8">VIP Experience</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> A-List Bollywood Singer Booking</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Complete Tech Rider Fulfilled</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> VIP Green Room Hospitality</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Bouncers & Close Protection</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Artist Travel & Logistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. THE ULTIMATE FAQ (Interactive Dropdowns) */}
      <section className="py-32 bg-[#030712] px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-white mb-4">Common Questions</h2>
            <p className="font-['Rekalgera'] text-gray-500 tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Why shouldn't I just book the artist through their website?", a: "Most artists have exclusive management agencies. If you use a random event planner, they go through 2-3 middle-men agencies, adding huge commissions. We connect directly to their main agency, saving you lakhs." },
              { q: "What is a Tech Rider?", a: "A tech rider is a strict document given by the artist specifying the exact speakers, microphones, and mixing consoles they need to perform. If you don't provide these exact brands, they can refuse to perform. We handle this completely." },
              { q: "Do we have to pay for the artist's travel?", a: "Yes. Along with the performance fee, the client has to provide business class flights for the main star, economy flights for the band, and 5-star hotel rooms. We manage all these bookings." },
              { q: "Can you book stand-up comedians for corporate events?", a: "Yes! Stand-up comedy is extremely popular for corporate galas. We regularly book India's top comedians for private shows." },
              { q: "Is security included for big celebrities?", a: "Yes, when booking a massive star, we provide private bouncers and stage security to ensure the artist feels safe and the crowd is managed." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-gray-500" />
            ))}
          </div>
        </div>
      </section>

      {/* 18. PRESS & RECOGNITION */}
      <section className="py-20 bg-black text-center">
        <span className="font-['Rekalgera'] text-gray-600 tracking-[0.3em] uppercase text-xs mb-8 block">Recognized By</span>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
          <span className="font-['Runiga'] text-3xl text-white">VOGUE</span>
          <span className="font-['The_Seasons'] text-3xl text-white">WEDMEGOOD</span>
          <span className="font-['Runiga'] text-3xl text-white">HARPER'S</span>
          <span className="font-['The_Seasons'] text-3xl text-white">WEDDING SUTRA</span>
        </div>
      </section>

      {/* 19. THE FINAL CTA & SIGNATURE */}
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#030712] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/chittorgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#B5952F] leading-[0.8] mb-16 mix-blend-lighten">
            Book The<br />Stars.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#1F2937] to-[#030712] border border-white/20 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(255,255,255,0.1)]"
          >
            Check Artist Availability
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-[0.03]">
          <span className="font-['Medino'] text-[150px] md:text-[300px] lg:text-[500px] text-white whitespace-nowrap select-none">
            Yash Soni
          </span>
        </div>
      </section>

      {/* 20. THE ECOSYSTEM INTERLINKS */}
      <section className="py-20 bg-[#030712] px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-['The_Seasons'] text-4xl text-white mb-12">More Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Corporate Events", url: "/corporate-event-management-company" },
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
              { label: "Sangeet Decor", url: "/sangeet-decoration-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-gray-400 hover:text-white uppercase tracking-widest text-[10px] md:text-xs border border-white/10 px-6 py-3 hover:border-gray-500 transition-all duration-300">
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
            Top celebrity artist management in Jaipur. Anchor Yash Soni directly books Bollywood stars, live symphony bands, and DJs for weddings and corporate events across Rajasthan. Best live entertainment booking agency execution managed by Anchor Yash Soni with complete tech rider fulfillment.
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
