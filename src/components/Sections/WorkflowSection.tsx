import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const WorkflowStep = ({ 
  step, 
  title, 
  description, 
  items 
}: { 
  step: number; 
  title: string; 
  description: string; 
  items: string[]; 
}) => (
  <Card className="p-6 shadow-card bg-gradient-card border-accent/20 hover:shadow-ocean transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <Badge className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-base">
        {step}
      </Badge>
      <h4 className="text-lg font-semibold text-primary">{title}</h4>
    </div>
    <p className="text-muted-foreground mb-4">{description}</p>
    <ul className="list-disc list-inside text-foreground space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm leading-relaxed">{item}</li>
      ))}
    </ul>
  </Card>
);

const RoleCard = ({ role, description }: { role: string; description: string }) => (
  <Card className="p-6 bg-background border-accent/30 shadow-card">
    <h5 className="text-base font-semibold text-primary mb-2">{role}</h5>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </Card>
);

export const WorkflowSection = () => {
  const workflowSteps = [
    {
      step: 1,
      title: "Supervisor: Registrasi & Siklus",
      description: "Persiapan awal dan setup siklus budidaya",
      items: [
        "Daftarkan Plasma (nama, nomor WA, kolam).",
        "Buka Siklus (pond/cycle ID, kontrak, asal hatchery, jumlah & stage PL, rencana tebar).",
        "System membuat cycle_id unik dan mengaitkan semua data ke siklus tersebut."
      ]
    },
    {
      step: 2,
      title: "Plasma: Input Harian",
      description: "Pencatatan data operasional harian via WhatsApp",
      items: [
        "Pagi: kualitas air (DO, pH, suhu, salinitas, NH₃, NO₂, alkalinitas, transparansi).",
        "Siang: pakan harian (kg, tray%).",
        "Terpicu: mortalitas (jumlah, sebab, tindakan).",
        "Bot melakukan validasi dan menandai anomali (mis. DO < 4 mg/L)."
      ]
    },
    {
      step: 3,
      title: "Supervisor & Manager: Monitoring",
      description: "Pemantauan dan intervensi berdasarkan data real-time",
      items: [
        "Menerima notifikasi bila ada anomali.",
        "Melihat tren WQ, pakan, mortalitas, dan hasil sampling mingguan (ABW, ADG, SR, biomassa).",
        "Memberi intervensi: kurangi/tambah pakan, tambah aerasi, ukur ulang, treatment (bila diperlukan)."
      ]
    },
    {
      step: 4,
      title: "Laporan (PDF)",
      description: "Dokumentasi lengkap untuk evaluasi dan pembayaran",
      items: [
        "Supervisor & Manager dapat mengunduh laporan harian/mingguan/siklus (PDF).",
        "Isi ringkas: WQ terakhir, feed vs. rencana, mortalitas, hasil sampling, alert aktif, dan KPI siklus (FCR, SR, ADG)."
      ]
    }
  ];

  const roles = [
    {
      role: "Plasma",
      description: "Fokus pada input harian yang sederhana via WhatsApp—tanpa distraksi data lain."
    },
    {
      role: "Supervisor", 
      description: "Mendaftarkan plasma, membuka siklus, mengecek tren & alert, dan memberi instruksi korektif."
    },
    {
      role: "Manager",
      description: "Memantau KPI siklus, menyetujui intervensi, serta mengunduh laporan PDF untuk evaluasi & pembayaran."
    }
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Alur Kerja (Supervisor → Plasma → Monitoring)
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Sistem workflow yang terstruktur untuk memastikan efisiensi operasional 
            dan akurasi data di setiap tahap budidaya.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              items={step.items}
            />
          ))}
        </div>

        {/* Demo PDF Download */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-gradient-card border-accent/30 shadow-ocean">
            <h4 className="text-xl font-semibold text-primary mb-4">Contoh Laporan PDF</h4>
            <p className="text-muted-foreground mb-6 max-w-md">
              Unduh contoh laporan untuk melihat format dan konten yang dihasilkan sistem.
            </p>
            <Button variant="cta" size="lg" className="mb-4">
              <Download className="mr-2 h-5 w-5" />
              Unduh Laporan PDF
            </Button>
            <p className="text-xs text-muted-foreground">
              *Tautan demo — integrasi generator PDF dapat ditambahkan saat produk siap.
            </p>
          </Card>
        </div>

        {/* Role Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              role={role.role}
              description={role.description}
            />
          ))}
        </div>

        <blockquote className="text-center text-muted-foreground italic text-lg max-w-4xl mx-auto border-l-4 border-accent pl-6">
          "Supervisor mendaftarkan plasma dan membuka siklus → Plasma input harian → 
          Supervisor/Manager memantau & intervensi bila perlu → Laporan PDF siap untuk evaluasi."
        </blockquote>
      </div>
    </section>
  );
};