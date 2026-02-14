import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTA from "@/components/CTA";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}