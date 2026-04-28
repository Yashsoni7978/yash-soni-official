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

export default function SangeetDecorationJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/modern_sangeet_stage.webp",
    "/premium_events/celebrity_artist_stage.webp",
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
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#4C1D95] selection:text-white">
      
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
                alt="Sangeet Decoration Jaipur"
                fill
                className="object-cover object-top opacity-70"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-black/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#8B5CF6]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#C4B5FD] text-xs md:text-sm mb-6 block">
            The Night of Rhythm
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Sangeet Decor</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#A78BFA] mb-10">Neon lights, massive LED stages, and cocktail lounges</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#4C1D95] to-[#2E1065] border border-purple-900/50 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(76,29,149,0.4)]">
            Light Up The Night
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#8B5CF6]/30 bg-gradient-to-r from-[#4C1D95] to-[#1E1B4B]">
        <div className="absolute inset-0 opacity-10 bg-[url('/bikaner.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              P3 LED Walls
            </span>
            <span className="hidden md:block text-[#C4B5FD] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#C4B5FD] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Custom Neon Signs
            </span>
            <span className="hidden md:block text-[#C4B5FD] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Intelligent Lighting
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0F172A] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#A78BFA] mb-6 block">The Vibe Check</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">A Sangeet isn't just an event; it's a concert celebrating your family.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">The Sangeet is where the energy peaks. We move away from traditional florals and step into high-tech production. From pixel-mapped dance floors and massive curved LED stage backgrounds to intimate cocktail lounges with velvet furniture and custom neon branding, we build nightclubs from scratch.</p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK */}
      <section className="py-20 w-full bg-[#0F172A] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/modern_sangeet_stage.webp" alt="Sangeet Stage" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/celebrity_artist_stage.webp" alt="Artist Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/luxury_dining_setup.webp" alt="Cocktail Lounge" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MANIFESTO */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#0F172A]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"We don't just put up lights. We <span className="text-[#8B5CF6]">program the energy</span> of the room."</p>
        </motion.div>
      </section>

      {/* 6. SANGEET CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1E1B4B] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Sangeet Aesthetics</h2>
            <Link href="/locations" className="font-sans text-[#A78BFA] font-medium hover:underline">View Designs &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#2E1065] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Modern Club ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">LED arrays, smoke & lasers</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#2E1065] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Club" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#3B0764] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Retro Disco ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Mirror balls, vinyls & neons</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#3B0764] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Retro" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#4C1D95] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#8B5CF6]/50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#C4B5FD] mb-1">Sufi Night ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Diyas, Moroccan lamps & drapes</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#4C1D95] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Sufi" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#0F172A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">The Award Show ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Red carpet, media walls & podiums</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#0F172A] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Awards" fill className="object-cover" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">Stage Architecture</h2>
            <p className="font-['Amandine'] text-4xl text-[#A78BFA] mt-2">The mechanics of a great party</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#1E1B4B] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-white/5">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/modern_sangeet_stage.webp" alt="Stage Production" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">A/V & Pixel Mapping</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  We sync the LED screen graphics with the intelligent lighting rig, creating a visual explosion when the beat drops.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(139,92,246,0.2)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#4C1D95] to-[#2E1065]">
              <div className="absolute inset-0 opacity-10 bg-[url('/bikaner.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Bar Setup" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  The Island Bar
                </h3>
                <p className="font-sans text-lg text-[#C4B5FD] font-light max-w-md">
                  A massive 360-degree illuminated central bar. It becomes the anchor of the venue where everyone gathers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#4C1D95]/30">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Neon Tunnels</span>
              <span className="text-[#8B5CF6] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Laser Arrays</span>
              <span className="text-[#8B5CF6] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Smoke Machines</span>
              <span className="text-[#8B5CF6] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Printed Floors</span>
              <span className="text-[#8B5CF6] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#4C1D95] to-[#2E1065] p-8 text-[#FAF9F6] rounded-tl-3xl border-t border-l border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/bikaner.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">200+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Sangeets Hosted</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#A78BFA] mb-4 block">The Sangeet Specialist</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              As India's premier Sangeet Anchor, Yash has spent thousands of hours on Sangeet stages. He knows exactly where the screens should be, how big the dance floor needs to be, and where the bar should be placed to keep the party flowing.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              His decor designs are engineered specifically to enhance the performances and the photography.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4C1D95]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Sangeet Setup</h2>
          
          <div className="space-y-24 border-l border-[#8B5CF6]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Floor Plan & Flow", desc: "Positioning the stage, the VIP lounge, and the bar so the crowd naturally gravitates toward the dance floor.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "Trussing & Tech", desc: "Erecting the massive aluminum trusses to hang the line-array speakers and moving head lights.", img: "/premium_events/modern_sangeet_stage.webp" },
            { title: "Graphic Programming", desc: "Creating custom visuals, family name logos, and motion graphics for the LED walls.", img: "/premium_events/celebrity_artist_stage.webp" },
            { title: "The Sound Check", desc: "Testing the microphones, subs, and monitors so there is zero feedback during speeches or dances.", img: "/premium_events/theme_wedding_setup.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#8B5CF6] shadow-[0_0_15px_#8B5CF6]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#A78BFA] block mb-2">Phase 0{idx + 1}</span>
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
      <section className="py-32 px-6 bg-[#0F172A] text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover opacity-50 grayscale" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">The Light Jockey</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            A DJ mixes the sound, but an LJ (Light Jockey) mixes the visuals. We provide dedicated LJs who pulse the strobes and blinders precisely to the beat of the music, creating that authentic concert feel.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#0F172A] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Neon <span className="font-['Amandine'] text-[#A78BFA]">Nights</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/modern_sangeet_stage.webp", 
            "/premium_events/celebrity_artist_stage.webp", 
            "/premium_events/luxury_dining_setup.webp", 
            "/premium_events/theme_wedding_setup.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#4C1D95] to-[#1E1B4B] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/bikaner.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#C4B5FD] mb-8 block">Client Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "They turned the resort lawn into a Tomorrowland stage. The LED screens behind our dance performances made us look like professional Bollywood stars. The energy was insane."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Ria & Karan</span>
          <span className="font-sans text-sm text-white/60 block mt-2">JW Marriott, Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#4C1D95]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "200+", label: "Stages Built" },
            { num: "10K+", label: "SqFt LED Used" },
            { num: "100%", label: "Custom Graphics" },
            { num: "Zero", label: "Mic Drops" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#8B5CF6] mb-4">{stat.num}</h3>
              <p className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. THE WHITE-GLOVE PROMISE (Deliverables) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#0F172A] text-white">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-['Runiga'] text-6xl text-white mb-6">Our Promise</h2>
            <p className="font-sans text-gray-400 leading-relaxed">
              We promise club-quality sound that hits your chest, and lighting that makes every single photo look like an editorial magazine cover.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Massive P3 LED Screens", "JBL/D&B Line Array Sound", 
              "Intelligent Moving Heads", "Custom Neon Branding",
              "Printed Seamless Dance Floors", "Plush Lounge Furniture",
              "CO2 Cannons & Cold Pyros", "Dedicated Light & Sound Engineers"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#8B5CF6] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#1E1B4B] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#A78BFA] mb-4">Production Tiers</h2>
            <p className="font-sans text-gray-300 font-light text-xl">From elegant cocktail nights to full concert setups.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#8B5CF6]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#C4B5FD] transition-colors">The Lounge Setup</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Intimate & Classy</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Wooden stage with floral/fabric backdrop</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Basic DJ sound system</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Standard warm par-can lighting</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Cocktail tables and bar setup</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#8B5CF6]/80 p-10 relative bg-gradient-to-b from-[#4C1D95]/40 to-[#1E1B4B] transform md:-translate-y-4 shadow-[0_0_30px_rgba(139,92,246,0.2)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#8B5CF6] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">The Bestseller</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#C4B5FD]">The Modern Club</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-300 uppercase tracking-widest mb-8">High Energy Sangeet</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-200 mb-10">
                <li className="flex gap-3"><span className="text-[#C4B5FD]">✦</span> 12x8 Ft P3 High-Res LED Screen</li>
                <li className="flex gap-3"><span className="text-[#C4B5FD]">✦</span> Trussing with 8 Moving Head Lights</li>
                <li className="flex gap-3"><span className="text-[#C4B5FD]">✦</span> Printed seamless wooden dance floor</li>
                <li className="flex gap-3"><span className="text-[#C4B5FD]">✦</span> Custom Neon signs & illuminated bar</li>
                <li className="flex gap-3"><span className="text-[#C4B5FD]">✦</span> Cold pyros for couple entry</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#8B5CF6]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#C4B5FD] transition-colors">The Concert Edit</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Festival Scale</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Multi-layered curved LED stage design</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Line Array sound system (Concert level)</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> 20+ Intelligent lights with Light Jockey</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Heavy SFX (CO2, Confetti, Lasers)</li>
                <li className="flex gap-3"><span className="text-[#8B5CF6]">✦</span> Extensive plush velvet VIP lounging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. THE ULTIMATE FAQ (Interactive Dropdowns) */}
      <section className="py-32 bg-[#0F172A] px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-white mb-4">Common Questions</h2>
            <p className="font-['Rekalgera'] text-[#A78BFA] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Do you design graphics for the LED screens?", a: "Yes! Our digital artists create custom motion graphics, family monograms, and animated loops that match the exact theme of your sangeet." },
              { q: "What is a 'Printed Seamless Dance Floor'?", a: "Instead of standard wooden tiles, we lay down a smooth surface and wrap it entirely in a custom-printed vinyl sheet (usually featuring your logo or a geometric pattern). It looks incredibly premium in photos." },
              { q: "Can we have a specific theme for the Sangeet?", a: "Absolutely. Popular themes include 'Awards Night' (with red carpets and media walls), 'Retro Disco', 'Neon Jungle', or 'Sufi Night'. We fabricate the entire setup." },
              { q: "How much power is required for this setup?", a: "A heavy LED and lighting setup requires industrial power. We calculate the exact wattage needed and bring silent heavy-duty generators so the hotel's power grid isn't overloaded." },
              { q: "Are Cold Pyros safe for indoor venues?", a: "We only use certified indoor-safe cold pyrotechnics (sparkulars) that produce zero heat and zero smoke, completely safe for hotel ballrooms." }
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
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#0F172A] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/bikaner.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#A78BFA] leading-[0.8] mb-16 mix-blend-lighten">
            Own The<br />Night.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#4C1D95] to-[#2E1065] border border-purple-900/50 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(76,29,149,0.3)]"
          >
            Design Your Sangeet
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-[0.03]">
          <span className="font-['Medino'] text-[150px] md:text-[300px] lg:text-[500px] text-white whitespace-nowrap select-none">
            Yash Soni
          </span>
        </div>
      </section>

      {/* 20. THE ECOSYSTEM INTERLINKS */}
      <section className="py-20 bg-[#0F172A] px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-['The_Seasons'] text-4xl text-white mb-12">More Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Artist Management", url: "/artist-management-jaipur" },
              { label: "Sangeet Anchor", url: "/sangeet-anchor-jaipur" },
              { label: "Haldi Decor", url: "/haldi-decoration-jaipur" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-gray-400 hover:text-white uppercase tracking-widest text-[10px] md:text-xs border border-white/10 px-6 py-3 hover:border-gray-500 hover:shadow-[0_5px_15px_rgba(76,29,149,0.1)] transition-all duration-300">
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
            Top sangeet decorator in Jaipur. Anchor Yash Soni provides massive LED stage setups, neon themes, intelligent lighting, and premium cocktail lounge decor for luxury destination weddings across Rajasthan. Best sangeet decoration agency execution managed by Anchor Yash Soni.
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
