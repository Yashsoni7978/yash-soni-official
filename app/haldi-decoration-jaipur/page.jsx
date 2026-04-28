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

export default function HaldiDecorationJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/haldi_ceremony_decor.webp",
    "/premium_events/theme_wedding_setup.webp",
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
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      
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
                alt="Haldi Decoration"
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
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#B45309]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#B45309] text-xs md:text-sm mb-6 block">
            The Golden Morning
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Beautiful Haldi Decor</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#D4AF37] mb-10">Yellow themes, marigolds, and sunny courtyards</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#B45309] to-[#78350F] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(180,83,9,0.4)]">
            Design Your Haldi
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#D4AF37]/30 bg-gradient-to-r from-[#B45309] to-[#78350F]">
        <div className="absolute inset-0 opacity-20 bg-[url('/jaisalmer.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Fresh Flowers
            </span>
            <span className="hidden md:block text-[#D4AF37] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#D4AF37] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Bright Themes
            </span>
            <span className="hidden md:block text-[#D4AF37] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Family Fun
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#D4AF37] mb-6 block">A Bright Beginning</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">Haldi is the happiest pre-wedding function. We make it colorful.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">From massive marigold installations to playful colour bombs and floral jewelry, we handle the entire Haldi decor so you can focus on making messy, beautiful memories.</p>
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
              <Image src="/premium_events/haldi_ceremony_decor.webp" alt="Haldi Decor" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/traditional_phoolon_ki_chaadar.webp" alt="Traditional Entry" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/theme_wedding_setup.webp" alt="Haldi Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">"Haldi is not just a ceremony, it's the beautiful, <span className="text-[#B45309]">messy beginning</span> of your married life."</p>
        </motion.div>
      </section>

      {/* 6. HALDI CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Haldi Styles</h2>
            <Link href="/locations" className="font-sans text-[#B45309] font-medium hover:underline">View all Styles &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#FFF8E1] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Marigold Decor ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Genda Phool, Yellow Curtains</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/haldi_ceremony_decor.webp" alt="Marigold" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#FBE9E7] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Haldi Props ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Brass Tubs, Colour Bombs, Games</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Props" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#E0F2F1] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Floral Jewelry ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Custom fresh flower sets</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/traditional_phoolon_ki_chaadar.webp" alt="Jewelry" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#F3E5F5] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-1">Artist & Music ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600">Dhol players, folk singers</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-white mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Music" fill className="object-cover" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Event Elements</h2>
            <p className="font-['Amandine'] text-4xl text-[#B45309] mt-2">What we bring to your Haldi</p>
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
                <Image src="/premium_events/haldi_ceremony_decor.webp" alt="Floral Setup" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-[#1A1A1A] mb-4">Floral Mandaps</h3>
                <p className="font-sans text-lg text-gray-500 max-w-md">
                  We create massive, beautiful sitting areas covered entirely in fresh yellow and orange flowers.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#B45309] to-[#78350F]">
              <div className="absolute inset-0 opacity-20 bg-[url('/jaisalmer.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Props" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Fun & Props
                </h3>
                <p className="font-sans text-lg text-gray-200 font-light max-w-md">
                  Brass tubs for the groom, colour smoke bombs, sunglasses, and fun signboards for photos.
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
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Marigold Setup</span>
              <span className="text-[#B45309] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Phoolon Ki Holi</span>
              <span className="text-[#B45309] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Brass Tubs</span>
              <span className="text-[#B45309] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Colour Bombs</span>
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
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#B45309] to-[#78350F] p-8 text-[#FAF9F6] rounded-tl-3xl">
              <div className="absolute inset-0 opacity-20 bg-[url('/jaisalmer.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">900+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Haldi Mornings</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#B45309] mb-4 block">The Fun Anchor</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              Haldi is all about fun, laughter, and family banter. Yash knows exactly how to get the aunties dancing and the cousins playing haldi games.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              He organizes the entire flow so the ceremony moves smoothly, the photos look perfect, and everyone is having the time of their lives.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B45309]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Haldi Flow</h2>
          
          <div className="space-y-24 border-l border-[#D4AF37]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "The Beautiful Setup", desc: "Guests arrive to a stunning yellow and orange floral courtyard.", img: "/premium_events/haldi_ceremony_decor.webp" },
            { title: "The Fun Games", desc: "Yash gets the family involved in light-hearted wedding games.", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "The Haldi application", desc: "The traditional ceremony, with dhol players keeping the energy high.", img: "/premium_events/traditional_phoolon_ki_chaadar.webp" },
            { title: "Phoolon Ki Holi", desc: "A massive flower petal shower with everyone dancing.", img: "/premium_events/grand_wedding_venue.webp" }
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
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Colorful Details</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            From making sure the haldi paste is organic to providing cute matching sunglasses for the cousins, we handle everything.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Beautiful <span className="font-['Amandine'] text-[#B45309]">Moments</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/haldi_ceremony_decor.webp", 
            "/premium_events/theme_wedding_setup.webp", 
            "/premium_events/traditional_phoolon_ki_chaadar.webp", 
            "/premium_events/outdoor_garden_wedding.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#B45309] to-[#78350F] text-[#FAF9F6] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/jaisalmer.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#D4AF37] mb-8 block">What People Say</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "The Haldi decor was so bright and beautiful! Yash's anchoring kept everyone laughing and playing. The 'Phoolon ki Holi' was the highlight of our wedding."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">The Sharma Family</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Taj Amer, Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "900+", label: "Haldi Events" },
            { num: "50k+", label: "Flowers Used" },
            { num: "500+", label: "Colour Bombs" },
            { num: "100%", label: "Pure Fun" }
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
              We provide everything you need for a stunning and fun haldi ceremony. Just show up and enjoy the morning.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Fresh Flower Mandaps", "Brass Tubs & Urlis", 
              "Organic Haldi Paste", "Floral Jewelry for Bride",
              "Dhol Players", "Colour Smoke Bombs",
              "Fun Signboards & Props", "Family Games"
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#D4AF37] mb-4">Haldi Packages</h2>
            <p className="font-sans text-gray-400 font-light text-xl">Packages made just for your morning celebrations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 group rounded-lg">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#D4AF37] transition-colors">The Classic Haldi</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Simple & Sweet</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Basic yellow and white draping</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Seating area for the couple</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Background music speaker</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Basic Haldi props</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#D4AF37]/50 p-10 relative bg-gradient-to-b from-[#B45309]/20 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.1)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#D4AF37]">The Grand Morning</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Fun & Vibrant</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Massive Marigold flower setup</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Brass tub for the groom</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Professional Dhol players</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Phoolon ki Holi (Flower shower)</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Colour smoke bombs</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 group rounded-lg">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#D4AF37] transition-colors">The Palace Haldi</h3>
              <p className="font-['Rekalgera'] text-xs text-white/40 uppercase tracking-widest mb-8">Luxury Setup</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-400 mb-10">
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Full courtyard floral covering</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Live folk singers and dancers</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Custom floral jewelry for bride</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Massive photo booth setups</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">✦</span> Organic customized haldi mix</li>
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
              { q: "Can we have a combined Haldi for both Bride and Groom?", a: "Yes! Combined Haldi ceremonies are very popular now. We set up two beautiful seating areas or one large brass tub setup so the whole family can celebrate together." },
              { q: "Do you arrange the Phoolon Ki Holi (Flower Holi)?", a: "Absolutely. We bring baskets of fresh, organic rose and marigold petals for the family to throw. It makes for amazing photographs!" },
              { q: "Do you provide floral jewelry for the bride?", a: "Yes, we work with specialized vendors to create fresh, custom-designed floral jewelry sets that match the bride's outfit perfectly." },
              { q: "Are the colour smoke bombs safe?", a: "Yes, we only use high-quality, non-toxic colour smoke bombs that are completely safe for outdoor use and do not stain clothes permanently." },
              { q: "Can you arrange traditional Rajasthani folk dancers?", a: "Yes, we can book authentic Manganiyar singers, Kalbelia dancers, or just energetic Dhol players to keep the vibe traditional and fun." }
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
        <div className="absolute inset-0 opacity-20 bg-[url('/jaisalmer.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#D4AF37] leading-[0.8] mb-16 mix-blend-lighten">
            Let's Get<br />Yellow.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#B45309] to-[#78350F] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(180,83,9,0.4)]"
          >
            Start The Fun
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
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Artist Management", url: "/artist-management-jaipur" },
              { label: "Wedding Decor", url: "/wedding-decoration-jaipur" },
              { label: "Sangeet Decor", url: "/sangeet-decoration-jaipur" }
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
            Hire the best haldi decoration in Jaipur. Anchor Yash Soni and team organize flawless Haldi ceremonies, marigold decor, and floral setups across Rajasthan. Best haldi ceremony planner execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations.
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
