"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Music, Heart, Sparkles, Users, Phone, Star, MapPin, Plus, Minus } from "lucide-react";

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
const sangeetServices = [
  { icon: Music, title: "Sangeet Night Hosting", description: "High-energy hosting that keeps the dance floor alive and guests entertained throughout the celebration" },
  { icon: Heart, title: "Couple Introduction", description: "Heartfelt storytelling and fun couple games that make the bride and groom the stars of the evening" },
  { icon: Users, title: "Performance Coordination", description: "Seamless anchoring between family performances, ensuring smooth transitions and audience engagement" },
  { icon: Sparkles, title: "Interactive Entertainment", description: "Games, audience participation segments, and spontaneous fun that creates memorable moments" },
];

const eventTypes = [
  { title: "Traditional Sangeet", description: "Classic sangeet ceremonies with traditional music, family performances, and cultural rituals anchored with grace and energy." },
  { title: "Bollywood Theme Night", description: "High-energy Bollywood-themed sangeet with dance performances, movie dialogues, and filmi fun throughout the evening." },
  { title: "Fusion Sangeet", description: "Modern sangeet blending traditional elements with contemporary entertainment, DJ nights, and creative performances." },
  { title: "Intimate Sangeet", description: "Smaller, heartfelt gatherings focused on meaningful moments, storytelling, and close family bonding." },
];

const cities = ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Ajmer", "Bikaner", "Mount Abu", "Neemrana", "Alwar"];

const sangeetFAQs = [
  { question: "What makes a sangeet anchor different from a wedding anchor?", answer: "A sangeet anchor specializes in high-energy entertainment. Unlike the formal wedding ceremony, the Sangeet is about dance, music, and comedy. My role is to be the 'Hype Man', ensuring the energy never drops between performances." },
  { question: "Do you write the script for family performances?", answer: "Yes! I don't just announce names. I write personalized scripts, Shayaris, and witty one-liners for every Chacha, Bua, and Cousin performing, making them feel like celebrities on stage." },
  { question: "How do you handle delays between dance performances?", answer: "Delays are common. I fill these gaps with interactive crowd games, rapid-fire questions for the couple, or spontaneous dance-offs so the audience never feels bored." },
  { question: "Can you anchor sangeet in both Hindi and English?", answer: "Yes, I am fluent in both. For Jaipur weddings, I often use a mix of Hindi, English, and a touch of Marwari humor to connect with guests of all generations." },
  { question: "Do you coordinate with the DJ and Choreographer?", answer: "Absolutely. I arrive early to do a sound check, sync the performance list with the DJ console, and ensure the Choreographer's sequence is followed perfectly." },
  { question: "What kind of games do you play with the Couple?", answer: "I host trending games like the 'Shoe Game', 'Who is most likely to', and 'Ring Hunt'. These are lighthearted, photo-friendly, and great for breaking the ice." },
  { question: "Do you host the Ring Ceremony (Engagement) as well?", answer: "Yes, often the Ring Ceremony happens during the Sangeet. I switch to a formal, romantic tone for the ring exchange and cake cutting, before bringing the party vibe back for the dance floor." },
  { question: "How do you handle shy family members?", answer: "I never force anyone. I use group activities or 'Seat-based games' (like Antakshari) to get shy guests involved without making them feel self-conscious on stage." },
  { question: "Can you execute a specific theme (e.g., Retro or 90s)?", answer: "Yes! If you have a theme like 'Retro Bollywood' or 'Fairytale', I adapt my attire, script, and music choices to match that vibe completely." },
  { question: "How long do you stay for a Sangeet night?", answer: "I stay until the very end of the planned itinerary. Usually, this means from the start of the event until the DJ takes over for the open dance floor (approx 4-5 hours)." },
  { question: "Do you provide your own mic?", answer: "I can, but usually, the venue sound vendor provides the technical setup. I always carry a backup mic and my own run-sheet to ensure reliability." },
  { question: "How early should I book a sangeet anchor?", answer: "Sangeet dates (especially weekends in Nov-Feb) get booked 3-6 months in advance. It is best to secure your date as soon as the venue is finalized." }
];

export default function SangeetAnchorJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sangeet Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": {
        "@type": "State",
        "name": "Rajasthan",
      },
    },
    "serviceType": "Sangeet Anchoring",
    "description": "Professional sangeet anchoring services for weddings in Jaipur and Rajasthan. High-energy entertainment, performance coordination, and memorable celebrations.",
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
              Sangeet Anchor in Jaipur
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Sangeet Anchor in <span className="text-amber-500">Jaipur</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8 px-4">
              Make your sangeet night unforgettable with high-energy hosting that keeps the celebrations alive from the first beat to the last dance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Book for Your Sangeet <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20am%20looking%20for%20a%20Sangeet%20anchor." target="_blank" rel="noopener noreferrer">
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
              The Heart of Every <span className="text-amber-500">Sangeet Celebration</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6">
              <p>
                A sangeet is more than just a pre-wedding function—it's where families come together, friendships are celebrated, and the bride and groom are showered with love through music and dance. In Jaipur's rich wedding culture, the sangeet holds special significance, often becoming the most memorable night of the wedding festivities.
              </p>
              <p>
                As a sangeet anchor in Jaipur, I bring the perfect blend of energy, warmth, and entertainment coordination that transforms your sangeet from a series of performances into a cohesive celebration. With experience hosting over 700 events, including countless sangeet nights at palace venues, luxury hotels, and heritage properties across Rajasthan, I understand what makes these evenings truly special.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Sangeet Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              What I Bring to Your <span className="text-amber-500">Sangeet</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sangeetServices.map((service) => (
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

      {/* Event Types */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Event Types</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Sangeet Styles I <span className="text-amber-500">Anchor</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {eventTypes.map((event) => (
              <StaggerItem key={event.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-black border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
                    <Music className="w-5 h-5 text-amber-500" />
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
              Why Families Choose <span className="text-amber-500">Anchor Yash</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, number: "700+", label: "Events Hosted" },
            { icon: Heart, number: "300+", label: "Sangeet Nights" },
            { icon: Users, number: "5+", label: "Years Experience" },
            { icon: MapPin, number: "50+", label: "Venues Covered" },
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

      {/* Cities */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Coverage</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Sangeet Anchoring Across <span className="text-amber-500">Rajasthan</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {cities.map((city) => (
              <StaggerItem key={city}>
                <motion.div
                  className="px-6 py-2 bg-black border border-neutral-800 rounded-full text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {city}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Sangeet Hosting FAQs</h2>
        <div className="space-y-2">
          {sangeetFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Make Your Sangeet <span className="text-amber-500">Unforgettable?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Let's create a sangeet night that your family will talk about for years. Book a consultation to discuss your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2">
                  Book Your Sangeet Anchor <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:+917737877978">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Also explore our <Link href="/wedding-anchor-jaipur" className="text-amber-500 hover:underline">wedding anchoring</Link> and <Link href="/sangeet-anchor-jaipur" className="text-amber-500 hover:underline">other anchoring services</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}