/**
 * Footer Component - Site footer with social links and SEO info
 * Design: Saharan Cinematic - dark theme with gold accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-desert-deep border-t border-border/30">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo_b012ca81.png"
                alt="Tour Guide Kimo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-foreground font-display font-bold text-lg">
                  Tour Guide Kimo
                </h3>
                <p className="text-gold text-xs tracking-wider uppercase">
                  White Desert Adventure
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Authentic Bedouin guide offering unique White Desert safaris and 
              unforgettable camping under the stars in Egypt's most magical landscape.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Tour-Guide-Kimo/61564745261285/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all"
              >
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-gold" />
              </a>
              <a
                href="https://www.instagram.com/white_desert_adventure/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all"
              >
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/packages", label: "Tour Packages" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/contact", label: "Book a Tour" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-muted-foreground text-sm hover:text-gold transition-colors cursor-pointer block">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">
              Tour Packages
            </h4>
            <div className="space-y-3">
              {[
                { name: "Day Trip", price: "$99/person" },
                { name: "Overnight Camping", price: "$145/person" },
                { name: "Premium 3-Day", price: "$199/person" },
              ].map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{pkg.name}</span>
                  <span className="text-gold text-sm font-medium">{pkg.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+201278220004" className="hover:text-gold transition-colors">
                  +20 127 822 0004
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:nasrkimo91@gmail.com" className="hover:text-gold transition-colors">
                  nasrkimo91@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Bawiti, Bahariya Oasis, Giza, Egypt</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/+201278220004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-green-600/20"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs">
              © 2026 Tour Guide Kimo - White Desert Adventure. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground text-xs">
              <span>White Desert · Bahariya Oasis · Giza · Egypt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <p>
          Tour Guide Kimo offers authentic Bedouin desert safari tours in Egypt's 
          White Desert, Black Desert, and Bahariya Oasis. Services include overnight 
          camping under the stars, sandboarding, off-road 4x4 adventures, hot springs 
          visits, and stargazing experiences. Based in Bawiti, Bahariya Oasis, Giza, Egypt. Licensed local 
          tour operator with experienced desert guides and professional drivers.
        </p>
        <p>
          Keywords: White Desert Egypt tour, desert safari Egypt, Bedouin guide Egypt, 
          camping under stars Egypt, Bahariya Oasis tours, sandboarding Egypt, 
          Black Desert Egypt, Egypt desert adventure, off-road safari Egypt, 
          White Desert camping, Egypt tourism, desert experience Egypt
        </p>
      </div>
    </footer>
  );
}
