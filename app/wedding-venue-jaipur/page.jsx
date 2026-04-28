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

export default function WeddingVenueJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/palace_wedding_decor.webp",
    "/premium_events/outdoor_garden_wedding.webp",
    "/premium_events/luxury_dining_setup.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#4A044E] selection:text-white">
      
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
                alt="Wedding Venues Jaipur"
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
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#4A044E]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#4A044E] text-xs md:text-sm mb-6 block">
            The Perfect Foundation
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Wedding Venues</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#D4AF37] mb-10">Securing Jaipur's most breathtaking properties</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#4A044E] to-[#2E1065] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,4,78,0.4)]">
            Find Your Palace
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#D4AF37]/30 bg-gradient-to-r from-[#4A044E] to-[#2E1065]">
        <div className="absolute inset-0 opacity-20 bg-[url('/ranthambore.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Direct Negotiation
            </span>
            <span className="hidden md:block text-[#D4AF37] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#D4AF37] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Heritage Palaces
            </span>
            <span className="hidden md:block text-[#D4AF37] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Luxury Resorts
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#D4AF37] mb-6 block">The First Step</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">The venue decides the soul of your wedding. We find the best ones.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">Booking a venue is overwhelming when you don't know the local market. We hold strong partnerships with Jaipur's top 5-star properties, ensuring you get prime dates, better rates, and the perfect layout for your events.</p>
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
              <Image src="/premium_events/palace_wedding_decor.webp" alt="Palace Venue" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/outdoor_garden_wedding.webp" alt="Resort Venue" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/luxury_dining_setup.webp" alt="Banquet Venue" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"A beautiful wedding starts with a <span className="text-[#4A044E]">beautiful foundation</span>."</p>
        </motion.div>
      </section>

      {/* 6. VENUE CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Venue Types</h2>
            <Link href="/locations" className="font-sans text-[#4A044E] font-medium hover:underline">Explore Cities &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#FDF4FF] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Heritage Palaces ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Rambagh, Jai Mahal</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/palace_wedding_decor.webp" alt="Palaces" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FAF5FF] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Luxury Resorts ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Fairmont, Leela, JW Marriott</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/outdoor_garden_wedding.webp" alt="Resorts" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#F3E8FF] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Boutique Estates ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Intimate 50-100 guest venues</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/ivory_hero_wedding_1776853928413.webp" alt="Estates" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FCE7F3] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Grand Lawns ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Massive 1000+ guest grounds</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Lawns" fill className="object-cover" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Venue Services</h2>
            <p className="font-['Amandine'] text-4xl text-[#4A044E] mt-2">How we secure the best spaces</p>
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
                <Image src="/premium_events/grand_wedding_venue.webp" alt="Negotiation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">Contract Negotiation</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  We use our bulk-buying power to get you heavy discounts on room rates, food plates, and venue rental charges.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(74,4,78,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#4A044E] to-[#2E1065]">
              <div className="absolute inset-0 opacity-20 bg-[url('/ranthambore.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Logistics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Space Planning
                </h3>
                <p className="font-sans text-lg text-gray-300 font-light max-w-md">
                  We map out exactly which lawn is best for Haldi, which hall is best for Sangeet, and the flow of guest movement.
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
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Fairmont Jaipur</span>
              <span className="text-[#4A044E] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Rambagh Palace</span>
              <span className="text-[#4A044E] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Taj Amer</span>
              <span className="text-[#4A044E] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">JW Marriott</span>
              <span className="text-[#4A044E] text-4xl">✦</span>
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
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#4A044E] to-[#2E1065] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/ranthambore.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">50+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Partner Hotels</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#4A044E] mb-4 block">The Local Expert</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Yash personally visits every major hotel in Rajasthan. He knows which property has strict noise limits, which one has the best catering, and which one will give you the best deal.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He connects you directly with the General Managers, ensuring your family gets VIP treatment throughout the booking process.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4A044E]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Sourcing Process</h2>
          
          <div className="space-y-24 border-l border-[#D4AF37]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Requirement Analysis", desc: "We sit with you to understand your budget, guest count, and aesthetic preferences.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "Property Shortlisting", desc: "We provide you with a curated list of 3-4 properties that perfectly match your vision.", img: "/premium_events/outdoor_garden_wedding.webp" },
            { title: "Site Recce & Tasting", desc: "We take you on a tour of the shortlisted hotels and arrange food tasting sessions.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "Contract Finalization", desc: "We lock in the best rates, sign the contracts, and secure your dates.", img: "/premium_events/palace_wedding_decor.webp" }
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
                    <span className="font-['Orange_Avenue'] text-3xl text-[#D4AF37] block mb-2">Step 0{idx + 1}</span>
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
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Unseen Value</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            A hotel might quote you ₹4000 a plate. Because we bring them dozens of weddings a year, we get it for ₹3000. That's the power of an established planner.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Stunning <span className="font-['Amandine'] text-[#4A044E]">Locations</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/palace_wedding_decor.webp", 
            "/premium_events/outdoor_garden_wedding.webp", 
            "/ivory_hero_wedding_1776853928413.webp", 
            "/premium_events/grand_wedding_venue.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#4A044E] to-[#2E1065] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/ranthambore.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#D4AF37] mb-8 block">What People Say</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "We were confused between 10 different hotels. Yash broke down the pros and cons of each, helped us pick the perfect resort, and saved us nearly 20% on the final hotel bill."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">The Kapoor Family</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Fairmont, Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "50+", label: "Partner Hotels" },
            { num: "20%", label: "Average Savings" },
            { num: "300+", label: "Venues Booked" },
            { num: "100%", label: "Transparency" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#D4AF37] mb-4">{stat.num}</h3>
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
              We promise complete transparency in pricing. You pay the hotel directly, we just make sure you get the best possible deal.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Unbiased Property Tours", "Aggressive Price Negotiation", 
              "Contract & Policy Review", "Menu Tasting Setup",
              "Space & Capacity Planning", "Room Allotment Strategy",
              "Vendor Policy Checking", "Date Blocking"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#4A044E] text-2xl mt-1">❖</span>
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#D4AF37] mb-4">Venue Sourcing</h2>
            <p className="font-sans text-gray-400 font-light text-xl">How we help you lock the perfect location.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tier 1 */}
            <div className="border border-[#D4AF37]/50 p-10 relative bg-gradient-to-b from-[#4A044E]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">End-to-End Planning</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#D4AF37]">Full Wedding Management</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Venue + Decor + Execution</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Free venue sourcing & negotiation</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Complete decor design and setup</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> All artist and vendor bookings</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Full guest travel & hospitality management</li>
              </ul>
              <p className="font-sans text-xs text-gray-500 italic">*Venue sourcing is complimentary when you book us for full wedding planning.</p>
            </div>
            
            {/* Tier 2 */}
            <div className="border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 group rounded-lg">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#D4AF37] transition-colors">Consulting Only</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Venue Hunting</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Curated list of properties based on budget</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Arranging hotel visits and tours</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> One-time contract negotiation</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Handing over the booking to you</li>
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
            <p className="font-['Rekalgera'] text-[#4A044E] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Can we visit the properties before booking?", a: "Absolutely. We encourage it. We will schedule a full day 'recce' (site visit) where we tour 3-4 shortlisted hotels, check the rooms, view the event lawns, and meet the managers." },
              { q: "How much does a 5-star venue cost in Jaipur?", a: "A 5-star resort in Jaipur typically charges between ₹3,000 to ₹5,000 per plate for food, and room rates range from ₹15,000 to ₹35,000 per night depending on the season." },
              { q: "Do we have to pay you a commission for the venue?", a: "No. If you hire us as your full wedding planner, our venue sourcing and negotiation service is included in our planning fee. You pay the hotel directly for their services." },
              { q: "What is a 'Corkage' fee?", a: "If you want to bring your own alcohol to the venue, hotels charge a 'corkage' fee per bottle. We negotiate heavily on this to get it waived or drastically reduced for our clients." },
              { q: "How early should we book a venue?", a: "For peak wedding season (November to February) in Rajasthan, good properties get sold out 8 to 10 months in advance. We highly recommend booking early." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-[#4A044E]" />
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
        <div className="absolute inset-0 opacity-20 bg-[url('/ranthambore.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#D4AF37] leading-[0.8] mb-16 mix-blend-lighten">
            Find Your<br />Palace.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#4A044E] to-[#2E1065] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(74,4,78,0.4)]"
          >
            Start Venue Hunting
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
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
              { label: "Luxury Weddings", url: "/luxury-wedding-planner-rajasthan" },
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#4A044E] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#4A044E] hover:shadow-[0_5px_15px_rgba(74,4,78,0.05)] transition-all duration-300">
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
            Find the best wedding venues in Jaipur. Anchor Yash Soni helps you source, negotiate, and book 5-star heritage palaces and luxury resorts across Rajasthan. Best wedding venue booking agency execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations.
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
