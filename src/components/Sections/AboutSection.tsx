import React from "react";
import { Card } from "@/components/ui/card";

const InfoCard = ({ title, text }: { title: string; text: string }) => (
  <Card className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
    <h4 className="text-xl font-semibold text-primary mb-3">{title}</h4>
    <p className="text-muted-foreground leading-relaxed">{text}</p>
  </Card>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Tentang Tambakflow
          </h3>
          <p className="text-foreground max-w-5xl mx-auto leading-relaxed text-lg">
            Secara bisnis, menurunkan FCR{" "}
            <span className="font-semibold text-accent">0,10</span> pada biomassa{" "}
            <span className="font-semibold text-accent">10 ton</span> dengan harga pakan{" "}
            <span className="font-semibold text-accent">Rp14.000/kg</span> sudah menghemat sekitar{" "}
            <span className="font-semibold text-accent">Rp14 juta per siklus</span>. 
            Menjaga SR naik 3–7 poin dan ADG stabil memperlebar margin tanpa menambah biaya struktur. 
            Traceability rapi mempercepat pembayaran (DSO) dan membuka akses buyer/financier yang menuntut data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard 
            title="Menangkap Data Inti" 
            text="Kualitas air, pakan, mortalitas, sampling — dicatat tepat di titik kejadian melalui WhatsApp." 
          />
          <InfoCard 
            title="Keputusan Harian" 
            text="Bot memberi alert + saran praktis: target pakan, tindakan korektif, dan rekomendasi panen." 
          />
          <InfoCard 
            title="Informasi per Peran" 
            text="Plasma melihat instruksi harian, Supervisor melihat tren & penyesuaian pakan, Manager fokus KPI & panen." 
          />
        </div>
      </div>
    </section>
  );
};