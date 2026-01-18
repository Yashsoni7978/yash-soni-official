"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, MessageCircle, MapPin, CheckCircle, 
  Palette, PenTool, Image as ImageIcon, Lightbulb, 
  Layers, ChevronRight, Plus, Minus, Wand2 
} from "lucide-react";

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
const designServices = [
  { icon: Palette, title: "Theme Conceptualization", description: "We don't just copy Pinterest. We create unique themes (Royal Rajasthan, Bohemian, Tropical, Cyber-Punk) tailored to your story and venue." },
  { icon: ImageIcon, title: "3D Visualization", description: "See it before we build it. We work with 3D artists to create realistic renders of the stage, mandap, and entry passages so there are no surprises." },
  { icon: Lightbulb, title: "Lighting Design", description: "Lighting is 50% of the decor. I ensure the stage lighting is calibrated for photography, video, and live ambiance." },
  { icon: Layers, title: "Fabrication Oversight", description: "I supervise the fabricators to ensure the actual build matches the 3D render. No 'expectation vs reality' memes here." },
];

const designProcess = [
  { title: "The Discovery", description: "We analyze your venue and your personal style. We create a 'Mood Board' with color palettes, textures, and reference images." },
  { title: "The Blueprint", description: "We create 2D layouts for seating and 3D renders for the main structures (Stage/Bar). You approve every corner." },
  { title: "Vendor Matching", description: "I match the design with the right fabricator. Some are good at floral, others at carpentry. I hire the specialist for the job." },
  { title: "The Setup", description: "My team is on-site 24 hours prior, checking finishes, floral freshness, and light angles." },
];

const designFAQs = [
  { question: "Do you own the decor materials?", answer: "No, and that's good for you. Decorators who own materials force you to use their old stock. As Designers, we source fresh, trending materials specific to your theme." },
  { question: "Can I see what the stage will look like beforehand?", answer: "Yes! For major events, we provide 3D Walkthroughs or Renders so you know exactly how the venue will look." },
  { question: "Do you handle floral arrangements?", answer: "We curate the floral design and source the flowers from wholesale markets (often flown in from Bangalore/Thailand) to ensure freshness and lower costs." },
  { question: "Why hire an Anchor for Design?", answer: "Because I know the 'Camera Angle'. I know what background looks good in your wedding film and how the stage lights affect your makeup." }
];

const whyTrustUs = [
  { label: "Camera-Ready Aesthetic", detail: "Designs optimized for photography & video." },
  { label: "3D Visualization", detail: "See the event before spending a rupee." },
  { label: "Fresh Concepts", detail: "We don't recycle old props." },
  { label: "Lighting Mastery", detail: "Ambiance control for the perfect vibe." },
];

export default function EventDesigning() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Designing Services Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Event Decor & Design",
    "description": "Creative event designing, 3D visualization, and theme conceptualization for weddings and corporate events in Jaipur.",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400 font-medium">
              Concept • Decor • Ambiance
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight">
              Your Vision. <br />
              <span className="text-purple-500">Visualized.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 max-w-2xl leading-relaxed">
              We don't just decorate; we design experiences. From 3D renders to the final floral touch, 
              we bridge the gap between your imagination and reality.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all hover:scale-105">
                  Start Designing
                </button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20need%20help%20designing%20my%20event%20decor." target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:border-purple-500 hover:text-purple-500 transition-all hover:scale-105 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
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
            
            {/* The Creative Director Angle */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-6">
                The <span className="text-purple-500">Creative Director</span> Approach
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Most decorators try to sell you what they have in their warehouse (the same old props). 
                  <strong>I design what YOU want.</strong>
                </p>
                <p>
                  My role is that of a Creative Director. I work with you to build a Moodboard and a 3D Concept. 
                  Once we lock the look, I hire the specific specialists (Carpenters, Florists, Lighting Engineers) 
                  to build it exactly as planned.
                </p>
                <p>
                  <strong>The Anchor's Edge:</strong> I know how a stage looks through a camera lens. 
                  I ensure your decor isn't just pretty to the eye, but optimized for your wedding film and photos.
                </p>
              </div>
            </ScrollReveal>

            {/* Why Trust Us List */}
            <ScrollReveal>
               <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">The Aesthetic Promise</h3>
                  <ul className="space-y-4">
                    {whyTrustUs.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                        <span className="text-gray-400">
                          <strong className="text-white">{item.label}</strong> – {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
               </div>
            </ScrollReveal>

            {/* Core Services Grid */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-8">
                Design <span className="text-purple-500">Services</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {designServices.map((service) => (
                  <div
                    key={service.title}
                    className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-4 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* The Process */}
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-8">
                From <span className="text-purple-500">Moodboard</span> to Reality
              </h2>
              <div className="space-y-4">
                {designProcess.map((step, index) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-purple-500 font-bold bg-neutral-900 group-hover:border-purple-500 transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* FAQ Section */}
            <div className="max-w-3xl">
                <h2 className="text-3xl font-display font-bold mb-8">Design FAQs</h2>
                <div className="space-y-2">
                {designFAQs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
                </div>
            </div>

            {/* Internal Links */}
            <ScrollReveal>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
                <h3 className="font-display font-bold text-lg mb-4">
                  Bring the Design to Life
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/event-management-company-jaipur">
                    <button className="px-6 py-2 border border-neutral-700 text-white hover:border-purple-500 hover:text-purple-500 rounded-lg transition-all text-sm font-bold">
                      Explore Production & Execution
                    </button>
                  </Link>
                  <Link href="/wedding-anchor-jaipur">
                    <button className="px-6 py-2 border border-neutral-700 text-white hover:border-purple-500 hover:text-purple-500 rounded-lg transition-all text-sm font-bold">
                      Wedding Hosting
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
                Get a Design Consultation
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Have a theme in mind? Let's create a moodboard and see how we can bring it to life within your budget.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      Call / WhatsApp
                    </p>
                    <p className="font-bold text-white">+91 77378 77978</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      Studio Base
                    </p>
                    <p className="font-bold text-white text-sm">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Link href="/contact" className="block">
                  <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                    Start Consultation <Wand2 className="w-4 h-4" />
                  </button>
                </Link>
                <a
                  href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20want%20to%20discuss%20event%20decor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full py-4 border border-neutral-700 text-white font-bold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Direct
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Dream It. <span className="text-purple-500">Build It.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Stop settling for standard decor packages. Let's create something unique.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-5 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all hover:scale-105">
                  Book Design Session
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
