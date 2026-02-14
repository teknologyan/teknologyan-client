"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const slides = [
  {
    title: "Web Development",
    highlight: "for Businesses",
    subtitle:
      "Modern, fast and SEO-friendly websites that help you grow online.",
  },
  {
    title: "Custom Web Applications",
    highlight: "Built for Scale",
    subtitle:
      "Scalable dashboards and web apps tailored to your business needs.",
  },
  {
    title: "SEO & Digital Growth",
    highlight: "Get More Clients",
    subtitle:
      "Improve your Google ranking and generate consistent leads.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    stopSlider(); // prevent duplicate intervals
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start on mount
  useEffect(() => {
    startSlider();

    return () => stopSlider();
  }, []);

  // Handle tab visibility (FIXED)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        stopSlider();
      } else {
        startSlider();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-black"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {slides[index].title}{" "}
              <span className="gold-text gold-glow">
                {slides[index].highlight}
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              {slides[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <a href="#contact">
            <Button>Get Free Consultation</Button>
          </a>

          <a href="#why-us">
            <Button variant="secondary"> Why Us?</Button>
          </a>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                startSlider(); // restart timer on manual click
              }}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-blue-500" : "w-4 bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}