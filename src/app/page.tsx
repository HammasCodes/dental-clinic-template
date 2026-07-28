import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Clinic from "@/components/sections/Clinic";
import Technology from "@/components/sections/Technology";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Stats />
      <Clinic />
      <Technology />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
