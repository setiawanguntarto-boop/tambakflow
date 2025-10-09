import React from "react";
import { Header } from "@/components/Layout/Header";
import { WorkflowSection } from "@/components/Sections/WorkflowSection";
import { Footer } from "@/components/Layout/Footer";

const Workflow = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <WorkflowSection />
      </main>
      <Footer />
    </div>
  );
};

export default Workflow;
