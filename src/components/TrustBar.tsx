export default function TrustBar() {
  return (
    <section className="relative py-6 overflow-hidden text-white">

      {/* Base background (same as before) */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Soft blurred glow (DSLR effect) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40px] left-[20%] w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-40px] right-[20%] w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Subtle glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

      {/* Border lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10"></div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/10"></div>

      {/* Content (same as yours) */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

        <span className="hover:text-white transition">✔ Fast Delivery</span>
        <span className="hover:text-white transition">✔ Affordable Pricing</span>
        <span className="hover:text-white transition">✔ Direct Communication</span>
        <span className="hover:text-white transition">✔ 100% Custom Solutions</span>

      </div>
    </section>
    
  );
}