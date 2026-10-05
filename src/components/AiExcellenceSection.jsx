"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AiExcellenceSection() {
  return (
    <section
      id="ai-excellence"
      className="py-24 lg:py-36 bg-gradient-to-b from-[#F8FAFC] via-[#EDF4FA] to-[#F8FAFC] relative overflow-hidden border-t border-gray-200"
    >
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Section Tag with Live Telemetry Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>AI COGNITIVE ARCHITECTURE</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Telemetry: 12.4ms latency</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950">
            AUTONOMOUS COGNITION AT ENTERPRISE SCALE
          </h2>
        </motion.div>

        {/* 4-Corner Layout with Center Glowing Neural Brain (Replicating Wilbur's exact design) */}
        <div className="relative min-h-[580px] lg:min-h-[720px] xl:min-h-[760px] flex items-center justify-center">
          
          {/* Top-Left Node */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="absolute top-0 left-0 max-w-[320px] xl:max-w-[360px] text-left space-y-2 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:border-gray-200/80 border border-transparent cursor-pointer"
          >
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              MACHINE LEARNING
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              SELF-IMPROVING ALGORITHMS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Neural models that continuously calibrate based on telemetry, user intent, and operational outcomes.
            </p>
          </motion.div>

          {/* Top-Right Node */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="absolute top-0 right-0 max-w-[320px] xl:max-w-[360px] text-right space-y-2 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:border-gray-200/80 border border-transparent cursor-pointer"
          >
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              ADVANTAGE
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              COMPETITIVE EDGE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Sub-15 millisecond private inference and zero data-leakage enterprise agent pipelines.
            </p>
          </motion.div>

          {/* Bottom-Left Node */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="absolute bottom-0 left-0 max-w-[320px] xl:max-w-[360px] text-left space-y-2 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:border-gray-200/80 border border-transparent cursor-pointer"
          >
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              AI EVOLVES
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              FUTURE PROOF ARCHITECTURE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Decoupled model routers allowing you to hot-swap between Claude, OpenAI, and open-weight models.
            </p>
          </motion.div>

          {/* Bottom-Right Node */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="absolute bottom-0 right-0 max-w-[320px] xl:max-w-[360px] text-right space-y-2 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:border-gray-200/80 border border-transparent cursor-pointer"
          >
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              AI CUSTOMIZES
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              PERSONALIZED INTELLIGENCE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Context-aware embeddings tailored to your exact domain datasets, workflows, and security tiers.
            </p>
          </motion.div>

          {/* Center Glowing 3D Brain Visual with Floating Framer Motion */}
          <motion.div
            animate={{
              y: [0, -16, 0],
              rotate: [0, 1.2, 0, -1.2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
            }}
            className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[540px] xl:h-[540px] flex items-center justify-center cursor-pointer"
          >
            {/* Rotating Neural Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-[-15px] sm:inset-[-25px] rounded-full border border-dashed border-cyan-400/30 pointer-events-none"
            />

            {/* Expanding Radar Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-cyan-400/50 pointer-events-none"
            />

            {/* Glowing Pulse Rings */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl pointer-events-none"
            />
            <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

            {/* Neural Brain Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-700 hover:scale-105">
              <Image
                src="/assets/neural-brain.jpg"
                alt="Autonomous Neural Network Intelligence"
                fill
                sizes="(max-width: 768px) 320px, 540px"
                className="object-contain object-center drop-shadow-[0_25px_60px_rgba(6,182,212,0.4)]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
