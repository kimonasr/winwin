/**
 * Packages Page - Tour packages and pricing
 * Design: Saharan Cinematic - dark desert theme with gold accents
 * SEO Optimized with rich descriptions and structured content
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Check, Phone, ArrowRight } from "lucide-react";

const packages = [
  {
    id: "day-trip",
    name: "Day Trip",
    subtitle: "White Desert Day Tour",
    description: "Perfect for first-time visitors wanting to explore the White Desert without overnight camping. This day tour covers all the highlights including the iconic rock formations, Black Desert volcanoes, and sandboarding on pristine white dunes.",
    price: "99",
    priceAr: "$",
    duration: "1 Day",
    groupSize: "2-10",
    image: "/manus-storage/5uHZtIMRVPJq_115a6df3.jpg",
    features: [
      "4×4 Desert Safari from Cairo",
      "White Desert National Park Visit",
      "Black Desert & Crystal Mountain",
      "Sandboarding on White Dunes",
      "Hot Springs at Bir Sitta",
      "Traditional Desert Lunch",
      "English Speaking Bedouin Guide",
      "Free Photography Assistance",
    ],
  },
  {
    id: "overnight",
    name: "Overnight",
    subtitle: "Camping Under the Stars",
    description: "Our most popular package — spend one magical night sleeping under the Milky Way in the heart of the White Desert. Experience authentic Bedouin hospitality with a traditional campfire dinner, storytelling, and the most spectacular stargazing in Egypt.",
    price: "145",
    priceAr: "$",
    duration: "2 Days",
    groupSize: "2-8",
    image: "/manus-storage/yqXp3LTMQS2R_b945cb8f.jpg",
    popular: true,
    features: [
      "Everything in Day Trip",
      "Overnight Desert Camping",
      "Milky Way Stargazing",
      "Traditional Bedouin Dinner",
      "Bonfire Night & Storytelling",
      "Sleeping Bags & Mattresses",
      "Sunrise Viewing & Breakfast",
      "Bedouin Tea Ceremony",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "3 Days Deep Desert Adventure",
    description: "The ultimate White Desert experience for serious adventurers. Three days of exploration covering the entire Western Desert — from the White Desert's surreal formations to the Black Desert's volcanic landscape, Crystal Mountain, and hidden oases only locals know.",
    price: "199",
    priceAr: "$",
    duration: "3 Days",
    groupSize: "2-6",
    image: "/manus-storage/hdUB6yENUFXW_4d7179bb.webp",
    features: [
      "Everything in Overnight Package",
      "2 Nights Desert Camping",
      "Crystal Mountain Expedition",
      "Hot Air Balloon (Optional Add-on)",
      "Private Chef for All Meals",
      "Professional Photography Session",
      "Bird Rock & Mushroom Rock Visit",
      "Airport Transfer Included",
      "All Meals & Drinks Included",
    ],
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-desert-deep via-desert-dark to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.75 0.10 70 / 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, oklch(0.65 0.18 30 / 0.1) 0%, transparent 50%)`
          }} />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Tour Packages & Pricing
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Choose Your <span className="text-gold">Adventure</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From thrilling day trips to immersive overnight experiences, 
              we have the perfect White Desert adventure for every traveler. 
              All packages include 4×4 transportation from Cairo, meals, camping gear, and expert Bedouin guide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="relative overflow-hidden bg-card border-border/50 hover:border-gold/30 transition-all duration-500 group h-full flex flex-col">
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-gold text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  )}

                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={`White Desert Egypt ${pkg.name} - ${pkg.subtitle}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Scarcity Badge for Popular */}
                    {pkg.popular && (
                      <div className="mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">3 spots left this week</span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-2xl font-bold font-display text-foreground">{pkg.name}</h3>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-gold">{pkg.price}</span>
                        <span className="text-muted-foreground text-sm ml-1">{pkg.priceAr}/person</span>
                      </div>
                    </div>
                    <p className="text-xs text-green-400/80 mb-1">All-inclusive · No hidden fees</p>
                    <p className="text-muted-foreground text-sm mb-2">{pkg.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{pkg.description}</p>

                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-gold" />
                        <span>Group: {pkg.groupSize}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-6">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-3">
                      <Button className="flex-1 bg-gold hover:bg-gold-light text-primary-foreground" asChild>
                        <a href="/contact">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10" asChild>
                        <a href="https://wa.me/+201278220004" target="_blank" rel="noopener noreferrer">
                          <Phone className="w-4 h-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🛡️", title: "Safe & Secure", desc: "Licensed guide, insured tours" },
              { icon: "💰", title: "No Hidden Fees", desc: "Transparent pricing guaranteed" },
              { icon: "✅", title: "Free Cancellation", desc: "Cancel up to 48h before" },
              { icon: "⭐", title: "5-Star Rated", desc: "350+ verified reviews" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/30"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              What's <span className="text-gold">Included</span> in Every Tour?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every White Desert tour package comes with our signature Bedouin hospitality and professional service
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚙", title: "4×4 Transport", desc: "Round trip from Cairo & all desert transport" },
              { icon: "🏕️", title: "Camping Gear", desc: "Tents, sleeping bags, mattresses & chairs" },
              { icon: "🍽️", title: "All Meals", desc: "Breakfast, lunch & dinner included" },
              { icon: "📸", title: "Photography", desc: "Free photography assistance & tips" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-lg border border-border/30"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section - SEO Rich */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">
              About Our <span className="text-gold">White Desert Tours</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tour Guide Kimo offers the most authentic White Desert Egypt tours available. Based in Bawiti, 
                the main town of the Bahariya Oasis in Giza Governorate, we provide comprehensive desert 
                adventure packages that cater to all types of travelers — solo adventurers, couples on 
                romantic getaways, groups of friends, and families with children.
              </p>
              <p>
                Our White Desert camping tours are the highlight of any Egypt itinerary. Unlike the crowded 
                tourist sites of Cairo and Luxor, the White Desert offers a peaceful, otherworldly experience 
                where you can disconnect from the modern world and reconnect with nature. The surreal chalk 
                rock formations, created over millions of years by wind erosion, create a landscape that 
                looks like it belongs on another planet.
              </p>
              <p>
                All tours include professional 4×4 transportation from Cairo (approximately 360 km / 4-5 hours), 
                making it easy to combine a White Desert tour with your broader Egypt vacation. We also serve 
                travelers coming from Hurghada, Sharm El Sheikh, Luxor, Aswan, and Alexandria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">
              Ready for Your <span className="text-gold">Desert Adventure</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Limited spots available for each tour. Book now to secure your place under the stars. 
              Contact us on WhatsApp for the fastest response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-primary-foreground px-8" asChild>
                <a href="/contact">Book Your Tour</a>
              </Button>
              <Button size="lg" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 px-8" asChild>
                <a href="https://wa.me/+201278220004" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
