"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Award, Users, Mic, Calendar, MapPin, ChevronRight, Plus, Minus } from "lucide-react";

// --- INLINE ANIMATION COMPONENTS ---
const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 30 : 0, 
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0 
    },
    visible: { opacity: 1, y: 0, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({ children, className }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.2 } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);

// --- DATA ---
const achievements = [
  { year: "2019", title: "Started Professional Anchoring", description: "Began journey as a professional event anchor in PAN India" },
  { year: "2020", title: "100+ Events Milestone", description: "Crossed 100 successful events across Rajasthan" },
  { year: "2022", title: "500+ Events Completed", description: "Established as one of the most sought-after anchors in the region" },
  { year: "2023", title: "Corporate Giants Partnership", description: "Started hosting events for Renowned companies" },
  { year: "2025", title: "1100+ Events & Counting", description: "Continuing to set new standards in event hosting excellence" },
];

const eventCategories = [
  "Weddings & Receptions", "Sangeet & Haldi Ceremonies", "Corporate Annual Meets", "Product Launches", "Fashion Shows", "College Fests", "Cultural Nights", "Kids Shows & Birthday Parties", "Award Ceremonies", "Social Events",
];

export default function About() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "alternateName": "Yash Soni",
      "identifier": "anchor-yash-jaipur",
      "jobTitle": "Event Anchor",
      "image": "https://yashsoni.in/assets/anchor-portrait.webp",
      "description": "Professional Event Anchor in Jaipur with 1100+ shows hosted. Specializes in weddings, corporate events, and sangeet nights.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://instagram.com/anchor_yash_official",
        "https://youtube.com/@Anchor_Yash"
      ]
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto">
                {/* Ensure 'anchor-portrait.webp' is in your public/ folder */}
                <img
                  src="/anchor-portrait.webp" 
                  alt="Anchor Yash - Professional Event Host"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-500/20" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-black border border-neutral-800 p-4 rounded-xl shadow-xl"
                >
                  <p className="text-3xl font-display font-bold text-amber-500">1100+</p>
                  <p className="text-sm text-gray-400">Events Hosted</p>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
                Meet <span className="text-amber-500">Anchor Yash</span>
              </h1>
              
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-white">Anchor Yash</strong>, a professional event anchor based in the beautiful Pink City, Jaipur, Rajasthan. With over 05 years of experience and 1100+ successful events under my belt, I've had the privilege of hosting everything from intimate family gatherings to grand corporate celebrations.
                </p>
                <p>
                  My journey in the world of anchoring began with a simple passion — connecting with people and creating memorable experiences. Today, that passion drives me to bring unmatched energy, professionalism, and warmth to every event I host.
                </p>
                <p>
                  Whether it's the emotional moments of a wedding ceremony, the high-energy atmosphere of a corporate event, or the glamour of a fashion show, I adapt my style to match the vibe while keeping the audience engaged throughout.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  <span>05+ Years Experience</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://instagram.com/anchor_yash_official"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all flex items-center gap-2">
                    <Instagram className="w-5 h-5" /> Follow on Instagram
                  </button>
                </a>
                <Link href="/contact">
                  <button className="px-6 py-3 border border-neutral-700 text-white font-bold rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all">
                    Book Me Now
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Expertise</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
                Events I <span className="text-amber-500">Specialize</span> In
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {eventCategories.map((category) => (
              <StaggerItem key={category}>
                <motion.div
                  className="px-6 py-3 bg-black border border-neutral-800 rounded-full text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {category}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">My Journey</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
                The Path to <span className="text-amber-500">Excellence</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {achievements.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-neutral-800">
                  <motion.div 
                    className="absolute -left-3 top-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-3 h-3 bg-black rounded-full" />
                  </motion.div>
                  <span className="text-amber-500 font-bold text-sm">{item.year}</span>
                  <h3 className="text-xl font-display font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Backstage</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
                Behind The <span className="text-amber-500">Scenes</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            <StaggerItem>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-800"
                whileHover={{ scale: 1.02 }}
              >
                {/* Ensure 'wedding-event.jpg' is in public/ */}
                <img src="/wedding-event.jpg" alt="Wedding Event" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-lg text-white">Wedding Ceremony</p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-800"
                whileHover={{ scale: 1.02 }}
              >
                {/* Ensure 'corporate-event.jpg' is in public/ */}
                <img src="/corporate-event.jpg" alt="Corporate Event" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-lg text-white">Corporate Event</p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2 mx-auto">
                  View Full Portfolio <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's Create <span className="text-amber-500">Magic</span> Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Ready to make your event unforgettable? Get in touch and let's discuss how I can add energy and elegance to your special occasion.
            </p>
            <Link href="/contact">
              <button className="px-10 py-5 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2 mx-auto hover:scale-105">
                Book Anchor Yash <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}