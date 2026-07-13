/**
 * Navbar Component - Sticky navigation with desert theme
 * Design: Saharan Cinematic - dark bg with gold accents
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Book Now" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-desert-deep/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/manus-storage/logo_b012ca81.png"
                alt="Tour Guide Kimo Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-display font-bold text-lg leading-tight">
                Tour Guide Kimo
              </span>
              <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-body">
                White Desert Adventure
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location === link.href
                      ? "text-gold bg-gold/10"
                      : "text-muted-foreground hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href="https://wa.me/+201278220004"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 bg-gold hover:bg-gold-light text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-desert-deep/95 backdrop-blur-xl border-t border-gold/10 overflow-hidden"
          >
            <div className="container px-4 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location === link.href
                          ? "text-gold bg-gold/10"
                          : "text-muted-foreground hover:text-gold hover:bg-gold/5"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href="https://wa.me/+201278220004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 bg-gold hover:bg-gold-light text-primary-foreground rounded-lg text-base font-medium transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
