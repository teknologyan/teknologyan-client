"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisibleRef = useRef(false);

  // START SLIDER
  const startSlider = () => {
    if (intervalRef.current || !isVisibleRef.current) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // STOP SLIDER
  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // HANDLE VISIBILITY OF HERO (IMPORTANT FIX)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startSlider();
        } else {
          stopSlider();
        }
      },
      { threshold: 0.6 } // 60% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      stopSlider();
    };
  }, []);

  // HANDLE TAB SWITCH
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        stopSlider();
      } else if (isVisibleRef.current) {
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
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black"
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
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl 
            bg-gradient-to-r from-blue-600 to-purple-600 
            text-white font-medium overflow-hidden
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
            <span className="relative">Get Free Consultation</span>
          </a>

          <a
            href="#why-us"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl 
            border border-white/10 text-gray-300 font-medium 
            backdrop-blur-md
            transition-all duration-300
            hover:border-white/30 hover:text-white
            hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Why Us ?
          </a>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
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