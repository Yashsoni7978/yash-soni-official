"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, ChevronDown, ChevronRight, 
  ClipboardList, Calculator, Users, Clock, 
  MapPin, ShieldCheck, FileText, LayoutTemplate, 
  Truck, Utensils, Gift, Music, Phone 
} from "lucide-react";

// --- ANIMATION UTILS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- DATA: THE EMPIRE CONTENT ---
const ecosystemData = [
  { icon: Calculator, title: "Financial Engineering", desc: "We don't just 'budget'. We perform cost-benefit analysis on every vendor, ensuring your ₹50L looks like ₹80L." },
  { icon: MapPin, title: "Venue Procurement", desc: "Negotiating contracts with Fairmont, Rambagh, & Leela. We know the hidden clauses and the best inventory." },
  { icon: Utensils, title: "F&B Curation", desc: "Designing menus that matter. Tasting sessions, bar management, and ensuring the food stays hot for 400 guests." },
  { icon: Truck, title: "Logistics & Fleet", desc: "Managing airport transfers, Innova/Bus fleets, and valet coordination for a seamless guest arrival." },
  { icon: Gift, title: "Gifting & Hampers", desc: "Sourcing, packaging, and room-placement of welcome hampers. We handle the logistics of gratitude." },
  { icon: FileText, title: "Legal & Licensing", desc: "PPL, IPRS, Noise Permits. We handle the bureaucracy so the police don't stop the party." },
  { icon: Users, title: "Hospitality Desk", desc: "A dedicated 24/7 desk at the hotel lobby to handle check-ins, key cards, and guest queries." },
  { icon: Music, title: "Entertainment Tech", desc: "Managing artist riders, sound checks, and green room requirements for celebrity performers." },
];

const processTimeline = [
  { 
    phase: "Phase 1: The Blueprint", 
    timeline: "Month 1-2",
    items: ["Vision & Concept Lock", "Budget Allocation", "Venue Finalization", "Contract Negotiations"] 
  },
  { 
    phase: "Phase 2: The Architecture", 
    timeline: "Month 3-4",
    items: ["Vendor Onboarding (Decor/Photo)", "Menu Tasting & Finalization", "Room Allocation Matrix", "Invite Distribution Strategy"] 
  },
  { 
    phase: "Phase 3: The Micro-Detailing", 
    timeline: "Month 5",
    items: ["Run-of-Show (Minute by Minute)", "Logistics & Fleet Charting", "Hospitality Desk Setup", "Technical Tech-Recce"] 
  },
  { 
    phase: "Phase 4: The Execution", 
    timeline: "Event Days",
    items: ["Team Deployment (Shadows/Runners)", "Vendor Management", "Guest Experience Management", "Crisis Handling"] 
  }
];

const faqs = [
  { q: "Do you handle destination weddings outside Jaipur?", a: "Yes. Our team specializes in logistical movements. Whether it's Udaipur, Jodhpur, or Goa, we move our 'War Room' to the venue 48 hours prior to the event." },
  { q: "How do you handle budget overruns?", a: "We operate on a strict 'Approval First' basis. No vendor is paid and no extra cost is incurred without your written sign-off on our shared Budget Sheet." },
  { q: "What implies 'End-to-End' Planning?", a: "It means you only talk to us. We talk to the Tent House, the Florist, the Caterer, the Driver, and the DJ. We are your single point of accountability." },
  { q: "Can we hire you just for On-Day Coordination?", a: "Yes. If you have done the planning but need a professional team to execute the flow on the final days, we offer a 'Show Running' package." }
];

export default function EventPlanningPro() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans">
      
      {/* --- 1. HERO: THE MAGNUM OPUS --- */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-500"></span>
              <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm">360° Turnkey Solutions</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] text-white mb-8">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">PLANNING.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 border-l-2 border-amber-500 pl-6">
              We don't just "arrange" events. We engineer them. <br />
              From the architectural blueprints of the stage to the minute-by-minute logistics of guest arrival—we are the architects of your celebration.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <Link href="/contact">
                <button className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-all">
                  Initiate Project
                </button>
              </Link>
              <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                <Phone className="w-5 h-5" /> Book Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE PHILOSOPHY (Text Heavy / Authority) --- */}
      <section className="py-32 container mx-auto px-4 border-b border-white/5">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">The "War Room" Approach.</h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed text-justify">
              <p>
                An event is a live operation. There are no retakes. That is why we treat every project like a military operation. We don't rely on "hope" or "verbal assurances." We rely on <strong>Contracts, CAD Drawings, and Excel Sheets.</strong>
              </p>
              <p>
                As an Anchor-led planning team, we have a unique advantage: <strong>We live on the stage.</strong> We know exactly when a timeline is going to fail before it happens. We know which vendor is cutting corners.
              </p>
              <p>
                We bring this "Field Experience" into the boardroom, ensuring that what we plan on paper is actually executable in reality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatBox number="1000+" label="Vendors Vetted" />
            <StatBox number="₹50Cr+" label="Budgets Managed" />
            <StatBox number="0" label="Critical Failures" />
            <StatBox number="24/7" label="Ops Team" />
          </div>
        </div>
      </section>

      {/* --- 3. THE ECOSYSTEM (Bento Grid) --- */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Scope of Work</span>
            <h2 className="text-5xl font-display font-black text-white mt-4">The Planning Ecosystem.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemData.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#111] border border-white/5 hover:border-amber-500/50 transition-all group">
                <item.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. THE PROCESS (Timeline) --- */}
      <section className="py-32 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">The Execution Roadmap.</h2>
          
          <div className="space-y-8">
            {processTimeline.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 bg-[#111] border border-white/10 p-8 md:p-12 hover:border-amber-500/30 transition-colors">
                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                  <span className="text-amber-500 font-bold text-sm uppercase tracking-wider block mb-2">{step.timeline}</span>
                  <h3 className="text-2xl font-bold text-white">{step.phase}</h3>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. THE TOOLKIT (Technical Authority) --- */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
           <h3 className="text-2xl font-bold text-white mb-10">Powered By Industry Standard Tools</h3>
           <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <ToolBadge name="AutoCAD" />
              <ToolBadge name="Microsoft Excel" />
              <ToolBadge name="SketchUp 3D" />
              <ToolBadge name="Asana" />
              <ToolBadge name="Google Workspace" />
           </div>
        </div>
      </section>

      {/* --- 6. FAQ (Accordion) --- */}
      <section className="py-32 container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">Critical Queries.</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 bg-[#111] p-6 cursor-pointer" onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-white">{faq.q}</h4>
                <ChevronDown className={`w-5 h-5 text-amber-500 transition-transform ${activeAccordion === idx ? "rotate-180" : ""}`} />
              </div>
              <AnimatePresence>
                {activeAccordion === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. CTA: THE CLOSER --- */}
      <section className="py-40 bg-amber-600 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8">NO MORE CHAOS.</h2>
            <p className="text-xl md:text-2xl text-black font-medium mb-12 max-w-3xl mx-auto">
               You have a vision. We have the blueprint. <br/> Let's build your event with precision.
            </p>
            <Link href="/contact">
               <button className="px-12 py-6 bg-black text-white text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                  Schedule The Audit
               </button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- SUB COMPONENTS ---

const StatBox = ({ number, label }) => (
  <div className="p-6 border border-white/10 bg-[#111] text-center">
    <div className="text-3xl font-black text-white mb-1">{number}</div>
    <div className="text-xs uppercase tracking-widest text-amber-500">{label}</div>
  </div>
);

const ToolBadge = ({ name }) => (
  <span className="text-xl font-bold text-white border border-white/20 px-6 py-3 rounded-full">{name}</span>
);
