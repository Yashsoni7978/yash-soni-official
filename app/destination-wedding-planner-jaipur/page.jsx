// NO "use client" – this is now a Server Component
import Link from "next/link";
import Image from "next/image";
import MotionWrapper from "../_components/MotionWrapper";
import HeroSlider from "../_components/HeroSlider";
import { FAQItem } from "../_components/InteractiveFAQ";


export default function DestinationWeddingPlannerJaipur() {
  const heroImages = [
    "/premium_events/grand_wedding_venue.webp",
    "/premium_events/outdoor_garden_wedding.webp",
    "/premium_events/luxury_dining_setup.webp",
    "/premium_events/palace_wedding_decor.webp",
  ];

  const services = [
    { label: "Wedding Planning", url: "/wedding-planning-jaipur" },
    { label: "Haldi Decor", url: "/haldi-decoration-jaipur" },
    { label: "Artist Management", url: "/artist-management-jaipur" },
    { label: "Wedding Decor", url: "/wedding-decoration-jaipur" },
    { label: "Sangeet Decor", url: "/sangeet-decoration-jaipur" },
  ];

  const faqs = [
    {
      q: "What is the starting budget for a destination wedding in Jaipur?",
      a: "Luxury is bespoke, but an elite heritage wedding in Jaipur typically begins at ₹1.5 Cr, scaling with guest count, venue prestige, and decor opulence.",
    },
    {
      q: "Do you handle international guest logistics?",
      a: "Absolutely. Our concierge team manages private charter clearances, visa assistance, and dedicated airport lounges.",
    },
    {
      q: "How far in advance should we secure your services?",
      a: "Engage us 8‑12 months ahead to lock premier dates at venues like Rambagh Palace and Fairmont.",
    },
    {
      q: "Can you secure celebrity artists for the Sangeet?",
      a: "Yes – we coordinate A‑list Bollywood stars, global bands, and elite performers directly with agencies.",
    },
    {
      q: "Do you offer partial wedding planning?",
      a: "We focus exclusively on end‑to‑end luxury production to guarantee flawless execution and cohesive design.",
    },
    {
      q: "Are you available for weddings outside Rajasthan?",
      a: "Our logistics framework supports destination weddings worldwide, from Dubai and Goa to Europe.",
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] w-full min-h-screen overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      {/* HERO SECTION */}
      <HeroSlider
        images={heroImages}
        gradientClass="from-[#FAF9F6] via-[#FAF9F6]/50"
        borderClass="border-[#064E3B]"
      >
        <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#064E3B] text-xs md:text-sm mb-6 block">
          The Ultimate Getaway
        </span>
        <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">
          Destination Weddings
        </h1>
        <p className="font-['Amandine'] text-3xl md:text-5xl text-[#B5952F] mb-10">
          Your dream wedding in the heart of Rajasthan
        </p>
        <Link
          href="#contact"
          className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#064E3B] to-[#022C22] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,78,59,0.4)]"
        >
          Plan Your Journey
        </Link>
      </HeroSlider>

      {/* TRUST BAR */}
      <section className="relative z-30 w-full bg-[#097969] py-8 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              1100+ Events Hosted
            </span>
            <span className="hidden md:block text-[#B5952F] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#B5952F] tracking-[0.2em] text-sm lg:text-lg uppercase">
              Heritage Venues
            </span>
            <span className="hidden md:block text-[#B5952F] opacity-60">|</span>
            <span className="font-['Rekalgera'] text-[#FAF9F6] tracking-[0.2em] text-sm lg:text-lg uppercase">
              End‑to‑End Execution
            </span>
          </div>
        </div>
      </section>

      {/* ROYAL PRELUDE */}
      <MotionWrapper>
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-['Orange_Avenue'] text-4xl text-[#B5952F] mb-6 block">
              Welcome to Royalty
            </span>
            <h2 className="font-['The_Seasons'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">
              A wedding in Jaipur is not just an event. It is a legacy written in gold and silk.
            </h2>
            <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              As your premier destination wedding planner, we specialize in the Rambagh and Fairmont circuit. We handle every detail from the first petal to the final phera.
            </p>
          </div>
        </section>
      </MotionWrapper>

      {/* LOOKBOOK (Masonry Faux‑Motion) */}
      <MotionWrapper>
        <section className="py-20 w-full bg-[#FAF9F6] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            <div className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden">
              <Image
                src="/premium_events/palace_wedding_decor.webp"
                alt="Palace Wedding Decor"
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="group relative aspect-[3/4] md:h-[90vh] md:mt-32 overflow-hidden">
              <Image
                src="/premium_events/reception_stage_design.webp"
                alt="Reception Stage Design"
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="group relative aspect-[3/4] md:h-[90vh] overflow-hidden">
              <Image
                src="/premium_events/traditional_phoolon_ki_chaadar.webp"
                alt="Bride Entry Phoolon ki Chaadar"
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* MANIFESTO */}
      <MotionWrapper>
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-['Kugile_Regular'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">
              "A great wedding is not measured by its cost, but by the <span className="text-[#B5952F]">emotions</span> it anchors for a lifetime."
            </p>
          </div>
        </section>
      </MotionWrapper>

      {/* BENTO (Services) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Runiga'] text-6xl md:text-8xl text-[#1A1A1A]">Our Arsenal</h2>
            <p className="font-['Amandine'] text-4xl text-[#097969] mt-2">
              The architecture of a perfect event
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <MotionWrapper>
              <div className="bg-white p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
                <h3 className="font-['The_Seasons'] text-4xl text-[#1A1A1A] mb-4">Heritage Venues</h3>
                <p className="font-sans text-lg text-gray-500 font-light max-w-md">
                  Exclusive access to Rajasthan's most coveted palaces, heritage forts, and luxury estates. We secure the impossible spaces.
                </p>
              </div>
            </MotionWrapper>
            {/* Card 2 */}
            <MotionWrapper>
              <div className="bg-[#1A1A1A] p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
                <h3 className="font-['The_Seasons'] text-4xl text-[#FAF9F6] mb-4 flex items-center gap-4">
                  Design &amp; Decor
                  <span className="text-[#B5952F] font-['Orange_Avenue'] text-3xl lowercase mt-1">bespoke</span>
                </h3>
                <p className="font-sans text-lg text-gray-400 font-light max-w-md">
                  Immersive spatial design using premium ivory florals, bespoke silk fabrics, and structural art that defies gravity.
                </p>
              </div>
            </MotionWrapper>
            {/* Card 3 */}
            <MotionWrapper>
              <div className="bg-[#097969] p-12 lg:p-16 shadow-[0_20px_60px_rgba(9,121,105,0.1)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
                <h3 className="font-['The_Seasons'] text-4xl text-[#FAF9F6] mb-4">Royal Hospitality</h3>
                <p className="font-sans text-lg text-[#FAF9F6]/80 font-light max-w-md">
                  White‑glove shadow management, dedicated VIP protocol, and 24/7 concierge for your esteemed guests.
                </p>
              </div>
            </MotionWrapper>
            {/* Card 4 */}
            <MotionWrapper>
              <div className="bg-white border border-[#D4AF37]/20 p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.02)] flex flex-col justify-end min-h-[450px] group hover:-translate-y-2 transition-all duration-500">
                <h3 className="font-['The_Seasons'] text-4xl text-[#1A1A1A] mb-4">Seamless Logistics</h3>
                <p className="font-sans text-lg text-gray-500 font-light max-w-md">
                  Precision planning, from private charter flight coordination to vintage car transport arrays across the desert.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* HERITAGE MARQUEE */}
      <section className="py-20 bg-[#1A1A1A] overflow-hidden whitespace-nowrap flex items-center border-y border-[#D4AF37]/20">
        <div className="animate-[scroll_40s_linear_infinite] flex gap-16 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Rambagh Palace</span>
              <span className="text-[#B5952F] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Taj Amer</span>
              <span className="text-[#B5952F] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">Fairmont Jaipur</span>
              <span className="text-[#B5952F] text-4xl">✦</span>
              <span className="font-['Rekalgera'] text-6xl text-[#FAF9F6]/20 uppercase">The Oberoi Rajvilas</span>
              <span className="text-[#B5952F] text-4xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['The_Seasons'] text-5xl md:text-6xl text-[#1A1A1A] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} colorClass="text-[#064E3B]" />
          ))}
        </div>
      </section>

      {/* SEO PILLAR FOOTER */}
      <section className="py-12 bg-[#1A1A1A] text-center px-6">
        <div className="max-w-5xl mx-auto border-t border-[#FAF9F6]/10 pt-12">
          <p className="font-sans text-[10px] md:text-xs text-[#FAF9F6]/30 leading-loose text-justify text-balance">
            Hire the best destination wedding planner in Jaipur. Anchor Yash Soni and team organize flawless destination weddings across Rajasthan's finest heritage venues like Udaipur, Jodhpur, and Pushkar. Best luxury destination wedding planner execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations.
          </p>
        </div>
      </section>
    </div>
  );
}
