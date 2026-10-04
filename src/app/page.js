"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    <main className="min-h-screen relative flex flex-col bg-[#F8FAFC]">
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
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black shadow-2xl border border-gray-200/80 hover:border-black/30 flex items-center justify-center transition-shadow duration-300 cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-black/5 animate-ping pointer-events-none" />
          
          <div className="flex items-center tracking-tighter transition-transform group-hover:scale-110">
            <span className="font-black italic text-lg sm:text-xl text-black">
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
