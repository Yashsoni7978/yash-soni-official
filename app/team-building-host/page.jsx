"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Users, Target, Trophy, Smile, Zap, Activity, Plus, Minus } from "lucide-react";

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
const teamBuildingServices = [
  { icon: Users, title: "Ice Breakers", description: "Quick, energetic activities to warm up the room and get strangers talking instantly." },
  { icon: Target, title: "Goal-Based Challenges", description: "Strategic games that require collaboration, planning, and execution to solve problems." },
  { icon: Trophy, title: "Corporate Tournaments", description: "Organizing cricket matches, tug-of-war, or box cricket leagues for large employee groups." },
  { icon: Smile, title: "Fun Friday Hosts", description: "Weekly virtual or in-office engagement sessions to keep morale high and stress low." },
];

const activityTypes = [
  { title: "Drum Circles", description: "Rhythmic synchronization where every employee plays a beat to create one collective sound." },
  { title: "Scavenger Hunts", description: "Exciting treasure hunts across the resort or office premises to build navigation and teamwork skills." },
  { title: "The Squid Game (Safe Version)", description: "Hosting popular challenges like Red Light-Green Light for pure adrenaline fun." },
  { title: "Talent Hunt", description: "Unearthing hidden singers, dancers, and comedians within your workforce." },
  { title: "Blindfold Challenges", description: "Trust-building exercises where communication is the only tool available." },
  { title: "Rapid Fire Quiz", description: "Fast-paced trivia about the company, pop culture, and general knowledge." },
];

const teamBuildingFAQs = [
  { question: "Why do we need a professional host for team building?", answer: "An internal HR manager can organize games, but a professional host brings neutral authority, high energy, and the skill to manage crowd dynamics without office politics coming into play." },
  { question: "Can you manage large groups (100+ employees)?", answer: "Yes, I specialize in large-format engagement. I use microphones, clear instructions, and subgroup division strategies to ensure 100 or 1000 employees are all engaged simultaneously." },
  { question: "Do you bring your own props and materials?", answer: "Yes, for standard games (ropes, balls, placards, blindfolds), I bring my own kit. For specialized setups (like drum circles or paintball), I coordinate with vendors." },
  { question: "Can you conduct indoor activities for small offices?", answer: "Absolutely. I have a 'Conference Room' module designed specifically for small spaces, focusing on mental challenges, quizzes, and seated ice-breakers." },
  { question: "Do you do virtual team building?", answer: "Yes, I host engaging Zoom/Teams sessions with virtual scavenger hunts, Pictionary, and polls for remote teams." },
  { question: "How long does a typical session last?", answer: "A standard high-energy session lasts 60 to 90 minutes. Full-day offsite facilitation can range from 4 to 6 hours with breaks." }
];

export default function TeamBuildingHost() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Team Building Host Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Corporate Team Building",
    "description": "Energetic team building host and game show anchor for corporate offsites and employee engagement in Jaipur.",
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
              Employee Engagement Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Team Building Host in <span className="text-amber-500">Jaipur</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Recharge your workforce. Transform groups of strangers into a unified, high-performing team through energy, laughter, and strategic play.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2">
                  Book for Offsite <ChevronRight className="w-5 h-5" />
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              More Than Just <span className="text-amber-500">Games</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6 text-center">
              <p>
                In the corporate world, "Team Building" often gets a bad reputation for being awkward or forced. My goal is to change that. I believe the best team bonding happens when people forget they are at work.
              </p>
              <p>
                As a Team Building Host, I don't just run drills; I create an atmosphere of psychological safety where the intern feels comfortable high-fiving the CEO. Whether it's a 2-day residential offsite in a Rajasthan resort or a quick 2-hour energy booster in your Jaipur office, I bring the spark that reignites connection.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Engagement <span className="text-amber-500">Modules</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamBuildingServices.map((service) => (
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
                Popular <span className="text-amber-500">Activities</span>
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
                    <Zap className="w-5 h-5 text-amber-500" />
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">{activity.description}</p>
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
            { icon: Users, number: "50+", label: "Offsites Hosted" },
            { icon: Activity, number: "High", label: "Energy Levels" },
            { icon: Smile, number: "100%", label: "Employee Smiles" },
            { icon: Trophy, number: "200+", label: "Games Conducted" },
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
        <h2 className="text-3xl font-display font-bold text-center mb-12">Team Building FAQs</h2>
        <div className="space-y-2">
          {teamBuildingFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Energize Your <span className="text-amber-500">Workforce</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Let's plan an activity session that your team will actually enjoy. No boring trust falls, just pure engagement.
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