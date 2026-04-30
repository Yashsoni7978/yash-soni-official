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



export default function EventPlanningJaipur() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroImages = [
    "/premium_events/grand_wedding_venue.webp",
    "/premium_events/corporate_gala_setup.webp",
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
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#334155] selection:text-white">
      
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
                alt="Event Planning Jaipur"
                fill
                className="object-cover object-top opacity-60"
                priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-black/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#94A3B8]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#CBD5E1] text-xs md:text-sm mb-6 block">
            Sophisticated Orchestration
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-white mb-8">Event Planners</h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#94A3B8] mb-10">Curating flawless social and corporate gatherings</p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#475569] to-[#0F172A] border border-slate-700 text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(71,85,105,0.4)]">
            Consult With Us
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full py-8 border-y border-[#64748B]/30 bg-gradient-to-r from-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-10 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Bespoke Design
            </span>
            <span className="hidden md:block text-[#94A3B8] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#94A3B8] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Venue Sourcing
            </span>
            <span className="hidden md:block text-[#94A3B8] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Flawless Execution
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
          <span className="font-['Orange_Avenue'] text-4xl text-[#94A3B8] mb-6 block">The Logistics Experts</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-white leading-tight mb-10">Ideas are easy. Execution is an art form.</h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">Whether you are throwing an intimate anniversary dinner for 50 people or a massive corporate summit for 500, the foundation of a successful event is logistics. We handle the invisible backend—timeline management, vendor coordination, and crisis aversion—so you can actually enjoy the event you paid for.</p>
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
              <Image src="/premium_events/luxury_dining_setup.webp" alt="Dinner Event" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden rounded-lg">
              <Image src="/premium_events/grand_wedding_venue.webp" alt="Venue Setup" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden rounded-lg">
              <Image src="/premium_events/corporate_gala_setup.webp" alt="Corporate Gala" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-white">"We are the <span className="text-[#94A3B8]">architects</span> of unforgettable moments."</p>
        </motion.div>
      </section>

      {/* 6. EVENT CATEGORIES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1E293B] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Runiga'] text-4xl text-white">Our Portfolios</h2>
            <Link href="/anchor-in-rajasthan" className="font-sans text-[#94A3B8] font-medium hover:underline">View All &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="flex items-center bg-[#334155] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Social Events ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Anniversaries & Milestones</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#334155] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Social" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#475569] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/5">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Corporate Meets ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-300">Summits & Dealer Meets</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#475569] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/corporate_gala_setup.webp" alt="Corporate" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#1E293B] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-[#94A3B8]/50">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#CBD5E1] mb-1">Exhibitions ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Trade shows & Launches</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#1E293B] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/celebrity_artist_stage.webp" alt="Exhibitions" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

            <a href="#" className="flex items-center bg-[#0F172A] rounded-r-full hover:shadow-lg transition-shadow overflow-hidden group h-32 md:h-40 border border-white/10">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-white mb-1">Brand Activations ⌵</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400">Product launches & PR</p>
              </div>
              <div className="h-full aspect-square relative rounded-full overflow-hidden border-4 border-[#0F172A] mr-2 group-hover:scale-105 transition-transform">
                <Image src="/premium_events/theme_wedding_setup.webp" alt="Brands" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES BENTO WITH IMAGES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-white">Planning Mastery</h2>
            <p className="font-['Amandine'] text-4xl text-[#94A3B8] mt-2">How we curate perfection</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-all duration-500 border border-white/5">
              <div className="w-full h-64 relative overflow-hidden">
                <Image src="/premium_events/grand_wedding_venue.webp" alt="Venue Sourcing" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4">Venue Sourcing</h3>
                <p className="font-sans text-lg text-gray-400 max-w-md">
                  We have direct connections with top-tier properties in Rajasthan, securing dates and negotiating corporate rates that are otherwise inaccessible.
                </p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(148,163,184,0.1)] flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#334155] to-[#0F172A]">
              <div className="absolute inset-0 opacity-10 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="w-full h-64 relative overflow-hidden z-10">
                <Image src="/premium_events/luxury_dining_setup.webp" alt="Flow Management" fill className="object-cover group-hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-end relative z-10">
                <h3 className="font-['The_Seasons'] text-3xl text-white mb-4 flex items-center gap-4">
                  Flow Management
                </h3>
                <p className="font-sans text-lg text-[#CBD5E1] font-light max-w-md">
                  We engineer the crowd flow. Where they arrive, where they get drinks, and where they sit. A successful event never feels crowded, even when packed.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-black overflow-hidden whitespace-nowrap flex items-center border-y border-[#64748B]/30">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Social Galas</span>
              <span className="text-[#94A3B8] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">PR Events</span>
              <span className="text-[#94A3B8] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Brand Launches</span>
              <span className="text-[#94A3B8] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-white/20 uppercase">Exhibitions</span>
              <span className="text-[#94A3B8] text-4xl">✦</span>
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
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#334155] to-[#0F172A] p-8 text-[#FAF9F6] rounded-tl-3xl border-t border-l border-white/10">
              <div className="absolute inset-0 opacity-10 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
              <span className="font-['Rekalgera'] text-4xl relative z-10">Turnkey</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2 relative z-10">Event Solutions</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#94A3B8] mb-4 block">The Principal Planner</span>
            <Link href="/about" className="hover:opacity-80 transition-opacity"><h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Anchor Yash Soni</h2></Link>
            <p className="font-sans text-xl text-gray-400 font-light leading-relaxed mb-8">
              Yash brings a level of obsessive detail to event planning that stems from his years on stage. He knows that an event is only as strong as its weakest vendor.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              By controlling the entire process—from design and tech to F&B and artist booking—he ensures a seamless experience where the client does nothing but enjoy.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 10. CURATED STAGES OF CELEBRATION (Timeline) */}
      <section className="py-32 bg-black text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#64748B]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Planning Phases</h2>
          
          <div className="space-y-24 border-l border-[#94A3B8]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
            { title: "Briefing & Concept", desc: "Understanding the objective of your event. Is it a relaxed networking mixer, or a high-energy product launch?", img: "/premium_events/theme_wedding_setup.webp" },
            { title: "Vendor Locking", desc: "Sourcing the exact caterers, decorators, and technicians required to execute the specific concept.", img: "/premium_events/grand_wedding_venue.webp" },
            { title: "The Master Itinerary", desc: "Building a minute-by-minute run sheet detailing where every vendor, guest, and speaker needs to be.", img: "/premium_events/corporate_gala_setup.webp" },
            { title: "On-site Directing", desc: "Our team takes over the venue, running the show from the console so you can focus on your guests.", img: "/premium_events/luxury_dining_setup.webp" }
          ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#94A3B8] shadow-[0_0_15px_#94A3B8]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#CBD5E1] block mb-2">Phase 0{idx + 1}</span>
                    <h3 className="font-['The_Seasons'] text-4xl md:text-5xl mb-4">{stage.title}</h3>
                    <p className="font-sans text-gray-400 font-light text-lg leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg border border-white/10">
                    <Image src={stage.img} alt={stage.title} fill className="object-cover hover:scale-105 transition-transform duration-700"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-white mb-8">Crisis Management</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Planning is predicting. We build buffer times into every schedule, secure backup generators for every power grid, and have secondary vendors on standby.
          </p>
        </motion.div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll) */}
      <section className="py-32 bg-[#0F172A] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-white">Event <span className="font-['Amandine'] text-[#94A3B8]">Portfolios</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/premium_events/grand_wedding_venue.webp", 
            "/premium_events/corporate_gala_setup.webp", 
            "/premium_events/luxury_dining_setup.webp", 
            "/premium_events/theme_wedding_setup.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt="Gallery" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-[#FAF9F6] relative border-y border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#CBD5E1] mb-8 block">Client Feedback</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "They took complete ownership of our company's anniversary gala. From curating the menu to handling the celebrity artist's technical riders, the execution was flawless."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">Marketing Director</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Jaipur Tech Hub</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-black border-b border-[#64748B]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "400+", label: "Events Planned" },
            { num: "50+", label: "Venue Partners" },
            { num: "100%", label: "Turnkey Focus" },
            { num: "Zero", label: "Stress" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="font-['Runiga'] text-5xl md:text-7xl text-[#94A3B8] mb-4">{stat.num}</h3>
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
              We promise transparent budgeting. You will always know exactly where every rupee of your event budget is going.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "End-to-end Concept Design", "Comprehensive Budget Management", 
              "Contract & Venue Negotiation", "Custom Catering Curation",
              "RSVP & Guest Hospitality", "Entertainment Booking",
              "Technical A/V Production", "On-site Show Calling"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#94A3B8] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE SIGNATURE PACKAGES */}
      <section className="py-24 bg-[#1E293B] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#CBD5E1] mb-4">Planning Tiers</h2>
            <p className="font-sans text-gray-300 font-light text-xl">Models tailored to your requirements.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-white/10 p-10 hover:border-[#64748B]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#94A3B8] transition-colors">Event Coordination</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Month-Of Execution</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> You book the vendors and venue</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> We step in 4 weeks prior</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> Create the master timeline</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> Full on-ground management</li>
              </ul>
            </div>
            {/* Tier 2 */}
            <div className="border border-[#64748B]/80 p-10 relative bg-gradient-to-b from-[#334155]/40 to-[#0F172A] transform md:-translate-y-4 shadow-[0_0_30px_rgba(100,116,139,0.2)] rounded-lg">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#94A3B8] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Comprehensive</div>
              <h3 className="font-['The_Seasons'] text-3xl mb-2 text-[#CBD5E1]">Full Service Planning</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-300 uppercase tracking-widest mb-8">A to Z Management</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-200 mb-10">
                <li className="flex gap-3"><span className="text-[#CBD5E1]">✦</span> Sourcing and negotiating the venue</li>
                <li className="flex gap-3"><span className="text-[#CBD5E1]">✦</span> Curating all vendors (Decor, Tech, F&B)</li>
                <li className="flex gap-3"><span className="text-[#CBD5E1]">✦</span> Managing RSVPs and guest logistics</li>
                <li className="flex gap-3"><span className="text-[#CBD5E1]">✦</span> Artist booking and show direction</li>
                <li className="flex gap-3"><span className="text-[#CBD5E1]">✦</span> Complete transparent budgeting</li>
              </ul>
            </div>
            {/* Tier 3 */}
            <div className="border border-white/10 p-10 hover:border-[#64748B]/50 transition-colors duration-500 group rounded-lg bg-black/30">
              <h3 className="font-['The_Seasons'] text-3xl mb-2 group-hover:text-[#94A3B8] transition-colors">Special Projects</h3>
              <p className="font-['Rekalgera'] text-xs text-gray-400 uppercase tracking-widest mb-8">Bespoke Curation</p>
              <ul className="space-y-4 font-sans font-light text-sm text-gray-300 mb-10">
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> VIP & Celebrity management</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> Highly complex structural builds</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> Remote destination logistics</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> Intense security & protocol management</li>
                <li className="flex gap-3"><span className="text-[#94A3B8]">✦</span> Brand PR & Media handling</li>
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
            <p className="font-['Rekalgera'] text-[#94A3B8] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "Do you plan events other than weddings?", a: "Yes, we handle corporate galas, high-end social anniversaries, grand brand launches, and large-scale exhibitions." },
              { q: "How do you handle vendor selection?", a: "We have an internal roster of vetted, premium vendors. However, if you have a specific photographer or makeup artist you prefer, we are completely open to working with them." },
              { q: "Is your pricing transparent?", a: "100%. We charge a dedicated agency management fee. Every invoice from the hotel, decorator, or artist is shared with you at the actual cost. We do not take hidden cuts." },
              { q: "Can you help secure permissions for late-night events?", a: "Yes, our logistics team handles all necessary PPL licenses, liquor permits, and local administrative permissions required for your event." },
              { q: "How large is your team on the day of the event?", a: "It scales with the event. For a 300-guest social event, we deploy a core management team of 8-12 professionals, excluding the labor and technical crew." }
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
          <span className="font-['Runiga'] text-3xl text-white">VOGUE</span>
          <span className="font-['The_Seasons'] text-3xl text-white">WEDDING SUTRA</span>
        </div>
      </section>

      {/* 19. THE FINAL CTA & SIGNATURE */}
      <section className="relative py-40 md:py-64 bg-gradient-to-r from-[#0F172A] to-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/jodhpur.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#CBD5E1] leading-[0.8] mb-16 mix-blend-lighten">
            Plan The<br />Extraordinary.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#334155] to-[#0F172A] border border-slate-700 text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:opacity-90 transition-all duration-500 shadow-[0_0_60px_rgba(71,85,105,0.3)]"
          >
            Contact Our Planners
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
              { label: "Event Management", url: "/event-management-jaipur" },
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
              { label: "Wedding Decoration", url: "/wedding-decoration-jaipur" },
              { label: "Corporate Management", url: "/corporate-event-management-company" },
              { label: "Artist Management", url: "/artist-management-jaipur" },
              { label: "Event Designing", url: "/event-designing" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="font-['Rekalgera'] text-gray-400 hover:text-white uppercase tracking-widest text-[10px] md:text-xs border border-white/10 px-6 py-3 hover:border-gray-500 hover:shadow-[0_5px_15px_rgba(71,85,105,0.1)] transition-all duration-300">
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
            Top event planners in Jaipur. Anchor Yash Soni provides complete event planning services, handling venue sourcing, vendor coordination, F&B curation, and end-to-end execution for social galas and corporate events across Rajasthan. Best event planning agency execution managed by Anchor Yash Soni.
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
