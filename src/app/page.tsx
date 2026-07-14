"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import FocusAreas from "@/components/FocusAreas";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AnimatedNetworkBackground = dynamic(
  () => import("@/components/AnimatedNetworkBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <AnimatedNetworkBackground />
      <div className="bg-glow" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <FocusAreas />
        <Awards />
        <Certifications />
        <Education />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
