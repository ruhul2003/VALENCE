"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#F8FAFC] border-t border-gray-200">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Wilbur Style) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
            WE&apos;RE HERE TO LISTEN AND SCALE WITH YOU.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Benefits & Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8 pt-4"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-tight">
              ACCELERATE YOUR SOFTWARE ROADMAP AT ZERO RISK!
            </h3>

            <div className="space-y-6 pt-4">
              {[
                "Request A Free Technical Consultation",
                "Get A Tailored Solution Architecture Plan",
                "Connect Directly With Our Principal Engineers",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 group-hover:text-black transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                GUARANTEE
              </p>
              <p className="text-sm sm:text-base text-neutral-600 mt-1 leading-relaxed">
                Strict NDA signed prior to any technical disclosure. No sales pressure, only actionable architecture guidance.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Wilbur Card Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-[#EEF2F6]/70 border border-gray-300/60 p-6 sm:p-10 lg:p-12 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="py-16 text-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
                    className="w-16 h-16 rounded-full bg-black text-white mx-auto flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-950">
                    Consultation Request Received
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-black">{formData.fullName}</span>. One of our Principal Software Architects will review your project brief and email you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </motion.button>
                </motion.div>
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
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      className="group rounded-full bg-black text-white hover:bg-neutral-800 px-8 py-4 text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      <span>Lets contact</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
