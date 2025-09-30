import React from "react";
import { Header } from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, MapPin, Droplets, Fish } from "lucide-react";

const DashboardCard = ({ 
  title, 
  status, 
  statusColor, 
  metrics, 
  alert 
}: { 
  title: string; 
  status: string; 
  statusColor: "green" | "red" | "blue";
  metrics: Array<{ label: string; value: string }>;
  alert?: string;
}) => {
  const statusColors = {
    green: "bg-emerald-100 text-emerald-800 border-emerald-200",
    red: "bg-red-100 text-red-800 border-red-200", 
    blue: "bg-blue-100 text-blue-800 border-blue-200"
  };

  return (
    <Card className="p-6 hover:shadow-ocean transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-primary">{title}</h3>
        <Badge className={`${statusColors[statusColor]} border`}>
          {status}
        </Badge>
      </div>
      
      {alert && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-medium">{alert}</p>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {metric.label}
            </p>
            <p className="text-xl font-bold text-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full group">
        Lihat Detail
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
};

const Dashboard = () => {
  const tambakData = [
    {
      title: "Tambak Mutiara - A1",
      status: "Stabil",
      statusColor: "green" as const,
      metrics: [
        { label: "DOC", value: "75" },
        { label: "SR", value: "95.0 %" },
        { label: "ABW", value: "15.1 gr" },
        { label: "FCR", value: "1.45" }
      ]
    },
    {
      title: "Jaya Makmur - A2", 
      status: "Perlu Perhatian!",
      statusColor: "red" as const,
      alert: "pH Pagi: 6.9 - Perlu monitoring ketat",
      metrics: [
        { label: "DOC", value: "42" },
        { label: "SR", value: "92.3 %" },
        { label: "ABW", value: "8.7 gr" },
        { label: "pH Pagi", value: "6.9" }
      ]
    },
    {
      title: "Bintang Timur - B1",
      status: "Stabil", 
      statusColor: "green" as const,
      metrics: [
        { label: "DOC", value: "55" },
        { label: "SR", value: "94.2 %" },
        { label: "ABW", value: "12.3 gr" },
        { label: "FCR", value: "1.51" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Dasbor Aplikasi Tambakflow
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sistem monitoring tambak terintegrasi - dari laporan WhatsApp teknisi hingga 
            dashboard monitoring manajer
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Mobile WhatsApp Interface */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Sisi Teknisi Lapangan (Ponsel)
              </h2>
              <p className="text-muted-foreground">
                Teknisi melaporkan data harian untuk tambak <span className="font-semibold text-red-600">Jaya Makmur - A2</span> via WhatsApp.
              </p>
            </div>
            
            {/* WhatsApp Mockup */}
            <div className="max-w-sm mx-auto">
              <Card className="bg-gradient-to-b from-emerald-600 to-emerald-700 text-white p-4 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Tf</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tambakflow</h3>
                    <p className="text-xs text-emerald-100">online</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gray-50 p-4 rounded-b-2xl border-t-0 min-h-[300px]">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">Hari ini</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Selamat pagi! Silakan input data kualitas air pagi untuk kolam A2:</p>
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm">DO: 5.2 mg/L<br/>pH: 6.9<br/>Suhu: 29°C</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">⚠️ pH rendah terdeteksi! Pastikan monitoring ketat dan laporkan jika ada perubahan.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side - Web Dashboard */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Sisi Manajer (Web Dashboard)
              </h2>
              <p className="text-muted-foreground">
                Manajer memantau semua siklus dan bisa klik untuk melihat detail.
              </p>
            </div>

            <Card className="p-6 bg-gradient-card border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Dasbor Monitoring</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-background rounded-lg">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-sm font-medium">3 Tambak</p>
                  <p className="text-xs text-muted-foreground">Aktif</p>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <Fish className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-sm font-medium">172 DOC</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <Droplets className="h-6 w-6 text-emerald-600 mx-auto mb-1" />
                  <p className="text-sm font-medium">93.8%</p>
                  <p className="text-xs text-muted-foreground">SR Rata-rata</p>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-sm font-medium">1.47</p>
                  <p className="text-xs text-muted-foreground">FCR Rata-rata</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Dashboard Cards Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Rangkuman Siklus Tambak
            </h2>
            <p className="text-muted-foreground">
              Monitor semua tambak dan siklus produksi dalam satu dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tambakData.map((tambak, index) => (
              <DashboardCard
                key={index}
                title={tambak.title}
                status={tambak.status}
                statusColor={tambak.statusColor}
                metrics={tambak.metrics}
                alert={tambak.alert}
              />
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/">
              ← Kembali ke Halaman Utama
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;