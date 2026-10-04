"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "Valence architected and engineered our entire cloud microservices platform from the ground up. Their engineering squad delivered a high-throughput event processing engine that reduced our cloud operational costs by 42% while handling 5x traffic surges effortlessly.",
      author: "Marcus Vance",
      role: "VP of Engineering, CloudScale Global",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote:
        "Their full-stack team rebuilt our customer-facing web platform and enterprise SaaS dashboard in Next.js. Page load latency dropped below 200ms globally, and our enterprise conversion rates doubled in the first quarter post-launch.",
      stars: 5,
      author: "Elena Rostova",
      role: "Chief Technology Officer, FinApex Systems",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    },
    {
      stars: 5,
      quote:
        "Working with Valence feels like having an elite Silicon Valley software laboratory plugged directly into your company. Their code quality, automated test coverage, and weekly demo cadence set a gold standard for software engineering.",
      author: "David Sterling",
      role: "Founder & CEO, Horizon Health AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      stars: 5,
      quote:
        "The autonomous AI agents Valence deployed into our customer workflows now resolve 74% of complex technical queries autonomously without hallucination. Exceptional technical depth and communication.",
      author: "Sarah Lindqvist",
      role: "Head of Product, Omnia Logistics",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-36 bg-[#F8FAFC] relative overflow-hidden border-t border-gray-200"
    >
      {/* Background Orbit Ring with Floating Quote Pills (Replicating Wilbur's exact graphic) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[900px] h-[900px] lg:w-[1300px] lg:h-[1300px] xl:w-[1450px] xl:h-[1450px] rounded-full border border-dashed border-neutral-400" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Floating Bubble Badges around the orbit */}
        <div className="relative mb-12 min-h-[140px] hidden sm:block">
          {/* Bubble 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute left-[12%] top-2 flex flex-col items-center"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-black text-white text-[11px] font-bold tracking-wider shadow-lg mb-2">
              &quot;EXCEPTIONAL&quot;
            </span>
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bubble 2 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[22%] -top-2 flex flex-col items-center"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-black text-white text-[11px] font-bold tracking-wider shadow-lg mb-2">
              &quot;BRILLIANT&quot;
            </span>
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bubble 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
            className="absolute right-[8%] top-16 flex flex-col items-center"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-black text-white text-[11px] font-bold tracking-wider shadow-lg mb-2">
              &quot;INCREDIBLE&quot;
            </span>
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950">
            TRUSTED BY TECH EXECUTIVES GLOBALLY
          </h2>
        </motion.div>

        {/* Testimonials Cards Grid (2 at a time, Wilbur Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[0, 1].map((offset) => {
            const item = testimonials[(currentIndex + offset) % testimonials.length];
            return (
              <AnimatePresence mode="wait" key={offset}>
                <motion.div
                  key={item.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Gold Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-6">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed font-normal mb-8">
                      &quot;{item.quote}&quot;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-950">
                        {item.author}
                      </h4>
                      <span className="text-xs text-neutral-500">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        {/* Arrow Navigation (Wilbur Pill Controls) */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="w-14 h-12 rounded-full bg-white hover:bg-neutral-100 border border-gray-300 flex items-center justify-center text-black shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="w-14 h-12 rounded-full bg-white hover:bg-neutral-100 border border-gray-300 flex items-center justify-center text-black shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
