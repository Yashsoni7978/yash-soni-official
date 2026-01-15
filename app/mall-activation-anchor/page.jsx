"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Megaphone, ShoppingBag, TrendingUp, Users, Mic2, Gift, Star, Volume2, Plus, Minus } from "lucide-react";

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
const mallServices = [
  { icon: Megaphone, title: "Product Launches", description: "Creating hype and gathering crowds for new store openings or product unveils in malls." },
  { icon: Users, title: "Crowd Engagement", description: "Stopping the walking footfall and converting them into an active audience through interaction." },
  { icon: Gift, title: "Contests & Giveaways", description: "Hosting rapid-fire quizzes and lucky draws to distribute brand merchandise effectively." },
  { icon: TrendingUp, title: "Sales Promotion", description: "Driving instant sales through persuasive talking points and limited-time offer announcements." },
];

const activationTypes = [
  { title: "Mall Atrium Events", description: "Center-stage hosting in major malls like WTP, GT Central, and MGF." },
  { title: "Store Launches", description: "Ribbon-cutting ceremonies and initial crowd management for new outlets." },
  { title: "Roadshows", description: "Outdoor mobile van promotions (Canter activities) across Jaipur city." },
  { title: "Festive Activations", description: "Diwali, Christmas, or New Year themed events to boost holiday sales." },
  { title: "Celebrity Visits", description: "Managing the crowd and warming up the audience before a celebrity appearance." },
  { title: "Flash Mobs", description: "Coordinating surprise performances to grab instant attention." },
];

const mallActivationFAQs = [
  { question: "How do you stop people walking by in a busy mall?", answer: "Voice modulation and energy are key. I use catchy hooks, direct interaction ('Sir in the blue shirt!'), and instant gratification (small gifts/chocolates) to build an initial crowd circle. Once a crowd forms, the 'FOMO' effect attracts even more people." },
  { question: "Can you memorize brand USPs for the pitch?", answer: "Yes, that is essential. Before the event, I study the product's key selling points. I weave these USPs into the games and announcements so the audience learns about the product without feeling like they are watching a boring ad." },
  { question: "Do you have experience with Jaipur crowds?", answer: "I have anchored at World Trade Park (WTP), GT Central, Triton, and Pink Square. I understand the Jaipur audience—what jokes work, what language they prefer (Hindi/English mix), and what prizes excite them." },
  { question: "How long can you anchor continuously?", answer: "Mall activations are marathons. I have the stamina to host multiple 45-minute sets throughout the day with consistent high energy, ensuring the evening peak hours get the best performance." },
  { question: "Do you host outdoor Roadshows and Canter activities?", answer: "Yes! I am experienced in hosting roadshows on mobile vans (canters). I know how to grab attention in residential colonies and markets using high-volume interaction and music." },
  { question: "Can you handle Celebrity Management during launches?", answer: "Absolutely. I specialize in 'Warm-up' sessions to hype the crowd before the celebrity arrives and manage the stage flow during the celebrity interaction to ensure safety and excitement." },
  { question: "Do you bring your own mic or sound system?", answer: "Usually, the event production team provides the sound setup. However, for small roadshows, I can connect you with vendors who provide portable PA systems and mics." },
  { question: "What kind of games do you play for crowd engagement?", answer: "I play quick, high-energy games like 'Tongue Twisters', 'Biggest Fan Quiz', 'Dance Freeze', and 'Price is Right' to keep the crowd engaged without taking too much time." },
  { question: "Can you execute a Flash Mob event?", answer: "Yes, I can coordinate with dance troops to execute a surprise Flash Mob, stepping in immediately after the performance to convert the gathered crowd into potential customers." },
  { question: "Do you work on weekdays or just weekends?", answer: "I am available for both. While weekends see higher footfall, weekday activations are great for targeted interactions. I adjust my energy and strategy based on the crowd density." },
  { question: "How do you handle unruly crowds?", answer: "Safety is priority. I use humor and authoritative stage presence to manage enthusiastic crowds politely. I work closely with security to ensure giveaways happen in an orderly queue." },
  { question: "Do you help with scriptwriting for the promotion?", answer: "Yes, I can help refine your brand script to make it sound more conversational and punchy for a live audience, ensuring your call-to-action (CTA) gets results." }
];

export default function MallActivationAnchor() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mall Activation Anchor Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Marketing Event Anchoring",
    "description": "Expert mall activation anchor and roadshow host in Jaipur. Specializing in crowd gathering and sales promotions.",
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
              Marketing & Promotions
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Mall Activation Anchor in <span className="text-amber-500">Jaipur</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Grab attention, gather crowds, and drive sales. The voice that turns footfall into customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Book for Promotion <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Turning Noise into <span className="text-amber-500">Numbers</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6 text-center">
              <p>In a busy mall or market, getting noticed is the hardest part. People are distracted. You need an anchor who doesn't just hold a mic, but commands the space.</p>
              <p>I specialize in "Crowd Gathering." Using high-energy interaction, witty one-liners, and engaging games, I stop the moving traffic and build an audience for your brand. My style is loud, clear, and persuasive—perfect for roadshows and mall setups.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Promotional <span className="text-amber-500">Services</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mallServices.map((service) => (
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

      {/* Activation Types */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Where I <span className="text-amber-500">Perform</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activationTypes.map((type) => (
              <StaggerItem key={type.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-black border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-amber-500" />
                    {type.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">{type.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Mic2, number: "100+", label: "Activations" },
            { icon: Users, number: "1000s", label: "Crowd Gathered" },
            { icon: ShoppingBag, number: "High", label: "Sales Conversion" },
            { icon: Star, number: "100%", label: "Brand Impact" },
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

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Promotional FAQs</h2>
        <div className="space-y-2">
          {mallActivationFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Boost Your Brand <span className="text-amber-500">Visibility</span>
            </h2>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2">
                  Book for Activation <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}