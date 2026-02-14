import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="relative text-white pt-20 pb-10 overflow-hidden">

      {/* Base background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Glow (same design system) */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-[20%] w-72 h-72 bg-blue-500/15 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-purple-500/15 blur-3xl rounded-full"></div>

      </div>

      {/* Gloss layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

      <Container>
        <div className="relative grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold gold-text gold-glow">
              Teknologyan
            </h3>

            <p className="mt-4 text-gray-400">
              Helping businesses build scalable digital products, websites and applications.
            </p>

            {/* Trust line */}
            <p className="mt-4 text-sm text-gray-500">
              Reliable • Scalable • Affordable
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Contact
            </h4>

            <p className="text-gray-400">
                Email:{" "}
                <a
                    href="mailto:@teknologyan@gmail.com"
                    className="hover:text-white cursor-pointer transition"
                >
                    teknologyan@gmail.com
                </a>
            </p>
            <p className="text-gray-400 mt-2">
                Phone:{" "}
                <a
                    href="tel:+918873649472"
                    className="hover:text-white cursor-pointer transition"
                >
                    +91 8873649472
                </a>
            </p>
            <p className="text-gray-400 mt-2">
                Phone:{" "}
                <a
                    href="tel:+917302434397"
                    className="hover:text-white cursor-pointer transition"
                >
                    +91 7302434397
                </a>
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition"
            >
              Get Free Consultation →
            </a>
          </div>

        </div>

        {/* Bottom line */}
        <div className="relative border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Teknologyan. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}