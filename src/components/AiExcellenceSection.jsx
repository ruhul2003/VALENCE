"use client";

import Image from "next/image";

export default function AiExcellenceSection() {
  return (
    <section
      id="ai-excellence"
      className="py-24 lg:py-36 bg-gradient-to-b from-[#F8FAFC] via-[#EDF4FA] to-[#F8FAFC] relative overflow-hidden border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Subtle Section Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>AI COGNITIVE ARCHITECTURE</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
            AUTONOMOUS COGNITION AT ENTERPRISE SCALE
          </h2>
        </div>

        {/* 4-Corner Layout with Center Glowing Neural Brain (Replicating Wilbur's exact design) */}
        <div className="relative min-h-[500px] lg:min-h-[640px] flex items-center justify-center">
          
          {/* Top-Left Node */}
          <div className="absolute top-0 left-0 max-w-[260px] text-left space-y-1">
            <span className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase block">
              MACHINE LEARNING
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              SELF-IMPROVING ALGORITHMS
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              Neural models that continuously calibrate based on telemetry, user intent, and operational outcomes.
            </p>
          </div>

          {/* Top-Right Node */}
          <div className="absolute top-0 right-0 max-w-[260px] text-right space-y-1">
            <span className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase block">
              ADVANTAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              COMPETITIVE EDGE
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              Sub-15 millisecond private inference and zero data-leakage enterprise agent pipelines.
            </p>
          </div>

          {/* Bottom-Left Node */}
          <div className="absolute bottom-0 left-0 max-w-[260px] text-left space-y-1">
            <span className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase block">
              AI EVOLVES
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              FUTURE PROOF ARCHITECTURE
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              Decoupled model routers allowing you to hot-swap between Claude, OpenAI, and open-weight models.
            </p>
          </div>

          {/* Bottom-Right Node */}
          <div className="absolute bottom-0 right-0 max-w-[260px] text-right space-y-1">
            <span className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase block">
              AI CUSTOMIZES
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              PERSONALIZED INTELLIGENCE
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              Context-aware embeddings tailored to your exact domain datasets, workflows, and security tiers.
            </p>
          </div>

          {/* Center Glowing 3D Brain Visual */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] flex items-center justify-center">
            {/* Glowing Pulse Rings */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-subtle pointer-events-none" />
            <div className="absolute inset-6 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />

            {/* Neural Brain Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-700 hover:scale-105">
              <Image
                src="/assets/neural-brain.jpg"
                alt="Autonomous Neural Network Intelligence"
                fill
                sizes="(max-width: 768px) 300px, 440px"
                className="object-contain object-center drop-shadow-[0_20px_50px_rgba(6,182,212,0.35)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
