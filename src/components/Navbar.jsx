"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "AI Excellence", href: "#ai-excellence" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex items-center tracking-tighter">
            <span
              className={`font-black italic text-xl mr-1 tracking-widest transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              ///
            </span>
            <span
              className={`font-extrabold text-2xl tracking-[0.18em] transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              VALENCE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -1 }}
              className={`text-[15px] font-medium transition-colors tracking-wide relative group ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenContact}
            className={`group rounded-full px-7 h-[44px] lg:h-[48px] flex items-center gap-3 text-[14px] font-semibold transition-all duration-300 cursor-pointer ${
              scrolled
                ? "bg-black text-white hover:bg-neutral-800 shadow-md hover:shadow-lg"
                : "bg-white text-black hover:bg-neutral-100 shadow-lg"
            }`}
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-black/10 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-800 hover:text-black py-2 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="mt-4 w-full bg-black text-white rounded-full py-3.5 px-6 font-semibold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
