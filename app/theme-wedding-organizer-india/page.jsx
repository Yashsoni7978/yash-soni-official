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
    <div className="border-b border-[#FAF9F6]/20 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left">
        <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white pr-4">{faq.q}</h3>
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
            <p className="font-sans text-gray-400 font-light leading-relaxed mt-4">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ThemeWeddingOrganizerIndia() {
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
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#0F766E] selection:text-white">
      
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
                alt="Theme Wedding Organizer India"
                fill
                className="object-cover object-top opacity-70"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#042F2E] via-[#042F2E]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-black/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#0F766E]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#5EEAD4] text-xs md:text-sm mb-6 block">
            Theatrical Imagination
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Theme Weddings</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#2DD4BF] mb-10">Designing immersive, story-driven luxury celebrations</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#0F766E] to-[#042F2E] border border-teal-900/50 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(15,118,110,0.4)]">
            Design Your Concept
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#0F766E]/30 bg-gradient-to-r from-[#0F766E] to-[#042F2E]">
        <div className="absolute inset-0 opacity-10 bg-[url('/bharatpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              3D Concept Art
            </span>
            <span className="hidden md:block text-[#5EEAD4] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#5EEAD4] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Immersive Sets
            </span>
            <span className="hidden md:block text-[#5EEAD4] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Custom Fabrication
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#042F2E] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#2DD4BF] mb-6 block">Beyond Reality</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">We don't just decorate venues. We build entire worlds.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">A theme wedding is more than matching colors. It's an immersive experience. Whether it's recreating the ghats of Banaras for a Sangeet, a mystical enchanted forest for the Reception, or a Royal Rajputana courtyard for the Pheres, we design, fabricate, and direct theatrical spaces that leave guests completely speechless.</p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK */}
      <section className="py-20 w-full bg-[#042F2E] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/theme_wedding_setup.webp" alt="Vrindavan Theme" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Rajwada Theme" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/outdoor_garden_wedding.webp" alt="Boho Theme" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MANIFESTO */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#042F2E]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"Your wedding shouldn't just look beautiful. It should feel like <span className="text-[#2DD4BF]">magic</span>."</p>
        </motion.div>
      </section>

      {/* 6. THEMATIC CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#115E59] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Signature Concepts</h2>
            <Link href="/locations" className="font-sans text-[#5EEAD4] font-medium hover:underline">View All &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#134E4A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Vrindavan Bliss ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Peacocks, Flutes & Florals</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#134E4A] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Vrindavan" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#0F766E] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Rajwada Royale ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Pillars, Deep Reds & Gold</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#0F766E] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Rajwada" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#042F2E] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#2DD4BF]/50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#5EEAD4] mb-1">Enchanted Forest ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Fairy lights, Moss & Trees</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#042F2E] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/outdoor_garden_wedding.webp" alt="Forest" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#022C22] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Sufi Mystique ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Diyas, Mirrors & Qawwali</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#022C22] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Sufi" fill className="object-cover" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#042F2E] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">The Architecture</h2>
            <p className="font-['Amandine'] text-4xl text-[#2DD4BF] mt-2">How we build the illusion</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#115E59] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-white/5">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/luxury_wedding_mandap.webp" alt="Fabrication" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">Set Fabrication</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  We don't just use readymade props. Our carpenters build massive custom structures, from 40-foot entry tunnels to exact replicas of ancient temple pillars.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,118,110,0.2)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#0F766E] to-[#042F2E]">
              <div className="absolute inset-0 opacity-10 bg-[url('/bharatpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Props & Details" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  Thematic Detailing
                </h3>
                <p className="font-sans text-lg text-[#5EEAD4] font-light max-w-md">
                  It's in the details. Hand-painted murals, customized brass urlis, specialized uniform for waiters, and curated background scents.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#0F766E]/30">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Vrindavan Theme</span>
              <span className="text-[#0F766E] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Boho Chic</span>
              <span className="text-[#0F766E] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Royal Rajwada</span>
              <span className="text-[#0F766E] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Banaras Ghats</span>
              <span className="text-[#0F766E] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#042F2E] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#0F766E] to-[#042F2E] p-8 text-[#FAF9F6] rounded-tl-3xl border-t border-l border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/bharatpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">100+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Sets Built</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#2DD4BF] mb-4 block">The Creative Director</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              Yash is an artist at heart. He doesn't look at a hotel lawn as grass; he looks at it as a blank stage waiting for a story.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He personally sits with the 3D designers and head carpenters to ensure that the scale and the finishing of the thematic elements match the grandeur of the client's vision perfectly.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0F766E]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Creative Process</h2>
          
          <div className="space-y-24 border-l border-[#2DD4BF]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Storyboarding", desc: "Understanding the couple's personality to invent a completely unique theme concept.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "3D Visualization", desc: "Generating hyper-realistic 3D renders so you can walk through the venue virtually before we build it.", img: "/premium_events/luxury_wedding_mandap.webp" },
            { title: "Workshop Fabrication", desc: "Our carpenters and artisans spend weeks building the custom arches and props off-site.", img: "/premium_events/outdoor_garden_wedding.webp" },
            { title: "The Transformation", desc: "Installing the entire set in under 24 hours at the venue, complete with intelligent lighting.", img: "/premium_events/luxury_dining_setup.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#2DD4BF] shadow-[0_0_15px_#2DD4BF]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#2DD4BF] block mb-2">Phase 0{idx + 1}</span>
                    <h3 className="font-['The_Seasons'] text-4xl md:text-5xl mb-4">{stage.title}</h3>
                    <p className="font-sans text-gray-400 font-light text-lg leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg border border-white/10">
                    <Image src={stage.img} alt={stage.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. THE ART OF CURATION */}
      <section className="py-32 px-6 bg-[#042F2E] text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover opacity-50 grayscale" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">The Perfect Illusion</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            The secret to a great theme isn't just large props; it's the lighting. We program intelligent moving heads to cast shadows and highlights that make the artificial structures look ancient and real.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#042F2E] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Visual <span className="font-['Amandine'] text-[#2DD4BF]">Spectacles</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/theme_wedding_setup.webp", 
            "/premium_events/luxury_wedding_mandap.webp", 
            "/premium_events/outdoor_garden_wedding.webp", 
            "/premium_events/luxury_dining_setup.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#0F766E] to-[#042F2E] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/bharatpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#5EEAD4] mb-8 block">Client Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "They turned a boring hotel banquet hall into a mystical Sufi courtyard. The mirrors, the massive lamps, the custom fragrance—it felt like we walked onto a Bollywood movie set."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Neha & Siddharth</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Sufi Sangeet, Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#0F766E]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "100+", label: "Sets Fabricated" },
            { num: "100%", label: "Custom Built" },
            { num: "3D", label: "Render Accuracy" },
            { num: "Zero", label: "Copy Paste" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#2DD4BF] mb-4">{stat.num}</h3>
              <p className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. THE WHITE-GLOVE PROMISE (Deliverables) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#042F2E] text-white">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-['Runiga'] text-6xl text-white mb-6">Our Promise</h2>
            <p className="font-sans text-gray-400 leading-relaxed">
              We never reuse a custom theme. Your wedding design will be 100% unique to you, built from scratch, and dismantled after the event.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Bespoke 3D Concept Renders", "Custom Stage & Mandap Carpentry", 
              "Immersive Light Programming", "Thematic Props & Artifacts",
              "Matched Table Centerpieces", "Uniformed Thematic Staff",
              "Scent & Aroma Styling", "Live Artists Matching Theme"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#2DD4BF] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#115E59] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#5EEAD4] mb-4">Design Tiers</h2>
            <p className="font-sans text-gray-300 font-light text-xl">Levels of thematic immersion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#0F766E]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#5EEAD4] transition-colors">The Aesthetic Shift</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Color & Floral Based</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Strong color palette lock (e.g. Ivory & Gold)</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Matching floral arrangements</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Customized entrance arches</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Basic ambient lighting washes</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#0F766E]/80 p-10 relative bg-gradient-to-b from-[#0F766E]/40 to-[#042F2E] transform md:-translate-y-4 shadow-[0_0_30px_rgba(15,118,110,0.2)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#2DD4BF] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">High Impact</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#5EEAD4]">The Immersive Theme</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-300 uppercase tracking-widest mb-8">Full Venue Styling</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-200 mb-10">
                <li className="flex gap-3"><span className="text-[#5EEAD4]">✦</span> 3D Renders & Custom Stage Carpentry</li>
                <li className="flex gap-3"><span className="text-[#5EEAD4]">✦</span> Heavy prop usage (Statues, Fountains)</li>
                <li className="flex gap-3"><span className="text-[#5EEAD4]">✦</span> Draping & full ceiling treatments</li>
                <li className="flex gap-3"><span className="text-[#5EEAD4]">✦</span> Programmed intelligent lighting cues</li>
                <li className="flex gap-3"><span className="text-[#5EEAD4]">✦</span> Thematic centerpieces and table styling</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#0F766E]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#5EEAD4] transition-colors">The Grand Production</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Theatrical Build</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Massive architectural set construction</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Complete venue masking and flooring</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Live actors and thematic performers</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Sensory design (Aroma, SFX, Smoke)</li>
                <li className="flex gap-3"><span className="text-[#2DD4BF]">✦</span> Dedicated thematic food presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. THE ULTIMATE FAQ (Interactive Dropdowns) */}
      <section className="py-32 bg-[#042F2E] px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-white mb-4">Common Questions</h2>
            <p className="font-['Rekalgera'] text-[#2DD4BF] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "How long does it take to build a custom theme?", a: "For a 'Grand Production' level theme, the design phase takes 3-4 weeks, off-site workshop fabrication takes 1-2 weeks, and on-site installation requires a minimum of 24 to 48 hours." },
              { q: "Can we combine elements from two different themes?", a: "Absolutely. We call this 'Fusion'. For example, blending 'Boho-Chic' with 'Traditional Rajasthani' to create a very modern, Pinterest-worthy Haldi setup." },
              { q: "Do themes look cheap or artificial in daylight?", a: "Poorly executed themes look artificial. We use high-quality matte paints, actual wood, real brass, and premium fabrics so that even in harsh daylight, the set looks like authentic architecture." },
              { q: "What happens to the set after the wedding?", a: "It is completely dismantled by our team within 12 hours. We recycle the structural woods and responsibly dispose of or compost the floral elements." },
              { q: "Do you arrange thematic artists and entertainment?", a: "Yes. If you have a 'Sufi' theme, we don't just put up lamps. We book whirling dervishes, authentic Qawwali singers, and live flute players to complete the illusion." }
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
          <span className="font-['Runiga'] text-3xl text-white">VOGUE</span>
          <span className="font-['The_Seasons'] text-3xl text-white">WEDMEGOOD</span>
          <span className="font-['Runiga'] text-3xl text-white">HARPER'S</span>
          <span className="font-['The_Seasons'] text-3xl text-white">WEDDING SUTRA</span>
        </div>
      </section>

      {/* 19. THE FINAL CTA & SIGNATURE */}
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#042F2E] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/bharatpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#5EEAD4] leading-[0.8] mb-16 mix-blend-lighten">
            Build Your<br />World.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#0F766E] to-[#042F2E] border border-teal-900/50 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(15,118,110,0.3)]"
          >
            Start Designing
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-[0.03]">
          <span className="font-['Medino'] text-[150px] md:text-[300px] lg:text-[500px] text-white whitespace-nowrap select-none">
            Yash Soni
          </span>
        </div>
      </section>

      {/* 20. THE ECOSYSTEM INTERLINKS */}
      <section className="py-20 bg-[#042F2E] px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-['The_Seasons'] text-4xl text-white mb-12">More Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Haldi Decor", url: "/haldi-decoration-jaipur" },
              { label: "Sangeet Decor", url: "/sangeet-decoration-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-gray-400 hover:text-white uppercase tracking-widest text-[10px] md:text-xs border border-white/10 px-6 py-3 hover:border-gray-500 hover:shadow-[0_5px_15px_rgba(15,118,110,0.1)] transition-all duration-300">
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
            Top theme wedding organizer in India. Anchor Yash Soni provides bespoke 3D set fabrication, thematic decor, and immersive destination wedding designs across Jaipur, Udaipur, and Rajasthan. Best theme wedding agency execution managed by Anchor Yash Soni.
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
