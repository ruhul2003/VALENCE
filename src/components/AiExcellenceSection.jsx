"use client";

import Image from "next/image";

export default function AiExcellenceSection() {
  return (
    <section
      id="ai-excellence"
      className="py-24 lg:py-36 bg-gradient-to-b from-[#F8FAFC] via-[#EDF4FA] to-[#F8FAFC] relative overflow-hidden border-t border-gray-200"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Subtle Section Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>AI COGNITIVE ARCHITECTURE</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950">
            AUTONOMOUS COGNITION AT ENTERPRISE SCALE
          </h2>
        </div>

        {/* 4-Corner Layout with Center Glowing Neural Brain (Replicating Wilbur's exact design) */}
        <div className="relative min-h-[580px] lg:min-h-[720px] xl:min-h-[760px] flex items-center justify-center">
          
          {/* Top-Left Node */}
          <div className="absolute top-0 left-0 max-w-[320px] xl:max-w-[360px] text-left space-y-2">
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              MACHINE LEARNING
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              SELF-IMPROVING ALGORITHMS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Neural models that continuously calibrate based on telemetry, user intent, and operational outcomes.
            </p>
          </div>

          {/* Top-Right Node */}
          <div className="absolute top-0 right-0 max-w-[320px] xl:max-w-[360px] text-right space-y-2">
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              ADVANTAGE
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              COMPETITIVE EDGE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Sub-15 millisecond private inference and zero data-leakage enterprise agent pipelines.
            </p>
          </div>

          {/* Bottom-Left Node */}
          <div className="absolute bottom-0 left-0 max-w-[320px] xl:max-w-[360px] text-left space-y-2">
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              AI EVOLVES
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              FUTURE PROOF ARCHITECTURE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Decoupled model routers allowing you to hot-swap between Claude, OpenAI, and open-weight models.
            </p>
          </div>

          {/* Bottom-Right Node */}
          <div className="absolute bottom-0 right-0 max-w-[320px] xl:max-w-[360px] text-right space-y-2">
            <span className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase block">
              AI CUSTOMIZES
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              PERSONALIZED INTELLIGENCE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 font-normal">
              Context-aware embeddings tailored to your exact domain datasets, workflows, and security tiers.
            </p>
          </div>

          {/* Center Glowing 3D Brain Visual */}
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[540px] xl:h-[540px] flex items-center justify-center">
            {/* Glowing Pulse Rings */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-3xl animate-pulse-subtle pointer-events-none" />
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
          </div>

        </div>

      </div>
    </section>
  );
}
