import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Bell, BarChart3, Package, Shield } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, badge, icon }: FeatureCardProps) => (
  <Card className="bg-background p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.10)] transition-all duration-500 transform hover:-translate-y-2 group flex flex-col">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
    </div>
    <div className="flex-grow">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
          {title}
        </h4>
        {badge && (
          <Badge className="bg-primary/10 text-primary text-xs font-semibold border-primary/20 flex-shrink-0">
            {badge}
          </Badge>
        )}
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </Card>
);

export const FeaturesSection = () => {
  const features = [
    {
      title: "Manajemen Tim & Hak Akses",
      description: "Atur peran dan hak akses untuk setiap anggota tim—teknisi, manajer, atau pemilik—memastikan data yang tepat sampai ke orang yang tepat.",
      badge: "Role-based",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Pencatatan Awal Siklus",
      description: "Catat semua data penting di awal—mulai dari asal benur, jumlah tebar, hingga data kolam—untuk menciptakan rekam jejak digital yang rapi.",
      badge: "Setup",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Monitoring Harian & Peringatan Dini",
      description: "Input data kualitas air, pakan, dan mortalitas harian via WhatsApp. Sistem akan memvalidasi dan memberi peringatan instan jika ada anomali.",
      badge: "Real-time",
      icon: <Bell className="w-8 h-8" />
    },
    {
      title: "Analisis Pertumbuhan Mingguan",
      description: "Cukup input data sampling bobot udang, sistem akan otomatis menghitung laju pertumbuhan, estimasi biomassa, dan rekomendasi pakan.",
      badge: "Analytics",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Manajemen Panen & Ketertelusuran",
      description: "Catat hasil panen, lampirkan bukti nota timbang, dan dapatkan laporan panen otomatis untuk evaluasi kinerja serta transparansi data.",
      badge: "Traceability",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Evaluasi Kinerja & Laporan KPI",
      description: "Saat siklus berakhir, sistem langsung menghitung KPI final seperti FCR dan SR, lalu mengirimkan laporan komprehensif untuk perbaikan.",
      badge: "KPI",
      icon: <Shield className="w-8 h-8" />
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Fitur Unggulan Tambakflow
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Sistem komprehensif untuk mengelola seluruh siklus budidaya udang vaname dengan teknologi WhatsApp-first yang intuitif.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};