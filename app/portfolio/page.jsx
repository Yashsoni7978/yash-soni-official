"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, ExternalLink, X, FolderLock, Play } from "lucide-react";

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

// --- DATA ---
// ⚠️ REPLACE 'dQw4w9WgXcQ' WITH YOUR REAL YOUTUBE VIDEO IDs
const videos = [
  {
    id: "1",
    title: "Anchor Yash Highlight Reel 2024",
    description: "A compilation of the best moments from 1100+ events",
    youtubeId: "dQw4w9WgXcQ", // Change this ID
    category: "Highlight",
    featured: true,
  },
  {
    id: "2",
    title: "Royal Jaipur Wedding",
    description: "Hosting at a grand royal wedding ceremony",
    youtubeId: "dQw4w9WgXcQ", // Change this ID
    category: "Wedding",
  },
  {
    id: "3",
    title: "Corporate Annual Meet 2024",
    description: "Fortune 500 company annual gathering",
    youtubeId: "dQw4w9WgXcQ", // Change this ID
    category: "Corporate",
  },
  {
    id: "4",
    title: "India Kids Fashion Week",
    description: "Official anchor at IKFW Jaipur edition",
    youtubeId: "dQw4w9WgXcQ", // Change this ID
    category: "Fashion",
  },
  {
    id: "5",
    title: "Sangeet Night Performance",
    description: "Energetic sangeet ceremony hosting",
    youtubeId: "dQw4w9WgXcQ", // Change this ID
    category: "Wedding",
  },
  {
    id: "6",
    title: "Destination Wedding Udaipur",
    description: "Luxury destination wedding at Lake Palace",
    youtubeId: "dQw4w9WgXcQ", // Change this ID
    category: "Wedding",
  },
];

const categories = ["All", "Highlight", "Wedding", "Corporate", "Fashion"];
const RAW_WORK_DRIVE_LINK = "https://drive.google.com/drive/folders/1asPWHK3S1I3KX7lWZQX7eq6y-iLPLDLZ?usp=drive_link";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = filteredVideos.filter(v => !v.featured);

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Anchor Yash Soni Portfolio",
    "url": "https://yashsoni.in/portfolio",
    "description": "Watch highlight videos of Anchor Yash Soni hosting weddings, corporate events, and fashion shows in Jaipur.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": videos.map((video, index) => ({
        "@type": "VideoObject",
        "position": index + 1,
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
        "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`
      }))
    }
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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Watch Me <span className="text-amber-500">In Action</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Experience the energy, professionalism, and entertainment I bring to every event through these video highlights.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?rel=0`}
                  title={featuredVideo.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                    Featured Highlight
                  </span>
                </div>
              </div>
              <div className="text-center mt-6">
                <h2 className="font-display font-bold text-2xl text-white">{featuredVideo.title}</h2>
                <p className="text-gray-400 mt-2">{featuredVideo.description}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                      : "bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              All <span className="text-amber-500">Videos</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherVideos.map((video) => (
              <StaggerItem key={video.id}>
                <div className="group h-full flex flex-col bg-black rounded-xl border border-neutral-800 overflow-hidden hover:border-amber-500/50 transition-colors duration-300">
                  {/* YouTube Embed */}
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                      title={video.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="px-2 py-1 bg-black/80 text-white text-[10px] font-bold rounded uppercase tracking-wider backdrop-blur-sm border border-white/10">
                        {video.category}
                      </span>
                    </div>
                  </div>
                  {/* Video Info */}
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="font-display font-bold text-lg text-white mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 flex-grow">
                      {video.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Raw Work Access */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <ScrollReveal>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-6">
              <FolderLock className="w-16 h-16 text-amber-500" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Request Access to <span className="text-amber-500">Raw Work</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Raw videos, behind-the-scenes footage, and unedited event recordings are shared selectively with serious clients and partners only.
            </p>
            <motion.a
              href={RAW_WORK_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-colors"
            >
              <FolderLock className="w-5 h-5 mr-2" />
              View Raw Files (Google Drive)
              <ExternalLink className="w-4 h-4 ml-2" />
            </motion.a>
            <p className="text-xs text-gray-600 mt-4">Access may require approval.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-6">
              <Youtube className="w-16 h-16 text-red-600" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Subscribe for More <span className="text-amber-500">Content</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Stay updated with the latest event highlights, behind-the-scenes content, and anchoring tips on my YouTube channel.
            </p>
            <motion.a
              href="https://www.youtube.com/@Anchor_Yash"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-red-600 text-red-500 font-bold rounded-full hover:bg-red-600 hover:text-white transition-all"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe on YouTube
              <ExternalLink className="w-4 h-4 ml-2" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}