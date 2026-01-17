"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram, Star, Users, Award, Mic, ChevronRight, Quote, Plus, Minus } from "lucide-react";

// --- HERO IMAGE SLIDER COMPONENT ---
const HeroSlider = () => {
  const images = [
    "/hero-anchor.webp",
    "/wedding-event.jpg",
    "/corporate-event.jpg",
    "/sangeet-event.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Anchor Yash Event"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50 z-10" />
    </div>
  );
};

// --- INLINE ANIMATION COMPONENTS (Fixed Types) ---
// We added ': any' to children, question, and answer to fix the 6 errors.

const ScrollReveal = ({ children, delay = 0, direction = "up" }: any) => {
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

const StaggerContainer = ({ children, className }: any) => (
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

const StaggerItem = ({ children }: any) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: any) => {
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
const homeFAQs = [
  { question: "Who is the Best Anchor in Jaipur for events?", answer: "Anchor Yash Soni is widely rated as the Best Anchor in Jaipur and a top-tier Male Anchor in Rajasthan. With over 5+ years of experience and 1100+ successful events, he is known for his high energy, wit, and professional stage presence." },
  { question: "What types of events do you specialize in?", answer: "I specialize in a complete range of events: Grand Indian Weddings (Sangeet, Haldi, Varmala), Corporate Events (Awards, Summits), Mall Activations, Celebrity Shows, and Government Events." },
  { question: "Do you travel for Destination Weddings outside Jaipur?", answer: "Yes, I am a specialist Destination Wedding Anchor. I frequently travel to Udaipur, Jodhpur, Jaisalmer, Pushkar, Goa, and other major Indian cities. Travel and stay are arranged by the client." },
  { question: "Which languages are you fluent in?", answer: "I am a multilingual anchor fluent in Hindi, English, and Marwari (Rajasthani). I can also engage audiences in Gujarati, Bhojpuri, and Bengali, making me perfect for cross-cultural weddings." },
  { question: "Do you also provide Event Management services?", answer: "Yes! Beyond anchoring, I offer full Event Management Services in Jaipur including venue planning, artist management, decor, and entertainment solutions." },
  { question: "Can you provide a Female Anchor or Co-Host?", answer: "Absolutely. If your event requires a Male-Female Anchor duo for better chemistry, I can team up with the best female anchors in Jaipur and Rajasthan." },
  { question: "How far in advance should we book you?", answer: "To ensure availability, especially during the wedding season (Nov-Feb), it is best to book 2-3 months in advance. However, you can always check for last-minute dates." },
  { question: "What are your charges for an event?", answer: "My charges depend on the event scope, duration, and location. I offer customized packages for 1-day or 3-day wedding events. Contact me on WhatsApp for a quick quote." },
  { question: "Do you bring your own team?", answer: "Yes, I work with a professional team including DJ coordination, scriptwriters, and event managers to ensure your show runs seamlessly." },
  { question: "Why should we hire Anchor Yash over others?", answer: "My USP is 'Connection.' I don't just speak; I connect with every guest from age 6 to 60. Plus, I don't rely on scripts—I improvise to keep the energy fresh and spontaneous." },
  { question: "How do I confirm a booking with you?", answer: "Booking is simple. Call +91-7737877978 to check availability. Once the date is finalized, a token advance confirms your slot." },
  { question: "Can we see videos of your past work?", answer: "Yes, you can visit the Portfolio page on this website or check my Instagram/YouTube (@Anchor_Yash) to see live performance videos." }
];

const stats = [
  { number: "1100+", label: "Events Hosted", icon: Mic },
  { number: "05+", label: "Years Experience", icon: Award },
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "70+", label: "Corporate Clients", icon: Star },
];

const trustBadges = [
  "Celebrity Weddings", "Corporate R&R Events", "Big Fat Indian Weddings", "Award Ceremonies", "Live Productions", "Award shows", "National-Level Sports Events",
];

const anchoringServices = [
  { title: "Wedding Anchor", description: "Professional hosting for your special day with seamless ceremony management", image: "/wedding-event.jpg", link: "/wedding-anchor-jaipur" },
  { title: "Corporate Anchor", description: "Polished and engaging hosting for business events and conferences", image: "/corporate-event.jpg", link: "/corporate-event-anchor-jaipur" },
  { title: "Fashion Show Host", description: "Bringing glamour and energy to runway events and fashion weeks", image: "/fashion-show.jpg", link: "/anchoring" },
];

const testimonials = [
  { name: "Priya & Rahul Sharma", event: "Wedding Reception", text: "Anchor Yash made our wedding reception absolutely magical! His energy was infectious and he kept all our guests engaged throughout the night. Highly recommend!", rating: 5 },
  { name: "Rajesh Agarwal", event: "Corporate Annual Meet", text: "Professional, punctual, and incredibly talented. Yash handled our 500+ employee event flawlessly. The best anchor we've ever worked with.", rating: 5 },
  { name: "Sunita Mehra", event: "Full Wedding Management", text: "From planning to execution, the team delivered beyond our expectations. Every detail was perfect, and Yash's anchoring added that extra magic to our celebrations.", rating: 5 },
];

const whyChooseUs = [
  { title: "High-Energy Stage Presence", description: "Dynamic, engaging hosting that keeps audiences active, entertained, and emotionally connected throughout the event." },
  { title: "150+ Celebrity & High-Profile Wedding Events", description: "Experienced in hosting luxury weddings with celebrity presence and elite audiences." },
  { title: "Bilingual Fluency", description: "Fluent in both Hindi and English for seamless multilingual events" },
  { title: "05+ Years Experience", description: "Extensive experience across weddings, corporate shows, award nights, and large-scale live events." },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "url": "https://yashsoni.in",
    "jobTitle": "Event Anchor & Emcee",
    "worksFor": { "@type": "Organization", "name": "Yash Soni Events" },
    "sameAs": ["https://instagram.com/anchor_yash_official", "https://youtube.com/@anchoryashsoni"]
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* --- BACKGROUND SLIDER --- */}
        <HeroSlider />

        {/* --- CONTENT --- */}
        <div className="relative container mx-auto px-4 pt-32 pb-20 z-20">
          
          <div className="absolute top-20 left-0 right-0 flex justify-center">
             <div className="bg-amber-600 text-black text-xs md:text-sm font-bold py-2 px-6 rounded-full animate-pulse shadow-lg shadow-amber-900/50">
               📅 Booking Fast for Jan-Feb 2026 Wedding Season! <Link href="/contact" className="underline hover:text-white ml-1">Check Dates</Link>
             </div>
          </div>

          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6 backdrop-blur-sm">
                Jaipur's Leading Event Anchor
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.1 }} 
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              The Most Engaging <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Anchor in Jaipur</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Premium Wedding & Corporate Event Anchor
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg text-amber-400 font-medium mb-8">
              1100+ Events • Weddings • Corporate • Sports • Fashion Shows • Event Planning & Designing
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer">
                  Book Now <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-8 py-4 border border-white/30 bg-black/30 backdrop-blur-md text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center gap-2 cursor-pointer">
                  <Play className="w-5 h-5" /> View Portfolio
                </span>
              </Link>
              <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <span className="px-8 py-4 border border-white/30 bg-black/30 backdrop-blur-md text-white font-bold rounded-full hover:border-pink-500 hover:text-pink-500 transition-all flex items-center gap-2 cursor-pointer">
                  <Instagram className="w-5 h-5" /> Instagram
                </span>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex items-center gap-3 backdrop-blur-sm p-2 rounded-lg inline-block bg-black/20"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-300 font-medium">Rated 5.0 by 500+ Happy Clients</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-amber-500 mb-2">{stat.number}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Anchoring Services Section */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Anchoring Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Professional Event <span className="text-amber-500">Hosting</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">From weddings to corporate events, experience high-energy hosting that captivates your audience</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {anchoringServices.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div className="group relative overflow-hidden rounded-2xl" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Link href={service.link}>
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-800">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <Link href="/anchoring">
            <span className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all inline-flex items-center gap-2 mx-auto cursor-pointer">
              View All Anchoring Services <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Why Choose Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            What Sets My Hosting Style <span className="text-amber-500">Apart</span>
          </h2>
        </div>

        <StaggerContainer className="grid md:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div className="h-full p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 mb-8">Trusted by leading brands and events</p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge) => (
              <span key={badge} className="px-6 py-3 bg-black border border-neutral-800 rounded-full text-sm text-gray-400 font-medium">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            What Our <span className="text-amber-500">Clients</span> Say
          </h2>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="h-full p-8 bg-neutral-900 border border-neutral-800 rounded-2xl">
                <Quote className="w-10 h-10 text-amber-500/30 mb-6" />
                <p className="text-gray-400 mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />)}
                  </div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.event}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {homeFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Make Your Event <span className="text-amber-500">Unforgettable?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Whether you need professional anchoring or complete event management, we're here to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <span className="px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2 cursor-pointer">
                  Book Anchor Yash <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="px-10 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center gap-2 cursor-pointer">
                  <Play className="w-5 h-5" /> View My Work
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
