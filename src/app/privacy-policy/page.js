"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
              <span>LEGAL COMPLIANCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
              PRIVACY POLICY
            </h1>
            <p className="text-xs text-neutral-400">Last updated: October 2026</p>

            <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed pt-4 border-t border-gray-100">
              <h2 className="text-xl font-bold text-neutral-950">1. Commitment to Privacy</h2>
              <p>
                At VALENCE Technologies Ltd., privacy and data protection are fundamental architectural principles. We respect the confidentiality of our clients, partners, and visitors.
              </p>

              <h2 className="text-xl font-bold text-neutral-950">2. Information Collection & Zero-Leakage Guarantee</h2>
              <p>
                We only collect contact details explicitly provided via consultation forms for the purposes of delivering software engineering and architecture advisory services. We never sell, rent, or share personal data with external third parties or public AI training pipelines.
              </p>

              <h2 className="text-xl font-bold text-neutral-950">3. Enterprise Security & Compliance</h2>
              <p>
                All data in transit is encrypted using modern TLS 1.3 cryptographic suites and AES-256 at rest, conforming to strict SOC2 Type II, HIPAA, and GDPR standards.
              </p>

              <h2 className="text-xl font-bold text-neutral-950">4. Contact & Inquiries</h2>
              <p>
                For questions regarding this policy, contact our Data Protection Officer at privacy@valence-tech.com or visit 500 Howard Street, Suite 400, San Francisco, CA.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
