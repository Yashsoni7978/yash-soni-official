"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, CheckCircle, Calendar, Users, Lightbulb, Target, Phone, Plus, Minus } from "lucide-react";

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
  { icon: Calendar, title: "Wedding Planning", description: "Complete wedding coordination from venue selection to day-of management" },
  { icon: Users, title: "Corporate Event Planning", description: "Strategic planning for conferences, seminars, and business gatherings" },
  { icon: Lightbulb, title: "Concept Development", description: "Creative ideation and theme conceptualization for unique events" },
  { icon: Target, title: "Vendor Management", description: "Curated vendor selection and coordination for seamless execution" },
];

const planningFAQs = [
  { question: "What event planning services do you offer in Jaipur?", answer: "We offer comprehensive event planning services including wedding planning, corporate event planning, social gatherings, and destination events. Our services cover everything from initial concept development to vendor coordination and timeline management." },
  { question: "How early should I start planning my event in Jaipur?", answer: "For weddings and large events, we recommend starting 6-12 months in advance. Corporate events typically need 2-3 months of planning time. Early planning ensures better venue availability and vendor options in Jaipur's busy event season." },
  { question: "Do you handle destination weddings in Rajasthan?", answer: "Yes, we specialize in destination wedding planning across Jaipur, Udaipur, Jodhpur, and other Rajasthani cities. Our local expertise and vendor relationships ensure smooth execution at heritage properties, palaces, and luxury resorts." },
  { question: "What is the difference between event planning and event management?", answer: "Event planning focuses on the pre-event phase including concept development, budgeting, vendor selection, and logistics coordination. Event management covers the actual execution and on-ground coordination during the event itself. We provide both." },
  { question: "Can you work within my budget for event planning?", answer: "Absolutely. We work with diverse budgets and provide transparent cost breakdowns. Our vendor network includes options across price ranges, allowing us to create memorable events that align with your financial parameters." },
  { question: "What makes your event planning approach unique?", answer: "We combine personal attention with professional execution. Unlike large agencies, you work directly with the lead coordinator who understands your vision. Our local Jaipur expertise and curated vendor relationships ensure quality at every touchpoint." },
  { question: "Do you help with venue selection and booking?", answer: "Yes, venue sourcing is a key part of our service. We recommend venues based on your capacity, style, and budget, negotiate the best rates, and handle the booking contracts on your behalf." },
  { question: "Do you offer 'Partial Planning' services?", answer: "Yes! If you have already booked a venue and some vendors but need help pulling it all together, we offer Partial Planning and 'Month-of Coordination' packages to ensure a smooth finish." },
  { question: "How do you handle guest hospitality?", answer: "For out-of-town guests, we manage the entire RSVP process, hotel room block bookings, airport transfers, and welcome hamper distribution to ensure they feel like royalty." },
  { question: "Do you charge a consultation fee?", answer: "Our initial consultation is completely free. We discuss your vision and requirements to see if we are a good fit before you commit to any payments." },
  { question: "Can you provide a specific theme for my event?", answer: "Yes, we love creative challenges! Whether it's a Bollywood Sangeet, a Vintage Garden Party, or a Corporate Tech Summit, we create mood boards and designs tailored to your specific theme." },
  { question: "How do we secure your services?", answer: "Simply contact us via WhatsApp or the booking form. We will set up a meeting, provide a customized proposal, and once the contract is signed and a retainer is paid, we start planning immediately." }
];

export default function EventPlanningJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Planning Services in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Event Planning",
    "description": "Professional event planning services including wedding planning, corporate events, and destination celebrations in Jaipur and Rajasthan.",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6">
              Event Planning in Jaipur
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Event Planning Services in <span className="text-amber-500">Jaipur</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8 px-4">
              Transform your vision into reality with personalized event planning that brings together the perfect vendors, venues, and experiences for your special occasion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Book a Consultation <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20want%20to%20discuss%20planning%20an%20event." target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Thoughtful Event Planning for <span className="text-amber-500">Jaipur</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6">
              <p>
                Planning an event in Jaipur requires more than just logistics—it demands an understanding of the city's unique character, its heritage venues, and the expectations that come with hosting in the Pink City. Whether you're organizing a wedding at a palace property, a corporate retreat at a luxury resort, or an intimate celebration at a boutique venue, the planning phase sets the foundation for everything that follows.
              </p>
              <p>
                Our approach to event planning in Jaipur centers on personal attention and genuine collaboration. Rather than operating as a faceless agency, we work directly with you to understand your vision, preferences, and priorities. This means fewer misunderstandings, more creative solutions, and an event that truly reflects your personality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Planning Approach */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              How We Plan Your <span className="text-amber-500">Events</span>
            </h2>
            <p className="text-gray-400 mt-4">A structured yet flexible approach that adapts to your unique requirements</p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="space-y-6">
            {[
              { step: "01", title: "Understanding Your Vision", description: "We begin with detailed conversations to understand what you want to achieve. This includes your preferences, budget parameters, guest expectations, and any specific requirements that matter to you." },
              { step: "02", title: "Research & Recommendations", description: "Based on your vision, we research and present venue options, vendor recommendations, and concept ideas. Our local Jaipur network gives you access to trusted professionals across every category." },
              { step: "03", title: "Detailed Planning & Coordination", description: "Once directions are finalized, we create comprehensive timelines, manage vendor communications, handle logistics, and ensure every detail is documented and tracked." },
              { step: "04", title: "Seamless Handoff to Execution", description: "Whether you choose us for execution or work with another team, we ensure a smooth transition with detailed documentation and coordination support." },
            ].map((item, index) => (
              <StaggerItem key={item.step}>
                <motion.div
                  className="flex gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ x: 8 }}
                >
                  <div className="text-4xl font-display font-bold text-amber-500 flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Planning Services */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Services</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Planning Services <span className="text-amber-500">Offered</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planningServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-black border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Planning vs Execution */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Planning vs <span className="text-amber-500">Execution</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-4 mb-8">
              <p>Understanding the distinction between event planning and event execution helps you make informed decisions about what support you need. Planning covers all the preparatory work—venue research, vendor selection, budget management, timeline creation, and logistics coordination. Execution, on the other hand, involves the on-ground management during the event itself.</p>
              <p>Some clients prefer comprehensive support covering both phases, while others handle execution independently after thorough planning. We offer flexibility based on your comfort level and requirements.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-lg font-display font-bold mb-4 text-amber-500">Event Planning Includes</h3>
                <ul className="space-y-3">
                  {["Venue research & recommendations", "Vendor shortlisting & negotiations", "Budget planning & tracking", "Timeline & checklist creation", "Design concept development"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-lg font-display font-bold mb-4 text-amber-500">Event Execution Includes</h3>
                <ul className="space-y-3">
                  {["Day-of coordination", "Vendor management on-site", "Guest management", "Timeline monitoring", "Problem-solving in real-time"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Event Planning FAQs</h2>
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
              Ready to Start <span className="text-amber-500">Planning?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss your event vision and create a planning roadmap that brings it to life. Book a consultation to get started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2">
                  Book a Planning Consultation <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:+917737877978">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}