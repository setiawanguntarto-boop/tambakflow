import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tambakflow.jpg";
export const HeroSection = () => {
  return <section id="home" className="relative text-primary-foreground text-center py-20 md:py-32 min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `linear-gradient(135deg, hsl(var(--primary-dark) / 0.9), hsl(var(--primary) / 0.8)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Disiplin Data Harian,{" "}
            <span className="text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Panen Optimal
            </span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
            Budidaya vaname gagal efisien bukan karena kurang alat, tetapi karena disiplin data harian rapuh. 
            Tambakflow menangkap data inti di titik kejadian, mengubahnya menjadi keputusan harian, dan 
            membatasi informasi sesuai peran agar setiap orang fokus pada tugasnya.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://api.whatsapp.com/send/?phone=62881024280794&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Coba Versi Demo</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://youtu.be/GZgQxegbHnw" target="_blank" rel="noopener noreferrer">Lihat Tutorial</a>
            </Button>
          </div>
          
          <p className="mt-8 text-accent-light text-sm md:text-base">
            Powered by{" "}
            <span className="font-semibold text-accent">Naraflow</span> — WhatsApp-first workflow & data engine
          </p>
        </div>
      </div>
      
    </section>;
};