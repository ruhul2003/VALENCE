"use client";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#F8FAFC] dark:bg-[#080B11] transition-colors duration-300">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16 bg-white dark:bg-[#080B11] border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              <span>START A CONVERSATION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
              LET&apos;S TALK ABOUT YOUR NEXT SOFTWARE MILESTONE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-3xl pt-2">
              Share your project goals, system constraints, or architectural challenges. You will speak directly with a Principal Software Architect under strict NDA.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <FaqSection />

      <Footer />
    </main>
  );
}
