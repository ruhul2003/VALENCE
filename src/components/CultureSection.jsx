"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CultureSection() {
  const photos = [
    {
      title: "Global Engineering All-Hands",
      location: "San Francisco Lab",
      image: "/assets/engineers-team.jpg",
    },
    {
      title: "Autonomous Agent Hackathon",
      location: "London Studio",
      image: "/assets/project-novaflow.jpg",
    },
    {
      title: "Cloud Infrastructure Summit",
      location: "Singapore Tech Hub",
      image: "/assets/hero-glass.jpg",
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-white border-t border-gray-100">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>CULTURE & LIFE AT VALENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950">
            ENGINEERING CULTURE WITHOUT BORDERS.
          </h2>
        </motion.div>

        {/* 3-Photo Horizontal Row (Matching Wilbur's 3-card photo strip) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 lg:mb-16">
          {photos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative aspect-[16/11] lg:aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold tracking-wider uppercase text-cyan-300 block mb-1 transition-transform group-hover:translate-x-1">
                  {item.location}
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-gray-200/80"
        >
          {[
            { metric: "100%", label: "Remote-First Squads" },
            { metric: "4.9/5", label: "Glassdoor Culture Score" },
            { metric: "16+", label: "Countries Represented" },
            { metric: "Weekly", label: "Shipped Production Releases" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col space-y-1 text-center sm:text-left cursor-default"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                {stat.metric}
              </span>
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
