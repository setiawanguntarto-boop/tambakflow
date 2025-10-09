import React from "react";
import { Header } from "@/components/Layout/Header";
import { FeaturesSection } from "@/components/Sections/FeaturesSection";
import { Footer } from "@/components/Layout/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
