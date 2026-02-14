"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Container from "./ui/Container";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    location: "Chandigarh, India",
    feedback:
      "Teknologyan built our website exactly how we wanted. Fast, clean and professional work.",
  },
  {
    name: "Priya Verma",
    role: "Business Owner",
    location: "Delhi, India",
    feedback:
      "Highly recommended! Helped us improve our online presence with website and SEO.",
  },
  {
    name: "Rahul Singh",
    role: "Entrepreneur",
    location: "Mumbai, India",
    feedback:
      "Very smooth experience. Delivered everything on time with great quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-[#020617] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <Container>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-400">
            Trusted by businesses to deliver quality and results.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400 transition"
            >

              {/* Stars */}
              <div className="flex mb-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{item.feedback}”
              </p>

              {/* Client */}
              <div className="mt-6 flex items-center gap-4">

                {/* Avatar */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.role} • {item.location}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}