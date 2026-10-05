"use client";

import Navbar from "@/components/Navbar";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function FaqPage() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#F8FAFC]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16 bg-white border-b border-gray-100">
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[1.05]">
              TRANSPARENT ANSWERS TO YOUR TECHNICAL QUESTIONS
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl pt-2">
              Everything you need to know about our engineering squads, sprint cadence, intellectual property guarantees, security standards, and production SLAs.
            </p>
          </motion.div>
        </div>
      </section>

      <FaqSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
