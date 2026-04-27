"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function ThemeWeddingOrganizerIndia() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      
      {/* 1. THE CINEMATIC HERO (100vh) */}
      <section className="relative w-full h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/ivory_hero_wedding_1776853928413.webp"
            alt="Luxury Wedding in Jaipur"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/50 to-transparent"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 backdrop-blur-xl bg-white/60 p-8 md:p-14 lg:p-20 max-w-3xl shadow-2xl border-l-4 border-[#097969]"
        >
          <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#097969] text-xs md:text-sm mb-6 block">
            The Jaipur Standard
          </span>
          <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">
            Immersive Themes
          </h1>
          <p className="font-['Amandine'] text-3xl md:text-5xl text-[#D4AF37] mb-10">
            The top theme wedding organizer in India
          </p>
          <a href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-[#1A1A1A] text-[#FAF9F6] px-10 py-5 hover:bg-[#097969] transition-all duration-500 hover:shadow-[0_0_30px_rgba(9,121,105,0.4)]">
            Design Your Event
          </a>
        </motion.div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="relative z-30 w-full bg-[#097969] py-8 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              1100+ Events Hosted
            </span>
            <span className="hidden md:block text-[#D4AF37] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#D4AF37] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Heritage Venues
            </span>
            <span className="hidden md:block text-[#D4AF37] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              End-to-End Execution
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE ROYAL PRELUDE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-['Orange_Avenue'] text-4xl text-[#D4AF37] mb-6 block">Welcome to Royalty</span>
          <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">
            Jaipur is not just a destination. It is an emotion written in pink sandstone and gold.
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            As the premier luxury event planner in Rajasthan, we don't just organize events; we author legacies. From the sprawling courtyards of Rambagh Palace to the illuminated majesty of Amer Fort, your celebration deserves a canvas that is nothing short of historic. We specialize in transforming these monumental spaces into intimate, bespoke experiences that echo your personal love story or corporate triumph.
          </p>
        </motion.div>
      </section>

      {/* 4. THE EDITORIAL LOOKBOOK (Masonry Faux-Motion) */}
      <section className="py-20 w-full bg-[#FAF9F6] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden">
              <Image src="/ivory_mandap_decor_1776853945636.webp" alt="White Flower Mandap" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden">
              <Image src="/ivory_sangeet_stage_1776854029383.webp" alt="Varmala Fireworks" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
            </motion.div>
            <motion.div variants={fadeInUp} className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden">
              <Image src="/ivory_bride_entry_1776853994383.webp" alt="Bride Entry White Floral" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
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
          <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">
            "True luxury is <span className="text-[#D4AF37]">invisible</span>. It is the flawless execution of a thousand unseen details."
          </p>
        </motion.div>
      </section>

      {/* 6. THE SIGNATURE SERVICES BENTO */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Our Arsenal</h2>
            <p className="font-['Amandine'] text-4xl text-[#097969] mt-2">The architecture of a perfect event</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
              <h3 className="font-['The_Seasons'] text-4xl text-[#1A1A1A] mb-4">Heritage Venues</h3>
              <p className="font-sans text-lg text-gray-500 font-light max-w-md">
                Exclusive access to Rajasthan's most coveted palaces, heritage forts, and luxury estates. We secure the impossible spaces.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="bg-[#1A1A1A] p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
              <h3 className="font-['The_Seasons'] text-4xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                Design & Decor
                <span className="text-[#D4AF37] font-['Orange_Avenue'] text-3xl lowercase mt-1">bespoke</span>
              </h3>
              <p className="font-sans text-lg text-gray-400 font-light max-w-md">
                Immersive spatial design using premium ivory florals, bespoke silk fabrics, and structural art that defies gravity.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="bg-[#097969] p-12 lg:p-16 shadow-[0_20px_60px_rgba(9,121,105,0.1)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
              <h3 className="font-['The_Seasons'] text-4xl text-[#FAF9F6] mb-4">Royal Hospitality</h3>
              <p className="font-sans text-lg text-[#FAF9F6]/80 font-light max-w-md">
                White-glove shadow management, dedicated VIP protocol, and 24/7 concierge for your esteemed guests.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeInUp} className="bg-white border border-[#D4AF37]/20 p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.02)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
              <h3 className="font-['The_Seasons'] text-4xl text-[#1A1A1A] mb-4">Seamless Logistics</h3>
              <p className="font-sans text-lg text-gray-500 font-light max-w-md">
                Precision planning, from private charter flight coordination to vintage car transport arrays across the desert.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. THE HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#D4AF37]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Rambagh Palace</span>
              <span className="text-[#D4AF37] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Taj Amer</span>
              <span className="text-[#D4AF37] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Fairmont Jaipur</span>
              <span className="text-[#D4AF37] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">The Oberoi Rajvilas</span>
              <span className="text-[#D4AF37] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THE MASTERMIND */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative aspect-[4/5]"
          >
            <Image src="/jal-mahal-jaipur-artist.webp" alt="Anchor Yash Soni" fill className="object-cover shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 bg-[#097969] p-8 text-[#FAF9F6]">
              <span className="font-['Rekalgera'] text-4xl">1100+</span>
              <span className="font-sans block text-sm tracking-widest uppercase mt-2">Masterpieces</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-['Amandine'] text-4xl text-[#097969] mb-4 block">The Mastermind</span>
            <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Anchor Yash Soni</h2>
            <p className="font-sans text-xl text-gray-600 font-light leading-relaxed mb-8">
              A visionary in the realm of luxury celebrations. With over a decade of dominating the stage and orchestrating Rajasthan's most elite events, Yash doesn't just plan weddings; he anchors the entire emotional and operational spectrum of your celebration.
            </p>
            <p className="font-sans text-lg text-gray-500 font-light leading-relaxed mb-10">
              His voice has commanded crowds of 10,000, and his eye for detail ensures that the white ivory roses on your mandap match the exact shade of your bridal silhouette.
            </p>
            <Image src="/favicon.webp" alt="Seal" width={80} height={80} className="opacity-50 grayscale" />
          </motion.div>
        </div>
      </section>

      {/* 9. CURATED STAGES OF CELEBRATION */}
      <section className="py-32 bg-[#1A1A1A] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#097969]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h2 className="font-['The_Seasons'] text-6xl md:text-8xl mb-24 text-center">The Royal Timeline</h2>
          
          <div className="space-y-24 border-l border-[#D4AF37]/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
            {[
              { title: "The Welcome", desc: "A grand Rajasthani Swagat with folk musicians, rose petal showers, and vintage car arrivals.", img: "/ivory_vintage_car_1776854011319.webp" },
              { title: "The Haldi & Mehendi", desc: "Vibrant yellow and emerald themes. Interactive games, floral jewelry, and sun-kissed courtyards.", img: "/ivory_palace_venue_1776853964418.webp" },
              { title: "The Sangeet Gala", desc: "High-octane glamour. Crystal stages, celebrity performers, and synchronized pyrotechnics.", img: "/ivory_sangeet_stage_1776854029383.webp" },
              { title: "The Varmala & Pheras", desc: "The crescendo. A floating mandap under the stars, chanting priests, and color-smoke fireworks.", img: "/ivory_hero_wedding_1776853928413.webp" }
            ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[73px] top-4 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/2">
                    <span className="font-['Orange_Avenue'] text-3xl text-[#D4AF37] block mb-2">Chapter 0{idx + 1}</span>
                    <h3 className="font-['The_Seasons'] text-4xl md:text-5xl mb-4">{stage.title}</h3>
                    <p className="font-sans text-gray-400 font-light text-lg leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video relative overflow-hidden">
                    <Image src={stage.img} alt={stage.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. THE ART OF CURATION */}
      <section className="py-32 px-6 bg-[#FAF9F6] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Image src="/gold-texture.webp" alt="Gold" width={100} height={100} className="mx-auto mb-8 rounded-full object-cover" />
          <h2 className="font-['Runiga'] text-5xl md:text-7xl text-[#1A1A1A] mb-8">Obsessive Perfection</h2>
          <p className="font-sans text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            From the specific weave of the silk napkins to the exact tempo of the bride's entry track, we operate in the micro-details that separate a good event from a legendary one.
          </p>
        </motion.div>
      </section>

      {/* 11. DESTINATION SPOTLIGHT */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-['The_Seasons'] text-6xl text-[#1A1A1A]">The Rajasthan Canvas</h2>
              <p className="font-['Amandine'] text-3xl text-[#097969] mt-2">Palaces that breathe history</p>
            </div>
            <a href="#" className="font-['Rekalgera'] text-[#D4AF37] uppercase tracking-widest border-b border-[#D4AF37] pb-1 mt-6 md:mt-0">View All Locations</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image src="/ivory_palace_venue_1776853964418.webp" alt="Jaipur" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <h3 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Jaipur</h3>
              <p className="font-sans text-gray-500 mt-2">The Pink City of Royals</p>
            </div>
            <div className="group cursor-pointer md:mt-16">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image src="/hawa-mahal-portrait.webp" alt="Udaipur" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <h3 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Udaipur</h3>
              <p className="font-sans text-gray-500 mt-2">The City of Lakes</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image src="/ivory_mandap_decor_1776853945636.webp" alt="Jodhpur" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <h3 className="font-['Runiga'] text-4xl text-[#1A1A1A]">Jodhpur</h3>
              <p className="font-sans text-gray-500 mt-2">The Blue City Heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. IMMERSIVE MOMENTS GALLERY (Horizontal Scroll Simulation) */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <h2 className="font-['The_Seasons'] text-center text-5xl md:text-7xl mb-16 text-[#1A1A1A]">Captured <span className="font-['Amandine'] text-[#097969]">Elegance</span></h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "/ivory_palace_venue_1776853964418.webp", "/ivory_bride_entry_1776853994383.webp", "/ivory_sangeet_stage_1776854029383.webp", 
            "/ivory_vintage_car_1776854011319.webp", "/ivory_mandap_decor_1776853945636.webp"
          ].map((img, i) => (
            <div key={i} className="relative min-w-[300px] md:min-w-[500px] aspect-[4/5] snap-center shrink-0">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 13. THE ROYAL DIARY (Testimonials) */}
      <section className="py-40 px-6 bg-[#097969] text-[#FAF9F6] relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/gold-texture.webp')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-['Orange_Avenue'] text-4xl text-[#D4AF37] mb-8 block">The Royal Diary</span>
          <p className="font-['The_Seasons'] text-4xl md:text-6xl leading-tight mb-12">
            "We wanted a wedding that felt like a movie, but what Yash and his team delivered was a masterpiece. From the floral installations to managing 500 VIPs smoothly, it was flawless."
          </p>
          <span className="font-['Rekalgera'] tracking-widest uppercase text-sm block">The Singhania Family</span>
          <span className="font-sans text-sm text-white/60 block mt-2">Rambagh Palace, Jaipur</span>
        </div>
      </section>

      {/* 14. NUMBERS THAT SPEAK */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "1100+", label: "Events Mastered" },
            { num: "50+", label: "Palaces Unlocked" },
            { num: "10k+", label: "VIPs Hosted" },
            { num: "100%", label: "Flawless Execution" }
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
            <h2 className="font-['Runiga'] text-6xl text-[#1A1A1A] mb-6">The Promise</h2>
            <p className="font-sans text-gray-500 leading-relaxed">
              We leave absolutely nothing to chance. Our scope of work is comprehensive, covering every conceivable angle of luxury event production.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[
              "Venue Scouting & Contracting", "Bespoke Thematic Decor", 
              "Celebrity Artist Management", "Menu Curation & Mixology",
              "RSVP & Shadow Management", "Security & Protocol",
              "Logistics & Transport Array", "Show Calling & Production"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-2xl mt-1">❖</span>
                <span className="font-['The_Seasons'] text-2xl text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. THE ULTIMATE FAQ */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-[#1A1A1A] mb-4">Questions of Elegance</h2>
            <p className="font-['Rekalgera'] text-[#097969] tracking-widest uppercase text-sm">Frequently Asked</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "What is the starting budget for a destination wedding in Jaipur?", a: "Luxury is bespoke, but an elite heritage wedding in Jaipur typically begins at ₹1.5 Cr, scaling with guest count, venue prestige, and decor opulence." },
              { q: "Do you handle international guest logistics?", a: "Absolutely. Our concierge team manages everything from private charter clearances to visa assistance and dedicated airport lounges." },
              { q: "How far in advance should we secure your services?", a: "To ensure access to premier dates at properties like Rambagh or Taj, we recommend engaging our team 8 to 12 months prior to the celebration." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-[#1A1A1A]/10 pb-6">
                <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="font-sans text-gray-600 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. PRESS & RECOGNITION */}
      <section className="py-20 bg-[#FAF9F6] border-t border-gray-200 text-center">
        <span className="font-['Rekalgera'] text-gray-400 tracking-[0.3em] uppercase text-xs mb-8 block">Recognized For Excellence</span>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
          {/* Simulated Logos using text for elegance */}
          <span className="font-['Runiga'] text-3xl">VOGUE</span>
          <span className="font-['The_Seasons'] text-3xl">WEDMEGOOD</span>
          <span className="font-['Runiga'] text-3xl">HARPER'S</span>
          <span className="font-['The_Seasons'] text-3xl">WEDDING SUTRA</span>
        </div>
      </section>

      {/* 18 & 19. THE FINAL CTA & SIGNATURE */}
      <section className="relative py-40 md:py-64 bg-[#1A1A1A] overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center"
        >
          <h2 className="font-['Runiga'] text-5xl md:text-8xl lg:text-[120px] text-[#D4AF37] leading-[0.8] mb-16 mix-blend-lighten">
            Let's Create<br />Something Royal.
          </h2>
          
          <a
            href="https://wa.me/917737877978" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#097969] text-[#FAF9F6] font-['Rekalgera'] uppercase tracking-[0.25em] px-12 py-6 text-sm hover:bg-[#FAF9F6] hover:text-[#097969] transition-all duration-500 shadow-[0_0_60px_rgba(9,121,105,0.4)]"
          >
            Start The Conversation
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
          <h2 className="font-['The_Seasons'] text-4xl text-[#1A1A1A] mb-12">Explore Our Ecosystem</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
              { label: "Event Planning", url: "/event-planning-jaipur" },
              { label: "Event Management", url: "/event-management-jaipur" },
              { label: "Event Designing", url: "/event-designing" },
              { label: "Artist Management", url: "/artist-management-jaipur" },
              { label: "Luxury Rajasthan", url: "/luxury-wedding-planner-rajasthan" },
              { label: "Wedding Decor", url: "/wedding-decoration-jaipur" },
              { label: "Sangeet Decor", url: "/sangeet-decoration-jaipur" },
              { label: "Wedding Catering", url: "/wedding-catering-jaipur" },
              { label: "Destination Planning", url: "/destination-wedding-planner-jaipur" },
              { label: "Gala Dinners", url: "/gala-dinner-event-planner" },
              { label: "Corporate Events", url: "/corporate-event-management-company" },
              { label: "Haldi Decor", url: "/haldi-decoration-jaipur" },
              { label: "Heritage Venues", url: "/wedding-venue-jaipur" },
              { label: "Theme Weddings", url: "/theme-wedding-organizer-india" }
            ].map((link, i) => (
              <a key={i} href={link.url} className="font-['Rekalgera'] text-[#1A1A1A] hover:text-[#097969] uppercase tracking-widest text-[10px] md:text-xs border border-[#1A1A1A]/10 px-6 py-3 hover:border-[#097969] hover:shadow-[0_5px_15px_rgba(9,121,105,0.05)] transition-all duration-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 21. SEO PILLAR FOOTER */}
      <section className="py-12 bg-[#1A1A1A] text-center px-6">
        <div className="max-w-5xl mx-auto border-t border-[#FAF9F6]/10 pt-12">
          <p className="font-sans text-[10px] md:text-xs text-[#FAF9F6]/30 leading-loose text-justify text-balance">
            India's premier theme wedding organizer. From vintage royal to modern minimalist, we bring your exact aesthetic vision to life. Theme Wedding Organizer India execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations.
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

