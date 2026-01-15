"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronRight, Palette, Music, Heart, Camera, Star, Flower2, MessageCircle, Sparkles, Plus, Minus } from "lucide-react";

// --- INLINE COMPONENTS ---
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
const services = [
  {
    icon: Palette,
    title: "Event Designing & Decor",
    description: "Transform any venue into a stunning visual masterpiece with creative themes, elegant decorations, and meticulous attention to every detail.",
    features: ["Theme conceptualization", "Stage design & backdrop", "Floral arrangements", "Lighting design", "Table settings & centerpieces"],
  },
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete end-to-end wedding planning that takes care of every detail, from venue selection to the final farewell.",
    features: ["Venue selection & booking", "Vendor management", "Timeline coordination", "Guest management", "Budget optimization"],
  },
  {
    icon: Music,
    title: "Sangeet Choreography",
    description: "Professional dance choreography for sangeet ceremonies that will have your guests cheering. From traditional to Bollywood styles.",
    features: ["Custom choreography", "Group dance coordination", "Solo performance training", "Music selection & mixing", "Rehearsal sessions"],
  },
  {
    icon: Star,
    title: "Bride & Groom Entry Design",
    description: "Create a grand entrance that sets the tone for your celebration. Unique, memorable, and perfectly tailored to your personality.",
    features: ["Concept development", "Props & special effects", "Music synchronization", "Pyrotechnics (where permitted)", "Rehearsal coordination"],
  },
  {
    icon: Camera,
    title: "Entertainment Management",
    description: "Access to top entertainers, DJs, live bands, dancers, and performers to elevate your event's entertainment quotient.",
    features: ["Artist booking", "Performance scheduling", "Sound & lighting coordination", "Green room management", "Technical crew"],
  },
  {
    icon: Flower2,
    title: "Destination Wedding Planning",
    description: "Complete destination wedding solutions for creating magical celebrations at exotic locations across India.",
    features: ["Location scouting", "Travel & accommodation", "Local vendor coordination", "Guest experience management", "Multi-day itinerary planning"],
  },
];

const packages = [
  {
    name: "Decor Only",
    price: "Custom Quote",
    description: "Book a free consultation to get an exact estimate based on your venue and theme.",
    features: ["Theme conceptualization", "Stage & backdrop design", "Floral arrangements", "Table decor", "Lighting setup"],
    popular: false,
  },
  {
    name: "Wedding Planning",
    price: "Custom Quote",
    description: "Book a free consultation to discuss your vision and get a personalized package.",
    features: ["Everything in Decor Only", "Vendor management", "Timeline coordination", "Day-of coordination", "Guest management", "Sangeet choreography"],
    popular: true,
  },
  {
    name: "Destination Wedding",
    price: "Custom Quote",
    description: "Book a free consultation for a comprehensive destination wedding proposal.",
    features: ["Everything in Wedding Planning", "Location scouting & booking", "Travel arrangements", "Accommodation management", "Multi-day event coordination", "Guest experience curation", "Anchor Yash as host"],
    popular: false,
  },
];

const portfolio = [
  {
    title: "Royal Rajasthani Wedding",
    description: "A 3-day grand celebration at Jaipur's heritage venue",
    image: "/wedding-event.jpg", // Ensure exists in public/
    category: "Wedding",
  },
  {
    title: "Sangeet Night Extravaganza",
    description: "Choreographed performances with stunning stage design",
    image: "/sangeet-event.jpg", // Ensure exists in public/
    category: "Sangeet",
  },
  {
    title: "Corporate Gala Night",
    description: "Elegant corporate event with premium decor",
    image: "/corporate-event.jpg", // Ensure exists in public/
    category: "Corporate",
  },
];

const eventPlanningFAQs = [
  { question: "Do you handle full Wedding Planning or just Decor?", answer: "We offer both! You can hire us solely for Event Decor & Designing, or choose our Full Wedding Planning service where we manage everything from venue booking to guest hospitality." },
  { question: "How do we get a price estimate for Wedding Decor?", answer: "Since every wedding is unique, we don't have fixed rates. We offer a Free Consultation where we discuss your venue and vision, after which we provide a detailed custom quote." },
  { question: "Do you plan Destination Weddings in Rajasthan?", answer: "Yes, we specialize in Destination Weddings in Udaipur, Jodhpur, Jaisalmer, Pushkar, and Sawai Madhopur. We handle logistics, travel, and local vendor management." },
  { question: "Can you customize the wedding theme?", answer: "Absolutely. We don't believe in cookie-cutter weddings. Whether you want a Royal Rajasthani theme, a Bohemian vibe, or a modern Pastel setup, we design it from scratch." },
  { question: "Do you provide Sangeet Choreographers?", answer: "Yes, we have an in-house team of professional choreographers who teach easy-to-learn steps for the family and create spectacular couples' dance sequences." },
  { question: "How do you handle guest management and RSVP?", answer: "For full planning clients, we provide a dedicated Hospitality Desk team that manages RSVP calls, airport pickups, hotel check-ins, and welcome hampers." },
  { question: "Can you suggest unique Bride & Groom entry ideas?", answer: "Yes! We design grand entries ranging from vintage cars and ATV bikes to royal Palkis, cold pyro pathways, and flower showers tailored to your personality." },
  { question: "Do you take care of light and sound requirements?", answer: "Yes, we provide professional Sound & Light setups (Truss, LED Walls, Line Array Speakers) suitable for live bands, DJ nights, and sangeet performances." },
  { question: "How soon should we book you for wedding planning?", answer: "Planning a wedding involves many moving parts. We recommend booking us 4-6 months in advance to secure the best venues and rates." },
  { question: "Do you provide Corporate Event Management?", answer: "Yes, we manage corporate offsites, award nights, and product launches, focusing on branding, stage fabrication, and seamless technical execution." },
  { question: "Will Anchor Yash be hosting if we book planning services?", answer: "Anchor Yash is available as an add-on or part of the premium package. If he is booked, we can provide other top-tier anchors from our network." },
  { question: "Do you handle vendor payments and negotiations?", answer: "Yes, we act as your single point of contact. We negotiate the best rates with vendors (caterers, photographers, makeup artists) and manage their payment schedules." }
];

export default function EventDesigning() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Designing & Decor Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Anchor Yash Soni Events",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
    },
    "serviceType": "Event Designing",
    "description": "Premium event designing, wedding decor, sangeet choreography, and entry concepts in Jaipur.",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative text-center">
          <ScrollReveal>
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
              Event Designing & Wedding Planning
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Creating <span className="text-amber-500">Dream Events</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              From stunning decor to complete wedding planning, we transform your vision into reality with meticulous attention to every detail.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105">
                  Design My Event
                </button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                What We <span className="text-amber-500">Offer</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group p-8 bg-black border border-neutral-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500/20">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Recent <span className="text-amber-500">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] bg-neutral-800 relative">
                   {/* PLACEHOLDER IMAGE */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-600">Image: {item.title}</div>
                   {/* <Image src={item.image} fill className="object-cover" /> */}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-flex items-center text-amber-500 font-bold hover:underline">
                View Full Portfolio <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Packages</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Investment <span className="text-amber-500">Options</span>
              </h2>
              <p className="text-gray-400 mt-4">Customizable packages designed to match your event scale and budget</p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <motion.div
                  className={`relative p-8 rounded-2xl border ${
                    pkg.popular
                      ? "bg-gradient-to-b from-amber-500/10 to-black border-amber-500 shadow-2xl shadow-amber-500/10"
                      : "bg-black border-neutral-800"
                  }`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-xs font-bold rounded-full uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-amber-500 mb-2">{pkg.price}</div>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <button className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                        pkg.popular ? "bg-amber-500 text-black hover:bg-amber-600" : "border border-neutral-700 text-white hover:border-amber-500 hover:text-amber-500"
                    }`}>
                      Book Consultation <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Event Planning FAQs</h2>
        <div className="space-y-2">
          {eventPlanningFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Create Your <span className="text-amber-500">Dream Event</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              From concept to celebration, we handle every detail so you can enjoy your special moments.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-5 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-colors flex items-center gap-2">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}