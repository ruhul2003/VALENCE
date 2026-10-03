"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Wilbur Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
          
          {/* Left Column: Tag and Main Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-[1.12] text-neutral-950">
              BUILDING SCALABLE DIGITAL SOLUTIONS FOR FUTURE-FOCUSED ENTERPRISES
            </h2>
          </div>

          {/* Right Column: Narrative statement */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-8 space-y-6">
            <p className="text-sm sm:text-base font-medium tracking-wide uppercase leading-relaxed text-neutral-600">
              WE BLEND ENGINEERING PRECISION, ARTIFICIAL INTELLIGENCE, AND
              CLOUD ARCHITECTURE TO BUILD DIGITAL PLATFORMS THAT DRIVE MEASURABLE
              EFFICIENCY AND COMPOUNDING BUSINESS MOMENTUM.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div>
                <span className="text-2xl lg:text-3xl font-bold text-neutral-900 block">
                  12+ Yrs
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Engineering Track Record
                </span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-bold text-neutral-900 block">
                  45+
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Principal Architects & Devs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Cards Row: Faithful to Wilbur's side-by-side photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Engineering Studio */}
          <div className="md:col-span-6 lg:col-span-5 relative rounded-3xl overflow-hidden bg-neutral-900 min-h-[380px] lg:min-h-[460px] group shadow-xl">
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
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase">
                Core Capability
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Trusted Enterprise Engineering
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Dedicated squads of principal engineers building resilient backends,
                fault-tolerant microservices, and reactive web applications.
              </p>
            </div>
          </div>

          {/* Right Card: Impact & Architecture Card */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between rounded-3xl p-8 sm:p-10 lg:p-12 bg-neutral-950 text-white relative overflow-hidden shadow-xl">
            {/* Ambient backdrop glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
                OUR COMMITMENT
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-snug">
                Creating Long-Term Performance & Zero Technical Debt
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
                We reject brittle band-aids. Every repository, pipeline, and container
                cluster we architect is engineered to handle 10x traffic expansion,
                comprehensive test suites, and seamless developer onboarding.
              </p>
            </div>

            {/* Checklist of Engineering Guarantees */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-neutral-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold block text-white">Full IP Ownership</span>
                  <span className="text-xs text-neutral-400">100% of code, repos, and cloud keys belong to you.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold block text-white">Zero-Trust Security</span>
                  <span className="text-xs text-neutral-400">SOC2, HIPAA, and GDPR compliant practices built-in.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold block text-white">Predictable Sprints</span>
                  <span className="text-xs text-neutral-400">Weekly demonstrable releases with clear KPI tracking.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold block text-white">Continuous Uptime</span>
                  <span className="text-xs text-neutral-400">99.9% availability SLAs with automated self-healing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
