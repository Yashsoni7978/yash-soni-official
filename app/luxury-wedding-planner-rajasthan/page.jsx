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



export default function LuxuryWeddingPlannerRajasthan() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/ivory_hero_wedding_1776853928413.webp",
    "/premium_events/royal_rajasthan_fort.webp",
    "/premium_events/grand_wedding_venue.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#78350F] selection:text-white">
      
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
                alt="Luxury Wedding Planner Rajasthan"
                fill
                className="object-cover object-top"
                priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/50 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#78350F]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#78350F] text-xs md:text-sm mb-6 block">
            The Royal Standard
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Luxury Planning</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#B5952F] mb-10">Bespoke celebrations across Rajasthan's finest estates</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#78350F] to-[#451A03] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(120,53,15,0.4)]">
            Curate Your Legacy
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#D4AF37]/30 bg-gradient-to-r from-[#78350F] to-[#451A03]">
        <div className="absolute inset-0 opacity-20 bg-[url('/kumbhalgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              White-Glove Service
            </span>
            <span className="hidden md:block text-[#B5952F] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#B5952F] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Exclusive Buyouts
            </span>
            <span className="hidden md:block text-[#B5952F] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Complete Privacy
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#B5952F] mb-6 block">Beyond Ordinary</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">True luxury is not just what you see, it's how you feel.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">For the discerning few, we offer a wedding experience free from compromise. We secure the most elite properties in Rajasthan and manage every detail—from private jet arrivals to Michelin-star catering—ensuring your family celebrates in absolute privacy and opulence.</p>
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
              <Image src="/ivory_palace_venue_1776853964418.webp" alt="Palace Wedding" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/ivory_hero_wedding_1776853928413.webp" alt="Luxury Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/ivory_vintage_car_1776854011319.webp" alt="Vintage Car" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"Excellence is never an accident. It is the result of <span className="text-[#78350F]">obsessive execution</span>."</p>
        </motion.div>
      </section>

      {/* 6. LUXURY CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Signature Venues</h2>
            <Link href="/anchor-in-rajasthan" className="font-sans text-[#78350F] font-medium hover:underline">View all Locations &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Link href="/wedding-venue-jaipur" className="flex items-center bg-[#FFF8E1] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Elite Palaces ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Rambagh, Taj Lake Palace</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/grand_wedding_venue.webp" alt="Palaces" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </Link>

            <Link href="/anchor-in-jodhpur" className="flex items-center bg-[#FBE9E7] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Heritage Forts ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Umaid Bhawan, Neemrana</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/royal_rajasthan_fort.webp" alt="Forts" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">The Details</h2>
            <p className="font-['Amandine'] text-4xl text-[#78350F] mt-2">What sets our luxury planning apart</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col group hover:-translate-y-2 transition-all duration-500">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Catering" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">Michelin-Level Catering</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  We fly in specialty chefs from around the world to curate exclusive tasting menus for your guests.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(120,53,15,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#78350F] to-[#451A03]">
              <div className="absolute inset-0 opacity-20 bg-[url('/kumbhalgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/ivory_vintage_car_1776854011319.webp" alt="Hospitality" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Shadow Hospitality
                </h3>
                <p className="font-sans text-lg text-[#B5952F] font-light max-w-md">
                  Dedicated shadow staff and private chauffeurs assigned to key family members for 24/7 assistance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#D4AF37]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Private Charters</span>
              <span className="text-[#78350F] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Security Details</span>
              <span className="text-[#78350F] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Hotel Buyouts</span>
              <span className="text-[#78350F] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Global Cuisine</span>
              <span className="text-[#78350F] text-4xl">✦</span>
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
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#78350F] to-[#451A03] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/kumbhalgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">50+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">VVIP Weddings</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#78350F] mb-4 block">The Principal Architect</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Yash understands the extreme demands of high-net-worth clients. Discretion, speed, and flawless execution are not requested; they are required.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He personally oversees all luxury operations, liaising with palace management and state authorities to ensure the celebration is entirely private and secure.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#78350F]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Royal Curation</h2>
          
          <div className="space-y-24 border-l border-[#D4AF37]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "The Blueprint", desc: "We sit with you to understand your exact aesthetic and secure the impossible venues.", img: "/ivory_palace_venue_1776853964418.webp" },
            { title: "Logistics Masterplan", desc: "Mapping out private jet landings, luxury car fleets, and VIP security sweeps.", img: "/ivory_vintage_car_1776854011319.webp" },
            { title: "Flawless Hospitality", desc: "Setting up 24/7 hospitality desks and in-room spa services for your guests.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "The Grand Execution", desc: "Delivering a seamless multi-day celebration without a single visible flaw.", img: "/ivory_hero_wedding_1776853928413.webp" }
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
                    <span className="font-['Orange_Avenue'] text-3xl text-[#B5952F] block mb-2">Phase 0{idx + 1}</span>
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
      <section className="py-32 px-6 bg-[#FAF9F6] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Absolute Privacy</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            We operate with strict NDAs. Your high-profile guests, your business networks, and your family moments remain entirely off the record.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">A Glimpse of <span className="font-['Amandine'] text-[#78350F]">Royalty</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/ivory_hero_wedding_1776853928413.webp", 
            "/premium_events/grand_wedding_venue.webp", 
            "/ivory_vintage_car_1776854011319.webp", 
            "/premium_events/royal_rajasthan_fort.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#78350F] to-[#451A03] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/kumbhalgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#B5952F] mb-8 block">Private Testimonial</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "We required a complete hotel buyout with extreme security measures. Yash's team executed the 4-day affair flawlessly, anticipating our needs before we even spoke them."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">A Privileged Client</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Umaid Bhawan, Jodhpur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "100%", label: "Privacy Guaranteed" },
            { num: "50+", label: "Elite Buyouts" },
            { num: "24/7", label: "Concierge" },
            { num: "Zero", label: "Compromise" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#B5952F] mb-4">{stat.num}</h3>
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
              We promise an experience that is nothing short of majestic. Every touchpoint is curated for the highest standard of living.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Complete Hotel Buyouts", "Private Jet Charters", 
              "Celebrity Performances", "Michelin-Star Menus",
              "VIP Security & Bouncers", "Custom Luxury Decor",
              "Shadow Hospitality Teams", "Strict NDA Policies"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#78350F] text-2xl mt-1">❖</span>
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#B5952F] mb-4">Curated Services</h2>
            <p className="font-sans text-gray-400 font-light text-xl">We do not offer standard packages; everything is bespoke.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 group rounded-lg">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#B5952F] transition-colors">The Heritage Curation</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Premium Planning</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> 5-Star Hotel Sourcing & Negotiation</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Luxury Decor Design & Execution</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Complete Guest Travel Management</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Standard Security protocols</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#D4AF37]/50 p-10 relative bg-gradient-to-b from-[#78350F]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">VVIP Status</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#B5952F]">The Royal Buyout</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Limitless Execution</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Exclusive booking of elite Palace properties</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Private Jet & Helicopter coordination</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Heavy security, bodyguards, and crowd control</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> Direct Celebrity & A-List Artist booking</li>
                <li className="flex gap-3"><span className="text-[#B5952F]">✦</span> 24/7 dedicated shadow concierge</li>
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
            <p className="font-['Rekalgera'] text-[#78350F] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "What is a 'Hotel Buyout'?", a: "A hotel buyout means we book every single room in the palace or resort. The property is closed to the public, meaning no outside guests can enter. The entire staff works solely for your family." },
              { q: "Can you arrange private charter flights?", a: "Yes. We work with premium aviation partners to charter private jets and helicopters to bring VIP guests directly into Jaipur, Udaipur, or Jodhpur airports." },
              { q: "How do you handle security for high-profile weddings?", a: "We hire private security firms to establish multiple perimeters. This includes bouncers at the gates, plainclothes security inside, and strict guest-list enforcement." },
              { q: "Do you sign Non-Disclosure Agreements (NDAs)?", a: "Absolutely. For high-net-worth clients, politicians, and celebrities, we sign strict NDAs to ensure no photos, names, or financial details are ever leaked." },
              { q: "What budget should we expect for a luxury palace wedding?", a: "True luxury weddings involving full palace buyouts (like Rambagh or Lake Palace) typically start at ₹3-5 Crores and scale upwards depending on the decor and celebrity artists involved." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-[#78350F]" />
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
        <div className="absolute inset-0 opacity-20 bg-[url('/kumbhalgarh.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#B5952F] leading-[0.8] mb-16 mix-blend-lighten">
            Curate Your<br />Legacy.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#78350F] to-[#451A03] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(120,53,15,0.4)]"
          >
            Schedule a Private Consultation
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
              { label: "Wedding Venues", url: "/wedding-venue-jaipur" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Artist Management", url: "/artist-management-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#78350F] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#78350F] hover:shadow-[0_5px_15px_rgba(120,53,15,0.05)] transition-all duration-300">
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
            Hire the best luxury wedding planner in Rajasthan. Anchor Yash Soni provides exclusive VVIP wedding planning, palace buyouts, private charters, and high-security event management across Jaipur, Udaipur, and Jodhpur. Elite destination wedding planner execution managed by Anchor Yash Soni for high-net-worth clients.
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
