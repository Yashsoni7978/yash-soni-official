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



export default function EventDesigning() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/theme_wedding_setup.webp",
    "/premium_events/luxury_wedding_mandap.webp",
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
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#BE185D] selection:text-white">
      
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
                alt="Event Designing"
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
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#BE185D]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#BE185D] text-xs md:text-sm mb-6 block">
            Visual Storytelling
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Event Design</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#9D174D] mb-10">Architectural scale, floral art, and 3D visualization</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#BE185D] to-[#831843] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(190,24,93,0.4)]">
            Create Your Vision
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#F43F5E]/30 bg-gradient-to-r from-[#BE185D] to-[#831843]">
        <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              3D Renders
            </span>
            <span className="hidden md:block text-[#FDA4AF] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FDA4AF] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Floral Artistry
            </span>
            <span className="hidden md:block text-[#FDA4AF] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Set Fabrication
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#BE185D] mb-6 block">The Aesthetics</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">A well-designed space dictates how people feel.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">Event design is not just picking table linens; it's spatial architecture. We manipulate light, texture, and scale to completely transform hotel lawns and palace courtyards into immersive environments. Before a single flower is placed, we build the entire venue in 3D so you can walk through your event digitally.</p>
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
              <Image src="/premium_events/theme_wedding_setup.webp" alt="Theme Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Mandap Design" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/outdoor_garden_wedding.webp" alt="Floral Architecture" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"Design should never overpower the emotion. It should <span className="text-[#BE185D]">frame it</span>."</p>
        </motion.div>
      </section>

      {/* 6. DESIGN CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Aesthetic Styles</h2>
            <a href="#packages" className="font-sans text-[#BE185D] font-medium hover:underline">View Process &gt;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#FDF2F8] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-pink-50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Modern Minimalist ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Clean lines, acrylics & white florals</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/outdoor_garden_wedding.webp" alt="Minimalist" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FCE7F3] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-pink-100">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Heritage Royal ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Deep maroons, brass & velvets</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Royal" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FBCFE8] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-pink-200">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Boho Chic ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Pampas grass, macrame & warm lights</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Boho" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#F9A8D4] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#BE185D]/30">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#BE185D] mb-1">Theatrical ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-700">Massive sets, props & SFX</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Theatrical" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Design Studio</h2>
            <p className="font-['Amandine'] text-4xl text-[#BE185D] mt-2">Tools of the trade</p>
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
                <Image src="/premium_events/luxury_wedding_mandap.webp" alt="3D Rendering" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">3D Rendering</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  We don't work with vague moodboards. Our architectural team builds exact 3D models of the venue so you see the precise scale and color grading before execution.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(190,24,93,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#BE185D] to-[#831843]">
              <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Fabrication" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Custom Carpentry
                </h3>
                <p className="font-sans text-lg text-[#FDA4AF] font-light max-w-md">
                  We operate our own workshops. If a design requires a 20-foot wooden lotus or an exact replica of a Roman pillar, we carve it from scratch.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#BE185D]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Floral Mapping</span>
              <span className="text-[#BE185D] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Light Programming</span>
              <span className="text-[#BE185D] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Fabric Draping</span>
              <span className="text-[#BE185D] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Space Planning</span>
              <span className="text-[#BE185D] text-4xl">✦</span>
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
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#BE185D] to-[#831843] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">Scale</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">And Proportion</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#BE185D] mb-4 block">The Creative Eye</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Yash understands that what looks good to the naked eye must also translate perfectly through a camera lens.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He directs the design team to ensure that lighting doesn't cast harsh shadows on the stage, that floral colors don't clash with the bride's outfit, and that the backdrop is wide enough to cover massive group photos.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BE185D]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Design Process</h2>
          
          <div className="space-y-24 border-l border-[#F43F5E]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Concept & Moodboarding", desc: "We sit down to pull references, lock in color palettes, and define the overall aesthetic direction for each event.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "3D Visualization", desc: "Our architects map the actual dimensions of your venue and place the decor elements inside a hyper-realistic 3D render.", img: "/premium_events/luxury_wedding_mandap.webp" },
            { title: "Material Selection", desc: "Choosing the exact fabrics, imported florals (tulips, hydrangeas), and prop textures in our studio.", img: "/premium_events/outdoor_garden_wedding.webp" },
            { title: "On-Site Fabrication", desc: "Our massive team of carpenters, florists, and light engineers execute the build 48 hours prior to the event.", img: "/premium_events/luxury_dining_setup.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#F43F5E] shadow-[0_0_15px_#F43F5E]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#FDA4AF] block mb-2">Phase 0{idx + 1}</span>
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
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">The Light Dictates The Mood</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            You can spend millions on imported orchids, but if the lighting is wrong, it will look cheap. We use architectural wash lights, focused pin-spots for centerpieces, and intelligent moving heads to make the design truly come alive.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Design <span className="font-['Amandine'] text-[#BE185D]">Portfolios</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/luxury_wedding_mandap.webp", 
            "/premium_events/theme_wedding_setup.webp", 
            "/premium_events/outdoor_garden_wedding.webp", 
            "/premium_events/luxury_dining_setup.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#BE185D] to-[#831843] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/alwar.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#FDA4AF] mb-8 block">Client Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "We saw the 3D renders two months before the wedding. Walking into the actual venue, it was exactly as they promised, down to the last flower and the exact shade of the drapes. Pure magic."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Ayesha & Varun</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Rambagh Palace</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#BE185D]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "500+", label: "Renders Created" },
            { num: "In-House", label: "Fabrication Unit" },
            { num: "100%", label: "Custom Built" },
            { num: "Zero", label: "Copy Paste" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#F43F5E] mb-4">{stat.num}</h3>
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
              We promise originality. We do not reuse standard "packages." Every event design is built specifically for your venue and your aesthetic preferences.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Hyper-Realistic 3D Renders", "Custom Stage Carpentry", 
              "Imported Exotic Floral Sourcing", "Architectural Light Programming",
              "Bespoke Furniture Rentals", "Thematic Props & Artifacts",
              "Ceiling Draping & Installations", "Table Centerpiece Curation"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#BE185D] text-2xl mt-1">❖</span>
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#F43F5E] mb-4">Design Tiers</h2>
            <p className="font-sans text-gray-400 font-light text-xl">Levels of aesthetic immersion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#BE185D]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FDA4AF] transition-colors">The Aesthetic Base</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Color & Floral</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Color palette definition and draping</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Local floral arrangements (Roses, Marigold)</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Standard warm par-can lighting</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Basic stage structure and seating</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#F43F5E]/50 p-10 relative bg-gradient-to-b from-[#BE185D]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(190,24,93,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#F43F5E] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">High Impact</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#FDA4AF]">The Immersive Build</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Full Venue Styling</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> 3D Renders and custom carpentry</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Imported florals (Orchids, Hydrangeas)</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Full ceiling treatments and chandeliers</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Intelligent moving head lighting</li>
                <li className="flex gap-3"><span className="text-[#FDA4AF]">✦</span> Premium customized furniture</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#BE185D]/50 transition-colors duration-500 group rounded-lg bg-black/50">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#FDA4AF] transition-colors">The Masterpiece</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Theatrical Scale</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Massive architectural set construction</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Complete venue masking and flooring</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Kinetic lighting and heavy SFX</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Extensive custom prop fabrication</li>
                <li className="flex gap-3"><span className="text-[#BE185D]">✦</span> Sensory design (Aroma, Atmosphere)</li>
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
            <p className="font-['Rekalgera'] text-[#BE185D] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "How long does it take to create a 3D design?", a: "After the initial moodboard is approved, our architects take about 7 to 10 days to generate the first draft of the 3D renders based on the actual venue dimensions." },
              { q: "Do you use real or artificial flowers?", a: "We primarily use fresh, real florals (both local and imported). We only use high-end artificial botanicals for massive ceiling installations where weight or heat makes fresh flowers impossible to sustain." },
              { q: "Can we modify a design after seeing the 3D render?", a: "Yes. The purpose of the 3D render is to allow for modifications. We provide up to two revision rounds to tweak colors, scale, and placement before signing off for fabrication." },
              { q: "What happens if it rains during an outdoor setup?", a: "Our logistics team constantly monitors weather forecasts. If there is a risk, we incorporate waterproof transparent German hangars into the design without compromising the aesthetic." },
              { q: "Do you provide customized furniture?", a: "Yes, we don't just use standard hotel banquet chairs. We supply premium Tiffany chairs, velvet lounges, and customized tables to match the specific theme." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} colorClass="text-[#BE185D]" />
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
            Design The<br />Dream.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#BE185D] to-[#831843] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(190,24,93,0.4)]"
          >
            Start 3D Modeling
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
              { label: "Theme Wedding Organizer", url: "/theme-wedding-organizer-india" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Sangeet Decoration", url: "/sangeet-decoration-jaipur" },
              { label: "Event Planning", url: "/event-planning-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#BE185D] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#BE185D] hover:shadow-[0_5px_15px_rgba(190,24,93,0.05)] transition-all duration-300">
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
            Top event designing company in Jaipur. Anchor Yash Soni provides bespoke 3D design, floral architecture, custom carpentry, and intelligent lighting setups for luxury events, weddings, and galas across Rajasthan. Best event design agency execution managed by Anchor Yash Soni.
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
