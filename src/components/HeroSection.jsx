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
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 lg:pt-36 lg:pb-16 overflow-hidden bg-[#0A0D14]"
    >
      {/* Background Video with Glass Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/hero-glass.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none opacity-85"
        >
          <source src="/assets/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Studio Light Refraction & Subtle Vignette Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35 pointer-events-none" />

        {/* Ambient Cyan/Silver Glow Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-sky-300/15 rounded-full blur-[150px] pointer-events-none"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-[95%] mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6 lg:space-y-7">
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/90 shadow-lg text-xs sm:text-[13px] font-medium tracking-wide cursor-default"
            >
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
              <span>Innovating the future of IT</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold text-white tracking-tight uppercase leading-[1.08] max-w-4xl"
            >
              EMPOWERING YOUR BUSINESS<br />
              WITH SMART IT SOLUTIONS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-[17px] text-neutral-200/90 font-normal leading-relaxed max-w-xl"
            >
              We help businesses reduce costs, scale faster, and stay secure with
              end-to-end managed IT services, cloud solutions, and AI-driven
              technology consulting
            </motion.p>

            {/* Hero CTA Button Group (Matching Reference Design) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex items-center gap-3 pt-2"
            >
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative h-[46px] sm:h-[48px] px-6 sm:px-7 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors shadow-xl flex items-center justify-center cursor-pointer"
              >
                <span>Book Free Consultation</span>
              </MotionLink>

              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.08, rotate: 6 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 16 }}
                aria-label="Direct Consultation Link"
                className="group w-[46px] h-[46px] sm:w-[48px] sm:h-[48px] rounded-full bg-white text-black hover:bg-neutral-100 dark:hover:bg-neutral-200 flex items-center justify-center transition-colors shadow-xl cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MotionLink>
            </motion.div>
          </div>

          {/* Right Column: Hero Feature Glass Card (Matching Wilbur) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 35 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }}
              className="w-full max-w-[380px] xl:max-w-[420px] rounded-3xl p-5 sm:p-6 bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/30 dark:border-white/15 shadow-2xl transition-all duration-500 hover:border-white/45 dark:hover:border-cyan-400/40 hover:bg-white/15 dark:hover:bg-black/60"
            >
              {/* Inner 3D Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 border border-white/20 shadow-inner">
                <Image
                  src="/assets/hero-ai-light.jpg"
                  alt="AI-Powered Solutions"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Meta Content */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold tracking-wider text-white uppercase flex items-center justify-between">
                  <span>AI-POWERED SOLUTIONS</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </h3>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-200/90 tracking-wide">
                  Smarter tech for future-ready brands.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar (Matching Reference Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[95%] mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-14"
      >
        <div className="flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-16 text-white">
          {/* Stat 1 */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-baseline gap-3 cursor-default group"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              150+
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-300 uppercase tracking-wider max-w-[120px] leading-tight">
              Global Brands<br />Served Worldwide
            </span>
          </motion.div>

          {/* Slash Divider */}
          <span className="text-2xl sm:text-3xl text-neutral-500 font-extralight select-none">
            /
          </span>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-baseline gap-3 cursor-default group"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              99%
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-300 uppercase tracking-wider max-w-[120px] leading-tight">
              Client Satisfaction<br />Rate
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Right Floating Action Widget (Matching Reference Circular Logo Button) */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 6 }}
        whileTap={{ scale: 0.94 }}
        onClick={onOpenContact}
        aria-label="Quick Consultation"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-100 transition-all border border-black/10 group"
      >
        <span className="font-black italic text-xl sm:text-2xl tracking-tighter text-black select-none group-hover:scale-105 transition-transform">
          ///
        </span>
      </motion.button>
    </section>
  );
}
