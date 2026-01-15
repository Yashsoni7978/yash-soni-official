"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, CheckCircle, Users, Briefcase, Heart, Sparkles, Plus, Minus } from "lucide-react";

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
const eventsCovered = [
  {
    icon: Heart,
    title: "Wedding Events",
    desc: "Complete wedding planning from mehendi to reception – vendor coordination, decor, entertainment, and flawless execution across all functions.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Product launches, annual meets, team outings, award ceremonies, and conferences with professional production and seamless logistics.",
  },
  {
    icon: Sparkles,
    title: "Fashion Shows",
    desc: "Runway events, brand launches, and fashion weeks with stage design, model coordination, backstage management, and show direction.",
  },
  {
    icon: Users,
    title: "Social & Private Events",
    desc: "Birthday parties, anniversary celebrations, baby showers, and intimate gatherings with personalized themes and curated experiences.",
  },
];

const vendorCategories = [
  "Decorators & Florists", "Catering & Live Counters", "Photography & Videography", "DJ & Sound Systems", "Lighting & AV Setup", "Makeup Artists & Stylists", "Choreographers", "Entertainment Artists", "Invitation & Printing", "Transport & Logistics",
];

const whyTrustUs = [
  { label: "Single Point of Contact", detail: "No running after multiple vendors – I coordinate everything so you can relax" },
  { label: "Curated Vendor Network", detail: "Trusted partners I've worked with across 1100+ events, vetted for quality" },
  { label: "Transparent Process", detail: "Clear communication, no hidden costs, and regular updates throughout" },
  { label: "Personal Involvement", detail: "I'm personally present at your event to ensure everything runs smoothly" },
  { label: "Flexible Approach", detail: "Adapt to your budget, preferences, and last-minute changes without stress" },
  { label: "End-to-End Execution", detail: "From concept to cleanup – every detail handled with care" },
];

const eventManagementFAQs = [
  { question: "How is this different from a traditional event management company?", answer: "Unlike large agencies where you are just another file number, I work as your personal event coordinator. You get direct access to me, curated vendor recommendations based on your specific budget, and my personal presence at every event to ensure perfection." },
  { question: "What types of events do you manage in Jaipur?", answer: "I manage a wide spectrum of events: Full Wedding Planning (all functions), Corporate Events (Conferences, Launches), Fashion Shows, Social Gatherings (Birthdays, Anniversaries), and Private Celebrations." },
  { question: "Do you work with a fixed set of vendors?", answer: "I have a trusted network of premium vendors (Decor, Catering, Sound) vetted over 1100+ events. However, I am flexible and happy to coordinate with your preferred vendors if you have already booked them." },
  { question: "Can you manage destination events outside Jaipur?", answer: "Absolutely! I regularly manage destination weddings and events across Rajasthan including Udaipur, Jodhpur, Jaisalmer, and Pushkar. I handle the logistics of moving teams and setting up experiences in heritage venues." },
  { question: "How do you handle the event budget?", answer: "I believe in transparency. We discuss your budget upfront, and I recommend vendors that fit within that range without compromising quality. I help you allocate funds smartly to get the maximum impact." },
  { question: "Do you handle Guest Hospitality and Logistics?", answer: "Yes, for weddings and large corporate meets, my team handles Hotel RSVPs, Airport Pickups, Room Hamper placements, and local transport coordination to ensure guests feel VIP." },
  { question: "What is your role on the day of the event?", answer: "On the event day, I am the 'Captain of the Ship'. I supervise the setup, coordinate sound/light checks, manage the timeline, handle artist entries, and troubleshoot any issues instantly so you can enjoy the party." },
  { question: "Can you help with venue selection in Jaipur?", answer: "Yes, having worked in almost every major venue in Jaipur (from palaces to hotels), I can suggest the perfect venue based on your guest count, occasion, and budget." },
  { question: "Do you provide decor design services?", answer: "Yes, we conceptualize unique themes and mood boards for your event. I then work with expert decorators to bring those designs to life exactly as visualized." },
  { question: "How far in advance should we hire an Event Planner?", answer: "For Weddings, ideally 4-6 months in advance. For Corporate events, 1-2 months is sufficient. However, we are capable of executing 'Express Events' on short notice if dates are available." },
  { question: "Do you charge a fixed fee or a percentage?", answer: "We offer customizable packages. Depending on the scale of work, it can be a fixed management fee or a comprehensive package cost. We ensure you get value for every rupee spent." },
  { question: "How do I get started with planning my event?", answer: "It's simple. Click the 'WhatsApp Now' button or fill the contact form. We will schedule a free initial consultation to understand your vision and provide a roadmap." }
];

export default function EventManagementJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Management Services in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan",
    },
    "serviceType": "Event Management",
    "description": "End-to-end event management and planning services with curated vendor coordination for weddings, corporate events, and fashion shows in Jaipur.",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500 font-medium">
              Event Management in Jaipur
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight">
              Event Management Services in Jaipur –{" "}
              <span className="text-amber-500">Anchor Yash</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 max-w-2xl leading-relaxed">
              Your personal event coordinator with a curated network of trusted vendors.
              From concept to execution, I handle every detail so you can enjoy your
              event stress-free.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105">
                  Plan Your Event
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20need%20help%20with%20event%20management." target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-14">
          {/* Left: Text Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Introduction */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-6">
                Your Trusted Event Partner in Jaipur
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Planning an event in Jaipur? Whether it's a dream wedding, a corporate conference,
                  or a fashion show, finding the right vendors and coordinating everything can be
                  overwhelming. That's where I come in. I'm <strong>Anchor Yash</strong>, and beyond
                  being one of Jaipur's most sought-after event hosts, I also offer complete{" "}
                  <strong>event management services in Jaipur</strong>.
                </p>
                <p>
                  But here's what makes my approach different: I'm not a faceless agency with layers
                  of account managers. I work as your <strong>personal event coordinator</strong> –
                  someone who understands your vision, connects you with the right vendors from my
                  curated network, and ensures flawless execution on the day.
                </p>
                <p>
                  With experience from over <strong>1100+ events</strong>, I've built relationships
                  with Jaipur's best decorators, caterers, photographers, DJs, and entertainment
                  artists. When you work with me, you get access to this trusted network along with
                  the peace of mind that comes from having a single point of contact who's invested
                  in making your event perfect.
                </p>
              </div>
            </ScrollReveal>

            {/* How It Works */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-6">
                How I Manage Your Event End-to-End
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  As the <strong>best event planner in Jaipur</strong> for personalized service,
                  here's how I work to bring your vision to life:
                </p>
                <ol className="space-y-4 list-decimal list-inside marker:text-amber-500">
                  <li>
                    <strong>Understanding Your Vision</strong> – We start with a detailed conversation
                    about your event type, guest count, budget, and preferences. I listen to understand
                    not just what you want, but the experience you want to create.
                  </li>
                  <li>
                    <strong>Curated Vendor Recommendations</strong> – Based on your requirements, I
                    suggest vendors from my trusted network. You get options across different budget
                    levels, and I help you compare and choose what works best.
                  </li>
                  <li>
                    <strong>Coordination & Planning</strong> – Once vendors are finalized, I handle all
                    coordination – scheduling meetings, managing timelines, ensuring everyone is aligned
                    with the event flow.
                  </li>
                  <li>
                    <strong>Day-of Execution</strong> – On the event day, I'm personally present to
                    supervise setup, coordinate between vendors, handle any last-minute changes, and
                    ensure everything runs exactly as planned.
                  </li>
                  <li>
                    <strong>Post-Event Support</strong> – From collecting deliverables (photos, videos)
                    to handling vendor payments, I stay involved until everything is wrapped up.
                  </li>
                </ol>
              </div>
            </ScrollReveal>

            {/* Events Covered */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-6">
                Events I Manage
              </h2>
              <p className="text-gray-400 mb-8">
                From intimate celebrations to large-scale productions, here's what I specialize in:
              </p>
              <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                {eventsCovered.map((card) => (
                  <StaggerItem
                    key={card.title}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <card.icon className="w-8 h-8 text-amber-500 mb-4" />
                    <h3 className="font-display font-bold text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="mt-6 text-gray-400">
                Looking for <strong>wedding event management in Jaipur</strong>?{" "}
                <Link href="/wedding-anchor-jaipur" className="text-amber-500 hover:underline">
                  See my wedding anchoring services
                </Link>{" "}
                for complete wedding hosting.
              </p>
            </ScrollReveal>

            {/* Vendor Coordination */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-6">
                Vendor Coordination Model
              </h2>
              <p className="text-gray-400 mb-6">
                I work with a curated network of trusted vendors across all categories needed
                for your event. No commissions that inflate your costs – just honest recommendations
                based on quality and fit:
              </p>
              <div className="flex flex-wrap gap-3">
                {vendorCategories.map((vendor) => (
                  <span
                    key={vendor}
                    className="px-4 py-2 text-sm bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20"
                  >
                    {vendor}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-gray-400">
                Already have preferred vendors? I'm happy to work with them and integrate
                them seamlessly into the event plan.
              </p>
            </ScrollReveal>

            {/* Why Trust Us */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-6">
                Why Clients Trust Anchor Yash
              </h2>
              <ul className="space-y-4 text-gray-400">
                {whyTrustUs.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span>
                      <strong className="text-white">{item.label}</strong> – {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* FAQ Section */}
            <div className="max-w-3xl">
                <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-2">
                {eventManagementFAQs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
                </div>
            </div>

            {/* Internal Links */}
            <ScrollReveal>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
                <h3 className="font-display font-bold text-lg mb-4">
                  Related Services
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Explore more ways I can help make your event unforgettable:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/wedding-anchor-jaipur">
                    <button className="px-6 py-2 border border-neutral-700 text-white hover:border-amber-500 hover:text-amber-500 rounded-lg transition-all text-sm font-bold">
                      Wedding Anchor Services
                    </button>
                  </Link>
                  <Link href="/anchoring">
                    <button className="px-6 py-2 border border-neutral-700 text-white hover:border-amber-500 hover:text-amber-500 rounded-lg transition-all text-sm font-bold">
                      All Anchoring Services
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="px-6 py-2 bg-amber-500 text-black hover:bg-amber-600 rounded-lg transition-all text-sm font-bold">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-display font-bold">
                Start Planning Your Event
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Share your event details and let's discuss how I can help bring your
                vision to life with the right vendors and seamless coordination.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      Call / WhatsApp
                    </p>
                    <p className="font-bold text-white">+91 77378 77978</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      Based In
                    </p>
                    <p className="font-bold text-white text-sm">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Link href="/contact" className="block">
                  <button className="w-full py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-600 transition-all">
                    Send Inquiry
                  </button>
                </Link>
                <a
                  href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20need%20event%20management%20help%20for%20my%20upcoming%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Direct
                  </button>
                </a>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Available for events in Jaipur, across Rajasthan, and select destinations
                pan-India. Early discussions recommended for large events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-amber-500/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Let's discuss your event requirements and create something memorable together.
              Reach out today to get started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-5 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105">
                  Contact Now
                </button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
