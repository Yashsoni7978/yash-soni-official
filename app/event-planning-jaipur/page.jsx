"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, MessageCircle, ClipboardList, Calculator, 
  Users, MapPin, ShieldCheck, Clock, FileText, 
  CheckCircle, Plus, Minus, LayoutTemplate 
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
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-amber-500' : 'text-gray-300 group-hover:text-amber-500'}`}>
          {question}
        </span>
        {isOpen ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
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
const planningServices = [
  { icon: Calculator, title: "Budget Engineering", description: "We don't just spend your money; we optimize it. We allocate funds to what matters (Food/Entertainment) and cut costs on hidden vendor markups." },
  { icon: Users, title: "Vendor Negotiation", description: "Access to my personal network of Jaipur's top 50 Decorators & Caterers. I negotiate the 'Industry Rate' for you, not the 'Tourist Rate'." },
  { icon: Clock, title: "Itinerary Design", description: "A minute-by-minute flow of the event. As an anchor, I know exactly how to time the Bride's entry, the speeches, and the cake cutting for maximum impact." },
  { icon: MapPin, title: "Venue Scouting", description: "Finding the perfect location (Heritage vs Modern) that fits your guest count and vibe, based on actual logistical experience." },
];

const processSteps = [
  { title: "The Vision Board", description: "We sit over coffee. You dump your Pinterest board on me. We put a realistic price tag on your dreams and define the non-negotiables." },
  { title: "The Vendor Audit", description: "I open my contact book. I get quotes from trusted Tent Houses, Florists, and Caterers. I audit them to ensure no inflated pricing." },
  { title: "Micro-Detailing", description: "Menu tasting, song selection, room allocation for guests, and printing invites. The devil is in the details." },
  { title: "The Execution", description: "The team takes over the venue. We run the show. You just show up and look good." },
  { title: "Hospitality Desk", description: "Managing guest arrivals, airport pickups, hotel check-ins, and welcome hampers so you don't have to play receptionist." },
  { title: "Legal & Permissions", description: "Handling PPL music licenses, noise permits, and local authority permissions so the party doesn't stop." },
];

const planningFAQs = [
  { question: "Why hire an Anchor to plan the event?", answer: "Because I live on the stage. I see 100 weddings a year. I know which decorator runs late, which caterer serves cold food, and how to fix problems before guests notice. You get 'Field Experience,' not just office planning." },
  { question: "Do you take a commission from vendors?", answer: "We operate on a transparent model. We charge a flat planning fee. Any discounts we get from our vendor network are passed directly to you." },
  { question: "Can you work with vendors we have already booked?", answer: "Absolutely. We step in as the 'Lead Coordinator' and manage them alongside our own team to ensure everyone follows the timeline." },
  { question: "Do you handle Destination Weddings?", answer: "Yes. We specialize in managing logistics for destination weddings in Jaipur, Udaipur, and Goa, handling everything from flights to room hampers." },
  { question: "What is the difference between Planning and Management?", answer: "Planning is the strategy (Budget, Vendors, Concepts) done months in advance. Management is the execution (Logistics, Sound, Light) done on the event days. We handle both." },
  { question: "Do you provide 3D designs for decor?", answer: "Yes, we work with specialized 3D designers to create renders of the stage and mandap so you can visualize the look before we build it." }
];

export default function EventPlanning() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Planning Services Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Wedding & Corporate Planning",
    "description": "Transparent event planning and vendor negotiation services in Jaipur. Specialized in budget management and itinerary design.",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        {/* Background Texture/Image Placeholder */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6">
              Strategy • Budget • Execution
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6">
              We Plan. <br /> You <span className="text-amber-500">Celebrate.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              An event without a plan is just chaos. We provide the blueprints, the budget sheets, and the peace of mind.
              Leverage my <strong>insider network</strong> to get the best vendors at the right price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  Start Planning <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20need%20help%20planning%20an%20event." target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Consultant
                </button>
              </a>
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
                  The <span className="text-amber-500">Anchor's Advantage</span>
                </h2>
                <div className="text-gray-400 text-lg leading-relaxed space-y-6">
                  <p>
                    Why hire an Anchor to plan your wedding? <strong>Because I live on the field.</strong>
                  </p>
                  <p>
                    Most planners sit in an office. I stand on the stage. I see exactly what goes wrong behind the scenes. I know which decorator arrives late, which caterer's food goes cold, and which sound guy creates feedback.
                  </p>
                  <p>
                    When you hire me to plan, you aren't just getting a spreadsheet; you are getting <strong>street-smart execution</strong> and direct access to my personal "Vendor Mafia" list—trusted teams that I have vetted over 1000+ shows.
                  </p>
                </div>
              </div>
              
              {/* Feature List */}
              <div className="bg-black p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Our "Peace of Mind" Promise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <span className="text-gray-300">Direct Vendor Access (No Middlemen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <span className="text-gray-300">Transparent Budgeting (Actuals Only)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <span className="text-gray-300">Technical Sound/Light Audit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <span className="text-gray-300">We handle the frantic vendor calls.</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Scope of <span className="text-amber-500">Work</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planningServices.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="h-full flex flex-col p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 text-amber-500 border border-neutral-800 group-hover:border-amber-500/30 transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm flex-grow leading-relaxed">{service.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* The Roadmap */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                The <span className="text-amber-500">Roadmap</span>
              </h2>
              <p className="text-gray-400 mt-4">From your first thought to the final applause.</p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-black border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-amber-500">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2 relative z-10">
                    <LayoutTemplate className="w-5 h-5 text-amber-500" />
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow relative z-10">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, number: "50+", label: "Trusted Vendors" },
            { icon: Calculator, number: "20%", label: "Avg Cost Saved" },
            { icon: ShieldCheck, number: "100%", label: "Transparency" },
            { icon: Clock, number: "24/7", label: "Support Access" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div className="text-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl" whileHover={{ scale: 1.05 }}>
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-amber-500 mb-2">{stat.number}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Planning FAQs</h2>
        <div className="space-y-2">
          {planningFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Stop Stressing. <span className="text-amber-500">Start Celebrating.</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss your event over coffee. No sales pitch. Just a transparent discussion about costs, concepts, and how we can make it happen.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-amber-500/20">
                  Get A Free Consultation <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
