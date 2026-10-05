"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const MotionLink = motion.create(Link);

export default function HeroSection({ onOpenContact }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#0A0D14]"
    >
      {/* Background Image with Liquid Glass Ribbons */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-glass.jpg"
          alt="Abstract Iridescent Glass Motion"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70 mix-blend-screen scale-105"
        />
        {/* Soft Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14]/90 via-[#0A0D14]/40 to-[#0A0D14]/80" />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-[150px] pointer-events-none"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-[95%] mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6 lg:space-y-8">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 shadow-lg text-[13px] sm:text-[14px] font-medium tracking-wide cursor-default"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Code2 className="w-3.5 h-3.5" />
              </span>
              <span>Innovating the future of Software Architecture</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] font-extrabold text-white tracking-tight uppercase leading-[1.04] max-w-6xl xl:max-w-7xl"
            >
              EMPOWERING YOUR ENTERPRISE WITH SMART SOFTWARE SOLUTIONS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 font-normal leading-relaxed max-w-4xl"
            >
              We help businesses reduce costs, scale faster, and stay secure with
              end-to-end cloud microservices, AI-driven platforms, and enterprise
              technology engineering.
            </motion.p>

            {/* Hero CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative h-[54px] px-8 rounded-full bg-white text-black font-semibold text-[15px] hover:bg-neutral-100 transition-colors shadow-xl hover:shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Consultation</span>
              </MotionLink>

              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                aria-label="Direct Consultation Link"
                className="group w-[54px] h-[54px] rounded-full bg-white text-black hover:bg-neutral-100 flex items-center justify-center transition-colors shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MotionLink>
            </motion.div>
          </div>

          {/* Right Column: Hero Feature Glass Card (Matching Wilbur) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }}
              className="w-full max-w-[420px] xl:max-w-[460px] rounded-3xl p-5 sm:p-6 bg-white/10 backdrop-blur-2xl border border-white/25 shadow-2xl transition-all duration-500 hover:border-white/40 hover:bg-white/15"
            >
              {/* Inner Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 border border-white/15 shadow-inner">
                <Image
                  src="/assets/hero-ai-card.jpg"
                  alt="AI Powered Solutions Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Card Meta Content */}
              <div className="space-y-1">
                <span className="text-[12px] font-bold tracking-wider text-cyan-300 uppercase">
                  AI-POWERED ARCHITECTURE
                </span>
                <p className="text-[16px] font-semibold text-white tracking-wide">
                  Smarter engineering for future-ready brands.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar (Matching Wilbur Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[95%] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16"
      >
        <div className="flex flex-wrap items-center gap-8 sm:gap-14 lg:gap-20 text-white">
          {/* Stat 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-baseline gap-3 cursor-default group"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              180+
            </span>
            <span className="text-xs sm:text-sm text-neutral-300 uppercase tracking-wider max-w-[140px] leading-snug">
              Global Brands Served Worldwide
            </span>
          </motion.div>

          {/* Slash Divider */}
          <span className="text-2xl sm:text-3xl text-neutral-500 font-extralight hidden sm:inline select-none">
            /
          </span>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-baseline gap-3 cursor-default group"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              99.9%
            </span>
            <span className="text-xs sm:text-sm text-neutral-300 uppercase tracking-wider max-w-[140px] leading-snug">
              Client Satisfaction & SLA Rate
            </span>
          </motion.div>

          {/* Slash Divider */}
          <span className="text-2xl sm:text-3xl text-neutral-500 font-extralight hidden md:inline select-none">
            /
          </span>

          {/* Stat 3 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden md:flex items-baseline gap-3 cursor-default group"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              50M+
            </span>
            <span className="text-xs sm:text-sm text-neutral-300 uppercase tracking-wider max-w-[140px] leading-snug">
              Daily Transactions Engineered
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
