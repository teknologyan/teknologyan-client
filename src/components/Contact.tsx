import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-black text-white">
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
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="inline-block mt-6 text-green-400 font-medium"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORM_KEY} />
            <input type="checkbox" name="botcheck" className="hidden" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
              required
            />

            <Button className="w-full">
              Send Message
            </Button>
          </form>

        </div>
      </Container>
    </section>
  );
}