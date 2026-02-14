"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business requirements and goals.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We design the solution and plan the development process.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build scalable and high-quality applications.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We deliver, deploy and support your product.",
  },
];

export default function Process() {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-[#020617] text-white">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Our Process</h2>
          <p className="mt-4 text-gray-400">
            A simple and transparent process to deliver quality products.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 relative">

          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-16">

            {steps.map((step, index) => (
              <motion.div
                key={index}

                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.2, // 👈 STAGGER HERE
                  ease: [0.22, 1, 0.36, 1],
                }}

                viewport={{ once: true, margin: "-100px" }}

                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Content Card */}
                <div className="w-full md:w-1/2 p-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition">

                    <span className="text-sm text-blue-400">
                      Step {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-400">
                      {step.description}
                    </p>

                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold z-10">
                  {step.number}
                </div>

                {/* Spacer */}
                <div className="w-full md:w-1/2"></div>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}