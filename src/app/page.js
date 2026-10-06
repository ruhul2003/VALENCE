"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechTicker from "@/components/TechTicker";
import AboutSection from "@/components/AboutSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import AiExcellenceSection from "@/components/AiExcellenceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CultureSection from "@/components/CultureSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickConsultModal from "@/components/QuickConsultModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenContact = () => {
    // Smooth scroll to the contact section or open modal
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      setModalOpen(true);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen relative flex flex-col bg-[#F8FAFC] dark:bg-[#080B11] transition-colors duration-300">
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Fixed Translucent Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section matching Wilbur Ltd */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* Marquee Partner/Tech Ticker */}
      <TechTicker />

      {/* About Us Section */}
      <AboutSection />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Services Section with Hairline Split Accordions */}
      <ServicesAccordion onOpenContact={handleOpenContact} />

      {/* AI Cognitive Architecture Showcase with Central Brain */}
      <AiExcellenceSection />

      {/* Projects Showcase with 01, 02 Numerals Grid */}
      <ProjectsSection onOpenContact={handleOpenContact} />

      {/* Testimonials with Orbital Ring & Floating Badges */}
      <TestimonialsSection />

      {/* Engineering Culture Strip */}
      <CultureSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact & Free Consultation Form */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Bottom-Right Floating Brand Action Button (Matching Wilbur Ltd circular emblem) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleOpenModal}
          aria-label="Open Quick Consultation"
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-[#0E131F] text-black dark:text-white shadow-2xl border border-gray-200/80 dark:border-white/15 hover:border-black/30 dark:hover:border-cyan-400/40 flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-black/5 dark:bg-cyan-400/20 animate-ping pointer-events-none" />
          
          <div className="flex items-center tracking-tighter transition-transform group-hover:scale-110">
            <span className="font-black italic text-lg sm:text-xl text-black dark:text-cyan-300">
              ///
            </span>
          </div>
        </motion.button>
      </div>

      {/* Interactive Quick Discovery Modal */}
      <QuickConsultModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
