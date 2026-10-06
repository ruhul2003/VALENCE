"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#F8FAFC] dark:bg-[#080B11] transition-colors duration-300">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Wilbur Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-20"
        >
          {/* Left Column: Tag and Main Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-cyan-400" />
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight uppercase leading-[1.1] text-neutral-950 dark:text-white">
              BUILDING SCALABLE DIGITAL SOLUTIONS FOR FUTURE-FOCUSED ENTERPRISES
            </h2>
          </div>

          {/* Right Column: Narrative statement */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-8 space-y-6">
            <p className="text-sm sm:text-base lg:text-lg font-medium tracking-wide uppercase leading-relaxed text-neutral-600 dark:text-neutral-300">
              WE BLEND ENGINEERING PRECISION, ARTIFICIAL INTELLIGENCE, AND
              CLOUD ARCHITECTURE TO BUILD DIGITAL PLATFORMS THAT DRIVE MEASURABLE
              EFFICIENCY AND COMPOUNDING BUSINESS MOMENTUM.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200 dark:border-neutral-800">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <span className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white block">
                  12+ Yrs
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                  Engineering Track Record
                </span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <span className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white block">
                  45+
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                  Principal Architects & Devs
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Visual Cards Row: Faithful to Wilbur's side-by-side photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Card: Engineering Studio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5 relative rounded-3xl overflow-hidden bg-neutral-900 min-h-[420px] lg:min-h-[520px] group shadow-xl"
          >
            <Image
              src="/assets/engineers-team.jpg"
              alt="Valence Software Engineering Team"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center brightness-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            {/* Card Content Badge */}
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase border border-white/20"
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-emerald-400 inline-block"
                />
                <span>Active Squads Deployed</span>
              </motion.div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                Trusted Enterprise Engineering
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Dedicated squads of principal engineers building resilient backends,
                fault-tolerant microservices, and reactive web applications.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Impact & Architecture Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-7 flex flex-col justify-between rounded-3xl p-8 sm:p-10 lg:p-14 bg-neutral-950 text-white relative overflow-hidden shadow-xl"
          >
            {/* Ambient backdrop glow */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="relative z-10 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
                OUR COMMITMENT
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight leading-snug">
                Creating Long-Term Performance & Zero Technical Debt
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                We reject brittle band-aids. Every repository, pipeline, and container
                cluster we architect is engineered to handle 10x traffic expansion,
                comprehensive test suites, and seamless developer onboarding.
              </p>
            </div>

            {/* Checklist of Engineering Guarantees */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 mt-8 border-t border-neutral-800">
              {[
                {
                  icon: CheckCircle2,
                  title: "Full IP Ownership",
                  desc: "100% of code, repos, and cloud keys belong to you.",
                },
                {
                  icon: ShieldCheck,
                  title: "Zero-Trust Security",
                  desc: "SOC2, HIPAA, and GDPR compliant practices built-in.",
                },
                {
                  icon: Zap,
                  title: "Predictable Sprints",
                  desc: "Weekly demonstrable releases with clear KPI tracking.",
                },
                {
                  icon: CheckCircle2,
                  title: "Continuous Uptime",
                  desc: "99.9% availability SLAs with automated self-healing.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-sm sm:text-base font-semibold block text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs text-neutral-400">{item.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
