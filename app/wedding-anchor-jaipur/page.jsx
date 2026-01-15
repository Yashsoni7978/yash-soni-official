"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Heart, Music, Users, Sparkles, Phone, Star, MapPin, Mic, CalendarHeart, Plus, Minus } from "lucide-react";

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
const weddingServices = [
  { icon: Music, title: "Sangeet Ceremony", description: "High-energy anchoring for Sangeet nights, dance battles, and family performances that keeps the crowd on their feet." },
  { icon: Sparkles, title: "Varmala Themes", description: "Royal and poetic hosting for the Jaimala ceremony, ensuring the most photographed moment is magical." },
  { icon: Users, title: "Haldi & Mehandi", description: "Interactive fun, couple games, and ice-breakers to engage guests during daytime pre-wedding rituals." },
  { icon: Star, title: "Reception & Ring Ceremony", description: "Elegant and sophisticated hosting for formal receptions, cake cutting, and ring exchange ceremonies." },
];

const weddingEventTypes = [
  { title: "Destination Weddings", description: "Specialized in hosting 2-3 day destination weddings in Udaipur, Jodhpur, Jaisalmer, and Pushkar." },
  { title: "Sangeet Nights", description: "The highlight of Indian weddings—I manage the flow of performances, DJ interactions, and open dance floors." },
  { title: "Haldi Carnivals", description: "Turning traditional Haldi into a fun carnival with props, rapid-fire rounds, and family interaction." },
  { title: "Varmala Concepts", description: "Executing themed Varmala entries (Ganga Aarti, Vintage, Flower Shower) with perfect voice-over coordination." },
  { title: "Pool Parties", description: "Casual, high-vibe anchoring for welcome lunches and pool parties to break the ice between the two families." },
  { title: "After Parties", description: "Keeping the energy alive post-midnight for the youngsters with engaging games and DJ hype." },
];

const weddingStyles = [
  "Royal Palaces", "Beach Weddings", "Heritage Resorts", "Luxury Hotels", "Open Lawns", "Banquet Halls", "Poolside Venues", "Fort Weddings", "Intimate Gatherings", "Grand Galas"
];

const weddingFAQs = [
  { question: "Do you travel for destination weddings outside Jaipur?", answer: "Absolutely! I frequently host destination weddings in Udaipur, Jodhpur, Jaisalmer, Pushkar, and across India. Travel and stay are arranged by the client." },
  { question: "What is your anchoring style: Funny or Formal?", answer: "I blend both! I am energetic and witty for Sangeet/Haldi to get people laughing, but graceful and poetic (Shayari) for Varmala and Pheras." },
  { question: "How do you handle a crowd that isn't dancing?", answer: "That’s my specialty. I use proven ice-breaker games, 'Ladkewale vs Ladkiwale' banter, and interactive couples activities to naturally build momentum." },
  { question: "Do you provide scripts for family performances?", answer: "Yes, I help frame the script for family performances and can provide voice-overs to make the Sangeet flow like a Bollywood awards show." },
  { question: "What languages do you anchor in?", answer: "I am fluent in Hindi and English. I switch seamlessly between the two to ensure both the elders and the younger generation feel connected." },
  { question: "How many weddings have you hosted?", answer: "I have hosted over 1100+ events, with a major focus on weddings, Sangeets, and corporate shows over the last 5+ years." },
  { question: "Do you work with the DJ and Event Planner?", answer: "Yes, I coordinate directly with the DJ for music cues (fanfares, entry songs) and the planner to ensure the event timeline is followed strictly." },
  { question: "What do you wear for weddings?", answer: "I dress to impress! I wear premium Indo-Westerns, Jodhpuri Suits, or Tuxedos depending on the theme of your event (Haldi vs. Reception)." },
  { question: "Can you host the Varmala with poetry/Shayari?", answer: "Yes, I have a collection of royal Shayari and verses specifically for the Jaimala moment to make it emotional and grand." },
  { question: "How long do you stay at the event?", answer: "I am there from the start of the guest arrival until the end of the planned itinerary/party. I don't rush; I ensure the event finishes on a high note." },
  { question: "Do you conduct games for the Bride and Groom?", answer: "Yes! Shoe Game, Compatibility Test, Ring Hunt—I have a list of trending wedding games to make the couple the center of attention." },
  { question: "How do we book you?", answer: "You can contact me via WhatsApp or call directly to check availability for your wedding dates. It is best to book 2-3 months in advance." }
];

export default function WeddingAnchorJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wedding Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan, Udaipur, Jodhpur",
    },
    "serviceType": "Wedding Emcee & Host",
    "description": "Premium wedding anchor in Jaipur for Sangeet, Varmala, and Destination Weddings. 1100+ events hosted.",
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
              Premium Wedding Emcee
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              More Than Just a Mic – I Bring the <span className="text-amber-500">Life</span> to Your Wedding
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8 px-4">
              Jaipur’s Premier Anchor for High-Energy Sangeets, Emotional Varmalas, and Unforgettable Haldi Ceremonies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Check Availability <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20am%20looking%20for%20an%20anchor%20for%20my%20wedding." target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Me
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
              Making Every Moment <span className="text-amber-500">Unforgettable</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6">
              <p>
                A wedding isn't just about rituals; it's about the laughter during the Haldi, the competitive spirit during the Sangeet dance battles, and the teary-eyed silence during the Varmala. As a Wedding Anchor, my job isn't just to speak—it's to connect hearts.
              </p>
              <p>
                With over <strong>5+ years of experience</strong> in Jaipur and Rajasthan's destination wedding circuit, I know exactly how to read a room. Whether it's engaging the elders with respectful humor or getting the shy cousins on the dance floor, I ensure your guests are not just watching the wedding—they are <em>living</em> it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Ceremonies</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Events I <span className="text-amber-500">Host</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingServices.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="h-full flex flex-col p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
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
      </section>

      {/* Event Types Details */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Wedding <span className="text-amber-500">Highlights</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingEventTypes.map((event) => (
              <StaggerItem key={event.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-black border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-amber-500" />
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">{event.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Experience</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Why Families <span className="text-amber-500">Trust Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: CalendarHeart, number: "1100+", label: "Events Hosted" },
            { icon: Star, number: "5+", label: "Years Experience" },
            { icon: Users, number: "100k+", label: "Happy Guests" },
            { icon: MapPin, number: "15+", label: "Cities Covered" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="text-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-amber-500 mb-2">{stat.number}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Venues/Styles */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Venues</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Wedding Styles I <span className="text-amber-500">Handle</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {weddingStyles.map((style) => (
              <StaggerItem key={style}>
                <motion.div
                  className="px-6 py-2 bg-black border border-neutral-800 rounded-full text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {style}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Wedding Anchor FAQs</h2>
        <div className="space-y-2">
          {weddingFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Create <span className="text-amber-500">Magic?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Dates for the wedding season fill up fast. Let's discuss your Sangeet ideas and block your dates today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2">
                  Book Now <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:+917737877978">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Looking for corporate events? Check out my <Link href="/corporate-event-anchor-jaipur" className="text-amber-500 hover:underline">Corporate Anchor Profile</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}