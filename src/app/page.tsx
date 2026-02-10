import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-5xl" />
        <Features />
        <div className="section-divider mx-auto max-w-5xl" />
        <Security />
        <div className="section-divider mx-auto max-w-5xl" />
        <HowItWorks />
        <div className="section-divider mx-auto max-w-5xl" />
        <Pricing />
        <div className="section-divider mx-auto max-w-5xl" />
        <Testimonials />
        <div className="section-divider mx-auto max-w-5xl" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
