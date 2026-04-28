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

export default function GalaDinnerEventPlanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/luxury_dining_setup.webp",
    "/premium_events/corporate_gala_setup.webp",
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
                alt="Gala Dinner Planner"
                fill
                className="object-cover object-top opacity-60"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-[#020617]/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#3B82F6]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#93C5FD] text-xs md:text-sm mb-6 block">
            Executive Hospitality
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Gala Dinners</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#60A5FA] mb-10">High-end corporate sit-downs and award nights</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#1E3A8A] to-[#172554] border border-blue-900 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)]">
            Plan Your Gala
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#3B82F6]/30 bg-gradient-to-r from-[#1E3A8A] to-[#172554]">
        <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              White-Glove Service
            </span>
            <span className="hidden md:block text-[#93C5FD] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#93C5FD] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Menu Curation
            </span>
            <span className="hidden md:block text-[#93C5FD] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              VVIP Protocol
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#3B82F6] mb-6 block">The Dining Experience</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">Corporate luxury is defined at the dinner table.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">A gala dinner is more than feeding 500 delegates. It is about precision timing. It is ensuring the CEO's speech aligns perfectly with dessert service, that the brass band isn't too loud during networking, and that the VVIP tables receive flawless white-glove attention.</p>
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
              <Image src="/premium_events/luxury_dining_setup.webp" alt="Sit Down Dinner" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/corporate_gala_setup.webp" alt="Corporate Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/grand_wedding_venue.webp" alt="Banquet Lighting" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"Excellence is not an act, it is a <span className="text-[#3B82F6]">habit of service</span>."</p>
        </motion.div>
      </section>

      {/* 6. GALA FORMATS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F172A] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Event Formats</h2>
            <Link href="/corporate-event-management-company" className="font-sans text-[#60A5FA] font-medium hover:underline">Corporate Hub &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#1E3A8A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Award Nights ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Trophies, speeches & stage flow</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#1E3A8A] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Awards" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#172554] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#3B82F6]/50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#93C5FD] mb-1">Sit-Down Plated ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">7-course meals & wine pairing</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#172554] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Sit Down" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#1D4ED8] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Fundraisers ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-200">Auctions & high-net-worth protocol</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#1D4ED8] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Fundraisers" fill className="object-cover" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#0F172A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#60A5FA] mb-1">Networking Mixers ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Cocktails, jazz & open layouts</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#0F172A] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Mixers" fill className="object-cover" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">Hospitality Tech</h2>
            <p className="font-['Amandine'] text-4xl text-[#3B82F6] mt-2">Managing the VVIP experience</p>
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
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Table Mapping" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">Table Mapping</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  Digital seating charts ensure that rival competitors don't sit together, VIPs are near the stage, and dietary requirements are mapped perfectly to the chair.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1E3A8A] to-[#172554]">
              <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Show Directing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  Show Directing
                </h3>
                <p className="font-sans text-lg text-[#93C5FD] font-light max-w-md">
                  Running the console. Cueing the walk-on music when the CEO steps up, dimming the lights during dinner, and triggering the pyro for the final award.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#3B82F6]/30">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Menu Curation</span>
              <span className="text-[#3B82F6] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Wine Pairing</span>
              <span className="text-[#3B82F6] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Security Details</span>
              <span className="text-[#3B82F6] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Speaker Management</span>
              <span className="text-[#3B82F6] text-4xl">✦</span>
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
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#1E3A8A] to-[#172554] p-8 text-[#FAF9F6] rounded-tl-3xl border-t border-l border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">Corporate</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Protocol</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#3B82F6] mb-4 block">The Corporate Head</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              Having hosted hundreds of corporate galas, Yash knows the distinct difference between a social party and a corporate summit.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              A gala requires protocol. It requires knowing how to seat board members, how to manage press, and how to execute a rigid timeline without making the guests feel rushed.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Gala Blueprint</h2>
          
          <div className="space-y-24 border-l border-[#60A5FA]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Venue & F&B Selection", desc: "Locking in premium 5-star banquets and arranging multi-course tasting sessions with the executive chefs.", img: "/premium_events/luxury_dining_setup.webp" },
            { title: "Technical Drafting", desc: "Designing the stage, LED walls, and ensuring the audio system is tuned perfectly for speech clarity.", img: "/premium_events/corporate_gala_setup.webp" },
            { title: "Entertainment Curation", desc: "Booking sophisticated jazz bands, illusionists, or celebrity speakers that align with corporate guidelines.", img: "/premium_events/celebrity_artist_stage.webp" },
            { title: "Live Show Calling", desc: "Our directors run the timeline, cueing videos, lighting changes, and speeches down to the second.", img: "/premium_events/grand_wedding_venue.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#60A5FA] shadow-[0_0_15px_#60A5FA]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#93C5FD] block mb-2">Phase 0{idx + 1}</span>
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
      <section className="py-32 px-6 bg-[#020617] text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover opacity-50 grayscale" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">The Invisible Service</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            The best event management is completely invisible to the guests. Plates disappear right as they finish, glasses are refilled without asking, and the next speaker is at the microphone right as the applause dies down.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#020617] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Gala <span className="font-['Amandine'] text-[#3B82F6]">Executions</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/corporate_gala_setup.webp", 
            "/premium_events/luxury_dining_setup.webp", 
            "/premium_events/grand_wedding_venue.webp", 
            "/premium_events/celebrity_artist_stage.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#1E3A8A] to-[#172554] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/kota.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#93C5FD] mb-8 block">Corporate Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "They elevated our annual awards night from a standard hotel dinner to a Grammy-level production. The stage flow was tight, the food was exquisite, and the VIP board members were extremely impressed."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">VP of Operations</span>
          <span className="font-sans text-sm text-white/60 block mt-2">National Finance Summit</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#3B82F6]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "200+", label: "Galas Hosted" },
            { num: "10K+", label: "Plates Served" },
            { num: "100%", label: "Brand Compliant" },
            { num: "Zero", label: "Protocol Errors" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#3B82F6] mb-4">{stat.num}</h3>
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
              We protect your brand. From the way the security staff speaks to guests, to the font used on the LED walls, everything will align perfectly with your corporate identity.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Corporate Venue Sourcing", "VVIP & Security Clearances", 
              "Digital RSVP & Check-in Desks", "Stage Teleprompters & A/V Tech",
              "Custom F&B & Dietary Mapping", "Award Trophy Fabrication",
              "Brand Activation Corridors", "Live Show Directing"
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
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#93C5FD] mb-4">Gala Formats</h2>
            <p className="font-sans text-gray-300 font-light text-xl">Structures tailored to your audience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#3B82F6]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#60A5FA] transition-colors">The Cocktail Mixer</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Fluid & Networking</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> High-top tables and lounge clusters</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Heavy pass-around appetizers</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Premium mixology bars</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Ambient jazz or acoustic background music</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#3B82F6]/80 p-10 relative bg-gradient-to-b from-[#1E3A8A]/40 to-[#020617] transform md:-translate-y-4 shadow-[0_0_30px_rgba(59,130,246,0.2)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#3B82F6] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Formal</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#93C5FD]">The Plated Banquet</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-300 uppercase tracking-widest mb-8">Structured Seating</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-200 mb-10">
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Strict digital table mapping & RSVPs</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> 5-course synchronized plated service</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Main stage with podium and LED backdrop</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Highly regimented speech & award timeline</li>
                <li className="flex gap-3"><span className="text-[#93C5FD]">✦</span> Dedicated white-glove servers per table</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#3B82F6]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#60A5FA] transition-colors">The Grand Gala</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Entertainment Focus</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Massive arena or outdoor tent setups</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> High-end buffet islands to manage crowds</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Celebrity performances and concert-level tech</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Extensive brand activation zones</li>
                <li className="flex gap-3"><span className="text-[#3B82F6]">✦</span> Elaborate stage builds and pyrotechnics</li>
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
            <p className="font-['Rekalgera'] text-[#3B82F6] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Can you manage complex dietary requirements for 500+ guests?", a: "Yes. Our RSVP team collects dietary restrictions weeks in advance. We provide the hotel chef with an exact matrix of tables and seat numbers for vegan, gluten-free, or allergy-specific plates." },
              { q: "Do you handle the A/V tech for presentations?", a: "Absolutely. A gala relies heavily on tech. We provide high-resolution LED walls, teleprompters for executives, lapel mics, and dedicated switchers to run PowerPoint presentations seamlessly." },
              { q: "How do you manage check-in for large corporate events?", a: "We deploy digital check-in desks with iPads, QR code scanning, and instant badge printing to ensure the lobby doesn't get choked during peak arrival times." },
              { q: "Can you book celebrity performers or keynote speakers?", a: "Yes, our Artist Management division handles direct contracting, travel riders, and security protocols for A-list celebrities, musicians, and industry keynote speakers." },
              { q: "Do you provide customized awards and trophies?", a: "Yes, our fabrication unit can design and create bespoke awards, acrylic trophies, and branded memorabilia tailored to your company's aesthetic." }
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
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#93C5FD] leading-[0.8] mb-16 mix-blend-lighten">
            Host The<br />Elite.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#172554] border border-blue-900 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(30,58,138,0.3)]"
          >
            Plan Your Gala
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
              { label: "Corporate Event Management", url: "/corporate-event-management-company" },
              { label: "Event Planning", url: "/event-planning-jaipur" },
              { label: "Artist Management", url: "/artist-management-jaipur" },
              { label: "Corporate Anchor", url: "/corporate-event-anchor-jaipur" }
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
            Top gala dinner event planner in Jaipur. Anchor Yash Soni provides complete white-glove hospitality, corporate venue sourcing, precision show calling, and executive dining logistics for high-end corporate summits and award nights across Rajasthan. Best gala event management agency execution managed by Anchor Yash Soni.
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
