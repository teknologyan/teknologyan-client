"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Container from "./ui/Container";
import BackgroundNetwork from "./ui/BackgroundNetwork";

const services = [
  { title: "Website Development", description: "Fast, modern and SEO-friendly websites." },
  { title: "Web Applications", description: "Custom dashboards and scalable apps." },
  { title: "SEO Optimization", description: "Improve ranking and traffic." },
  { title: "Business Digitization", description: "Take your business online." },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen flex items-center py-20 overflow-hidden text-white bg-black">

      <BackgroundNetwork />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-400">
            We help businesses build and scale digital products.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="transform-gpu will-change-transform p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}