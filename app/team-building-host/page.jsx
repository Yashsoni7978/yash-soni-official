"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Users, Target, Trophy, Smile, Zap, 
  Activity, Plus, Minus, Briefcase, Sparkles, Globe 
} from "lucide-react";

// --- BRANDING COMPONENTS ---
const GOLD_COLOR = "#D4AF37";

const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: GOLD_COLOR, 
    }}
  >
    {children}
  </span>
);

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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen 
          ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-[15px] pr-4 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
  { question: "Can you manage large groups (100+ employees)?", answer: "Yes, I specialize in large-format engagement. I use microphones, clear instructions, and subgroup division strategies to ensure everyone is engaged simultaneously." },
  { question: "Do you bring your own props and materials?", answer: "Yes, for standard games (ropes, balls, placards, blindfolds), I bring my own kit. You just show up and play." },
  { question: "Can you conduct indoor activities for small offices?", answer: "Absolutely. I have a 'Conference Room' module designed specifically for small spaces, focusing on mental challenges and quizzes." },
  { question: "Do you do virtual team building?", answer: "Yes, I host engaging Zoom/Teams sessions with virtual scavenger hunts and Pictionary for remote teams." },
  { question: "How long does a typical session last?", answer: "A standard high-energy session lasts 60 to 90 minutes. Full-day facilitation can range from 4 to 6 hours." }
];

export default function TeamBuildingHost() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#050505] z-10" />
          <img 
            src="/service-corporate.webp" 
            className="w-full h-full object-cover opacity-40 grayscale" 
            alt="Corporate Team Building Host Jaipur"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 px-5 py-2 rounded-full bg-[#D4AF37]/10 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">
                  Engagement & Bonding Specialist
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black leading-tight mb-6">
              Team Building <br /> <GoldTextureText>Host in Jaipur</GoldTextureText>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Recharge your workforce. Transform groups of strangers into a unified, high-performing team through unscripted energy and strategic play.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Book for Offsite
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-10 text-center uppercase tracking-tight">
              More Than Just <GoldTextureText>Games</GoldTextureText>
            </h2>
            <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-8 text-center font-light">
              <p>
                In the corporate world, "Team Building" often gets a bad reputation for being awkward. <strong className="text-white">I change that.</strong> Bonding happens best when people forget they are at work.
              </p>
              <p>
                I create an atmosphere of <strong className="text-[#D4AF37]">psychological safety</strong> where the intern feels comfortable high-fiving the CEO. Whether it's a 2-day residential offsite or a quick office booster, I bring the spark that reignites connection.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services/Modules */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold mb-4">The Strategy</p>
            <h2 className="text-4xl md:text-6xl font-display font-black">Engagement <GoldTextureText>Modules</GoldTextureText></h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamBuildingServices.map((service, idx) => (
            <ScrollReveal key={service.title} delay={idx * 0.1}>
              <div className="h-full flex flex-col p-8 bg-neutral-900/50 border border-white/5 rounded-3xl hover:border-[#D4AF37]/50 transition-all duration-500 group">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Activity Grid */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <ScrollReveal>
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold mb-4">The Fun Menu</p>
              <h2 className="text-4xl md:text-6xl font-display font-black">Popular <GoldTextureText>Activities</GoldTextureText></h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityTypes.map((activity, idx) => (
              <ScrollReveal key={activity.title} delay={idx * 0.1}>
                <div className="h-full flex flex-col p-8 bg-black border border-white/5 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{activity.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "50+", label: "Offsites Hosted" },
              { icon: Activity, number: "High", label: "Energy Levels" },
              { icon: Smile, number: "100%", label: "Employee Smiles" },
              { icon: Trophy, number: "200+", label: "Games Conducted" },
            ].map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.1}>
                <div className="text-center p-8 bg-[#080808] border border-white/5 rounded-3xl group hover:border-[#D4AF37]/50 transition-colors">
                  <stat.icon className="w-10 h-10 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-display font-black text-white mb-2">{stat.number}</div>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black">Team <GoldTextureText>FAQs</GoldTextureText></h2>
        </div>
        <div className="mt-12">
          {teamBuildingFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="container mx-auto px-4 relative max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 leading-tight">
              Energize Your <br /> <GoldTextureText>Workforce</GoldTextureText>
            </h2>
            <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
              Let's plan an activity session that your team will actually enjoy. No boring trust falls, just pure engagement and meaningful bonding.
            </p>
            <Link href="/contact">
              <button className="px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Get a Custom Quote
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
