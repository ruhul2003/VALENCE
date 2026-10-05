"use client";

import Navbar from "@/components/Navbar";
import ServicesAccordion from "@/components/ServicesAccordion";
import AiExcellenceSection from "@/components/AiExcellenceSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
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
              <span>CAPABILITIES & EXPERTISE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[1.05]">
              END-TO-END SOFTWARE & CLOUD ENGINEERING
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl pt-2">
              From enterprise design systems and zero-downtime microservices to autonomous multi-agent AI and real-time Kafka data platforms, we engineer solutions built to last.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesAccordion />
      <AiExcellenceSection />

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-900">
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">CUSTOM SOW OR SQUAD</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight">Need a tailored capability squad?</h2>
          </div>
          <Link
            href="/contact"
            className="group rounded-full bg-white text-black hover:bg-neutral-100 px-8 py-4 text-sm font-semibold flex items-center gap-3 transition-colors shadow-xl shrink-0"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
