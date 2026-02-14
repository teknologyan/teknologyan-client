import Container from "./ui/Container";

export default function About() {
  return (
    <section id="about" className="relative py-28 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-500/15 blur-3xl rounded-full"></div>
      </div>

      {/* Gloss */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

      {/* 👇 VERY IMPORTANT (ADD relative) */}
      <Container>
        <div className="relative">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              About Teknologyan
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Building modern digital solutions to help businesses grow faster in today’s competitive world.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6 text-gray-400 text-base leading-relaxed">

              <p>
                At Teknologyan, we believe that every business deserves a strong digital presence. 
                With experience working on enterprise-level projects, we bring high-quality development practices 
                to startups and growing businesses.
              </p>

              <p>
                Our focus is not just building websites, but creating scalable digital solutions that help businesses 
                attract customers, improve efficiency, and grow faster in the modern digital ecosystem.
              </p>

              <p>
                We combine modern technologies with practical business understanding to deliver solutions that are 
                reliable, affordable, and future-ready.
              </p>

              <p className="text-white font-medium">
                Our mission is simple — help businesses grow using technology.
              </p>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-6">

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-blue-400">5+</h3>
                <p className="text-gray-400 mt-2 text-sm">Years Experience</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-purple-400">10+</h3>
                <p className="text-gray-400 mt-2 text-sm">Projects Delivered</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-green-400">Global</h3>
                <p className="text-gray-400 mt-2 text-sm">Clients</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-yellow-400">12h</h3>
                <p className="text-gray-400 mt-2 text-sm">Response Time</p>
              </div>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
}