import React from "react";
import { Header } from "@/components/Layout/Header";
import { HeroSection } from "@/components/Sections/HeroSection";
import { Footer } from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
