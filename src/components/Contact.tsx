import Container from "./ui/Container";
import Button from "./ui/Button";
export default function Contact() {

  // WhatsApp config
  const phone = "918873649472";
  const message = "Hi, I saw your website and want to discuss a project.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const email = "info@teknologyan.com"; // 👈 replace if needed
  const subject = "Project Inquiry";
  const body = "Hi, I saw your website and want to discuss a project.";
  const mailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-black text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Let’s Build Your Project 🚀
            </h2>

            <p className="mt-6 text-gray-400">
              Have an idea or need a website? Get in touch and let’s discuss how we can help your business grow.
            </p>

            {/* WhatsApp CTA */}
            <div className="flex flex-col items-start mt-6 gap-3">

                {/* Email */}
                <a
                    href={mailUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                    text-red-400 font-medium 
                    border border-transparent
                    transition-all duration-300 ease-out
                    hover:border-red-500 hover:text-red-300
                    hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                >
                    Email Us →
                </a>
                {/* WhatsApp */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                    text-green-400 font-medium 
                    border border-transparent
                    transition-all duration-300 ease-out
                    hover:border-green-500 hover:text-green-300
                    hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    >
                    WhatsApp →
                </a>
            </div>
          </div>

          {/* Form */}
        <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl 
            border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] 
            space-y-6 transition-all duration-300"
            >
        {/* Glow inside form */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>

            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORM_KEY} />
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* Name */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">Your Name</label>
                <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 
                focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                outline-none transition"
                placeholder="John Doe"
                />
            </div>

        {/* Email */}
        <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-1">Your Email</label>
            <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            outline-none transition"
            placeholder="john@example.com"
            />
        </div>

        {/* Message */}
        <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-1">Project Details</label>
            <textarea
            name="message"
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            outline-none transition resize-none"
            placeholder="Tell us about your project..."
            />
        </div>

        {/* Submit */}
        <button
            type="submit"
            className="w-full py-3 rounded-xl font-medium text-white 
            bg-gradient-to-r from-blue-600 to-purple-600 
            hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] 
            transition-all duration-300"
        >
            Send Message
        </button>

        {/* Trust note */}
        <p className="text-xs text-gray-500 text-center">
            We usually respond within few hours.
        </p>
        </form>

        </div>
      </Container>
    </section>
  );
}