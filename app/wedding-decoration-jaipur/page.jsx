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



export default function WeddingDecorationJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/floral_mandap_close.webp",
    "/premium_events/luxury_wedding_mandap.webp",
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
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#9F1239] selection:text-white">
      
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
                alt="Wedding Decoration Jaipur"
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
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#9F1239]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#9F1239] text-xs md:text-sm mb-6 block">
            The Aesthetic Craft
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Wedding Decoration</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#9F1239] mb-10">Crafting floral masterpieces and palatial themes</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#9F1239] to-[#4C0519] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(159,18,57,0.4)]">
            Design Your Decor
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#9F1239]/30 bg-gradient-to-r from-[#9F1239] to-[#4C0519]">
        <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Exotic Florals
            </span>
            <span className="hidden md:block text-[#FDA4AF] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FDA4AF] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Custom Structures
            </span>
            <span className="hidden md:block text-[#FDA4AF] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Luxury Detailing
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#9F1239] mb-6 block">Artistic Vision</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">We transform empty spaces into breathtaking, cinematic settings.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">Your wedding decor sets the exact mood for the celebration. From massive mandaps draped in fresh lotuses to thousands of hanging fairy lights, our in-house production team creates magic with flowers, fabrics, and light.</p>
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
              <Image src="/premium_events/floral_mandap_close.webp" alt="Floral Details" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Mandap Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/theme_wedding_setup.webp" alt="Theme Decor" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"Decor is not just flowers and lights, it is the <span className="text-[#9F1239]">living canvas</span> of your love story."</p>
        </motion.div>
      </section>

      {/* 6. DECOR CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Design Themes</h2>
            <Link href="/anchor-in-rajasthan" className="font-sans text-[#9F1239] font-medium hover:underline">View all Designs &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#FFF1F2] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Floral Mandaps ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Fresh exotic blooms & lotuses</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/floral_mandap_close.webp" alt="Mandap" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FCE7F3] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Palatial Structures ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Rajwada themes & pillars</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Structure" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FEF2F2] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Luxury Dining ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Chandeliers & sit-down dining</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Dining" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FAFAF9] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-gray-100">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Photo Ops ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Walkways & grand entrances</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Entrance" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Design Elements</h2>
            <p className="font-['Amandine'] text-4xl text-[#9F1239] mt-2">The anatomy of our decor</p>
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
                <Image src="/premium_events/floral_mandap_close.webp" alt="Flowers" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">Exotic Flowers</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  We import orchids, tulips, and hydrangeas, blending them with local lotuses and tuberoses for a rich texture.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(159,18,57,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#9F1239] to-[#4C0519]">
              <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Lighting" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Mood Lighting
                </h3>
                <p className="font-sans text-lg text-[#FDA4AF] font-light max-w-md">
                  Chandeliers, fairy light tunnels, and warm ambient washes that make the flowers glow at night.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#9F1239]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Floral Arches</span>
              <span className="text-[#9F1239] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Rajwada Themes</span>
              <span className="text-[#9F1239] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Crystal Chandeliers</span>
              <span className="text-[#9F1239] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Mirror Work</span>
              <span className="text-[#9F1239] text-4xl">✦</span>
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
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#9F1239] to-[#4C0519] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">400+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Mandaps Built</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#9F1239] mb-4 block">The Visionary</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Yash understands that decor is more than props—it dictates how the photographs will look and how the guests will feel. 
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He works alongside the best karigars, fabricators, and florists in Rajasthan to bring 3D designs into stunning reality, ensuring every petal is perfect.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9F1239]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Decor Process</h2>
          
          <div className="space-y-24 border-l border-[#9F1239]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "3D Design & Planning", desc: "We create digital renders of the stage, mandap, and entrances so you know exactly how it will look.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "Fabrication & Props", desc: "Building the custom wooden structures, arches, and painting them to match your theme.", img: "/premium_events/luxury_wedding_mandap.webp" },
            { title: "Floral Mastery", desc: "Thousands of fresh flowers arrive on the morning of the event to be hand-tied by our artists.", img: "/premium_events/floral_mandap_close.webp" },
            { title: "Lighting & Magic", desc: "The final touch. Positioning warm uplights to make the crystals and fabrics glow.", img: "/premium_events/luxury_dining_setup.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#9F1239] shadow-[0_0_15px_#9F1239]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#9F1239] block mb-2">Step 0{idx + 1}</span>
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
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Obsessive Detailing</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            We don't do 'copy-paste' decorations. We match the fabric colors to the bride's lehenga, ensuring absolute aesthetic harmony.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Floral <span className="font-['Amandine'] text-[#9F1239]">Masterpieces</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/floral_mandap_close.webp", 
            "/premium_events/luxury_wedding_mandap.webp", 
            "/premium_events/traditional_phoolon_ki_chaadar.webp", 
            "/premium_events/luxury_dining_setup.webp", 
            "/premium_events/theme_wedding_setup.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#9F1239] to-[#4C0519] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#FDA4AF] mb-8 block">What People Say</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "I wanted a completely white and green lotus mandap, and Yash's team made it look better than my Pinterest board. The attention to detail with the chandeliers was incredible."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Ayesha & Rohan</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Fairmont, Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#9F1239]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "400+", label: "Mandaps Setup" },
            { num: "5M+", label: "Flowers Used" },
            { num: "100+", label: "Artisan Team" },
            { num: "100%", label: "Custom Design" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#9F1239] mb-4">{stat.num}</h3>
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
              We promise zero wilting flowers and flawless structural safety. Our execution is precise, clean, and delivered strictly on time.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "3D Concept Renders", "Custom Floral Mandaps", 
              "Grand Entrance Passages", "Stage & Backdrop Design",
              "Luxury Dining Setup", "Chandeliers & Lighting",
              "Dance Floor Prints", "Table Centerpieces"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#9F1239] text-2xl mt-1">❖</span>
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#9F1239] mb-4">Decor Packages</h2>
            <p className="font-sans text-gray-400 font-light text-xl">Investment options for your beautiful day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#9F1239]/50 transition-colors duration-500 group rounded-lg">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FDA4AF] transition-colors">The Elegant Setup</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Minimal & Beautiful</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Pre-designed Mandap structures</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Local seasonal flowers</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Basic entrance arch and lighting</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Standard stage backdrop</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#9F1239]/50 p-10 relative bg-gradient-to-b from-[#9F1239]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(159,18,57,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#9F1239] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#FDA4AF]">The Royal Canvas</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Custom Themes</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Customized 3D designed Mandap</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Imported flowers (Orchids, Roses)</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Grand entrance tunnel with lights</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Premium table centerpieces</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Custom printed dance floor</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#9F1239]/50 transition-colors duration-500 group rounded-lg">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FDA4AF] transition-colors">The Palace Build</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Massive Fabrication</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Complete venue transformation</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Heavy architectural structures & pillars</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Thousands of imported exotic blooms</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Crystal chandelier installations</li>
                <li className="flex gap-3"><span className="text-[#9F1239]">✦</span> Elaborate dining and lounge styling</li>
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
            <p className="font-['Rekalgera'] text-[#9F1239] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Do you provide 3D designs before the wedding?", a: "Yes, for our custom theme packages, our design team creates detailed 3D renders so you can see exactly how the mandap, stage, and entrance will look before we build it." },
              { q: "How much does wedding decoration cost in Jaipur?", a: "Basic decor for a 200-guest wedding starts around ₹4-5 Lakhs. For a luxury, heavily floral custom theme at a 5-star palace, it typically ranges from ₹15 Lakhs to ₹30+ Lakhs." },
              { q: "Do you use artificial flowers or fresh flowers?", a: "We primarily use fresh, high-quality flowers (both local and imported). For ceiling hangings or structural backgrounds where fresh flowers might wilt under heat, we strategically use high-end lifelike artificial botanicals." },
              { q: "Can you create a specific theme like a 'Vrindavan' or 'Rajwada' theme?", a: "Absolutely. We specialize in thematic decor. We fabricate the entire setup, including custom props, statues, and specialized lighting to bring the exact theme to life." },
              { q: "Who manages the breakdown after the event?", a: "Our production team handles both the setup and the overnight dismantling and cleanup, ensuring the hotel venue is returned in perfect condition." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-[#9F1239]" />
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
        <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#FDA4AF] leading-[0.8] mb-16 mix-blend-lighten">
            Design Your<br />Dream.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#9F1239] to-[#4C0519] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(159,18,57,0.4)]"
          >
            Talk to our Designers
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
              { label: "Event Planning", url: "/event-planning-jaipur" },
              { label: "Event Management", url: "/event-management-jaipur" },
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Sangeet Decor", url: "/sangeet-decoration-jaipur" },
              { label: "Artist Management", url: "/artist-management-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#9F1239] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#9F1239] hover:shadow-[0_5px_15px_rgba(159,18,57,0.05)] transition-all duration-300">
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
            Hire the best wedding decorator in Jaipur. Anchor Yash Soni and team organize flawless floral themes, luxury mandaps, and palatial setups across Rajasthan. Best wedding decoration agency execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations.
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
