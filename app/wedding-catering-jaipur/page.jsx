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



export default function WeddingCateringJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/luxury_dining_setup.webp",
    "/premium_events/traditional_phoolon_ki_chaadar.webp",
    "/premium_events/outdoor_garden_wedding.webp",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#B45309] selection:text-white">
      
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
                alt="Wedding Catering Jaipur"
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
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#B45309]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#B45309] text-xs md:text-sm mb-6 block">
            The Royal Feast
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Premium Catering</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#B45309] mb-10">Curating global cuisines and royal Rajasthani thalis</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#B45309] to-[#78350F] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(180,83,9,0.4)]">
            Design Your Menu
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#F59E0B]/30 bg-gradient-to-r from-[#B45309] to-[#78350F]">
        <div className="absolute inset-0 opacity-20 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Michelin-Level Chefs
            </span>
            <span className="hidden md:block text-[#F59E0B] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#F59E0B] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Global Cuisines
            </span>
            <span className="hidden md:block text-[#F59E0B] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Impeccable Service
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#B45309] mb-6 block">Culinary Mastery</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">People will forget the flowers, but they will never forget the food.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">A royal wedding is incomplete without a royal feast. We bring in top-tier executive chefs from across India to craft personalized menus. From authentic Marwari dal baati churma to live Italian pasta wheels and Pan-Asian sushi bars, our catering sets the gold standard in Jaipur.</p>
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
              <Image src="/premium_events/luxury_dining_setup.webp" alt="Luxury Dining" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/ivory_vintage_car_1776854011319.webp" alt="High Tea" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/theme_wedding_setup.webp" alt="Cocktail Bar" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"Catering is not just feeding your guests, it is an <span className="text-[#B45309]">act of extreme hospitality</span>."</p>
        </motion.div>
      </section>

      {/* 6. CULINARY CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">The Menu Styles</h2>
            <a href="#packages" className="font-sans text-[#B45309] font-medium hover:underline">View Packages &gt;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#FFFBEB] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Sit-Down Dinners ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Silver service, multi-course meals</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Dining" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FEF3C7] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Live Global Stations ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Sushi, Tapas, Wood-fired Pizzas</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Stations" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FDE68A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Authentic Rajasthani ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Laal Maas, Dal Baati, Ghevar</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/palace_wedding_decor.webp" alt="Rajasthani" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FEF08A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-yellow-100">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Premium Mixology ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Craft cocktails & molecular bars</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/ivory_vintage_car_1776854011319.webp" alt="Bar" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Culinary Excellence</h2>
            <p className="font-['Amandine'] text-4xl text-[#B45309] mt-2">What sets our catering apart</p>
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
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Food Presentation" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">Exquisite Presentation</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  We eat with our eyes first. Our food presentation involves imported serve-ware, dry ice theatrics, and bespoke floral garnishing.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(180,83,9,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#B45309] to-[#78350F]">
              <div className="absolute inset-0 opacity-20 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Service" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Shadow Waiters
                </h3>
                <p className="font-sans text-lg text-[#FDE68A] font-light max-w-md">
                  We assign dedicated 'shadow' waiters to the immediate families, ensuring they are fed and hydrated throughout the busy ceremonies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#B45309]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Truffle & Caviar</span>
              <span className="text-[#B45309] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Royal Thalis</span>
              <span className="text-[#B45309] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Live Sushi Bars</span>
              <span className="text-[#B45309] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Artisan Desserts</span>
              <span className="text-[#B45309] text-4xl">✦</span>
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
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#B45309] to-[#78350F] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">50K+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Guests Served</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#B45309] mb-4 block">The Taste Maker</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Yash believes that food is the ultimate icebreaker at weddings. He curates the menu structure to match the exact vibe of the event.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He works strictly with India's top F&B vendors, ensuring that the butter chicken served at 2 AM is just as hot and perfect as the first plate at 8 PM.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B45309]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Tasting Process</h2>
          
          <div className="space-y-24 border-l border-[#F59E0B]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Menu Brainstorming", desc: "We sit down to map out global cuisines, local delicacies, and special dietary requirements.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "The Grand Tasting", desc: "A private tasting session where you sample the shortlisted dishes and finalize the flavors.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "Kitchen Setup & Logistics", desc: "Building massive hygienic field kitchens at the venue 48 hours before the event.", img: "/premium_events/outdoor_garden_wedding.webp" },
            { title: "Flawless Service", desc: "Army of trained stewards ensuring plates are cleared instantly and glasses are always full.", img: "/premium_events/traditional_phoolon_ki_chaadar.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#F59E0B] shadow-[0_0_15px_#F59E0B]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#F59E0B] block mb-2">Step 0{idx + 1}</span>
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
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Zero Bottlenecks</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            There is nothing worse than guests waiting in long lines for food. We mathematically calculate the exact number of live counters and buffet lines needed so nobody ever waits.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Culinary <span className="font-['Amandine'] text-[#B45309]">Moments</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/luxury_dining_setup.webp", 
            "/premium_events/outdoor_garden_wedding.webp", 
            "/premium_events/theme_wedding_setup.webp", 
            "/premium_events/palace_wedding_decor.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#B45309] to-[#78350F] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#FDE68A] mb-8 block">What People Say</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "We had 800 guests, and every single person came up to me to talk about the live pasta wheel and the authentic Dal Baati. The food was hot, the service was fast, and the taste was Michelin-level."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">The Singhania Family</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Jaipur Palace</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#F59E0B]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "50+", label: "Global Cuisines" },
            { num: "100%", label: "Hygiene Standard" },
            { num: "500+", label: "Trained Stewards" },
            { num: "Zero", label: "Waiting Lines" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#F59E0B] mb-4">{stat.num}</h3>
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
              We promise absolute hygiene, premium ingredients, and a dining experience that matches the aesthetic grandeur of your wedding.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Customized Menu Engineering", "Private Tasting Sessions", 
              "Imported & Premium Ingredients", "Live Theatrical Counters",
              "Trained White-Glove Stewards", "Dedicated Family VIP Service",
              "Molecular Mixology Bars", "Late Night Phere Snacks"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#B45309] text-2xl mt-1">❖</span>
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#F59E0B] mb-4">Catering Options</h2>
            <p className="font-sans text-gray-400 font-light text-xl">Investment per plate based on variety and complexity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#B45309]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FDE68A] transition-colors">The Traditional Feast</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Authentic & Rich</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> 4-Course Indian Buffet</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Authentic Rajasthani Specialties</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Standard Live Chaat Counters</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Traditional Dessert Station</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#F59E0B]/50 p-10 relative bg-gradient-to-b from-[#B45309]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(180,83,9,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#F59E0B] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#FDE68A]">The Global Fusion</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Extensive Variety</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#FDE68A]">✦</span> 3 Major International Cuisines (Italian, Asian, Mexican)</li>
                <li className="flex gap-3"><span className="text-[#FDE68A]">✦</span> Premium Live Grills & Pasta Wheels</li>
                <li className="flex gap-3"><span className="text-[#FDE68A]">✦</span> Massive Indian Regional Spread</li>
                <li className="flex gap-3"><span className="text-[#FDE68A]">✦</span> Extensive 15+ Item Dessert Bar</li>
                <li className="flex gap-3"><span className="text-[#FDE68A]">✦</span> Signature Welcome Drinks</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#B45309]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FDE68A] transition-colors">The Palace Sit-Down</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Michelin Level</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Plated 7-Course Silver Service</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Celebrity/Specialty Guest Chefs</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Truffle, Caviar, & Exotic Ingredients</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> Molecular Gastronomy Displays</li>
                <li className="flex gap-3"><span className="text-[#B45309]">✦</span> 1-on-1 Waiter to Guest ratio</li>
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
            <p className="font-['Rekalgera'] text-[#B45309] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Can we customize the menu completely?", a: "Yes, 100%. We do not force fixed packages. If you want a dedicated 'Purani Dilli' street food lane or an entirely Vegan spread, we design it." },
              { q: "Do you arrange food tasting before finalizing?", a: "Absolutely. Once we shortlist the menu, we arrange a complete food tasting session for your family so you can check the flavors, spice levels, and presentation." },
              { q: "Are the live counters actually cooked live?", a: "Yes! The appeal of live counters is the theatrics. Pizzas are baked in actual wood-fired ovens, pasta is tossed in cheese wheels, and dosas are flipped right in front of the guests." },
              { q: "How do you manage catering in outdoor venues?", a: "We build fully equipped, hygienic field kitchens directly at the venue with proper drainage, water supply, and refrigeration to ensure food safety." },
              { q: "Do you cater for late-night Phere?", a: "Yes, we arrange special late-night setups (tea, coffee, light snacks, and energy bites) specifically for the immediate family and guests attending the Pheres at 2 AM." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-[#B45309]" />
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
        <div className="absolute inset-0 opacity-20 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#FDE68A] leading-[0.8] mb-16 mix-blend-lighten">
            Taste The<br />Magic.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#B45309] to-[#78350F] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(180,83,9,0.4)]"
          >
            Curate Your Menu
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
              { label: "Wedding Venues", url: "/wedding-venue-jaipur" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Haldi Planner", url: "/haldi-decoration-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#B45309] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#B45309] hover:shadow-[0_5px_15px_rgba(180,83,9,0.05)] transition-all duration-300">
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
            Top luxury wedding catering in Jaipur. Anchor Yash Soni provides exclusive F&B planning, bringing Michelin-level global cuisines, authentic Rajasthani thalis, and zero-wait-line service to premium destination weddings across Rajasthan. Best wedding catering agency execution managed by Anchor Yash Soni.
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
