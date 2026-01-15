"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Music, Heart, Sun, Smile, Users, Star, Mic, Camera, Plus, Minus } from "lucide-react";

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
const ceremonyServices = [
  { icon: Sun, title: "Haldi Ceremony", description: "Engaging hosting for the Haldi ritual with fun commentary, flower showers, and traditional beats." },
  { icon: Music, title: "Mehndi & Sangeet", description: "High-energy anchoring for Ladies Sangeet, Antakshari, and dance performances." },
  { icon: Smile, title: "Family Games", description: "Interactive games like 'Shoe Game', 'Ring Discovery', and couple quizzes to break the ice." },
  { icon: Heart, title: "Bhaat & Mayra", description: "Traditional hosting for cultural rituals with respectful yet entertaining narration." },
];

const activityTypes = [
  { title: "Couple Games", description: "Fun compatibility tests and lighthearted roasts for the bride and groom." },
  { title: "Ladies Sangeet Antakshari", description: "Organizing the classic boys vs girls singing battle with high energy." },
  { title: "Dholki Night Hosting", description: "Traditional songs and boliyan sessions managed with enthusiasm." },
  { title: "Family Roasts", description: "Respectful but hilarious introductions of key family members." },
  { title: "Dance Performance Intros", description: "Hype-building introductions for every cousin and auntie performing on stage." },
  { title: "Ritual Narration", description: "Explaining the significance of rituals to younger guests in an engaging way." },
];

const haldiMehndiFAQs = [
  { question: "How is a Haldi anchor different from a main Wedding anchor?", answer: "Haldi and Mehndi events are informal, intimate, and chaotic (in a good way!). My role is less about formal announcements and more about being a 'Family Friend'—cracking jokes, managing the dholwala, getting shy uncles to dance, and keeping the energy high." },
  { question: "Can you host in Marwari or local dialects?", answer: "Yes! Being from Jaipur, I add Marwari touches and Desi humor to connect with the elders, while keeping the vibe cool enough for the youngsters. It's a perfect blend of tradition and modern fun." },
  { question: "Do you organize games for the Mehndi function?", answer: "Absolutely. Mehndi can be long for the bride. I organize engaging games like 'Paper Dance', 'Find the Groom', and 'Saree Draping Challenge' to keep the guests entertained while the henna is being applied." },
  { question: "How do you handle Ladies Sangeet Antakshari?", answer: "I take full charge of the mic to organize the Antakshari (Boys vs Girls), introduce dance performances with high energy, and ensure there are no awkward silences between tracks." },
  { question: "Do you bring your own props for games?", answer: "Yes, I bring quirky props for games (like placards, ribbons, fun glasses) to make the photos look colorful and the activities more engaging." },
  { question: "Can you manage the 'Bhaat' or 'Mayra' ceremony?", answer: "Yes, I understand the cultural significance of the Bhaat ceremony in Rajasthan. I host it with a mix of respect for the ritual and celebratory joy for the maternal family's arrival." },
  { question: "How long do you stay for a Haldi/Mehndi event?", answer: "I typically stay for the entire duration of the main rituals and entertainment, usually 3-4 hours, ensuring the energy never drops until the food is served or the DJ takes over." },
  { question: "Do you help with music selection for Sangeet?", answer: "Yes! I can suggest a playlist of trending Bollywood and Folk songs for dance performances and background music to keep the vibe lively." },
  { question: "What if the bride/groom is shy?", answer: "I specialize in making shy couples feel comfortable. I use low-pressure games like the 'Shoe Game' where they just have to lift props, rather than speaking on the mic, to get them involved." },
  { question: "Do you host 'Pool Parties' for weddings?", answer: "Yes! For modern weddings with a Pool Party, I switch to a 'Club MC' avatar with rain dance games, water balloon fights, and high-octane commentary." },
  { question: "Can you engage both kids and elderly guests?", answer: "My hosting style is inclusive. I have specific games for kids to keep them busy, and respectful interactions/banter for the elders so everyone feels part of the celebration." },
  { question: "How far in advance should we book you?", answer: "Since auspicious dates are limited, it is best to book 2-3 months in advance. However, feel free to check for last-minute availability." }
];

export default function HaldiMehndiAnchor() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Haldi & Mehndi Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Wedding Event Anchoring",
    "description": "Fun and traditional anchor for Haldi, Mehndi, and Sangeet ceremonies in Jaipur. Expert in family games and ladies sangeet hosting.",
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
              Pre-Wedding Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Haldi & Mehndi Anchor in <span className="text-amber-500">Jaipur</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8 px-4">
              Add laughter, games, and traditional charm to your pre-wedding functions. The perfect host for a fun-filled family celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Book for Sangeet/Haldi <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20looking%20for%20an%20anchor%20for%20Haldi/Mehndi." target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Inquiry
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
              Making Rituals <span className="text-amber-500">Fun & Memorable</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed text-center space-y-4">
              <p>Pre-wedding functions like Haldi, Mehndi, and Sangeet are the heart of Indian weddings. These are the moments where families bond, laughter flows, and memories are made. However, without a host, these events can often feel scattered or dull.</p>
              <p>As your Haldi and Mehndi anchor, I act as the bridge between the bride's side and the groom's side. My job is to break the ice, get the 'shy cousins' on the dance floor, and turn traditional rituals into engaging celebrations that everyone—from kids to grandparents—enjoys.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ceremony Services */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Ceremonies I <span className="text-amber-500">Host</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ceremonyServices.map((service) => (
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

      {/* Activity Types */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                Games & <span className="text-amber-500">Entertainment</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityTypes.map((activity) => (
              <StaggerItem key={activity.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-black border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-amber-500" />
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">{activity.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Creating <span className="text-amber-500">Happy Families</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Heart, number: "200+", label: "Haldi Ceremonies" },
            { icon: Music, number: "150+", label: "Sangeet Nights" },
            { icon: Users, number: "1000s", label: "Smiles Created" },
            { icon: Camera, number: "Uncounted", label: "Selfies Taken" },
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
        <h2 className="text-3xl font-display font-bold text-center mb-12">Haldi & Mehndi FAQs</h2>
        <div className="space-y-2">
          {haldiMehndiFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Make Your Pre-Wedding <span className="text-amber-500">Lit!</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to add some craziness to your Haldi and Sangeet? Contact me today.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all flex items-center gap-2">
                  Get a Quote <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}