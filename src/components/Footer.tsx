import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="relative text-white mt-0.5">

      {/* Background layer */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md border-t border-white/10" />

      <Container>
        <div className="relative py-8">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold tracking-wide">
                Teknologyan
              </h3>

              <p className="mt-4 text-gray-400">
                Helping businesses build scalable digital products and grow online.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">
                Quick Links
              </h4>

              <ul className="space-y-2 text-gray-400">
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
                teknologyan@gmail.com
              </p>

              <p className="text-gray-400 mt-2">
                +91 XXXXXXXXXX
              </p>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-5 text-sm">
            © {new Date().getFullYear()} Teknologyan. All rights reserved.
          </div>

        </div>
      </Container>

    </footer>
  );
}