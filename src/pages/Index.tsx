import React from "react";
import { Header } from "@/components/Layout/Header";
import { HeroSection } from "@/components/Sections/HeroSection";
import { Footer } from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
