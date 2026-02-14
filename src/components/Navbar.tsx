"use client";

import Link from "next/link";
import Container from "./ui/Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 text-white">

      {/* Glass background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-white/10"></div>

      <Container>
        <div className="relative flex items-center justify-between py-4">

          {/* LEFT: Logo */}
          <a href="#home" className="text-xl font-bold gold-text cursor-pointer">
            Teknologyan
          </a>

          {/* CENTER: Nav Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm">

            <a href="#home" className="hover:text-white/80 transition cursor-pointer">
              Home
            </a>

            <a href="#services" className="hover:text-white/80 transition cursor-pointer">
              Services
            </a>

            <a href="#about" className="hover:text-white/80 transition cursor-pointer">
              About
            </a>

            <a href="#contact" className="hover:text-white/80 transition cursor-pointer">
              Contact
            </a>

          </div>

          {/* RIGHT: CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 rounded-lg 
            bg-gradient-to-r from-blue-600 to-purple-600 
            text-white text-sm font-medium 
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Get Quote
          </a>

        </div>
      </Container>
    </nav>
  );
}