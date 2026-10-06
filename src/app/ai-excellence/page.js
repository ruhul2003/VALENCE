"use client";

import Navbar from "@/components/Navbar";
import AiExcellenceSection from "@/components/AiExcellenceSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AiExcellencePage() {
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
              <span>COGNITIVE INTELLIGENCE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
              ENTERPRISE AI COGNITIVE ARCHITECTURE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-3xl pt-2">
              Transform unstructured company knowledge into high-confidence autonomous agents. Zero data leakage, strict role-based access control, and sub-15ms private inference.
            </p>
          </motion.div>
        </div>
      </section>

      <AiExcellenceSection />
      <ServicesAccordion />

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-neutral-950 dark:bg-[#0B0F17] text-white border-t border-neutral-900 dark:border-white/10">
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">ENTERPRISE PILOT</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight">Deploy private enterprise AI in 30 days.</h2>
          </div>
          <Link
            href="/contact"
            className="group rounded-full bg-white text-black hover:bg-neutral-100 dark:hover:bg-neutral-200 px-8 py-4 text-sm font-semibold flex items-center gap-3 transition-colors shadow-xl shrink-0"
          >
            <span>Request Technical Briefing</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
