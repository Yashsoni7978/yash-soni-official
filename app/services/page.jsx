"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mic, Briefcase, Music, Sparkles, Megaphone, 
  MapPin, Heart, Users, Calendar, Palette, 
  ChevronRight, ArrowRight 
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
      show: { transition: { staggerChildren: 0.1 } }
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

// --- SERVICES DATA ---
// These links match the folder structure we created perfectly.
const allServices = [
  {
    category: "Anchoring & Hosting",
    items: [
      {
        title: "Wedding Anchoring",
        desc: "Royal hosting for your big day. Varmala themes, couple games, and guest engagement.",
        icon: Heart,
        link: "/wedding-anchor-jaipur"
      },
      {
        title: "Corporate Anchoring",
        desc: "Professional emceeing for conferences, awards, R&R meets, and summits.",
        icon: Briefcase,
        link: "/corporate-event-anchor-jaipur"
      },
      {
        title: "Sangeet Host",
        desc: "High-energy anchoring for ladies sangeet, dance performances, and family roasting.",
        icon: Music,
        link: "/sangeet-anchor-jaipur"
      },
      {
        title: "Haldi & Mehndi",
        desc: "Fun, informal hosting with props, dhol, and traditional games for the family.",
        icon: Sparkles,
        link: "/haldi-mehndi-anchor"
      },
      {
        title: "Mall Activations",
        desc: "Crowd gathering and product launches at WTP, GT Central, and roadshows.",
        icon: Megaphone,
        link: "/mall-activation-anchor"
      },
      {
        title: "Team Building Host",
        desc: "Engaging corporate offsite activities, ice-breakers, and employee bonding games.",
        icon: Users,
        link: "/team-building-host"
      }
    ]
  },
  {
    category: "Event Management",
    items: [
      {
        title: "Full Event Management",
        desc: "End-to-end execution. Vendor coordination, logistics, and on-ground management.",
        icon: Calendar,
        link: "/event-management-company-jaipur"
      },
      {
        title: "Event Planning",
        desc: "Strategic planning, budgeting, venue selection, and timeline creation.",
        icon: MapPin,
        link: "/event-planning-jaipur"
      },
      {
        title: "Event Designing",
        desc: "Creative decor, themes, stage fabrication, and visual experience design.",
        icon: Palette,
        link: "/event-designing"
      },
      {
        title: "Destination Weddings",
        desc: "Complete planning for palace weddings in Jaipur, Udaipur, and Jodhpur.",
        icon: Heart,
        link: "/destination-wedding-anchor"
      }
    ]
  }
];

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Anchor Yash Soni Services",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in"
    },
    "serviceType": "Event Services",
    "description": "Comprehensive event services including wedding anchoring, corporate emceeing, and full event management in Jaipur."
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative text-center">
          <ScrollReveal>
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
              Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              World-Class <span className="text-amber-500">Event Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From the first announcement to the final applause, we provide comprehensive solutions for weddings, corporate events, and promotions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 container mx-auto px-4">
        {allServices.map((section, idx) => (
          <div key={section.category} className="mb-20 last:mb-0">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-neutral-800 flex-grow"></div>
                <h2 className="text-2xl font-display font-bold text-gray-200 uppercase tracking-widest">
                  {section.category}
                </h2>
                <div className="h-px bg-neutral-800 flex-grow"></div>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((service) => (
                <StaggerItem key={service.title}>
                  <Link href={service.link} className="block h-full">
                    <motion.div 
                      className="group h-full p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all duration-300 relative overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-7 h-7" />
                        </div>
                        
                        <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-amber-500 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {service.desc}
                        </p>
                        
                        <div className="flex items-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Mic className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              We customize our services to fit unique requirements. If you have a specific event idea, let's talk about it.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
                Discuss Custom Requirement <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}