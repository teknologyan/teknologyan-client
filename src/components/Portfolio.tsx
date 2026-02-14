import Container from "./ui/Container";

const projects = [
  {
    title: "Restaurant Website",
    description:
      "A modern website for a restaurant with online ordering and SEO optimization.",
    tech: "Next.js, SEO",
  },
  {
    title: "School Management System",
    description:
      "A web application to manage students, teachers and attendance.",
    tech: "React, Spring Boot",
  },
  {
    title: "E-commerce Platform",
    description:
      "An online store with payment integration and admin dashboard.",
    tech: "Next.js, Node.js",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen flex items-center py-20 text-white overflow-hidden">

  {/* Base background */}
  <div className="absolute inset-0 bg-black"></div>

  {/* Slight variation glow */}
  <div className="absolute inset-0 pointer-events-none">

    {/* Left glow (slightly lower) */}
    <div className="absolute top-[30%] left-[5%] w-80 h-80 bg-blue-500/15 blur-3xl rounded-full"></div>

    {/* Right glow (slightly higher) */}
    <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-purple-500/15 blur-3xl rounded-full"></div>

    {/* Center soft glow (NEW - important) */}
    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/5 blur-3xl rounded-full"></div>

  </div>

  {/* Slightly different gloss */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent"></div>
      <Container>

        {/* Heading */}
        <div className="relative text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Our Work
          </h2>
          <p className="mt-4 text-gray-400">
            Some of the projects we have built for businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-16 grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl 
              bg-white/5 backdrop-blur-md 
              border border-white/10 
              hover:border-blue-500 
              transition duration-300 overflow-hidden"
            >

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-2xl rounded-full"></div>
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-semibold group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-gray-400">
                {project.description}
              </p>

              {/* Tech */}
              <p className="relative mt-4 text-sm text-gray-500">
                {project.tech}
              </p>

              {/* CTA */}
              <p className="relative mt-6 text-blue-400 font-medium cursor-pointer">
                View Case Study →
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}