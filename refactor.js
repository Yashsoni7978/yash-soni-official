const fs = require('fs');

const targetFile = 'app/destination-wedding-planner-jaipur/page.jsx';
let content = fs.readFileSync(targetFile, 'utf8');

// Remove use client
content = content.replace(/^"use client";\n*/g, '');

// Remove standard imports
content = content.replace(/import React.*?from "react";\n/g, '');
content = content.replace(/import \{ motion.*?\} from "framer-motion";\n/g, '');

// Extract and remove FAQItem
content = content.replace(/const FAQItem = \(\{.*?\}\);/s, '');

// Remove variants
content = content.replace(/const fadeInUp = \{.*?\};\n/s, '');
content = content.replace(/const staggerContainer = \{.*?\};\n/s, '');

// Remove hooks from component start
content = content.replace(/const containerRef = useRef.*?return \(/s, 'return (');

// Clean up old Image and Link imports
content = content.replace(/import Image from "next\/image";\n/g, '');
content = content.replace(/import Link from "next\/link";\n/g, '');

// Add new imports
const newImports = `import Link from "next/link";
import Image from "next/image";
import MotionWrapper from "../_components/MotionWrapper";
import HeroSlider from "../_components/HeroSlider";
import { FAQItem } from "../_components/InteractiveFAQ";\n\n`;

content = newImports + content;

// Refactor Hero Section
const oldHeroRegex = /<section className="relative w-full h-screen.*?<\/section>/s;
const newHero = `<HeroSlider
        images={[
          "/premium_events/grand_wedding_venue.webp",
          "/premium_events/outdoor_garden_wedding.webp",
          "/premium_events/luxury_dining_setup.webp",
          "/premium_events/palace_wedding_decor.webp",
        ]}
        gradientClass="from-[#FAF9F6] via-[#FAF9F6]/50"
        borderClass="border-[#064E3B]"
      >
        <span className="font-['Rekalgera'] uppercase tracking-[0.3em] text-[#064E3B] text-xs md:text-sm mb-6 block">
          The Ultimate Getaway
        </span>
        <h1 className="font-['Runiga'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">Destination Weddings</h1>
        <p className="font-['Amandine'] text-3xl md:text-5xl text-[#D4AF37] mb-10">Your dream wedding in the heart of Rajasthan</p>
        <Link href="#contact" className="inline-block font-['Rekalgera'] uppercase tracking-[0.2em] text-xs md:text-sm bg-gradient-to-r from-[#064E3B] to-[#022C22] text-[#FAF9F6] px-10 py-5 hover:opacity-90 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,78,59,0.4)]">
          Plan Your Journey
        </Link>
      </HeroSlider>`;

content = content.replace(oldHeroRegex, newHero);

// Clean <motion.div> references
content = content.replace(/<motion\.div/g, '<MotionWrapper');
content = content.replace(/<\/motion\.div>/g, '</MotionWrapper>');

// Clean variants
content = content.replace(/ variants=\{.*?\} /g, ' ');
content = content.replace(/ variants=\{.*?\}>(?=\n)/g, '>');

// Clean initial
content = content.replace(/ initial=\{.*?\} /g, ' ');
content = content.replace(/ initial=\{.*?\}>(?=\n)/g, '>');
content = content.replace(/ initial=".*?" /g, ' ');

// Clean whileInView
content = content.replace(/ whileInView=\{.*?\} /g, ' ');
content = content.replace(/ whileInView=\{.*?\}>(?=\n)/g, '>');
content = content.replace(/ whileInView=".*?" /g, ' ');

// Clean animate
content = content.replace(/ animate=\{.*?\} /g, ' ');
content = content.replace(/ animate=\{.*?\}>(?=\n)/g, '>');
content = content.replace(/ animate=".*?" /g, ' ');

// Clean exit
content = content.replace(/ exit=\{.*?\} /g, ' ');
content = content.replace(/ exit=\{.*?\}>(?=\n)/g, '>');
content = content.replace(/ exit=".*?" /g, ' ');

// Clean viewport
content = content.replace(/ viewport=\{.*?\} /g, ' ');
content = content.replace(/ viewport=\{.*?\}>(?=\n)/g, '>');

// Clean transition
content = content.replace(/ transition=\{.*?\} /g, ' ');
content = content.replace(/ transition=\{.*?\}>(?=\n)/g, '>');

// Remove ref and motion style
content = content.replace(/ ref=\{containerRef\} /g, ' ');
content = content.replace(/ style=\{\{ y \}\} /g, ' ');

// Remove <style jsx global>
content = content.replace(/<style jsx global>.*?<\/style>/s, '');

// We need to fix the FAQItem usage. In original code it is:
// <FAQItem key={i} faq={faq} colorClass="text-[#064E3B]" />
// Our InteractiveFAQ exports it properly so it should just work.

fs.writeFileSync(targetFile, content);
console.log('Refactoring complete.');
