/**
 * Home Page - Main landing page for Tour Guide Kimo
 * Design: Saharan Cinematic - immersive desert experience
 * SEO Optimized with rich content, FAQ section, and comprehensive descriptions
 */
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Users, ArrowRight, Compass, Star, Mountain, Tent, Flame, Camera, Coffee, Moon, ChevronDown, Globe, MessageCircle, Phone } from "lucide-react";
import { useRef, useState } from "react";

const faqData = [
  {
    question: "What is the best time to visit the White Desert in Egypt?",
    answer: "The best time to visit the White Desert is between October and April when temperatures are pleasant, ranging from 15°C to 25°C during the day. Winter months (November to February) offer the clearest night skies for stargazing, as the cold air reduces atmospheric haze. Summer visits are possible but very hot during the day (up to 40°C), though nights remain comfortable for camping."
  },
  {
    question: "How do I get to the White Desert from Cairo?",
    answer: "The White Desert is approximately 360 km from Cairo. Our tours include 4x4 transportation from Cairo to Bawiti (Bahariya Oasis) — the gateway town to the desert — and then deeper into the desert itself. The journey takes about 4-5 hours by car. We handle all logistics including permits and transportation, so you only need to show up and enjoy."
  },
  {
    question: "Is camping in the White Desert safe?",
    answer: "Yes, camping in the White Desert is very safe. As a verified Bedouin guide with over 10 years of experience in the region, I ensure all safety measures are in place. We provide proper camping equipment, warm sleeping bags for winter nights (which can drop to 0°C), and maintain communication with local authorities. The area is regularly monitored by Egyptian tourism authorities."
  },
  {
    question: "What should I bring for a White Desert tour?",
    answer: "Bring warm clothing for cold desert nights (especially October-March), sunscreen SPF 50+, sunglasses, a wide-brim hat, comfortable closed-toe shoes or sandals, a camera with extra batteries, personal medications, and any special dietary items. We provide tents, sleeping bags, food, water, and camping chairs. A detailed packing list is provided after booking confirmation."
  },
  {
    question: "How much does a White Desert tour cost?",
    answer: "Our tours start from $99 USD per person for a day trip, $145 for an overnight camping experience under the stars, and $199 for a premium 3-day deep desert adventure. All prices are per person and include 4×4 transportation from Cairo, all meals, camping equipment, professional guide services, and photography assistance. Group discounts are available."
  },
  {
    question: "Can I take my children on a White Desert tour?",
    answer: "Absolutely! Families with children are very welcome. The desert is a magical place for kids — they love sandboarding, exploring the surreal rock formations, and stargazing. For younger children, we recommend the day trip or overnight packages. We can adjust the pace and provide child-friendly equipment. Please mention children's ages when booking so we can prepare accordingly."
  },
  {
    question: "What makes the White Desert so special compared to other deserts?",
    answer: "The White Desert is unique in the world. It features extraordinary chalk rock formations shaped by millions of years of wind erosion into mushroom-like, bird-like, and other surreal shapes. At night, it transforms into an otherworldly landscape illuminated by moonlight reflecting off the white surfaces. Combined with zero light pollution, it offers some of the best stargazing on Earth — perfect for seeing the Milky Way, shooting stars, and satellite trails."
  }
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0.3]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src="/manus-storage/r57BraXzw88D_f3cabae7.jpg"
            alt="White Desert Egypt panoramic view - surreal chalk rock formations at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-gold text-sm font-medium">Verified Bedouin Guide · 10+ Years Experience</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Discover the <br />
            <span className="text-gold">White Desert</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience Egypt's most magical landscape with an authentic Bedouin guide. 
            Unique safaris, overnight camping under a billion stars, and memories that last forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-primary-foreground px-8 py-6 text-base font-medium"
              asChild
            >
              <a href="/packages">
                Explore Packages
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
              asChild
            >
              <a href="https://wa.me/+201278220004?text=Hi%20Kimo!%20I'm%20interested%20in%20a%20White%20Desert%20tour." target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-gold" />
          </div>
        </motion.div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/manus-storage/S7xjSysQ6PJ3_1cfd1cbd.jpg"
                  alt="Tour Guide Kimo - authentic Bedouin desert guide in Egypt's White Desert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl border border-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-gold block">10+</span>
                  <span className="text-xs text-muted-foreground">Years Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                About Tour Guide Kimo
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6 leading-tight">
                An Authentic <span className="text-gold">Bedouin</span> Experience
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Born and raised in Bawiti, Bahariya Oasis — the gateway to the Western Desert — 
                I'm Kimo, a Bedouin guide who grew up among the white chalk rocks and endless dunes 
                of Egypt's most spectacular desert. My family has called the desert home for generations, 
                and I bring that deep-rooted knowledge and passion to every tour.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The White Desert National Park is home to some of the most extraordinary rock formations 
                on Earth. These chalk-white mushroom-shaped pillars, sculpted by millions of years of 
                wind erosion, create a landscape that feels like another planet. Combined with the 
                clearest night skies in the Northern Hemisphere, it's an experience that transforms 
                every traveler.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're seeking the thrill of off-road adventures through pristine white dunes, 
                the serenity of stargazing under the Milky Way, or the warmth of a traditional Bedouin 
                campfire dinner, I'm here to make your journey unforgettable. Every tour is personalized 
                and led with the care of a host, not just a guide.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Compass, label: "Local Knowledge", desc: "Deep desert expertise" },
                  { icon: Users, label: "Small Groups", desc: "Personal experience" },
                  { icon: Star, label: "5-Star Rated", desc: "Verified account" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCES SECTION ========== */}
      <section className="py-24 bg-secondary/20" id="experiences">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
              Unforgettable <span className="text-gold">Experiences</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From adrenaline-pumping adventures to peaceful stargazing nights, 
              every moment in the White Desert is magical.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mountain,
                title: "Desert Safari",
                desc: "Explore the White and Black Desert in a 4×4 off-road vehicle. Navigate through surreal rock formations, endless white dunes, and hidden oases that only locals know about.",
                image: "/manus-storage/5uHZtIMRVPJq_115a6df3.jpg",
              },
              {
                icon: Moon,
                title: "Stargazing Night",
                desc: "Sleep under the Milky Way in a traditional Bedouin camp. Zero light pollution means the clearest skies you'll ever see — perfect for astrophotography and naked-eye viewing.",
                image: "/manus-storage/ozfCk90fAt1H_eb560c85.jpg",
              },
              {
                icon: Tent,
                title: "Bedouin Camping",
                desc: "Authentic overnight experience with traditional Bedouin cooking, storytelling around the campfire, and tea ceremonies passed down through generations of desert nomads.",
                image: "/manus-storage/RazOFVYL4KdQ_1a5b7945.jpg",
              },
              {
                icon: Flame,
                title: "Sandboarding",
                desc: "Carve through pristine white sand dunes in an exhilarating ride that's part of every adventure package. The White Desert's dunes offer some of the best sandboarding in Egypt.",
                image: "/manus-storage/hBYYM7tHujPv_b828d089.webp",
              },
              {
                icon: Camera,
                title: "Photography Tours",
                desc: "Capture the surreal beauty of the White Desert with guided photography sessions at golden hour. The unique rock formations provide incredible subjects for any photographer.",
                image: "/manus-storage/rjrzhbBf0EwP_8eb6865d.jpg",
              },
              {
                icon: Coffee,
                title: "Cultural Experience",
                desc: "Learn about Bedouin traditions, taste authentic desert cuisine cooked in traditional sand ovens, and hear stories passed down through generations of desert nomads.",
                image: "/manus-storage/OzuJnRs2gKf4_5c0365e1.webp",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden border border-border/30 hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={`White Desert Egypt ${exp.title} - Bedouin desert adventure`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED IMAGE SECTION ========== */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/kRkdJctWNvjb_56a85285.jpg"
            alt="Tent camping in the White Desert with stunning mountain backdrop at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/30" />
        </div>
        <div className="relative z-10 container h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Sleep Under a <span className="text-gold">Billion Stars</span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl mb-6">
              Zero light pollution. Zero distractions. Just you, the desert, and the most 
              spectacular night sky on Earth. The White Desert offers some of the best 
              stargazing conditions in the Northern Hemisphere.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold-light text-primary-foreground px-8" asChild>
              <a href="/packages">View Packages</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Why Tour Guide Kimo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
              The <span className="text-gold">Difference</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Compass, number: "01", title: "Local Expert", desc: "Born in Bawiti, Bahariya Oasis. Not a tourist guide — a real Bedouin with generations of desert knowledge." },
              { icon: Star, number: "02", title: "Verified & Trusted", desc: "Verified Facebook account with hundreds of happy travelers from around the world." },
              { icon: Users, number: "03", title: "Small Groups", desc: "Intimate group sizes (2-10 people) for a personal, authentic, and safe desert experience." },
              { icon: MapPin, number: "04", title: "Hidden Gems", desc: "Secret spots off the beaten path that only locals know — far from crowded tourist routes." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <span className="text-gold/20 text-6xl font-display font-bold block mb-4">{item.number}</span>
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SEO-RICH CONTENT SECTION ========== */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">
                The Ultimate <span className="text-gold">White Desert Egypt</span> Experience
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The <strong className="text-foreground">White Desert National Park</strong> is one of 
                  Egypt's most extraordinary natural wonders, located in the Western Desert near 
                  Bawiti in the Bahariya Oasis, Giza Governorate. This surreal landscape features 
                  towering chalk rock formations — some shaped like mushrooms, others like birds or 
                  abstract sculptures — all carved over millions of years by relentless wind erosion.
                </p>
                <p>
                  Our <strong className="text-foreground">White Desert tours</strong> are led by 
                  Kimo, an authentic Bedouin guide who has lived in the Bahariya Oasis his entire life. 
                  Unlike commercial tour operators, we offer a deeply personal experience — sleeping 
                  in traditional Bedouin tents, eating meals cooked in the desert sand, and listening 
                  to stories under a sky so clear you can see the Milky Way with your naked eye.
                </p>
                <p>
                  The White Desert camping experience is consistently rated as one of the best 
                  things to do in Egypt by international travelers. Whether you're coming from 
                  Cairo, Luxor, Hurghada, or Sharm El Sheikh, our tours include all transportation 
                  and logistics. The nearest airport is Cairo International Airport (CAI), just 
                  4 hours away by road.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-24" id="faq">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
              Frequently <span className="text-gold">Asked</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about visiting the White Desert
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors"
                >
                  <h3 className="text-foreground font-medium pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOCIAL PROOF STATS ========== */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Trusted by Travelers Worldwide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Numbers That <span className="text-gold">Speak</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Travelers", icon: Users },
              { number: "10+", label: "Years Experience", icon: Star },
              { number: "350+", label: "5-Star Reviews", icon: Flame },
              { number: "30+", label: "Countries Represented", icon: Globe },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border/30"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-gold font-display block mb-2">
                  {stat.number}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== URGENCY / SCARCITY SECTION ========== */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card rounded-2xl border border-gold/20 p-8 md:p-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-sm font-semibold">Limited Availability</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
              Only <span className="text-gold">8 Spots</span> Left for This Month
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Our tours are limited to small groups of maximum 10 people to ensure a personal,
              authentic experience. October through April is peak season — book early to secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+201278220004?text=Hi%20Kimo!%20I%20want%20to%20book%20a%20White%20Desert%20tour.%20Please%20tell%20me%20the%20available%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-primary-foreground rounded-full font-medium text-base transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <MessageCircle className="w-5 h-5" />
                Check Available Dates
              </a>
            </div>
            <p className="text-muted-foreground text-xs mt-4">
              Typical response time: under 30 minutes during business hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-sunset/5" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
              Your Desert <span className="text-gold">Adventure</span> Awaits
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Join hundreds of travelers who have experienced the magic of the White Desert.
              Whether you're a solo traveler, a couple, or a group of friends — we have the 
              perfect experience for you. Book today and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-primary-foreground px-10 py-6 text-base shadow-lg shadow-gold/20" asChild>
                <a href="/packages">
                  Explore Tour Packages
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 px-10 py-6 text-base" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
            <p className="text-muted-foreground text-xs mt-6">
              Starting from <span className="text-gold font-semibold">$99/person</span> · All-inclusive · Free cancellation up to 48h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+201278220004?text=Hi%20Kimo!%20I'm%20interested%20in%20a%20White%20Desert%20tour."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 float-animation"
      >
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 pulse-glow transition-transform hover:scale-110">
          <Phone className="w-6 h-6 text-white" />
        </div>
      </a>

      <Footer />
    </div>
  );
}
