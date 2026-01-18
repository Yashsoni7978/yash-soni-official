"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, MessageCircle, Radio, Zap, Truck, 
  ShieldCheck, Settings, Hammer, Monitor, Speaker, 
  Layers, Users, Activity, Plus, Minus, TriangleAlert
} from "lucide-react";

// --- INLINE ANIMATION COMPONENTS ---
const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-emerald-500' : 'text-gray-300 group-hover:text-emerald-500'}`}>
          {question}
        </span>
        {isOpen ? <Minus className="w-5 h-5 text-emerald-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-400 text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

// --- DATA ---
const techInventory = [
  { icon: Speaker, title: "Pro Audio", description: "JBL Vertec / RCF Line Arrays. Digital Consoles (DiGiCo/Yamaha) ensuring crystal clear speech and thumping bass." },
  { icon: Monitor, title: "Visuals", description: "P3/P4 High-Refresh Rate LED Walls, Watchout Servers, and seamless switchers for glitch-free presentations." },
  { icon: Zap, title: "Intelligent Lighting", description: "Sharpy Beams, COB Washes, and GrandMA2 Consoles to create concert-level light shows." },
  { icon: Layers, title: "Trussing & Rigging", description: "Certified Box Truss and German Hangers. Safety-first rigging for heavy LED walls and sound clusters." },
];

const logisticsList = [
  { icon: Hammer, title: "Fabrication", desc: "Custom stage decks, backdrops, and photobooths built on-site." },
  { icon: Zap, title: "Power/Genset", desc: "62.5 kVA+ Silent Gensets with auto-changeover switches for zero blackout." },
  { icon: Radio, title: "Comms", desc: "Walkie-talkie channels for stage managers, console, and security." },
  { icon: Truck, title: "Logistics", desc: "Fleet management for equipment transport and loading/unloading labor." },
  { icon: ShieldCheck, title: "Security", desc: "Bouncers for VIP areas and crowd control barriers." },
  { icon: Users, title: "Manpower", desc: "Runners, Shadows, and Stage Hands to handle quick changes." },
];

const managementFAQs = [
  { question: "What is the difference between Planning and Management?", answer: "Planning is the paperwork (Budget, Vendors). Management is the fieldwork (Wires, Lights, Logistics). This page is about the 'Boots on the Ground' execution." },
  { question: "Do you own your own equipment?", answer: "We have in-house sound and light inventory for intimate events. For large-scale concerts or weddings, we partner with Jaipur's top rental vendors whom I trust personally." },
  { question: "How do you handle power failures?", answer: "We operate on a 'Zero Dark' policy. We always mandate a backup silent genset on standby with an automatic transfer switch (ATS). The show never stops." },
  { question: "Do you manage artist technical riders?", answer: "Yes. Since I am an artist myself, I understand technical riders perfectly. I ensure the band gets the specific drum kit, amps, and monitors they requested." },
  { question: "Can you handle last-minute fabrication changes?", answer: "Yes, our fabrication team travels with extra flex, wood, and paint for on-site touch-ups and last-minute branding changes." },
];

export default function EventManagement() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Management Company Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Event Production & Logistics",
    "description": "Technical event production and management in Jaipur. Sound, Light, LED Walls, and on-ground logistics execution.",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="container mx-auto px-4 relative text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-500 text-sm font-medium mb-6">
              Logistics • Production • Execution
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6">
              Chaos. <br /> <span className="text-emerald-500">Controlled.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Planning is the dream. Management is the reality. <br />
              We are the boots on the ground that ensure the mic works, the lights hit, and the show goes on without a glitch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-none border-l-4 border-white hover:bg-emerald-700 transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Deploy The Team <Settings className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The "Why Me" Intro */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  The <span className="text-emerald-500">Zero Error</span> Protocol
                </h2>
                <div className="text-gray-400 text-lg leading-relaxed space-y-6">
                  <p>
                    Why hire an Anchor's team for production? <strong>Because I am the one holding the mic.</strong>
                  </p>
                  <p>
                    If the sound cracks, I look bad. If the spotlight misses, I look bad. My reputation is literally tied to the technical success of your event. That gives me a stronger incentive than any other manager to ensure perfection.
                  </p>
                  <p>
                    We don't hope for the best. We prepare for the worst. My team runs on military precision, with backups for the backups.
                  </p>
                </div>
              </div>
              
              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-black p-6 border border-neutral-800 text-center rounded-xl">
                    <Activity className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">2m</h3>
                    <p className="text-gray-500 text-xs uppercase">Response Time</p>
                 </div>
                 <div className="bg-black p-6 border border-neutral-800 text-center rounded-xl">
                    <Users className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">20+</h3>
                    <p className="text-gray-500 text-xs uppercase">Tech Crew</p>
                 </div>
                 <div className="bg-black p-6 border border-neutral-800 text-center rounded-xl">
                    <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">100%</h3>
                    <p className="text-gray-500 text-xs uppercase">Safety Record</p>
                 </div>
                 <div className="bg-black p-6 border border-neutral-800 text-center rounded-xl">
                    <TriangleAlert className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">Zero</h3>
                    <p className="text-gray-500 text-xs uppercase">Blackouts</p>
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Arsenal */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              The <span className="text-emerald-500">Arsenal</span>
            </h2>
            <p className="text-gray-400 mt-4">Professional Grade Gear. No Compromises.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techInventory.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="h-full flex flex-col p-8 bg-neutral-900 border border-neutral-800 rounded-none hover:border-emerald-500/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 text-emerald-500">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm flex-grow leading-relaxed">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Operations Grid */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                The <span className="text-emerald-500">Logistics</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {logisticsList.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="h-full flex flex-col items-center justify-center p-6 bg-black border border-neutral-800 hover:border-emerald-500/50 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-8 h-8 text-gray-500 mb-3 group-hover:text-emerald-500" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-500 text-[10px] mt-2 leading-tight hidden md:block">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Production FAQs</h2>
        <div className="space-y-2">
          {managementFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Ready to <span className="text-emerald-200">Execute?</span>
            </h2>
            <p className="text-emerald-100 mb-8 text-lg">
              Don't risk your event with amateur gear. Hire the team that knows the difference between "Good Enough" and "Flawless."
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-12 py-5 bg-white text-emerald-900 font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                  Check Availability
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
