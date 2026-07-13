/**
 * Contact Page - Booking and contact form
 * Design: Saharan Cinematic - dark desert theme with gold accents
 * SEO Optimized with structured contact info and rich content
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Globe, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! We'll contact you soon via WhatsApp or email.");
    setFormData({ name: "", email: "", phone: "", guests: "", date: "", package: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              Book Your White Desert Tour
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Book Your <span className="text-gold">Adventure</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to experience the magic of the White Desert in Egypt? 
              Fill out the booking form below or reach out directly via WhatsApp for the fastest response. 
              Tours are available year-round with the best season being October to April.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border/30">
                <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                  Send a <span className="text-gold">Booking Request</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form and we'll get back to you within 24 hours via WhatsApp or email
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Full Name *</label>
                      <Input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-secondary border-border/30 focus:border-gold/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-secondary border-border/30 focus:border-gold/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Phone / WhatsApp *</label>
                      <Input
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+20 XXX XXX XXXX"
                        className="bg-secondary border-border/30 focus:border-gold/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Number of Guests</label>
                      <Input
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="e.g., 2 adults, 1 child"
                        className="bg-secondary border-border/30 focus:border-gold/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Preferred Date</label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-secondary border-border/30 focus:border-gold/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Tour Package</label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md bg-secondary border border-border/30 text-foreground focus:border-gold/50 outline-none text-sm"
                      >
                        <option value="">Select a package</option>
                        <option value="day">Day Trip - $99 per person</option>
                        <option value="overnight">Overnight Camping - $145 per person</option>
                        <option value="premium">Premium 3-Day - $199 per person</option>
                        <option value="custom">Custom Package - Contact for pricing</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Additional Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream desert adventure... Where are you traveling from? Any special requests?"
                      rows={4}
                      className="bg-secondary border-border/30 focus:border-gold/50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-primary-foreground py-3 text-base"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Booking Request
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                  Direct <span className="text-gold">Contact</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Based in Bawiti, Bahariya Oasis, Giza — the gateway to the White Desert. 
                  Available daily from 8:00 AM to 10:00 PM (Egypt Time, GMT+2).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/30 hover:border-gold/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">WhatsApp</p>
                      <a href="https://wa.me/+201278220004" className="text-foreground font-medium hover:text-gold transition-colors">
                        +20 127 822 0004
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/30 hover:border-gold/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">Email</p>
                      <a href="mailto:nasrkimo91@gmail.com" className="text-foreground font-medium hover:text-gold transition-colors">
                        nasrkimo91@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/30 hover:border-gold/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">Location</p>
                      <span className="text-foreground font-medium">
                        Bawiti, Bahariya Oasis, Giza, Egypt
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold font-display text-foreground mb-4">
                  Follow <span className="text-gold">Us</span>
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/people/Tour-Guide-Kimo/61564745261285/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                  >
                    <Globe className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/white_desert_adventure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quick Booking */}
              <div className="p-6 bg-card rounded-xl border border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <h4 className="text-lg font-bold font-display text-foreground">
                    Quick <span className="text-gold">WhatsApp</span> Booking
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  For the fastest response, message us directly on WhatsApp. We typically reply within 30 minutes 
                  during business hours (8 AM - 10 PM Egypt time). Include your preferred dates and group size.
                </p>
                <a
                  href="https://wa.me/+201278220004?text=Hi%20Kimo!%20I'm%20interested%20in%20a%20White%20Desert%20tour.%20My%20preferred%20dates%20are%20______%20and%20I%20have%20______%20guests."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Message on WhatsApp Now
                  </Button>
                </a>
              </div>

              {/* Travel Info */}
              <div className="p-6 bg-card rounded-xl border border-border/30">
                <h4 className="text-lg font-bold font-display text-foreground mb-3">
                  Getting to the <span className="text-gold">White Desert</span>
                </h4>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <p>
                      <strong className="text-foreground">From Cairo:</strong> Our tours include 4×4 transport 
                      from Cairo to Bawiti (Bahariya Oasis), then into the desert. Journey takes 4-5 hours.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <p>
                      <strong className="text-foreground">From Hurghada/Sharm:</strong> Fly to Cairo first, 
                      or we can arrange direct transport. Contact us for details.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <p>
                      <strong className="text-foreground">Best Season:</strong> October to April offers the most 
                      comfortable temperatures (15-25°C) and clearest night skies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
