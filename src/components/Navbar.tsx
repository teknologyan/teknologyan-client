"use client";

import Link from "next/link";
import Container from "./ui/Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md text-white z-50 border-b border-white/10">
      <Container>
        <div className="flex justify-between items-center py-4">

          {/* BRAND */}
          <Link href="#home" className="text-xl font-bold tracking-wide cursor-pointer">
            Teknologyan
          </Link>

          {/* MENU */}
          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <a href="#home" className="hover:text-blue-400 transition cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400 transition cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition cursor-pointer">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer"
          >
            Get Quote
          </a>

        </div>
      </Container>
    </nav>
  );
}