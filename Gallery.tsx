/**
 * Gallery Page - Photo gallery with 15 high-quality real photos
 * Design: Saharan Cinematic - dark desert theme with gold accents
 * Features: Category filter, lightbox, SEO-rich descriptions
 */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera, Play, MapPin, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  // === LANDSCAPES ===
  {
    src: "/manus-storage/rjrzhbBf0EwP_8eb6865d.jpg",
    alt: "Spectacular sunset over the White Desert Egypt with golden sky and chalk formations",
    category: "landscape",
    title: "Golden Hour Panorama",
    desc: "The White Desert bathed in golden sunset light — a view that takes your breath away",
  },
  {
    src: "/manus-storage/c2IYSgXN1IJs_d449568c.png",
    alt: "Iconic mushroom-shaped chalk rock formation in the White Desert Egypt",
    category: "landscape",
    title: "The Mushroom Rock",
    desc: "Egypt's most photographed natural wonder — carved by millions of years of wind erosion",
  },
  {
    src: "/manus-storage/DwSCRlEcZvN8_3b458450.jpg",
    alt: "White chalk formations stretching across the Egyptian desert landscape",
    category: "landscape",
    title: "Chalk Cathedral",
    desc: "Natural limestone sculptures created by wind and time — a landscape from another world",
  },
  {
    src: "/manus-storage/8GZCWIEQZhrn_111c9f41.jpg",
    alt: "Dramatic sunlit chalk cliffs in the White Desert",
    category: "landscape",
    title: "Sunlit Cliffs",
    desc: "The dramatic interplay of light and shadow on ancient chalk formations",
  },
  {
    src: "/manus-storage/hBYYM7tHujPv_b828d089.webp",
    alt: "White Desert Egypt rock formations against dramatic sky",
    category: "landscape",
    title: "Dramatic Skyline",
    desc: "Where the sky meets the desert — a canvas of natural art",
  },
  // === EXPERIENCES ===
  {
    src: "/manus-storage/ozfCk90fAt1H_eb560c85.jpg",
    alt: "Bedouin camping under the Milky Way stars in the White Desert Egypt",
    category: "experience",
    title: "Milky Way Camping",
    desc: "Sleeping under the galaxy's most spectacular display — zero light pollution, infinite stars",
  },
  {
    src: "/manus-storage/IMG-20260712-WA0003_177eabee.jpg",
    alt: "Traveler stargazing under the Milky Way in the White Desert - real photo",
    category: "experience",
    title: "Under a Billion Stars",
    desc: "Real traveler moment — standing beneath the Milky Way in the heart of the White Desert",
  },
  {
    src: "/manus-storage/kRkdJctWNvjb_56a85285.jpg",
    alt: "Tent camping in the White Desert with stunning mountain backdrop",
    category: "experience",
    title: "Desert Camp at Dusk",
    desc: "Traditional camping with a view — the most peaceful nights you'll ever experience",
  },
  {
    src: "/manus-storage/yqXp3LTMQS2R_b945cb8f.jpg",
    alt: "White Desert campfire night under starry sky",
    category: "experience",
    title: "Campfire Stories",
    desc: "Gathering around the fire as the Milky Way unfolds overhead — pure magic",
  },
  {
    src: "/manus-storage/RazOFVYL4KdQ_1a5b7945.jpg",
    alt: "Desert camping setup with traditional decorations in the White Desert",
    category: "experience",
    title: "Authentic Desert Camp",
    desc: "Our signature camping setup — comfortable, beautiful, and authentically Bedouin",
  },
  // === ADVENTURES ===
  {
    src: "/manus-storage/5uHZtIMRVPJq_115a6df3.jpg",
    alt: "4x4 jeep safari adventure in the White Desert Egypt with white sand",
    category: "adventure",
    title: "4x4 Desert Safari",
    desc: "Thrilling off-road adventure through pristine white sand dunes",
  },
  {
    src: "/manus-storage/hdUB6yENUFXW_4d7179bb.webp",
    alt: "Multiple 4x4 jeeps on safari in the White Desert Egypt",
    category: "adventure",
    title: "Safari Convoy",
    desc: "Our trusted fleet of 4x4 vehicles ready to take you into the heart of the desert",
  },
  {
    src: "/manus-storage/MygldGIDZyKi_84435f17.jpg",
    alt: "High-angle view of white desert landscape with dramatic sky",
    category: "adventure",
    title: "From Above",
    desc: "The vastness of the White Desert seen from above — an endless sea of white",
  },
  // === CULTURE ===
  {
    src: "/manus-storage/OzuJnRs2gKf4_5c0365e1.webp",
    alt: "Black Desert Egypt volcanic landscape with dark mountains",
    category: "culture",
    title: "Black Desert Beauty",
    desc: "The dramatic volcanic mountains of the Black Desert — a contrast of black and white",
  },
  {
    src: "/manus-storage/uTAFylKVqqDY_797bc064.jpg",
    alt: "Traditional Bedouin tent interior with colorful rugs in the desert",
    category: "culture",
    title: "Bedouin Hospitality",
    desc: "Step inside a traditional Bedouin tent — colorful rugs, warm welcome, timeless traditions",
  },
];

const categories = ["All", "Landscapes", "Experiences", "Adventures", "Culture"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory.toLowerCase());

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null);
  const nextImage = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % filteredItems.length : null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-desert-deep via-desert-dark to-background" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Visual Journey
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              The <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A glimpse into the magical world of the White Desert. 
              Every image captures the surreal beauty of Egypt's most extraordinary landscape — 
              from the iconic chalk rock formations to the unforgettable stargazing nights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gold text-primary-foreground border-gold"
                    : "bg-card border-border/30 text-muted-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg shadow-black/20"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-gold text-sm mb-1">
                    <Camera className="w-4 h-4" />
                    <span className="capitalize">{item.category}</span>
                  </div>
                  <h3 className="text-white font-display text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SEO-rich Gallery Description */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground text-center mb-6">
              The Beauty of <span className="text-gold">White Desert Egypt</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              The White Desert National Park in Egypt's Western Desert is home to the most 
              extraordinary natural rock formations in North Africa. These chalk-white mushroom-shaped 
              pillars, created by millions of years of wind erosion, create a surreal landscape 
              that captivates photographers, adventurers, and nature lovers from around the world. 
              Our gallery showcases the diverse beauty of the White Desert — from golden hour 
              landscapes to magical stargazing nights under the Milky Way.
            </p>
          </div>

          {/* Video Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground text-center mb-8">
              Watch the <span className="text-gold">Adventure</span>
            </h2>
            <div className="relative rounded-xl overflow-hidden aspect-video bg-card border border-border/30 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-desert-dark to-desert-deep" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                  <Play className="w-8 h-8 text-gold ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-display text-xl font-semibold">
                  White Desert Safari Experience
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Follow our adventures on Instagram @white_desert_adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-5xl w-full mx-16" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-display text-xl font-semibold">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-white/60 text-sm mt-1">{filteredItems[lightboxIndex].desc}</p>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
