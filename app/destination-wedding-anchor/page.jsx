"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Crown, Star, Users, Phone, MessageCircle, Sparkles, Building, Heart } from "lucide-react";

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

// --- DATA ---
const destinationVenues = [
  {
    icon: Building,
    title: "Palace Weddings",
    description: "Host at iconic heritage palaces like City Palace, Taj Lake Palace, and Rambagh Palace with royal grandeur.",
  },
  {
    icon: MapPin,
    title: "Udaipur Celebrations",
    description: "The Venice of the East offers breathtaking lakeside venues perfect for fairy-tale destination weddings.",
  },
  {
    icon: Crown,
    title: "Jaipur Heritage",
    description: "Pink City's majestic forts and havelis provide the perfect backdrop for unforgettable celebrations.",
  },
  {
    icon: Sparkles,
    title: "Jodhpur Grandeur",
    description: "Blue City's stunning Mehrangarh Fort and Umaid Bhawan create magical wedding memories.",
  },
];

const whyChoose = [
  "Experience hosting 200+ destination weddings across Rajasthan",
  "Fluent in Hindi, English, and familiar with regional dialects",
  "Understanding of palace protocols and heritage venue requirements",
  "Coordination with local vendors and event teams",
  "Flexible with multi-day wedding celebrations",
  "Professional handling of diverse guest demographics",
];

const faqs = [
  {
    question: "What makes a destination wedding anchor different from a regular wedding host?",
    answer: "A destination wedding anchor understands the unique dynamics of out-of-town celebrations—managing diverse guest groups, coordinating with unfamiliar venues, adapting to heritage location acoustics, and keeping the energy high across multi-day events. I bring experience from 200+ destination weddings across Rajasthan's most prestigious venues.",
  },
  {
    question: "Which palace venues in Rajasthan do you host weddings at?",
    answer: "I've hosted weddings at Rajasthan's finest heritage properties including City Palace Jaipur, Taj Lake Palace Udaipur, Rambagh Palace, Umaid Bhawan Palace Jodhpur, Oberoi Rajvilas, Fairmont Jaipur, and numerous boutique heritage havelis.",
  },
  {
    question: "Do you travel for destination weddings outside Rajasthan?",
    answer: "Absolutely. While Rajasthan is my home base and specialty, I regularly travel for destination weddings across India—Goa, Kerala, Himachal, and beyond. Travel arrangements and accommodation are discussed during booking.",
  },
  {
    question: "How do you handle multi-day wedding events?",
    answer: "Destination weddings often span 3-5 days. I maintain consistent energy while adapting the tone for each function—playful for mehendi, high-energy for sangeet, emotional for the pheras, and celebratory for the reception.",
  },
  {
    question: "What languages do you host in for destination weddings?",
    answer: "I'm fluent in Hindi and English, which covers most destination wedding requirements. For NRI weddings or events with international guests, I seamlessly blend both languages to ensure everyone feels included.",
  },
];

export default function DestinationWeddingAnchorRajasthan() {
  const whatsappMessage = encodeURIComponent(
    "Hi Anchor Yash, I'm planning a destination wedding in Rajasthan and would like to discuss hosting services."
  );

  // Schema for Destination Wedding Service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Destination Wedding Anchor Services Rajasthan",
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
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan",
    },
    "description": "Professional destination wedding anchor and palace wedding host services across Rajasthan including Jaipur, Udaipur, and Jodhpur.",
    "serviceType": "Destination Wedding Anchoring",
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
              Destination Wedding Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Destination Wedding Anchor <span className="text-amber-500">Rajasthan</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Palace wedding host in Jaipur, Udaipur, and Jodhpur. Bringing royal celebrations to life at Rajasthan's most iconic heritage venues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/917737877978?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all hover:scale-105">
                  <MessageCircle className="w-5 h-5" /> Discuss Your Wedding
                </button>
              </a>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 border border-neutral-700 hover:border-amber-500 text-white font-bold rounded-full transition-all hover:scale-105">
                  <Phone className="w-5 h-5" /> Contact Now
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
              Why Rajasthan for Your <span className="text-amber-500">Dream Wedding?</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Rajasthan isn't just a destination—it's an experience. From the pink sandstone walls of Jaipur to the shimmering lakes of Udaipur and the blue-hued streets of Jodhpur, every corner of this royal state tells a story. When couples choose Rajasthan for their destination wedding, they're choosing a backdrop that transforms their celebration into a fairy tale.
              </p>
              <p>
                As a destination wedding anchor with deep roots in Rajasthan, I understand what makes these celebrations special. It's not just about hosting an event—it's about honoring the grandeur of palace venues, respecting heritage protocols, and creating moments that match the magnificence of your surroundings. Having hosted over 200 destination weddings across the state, I bring local expertise combined with professional hosting that elevates every function.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destination Venues */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Premier <span className="text-amber-500">Destination Venues</span>
            </h2>
            <p className="text-gray-400">Experienced in hosting at Rajasthan's most prestigious wedding destinations</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationVenues.map((venue, index) => (
            <StaggerItem key={index}>
              <div className="h-full bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                  <venue.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{venue.title}</h3>
                <p className="text-gray-400 text-sm">{venue.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* The Experience */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
              The Destination Wedding <span className="text-amber-500">Experience</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Destination weddings demand more than just a good microphone voice. When families travel from across India—and often across the world—to celebrate at a Rajasthani palace, every element needs to come together perfectly.
              </p>
              <p>
                The challenge with heritage venues is unique. Palace acoustics differ from conventional banquet halls. Guest demographics span multiple generations and sometimes multiple countries. Ceremonies need to respect both tradition and the venue's heritage character. I've learned to navigate these nuances through years of experience.
              </p>
              <p>
                My coordination extends beyond the stage. I work closely with wedding planners, venue teams, and technical crews to ensure smooth transitions between functions. For destination weddings, this backstage coordination is just as important as what happens in front of the guests.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Couples <span className="text-amber-500">Trust Me</span></h2>
          <p className="text-gray-400">What sets a destination wedding anchor apart</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {whyChoose.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-colors">
                  <Star className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Multi-Day Events */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Multi-Day <span className="text-amber-500">Celebrations</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-center">
              <p>
                Rajasthani destination weddings rarely fit into a single evening. From the colorful mehendi afternoon to the emotional vidaai, these celebrations unfold over three to five days—each function with its own mood, pace, and requirements.
              </p>
              <p>
                The sangeet needs high energy. The haldi calls for warmth. The wedding day balances ritual with joy. I adapt my hosting style for each function while maintaining the thread that connects your entire wedding story.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Frequently Asked <span className="text-amber-500">Questions</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
                <h3 className="font-display font-bold text-lg mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-amber-500/5 to-transparent text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Users className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Planning a Destination Wedding in <span className="text-amber-500">Rajasthan?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Let's discuss how I can bring your palace wedding vision to life. From venue-specific planning to multi-day coordination, I'm here to make your celebration unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/917737877978?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </button>
              </a>
              <Link href="/contact">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Contact Page
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <p className="text-gray-500 text-sm mb-4">Explore more services:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/wedding-anchor-jaipur" className="text-amber-500 hover:underline text-sm">Wedding Anchor Jaipur</Link>
              <Link href="/sangeet-anchor-jaipur" className="text-amber-500 hover:underline text-sm">Sangeet Anchor Jaipur</Link>
              <Link href="/event-management-company-jaipur" className="text-amber-500 hover:underline text-sm">Event Management Jaipur</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
