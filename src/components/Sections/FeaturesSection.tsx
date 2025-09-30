import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
}

const FeatureCard = ({ title, description, badge }: FeatureCardProps) => (
  <Card className="p-8 rounded-2xl bg-card/90 border border-border/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group backdrop-blur-sm">
    <div className="flex items-start justify-between mb-4">
      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors active:text-foreground focus:text-foreground">
        {title}
      </h4>
      {badge && (
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
          {badge}
        </Badge>
      )}
    </div>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </Card>
);

export const FeaturesSection = () => {
  const features = [
    {
      title: "Registrasi Role",
      description: "User didaftarkan dengan peran spesifik (Plasma, Supervisor, Manager) dan hanya menerima prompt yang relevan.",
      badge: "Role-based"
    },
    {
      title: "Registrasi Siklus",
      description: "Membuka siklus: kolam, kontrak ID, asal hatchery, jumlah & stage PL, rencana tanggal tebar — menghasilkan cycle_id unik.",
      badge: "Automated"
    },
    {
      title: "Operasional Harian",
      description: "Input DO, pH, suhu, salinitas, NH3, NO2, alkalinitas, transparansi; pakan (kg, tray%); mortalitas. Bot validasi & alert anomali.",
      badge: "Real-time"
    },
    {
      title: "Sampling Mingguan",
      description: "Supervisor input ABW & catatan kesehatan. Bot hitung ADG, SR estimasi, biomassa, dan rekomendasi feed plan.",
      badge: "Analytics"
    },
    {
      title: "Panen & Pascapanen",
      description: "Catat gross/net, size, grade. Lampirkan delivery note/nota timbang. Laporan panen otomatis untuk evaluasi & pembayaran.",
      badge: "Traceability"
    },
    {
      title: "Penutupan Siklus",
      description: "Bot hitung KPI final (FCR, SR, ADG) dan mengirim laporan akhir. Status siklus berubah menjadi Closed.",
      badge: "KPI"
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Fitur Utama Tambakflow
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Sistem komprehensif untuk mengelola seluruh siklus budidaya udang vaname 
            dengan teknologi WhatsApp-first yang mudah digunakan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};