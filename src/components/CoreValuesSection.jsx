"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Layers } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      icon: Terminal,
      number: "01",
      title: "ENGINEERING PRECISION",
      description:
        "Every line of TypeScript, Go, or Python is written to withstand extreme concurrency, strict memory profiles, and comprehensive CI/CD verification.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "AI-FIRST ARCHITECTURE",
      description:
        "We embed intelligent inference, agentic orchestration, and semantic search directly into the foundation of your enterprise software stack.",
    },
    {
      icon: Layers,
      number: "03",
      title: "UNCOMPROMISING SPEED",
      description:
        "From edge caching and sub-10ms database queries to ultra-fast client-side hydration, performance is treated as a fundamental feature.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 lg:py-36 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>OUR CORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950">
            WHAT EXCELLENCE MEANS TO US
          </h2>
        </motion.div>

        {/* 3 Pillars Grid with Staggered Framer Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12"
        >
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.number}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-[#F8FAFC] border border-gray-200/80 hover:border-black/30 hover:bg-white transition-colors duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <span className="text-3xl sm:text-4xl font-light text-neutral-400 group-hover:text-black transition-colors">
                      {val.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 uppercase mb-4">
                    {val.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                <div className="pt-8 sm:pt-10 mt-8 border-t border-gray-200/60 flex items-center text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors">
                  <span>Learn Protocol</span>
                  <span className="ml-2 font-normal transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
