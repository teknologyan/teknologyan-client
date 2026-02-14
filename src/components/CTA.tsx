export default function CTA() {
  return (
    <section className="relative py-8 text-white overflow-hidden text-center">

      {/* Base background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Glow (same as TrustBar) */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      </div>

      {/* Gloss layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-2xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          Ready to Build Your Project?
        </h2>

        <p className="mt-4 text-gray-400">
          Let's discuss how we can help your business grow.
        </p>

      </div>

    </section>
  );
}