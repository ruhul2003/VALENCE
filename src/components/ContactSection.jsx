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
    <section id="contact" className="py-24 lg:py-36 bg-[#F8FAFC] dark:bg-[#080B11] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Wilbur Style) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white">
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight">
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
                  <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-cyan-400 dark:text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-neutral-800">
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                GUARANTEE
              </p>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
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
            <div className="relative rounded-3xl bg-[#EEF2F6]/70 dark:bg-[#0E131F] border border-gray-300/60 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-xl">
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
                    className="w-16 h-16 rounded-full bg-black text-white dark:bg-white/10 mx-auto flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                    Consultation Request Received
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-black dark:text-cyan-400">{formData.fullName}</span>. One of our Principal Software Architects will review your project brief and email you within 24 hours.
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
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-300 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#080B11] border border-gray-200/80 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#080B11] border border-gray-200/80 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your Phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#080B11] border border-gray-200/80 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  {/* Company Name & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Company Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#080B11] border border-gray-200/80 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Designation
                      </label>
                      <select
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#080B11] border border-gray-200/80 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors cursor-pointer"
                      >
                        <option value="" className="dark:bg-neutral-900">I am A....</option>
                        <option value="CTO / VP Engineering" className="dark:bg-neutral-900">CTO / VP of Engineering</option>
                        <option value="Founder / CEO" className="dark:bg-neutral-900">Founder / Chief Executive</option>
                        <option value="Product Director" className="dark:bg-neutral-900">Head of Product / Director</option>
                        <option value="Lead Architect" className="dark:bg-neutral-900">Lead Architect / Manager</option>
                        <option value="Other" className="dark:bg-neutral-900">Other Executive</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter your Project Details (e.g. system requirements, tech stack, timeline) ...."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white dark:bg-[#080B11] border border-gray-200/80 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  {/* Submit Button (Matching Wilbur's pill button) */}
                  <div className="flex justify-end pt-2">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      className="group rounded-full bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 px-8 py-4 text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-xl cursor-pointer"
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
