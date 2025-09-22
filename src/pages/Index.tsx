import React from "react";
import { Header } from "@/components/Layout/Header";
import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutSection } from "@/components/Sections/AboutSection";
import { FeaturesSection } from "@/components/Sections/FeaturesSection";
import { WorkflowSection } from "@/components/Sections/WorkflowSection";
import { Footer } from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WorkflowSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
