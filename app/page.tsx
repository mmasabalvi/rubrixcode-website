import type { Metadata } from "next";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TrustTestimonials from "@/components/TrustTestimonials";
import WhyUs from "@/components/WhyUs";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Agency Pakistan for Startup Product Launches",
  description:
    "RubrixCode is a digital agency in Pakistan helping startups build web, app, UI/UX, blockchain, and growth systems with one product team.",
  alternates: {
    canonical: "/"
  }
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema()
        ]}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <BlogSection />
        <TrustTestimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
