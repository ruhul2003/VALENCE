"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="w-[95%] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-gray-200/80 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>TERMS OF ENGAGEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
              TERMS OF SERVICE
            </h1>
            <p className="text-xs text-neutral-400">Last updated: October 2026</p>

            <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed pt-4 border-t border-gray-100">
              <h2 className="text-xl font-bold text-neutral-950">1. Acceptance of Terms</h2>
              <p>
                By accessing or engaging VALENCE Technologies Ltd. for software engineering, architecture discovery, or cloud operations, you agree to comply with and be bound by these Terms of Service.
              </p>

              <h2 className="text-xl font-bold text-neutral-950">2. Complete Intellectual Property Ownership</h2>
              <p>
                Unless explicitly stated otherwise in a custom Statement of Work (SOW), client retains 100% full legal title and intellectual property rights to all bespoke software artifacts, codebases, repositories, and documentation created under the contract.
              </p>

              <h2 className="text-xl font-bold text-neutral-950">3. Non-Disclosure & Confidentiality</h2>
              <p>
                VALENCE operates under strict mutual non-disclosure protocols. All proprietary business concepts, algorithms, and technical designs remain strictly confidential between the parties.
              </p>

              <h2 className="text-xl font-bold text-neutral-950">4. Service Level Guarantees</h2>
              <p>
                Production deployments and managed operations adhere to agreed-upon uptime SLAs (e.g. 99.99%) outlined in individual enterprise service level agreements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
