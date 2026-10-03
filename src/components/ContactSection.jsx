"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      // keep submitted state visible
    }, 400);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#F8FAFC] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header Row (Wilbur Style) */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-neutral-950">
            WE&apos;RE HERE TO LISTEN AND SCALE WITH YOU.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Benefits & Value Prop */}
          <div className="lg:col-span-5 space-y-8 pt-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 leading-tight">
              ACCELERATE YOUR SOFTWARE ROADMAP AT ZERO RISK!
            </h3>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-neutral-800">
                  Request A Free Technical Consultation
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-neutral-800">
                  Get A Tailored Solution Architecture Plan
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-neutral-800">
                  Connect Directly With Our Principal Engineers
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                GUARANTEE
              </p>
              <p className="text-sm text-neutral-600 mt-1">
                Strict NDA signed prior to any technical disclosure. No sales pressure, only actionable architecture guidance.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Wilbur Card Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#EEF2F6]/70 border border-gray-300/60 p-6 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-black text-white mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight text-neutral-950">
                    Consultation Request Received
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-black">{formData.fullName}</span>. One of our Principal Software Architects will review your project brief and email you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        companyName: "",
                        designation: "",
                        projectDetails: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200/80 focus:border-black focus:outline-none text-sm text-neutral-900 transition-colors placeholder:text-neutral-400"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200/80 focus:border-black focus:outline-none text-sm text-neutral-900 transition-colors placeholder:text-neutral-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your Phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200/80 focus:border-black focus:outline-none text-sm text-neutral-900 transition-colors placeholder:text-neutral-400"
                      />
                    </div>
                  </div>

                  {/* Company Name & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Company Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200/80 focus:border-black focus:outline-none text-sm text-neutral-900 transition-colors placeholder:text-neutral-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Designation
                      </label>
                      <select
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200/80 focus:border-black focus:outline-none text-sm text-neutral-900 transition-colors cursor-pointer"
                      >
                        <option value="">I am A....</option>
                        <option value="CTO / VP Engineering">CTO / VP of Engineering</option>
                        <option value="Founder / CEO">Founder / Chief Executive</option>
                        <option value="Product Director">Head of Product / Director</option>
                        <option value="Engineering Manager">Lead Architect / Manager</option>
                        <option value="Other">Other Executive</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter your Project Details (e.g. system requirements, tech stack, timeline) ...."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white border border-gray-200/80 focus:border-black focus:outline-none text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 resize-none"
                    />
                  </div>

                  {/* Submit Button (Matching Wilbur's black pill button) */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="group rounded-full bg-black text-white hover:bg-neutral-800 px-8 py-4 text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      <span>Lets contact</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
