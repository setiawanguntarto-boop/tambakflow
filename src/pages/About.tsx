import React from "react";
import { Header } from "@/components/Layout/Header";
import { AboutSection } from "@/components/Sections/AboutSection";
import { Footer } from "@/components/Layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
