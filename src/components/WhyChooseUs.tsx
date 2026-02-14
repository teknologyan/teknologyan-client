"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Container from "./ui/Container";


const features = [
  {
    title: "Direct Communication",
    description: "Work directly with the developer. No middleman, no delays.",
    icon: "💬",
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround with clean and scalable code.",
    icon: "⚡",
  },
  {
    title: "Affordable Pricing",
    description: "Premium solutions at startup-friendly pricing.",
    icon: "💰",
  },
  {
    title: "Custom Solutions",
    description: "Every project is tailored to your business needs.",
    icon: "🧠",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0b1120]" />

      {/* Subtle gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />

      <Container>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold">
            Why Work With Us?
          </h2>

          <p className="mt-4 text-gray-400">
            Delivering reliable, scalable and high-quality solutions tailored to your business.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            >
              {/* Inner Card */}
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                hover:bg-white/10 transition overflow-hidden">

                {/* Gloss Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-2xl rotate-45"></div>
                </div>

                {/* Accent */}
                <div className="h-1 w-10 bg-blue-400 mb-4 rounded group-hover:w-16 transition-all"></div>

                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}