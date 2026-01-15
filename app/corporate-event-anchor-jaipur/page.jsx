"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Briefcase, Award, Users, Target, Phone, Star, MapPin, Mic, Plus, Minus } from "lucide-react";

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
const corporateServices = [
  { icon: Briefcase, title: "Conference Hosting", description: "Professional emceeing for conferences, seminars, and business summits with polished delivery" },
  { icon: Award, title: "Award Ceremonies", description: "Elegant hosting for recognition events, annual awards, and achievement celebrations" },
  { icon: Users, title: "Team Building Events", description: "Energetic facilitation of team activities, offsites, and employee engagement programs" },
  { icon: Target, title: "Product Launches", description: "Dynamic anchoring for product unveilings, brand launches, and promotional events" },
];

const eventTypes = [
  { title: "Annual Conferences", description: "Multi-session corporate conferences with keynote introductions, panel moderation, and seamless session transitions." },
  { title: "R&R Events", description: "Recognition and rewards ceremonies that celebrate achievements while maintaining corporate professionalism with entertainment." },
  { title: "Town Halls & AGMs", description: "Formal corporate gatherings requiring precise timing, professional delivery, and audience management expertise." },
  { title: "Corporate Celebrations", description: "Milestone celebrations, anniversary events, and festive gatherings that balance professionalism with celebration." },
  { title: "Dealer & Partner Meets", description: "Business networking events, dealer conferences, and partner appreciation events with engaging hosting." },
  { title: "Training & Workshops", description: "Interactive facilitation for corporate training sessions, workshops, and skill development programs." },
];

const clients = ["IT Companies", "Manufacturing", "Hospitality", "Healthcare", "Finance & Banking", "Real Estate", "Education", "Retail", "Pharmaceuticals", "Startups"];

const corporateFAQs = [
  { question: "Have you hosted formal Corporate Award Nights?", answer: "Yes, I have hosted over 100+ formal events including R&R Awards, CEO Summits, and Government conclaves. I maintain strict professional decorum and stage etiquette." },
  { question: "Can you conduct Team Building activities?", answer: "I am a specialist Game Show Host. I conduct energy-boosting ice-breakers and team-building challenges that improve employee morale and collaboration." },
  { question: "Do you require a script from the company?", answer: "I am flexible. I can strictly follow your corporate script for compliance, or I can provide professional improvisation if you want a more natural flow." },
  { question: "How do you handle VIPs and Dignitaries on stage?", answer: "I have extensive experience managing VIP protocol, ensuring correct names, titles, and order of precedence are followed during lamp lighting and speeches." },
  { question: "Can you host Product Launches in Jaipur?", answer: "Yes, I host Product Launches for automobiles, tech, and FMCG brands, ensuring the product reveal is high-energy and impactful." },
  { question: "Do you host Mall Activations and Roadshows?", answer: "Yes, I am known for my high energy in Mall Activations (Malls in Jaipur/Delhi) to gather crowds and drive customer engagement for brands." },
  { question: "What attire do you wear for corporate events?", answer: "I adhere to strict grooming standards. I wear formal Tuxedos or Suits for galas, and smart casuals for team-building offsites, matching your brand image." },
  { question: "Can you anchor in fluent English for international delegates?", answer: "Yes, I am fluent in global-standard English and can easily host events with international delegates and expats." },
  { question: "Do you raise a GST invoice for corporate billing?", answer: "Yes, we provide proper GST invoices for all corporate bookings to ensure smooth vendor registration and payment processing." },
  { question: "Can you manage the 'Fun' part after the formal conference?", answer: "Absolutely. I can seamlessly switch roles from a 'Formal Emcee' during the day to a 'Gala Night Host' in the evening to make the party unforgettable." },
  { question: "Do you host Dealer Meets and distributor conferences?", answer: "Yes, I connect well with dealer networks, mixing business talk with engaging entertainment to keep the partners motivated." },
  { question: "How much experience do you have with Corporate Events?", answer: "I have worked with top brands like Tata, Reliance, and government bodies, delivering over 300+ successful corporate shows." }
];

export default function CorporateEventAnchorJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Event Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Corporate Event Anchoring",
    "description": "Professional corporate event anchoring services for conferences, award ceremonies, product launches, and business events in Jaipur.",
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
              Corporate Event Anchor
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Corporate Event Anchor in <span className="text-amber-500">Jaipur</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Elevate your corporate events with professional anchoring that combines polished delivery, precise timing, and engaging stage presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Book for Your Event <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20want%20to%20inquire%20about%20corporate%20anchoring." target="_blank" rel="noopener noreferrer">
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
              Professional Anchoring for <span className="text-amber-500">Business Excellence</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6">
              <p>
                Corporate events demand a different kind of anchoring—one that balances professionalism with engagement, precision with personality. In Jaipur's growing business landscape, companies need anchors who understand corporate culture, can handle formal protocols, and still keep audiences attentive throughout long conference days or celebratory evenings.
              </p>
              <p>
                With experience hosting over 70 corporate clients across industries—from IT giants to manufacturing leaders, hospitality brands to financial institutions—I bring a refined approach to business event hosting. Whether it's a high-stakes product launch, an annual conference for 500+ attendees, or an intimate leadership summit, the anchoring adapts to reflect your brand's values and event objectives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Corporate Anchoring <span className="text-amber-500">Services</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateServices.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="h-full flex flex-col p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{service.title}</h3>
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
                Corporate Events I <span className="text-amber-500">Anchor</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event) => (
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
              Trusted by <span className="text-amber-500">Businesses</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, number: "70+", label: "Corporate Clients" },
            { icon: Briefcase, number: "200+", label: "Business Events" },
            { icon: Users, number: "50,000+", label: "Audience Reached" },
            { icon: MapPin, number: "10+", label: "Industries Served" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div className="text-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl" whileHover={{ scale: 1.05 }}>
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.number}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Industries</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Sectors I've <span className="text-amber-500">Worked With</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {clients.map((client) => (
              <StaggerItem key={client}>
                <motion.div
                  className="px-6 py-3 bg-black border border-neutral-800 rounded-full text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {client}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Corporate Event FAQs</h2>
        <div className="space-y-2">
          {corporateFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Elevate Your Next <span className="text-amber-500">Corporate Event</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how professional anchoring can enhance your business event. Share your requirements for a customized approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2">
                  Get in Touch <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:+917737877978">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Also explore our <Link href="/wedding-anchor-jaipur" className="text-amber-500 hover:underline">wedding anchoring</Link> and <Link href="/event-management-company-jaipur" className="text-amber-500 hover:underline">event management services</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}